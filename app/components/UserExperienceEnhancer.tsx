import React, { useState, useEffect } from 'react';

interface UserExperienceEnhancerProps {
  children: React.ReactNode;
  enableAccessibility?: boolean;
  enableKeyboardNavigation?: boolean;
  enableAnimations?: boolean;
  enableHoverEffects?: boolean;
  enableFocusManagement?: boolean;
  enableHighContrast?: boolean;
  enableReducedMotion?: boolean;
}

const UserExperienceEnhancer: React.FC<UserExperienceEnhancerProps> = ({
  children,
  enableAccessibility: _enableAccessibility = true,
  enableKeyboardNavigation = true,
  enableAnimations = true,
  enableHoverEffects = true,
  enableFocusManagement = true,
  enableHighContrast: _enableHighContrast = false,
  enableReducedMotion: _enableReducedMotion = false
}) => {
  const [_isHighContrast, _setIsHighContrast] = useState(_enableHighContrast);
  const [isReducedMotion, _setIsReducedMotion] = useState(_enableReducedMotion);

  // Handle keyboard navigation
  useEffect(() => {
    if (enableKeyboardNavigation) {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Tab') {
          document.body.classList.add('keyboard-navigation');
        }
      };

      const handleMouseDown = () => {
        document.body.classList.remove('keyboard-navigation');
      };

      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleMouseDown);

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('mousedown', handleMouseDown);
      };
    }
  }, [enableKeyboardNavigation]);

  // Add CSS classes for enhanced UX
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .keyboard-navigation *:focus {
        outline: 2px solid #3b82f6;
        outline-offset: 2px;
      }
      
      .reduced-motion * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
      
      .high-contrast {
        filter: contrast(1.5);
      }
      
      .high-contrast * {
        border-color: currentColor !important;
      }
    `;
    
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div 
      className={`user-experience-enhancer ${
        isReducedMotion ? 'reduced-motion' : ''
      } ${isHighContrast ? 'high-contrast' : ''}`}
    >
      {children}
    </div>
  );
};

export default UserExperienceEnhancer;
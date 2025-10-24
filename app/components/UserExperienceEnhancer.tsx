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
      .ux-enhanced {
        ${enableAnimations && !isReducedMotion ? 'transition: all 0.3s ease;' : ''}
      }
      
      .ux-enhanced button:hover {
        ${enableHoverEffects ? 'transform: translateY(-2px);' : ''}
        ${enableHoverEffects ? 'box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);' : ''}
      }
      
      .ux-enhanced input:focus,
      .ux-enhanced textarea:focus,
      .ux-enhanced select:focus {
        ${enableFocusManagement ? 'outline: 2px solid #3b82f6;' : ''}
        ${enableFocusManagement ? 'outline-offset: 2px;' : ''}
      }
      
      .keyboard-navigation *:focus {
        ${enableKeyboardNavigation ? 'outline: 2px solid #3b82f6;' : ''}
        ${enableKeyboardNavigation ? 'outline-offset: 2px;' : ''}
      }
      
      .high-contrast {
        filter: contrast(150%);
      }
      
      .reduced-motion * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, [enableAnimations, enableHoverEffects, enableFocusManagement, enableKeyboardNavigation, isReducedMotion]);

  return (
    <div className="ux-enhanced">
      {children}
    </div>
  );
};

export default UserExperienceEnhancer;
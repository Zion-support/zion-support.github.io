import React, { useState, useEffect } from 'react';

interface UserExperienceEnhancerProps {
  children: React.ReactNode;
  enableAnimations?: boolean;
  enableHoverEffects?: boolean;
  enableFocusManagement?: boolean;
  enableKeyboardNavigation?: boolean;
  enableAccessibility?: boolean;
}

const UserExperienceEnhancer: React.FC<UserExperienceEnhancerProps> = ({
  children,
  enableAnimations = true,
  enableHoverEffects = true,
  enableFocusManagement = true,
  enableKeyboardNavigation = true,
  enableAccessibility = true,
}) => {
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isHighContrast, setIsHighContrast] = useState(false);

  useEffect(() => {
    // Check for user's motion preferences
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);

    // Check for high contrast preference
    const highContrastQuery = window.matchMedia('(prefers-contrast: high)');
    setIsHighContrast(highContrastQuery.matches);

    // Apply accessibility enhancements
    if (enableAccessibility) {
      document.documentElement.setAttribute('data-accessibility-enhanced', 'true');
      
      if (isHighContrast) {
        document.documentElement.classList.add('high-contrast');
      }
      
      if (isReducedMotion) {
        document.documentElement.classList.add('reduced-motion');
      }
    }

    // Add keyboard navigation support
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
  }, [enableAccessibility, enableKeyboardNavigation, isHighContrast, isReducedMotion]);

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
        filter: contrast(150%);
      }
      
      [data-accessibility-enhanced] button:focus,
      [data-accessibility-enhanced] a:focus,
      [data-accessibility-enhanced] input:focus,
      [data-accessibility-enhanced] textarea:focus,
      [data-accessibility-enhanced] select:focus {
        outline: 2px solid #3b82f6;
        outline-offset: 2px;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div
      className={`
        ${enableAnimations && !isReducedMotion ? 'animate-fade-in' : ''}
        ${enableHoverEffects ? 'hover-effects-enabled' : ''}
        ${enableFocusManagement ? 'focus-management-enabled' : ''}
      `}
    >
      {children}
    </div>
  );
};

export default UserExperienceEnhancer;

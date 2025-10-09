'use client';
import React, { useEffect } from 'react';

interface UserExperienceEnhancerProps {
  children: React.ReactNode;
}

const UserExperienceEnhancer: React.FC<UserExperienceEnhancerProps> = ({ children }) => {
  useEffect(() => {
    // Add smooth scrolling
    const addSmoothScrolling = () => {
      document.documentElement.style.scrollBehavior = 'smooth';
    };

    // Add focus management
    const addFocusManagement = () => {
      const focusableElements = document.querySelectorAll(
        'button, a, input, textarea, select, [tabindex]:not([tabindex="-1"])'
      );
      
      focusableElements.forEach((element) => {
        element.addEventListener('focus', () => {
          element.classList.add('focus-visible');
        });
        
        element.addEventListener('blur', () => {
          element.classList.remove('focus-visible');
        });
      });
    };

    // Add keyboard navigation
    const addKeyboardNavigation = () => {
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
          document.body.classList.add('keyboard-navigation');
        }
      });

      document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation');
      });
    };

    // Add loading states
    const addLoadingStates = () => {
      const buttons = document.querySelectorAll('button[type="submit"]');
      buttons.forEach((button) => {
        button.addEventListener('click', () => {
          button.classList.add('loading');
          button.setAttribute('disabled', 'true');
        });
      });
    };

    addSmoothScrolling();
    addFocusManagement();
    addKeyboardNavigation();
    addLoadingStates();

    return () => {
      // Cleanup if needed
    };
  }, []);

  return <>{children}</>;
};

export default UserExperienceEnhancer;
// Accessibility components
import React, { useEffect, useRef, useState } from 'react';
import { Eye, EyeOff, Volume2, MousePointer, Keyboard } from 'lucide-react';
import { focusManagement, screenReaderUtils, keyboardNavigation } from './accessibilityUtils';

// High contrast mode component
export const HighContrastToggle: React.FC = () => {
  const [isHighContrast, setIsHighContrast] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('high-contrast');
    if (saved) {
      setIsHighContrast(JSON.parse(saved));
    }
  }, []);

  const toggleHighContrast = () => {
    const newValue = !isHighContrast;
    setIsHighContrast(newValue);
    localStorage.setItem('high-contrast', JSON.stringify(newValue));
    
    if (newValue) {
      document.documentElement.classList.add('high-contrast');
      screenReaderUtils.announce('High contrast mode enabled');
    } else {
      document.documentElement.classList.remove('high-contrast');
      screenReaderUtils.announce('High contrast mode disabled');
    }
  };

  return (
    <button
      onClick={toggleHighContrast}
      className="flex items-center space-x-2 px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors"
      aria-label={`${isHighContrast ? 'Disable' : 'Enable'} high contrast mode`}
    >
      {isHighContrast ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
      <span>High Contrast</span>
    </button>
  );
};

// Screen reader announcements component
export const ScreenReaderAnnouncer: React.FC<{ message: string; priority?: 'polite' | 'assertive' }> = ({ 
  message, 
  priority = 'polite' 
}) => {
  useEffect(() => {
    if (message) {
      screenReaderUtils.announce(message, priority);
    }
  }, [message, priority]);

  return null;
};

// Skip to content link
export const SkipToContent: React.FC<{ targetId: string }> = ({ targetId }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.focus();
      target.scrollIntoView();
    }
  };

  return (
    <a
      href={`#${targetId}`}
      onClick={handleClick}
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-lg z-50"
    >
      Skip to main content
    </a>
  );
};

// Focus trap wrapper
export const FocusTrap: React.FC<{ children: React.ReactNode; isActive: boolean }> = ({ 
  children, 
  isActive 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isActive && containerRef.current) {
      const cleanup = focusManagement.trapFocus(containerRef.current);
      return cleanup;
    }
  }, [isActive]);

  return (
    <div ref={containerRef} className={isActive ? 'focus-trap' : ''}>
      {children}
    </div>
  );
};

// Keyboard navigation component
export const KeyboardNavigator: React.FC<{ 
  children: React.ReactNode; 
  onNavigate?: (direction: 'up' | 'down' | 'left' | 'right') => void;
}> = ({ children, onNavigate }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (onNavigate) {
        switch (e.key) {
          case 'ArrowUp':
            onNavigate('up');
            break;
          case 'ArrowDown':
            onNavigate('down');
            break;
          case 'ArrowLeft':
            onNavigate('left');
            break;
          case 'ArrowRight':
            onNavigate('right');
            break;
        }
      } else if (itemsRef.current.length > 0) {
        const newIndex = keyboardNavigation.handleArrowKeys(e, itemsRef.current, currentIndex);
        setCurrentIndex(newIndex);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, onNavigate]);

  return (
    <div className="keyboard-navigator">
      {children}
    </div>
  );
};

// Accessibility toolbar
export const AccessibilityToolbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
        aria-label="Toggle accessibility options"
      >
        <Keyboard className="w-6 h-6" />
      </button>
      
      {isVisible && (
        <div className="absolute top-16 right-0 bg-white dark:bg-slate-800 rounded-lg shadow-lg p-4 space-y-2 min-w-48">
          <HighContrastToggle />
          <button className="flex items-center space-x-2 w-full px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors">
            <Volume2 className="w-5 h-5" />
            <span>Screen Reader</span>
          </button>
          <button className="flex items-center space-x-2 w-full px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors">
            <MousePointer className="w-5 h-5" />
            <span>Mouse Navigation</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default AccessibilityToolbar;
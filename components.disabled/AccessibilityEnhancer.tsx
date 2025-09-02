import React, { useEffect, useState } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
<<<<<<<< HEAD:components.disabled/AccessibilityEnhancer.tsx
  role?: string;
  'aria-label'?: string;
  'aria-describedby'?: string;
  'aria-expanded'?: boolean;
  'aria-controls'?: string;
  'aria-haspopup'?: boolean;
  tabIndex?: number;
  onKeyDown?: (event: React.KeyboardEvent) => void;
  className?: string;
  focusable?: boolean;
  skipToContent?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  children,
  role,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedby,
  'aria-expanded': ariaExpanded,
  'aria-controls': ariaControls,
  'aria-haspopup': ariaHaspopup,
  tabIndex,
  onKeyDown,
  className = '',
  focusable = true,
  skipToContent = false
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (skipToContent && ref.current) {
      ref.current.focus();
    }
  }, [skipToContent]);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    // Handle common keyboard interactions
    switch (event.key) {
      case 'Enter':
      case ' ':
        if (role === 'button' || role === 'link') {
          event.preventDefault();
          // Trigger click event
          const clickEvent = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window
          });
          event.currentTarget.dispatchEvent(clickEvent);
        }
        break;
      case 'Escape':
        if (ariaExpanded !== undefined) {
          // Close dropdown or modal
          event.preventDefault();
          // You can add custom close logic here
        }
        break;
      default:
        break;
    }

    // Call custom onKeyDown handler
    if (onKeyDown) {
      onKeyDown(event);
========
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState('normal');
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check for user's motion preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setReducedMotion(prefersReducedMotion);

    // Apply accessibility settings from localStorage
    const savedHighContrast = localStorage.getItem('highContrast') === 'true';
    const savedFontSize = localStorage.getItem('fontSize') || 'normal';
    
    setIsHighContrast(savedHighContrast);
    setFontSize(savedFontSize);
  }, []);

  useEffect(() => {
    // Apply high contrast mode
    if (isHighContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }

    // Apply font size
    document.documentElement.setAttribute('data-font-size', fontSize);

    // Apply reduced motion
    if (reducedMotion) {
      document.documentElement.classList.add('reduced-motion');
    } else {
      document.documentElement.classList.remove('reduced-motion');
>>>>>>>> origin/main:components/AccessibilityEnhancer.tsx
    }
  }, [isHighContrast, fontSize, reducedMotion]);

  const toggleHighContrast = () => {
    const newValue = !isHighContrast;
    setIsHighContrast(newValue);
    localStorage.setItem('highContrast', newValue.toString());
  };

<<<<<<<< HEAD:components.disabled/AccessibilityEnhancer.tsx
  const accessibilityProps = {
    role,
    'aria-label': ariaLabel,
    'aria-describedby': ariaDescribedby,
    'aria-expanded': ariaExpanded,
    'aria-controls': ariaControls,
    'aria-haspopup': ariaHaspopup,
    tabIndex: focusable ? tabIndex : -1,
    onKeyDown: handleKeyDown,
    className: `${className} ${focusable ? 'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2' : ''}`,
    ref
  };

  return (
    <div {...accessibilityProps}>
========
  const changeFontSize = (size: string) => {
    setFontSize(size);
    localStorage.setItem('fontSize', size);
  };

  return (
    <>
>>>>>>>> origin/main:components/AccessibilityEnhancer.tsx
      {children}
      <div className="accessibility-controls" style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}>
        <button
          onClick={toggleHighContrast}
          className="accessibility-btn"
          aria-label="Toggle high contrast mode"
        >
          {isHighContrast ? 'Normal Contrast' : 'High Contrast'}
        </button>
        <div className="font-size-controls">
          <button onClick={() => changeFontSize('small')}>A</button>
          <button onClick={() => changeFontSize('normal')}>A</button>
          <button onClick={() => changeFontSize('large')}>A</button>
        </div>
      </div>
    </>
  );
};

export default AccessibilityEnhancer;
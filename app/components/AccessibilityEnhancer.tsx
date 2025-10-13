<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
=======

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8b27

=======
import React from 'react';
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7665

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
interface AccessibilityEnhancerProps {
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
<<<<<<< HEAD
export default function AccessibilityEnhancer({ className = '', children }: AccessibilityEnhancerProps) {
=======
export default function Accessibilityenhancer() {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}
<<<<<<< HEAD
=======
export default function AccessibilityEnhancer({ className = '', children, ...props }: AccessibilityEnhancerProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
=======
interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    // Check for user preferences
    const mediaQueryHighContrast = window.matchMedia('(prefers-contrast: high)');
    const mediaQueryReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    setIsHighContrast(mediaQueryHighContrast.matches);
    setIsReducedMotion(mediaQueryReducedMotion.matches);

    // Listen for changes
    const handleHighContrastChange = (e: MediaQueryListEvent) => setIsHighContrast(e.matches);
    const handleReducedMotionChange = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);

    mediaQueryHighContrast.addEventListener('change', handleHighContrastChange);
    mediaQueryReducedMotion.addEventListener('change', handleReducedMotionChange);

    // Keyboard navigation enhancements
    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip to main content
      if (e.key === 'Tab' && e.shiftKey && e.target === document.body) {
        const skipLink = document.querySelector('[data-skip-to-main]') as HTMLElement;
        if (skipLink) {
          skipLink.focus();
          e.preventDefault();
        }
      }

      // Focus management for modals and dropdowns
      if (e.key === 'Escape') {
        const activeElement = document.activeElement as HTMLElement;
        if (activeElement?.closest('[role="dialog"]') || activeElement?.closest('[role="menu"]')) {
          activeElement.blur();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    // Add ARIA landmarks if missing
    const addAriaLandmarks = () => {
      const main = document.querySelector('main');
      if (!main) {
        const mainContent = document.querySelector('[role="main"]') || document.querySelector('.main-content');
        if (mainContent) {
          mainContent.setAttribute('role', 'main');
        }
      }

      // Ensure navigation has proper role
      const navs = document.querySelectorAll('nav');
      navs.forEach(nav => {
        if (!nav.getAttribute('aria-label') && !nav.getAttribute('aria-labelledby')) {
          nav.setAttribute('aria-label', 'Main navigation');
        }
      });
    };

    addAriaLandmarks();

    return () => {
      mediaQueryHighContrast.removeEventListener('change', handleHighContrastChange);
      mediaQueryReducedMotion.removeEventListener('change', handleReducedMotionChange);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    // Apply accessibility styles
    const root = document.documentElement;
    
    if (isHighContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    if (isReducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Apply font size
    root.style.setProperty('--font-size-base', `${fontSize}px`);
  }, [isHighContrast, isReducedMotion, fontSize]);

  // Skip to main content link
  const SkipToMainLink = () => (
    <a
      href="#main-content"
      data-skip-to-main
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50"
      onClick={(e) => {
        e.preventDefault();
        const main = document.querySelector('#main-content') || document.querySelector('main');
        if (main) {
          main.focus();
          main.scrollIntoView();
        }
      }}
    >
      Skip to main content
    </a>
  );

  return (
    <>
      <SkipToMainLink />
      <div
        className={`accessibility-enhanced ${isHighContrast ? 'high-contrast' : ''} ${isReducedMotion ? 'reduced-motion' : ''}`}
        style={{ fontSize: `${fontSize}px` }}
      >
        {children}
      </div>
    </>
  );
};

export default AccessibilityEnhancer;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
=======
export default function Accessibilityenhancer({ className = '', children, ...props }: AccessibilityenhancerProps) {
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-34b5

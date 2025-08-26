import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Eye, EyeOff, Keyboard, MousePointer } from 'lucide-react';
import { Button } from '../ui/button';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [showSkipLink, setShowSkipLink] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check user preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setReducedMotion(prefersReducedMotion);

    // Check for high contrast preference
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
    setHighContrast(prefersHighContrast);

    // Listen for preference changes
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const contrastQuery = window.matchMedia('(prefers-contrast: high)');

    const handleMotionChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    const handleContrastChange = (e: MediaQueryListEvent) => setHighContrast(e.matches);

    motionQuery.addEventListener('change', handleMotionChange);
    contrastQuery.addEventListener('change', handleContrastChange);

    return () => {
      motionQuery.removeEventListener('change', handleMotionChange);
      contrastQuery.removeEventListener('change', handleContrastChange);
    };
  }, []);

  useEffect(() => {
    // Apply accessibility preferences
    if (highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }

    if (reducedMotion) {
      document.documentElement.classList.add('reduced-motion');
    } else {
      document.documentElement.classList.remove('reduced-motion');
    }

    // Apply font size
    document.documentElement.style.fontSize = `${fontSize}px`;
  }, [highContrast, reducedMotion, fontSize]);

  const handleSkipLink = () => {
    const mainContent = document.querySelector('main');
    if (mainContent) {
      mainContent.focus();
      mainContent.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const increaseFontSize = () => {
    setFontSize(prev => Math.min(prev + 2, 24));
  };

  const decreaseFontSize = () => {
    setFontSize(prev => Math.max(prev - 2, 12));
  };

  const resetFontSize = () => {
    setFontSize(16);
  };

  return (
    <>
      {/* Skip Link */}
      <AnimatePresence>
        {showSkipLink && (
          <motion.a
            href="#main-content"
            onClick={handleSkipLink}
            className="skip-link"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            onFocus={() => setShowSkipLink(true)}
            onBlur={() => setShowSkipLink(false)}
          >
            Skip to main content
          </motion.a>
        )}
      </AnimatePresence>

      {/* Accessibility Toolbar */}
      <motion.div
        className="accessibility-toolbar"
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <button
          onClick={() => setHighContrast(!highContrast)}
          className="accessibility-btn"
          aria-label={`${highContrast ? 'Disable' : 'Enable'} high contrast mode`}
          title={`${highContrast ? 'Disable' : 'Enable'} high contrast mode`}
        >
          <span className="icon">🎨</span>
          <span className="label">High Contrast</span>
        </button>

        <button
          onClick={increaseFontSize}
          className="accessibility-btn"
          aria-label="Increase font size"
          title="Increase font size"
        >
          <span className="icon">A+</span>
          <span className="label">Increase Font</span>
        </button>

        <button
          onClick={decreaseFontSize}
          className="accessibility-btn"
          aria-label="Decrease font size"
          title="Decrease font size"
        >
          <span className="icon">A-</span>
          <span className="label">Decrease Font</span>
        </button>

        <button
          onClick={resetFontSize}
          className="accessibility-btn"
          aria-label="Reset font size"
          title="Reset font size"
        >
          <span className="icon">↺</span>
          <span className="label">Reset Font</span>
        </button>
      </motion.div>

      {/* Main content wrapper with accessibility attributes */}
      <main
        id="main-content"
        tabIndex={-1}
        role="main"
        aria-label="Main content"
        className="focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:ring-offset-2"
      >
        {children}
      </main>

      {/* Focus indicator for keyboard navigation */}
      <style>{`
        .skip-link {
          position: absolute;
          top: -40px;
          left: 6px;
          background: #22ddd2;
          color: #1e3a8a;
          padding: 8px;
          text-decoration: none;
          border-radius: 4px;
          z-index: 1000;
          font-weight: 600;
          transition: top 0.3s;
        }

        .skip-link:focus {
          top: 6px;
        }

        .accessibility-toolbar {
          position: fixed;
          top: 20px;
          left: 20px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          z-index: 1000;
          background: rgba(30, 58, 138, 0.95);
          backdrop-filter: blur(10px);
          border-radius: 12px;
          padding: 12px;
          border: 1px solid rgba(34, 221, 210, 0.3);
        }

        .accessibility-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(34, 221, 210, 0.1);
          border: 1px solid rgba(34, 221, 210, 0.3);
          color: white;
          padding: 8px 12px;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 14px;
        }

        .accessibility-btn:hover {
          background: rgba(34, 221, 210, 0.2);
          border-color: rgba(34, 221, 210, 0.5);
          transform: translateY(-2px);
        }

        .accessibility-btn:focus {
          outline: 2px solid #22ddd2;
          outline-offset: 2px;
        }

        .accessibility-btn .icon {
          font-size: 16px;
          font-weight: bold;
        }

        .accessibility-btn .label {
          white-space: nowrap;
        }

        @media (max-width: 768px) {
          .accessibility-toolbar {
            top: 10px;
            left: 10px;
            padding: 8px;
          }

          .accessibility-btn {
            padding: 6px 8px;
            font-size: 12px;
          }

          .accessibility-btn .label {
            display: none;
          }
        }

        /* High contrast mode styles */
        .high-contrast {
          --zion-primary: #000000;
          --zion-secondary: #ffffff;
          --zion-accent: #ffff00;
          --zion-success: #00ff00;
          --zion-warning: #ff8000;
          --zion-error: #ff0000;
        }

        .high-contrast * {
          border-color: #000000 !important;
          background-color: #ffffff !important;
          color: #000000 !important;
        }

        .high-contrast .btn-primary,
        .high-contrast .btn-secondary {
          background-color: #000000 !important;
          color: #ffffff !important;
          border: 2px solid #000000 !important;
        }

        /* Reduced motion styles */
        .reduced-motion *,
        .reduced-motion *::before,
        .reduced-motion *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      `}</style>
    </>
  );
};

export default AccessibilityEnhancer;
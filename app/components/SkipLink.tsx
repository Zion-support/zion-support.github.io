'use client';

import React, { useEffect, useState } from 'react';

const SkipLink: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        setIsVisible(true);
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        // Keep visible for a short time after tab
        setTimeout(() => setIsVisible(false), 1000);
      }
    };

    const handleClick = () => {
      setIsVisible(false);
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const handleSkipToMain = () => {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.focus();
      mainContent.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSkipToNav = () => {
    const navigation = document.querySelector('nav');
    if (navigation) {
      navigation.focus();
      navigation.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="skip-links">
      <button
        onClick={handleSkipToMain}
        className="skip-link"
        aria-label="Skip to main content"
      >
        Skip to main content
      </button>
      <button
        onClick={handleSkipToNav}
        className="skip-link"
        aria-label="Skip to navigation"
      >
        Skip to navigation
      </button>
    </div>
  );
};

SkipLink.displayName = 'SkipLink';

export { SkipLink };
export default SkipLink;
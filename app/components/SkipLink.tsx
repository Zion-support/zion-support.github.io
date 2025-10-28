'use client';
import React, { useEffect, useState } from 'react';
export const SkipLink: React.FC = () => {
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
      <style>{`
        .skip-links {
          position: absolute;
          top: -40px;
          left: 6px;
          z-index: 1000;
        }
        .skip-link {
          position: absolute;
          top: 0;
          left: 0;
          background: #000;
          color: #fff;
          padding: 8px 16px;
          text-decoration: none;
          border-radius: 0 0 4px 4px;
          font-size: 14px;
          font-weight: 600;
          transition: top 0.3s;
          border: none;
          cursor: pointer;
        }
        .skip-link:focus {
          top: 0;
          outline: 2px solid #fff;
          outline-offset: 2px;
        }
        .skip-link:not(:focus) {
          top: -40px;
        }
        .skip-link + .skip-link {
          top: 40px;
        }
        .skip-link + .skip-link:focus {
          top: 40px;
        }
      `}</style>
    </div>
  );
};
export default SkipLink;
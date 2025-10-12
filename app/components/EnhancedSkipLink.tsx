'use client';
import React from 'react';

const EnhancedSkipLink: React.FC = () => {
  const handleSkipToMain = () => {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.focus();
      mainContent.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSkipToNavigation = () => {
    const navigation = document.querySelector('nav');
    if (navigation) {
      const firstLink = navigation.querySelector('a');
      if (firstLink) {
        firstLink.focus();
        firstLink.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

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
        onClick={handleSkipToNavigation}
        className="skip-link"
        aria-label="Skip to navigation"
      >
        Skip to navigation
      </button>
      <style jsx>{`
        .skip-links {
          position: absolute;
          top: -100px;
          left: 0;
          z-index: 1000;
        }
        
        .skip-link {
          position: absolute;
          top: -100px;
          left: 0;
          background: #000;
          color: #fff;
          padding: 8px 16px;
          text-decoration: none;
          border: 2px solid #00ffff;
          border-radius: 4px;
          font-weight: bold;
          transition: top 0.3s;
          z-index: 1001;
        }
        
        .skip-link:focus {
          top: 10px;
          left: 10px;
        }
        
        .skip-link:hover {
          background: #00ffff;
          color: #000;
        }
      `}</style>
    </div>
  );
};

export default EnhancedSkipLink;
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
      <a
        href="#main-content"
        className="skip-link"
        onClick={(e) => {
          e.preventDefault();
          handleSkipToMain();
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleSkipToMain();
          }
        }}
      >
        Skip to main content
      </a>
      <a
        href="#navigation"
        className="skip-link"
        onClick={(e) => {
          e.preventDefault();
          handleSkipToNavigation();
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleSkipToNavigation();
          }
        }}
      >
        Skip to navigation
      </a>
    </div>
  );
};

export default EnhancedSkipLink;
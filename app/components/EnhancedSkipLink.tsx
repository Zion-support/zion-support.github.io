'use client';
import React from 'react';

const EnhancedSkipLink: React.FC = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-500 text-white px-4 py-2 rounded-lg font-semibold z-50 transition-all duration-200 hover:bg-cyan-600"
      onClick={(e) => {
        e.preventDefault();
        const main = document.querySelector('#main-content');
        if (main) {
          main.focus();
          main.scrollIntoView({ behavior: 'smooth' });
        }
      }}
    >
      Skip to main content
    </a>
  );
};

export default EnhancedSkipLink;
'use client';
import React from 'react';

const EnhancedSkipLink: React.FC = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-400 text-slate-900 px-4 py-2 rounded-md font-medium z-50 transition-all duration-200 hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900"
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
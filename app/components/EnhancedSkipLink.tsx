'use client';
import React from 'react';
import { Link } from 'react-router-dom';

const SkipLink: React.FC = () => {
  return (
    <Link
      to="#main-content"
      className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-cyan-500 focus:text-white focus:rounded-lg focus:font-semibold focus:shadow-lg focus:transition-all"
      onClick={(e) => {
        e.preventDefault();
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
          mainContent.focus();
          mainContent.scrollIntoView({ behavior: 'smooth' });
        }
      }}
    >
      Skip to main content
    </Link>
  );
};

export default SkipLink;

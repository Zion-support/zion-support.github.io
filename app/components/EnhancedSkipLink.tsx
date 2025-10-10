'use client';
import React from 'react';

const SkipLink: React.FC = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
    >
      Skip to main content
    </a>
  );
};

export default SkipLink;
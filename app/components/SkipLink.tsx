<<<<<<< HEAD
import React from 'react';
=======
'use client';
import React from 'react';

>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
const SkipLink: React.FC = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-purple-600 text-white px-4 py-2 rounded-lg z-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500">
      Skip to main content
    </a>
  );
};

export default SkipLink;
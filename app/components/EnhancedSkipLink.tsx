'use client';
import React from 'react';

<<<<<<< HEAD
const SkipLink: React.FC = () => {
  return (
    <a
      href="#main-content"
<<<<<<< HEAD
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-500 text-white px-4 py-2 rounded-lg font-semibold z-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
=======
const EnhancedSkipLink: React.FC = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-500 text-white px-4 py-2 rounded-md z-50 transition-all duration-200 hover:bg-cyan-600"
>>>>>>> cursor/analyze-improve-and-deploy-application-fdb6
      onClick={(e) => {
        e.preventDefault();
        const main = document.querySelector('#main-content');
        if (main) {
          main.focus();
          main.scrollIntoView({ behavior: 'smooth' });
        }
      }}
=======
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-500 text-white px-4 py-2 rounded-md z-50"
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
    >
      Skip to main content
    </a>
  );
};

<<<<<<< HEAD
export default EnhancedSkipLink;
=======
export default SkipLink;
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44

import React from 'react';

const SkipNavigation: React.FC = () => {
  return (
    <div className="skip-navigation">
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50"
      >
        Skip to main content
      </a>
      <a 
        href="#navigation" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-32 bg-blue-600 text-white px-4 py-2 rounded z-50"
      >
        Skip to navigation
      </a>
      <a 
        href="#footer" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-64 bg-blue-600 text-white px-4 py-2 rounded z-50"
      >
        Skip to footer
      </a>
    </div>
  );
};

export default SkipNavigation;
'use client';
import React from 'react';

const SkipLink: React.FC = () => {
  return (
    <React.Fragment>
      <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50 transition-all duration-200"
    >
      Skip to main content
    </a>
    </React.Fragment>
  );
};

export default SkipLink;
  )
}

export default SkipLink

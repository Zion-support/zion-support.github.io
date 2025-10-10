'use client';
import React, { memo } from 'react';

const SkipLink: React.FC = memo(() => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50 font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-900"
    >
      Skip to main content
    </a>
  );
});

SkipLink.displayName = 'SkipLink';

export default SkipLink;
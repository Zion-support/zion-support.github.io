'use client';
import React from 'react';

const SkipLink: React.FC = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50 transition-all duration-200"
      style={{
        position: 'absolute',
        top: '-40px',
        left: '6px',
        background: '#4f46e5',
        color: 'white',
        padding: '8px 16px',
        textDecoration: 'none',
        borderRadius: '4px',
        zIndex: 1000,
        transition: 'top 0.3s ease-in-out',
        fontSize: '14px',
        fontWeight: '500'
      }}
      onFocus={(e) => {
        e.currentTarget.style.top = '6px';
      }}
      onBlur={(e) => {
        e.currentTarget.style.top = '-40px';
      }}
    >
      Skip to main content
    </a>
  );
};

export default SkipLink;
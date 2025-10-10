'use client';
import React, { useEffect } from 'react';

const AccessibilityEnhancements: React.FC = () => {
  useEffect(() => {
    // Add focus management for keyboard navigation
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    };

    const handleMouseDown = () => {
      document.body.classList.remove('keyboard-navigation');
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  return (
    <>
      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Skip to main content
      </a>
      
      {/* Skip to navigation link */}
      <a
        href="#navigation"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-32 bg-indigo-600 text-white px-4 py-2 rounded-md z-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Skip to navigation
      </a>
      
      {/* Screen reader only content */}
      <div className="sr-only">
        <h1>Zion Tech Group - Advanced AI and IT Solutions</h1>
        <p>Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.</p>
      </div>
    </>
  );
};

export default AccessibilityEnhancements;
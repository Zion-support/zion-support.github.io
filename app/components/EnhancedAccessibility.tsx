'use client';
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const EnhancedAccessibility: React.FC = () => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    // Check for user preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
    
    setIsReducedMotion(prefersReducedMotion);
    setIsHighContrast(prefersHighContrast);

    // Apply accessibility enhancements
    const applyAccessibilityEnhancements = () => {
      // Add skip links
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-600 text-white p-2 z-50';
      document.body.insertBefore(skipLink, document.body.firstChild);

      // Add ARIA landmarks
      const main = document.querySelector('main');
      if (main && !main.getAttribute('role')) {
        main.setAttribute('role', 'main');
        main.id = 'main-content';
      }
    };

    applyAccessibilityEnhancements();
  }, []);

  const toggleHighContrast = () => {
    setIsHighContrast(!isHighContrast);
    document.documentElement.classList.toggle('high-contrast');
  };

  const toggleReducedMotion = () => {
    setIsReducedMotion(!isReducedMotion);
    document.documentElement.classList.toggle('reduced-motion');
  };

  const increaseFontSize = () => {
    setFontSize(prev => Math.min(prev + 2, 24));
    document.documentElement.style.fontSize = `${fontSize + 2}px`;
  };

  const decreaseFontSize = () => {
    setFontSize(prev => Math.max(prev - 2, 12));
    document.documentElement.style.fontSize = `${fontSize - 2}px`;
  };

  return (
    <>
      <Helmet>
        <title>Enhanced Accessibility - Zion Tech Group</title>
        <meta name="description" content="Enhanced Accessibility services and solutions from Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Enhanced Accessibility
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Professional accessibility enhancement services designed to make your applications more inclusive.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                WCAG Compliance
              </h3>
              <p className="text-blue-700">
                Ensure your application meets WCAG 2.1 AA standards for accessibility.
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-2">
                Screen Reader Support
              </h3>
              <p className="text-green-700">
                Optimize your application for screen readers and assistive technologies.
              </p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-900 mb-2">
                Keyboard Navigation
              </h3>
              <p className="text-purple-700">
                Implement comprehensive keyboard navigation for better accessibility.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Accessibility Controls</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center space-x-4">
                <button
                  onClick={toggleHighContrast}
                  className={`px-4 py-2 rounded-lg font-medium ${
                    isHighContrast 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {isHighContrast ? 'High Contrast On' : 'High Contrast Off'}
                </button>
              </div>
              
              <div className="flex items-center space-x-4">
                <button
                  onClick={toggleReducedMotion}
                  className={`px-4 py-2 rounded-lg font-medium ${
                    isReducedMotion 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {isReducedMotion ? 'Reduced Motion On' : 'Reduced Motion Off'}
                </button>
              </div>
              
              <div className="flex items-center space-x-4">
                <button
                  onClick={decreaseFontSize}
                  className="px-3 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
                >
                  A-
                </button>
                <span className="text-sm text-gray-600">{fontSize}px</span>
                <button
                  onClick={increaseFontSize}
                  className="px-3 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
                >
                  A+
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnhancedAccessibility;
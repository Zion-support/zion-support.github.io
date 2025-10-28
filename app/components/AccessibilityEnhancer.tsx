<<<<<<< HEAD
import React from 'react';
import ErrorBoundary from '../components/ErrorBoundary';

export const metadata = {
  title: "AccessibilityEnhancer | Zion Tech Group",
  description: "Professional accessibilityenhancer services by Zion Tech Group",
  keywords: "accessibilityenhancer, technology, services",
  openGraph: {
    title: "AccessibilityEnhancer | Zion Tech Group",
    description: "Professional accessibilityenhancer services by Zion Tech Group",
    type: "website",
  },
};

export default function AccessibilityEnhancerPage() {
=======
'use client';

import React, { useEffect, useState, memo } from 'react';
import dynamic from 'next/dynamic';
import { addFocusIndicators, improveKeyboardNavigation, addSkipLinks, announceToScreenReader } from './accessibility/AccessibilityUtils';

// Dynamically import the controls component
const AccessibilityControls = dynamic(() => import('./accessibility/AccessibilityControls'), {
  ssr: false,
  loading: () => <div className="sr-only">Loading accessibility controls...</div>
});

interface AccessibilityEnhancerProps {
  className?: string;
  children?: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = memo(({ 
  className = '', 
  children 
}) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState('normal');
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const applyAccessibilityFeatures = React.useCallback(() => {
    const root = document.documentElement;

    // Apply high contrast
    if (isHighContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Apply font size
    root.classList.remove('font-small', 'font-normal', 'font-large', 'font-xl');
    root.classList.add(`font-${fontSize}`);

    // Apply reduced motion
    if (reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Add focus indicators
    addFocusIndicators();

    // Improve keyboard navigation
    improveKeyboardNavigation();

    // Add skip links
    addSkipLinks();
  }, [isHighContrast, fontSize, reducedMotion]);

  useEffect(() => {
    // Check for user preferences
    const savedHighContrast = localStorage.getItem('high-contrast') === 'true';
    const savedFontSize = localStorage.getItem('font-size') || 'normal';
    const savedReducedMotion = localStorage.getItem('reduced-motion') === 'true';

    setIsHighContrast(savedHighContrast);
    setFontSize(savedFontSize);
    setReducedMotion(savedReducedMotion);

    // Check for system preferences
    if (window.matchMedia) {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
      if (prefersReducedMotion.matches) {
        setReducedMotion(true);
      }
    }

    // Show controls after a delay
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    applyAccessibilityFeatures();
    
    // Save preferences
    localStorage.setItem('high-contrast', isHighContrast.toString());
    localStorage.setItem('font-size', fontSize);
    localStorage.setItem('reduced-motion', reducedMotion.toString());
  }, [applyAccessibilityFeatures, isHighContrast, fontSize, reducedMotion]);

  const handleHighContrastChange = (value: boolean) => {
    setIsHighContrast(value);
    announceToScreenReader(value ? 'High contrast enabled' : 'High contrast disabled');
  };

  const handleFontSizeChange = (value: string) => {
    setFontSize(value);
    announceToScreenReader(`Font size changed to ${value}`);
  };

  const handleReducedMotionChange = (value: boolean) => {
    setReducedMotion(value);
    announceToScreenReader(value ? 'Reduced motion enabled' : 'Reduced motion disabled');
  };

>>>>>>> c271e7ba1e2d2951f565c25080f0cec45834b100
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              AccessibilityEnhancer
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Professional accessibilityenhancer services by Zion Tech Group
            </p>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Our AccessibilityEnhancer Services
              </h2>
              <p className="text-gray-600 mb-6">
                We provide comprehensive accessibilityenhancer solutions tailored to your business needs.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">
                    Expert Consultation
                  </h3>
                  <p className="text-blue-700">
                    Professional guidance and strategic planning for your accessibilityenhancer needs.
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-900 mb-2">
                    Custom Solutions
                  </h3>
                  <p className="text-green-700">
                    Tailored accessibilityenhancer solutions designed specifically for your business.
                  </p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-900 mb-2">
                    24/7 Support
                  </h3>
                  <p className="text-purple-700">
                    Round-the-clock support and maintenance for all your accessibilityenhancer services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}
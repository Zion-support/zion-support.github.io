<<<<<<< HEAD
import React from 'react';
import ErrorBoundary from '../ErrorBoundary';

export const metadata = {
  title: "AccessibilityControls | Zion Tech Group",
  description: "Professional accessibilitycontrols services by Zion Tech Group",
  keywords: "accessibilitycontrols, technology, services",
  openGraph: {
    title: "AccessibilityControls | Zion Tech Group",
    description: "Professional accessibilitycontrols services by Zion Tech Group",
    type: "website",
  },
};

export default function AccessibilityControlsPage() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              AccessibilityControls
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Professional accessibilitycontrols services by Zion Tech Group
            </p>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Our AccessibilityControls Services
              </h2>
              <p className="text-gray-600 mb-6">
                We provide comprehensive accessibilitycontrols solutions tailored to your business needs.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">
                    Expert Consultation
                  </h3>
                  <p className="text-blue-700">
                    Professional guidance and strategic planning for your accessibilitycontrols needs.
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-900 mb-2">
                    Custom Solutions
                  </h3>
                  <p className="text-green-700">
                    Tailored accessibilitycontrols solutions designed specifically for your business.
                  </p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-900 mb-2">
                    24/7 Support
                  </h3>
                  <p className="text-purple-700">
                    Round-the-clock support and maintenance for all your accessibilitycontrols services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
=======
'use client';


import React, { memo } from 'react';

interface AccessibilityControlsProps {
  className?: string;
  children?: React.ReactNode;
  isHighContrast?: boolean;
  fontSize?: string;
  reducedMotion?: boolean;
  onHighContrastChange?: (value: boolean) => void;
  onFontSizeChange?: (value: string) => void;
  onReducedMotionChange?: (value: boolean) => void;
}

const AccessibilityControls: React.FC<AccessibilityControlsProps> = memo(({
  isHighContrast,
  fontSize,
  reducedMotion,
  onHighContrastChange,
  onFontSizeChange,
  onReducedMotionChange,
  className = ''
}) => {
  return (
    <div className={`accessibility-controls ${className}`}> <div className="flex flex-wrap gap-4 p-4 bg-gray-800 rounded-lg"> <label className="flex items-center space-x-2 text-white">
          <input
            type="checkbox"
            checked={isHighContrast}
            onChange={(e) => onHighContrastChange?.(e.target.checked)}
            className="rounded"
          />
          <span>High Contrast</span>
        </label>
        
        <label className="flex items-center space-x-2 text-white">
          <span>Font Size:</span>
          <select
            value={fontSize}
            onChange={(e) => onFontSizeChange?.(e.target.value)}
            className="bg-gray-700 text-white rounded px-2 py-1"
          >
            <option value="small">Small</option>
            <option value="normal">Normal</option>
            <option value="large">Large</option>
            <option value="xl">Extra Large</option>
          </select>
        </label>
        
        <label className="flex items-center space-x-2 text-white">
          <input
            type="checkbox"
            checked={reducedMotion}
            onChange={(e) => onReducedMotionChange?.(e.target.checked)}
            className="rounded"
          />
          <span>Reduce Motion</span>
        </label>
>>>>>>> c271e7ba1e2d2951f565c25080f0cec45834b100
      </div>
    </ErrorBoundary>
  );
}
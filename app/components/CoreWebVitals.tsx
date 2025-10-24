'use client'
import React from 'react';

interface CoreWebVitalsProps {
  className?: string;
}

const CoreWebVitals: React.FC<CoreWebVitalsProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2 className="text-xl font-semibold mb-4">Core Web Vitals</h2>
      <p className="text-gray-600">This is a placeholder component for Core Web Vitals.</p>
    </div>
  );
};

export default CoreWebVitals;

'use client'
import React from 'react';

interface ModernLoadingSpinnerProps {
  className?: string;
}

const ModernLoadingSpinner: React.FC<ModernLoadingSpinnerProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2 className="text-xl font-semibold mb-4">Modern Loading Spinner</h2>
      <p className="text-gray-600">This is a placeholder component for Modern Loading Spinner.</p>
    </div>
  );
};

export default ModernLoadingSpinner;

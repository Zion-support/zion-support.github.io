'use client'
import React from 'react';

interface ImprovedLoadingProps {
  className?: string;
}

const ImprovedLoading: React.FC<ImprovedLoadingProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2 className="text-xl font-semibold mb-4">Improved Loading</h2>
      <p className="text-gray-600">This is a placeholder component for Improved Loading.</p>
    </div>
  );
};

export default ImprovedLoading;

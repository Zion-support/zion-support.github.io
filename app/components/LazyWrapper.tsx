'use client'
import React from 'react';

interface LazyWrapperProps {
  className?: string;
}

const LazyWrapper: React.FC<LazyWrapperProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2 className="text-xl font-semibold mb-4">Lazy Wrapper</h2>
      <p className="text-gray-600">This is a placeholder component for Lazy Wrapper.</p>
    </div>
  );
};

export default LazyWrapper;

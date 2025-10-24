'use client';
import React from 'react';

interface LazyWrapperProps {
  className?: string;
}

const LazyWrapper: React.FC<LazyWrapperProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2>LazyWrapper</h2>
      <p>This component is being rebuilt.</p>
    </div>
  );
};

export default LazyWrapper;

'use client';
import React from 'react';

interface PerformanceEnhancerProps {
  className?: string;
}

const PerformanceEnhancer: React.FC<PerformanceEnhancerProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2>PerformanceEnhancer</h2>
      <p>This component is being rebuilt.</p>
    </div>
  );
};

export default PerformanceEnhancer;

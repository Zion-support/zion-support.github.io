import React from 'react';

interface PerformanceOptimizedProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

const PerformanceOptimized: React.FC<PerformanceOptimizedProps> = ({ 
  children, 
  fallback = <div>Loading...</div> 
}) => {
  return (
    <React.Suspense fallback={fallback}>
      {children}
    </React.Suspense>
  );
};

export default PerformanceOptimized;
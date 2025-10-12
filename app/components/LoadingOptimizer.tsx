import React, { useState, useEffect } from 'react';

interface LoadingOptimizerProps {
  isLoading: boolean;
  children: React.ReactNode;
  fallback?: React.ReactNode;
  delay?: number;
}

const LoadingOptimizer: React.FC<LoadingOptimizerProps> = ({
  isLoading,
  children,
  fallback,
  delay = 200
}) => {
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (isLoading) {
      timeoutId = setTimeout(() => {
        setShowLoading(true);
      }, delay);
    } else {
      setShowLoading(false);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [isLoading, delay]);

  if (isLoading && showLoading) {
    return (
      fallback || (
        <div className="flex items-center justify-center min-h-32">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-500"></div>
        </div>
      )
    );
  }

  return <>{children}</>;
};

export default LoadingOptimizer;
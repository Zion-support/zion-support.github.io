import React, { useState, useEffect } from 'react';

interface SmartLoadingProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  delay?: number;
  minHeight?: string;
  skeleton?: boolean;
}

const SmartLoading: React.FC<SmartLoadingProps> = ({
  children,
  fallback,
  delay = 200,
  minHeight = '200px',
  skeleton = true,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFallback(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    // Simulate content loading
    const loadTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(loadTimer);
  }, []);

  if (isLoading && showFallback) {
    if (fallback) {
      return <>{fallback}</>;
    }

    if (skeleton) {
      return (
        <div className="animate-pulse" style={{ minHeight }}>
          <div className="space-y-4">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            <div className="h-32 bg-gray-200 rounded"></div>
          </div>
        </div>
      );
    }

    return (
      <div className="flex items-center justify-center" style={{ minHeight }}>
        <div className="flex items-center space-x-2">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
          <span className="text-gray-600">Loading...</span>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default SmartLoading;
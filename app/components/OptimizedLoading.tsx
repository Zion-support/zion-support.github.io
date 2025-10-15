import React, { useState, useEffect } from 'react';

interface OptimizedLoadingProps {
  delay?: number;
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

const OptimizedLoading: React.FC<OptimizedLoadingProps> = ({ 
  delay = 200, 
  children, 
  fallback 
}) => {
  const [show, setShow] = useState(delay === 0);

  useEffect(() => {
    if (delay > 0) {
      const timer = setTimeout(() => setShow(true), delay);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [delay]);

  if (!show) {
    return fallback || (
      <div className="flex items-center justify-center p-4">
        <div className="w-6 h-6 border-2 border-blue-200 border-t-blue-600 rounded-full animate-spin" />
      </div>
    );
  }

  return <>{children}</>;
};

export default OptimizedLoading;
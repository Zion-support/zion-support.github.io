import React, { useState, useEffect } from 'react';

interface LoadingOptimizedProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  delay?: number}

export default function LoadingOptimized() { const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false) }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  if (isLoading) { return <>{fallback}</>; }

  return <>{children}</>;
}
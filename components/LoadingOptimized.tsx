import React, { useState, useEffect } from 'react';

interface LoadingOptimizedProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  delay?: number;
}

export default function LoadingOptimized({ 
  children, 
  fallback = <div className="animate-pulse bg-slate-800 rounded-lg h-32 w-full" />,
  delay = 0 
}: LoadingOptimizedProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  if (isLoading) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}
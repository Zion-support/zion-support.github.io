import React, { useState, useEffect } from "react";

interface LoadingOptimizedProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  delay?: number;
}

export default function LoadingOptimized({ children, fallback, delay = 1000 }: LoadingOptimizedProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  if (isLoading) {
    return <>{fallback || <div>Loading...</div>}</>;
  }

  return <>{children}</>;
}
import { useState, useEffect } from 'react';

export function useSkeletonTimeout(isLoading: boolean, delay: number = 1000): boolean {
  const [showSkeleton, setShowSkeleton] = useState(isLoading);

  useEffect(() => {
    if (isLoading) {
      setShowSkeleton(true);
      const timer = setTimeout(() => {
        setShowSkeleton(false);
      }, delay);
      return () => clearTimeout(timer);
    } else {
      setShowSkeleton(false);
    }
  }, [isLoading, delay]);

  return showSkeleton;
}
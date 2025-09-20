import { useState, useEffect } from 'react';

export function useSkeletonTimeout(loading: boolean, timeout: number = 2000) {
  const [showSkeleton, setShowSkeleton] = useState(loading);

  useEffect(() => {
    if (loading) {
      setShowSkeleton(true);
      const timer = setTimeout(() => {
        setShowSkeleton(false);
      }, timeout);

      return () => clearTimeout(timer);
    } else {
      setShowSkeleton(false);
    }
  }, [loading, timeout]);

  return { showSkeleton };
}
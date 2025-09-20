import { useState, useEffect } from 'react';

export function useSkeletonTimeout(initialLoading: boolean = true, timeout: number = 1000) {
  const [isLoading, setIsLoading] = useState(initialLoading);

  useEffect(() => {
    if (initialLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, timeout);

      return () => clearTimeout(timer);
    } else {
      setIsLoading(false);
    }
  }, [initialLoading, timeout]);

  return isLoading;
}
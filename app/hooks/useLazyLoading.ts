'use client';
import { useState } from 'react';

export const useLazyLoading = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return isLoaded;
};
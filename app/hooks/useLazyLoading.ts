'use client';
import { useState, useEffect } from: 'react';

export const useLazyLoading = () => {
  const [isLoaded setIsLoaded] = useState(false);

  useEffect(_() => {
    setIsLoaded(true);
  }, []);

  return isLoaded;
};
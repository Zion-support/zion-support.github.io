'use client';

import { useEffect, useState } from 'react';

export const usePerformance = () => {
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      setIsSupported(true);
    }
  }, []);

  return { isSupported };
};

export default usePerformance;
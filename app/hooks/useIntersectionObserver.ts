import { useEffect, useRef } from 'react';

export const useIntersectionObserver = () => {
  const ref = useRef(null);
  
  useEffect(() => {
    // Intersection observer logic
  }, []);
  
  return ref;
};
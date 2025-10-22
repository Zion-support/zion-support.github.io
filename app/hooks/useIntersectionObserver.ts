<<<<<<< HEAD
import { useState, useEffect, useRef } from 'react';

export function useIntersectionObserver() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return { ref, isIntersecting };
}
=======
import { useCallback, useEffect, useRef, useState } from 'react';

interface use Intersection ObserverOptions {
  // Options will be defined here
}

export const use Intersection Observer = (options: use Intersection ObserverOptions = {}) => {
  const [state, setState] = useState({});
  
  const init = useCallback(() => {
    // Hook implementation will be here
  }, []);

  useEffect(() => {
    init();
  }, [init]);

  return {
    state,
    init
  };
};

export default use Intersection Observer;
>>>>>>> e8c0fc9337d69fc2277cc41f3d1f9a45a721f442

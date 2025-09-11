import { useState, useEffect } from 'react';

interface ScrollPosition {
  x: number;
  y: number;
}

/**
 * Custom hook to track scroll position
 * @returns Current scroll position
 */
export function useScrollPosition(): ScrollPosition {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    x: typeof window !== 'undefined' ? window.pageXOffset : 0,
    y: typeof window !== 'undefined' ? window.pageYOffset : 0,
  });

  useEffect(() => {
    // Handler to call on scroll
    function handleScroll() {
      setScrollPosition({
        x: window.pageXOffset,
        y: window.pageYOffset,
      });
    }

    // Add event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Call handler right away so state gets updated with initial scroll position
    handleScroll();

    // Remove event listener on cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollPosition;
}

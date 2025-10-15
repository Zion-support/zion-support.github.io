import { useEffect, useRef } from 'react';
import { trackScroll } from '../components/Analytics';

export const useScrollTracking = () => {
  const scrollDepthRef = useRef<number[]>([]);
  const maxScrollRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = Math.round((scrollTop / documentHeight) * 100);

      // Track milestone scroll depths
      const milestones = [25, 50, 75, 90, 100];
      milestones.forEach((milestone) => {
        if (scrollPercentage >= milestone && !scrollDepthRef.current.includes(milestone)) {
          scrollDepthRef.current.push(milestone);
          trackScroll(milestone);
        }
      });

      // Track maximum scroll depth
      if (scrollPercentage > maxScrollRef.current) {
        maxScrollRef.current = scrollPercentage;
      }
    };

    const throttledScroll = throttle(handleScroll, 100);
    window.addEventListener('scroll', throttledScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, []);

  return {
    maxScrollDepth: maxScrollRef.current,
    scrollMilestones: scrollDepthRef.current,
  };
};

// Throttle function for performance
function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return function (this: any, ...args: Parameters<T>) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}
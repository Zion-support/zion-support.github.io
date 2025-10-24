import { useEffect, useRef, useState } from 'react';
<<<<<<< HEAD
;
interface UseLazyLoadingOptions {
;
threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}
;
export function useLazyLoading(options: UseLazyLoadingOptions = {,}) {;
const {;
threshold = 0.1,;
rootMargin = '50px',;
triggerOnce = true,
  } = options;
;
const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const elementRef = useRef<HTMLElement>(null);
;
useEffect(() => {;
const element = elementRef.current;
    if (!element) return;
;
const observer = new IntersectionObserver(
      ([entry]) => {;
const isVisible = entry.isIntersecting;
        setIsIntersecting(isVisible);
;
if (isVisible && !hasIntersected) {;
setHasIntersected(true);
=======

export const useLazyLoading = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLoaded(true);
          observer.disconnect();
>>>>>>> cursor/fix-errors-and-merge-to-main-9a36
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return [ref, isLoaded] as const;
};

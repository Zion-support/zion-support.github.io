import React, { useState, useEffect, useRef, memo, ReactNode } from 'react';

interface LazyLoadProps {
  children: ReactNode;
  fallback?: ReactNode;
  threshold?: number;
  rootMargin?: string;
  className?: string;
}

const LazyLoad: React.FC<LazyLoadProps> = memo(({ 
  children, 
  fallback = <div className="animate-pulse bg-gray-300 h-32 rounded" />,
  threshold = 0.1,
  rootMargin = '50px',
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
<<<<<<< HEAD
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasLoaded) {
=======
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
>>>>>>> origin/main
          setIsVisible(true);
          setHasLoaded(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin
      }
    );

<<<<<<< HEAD
    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, hasLoaded]);

  return (
    <div ref={elementRef} className={className}>
      {isVisible ? children : fallback}
=======
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return (
    <div ref={elementRef} className={className}>
      {isVisible ? children : (hasLoaded ? children : fallback)}
>>>>>>> origin/main
    </div>
  );
});

LazyLoad.displayName = 'LazyLoad';

<<<<<<< HEAD
export { LazyLoad };
=======
>>>>>>> origin/main
export default LazyLoad;
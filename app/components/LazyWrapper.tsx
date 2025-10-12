import React, { useState, useRef, useEffect, ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';

interface LazyWrapperProps {
  children: ReactNode;
  fallback?: ReactNode;
  threshold?: number;
  rootMargin?: string;
  className?: string;
}

const LazyWrapper: React.FC<LazyWrapperProps> = ({
  children,
  fallback = <div className="w-full h-32 bg-gray-200 animate-pulse rounded" />,
  threshold = 0.1,
  rootMargin = '50px',
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasIntersected) {
          setIsVisible(true);
          setHasIntersected(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin, hasIntersected]);

  return (
    <>
      <Helmet>
        <title>Lazy Wrapper - Zion Tech Group</title>
      </Helmet>
      
      <div ref={elementRef} className={className}>
        {isVisible ? children : fallback}
      </div>
    </>
  );
};

export default LazyWrapper;
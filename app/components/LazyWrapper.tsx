import React, { useState, useRef, useEffect, ReactNode } from 'react';

interface LazyWrapperProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  fallback?: ReactNode;
}

const LazyWrapper: React.FC<LazyWrapperProps> = ({
  children,
  className = '',
  threshold = 0.1,
  rootMargin = '0px',
  fallback = <div className="w-full h-32 bg-gray-200 animate-pulse rounded" />
}) => {
  const [isInView, setIsInView] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasLoaded) {
          setIsInView(true);
          setHasLoaded(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    if (wrapperRef.current) {
      observer.observe(wrapperRef.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin, hasLoaded]);

  return (
    <div ref={wrapperRef} className={className}>
      {isInView ? children : fallback}
    </div>
  );
};

export default LazyWrapper;
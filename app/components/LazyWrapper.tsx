import React, { useState, useRef, useEffect, ReactNode } from 'react';

interface LazyWrapperProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
}

const LazyWrapper: React.FC<LazyWrapperProps> = ({
  children,
  className = '',
  threshold = 0.1,
  rootMargin = '0px'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    if (wrapperRef.current) {
      observer.observe(wrapperRef.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return (
    <div ref={wrapperRef} className={className}>
      {isVisible ? children : <div className="h-32 bg-gray-200 animate-pulse rounded" />}
    </div>
  );
};

export default LazyWrapper;
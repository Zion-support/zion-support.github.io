'use client';

import React, { useState, useEffect, useRef } from 'react';

interface LazyWrapperProps {
  children: React.ReactNode;
  threshold?: number;
  rootMargin?: string;
  fallback?: React.ReactNode;
}

export default function LazyWrapper({ 
  children, 
  threshold = 0.1, 
  rootMargin = '50px',
  fallback = <div className="h-64 bg-gray-200 animate-pulse rounded-lg" />
}: LazyWrapperProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
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

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return (
    <div ref={ref}>
      {hasLoaded ? children : (isVisible ? children : fallback)}
    </div>
  );
}
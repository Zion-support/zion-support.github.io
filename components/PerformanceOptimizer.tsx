import React, { useEffect, useState } from 'react';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
}

// Performance optimization component with lazy loading and intersection observer
const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasLoaded) {
          setIsVisible(true);
          setHasLoaded(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    const element = document.getElementById('performance-optimizer');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [hasLoaded]);

  return (
    <div id="performance-optimizer" className="w-full">
      {isVisible ? children : (
        <div className="w-full h-64 bg-gray-100 animate-pulse rounded-lg flex items-center justify-center">
          <div className="text-gray-400">Loading...</div>
        </div>
      )}
    </div>
  );
};

export default PerformanceOptimizer;
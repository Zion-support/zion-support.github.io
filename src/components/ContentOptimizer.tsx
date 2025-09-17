<<<<<<< HEAD
import React from "react";
=======
import React, { useState, useEffect } from 'react';

interface ContentOptimizerProps {
  children: React.ReactNode;
  threshold?: number;
  rootMargin?: string;
}

const ContentOptimizer: React.FC<ContentOptimizerProps> = ({ 
  children, 
  threshold = 0.1,
  rootMargin = '50px'
}) => {
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
      { threshold, rootMargin }
    );

    const element = document.getElementById('content-optimizer');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, hasLoaded]);
>>>>>>> origin/merge-new-content-1757989975

const ContentOptimizer = () => {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">ContentOptimizer</h1>
          <p className="text-xl opacity-90">Coming soon - Revolutionary technology solutions</p>
        </div>
      </div>
=======
    <div id="content-optimizer">
      {isVisible ? (
        <div
        >
          {children}
        </div>
      ) : (
        <div className="h-64 bg-gray-100 animate-pulse rounded-lg" />
      )}
>>>>>>> origin/merge-new-content-1757989975
    </div>
  );
};

export default ContentOptimizer;

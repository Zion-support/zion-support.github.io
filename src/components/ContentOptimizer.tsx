import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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

  return (
    <div id="content-optimizer">
      {isVisible ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {children}
        </motion.div>
      ) : (
        <div className="h-64 bg-gray-100 animate-pulse rounded-lg" />
      )}
    </div>
  );
};

export default ContentOptimizer;

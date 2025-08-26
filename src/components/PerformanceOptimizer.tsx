import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  loadingStrategy?: 'lazy' | 'eager' | 'progressive';
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  children,
  className = '',
  threshold = 0.1,
  loadingStrategy = 'lazy'
}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (loadingStrategy === 'eager') {
      setIsIntersecting(true);
      setIsLoaded(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          if (loadingStrategy === 'progressive') {
            // Progressive loading with staggered children
            const timer = setTimeout(() => setIsLoaded(true), 100);
            return () => clearTimeout(timer);
          } else {
            setIsLoaded(true);
          }
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, loadingStrategy]);

  if (loadingStrategy === 'eager') {
    return <div className={className}>{children}</div>;
  }

  if (!isIntersecting) {
    return (
      <div ref={ref} className={`min-h-[100px] ${className}`}>
        <div className="animate-pulse bg-gray-700/20 rounded-lg h-full" />
      </div>
    );
  }

  if (!isLoaded && loadingStrategy === 'progressive') {
    return (
      <div ref={ref} className={className}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default PerformanceOptimizer;
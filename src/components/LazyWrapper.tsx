import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import EnhancedLoading from './EnhancedLoading';

interface LazyWrapperProps {
  children: React.ReactNode;
  threshold?: number;
  className?: string;
  loadingVariant?: 'spinner' | 'dots' | 'pulse' | 'bars';
  loadingText?: string;
}

const LazyWrapper: React.FC<LazyWrapperProps> = ({
  children,
  threshold = 0.1,
  className = '',
  loadingVariant = 'spinner',
  loadingText = 'Loading...'
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { amount: threshold });

  useEffect(() => {
    if (inView && !isInView) {
      setIsInView(true);
      // Simulate loading delay for better UX
      const timer = setTimeout(() => {
        setIsLoaded(true);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [inView, isInView]);

  if (!isInView) {
    return (
      <div ref={ref} className={`min-h-[200px] ${className}`}>
        <EnhancedLoading variant={loadingVariant} text={loadingText} />
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className={`min-h-[200px] ${className}`}>
        <EnhancedLoading variant={loadingVariant} text={loadingText} />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default LazyWrapper;
import React, { useState, useRef, useEffect, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface LazyWrapperProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  fallback?: ReactNode;
  animation?: 'fade' | 'slide' | 'scale' | 'none';
}

const LazyWrapper: React.FC<LazyWrapperProps> = ({
  children,
  className = '',
  threshold = 0.1,
  rootMargin = '0px',
  fallback = null,
  animation = 'fade'
}) => {
  const [isInView, setIsInView] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasIntersected) {
          setIsInView(true);
          setHasIntersected(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin, hasIntersected]);

  const getAnimationProps = () => {
    switch (animation) {
      case 'fade':
        return {
          initial: { opacity: 0 },
          animate: { opacity: isInView ? 1 : 0 },
          transition: { duration: 0.6, ease: 'easeOut' }
        };
      case 'slide':
        return {
          initial: { opacity: 0, y: 50 },
          animate: { opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 },
          transition: { duration: 0.6, ease: 'easeOut' }
        };
      case 'scale':
        return {
          initial: { opacity: 0, scale: 0.9 },
          animate: { opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.9 },
          transition: { duration: 0.6, ease: 'easeOut' }
        };
      case 'none':
        return {};
      default:
        return {
          initial: { opacity: 0 },
          animate: { opacity: isInView ? 1 : 0 },
          transition: { duration: 0.6, ease: 'easeOut' }
        };
    }
  };

  return (
    <div ref={elementRef} className={className}>
      {isInView ? (
        <motion.div {...getAnimationProps()}>
          {children}
        </motion.div>
      ) : (
        fallback
      )}
    </div>
  );
};

export default LazyWrapper;
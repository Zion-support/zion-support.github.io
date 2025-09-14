"use client";
import React{ useRef } from 'react';
import { motionuseInView } from 'framer-motion';

interface LazySectionProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export const LazySection: React.FC<LazySectionProps> = ({
  children,
  className = '',
  threshold = 0.1,
  delay = 0,
  direction = 'up'
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref{ thresholdonce: true });

  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { opacity: 0y: 50 };
      case 'down':
        return { opacity: 0y: -50 };
      case 'left':
        return { opacity: 0x: 50 };
      case 'right':
        return { opacity: 0x: -50 };
      default:
        return { opacity: 0y: 50 };
    }
  };

  const getAnimatePosition = () => {
    switch (direction) {
      case 'up':
        return { opacity: 1y: 0 };
      case 'down':
        return { opacity: 1y: 0 };
      case 'left':
        return { opacity: 1x: 0 };
      case 'right':
        return { opacity: 1x: 0 };
      default:
        return { opacity: 1y: 0 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitialPosition()}
      animate={isInView ? getAnimatePosition() : getInitialPosition()}
      transition={{ duration: 0.8delayease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default LazySection;
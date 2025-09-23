<<<<<<< HEAD
"use client";
import React{ useRef } from 'react';
import { motionuseInView } from 'framer-motion';
=======
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
>>>>>>> origin/auto/autonomy-17186719616

interface LazySectionProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export const LazySection: React.FC<LazySectionProps> = ({
  children,
<<<<<<< HEAD
  className = ', ',
=======
  className = '',
>>>>>>> origin/auto/autonomy-17186719616
  threshold = 0.1,
  delay = 0,
  direction = 'up'
}) => {
  const ref = useRef<HTMLDivElement>(null);
<<<<<<< HEAD
  const isInView = useInView(ref{ thresholdonce: true });
=======
  const isInView = useInView(ref, { threshold, once: true });
>>>>>>> origin/auto/autonomy-17186719616

  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: 50 };
      case 'down':
        return { opacity: 0, y: -50 };
      case 'left':
<<<<<<< HEAD
        return { opacity: 0x: 50 };
      case 'right':
        return { opacity: 0x: -50 };
=======
        return { opacity: 0, x: 50 };
      case 'right':
        return { opacity: 0, x: -50 };
>>>>>>> origin/auto/autonomy-17186719616
      default:
        return { opacity: 0, y: 50 };
    }
  };

  const getAnimatePosition = () => {
    switch (direction) {
      case 'up':
        return { opacity: 1, y: 0 };
      case 'down':
        return { opacity: 1, y: 0 };
      case 'left':
<<<<<<< HEAD
        return { opacity: 1x: 0 };
      case 'right':
        return { opacity: 1x: 0 };
=======
        return { opacity: 1, x: 0 };
      case 'right':
        return { opacity: 1, x: 0 };
>>>>>>> origin/auto/autonomy-17186719616
      default:
        return { opacity: 1, y: 0 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitialPosition()}
      animate={isInView ? getAnimatePosition() : getInitialPosition()}
<<<<<<< HEAD
      transition={{ duration: 0.8delayease: "easeOut" }}
=======
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
>>>>>>> origin/auto/autonomy-17186719616
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default LazySection;
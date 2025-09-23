<<<<<<< HEAD
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
=======
"use client";
import React{ useRef } from 'react';
import { motionuseInView } from 'framer-motion';
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982

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
  className = '',
=======
  className = ', ',
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
  threshold = 0.1,
  delay = 0,
  direction = 'up'
}) => {
  const ref = useRef<HTMLDivElement>(null);
<<<<<<< HEAD
  const isInView = useInView(ref, { threshold, once: true });
=======
  const isInView = useInView(ref{ thresholdonce: true });
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982

  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: 50 };
      case 'down':
        return { opacity: 0, y: -50 };
      case 'left':
<<<<<<< HEAD
        return { opacity: 0, x: 50 };
      case 'right':
        return { opacity: 0, x: -50 };
=======
        return { opacity: 0x: 50 };
      case 'right':
        return { opacity: 0x: -50 };
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
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
        return { opacity: 1, x: 0 };
      case 'right':
        return { opacity: 1, x: 0 };
=======
        return { opacity: 1x: 0 };
      case 'right':
        return { opacity: 1x: 0 };
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
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
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
=======
      transition={{ duration: 0.8delayease: "easeOut" }}
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default LazySection;
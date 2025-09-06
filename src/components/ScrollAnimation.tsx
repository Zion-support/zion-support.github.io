import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface ScrollAnimationProps {
  children: React.ReactNode;
  animation?: 'fadeIn' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'scale' | 'rotate';
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  animation = 'fadeIn',
  delay = 0,
  duration = 0.6,
  threshold = 0.1,
  className = '',
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold, once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const getAnimationVariants = () => {
    const baseVariants = {
      hidden: {},
      visible: {
        transition: {
          duration,
          delay,
          ease: 'easeOut',
        },
      },
    };

    switch (animation) {
      case 'fadeIn':
        return {
          ...baseVariants,
          hidden: { opacity: 0 },
          visible: { ...baseVariants.visible, opacity: 1 },
        };
      case 'slideUp':
        return {
          ...baseVariants,
          hidden: { opacity: 0, y: 50 },
          visible: { ...baseVariants.visible, opacity: 1, y: 0 },
        };
      case 'slideDown':
        return {
          ...baseVariants,
          hidden: { opacity: 0, y: -50 },
          visible: { ...baseVariants.visible, opacity: 1, y: 0 },
        };
      case 'slideLeft':
        return {
          ...baseVariants,
          hidden: { opacity: 0, x: 50 },
          visible: { ...baseVariants.visible, opacity: 1, x: 0 },
        };
      case 'slideRight':
        return {
          ...baseVariants,
          hidden: { opacity: 0, x: -50 },
          visible: { ...baseVariants.visible, opacity: 1, x: 0 },
        };
      case 'scale':
        return {
          ...baseVariants,
          hidden: { opacity: 0, scale: 0.8 },
          visible: { ...baseVariants.visible, opacity: 1, scale: 1 },
        };
      case 'rotate':
        return {
          ...baseVariants,
          hidden: { opacity: 0, rotate: -180 },
          visible: { ...baseVariants.visible, opacity: 1, rotate: 0 },
        };
      default:
        return baseVariants;
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={getAnimationVariants()}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;

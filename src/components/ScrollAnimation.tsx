import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface ScrollAnimationProps {
  children: React.ReactNode;
  animation?: 'fadeIn' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'scale' | 'rotate';
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  animation = 'fadeIn',
  delay = 0,
  duration = 0.6,
  className = '',
  threshold = 0.1
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    threshold,
    margin: '-50px 0px'
  });

  const animations = {
    fadeIn: {
      opacity: 0,
      y: 0
    },
    slideUp: {
      opacity: 0,
      y: 50
    },
    slideDown: {
      opacity: 0,
      y: -50
    },
    slideLeft: {
      opacity: 0,
      x: 50
    },
    slideRight: {
      opacity: 0,
      x: -50
    },
    scale: {
      opacity: 0,
      scale: 0.8
    },
    rotate: {
      opacity: 0,
      rotate: -10,
      scale: 0.8
    }
  };

  const animateTo = {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    rotate: 0
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={animations[animation]}
      animate={isInView ? animateTo : animations[animation]}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxSectionProps {
  children: React.ReactNode;
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  speed = 0.5,
<<<<<<< HEAD
  className = '',
  direction = 'up',
=======
  direction = 'up',
  className = ''
>>>>>>> cursor/integrate-build-improve-and-re-verify-9d47
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
<<<<<<< HEAD
    offset: ['start end', 'end start'],
  });

  const getTransform = () => {
    const baseTransform = scrollYProgress.get() * 100 * speed;

=======
    offset: ['start end', 'end start']
  });

  const getTransform = () => {
    const baseTransform = useTransform(scrollYProgress, [0, 1], [0, 1]);
    
>>>>>>> cursor/integrate-build-improve-and-re-verify-9d47
    switch (direction) {
      case 'up':
        return useTransform(baseTransform, [0, 1], [100 * speed, -100 * speed]);
      case 'down':
        return useTransform(baseTransform, [0, 1], [-100 * speed, 100 * speed]);
      case 'left':
        return useTransform(baseTransform, [0, 1], [100 * speed, -100 * speed]);
      case 'right':
        return useTransform(baseTransform, [0, 1], [-100 * speed, 100 * speed]);
      default:
        return useTransform(baseTransform, [0, 1], [0, 0]);
    }
  };

  const y = direction === 'up' || direction === 'down' ? getTransform() : 0;
  const x = direction === 'left' || direction === 'right' ? getTransform() : 0;

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        y,
        x
      }}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxSection;

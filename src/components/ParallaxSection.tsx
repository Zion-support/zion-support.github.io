import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxSectionProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  speed = 0.5,
  className = '',
  direction = 'up',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const getTransform = () => {
    const baseTransform = scrollYProgress.get() * 100 * speed;

    switch (direction) {
      case 'up':
        return useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed]);
      case 'down':
        return useTransform(scrollYProgress, [0, 1], [-100 * speed, 100 * speed]);
      case 'left':
        return useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed]);
      case 'right':
        return useTransform(scrollYProgress, [0, 1], [-100 * speed, 100 * speed]);
      default:
        return useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed]);
    }
  };

  const y = direction === 'up' || direction === 'down' ? getTransform() : 0;
  const x = direction === 'left' || direction === 'right' ? getTransform() : 0;

  return (
    <motion.div
      ref={ref}
      style={{ y, x }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxSection;

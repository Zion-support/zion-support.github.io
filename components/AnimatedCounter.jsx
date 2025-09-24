import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const AnimatedCounter = ({ 
  end, 
  duration = 2, 
  prefix = '', 
  suffix = '', 
  className = '',
  delay = 0 
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        let startTime = null;
        const startValue = 0;
        const endValue = end;

        const animate = (currentTime) => {
          if (startTime === null) startTime = currentTime;
          const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
          
          const easeOutQuart = 1 - Math.pow(1 - progress, 4);
          const currentCount = Math.floor(startValue + (endValue - startValue) * easeOutQuart);
          
          setCount(currentCount);
          
          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };

        requestAnimationFrame(animate);
      }, delay * 1000);
      
      return () => clearTimeout(timer);
    }
  }, [isInView, end, duration, delay]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay }}
    >
      {prefix}{count.toLocaleString()}{suffix}
    </motion.span>
  );
};

export default AnimatedCounter;
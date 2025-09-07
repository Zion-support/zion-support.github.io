import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
interface AnimatedCounterProps {
  end: number;,
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}
const AnimatedCounter: React.FC<AnimatedCounterProps> = ({,
  end,
  duration = 2,

  const [count, setCount] = useState(0);
  useEffect(() => {
    let startTime: number;,
    let animationFrame: number;,
    const animate = (currentTime:,  number) => {,
      if (!startTime) startTime = currentTime;

      setCount(currentCount);
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    animationFrame = requestAnimationFrame(animate);
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration]);
  return (
    <motion.span
      className={className}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </motion.span>
  );
};

export default AnimatedCounter;
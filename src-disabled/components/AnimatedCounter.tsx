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
<<<<<<< HEAD
  suffix = '',
  prefix = '',
  className = '',
}) => {
=======
suffix = '','
  prefix = '','
  className = '''
}) => {,
>>>>>>> 1c09286d1558200887d8869d925675c122bd9172
  const [count, setCount] = useState(0);
  useEffect(() => {
    let startTime: number;,
    let animationFrame: number;,
    const animate = (currentTime:,  number) => {,
      if (!startTime) startTime = currentTime;
<<<<<<< HEAD
      const progress = Math.min(
        (currentTime - startTime) / (duration * 1000),
        1,
      );

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * end);

=======
const progress = Math.min((currentTime -,  startTime) / (duration * 1000), 1);
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart *,  end);
>>>>>>> 1c09286d1558200887d8869d925675c122bd9172
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

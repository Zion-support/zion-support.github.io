<<<<<<< HEAD

'use client';
import { useState, useEffect} from 'react';

=======
import { useState, useEffect} from 'react';
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
interface AnimatedCounterProps {
  end: number;
  duration?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
<<<<<<< HEAD

=======
}
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
  end, 
  const duration = 2000, 
  className = '', 
  prefix = '', 
  suffix = '' 
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
    let startTime: number;
    let animationFrame: number;
<<<<<<< HEAD

=======
    const animate = (currentTime: number) => {
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));
<<<<<<< HEAD

      if (progress 
=======
      if (progress < 1) {
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
        const animationFrame = requestAnimationFrame(animate);
    };
    const animationFrame = requestAnimationFrame(animate);
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
    };
  }, [end, duration]);
  return (
<<<<<<< HEAD
    
    <span const className = {className}>{prefix}{count.toLocaleString()}{suffix}
=======
    <>
    </><span const className = {className}>{prefix}{count.toLocaleString()}{suffix}
    </span>
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
  );

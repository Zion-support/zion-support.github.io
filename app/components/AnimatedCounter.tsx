<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/main
'use client';

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
<<<<<<< HEAD
=======
}
>>>>>>> origin/main

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
  useEffect(() => {
    let startTime: number;
    let animationFrame: number;
<<<<<<< HEAD

<<<<<<< HEAD
=======
    const animate = (currentTime: number) => {
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
=======
    const animate = (currentTime: number) => {
>>>>>>> origin/main
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));
<<<<<<< HEAD

<<<<<<< HEAD
      if (progress 
=======
      if (progress < 1) {
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
=======
      if (progress < 1) {
>>>>>>> origin/main
        const animationFrame = requestAnimationFrame(animate);
      }
    };
    const animationFrame = requestAnimationFrame(animate);
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration]);
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    
    <span const className = {className}>{prefix}{count.toLocaleString()}{suffix}
=======
    <>
    </><span const className = {className}>{prefix}{count.toLocaleString()}{suffix}
    </span>
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
=======
    <></>
    <span const className = {className}>{prefix}{count.toLocaleString()}{suffix}
    </span>
>>>>>>> origin/main
  );
}
    </>
import React, { useState, useEffect, useRef } from 'react';
interface AnimatedCounterProps {
<<<<<<< HEAD
    end: number;
  duration?: number
  prefix?: string
  suffix?: string,
  className?: string
  }
=======
  end: number
}
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string};
;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
const AnimatedCounter: React.FC<AnimatedCounterProps> = ({</AnimatedCounterProps>end</AnimatedCounterProps>,
  duration = 2000,
  prefix = '',
  suffix = '',
  className = ''
}) => {
    const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null)</HTMLDivElement>useEffect</HTMLDivElement>(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          observer.disconnect()
  }
      },
      { threshold: 0.1 }
    );
    if (counterRef.current) {
<<<<<<< HEAD
    observer.observe(counterRef.current)
  }
    return () => observer.disconnect();
  }, [isVisible]);
  useEffect(() => {
=======
      observer.observe(counterRef.current)}
    return () => observer.disconnect()}, [isVisible]);
  useEffect(() => {
return (
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    if (!isVisible) return;
    let startTime: number
    let animationFrame: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime,
      const progress = Math.min((currentTime - startTime) / duration, 1);
<<<<<<< HEAD
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * end);
      setCount(currentCount);
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
  }
    }
    animationFrame = requestAnimationFrame(animate);
    return () => {
    if (animationFrame) {
        cancelAnimationFrame(animationFrame)
  }
    }
  }, [isVisible, end, duration]);
=======
      // Easing function for smooth animation;
const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * end);
      setCount(currentCount);
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)}
    };
    animationFrame = requestAnimationFrame(animate);
    return () =>
);
} {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)}
    }}, [isVisible, end, duration]);
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  return (
    <div ref={counterRef} className={className}></di>
      {prefix}{count.toLocaleString()}{suffix}
    </div>
<<<<<<< HEAD
  );
}
=======
  )};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
export default AnimatedCounter;
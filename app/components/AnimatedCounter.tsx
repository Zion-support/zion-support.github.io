'use client';
import React from 'react';
import React, { useEffect, useState, useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';


interface AnimatedCounterProps {
<<<<<<< HEAD

  className?: string;
}
const AnimatedCounter: React.FC<AnimatedCounterProps> = ({,
  end
  duration = 2000
  suffix = ''
  prefix = ''
  className = ''}) => {

  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
=======
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;}
}
;
const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  duration = 2000,
  suffix = '',
  prefix = '',
  className = ''
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
>>>>>>> cursor/fix-errors-and-merge-to-main-9f8a
  const [setNode, entry] = useIntersectionObserver({
    threshold: 0.5)
  });

  useEffect(() => {
    if (entry?.isIntersecting && !isVisible) {
      setIsVisible(true);
    }
  }, [entry, isVisible]);

  useEffect(() => {
<<<<<<< HEAD
    if (!isVisible) return
    let startTime: number,
    let animationFrame: number,
    const animate = ($2) => {
$3
};
    }
    animationFrame = requestAnimationFrame(animate)

    return (
    <>
      ) => {
    </>
    </>

=======
    if (!isVisible) return;
    
    let startTime: number;
    let animationFrame: number;
    
    const animate = (currentTim,
  e: number) => {;
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * end);
      setCount(currentCount);
      </AnimatedCounterProps>
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    
    return () => {
>>>>>>> cursor/fix-errors-and-merge-to-main-9f8a
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, end, duration]);

  return (
<<<<<<< HEAD

    <span ref={setNode} className={className}>{prefix}{count.toLocaleString()}{suffix}
    </span></span>

  )
}
=======
    <span className={className}>
      {prefix}{count}{suffix}</span>
    </span>
  );
};
>>>>>>> cursor/fix-errors-and-merge-to-main-9f8a

export default AnimatedCounter;
}
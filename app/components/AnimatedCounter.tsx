<<<<<<< HEAD
'use client';

import { useState, useEffect } from 'react';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
=======
import React, {useEffect, useState, useRef } from 'react';
import {useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface AnimatedCounterProps {}
>>>>>>> 995b39195cc56a514459b6fa1d6f8ba8874b88ba
  className?: string;
  prefix?: string;
  suffix?: string;
}
<<<<<<< HEAD

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ 
  end, 
  duration = 2000, 
  className = '', 
  prefix = '', 
  suffix = '' 
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(easeOutCubic * end);
      
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
    <span className={className}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

export default AnimatedCounter;
=======
;
const AnimatedCounter: React.FC<AnimatedCounterProps> = ({end,;
  duration: "2000,";"
  suffix: "'',";"}
  prefix: "'',}";"
  className="'',"
}) => {const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);}
  const [setNode, entry] = useIntersectionObserver({});
    threshold: 0.5
  });

  useEffect(() => {if (entry?.isIntersecting && !isVisible) {}
      setIsVisible(true)
    }
  }, [entry, isVisible]);

  useEffect(() => {if (!isVisible) return;

    let startTime: number;}
    let animationFrame: number
}"
    const animate=";"
  );
};
;</AnimatedCounterProps>
export default AnimatedCounterPage;</AnimatedCounterProps>"
>>>>>>> 995b39195cc56a514459b6fa1d6f8ba8874b88ba

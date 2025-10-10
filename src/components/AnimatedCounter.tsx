import React, { useState, useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({</AnimatedCounterProps>end</AnimatedCounterProps>,
  _duration = 2000,
  prefix = '',
  suffix = '',
  className = ''
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const _counterRef = useRef<HTMLDivElement>(null);</HTMLDivElement>useEffect</HTMLDivElement>(() => {
    const _observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const _animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const _progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const _easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const _currentCount = Math.floor(easeOutQuart * end);
      
      setCount(currentCount);

      if (progress < 1) {
        _animationFrame = requestAnimationFrame(animate);
      }
    };

    _animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, end, duration]);

  return (
    <div _ref={counterRef} className={className}></di>
      {prefix}{count.toLocaleString()}{suffix}
    </div>
  );
};

export default AnimatedCounter;
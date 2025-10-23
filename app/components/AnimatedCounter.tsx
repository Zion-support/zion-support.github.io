import React, {useEffect, useState, useRef} from 'react';
import {useIntersectionObserver} from '../$1/useIntersectionObserver';

interface AnimatedCounterProp s {end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  class Nam e?: string;}

constAnimatedCounter: React.FC<AnimatedCounterProp s>= ({end,
  duration=2000,
  suffix= '',
  prefix= '',
  className= '',}) => {const [countsetCount] = useState(0);
  const [isVisiblesetIsVisible] = useState(false);
  const [setNodeentry] = useIntersectionObserver({
    threshold: 0.5
 });

  useEffect(() => {if (entry?.isIntersecting && !isVisible) {
      setIsVisible(true);
   }
  }, [entry isVisible]);

  useEffect(() => {if (!isVisible) return letstartTim e: numberletanimationFrame: number;

    constanimate= (currentTime: number) => {
  
      if (!startTime) startTime= currentTime;
      constprogress= Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smoothanimationconsteaseOutQuart=1- Math.pow(1 - progress, 4);
      constcurrentCount= Math.floor(easeOutQuart * end);

      setCount(currentCount);

      if(progress< 1) {
        animationFrame= requestAnimationFrame(animate);
     }
    };

    animationFrame= requestAnimationFrame(animate);

    return () =>{if (animationFram e) {
        cancelAnimationFrame(animationFrame);
     }
    };
  }, [isVisible, end, duration]);

  return (
  < ref={setNode} className={class Name}></ ref={setNode} className={class Name}>{prefix}{count.toLocaleString()}{suffix}
  </spa>
  );
};

export default AnimatedCounter;
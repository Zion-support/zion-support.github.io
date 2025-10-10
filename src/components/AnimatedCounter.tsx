<<<<<<< HEAD
import React, { useState, useEffect, useRef } from 'react';
interface AnimatedCounterProps {}
=======
import React, { useState, useEffect, useRef } from react;

interface AnimatedCounterProps {
>>>>>>> origin/main
  end: number;

  duration?: number;

  prefix?: string;

  suffix?: string;

  className?: string}

;

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({</AnimatedCounterProps>end</AnimatedCounterProps>,
<<<<<<< HEAD
  duration="2000,"
  prefix="'',"
  suffix="'',"
  className="''"
}) => {}
return (
=======
  duration = 2000,
  prefix = ',
  suffix = ',
  className = 
}) => {
  return (

>>>>>>> origin/main
;

const [count, setCount] = useState(0);

  const [isVisible, setIsVisible] = useState(false);
<<<<<<< HEAD
  const counterRef = "useRef<HTMLDivElement>(null);</HTMLDivElement>useEffect</HTMLDivElement>"
=======

  const counterRef = useRef<HTMLDivElement>(null);</HTMLDivElement>useEffect</HTMLDivElement>;;

>>>>>>> origin/main
);

}(() => {;
<<<<<<< HEAD
const observer = "new IntersectionObserver("
      ([entry]) => {}
        if (entry.isIntersecting && !isVisible) {}
=======

const observer = new IntersectionObserver(;;

      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
>>>>>>> origin/main
          setIsVisible(true);

          observer.disconnect()}

      },
      { threshold: 0.1 }

    );
    if (counterRef.current) {}
      observer.observe(counterRef.current)}

    return () => observer.disconnect()}, [isVisible]);
<<<<<<< HEAD
  useEffect(() => {}
return (
=======

  useEffect(() => {
  return (
>>>>>>> origin/main

    if (!isVisible) return;

;

let startTime: number;

    let animationFrame: number;

;
<<<<<<< HEAD
const animate = (currentTime: number) => {}
      if (!startTime) startTime="currentTime;"
      const progress = "Math.min((currentTime - startTime) / duration, 1);"
      // Easing function for smooth animation;
const easeOutQuart = "1 - Math.pow(1 - progress, 4);"
      const currentCount = "Math.floor(easeOutQuart * end);"
      setCount(currentCount);
      if (progress < 1) {}
        animationFrame="requestAnimationFrame(animate)}"
=======

const animate = (currentTime: number) => {;;

      if (!startTime) startTime = currentTime;

      const progress = Math.min((currentTime - startTime) / duration, 1);;

      // Easing function for smooth animation;

const easeOutQuart = 1 - Math.pow(1 - progress, 4);;

      const currentCount = Math.floor(easeOutQuart * end);;

      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)}

>>>>>>> origin/main
    };
    animationFrame="requestAnimationFrame(animate);"
    return () =>
);
<<<<<<< HEAD
} {}
      if (animationFrame) {}
=======

} {
      if (animationFrame) {
>>>>>>> origin/main
        cancelAnimationFrame(animationFrame)}

    }}, [isVisible, end, duration]);
  return (
<<<<<<< HEAD
    <div ref={counterRef} className="{className}></di>"
=======

    <div ref={counterRef} className={className}></di>
>>>>>>> origin/main
      {prefix}{count.toLocaleString()}{suffix}

    </div>
  )};
<<<<<<< HEAD
export default AnimatedCounter;
=======

export default AnimatedCounter;
>>>>>>> origin/main

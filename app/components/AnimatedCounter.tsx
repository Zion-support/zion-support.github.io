<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
=======
'use client';
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
import React, { useState, useEffect } from 'react';

=======
import { useState, useEffect} from 'react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
interface AnimatedCounterProps {
  end: number;
=======
'use client';

import React, {useState, useEffect} from 'react';

interface AnimatedCounterProps {end: number;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
  duration?: number;
<<<<<<< HEAD
  prefix?: string;
<<<<<<< HEAD
  suffix?: string;
  className?: string;
=======
  suffix?: string;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  duration = 2000,
<<<<<<< HEAD
  prefix = '',
  suffix = '',
  className = ''
=======
  suffix = ''
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
}) => {
<<<<<<< HEAD
  const [count, setCount] = useState(0);

=======
  suffix?: string;}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({end,
  duration = 2000,
  className = '',
  prefix = '',
  suffix = ''}) => {const [count, setCount] = useState(0);
=======
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(easeOutQuart * end)
      
      setCount(currentCount)
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [end, duration])

  return (
    <span className={className}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-05cb

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

<<<<<<< HEAD
    const animate = (currentTime: number,) => {
=======
    const animate = (currentTime: number) => {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
<<<<<<< HEAD
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
<<<<<<< HEAD
      const currentCount = Math.floor(easeOutQuart * end);
      
      setCount(currentCount);

=======
      setCount(Math.floor(progress * end));
      
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
=======
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
    };

    animationFrame = requestAnimationFrame(animate);

<<<<<<< HEAD
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration]);
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361

const AnimatedCounter: React.FC = () => {
  return (
    <div className="animatedcounter">
      <h2>AnimatedCounter</h2>
      <p>AnimatedCounter component.</p>
    </div>
  );
=======

  return <span>{count}{suffix}</span>;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
=======
    return () => {if (animationFrame) {
        cancelAnimationFrame(animationFrame);}
    };
  }, [end, duration]);

  return (
<<<<<<< HEAD
    <span className={className}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
=======
import React from 'react';

const AnimatedCounter: React.FC<AnimatedCounterProps> = () => {
  return (
    <div className="animatedcounter">
      <h2>AnimatedCounter</h2>
      <p>Component content coming soon.</p>
    </div>
  );
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
};

export default AnimatedCounter;
=======
    <span className={className}>{prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796

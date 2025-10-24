<<<<<<< HEAD
'use client';;
=======

>>>>>>> 95f63d1bffe2d416304750c17f0532b44f8a7886
import React from 'react';

interface AnimatedCounterProps {
  // Add props here
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = (_props) => {
  return (
    <div>
      {/* Component content */}
    </div>
  );
};

export default AnimatedCounter;
<<<<<<< HEAD
'use client';
import React from 'react'
import React, { useState, useEffect } from 'react'
interface AnimatedCounterProps {
  end: number,
  duration?: number
  prefix?: string
  suffix?: string
  className?: string
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ()
}) => {
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
    return (
    <React.Fragment>
      ) => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [end, duration])
  return() {prefix}, {count.toLocaleString()}, {suffix}
    </span>
    </React.Fragment>
  )
}
export default AnimatedCounter
=======

>>>>>>> 95f63d1bffe2d416304750c17f0532b44f8a7886

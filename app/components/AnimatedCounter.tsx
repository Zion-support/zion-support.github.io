<<<<<<< HEAD
<<<<<<< HEAD
import React, { useEffect, useState, useRef } from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
interface AnimatedCounterProps {
  className?: string
}
const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end
  duration = 2000
  suffix = ''
  prefix = ''
  className = ''}) => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [setNode, entry] = useIntersectionObserver({
    threshold: 0.5})
  useEffect(() => {
    if (entry?.isIntersecting && !isVisible) {
      setIsVisible(true)
    }
  }, [entry, isVisible])
  useEffect(() => {
    if (!isVisible) return
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
    <>
      ) => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [isVisible, end, duration]
    </>
  )
  return (
    <span ref={setNode} className={className}>
      {prefix},
    {count.toLocaleString()},
    {suffix}
    </span>
  )
}
export default AnimatedCounter
=======
<<<<<<< HEAD
import React from 'react';
=======
import React, { useState, useEffect } from 'react';
>>>>>>> 1c3bcb5bf864

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  className?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ end, duration = 2000, className = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
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
<<<<<<< HEAD
    <div>
      {/* Component content */}
    </div>
=======
    <span className={className}>
      {count.toLocaleString()}
    </span>
>>>>>>> 1c3bcb5bf864
  );
};

export default AnimatedCounter;
=======
<<<<<<< HEAD
>>>>>>> cursor/fix-errors-and-merge-to-main-e66e
>>>>>>> main
=======
import React, { useEffect, useState, useRef } from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
interface AnimatedCounterProps {
  className?: string
}
const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end
  duration = 2000
  suffix = ''
  prefix = ''
  className = ''}) => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [setNode, entry] = useIntersectionObserver({
    threshold: 0.5})
  useEffect(() => {
    if (entry?.isIntersecting && !isVisible) {
      setIsVisible(true)
    }
  }, [entry, isVisible])
  useEffect(() => {
    if (!isVisible) return
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
    <>
      ) => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [isVisible, end, duration]
    </>
  )
  return (
    <span ref={setNode} className={className}>
      {prefix},
    {count.toLocaleString()},
    {suffix}
    </span>
  )
}
export default AnimatedCounter
>>>>>>> 0a8d6a0455c0 (Fix TypeScript syntax errors and component export issues)
>>>>>>> 1c3bcb5bf864

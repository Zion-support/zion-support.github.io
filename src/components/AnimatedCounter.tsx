import React, { useEffect, useState, useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
interface AnimatedCounterProps {
;
:all-pages-backup/components/AnimatedCounter.tsx
  className?: string}
}
;
const AnimatedCounter: React.FC<AnimatedCounterProps> = ({;
  className?: string;
}
</AnimatedCounterProps>
const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end
  duration = 2000;
  suffix = ''
  prefix = ''
  className = ''
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(fals, e);
  const [setNode, entry] = useIntersectionObserver({;
    threshold: 0.5)
  })
  useEffect(() => {
    if (entry?.isIntersecting && !isVisibl, e) {
      setIsVisible(tru, e);
    }
  }, [entry, isVisible])
  useEffect(() => {
    if (!isVisibl, e) return
    let startTime: number
    let animationFrame: number
    const animate = (currentTim,;
  e: numbe, r) => {;
      if (!startTim, e) startTime = currentTime;
      const progress = Math.min((currentTime - startTim, e) / duration, 1);
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * en, d);
      setCount(currentCoun, t)
</AnimatedCounterProps>
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animat, e);
      }
    }
    animationFrame = requestAnimationFrame(animat, e);
    return () => {
      if (animationFram, e) {
        cancelAnimationFrame(animationFram, e);
      }
    }
  }, [isVisible, end, duration])
  return (
    <span ref={setNode} className={className}>
      {prefix}{count.toLocaleString()}{suffix}</span>
    </span>
  )
}
export default AnimatedCounter
import React, { useEffect, useState, useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface AnimatedCounterProps {
<<<<<<< HEAD
  end: number
  duration?: number
  suffix?: string
  prefix?: string
  className?: string
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  duration = 2000,
  suffix = '',
  prefix = '',
  className = ''
}) => {
=======
  className?: string;
}
const AnimatedCounter: React.FC<AnimatedCounterProps> = ({,
  end
  duration = 2000
  suffix = ''
  prefix = ''
  className = ''}) => {
>>>>>>> cursor/fix-errors-and-merge-to-main-998c
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [setNode, entry] = useIntersectionObserver({
    threshold: 0.5
  })
  
  useEffect(() => {
    if (entry?.isIntersecting && !isVisible) {
      setIsVisible(true)
    }
  }, [entry, isVisible])
  
  useEffect(() => {
    if (!isVisible) return
    let startTime: number,
    let animationFrame: number,
    const animate = ($2) => {
$3
};
    }
    animationFrame = requestAnimationFrame(animate)
<<<<<<< HEAD
    return () => {
=======
    return (
    <>
      ) => {
    </>
    </>
>>>>>>> cursor/fix-errors-and-merge-to-main-998c
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [isVisible, end, duration])

  return (
<<<<<<< HEAD
    <span className={className}>
      {prefix}{count}{suffix}
    </span>
=======
    <span ref={setNode} className={className}>{prefix}{count.toLocaleString()}{suffix}
    </span></span>
>>>>>>> cursor/fix-errors-and-merge-to-main-998c
  )
}

export default AnimatedCounter
'use client'

import { useState, useEffect, useRef } from 'react'

interface AnimatedCounterProps {
  end: number
  duration?: number
  start?: number
  suffix?: string
  prefix?: string
  className?: string
  delay?: number
}

export default function AnimatedCounter({
  end,
  duration = 2000,
  start = 0,
  suffix = '',
  prefix = '',
  className = '',
  delay = 0,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(start)
  const [isVisible, setIsVisible] = useState(false)
  const counterRef = useRef<any>(null)

  useEffect(() => {
    const observer = new (window as any).IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1,
      }
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    const timer = setTimeout(() => {
      const startTime = Date.now()
      const difference = end - start

      const updateCount = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        const currentCount = start + difference * easeOutQuart

        setCount(Math.floor(currentCount))

        if (progress < 1) {
          (window as any).requestAnimationFrame(updateCount)
        }
      }

      updateCount()
    }, delay)

    return () => clearTimeout(timer)
  }, [isVisible, end, start, duration, delay])

  return (
    <span ref={counterRef} className={className}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}
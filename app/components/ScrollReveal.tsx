'use client'

import { useEffect, useRef, useState, ReactNode } from 'react'
import { clsx } from 'clsx'

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  distance?: string
  origin?: 'top' | 'bottom' | 'left' | 'right'
  easing?: string
  reset?: boolean
}

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  duration = 600,
  distance = '30px',
  origin = 'bottom',
  easing = 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  reset = false,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!hasAnimated || reset)) {
          setTimeout(() => {
            setIsVisible(true)
            if (!reset) {
              setHasAnimated(true)
            }
          }, delay)
        } else if (!entry.isIntersecting && reset) {
          setIsVisible(false)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [delay, hasAnimated, reset])

  const getTransform = () => {
    const transforms = {
      top: `translateY(-${distance})`,
      bottom: `translateY(${distance})`,
      left: `translateX(-${distance})`,
      right: `translateX(${distance})`,
    }
    return transforms[origin]
  }

  return (
    <div
      ref={elementRef}
      className={clsx(
        'transition-all ease-out',
        className
      )}
      style={{
        transform: isVisible ? 'translateY(0) translateX(0)' : getTransform(),
        opacity: isVisible ? 1 : 0,
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: easing,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
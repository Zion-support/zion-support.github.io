'use client'

import { useEffect, useRef, useState, ReactNode } from 'react'
import { clsx } from 'clsx'

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  distance?: string
  origin?: 'top' | 'bottom' | 'left' | 'right' | 'center'
  easing?: string
  reset?: boolean
  threshold?: number
  rootMargin?: string
  stagger?: number
  staggerChildren?: boolean
  mobile?: boolean
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
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px',
  stagger = 100,
  staggerChildren = false,
  mobile = true,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const [childIndex, setChildIndex] = useState(-1)
  const elementRef = useRef<any>(null)

  useEffect(() => {
    // Skip animation on mobile if mobile is false
    if (!mobile && window.innerWidth < 768) {
      setIsVisible(true)
      setHasAnimated(true)
      return
    }

    const observer = new (window as any).IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!hasAnimated || reset)) {
          if (staggerChildren && Array.isArray(children)) {
            // Stagger children animations
            const childCount = Array.isArray(children) ? children.length : 1
            for (let i = 0; i < childCount; i++) {
              setTimeout(() => {
                setChildIndex(i)
              }, i * stagger)
            }
          } else {
            setTimeout(() => {
              setIsVisible(true)
              if (!reset) {
                setHasAnimated(true)
              }
            }, delay)
          }
        } else if (!entry.isIntersecting && reset) {
          setIsVisible(false)
          setChildIndex(-1)
        }
      },
      {
        threshold,
        rootMargin,
      }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [delay, hasAnimated, reset, threshold, rootMargin, stagger, staggerChildren, mobile, children])

  const getTransform = () => {
    const transforms = {
      top: `translateY(-${distance})`,
      bottom: `translateY(${distance})`,
      left: `translateX(-${distance})`,
      right: `translateX(${distance})`,
      center: `scale(0.8)`,
    }
    return transforms[origin]
  }

  const getFinalTransform = () => {
    if (origin === 'center') {
      return 'scale(1)'
    }
    return 'translateY(0) translateX(0) scale(1)'
  }

  // Handle staggered children
  if (staggerChildren && Array.isArray(children)) {
    return (
      <div ref={elementRef} className={className}>
        {Array.isArray(children) ? children.map((child, index) => (
          <div
            key={index}
            className="transition-all ease-out"
            style={{
              transform: childIndex >= index ? getFinalTransform() : getTransform(),
              opacity: childIndex >= index ? 1 : 0,
              transitionDuration: `${duration}ms`,
              transitionTimingFunction: easing,
              transitionDelay: `${delay + (index * stagger)}ms`,
            }}
          >
            {child}
          </div>
        )) : children}
      </div>
    )
  }

  const shouldAnimate = staggerChildren ? childIndex >= 0 : isVisible

  return (
    <div
      ref={elementRef}
      className={clsx(
        'transition-all ease-out',
        className
      )}
      style={{
        transform: shouldAnimate ? getFinalTransform() : getTransform(),
        opacity: shouldAnimate ? 1 : 0,
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: easing,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
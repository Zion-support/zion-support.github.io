import React from 'react',
import React, { useEffect, useRef } from 'reactuse client',
interface ScrollRevealProps {
  children: React.ReactNode,
"use client",
const ScrollReveal: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
=======,
  origin?: 'top' | 'bottom' | 'left' | 'right',
  delay?: number}
,
const ScrollReveal: React.FC<ScrollRevealProps> = ({ children }) => {
  return <>{children}</>},
export default ScrollReveal,
'use client',
export default function ScrollReveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null),
  useEffect(() => {
    const el = ref.current,
    if (!el) return,
    el.style.opacity = '0',
    el.style.transition = 'opacity 0.6s ease-out',
    const onIntersect: IntersectionObserverCallback = ([entry]) => {
      if (entry.isIntersecting) {
        el.style.opacity = '1',
        observer.disconnect()}
    },
    const observer = new IntersectionObserver(onIntersect, { threshold: 0.1 }),
    observer.observe(el),
    return () => observer.disconnect()}, []),
  return <div ref={ref}>{children}</div>}
=======>>>>>>> 8f0785411043 (chore: auto-resolve merge conflicts (keep incoming))}
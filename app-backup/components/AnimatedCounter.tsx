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
    const animate = $2;
export default AnimatedCounter
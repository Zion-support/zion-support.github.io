import React, { useState, useEffect } from 'react'

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
  speed?: number
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  text, 
  className = '', 
  delay = 0,
  speed = 100 
}) => {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayedText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }
    }, speed)

    return () => clearTimeout(timer)
  }, [currentIndex, text, speed])

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex(0)
      setDisplayedText('')
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  return (
    <span className={className}>
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  )
}

export default AnimatedText

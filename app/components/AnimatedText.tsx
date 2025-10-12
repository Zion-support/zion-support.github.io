'use client'
import React, { useEffect, useState } from 'react'

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
  duration?: number
}

export default function AnimatedText({ 
  text, 
  className = '', 
  delay = 0, 
  duration = 1000 
}: AnimatedTextProps) {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayedText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }
    }, delay + (currentIndex * duration / text.length))
    
    return () => clearTimeout(timer)
  }, [currentIndex, text, delay, duration])
  
  return (
    <span className={className}>
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  )
}

interface TypewriterTextProps {
  texts: string[]
  className?: string
  delay?: number
  pauseDuration?: number
}

export function TypewriterText({ 
  texts, 
  className = '', 
  delay = 0, 
  pauseDuration = 2000 
}: TypewriterTextProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  
  useEffect(() => {
    const currentText = texts[currentTextIndex]
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentText.length) {
          setDisplayedText(currentText.slice(0, displayedText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), pauseDuration)
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setCurrentTextIndex((prev) => (prev + 1) % texts.length)
        }
      }
    }, delay + (isDeleting ? 50 : 100))
    
    return () => clearTimeout(timer)
  }, [displayedText, currentTextIndex, isDeleting, texts, delay, pauseDuration])
  
  return (
    <span className={className}>
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  )
}
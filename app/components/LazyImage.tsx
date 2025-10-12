'use client'
import React, { useState, useRef, useEffect } from 'react'
import { CheckCircle, ArrowRight, Phone, Mail, Zap, Shield, Brain, Globe } from 'lucide-react'

interface LazyImageProps {
  src: string
  alt: string
  className?: string
  placeholder?: string
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, className = '', placeholder }) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleLoad = () => {
    setIsLoaded(true)
  }

  return (
    <div ref={imgRef} className={`relative ${className}`}>
      {!isLoaded && placeholder && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded">
          <div className="flex items-center justify-center h-full">
            <div className="w-8 h-8 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
          </div>
        </div>
      )}
      {isInView && (
        <img
          src={src}
          alt={alt}
          onLoad={handleLoad}
          className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        />
      )}
    </div>
  )
}

export default LazyImage
'use client'
import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react'

interface ContentItem {
  id: string
  title: string
  description: string
  image?: string
  video?: string
  type: 'image' | 'video' | 'text'
}

interface DynamicContentShowcaseProps {
  items: ContentItem[]
  autoPlay?: boolean
  interval?: number
  showControls?: boolean
  className?: string
}

const DynamicContentShowcase: React.FC<DynamicContentShowcaseProps> = ({
  items,
  autoPlay = true,
  interval = 5000,
  showControls = true,
  className = ''
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(autoPlay)

  useEffect(() => {
    if (isPlaying && items.length > 1) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
      }, interval)

      return () => clearInterval(timer)
    }
  }, [isPlaying, items.length, interval])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  if (items.length === 0) {
    return null
  }

  const currentItem = items[currentIndex]

  return (
    <div className={`relative w-full h-full ${className}`}>
      {/* Main content area */}
      <div className="relative w-full h-full overflow-hidden rounded-lg">
        {currentItem.type === 'image' && currentItem.image && (
          <img
            src={currentItem.image}
            alt={currentItem.title}
            className="w-full h-full object-cover"
          />
        )}
        
        {currentItem.type === 'video' && currentItem.video && (
          <video
            src={currentItem.video}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
          />
        )}
        
        {currentItem.type === 'text' && (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-900 to-blue-900">
            <div className="text-center text-white p-8">
              <h3 className="text-2xl font-bold mb-4">{currentItem.title}</h3>
              <p className="text-lg">{currentItem.description}</p>
            </div>
          </div>
        )}

        {/* Overlay content */}
        <div className="absolute inset-0 bg-black/30 flex items-end">
          <div className="p-6 text-white">
            <h3 className="text-2xl font-bold mb-2">{currentItem.title}</h3>
            <p className="text-lg opacity-90">{currentItem.description}</p>
          </div>
        </div>
      </div>

      {/* Controls */}
      {showControls && (
        <>
          {/* Navigation arrows */}
          {items.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                aria-label="Previous item"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                aria-label="Next item"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Play/Pause button */}
          <button
            onClick={togglePlayPause}
            className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
          </button>

          {/* Dots indicator */}
          {items.length > 1 && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {items.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                  aria-label={`Go to item ${index + 1}`}
                />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default DynamicContentShowcase
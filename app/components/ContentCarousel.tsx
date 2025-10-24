'use client'
import React, { useState, useEffect } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

interface Slide {
  id: number
  title: string
  description: string
  features: string[]
  icon: React.ReactNode
  color: string
}

const ContentCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides: Slide[] = [
    {
      id: 1,
      title: 'AI-Powered Solutions',
      description: 'Advanced artificial intelligence solutions for modern businesses.',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      icon: '🤖',
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 2,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud infrastructure solutions.',
      features: ['Auto-scaling', 'High Availability', 'Security', 'Cost Optimization'],
      icon: '☁️',
      color: 'from-green-500 to-blue-600'
    },
    {
      id: 3,
      title: 'Data Analytics',
      description: 'Comprehensive data analytics and business intelligence.',
      features: ['Real-time Analytics', 'Data Visualization', 'Reporting', 'Insights'],
      icon: '📊',
      color: 'from-purple-500 to-pink-600'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="relative overflow-hidden rounded-xl">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="w-full flex-shrink-0">
              <div className={`bg-gradient-to-r ${slide.color} p-8 text-white`}>
                <div className="text-center">
                  <div className="text-6xl mb-4">{slide.icon}</div>
                  <h3 className="text-3xl font-bold mb-4">{slide.title}</h3>
                  <p className="text-xl mb-6 opacity-90">{slide.description}</p>
                  <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                    {slide.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center space-x-2 mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default ContentCarousel
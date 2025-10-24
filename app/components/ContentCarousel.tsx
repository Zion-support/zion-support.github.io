'use client'
import React, { useState, useEffect } from 'react'
import { ArrowRight, X, Brain, BarChart, Target, TrendingUp } from 'lucide-react'

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
      title: "AI-Powered Analytics",
      description: "Transform your data into actionable insights with our advanced AI analytics platform.",
      features: [
        "Real-time data processing",
        "Predictive analytics",
        "Custom dashboards",
        "Machine learning models"
      ],
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      title: "Performance Monitoring",
      description: "Monitor and optimize your application performance with comprehensive metrics.",
      features: [
        "Real-time monitoring",
        "Performance alerts",
        "Detailed reports",
        "Optimization suggestions"
      ],
      icon: <BarChart className="w-8 h-8" />,
      color: "from-green-500 to-teal-600"
    },
    {
      id: 3,
      title: "Target Optimization",
      description: "Optimize your targeting strategies with data-driven insights and recommendations.",
      features: [
        "Audience segmentation",
        "Behavioral analysis",
        "Conversion tracking",
        "ROI optimization"
      ],
      icon: <Target className="w-8 h-8" />,
      color: "from-orange-500 to-red-600"
    },
    {
      id: 4,
      title: "Growth Analytics",
      description: "Track and analyze your growth metrics to make informed business decisions.",
      features: [
        "Growth tracking",
        "Trend analysis",
        "Forecasting",
        "Strategic insights"
      ],
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-purple-500 to-pink-600"
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Carousel Container */}
      <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl">
        {/* Slide Content */}
        <div className="relative h-96">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                index === currentSlide
                  ? 'translate-x-0'
                  : index < currentSlide
                  ? '-translate-x-full'
                  : 'translate-x-full'
              }`}
            >
              <div className="flex h-full">
                {/* Content Side */}
                <div className="flex-1 p-8 flex flex-col justify-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${slide.color} rounded-2xl mb-6`}>
                    {slide.icon}
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {slide.title}
                  </h3>
                  
                  <p className="text-lg text-gray-600 mb-6">
                    {slide.description}
                  </p>
                  
                  <ul className="space-y-2 mb-8">
                    {slide.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center w-fit">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
                
                {/* Visual Side */}
                <div className={`flex-1 bg-gradient-to-br ${slide.color} flex items-center justify-center`}>
                  <div className="text-white text-center">
                    <div className="text-6xl mb-4 opacity-80">
                      {slide.icon}
                    </div>
                    <div className="text-2xl font-bold opacity-90">
                      {slide.title}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110"
        >
          <ArrowRight className="w-5 h-5 rotate-180" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110"
        >
          <ArrowRight className="w-5 h-5" />
        </button>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white scale-125'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ContentCarousel
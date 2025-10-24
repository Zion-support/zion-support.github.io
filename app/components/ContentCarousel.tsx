'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Zap, Shield, Brain, Cloud } from 'lucide-react';

<<<<<<< HEAD
interface ContentCarouselProps {
  items: Array<{
    id: string,
      title: string,
      description: string
    image?: string
    link?: string
  }>
  autoPlay?: boolean
  interval?: number
}

const ContentCarousel: React.FC<ContentCarouselProps> = ({
  items
  autoPlay = true
  interval = 5000
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  useEffect(() => {
    if (!autoPlay || items.length <= 1) return
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      )
    }, interval)
    return () => clearInterval(timer)
  }, [autoPlay, interval, items.length])
  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }
  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? items.length - 1 : currentIndex - 1)
  }
  const goToNext = () => {
    setCurrentIndex(currentIndex === items.length - 1 ? 0 : currentIndex + 1)
  }
  if (!items || items.length === 0) {
    return <div>No items to display</div>
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="relative overflow-hidden rounded-lg">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div key={item.id} className="w-full flex-shrink-0">
              <div className="relative h-64 md:h-96 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <div className="relative z-10 flex items-center justify-center h-full p-8">
                  <div className="text-center max-w-2xl">
                    <h3 className="text-2xl md:text-4xl font-bold mb-4">
                      {item.title}
                    </h3>
                    <p className="text-lg md:text-xl mb-6 opacity-90">
                      {item.description}
                    </p>
                    {item.link && (
                      <a
                        href={item.link}
                        className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        Learn More
                      </a>
                    )}
=======
interface Slide {
  id: number;
  title: string;
  description: string;
  features: string[];
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  stats?: {
    value: string;
    label: string;
  }[];
}

const ContentCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      id: 1,
      title: 'AI Solutions',
      description: 'Transform your business with cutting-edge artificial intelligence solutions.',
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics'
      ],
      icon: Zap,
      color: 'from-purple-500 to-pink-600',
    },
    {
      id: 2,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions that grow with your business needs.',
      features: [
        'Auto-scaling capabilities',
        '99.9% uptime guarantee',
        'Advanced security',
        'Cost optimization'
      ],
      icon: Cloud,
      color: 'from-green-500 to-blue-600',
    },
    {
      id: 3,
      title: 'AI Automation',
      description: 'Automate complex business processes with intelligent AI systems.',
      features: [
        'Process automation',
        'Workflow optimization',
        'Smart decision making',
        'Performance monitoring'
      ],
      icon: Brain,
      color: 'from-orange-500 to-red-600',
    },
    {
      id: 4,
      title: 'Cybersecurity Solutions',
      description: 'Protect your business with comprehensive AI-powered security solutions.',
      features: [
        'Threat detection',
        'Real-time monitoring',
        'Automated response',
        'Compliance management'
      ],
      icon: Shield,
      color: 'from-red-500 to-pink-600'
    }
  ];

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
    <div className="relative w-full max-w-6xl mx-auto">
      <div className="overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="w-full flex-shrink-0">
              <div className={`bg-gradient-to-br ${slide.color} p-8 md:p-12 text-white`}>
                <div className="max-w-4xl mx-auto">
                  <div className="flex items-center justify-center mb-6">
                    <div className="bg-white/20 p-4 rounded-full">
                      <slide.icon className="h-12 w-12" />
                    </div>
>>>>>>> 5f2517e6a8f3 (Fix merge conflicts and syntax errors)
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
<<<<<<< HEAD

      {/* Navigation buttons */}
      <button
        onClick={goToPrevious}
=======
      
      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
>>>>>>> 5f2517e6a8f3 (Fix merge conflicts and syntax errors)
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots indicator */}
      <div className="flex justify-center mt-4 space-x-2">
          {items.map((_, _index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
            }`}
<<<<<<< HEAD
            aria-label={`Go to slide ${index + 1}`}
=======
>>>>>>> 5f2517e6a8f3 (Fix merge conflicts and syntax errors)
          />
        ))}
      </div>
    </div>
<<<<<<< HEAD
  )
}
export default ContentCarousel
=======
  );
};

export default ContentCarousel;
>>>>>>> 5f2517e6a8f3 (Fix merge conflicts and syntax errors)

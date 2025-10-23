'use client'
import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, Star, Users, TrendingUp } from 'lucide-react'

interface Slide {
  icon: React.ComponentType<any>
  title: string
  description: string
  features: string[]
  color: string
  bgColor: string
}

const ContentCarousel: React.FC  = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const slides: Slide[] = [
    {
      icon: Brain,
      title: "AI-Powered Solutions",
      description: "Transform your business with cutting-edge artificial intelligence and machine learning technologies.",
      features: [
        "Machine Learning Models",
        "Natural Language Processing",
        "Predictive Analytics",
        "Computer Vision"
      ],
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-500/10 to-cyan-500/10"
    },
    {
      icon: Shield,
      title: "Cybersecurity Excellence",
      description: "Protect your digital assets with our comprehensive security solutions and threat monitoring.",
      features: [
        "Threat Detection",
        "Data Encryption",
        "Security Audits",
        "Compliance Management"
      ],
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-500/10 to-emerald-500/10"
    },
    {
      icon: Globe,
      title: "Cloud Infrastructure",
      description: "Scale your operations with our robust cloud solutions and infrastructure management.",
      features: [
        "Cloud Migration",
        "Scalable Architecture",
        "Performance Optimization",
        "24/7 Monitoring"
      ],
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-500/10 to-pink-500/10"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Enhance productivity with our collaboration tools and project management solutions.",
      features: [
        "Real-time Communication",
        "Project Tracking",
        "Resource Management",
        "Performance Analytics"
      ],
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-500/10 to-red-500/10"
    }
  ]

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, slides.length])

  const nextSlide  = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlaying(false)
  }

  const prevSlide  = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  const currentSlideData = slides[currentSlide]

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Main Carousel */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700">
        <div className="relative h-96 flex items-center">
          {/* Slide Content */}
          <div className="w-full px-8 py-12">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${currentSlideData.bgColor} mb-6`}>
                  <currentSlideData.icon className={`w-8 h-8 text-transparent bg-gradient-to-r ${currentSlideData.color} bg-clip-text`} />
                </div>
                
                <h2 className="text-4xl font-bold text-white mb-4">
                  {currentSlideData.title}
                </h2>
                
                <p className="text-xl text-gray-300 mb-6 max-w-2xl">
                  {currentSlideData.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {currentSlideData.features.map((feature, index) => (
                    <div key={index} className="flex items-center bg-slate-800/50 px-3 py-1 rounded-full">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 flex items-center">
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-slate-800/80 hover:bg-slate-700/80 text-white p-2 rounded-full transition-all duration-300"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-slate-800/80 hover:bg-slate-700/80 text-white p-2 rounded-full transition-all duration-300"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-cyan-500 scale-125'
                : 'bg-slate-600 hover:bg-slate-500'
            }`}
          />
        ))}
      </div>

      {/* Auto-play Toggle */}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
            isAutoPlaying
              ? 'bg-green-500/20 text-green-400 border border-green-500/30'
              : 'bg-slate-800/50 text-gray-400 border border-slate-600'
          }`}
        >
          {isAutoPlaying ? 'Pause' : 'Play'} Auto-rotation
        </button>
      </div>
    </div>
  )
}

export default ContentCarousel
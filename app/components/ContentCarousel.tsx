'use client'
import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, Star, Users, TrendingUp } from 'lucide-react'

interface Slide {
  icon: React.ComponentType<any>
  title: string
  description: string
  features: string[]
  stats?: {
    value: string
    label: string
  }[]
}

export default function ContentCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides: Slide[] = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      stats: [
        { value: '95%', label: 'Accuracy Rate' },
        { value: '40%', label: 'Cost Reduction' }
      ]
    },
    {
      icon: Shield,
      title: 'Cybersecurity Excellence',
      description: 'Comprehensive security solutions to protect your digital assets and ensure compliance',
      features: ['Threat Detection', 'Data Encryption', 'Compliance Management', 'Incident Response'],
      stats: [
        { value: '99.9%', label: 'Uptime' },
        { value: '24/7', label: 'Monitoring' }
      ]
    },
    {
      icon: Globe,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions designed to grow with your business needs',
      features: ['Cloud Migration', 'Auto Scaling', 'Load Balancing', 'Disaster Recovery'],
      stats: [
        { value: '50%', label: 'Faster Deployment' },
        { value: '60%', label: 'Cost Savings' }
      ]
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [])

  const currentSlideData = slides[currentSlide]

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-2xl p-8 shadow-2xl">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-white">Our Solutions</h2>
          <div className="flex space-x-2">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500">
                <currentSlideData.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">{currentSlideData.title}</h3>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              {currentSlideData.description}
            </p>

            <div className="space-y-3">
              {currentSlideData.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            {currentSlideData.stats && (
              <div className="grid grid-cols-2 gap-4 pt-4">
                {currentSlideData.stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-white/5 rounded-lg">
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}

            <button className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center">
              <currentSlideData.icon className="w-32 h-32 text-white/30" />
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-2 mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/30'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
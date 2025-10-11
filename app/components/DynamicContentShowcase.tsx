'use client'
import React, { useState, useEffect } from 'react'
import { Zap, Star, Users, TrendingUp, Shield, Cloud, BarChart3, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react'

const DynamicContentShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const features = [
    {
      icon: <Zap className="w-12 h-12 text-yellow-500" />,
      title: 'AI-Powered Automation',
      description: 'Streamline your workflows with intelligent automation that learns and adapts to your business needs.',
      color: 'from-yellow-400 to-orange-500',
      stats: { value: '85%', label: 'Efficiency Increase' }
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-500" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with advanced encryption and compliance standards for complete peace of mind.',
      color: 'from-blue-400 to-indigo-500',
      stats: { value: '99.9%', label: 'Uptime Guarantee' }
    },
    {
      icon: <Cloud className="w-12 h-12 text-green-500" />,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions that grow with your business and adapt to changing demands.',
      color: 'from-green-400 to-emerald-500',
      stats: { value: '50%', label: 'Cost Reduction' }
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-purple-500" />,
      title: 'Advanced Analytics',
      description: 'Transform your data into actionable insights with our comprehensive analytics platform.',
      color: 'from-purple-400 to-pink-500',
      stats: { value: '300%', label: 'ROI Improvement' }
    },
    {
      icon: <Users className="w-12 h-12 text-red-500" />,
      title: 'Team Collaboration',
      description: 'Enhanced team productivity with seamless collaboration tools and real-time communication.',
      color: 'from-red-400 to-rose-500',
      stats: { value: '40%', label: 'Productivity Boost' }
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-cyan-500" />,
      title: 'Growth Acceleration',
      description: 'Accelerate your business growth with data-driven strategies and proven methodologies.',
      color: 'from-cyan-400 to-blue-500',
      stats: { value: '200%', label: 'Growth Rate' }
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechCorp',
      content: 'Zion Tech Group transformed our entire IT infrastructure. The results have been phenomenal.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'CTO, InnovateLab',
      content: 'Their AI solutions have revolutionized our data analytics capabilities. Highly recommended!',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'VP Operations, GrowthCo',
      content: 'Outstanding service and support. They delivered exactly what they promised and more.',
      rating: 5
    }
  ]

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % features.length)
      }, 3000)
    }
    return () => clearInterval(interval)
  }, [isPlaying, features.length])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % features.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + features.length) % features.length)
  }

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const currentFeature = features[currentIndex]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Dynamic <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Showcase</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Experience the power of our cutting-edge solutions through interactive demonstrations and real-world examples.
        </p>
      </div>

      {/* Main Showcase */}
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Content Side */}
          <div className="p-8 lg:p-12">
            <div className="mb-6">
              <div className="flex items-center mb-4">
                {currentFeature.icon}
                <h3 className="text-2xl font-bold text-gray-900 ml-4">
                  {currentFeature.title}
                </h3>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                {currentFeature.description}
              </p>
              
              {/* Stats */}
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-4 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {currentFeature.stats.value}
                  </div>
                  <div className="text-sm text-gray-600">
                    {currentFeature.stats.label}
                  </div>
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center space-x-4">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              
              <button
                onClick={togglePlay}
                className="p-2 rounded-full bg-purple-100 hover:bg-purple-200 transition-colors duration-200"
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5 text-purple-600" />
                ) : (
                  <Play className="w-5 h-5 text-purple-600" />
                )}
              </button>
              
              <button
                onClick={nextSlide}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
              
              <div className="flex space-x-1 ml-4">
                {features.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                      index === currentIndex ? 'bg-purple-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Visual Side */}
          <div className={`bg-gradient-to-br ${currentFeature.color} p-8 lg:p-12 flex items-center justify-center`}>
            <div className="text-center text-white">
              <div className="text-6xl font-bold mb-4">
                {currentFeature.stats.value}
              </div>
              <div className="text-xl opacity-90">
                {currentFeature.stats.label}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 cursor-pointer ${
              index === currentIndex ? 'ring-2 ring-purple-500' : ''
            }`}
            onClick={() => setCurrentIndex(index)}
          >
            <div className="flex items-center mb-4">
              {feature.icon}
              <h3 className="text-lg font-semibold text-gray-900 ml-3">
                {feature.title}
              </h3>
            </div>
            <p className="text-gray-600 text-sm">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* Testimonials */}
      <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
        <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
          What Our Clients Say
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                "{testimonial.content}"
              </p>
              <div>
                <div className="font-semibold text-gray-900">
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-500">
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DynamicContentShowcase
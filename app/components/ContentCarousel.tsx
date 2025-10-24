'use client'
import React, { useState, useEffect } from 'react'
import { ArrowRight, X, Brain, BarChart, Target, TrendingUp, Cloud, Shield, Globe, Database, Users, Settings } from 'lucide-react'

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
  const [isModalOpen, setIsModalOpen] = useState(false)

  const slides: Slide[] = [
    {
      id: 1,
      title: "AI-Powered Analytics",
      description: "Transform your data into actionable insights with our advanced AI analytics platform.",
      features: [
        "Real-time data processing",
        "Predictive analytics",
        "Custom dashboards",
        "Automated reporting"
      ],
      icon: <Brain className="h-12 w-12" />,
      color: "from-blue-500 to-purple-500"
    },
    {
      id: 2,
      title: "Cloud Infrastructure",
      description: "Scalable, secure, and reliable cloud solutions for your business needs.",
      features: [
        "99.9% uptime guarantee",
        "Auto-scaling capabilities",
        "Advanced security",
        "24/7 monitoring"
      ],
      icon: <Cloud className="h-12 w-12" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 3,
      title: "Cybersecurity Solutions",
      description: "Protect your business with enterprise-grade security solutions.",
      features: [
        "Threat detection",
        "Vulnerability assessment",
        "Compliance management",
        "Incident response"
      ],
      icon: <Shield className="h-12 w-12" />,
      color: "from-red-500 to-pink-500"
    },
    {
      id: 4,
      title: "Digital Transformation",
      description: "Modernize your business processes with cutting-edge technology solutions.",
      features: [
        "Process automation",
        "Legacy system integration",
        "Workflow optimization",
        "Change management"
      ],
      icon: <Settings className="h-12 w-12" />,
      color: "from-orange-500 to-yellow-500"
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

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Main Carousel */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Our Solutions</h2>
            <p className="text-gray-300">Discover how we can transform your business</p>
          </div>
          <button
            onClick={openModal}
            className="flex items-center space-x-2 bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            <span>View All</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="relative">
          <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {slides.map((slide) => (
              <div key={slide.id} className="w-full flex-shrink-0">
                <div className="flex items-center space-x-8">
                  <div className="flex-1">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${slide.color} mb-6`}>
                      {slide.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{slide.title}</h3>
                    <p className="text-gray-300 text-lg mb-6">{slide.description}</p>
                    <ul className="space-y-2">
                      {slide.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex-1">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                          <div className="text-gray-300 text-sm">Uptime</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-white mb-2">24/7</div>
                          <div className="text-gray-300 text-sm">Support</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-white mb-2">500+</div>
                          <div className="text-gray-300 text-sm">Clients</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-white mb-2">5★</div>
                          <div className="text-gray-300 text-sm">Rating</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8">
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
          <div className="flex space-x-4">
            <button
              onClick={prevSlide}
              className="p-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors"
            >
              <ArrowRight className="w-5 h-5 rotate-180" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <h3 className="text-2xl font-bold text-gray-900">All Solutions</h3>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {slides.map((slide) => (
                  <div key={slide.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${slide.color} mb-4`}>
                      {slide.icon}
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{slide.title}</h4>
                    <p className="text-gray-600 mb-4">{slide.description}</p>
                    <ul className="space-y-1">
                      {slide.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ContentCarousel
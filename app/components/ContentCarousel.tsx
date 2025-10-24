'use client';
import React, { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, CheckCircle, Star, Zap, Shield, Brain, BarChart, Target, TrendingUp, Cloud } from 'lucide-react';
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

interface Slide {
  id: number
  title: string
  description: string
  features: string[]
  icon: React.ComponentType<{ className?: string }>
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
        "Automated reporting"
      ],
      icon: BarChart,
      color: "from-blue-500 to-cyan-500"
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
      icon: Cloud,
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 3,
      title: "Cybersecurity Solutions",
      description: "Protect your business with our comprehensive cybersecurity services.",
      features: [
        "Threat detection",
        "Vulnerability assessment",
        "Incident response",
        "Security training"
      ],
      icon: Shield,
      color: "from-red-500 to-pink-500"
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const currentSlideData = slides[currentSlide]

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Discover Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive suite of AI and IT solutions designed to transform your business.
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 md:p-12 overflow-hidden">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-xl flex items-center justify-center">
                    <currentSlideData.icon className="w-8 h-8 text-slate-900" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{currentSlideData.title}</h3>
                    <p className="text-gray-300">{currentSlideData.description}</p>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                <h4 className="text-lg font-semibold text-white mb-4">Key Features:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentSlideData.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                  <Zap className="w-5 h-5" />
                  Get Started
                </button>
                <button className="inline-flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <ArrowRight className="w-5 h-5" />
                  Learn More
                </button>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors duration-200 backdrop-blur-lg border border-white/20"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors duration-200 backdrop-blur-lg border border-white/20"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
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

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-3 text-white">
                <Star className="w-6 h-6 text-yellow-400" />
                <div className="text-left">
                  <div className="text-2xl font-bold">4.9/5</div>
                  <div className="text-gray-400 text-sm">Customer Rating</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3 text-white">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <div className="text-left">
                  <div className="text-2xl font-bold">99.9%</div>
                  <div className="text-gray-400 text-sm">Uptime</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3 text-white">
                <Zap className="w-6 h-6 text-purple-400" />
                <div className="text-left">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-gray-400 text-sm">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContentCarousel;
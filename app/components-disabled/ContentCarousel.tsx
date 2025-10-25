'use client'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, X, Brain, BarChart, Target, TrendingUp, Cloud, Shield, Check, CheckCircle } from 'lucide-react';;
import Navigation from './Navigation'
import Footer from './Footer'
import { CheckCircle, Star, Clock, Zap, Globe, Database, Users, Settings } from 'lucide-react'

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
        "Automated reporting"
      ],
      icon: <BarChart className="h-12 w-12" />,
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
      icon: <Cloud className="h-12 w-12" />,
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
      icon: <Shield className="h-12 w-12" />,
      color: "from-red-500 to-pink-500"
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <>
      <Helmet>
        <title>ContentCarousel</title>
        <meta name="description" content="Advanced ContentCarousel solution for modern businesses." />
        <meta name="keywords" content="AI, artificial intelligence, ContentCarousel, AI solutions, intelligent automation" />
      </Helmet>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              ContentCarousel
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced ContentCarousel solution for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Carousel Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Our Solutions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our comprehensive suite of AI-powered solutions
              </p>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-2xl">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {slides.map((slide) => (
                    <div key={slide.id} className="w-full flex-shrink-0">
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                        <div className="text-center mb-8">
                          <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${slide.color} mb-6`}>
                            {slide.icon}
                          </div>
                          <h3 className="text-3xl font-bold text-white mb-4">{slide.title}</h3>
                          <p className="text-xl text-gray-300 max-w-2xl mx-auto">{slide.description}</p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          {slide.features.map((feature, index) => (
                            <div key={index} className="flex items-center space-x-3">
                              <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                              <span className="text-gray-300">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors duration-200"
                aria-label="Previous slide"
              >
                <ArrowRight className="h-6 w-6 rotate-180" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors duration-200"
                aria-label="Next slide"
              >
                <ArrowRight className="h-6 w-6" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentSlide ? 'bg-emerald-400' : 'bg-white/30'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Choose the solution that best fits your business needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Start Free Trial
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default ContentCarousel
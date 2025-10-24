'use client'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, ChevronLeft, ChevronRight, Brain, BarChart, Target, TrendingUp, CheckCircle, Star, Clock, Zap, Shield, Globe, Database, Users, Settings, Cloud } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

interface Slide {id: number;
  title: string;
  description: string;
  features: string[]
  icon: React.ReactNode;
  color: string;
}

const ContentCarousel: React.FC = () => {const [currentSlide, setCurrentSlide] = useState(0)
  
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
    {id: 2,
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
    {id: 3,
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
  return;
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  
}

  const prevSlide = () => {
  return;
    setCurrentSlide((prev) =</ (prev - 1 + slides.length) % slides.length)
  
}

  const currentSlideData = slides[currentSlide]

  return (
    <>
      <Helmet />
        <title>Content Carousel - Zion Tech Group</title />
        <meta name="description" content="Advanced content carousel solution for modern businesses." / />
        <meta name="keywords" content="AI, artificial intelligence, content carousel, AI solutions, intelligent automation" / />
      </Helmet />
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md: text-7xl font-bold text-white mb-6 leading-tight"></h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">Content Carousel</h1 />
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed" />
              Advanced content carousel solution for modern businesses.
            </p />
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center" />
                Get Started;
                <ArrowRight className="ml-2 h-5 w-5" / />
              </button />
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200" />Learn More</button />
            </div />
          </div />
        </section />
        {/* Carousel Section  */
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Our Solutions</h2 />
              <p className="text-xl text-gray-300 max-w-3xl mx-auto" />
                Explore our comprehensive suite of AI and IT solutions designed to transform your business.
              </p />
            </div />
            {/* Carousel Container */}
            <div className="relative">
              <div className="$1"></div>
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-xl flex items-center justify-center">
                      {currentSlideData.icon}
                    </div />
                    <div />
                      <h3 className="text-2xl font-bold text-white mb-2">{currentSlideData.title}</h3 />
                      <p className="text-gray-300">{currentSlideData.description}</p />
                    </div />
                  </div />
                </div />
                {/* Features */}
                <div className="space-y-4 mb-8">
                  <h4 className="text-lg font-semibold text-white mb-4">Key Features:</h4 />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">{currentSlideData.features.map((feature, index) =</ (
                      <div key={index} className="flex items-center space-x-3" />
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" / />
                        <span className="text-gray-300">{feature}</span />
                      </div />
                    ))}
                  </div />
                </div />
                {/* CTA */}
                <div className="$1"></div>
                  <button className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105" />
                    <Zap className="w-5 h-5" / />Get Started</button />
                  <button className="inline-flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300" />
                    <ArrowRight className="w-5 h-5" / />Learn More</button />
                </div />
              </div />
              {/* Navigation Buttons  */
              <button onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover: bg-white/20 text-white p-3 rounded-full transition-colors duration-200 backdrop-blur-lg border border-white/20"
              ></button;
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover: bg-white/20 text-white p-3 rounded-full transition-colors duration-200 backdrop-blur-lg border border-white/20"
              >
                <ChevronLeft className="h-6 w-6" / />
              </button />
              <button onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover: bg-white/20 text-white p-3 rounded-full transition-colors duration-200 backdrop-blur-lg border border-white/20" />
                <ChevronRight className="h-6 w-6" / />
              </button />
            </div />
            {/* Slide Indicators  */
            <div className="flex justify-center mt-8 space-x-2">{slides.map((_, index) =</ (
                <button key={index}
                  onClick={() =>setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                /</
              ))}
            </div />
          </div />
        </section />
        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2 />
            <p className="text-xl text-gray-300 mb-8" />Join thousands of businesses already using our AI solutions</p />
            <div className="$1"></div>
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200" />Start Free Trial</button />
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200" />Contact Sales</button />
            </div />
          </div />
        </section />
      </div />
      <Footer / />
    </ />
  )
, }

export default ContentCarousel;
'use client'
import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, Star, Users, TrendingUp } from 'lucide-react'
interface Slide {
  icon: React.ComponentType<any>title: string</a>< 100ms', label: 'Response Time' },
        { value: '10M+', label: 'Requests/Day' }
      ]
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards',
      features: ['End-to-End Encryption', 'Compliance Standards', 'Security Audits', '24/7 Monitoring'],
      stats: [
        { value: '256-bit', label: 'Encryption' },
        { value: 'SOC 2', label: 'Compliance' },
        { value: 'Zero', label: 'Security Breaches' }
      ]
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses',
      features: ['Multi-Region Support', 'Local Compliance', 'Global CDN', 'International Support'],
      stats: [
        { value: '50+', label: 'Countries' },
        { value: '15+', label: 'Languages' },
        { value: '24/7', label: 'Global Support' }
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
    <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16 px-4" loading="lazy">
      <div className="max-w-7xl mx-auto" loading="lazy">
        <div className="text-center mb-12" loading="lazy">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" loading="lazy">Discover Our Solutions</h2><p className="text-xl text-purple-100 max-w-3xl mx-auto" loading="lazy">Explore our comprehensive suite of AI-powered solutions designed to transform your business.</p></div><div className="relative" loading="lazy">
<div className="overflow-hidden rounded-xl" loading="lazy">
            <div
              className="flex transition-transform duration-500 ease-in-out" loading="lazy"
              style={{ transform: `translateX(-${currentSlide * 100}%)`   );
};
            >{slides.map((slide, index) => (</div><div key={index} className="w-full flex-shrink-0" loading="lazy">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8" loading="lazy">
                    <div className="text-center mb-8" loading="lazy">
                      <div className="bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4" loading="lazy">
                        <slide.icon className="h-10 w-10 text-white" loading="lazy" />
                      </div><h3 className="text-2xl font-bold mb-4" loading="lazy">{slide.title}</h3><p className="text-purple-100 text-lg max-w-2xl mx-auto" loading="lazy">{slide.description}</p></div><div className="grid grid-cols-1 md:grid-cols-2 gap-4" loading="lazy">{slide.features.map((feature, featureIndex) => (</div><div key={featureIndex} className="flex items-center" loading="lazy">
                          <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" loading="lazy" />
                          <span className="text-purple-100" loading="lazy">{feature}</span></div></div></div></div><div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4" loading="lazy">
      <div className="max-w-7xl mx-auto" loading="lazy">{/* Header */}</div><div className="text-center mb-16" loading="lazy">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" loading="lazy">
            Discover Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400" loading="lazy">Solutions</span></h2><p className="text-xl text-gray-300 max-w-3xl mx-auto" loading="lazy">Explore our comprehensive suite of AI and IT solutions designed to transform your business.</p></div><div className="relative" loading="lazy">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 md:p-12 overflow-hidden" loading="lazy">
            <div className="flex items-center justify-between mb-8" loading="lazy">
              <div className="flex items-center gap-4" loading="lazy">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-xl flex items-center justify-center" loading="lazy">
                  <currentSlideData.icon className="w-8 h-8 text-slate-900" loading="lazy" />
                </div><div className="space-y-4" loading="lazy">
                  <h4 className="text-lg font-semibold text-white mb-4" loading="lazy">Key Features:</h4><div className="grid grid-cols-1 sm:grid-cols-2 gap-3" loading="lazy">{currentSlideData.features.map((feature, index) => (</div><div key={index} className="flex items-center space-x-3" loading="lazy">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" loading="lazy" />
                        <span className="text-gray-300" loading="lazy">{feature}</span></div></div></div><div className="grid grid-cols-3 gap-6" loading="lazy">{currentSlideData.stats.map((stat, index) => (</div><div key={index} className="text-center" loading="lazy">
                        <div className="text-2xl font-bold text-white mb-1" loading="lazy">{stat.value}</div><div className="text-gray-400 text-sm" loading="lazy">{stat.label}</div></div></div><div className="flex flex-col sm:flex-row gap-4" loading="lazy">
                  <button className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105" loading="lazy" aria-label="Action button">
                    <Zap className="w-5 h-5" loading="lazy" />
                    Get Started
  </
                  <button className="inline-flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300" loading="lazy" aria-label="Action button"><ArrowRight className="w-5 h-5" loading="lazy" />
                    Learn More
  </
                </div></div><div className="relative" loading="lazy">
                <div className="aspect-square bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center" loading="lazy">
                  <div className="text-center" loading="lazy">
                    <div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center" loading="lazy">
                      <currentSlideData.icon className="w-16 h-16 text-white" loading="lazy" />
                    </div><div className="text-4xl font-bold text-white mb-2" loading="lazy">{currentSlideData.title}</div><div className="text-gray-300" loading="lazy">Slide {currentSlide + 1} of {slides.length}</div></div></div></div></div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" loading="lazy">{currentSlideData.features.map((feature, index) => (</div><div key={index} className="flex items-center gap-3" loading="lazy">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" loading="lazy" />
                  <span className="text-gray-300" loading="lazy">{feature}</span></div></div><div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-slate-700" loading="lazy">{currentSlideData.stats.map((stat, index) => (</div><div key={index} className="text-center" loading="lazy">
                    <div className="text-3xl font-bold text-white mb-1" loading="lazy">{stat.value}</div><div className="text-sm text-gray-400" loading="lazy">{stat.label}</div></div></div></div><button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors duration-200 backdrop-blur-lg border border-white/20" loading="lazy" aria-label="Action button">
            <ChevronLeft className="h-6 w-6" loading="lazy" />
          </button><button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors duration-200 backdrop-blur-lg border border-white/20" loading="lazy" aria-label="Action button">
            <ChevronRight className="h-6 w-6" loading="lazy" />
          </button></div><ChevronLeft className="w-6 h-6" loading="lazy" />
          </button><button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors duration-200 backdrop-blur-lg border border-white/20" loading="lazy"
           aria-label="Action button">
            <ChevronRight className="w-6 h-6" loading="lazy" />
          </button></div><div className="flex justify-center mt-8 space-x-2" loading="lazy">{slides.map((_, index) => (</div><button
              key={index}
              onClick={() = aria-label="Action button">setCurrentSlide(index)}</button></div><div className="mt-16 text-center" loading="lazy">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto" loading="lazy">
            <div className="flex items-center justify-center gap-3 text-white" loading="lazy">
              <Star className="w-6 h-6 text-yellow-400" loading="lazy" />
              <div className="text-left" loading="lazy">
                <div className="text-2xl font-bold" loading="lazy">4.9/5</div><div className="text-gray-400 text-sm" loading="lazy">Customer Rating</div></div></div><div className="flex items-center justify-center gap-3 text-white" loading="lazy">
              <Users className="w-6 h-6 text-blue-400" loading="lazy" />
              <div className="text-left" loading="lazy">
                <div className="text-2xl font-bold" loading="lazy">10,000+</div><div className="text-gray-400 text-sm" loading="lazy">Happy Customers</div></div></div><div className="flex items-center justify-center gap-3 text-white" loading="lazy">
              <TrendingUp className="w-6 h-6 text-green-400" loading="lazy" />
              <div className="text-left" loading="lazy">
                <div className="text-2xl font-bold" loading="lazy">99.9%</div><div className="text-gray-400 text-sm" loading="lazy">Uptime</div></div></div></div><div className="text-center mt-12" loading="lazy">
          <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 font-semibold flex items-center mx-auto" loading="lazy" aria-label="Action button">Get Started Today</button><ArrowRight className="w-5 h-5 ml-2" loading="lazy" />
          </button></div></div></div>
  );
};
  );
  );
};
  );
};
}

export default About;
'use client'
import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, Star, Users, TrendingUp } from 'lucide-react'
interface Slide {
  icon: React.ComponentType<any></any>
  title: string
  description: string
  features: string[]
  stats?: {
    value: string
    label: string
  }[]
}
const ContentCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides: Slide[] = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      stats: [
        { value: '95%', label: 'Accuracy Rate' },
        { value: '10x', label: 'Faster Processing' },
        { value: '24/7', label: 'Automation' }
      ]
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results',
      features: ['Real-time Processing', 'Scalable Architecture', 'Optimized Performance', 'Low Latency'],
      stats: [
        { value: '99.9%', label: 'Uptime' },
        { value: '< 100ms', label: 'Response Time' },
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
    <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16 px-4"></div><>
<//div>
<div className="max-w-7xl mx-auto"></div><>
<//div>
<div className="text-center mb-12"></div><>
<//div>
<h2 className="text-3xl md:text-4xl font-bold mb-4"></h1><//h1>
            Discover Our Solutions</h1><>
<//h1>
</h1><>
<//h1>
<p className="text-xl text-purple-100 max-w-3xl mx-auto"></p><//p>
            Explore our comprehensive suite of AI-powered solutions designed to transform your business.</p><>
<//p>
</p><>
<//p>
</div><>
<//div>
<div className="relative"></div><>
<//div>
<div className="overflow-hidden rounded-xl"></div><>
<//div>
<div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            ></div><//div>
              {slides.map((slide, index) => (</div><>
<//div>
<div key={index} className="w-full flex-shrink-0"></div><>
<//div>
<div className="bg-white/10 backdrop-blur-sm rounded-xl p-8"></div><>
<//div>
<div className="text-center mb-8"></div><>
<//div>
<div className="bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4"></div><>
<//div>
<slide.icon className="h-10 w-10 text-white" /><>
</slide.icon className="h-10 w-10 text-white" />
</div><>
<//div>
<h3 className="text-2xl font-bold mb-4">{slide.title}</h3><>
<//h3>
<p className="text-purple-100 text-lg max-w-2xl mx-auto">{slide.description}</p><>
<//p>
</div><>
<//div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4"></div><//div>
                      {slide.features.map((feature, featureIndex) => (</div><>
<//div>
<div key={featureIndex} className="flex items-center"></div><>
<//div>
<CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" /><>
</CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
<span className="text-purple-100">{feature}</span><>
<//span>
</div><//div>
                      ))}
                    </div><>
<//div>
</div><>
<//div>
</div><//div>
              ))}
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4"></div><>
<//div>
<div className="max-w-7xl mx-auto"></div><//div>
        {/* Header */}</div><>
<//div>
<div className="text-center mb-16"></div><>
<//div>
<h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h1><//h1>
            Discover Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Solutions</span><>
<//span>
</h2><>
<//h2>
<p className="text-xl text-gray-300 max-w-3xl mx-auto"></p><//p>
            Explore our comprehensive suite of AI and IT solutions designed to transform your business.</p><>
<//p>
</p><>
<//p>
</div><//div>
        {/* Carousel Container */}
        {/* Carousel */}
        <div className="relative"></div><>
<//div>
<div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 md:p-12 overflow-hidden"></div><>
<//div>
<div className="flex items-center justify-between mb-8"></div><>
<//div>
<div className="flex items-center gap-4"></div><>
<//div>
<div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-xl flex items-center justify-center"></div><>
<//div>
<currentSlideData.icon className="w-8 h-8 text-slate-900" /><>
</currentSlideData.icon className="w-8 h-8 text-slate-900" />
</div><//div>
                {/* Features */}
                <div className="space-y-4"></div><>
<//div>
<h4 className="text-lg font-semibold text-white mb-4">Key Features:</h4><>
<//h4>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3"></div><//div>
                    {currentSlideData.features.map((feature, index) => (</div><>
<//div>
<div key={index} className="flex items-center space-x-3"></div><>
<//div>
<CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" /><>
</CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
<span className="text-gray-300">{feature}</span><>
<//span>
</div><//div>
                    ))}
                  </div><>
<//div>
</div><//div>
                {/* Stats */}
                {currentSlideData.stats && (
                  <div className="grid grid-cols-3 gap-6"></div><//div>
                    {currentSlideData.stats.map((stat, index) => (</div><>
<//div>
<div key={index} className="text-center"></div><>
<//div>
<div className="text-2xl font-bold text-white mb-1">{stat.value}</div><>
<//div>
<div className="text-gray-400 text-sm">{stat.label}</div><>
<//div>
</div><//div>
                    ))}
                  </div><//div>
                )}
                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4"></div><>
<//div>
<button className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"></button><>
<//button>
<Zap className="w-5 h-5" /></Zap className="w-5 h-5" />
                    Get Started
  </h1><>
<//h1>
<button className="inline-flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"></button><>
<//button>
<ArrowRight className="w-5 h-5" /></ArrowRight className="w-5 h-5" />
                    Learn More
  </h1><>
<//h1>
</div><>
<//div>
</div><//div>
              {/* Visual Element */}
              <div className="relative"></div><>
<//div>
<div className="aspect-square bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center"></div><>
<//div>
<div className="text-center"></div><>
<//div>
<div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center"></div><>
<//div>
<currentSlideData.icon className="w-16 h-16 text-white" /><>
</currentSlideData.icon className="w-16 h-16 text-white" />
</div><>
<//div>
<div className="text-4xl font-bold text-white mb-2"></div><//div>
                      {currentSlideData.title}</div><>
<//div>
</div><>
<//div>
<div className="text-gray-300"></div><//div>
                      Slide {currentSlide + 1} of {slides.length}</div><>
<//div>
</div><>
<//div>
</div><>
<//div>
</div><>
<//div>
</div><>
<//div>
</div><>
<//div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"></div><//div>
              {currentSlideData.features.map((feature, index) => (</div><>
<//div>
<div key={index} className="flex items-center gap-3"></div><>
<//div>
<CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" /><>
</CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
<span className="text-gray-300">{feature}</span><>
<//span>
</div><//div>
              ))}
            </div><//div>
            {/* Stats */}
            {currentSlideData.stats && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-slate-700"></div><//div>
                {currentSlideData.stats.map((stat, index) => (</div><>
<//div>
<div key={index} className="text-center"></div><>
<//div>
<div className="text-3xl font-bold text-white mb-1">{stat.value}</div><>
<//div>
<div className="text-sm text-gray-400">{stat.label}</div><>
<//div>
</div><//div>
                ))}
              </div><//div>
            )}
          </div><//div>
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors duration-200 backdrop-blur-lg border border-white/20"></button><>
<//button>
<ChevronLeft className="h-6 w-6" /><>
</ChevronLeft className="h-6 w-6" />
</button><>
<//button>
<button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors duration-200 backdrop-blur-lg border border-white/20"></button><>
<//button>
<ChevronRight className="h-6 w-6" /><>
</ChevronRight className="h-6 w-6" />
</button><>
<//button>
</div><//div>
{/* Slide Indicators */}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors duration-200 backdrop-blur-lg border border-white/20"
          >
            <ChevronLeft className="w-6 h-6" /><>
</ChevronLeft className="w-6 h-6" />
</button><>
<//button>
<button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors duration-200 backdrop-blur-lg border border-white/20"
          ></button><>
<//button>
<ChevronRight className="w-6 h-6" /><>
</ChevronRight className="w-6 h-6" />
</button><>
<//button>
</div><//div>
        {/* Slide Indicators */}
        <div className="flex justify-center mt-8 space-x-2"></div><//div>
          {slides.map((_, index) => (</div><>
<//div>
<button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentSlide ? 'bg-cyan-400' : 'bg-white/30'
              }`}
            /></button><//button>
          ))}</button><>
<//button>
</div><//div>
        {/* Additional Info */}
        <div className="mt-16 text-center"></div><>
<//div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"></div><>
<//div>
<div className="flex items-center justify-center gap-3 text-white"></div><>
<//div>
<Star className="w-6 h-6 text-yellow-400" /><>
</Star className="w-6 h-6 text-yellow-400" />
<div className="text-left"></div><>
<//div>
<div className="text-2xl font-bold">4.9/5</div><>
<//div>
<div className="text-gray-400 text-sm">Customer Rating</div><>
<//div>
</div><>
<//div>
</div><>
<//div>
<div className="flex items-center justify-center gap-3 text-white"></div><>
<//div>
<Users className="w-6 h-6 text-blue-400" /><>
</Users className="w-6 h-6 text-blue-400" />
<div className="text-left"></div><>
<//div>
<div className="text-2xl font-bold">10,000+</div><>
<//div>
<div className="text-gray-400 text-sm">Happy Customers</div><>
<//div>
</div><>
<//div>
</div><>
<//div>
<div className="flex items-center justify-center gap-3 text-white"></div><>
<//div>
<TrendingUp className="w-6 h-6 text-green-400" /><>
</TrendingUp className="w-6 h-6 text-green-400" />
<div className="text-left"></div><>
<//div>
<div className="text-2xl font-bold">99.9%</div><>
<//div>
<div className="text-gray-400 text-sm">Uptime</div><>
<//div>
</div><>
<//div>
</div><>
<//div>
</div><>
<//div>
<div className="text-center mt-12"></div><>
<//div>
<button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 font-semibold flex items-center mx-auto"></button><//button>
            Get Started Today</button><>
<//button>
<ArrowRight className="w-5 h-5 ml-2" /><>
</ArrowRight className="w-5 h-5 ml-2" />
</button><>
<//button>
</div><>
<//div>
</div><>
<//div>
</div><//div>
  )
}
export default ContentCarousel

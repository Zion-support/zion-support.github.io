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
    <div className=&quot;relative bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16 px-4&quot;></div>
      <div className=&quot;max-w-7xl mx-auto&quot;></div>
        <div className=&quot;text-center mb-12&quot;></div>
          <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>
            Discover Our Solutions

          <p className=&quot;text-xl text-purple-100 max-w-3xl mx-auto&quot;>
            Explore our comprehensive suite of AI-powered solutions designed to transform your business.
          </p>
        </div>
        <div className=&quot;relative&quot;></div>
<div className=&quot;overflow-hidden rounded-xl&quot;></div>
            <div
              className=&quot;flex transition-transform duration-500 ease-in-out&quot;
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            ></div>
              {slides.map((slide, index) => (
<div key={index} className=&quot;w-full flex-shrink-0&quot;></div>
                  <div className=&quot;bg-white/10 backdrop-blur-sm rounded-xl p-8&quot;></div>
                    <div className=&quot;text-center mb-8&quot;></div>
                      <div className=&quot;bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4&quot;></div>
                        <slide.icon className=&quot;h-10 w-10 text-white&quot; />
                      </div>
                      <h3 className=&quot;text-2xl font-bold mb-4&quot;>{slide.title}</h3>
                      <p className=&quot;text-purple-100 text-lg max-w-2xl mx-auto&quot;>{slide.description}</p>
                    </div>
                    <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;></div>
                      {slide.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className=&quot;flex items-center&quot;></div>
                          <CheckCircle className=&quot;h-5 w-5 text-green-400 mr-3 flex-shrink-0&quot; />
                          <span className=&quot;text-purple-100&quot;>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
    <div className=&quot;bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4&quot;></div>
      <div className=&quot;max-w-7xl mx-auto&quot;></div>
        {/* Header */}
        <div className=&quot;text-center mb-16&quot;></div>
          <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-6&quot;>
            Discover Our <span className=&quot;text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400&quot;>Solutions</span>
          </h2>
          <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
            Explore our comprehensive suite of AI and IT solutions designed to transform your business.
          </p>
        </div>
        {/* Carousel Container */}
        {/* Carousel */}
        <div className=&quot;relative&quot;></div>
          <div className=&quot;bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 md:p-12 overflow-hidden&quot;></div>
            <div className=&quot;flex items-center justify-between mb-8&quot;></div>
              <div className=&quot;flex items-center gap-4&quot;></div>
                <div className=&quot;w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-xl flex items-center justify-center&quot;></div>
                  <currentSlideData.icon className=&quot;w-8 h-8 text-slate-900&quot; />
                </div>
                {/* Features */}
                <div className=&quot;space-y-4&quot;></div>
                  <h4 className=&quot;text-lg font-semibold text-white mb-4&quot;>Key Features:</h4>
                  <div className=&quot;grid grid-cols-1 sm:grid-cols-2 gap-3&quot;></div>
                    {currentSlideData.features.map((feature, index) => (
                      <div key={index} className=&quot;flex items-center space-x-3&quot;></div>
                        <CheckCircle className=&quot;w-5 h-5 text-green-400 flex-shrink-0&quot; />
                        <span className=&quot;text-gray-300&quot;>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Stats */}
                {currentSlideData.stats && (
                  <div className=&quot;grid grid-cols-3 gap-6&quot;></div>
                    {currentSlideData.stats.map((stat, index) => (
                      <div key={index} className=&quot;text-center&quot;></div>
                        <div className=&quot;text-2xl font-bold text-white mb-1&quot;>{stat.value}</div>
                        <div className=&quot;text-gray-400 text-sm&quot;>{stat.label}</div>
                      </div>
                    ))}
                  </div>
                )}
                {/* CTA */}
                <div className=&quot;flex flex-col sm:flex-row gap-4&quot;></div>
                  <button className=&quot;inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105&quot;>
                    <Zap className=&quot;w-5 h-5&quot; />
                    Get Started

                  <button className=&quot;inline-flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300&quot;>
                    <ArrowRight className=&quot;w-5 h-5&quot; />
                    Learn More

                </div>
              </div>
              {/* Visual Element */}
              <div className=&quot;relative&quot;></div>
                <div className=&quot;aspect-square bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center&quot;></div>
                  <div className=&quot;text-center&quot;></div>
                    <div className=&quot;w-32 h-32 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center&quot;></div>
                      <currentSlideData.icon className=&quot;w-16 h-16 text-white&quot; />
                    </div>
                    <div className=&quot;text-4xl font-bold text-white mb-2&quot;></div>
                      {currentSlideData.title}
                    </div>
                    <div className=&quot;text-gray-300&quot;></div>
                      Slide {currentSlide + 1} of {slides.length}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6&quot;></div>
              {currentSlideData.features.map((feature, index) => (
                <div key={index} className=&quot;flex items-center gap-3&quot;></div>
                  <CheckCircle className=&quot;w-5 h-5 text-cyan-400 flex-shrink-0&quot; />
                  <span className=&quot;text-gray-300&quot;>{feature}</span>
                </div>
              ))}
            </div>
            {/* Stats */}
            {currentSlideData.stats && (
              <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-slate-700&quot;></div>
                {currentSlideData.stats.map((stat, index) => (
                  <div key={index} className=&quot;text-center&quot;></div>
                    <div className=&quot;text-3xl font-bold text-white mb-1&quot;>{stat.value}</div>
                    <div className=&quot;text-sm text-gray-400&quot;>{stat.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className=&quot;absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors duration-200 backdrop-blur-lg border border-white/20&quot;>
            <ChevronLeft className=&quot;h-6 w-6&quot; />
          </button>
          <button
            onClick={nextSlide}
            className=&quot;absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors duration-200 backdrop-blur-lg border border-white/20&quot;>
            <ChevronRight className=&quot;h-6 w-6&quot; />
          </button>
        </div>
{/* Slide Indicators */}
            className=&quot;absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors duration-200 backdrop-blur-lg border border-white/20&quot;
          >
            <ChevronLeft className=&quot;w-6 h-6&quot; />
          </button>
          <button
            onClick={nextSlide}
            className=&quot;absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors duration-200 backdrop-blur-lg border border-white/20&quot;
          >
            <ChevronRight className=&quot;w-6 h-6&quot; />
          </button>
        </div>
        {/* Slide Indicators */}
        <div className=&quot;flex justify-center mt-8 space-x-2&quot;></div>
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentSlide ? 'bg-cyan-400' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
        {/* Additional Info */}
        <div className=&quot;mt-16 text-center&quot;></div>
          <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto&quot;></div>
            <div className=&quot;flex items-center justify-center gap-3 text-white&quot;></div>
              <Star className=&quot;w-6 h-6 text-yellow-400&quot; />
              <div className=&quot;text-left&quot;></div>
                <div className=&quot;text-2xl font-bold&quot;>4.9/5</div>
                <div className=&quot;text-gray-400 text-sm&quot;>Customer Rating</div>
              </div>
            </div>
            <div className=&quot;flex items-center justify-center gap-3 text-white&quot;></div>
              <Users className=&quot;w-6 h-6 text-blue-400&quot; />
              <div className=&quot;text-left&quot;></div>
                <div className=&quot;text-2xl font-bold&quot;>10,000+</div>
                <div className=&quot;text-gray-400 text-sm&quot;>Happy Customers</div>
              </div>
            </div>
            <div className=&quot;flex items-center justify-center gap-3 text-white&quot;></div>
              <TrendingUp className=&quot;w-6 h-6 text-green-400&quot; />
              <div className=&quot;text-left&quot;></div>
                <div className=&quot;text-2xl font-bold&quot;>99.9%</div>
                <div className=&quot;text-gray-400 text-sm&quot;>Uptime</div>
              </div>
            </div>
          </div>
        <div className=&quot;text-center mt-12&quot;></div>
          <button className=&quot;bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 font-semibold flex items-center mx-auto&quot;>
            Get Started Today
            <ArrowRight className=&quot;w-5 h-5 ml-2&quot; />
          </button>
        </div>
      </div>
    </div>
  )
}
export default ContentCarousel
</button>
</button>
</button>
</div>
</div>
</div>
</h2>
</div>
</div>
</any>
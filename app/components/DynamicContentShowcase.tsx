'use client'
import React, { useState, useEffect } from 'react'
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, Star, Users, Clock, Award, Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react'
interface Feature {
  icon: React.ComponentType<any>title: string</a>
  description: string
  stats?: {
    value: string
    label: string
  }[]
}
interface Testimonial {
  id: number
  name: string
  company: string
  role: string
  content: string
  rating: number
  avatar: string
}
interface Feature {
  icon: React.ComponentType<any>title: string</a>
  description: string
  benefits: string[]
}
const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const features: Feature[] = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced artificial intelligence to automate and optimize your business processes',
      benefits: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results',
      benefits: ['Real-time Processing', 'Scalable Architecture', 'Optimized Performance', 'Low Latency']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards',
      benefits: ['End-to-End Encryption', 'Compliance Standards', 'Security Audits', '24/7 Monitoring']
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses',
      benefits: ['Multi-Region Support', 'Local Compliance', 'Global CDN', 'International Support']
    }
  ]
  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ]
  const testimonials: Testimonial[] = [
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      content: 'This solution transformed our operations completely. The AI insights are incredible and have helped us make data-driven decisions that increased our efficiency by 300%.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'CEO',
content: 'The performance improvements we\'ve seen are remarkable. Highly recommended!',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
company: 'InnovateLab',
      role: 'Product Manager',
      content: 'The best investment we made this year. ROI was evident within the first month, and the support team is absolutely fantastic.',
      rating: 5
    },
    {
      name: 'David Kim',
      company: 'CloudFirst Solutions',
      role: 'VP Engineering',
      content: 'Seamless integration with our existing systems. The scalability and performance exceeded our expectations.',
      rating: 5
    }
  ]
  useEffect(() => {
    if (!isPlaying) return
    const timer = setInterval(() => {
setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [isPlaying, testimonials.length])
  const stats = [
    { icon: Users, value: '10,000+', label: 'Happy Customers' },
    { icon: TrendingUp, value: '99.9%', label: 'Uptime' },
    { icon: Star, value: '4.9/5', label: 'Rating' },
    { icon: Zap, value: '24/7', label: 'Support' }
  ]
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }
  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }
  const currentTestimonial = testimonials[currentIndex]
  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000)
    return () => clearInterval(timer)
  }, [])
  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" loading="lazy">>{/* Hero Section */}
        <section className="py-20 px-4" loading="lazy">
        <div className="max-w-7xl mx-auto text-center" loading="lazy">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" loading="lazy">
            Transform Your Business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400" loading="lazy">AI Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8" loading="lazy">Join thousands of businesses that have revolutionized their operations with our cutting-edge AI and IT solutions.</p>
  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4" loading="lazy">
      <div className="max-w-7xl mx-auto" loading="lazy">
        <div className="text-center mb-16" loading="lazy">
          <h2 className="text-4xl font-bold text-white mb-6" loading="lazy">Our Solutions</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto" loading="lazy">Discover how our cutting-edge AI and IT solutions can transform your business</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" loading="lazy">
            <button className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105" loading="lazy" aria-label="Action button">
              <Play className="w-5 h-5" loading="lazy" />
              Start Demo
  </
            <button className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300" loading="lazy" aria-label="Action button">
              <ArrowRight className="w-5 h-5" loading="lazy" />
              Learn More
  </
          </div>
        </div>
{/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16" loading="lazy">{features.map((feature, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300" loading="lazy">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-4" loading="lazy">
                <feature.icon className="w-6 h-6 text-white" loading="lazy" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3" loading="lazy">{feature.title}</h3>
              <p className="text-gray-300" loading="lazy">{feature.description}</p>
            </div>
          ))}
        </div>
        {/* Benefits Section */}
        <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 mb-16" loading="lazy">
          <h3 className="text-2xl font-bold text-white mb-6 text-center" loading="lazy">Why Choose Us?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" loading="lazy">{benefits.map((benefit, index) => (
              <div key={index} className="flex items-center" loading="lazy">
                <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" loading="lazy" />
                <span className="text-gray-300" loading="lazy">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Testimonials */}
        <div className="text-center" loading="lazy">
          <h3 className="text-2xl font-bold text-white mb-8" loading="lazy">What Our Clients Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" loading="lazy">{testimonials.map((testimonial, index) => (</div>
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10" loading="lazy">
                <div className="flex justify-center mb-4" loading="lazy">
                  <stat.icon className="w-8 h-8 text-blue-400" loading="lazy" />
                </div>
                <div className="text-3xl font-bold text-white mb-2" loading="lazy">{stat.value}</div>
                <div className="text-gray-300" loading="lazy">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Features Section */}
      <section className="py-20 px-4" loading="lazy">
        <div className="max-w-7xl mx-auto" loading="lazy">
          <div className="text-center mb-16" loading="lazy">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" loading="lazy">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400" loading="lazy">Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" loading="lazy">Comprehensive AI and IT solutions designed to transform your business operations.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" loading="lazy">{features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300" loading="lazy">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4" loading="lazy">
                  <feature.icon className="w-8 h-8 text-white" loading="lazy" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors" loading="lazy">{feature.title}</h3>h3>
                <p className="text-gray-300 mb-6" loading="lazy">{feature.description}</p>
                {feature.stats && (
                  <div className="grid grid-cols-3 gap-4" loading="lazy">{feature.stats.map((stat, statIndex) => (</div>
                      <div key={statIndex} className="text-center" loading="lazy">
                        <div className="text-lg font-bold text-white" loading="lazy">{stat.value}</div>
                        <div className="text-gray-400 text-xs" loading="lazy">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-16 px-4" loading="lazy">
        <div className="max-w-6xl mx-auto" loading="lazy">
          <div className="text-center mb-16" loading="lazy">
            <h2 className="text-3xl font-bold text-white mb-6" loading="lazy">What Our Customers Say</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" loading="lazy">Don't just take our word for it. Here's what our satisfied customers have to say about their experience.</p>
          </div>
          <div className="relative" loading="lazy">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20" loading="lazy">
              <div className="text-center" loading="lazy">
                <Quote className="w-12 h-12 text-blue-400 mx-auto mb-6" loading="lazy" />
                <p className="text-xl text-gray-300 mb-8 italic" loading="lazy">"{testimonials[currentTestimonial].content}"</p>
                <div className="flex justify-center mb-4" loading="lazy">{[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (</div>
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" loading="lazy" />
                  ))}
                </div>
                <blockquote className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto" loading="lazy">
                  "{currentTestimonial.content}"
                </blockquote>
                <div className="flex items-center justify-center gap-4" loading="lazy">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center" loading="lazy">
                    <span className="text-white font-semibold text-lg" loading="lazy">{testimonials[currentTestimonial].name.charAt(0)}</span>
                  </div>
                  <div className="text-left" loading="lazy">
                    <h4 className="text-lg font-semibold text-white" loading="lazy">{testimonials[currentTestimonial].name}</h4>
                    <p className="text-gray-400" loading="lazy">{testimonials[currentTestimonial].role}</p>
                    <p className="text-blue-400" loading="lazy">{testimonials[currentTestimonial].company}</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Navigation Controls */}
            <div className="flex items-center justify-center gap-4 mt-8" loading="lazy">
              <button
                onClick={prevTestimonial}
                className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors duration-200" loading="lazy" aria-label="Action button">
                <ChevronLeft className="w-6 h-6" loading="lazy" />
              </button>
              <button
                onClick={togglePlayPause}
                className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors duration-200" loading="lazy" aria-label="Action button">
                {isPlaying ? <Pause className="w-6 h-6" loading="lazy" /> : <Play className="w-6 h-6" loading="lazy" />}
              </button>
              <button
                onClick={nextTestimonial}
                className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors duration-200" loading="lazy" aria-label="Action button">
                <ChevronRight className="w-6 h-6" loading="lazy" />
              </button>
            </div>
            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2" loading="lazy">{testimonials.map((_, index) => (</div>
                <button
                  key={index}
                  onClick={() = aria-label="Action button">setCurrentIndex(index)}</button>
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentIndex ? 'bg-purple-400' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-20 px-4" loading="lazy">
        <div className="max-w-7xl mx-auto" loading="lazy">
          <div className="text-center mb-16" loading="lazy">
            <h2 className="text-4xl font-bold text-white mb-4" loading="lazy">Key Benefits</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" loading="lazy">Discover the advantages that make our solutions the preferred choice for businesses worldwide.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20" loading="lazy">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" loading="lazy">{benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3" loading="lazy">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" loading="lazy" />
                  <span className="text-gray-300" loading="lazy">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-4" loading="lazy">
        <div className="max-w-4xl mx-auto text-center" loading="lazy">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-12" loading="lazy">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" loading="lazy">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8" loading="lazy">Join thousands of satisfied customers and start your transformation journey today.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" loading="lazy">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2" loading="lazy" aria-label="Action button">
                <Zap className="w-5 h-5" loading="lazy" />
                Get Started Today
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200" loading="lazy" aria-label="Action button">Schedule Demo</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default DynamicContentShowcase

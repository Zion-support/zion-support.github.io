'use client'
import React, { useState, useEffect } from 'react'
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, Star, Users, Clock, Award, Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react'
interface Feature {
  icon: React.ComponentType<any>
  title: string
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
  icon: React.ComponentType<any>
  title: string
  description: string
  benefits: string[]
}
const DynamicContentShowcase: React.FC = () => {
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
    <div className=&quot;bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900&quot;></div>
      {/* Hero Section */}
      <section className=&quot;py-20 px-4&quot;>
        <div className=&quot;max-w-7xl mx-auto text-center&quot;></div>
          <h1 className=&quot;text-4xl md:text-6xl font-bold text-white mb-6&quot;>
            Transform Your Business with <span className=&quot;text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400&quot;>AI Solutions</span>
          </h1>
          <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto mb-8&quot;>
            Join thousands of businesses that have revolutionized their operations with our cutting-edge AI and IT solutions.
  return (
    <div className=&quot;bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4&quot;></div>
      <div className=&quot;max-w-7xl mx-auto&quot;></div>
        <div className=&quot;text-center mb-16&quot;></div>
          <h2 className=&quot;text-4xl font-bold text-white mb-6&quot;>Our Solutions</h2>
          <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
            Discover how our cutting-edge AI and IT solutions can transform your business
          </p>
          <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
            <button className=&quot;inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105&quot;>
              <Play className=&quot;w-5 h-5&quot; />
              Start Demo

            <button className=&quot;inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300&quot;>
              <ArrowRight className=&quot;w-5 h-5&quot; />
              Learn More

          </div>
        </div>
{/* Features Grid */}
        <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16&quot;></div>
          {features.map((feature, index) => (
            <div key={index} className=&quot;bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300&quot;></div>
              <div className=&quot;w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-4&quot;></div>
                <feature.icon className=&quot;w-6 h-6 text-white&quot; />
              </div>
              <h3 className=&quot;text-xl font-semibold text-white mb-3&quot;>{feature.title}</h3>
              <p className=&quot;text-gray-300&quot;>{feature.description}</p>
            </div>
          ))}
        </div>
        {/* Benefits Section */}
        <div className=&quot;bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 mb-16&quot;></div>
          <h3 className=&quot;text-2xl font-bold text-white mb-6 text-center&quot;>Why Choose Us?</h3>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4&quot;></div>
            {benefits.map((benefit, index) => (
              <div key={index} className=&quot;flex items-center&quot;></div>
                <CheckCircle className=&quot;h-5 w-5 text-green-400 mr-3 flex-shrink-0&quot; />
                <span className=&quot;text-gray-300&quot;>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Testimonials */}
        <div className=&quot;text-center&quot;></div>
          <h3 className=&quot;text-2xl font-bold text-white mb-8&quot;>What Our Clients Say</h3>
          <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8&quot;></div>
            {testimonials.map((testimonial, index) => (
              <div key={index} className=&quot;bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10&quot;></div>
                <div className=&quot;flex justify-center mb-4&quot;></div>
                  <stat.icon className=&quot;w-8 h-8 text-blue-400&quot; />
                </div>
                <div className=&quot;text-3xl font-bold text-white mb-2&quot;>{stat.value}</div>
                <div className=&quot;text-gray-300&quot;>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Features Section */}
      <section className=&quot;py-20 px-4&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;></div>
          <div className=&quot;text-center mb-16&quot;></div>
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-6&quot;>
              Our <span className=&quot;text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400&quot;>Solutions</span>
            </h2>
            <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
              Comprehensive AI and IT solutions designed to transform your business operations.
            </p>
          </div>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8&quot;></div>
            {features.map((feature, index) => (
              <div key={index} className=&quot;bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300&quot;></div>
                <div className=&quot;w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4&quot;></div>
                  <feature.icon className=&quot;w-8 h-8 text-white&quot; />
                </div>
                <h3 className=&quot;text-xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors&quot;>
                  {feature.title}
                </h3>
                <p className=&quot;text-gray-300 mb-6&quot;>{feature.description}</p>
                {feature.stats && (
                  <div className=&quot;grid grid-cols-3 gap-4&quot;></div>
                    {feature.stats.map((stat, statIndex) => (
                      <div key={statIndex} className=&quot;text-center&quot;></div>
                        <div className=&quot;text-lg font-bold text-white&quot;>{stat.value}</div>
                        <div className=&quot;text-gray-400 text-xs&quot;>{stat.label}</div>
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
      <section className=&quot;py-16 px-4&quot;>
        <div className=&quot;max-w-6xl mx-auto&quot;></div>
          <div className=&quot;text-center mb-16&quot;></div>
            <h2 className=&quot;text-3xl font-bold text-white mb-6&quot;>What Our Customers Say</h2>
            <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
              Don't just take our word for it. Here's what our satisfied customers have to say about their experience.
            </p>
          </div>
          <div className=&quot;relative&quot;></div>
            <div className=&quot;bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20&quot;></div>
              <div className=&quot;text-center&quot;></div>
                <Quote className=&quot;w-12 h-12 text-blue-400 mx-auto mb-6&quot; />
                <p className=&quot;text-xl text-gray-300 mb-8 italic&quot;>
                  &quot;{testimonials[currentTestimonial].content}&quot;
                </p>
                <div className=&quot;flex justify-center mb-4&quot;></div>
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className=&quot;w-5 h-5 text-yellow-400 fill-current&quot; />
                  ))}
                </div>
                <blockquote className=&quot;text-xl text-gray-300 mb-8 max-w-4xl mx-auto&quot;>
                  &quot;{currentTestimonial.content}&quot;
                </blockquote>
                <div className=&quot;flex items-center justify-center gap-4&quot;></div>
                  <div className=&quot;w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center&quot;></div>
                    <span className=&quot;text-white font-semibold text-lg&quot;>
                      {testimonials[currentTestimonial].name.charAt(0)}
                    </span>
                  </div>
                  <div className=&quot;text-left&quot;></div>
                    <h4 className=&quot;text-lg font-semibold text-white&quot;>{testimonials[currentTestimonial].name}</h4>
                    <p className=&quot;text-gray-400&quot;>{testimonials[currentTestimonial].role}</p>
                    <p className=&quot;text-blue-400&quot;>{testimonials[currentTestimonial].company}</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Navigation Controls */}
            <div className=&quot;flex items-center justify-center gap-4 mt-8&quot;></div>
              <button
                onClick={prevTestimonial}
                className=&quot;p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors duration-200&quot;>
                <ChevronLeft className=&quot;w-6 h-6&quot; />
              </button>
              <button
                onClick={togglePlayPause}
                className=&quot;p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors duration-200&quot;>
                {isPlaying ? <Pause className=&quot;w-6 h-6&quot; /> : <Play className=&quot;w-6 h-6&quot; />}
              </button>
              <button
                onClick={nextTestimonial}
                className=&quot;p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors duration-200&quot;>
                <ChevronRight className=&quot;w-6 h-6&quot; />
              </button>
            </div>
            {/* Dots Indicator */}
            <div className=&quot;flex justify-center mt-6 space-x-2&quot;></div>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
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
      <section className=&quot;py-20 px-4&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;></div>
          <div className=&quot;text-center mb-16&quot;></div>
            <h2 className=&quot;text-4xl font-bold text-white mb-4&quot;>
              Key Benefits
            </h2>
            <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
              Discover the advantages that make our solutions the preferred choice for businesses worldwide.
            </p>
          </div>
          <div className=&quot;bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20&quot;></div>
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6&quot;></div>
              {benefits.map((benefit, index) => (
                <div key={index} className=&quot;flex items-start space-x-3&quot;></div>
                  <CheckCircle className=&quot;w-5 h-5 text-green-400 flex-shrink-0 mt-1&quot; />
                  <span className=&quot;text-gray-300&quot;>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className=&quot;py-20 px-4&quot;>
        <div className=&quot;max-w-4xl mx-auto text-center&quot;></div>
          <div className=&quot;bg-white/5 backdrop-blur-sm rounded-2xl p-12&quot;></div>
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-6&quot;>
              Ready to Transform Your Business?
            </h2>
            <p className=&quot;text-xl text-gray-300 mb-8&quot;>
              Join thousands of satisfied customers and start your transformation journey today.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
              <button className=&quot;bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105&quot;>
                <Zap className=&quot;w-5 h-5&quot; />
                Get Started Today
              </button>
              <button className=&quot;bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105&quot;>
                Schedule Demo

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default DynamicContentShowcase
</button>
</button>
</button>
</button>
</section>
</any>
    </div>
  )
}
export default DynamicContentShowcase
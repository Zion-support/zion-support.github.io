import React, { use State, use Effect } from 'react'
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, Star, Users, Clock, Award, Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react'

'use client'


interface Feature {
  icon: React.Component Type<any>
  title: string
  description: string
  stats?: {
    value: string
    label: string
  }
  )
}
  )
interface Testimonial {
  name: string
  company: string
  role: string
  content: string
  rating: number
  avatar?: string
}

const DynamicContentShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const features: Feature[] = [
    {
      icon: Brain,
    {
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that learn and adapt to your business needs in real-time',
      stats: [
        { value: '95%', label: 'Accuracy' },
        { value: '10x', label: 'Faster' },
        { value: '24/7', label: 'Learning' }
      ]
    },
    {
      icon: Zap,
    {
      title: 'Lightning Fast Performance',
      description: 'Optimized for speed with sub-second response times and seamless user experience',
      stats: [
        { value: '< 100ms', label: 'Response' },
        { value: '99.9%', label: 'Uptime' },
        { value: '10M+', label: 'Requests' }
      ]
    },
    {
      icon: Shield,
    {
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption and compliance standards',
      stats: [
        { value: '256-bit', label: 'Encryption' },
        { value: 'SOC 2', label: 'Compliance' },
        { value: 'Zero', label: 'Breaches' }
      ]
    },
    {
      icon: Globe,
    {
      title: 'Global Scalability',
      description: 'Scale effortlessly across multiple regions with automatic load balancing',
      stats: [
        { value: '50+', label: 'Countries' },
        { value: '15+', label: 'Languages' },
        { value: '24/7', label: 'Support' }
      ]
    }
    {
      icon: Zap
      title: 'Lightning Fast Performance'
      description: 'Optimized for speed with sub-second response times and seamless user experience'
      stats: 
    }
    {
      icon: Shield
      title: 'Enterprise Security'
      description: 'Bank-level security with end-to-end encryption and compliance standards'
      stats: 
    }
    {
      icon: Globe
      title: 'Global Scalability'
      description: 'Scale effortlessly across multiple regions with automatic load balancing'
      stats: 
    }]
  const benefits = [
    {
      title: "Service 1"
      description: "Description 1"
    }
    {
      title: "Service 2"
      description: "Description 2"
    }
  ]
  const testimonials: Testimonial = 
  use Effect(() => {
    if (!is Playing) return
    const timer = set Interval(() => {
      set Current Index((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clear Interval(timer)
  }, )
  const next Testimonial = () => {
    set Current Index((prev) => (prev + 1) % testimonials.length)
  }
  )
  const prev Testimonial = () => {
    set Current Index((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }
  )
  const toggle Play Pause = () => {
    set Is Playing(!is Playing)
  }
  )
  const current Testimonial = testimonials
  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen">
        
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7 xl mx-auto text-center">
          <h1 className="text-4 xl md:text-6xl font-bold text-white mb-6">
            Dynamic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Content Showcase</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3 xl mx-auto mb-8">
            Experience the power of our cutting-edge solutions with real-time demonstrations 
            and interactive showcases that bring your business to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
        
            <button className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
              <Play className="w-5 h-5" />
              Start Demo
            </button>
            <button className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">
              <ArrowRight className="w-5 h-5" />
              Learn More
            </button>
          </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7 xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3 xl font-bold text-white mb-6">
              Why Choose Our Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3 xl mx-auto">
              Our solutions deliver unmatched performance, security, and scalability for modern businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:border-purple-400 transition-all duration-300 group">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-6">
        
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3>
          
                  {feature.title}
  )
                </h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                
                {feature.stats && (
                  <div className="grid grid-cols-3 gap-4">
        
                    {feature.stats.map((stat, stat Index) => (
                      <div key={stat Index} className="text-center">
                        <div className="text-lg font-bold text-white">{stat.value}</div>
                        <div className="text-gray-400 text-xs">{stat.label}</div>
                    ))}
  )
                  </div>
                )}
  )
              </div>
            ))}
  )
          </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4">
        <div className="max-w-6 xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3 xl font-bold text-white mb-6">What Our Customers Say</h2>
            <p className="text-xl text-gray-300 max-w-3 xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what our satisfied customers have to say about their experience.
            </p>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-lg rounded-2 xl p-12 border border-white/20">
              <div className="text-center">
        
                <div className="flex justify-center mb-6">
        
                  {.map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
  )
                </div>
                
                <blockquote className="text-xl text-gray-300 mb-8 max-w-4 xl mx-auto">
                  &ldquo;{currentTestimonial.content}&rdquo;
                </blockquote>
                
                <div className="flex items-center justify-center gap-4">
        
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
        
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-left">
        
                    <div className="text-lg font-semibold text-white">{current Testimonial.name}</div>
                    <div className="text-gray-400">{current Testimonial.role}</div>
                    <div className="text-purple-400 text-sm">{current Testimonial.company}</div>
                </div>
            </div>

            {/* Navigation Controls */}
  )
            <div className="flex items-center justify-center gap-4 mt-8">
        
              <button
                on Click={prev Testimonial}
  )
                className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors duration-200"
              >
                <Chevron Left className="w-6 h-6" />
              </button>
              
              <button
                on Click={toggle Play Pause}
  )
                className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors duration-200"
              >
                {is Playing ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
  )
              </button>
              
              <button
                on Click={next Testimonial}
  )
                className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors duration-200"
              >
                <Chevron Right className="w-6 h-6" />
              </button>
            </div>

            {/* Dots Indicator */}
  )
            <div className="flex justify-center mt-6 space-x-2">
        
              {testimonials.map((_, index) => (
                <button
                  key={index}
  )
                  on Click={() => set Current Index(index)}
  )
                  class Name={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === current Index ? 'bg-purple-400' : 'bg-white/30'
                  }`}
  )
                />
              ))}
  )
            </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7 xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3 xl font-bold text-white mb-6">Comprehensive Benefits</h2>
            <p className="text-xl text-gray-300 max-w-3 xl mx-auto">
              Our solutions provide a complete package of benefits designed to accelerate your business growth.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
  )
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4 xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2 xl p-12">
            <h2 className="text-3 xl font-bold text-white mb-6">
              Ready to Experience the Future?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2 xl mx-auto">
              Join thousands of businesses that have already transformed their operations with our cutting-edge solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
        
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2">
                <Zap className="w-5 h-5" />
                <span>Start Free Trial</span>
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200">
                Schedule Demo
              </button>
            </div>
        </div>
      </section>
    </div>
  )
}
  )
export default Dynamic;; Content Showcase

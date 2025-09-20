'use client'

import React, { useState, useEffect } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'

interface Testimonial {
  id: string
  name: string
  company: string
  role: string
  content: string
  rating: number
  avatar: string
  industry: string
  results: string[]
}

const EnhancedTestimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Sarah Johnson',
      company: 'TechCorp Solutions',
      role: 'CTO',
      content: 'Zion Tech Group transformed our entire operation with their AI automation solutions. We saw a 400% increase in efficiency within the first quarter.',
      rating: 5,
      avatar: '/api/placeholder/80/80',
      industry: 'Technology',
      results: ['400% efficiency increase', '60% cost reduction', '24/7 automation']
    },
    {
      id: '2',
      name: 'Michael Chen',
      company: 'Global Finance Inc',
      role: 'VP of Operations',
      content: 'The micro SaaS platform they built for us has revolutionized how we handle client data. It\'s scalable, secure, and incredibly user-friendly.',
      rating: 5,
      avatar: '/api/placeholder/80/80',
      industry: 'Finance',
      results: ['99.9% uptime', '50% faster processing', 'Zero data breaches']
    },
    {
      id: '3',
      name: 'Emily Rodriguez',
      company: 'HealthTech Innovations',
      role: 'CEO',
      content: 'Their AI-powered analytics gave us insights we never knew existed. Our patient care improved dramatically while reducing operational costs.',
      rating: 5,
      avatar: '/api/placeholder/80/80',
      industry: 'Healthcare',
      results: ['30% better patient outcomes', '25% cost savings', 'Real-time insights']
    },
    {
      id: '4',
      name: 'David Kim',
      company: 'E-Commerce Plus',
      role: 'Head of Technology',
      content: 'The enterprise solution they delivered exceeded all expectations. Our customer satisfaction scores increased by 150% and our team productivity doubled.',
      rating: 5,
      avatar: '/api/placeholder/80/80',
      industry: 'E-Commerce',
      results: ['150% customer satisfaction', '2x productivity', 'Seamless integration']
    },
    {
      id: '5',
      name: 'Lisa Thompson',
      company: 'Manufacturing Pro',
      role: 'Operations Director',
      content: 'Zion\'s quantum computing solutions helped us optimize our supply chain like never before. We reduced waste by 40% and increased output by 60%.',
      rating: 5,
      avatar: '/api/placeholder/80/80',
      industry: 'Manufacturing',
      results: ['40% waste reduction', '60% output increase', 'Predictive analytics']
    }
  ]

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToTestimonial = (index: number) : any => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders have to say about their transformation with Zion Tech Group.
          </p>
        </div>

        <div className="relative">
          {/* Main Testimonial Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-100 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10">
              <div className="flex items-start mb-6">
                <Quote className="h-8 w-8 text-blue-500 flex-shrink-0 mr-4" />
                <div className="flex-1">
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                    "{currentTestimonial.content}"
                  </p>
                  
                  {/* Rating */}
                  <div className="flex items-center mb-6">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Client Info */}
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  {currentTestimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg">
                    {currentTestimonial.name}
                  </h4>
                  <p className="text-gray-600">
                    {currentTestimonial.role}, {currentTestimonial.company}
                  </p>
                  <p className="text-sm text-blue-600 font-medium">
                    {currentTestimonial.industry} Industry
                  </p>
                </div>
              </div>

              {/* Results */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {currentTestimonial.results.map((result, index) => (
                  <div key={index} className="bg-blue-50 rounded-lg p-4 text-center">
                    <div className="text-sm font-medium text-blue-900">
                      {result}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow border border-gray-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5 text-gray-600" />
            </button>

            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-blue-500 scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow border border-gray-200"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">4.9/5</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">99%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-gray-600">Support</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EnhancedTestimonials
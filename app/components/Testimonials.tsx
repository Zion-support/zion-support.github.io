'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import Card from './Card'

interface Testimonial {
  id: number
  name: string
  company: string
  role: string
  content: string
  rating: number
  avatar?: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Chen',
    company: 'TechCorp Solutions',
    role: 'CTO',
    content: 'Zion Tech Group transformed our entire infrastructure with their AI solutions. The results exceeded our expectations, and our team productivity increased by 300%.',
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    company: 'FinanceFlow Inc',
    role: 'CEO',
    content: 'Their cloud migration services were seamless. We moved our entire operation to the cloud with zero downtime and improved our security posture significantly.',
    rating: 5
  },
  {
    id: 3,
    name: 'Emily Watson',
    company: 'DataDriven Analytics',
    role: 'VP of Engineering',
    content: 'The AI-powered analytics platform they built for us has revolutionized how we process and understand our data. Incredible results!',
    rating: 5
  },
  {
    id: 4,
    name: 'David Kim',
    company: 'SecureNet Systems',
    role: 'Security Director',
    content: 'Their cybersecurity expertise helped us achieve SOC 2 compliance and implement advanced threat detection. We feel much more secure now.',
    rating: 5
  },
  {
    id: 5,
    name: 'Lisa Thompson',
    company: 'InnovateTech',
    role: 'Founder',
    content: 'Working with Zion Tech Group was a game-changer. Their team understood our vision and delivered solutions that perfectly aligned with our goals.',
    rating: 5
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-400'}`}
      />
    ))
  }

  return (
    <div className="relative">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Don't just take our word for it. Here's what our clients have to say about working with us.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <Card variant="glass" className="p-8 border-white/20">
          <div className="text-center">
            <Quote className="w-12 h-12 text-blue-400 mx-auto mb-6" />
            
            <div className="mb-6">
              <p className="text-xl text-gray-300 leading-relaxed italic">
                "{testimonials[currentIndex].content}"
              </p>
            </div>

            <div className="flex justify-center mb-4">
              {renderStars(testimonials[currentIndex].rating)}
            </div>

            <div className="text-center">
              <h4 className="text-xl font-semibold text-white mb-1">
                {testimonials[currentIndex].name}
              </h4>
              <p className="text-blue-400 font-medium mb-1">
                {testimonials[currentIndex].role}
              </p>
              <p className="text-gray-400">
                {testimonials[currentIndex].company}
              </p>
            </div>
          </div>
        </Card>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center mt-8 space-x-4">
          <button
            onClick={prevTestimonial}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>

          {/* Dots Indicator */}
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex
                    ? 'bg-blue-500'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </div>
  )
}
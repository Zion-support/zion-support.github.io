'use client'
import React, { useState, useEffect } from 'react'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, Check } from 'lucide-react'

interface Testimonial {
  id: number
  name: string
  company: string
  content: string
  rating: number
  avatar?: string
}

const DynamicContentShowcase: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "TechCorp",
      content: "Zion Tech Group transformed our AI capabilities. Their solutions increased our operational efficiency by 40%.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      company: "InnovateLab",
      content: "The micro SaaS platform they built for us has been a game-changer. Highly recommend their services.",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      company: "StartupXYZ",
      content: "The micro SaaS solutions they provided helped us scale faster than we ever imagined possible.",
      rating: 5
    }
  ]

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI-Powered Solutions",
      description: "Advanced artificial intelligence to transform your business operations",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Automation",
      description: "Streamline processes and increase efficiency with smart automation",
      color: "from-purple-500 to-pink-500"
    }
  ]

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          <p className="text-lg text-gray-600">Discover what makes us the preferred choice for AI and IT solutions</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${feature.color} text-white mb-4`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">What Our Clients Say</h3>
          <div className="relative">
            <div className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-lg text-gray-700 mb-6 italic">
                  &ldquo;{testimonials[currentTestimonial].content}&rdquo;
                </blockquote>
                <div className="text-gray-900 font-semibold">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-gray-600">
                  {testimonials[currentTestimonial].company}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DynamicContentShowcase
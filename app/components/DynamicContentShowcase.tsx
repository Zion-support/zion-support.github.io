'use client'
import React, { useState, useEffect } from 'react'
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, Star, Users, Clock, Award, Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react'
interface Feature {
  icon: React.ComponentType<any&gt;title: string
  description: string
  stats?: {
    value: string
    label: string
  }[]
}
interface Testimonial {
  name: string
  company: string
  role: string
  content: string
  rating: number
  avatar?: string
}
const DynamicContentShowcase: React.FC = () =>{
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const features: Feature[] = [
    {
      icon: Brain,
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
      title: 'Global Scalability',
      description: 'Scale effortlessly across multiple regions with automatic load balancing',
      stats: [
        { value: '50+', label: 'Countries' },
        { value: '15+', label: 'Languages' },
        { value: '24/7', label: 'Support' }
      ]
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
      company: 'TechCorp Inc.',
      role: 'CTO',
      content: 'This solution transformed our operations completely. The AI insights are incredible and have helped us make data-driven decisions that increased our efficiency by 300%.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Systems',
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
  useEffect(() =>{
    if (!isPlaying) return
    const timer = setInterval(() =>{
setCurrentIndex((prev) =>(prev + 1) % testimonials.length)
    }, 4000)
    return () =>clearInterval(timer)
  }, [isPlaying, testimonials.length])
  const nextTestimonial = () =>{
    setCurrentIndex((prev) =>(prev + 1) % testimonials.length)
  }
  const prevTestimonial = () =>{
    setCurrentIndex((prev) =>(prev - 1 + testimonials.length) % testimonials.length)
  }
  const togglePlayPause = () =>{
    setIsPlaying(!isPlaying)
  }
  const currentTestimonial = testimonials[currentIndex]
  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen">{/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Dynamic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Content Showcase</span&gt; </h1&gt; <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">Experience the power of our cutting-edge solutions with real-time demonstrations 
            and interactive showcases that bring your business to life.
          </p&gt; <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
              <Play className="w-5 h-5" />Start Demo></button className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">
              <ArrowRight className="w-5 h-5" />Learn More&gt><//div&gt; </div>{/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">{features.map((feature, index) =>(
            <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mb-4">
                <feature.icon className="h-6 w-6 text-white" />
              </div&gt; <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3&gt; <p className="text-gray-300">{feature.description}</p&gt; </div>))}
        </div>{/* Benefits Section */}
        <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 mb-16">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Why Choose Us?</h3&gt; <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">{benefits.map((benefit, index) =>(
              <div key={index} className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span&gt; </div>))}
          </div&gt; </div>{/* Testimonials */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-8">What Our Clients Say</h3&gt; <div className="grid grid-cols-1 md:grid-cols-3 gap-8">{testimonials.map((testimonial, index) =>(
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
                <div className="flex justify-center mb-4">{[...Array(testimonial.rating)].map((_, i) =>(
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />))}
                </div&gt; <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p&gt; <div className="text-center">
                  <p className="text-white font-semibold">{testimonial.name}</p&gt; <p className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</p&gt; </div&gt; </div>))}
          </div&gt; </div&gt; </div>{/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Why Choose Our Solutions?
            </h2&gt; <p className="text-xl text-gray-300 max-w-3xl mx-auto">Our solutions deliver unmatched performance, security, and scalability for modern businesses.
            </p&gt; </div&gt; <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{features.map((feature, index) =>(
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-400 transition-all duration-300 group">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div&gt; <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">{feature.title}
                </h3&gt; <p className="text-gray-300 mb-6">{feature.description}</p>{feature.stats && (
                  <div className="grid grid-cols-3 gap-4">{feature.stats.map((stat, statIndex) =>(
                      <div key={statIndex} className="text-center">
                        <div className="text-lg font-bold text-white">{stat.value}</div&gt; <div className="text-gray-400 text-xs">{stat.label}</div&gt; </div>))}
                  </div>)}
              </div>))}
          </div&gt; </div&gt; </section>{/* Testimonials Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">What Our Customers Say</h2&gt; <p className="text-xl text-gray-300 max-w-3xl mx-auto">Don't just take our word for it. Here's what our satisfied customers have to say about their experience.
            </p&gt; </div&gt; <div className="relative">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <div className="text-center">
                <div className="flex justify-center mb-6">{[...Array(currentTestimonial.rating)].map((_, i) =>(
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />))}
                </div&gt; <blockquote className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">"{currentTestimonial.content}"
                </blockquote&gt; <div className="flex items-center justify-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                    <Users className="w-8 h-8 text-white" />
                  </div&gt; <div className="text-left">
                    <div className="text-lg font-semibold text-white">{currentTestimonial.name}</div&gt; <div className="text-gray-400">{currentTestimonial.role}</div&gt; <div className="text-purple-400 text-sm">{currentTestimonial.company}</div&gt; </div&gt; </div&gt; </div&gt; </div>{/* Navigation Controls */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors duration-200">
                <ChevronLeft className="w-6 h-6" />
              </button&gt; <button
                onClick={togglePlayPause}
                className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors duration-200">{isPlaying ? <Pause className="w-6 h-6" />: <Play className="w-6 h-6" />}
              </button&gt; <button
                onClick={nextTestimonial}
                className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors duration-200">
                <ChevronRight className="w-6 h-6" />
              </button&gt; </div>{/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">{testimonials.map((_, index) =>(
                <button
                  key={index}
                  onClick={() =>setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentIndex ? 'bg-purple-400' : 'bg-white/30'
                  }`}
                />))}
            </div&gt; </div&gt; </div&gt; </section>{/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Comprehensive Benefits</h2&gt; <p className="text-xl text-gray-300 max-w-3xl mx-auto">Our solutions provide a complete package of benefits designed to accelerate your business growth.
            </p&gt; </div&gt; <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{benefits.map((benefit, index) =>(
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">{benefit}</span&gt; </div>))}
            </div&gt; </div&gt; </div&gt; </section>{/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Experience the Future?
            </h2&gt; <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">Join thousands of businesses that have already transformed their operations with our cutting-edge solutions.
            </p&gt; <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2">
                <Zap className="w-5 h-5" />
                <span&gt;Start Free Trial</span&gt; </button&gt; <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200">Schedule Demo&gt><//div&gt; </div&gt; </div&gt; </section&gt; </div>)
}
export default DynamicContentShowcase></button&gt; </button&gt; </button&gt; </button&gt; </section&gt; </any>
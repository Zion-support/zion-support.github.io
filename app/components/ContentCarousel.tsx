'use client';
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, Star, TrendingUp } from 'lucide-react';

const ContentCarouselPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      color: 'from-cyan-500 to-blue-600'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results',
      features: ['Real-time Processing', 'Scalable Architecture', 'Optimized Performance', 'Low Latency'],
      color: 'from-yellow-500 to-orange-600'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards',
      features: ['End-to-End Encryption', 'Compliance Standards', 'Security Audits', '24/7 Monitoring'],
      color: 'from-green-500 to-teal-600'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses',
      features: ['Multi-Region Support', 'Local Compliance', 'Global CDN', 'International Support'],
      color: 'from-purple-500 to-pink-600'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Solutions',
      role: 'CTO',
      content: 'Zion Tech Group transformed our entire IT infrastructure. The AI solutions they implemented increased our efficiency by 300%.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'FinanceFlow Inc',
      role: 'CEO',
      content: 'Outstanding service and cutting-edge technology. Their cloud migration saved us $2M annually while improving performance.',
      rating: 5
    },
    {
      name: 'Alex Rodriguez',
      company: 'HealthTech Plus',
      role: 'IT Director',
      content: 'The cybersecurity solutions provided by Zion Tech Group are exceptional. We\'ve had zero security incidents since implementation.',
      rating: 5
    }
  ];

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Carousel */}
        <div className="relative mb-16">
          <div className="cyber-card hologram-card p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Core Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover the powerful technologies and solutions that drive our success
              </p>
            </div>

            <div className="relative overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((slide, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      <div>
                        <div className={`w-20 h-20 bg-gradient-to-r ${slide.color} rounded-lg flex items-center justify-center mb-6`}>
                          <slide.icon className="w-10 h-10 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">{slide.title}</h3>
                        <p className="text-gray-300 mb-6 text-lg">{slide.description}</p>
                        <ul className="space-y-3">
                          {slide.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center">
                              <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                              <span className="text-gray-300">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="text-center">
                        <div className={`w-64 h-64 bg-gradient-to-r ${slide.color} rounded-2xl mx-auto flex items-center justify-center`}>
                          <slide.icon className="w-32 h-32 text-white opacity-20" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors duration-200"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors duration-200"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Dots Indicator */}
              <div className="flex justify-center mt-6 space-x-2">
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
            </div>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="cyber-card hologram-card p-8">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            What Our Clients Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-cyan-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/30'
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-gray-300">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-gray-300">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-300">Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-300">Countries</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCarouselPage;

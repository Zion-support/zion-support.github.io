'use client';
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle, ArrowRight, Zap, Shield, Brain, Globe } from 'lucide-react';

const ContentCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results',
      features: ['Real-time Processing', 'Scalable Architecture', 'Optimized Performance', 'Low Latency']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards',
      features: ['End-to-End Encryption', 'Compliance Standards', 'Security Audits', '24/7 Monitoring']
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses',
      features: ['Multi-Region Support', 'Local Compliance', 'Global CDN', 'International Support']
    }
  ];

  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-r from-cyan-400/10 to-purple-400/10 rounded-2xl p-8 border border-white/10 my-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Zion Tech Group</span>?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We deliver cutting-edge AI and IT solutions that drive real business results. 
            Here's what sets us apart from the competition.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                    <div className="text-center mb-6">
                      <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <slide.icon className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">{slide.title}</h3>
                      <p className="text-gray-300 mb-6">{slide.description}</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {slide.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
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

        {/* Benefits Section */}
        <div className="mt-12 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
          <h3 className="text-xl font-bold text-white mb-6 text-center">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Commitment</span> to You
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-400 to-purple-400 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105"
          >
            Get Started Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContentCarousel;
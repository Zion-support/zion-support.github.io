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
    <div className="relative bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-2xl p-8 my-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Slide Content */}
        <div className="relative min-h-[400px]">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-gray-300 text-lg">
              We deliver cutting-edge AI and IT solutions that drive real business results
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-left">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-6">
                {React.createElement(slides[currentSlide].icon, { className: "w-10 h-10 text-white" })}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {slides[currentSlide].title}
              </h3>
              <p className="text-gray-300 mb-6 text-lg">
                {slides[currentSlide].description}
              </p>
              <div className="grid grid-cols-2 gap-3">
                {slides[currentSlide].features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-2 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6">
              <h4 className="text-xl font-semibold text-white mb-4 text-center">
                What You Get
              </h4>
              <div className="grid grid-cols-1 gap-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
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
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentSlide ? 'bg-cyan-400' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-8">
          <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center mx-auto">
            Get Started Today
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentCarousel;
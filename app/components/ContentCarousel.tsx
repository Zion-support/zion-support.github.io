'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, CheckCircle, Star, Users, TrendingUp, Award } from 'lucide-react';

const ContentCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'AI-Powered Analytics',
      description: 'Transform your data into actionable insights with our advanced AI analytics platform.',
      features: ['Real-time processing', 'Predictive modeling', 'Custom dashboards', 'API integration'],
      icon: TrendingUp,
      stats: [
        { value: '99.9%', label: 'Accuracy' },
        { value: '10x', label: 'Faster' },
        { value: '24/7', label: 'Monitoring' }
      ]
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable, secure, and reliable cloud solutions that grow with your business.',
      features: ['Auto-scaling', 'Global CDN', 'Security compliance', '99.9% uptime'],
      icon: Users,
      stats: [
        { value: '99.9%', label: 'Uptime' },
        { value: '50+', label: 'Regions' },
        { value: '24/7', label: 'Support' }
      ]
    },
    {
      title: 'Cybersecurity Suite',
      description: 'Comprehensive security solutions to protect your digital assets and data.',
      features: ['Threat detection', 'Vulnerability scanning', 'Compliance reporting', '24/7 monitoring'],
      icon: Award,
      stats: [
        { value: '100%', label: 'Protection' },
        { value: '0', label: 'Breaches' },
        { value: '24/7', label: 'Monitoring' }
      ]
    }
  ];

  const features = [
    { icon: CheckCircle, text: 'Real-time Analytics' },
    { icon: CheckCircle, text: 'AI-Powered Insights' },
    { icon: CheckCircle, text: 'Custom Dashboards' },
    { icon: CheckCircle, text: 'API Integration' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Discover Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive suite of AI and IT solutions designed to transform your business operations.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0 bg-white/5 backdrop-blur-lg p-12">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-8">
                      <slide.icon className="w-10 h-10 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4">{slide.title}</h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">{slide.description}</p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                      {features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-gray-300">
                          <feature.icon className="w-5 h-5 text-green-400 mr-2" />
                          {feature.text}
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
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm border border-white/20 text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm border border-white/20 text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-purple-500' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 text-white">
              <Star className="w-8 h-8 text-yellow-400" />
              <div className="text-left">
                <div className="text-2xl font-bold">4.9/5</div>
                <div className="text-gray-400 text-sm">Customer Rating</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 text-white">
              <Users className="w-8 h-8 text-blue-400" />
              <div className="text-left">
                <div className="text-2xl font-bold">10,000+</div>
                <div className="text-gray-400 text-sm">Happy Customers</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 text-white">
              <TrendingUp className="w-8 h-8 text-green-400" />
              <div className="text-left">
                <div className="text-2xl font-bold">99.9%</div>
                <div className="text-gray-400 text-sm">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCarousel;
'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, Star, Users, TrendingUp } from 'lucide-react';

interface Slide {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  features: string[];
  stats?: {
    value: string;
    label: string;
  }[];
}

const ContentCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      stats: [
        { value: '95%', label: 'Accuracy Rate' },
        { value: '10x', label: 'Faster Processing' },
        { value: '24/7', label: 'Automation' }
      ]
    },
    {
      icon: Shield,
      title: 'Cybersecurity Excellence',
      description: 'Comprehensive security solutions to protect your digital assets and ensure compliance',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Incident Response', 'Compliance Management'],
      stats: [
        { value: '99.9%', label: 'Uptime' },
        { value: 'Zero', label: 'Security Breaches' },
        { value: '24/7', label: 'Monitoring' }
      ]
    },
    {
      icon: Globe,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions to modernize your IT infrastructure',
      features: ['Cloud Migration', 'Multi-Cloud Strategy', 'DevOps Automation', 'Cost Optimization'],
      stats: [
        { value: '50%', label: 'Cost Reduction' },
        { value: '3x', label: 'Performance Boost' },
        { value: '99.9%', label: 'Reliability' }
      ]
    },
    {
      icon: Users,
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation services to modernize your business processes',
      features: ['Process Automation', 'Data Analytics', 'Mobile Solutions', 'Integration Services'],
      stats: [
        { value: '40%', label: 'Efficiency Gain' },
        { value: '60%', label: 'Time Savings' },
        { value: '100%', label: 'Process Coverage' }
      ]
    },
    {
      icon: TrendingUp,
      title: 'Business Intelligence',
      description: 'Data-driven insights and analytics to help you make informed business decisions',
      features: ['Real-time Analytics', 'Predictive Modeling', 'Custom Dashboards', 'Data Visualization'],
      stats: [
        { value: '85%', label: 'Better Decisions' },
        { value: '30%', label: 'Revenue Growth' },
        { value: 'Real-time', label: 'Insights' }
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Discover Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Solutions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive suite of AI and IT solutions designed to transform your business.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/20 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                    <currentSlideData.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {currentSlideData.title}
                    </h3>
                    <p className="text-gray-300 text-lg">
                      {currentSlideData.description}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white mb-4">Key Features:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {currentSlideData.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                {currentSlideData.stats && (
                  <div className="grid grid-cols-3 gap-6">
                    {currentSlideData.stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-2xl font-bold text-white mb-1">
                          {stat.value}
                        </div>
                        <div className="text-sm text-gray-300">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* CTA Button */}
                <div className="pt-4">
                  <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
                    Learn More
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Visual Element */}
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <currentSlideData.icon className="w-16 h-16 text-white" />
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 -left-8 w-4 h-4 bg-pink-400 rounded-full animate-pulse delay-500"></div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prevSlide}
              className="flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-lg rounded-full border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Slide Indicators */}
            <div className="flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-white scale-125'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-lg rounded-full border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCarousel;
'use client';
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, Star, Users, TrendingUp } from 'lucide-react';

interface Slide {
  id: number;
  title: string;
  description: string;
  features: string[];
  cta: string;
  ctaLink: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
}

const ContentCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      id: 1,
      title: 'AI-Powered Business Solutions',
      description: 'Transform your business with cutting-edge artificial intelligence and machine learning technologies.',
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics'
      ],
      cta: 'Explore AI Solutions',
      ctaLink: '/ai-services',
      icon: Brain,
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      id: 2,
      title: 'Cloud Infrastructure & Security',
      description: 'Scalable, secure cloud solutions that grow with your business and protect your data.',
      features: [
        'Cloud Migration',
        'Cybersecurity Solutions',
        'Data Protection',
        'Compliance Management'
      ],
      cta: 'View IT Services',
      ctaLink: '/it-services',
      icon: Shield,
      gradient: 'from-green-500 to-blue-600'
    },
    {
      id: 3,
      title: 'Micro SaaS Solutions',
      description: 'Focused software solutions designed to solve specific business problems efficiently.',
      features: [
        'Analytics Dashboard',
        'Content Generation',
        'Email Marketing',
        'Inventory Management'
      ],
      cta: 'Discover Micro SaaS',
      ctaLink: '/micro-saas',
      icon: Zap,
      gradient: 'from-orange-500 to-red-600'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
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

  return (
    <div className="relative w-full h-96 overflow-hidden rounded-2xl">
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className={`h-full bg-gradient-to-r ${slide.gradient} p-8 flex items-center`}>
              <div className="max-w-7xl mx-auto w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="text-white">
                    <div className="flex items-center mb-4">
                      <slide.icon className="w-8 h-8 mr-3" />
                      <h2 className="text-3xl font-bold">{slide.title}</h2>
                    </div>
                    <p className="text-xl mb-6 text-white/90">{slide.description}</p>
                    <ul className="space-y-2 mb-8">
                      {slide.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-5 h-5 text-white/80" />
                          <span className="text-white/90">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href={slide.ctaLink}
                      className="bg-white text-gray-900 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center space-x-2 group"
                    >
                      <span>{slide.cta}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                  <div className="hidden lg:block">
                    <div className="w-full h-64 bg-white/10 rounded-2xl flex items-center justify-center">
                      <div className="text-center text-white">
                        <slide.icon className="w-24 h-24 mx-auto mb-4 opacity-50" />
                        <p className="text-lg opacity-75">Interactive Demo</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ContentCarousel;
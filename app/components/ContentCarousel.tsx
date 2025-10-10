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
  image: string;
  icon: React.ComponentType<any>;
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
        'Predictive Analytics',
        'Process Automation'
      ],
      cta: 'Explore AI Solutions',
      ctaLink: '/ai-services',
      image: '/images/carousel/ai-solutions.jpg',
      icon: Brain
    },
    {
      id: 2,
      title: 'Enterprise IT Services',
      description: 'Comprehensive IT solutions including cloud infrastructure, cybersecurity, and system integration.',
      features: [
        'Cloud Infrastructure',
        'Cybersecurity Solutions',
        'System Integration',
        '24/7 Support',
        'Performance Optimization'
      ],
      cta: 'View IT Services',
      ctaLink: '/it-services',
      image: '/images/carousel/it-services.jpg',
      icon: Shield
    },
    {
      id: 3,
      title: 'Micro SaaS Solutions',
      description: 'Ready-to-use business tools that solve specific problems with minimal complexity.',
      features: [
        'Analytics Dashboards',
        'Content Generation',
        'Email Marketing',
        'Project Management',
        'Customer Support'
      ],
      cta: 'Browse Micro SaaS',
      ctaLink: '/micro-saas',
      image: '/images/carousel/micro-saas.jpg',
      icon: Zap
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
    <div className="relative w-full h-96 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl overflow-hidden">
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="flex h-full">
              {/* Content */}
              <div className="flex-1 p-8 flex flex-col justify-center">
                <div className="max-w-2xl">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center mr-4">
                      <slide.icon className="w-6 h-6 text-slate-900" />
                    </div>
                    <h2 className="text-3xl font-bold text-white">{slide.title}</h2>
                  </div>
                  
                  <p className="text-gray-300 text-lg mb-6">{slide.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                    {slide.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <a
                    href={slide.ctaLink}
                    className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 group"
                  >
                    <span>{slide.cta}</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
              
              {/* Image Placeholder */}
              <div className="w-1/2 bg-slate-700 flex items-center justify-center">
                <div className="text-gray-400 text-center">
                  <div className="text-6xl mb-4">📊</div>
                  <div className="text-lg">Featured Image</div>
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
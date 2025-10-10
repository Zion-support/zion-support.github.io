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
      description: 'Transform your business with cutting-edge artificial intelligence and machine learning technologies.',
      features: [
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'Automated Decision Making'
      ],
      stats: [
        { value: '95%', label: 'Accuracy Rate' },
        { value: '50%', label: 'Cost Reduction' },
        { value: '24/7', label: 'Availability' }
      ]
    },
    {
      icon: Shield,
      title: 'Cybersecurity Excellence',
      description: 'Protect your digital assets with enterprise-grade security solutions and compliance frameworks.',
      features: [
        'Threat Detection',
        'Vulnerability Assessment',
        'Compliance Management',
        'Incident Response'
      ],
      stats: [
        { value: '99.9%', label: 'Uptime' },
        { value: 'Zero', label: 'Security Breaches' },
        { value: '24/7', label: 'Monitoring' }
      ]
    },
    {
      icon: Globe,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions that grow with your business needs.',
      features: [
        'Auto-scaling',
        'Disaster Recovery',
        'Cost Optimization',
        'Global Deployment'
      ],
      stats: [
        { value: '99.9%', label: 'SLA' },
        { value: '40%', label: 'Cost Savings' },
        { value: 'Global', label: 'Reach' }
      ]
    },
    {
      icon: Users,
      title: 'Digital Transformation',
      description: 'Complete digital overhaul to modernize your business processes and operations.',
      features: [
        'Process Automation',
        'Data Integration',
        'Workflow Optimization',
        'Change Management'
      ],
      stats: [
        { value: '60%', label: 'Efficiency Gain' },
        { value: '30%', label: 'Time Savings' },
        { value: '100%', label: 'Satisfaction' }
      ]
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
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Carousel Container */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0 p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div className="text-white">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-2xl flex items-center justify-center mr-4">
                      <slide.icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold">{slide.title}</h2>
                  </div>
                  
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    {slide.description}
                  </p>

                  <ul className="space-y-4 mb-8">
                    {slide.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
                    Learn More
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </div>

                {/* Stats */}
                {slide.stats && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {slide.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                        <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                        <div className="text-gray-300 text-sm">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-8 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-cyan-400 scale-125'
                : 'bg-gray-400 hover:bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ContentCarousel;

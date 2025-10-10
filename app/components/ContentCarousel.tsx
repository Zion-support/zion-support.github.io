'use client';
import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle, Star, Zap, Shield, Brain, Cloud, BarChart, Users } from 'lucide-react';

interface Slide {
  id: number;
  title: string;
  description: string;
  features: string[];
  icon: React.ComponentType<any>;
  color: string;
}

const ContentCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      id: 1,
      title: 'AI-Powered Analytics',
      description: 'Transform your data into actionable insights with our advanced AI analytics platform.',
      features: [
        'Real-time data processing',
        'Predictive analytics',
        'Custom dashboards',
        'Automated reporting'
      ],
      icon: BarChart,
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 2,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions that grow with your business needs.',
      features: [
        'Auto-scaling capabilities',
        '99.9% uptime guarantee',
        'Advanced security',
        'Cost optimization'
      ],
      icon: Cloud,
      color: 'from-green-500 to-blue-600'
    },
    {
      id: 3,
      title: 'AI Automation',
      description: 'Automate complex business processes with intelligent AI systems.',
      features: [
        'Process automation',
        'Workflow optimization',
        'Smart decision making',
        'Performance monitoring'
      ],
      icon: Zap,
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 4,
      title: 'Cybersecurity Solutions',
      description: 'Protect your business with comprehensive AI-powered security solutions.',
      features: [
        'Threat detection',
        'Real-time monitoring',
        'Automated response',
        'Compliance management'
      ],
      icon: Shield,
      color: 'from-orange-500 to-red-600'
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
      <div className="relative overflow-hidden rounded-2xl">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="w-full flex-shrink-0">
              <div className={`bg-gradient-to-br ${slide.color} p-8 md:p-12`}>
                <div className="flex flex-col md:flex-row items-center gap-8">
                  {/* Content */}
                  <div className="flex-1 text-white">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                        <slide.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-5 h-5 text-yellow-400" />
                        <Star className="w-5 h-5 text-yellow-400" />
                        <Star className="w-5 h-5 text-yellow-400" />
                        <Star className="w-5 h-5 text-yellow-400" />
                        <Star className="w-5 h-5 text-yellow-400" />
                      </div>
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">{slide.title}</h3>
                    <p className="text-lg text-white/90 mb-6">{slide.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {slide.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                          <span className="text-white/90">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Visual Element */}
                  <div className="flex-1 flex justify-center">
                    <div className="w-64 h-64 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                      <slide.icon className="w-32 h-32 text-white/80" />
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
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-8 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index 
                ? 'bg-blue-500 scale-125' 
                : 'bg-gray-400 hover:bg-gray-300'
            }`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="text-center mt-4">
        <span className="text-gray-600 text-sm">
          {currentSlide + 1} of {slides.length}
        </span>
      </div>
    </div>
  );
};

export default ContentCarousel;
'use client';
import React, { useState, useEffect } from 'react';
import { Cloud, Zap, Shield, ChevronLeft, ChevronRight } from 'lucide-react';

const ContentCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: 'AI-Powered Solutions',
      description: 'Transform your business with cutting-edge artificial intelligence technology.',
      features: [
        'Machine learning algorithms',
        'Natural language processing',
        'Computer vision',
        'Predictive analytics'
      ],
      icon: Cloud,
      color: 'from-cyan-500 to-blue-600'
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
      color: 'from-red-500 to-orange-600'
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

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="relative overflow-hidden rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="w-full flex-shrink-0 p-8">
              <div className="text-center">
                <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-r ${slide.color} rounded-2xl flex items-center justify-center`}>
                  <slide.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">{slide.title}</h3>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">{slide.description}</p>
                <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                  {slide.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2 text-gray-300">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-slate-800/80 hover:bg-slate-700/80 text-white p-2 rounded-full transition-all duration-300"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-slate-800/80 hover:bg-slate-700/80 text-white p-2 rounded-full transition-all duration-300"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
        
        {/* Dots indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-cyan-400' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentCarousel;
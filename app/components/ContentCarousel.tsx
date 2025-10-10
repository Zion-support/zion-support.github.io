'use client';
import React, { useState, useEffect } from 'react';
import { Cloud, Zap, Shield, ChevronLeft, ChevronRight } from 'lucide-react';

const ContentCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: 'AI-Powered Solutions',
      description: 'Transform your business with cutting-edge AI technology and intelligent automation.',
      features: [
        'Machine Learning Integration',
        'Natural Language Processing',
        'Predictive Analytics',
        'Intelligent Automation'
      ],
      icon: Zap,
      color: 'from-purple-500 to-pink-600'
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
      color: 'from-orange-500 to-red-600'
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
      color: 'from-blue-500 to-indigo-600'
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

  const currentSlideData = slides[currentSlide];

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className={`bg-gradient-to-r ${currentSlideData.color} p-8 text-white`}>
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center mb-4">
                <currentSlideData.icon className="h-8 w-8 mr-3" />
                <h2 className="text-3xl font-bold">{currentSlideData.title}</h2>
              </div>
              <p className="text-xl mb-6 text-white/90">
                {currentSlideData.description}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {currentSlideData.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    <span className="text-white/90">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex justify-between items-center">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <div className="flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCarousel;
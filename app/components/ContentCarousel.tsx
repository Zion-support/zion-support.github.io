'use client';
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Cloud, Zap, Shield, Brain } from 'lucide-react';

const ContentCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: 'AI Solutions',
      description: 'Transform your business with cutting-edge artificial intelligence solutions.',
      features: [
        'Machine learning models',
        'Natural language processing',
        'Computer vision',
        'Predictive analytics'
      ],
      icon: Brain,
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
      color: 'from-yellow-500 to-orange-600'
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
      color: 'from-red-500 to-pink-600'
    }
  ];

  useEffect(() => {];];
    const timer = setInterval(() => {;
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {;
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {;
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="relative overflow-hidden rounded-2xl">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >{slides.map((slide) => (</div>
            <div key={slide.id}, className="w-full flex-shrink-0">
              <div className={`bg-gradient-to-br ${slide.color} p-8 rounded-2xl text-white`}>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                      <slide.icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{slide.title}</h3>
                      <p className="text-white/90">{slide.description}</p>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">{slide.features.map((feature, index) => (</div>
                    <div key={index}, className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button
          onClick={prevSlide}, className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button
          onClick={nextSlide}, className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
      
      <div className="flex justify-center space-x-2 mt-6">{slides.map((_, index) => (</div>
          <button
            key={index}, onClick={() =>setCurrentSlide(index)}, className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-cyan-500' : 'bg-gray-300'
            }`}
          />
        ))}</button>
      </div>
    </div>
  );
};

export default ContentCarousel;

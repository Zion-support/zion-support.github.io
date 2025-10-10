'use client';
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, ArrowRight, Brain, Cpu, Shield, Zap, Target, BarChart, Users, Settings } from 'lucide-react';

const ContentCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      title: 'AI-Powered Business Transformation',
      description: 'See how we helped a Fortune 500 company achieve 300% ROI with our AI solutions',
      image: '🤖',
      stats: { value: '300%', label: 'ROI Increase' },
      icon: Brain,
      color: 'from-cyan-400 to-blue-600'
    },
    {
      id: 2,
      title: 'Cloud Migration Success',
      description: 'Learn how we migrated a complex enterprise system to the cloud with zero downtime',
      image: '☁️',
      stats: { value: '99.9%', label: 'Uptime' },
      icon: Cpu,
      color: 'from-purple-400 to-pink-600'
    },
    {
      id: 3,
      title: 'Cybersecurity Excellence',
      description: 'Discover how we protected a financial institution from advanced cyber threats',
      image: '🔒',
      stats: { value: '100%', label: 'Security Score' },
      icon: Shield,
      color: 'from-green-400 to-emerald-600'
    },
    {
      id: 4,
      title: 'Micro SAAS Innovation',
      description: 'Explore our micro SAAS tools that helped 1000+ businesses streamline operations',
      image: '⚡',
      stats: { value: '1000+', label: 'Happy Clients' },
      icon: Zap,
      color: 'from-yellow-400 to-orange-600'
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

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
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="flex transition-transform duration-500 ease-in-out" 
             style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((slide) => (
            <div key={slide.id} className="w-full flex-shrink-0">
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div className="flex flex-col justify-center">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${slide.color} flex items-center justify-center mr-4`}>
                      <slide.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-4xl">{slide.image}</div>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {slide.title}
                  </h3>
                  
                  <p className="text-gray-300 text-lg mb-6">
                    {slide.description}
                  </p>
                  
                  <div className="flex items-center space-x-6 mb-6">
                    <div className="text-center">
                      <div className={`text-3xl font-bold bg-gradient-to-r ${slide.color} bg-clip-text text-transparent`}>
                        {slide.stats.value}
                      </div>
                      <div className="text-gray-400 text-sm">{slide.stats.label}</div>
                    </div>
                  </div>
                  
                  <button className={`inline-flex items-center px-6 py-3 rounded-lg text-white font-semibold bg-gradient-to-r ${slide.color} hover:opacity-90 transition-opacity`}>
                    Learn More
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
                
                <div className="flex items-center justify-center">
                  <div className="w-64 h-64 bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl flex items-center justify-center">
                    <div className="text-8xl">{slide.image}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
        
        {/* Slide indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-cyan-400' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
        
        {/* Auto-play toggle */}
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        >
          {isAutoPlaying ? '⏸️' : '▶️'}
        </button>
      </div>
    </div>
  );
};

export default ContentCarousel;
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
      description: 'Transform your business with our cutting-edge AI solutions that deliver 300% ROI and automate 95% of your processes.',
      image: '🤖',
      stats: ['300% ROI', '95% Automation', '$50M+ Savings'],
      cta: 'Explore AI Services',
      href: '/ai-services',
      color: 'from-cyan-400 to-blue-600'
    },
    {
      id: 2,
      title: 'Enterprise IT Solutions',
      description: 'Comprehensive IT services including cloud migration, cybersecurity, and system integration for modern businesses.',
      image: '⚙️',
      stats: ['500+ Projects', '99.9% Uptime', '24/7 Support'],
      cta: 'View IT Services',
      href: '/it-services',
      color: 'from-purple-400 to-pink-600'
    },
    {
      id: 3,
      title: 'Quantum Computing Innovation',
      description: 'Next-generation quantum computing capabilities for complex problem solving and optimization challenges.',
      image: '⚛️',
      stats: ['Custom Pricing', 'Advanced Tech', 'Future Ready'],
      cta: 'Learn More',
      href: '/quantum-computing',
      color: 'from-green-400 to-emerald-600'
    },
    {
      id: 4,
      title: 'Industry-Specific Solutions',
      description: 'Tailored AI and IT solutions for healthcare, finance, manufacturing, retail, education, and transportation.',
      image: '🏭',
      stats: ['6 Industries', 'Custom Solutions', 'Expert Team'],
      cta: 'See Industries',
      href: '/industry-solutions',
      color: 'from-yellow-400 to-orange-600'
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div className="relative w-full h-96 lg:h-[500px] overflow-hidden rounded-lg cyber-card">
      {/* Slide Content */}
      <div className="relative h-full">
        {/* Background Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${currentSlideData.color} opacity-20`}></div>
        
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%2300ffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
        </div>

        {/* Content */}
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Text Content */}
              <div className="text-center lg:text-left">
                <div className="text-6xl lg:text-8xl mb-6 animate-bounce">
                  {currentSlideData.image}
                </div>
                <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4 neon-text">
                  {currentSlideData.title}
                </h2>
                <p className="text-lg lg:text-xl text-gray-300 mb-8 leading-relaxed">
                  {currentSlideData.description}
                </p>

                {/* Stats */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                  {currentSlideData.stats.map((stat, index) => (
                    <div key={index} className="cyber-card px-4 py-2">
                      <span className="text-cyan-400 font-bold text-sm">{stat}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <a
                  href={currentSlideData.href}
                  className="cyber-button inline-flex items-center text-lg px-8 py-4 hover:scale-105 transition-transform"
                >
                  {currentSlideData.cta}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </div>

              {/* Visual Elements */}
              <div className="hidden lg:block">
                <div className="relative">
                  {/* Floating Icons */}
                  <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center animate-pulse">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute top-8 right-0 w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-600 rounded-lg flex items-center justify-center animate-pulse" style={{ animationDelay: '1s' }}>
                    <Cpu className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute bottom-0 left-8 w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-600 rounded-lg flex items-center justify-center animate-pulse" style={{ animationDelay: '2s' }}>
                    <Shield className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute bottom-8 right-8 w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-lg flex items-center justify-center animate-pulse" style={{ animationDelay: '3s' }}>
                    <Zap className="w-5 h-5 text-white" />
                  </div>

                  {/* Central Visual */}
                  <div className="w-64 h-64 mx-auto bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-full flex items-center justify-center border-2 border-cyan-400/30">
                    <div className="text-8xl animate-spin" style={{ animationDuration: '20s' }}>
                      {currentSlideData.image}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-slate-800/80 hover:bg-slate-700/80 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-slate-800/80 hover:bg-slate-700/80 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-cyan-400 w-8' 
                : 'bg-gray-600 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Play/Pause Button */}
      <button
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className="absolute top-4 right-4 w-10 h-10 bg-slate-800/80 hover:bg-slate-700/80 rounded-full flex items-center justify-center text-white transition-all duration-300"
        aria-label={isAutoPlaying ? 'Pause slideshow' : 'Play slideshow'}
      >
        {isAutoPlaying ? (
          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        ) : (
          <div className="w-0 h-0 border-l-4 border-l-white border-t-2 border-b-2 border-t-transparent border-b-transparent ml-1"></div>
        )}
      </button>
    </div>
  );
};

export default ContentCarousel;
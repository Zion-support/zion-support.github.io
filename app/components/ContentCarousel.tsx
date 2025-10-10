'use client';
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, ArrowRight, CheckCircle, Brain, Cloud, Zap, Shield } from 'lucide-react';

const ContentCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      title: 'AI-Powered Solutions',
      description: 'Transform your business with cutting-edge artificial intelligence technology.',
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics'
      ],
      icon: Brain,
      color: 'from-purple-500 to-pink-600',
      image: '/api/placeholder/600/400'
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
      color: 'from-green-500 to-blue-600',
      image: '/api/placeholder/600/400'
    },
    {
      id: 3,
      title: 'AI Automation',
      description: 'Automate complex business processes with intelligent AI systems.',
      features: [
        'Process automation',
        'Workflow optimization',
        'Smart decision making',
        'Error reduction'
      ],
      icon: Zap,
      color: 'from-yellow-500 to-orange-600',
      image: '/api/placeholder/600/400'
    },
    {
      id: 4,
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your digital assets and data.',
      features: [
        'Threat detection',
        'Data encryption',
        'Compliance management',
        'Risk assessment'
      ],
      icon: Shield,
      color: 'from-red-500 to-purple-600',
      image: '/api/placeholder/600/400'
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="py-16 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Technology Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how our cutting-edge technology can transform your business operations.
          </p>
        </div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 md:p-12">
                    {/* Content */}
                    <div className="flex flex-col justify-center">
                      <div className={`w-16 h-16 bg-gradient-to-r ${slide.color} rounded-2xl flex items-center justify-center mb-6`}>
                        <slide.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        {slide.title}
                      </h3>
                      <p className="text-xl text-gray-300 mb-6">
                        {slide.description}
                      </p>
                      <div className="space-y-3 mb-8">
                        {slide.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                            <span className="text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center gap-2 w-fit">
                        Learn More
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Image Placeholder */}
                    <div className="flex items-center justify-center">
                      <div className={`w-full h-80 bg-gradient-to-br ${slide.color} rounded-xl flex items-center justify-center`}>
                        <slide.icon className="w-24 h-24 text-white/50" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex items-center space-x-4">
              <button
                onClick={prevSlide}
                className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={togglePlayPause}
                className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300"
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? (
                  <Pause className="w-6 h-6 text-white" />
                ) : (
                  <Play className="w-6 h-6 text-white" />
                )}
              </button>
              <button
                onClick={nextSlide}
                className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* Slide Indicators */}
            <div className="flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? 'bg-white'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCarousel;
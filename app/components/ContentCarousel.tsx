'use client';
import React, { useState, useEffect } from 'react';
import { Cloud, Zap, Shield, ChevronLeft, ChevronRight } from 'lucide-react';

const ContentCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      title: 'AI-Powered Solutions',
      description: 'Transform your business with cutting-edge artificial intelligence that learns and adapts to your needs.',
      icon: Cloud,
      features: ['Machine Learning', 'Natural Language Processing', 'Predictive Analytics', 'Automated Decision Making'],
      color: 'from-cyan-500 to-blue-600'
    },
    {
      id: 2,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions that grow with your business and ensure maximum uptime.',
      icon: Zap,
      features: ['Auto-scaling', 'High Availability', 'Disaster Recovery', 'Cost Optimization'],
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 3,
      title: 'Enterprise Security',
      description: 'Comprehensive security measures to protect your data and systems from evolving threats.',
      icon: Shield,
      features: ['Threat Detection', 'Data Encryption', 'Access Control', 'Compliance Management'],
      color: 'from-green-500 to-emerald-600'
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
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Our <span className="text-cyan-400">Solutions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how our innovative AI and IT solutions can transform your business.
          </p>
        </div>

        <div className="relative">
          {/* Main Carousel */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 overflow-hidden">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-4">
                <div className={`w-16 h-16 bg-gradient-to-r ${currentSlideData.color} rounded-xl flex items-center justify-center`}>
                  <currentSlideData.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{currentSlideData.title}</h3>
                  <p className="text-gray-300">{currentSlideData.description}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <button
                  onClick={prevSlide}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {currentSlideData.features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/5 rounded-lg p-4 border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
                >
                  <div className="text-cyan-400 font-semibold mb-2">{feature}</div>
                  <div className="text-gray-300 text-sm">
                    Advanced {feature.toLowerCase()} capabilities for your business needs.
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-cyan-400 scale-125'
                    : 'bg-gray-600 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Auto-play Toggle */}
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                isAutoPlaying
                  ? 'bg-cyan-500 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {isAutoPlaying ? 'Pause' : 'Play'} Auto-slide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCarousel;
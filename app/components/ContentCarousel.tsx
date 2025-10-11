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
      description: 'Transform your business with cutting-edge artificial intelligence technology.',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      stats: [
        { value: '95%', label: 'Accuracy' },
        { value: '50%', label: 'Cost Reduction' },
        { value: '3x', label: 'Faster Processing' }
      ]
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast solutions that deliver exceptional results for your business.',
      features: ['Real-time Processing', 'Scalable Architecture', 'Optimized Performance', 'Reliable Operations'],
      stats: [
        { value: '99.9%', label: 'Uptime' },
        { value: '10x', label: 'Speed Increase' },
        { value: '24/7', label: 'Support' }
      ]
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Advanced security measures to protect your data and ensure compliance.',
      features: ['End-to-End Encryption', 'Access Controls', 'Audit Trails', 'Compliance Standards'],
      stats: [
        { value: '256-bit', label: 'Encryption' },
        { value: 'SOC 2', label: 'Compliance' },
        { value: 'Zero', label: 'Breaches' }
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

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700">
        {/* Slide Content */}
        <div className="relative h-96">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="flex h-full">
                {/* Left side - Content */}
                <div className="flex-1 p-8 flex flex-col justify-center">
                  <div className="flex items-center mb-4">
                    <slide.icon className="w-12 h-12 text-blue-400 mr-4" />
                    <h3 className="text-3xl font-bold text-white">{slide.title}</h3>
                  </div>
                  <p className="text-xl text-gray-300 mb-6 max-w-md">
                    {slide.description}
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {slide.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  {slide.stats && (
                    <div className="flex space-x-8">
                      {slide.stats.map((stat, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-2xl font-bold text-blue-400">{stat.value}</div>
                          <div className="text-sm text-gray-400">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Right side - Visual */}
                <div className="flex-1 p-8 flex items-center justify-center">
                  <div className="w-64 h-64 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <slide.icon className="w-32 h-32 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/20 transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/20 transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-blue-400' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentCarousel;
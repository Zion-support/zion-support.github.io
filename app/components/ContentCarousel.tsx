'use client';
import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Star, CheckCircle } from 'lucide-react';

const ContentCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'AI-Powered Business Transformation',
      description: 'See how our AI solutions helped a Fortune 500 company reduce costs by 40% and increase efficiency by 60%.',
      stats: ['40% Cost Reduction', '60% Efficiency Gain', '$2.5M Annual Savings'],
      image: '🤖',
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: '5G Network Implementation',
      description: 'Successfully deployed 5G infrastructure for a smart city, connecting 50,000+ devices with ultra-low latency.',
      stats: ['10x Faster Speeds', '50K+ Connected Devices', '99.9% Uptime'],
      image: '📡',
      color: 'from-green-500 to-blue-500'
    },
    {
      title: 'AI Voice Assistant Platform',
      description: 'Built custom voice assistants for 100+ businesses, handling 1M+ interactions with 95% accuracy.',
      stats: ['95% Accuracy Rate', '1M+ Interactions', '24/7 Availability'],
      image: '🎤',
      color: 'from-purple-500 to-pink-500'
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
    <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 overflow-hidden">
      <div className="relative h-64">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="flex items-center h-full">
              <div className="flex-1">
                <div className="text-6xl mb-4">{slide.image}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{slide.title}</h3>
                <p className="text-gray-300 mb-6 max-w-2xl">{slide.description}</p>
                <div className="flex flex-wrap gap-4">
                  {slide.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-gray-300">{stat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-6">
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-cyan-400' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
        <div className="flex space-x-2">
          <button
            onClick={prevSlide}
            className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
          >
            <ArrowRight className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentCarousel;
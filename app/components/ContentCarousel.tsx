'use client';
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ContentCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      emoji: '🚀',
      title: 'AI-Powered Growth',
      content: 'Our AI solutions helped increase our revenue by 300% in just 6 months. The automation and insights are incredible.',
      author: 'Sarah Johnson, CEO TechCorp'
    },
    {
      emoji: '💡',
      title: 'Innovation at Scale',
      content: 'Zion Tech Group transformed our operations with their cutting-edge AI technology. Highly recommended!',
      author: 'Michael Chen, CTO InnovateLab'
    },
    {
      emoji: '⚡',
      title: 'Efficiency Boost',
      content: 'The AI automation reduced our processing time by 80%. Our team can now focus on strategic initiatives.',
      author: 'Emily Rodriguez, Operations Director'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-lg">
      <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 text-center">
              <div className="text-4xl mb-4">{testimonial.emoji}</div>
              <h3 className="text-xl font-bold text-white mb-4">{testimonial.title}</h3>
              <p className="text-gray-300 mb-6">{testimonial.content}</p>
              <div className="text-cyan-400 font-medium">{testimonial.author}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors duration-200"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors duration-200"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              index === currentSlide ? 'bg-cyan-400' : 'bg-white/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ContentCarousel;
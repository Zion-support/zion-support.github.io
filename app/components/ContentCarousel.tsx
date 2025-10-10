'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, ArrowRight, CheckCircle } from 'lucide-react';

const ContentCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: 'AI-Powered Business Transformation',
      description: 'Discover how our AI solutions can revolutionize your business operations and drive unprecedented growth.',
      image: '/images/carousel/ai-transformation.jpg',
      category: 'AI Solutions',
      rating: 4.9,
      features: ['Machine Learning', 'Automation', 'Analytics']
    },
    {
      id: 2,
      title: 'Cloud Infrastructure Excellence',
      description: 'Build scalable, secure, and high-performance cloud infrastructure that grows with your business.',
      image: '/images/carousel/cloud-infrastructure.jpg',
      category: 'Cloud Services',
      rating: 4.8,
      features: ['Scalability', 'Security', 'Performance']
    },
    {
      id: 3,
      title: 'Data Analytics & Insights',
      description: 'Transform your data into actionable insights with our advanced analytics and visualization tools.',
      image: '/images/carousel/data-analytics.jpg',
      category: 'Analytics',
      rating: 4.9,
      features: ['Real-time', 'Predictive', 'Visualization']
    },
    {
      id: 4,
      title: 'Cybersecurity Solutions',
      description: 'Protect your business with enterprise-grade security solutions and compliance frameworks.',
      image: '/images/carousel/cybersecurity.jpg',
      category: 'Security',
      rating: 4.7,
      features: ['Threat Detection', 'Compliance', 'Monitoring']
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

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured <span className="text-cyan-400">Solutions</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Explore our most popular and innovative solutions that are transforming businesses worldwide.
          </p>
        </div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="w-full flex-shrink-0">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
                    <div className="md:flex">
                      {/* Image Section */}
                      <div className="md:w-1/2 h-64 md:h-96 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 relative">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-cyan-400 text-slate-900 text-sm font-semibold rounded-full">
                            {slide.category}
                          </span>
                        </div>
                        <div className="absolute bottom-4 left-4 flex items-center gap-2">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < Math.floor(slide.rating)
                                    ? 'text-yellow-400 fill-current'
                                    : 'text-gray-400'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-white text-sm font-medium">{slide.rating}</span>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="md:w-1/2 p-8">
                        <h3 className="text-2xl font-bold text-white mb-4">{slide.title}</h3>
                        <p className="text-gray-300 mb-6">{slide.description}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-6">
                          {slide.features.map((feature, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-white/10 text-cyan-400 text-sm rounded-full flex items-center gap-1"
                            >
                              <CheckCircle className="w-3 h-3" />
                              {feature}
                            </span>
                          ))}
                        </div>

                        <button className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-6 py-3 rounded-lg font-semibold hover:from-cyan-300 hover:to-purple-300 transition-all duration-300 transform hover:scale-105">
                          Learn More
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-3 text-white hover:bg-white/20 transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-3 text-white hover:bg-white/20 transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-cyan-400'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCarousel;
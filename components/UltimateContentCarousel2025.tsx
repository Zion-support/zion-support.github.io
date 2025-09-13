'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Play, Star, Users, Zap, ArrowRight } from 'lucide-react';

const UltimateContentCarousel2025 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "AI-Powered Business Automation",
      description: "Transform your business operations with cutting-edge AI automation that learns and adapts to your specific needs.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      category: "Automation",
      rating: 4.9,
      users: "10K+",
      features: ["Smart Workflows", "Predictive Analytics", "Real-time Optimization"]
    },
    {
      id: 2,
      title: "Quantum Computing Solutions",
      description: "Harness the power of quantum computing to solve complex problems that were previously impossible to tackle.",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=600&fit=crop",
      category: "Quantum Tech",
      rating: 4.8,
      users: "5K+",
      features: ["Quantum Algorithms", "Advanced Encryption", "Supercomputing"]
    },
    {
      id: 3,
      title: "Neural Interface Technology",
      description: "Connect directly with AI systems through revolutionary neural interfaces that understand your thoughts.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
      category: "Neural Tech",
      rating: 4.9,
      users: "2K+",
      features: ["Brain-Computer Interface", "Thought Recognition", "Neural Networks"]
    },
    {
      id: 4,
      title: "Edge AI Revolution",
      description: "Bring AI processing to the edge with ultra-fast, low-latency solutions that work anywhere.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
      category: "Edge Computing",
      rating: 4.7,
      users: "15K+",
      features: ["Real-time Processing", "Offline Capability", "Ultra-low Latency"]
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
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 text-white text-sm font-medium mb-6">
            <Play className="w-4 h-4 mr-2" />
            ULTIMATE CONTENT CAROUSEL 2025
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Discover Revolutionary
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Technologies</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore the most advanced AI and technology solutions that are reshaping industries and creating new possibilities.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Main Carousel */}
          <div className="relative overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="w-full flex-shrink-0">
                  <div className="relative h-[600px] bg-gradient-to-br from-slate-800 to-purple-900 rounded-3xl overflow-hidden">
                    {/* Background Image */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${slide.image})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10 h-full flex items-center">
                      <div className="max-w-2xl px-8 md:px-12">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-4">
                          {slide.category}
                        </div>
                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                          {slide.title}
                        </h3>
                        <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                          {slide.description}
                        </p>
                        
                        {/* Features */}
                        <div className="flex flex-wrap gap-2 mb-8">
                          {slide.features.map((feature, index) => (
                            <span 
                              key={index}
                              className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                        
                        {/* Stats */}
                        <div className="flex items-center gap-6 mb-8">
                          <div className="flex items-center gap-1">
                            <Star className="w-5 h-5 text-yellow-400 fill-current" />
                            <span className="text-white font-semibold">{slide.rating}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-5 h-5 text-blue-400" />
                            <span className="text-white font-semibold">{slide.users} users</span>
                          </div>
                        </div>
                        
                        {/* CTA */}
                        <div className="flex flex-col sm:flex-row gap-4">
                          <Link 
                            href={`/technology/${slide.id}`}
                            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                          >
                            Learn More
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                          <Link 
                            href="/demo"
                            className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-purple-600 transition-colors duration-300"
                          >
                            <Play className="w-4 h-4 mr-2" />
                            Watch Demo
                          </Link>
                        </div>
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
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentSlide ? 'bg-purple-500' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Link 
            href="/all-technologies" 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
          >
            <Zap className="w-5 h-5 mr-2" />
            Explore All Technologies
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UltimateContentCarousel2025;
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AI2028DynamicContentCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const contentSlides = [
    {
      title: "AI 2028: The Future is Here",
      subtitle: "Revolutionary Breakthroughs Transforming Industries",
      description: "Discover how AI will achieve AGI by 2028, enabling 10,000% ROI improvements across all sectors.",
      href: "/blog/ai-2028-future-predictions-breakthrough",
      image: "🚀",
      gradient: "from-red-500 to-orange-500",
      badge: "REVOLUTIONARY"
    },
    {
      title: "Quantum-AI Fusion Revolution",
      subtitle: "8000% ROI Through Quantum Computing",
      description: "Explore how quantum computing and AI fusion is solving impossible problems and achieving unprecedented results.",
      href: "/blog/ai-2027-quantum-ai-fusion-revolution",
      image: "⚛️",
      gradient: "from-purple-500 to-indigo-500",
      badge: "BREAKTHROUGH"
    },
    {
      title: "Neural Interface Revolution",
      subtitle: "Direct Brain-Computer Communication",
      description: "Learn about neural interfaces enabling 99.7% accuracy in brain-computer communication and 95% patient recovery rates.",
      href: "/blog/ai-2026-neural-interface-revolution",
      image: "🧠",
      gradient: "from-blue-500 to-cyan-500",
      badge: "INNOVATION"
    },
    {
      title: "Healthcare Transformation",
      subtitle: "95% Patient Recovery Success",
      description: "See how neural interface technology revolutionized healthcare with unprecedented patient recovery rates.",
      href: "/case-studies/ai-2026-neural-interface-healthcare-breakthrough",
      image: "🏥",
      gradient: "from-green-500 to-emerald-500",
      badge: "SUCCESS"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === contentSlides.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [contentSlides.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === contentSlides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? contentSlides.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative bg-gradient-to-br from-gray-900 to-blue-900 rounded-2xl overflow-hidden shadow-2xl">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-8 md:p-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
              <span className="text-sm font-semibold text-white">🔮 FEATURED CONTENT</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Revolutionary AI Breakthroughs
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Explore the cutting-edge AI innovations that are transforming industries 
              and achieving unprecedented ROI across all sectors.
            </p>
          </div>

          {/* Carousel */}
          <div className="relative">
            {/* Main Slide */}
            <div className="bg-white rounded-xl p-8 shadow-xl">
              <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <span className={`bg-${contentSlides[currentIndex].gradient.split('-')[1]}-500 text-white text-xs px-3 py-1 rounded-full font-semibold mr-3`}>
                      {contentSlides[currentIndex].badge}
                    </span>
                    <span className="text-sm text-gray-500">Featured Content</span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    {contentSlides[currentIndex].title}
                  </h3>
                  
                  <h4 className="text-lg text-gray-600 mb-4">
                    {contentSlides[currentIndex].subtitle}
                  </h4>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {contentSlides[currentIndex].description}
                  </p>
                  
                  <Link 
                    href={contentSlides[currentIndex].href}
                    className={`inline-flex items-center bg-gradient-to-r ${contentSlides[currentIndex].gradient} text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300`}
                  >
                    Explore Now
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>

                {/* Image/Icon */}
                <div className="flex-shrink-0">
                  <div className={`w-32 h-32 bg-gradient-to-br ${contentSlides[currentIndex].gradient} rounded-2xl flex items-center justify-center text-6xl shadow-lg`}>
                    {contentSlides[currentIndex].image}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-6">
              <button 
                onClick={prevSlide}
                className="p-3 bg-white bg-opacity-20 backdrop-blur-sm rounded-full text-white hover:bg-opacity-30 transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Dots */}
              <div className="flex space-x-2">
                {contentSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-white' 
                        : 'bg-white bg-opacity-40 hover:bg-opacity-60'
                    }`}
                  />
                ))}
              </div>

              <button 
                onClick={nextSlide}
                className="p-3 bg-white bg-opacity-20 backdrop-blur-sm rounded-full text-white hover:bg-opacity-30 transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {contentSlides.map((slide, index) => (
              <Link
                key={index}
                href={slide.href}
                className={`p-4 rounded-lg text-center transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-white bg-opacity-20 backdrop-blur-sm'
                    : 'bg-white bg-opacity-10 hover:bg-opacity-20'
                }`}
              >
                <div className="text-2xl mb-2">{slide.image}</div>
                <div className="text-sm font-semibold text-white truncate">
                  {slide.title.split(':')[0]}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
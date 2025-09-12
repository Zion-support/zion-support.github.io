'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const featuredContent = [
  {
    id: 1,
    title: "AI 2026 Breakthrough Showcase",
    description: "Revolutionary quantum-neural fusion technologies delivering unprecedented ROI",
    image: "⚛️",
    link: "/ai-2026-breakthrough-showcase",
    category: "Breakthrough Technology",
    roi: "15,000% ROI",
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50"
  },
  {
    id: 2,
    title: "AI 2027 Future Predictions",
    description: "Neural synthesis and quantum AI fusion shaping the future of technology",
    image: "🔮",
    link: "/ai-2027-future-predictions",
    category: "Future Technology",
    roi: "8,000% ROI",
    gradient: "from-indigo-500 to-purple-500",
    bgGradient: "from-indigo-50 to-purple-50"
  },
  {
    id: 3,
    title: "Quantum Computing Solutions 2026",
    description: "Breakthrough quantum technologies with enterprise-grade performance",
    image: "⚛️",
    link: "/quantum-computing-solutions-breakthrough-2026",
    category: "Quantum Computing",
    roi: "25,000% ROI",
    gradient: "from-cyan-500 to-blue-500",
    bgGradient: "from-cyan-50 to-blue-50"
  },
  {
    id: 4,
    title: "Enterprise AI Transformation",
    description: "Complete enterprise solutions with proven success stories",
    image: "🏢",
    link: "/case-studies/ai-2026-global-enterprise-transformation-breakthrough",
    category: "Enterprise Solutions",
    roi: "5,000% ROI",
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-50 to-emerald-50"
  },
  {
    id: 5,
    title: "Neural Interface Revolution",
    description: "Healthcare AI breakthroughs with 95% patient recovery success",
    image: "🧠",
    link: "/case-studies/ai-2026-neural-interface-healthcare-breakthrough",
    category: "Healthcare AI",
    roi: "95% Success",
    gradient: "from-orange-500 to-red-500",
    bgGradient: "from-orange-50 to-red-50"
  },
  {
    id: 6,
    title: "Autonomous Manufacturing",
    description: "Self-optimizing manufacturing systems with 8,500% ROI",
    image: "🏭",
    link: "/case-studies/ai-2026-autonomous-manufacturing-revolution",
    category: "Manufacturing AI",
    roi: "8,500% ROI",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50"
  }
];

export default function DynamicContentCarousel2026() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredContent.length);
    }, 6000); // Change every 6 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredContent.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + featuredContent.length) % featuredContent.length);
    setIsAutoPlaying(false);
  };

  const currentContent = featuredContent[currentIndex];

  return (
    <div className="relative bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Revolutionary Content Showcase
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Discover breakthrough AI technologies and success stories that are transforming industries worldwide
          </p>
        </div>

        <div className="relative">
          {/* Main Content Card */}
          <div className={`bg-gradient-to-br ${currentContent.bgGradient} rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200 overflow-hidden`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <span className={`px-3 py-1 bg-gradient-to-r ${currentContent.gradient} text-white rounded-full text-sm font-semibold`}>
                    {currentContent.category}
                  </span>
                  <span className="text-2xl">{currentContent.image}</span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {currentContent.title}
                </h3>
                
                <p className="text-lg text-gray-700 mb-6">
                  {currentContent.description}
                </p>
                
                <div className="flex items-center space-x-4 mb-8">
                  <span className="text-3xl font-bold text-green-600">
                    {currentContent.roi}
                  </span>
                  <div className="h-8 w-px bg-gray-300"></div>
                  <span className="text-sm text-gray-600">Proven Results</span>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href={currentContent.link}
                    className={`px-8 py-4 bg-gradient-to-r ${currentContent.gradient} text-white rounded-lg font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg text-center`}
                  >
                    Explore Content
                  </Link>
                  <Link 
                    href="/content-showcase"
                    className="px-8 py-4 bg-white text-gray-700 border-2 border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 text-center"
                  >
                    View All Content
                  </Link>
                </div>
              </div>
              
              <div className="text-center lg:text-right">
                <div className="text-8xl md:text-9xl opacity-20">
                  {currentContent.image}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 z-10"
            aria-label="Previous content"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 z-10"
            aria-label="Next content"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Play/Pause Button */}
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300 z-10"
            aria-label={isAutoPlaying ? "Pause auto-play" : "Resume auto-play"}
          >
            {isAutoPlaying ? (
              <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
              </svg>
            ) : (
              <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            )}
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-8">
          {featuredContent.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? `bg-gradient-to-r ${currentContent.gradient} w-8` 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Content Grid Preview */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-12">
          {featuredContent.map((content, index) => (
            <button
              key={content.id}
              onClick={() => goToSlide(index)}
              className={`p-4 rounded-lg text-center transition-all duration-300 ${
                index === currentIndex 
                  ? `bg-gradient-to-r ${content.gradient} text-white shadow-lg` 
                  : 'bg-white hover:bg-gray-50 shadow-sm'
              }`}
            >
              <div className="text-2xl mb-2">{content.image}</div>
              <div className="text-xs font-semibold truncate">{content.title}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
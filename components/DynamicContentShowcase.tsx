"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function DynamicContentShowcase() {
  const [currentSlidesetCurrentSlide] = useState(0);
  const [isAutoPlayingsetIsAutoPlaying] = useState(true);

  const showcaseItems = [
    {
      id: 1,
      title: 'AI 2025 Ultimate Breakthrough Revolution',
      subtitle: '10,000% ROI Guaranteed',
      description: 'Revolutionary synthetic intelligence delivering unprecedented returns through quantum-enhanced automation and transcendent business transformation.',
      image: '🚀',
      link: '/ai-2025-ultimate-breakthrough-revolution',
      category: 'AI 2025',
      roi: '10,000%',
      badge: 'BREAKTHROUGH',
      gradient: 'from-red-900 via-purple-900 to-pink-900'
    },
    {
      id: 2,
      title: 'Quantum Computing Solutions 2025 Ultimate',
      subtitle: 'Infinite Computational Power',
      description: 'Revolutionary quantum computing breakthrough delivering infinite computational power and quantum supremacy for unprecedented business transformation.',
      image: '⚛️',
      link: '/quantum-computing-solutions-2025-ultimate',
      category: 'Quantum Computing',
      roi: '∞',
      badge: 'REVOLUTIONARY',
      gradient: 'from-indigo-900 via-purple-900 to-pink-900'
    },
    {
      id: 3,
      title: 'Advanced Automation Solutions 2025 Ultimate',
      subtitle: '15,000% ROI Guaranteed',
      description: 'Revolutionary automation breakthrough delivering unprecedented returns through intelligent process automation and autonomous decision systems.',
      image: '🤖',
      link: '/advanced-automation-solutions-2025-ultimate',
      category: 'Automation',
      roi: '15,000%',
      badge: 'ULTIMATE',
      gradient: 'from-green-900 via-blue-900 to-purple-900'
    },
    {
      id: 4,
      title: 'AI 2026 Quantum-Neural Fusion',
      subtitle: '15,000% ROI Breakthrough',
      description: 'Revolutionary quantum-neural integration delivering unprecedented computational power and business transformation through advanced AI systems.',
      image: '🧠',
      link: '/ai-2026-quantum-neural-fusion-breakthrough',
      category: 'AI 2026',
      roi: '15,000%',
      badge: 'BREAKTHROUGH',
      gradient: 'from-cyan-900 via-blue-900 to-purple-900'
    },
    {
      id: 5,
      title: 'AI 2027 Future Predictions Revolutionary',
      subtitle: '8,000% ROI Future Tech',
      description: 'Advanced AI predictions and neural synthesis delivering revolutionary insights and business optimization with 99.7% accuracy.',
      image: '🔮',
      link: '/ai-2027-future-predictions-revolutionary',
      category: 'AI 2027',
      roi: '8,000%',
      badge: 'FUTURE',
      gradient: 'from-purple-900 via-pink-900 to-red-900'
    },
    {
      id: 6,
      title: 'AI 2028 Future Predictions Breakthrough',
      subtitle: '3,000% ROI Automotive Revolution',
      description: 'Revolutionary AI predictions for 2028 with breakthrough automotive transformation and advanced neural interface technologies.',
      image: '🚗',
      link: '/ai-2028-future-predictions-breakthrough',
      category: 'AI 2028',
      roi: '3,000%',
      badge: 'REVOLUTIONARY',
      gradient: 'from-blue-900 via-indigo-900 to-purple-900'
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % showcaseItems.length);
      }5000);
      return () => clearInterval(interval);
    }
  }[isAutoPlayingshowcaseItems.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % showcaseItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + showcaseItems.length) % showcaseItems.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'BREAKTHROUGH': return 'bg-gradient-to-r from-red-500 to-pink-500';
      case 'REVOLUTIONARY': return 'bg-gradient-to-r from-purple-500 to-indigo-500';
      case 'ULTIMATE': return 'bg-gradient-to-r from-green-500 to-blue-500';
      case 'FUTURE': return 'bg-gradient-to-r from-cyan-500 to-blue-500';
      default: return 'bg-gradient-to-r from-gray-500 to-gray-600';
    }
  };

  const currentItem = showcaseItems[currentSlide];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Dynamic Content Showcase
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the most revolutionary AI breakthroughs and solutions. 
            Our dynamic showcase features the latest innovations delivering unprecedented ROI.
          </p>
        </div>

        {/* Main Showcase */}
        <div className="relative mb-12">
          <div className={`bg-gradient-to-br ${currentItem.gradient} p-12 rounded-3xl relative overflow-hidden`}>
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-48 translate-x-48"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-32 -translate-x-32"></div>
            
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`px-4 py-2 rounded-full text-sm font-bold ${getBadgeColor(currentItem.badge)}`}>
                    {currentItem.badge}
                  </div>
                  <div className="px-4 py-2 bg-white/20 rounded-full text-sm font-bold">
                    {currentItem.category}
                  </div>
                </div>
                
                <h3 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                  {currentItem.title}
                </h3>
                
                <div className="text-2xl md:text-3xl font-bold mb-6 text-yellow-400">
                  {currentItem.subtitle}
                </div>
                
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  {currentItem.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href={currentItem.link}
                    className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-8 py-4 rounded-lg text-xl font-bold hover:scale-105 transition-transform text-center"
                  >
                    Explore Solution
                  </Link>
                  <Link 
                    href="/contact"
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg text-xl font-bold hover:scale-105 transition-transform text-center"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-9xl mb-8">{currentItem.image}</div>
                <div className="bg-white/20 p-8 rounded-2xl">
                  <div className="text-sm text-gray-300 mb-2">Projected ROI</div>
                  <div className="text-5xl font-bold text-yellow-400 mb-4">
                    {currentItem.roi}
                  </div>
                  <div className="text-sm text-gray-300">
                    Guaranteed within 12 months
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-4 rounded-full transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-4 rounded-full transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Play/Pause Button */}
          <button 
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors"
          >
            {isAutoPlaying ? (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            )}
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center gap-2 mb-12">
          {showcaseItems.map((_index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-yellow-400' : 'bg-white/30'
              }`}
            />
          ))}
        </div>

        {/* Quick Access Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {showcaseItems.map((itemindex) => (
            <button
              key={item.id}
              onClick={() => goToSlide(index)}
              className={`p-4 rounded-lg text-center transition-all ${
                index === currentSlide 
                  ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-black' 
                  : 'bg-white/10 hover:bg-white/20 text-white'
              }`}
            >
              <div className="text-2xl mb-2">{item.image}</div>
              <div className="text-xs font-bold mb-1">{item.category}</div>
              <div className="text-xs">{item.roi} ROI</div>
            </button>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold mb-6 text-white">
            Ready to Transform Your Business?
          </h3>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already experiencing unprecedented ROI with our revolutionary AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-black px-12 py-6 rounded-lg text-2xl font-bold hover:scale-105 transition-transform"
            >
              Get Started Today
            </Link>
            <Link 
              href="/case-studies" 
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-12 py-6 rounded-lg text-2xl font-bold hover:scale-105 transition-transform"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
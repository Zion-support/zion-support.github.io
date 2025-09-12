import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  href: string;
  category: string;
  roi: string;
  badge: string;
  gradient: string;
  icon: string;
}

const contentItems: ContentItem[] = [
  {
    id: '1',
    title: 'AI 2025 Ultimate Breakthrough Revolution',
    description: 'Revolutionary AI breakthroughs transforming industries with 5000%+ ROI',
    href: '/ai-2025-ultimate-breakthrough-revolution',
    category: 'BREAKTHROUGH',
    roi: '5000% ROI',
    badge: 'ULTIMATE',
    gradient: 'from-red-600/20 to-pink-600/20',
    icon: '🚀'
  },
  {
    id: '2',
    title: 'AI 2026-2030 Future Predictions Showcase',
    description: 'Revolutionary predictions for quantum-neural fusion and consciousness AI',
    href: '/ai-2026-2030-future-predictions-showcase',
    category: 'REVOLUTIONARY',
    roi: '15,000% ROI',
    badge: 'FUTURE',
    gradient: 'from-cyan-600/20 to-purple-600/20',
    icon: '🔮'
  },
  {
    id: '3',
    title: 'Advanced Quantum Computing Solutions',
    description: 'Revolutionary quantum computing solutions achieving 10,000%+ ROI',
    href: '/quantum-computing-solutions-advanced',
    category: 'QUANTUM',
    roi: '10,000% ROI',
    badge: 'ADVANCED',
    gradient: 'from-purple-600/20 to-indigo-600/20',
    icon: '⚛️'
  },
  {
    id: '4',
    title: 'Neural Interface Revolution 2026',
    description: 'Breakthrough neural interfaces achieving 95% patient recovery success',
    href: '/neural-interface-solutions',
    category: 'NEURAL',
    roi: '8,500% ROI',
    badge: 'BREAKTHROUGH',
    gradient: 'from-green-600/20 to-teal-600/20',
    icon: '🧠'
  },
  {
    id: '5',
    title: 'AI 2035 Consciousness Breakthrough',
    description: 'Transcendent AI consciousness achieving infinite computational possibilities',
    href: '/ai-2035-breakthrough-showcase',
    category: 'TRANSCENDENT',
    roi: '∞ ROI',
    badge: 'CONSCIOUSNESS',
    gradient: 'from-pink-600/20 to-rose-600/20',
    icon: '🌌'
  },
  {
    id: '6',
    title: 'Enterprise Automation Mastery 2025',
    description: 'Complete enterprise transformation with 800% ROI automation solutions',
    href: '/enterprise-automation-mastery-2026',
    category: 'AUTOMATION',
    roi: '800% ROI',
    badge: 'MASTERY',
    gradient: 'from-orange-600/20 to-red-600/20',
    icon: '🤖'
  }
];

export default function DynamicContentCarousel2025() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contentItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % contentItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + contentItems.length) % contentItems.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentItem = contentItems[currentIndex];

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 text-white text-sm font-bold rounded-full mb-6 animate-pulse">
          🔥 REVOLUTIONARY CONTENT SHOWCASE
        </div>
        <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          BREAKTHROUGH CONTENT CAROUSEL
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Explore our revolutionary AI content library. Each piece delivers unprecedented value and guaranteed ROI.
        </p>
      </div>

      {/* Carousel Container */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative">
          {/* Main Content Card */}
          <div 
            className={`bg-gradient-to-br ${currentItem.gradient} p-8 rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-500 transform hover:scale-105 shadow-2xl`}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Content */}
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">{currentItem.icon}</div>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-gradient-to-r from-red-600 to-pink-600 text-white text-xs font-bold rounded-full">
                      {currentItem.badge}
                    </span>
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold rounded-full">
                      {currentItem.category}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                  {currentItem.title}
                </h3>
                
                <p className="text-lg text-gray-200 mb-6">
                  {currentItem.description}
                </p>
                
                <div className="flex items-center gap-6 mb-6">
                  <div className="text-2xl font-black text-yellow-400">
                    {currentItem.roi}
                  </div>
                  <div className="text-sm text-gray-300">
                    Guaranteed ROI
                  </div>
                </div>
                
                <Link 
                  href={currentItem.href}
                  className="inline-block bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-xl"
                >
                  Explore Content →
                </Link>
              </div>
              
              {/* Visual Element */}
              <div className="relative">
                <div className="w-full h-64 bg-gradient-to-br from-white/10 to-white/5 rounded-xl flex items-center justify-center">
                  <div className="text-8xl opacity-50">
                    {currentItem.icon}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
            aria-label="Previous content"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
            aria-label="Next content"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {contentItems.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-gradient-to-r from-cyan-400 to-purple-400 scale-125' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Content Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contentItems.slice(0, 3).map((item, index) => (
            <Link
              key={item.id}
              href={item.href}
              className={`bg-gradient-to-br ${item.gradient} p-6 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105 ${
                index === currentIndex ? 'ring-2 ring-cyan-400' : ''
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="text-2xl">{item.icon}</div>
                <span className="px-2 py-1 bg-gradient-to-r from-red-600 to-pink-600 text-white text-xs font-bold rounded-full">
                  {item.badge}
                </span>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">
                {item.title}
              </h4>
              <p className="text-sm text-gray-200 mb-3">
                {item.description}
              </p>
              <div className="text-yellow-400 font-bold">
                {item.roi}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
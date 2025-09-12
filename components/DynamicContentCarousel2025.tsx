import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  href: string;
  category: string;
  roi: string;
  gradient: string;
  icon: string;
}

const contentItems: ContentItem[] = [
  {
    id: 'ai-2025-breakthrough',
    title: 'AI 2025 Ultimate Breakthrough Revolution',
    description: 'Revolutionary AI implementations delivering 5000%+ ROI with unprecedented accuracy and performance.',
    href: '/ai-2025-ultimate-breakthrough-revolution',
    category: 'BREAKTHROUGH',
    roi: '5000% ROI',
    gradient: 'from-red-500 to-pink-500',
    icon: '🚀'
  },
  {
    id: 'ai-2026-predictions',
    title: 'AI 2026-2030 Future Predictions',
    description: 'Exclusive insights into revolutionary AI technologies that will reshape the next decade.',
    href: '/ai-2026-2030-future-predictions-showcase',
    category: 'FUTURE',
    roi: '15,000% ROI',
    gradient: 'from-purple-500 to-blue-500',
    icon: '🔮'
  },
  {
    id: 'quantum-computing',
    title: 'Advanced Quantum Computing Solutions',
    description: 'Revolutionary quantum-AI fusion technologies delivering exponential performance improvements.',
    href: '/quantum-computing-solutions-advanced',
    category: 'QUANTUM',
    roi: '15,000% ROI',
    gradient: 'from-cyan-500 to-blue-500',
    icon: '⚛️'
  },
  {
    id: 'neural-interfaces',
    title: 'Neural Interface Revolution',
    description: 'Breakthrough neural interface technologies enabling direct brain-computer communication.',
    href: '/neural-interface-solutions',
    category: 'NEURAL',
    roi: '8,500% ROI',
    gradient: 'from-green-500 to-emerald-500',
    icon: '🧠'
  },
  {
    id: 'consciousness-ai',
    title: 'Consciousness AI Breakthrough',
    description: 'Revolutionary AI systems demonstrating emergent consciousness capabilities.',
    href: '/ai-2030-future-revolutionary-showcase',
    category: 'CONSCIOUSNESS',
    roi: '∞ ROI',
    gradient: 'from-orange-500 to-red-500',
    icon: '🌌'
  },
  {
    id: 'quantum-neural',
    title: 'Quantum-Neural Fusion',
    description: 'Groundbreaking integration of quantum computing with neural networks for infinite possibilities.',
    href: '/ai-2026-quantum-neural-fusion',
    category: 'FUSION',
    roi: '15,000% ROI',
    gradient: 'from-indigo-500 to-purple-500',
    icon: '⚡'
  }
];

export default function DynamicContentCarousel2025() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === contentItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === contentItems.length - 1 ? 0 : prevIndex + 1
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex => 
      prevIndex === 0 ? contentItems.length - 1 : prevIndex - 1
    ));
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const currentItem = contentItems[currentIndex];

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full mb-6">
            <span className="text-purple-400 font-bold text-lg">🎯 FEATURED BREAKTHROUGHS</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Revolutionary Content Showcase
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the most advanced AI technologies and breakthrough implementations that are transforming industries worldwide.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Main Content Card */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 md:p-12 min-h-[400px] flex flex-col justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Content */}
              <div>
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-4">{currentItem.icon}</span>
                  <div>
                    <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-400 font-bold text-sm mb-2">
                      {currentItem.category}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      {currentItem.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  {currentItem.description}
                </p>

                <div className="flex items-center justify-between mb-8">
                  <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                    {currentItem.roi}
                  </div>
                  <Link 
                    href={currentItem.href}
                    className={`px-8 py-4 bg-gradient-to-r ${currentItem.gradient} hover:opacity-90 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105`}
                  >
                    Explore Now
                  </Link>
                </div>
              </div>

              {/* Visual Element */}
              <div className="flex justify-center">
                <div className={`w-64 h-64 bg-gradient-to-br ${currentItem.gradient} rounded-full flex items-center justify-center text-8xl opacity-20 animate-pulse`}>
                  {currentItem.icon}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-800/80 hover:bg-gray-700/80 border border-gray-600/50 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            aria-label="Previous content"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-800/80 hover:bg-gray-700/80 border border-gray-600/50 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            aria-label="Next content"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {contentItems.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-white scale-125' 
                    : 'bg-gray-600 hover:bg-gray-400'
                }`}
                aria-label={`Go to content ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Quick Access Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-300">Quick Access to All Content</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {contentItems.map((item, index) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => goToSlide(index)}
                className={`p-4 rounded-lg border transition-all duration-300 hover:scale-105 ${
                  index === currentIndex
                    ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-500/50'
                    : 'bg-gray-800/30 border-gray-600/30 hover:border-gray-500/50'
                }`}
              >
                <div className="text-center">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <div className="text-sm font-bold text-gray-300 mb-1">{item.category}</div>
                  <div className="text-xs text-gray-400">{item.roi}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
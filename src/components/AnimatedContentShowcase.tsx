"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ShowcaseItem {
  id: string;
  title: string;
  description: string;
  href: string;
  category: string;
  featured: boolean;
  gradient: string;
  icon: string;
  stats: {
    roi: string;
    accuracy: string;
    speed: string;
  };
}

export default function AnimatedContentShowcase() {
  const [currentIndexsetCurrentIndex] = useState(0);
  const [isAnimatingsetIsAnimating] = useState(false);

  const showcaseItems: ShowcaseItem[] = [
    {
      id: 'ai-2025-breakthrough',
      title: 'AI 2025 Ultimate Breakthrough Revolution',
      description: 'Experience the most revolutionary AI breakthrough in human history with quantum-AI fusion technology',
      href: '/ai-2025-ultimate-breakthrough-revolution',
      category: 'AI 2025',
      featured: true,
      gradient: 'from-red-500 to-pink-500',
      icon: '🚀',
      stats: {
        roi: '10,000%',
        accuracy: '99.9%',
        speed: '10,000x'
      }
    },
    {
      id: 'quantum-computing-2030',
      title: 'Quantum Computing Breakthroughs 2030',
      description: 'Revolutionary quantum technologies that will reshape reality itself with error-corrected quantum computers',
      href: '/quantum-computing-breakthroughs-2030',
      category: 'Quantum Computing',
      featured: true,
      gradient: 'from-cyan-500 to-purple-500',
      icon: '⚛️',
      stats: {
        roi: '∞',
        accuracy: '99.99%',
        speed: '∞'
      }
    },
    {
      id: 'ai-2026-automation',
      title: 'AI 2026 Advanced Automation Mastery',
      description: 'Master the future of automation with autonomous operations and intelligent process automation',
      href: '/ai-2026-advanced-automation-mastery',
      category: 'AI 2026',
      featured: true,
      gradient: 'from-blue-500 to-purple-500',
      icon: '🤖',
      stats: {
        roi: '5,000%',
        accuracy: '99.9%',
        speed: '1000x'
      }
    },
    {
      id: 'ai-2026-quantum-neural',
      title: 'AI 2026 Quantum-Neural Fusion',
      description: 'Revolutionary fusion of quantum computing and neural networks for transcendent intelligence',
      href: '/ai-2026-quantum-neural-fusion-revolutionary-breakthrough',
      category: 'AI 2026',
      featured: false,
      gradient: 'from-purple-500 to-pink-500',
      icon: '🧠',
      stats: {
        roi: '15,000%',
        accuracy: '99.7%',
        speed: '50,000x'
      }
    },
    {
      id: 'ai-2027-predictions',
      title: 'AI 2027 Future Predictions',
      description: 'Comprehensive predictions for the future of AI and technology with advanced forecasting models',
      href: '/ai-2027-future-predictions-revolutionary',
      category: 'AI 2027',
      featured: false,
      gradient: 'from-green-500 to-teal-500',
      icon: '🔮',
      stats: {
        roi: '8,000%',
        accuracy: '95%',
        speed: '500x'
      }
    },
    {
      id: 'ai-2028-breakthrough',
      title: 'AI 2028 Revolutionary Breakthroughs',
      description: 'Next-generation AI technologies and breakthrough innovations for the future',
      href: '/ai-2028-future-predictions-breakthrough',
      category: 'AI 2028',
      featured: false,
      gradient: 'from-orange-500 to-red-500',
      icon: '🌟',
      stats: {
        roi: '12,000%',
        accuracy: '98%',
        speed: '2000x'
      }
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % showcaseItems.length);
        setIsAnimating(false);
      }300);
    }5000);

    return () => clearInterval(interval);
  }[showcaseItems.length]);

  const currentItem = showcaseItems[currentIndex];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-sm font-semibold mb-6 animate-pulse">
            ⭐ FEATURED CONTENT
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Revolutionary Content
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Showcase
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the most revolutionary AI and technology content 'that', 's transforming the world.
          </p>
        </div>

        {/* Main Showcase */}
        <div className="relative">
          <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'}`}>
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Content Info */}
                <div className="p-8 lg:p-12">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className={`text-4xl p-3 rounded-xl bg-gradient-to-r ${currentItem.gradient} text-white`}>
                      {currentItem.icon}
                    </div>
                    <div>
                      <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm font-semibold rounded-full">
                        {currentItem.category}
                      </span>
                      {currentItem.featured && (
                        <span className="inline-block ml-2 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-sm font-bold rounded-full">
                          ⭐ Featured
                        </span>
                      )}
                    </div>
                  </div>

                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                    {currentItem.title}
                  </h3>

                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {currentItem.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200">
                      <div className="text-2xl font-bold text-green-600">{currentItem.stats.roi}</div>
                      <div className="text-sm text-green-700 font-semibold">ROI</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
                      <div className="text-2xl font-bold text-blue-600">{currentItem.stats.accuracy}</div>
                      <div className="text-sm text-blue-700 font-semibold">Accuracy</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-200">
                      <div className="text-2xl font-bold text-purple-600">{currentItem.stats.speed}</div>
                      <div className="text-sm text-purple-700 font-semibold">Speed</div>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href={currentItem.href}
                      className={`inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r ${currentItem.gradient} text-white font-bold text-lg rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
                    >
                      <span className="mr-2">🚀</span>
                      Explore Now
                    </Link>
                    <Link
                      href="/content-showcase"
                      className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-gray-300 text-gray-700 font-bold text-lg rounded-xl hover:bg-gray-50 transition-all duration-300"
                    >
                      <span className="mr-2">📚</span>
                      View All Content
                    </Link>
                  </div>
                </div>

                {/* Visual Element */}
                <div className={`bg-gradient-to-br ${currentItem.gradient} p-8 lg:p-12 flex items-center justify-center`}>
                  <div className="text-center text-white">
                    <div className="text-8xl mb-6 animate-bounce">
                      {currentItem.icon}
                    </div>
                    <div className="text-2xl font-bold mb-4">
                      {currentItem.category}
                    </div>
                    <div className="text-lg opacity-90">
                      Revolutionary Technology
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {showcaseItems.map((_index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAnimating(true);
                  setTimeout(() => {
                    setCurrentIndex(index);
                    setIsAnimating(false);
                  }300);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-yellow-400 w-8'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Additional Content Grid */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            More Revolutionary Content
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {showcaseItems.slice(3).map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="group block bg-white rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`text-3xl p-3 rounded-xl bg-gradient-to-r ${item.gradient} text-white`}>
                    {item.icon}
                  </div>
                  <div>
                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm font-semibold rounded-full">
                      {item.category}
                    </span>
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h4>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">
                    ROI: <span className="font-bold text-green-600">{item.stats.roi}</span>
                  </div>
                  <div className="text-blue-600 font-semibold group-hover:text-blue-800 transition-colors">
                    Explore →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
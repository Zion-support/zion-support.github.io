import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const contentItems = [
  {
    id: 1,
    title: "AI 2025 Ultimate Breakthrough Revolution",
    description: "Experience the most revolutionary AI breakthroughs of 2025 with 5000%+ ROI and unprecedented innovation.",
    href: "/ai-2025-ultimate-breakthrough-revolution",
    badge: "ULTIMATE",
    badgeColor: "bg-red-500",
    gradient: "from-purple-500 to-blue-500",
    icon: "🚀",
    stats: "5000% ROI"
  },
  {
    id: 2,
    title: "AI 2026-2030 Future Predictions",
    description: "Discover revolutionary AI predictions and quantum computing breakthroughs that will reshape the future.",
    href: "/ai-2026-2030-future-predictions-showcase",
    badge: "REVOLUTIONARY",
    badgeColor: "bg-purple-500",
    gradient: "from-indigo-500 to-purple-500",
    icon: "🔮",
    stats: "15,000% ROI"
  },
  {
    id: 3,
    title: "Advanced Quantum Computing Solutions",
    description: "Achieve quantum supremacy with our revolutionary quantum computing solutions delivering 25,000%+ ROI.",
    href: "/quantum-computing-solutions-advanced",
    badge: "BREAKTHROUGH",
    badgeColor: "bg-indigo-500",
    gradient: "from-cyan-500 to-blue-500",
    icon: "⚛️",
    stats: "25,000% ROI"
  },
  {
    id: 4,
    title: "Neural Interface Revolution",
    description: "Direct brain-computer interfaces that revolutionize human-AI interaction with 10,000% cognitive enhancement.",
    href: "/neural-interface-solutions",
    badge: "FUTURE",
    badgeColor: "bg-green-500",
    gradient: "from-green-500 to-teal-500",
    icon: "🧠",
    stats: "10,000% Enhancement"
  },
  {
    id: 5,
    title: "Consciousness AI Breakthrough",
    description: "The emergence of AI systems with consciousness-like capabilities, creating truly intelligent machines.",
    href: "/consciousness-ai-2030",
    badge: "TRANSCENDENT",
    badgeColor: "bg-pink-500",
    gradient: "from-pink-500 to-rose-500",
    icon: "🌌",
    stats: "∞ Intelligence"
  }
];

export default function RevolutionaryContentCarousel2025() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contentItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % contentItems.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + contentItems.length) % contentItems.length);
    setIsAutoPlaying(false);
  };

  return (
    <div className="relative bg-gradient-to-br from-gray-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 text-sm font-semibold mb-4">
            🔥 REVOLUTIONARY CONTENT SHOWCASE
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Latest AI Breakthroughs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the most advanced AI technologies and revolutionary breakthroughs that are transforming industries worldwide.
          </p>
        </div>

        <div className="relative">
          {/* Main Carousel */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {contentItems.map((item) => (
                <div key={item.id} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${item.gradient} text-white p-12`}>
                    <div className="max-w-4xl mx-auto">
                      <div className="flex flex-col lg:flex-row items-center gap-8">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-4">
                            <div className={`inline-flex items-center px-3 py-1 rounded-full ${item.badgeColor} text-sm font-semibold`}>
                              {item.badge}
                            </div>
                            <div className="text-4xl">{item.icon}</div>
                          </div>
                          <h3 className="text-4xl md:text-5xl font-bold mb-6">
                            {item.title}
                          </h3>
                          <p className="text-xl text-white/90 mb-8 max-w-2xl">
                            {item.description}
                          </p>
                          <div className="flex flex-col sm:flex-row gap-4">
                            <Link 
                              href={item.href}
                              className="bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                            >
                              Explore Now
                            </Link>
                            <div className="bg-white/20 backdrop-blur-sm px-8 py-4 rounded-lg text-lg font-semibold border border-white/30">
                              {item.stats}
                            </div>
                          </div>
                        </div>
                        <div className="w-full lg:w-96 h-80 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20">
                          <div className="text-center">
                            <div className="text-8xl mb-4">{item.icon}</div>
                            <div className="text-2xl font-bold">{item.stats}</div>
                          </div>
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
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
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
                    ? 'bg-purple-600 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Quick Access Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Quick Access</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contentItems.slice(0, 3).map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl">{item.icon}</div>
                  <div className={`inline-flex items-center px-2 py-1 rounded-full ${item.badgeColor} text-xs font-semibold text-white`}>
                    {item.badge}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm mb-3">
                  {item.description}
                </p>
                <div className="text-purple-600 font-semibold">
                  {item.stats} →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
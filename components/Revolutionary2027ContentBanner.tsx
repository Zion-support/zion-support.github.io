'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Revolutionary2027ContentBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredContent = [
    {
      title: 'AI 2027: Quantum Consciousness Fusion',
      description: 'Revolutionary breakthrough combining quantum computing with consciousness simulation, achieving 100,000x processing speed.',
      link: '/blog/ai-2027-quantum-consciousness-fusion',
      badge: 'QUANTUM BREAKTHROUGH',
      badgeColor: 'from-blue-500 to-purple-500',
      icon: '⚛️',
      stats: '100,000x Speed'
    },
    {
      title: 'AI 2027: Neuromorphic Quantum Breakthrough',
      description: 'Brain-inspired computing meets quantum physics, achieving 1,000,000x energy efficiency and human-level processing.',
      link: '/blog/ai-2027-neuromorphic-quantum-breakthrough',
      badge: 'NEUROMORPHIC REVOLUTION',
      badgeColor: 'from-green-500 to-teal-500',
      icon: '🧠',
      stats: '1Mx Efficiency'
    },
    {
      title: '$2.5B ROI Success: Quantum Neuromorphic AI',
      description: 'Fortune 100 company achieves unprecedented transformation with consciousness-driven AI, delivering $2.5B ROI in 18 months.',
      link: '/case-studies/ai-2027-quantum-neuromorphic-success-story',
      badge: 'MEGA SUCCESS',
      badgeColor: 'from-yellow-500 to-orange-500',
      icon: '🏆',
      stats: '$2.5B ROI'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const currentItem = featuredContent[currentSlide];

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white py-16 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-500 rounded-full filter blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold uppercase tracking-wide">Revolutionary 2027 Content</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Discover the Future of
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300">
              Quantum AI Consciousness
            </span>
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            Revolutionary breakthroughs in quantum consciousness fusion, neuromorphic computing, and consciousness-driven AI 
            that are transforming enterprise operations and delivering unprecedented ROI.
          </p>
        </div>

        {/* Main Featured Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Content Details */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center text-4xl">
                {currentItem.icon}
              </div>
              <div>
                <span className={`bg-gradient-to-r ${currentItem.badgeColor} text-white px-4 py-1.5 rounded-full text-sm font-bold inline-block mb-2`}>
                  {currentItem.badge}
                </span>
                <p className="text-sm opacity-75">{currentItem.stats}</p>
              </div>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold leading-tight">
              {currentItem.title}
            </h3>

            <p className="text-lg opacity-90 leading-relaxed">
              {currentItem.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={currentItem.link}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl text-center inline-flex items-center justify-center gap-2"
              >
                Read Full Story
                <span className="text-xl">→</span>
              </Link>
              <Link
                href="/blog"
                className="border-2 border-white/50 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300 text-center"
              >
                Explore All Content
              </Link>
            </div>
          </div>

          {/* Visual Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
                100,000x
              </div>
              <div className="text-lg font-semibold mb-1">Processing Speed</div>
              <div className="text-sm opacity-75">Quantum consciousness</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-teal-300">
                1,000,000x
              </div>
              <div className="text-lg font-semibold mb-1">Energy Efficiency</div>
              <div className="text-sm opacity-75">Neuromorphic quantum</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                $2.5B
              </div>
              <div className="text-lg font-semibold mb-1">ROI Achieved</div>
              <div className="text-sm opacity-75">Success story</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-red-300">
                99.9%
              </div>
              <div className="text-lg font-semibold mb-1">Consciousness Accuracy</div>
              <div className="text-sm opacity-75">AI awareness</div>
            </div>
          </div>
        </div>

        {/* Content Carousel Indicators */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + featuredContent.length) % featuredContent.length)}
            className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
          >
            ←
          </button>

          <div className="flex gap-3">
            {featuredContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentSlide
                    ? 'w-12 h-3 bg-white'
                    : 'w-3 h-3 bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % featuredContent.length)}
            className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
          >
            →
          </button>
        </div>

        {/* Quick Links */}
        <div className="grid md:grid-cols-3 gap-6">
          {featuredContent.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              onClick={() => setCurrentSlide(index)}
              className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 hover:bg-white/10 hover:scale-105 ${
                index === currentSlide ? 'border-white/50' : 'border-white/10'
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{item.icon}</span>
                <span className={`bg-gradient-to-r ${item.badgeColor} text-white px-3 py-1 rounded-full text-xs font-bold`}>
                  {item.badge}
                </span>
              </div>
              <h4 className="font-semibold text-lg mb-2 line-clamp-2">{item.title}</h4>
              <p className="text-sm opacity-75 line-clamp-2">{item.description}</p>
              <div className="mt-3 text-xs font-semibold text-yellow-300">{item.stats}</div>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg opacity-90 mb-6">
            Ready to transform your enterprise with revolutionary AI consciousness?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services/ai-quantum-consciousness"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore Quantum AI Services
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white/50 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300"
            >
              Discuss Your Implementation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
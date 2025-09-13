'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function RevolutionaryContentShowcase2025() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const contentItems = [
    {
      id: 1,
      title: "AI 2025 Ultimate Breakthrough Revolution",
      description: "The most revolutionary AI breakthrough of 2025 delivering 2,500-5,000% ROI with 99.9% accuracy and 10,000x faster processing.",
      link: "/ai-2025-ultimate-breakthrough-revolution",
      image: "🚀",
      category: "BREAKTHROUGH",
      color: "from-purple-600 to-blue-600",
      stats: "2,500-5,000% ROI"
    },
    {
      id: 2,
      title: "Global Transformation Success Story",
      description: "How a Fortune 500 company achieved 10,000% ROI in just 6 months using our revolutionary AI technology.",
      link: "/case-studies/ai-2025-global-transformation-breakthrough",
      image: "🏆",
      category: "SUCCESS STORY",
      color: "from-green-600 to-blue-600",
      stats: "10,000% ROI"
    },
    {
      id: 3,
      title: "AI 2025 ROI Calculator",
      description: "Calculate your potential return on investment with our interactive ROI calculator tool.",
      link: "/tools/ai-2025-roi-calculator",
      image: "🧮",
      category: "INTERACTIVE TOOL",
      color: "from-blue-600 to-purple-600",
      stats: "Calculate ROI"
    },
    {
      id: 4,
      title: "Synthetic Intelligence Revolution",
      description: "Discover how synthetic intelligence is revolutionizing AI capabilities and delivering unprecedented results.",
      link: "/ai-2025-synthetic-intelligence-revolution",
      image: "🧠",
      category: "REVOLUTIONARY",
      color: "from-indigo-600 to-purple-600",
      stats: "99.9% Accuracy"
    },
    {
      id: 5,
      title: "Quantum Computing Solutions 2025",
      description: "Explore the revolutionary quantum computing solutions that are transforming the AI landscape.",
      link: "/quantum-computing-solutions-2025",
      image: "⚛️",
      category: "BREAKTHROUGH",
      color: "from-cyan-600 to-blue-600",
      stats: "10,000x Faster"
    },
    {
      id: 6,
      title: "Ultimate Content Revolution",
      description: "Experience the ultimate content revolution powered by breakthrough AI technology.",
      link: "/ai-2025-ultimate-content-revolution",
      image: "🌟",
      category: "REVOLUTIONARY",
      color: "from-pink-600 to-rose-600",
      stats: "Ultimate Content"
    }
  ];

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % contentItems.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isHovered, contentItems.length]);

  const currentItem = contentItems[currentIndex];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 text-sm font-semibold mb-6">
            🚀 REVOLUTIONARY CONTENT SHOWCASE 2025
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Discover the Future of
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              {' '}AI Technology
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Explore our revolutionary AI 2025 breakthrough content, success stories, and interactive tools 
            that are transforming businesses worldwide.
          </p>
        </div>

        {/* Main Showcase */}
        <div className="relative mb-16">
          <div 
            className="bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className={`bg-gradient-to-r ${currentItem.color} p-8 text-white`}>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="text-6xl">{currentItem.image}</div>
                  <div>
                    <div className="text-sm font-semibold opacity-90 mb-1">{currentItem.category}</div>
                    <h3 className="text-3xl font-bold">{currentItem.title}</h3>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold">{currentItem.stats}</div>
                  <div className="text-sm opacity-90">Key Metric</div>
                </div>
              </div>
              
              <p className="text-lg opacity-90 mb-8 leading-relaxed">
                {currentItem.description}
              </p>
              
              <div className="flex items-center justify-between">
                <Link
                  href={currentItem.link}
                  className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Explore Now
                </Link>
                
                <div className="flex space-x-2">
                  {contentItems.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentIndex ? 'bg-white' : 'bg-white/40'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contentItems.map((item, index) => (
            <Link
              key={item.id}
              href={item.link}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="text-4xl">{item.image}</div>
                <div>
                  <div className="text-sm font-semibold text-gray-600 mb-1">{item.category}</div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                    {item.title}
                  </h3>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4 leading-relaxed">
                {item.description}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold text-purple-600">{item.stats}</div>
                <div className="text-purple-600 group-hover:text-purple-700 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Join the Revolution?</h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Don't miss out on the most revolutionary AI breakthrough of 2025. 
              Transform your business today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Start Your Transformation
              </Link>
              <Link
                href="/ai-2025-ultimate-breakthrough-revolution"
                className="bg-transparent text-white px-8 py-4 rounded-lg text-lg font-semibold border-2 border-white hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
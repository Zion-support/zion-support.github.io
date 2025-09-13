import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const AI2036ContentDiscoveryWidget = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const contentItems = [
    {
      title: "AI 2036 Breakthrough Showcase",
      description: "Experience consciousness transfer, quantum neural fusion, and autonomous evolution technologies",
      link: "/ai-2036-breakthrough-showcase",
      category: "Showcase",
      icon: "🚀",
      gradient: "from-purple-500 to-blue-500",
      stats: "99.97% Fidelity"
    },
    {
      title: "Revolutionary Breakthroughs Article",
      description: "Deep dive into the most advanced AI technologies reshaping reality in 2036",
      link: "/blog/ai-2036-revolutionary-breakthroughs",
      category: "Article",
      icon: "🧠",
      gradient: "from-blue-500 to-indigo-500",
      stats: "10^18 FLOPS"
    },
    {
      title: "Consciousness Transfer Technology",
      description: "Breakthrough technology enabling digital consciousness preservation and transfer",
      link: "/case-studies/ai-2036-consciousness-transfer-breakthrough",
      category: "Case Study",
      icon: "⚛️",
      gradient: "from-indigo-500 to-purple-500",
      stats: "50,000% ROI"
    },
    {
      title: "Quantum Neural Fusion",
      description: "Revolutionary fusion of quantum computing and neural networks for unprecedented processing power",
      link: "/case-studies/ai-2036-quantum-neural-fusion-breakthrough",
      category: "Technology",
      icon: "🤖",
      gradient: "from-purple-500 to-pink-500",
      stats: "99.9% Efficiency"
    },
    {
      title: "Autonomous Evolution Systems",
      description: "AI systems that evolve and improve themselves autonomously with 99.8% autonomy",
      link: "/case-studies/ai-2036-autonomous-evolution-breakthrough",
      category: "Innovation",
      icon: "⚡",
      gradient: "from-pink-500 to-red-500",
      stats: "25,000% ROI"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % contentItems.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [contentItems.length]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm">
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transform transition-all duration-500 ease-out">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-lg">🚀</span>
              </div>
              <div>
                <h3 className="font-bold text-sm">AI 2036 Content</h3>
                <p className="text-xs text-purple-200">Revolutionary Breakthroughs</p>
              </div>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="p-1 hover:bg-white/20 rounded-full transition-colors duration-200"
              aria-label="Close widget"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content Carousel */}
        <div className="relative h-48 overflow-hidden">
          {contentItems.map((item, index) => (
            <div
              key={index}
              className={`absolute inset-0 p-4 transition-all duration-500 ease-in-out ${
                index === currentIndex
                  ? 'opacity-100 translate-x-0'
                  : index < currentIndex
                  ? 'opacity-0 -translate-x-full'
                  : 'opacity-0 translate-x-full'
              }`}
            >
              <div className="h-full flex flex-col">
                {/* Category Badge */}
                <div className="flex items-center justify-between mb-2">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800">
                    {item.category}
                  </span>
                  <span className="text-xs font-bold text-gray-600">{item.stats}</span>
                </div>

                {/* Icon and Title */}
                <div className="flex items-start space-x-3 mb-3">
                  <div className={`w-10 h-10 bg-gradient-to-r ${item.gradient} rounded-lg flex items-center justify-center text-white text-lg`}>
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-gray-900 text-sm leading-tight mb-1">
                      {item.title}
                    </h4>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-gray-600 mb-4 flex-1">
                  {item.description}
                </p>

                {/* CTA Button */}
                <Link
                  href={item.link}
                  className={`inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r ${item.gradient} hover:opacity-90 text-white font-semibold text-xs rounded-lg transition-all duration-300 transform hover:scale-105`}
                >
                  Explore Now
                  <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex items-center justify-center space-x-2 p-3 bg-gray-50">
          {contentItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-purple-600 scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to content ${index + 1}`}
            />
          ))}
        </div>

        {/* Footer */}
        <div className="px-4 py-2 bg-gray-50 border-t border-gray-200">
          <Link
            href="/ai-2036-breakthrough-showcase"
            className="text-xs text-purple-600 hover:text-purple-700 font-medium transition-colors duration-200"
          >
            View All AI 2036 Content →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AI2036ContentDiscoveryWidget;
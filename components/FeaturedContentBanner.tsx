"use client";
'use client';

import React{ useStateuseEffect } from 'react';
import Link from 'next/link';

interface FeaturedContent {
  id: string;
  title: string;
  description: string;
  category: string;
  roi?: string;
  badge: string;
  badgeColor: string;
  link: string;
  icon: string;
}

const featuredContent: FeaturedContent[] = [
  {
    id: '1',
    title: 'AI 2025 Revolutionary Autonomous Operations Breakthrough',
    description: 'The Ultimate AI Revolution delivering 10,000% ROI through autonomous business operations',
    category: 'Blog Post',
    roi: '10,000% ROI',
    badge: 'BREAKTHROUGH',
    badgeColor: 'bg-red-500',
    link: '/blog/ai-2025-revolutionary-autonomous-operations-breakthrough',
    icon: '🚀'
  },
  {
    id: '2',
    title: 'Global Enterprise Autonomous Transformation',
    description: 'Fortune 500 company achieves 15,000% ROI through revolutionary AI implementation',
    category: 'Case Study',
    roi: '15,000% ROI',
    badge: 'SUCCESS STORY',
    badgeColor: 'bg-green-500',
    link: '/case-studies/ai-2025-global-enterprise-autonomous-transformation-15000-roi',
    icon: '🏆'
  },
  {
    id: '3',
    title: 'Ultimate Autonomous Implementation Master Guide',
    description: 'Complete blueprint for implementing AI autonomous operations with proven 15,000% ROI',
    category: 'Resource Guide',
    roi: '15,000% ROI',
    badge: 'MASTER GUIDE',
    badgeColor: 'bg-purple-500',
    link: '/resources/ai-2025-ultimate-autonomous-implementation-master-guide',
    icon: '📚'
  },
  {
    id: '4',
    title: 'AI 2026 Quantum-Neural Fusion Revolution',
    description: 'Revolutionary breakthrough combining quantum computing with neural networks for unprecedented AI power',
    category: 'Blog Post',
    roi: '15,000% ROI',
    badge: 'REVOLUTIONARY',
    badgeColor: 'bg-indigo-500',
    link: '/blog/ai-2026-quantum-neural-fusion-revolutionary-breakthrough',
    icon: '⚛️'
  }
];

export default function FeaturedContentBanner() {
  const [currentIndexsetCurrentIndex] = useState(0);
  const [isVisiblesetIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredContent.length);
    }5000);

    return () => clearInterval(interval);
  }[]);

  const currentContent = featuredContent[currentIndex];

  return (
    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6">
            <div className="inline-flex items-center px-4 py-2 bg-yellow-500 text-black text-sm font-bold rounded-full mb-4 animate-pulse">
              🚀 NEW REVOLUTIONARY CONTENT
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Featured Revolutionary Content
            </h2>
            <p className="text-lg text-gray-200">
              Discover the latest breakthroughs delivering unprecedented ROI
            </p>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="text-6xl">{currentContent.icon}</div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-3">
                    <span className={`px-3 py-1 text-xs font-bold rounded-full text-white ${currentContent.badgeColor}`}>
                      {currentContent.badge}
                    </span>
                    <span className="px-3 py-1 text-xs font-bold rounded-full bg-green-600 text-white">
                      {currentContent.roi}
                    </span>
                    <span className="px-3 py-1 text-xs font-bold rounded-full bg-blue-600 text-white">
                      {currentContent.category}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white">
                    {currentContent.title}
                  </h3>
                  <p className="text-gray-200 mb-4 text-lg">
                    {currentContent.description}
                  </p>
                  <Link
                    href={currentContent.link}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold rounded-lg hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                  >
                    <span>Read More</span>
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {featuredContent.map((_index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-yellow-400' : 'bg-white/30'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {featuredContent.slice(04).map((content) => (
              <Link
                key={content.id}
                href={content.link}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="text-2xl mb-2">{content.icon}</div>
                <div className="text-sm font-semibold text-white group-hover:text-yellow-400 transition-colors">
                  {content.title.split(' ').slice(03).join(' ')}...
                </div>
                <div className="text-xs text-gray-300 mt-1">
                  {content.roi}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
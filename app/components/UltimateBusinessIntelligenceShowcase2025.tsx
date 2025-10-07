import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const UltimateBusinessIntelligenceShowcase2025 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const content = [
    {
      id: 'business-intelligence-showcase',
      title: 'AI 2025: Ultimate Business Intelligence Showcase',
      description: 'Discover how leading enterprises are transforming their operations with cutting-edge AI-powered business intelligence solutions.',
      url: '/showcase/ai-2025-ultimate-business-intelligence-showcase',
      type: 'Showcase',
      metrics: {
        efficiency: '400%',
        accuracy: '99.9%',
        timeline: '6 months',
        adoption: '100%'
      },
      readingTime: '30 min read',
      featured: true
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % content.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [content.length]);

  const currentContent = content[currentSlide];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-2xl">🎯</span>
            <span className="text-yellow-400 font-bold text-xl">
              ULTIMATE BUSINESS INTELLIGENCE SHOWCASE!
            </span>
            <span className="text-2xl">⚡</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            September 30, 2025 — Revolutionary AI Showcase
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Business Intelligence • AI Analytics • Data Transformation — See the future in action
          </p>
        </div>

        {/* Content Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                {currentContent.title}
              </h3>
              <p className="text-gray-300 mb-6 text-lg">
                {currentContent.description}
              </p>
              
              <div className="flex justify-center gap-4 mb-6">
                <Link
                  href={currentContent.url}
                  className="bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors"
                >
                  View Showcase
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateBusinessIntelligenceShowcase2025;

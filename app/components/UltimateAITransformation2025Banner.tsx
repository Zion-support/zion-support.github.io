'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ArrowRight, Star, TrendingUp, Users, Zap } from 'lucide-react';

const UltimateAITransformation2025Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  const featuredContent = [
    {
      id: 'ultimate-business-transformation',
      title: 'AI 2025: The Ultimate Business Transformation Revolution',
      type: 'blog',
      url: '/blog/ai-2025-ultimate-business-transformation-revolution',
      description: 'Complete guide to achieving 500%+ ROI with AI transformation',
      metrics: {
        roi: '500%+',
        savings: '$2.8B',
        efficiency: '78%',
        satisfaction: '98%'
      },
      badge: 'NEW',
      readingTime: '15 min read'
    },
    {
      id: '1000-percent-roi-success',
      title: 'AI Transformation: 1,000% ROI Success Story',
      type: 'case-study',
      url: '/case-studies/ai-transformation-1000-percent-roi-success-story',
      description: 'How a $2.8B company achieved unprecedented returns',
      metrics: {
        roi: '1,000%',
        savings: '$280M',
        timeline: '18 months',
        revenue: '$1.2B'
      },
      badge: 'FEATURED',
      readingTime: '12 min read'
    },
    {
      id: 'implementation-master-guide',
      title: 'AI 2025 Implementation Master Guide',
      type: 'resource',
      url: '/resources/ai-2025-implementation-master-guide-ultimate-success',
      description: 'Complete roadmap to AI transformation success',
      metrics: {
        success: '94%',
        roi: '340%',
        timeline: '18 months',
        projects: '500+'
      },
      badge: 'ULTIMATE',
      readingTime: '25 min read'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const dismissed = localStorage.getItem('ultimate-ai-transformation-2025-dismissed');
    if (dismissed === 'true') {
      setIsDismissed(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    localStorage.setItem('ultimate-ai-transformation-2025-dismissed', 'true');
  };

  if (isDismissed) return null;

  const currentContent = featuredContent[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-blue-500/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-20 h-20 bg-indigo-500/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-purple-500/10 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold flex items-center">
                <Star className="w-4 h-4 mr-1" />
                ULTIMATE AI 2025
              </div>
              <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                NEW CONTENT
              </div>
            </div>
            <button
              onClick={handleDismiss}
              className="text-white/70 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Content showcase */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                  Revolutionary AI Content Collection 2025
                </h2>
                <p className="text-xl text-white/90 leading-relaxed">
                  Discover the ultimate guides, success stories, and implementation frameworks 
                  that are helping enterprises achieve 500%+ ROI with AI transformation.
                </p>
              </div>

              {/* Featured content card */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-2 py-1 rounded text-xs font-bold">
                      {currentContent.badge}
                    </span>
                    <span className="text-white/70 text-sm uppercase tracking-wide">
                      {currentContent.type}
                    </span>
                  </div>
                  <span className="text-white/70 text-sm">
                    {currentContent.readingTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3 text-white">
                  {currentContent.title}
                </h3>
                <p className="text-white/90 mb-4 leading-relaxed">
                  {currentContent.description}
                </p>

                {/* Metrics grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {Object.entries(currentContent.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-2xl font-bold text-yellow-400">
                        {value}
                      </div>
                      <div className="text-white/70 text-sm capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  href={currentContent.url}
                  className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all duration-200 transform hover:scale-105"
                >
                  Read Full Article
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>

              {/* Slide indicators */}
              <div className="flex space-x-2">
                {featuredContent.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentSlide
                        ? 'bg-yellow-400 scale-125'
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Statistics and CTA */}
            <div className="space-y-8">
              {/* Success statistics */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">500%+</div>
                  <div className="text-white/90 text-sm">Average ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">94%</div>
                  <div className="text-white/90 text-sm">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">$2.8B</div>
                  <div className="text-white/90 text-sm">Average Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">18</div>
                  <div className="text-white/90 text-sm">Months to ROI</div>
                </div>
              </div>

              {/* Call to action */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-center">
                  Ready to Transform Your Business?
                </h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/tools/ai-readiness-assessment"
                    className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-4 rounded-lg font-semibold text-center hover:from-green-600 hover:to-emerald-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center"
                  >
                    <Zap className="w-5 h-5 mr-2" />
                    Start AI Assessment
                  </Link>
                  <Link
                    href="/contact"
                    className="flex-1 bg-white/10 backdrop-blur-sm text-white px-6 py-4 rounded-lg font-semibold text-center hover:bg-white/20 transition-all duration-200 border border-white/20 flex items-center justify-center"
                  >
                    <Users className="w-5 h-5 mr-2" />
                    Get Expert Consultation
                  </Link>
                </div>
              </div>

              {/* Additional resources */}
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <h4 className="font-semibold mb-3 text-white">Explore More Resources</h4>
                <div className="space-y-2 text-sm">
                  <Link href="/case-studies" className="block text-white/90 hover:text-white transition-colors">
                    → View All Success Stories
                  </Link>
                  <Link href="/resources" className="block text-white/90 hover:text-white transition-colors">
                    → Download Implementation Guides
                  </Link>
                  <Link href="/tools" className="block text-white/90 hover:text-white transition-colors">
                    → Try AI Assessment Tools
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateAITransformation2025Banner;
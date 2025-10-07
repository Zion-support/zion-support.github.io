'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const NewestContent2025Banner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`relative overflow-hidden bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10"></div>
        <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-400/30 mb-6">
              <span className="text-2xl">✨</span>
              <span className="text-blue-300 font-bold text-sm uppercase tracking-wider">
                Newest Content 2025
              </span>
              <span className="text-2xl">🚀</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Discover the Latest
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mt-2">
                AI Innovation Content
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Stay ahead with our cutting-edge AI solutions, case studies, and implementation guides. 
              Fresh content updated weekly with the latest breakthroughs in artificial intelligence.
            </p>
          </div>

          {/* Content Preview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-gradient-to-r from-blue-500/30 to-purple-500/30 text-blue-200 text-xs font-bold rounded-full border border-blue-400/50">
                  New Article
                </span>
                <span className="text-gray-400 text-sm">⏱️ 15 min read</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                AI 2025: Next-Generation Enterprise Automation
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                Explore how advanced AI is revolutionizing enterprise operations with unprecedented efficiency gains.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-full border border-white/20">AI</span>
                <span className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-full border border-white/20">Automation</span>
                <span className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-full border border-white/20">Enterprise</span>
              </div>
              <Link
                href="/blog/ai-2025-next-generation-enterprise-automation"
                className="block w-full text-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
              >
                Read Article
              </Link>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-gradient-to-r from-green-500/30 to-emerald-500/30 text-green-200 text-xs font-bold rounded-full border border-green-400/50">
                  Case Study
                </span>
                <span className="text-gray-400 text-sm">⏱️ 20 min read</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                Fortune 500 AI Transformation Success
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                How a major corporation achieved 300% ROI with our AI-powered business intelligence platform.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-full border border-white/20">Case Study</span>
                <span className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-full border border-white/20">ROI</span>
                <span className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-full border border-white/20">Success</span>
              </div>
              <Link
                href="/case-studies/fortune-500-ai-transformation-success"
                className="block w-full text-center px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-medium rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300"
              >
                Read Case Study
              </Link>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-gradient-to-r from-purple-500/30 to-pink-500/30 text-purple-200 text-xs font-bold rounded-full border border-purple-400/50">
                  Guide
                </span>
                <span className="text-gray-400 text-sm">⏱️ 30 min read</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                Complete AI Implementation Roadmap
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                Step-by-step guide to implementing AI solutions in your organization with best practices.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-full border border-white/20">Guide</span>
                <span className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-full border border-white/20">Implementation</span>
                <span className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-full border border-white/20">Roadmap</span>
              </div>
              <Link
                href="/guides/complete-ai-implementation-roadmap"
                className="block w-full text-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
              >
                Read Guide
              </Link>
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-lg rounded-2xl p-8 border border-blue-400/30">
              <h3 className="text-2xl font-bold text-white mb-4">
                Stay Updated with the Latest AI Content
              </h3>
              <p className="text-gray-300 mb-6">
                Get exclusive access to our newest articles, case studies, and implementation guides delivered weekly.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/blog"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Explore All Content
                </Link>
                <a
                  href="tel:+13024640950"
                  className="px-8 py-4 border-2 border-white/30 text-white font-bold rounded-xl hover:border-white/60 hover:bg-white/10 transition-all duration-300"
                >
                  Call +1 302 464 0950
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewestContent2025Banner;
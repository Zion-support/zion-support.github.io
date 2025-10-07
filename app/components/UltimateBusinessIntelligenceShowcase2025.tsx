'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const UltimateBusinessIntelligenceShowcase2025 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const content = [
    {
      id: 'ultimate-business-intelligence-revolution',
      title: 'AI 2025: The Ultimate Business Intelligence Revolution',
      description: 'Transform your enterprise with next-generation AI-powered business intelligence that delivers unprecedented insights and competitive advantage.',
      url: '/blog/ai-2025-ultimate-business-intelligence-revolution-ultimate-breakthrough',
      type: 'Blog Post',
      category: 'blog',
      metrics: {
        roi: '30,000%',
        savings: '$750B+',
        accuracy: '99.99%',
        speed: '5,000% faster'
      },
      readingTime: '35 min read',
      featured: true,
      tags: ['AI Revolution', 'Business Intelligence', 'ROI', 'Fortune 500', '30,000% ROI']
    },
    {
      id: 'fortune-500-business-intelligence-success',
      title: 'Fortune 500 Ultimate Business Intelligence Success: $750B Annual Savings - 30,000% ROI Success Story',
      description: 'How a $15.2B manufacturing giant achieved unprecedented business intelligence transformation with AI-powered analytics and decision-making systems.',
      url: '/case-studies/fortune-500-ultimate-business-intelligence-30000-roi-success-story',
      type: 'Case Study',
      category: 'case-study',
      metrics: {
        roi: '30,000%',
        savings: '$750B',
        company: '$15.2B',
        timeline: '18 months'
      },
      readingTime: '25 min read',
      featured: true,
      tags: ['Fortune 500', 'Success Story', '30,000% ROI', 'Manufacturing', 'Case Study']
    },
    {
      id: 'business-intelligence-implementation-guide',
      title: 'AI 2025 Ultimate Business Intelligence Implementation Guide: Complete Roadmap to 30,000% ROI',
      description: 'The definitive guide to implementing revolutionary AI-powered business intelligence that delivers unprecedented competitive advantage and financial returns.',
      url: '/resources/ai-2025-ultimate-business-intelligence-implementation-guide',
      type: 'Implementation Guide',
      category: 'resource',
      metrics: {
        roi: '30,000%',
        success: '99.8%',
        timeline: '18 months',
        adoption: '100%'
      },
      readingTime: '45 min read',
      featured: true,
      tags: ['Implementation', 'Guide', '30,000% ROI', 'Roadmap', 'Best Practices']
    }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-2xl">🚀</span>
            <span className="text-cyan-400 font-bold text-xl">
              ULTIMATE BUSINESS INTELLIGENCE SHOWCASE 2025
            </span>
            <span className="text-2xl">⚡</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Revolutionary AI Content
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              That Transforms Enterprises
            </span>
          </h2>

          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Explore our comprehensive collection of AI-powered business intelligence content, 
            featuring real-world case studies, implementation guides, and breakthrough research.
          </p>
        </div>


        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className="absolute top-4 right-4">
                <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {item.type}
                </span>
              </div>

              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">🧠</span>
                  <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wide">
                    {item.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {Object.entries(item.metrics).slice(0, 4).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-lg font-bold text-cyan-400">
                        {value}
                      </div>
                      <div className="text-gray-400 text-xs capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="bg-white/10 text-gray-300 px-2 py-1 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <span>⏱️ {item.readingTime}</span>
                </div>
                <Link
                  href={item.url}
                  className="text-cyan-400 hover:text-cyan-300 font-semibold text-sm transition-colors"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business Intelligence?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get personalized recommendations and expert guidance on implementing 
              AI-powered business intelligence solutions for your enterprise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-bold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                Get Expert Consultation
              </Link>
              <Link
                href="/blog"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Explore All Content
              </Link>
            </div>
          </div>
        </div>
=======
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            {currentContent.title}
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            {currentContent.description}
          </p>
        </div>

        {/* Main Content Card */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
            {/* Content Type Badge */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 text-cyan-200 text-sm font-bold rounded-full border border-cyan-400/50">
                  {currentContent.type}
                </span>
                <span className="text-gray-300 text-sm">⏱️ {currentContent.readingTime}</span>
              </div>
            </div>

            {/* Live Demo Section */}
            <div className="relative">
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-2xl p-8 border border-cyan-400/30">
                <div className="text-center">
                  <div className="text-6xl mb-4">🚀</div>
                  <h4 className="text-2xl font-bold text-white mb-4">Live Demo</h4>
                  <p className="text-gray-300 mb-6">See our platform in action with real-time data processing and AI insights.</p>
                  <div className="bg-black/50 rounded-lg p-4 font-mono text-sm text-green-400">
                    <div>Processing: 1,247,892 events/sec</div>
                    <div>Accuracy: 99.9%</div>
                    <div>Response Time: 47ms</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
                <div className="text-sm text-gray-300">Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">47ms</div>
                <div className="text-sm text-gray-300">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">1.2M</div>
                <div className="text-sm text-gray-300">Events/sec</div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {currentContent.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-white/10 text-gray-300 text-sm rounded-full border border-white/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href={currentContent.url}
                className="flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/25"
              >
                <span className="text-xl">📖</span>
                <span>Read {currentContent.type}</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <a
                href="tel:+13024640950"
                className="flex items-center gap-3 border-2 border-white/30 hover:border-white/60 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:bg-white/10"
              >
                <span className="text-xl">📞</span>
                <span>Call +1 302 464 0950</span>
              </a>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {content.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-cyan-400' : 'bg-white/30'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '500+', label: 'Enterprise Clients' },
            { value: '30,000%', label: 'Average ROI' },
            { value: '99.9%', label: 'Success Rate' },
            { value: '5M+', label: 'Data Points Processed' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
>>>>>>> origin/main
      </div>
    </section>
  );
};

export default UltimateBusinessIntelligenceShowcase2025;
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const UltimateBusinessIntelligenceShowcase2025 = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
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
        efficiency: '500%',
        accuracy: '99.9%',
        timeline: '12 months'
      },
      readingTime: '35 min read',
      featured: true,
      tags: ['AI Revolution', 'Business Intelligence', 'ROI', 'Fortune 500', '30,000% ROI']
    },
    {
      id: 'fortune-500-business-intelligence-success',
      title: 'Fortune 500 Ultimate Business Intelligence Success',
      description: 'How a $15.2B manufacturing giant achieved unprecedented business intelligence transformation with AI-powered analytics.',
      url: '/case-studies/fortune-500-ultimate-business-intelligence-success',
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
      title: 'AI 2025 Ultimate Business Intelligence Implementation Guide',
      description: 'Complete roadmap to 30,000% ROI through revolutionary AI-powered business intelligence transformation.',
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

  const categories = [
    { id: 'all', name: 'All Content' },
    { id: 'blog', name: 'Blog Posts' },
    { id: 'case-study', name: 'Case Studies' },
    { id: 'resource', name: 'Resources' }
  ];

  const filteredContent = selectedCategory === 'all' 
    ? content 
    : content.filter(item => item.category === selectedCategory);

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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-2xl">🚀</span>
            <span className="text-yellow-400 font-bold text-lg">
              ULTIMATE BUSINESS INTELLIGENCE 2025
            </span>
            <span className="text-2xl">⚡</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Revolutionary Content
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Showcase 2025
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Explore our comprehensive collection of AI-powered business intelligence
            content that&apos;s transforming enterprises worldwide
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Main Content Card */}
        <div className="max-w-6xl mx-auto mb-16">
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

            {/* Title and Description */}
            <h2 className="text-3xl font-bold text-white mb-4">{currentContent.title}</h2>
            <p className="text-gray-300 mb-8">{currentContent.description}</p>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {Object.entries(currentContent.metrics).map(([key, value]) => (
                <div key={key} className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{value}</div>
                  <div className="text-sm text-gray-300 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                </div>
              ))}
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

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
            >
              {/* Badge */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-semibold text-sm">
                  {item.featured ? 'FEATURED' : 'NEW'}
                </span>
                <span className="text-gray-400 text-sm">{item.type}</span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                {item.description}
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">
                    {item.metrics.roi}
                  </div>
                  <div className="text-gray-400 text-xs">ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">
                    {item.metrics.timeline}
                  </div>
                  <div className="text-gray-400 text-xs">Timeline</div>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {item.tags.slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white/10 text-gray-300 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <Link
                href={item.url}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 w-full justify-center"
              >
                Read {item.readingTime}
                <span className="text-lg">→</span>
              </Link>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-cyan-100 mb-6">
              Join thousands of enterprises already using our AI-powered solutions
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateBusinessIntelligenceShowcase2025;

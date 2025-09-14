'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const InteractiveContentDiscoveryWidget = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedROI, setSelectedROI] = useState('all');
  const [filteredContent, setFilteredContent] = useState([]);
  const [isVisible, setIsVisible] = useState(true);

  const contentData = [
    {
      id: 'ai-2025-2026-ultimate-innovation-showcase-revolution',
      title: 'AI 2025-2026: The Ultimate Innovation Showcase Revolution',
      type: 'blog',
      category: 'ai-innovation',
      roi: '4,200%',
      savings: '$15.8B+',
      efficiency: '1,800%',
      accuracy: '99.97%',
      readingTime: '35 min read',
      url: '/blog/ai-2025-2026-ultimate-innovation-showcase-revolution',
      description: 'Next-generation intelligence systems delivering extraordinary business value',
      tags: ['AI Innovation', '2025-2026', 'ROI', 'Fortune 500', 'Revolution'],
      featured: true
    },
    {
      id: 'fortune-500-ai-innovation-showcase-4200-roi-success-story',
      title: 'Fortune 500 AI Innovation: $15.8B Annual Savings - 4,200% ROI Success',
      type: 'case-study',
      category: 'case-studies',
      roi: '4,200%',
      savings: '$15.8B',
      efficiency: '99.7%',
      accuracy: '99.7%',
      readingTime: '22 min read',
      url: '/case-studies/fortune-500-ai-innovation-showcase-4200-roi-success-story',
      description: 'Manufacturing giant achieves unprecedented AI transformation success',
      tags: ['Fortune 500', 'AI Innovation', '4,200% ROI', 'Success Story', 'Manufacturing'],
      featured: true
    },
    {
      id: 'ai-innovation-implementation-ultimate-guide-2025-2026',
      title: 'AI Innovation Implementation Ultimate Guide 2025-2026',
      type: 'resource',
      category: 'implementation',
      roi: '4,200%',
      savings: '$15.8B+',
      efficiency: '1,800%',
      accuracy: '99.7%',
      readingTime: '45 min read',
      url: '/resources/ai-innovation-implementation-ultimate-guide-2025-2026',
      description: 'Complete roadmap to 4,200% ROI through cutting-edge AI innovation',
      tags: ['Implementation Guide', 'AI Innovation', 'ROI', 'Strategy', 'Framework'],
      featured: true
    },
    {
      id: 'ai-2025-enterprise-automation-mastery-ultimate-success-guide',
      title: 'AI 2025: Enterprise Automation Mastery - Ultimate Success Guide',
      type: 'blog',
      category: 'automation',
      roi: '500%+',
      savings: '$2.8B+',
      efficiency: '78%',
      accuracy: '98%',
      readingTime: '18 min read',
      url: '/blog/ai-2025-enterprise-automation-mastery-ultimate-success-guide',
      description: 'Comprehensive guide to achieving enterprise automation mastery',
      tags: ['AI Automation', 'Enterprise', 'ROI', 'Implementation', 'Success Guide'],
      featured: false
    },
    {
      id: 'ai-transformation-fortune-100-ultimate-success-story',
      title: 'Fortune 100 AI Transformation: $5.2B Company Achieves 1,200% ROI',
      type: 'case-study',
      category: 'case-studies',
      roi: '1,200%',
      savings: '$2.8B',
      efficiency: '95%',
      accuracy: '98%',
      readingTime: '12 min read',
      url: '/case-studies/ai-transformation-fortune-100-ultimate-success-story',
      description: 'Fortune 100 company achieves remarkable AI transformation success',
      tags: ['Fortune 100', 'AI Transformation', 'ROI', 'Case Study', 'Success Story'],
      featured: false
    },
    {
      id: 'ai-implementation-ultimate-success-framework-2025',
      title: 'AI Implementation Ultimate Success Framework 2025',
      type: 'resource',
      category: 'implementation',
      roi: '1,000%+',
      savings: '$2.8B+',
      efficiency: '95%',
      accuracy: '94%',
      readingTime: '25 min read',
      url: '/resources/ai-implementation-ultimate-success-framework-2025',
      description: 'Complete framework for AI implementation success',
      tags: ['AI Implementation', 'Framework', 'ROI', 'Success Strategy', 'Enterprise AI'],
      featured: false
    }
  ];

  const categories = [
    { id: 'all', label: 'All Content', count: contentData.length },
    { id: 'ai-innovation', label: 'AI Innovation', count: contentData.filter(c => c.category === 'ai-innovation').length },
    { id: 'automation', label: 'Automation', count: contentData.filter(c => c.category === 'automation').length },
    { id: 'case-studies', label: 'Case Studies', count: contentData.filter(c => c.category === 'case-studies').length },
    { id: 'implementation', label: 'Implementation', count: contentData.filter(c => c.category === 'implementation').length }
  ];

  const roiRanges = [
    { id: 'all', label: 'All ROI Levels' },
    { id: 'high', label: '1,000%+ ROI', min: 1000 },
    { id: 'medium', label: '500-999% ROI', min: 500, max: 999 },
    { id: 'low', label: '100-499% ROI', min: 100, max: 499 }
  ];

  useEffect(() => {
    let filtered = contentData;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(content =>
        content.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        content.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        content.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(content => content.category === selectedCategory);
    }

    // Filter by ROI range
    if (selectedROI !== 'all') {
      const roiRange = roiRanges.find(range => range.id === selectedROI);
      if (roiRange) {
        filtered = filtered.filter(content => {
          const roiValue = parseInt(content.roi.replace(/[%,]/g, ''));
          if (roiRange.min && roiRange.max) {
            return roiValue >= roiRange.min && roiValue <= roiRange.max;
          } else if (roiRange.min) {
            return roiValue >= roiRange.min;
          }
          return true;
        });
      }
    }

    setFilteredContent(filtered);
  }, [searchTerm, selectedCategory, selectedROI]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('interactive-content-discovery-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('interactive-content-discovery-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="bg-white/20 rounded-full p-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold">🔍 Interactive Content Discovery</h2>
            <button
              onClick={handleDismiss}
              className="text-white/80 hover:text-white transition-colors ml-4"
              aria-label="Dismiss widget"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Discover the perfect AI content for your business needs. Filter by category, ROI level, and search for specific topics.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Search */}
            <div>
              <label className="block text-sm font-semibold mb-2">Search Content</label>
              <div className="relative">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search by title, description, or tags..."
                  className="w-full px-4 py-3 pl-10 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <svg className="absolute left-3 top-3.5 w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-sm font-semibold mb-2">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id} className="bg-gray-800 text-white">
                    {category.label} ({category.count})
                  </option>
                ))}
              </select>
            </div>

            {/* ROI Filter */}
            <div>
              <label className="block text-sm font-semibold mb-2">ROI Level</label>
              <select
                value={selectedROI}
                onChange={(e) => setSelectedROI(e.target.value)}
                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                {roiRanges.map((range) => (
                  <option key={range.id} value={range.id} className="bg-gray-800 text-white">
                    {range.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold">
              {filteredContent.length} Content {filteredContent.length === 1 ? 'Piece' : 'Pieces'} Found
            </h3>
            <div className="text-white/80">
              Showing results for: {selectedCategory === 'all' ? 'All Categories' : categories.find(c => c.id === selectedCategory)?.label}
            </div>
          </div>

          {filteredContent.length === 0 ? (
            <div className="text-center py-12">
              <div className="bg-white/10 rounded-2xl p-8 border border-white/20">
                <svg className="w-16 h-16 text-white/60 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.709M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h4 className="text-xl font-semibold mb-2">No content found</h4>
                <p className="text-white/80">Try adjusting your search terms or filters to find relevant content.</p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredContent.map((content) => (
                <div
                  key={content.id}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 ${
                    content.featured ? 'ring-2 ring-yellow-400' : ''
                  }`}
                >
                  {content.featured && (
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-semibold">
                        ⭐ Featured
                      </span>
                      <span className="bg-white/20 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        {content.type.toUpperCase()}
                      </span>
                    </div>
                  )}

                  <h4 className="text-lg font-bold mb-3 line-clamp-2">
                    {content.title}
                  </h4>

                  <p className="text-white/90 text-sm mb-4 line-clamp-3">
                    {content.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-green-500/20 rounded-lg p-3 text-center">
                      <div className="text-lg font-bold text-green-300">{content.roi}</div>
                      <div className="text-xs text-white/80">ROI</div>
                    </div>
                    <div className="bg-blue-500/20 rounded-lg p-3 text-center">
                      <div className="text-lg font-bold text-blue-300">{content.savings}</div>
                      <div className="text-xs text-white/80">Savings</div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {content.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="bg-white/20 text-white px-2 py-1 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                    {content.tags.length > 3 && (
                      <span className="text-white/60 text-xs">+{content.tags.length - 3} more</span>
                    )}
                  </div>

                  {/* CTA */}
                  <Link
                    href={content.url}
                    className="w-full inline-flex items-center justify-center bg-white text-purple-900 px-4 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Read Full Story
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-4">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-white/90 mb-6">
              Our AI experts can help you discover the perfect content and strategies for your specific business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Personalized Recommendations
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveContentDiscoveryWidget;
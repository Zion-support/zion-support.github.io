'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const UltimateContentShowcase2025 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const featuredContent = [
    {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/create-and-deploy-new-content-18b4
      id: 'enterprise-ai-revolution',
      title: 'AI 2025: The Enterprise AI Revolution - Ultimate Breakthrough Guide to 1,000% ROI',
      type: 'blog',
      url: '/blog/ai-2025-enterprise-ai-revolution-ultimate-breakthrough',
      description: 'Discover how Fortune 500 companies are achieving unprecedented 1,000% ROI through revolutionary AI implementations.',
      metrics: {
        roi: '1,000%',
        savings: '$15.7T',
        accuracy: '99.7%',
        satisfaction: '98%'
      },
      tags: ['AI Revolution', 'Enterprise AI', 'ROI', 'Fortune 500'],
      readingTime: '22 min read',
      isNew: true
    },
    {
      id: 'customer-experience-revolution',
      title: 'AI 2025: The Customer Experience Revolution - Ultimate Guide to 750% ROI',
      type: 'blog',
      url: '/blog/ai-2025-customer-experience-revolution-ultimate-guide',
      description: 'Transform your customer experience with AI-powered solutions that deliver 750% ROI and 340% higher satisfaction.',
      metrics: {
        roi: '750%',
        savings: '$2.8T',
        accuracy: '99.8%',
        satisfaction: '98%'
      },
      tags: ['Customer Experience', 'AI', 'ROI', 'Personalization'],
      readingTime: '20 min read',
      isNew: true
    },
    {
      id: 'manufacturing-transformation',
      title: 'AI 2025 Manufacturing Transformation: $4.2B Company Achieves 1,100% ROI',
      type: 'case-study',
      url: '/case-studies/ai-2025-manufacturing-transformation-ultimate-success-story',
      description: 'Discover how a global manufacturing leader achieved 1,100% ROI through comprehensive AI transformation.',
      metrics: {
        roi: '1,100%',
        savings: '$890M',
        accuracy: '99.8%',
        satisfaction: '99.8%'
      },
      tags: ['Manufacturing', 'AI Transformation', 'ROI', 'Case Study'],
      readingTime: '18 min read',
      isNew: true
    },
    {
      id: 'supply-chain-revolution',
      title: 'AI 2025: The Supply Chain Revolution - Ultimate Guide to 900% ROI',
      type: 'blog',
      url: '/blog/ai-2025-supply-chain-revolution-ultimate-guide',
      description: 'Transform your supply chain with AI-powered solutions that deliver 900% ROI and 340% improvement in efficiency.',
      metrics: {
        roi: '900%',
        savings: '$8.9T',
        accuracy: '94%',
        satisfaction: '156%'
      },
      tags: ['Supply Chain', 'AI', 'ROI', 'Logistics'],
      readingTime: '19 min read',
      isNew: true
    },
    {
      id: 'financial-services-transformation',
      title: 'AI 2025 Financial Services Transformation: $2.1B Bank Achieves 1,300% ROI',
      type: 'case-study',
      url: '/case-studies/ai-2025-financial-services-transformation-ultimate-success',
      description: 'Discover how a major financial institution achieved 1,300% ROI through comprehensive AI transformation.',
      metrics: {
        roi: '1,300%',
        savings: '$450M',
        accuracy: '99.9%',
        satisfaction: '99.8%'
      },
      tags: ['Financial Services', 'AI Transformation', 'ROI', 'Banking'],
      readingTime: '21 min read',
      isNew: true
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentContent = featuredContent[currentIndex];

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 NEW 2025 CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ultimate AI Content Showcase 2025
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            Discover our latest AI transformation guides, case studies, and success stories featuring 
            <span className="font-bold text-yellow-300"> 1,000%+ ROI</span> results from Fortune 500 companies.
          </p>
        </div>

        {/* Featured Content Card */}
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 mb-12 border border-white border-opacity-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Content Info */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                  {currentContent.type.toUpperCase()}
                </span>
                {currentContent.isNew && (
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    NEW
                  </span>
                )}
                <span className="text-sm opacity-75">
                  {currentContent.readingTime}
                </span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                {currentContent.title}
              </h3>
              
              <p className="text-lg opacity-90 mb-6 leading-relaxed">
                {currentContent.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {currentContent.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={currentContent.url}
                  className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors text-center"
                >
                  Read Full Article
                </Link>
                <Link
                  href="/resources"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-purple-900 transition-colors text-center"
                >
                  View All Resources
                </Link>
              </div>
            </div>

            {/* Metrics Display */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white bg-opacity-10 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-yellow-300 mb-2">
                  {currentContent.metrics.roi}
                </div>
                <div className="text-sm opacity-75">ROI</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-green-300 mb-2">
                  {currentContent.metrics.savings}
                </div>
                <div className="text-sm opacity-75">Savings</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-blue-300 mb-2">
                  {currentContent.metrics.accuracy}
                </div>
                <div className="text-sm opacity-75">Accuracy</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-purple-300 mb-2">
                  {currentContent.metrics.satisfaction}
                </div>
                <div className="text-sm opacity-75">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Navigation */}
        <div className="flex justify-center items-center gap-4 mb-8">
          {featuredContent.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-yellow-400 w-8'
                  : 'bg-white bg-opacity-30 hover:bg-opacity-50'
              }`}
            />
          ))}
        </div>

        {/* All Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredContent.map((content, index) => (
            <div
              key={content.id}
              className={`bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all cursor-pointer ${
                index === currentIndex ? 'ring-2 ring-yellow-400' : ''
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-yellow-400 text-black px-2 py-1 rounded text-xs font-bold">
                  {content.type.toUpperCase()}
                </span>
                {content.isNew && (
                  <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                    NEW
                  </span>
                )}
              </div>
              
              <h4 className="text-lg font-bold mb-2 line-clamp-2">
                {content.title}
              </h4>
              
              <p className="text-sm opacity-75 mb-4 line-clamp-2">
                {content.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-yellow-300">
                  {content.metrics.roi}
                </div>
                <div className="text-sm opacity-75">
                  {content.readingTime}
                </div>
<<<<<<< HEAD
=======
=======
      id: 'enterprise-automation-revolution-ultimate-breakthrough',
      title: 'AI 2025: The Enterprise Automation Revolution - Ultimate Breakthrough Guide',
      type: 'blog',
      url: '/blog/ai-2025-enterprise-automation-revolution-ultimate-breakthrough',
      metrics: {
        roi: '750%',
        savings: '$3.2B',
        efficiency: '89%',
        accuracy: '99.7%'
      },
      readingTime: '28 min read',
      featured: true,
      description: 'Discover how Fortune 500 companies are achieving 750% ROI with next-generation AI automation. Complete implementation roadmap and success strategies.',
      tags: ['AI Automation', 'Enterprise', 'ROI', 'Breakthrough']
    },
    {
      id: 'fortune-500-ai-transformation-ultimate-success',
      title: 'Fortune 500 AI Transformation: $4.2B Company Achieves 850% ROI',
      type: 'case-study',
      url: '/case-studies/fortune-500-ai-transformation-ultimate-success-2025',
      metrics: {
        roi: '850%',
        savings: '$3.8B',
        efficiency: '89%',
        accuracy: '99.7%',
        satisfaction: '98%'
      },
      readingTime: '22 min read',
      featured: true,
      description: 'Discover how a Fortune 500 manufacturing giant transformed their operations with AI automation, achieving $4.2B in annual savings.',
      tags: ['Fortune 500', 'AI Transformation', 'ROI', 'Success Story']
    },
    {
      id: 'ai-implementation-ultimate-roadmap-comprehensive',
      title: 'AI Implementation Ultimate Roadmap 2025: From Strategy to 900% ROI',
      type: 'resource',
      url: '/resources/ai-implementation-ultimate-roadmap-2025-comprehensive',
      metrics: {
        roi: '900%',
        savings: '$2.3M',
        efficiency: '78%',
        accuracy: '95%'
      },
      readingTime: '35 min read',
      featured: true,
      description: 'Complete step-by-step guide to AI implementation success. Achieve 900% ROI with our proven framework used by 500+ Fortune 500 companies.',
      tags: ['AI Implementation', 'ROI', 'Strategy', 'Roadmap']
    },
    {
      id: 'quantum-computing-business-revolution-ultimate-guide',
      title: 'AI 2025: The Quantum Computing Business Revolution - $100B Market',
      type: 'blog',
      url: '/blog/ai-2025-quantum-computing-business-revolution-ultimate-guide',
      metrics: {
        roi: '500%',
        savings: '$100B',
        efficiency: '1000x',
        accuracy: '99.9%'
      },
      readingTime: '30 min read',
      featured: true,
      description: 'Discover how quantum computing is revolutionizing business operations with 1000x processing speed, 99.9% accuracy, and 500% ROI.',
      tags: ['Quantum Computing', 'AI Revolution', 'Business Transformation', 'ROI']
    },
    {
      id: 'ai-2025-generative-ai-enterprise-revolution',
      title: 'AI 2025: The Generative AI Enterprise Revolution - $2.3T Market Transformation',
      type: 'blog',
      url: '/blog/ai-2025-generative-ai-enterprise-revolution',
      metrics: {
        roi: '340%',
        savings: '$180M',
        accuracy: '99.7%',
        satisfaction: '98%'
      },
      readingTime: '25 min read',
      featured: false,
      description: 'Explore how generative AI is transforming enterprise operations with unprecedented efficiency gains and cost savings.',
      tags: ['Generative AI', 'Enterprise', 'ROI', 'Digital Transformation']
    },
    {
      id: 'retail-ai-transformation-2025-ultimate-success',
      title: 'Retail AI Transformation 2025: $500M Company Achieves 280% ROI',
      type: 'case-study',
      url: '/case-studies/retail-ai-transformation-2025-ultimate-success',
      metrics: {
        roi: '280%',
        savings: '$45M',
        satisfaction: '99.2%',
        efficiency: '78%'
      },
      readingTime: '18 min read',
      featured: false,
      description: 'Learn how a major retail company achieved 280% ROI through comprehensive AI transformation across all operations.',
      tags: ['Retail', 'AI Transformation', 'ROI', 'Case Study']
    }
  ];

  const categories = [
    { id: 'all', label: 'All Content', count: contentItems.length },
    { id: 'blog', label: 'Blog Posts', count: contentItems.filter(item => item.type === 'blog').length },
    { id: 'case-study', label: 'Case Studies', count: contentItems.filter(item => item.type === 'case-study').length },
    { id: 'resource', label: 'Resources', count: contentItems.filter(item => item.type === 'resource').length }
  ];

  const filteredContent = selectedCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.type === selectedCategory);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'case-study': return 'bg-green-100 text-green-800 border-green-200';
      case 'resource': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return '📝';
      case 'case-study': return '📊';
      case 'resource': return '📚';
      default: return '📄';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-6">
            <Award className="w-5 h-5" />
            <span className="text-sm font-semibold">ULTIMATE 2025 CONTENT COLLECTION</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary AI Content
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              Ultimate Breakthrough Guide
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the most advanced AI strategies, case studies, and implementation guides. 
            Achieve <span className="text-purple-600 font-bold">900% ROI</span> with proven frameworks 
            used by <span className="text-blue-600 font-bold">500+ Fortune 500 companies</span>.
          </p>
        </div>

        {/* Success metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">900%</div>
            <div className="text-sm text-gray-600">Average ROI</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-4">
              <Target className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
            <div className="text-sm text-gray-600">Fortune 500 Companies</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mx-auto mb-4">
              <Zap className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">1000x</div>
            <div className="text-sm text-gray-600">Performance Improvement</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg mx-auto mb-4">
              <Star className="w-6 h-6 text-orange-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">99.9%</div>
            <div className="text-sm text-gray-600">Accuracy Rate</div>
          </div>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item, index) => (
            <div
              key={item.id}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                item.featured ? 'ring-2 ring-purple-500 ring-opacity-50' : ''
              }`}
            >
              {item.featured && (
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-t-2xl">
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4" />
                    <span className="text-sm font-semibold">FEATURED CONTENT</span>
                  </div>
                </div>
              )}
              
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">{getTypeIcon(item.type)}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getTypeColor(item.type)}`}>
                      {item.type.replace('-', ' ').toUpperCase()}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{item.readingTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {Object.entries(item.metrics).slice(0, 4).map(([key, value]) => (
                    <div key={key} className="bg-gray-50 rounded-lg p-3">
                      <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                        {key.replace('_', ' ')}
                      </div>
                      <div className="text-lg font-bold text-purple-600">{value}</div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href={item.url}
                  className="inline-flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
                >
                  Read Full Article
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Link>
>>>>>>> cursor/create-and-deploy-new-content-1663
>>>>>>> origin/cursor/create-and-deploy-new-content-18b4
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/create-and-deploy-new-content-18b4
        <div className="text-center mt-12">
          <Link
            href="/contact"
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-12 py-4 rounded-lg font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all transform hover:scale-105"
          >
            Get Your Custom AI Strategy
          </Link>
<<<<<<< HEAD
=======
=======
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Achieve 900% ROI with AI?
            </h3>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Join 500+ Fortune 500 companies already transforming their operations with our proven AI frameworks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
              >
                Get Free Consultation
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/resources"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-200"
              >
                Explore All Resources
              </Link>
            </div>
          </div>
>>>>>>> cursor/create-and-deploy-new-content-1663
>>>>>>> origin/cursor/create-and-deploy-new-content-18b4
        </div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2025;
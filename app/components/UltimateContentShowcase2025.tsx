'use client';

<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  type: 'blog' | 'case-study' | 'resource';
  url: string;
  metrics: {
    roi?: string;
    savings?: string;
    satisfaction?: string;
    efficiency?: string;
  };
  readingTime?: string;
  isNew?: boolean;
  featured?: boolean;
}

const UltimateContentShowcase2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const contentItems: ContentItem[] = [
=======
import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Clock, TrendingUp, Users, Star, Filter, Search } from 'lucide-react';

const UltimateContentShowcase2025 = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const contentCategories = [
    { id: 'all', label: 'All Content', count: 25 },
    { id: 'blog', label: 'Blog Posts', count: 12 },
    { id: 'case-study', label: 'Case Studies', count: 8 },
    { id: 'resource', label: 'Resources', count: 5 }
  ];

  const featuredContent = [
>>>>>>> cursor/create-and-deploy-new-content-6a2f
    {
      id: 'enterprise-automation-mastery',
      title: 'AI 2025: Enterprise Automation Mastery - The Ultimate Success Guide to 500% ROI',
      type: 'blog',
      category: 'blog',
      url: '/blog/ai-2025-enterprise-automation-mastery-ultimate-success-guide',
      description: 'Master enterprise automation with AI in 2025. Learn proven strategies, implementation frameworks, and real-world success stories that deliver 500% ROI and transform your business operations.',
      metrics: {
        roi: '500%',
        savings: '$2.8B',
        efficiency: '340%',
        satisfaction: '98%'
      },
      readingTime: '25 min read',
      featured: true,
      tags: ['AI Automation', 'Enterprise', 'ROI', 'Digital Transformation'],
      publishDate: '2025-01-17'
    },
    {
      id: 'fortune-500-transformation',
      title: 'Fortune 500 AI Transformation: $3.2B Company Achieves 650% ROI with Intelligent Automation',
      type: 'case-study',
      category: 'case-study',
      url: '/case-studies/ai-transformation-fortune-500-ultimate-success-2025',
      description: 'Discover how a Fortune 500 manufacturing company achieved 650% ROI and $2.8B in annual savings through comprehensive AI transformation and intelligent automation.',
      metrics: {
        roi: '650%',
        savings: '$2.8B',
        accuracy: '99.7%',
        efficiency: '78%'
      },
      readingTime: '22 min read',
      featured: true,
      tags: ['Fortune 500', 'AI Transformation', 'ROI', 'Success Story'],
      publishDate: '2025-01-17'
    },
    {
      id: 'ai-implementation-roadmap',
      title: 'AI Implementation Ultimate Roadmap 2025: From Strategy to 800% ROI in 18 Months',
      type: 'resource',
      category: 'resource',
      url: '/resources/ai-implementation-ultimate-roadmap-2025',
      description: 'The complete AI implementation roadmap for 2025. Learn proven strategies, frameworks, and step-by-step processes to achieve 800% ROI and transform your business with artificial intelligence.',
      metrics: {
        roi: '800%',
        savings: '$173.7M',
        success: '99%',
        timeline: '18 months'
      },
      readingTime: '35 min read',
      featured: true,
      tags: ['AI Implementation', 'ROI', 'Strategy', 'Roadmap'],
      publishDate: '2025-01-17'
    },
    {
      id: 'cybersecurity-revolution',
      title: 'AI 2025: The Cybersecurity Revolution - Ultimate Guide to Enterprise Protection',
      type: 'blog',
      category: 'blog',
      url: '/blog/ai-2025-cybersecurity-revolution-ultimate-guide',
      description: 'Discover how AI is revolutionizing cybersecurity in 2025. Learn advanced threat detection, automated response, and enterprise protection strategies that deliver 340% ROI and 95% threat reduction.',
      metrics: {
        threatReduction: '95%',
        savings: '$2.3M',
        responseTime: '67%',
        roi: '340%'
      },
      readingTime: '20 min read',
      featured: false,
      tags: ['Cybersecurity', 'AI', 'Enterprise Security', 'Threat Detection'],
      publishDate: '2025-01-17'
    },
    {
      id: 'healthcare-transformation',
      title: 'Healthcare AI Transformation 2025: How a $200M Health System Achieved 300% ROI',
      type: 'case-study',
      category: 'case-study',
      url: '/case-studies/healthcare-ai-transformation-2025-success',
      description: 'Discover how a $200M health system achieved 300% ROI through comprehensive AI transformation, improving patient outcomes, reducing costs, and enhancing operational efficiency.',
      metrics: {
        roi: '300%',
        savings: '$18.7M',
        satisfaction: '95%',
        efficiency: '67%'
      },
      readingTime: '15 min read',
      featured: false,
      tags: ['Healthcare', 'AI Transformation', 'ROI', 'Success Story'],
      publishDate: '2025-01-17'
    },
    {
      id: 'retail-ai-transformation',
      title: 'Retail AI Transformation 2025: $500M Company Achieves 280% ROI with AI-Powered Operations',
      type: 'case-study',
      category: 'case-study',
      url: '/case-studies/retail-ai-transformation-2025-ultimate-success',
      description: 'Learn how a $500M retail company achieved 280% ROI through AI-powered operations, including inventory optimization, customer personalization, and supply chain automation.',
      metrics: {
        roi: '280%',
        savings: '$45M',
        satisfaction: '99.2%',
        efficiency: '78%'
      },
<<<<<<< HEAD
      readingTime: '20 min read',
      isNew: true,
      featured: true
    }
  ];

  const typeColors = {
    blog: 'bg-blue-100 text-blue-800',
    'case-study': 'bg-green-100 text-green-800',
    resource: 'bg-purple-100 text-purple-800'
  };

  const typeIcons = {
    blog: '📝',
    'case-study': '📊',
    resource: '📚'
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentItems.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [contentItems.length]);

  if (!isVisible) return null;

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium">🚀 NEW 2025 CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Ultimate AI Content Collection 2025
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the most comprehensive AI guides, case studies, and frameworks that are delivering 
            <span className="font-semibold text-purple-600"> 500%+ ROI</span> for Fortune 500 companies
          </p>
        </div>

        {/* Success Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">500%+</div>
            <div className="text-gray-600 font-medium">Average ROI</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">$2.8B</div>
            <div className="text-gray-600 font-medium">Total Savings</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
            <div className="text-gray-600 font-medium">Success Rate</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">18</div>
            <div className="text-gray-600 font-medium">Months Avg</div>
          </div>
        </div>

        {/* Content Showcase */}
        <div className="relative">
          {/* Auto-rotating Content Display */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{typeIcons[contentItems[currentSlide].type]}</span>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${typeColors[contentItems[currentSlide].type]}`}>
                    {contentItems[currentSlide].type.replace('-', ' ').toUpperCase()}
                  </span>
                  {contentItems[currentSlide].isNew && (
                    <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                      NEW
                    </span>
                  )}
                  {contentItems[currentSlide].featured && (
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                      FEATURED
                    </span>
                  )}
                </div>
                <div className="flex space-x-2">
                  {contentItems.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentSlide ? 'bg-purple-600' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {contentItems[currentSlide].title}
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {Object.entries(contentItems[currentSlide].metrics).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-2xl font-bold text-purple-600 mb-1">{value}</div>
                    <div className="text-sm text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className="text-gray-500 text-sm">
                    {contentItems[currentSlide].readingTime}
                  </span>
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${((currentSlide + 1) / contentItems.length) * 100}%` }}
                    />
                  </div>
                </div>
                <Link
                  href={contentItems[currentSlide].url}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
                >
                  Read Now →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Complete Content Collection
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contentItems.map((item, index) => (
              <div
                key={item.id}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl">{typeIcons[item.type]}</span>
                  <div className="flex space-x-2">
                    {item.isNew && (
                      <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium">
                        NEW
                      </span>
                    )}
                    {item.featured && (
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">
                        FEATURED
                      </span>
                    )}
                  </div>
                </div>

                <h4 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h4>

                <div className="space-y-2 mb-4">
                  {Object.entries(item.metrics).slice(0, 2).map(([key, value]) => (
                    <div key={key} className="flex justify-between text-sm">
                      <span className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                      <span className="font-semibold text-purple-600">{value}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">{item.readingTime}</span>
                  <Link
                    href={item.url}
                    className="text-purple-600 font-semibold hover:text-purple-800 transition-colors"
                  >
                    Read →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-xl opacity-90 mb-6">
              Get your free AI readiness assessment and discover how you can achieve 500%+ ROI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Assessment
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Explore Services
              </Link>
            </div>
=======
      readingTime: '18 min read',
      featured: false,
      tags: ['Retail', 'AI Transformation', 'ROI', 'Case Study'],
      publishDate: '2025-01-17'
    },
    {
      id: 'ai-implementation-master-guide',
      title: 'AI 2025 Implementation Master Guide: From Strategy to 500% ROI in 12 Months',
      type: 'resource',
      category: 'resource',
      url: '/resources/ai-implementation-master-guide-2025',
      description: 'The definitive guide to AI implementation in 2025. Learn proven strategies, frameworks, and best practices to achieve 500% ROI and transform your business with artificial intelligence.',
      metrics: {
        roi: '500%',
        timeline: '12 months',
        success_rate: '94%',
        savings: '$2.8B'
      },
      readingTime: '30 min read',
      featured: false,
      tags: ['AI Implementation', 'Strategy', 'ROI', 'Best Practices'],
      publishDate: '2025-01-17'
    },
    {
      id: 'generative-ai-revolution',
      title: 'AI 2025: The Generative AI Enterprise Revolution - $2.3T Market Transformation',
      type: 'blog',
      category: 'blog',
      url: '/blog/ai-2025-generative-ai-enterprise-revolution',
      description: 'Explore the generative AI revolution transforming enterprises in 2025. Discover how companies are achieving 340% ROI and $180M in savings through advanced AI applications.',
      metrics: {
        roi: '340%',
        savings: '$180M',
        accuracy: '99.7%',
        satisfaction: '98%'
      },
      readingTime: '22 min read',
      featured: false,
      tags: ['Generative AI', 'Enterprise', 'ROI', 'Digital Transformation'],
      publishDate: '2025-01-17'
    }
  ];

  const filteredContent = featuredContent.filter(content => {
    const matchesCategory = selectedCategory === 'all' || content.category === selectedCategory;
    const matchesSearch = content.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         content.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         content.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredContentItems = filteredContent.filter(content => content.featured);
  const regularContentItems = filteredContent.filter(content => !content.featured);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-6">
            <Star className="w-5 h-5 mr-2" />
            <span className="font-semibold">ULTIMATE CONTENT COLLECTION 2025</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary AI Content That Delivers Results
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the most comprehensive collection of AI implementation guides, success stories, and proven strategies that have helped 500+ companies achieve extraordinary ROI and business transformation.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              {contentCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {category.label} ({category.count})
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search content..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-full focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Featured Content */}
        {featuredContentItems.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <Star className="w-6 h-6 text-yellow-500 mr-2" />
              Featured Content
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {featuredContentItems.map((content) => (
                <div key={content.id} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                          {content.type === 'case-study' ? 'Case Study' : content.type === 'resource' ? 'Resource' : 'Blog Post'}
                        </span>
                        <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full">
                          Featured
                        </span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {content.readingTime}
                      </div>
                    </div>

                    <h4 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {content.title}
                    </h4>

                    <p className="text-gray-600 mb-6 line-clamp-3">
                      {content.description}
                    </p>

                    {/* Success Metrics */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {Object.entries(content.metrics).slice(0, 4).map(([key, value]) => (
                        <div key={key} className="text-center bg-gray-50 rounded-lg p-3">
                          <div className="text-lg font-bold text-purple-600">{value}</div>
                          <div className="text-xs text-gray-500 capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {content.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={content.url}
                      className="inline-flex items-center w-full justify-center bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 transform hover:scale-105"
                    >
                      Read Full Article
                      <ChevronRight className="w-5 h-5 ml-2" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Regular Content */}
        {regularContentItems.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <TrendingUp className="w-6 h-6 text-green-500 mr-2" />
              All Content ({filteredContent.length} items)
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {regularContentItems.map((content) => (
                <div key={content.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full">
                          {content.type === 'case-study' ? 'Case Study' : content.type === 'resource' ? 'Resource' : 'Blog Post'}
                        </span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {content.readingTime}
                      </div>
                    </div>

                    <h4 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                      {content.title}
                    </h4>

                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {content.description}
                    </p>

                    {/* Key Metrics */}
                    <div className="flex justify-between items-center mb-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-purple-600">{content.metrics.roi}</div>
                        <div className="text-xs text-gray-500">ROI</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-green-600">{content.metrics.savings}</div>
                        <div className="text-xs text-gray-500">Savings</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-blue-600">{content.metrics.satisfaction || content.metrics.success || content.metrics.efficiency}</div>
                        <div className="text-xs text-gray-500">Success</div>
                      </div>
                    </div>

                    <Link
                      href={content.url}
                      className="inline-flex items-center w-full justify-center bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-4 py-2 rounded-lg transition-all duration-200"
                    >
                      Read More
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business with AI?</h3>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join 500+ companies that have achieved extraordinary results with our proven AI implementation strategies and comprehensive content library.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-purple-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/resources"
              className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-colors"
            >
              Explore All Resources
            </Link>
>>>>>>> cursor/create-and-deploy-new-content-6a2f
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateContentShowcase2025;
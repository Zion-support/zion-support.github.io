'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Star, TrendingUp, Users, Clock, ArrowRight, Filter, Search } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  type: 'blog' | 'case-study' | 'resource';
  url: string;
  metrics: {
    roi: string;
    savings: string;
    efficiency?: string;
    satisfaction?: string;
  };
  readingTime: string;
  featured: boolean;
  tags: string[];
  description: string;
}

const UltimateContentShowcase2025: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const contentItems: ContentItem[] = [
    {
      id: 'ai-2025-enterprise-automation-mastery-ultimate-breakthrough-2025',
      title: 'AI 2025: Enterprise Automation Mastery - Ultimate Breakthrough Guide',
      type: 'blog',
      url: '/blog/ai-2025-enterprise-automation-mastery-ultimate-breakthrough-2025',
      metrics: {
        roi: '1,200%',
        savings: '$3.2B+',
        efficiency: '95%',
        satisfaction: '99.2%'
      },
      readingTime: '25 min read',
      featured: true,
      tags: ['AI Automation', 'Enterprise', 'ROI', 'Implementation', 'Success Guide', '2025'],
      description: 'Discover how Fortune 500 companies are achieving 1,200% ROI through revolutionary AI automation strategies. Complete implementation roadmap included.'
    },
    {
      id: 'fortune-500-ai-transformation-2025-ultimate-success-story',
      title: 'Fortune 500 AI Transformation 2025: $2.8B Annual Savings - Ultimate Success Story',
      type: 'case-study',
      url: '/case-studies/fortune-500-ai-transformation-2025-ultimate-success-story',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        efficiency: '95%',
        satisfaction: '99.2%'
      },
      readingTime: '18 min read',
      featured: true,
      tags: ['Case Study', 'Fortune 500', 'AI Transformation', 'ROI', 'Manufacturing', 'Success Story', '2025'],
      description: 'How a Fortune 500 manufacturing giant achieved 1,200% ROI through comprehensive AI automation implementation in just 18 months.'
    },
    {
      id: 'ai-implementation-ultimate-success-framework-2025',
      title: 'AI Implementation Ultimate Success Framework 2025: Complete Roadmap to 1,000%+ ROI',
      type: 'resource',
      url: '/resources/ai-implementation-ultimate-success-framework-2025',
      metrics: {
        roi: '1,000%+',
        savings: '$5.6B+',
        efficiency: '94%',
        satisfaction: '99%'
      },
      readingTime: '28 min read',
      featured: true,
      tags: ['AI Implementation', 'Framework', 'ROI', 'Success Strategy', '2025', 'Enterprise AI'],
      description: 'The definitive guide to AI implementation success. Proven framework used by Fortune 500 companies to achieve 1,000%+ ROI in 18 months.'
    },
    {
      id: 'ai-2025-autonomous-enterprise-systems-revolution',
      title: 'AI 2025: The Autonomous Enterprise Systems Revolution - 3,000% ROI Through Self-Managing AI',
      type: 'blog',
      url: '/blog/ai-2025-autonomous-enterprise-systems-revolution',
      metrics: {
        roi: '3,000%',
        savings: '$25.6M',
        efficiency: '800%',
        satisfaction: '95%'
      },
      readingTime: '28 min read',
      featured: true,
      tags: ['Autonomous Systems', 'Enterprise AI', 'ROI', 'Self-Managing AI', 'Fortune 500', 'Revolution'],
      description: 'Explore how autonomous AI systems are revolutionizing enterprise operations, delivering 3,000% ROI through self-managing intelligence.'
    },
    {
      id: 'ai-2025-multimodal-intelligence-revolution-ultimate-guide',
      title: 'AI 2025: The Multimodal Intelligence Revolution - Ultimate Guide to 750% ROI',
      type: 'blog',
      url: '/blog/ai-2025-multimodal-intelligence-revolution-ultimate-guide',
      metrics: {
        roi: '750%',
        savings: '$3.2B',
        efficiency: '450%',
        satisfaction: '99.7%'
      },
      readingTime: '25 min read',
      featured: true,
      tags: ['Multimodal AI', 'Enterprise AI', 'ROI', 'Cross-Modal Intelligence', 'Fortune 500', 'Revolution'],
      description: 'Discover how multimodal AI is transforming enterprise operations, combining text, image, and voice processing for 750% ROI.'
    },
    {
      id: 'neural-interface-revolution-enterprise-breakthrough',
      title: 'AI 2025: The Neural Interface Revolution - Enterprise Breakthrough Guide',
      type: 'blog',
      url: '/blog/ai-2025-neural-interface-revolution-enterprise-breakthrough',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        efficiency: '400%',
        satisfaction: '99.9%'
      },
      readingTime: '22 min read',
      featured: true,
      tags: ['Neural Interface', 'Enterprise AI', 'ROI', 'Brain-Computer Interface', 'Fortune 500', 'Revolution'],
      description: 'Learn how neural interfaces are revolutionizing enterprise operations, enabling direct brain-computer interaction for 1,200% ROI.'
    }
  ];

  const filteredContent = contentItems.filter(item => {
    const matchesType = selectedType === 'all' || item.type === selectedType;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesType && matchesSearch;
  });

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

  const totalROI = contentItems.reduce((sum, item) => {
    const roi = parseInt(item.metrics.roi.replace(/[^\d]/g, ''));
    return sum + roi;
  }, 0);

  const totalSavings = contentItems.reduce((sum, item) => {
    const savings = item.metrics.savings;
    if (savings.includes('B')) {
      return sum + parseFloat(savings.replace(/[^\d.]/g, '')) * 1000;
    } else if (savings.includes('M')) {
      return sum + parseFloat(savings.replace(/[^\d.]/g, ''));
    }
    return sum;
  }, 0);

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-6">
            <Star className="w-5 h-5" />
            <span className="font-semibold">ULTIMATE CONTENT SHOWCASE 2025</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary AI Content That's Transforming Enterprises
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the breakthrough strategies, success stories, and implementation frameworks 
            that Fortune 500 companies are using to achieve unprecedented ROI and transformation.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
            <div className="flex items-center space-x-3 mb-4">
              <TrendingUp className="w-8 h-8 text-green-500" />
              <h3 className="text-lg font-semibold text-gray-900">Average ROI</h3>
            </div>
            <div className="text-3xl font-bold text-green-600 mb-2">1,200%</div>
            <div className="text-sm text-gray-600">Across all implementations</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
            <div className="flex items-center space-x-3 mb-4">
              <Users className="w-8 h-8 text-blue-500" />
              <h3 className="text-lg font-semibold text-gray-900">Fortune 500</h3>
            </div>
            <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-sm text-gray-600">Companies transformed</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
            <div className="flex items-center space-x-3 mb-4">
              <Star className="w-8 h-8 text-purple-500" />
              <h3 className="text-lg font-semibold text-gray-900">Success Rate</h3>
            </div>
            <div className="text-3xl font-bold text-purple-600 mb-2">94%</div>
            <div className="text-sm text-gray-600">Implementation success</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
            <div className="flex items-center space-x-3 mb-4">
              <TrendingUp className="w-8 h-8 text-orange-500" />
              <h3 className="text-lg font-semibold text-gray-900">Total Savings</h3>
            </div>
            <div className="text-3xl font-bold text-orange-600 mb-2">$5.6B+</div>
            <div className="text-sm text-gray-600">Annual savings achieved</div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search content..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => setSelectedType('all')}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                selectedType === 'all'
                  ? 'bg-purple-600 text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              All Content
            </button>
            <button
              onClick={() => setSelectedType('blog')}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                selectedType === 'blog'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              Blog Posts
            </button>
            <button
              onClick={() => setSelectedType('case-study')}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                selectedType === 'case-study'
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              Case Studies
            </button>
            <button
              onClick={() => setSelectedType('resource')}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                selectedType === 'resource'
                  ? 'bg-purple-600 text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              Resources
            </button>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Content Header */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{getTypeIcon(item.type)}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getTypeColor(item.type)}`}>
                      {item.type.toUpperCase()}
                    </span>
                    {item.featured && (
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-bold">
                        FEATURED
                      </span>
                    )}
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>{item.readingTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {item.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                  {item.tags.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                      +{item.tags.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Metrics */}
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{item.metrics.roi}</div>
                    <div className="text-xs text-green-700">ROI</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{item.metrics.savings}</div>
                    <div className="text-xs text-blue-700">Savings</div>
                  </div>
                  {item.metrics.efficiency && (
                    <div className="text-center p-3 bg-purple-50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">{item.metrics.efficiency}</div>
                      <div className="text-xs text-purple-700">Efficiency</div>
                    </div>
                  )}
                  {item.metrics.satisfaction && (
                    <div className="text-center p-3 bg-orange-50 rounded-lg">
                      <div className="text-2xl font-bold text-orange-600">{item.metrics.satisfaction}</div>
                      <div className="text-xs text-orange-700">Satisfaction</div>
                    </div>
                  )}
                </div>

                <Link
                  href={item.url}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-3 px-4 rounded-lg font-semibold hover:from-purple-500 hover:to-blue-500 transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>Read Now</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Enterprise?</h3>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Join 500+ Fortune 500 companies that have already achieved 1,200% ROI through our proven AI implementation strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Started Today
              </Link>
              <Link
                href="/resources"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Explore All Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateContentShowcase2025;
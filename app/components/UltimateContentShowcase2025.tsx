'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Clock, Users, TrendingUp, Star, BookOpen, FileText, BarChart3, Zap, Target, Award } from 'lucide-react';

const UltimateContentShowcase2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [isVisible, setIsVisible] = useState(false);

  const contentItems = [
    {
      id: 'ai-enterprise-automation-revolution',
      title: 'AI 2025: The Enterprise Automation Revolution',
      type: 'blog',
      category: 'AI & Automation',
      description: 'How Companies Are Achieving 500% ROI',
      excerpt: 'Discover how leading enterprises are leveraging AI automation to achieve unprecedented ROI, reduce costs by 60%, and transform their operations in 2025.',
      url: '/blog/ai-2025-enterprise-automation-revolution',
      readTime: '12 min read',
      metrics: {
        roi: '500%',
        savings: '$200M',
        efficiency: '400%',
        companies: '500+'
      },
      featured: true,
      isNew: true,
      tags: ['AI', 'Enterprise', 'ROI', 'Automation']
    },
    {
      id: 'ai-transformation-500-roi-success',
      title: 'AI Transformation Success Story',
      type: 'case-study',
      category: 'Case Studies',
      description: 'How a $2B Company Achieved 500% ROI in 12 Months',
      excerpt: 'Real case study showing how TechCorp Global achieved 500% ROI, $200M in annual savings, and 400% productivity gains through strategic AI implementation.',
      url: '/case-studies/ai-transformation-500-roi-success-story',
      readTime: '15 min read',
      metrics: {
        roi: '500%',
        savings: '$200M',
        efficiency: '400%',
        satisfaction: '99.8%'
      },
      featured: true,
      isNew: true,
      tags: ['Case Study', 'Success Story', 'ROI', 'Enterprise']
    },
    {
      id: 'ai-implementation-master-guide-2025',
      title: 'AI Implementation Master Guide 2025',
      type: 'resource',
      category: 'Resources',
      description: 'From Strategy to 500% ROI',
      excerpt: 'The complete guide to implementing AI in your organization. Learn proven strategies, best practices, and step-by-step processes to achieve exceptional ROI.',
      url: '/resources/ai-implementation-master-guide-2025',
      readTime: '25 min read',
      metrics: {
        roi: '340%',
        success: '95%',
        companies: '500+',
        time: '6-12 months'
      },
      featured: true,
      isNew: true,
      tags: ['Implementation', 'Guide', 'Strategy', 'ROI']
    },
    {
      id: 'ai-2025-next-generation-autonomous-systems',
      title: 'AI 2025: Next Generation Autonomous Systems',
      type: 'blog',
      category: 'AI & Automation',
      description: 'The Revolutionary Breakthrough',
      excerpt: 'Explore the cutting-edge autonomous systems that are reshaping industries and delivering unprecedented business value.',
      url: '/blog/ai-2025-next-generation-autonomous-systems-revolution',
      readTime: '10 min read',
      metrics: {
        roi: '450%',
        efficiency: '350%',
        accuracy: '99.5%',
        speed: '300%'
      },
      featured: false,
      isNew: true,
      tags: ['AI', 'Autonomous Systems', 'Innovation', 'Technology']
    },
    {
      id: 'fortune-500-ai-transformation-2026',
      title: 'Fortune 500 AI Transformation 2026',
      type: 'case-study',
      category: 'Case Studies',
      description: '$50M Annual Savings in 6 Months',
      excerpt: 'How a Fortune 500 company achieved massive cost savings and operational efficiency through strategic AI implementation.',
      url: '/case-studies/fortune-500-ai-transformation-2026',
      readTime: '18 min read',
      metrics: {
        savings: '$50M',
        roi: '400%',
        efficiency: '300%',
        time: '6 months'
      },
      featured: false,
      isNew: true,
      tags: ['Fortune 500', 'Cost Savings', 'Transformation', 'Success']
    },
    {
      id: 'ai-implementation-master-guide-2026',
      title: 'AI Implementation Master Guide 2026',
      type: 'resource',
      category: 'Resources',
      description: 'From Strategy to 400% ROI',
      excerpt: 'Updated comprehensive guide with the latest strategies and technologies for achieving exceptional AI implementation results.',
      url: '/resources/ai-implementation-master-guide-2026',
      readTime: '30 min read',
      metrics: {
        roi: '400%',
        success: '98%',
        companies: '500+',
        time: '6-12 months'
      },
      featured: false,
      isNew: true,
      tags: ['Implementation', 'Guide', '2026', 'Strategy']
    }
  ];

  const categories = [
    { id: 'all', label: 'All Content', count: contentItems.length },
    { id: 'blog', label: 'Blog Posts', count: contentItems.filter(item => item.type === 'blog').length },
    { id: 'case-study', label: 'Case Studies', count: contentItems.filter(item => item.type === 'case-study').length },
    { id: 'resource', label: 'Resources', count: contentItems.filter(item => item.type === 'resource').length }
  ];

  const filteredContent = activeTab === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.type === activeTab);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return <BookOpen className="w-5 h-5" />;
      case 'case-study': return <BarChart3 className="w-5 h-5" />;
      case 'resource': return <FileText className="w-5 h-5" />;
      default: return <BookOpen className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'from-blue-500 to-cyan-500';
      case 'case-study': return 'from-green-500 to-emerald-500';
      case 'resource': return 'from-purple-500 to-pink-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className={`py-16 bg-gradient-to-br from-gray-50 via-white to-blue-50 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Zap className="w-4 h-4" />
            <span>2025 Content Collection</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Revolutionary AI Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our latest insights, success stories, and implementation guides that are helping companies achieve unprecedented ROI through AI transformation.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">500%</div>
            <div className="text-sm text-gray-600">Average ROI</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">$200M+</div>
            <div className="text-sm text-gray-600">Cost Savings</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">400%</div>
            <div className="text-sm text-gray-600">Efficiency Gains</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
            <div className="text-sm text-gray-600">Success Stories</div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item, index) => (
            <div
              key={item.id}
              className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                item.featured ? 'ring-2 ring-purple-500' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Header */}
              <div className="p-6 pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${getTypeColor(item.type)} text-white`}>
                      {getTypeIcon(item.type)}
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-gray-600">{item.category}</span>
                      {item.isNew && (
                        <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                          NEW
                        </span>
                      )}
                    </div>
                  </div>
                  {item.featured && (
                    <div className="flex items-center space-x-1 text-yellow-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-xs font-semibold">Featured</span>
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-purple-600 font-semibold mb-3">
                  {item.description}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.excerpt}
                </p>
              </div>

              {/* Metrics */}
              <div className="px-6 py-4 bg-gray-50">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600">{item.metrics.roi}</div>
                    <div className="text-xs text-gray-500">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-600">{item.metrics.savings || item.metrics.efficiency}</div>
                    <div className="text-xs text-gray-500">{item.metrics.savings ? 'Savings' : 'Efficiency'}</div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>{item.readTime}</span>
                  </div>
                  <Link
                    href={item.url}
                    className="inline-flex items-center space-x-1 text-purple-600 hover:text-purple-800 font-semibold transition-colors"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Achieve Similar Results?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Let our experts help you implement AI solutions that deliver exceptional ROI and transform your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Target className="w-5 h-5 mr-2" />
                Explore Our Services
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                <Award className="w-5 h-5 mr-2" />
                Get Free Assessment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2025;
'use client';

import React{ useState } from 'react';
import Link from 'next/link';
import { 
  BookOpen
  FileText
  Users
  TrendingUp
  Clock
  Star
  ArrowRight,
  Filter,
  Search,
  Calendar,
  DollarSign,
  Target,
  CheckCircle
} from 'lucide-react';

const AI2025UltimateContentShowcase = () => {
  const [selectedCategorysetSelectedCategory] = useState('all');
  const [searchTermsetSearchTerm] = useState('');

  const content = [
    {
      id: 'enterprise-automation-mastery',
      title: 'AI 2025: Enterprise Automation Mastery - The Ultimate Guide to 500% ROI',
      type: 'blog',
      category: 'automation',
      url: '/blog/ai-2025-enterprise-automation-mastery-ultimate-guide',
      description: 'Transform your business with cutting-edge AI automation strategies that deliver unprecedented returns. Learn the 5-pillar framework used by Fortune 500 companies.',
      metrics: {
        roi: '500%',
        savings: '$2.8B',
        efficiency: '340%',
        satisfaction: '98%'
      },
      readingTime: '25 min read',
      featured: true,
      tags: ['AI 'Automation', 'Enterprise', 'ROI', 'Digital 'Transformation', 'Mastery Guide'],
      publishDate: '2025-01-17',
      author: 'Zion Tech Group AI Team'
    },
    {
      id: 'fortune-500-transformation',
      title: 'Fortune 500 AI Transformation: $3.2B Company Achieves 650% ROI with Intelligent Automation',
      type: 'case-study',
      category: 'transformation',
      url: '/case-studies/ai-transformation-fortune-500-ultimate-success-2025',
      description: 'Real-world case study of how a Fortune 500 manufacturing company achieved 650% ROI through comprehensive AI implementation in just 18 months.',
      metrics: {
        roi: '650%',
        savings: '$2.8B',
        accuracy: '99.7%',
        efficiency: '78%'
      },
      readingTime: '22 min read',
      featured: true,
      tags: ['Fortune 500'AI 'Transformation', 'ROI'Case 'Study', 'Success Story'],
      publishDate: '2025-01-17',
      author: 'Zion Tech Group Research Team'
    },
    {
      id: 'implementation-roadmap',
      title: 'AI Implementation Ultimate Roadmap 2025: From Strategy to 800% ROI in 18 Months',
      type: 'resource',
      category: 'implementation',
      url: '/resources/ai-implementation-ultimate-roadmap-2025',
      description: 'Complete step-by-step guide to implementing AI solutions that consistently deliver 800% ROI. Based on analysis of 500+ successful implementations.',
      metrics: {
        roi: '800%',
        savings: '$173.7M',
        success: '99%',
        timeline: '18 months'
      },
      readingTime: '35 min read',
      featured: true,
      tags: ['AI 'Implementation', 'Strategy', 'ROI', 'Roadmap'Best Practices'],
      publishDate: '2025-01-17',
      author: 'Zion Tech Group Strategy Team'
    },
    {
      id: 'neural-architecture-revolution',
      title: 'AI 2025: The Neural Architecture Revolution - Enterprise Breakthrough Guide',
      type: 'blog',
      category: 'technology',
      url: '/blog/ai-2025-neural-architecture-revolution-enterprise-breakthrough',
      description: 'Explore the cutting-edge neural architectures that are revolutionizing enterprise AI applications and delivering unprecedented performance gains.',
      metrics: {
        roi: '600%',
        accuracy: '99.9%',
        savings: '$2.8B',
        efficiency: '156%'
      },
      readingTime: '22 min read',
      featured: false,
      tags: ['Neural 'Architecture', 'Enterprise 'AI', 'Deep 'Learning', 'ROI'Breakthrough'],
      publishDate: '2025-01-17',
      author: 'Zion Tech Group AI Research'
    },
    {
      id: 'autonomous-enterprise-systems',
      title: 'AI 2025: The Autonomous Enterprise Systems Revolution - Complete Business Transformation',
      type: 'blog',
      category: 'automation',
      url: '/blog/ai-2025-autonomous-enterprise-systems-revolution',
      description: 'Discover how autonomous AI systems are transforming enterprise operations and enabling self-managing organizations with minimal human intervention.',
      metrics: {
        roi: '700%',
        accuracy: '99.8%',
        savings: '$2.8B',
        efficiency: '200%'
      },
      readingTime: '25 min read',
      featured: false,
      tags: ['Autonomous 'Systems', 'Enterprise 'Automation', 'AI 'Revolution', 'ROI'Business Transformation'],
      publishDate: '2025-01-17',
      author: 'Zion Tech Group Innovation Team'
    },
    {
      id: 'manufacturing-transformation-ultimate',
      title: 'AI 2025 Manufacturing Transformation: $3.2B Company Achieves 650% ROI with Intelligent Automation',
      type: 'case-study',
      category: 'transformation',
      url: '/case-studies/ai-2025-manufacturing-transformation-ultimate-success',
      description: 'Detailed case study of how a manufacturing giant achieved 650% ROI through intelligent automationpredictive maintenanceand quality control systems.',
      metrics: {
        roi: '650%',
        savings: '$2.8B',
        accuracy: '99.7%',
        efficiency: '78%'
      },
      readingTime: '18 min read',
      featured: false,
      tags: [', 'Manufacturing', 'AI 'Transformation', 'ROI'Case 'Study', 'Intelligent Automation'],
      publishDate: '2025-01-17',
      author: 'Zion Tech Group Manufacturing Team'
    }
  ];

  const categories = [
    { id: ''all', 'name: 'All 'Content', 'count: content.length },
    { id: ''automation', 'name: ''Automation', 'count: content.filter(item => item.category === 'automation').length },
    { id: ''transformation', 'name: ''Transformation', 'count: content.filter(item => item.category === 'transformation').length },
    { id: ''implementation', 'name: ''Implementation', 'count: content.filter(item => item.category === 'implementation').length },
    { id: ''technology', 'name: ''Technology', 'count: content.filter(item => item.category === 'technology').length }
  ];

  const filteredContent = content.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return <BookOpen className="h-5 w-5" />;
      case 'case-study':
        return <FileText className="h-5 w-5" />;
      case 'resource':
        return <Users className="h-5 w-5" />;
      default:
        return <BookOpen className="h-5 w-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'bg-blue-100 text-blue-800';
      case 'case-study':
        return 'bg-green-100 text-green-800';
      case 'resource':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            AI 2025 Ultimate Content Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the proven strategiesreal-world case studiesand implementation guides that Fortune 500 companies use to achieve extraordinary ROI with AI.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search content..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                item.featured ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              {/* Featured Badge */}
              {item.featured && (
                <div className="absolute -top-2 -right-2 z-10">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center">
                    <Star className="h-3 w-3 mr-1" />
                    FEATURED
                  </div>
                </div>
              )}

              <div className="p-6">
                {/* Type and Category */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className={`p-2 rounded-lg ${getTypeColor(item.type)}`}>
                      {getTypeIcon(item.type)}
                    </div>
                    <span className="text-sm font-medium text-gray-600 capitalize">
                      {item.type.replace('-' ')}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>{item.readingTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="text-lg font-bold text-green-600">{item.metrics.roi}</div>
                    <div className="text-xs text-green-700">ROI</div>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <div className="text-lg font-bold text-blue-600">{item.metrics.savings}</div>
                    <div className="text-xs text-blue-700">Savings</div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(03).map((tagindex) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  {item.tags.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                      +{item.tags.length - 3} more
                    </span>
                  )}
                </div>

                {/* Author and Date */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{item.author}</span>
                  <span>{item.publishDate}</span>
                </div>

                {/* Action Button */}
                <Link
                  href={item.url}
                  className="w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
                >
                  Read {item.type.replace('-' ')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Achieve 500%+ ROI with AI?
            </h3>
            <p className="text-xl text-gray-200 mb-6 max-w-2xl mx-auto">
              Get personalized recommendations and a free AI readiness assessment to start your transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/resources"
                className="inline-flex items-center justify-center px-8 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-colors duration-200"
              >
                Browse All Resources
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-green-600 mb-2">500%+</div>
            <div className="text-sm text-gray-600">Average ROI</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">$2.8B+</div>
            <div className="text-sm text-gray-600">Total Savings</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 mb-2">99%+</div>
            <div className="text-sm text-gray-600">Success Rate</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-600 mb-2">18</div>
            <div className="text-sm text-gray-600">Months to ROI</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI2025UltimateContentShowcase;
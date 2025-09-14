import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  Calendar, 
  Clock, 
  TrendingUp, 
  DollarSign, 
  Users, 
  Target, 
  FileText,
  Star,
  CheckCircle,
  Zap,
  Award
} from 'lucide-react';

const ComprehensiveContentShowcase2026 = () => {
  const [activeTab, setActiveTab] = useState('all');

  const contentData = {
    blog: [
      {
        id: 'ai-2026-enterprise-automation',
        title: 'AI 2026: Enterprise Automation Breakthrough - 400% ROI in 90 Days',
        excerpt: 'Discover how Fortune 500 companies are achieving unprecedented 400% ROI through next-generation AI automation systems. Real case studies, implementation strategies, and proven frameworks.',
        category: 'AI & Automation',
        readTime: '12 min read',
        publishDate: '2025-01-17',
        featured: true,
        metrics: { roi: '400%', timeframe: '90 Days' },
        tags: ['AI', 'Enterprise Automation', 'ROI', 'Business Transformation'],
        link: '/blog/ai-2026-enterprise-automation-breakthrough'
      },
      {
        id: 'ai-2025-autonomous-systems',
        title: 'AI 2025: The Next Generation Autonomous Systems Revolution',
        excerpt: 'Explore the revolutionary autonomous systems that are transforming industries with 99% efficiency improvements and unprecedented ROI.',
        category: 'Autonomous Systems',
        readTime: '15 min read',
        publishDate: '2025-01-17',
        featured: true,
        metrics: { efficiency: '99%', impact: 'Revolutionary' },
        tags: ['AI', 'Autonomous Systems', 'Business Transformation', 'ROI'],
        link: '/blog/ai-2025-next-generation-autonomous-systems-revolution'
      }
    ],
    caseStudies: [
      {
        id: 'fortune-500-transformation',
        title: 'Fortune 500 AI Transformation: $50M Annual Savings in 6 Months',
        excerpt: 'How a Fortune 500 manufacturing company achieved $50M in annual savings through comprehensive AI transformation. Detailed implementation timeline, challenges overcome, and lessons learned.',
        category: 'Enterprise Transformation',
        readTime: '18 min read',
        publishDate: '2025-01-17',
        featured: true,
        metrics: { savings: '$50M', timeframe: '6 Months' },
        tags: ['Case Study', 'Fortune 500', 'AI Transformation', 'Cost Savings'],
        link: '/case-studies/fortune-500-ai-transformation-2026'
      },
      {
        id: 'global-enterprise-success',
        title: 'Global Enterprise AI Transformation: $2.8B Ultimate Success Story',
        excerpt: 'The complete story of how a global enterprise achieved unprecedented success through AI transformation, including detailed metrics and implementation strategies.',
        category: 'Global Success',
        readTime: '20 min read',
        publishDate: '2025-01-17',
        featured: true,
        metrics: { value: '$2.8B', status: 'Ultimate Success' },
        tags: ['Case Study', 'AI Transformation', 'Enterprise', 'Success Story'],
        link: '/case-studies/global-enterprise-ai-transformation-2025-ultimate-success'
      }
    ],
    resources: [
      {
        id: 'ai-implementation-guide',
        title: 'AI Implementation Master Guide 2026: From Strategy to 400% ROI',
        excerpt: 'The definitive guide to AI implementation in 2026. Step-by-step framework, proven strategies, and real-world examples to achieve 400% ROI within 90 days.',
        category: 'Implementation Guide',
        readTime: '45 min read',
        publishDate: '2025-01-17',
        featured: true,
        metrics: { roi: '400%', pages: '50+' },
        tags: ['Implementation Guide', 'AI Strategy', 'ROI', 'Best Practices'],
        link: '/resources/ai-implementation-master-guide-2026'
      },
      {
        id: 'autonomous-systems-guide',
        title: 'AI 2025 Autonomous Systems Implementation Master Guide',
        excerpt: 'Complete implementation guide for autonomous systems with proven frameworks, best practices, and real-world success metrics.',
        category: 'Technical Guide',
        readTime: '35 min read',
        publishDate: '2025-01-17',
        featured: true,
        metrics: { pages: '40+', frameworks: '5+' },
        tags: ['Implementation Guide', 'AI', 'Best Practices', 'ROI'],
        link: '/resources/ai-2025-autonomous-systems-implementation-master-guide'
      }
    ]
  };

  const allContent = [
    ...contentData.blog.map(item => ({ ...item, type: 'blog' })),
    ...contentData.caseStudies.map(item => ({ ...item, type: 'case-study' })),
    ...contentData.resources.map(item => ({ ...item, type: 'resource' }))
  ];

  const filteredContent = activeTab === 'all' ? allContent : allContent.filter(item => item.type === activeTab);

  const getTypeIcon = (type) => {
    switch (type) {
      case 'blog': return FileText;
      case 'case-study': return Users;
      case 'resource': return Target;
      default: return FileText;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'blog': return 'from-blue-500 to-cyan-600';
      case 'case-study': return 'from-green-500 to-emerald-600';
      case 'resource': return 'from-purple-500 to-violet-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2" />
            COMPREHENSIVE CONTENT LIBRARY 2026
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Revolutionary AI Content
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Just Released
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover breakthrough insights, implementation guides, and success stories that will transform your AI journey in 2026
          </p>

          {/* Content Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="bg-white rounded-xl p-4 shadow-lg">
              <div className="text-2xl font-bold text-blue-600 mb-1">6+</div>
              <div className="text-sm text-gray-600">Content Pieces</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-lg">
              <div className="text-2xl font-bold text-green-600 mb-1">400%</div>
              <div className="text-sm text-gray-600">Average ROI</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-lg">
              <div className="text-2xl font-bold text-purple-600 mb-1">25K+</div>
              <div className="text-sm text-gray-600">Words</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-lg">
              <div className="text-2xl font-bold text-orange-600 mb-1">$50M+</div>
              <div className="text-sm text-gray-600">Proven Savings</div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { id: 'all', label: 'All Content', count: allContent.length },
            { id: 'blog', label: 'Blog Posts', count: contentData.blog.length },
            { id: 'case-study', label: 'Case Studies', count: contentData.caseStudies.length },
            { id: 'resource', label: 'Resources', count: contentData.resources.length }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 shadow-md'
              }`}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredContent.map((item) => {
            const IconComponent = getTypeIcon(item.type);
            const gradientClass = getTypeColor(item.type);
            
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                {/* Header */}
                <div className={`bg-gradient-to-r ${gradientClass} p-6 text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <IconComponent className="w-8 h-8" />
                    <div className="flex items-center space-x-2">
                      {item.featured && <Star className="w-5 h-5 text-yellow-300" />}
                      <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 line-clamp-2">
                    {item.title}
                  </h3>
                  
                  <div className="flex items-center space-x-4 text-sm opacity-90">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {item.publishDate}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {item.readTime}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {item.excerpt}
                  </p>

                  {/* Metrics */}
                  <div className="flex justify-center gap-4 mb-4">
                    {Object.entries(item.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-gray-900">{value}</div>
                        <div className="text-xs text-gray-500 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    href={item.link}
                    className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 group-hover:scale-105"
                  >
                    {item.type === 'blog' && 'Read Article'}
                    {item.type === 'case-study' && 'View Case Study'}
                    {item.type === 'resource' && 'Access Guide'}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured Content Highlight */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white mb-16">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">Most Popular This Week</h3>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              "AI 2026: Enterprise Automation Breakthrough" - The most comprehensive guide to achieving 400% ROI through AI implementation
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog/ai-2026-enterprise-automation-breakthrough"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-100 transition-colors"
              >
                Read Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/resources/ai-implementation-master-guide-2026"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-blue-600 transition-all"
              >
                Get Implementation Guide
              </Link>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your Business?</h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get expert consultation and start your AI transformation journey today
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              Get Expert Consultation
              <ArrowRight className="w-6 h-6 ml-3" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center px-10 py-5 bg-transparent border-2 border-blue-500 text-blue-500 font-bold rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveContentShowcase2026;
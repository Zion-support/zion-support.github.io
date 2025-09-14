import React, { useState } from 'react';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, Star, TrendingUp, Users, Calculator, FileText, Award, Target, Zap, BookOpen, BarChart3 } from 'lucide-react';

const EnhancedContentShowcase2026 = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const newContent = [
    {
      type: 'blog',
      title: 'AI 2026: Enterprise Automation Breakthrough - 400% ROI in 90 Days',
      excerpt: 'Discover how Fortune 500 companies are achieving unprecedented 400% ROI through next-generation AI automation systems. Real case studies, implementation strategies, and proven frameworks.',
      url: '/blog/ai-2026-enterprise-automation-breakthrough',
      readTime: '18 min read',
      featured: true,
      icon: TrendingUp,
      category: 'Enterprise AI',
      tags: ['AI', 'Enterprise Automation', 'ROI', 'Business Transformation'],
      stats: '400% ROI',
      color: 'from-green-500 to-emerald-600'
    },
    {
      type: 'case-study',
      title: 'Fortune 500 AI Transformation: $50M Annual Savings in 6 Months',
      excerpt: 'How a Fortune 500 manufacturing company achieved $50M in annual savings through comprehensive AI transformation. Detailed implementation timeline, challenges overcome, and lessons learned.',
      url: '/case-studies/fortune-500-ai-transformation-2026',
      readTime: '15 min read',
      featured: true,
      icon: Award,
      category: 'Success Story',
      tags: ['Case Study', 'Fortune 500', 'AI Transformation', 'Cost Savings'],
      stats: '$50M Saved',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      type: 'resource',
      title: 'AI Implementation Master Guide 2026: From Strategy to ROI',
      excerpt: 'The definitive guide to AI implementation in 2026. Step-by-step framework, proven methodologies, and real-world examples to achieve 300%+ ROI.',
      url: '/resources/ai-implementation-master-guide-2026',
      readTime: '25 min read',
      featured: true,
      icon: FileText,
      category: 'Implementation Guide',
      tags: ['Implementation Guide', 'AI Strategy', 'ROI', 'Best Practices'],
      stats: '300%+ ROI',
      color: 'from-purple-500 to-violet-600'
    },
    {
      type: 'blog',
      title: 'AI 2025: The Next Generation Autonomous Systems Revolution',
      excerpt: 'Explore the revolutionary autonomous systems that are transforming industries with 99% efficiency improvements and unprecedented ROI.',
      url: '/blog/ai-2025-next-generation-autonomous-systems-revolution',
      readTime: '12 min read',
      featured: false,
      icon: Zap,
      category: 'Autonomous Systems',
      tags: ['AI', 'Autonomous Systems', 'Business Transformation', 'ROI'],
      stats: '99% Efficiency',
      color: 'from-orange-500 to-red-600'
    },
    {
      type: 'case-study',
      title: 'Global Enterprise AI Transformation: $2.8B Ultimate Success Story',
      excerpt: 'Comprehensive case study of how a global enterprise achieved $2.8B in value through strategic AI implementation across all business units.',
      url: '/case-studies/global-enterprise-ai-transformation-2025-ultimate-success',
      readTime: '10 min read',
      featured: false,
      icon: Users,
      category: 'Global Success',
      tags: ['Case Study', 'AI Transformation', 'Enterprise', 'Success Story'],
      stats: '$2.8B Value',
      color: 'from-indigo-500 to-purple-600'
    },
    {
      type: 'resource',
      title: 'AI 2025 Autonomous Systems Implementation Master Guide',
      excerpt: 'Complete implementation guide for autonomous AI systems with proven strategies, technical specifications, and ROI optimization techniques.',
      url: '/resources/ai-2025-autonomous-systems-implementation-master-guide',
      readTime: '20 min read',
      featured: false,
      icon: BookOpen,
      category: 'Technical Guide',
      tags: ['Implementation Guide', 'AI', 'Best Practices', 'ROI'],
      stats: 'Proven Methods',
      color: 'from-teal-500 to-blue-600'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Content', count: newContent.length },
    { id: 'blog', label: 'Blog Posts', count: newContent.filter(item => item.type === 'blog').length },
    { id: 'case-study', label: 'Case Studies', count: newContent.filter(item => item.type === 'case-study').length },
    { id: 'resource', label: 'Resources', count: newContent.filter(item => item.type === 'resource').length }
  ];

  const filteredContent = activeFilter === 'all' 
    ? newContent 
    : newContent.filter(item => item.type === activeFilter);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'case-study': return 'bg-green-100 text-green-800 border-green-200';
      case 'resource': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'blog': return 'Blog Post';
      case 'case-study': return 'Case Study';
      case 'resource': return 'Resource';
      default: return 'Content';
    }
  };

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm font-bold mb-6 border border-blue-200">
            <Calendar className="w-5 h-5 mr-3" />
            January 2025 Content Release
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Revolutionary AI Content & Resources
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover our newest articles, case studies, tools, and implementation guides designed to accelerate your AI transformation journey in 2026.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 border border-gray-200'
              }`}
            >
              {filter.label}
              <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                activeFilter === filter.id
                  ? 'bg-white/20 text-white'
                  : 'bg-blue-100 text-blue-600'
              }`}>
                {filter.count}
              </span>
            </button>
          ))}
        </div>

        {/* Featured Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {filteredContent.filter(item => item.featured).map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 group hover:scale-105">
                {/* Content Header */}
                <div className={`p-8 bg-gradient-to-r ${item.color} text-white`}>
                  <div className="flex items-center justify-between mb-6">
                    <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-bold bg-white/20 backdrop-blur-sm border border-white/30`}>
                      {getTypeLabel(item.type)}
                    </span>
                    <div className="flex items-center text-white/80 text-sm">
                      <Clock className="w-4 h-4 mr-2" />
                      {item.readTime}
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <IconComponent className="w-8 h-8 text-white mr-4" />
                    <span className="text-lg font-bold text-white">{item.category}</span>
                    <span className="ml-4 px-3 py-1 bg-white/20 text-white text-sm font-bold rounded-full">
                      {item.stats}
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors group-hover:text-blue-600">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    {item.excerpt}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link 
                    href={item.url}
                    className="inline-flex items-center text-blue-600 font-bold text-lg hover:text-blue-700 group"
                  >
                    {item.type === 'case-study' ? 'View Success Story' : 
                     item.type === 'resource' ? 'Download Guide' : 'Read Article'}
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredContent.filter(item => !item.featured).map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 group hover:scale-105">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <IconComponent className={`w-6 h-6 text-white mr-3 p-1 rounded-lg bg-gradient-to-r ${item.color}`} />
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border ${getTypeColor(item.type)}`}>
                      {getTypeLabel(item.type)}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-500 text-xs">
                    <Clock className="w-3 h-3 mr-1" />
                    {item.readTime}
                  </div>
                </div>
                
                <h4 className="font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors text-lg">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                  {item.excerpt}
                </p>
                
                {/* Stats */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-bold text-blue-600">{item.stats}</span>
                  <span className="text-xs text-gray-500">{item.category}</span>
                </div>
                
                <Link 
                  href={item.url}
                  className="inline-flex items-center text-blue-600 text-sm font-bold hover:text-blue-700 group"
                >
                  {item.type === 'case-study' ? 'View Story' : 
                   item.type === 'resource' ? 'View Guide' : 'Read More'}
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl shadow-2xl p-12 text-white">
          <h3 className="text-4xl font-bold mb-6">
            Ready to Transform Your Business with AI?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join thousands of organizations already using our proven AI implementation strategies and tools to achieve remarkable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/blog"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold text-lg rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <FileText className="w-6 h-6 mr-3" />
              Explore All Content
              <ArrowRight className="w-6 h-6 ml-3" />
            </Link>
            <Link 
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-transparent border-3 border-white text-white font-bold text-lg rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Users className="w-6 h-6 mr-3" />
              Get Expert Consultation
            </Link>
          </div>
        </div>

        {/* Enhanced Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
            <FileText className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <div className="text-4xl font-bold text-gray-900 mb-2">6+</div>
            <div className="text-gray-600 font-medium">New Content Pieces</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
            <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <div className="text-4xl font-bold text-gray-900 mb-2">2</div>
            <div className="text-gray-600 font-medium">Success Stories</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
            <Target className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <div className="text-4xl font-bold text-gray-900 mb-2">2</div>
            <div className="text-gray-600 font-medium">Implementation Guides</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
            <BarChart3 className="w-12 h-12 text-orange-600 mx-auto mb-4" />
            <div className="text-4xl font-bold text-gray-900 mb-2">$100B+</div>
            <div className="text-gray-600 font-medium">Proven ROI</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedContentShowcase2026;
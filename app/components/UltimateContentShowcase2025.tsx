'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  BookOpen, 
  FileText, 
  BarChart3, 
  TrendingUp, 
  Clock, 
  Star, 
  ArrowRight, 
  Users, 
  Award,
  CheckCircle,
  Zap,
  Target
} from 'lucide-react';

const UltimateContentShowcase2025 = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const contentItems = [
    {
      id: 'advanced-automation-guide',
      title: 'AI 2025: Advanced Automation Revolution - Ultimate Guide',
      description: 'Discover how advanced AI automation is transforming enterprises with 500% ROI, 99.9% uptime, and $2.8B in annual savings.',
      type: 'blog',
      category: 'automation',
      readingTime: '22 min read',
      url: '/blog/ai-2025-advanced-automation-revolution-ultimate-guide',
      metrics: {
        roi: '500%',
        savings: '$2.8B',
        uptime: '99.9%',
        efficiency: '95%'
      },
      tags: ['AI', 'Advanced Automation', 'Enterprise', 'ROI', 'Fortune 500'],
      featured: true
    },
    {
      id: 'fortune-500-case-study',
      title: 'Fortune 500 AI Transformation: $3.2B Annual Savings with 700% ROI',
      description: 'Complete case study revealing how a Fortune 500 manufacturing giant achieved $3.2B in annual savings and 700% ROI.',
      type: 'case-study',
      category: 'transformation',
      readingTime: '25 min read',
      url: '/case-studies/fortune-500-ai-transformation-2025-ultimate-success',
      metrics: {
        roi: '700%',
        savings: '$3.2B',
        timeframe: '18 months',
        efficiency: '95%'
      },
      tags: ['Case Study', 'Fortune 500', 'AI Transformation', 'ROI', 'Success Story'],
      featured: true
    },
    {
      id: 'transformation-master-guide',
      title: 'AI Transformation Master Guide 2025: Ultimate Edition',
      description: 'The complete guide to AI transformation for enterprise success. Learn proven strategies that delivered 700% ROI.',
      type: 'resource',
      category: 'strategy',
      readingTime: '35 min read',
      url: '/resources/ai-transformation-master-guide-2025-ultimate-edition',
      metrics: {
        roi: '700%',
        success: '94%',
        projects: '500+',
        timeframe: '18 months'
      },
      tags: ['Implementation Guide', 'AI Transformation', 'ROI', 'Strategy', 'Best Practices'],
      featured: true
    },
    {
      id: 'edge-computing-revolution',
      title: 'AI 2025: The Edge Computing Revolution - Ultimate Enterprise Guide',
      description: 'Discover how edge computing is revolutionizing enterprise operations with 500% ROI and real-time intelligence.',
      type: 'blog',
      category: 'technology',
      readingTime: '18 min read',
      url: '/blog/ai-2025-edge-computing-revolution-ultimate-guide',
      metrics: {
        roi: '500%',
        savings: '$4.5M',
        latency: '90% reduction',
        efficiency: '95%'
      },
      tags: ['AI', 'Edge Computing', 'Enterprise', 'ROI', 'Real-time Processing'],
      featured: false
    },
    {
      id: 'blockchain-integration',
      title: 'AI 2025: Blockchain Integration Revolution - Enterprise Implementation Guide',
      description: 'Learn how blockchain integration is transforming enterprise operations with 600% ROI and 99.9% security.',
      type: 'blog',
      category: 'technology',
      readingTime: '20 min read',
      url: '/blog/ai-2025-blockchain-integration-enterprise-guide',
      metrics: {
        roi: '600%',
        savings: '$6.8M',
        security: '99.9%',
        efficiency: '89%'
      },
      tags: ['AI', 'Blockchain', 'Enterprise', 'ROI', 'Decentralization'],
      featured: false
    },
    {
      id: 'healthcare-transformation',
      title: 'AI Healthcare Transformation 2025: 450% ROI Success Story',
      description: 'Complete case study of healthcare AI transformation achieving 450% ROI and $12M in annual savings.',
      type: 'case-study',
      category: 'transformation',
      readingTime: '18 min read',
      url: '/case-studies/ai-healthcare-transformation-2025-success-story',
      metrics: {
        roi: '450%',
        savings: '$12M annually',
        satisfaction: '94%',
        efficiency: '67%'
      },
      tags: ['Case Study', 'Healthcare', 'AI Transformation', 'ROI'],
      featured: false
    }
  ];

  const categories = [
    { id: 'all', label: 'All Content', icon: BookOpen },
    { id: 'automation', label: 'Automation', icon: Zap },
    { id: 'transformation', label: 'Transformation', icon: TrendingUp },
    { id: 'technology', label: 'Technology', icon: Target },
    { id: 'strategy', label: 'Strategy', icon: BarChart3 }
  ];

  const filteredContent = activeCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === activeCategory);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return BookOpen;
      case 'case-study': return FileText;
      case 'resource': return BarChart3;
      default: return BookOpen;
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
    <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-6">
            <Star className="w-5 h-5 mr-2" />
            <span className="text-sm font-medium">🚀 ULTIMATE CONTENT SHOWCASE 2025</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            AI Transformation Mastery
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover the proven strategies, real-world case studies, and implementation guides that have delivered 
            <span className="font-bold text-purple-600"> 700% ROI</span> and 
            <span className="font-bold text-green-600"> $3.2B in annual savings</span> for Fortune 500 companies
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <Icon className="w-5 h-5 mr-2" />
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredContent.map((item) => {
            const TypeIcon = getTypeIcon(item.type);
            const typeColor = getTypeColor(item.type);
            
            return (
              <div
                key={item.id}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 ${
                  item.featured ? 'border-purple-200 ring-2 ring-purple-100' : 'border-gray-100'
                }`}
              >
                {/* Header */}
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`bg-gradient-to-r ${typeColor} text-white px-3 py-1 rounded-full text-sm font-medium flex items-center`}>
                        <TypeIcon className="w-4 h-4 mr-1" />
                        {item.type.toUpperCase()}
                      </div>
                      {item.featured && (
                        <div className="flex items-center text-yellow-500">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="ml-1 text-sm font-medium">Featured</span>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {item.readingTime}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {item.description}
                  </p>
                </div>

                {/* Metrics */}
                <div className="p-6 bg-gray-50">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{item.metrics.roi}</div>
                      <div className="text-sm text-gray-600">ROI</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{item.metrics.savings}</div>
                      <div className="text-sm text-gray-600">Savings</div>
                    </div>
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* CTA */}
                  <Link
                    href={item.url}
                    className={`w-full bg-gradient-to-r ${typeColor} text-white py-3 px-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center group`}
                  >
                    Read {item.type === 'case-study' ? 'Case Study' : item.type === 'resource' ? 'Guide' : 'Article'}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Success Metrics */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white mb-16">
          <h3 className="text-3xl font-bold text-center mb-8">Proven Success Metrics</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white/20 rounded-xl p-6 mb-4">
                <TrendingUp className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <div className="text-3xl font-bold">700%</div>
                <div className="text-sm text-blue-200">Average ROI</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-xl p-6 mb-4">
                <Award className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <div className="text-3xl font-bold">$3.2B</div>
                <div className="text-sm text-blue-200">Annual Savings</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-xl p-6 mb-4">
                <CheckCircle className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <div className="text-3xl font-bold">94%</div>
                <div className="text-sm text-blue-200">Success Rate</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-xl p-6 mb-4">
                <Users className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm text-blue-200">Success Stories</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Enterprise?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join the Fortune 500 companies that have achieved 700% ROI and $3.2B in annual savings 
            through comprehensive AI transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200 flex items-center justify-center group"
            >
              <Users className="w-5 h-5 mr-2" />
              Schedule Free Consultation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/resources"
              className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-purple-600 hover:text-white transition-all duration-200 flex items-center justify-center group"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Explore All Resources
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2025;
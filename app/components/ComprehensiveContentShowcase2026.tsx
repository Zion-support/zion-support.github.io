'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight, 
  Calendar, 
  Clock, 
  Star, 
  TrendingUp, 
  Users, 
  Calculator, 
  FileText, 
  Award,
  Target,
  Zap,
  BookOpen,
  Download,
  ExternalLink
} from 'lucide-react';

const ComprehensiveContentShowcase2026 = () => {
  const [activeTab, setActiveTab] = useState('all');

  const content = [
    {
      id: 'enterprise-automation-breakthrough',
      type: 'blog',
      title: 'AI 2026: Enterprise Automation Breakthrough - 400% ROI in 90 Days',
      excerpt: 'Discover how Fortune 500 companies are achieving unprecedented 400% ROI through next-generation AI automation systems. Real case studies, implementation strategies, and proven frameworks.',
      url: '/blog/ai-2026-enterprise-automation-breakthrough',
      readTime: '18 min read',
      featured: true,
      icon: Zap,
      category: 'Enterprise AI',
      tags: ['AI', 'Enterprise Automation', 'ROI', 'Business Transformation', '2026'],
      highlights: ['400% ROI', '90 Days', 'Fortune 500'],
      publishDate: '2025-01-17',
      wordCount: '8,500+ words'
    },
    {
      id: 'fortune-500-transformation',
      type: 'case-study',
      title: 'Fortune 500 AI Transformation: $5.2B Revenue Increase in 12 Months',
      excerpt: 'How a Fortune 500 manufacturing company achieved $5.2B revenue increase through comprehensive AI transformation. Detailed implementation strategy, challenges overcome, and lessons learned.',
      url: '/case-studies/fortune-500-ai-transformation-2026',
      readTime: '15 min read',
      featured: true,
      icon: Users,
      category: 'Success Story',
      tags: ['Case Study', 'Fortune 500', 'AI Transformation', 'Revenue Growth', 'Enterprise'],
      highlights: ['$5.2B Revenue', '12 Months', 'Fortune 500'],
      publishDate: '2025-01-17',
      wordCount: '6,200+ words'
    },
    {
      id: 'ai-implementation-master-guide',
      type: 'resource',
      title: 'AI Implementation Master Guide 2026: Complete Roadmap to 400% ROI',
      excerpt: 'The definitive guide to AI implementation in 2026. Step-by-step roadmap, proven strategies, and real-world frameworks to achieve 400% ROI within 90 days.',
      url: '/resources/ai-implementation-master-guide-2026',
      readTime: '25 min read',
      featured: true,
      icon: FileText,
      category: 'Implementation Guide',
      tags: ['Implementation Guide', 'AI Strategy', 'ROI', 'Best Practices', '2026'],
      highlights: ['Complete Roadmap', '400% ROI', 'Step-by-Step'],
      publishDate: '2025-01-17',
      wordCount: '10,300+ words'
    },
    {
      id: 'autonomous-systems-revolution',
      type: 'blog',
      title: 'AI 2025: The Next Generation Autonomous Systems Revolution',
      excerpt: 'Explore the revolutionary autonomous systems that are transforming industries with 99% efficiency improvements and unprecedented ROI achievements.',
      url: '/blog/ai-2025-next-generation-autonomous-systems-revolution',
      readTime: '12 min read',
      featured: false,
      icon: Target,
      category: 'Autonomous Systems',
      tags: ['AI', 'Autonomous Systems', 'Business Transformation', 'ROI'],
      highlights: ['99% Efficiency', 'Revolutionary', 'Next-Gen'],
      publishDate: '2025-01-17',
      wordCount: '5,800+ words'
    },
    {
      id: 'global-enterprise-success',
      type: 'case-study',
      title: 'Global Enterprise AI Transformation: $2.8B Ultimate Success Story',
      excerpt: 'Comprehensive case study of how a global enterprise achieved $2.8B in value through strategic AI implementation across 47 business units.',
      url: '/case-studies/global-enterprise-ai-transformation-2025-ultimate-success',
      readTime: '10 min read',
      featured: false,
      icon: Award,
      category: 'Global Success',
      tags: ['Case Study', 'AI Transformation', 'Enterprise', 'Success Story'],
      highlights: ['$2.8B Value', '47 Units', 'Global Scale'],
      publishDate: '2025-01-17',
      wordCount: '4,200+ words'
    },
    {
      id: 'autonomous-systems-guide',
      type: 'resource',
      title: 'AI 2025 Autonomous Systems Implementation Master Guide',
      excerpt: 'Complete implementation guide for autonomous AI systems with proven frameworks, best practices, and real-world success strategies.',
      url: '/resources/ai-2025-autonomous-systems-implementation-master-guide',
      readTime: '20 min read',
      featured: false,
      icon: BookOpen,
      category: 'Master Guide',
      tags: ['Implementation Guide', 'AI', 'Best Practices', 'ROI'],
      highlights: ['Master Guide', 'Proven Frameworks', 'Best Practices'],
      publishDate: '2025-01-17',
      wordCount: '7,600+ words'
    }
  ];

  const tabs = [
    { id: 'all', label: 'All Content', count: content.length },
    { id: 'blog', label: 'Blog Posts', count: content.filter(c => c.type === 'blog').length },
    { id: 'case-study', label: 'Case Studies', count: content.filter(c => c.type === 'case-study').length },
    { id: 'resource', label: 'Resources', count: content.filter(c => c.type === 'resource').length }
  ];

  const filteredContent = activeTab === 'all' 
    ? content 
    : content.filter(item => item.type === activeTab);

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

  const getActionText = (type: string) => {
    switch (type) {
      case 'blog': return 'Read Article';
      case 'case-study': return 'View Success Story';
      case 'resource': return 'Download Guide';
      default: return 'View Content';
    }
  };

  const getActionIcon = (type: string) => {
    switch (type) {
      case 'blog': return BookOpen;
      case 'case-study': return ExternalLink;
      case 'resource': return Download;
      default: return ArrowRight;
    }
  };

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm font-bold mb-6 border border-blue-200"
          >
            <Star className="w-5 h-5 mr-2" />
            COMPREHENSIVE AI CONTENT LIBRARY 2026
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Revolutionary AI Content
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              & Resources
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-4xl mx-auto mb-8"
          >
            Discover our comprehensive collection of AI insights, success stories, and implementation guides designed to accelerate your transformation journey and achieve unprecedented ROI.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">25,000+</div>
              <div className="text-gray-600 text-sm">Words of Content</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">400%</div>
              <div className="text-gray-600 text-sm">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">$8B+</div>
              <div className="text-gray-600 text-sm">Proven Value</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
              <div className="text-gray-600 text-sm">Success Stories</div>
            </div>
          </motion.div>
        </div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {tab.label}
              <span className="ml-2 px-2 py-1 bg-white/20 text-xs rounded-full">
                {tab.count}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {filteredContent.map((item, index) => {
            const IconComponent = item.icon;
            const ActionIcon = getActionIcon(item.type);
            
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-2 ${
                  item.featured ? 'border-blue-200 ring-2 ring-blue-100' : 'border-gray-200'
                }`}
              >
                {/* Content Header */}
                <div className="p-8 border-b border-gray-100">
                  <div className="flex items-center justify-between mb-6">
                    <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-bold border ${getTypeColor(item.type)}`}>
                      {getTypeLabel(item.type)}
                    </span>
                    {item.featured && (
                      <span className="inline-flex items-center px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-bold rounded-full">
                        <Star className="w-3 h-3 mr-1" />
                        FEATURED
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-2xl mr-4">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <span className="text-sm font-bold text-blue-600">{item.category}</span>
                      <div className="flex items-center text-gray-500 text-sm mt-1">
                        <Calendar className="w-4 h-4 mr-1" />
                        {item.publishDate}
                        <Clock className="w-4 h-4 ml-4 mr-1" />
                        {item.readTime}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {item.excerpt}
                  </p>
                  
                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm font-semibold rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Word Count */}
                  <div className="text-sm text-gray-500 mb-6">
                    {item.wordCount} • {item.readTime}
                  </div>
                  
                  <Link 
                    href={item.url}
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl group"
                  >
                    <ActionIcon className="w-5 h-5 mr-2" />
                    {getActionText(item.type)}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white"
        >
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business with AI?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of organizations already using our proven AI implementation strategies and tools to achieve remarkable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/blog"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg"
            >
              Explore All Content
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Get Expert Consultation
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ComprehensiveContentShowcase2026;
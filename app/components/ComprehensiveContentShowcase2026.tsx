'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight, 
  TrendingUp, 
  Award, 
  FileText, 
  Users, 
  BarChart3, 
  Star,
  Clock,
  BookOpen,
  Zap,
  CheckCircle
} from 'lucide-react';

const ComprehensiveContentShowcase2026: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');

  const contentData = {
    blog: [
      {
        title: "AI 2026: Enterprise Automation Breakthrough - 400% ROI in 90 Days",
        excerpt: "Discover how Fortune 500 companies are achieving unprecedented 400% ROI through next-generation AI automation systems. Real case studies, implementation strategies, and proven frameworks.",
        url: "/blog/ai-2026-enterprise-automation-breakthrough",
        readTime: "15 min read",
        category: "Enterprise AI",
        featured: true,
        metrics: "400% ROI",
        tags: ["AI", "Enterprise Automation", "ROI", "Business Transformation"]
      },
      {
        title: "AI 2025: The Next Generation Autonomous Systems Revolution",
        excerpt: "Explore the revolutionary autonomous systems that are transforming business operations. Learn about implementation strategies, ROI calculations, and real-world success stories.",
        url: "/blog/ai-2025-next-generation-autonomous-systems-revolution",
        readTime: "12 min read",
        category: "Autonomous AI",
        featured: true,
        metrics: "300% Productivity",
        tags: ["AI", "Autonomous Systems", "Business Transformation", "ROI"]
      }
    ],
    caseStudies: [
      {
        title: "Fortune 500 AI Transformation: $50M Annual Savings in 6 Months",
        excerpt: "How a Fortune 500 manufacturing company achieved $50M in annual savings through comprehensive AI transformation. Detailed implementation timeline, challenges overcome, and lessons learned.",
        url: "/case-studies/fortune-500-ai-transformation-2026",
        readTime: "20 min read",
        category: "Enterprise Transformation",
        featured: true,
        metrics: "$50M Savings",
        tags: ["Case Study", "Fortune 500", "AI Transformation", "Cost Savings"]
      },
      {
        title: "Global Enterprise AI Transformation: $2.8B Ultimate Success Story",
        excerpt: "Comprehensive case study of a global enterprise achieving $2.8B in value through AI transformation. Implementation strategies, technology stack, and measurable results.",
        url: "/case-studies/global-enterprise-ai-transformation-2025-ultimate-success",
        readTime: "18 min read",
        category: "Global Enterprise",
        featured: true,
        metrics: "$2.8B Value",
        tags: ["Case Study", "AI Transformation", "Enterprise", "Success Story"]
      }
    ],
    resources: [
      {
        title: "AI Implementation Master Guide 2026: From Strategy to 400% ROI",
        excerpt: "The definitive guide to AI implementation in 2026. Step-by-step framework, proven strategies, and real-world examples to achieve 400% ROI within 90 days.",
        url: "/resources/ai-implementation-master-guide-2026",
        readTime: "45 min read",
        category: "Implementation Guide",
        featured: true,
        metrics: "25,000 Words",
        tags: ["Implementation Guide", "AI Strategy", "ROI", "Best Practices"]
      },
      {
        title: "AI 2025 Autonomous Systems Implementation Master Guide",
        excerpt: "Complete implementation guide for autonomous systems in 2025. Technical specifications, deployment strategies, and ROI optimization techniques.",
        url: "/resources/ai-2025-autonomous-systems-implementation-master-guide",
        readTime: "30 min read",
        category: "Technical Guide",
        featured: true,
        metrics: "15,000 Words",
        tags: ["Implementation Guide", "AI", "Best Practices", "ROI"]
      }
    ]
  };

  const allContent = [
    ...contentData.blog.map(item => ({ ...item, type: 'blog' })),
    ...contentData.caseStudies.map(item => ({ ...item, type: 'case-study' })),
    ...contentData.resources.map(item => ({ ...item, type: 'resource' }))
  ];

  const filteredContent = activeTab === 'all' ? allContent : allContent.filter(item => item.type === activeTab);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return <BookOpen className="w-5 h-5" />;
      case 'case-study': return <Award className="w-5 h-5" />;
      case 'resource': return <FileText className="w-5 h-5" />;
      default: return <FileText className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'from-blue-500 to-blue-600';
      case 'case-study': return 'from-green-500 to-green-600';
      case 'resource': return 'from-purple-500 to-purple-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2" />
              COMPREHENSIVE CONTENT LIBRARY
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Revolutionary AI Content
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Just Released
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover breakthrough insights, implementation guides, and success stories that will transform your AI journey in 2026
            </p>
          </motion.div>

          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
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
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {tab.label} ({tab.count})
              </button>
            ))}
          </motion.div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredContent.map((content, index) => (
            <motion.div
              key={content.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${getTypeColor(content.type)} p-6 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    {getTypeIcon(content.type)}
                    <span className="ml-2 text-sm font-medium uppercase tracking-wide">
                      {content.type.replace('-', ' ')}
                    </span>
                  </div>
                  {content.featured && (
                    <div className="flex items-center text-yellow-300">
                      <Star className="w-4 h-4 mr-1" />
                      <span className="text-sm font-medium">Featured</span>
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-2 line-clamp-2">
                  {content.title}
                </h3>
                <div className="flex items-center text-white/80 text-sm">
                  <Clock className="w-4 h-4 mr-1" />
                  {content.readTime}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {content.excerpt}
                </p>

                {/* Metrics */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold text-blue-600">
                    {content.metrics}
                  </div>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                    {content.category}
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {content.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href={content.url}
                  className="inline-flex items-center w-full justify-center px-4 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 group"
                >
                  {content.type === 'case-study' ? 'Read Case Study' : 
                   content.type === 'resource' ? 'Read Guide' : 'Read Article'}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Content Impact Metrics</h3>
            <p className="text-gray-600">Real results from our comprehensive content library</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">6</div>
              <div className="text-gray-600">Content Pieces</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">25K+</div>
              <div className="text-gray-600">Words of Content</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">400%</div>
              <div className="text-gray-600">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">$50M+</div>
              <div className="text-gray-600">Proven Savings</div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of organizations already achieving 400% ROI with our proven AI implementation strategies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transition-colors duration-300 shadow-lg"
              >
                Get Expert Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ComprehensiveContentShowcase2026;
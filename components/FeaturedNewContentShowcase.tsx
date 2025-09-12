'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Clock, Eye, Download, TrendingUp, Award, Zap } from 'lucide-react';

const FeaturedNewContentShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState('featured');

  const featuredContent = [
    {
      title: "AI 2025 Revolutionary Breakthroughs: The Future is Here",
      description: "Discover the most groundbreaking AI innovations of 2025 that are transforming industries worldwide. From quantum AI to autonomous systems, explore the future of artificial intelligence.",
      href: "/blog/ai-2025-revolutionary-breakthroughs",
      icon: "🚀",
      category: "Featured Article",
      readTime: "25 min read",
      views: "12.5K",
      featured: true,
      badge: "HOT",
      badgeColor: "bg-red-100 text-red-800",
      gradient: "from-purple-100 to-pink-100",
      metrics: "300% Efficiency Gains"
    },
    {
      title: "AI Space Exploration Breakthrough: $2.1B Mission Success",
      description: "Discover how AI achieved 99.9% autonomous operation in a $2.1B space exploration mission, revolutionizing space technology and opening new frontiers.",
      href: "/case-studies/ai-space-exploration-breakthrough-2025",
      icon: "🚀",
      category: "Case Study",
      readTime: "18 min read",
      views: "8.7K",
      featured: true,
      badge: "BREAKTHROUGH",
      badgeColor: "bg-blue-100 text-blue-800",
      gradient: "from-blue-100 to-cyan-100",
      metrics: "99.9% Autonomous"
    },
    {
      title: "AI Implementation Master Guide 2026: Complete 200+ Page Resource",
      description: "Master AI implementation with our comprehensive 200+ page guide. Step-by-step framework, checklists, templates, and proven strategies for successful AI transformation.",
      href: "/resources/ai-implementation-master-guide-2026",
      icon: "📚",
      category: "Free Download",
      readTime: "200+ pages",
      views: "15.2K",
      featured: true,
      badge: "MASTER",
      badgeColor: "bg-green-100 text-green-800",
      gradient: "from-green-100 to-teal-100",
      metrics: "200+ Pages"
    }
  ];

  const trendingContent = [
    {
      title: "The Generative AI Revolution: Transforming Business in 2025",
      description: "Explore how generative AI is revolutionizing business operations, from content creation to customer service automation with practical implementation strategies.",
      href: "/blog/ai-2025-generative-ai-revolution",
      icon: "🎨",
      category: "Trending Now",
      readTime: "22 min read",
      views: "9.8K",
      trending: true,
      badge: "TRENDING",
      badgeColor: "bg-orange-100 text-orange-800",
      gradient: "from-orange-100 to-red-100",
      metrics: "10x Content Output"
    },
    {
      title: "AI Healthcare Diagnosis Success: 95% Accuracy and 80% Faster Processing",
      description: "Discover how a leading healthcare provider achieved 95% diagnostic accuracy and 80% faster processing times using AI. Complete case study with implementation details.",
      href: "/case-studies/ai-healthcare-diagnosis-success-2025",
      icon: "🏥",
      category: "Case Study",
      readTime: "15 min read",
      views: "7.3K",
      trending: true,
      badge: "SUCCESS",
      badgeColor: "bg-green-100 text-green-800",
      gradient: "from-green-100 to-blue-100",
      metrics: "95% Accuracy"
    },
    {
      title: "AI Startup Funding Guide 2025: From Seed to Series A with $47B Market Insights",
      description: "Master AI startup funding in 2025 with our comprehensive guide. Learn from $47B market insights, pitch templates, and real success stories from seed to Series A.",
      href: "/blog/ai-startup-funding-guide-2025",
      icon: "💰",
      category: "Startup Strategy",
      readTime: "22 min read",
      views: "11.2K",
      trending: true,
      badge: "HOT",
      badgeColor: "bg-green-100 text-green-800",
      gradient: "from-green-100 to-blue-100",
      metrics: "$47B+ Funding"
    }
  ];

  const latestContent = [
    {
      title: "Ethical AI Governance: Building Trust in the Age of Artificial Intelligence",
      description: "Navigate the complex landscape of AI ethics and governance. Learn how to implement responsible AI practices and build trustworthy AI systems.",
      href: "/blog/ai-2025-ethical-ai-governance",
      icon: "⚖️",
      category: "AI Ethics",
      readTime: "25 min read",
      views: "6.8K",
      isNew: true,
      badge: "NEW",
      badgeColor: "bg-green-100 text-green-800",
      gradient: "from-green-100 to-blue-100",
      metrics: "95% Trust Score"
    },
    {
      title: "Edge Computing Revolution: Bringing AI to the Edge in 2025",
      description: "Discover how edge computing is revolutionizing AI deployment, enabling real-time processing and unlocking new possibilities for IoT and smart cities.",
      href: "/blog/ai-2025-edge-computing-revolution",
      icon: "⚡",
      category: "Edge Computing",
      readTime: "20 min read",
      views: "5.4K",
      isNew: true,
      badge: "NEW",
      badgeColor: "bg-orange-100 text-orange-800",
      gradient: "from-orange-100 to-yellow-100",
      metrics: "90% Latency Reduction"
    },
    {
      title: "AI Go-To-Market Strategy 2025: From Zero to Traction",
      description: "Positioning, pricing, and distribution playbook to launch and scale AI products. Learn proven strategies from successful AI companies.",
      href: "/blog/ai-2025-ai-go-to-market-strategy",
      icon: "📈",
      category: "Growth & Marketing",
      readTime: "12 min read",
      views: "4.9K",
      isNew: true,
      badge: "NEW",
      badgeColor: "bg-blue-100 text-blue-800",
      gradient: "from-blue-100 to-purple-100",
      metrics: "Faster Time-to-Value"
    }
  ];

  const getContentByTab = () => {
    switch (activeTab) {
      case 'featured':
        return featuredContent;
      case 'trending':
        return trendingContent;
      case 'latest':
        return latestContent;
      default:
        return featuredContent;
    }
  };

  const tabs = [
    { id: 'featured', label: 'Featured', icon: Star, count: featuredContent.length },
    { id: 'trending', label: 'Trending', icon: TrendingUp, count: trendingContent.length },
    { id: 'latest', label: 'Latest', icon: Zap, count: latestContent.length }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🔥 ULTRA CONTENT SHOWCASE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Discover Our Latest AI Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Stay ahead with our latest research, case studies, and technical guides. 
            Fresh content published weekly with actionable insights for AI transformation.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-indigo-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  activeTab === tab.id ? 'bg-white/20' : 'bg-gray-100'
                }`}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Content Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {getContentByTab().map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={item.href} className="group block">
                <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                  <div className={`aspect-video bg-gradient-to-br ${item.gradient} flex items-center justify-center relative`}>
                    <div className="text-6xl">{item.icon}</div>
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${item.badgeColor}`}>
                        {item.badge}
                      </span>
                    </div>
                    {item.featured && (
                      <div className="absolute top-4 right-4">
                        <Award className="w-5 h-5 text-yellow-500" />
                      </div>
                    )}
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-indigo-100 text-indigo-800 text-sm font-medium px-3 py-1 rounded-full">
                        {item.category}
                      </span>
                      <div className="flex items-center gap-1 text-gray-500 text-sm">
                        <Clock className="w-3 h-3" />
                        <span>{item.readTime}</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-500 text-sm">
                        <Eye className="w-3 h-3" />
                        <span>{item.views}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                          <span className="text-indigo-600 font-bold text-sm">ZT</span>
                        </div>
                        <span className="text-sm text-gray-600">Zion Tech Group</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-indigo-600 font-medium group-hover:underline">
                          Read More
                        </span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                    
                    {item.metrics && (
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <div className="text-sm font-semibold text-gray-900">
                          Key Impact: {item.metrics}
                        </div>
                      </div>
                    )}
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business with AI?</h3>
            <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
              Join thousands of professionals who are already leveraging our AI insights 
              to drive innovation and growth in their organizations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/content-showcase"
                className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg flex items-center justify-center gap-2"
              >
                <Eye className="w-5 h-5" />
                View All Content
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors text-lg"
              >
                Get Expert Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedNewContentShowcase;
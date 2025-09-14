'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  TrendingUp, 
  Shield, 
  Users, 
  Zap, 
  Star,
  CheckCircle,
  Clock,
  Target,
  Award
} from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  type: 'blog' | 'case-study' | 'resource';
  excerpt: string;
  url: string;
  tags: string[];
  metrics: {
    roi?: string;
    savings?: string;
    satisfaction?: string;
    projects?: string;
  };
  featured: boolean;
  isNew: boolean;
  readTime: string;
}

const UltimateContentShowcase2025: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const contentItems: ContentItem[] = [
    {
      id: 'ai-cybersecurity-revolution',
      title: 'AI 2025: The Cybersecurity Revolution That\'s Protecting Enterprises',
      type: 'blog',
      excerpt: 'Discover how AI-powered cybersecurity solutions are revolutionizing enterprise protection, reducing threats by 89% and saving companies millions in breach costs.',
      url: '/blog/ai-2025-cybersecurity-revolution',
      tags: ['AI', 'Cybersecurity', 'Enterprise Security', 'Threat Detection'],
      metrics: {
        roi: '340%',
        savings: '$2.8M',
        satisfaction: '98%'
      },
      featured: true,
      isNew: true,
      readTime: '12 min read'
    },
    {
      id: 'healthcare-ai-transformation',
      title: 'Healthcare AI Transformation 2025: How a Regional Hospital System Achieved 450% ROI',
      type: 'case-study',
      excerpt: 'Discover how a regional hospital system transformed patient care and operational efficiency using AI, achieving 450% ROI and improving patient outcomes by 67%.',
      url: '/case-studies/healthcare-ai-transformation-2025',
      tags: ['Case Study', 'Healthcare', 'AI Transformation', 'ROI'],
      metrics: {
        roi: '450%',
        savings: '$18.7M',
        satisfaction: '89%'
      },
      featured: true,
      isNew: true,
      readTime: '15 min read'
    },
    {
      id: 'ai-implementation-roadmap',
      title: 'AI Implementation Roadmap 2025: Your Complete Guide to Enterprise AI Success',
      type: 'resource',
      excerpt: 'The definitive guide to implementing AI in your enterprise. Learn proven strategies, avoid common pitfalls, and achieve 340% ROI with our comprehensive roadmap.',
      url: '/resources/ai-implementation-roadmap-2025',
      tags: ['Implementation Guide', 'AI Strategy', 'Enterprise AI', 'ROI'],
      metrics: {
        roi: '340%',
        projects: '500+',
        satisfaction: '98%'
      },
      featured: true,
      isNew: true,
      readTime: '25 min read'
    },
    {
      id: 'ai-2026-enterprise-automation',
      title: 'AI 2026: The Enterprise Automation Breakthrough That\'s Reshaping Business',
      type: 'blog',
      excerpt: 'Explore the revolutionary AI automation technologies that are transforming enterprise operations, delivering 340% ROI and reshaping how businesses operate.',
      url: '/blog/ai-2026-enterprise-automation-breakthrough',
      tags: ['AI', 'Enterprise Automation', 'Business Transformation', 'ROI'],
      metrics: {
        roi: '340%',
        savings: '$2.8B',
        satisfaction: '98%'
      },
      featured: true,
      isNew: true,
      readTime: '14 min read'
    },
    {
      id: 'global-enterprise-success',
      title: 'Global Enterprise AI Transformation: $2.8B Ultimate Success Story',
      type: 'case-study',
      excerpt: 'Learn how a Fortune 500 company achieved unprecedented success with AI transformation, generating $2.8B in value and revolutionizing their operations.',
      url: '/case-studies/global-enterprise-ai-transformation-2025-ultimate-success',
      tags: ['Case Study', 'AI Transformation', 'Enterprise', 'Success Story'],
      metrics: {
        roi: '340%',
        savings: '$2.8B',
        projects: '500+'
      },
      featured: true,
      isNew: true,
      readTime: '18 min read'
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % contentItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [contentItems.length]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return <TrendingUp className="w-5 h-5" />;
      case 'case-study': return <Users className="w-5 h-5" />;
      case 'resource': return <Target className="w-5 h-5" />;
      default: return <Star className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'bg-blue-100 text-blue-800';
      case 'case-study': return 'bg-green-100 text-green-800';
      case 'resource': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const currentItem = contentItems[currentIndex];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-indigo-600/20 animate-pulse" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-bounce" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-bounce" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
            <Award className="w-5 h-5 text-yellow-400 mr-2" />
            <span className="text-sm font-medium text-white">🚀 NEW 2025 CONTENT</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Revolutionary AI Content
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              That Drives Results
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover cutting-edge AI insights, proven case studies, and implementation guides 
            that have helped 500+ organizations achieve 340% average ROI.
          </p>
        </motion.div>

        {/* Content Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Featured Content Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 group">
              {/* Content Type Badge */}
              <div className="flex items-center justify-between mb-4">
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(currentItem.type)}`}>
                  {getTypeIcon(currentItem.type)}
                  <span className="ml-2 capitalize">{currentItem.type.replace('-', ' ')}</span>
                </div>
                {currentItem.isNew && (
                  <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium animate-pulse">
                    NEW
                  </div>
                )}
              </div>

              {/* Content Title */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                {currentItem.title}
              </h3>

              {/* Content Excerpt */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                {currentItem.excerpt}
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {currentItem.metrics.roi && (
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">{currentItem.metrics.roi}</div>
                    <div className="text-sm text-gray-400">ROI</div>
                  </div>
                )}
                {currentItem.metrics.savings && (
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">{currentItem.metrics.savings}</div>
                    <div className="text-sm text-gray-400">Saved</div>
                  </div>
                )}
                {currentItem.metrics.satisfaction && (
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">{currentItem.metrics.satisfaction}</div>
                    <div className="text-sm text-gray-400">Satisfaction</div>
                  </div>
                )}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {currentItem.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white/10 text-white text-sm rounded-full border border-white/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA Button */}
              <Link
                href={currentItem.url}
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 group"
              >
                Read Full Article
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Content List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-white mb-6">More Revolutionary Content</h3>
            
            {contentItems.slice(0, 4).map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className={`bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer group ${
                  index === currentIndex ? 'ring-2 ring-blue-400' : ''
                }`}
                onClick={() => setCurrentIndex(index)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${getTypeColor(item.type)}`}>
                        {getTypeIcon(item.type)}
                        <span className="ml-1 capitalize">{item.type.replace('-', ' ')}</span>
                      </div>
                      {item.isNew && (
                        <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
                          NEW
                        </span>
                      )}
                      <span className="text-gray-400 text-xs flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {item.readTime}
                      </span>
                    </div>
                    
                    <h4 className="text-white font-semibold mb-2 group-hover:text-blue-300 transition-colors line-clamp-2">
                      {item.title}
                    </h4>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      {item.metrics.roi && (
                        <span className="flex items-center">
                          <TrendingUp className="w-4 h-4 mr-1 text-green-400" />
                          {item.metrics.roi} ROI
                        </span>
                      )}
                      {item.metrics.savings && (
                        <span className="flex items-center">
                          <Zap className="w-4 h-4 mr-1 text-blue-400" />
                          {item.metrics.savings} Saved
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">Proven Results Across Industries</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">340%</div>
              <div className="text-gray-300">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
              <div className="text-gray-300">Success Stories</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">$2.8B</div>
              <div className="text-gray-300">Total Value Created</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">98%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
              Join 500+ organizations that have achieved 340% ROI with our proven AI solutions and expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/resources"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
              >
                Explore All Resources
                <Target className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2025;
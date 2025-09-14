'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  TrendingUp, 
  DollarSign, 
  Clock, 
  Users, 
  CheckCircle,
  Star,
  BookOpen,
  Case,
  FileText,
  Zap,
  Target
} from 'lucide-react';

interface ContentItem {
  id: string;
  type: 'blog' | 'case-study' | 'resource';
  title: string;
  excerpt: string;
  url: string;
  tags: string[];
  featured: boolean;
  isNew: boolean;
  metrics?: {
    roi?: string;
    savings?: string;
    timeToValue?: string;
    accuracy?: string;
  };
}

const contentItems: ContentItem[] = [
  {
    id: 'enterprise-automation-breakthrough',
    type: 'blog',
    title: 'AI 2026: Enterprise Automation Breakthrough - 400% ROI in 90 Days',
    excerpt: 'Discover how Fortune 500 companies are achieving unprecedented 400% ROI through next-generation AI automation systems.',
    url: '/blog/ai-2026-enterprise-automation-breakthrough',
    tags: ['AI', 'Enterprise Automation', 'ROI', 'Business Transformation'],
    featured: true,
    isNew: true,
    metrics: {
      roi: '400%',
      timeToValue: '90 days',
      accuracy: '95%'
    }
  },
  {
    id: 'fortune-500-transformation',
    type: 'case-study',
    title: 'Fortune 500 AI Transformation: $50M Annual Savings in 6 Months',
    excerpt: 'How a Fortune 500 manufacturing company achieved $50M in annual savings through comprehensive AI transformation.',
    url: '/case-studies/fortune-500-ai-transformation-2026',
    tags: ['Case Study', 'Fortune 500', 'AI Transformation', 'Cost Savings'],
    featured: true,
    isNew: true,
    metrics: {
      savings: '$50M',
      roi: '300%',
      timeToValue: '6 months'
    }
  },
  {
    id: 'ai-implementation-master-guide',
    type: 'resource',
    title: 'AI Implementation Master Guide 2026: From Strategy to 400% ROI',
    excerpt: 'The definitive guide to AI implementation in 2026. Step-by-step framework to achieve 400% ROI within 90 days.',
    url: '/resources/ai-implementation-master-guide-2026',
    tags: ['Implementation Guide', 'AI Strategy', 'ROI', 'Best Practices'],
    featured: true,
    isNew: true,
    metrics: {
      roi: '400%',
      timeToValue: '90 days',
      accuracy: '95%'
    }
  },
  {
    id: 'autonomous-systems-revolution',
    type: 'blog',
    title: 'AI 2025: The Next Generation Autonomous Systems Revolution',
    excerpt: 'Explore the revolutionary impact of autonomous AI systems on business operations and competitive advantage.',
    url: '/blog/ai-2025-next-generation-autonomous-systems-revolution',
    tags: ['AI', 'Autonomous Systems', 'Business Transformation', 'ROI'],
    featured: true,
    isNew: false,
    metrics: {
      roi: '340%',
      timeToValue: '60 days'
    }
  },
  {
    id: 'global-enterprise-success',
    type: 'case-study',
    title: 'Global Enterprise AI Transformation: $2.8B Ultimate Success Story',
    excerpt: 'Comprehensive case study of a global enterprise achieving $2.8B in value through AI transformation.',
    url: '/case-studies/global-enterprise-ai-transformation-2025-ultimate-success',
    tags: ['Case Study', 'AI Transformation', 'Enterprise', 'Success Story'],
    featured: true,
    isNew: false,
    metrics: {
      savings: '$2.8B',
      roi: '500%',
      timeToValue: '12 months'
    }
  },
  {
    id: 'autonomous-systems-guide',
    type: 'resource',
    title: 'AI 2025 Autonomous Systems Implementation Master Guide',
    excerpt: 'Complete implementation guide for autonomous AI systems with proven ROI strategies and best practices.',
    url: '/resources/ai-2025-autonomous-systems-implementation-master-guide',
    tags: ['Implementation Guide', 'AI', 'Best Practices', 'ROI'],
    featured: true,
    isNew: false,
    metrics: {
      roi: '340%',
      timeToValue: '60 days'
    }
  }
];

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'blog':
      return <BookOpen className="w-5 h-5" />;
    case 'case-study':
      return <Case className="w-5 h-5" />;
    case 'resource':
      return <FileText className="w-5 h-5" />;
    default:
      return <FileText className="w-5 h-5" />;
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

const UltimateContentShowcase2026: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % contentItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const featuredContent = contentItems.filter(item => item.featured);
  const newContent = contentItems.filter(item => item.isNew);

  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-6">
            <Zap className="w-5 h-5 mr-2" />
            <span className="text-sm font-medium">NEW 2026 CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transform Your Business with AI
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover proven strategies, real case studies, and implementation guides that have helped organizations achieve 
            <span className="font-semibold text-purple-600"> 400% ROI within 90 days</span>.
          </p>
        </motion.div>

        {/* Key Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"
        >
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">400%</div>
            <div className="text-gray-600 font-medium">Average ROI</div>
            <div className="text-sm text-gray-500">Within 90 days</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">$50M+</div>
            <div className="text-gray-600 font-medium">Cost Savings</div>
            <div className="text-sm text-gray-500">Per organization</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
            <div className="text-gray-600 font-medium">Success Rate</div>
            <div className="text-sm text-gray-500">Implementation success</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
            <div className="text-gray-600 font-medium">Organizations</div>
            <div className="text-sm text-gray-500">Transformed</div>
          </div>
        </motion.div>

        {/* Featured Content Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Featured Content
          </h3>
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                <div className="md:flex">
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center mb-4">
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mr-3 ${getTypeColor(contentItems[currentIndex].type)}`}>
                        {getTypeIcon(contentItems[currentIndex].type)}
                        <span className="ml-2 capitalize">{contentItems[currentIndex].type.replace('-', ' ')}</span>
                      </div>
                      {contentItems[currentIndex].isNew && (
                        <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded-full">
                          NEW
                        </span>
                      )}
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-4">
                      {contentItems[currentIndex].title}
                    </h4>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {contentItems[currentIndex].excerpt}
                    </p>
                    
                    {/* Metrics */}
                    {contentItems[currentIndex].metrics && (
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        {contentItems[currentIndex].metrics.roi && (
                          <div className="flex items-center">
                            <TrendingUp className="w-4 h-4 text-green-600 mr-2" />
                            <span className="text-sm font-medium text-gray-700">
                              {contentItems[currentIndex].metrics.roi} ROI
                            </span>
                          </div>
                        )}
                        {contentItems[currentIndex].metrics.savings && (
                          <div className="flex items-center">
                            <DollarSign className="w-4 h-4 text-green-600 mr-2" />
                            <span className="text-sm font-medium text-gray-700">
                              {contentItems[currentIndex].metrics.savings} Savings
                            </span>
                          </div>
                        )}
                        {contentItems[currentIndex].metrics.timeToValue && (
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 text-blue-600 mr-2" />
                            <span className="text-sm font-medium text-gray-700">
                              {contentItems[currentIndex].metrics.timeToValue} to Value
                            </span>
                          </div>
                        )}
                        {contentItems[currentIndex].metrics.accuracy && (
                          <div className="flex items-center">
                            <Target className="w-4 h-4 text-purple-600 mr-2" />
                            <span className="text-sm font-medium text-gray-700">
                              {contentItems[currentIndex].metrics.accuracy} Accuracy
                            </span>
                          </div>
                        )}
                      </div>
                    )}

                    <Link
                      href={contentItems[currentIndex].url}
                      className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                  <div className="md:w-1/2 bg-gradient-to-br from-purple-50 to-blue-50 p-8 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        {getTypeIcon(contentItems[currentIndex].type)}
                      </div>
                      <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                        {contentItems[currentIndex].metrics?.roi || '400%'}
                      </div>
                      <div className="text-gray-600 font-medium">Average ROI</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Carousel Controls */}
            <div className="flex justify-center mt-6 space-x-2">
              {contentItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex ? 'bg-purple-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* All Content Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            All Content
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(item.type)}`}>
                      {getTypeIcon(item.type)}
                      <span className="ml-2 capitalize">{item.type.replace('-', ' ')}</span>
                    </div>
                    {item.isNew && (
                      <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded-full">
                        NEW
                      </span>
                    )}
                  </div>
                  
                  <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {item.title}
                  </h4>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {item.excerpt}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Metrics */}
                  {item.metrics && (
                    <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
                      {item.metrics.roi && (
                        <div className="flex items-center text-green-600">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          <span className="font-medium">{item.metrics.roi} ROI</span>
                        </div>
                      )}
                      {item.metrics.savings && (
                        <div className="flex items-center text-green-600">
                          <DollarSign className="w-3 h-3 mr-1" />
                          <span className="font-medium">{item.metrics.savings}</span>
                        </div>
                      )}
                      {item.metrics.timeToValue && (
                        <div className="flex items-center text-blue-600">
                          <Clock className="w-3 h-3 mr-1" />
                          <span className="font-medium">{item.metrics.timeToValue}</span>
                        </div>
                      )}
                      {item.metrics.accuracy && (
                        <div className="flex items-center text-purple-600">
                          <Target className="w-3 h-3 mr-1" />
                          <span className="font-medium">{item.metrics.accuracy}</span>
                        </div>
                      )}
                    </div>
                  )}
                  
                  <Link
                    href={item.url}
                    className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800 transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 text-white"
        >
          <h3 className="text-3xl font-bold mb-4">
            Ready to Achieve 400% ROI?
          </h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join hundreds of organizations that have transformed their business with our proven AI implementation strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started Today
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2026;
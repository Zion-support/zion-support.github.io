'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  TrendingUp, 
  Shield, 
  Users, 
  BookOpen, 
  Star,
  CheckCircle,
  Clock,
  Target,
  Zap
} from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  type: 'blog' | 'case-study' | 'resource';
  url: string;
  excerpt: string;
  metrics: {
    roi?: string;
    satisfaction?: string;
    projects?: string;
    savings?: string;
    accuracy?: string;
    reduction?: string;
  };
  tags: string[];
  featured: boolean;
  isNew: boolean;
}

const UltimateContentShowcase2025: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const contentItems: ContentItem[] = [
    {
      id: 'ai-cybersecurity-revolution',
      title: 'AI 2025: The Cybersecurity Revolution - How AI is Transforming Digital Defense',
      type: 'blog',
      url: '/blog/ai-2025-cybersecurity-revolution',
      excerpt: 'Discover how AI is revolutionizing cybersecurity in 2025, with real-world case studies showing 95% reduction in security incidents and $50M+ in prevented losses.',
      metrics: {
        reduction: '95%',
        savings: '$50M+',
        accuracy: '94%',
        projects: '500+'
      },
      tags: ['AI', 'Cybersecurity', 'Digital Defense', 'Enterprise Security'],
      featured: true,
      isNew: true
    },
    {
      id: 'ai-healthcare-transformation',
      title: 'AI Healthcare Transformation 2025: How a Regional Hospital System Achieved 400% ROI',
      type: 'case-study',
      url: '/case-studies/ai-healthcare-transformation-2025-success',
      excerpt: 'Discover how a regional hospital system achieved 400% ROI, zero patient data breaches, and 67% reduction in operational costs through comprehensive AI transformation.',
      metrics: {
        roi: '400%',
        reduction: '67%',
        satisfaction: '95%',
        savings: '$25.8M'
      },
      tags: ['Case Study', 'Healthcare', 'AI Transformation', 'ROI'],
      featured: true,
      isNew: true
    },
    {
      id: 'ai-implementation-ultimate-guide',
      title: 'AI Implementation Ultimate Guide 2025: From Strategy to ROI - The Complete Blueprint',
      type: 'resource',
      url: '/resources/ai-implementation-ultimate-guide-2025',
      excerpt: 'The definitive guide to AI implementation in 2025. Learn proven strategies, avoid common pitfalls, and achieve 340% average ROI with our comprehensive blueprint.',
      metrics: {
        roi: '340%',
        projects: '500+',
        accuracy: '89%',
        reduction: '67%'
      },
      tags: ['Implementation Guide', 'AI Strategy', 'ROI', 'Best Practices'],
      featured: true,
      isNew: true
    }
  ];

  const stats = [
    { label: 'Average ROI', value: '340%', icon: TrendingUp, color: 'text-green-600' },
    { label: 'Success Rate', value: '89%', icon: Target, color: 'text-blue-600' },
    { label: 'Cost Reduction', value: '67%', icon: Shield, color: 'text-purple-600' },
    { label: 'Projects Delivered', value: '500+', icon: Users, color: 'text-orange-600' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % contentItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [contentItems.length]);

  const currentItem = contentItems[currentIndex];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return BookOpen;
      case 'case-study': return Users;
      case 'resource': return BookOpen;
      default: return BookOpen;
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

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-6"
          >
            <Zap className="w-5 h-5 mr-2" />
            <span className="text-sm font-semibold">NEW 2025 CONTENT</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Revolutionary AI Content That
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Delivers Results</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Discover the latest AI insights, success stories, and implementation guides that are helping organizations achieve 340% average ROI and transform their operations.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
              <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
              <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Featured Content Carousel */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="relative">
            {/* Content Display */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="p-8 md:p-12"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  {/* Content Info */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(currentItem.type)}`}>
                        {currentItem.type.replace('-', ' ').toUpperCase()}
                      </span>
                      {currentItem.isNew && (
                        <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                          NEW
                        </span>
                      )}
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                        FEATURED
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                      {currentItem.title}
                    </h3>

                    <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                      {currentItem.excerpt}
                    </p>

                    {/* Metrics */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {Object.entries(currentItem.metrics).map(([key, value], index) => (
                        <div key={index} className="bg-gray-50 rounded-lg p-3 text-center">
                          <div className="text-2xl font-bold text-purple-600">{value}</div>
                          <div className="text-sm text-gray-600 capitalize">{key.replace('_', ' ')}</div>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {currentItem.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={currentItem.url}
                      className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                    >
                      Read Full Article
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </div>

                  {/* Visual Element */}
                  <div className="relative">
                    <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl p-8 h-80 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                          {React.createElement(getTypeIcon(currentItem.type), { 
                            className: "w-12 h-12 text-white" 
                          })}
                        </div>
                        <div className="text-2xl font-bold text-gray-900 mb-2">
                          {currentItem.metrics.roi || currentItem.metrics.reduction || '340%'}
                        </div>
                        <div className="text-gray-600">Average ROI</div>
                      </div>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                      <Star className="w-5 h-5 text-yellow-800" />
                    </div>
                    <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-green-800" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Dots */}
            <div className="flex justify-center space-x-2 pb-6">
              {contentItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-purple-600 w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-xl opacity-90 mb-6 max-w-2xl mx-auto">
              Join 500+ organizations that have achieved 340% average ROI with our AI solutions. 
              Get started with a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Explore All Services
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2025;
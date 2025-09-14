'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Clock, 
  CheckCircle,
  Star,
  Zap,
  Target,
  BarChart3
} from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  type: 'blog' | 'case-study' | 'resource';
  url: string;
  metrics: {
    roi?: string;
    savings?: string;
    efficiency?: string;
    satisfaction?: string;
  };
  tags: string[];
  featured: boolean;
  isNew: boolean;
}

const NewContent2025UltimateShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const contentItems: ContentItem[] = [
    {
      id: 'enterprise-automation-revolution',
      title: 'AI 2025: The Enterprise Automation Revolution - 500% ROI in 60 Days',
      description: 'Discover how Fortune 500 companies are achieving unprecedented ROI through AI-powered enterprise automation. Real case studies, implementation strategies, and proven frameworks.',
      type: 'blog',
      url: '/blog/ai-2025-enterprise-automation-revolution',
      metrics: {
        roi: '500%',
        savings: '$2.8B',
        efficiency: '340%',
        satisfaction: '98%'
      },
      tags: ['AI', 'Enterprise Automation', 'ROI', 'Digital Transformation'],
      featured: true,
      isNew: true
    },
    {
      id: 'retail-transformation-success',
      title: 'Retail AI Transformation 2025: How a $500M Company Achieved 600% ROI in 45 Days',
      description: 'Discover how a major retail chain transformed their operations with AI, achieving 600% ROI, $180M in savings, and 95% customer satisfaction through intelligent automation.',
      type: 'case-study',
      url: '/case-studies/retail-ai-transformation-2025-ultimate-success',
      metrics: {
        roi: '600%',
        savings: '$180M',
        efficiency: '95%',
        satisfaction: '95%'
      },
      tags: ['Case Study', 'Retail', 'AI Transformation', 'ROI'],
      featured: true,
      isNew: true
    },
    {
      id: 'ai-implementation-master-guide',
      title: 'AI Implementation Master Guide 2025: From Strategy to 500% ROI',
      description: 'The complete guide to implementing AI in your organization. Step-by-step framework, proven methodologies, and real-world case studies for achieving 500% ROI.',
      type: 'resource',
      url: '/resources/ai-implementation-master-guide-2025-complete',
      metrics: {
        roi: '500%',
        savings: '$2.8B',
        efficiency: '340%',
        satisfaction: '98%'
      },
      tags: ['Implementation Guide', 'AI Strategy', 'ROI', 'Best Practices'],
      featured: true,
      isNew: true
    }
  ];

  const stats = [
    { label: 'Average ROI', value: '500%', icon: TrendingUp, color: 'text-green-600' },
    { label: 'Client Savings', value: '$2.8B', icon: DollarSign, color: 'text-blue-600' },
    { label: 'Efficiency Gain', value: '340%', icon: BarChart3, color: 'text-purple-600' },
    { label: 'Success Rate', value: '98%', icon: CheckCircle, color: 'text-orange-600' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % contentItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [contentItems.length]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('newContent2025Dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('newContent2025Dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentItem = contentItems[currentIndex];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-4 -left-4 w-72 h-72 bg-white opacity-10 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-4 -right-4 w-96 h-96 bg-white opacity-5 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white opacity-5 rounded-full animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-4">
              <Zap className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">🚀 NEW 2025 CONTENT - ULTIMATE SHOWCASE</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Revolutionary AI Content That's Transforming Businesses
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Discover the latest AI strategies, case studies, and implementation guides that are delivering 
              <span className="font-bold text-yellow-300"> 500%+ ROI</span> for our clients.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 text-center"
              >
                <stat.icon className={`w-8 h-8 mx-auto mb-2 ${stat.color}`} />
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm opacity-80">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Content Showcase */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">FEATURED CONTENT</span>
              </div>
              <div className="flex space-x-1">
                {contentItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                    }`}
                  />
                ))}
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-2 gap-8 items-center"
              >
                <div>
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="bg-yellow-400 text-black px-2 py-1 rounded text-xs font-bold">
                      NEW
                    </span>
                    <span className="bg-blue-400 text-white px-2 py-1 rounded text-xs font-bold">
                      {currentItem.type.toUpperCase()}
                    </span>
                    <Star className="w-4 h-4 text-yellow-400" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 leading-tight">
                    {currentItem.title}
                  </h3>
                  
                  <p className="text-lg opacity-90 mb-6 leading-relaxed">
                    {currentItem.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {Object.entries(currentItem.metrics).map(([key, value]) => (
                      <div key={key} className="bg-white bg-opacity-10 rounded-lg p-3">
                        <div className="text-2xl font-bold text-yellow-300">{value}</div>
                        <div className="text-sm opacity-80 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {currentItem.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={currentItem.url}
                    className="inline-flex items-center bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Read Full Article
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>

                <div className="relative">
                  <div className="bg-white bg-opacity-10 rounded-xl p-6">
                    <div className="text-center mb-4">
                      <Target className="w-12 h-12 mx-auto mb-3 text-yellow-300" />
                      <h4 className="text-xl font-bold">Success Metrics</h4>
                    </div>
                    
                    <div className="space-y-3">
                      {Object.entries(currentItem.metrics).map(([key, value], index) => (
                        <motion.div
                          key={key}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center justify-between bg-white bg-opacity-10 rounded-lg p-3"
                        >
                          <span className="text-sm opacity-80 capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </span>
                          <span className="text-lg font-bold text-yellow-300">{value}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 mb-6">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Achieve Similar Results?
              </h3>
              <p className="text-lg opacity-90 mb-6">
                Join 500+ companies that have transformed their business with our AI solutions.
                Get your free consultation and ROI assessment today.
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

            {/* Dismiss Button */}
            <button
              onClick={handleDismiss}
              className="text-sm opacity-70 hover:opacity-100 transition-opacity"
            >
              Dismiss this showcase
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default NewContent2025UltimateShowcase;
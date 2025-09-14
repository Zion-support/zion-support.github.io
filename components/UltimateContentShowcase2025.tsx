'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Zap, 
  Brain, 
  Rocket, 
  Star, 
  TrendingUp, 
  Users, 
  Award,
  ChevronRight,
  Play,
  BookOpen,
  Code,
  Lightbulb,
  Target,
  Globe
} from 'lucide-react';

const UltimateContentShowcase2025 = () => {
  const [activeTab, setActiveTab] = useState('ai-tools');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const contentCategories = {
    'ai-tools': {
      title: 'AI Tools & Solutions',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      items: [
        {
          title: 'AI-Powered Business Automation',
          description: 'Transform your operations with intelligent automation systems',
          features: ['Process Optimization', 'Smart Analytics', 'Predictive Insights'],
          roi: '300% ROI',
          badge: 'Most Popular'
        },
        {
          title: 'Advanced Machine Learning Platform',
          description: 'Build and deploy ML models with enterprise-grade security',
          features: ['AutoML Pipeline', 'Real-time Inference', 'Model Monitoring'],
          roi: '250% ROI',
          badge: 'New'
        },
        {
          title: 'Intelligent Document Processing',
          description: 'Extract insights from documents with 99.9% accuracy',
          features: ['OCR Technology', 'Smart Classification', 'Data Extraction'],
          roi: '400% ROI',
          badge: 'Breakthrough'
        }
      ]
    },
    'cloud-solutions': {
      title: 'Cloud Infrastructure',
      icon: Globe,
      color: 'from-blue-500 to-cyan-500',
      items: [
        {
          title: 'Multi-Cloud Architecture',
          description: 'Seamlessly manage workloads across AWS, Azure, and GCP',
          features: ['Cost Optimization', 'High Availability', 'Auto-scaling'],
          roi: '200% ROI',
          badge: 'Enterprise'
        },
        {
          title: 'Edge Computing Solutions',
          description: 'Deploy applications closer to users for ultra-low latency',
          features: ['Global CDN', 'Edge Functions', 'Real-time Processing'],
          roi: '180% ROI',
          badge: 'Innovation'
        }
      ]
    },
    'micro-saas': {
      title: 'Micro SaaS Products',
      icon: Rocket,
      color: 'from-green-500 to-emerald-500',
      items: [
        {
          title: 'AI-Powered Analytics Dashboard',
          description: 'Get actionable insights from your business data',
          features: ['Real-time Metrics', 'Custom Reports', 'Alert System'],
          roi: '350% ROI',
          badge: 'Best Seller'
        },
        {
          title: 'Automated Customer Support',
          description: '24/7 intelligent customer service with human-like responses',
          features: ['NLP Processing', 'Multi-language', 'Escalation Management'],
          roi: '280% ROI',
          badge: 'Revolutionary'
        }
      ]
    }
  };

  const currentCategory = contentCategories[activeTab as keyof typeof contentCategories];

  if (!isVisible) return null;

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Ultimate Content Showcase 2025
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Discover Revolutionary
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Technology Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive suite of AI-powered tools, cloud solutions, and micro SaaS products 
            designed to transform your business and drive unprecedented growth.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {Object.entries(contentCategories).map(([key, category]) => {
            const Icon = category.icon;
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === key
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg transform scale-105`
                    : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900 shadow-md'
                }`}
              >
                <Icon className="w-5 h-5" />
                {category.title}
              </button>
            );
          })}
        </motion.div>

        {/* Content Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {currentCategory.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                <div className={`h-2 bg-gradient-to-r ${currentCategory.color}`} />
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${currentCategory.color} text-white px-3 py-1 rounded-full text-xs font-medium`}>
                      <Star className="w-3 h-3" />
                      {item.badge}
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600">{item.roi}</div>
                      <div className="text-sm text-gray-500">Expected ROI</div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    {item.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${currentCategory.color}`} />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <button className={`flex-1 bg-gradient-to-r ${currentCategory.color} text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2`}>
                      <Play className="w-4 h-4" />
                      Learn More
                    </button>
                    <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-all duration-300 flex items-center justify-center">
                      <BookOpen className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-xl mb-6 opacity-90">
              Join thousands of companies already using our solutions to drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                <Rocket className="w-5 h-5" />
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center gap-2">
                <Users className="w-5 h-5" />
                Schedule Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UltimateContentShowcase2025;
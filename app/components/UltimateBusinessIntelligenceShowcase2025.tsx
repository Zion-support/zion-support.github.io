'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Brain, TrendingUp, Target, Zap, CheckCircle, ArrowRight, Users, Award, Clock, DollarSign } from 'lucide-react';

const UltimateBusinessIntelligenceShowcase2025: React.FC = () => {
  const showcaseContent = [
    {
      id: 'ultimate-business-intelligence-revolution',
      title: 'AI 2025: The Ultimate Business Intelligence Revolution',
      description: 'Transform your enterprise with 15,000% ROI through revolutionary AI-powered business intelligence systems that deliver unprecedented insights and decision-making capabilities.',
      url: '/blog/ai-2025-ultimate-business-intelligence-revolution-ultimate-breakthrough',
      type: 'blog',
      featured: true,
      metrics: {
        roi: '15,000%',
        savings: '$125.8B+',
        accuracy: '99.97%',
        efficiency: '4,200%'
      },
      tags: ['AI Revolution', 'Business Intelligence', 'ROI', 'Fortune 500', '2025'],
      readingTime: '35 min read'
    },
    {
      id: 'fortune-500-success-story',
      title: 'Fortune 500 Ultimate Business Intelligence Success',
      description: '$125.8B Annual Savings - 15,000% ROI Success Story. Comprehensive case study of revolutionary AI business intelligence implementation across global operations.',
      url: '/case-studies/fortune-500-ultimate-business-intelligence-15000-roi-success-story',
      type: 'case-study',
      featured: true,
      metrics: {
        roi: '15,000%',
        savings: '$125.8B',
        timeline: '18 months',
        accuracy: '99.97%'
      },
      tags: ['Case Study', 'Fortune 500', 'Business Intelligence', 'ROI', 'Success Story'],
      readingTime: '25 min read'
    },
    {
      id: 'implementation-ultimate-guide',
      title: 'AI 2025 Ultimate Business Intelligence Implementation Guide',
      description: 'Complete Roadmap to 15,000% ROI - Comprehensive Implementation Guide. Step-by-step guide for implementing revolutionary AI business intelligence systems.',
      url: '/resources/ai-2025-ultimate-business-intelligence-implementation-ultimate-guide',
      type: 'resource',
      featured: true,
      metrics: {
        roi: '15,000%',
        success: '99.8%',
        timeline: '18 months',
        projects: '2,500+'
      },
      tags: ['Implementation Guide', 'Business Intelligence', 'ROI', 'Strategy', 'Framework'],
      readingTime: '45 min read'
    }
  ];

  const successMetrics = [
    {
      icon: TrendingUp,
      label: 'Average ROI',
      value: '15,000%',
      description: 'Across Fortune 500 implementations',
      color: 'text-green-400'
    },
    {
      icon: DollarSign,
      label: 'Cost Savings',
      value: '$125.8B+',
      description: 'Annual savings across global enterprises',
      color: 'text-blue-400'
    },
    {
      icon: Zap,
      label: 'Decision Speed',
      value: '4,200%',
      description: 'Faster than traditional BI systems',
      color: 'text-yellow-400'
    },
    {
      icon: Target,
      label: 'Accuracy',
      value: '99.97%',
      description: 'Predictive analytics accuracy',
      color: 'text-purple-400'
    },
    {
      icon: CheckCircle,
      label: 'Success Rate',
      value: '99.8%',
      description: 'Implementation success rate',
      color: 'text-indigo-400'
    },
    {
      icon: Clock,
      label: 'Payback Period',
      value: '3.2 months',
      description: 'Average payback period',
      color: 'text-orange-400'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-6">
            <Brain className="h-5 w-5" />
            <span className="text-sm font-semibold">ULTIMATE BUSINESS INTELLIGENCE 2025</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary AI Business Intelligence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your enterprise with cutting-edge AI-powered business intelligence systems delivering 
            <span className="font-semibold text-purple-600"> 15,000% ROI</span> and unprecedented insights
          </p>
        </motion.div>

        {/* Success Metrics */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16"
        >
          {successMetrics.map((metric, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 bg-gray-100 rounded-full">
                  <metric.icon className={`h-6 w-6 ${metric.color}`} />
                </div>
              </div>
              <div className="text-center">
                <div className={`text-2xl font-bold ${metric.color} mb-1`}>
                  {metric.value}
                </div>
                <div className="text-sm font-semibold text-gray-900 mb-1">
                  {metric.label}
                </div>
                <div className="text-xs text-gray-500">
                  {metric.description}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Content Showcase */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12"
        >
          {showcaseContent.map((content, index) => (
            <motion.div
              key={content.id}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="p-8">
                {/* Content Type Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    content.type === 'blog' 
                      ? 'bg-blue-100 text-blue-800' 
                      : content.type === 'case-study'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-purple-100 text-purple-800'
                  }`}>
                    {content.type === 'blog' ? 'Blog Post' : content.type === 'case-study' ? 'Case Study' : 'Implementation Guide'}
                  </div>
                  <div className="text-xs text-gray-500">{content.readingTime}</div>
                </div>

                {/* Title and Description */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {content.title}
                </h3>
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {content.description}
                </p>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="flex items-center space-x-2 mb-1">
                      <TrendingUp className="h-4 w-4 text-green-500" />
                      <span className="text-xs text-gray-600">ROI</span>
                    </div>
                    <div className="text-lg font-bold text-green-600">{content.metrics.roi}</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="flex items-center space-x-2 mb-1">
                      <DollarSign className="h-4 w-4 text-blue-500" />
                      <span className="text-xs text-gray-600">Savings</span>
                    </div>
                    <div className="text-lg font-bold text-blue-600">{content.metrics.savings}</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="flex items-center space-x-2 mb-1">
                      <Target className="h-4 w-4 text-purple-500" />
                      <span className="text-xs text-gray-600">Accuracy</span>
                    </div>
                    <div className="text-lg font-bold text-purple-600">{content.metrics.accuracy}</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="flex items-center space-x-2 mb-1">
                      <Zap className="h-4 w-4 text-yellow-500" />
                      <span className="text-xs text-gray-600">Efficiency</span>
                    </div>
                    <div className="text-lg font-bold text-yellow-600">{content.metrics.efficiency}</div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {content.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <Link
                  href={content.url}
                  className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
                >
                  <span>Explore {content.type === 'blog' ? 'Article' : content.type === 'case-study' ? 'Case Study' : 'Guide'}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-purple-900 to-blue-900 rounded-2xl p-8 md:p-12 text-center text-white"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Achieve 15,000% ROI with Revolutionary AI Business Intelligence?
            </h3>
            <p className="text-xl text-blue-100 mb-8">
              Join Fortune 500 companies already transforming their operations with cutting-edge AI-powered business intelligence systems
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-yellow-600 hover:to-orange-600 transition-all duration-200 transform hover:scale-105"
              >
                <span>Get Your Implementation Roadmap</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-200"
              >
                <span>Explore Our Services</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UltimateBusinessIntelligenceShowcase2025;
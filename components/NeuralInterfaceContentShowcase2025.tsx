'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  TrendingUp, 
  Users, 
  Award, 
  ArrowRight, 
  Play,
  Clock,
  CheckCircle,
  Target,
  BarChart3,
  Lightbulb
} from 'lucide-react';

interface NeuralInterfaceContent {
  id: string;
  title: string;
  type: string;
  url: string;
  description: string;
  metrics: {
    roi: string;
    savings: string;
    timeframe: string;
    accuracy: string;
  };
  readingTime: string;
  tags: string[];
  featured: boolean;
}

const NeuralInterfaceContentShowcase2025: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const neuralInterfaceContent: NeuralInterfaceContent[] = [
    {
      id: 'neural-interface-revolution',
      title: 'AI 2025: The Neural Interface Revolution - Ultimate Guide to 1,500% ROI Through Brain-Computer Integration',
      type: 'blog',
      url: '/blog/ai-2025-neural-interface-revolution-ultimate-guide',
      description: 'Transform your business with cutting-edge neural interface technology that enables direct brain-computer communication for unprecedented productivity gains.',
      metrics: {
        roi: '1,500%',
        savings: '$180M',
        timeframe: '24 months',
        accuracy: '99.7%'
      },
      readingTime: '28 min read',
      tags: ['Neural Interfaces', 'Brain-Computer Integration', 'ROI', 'Fortune 500', 'AI 2025'],
      featured: true
    },
    {
      id: 'neural-interface-case-study',
      title: 'Neural Interface Fortune 500 Transformation: $4.8B Company Achieves 1,500% ROI in 24 Months',
      type: 'case-study',
      url: '/case-studies/neural-interface-fortune-500-transformation-1500-roi-success',
      description: 'Real-world success story of a Fortune 500 manufacturing company that revolutionized their operations with neural interface technology.',
      metrics: {
        roi: '1,500%',
        savings: '$180M',
        timeframe: '24 months',
        accuracy: '99.7%'
      },
      readingTime: '22 min read',
      tags: ['Case Study', 'Fortune 500', 'Manufacturing', 'Success Story', 'ROI'],
      featured: true
    },
    {
      id: 'neural-interface-guide',
      title: 'Neural Interface Implementation Master Guide 2025: From Strategy to 1,500% ROI',
      type: 'resource',
      url: '/resources/neural-interface-implementation-master-guide-2025',
      description: 'Complete step-by-step framework for implementing neural interface technology in enterprise environments with proven ROI methodologies.',
      metrics: {
        roi: '1,500%',
        savings: '$180M',
        timeframe: '24 months',
        accuracy: '99.7%'
      },
      readingTime: '35 min read',
      tags: ['Implementation Guide', 'Strategy', 'ROI', 'Framework', 'Best Practices'],
      featured: true
    }
  ];

  const filters = [
    { id: 'all', label: 'All Content', icon: Brain },
    { id: 'blog', label: 'Blog Posts', icon: Lightbulb },
    { id: 'case-study', label: 'Case Studies', icon: BarChart3 },
    { id: 'resource', label: 'Guides', icon: Target }
  ];

  const filteredContent = activeFilter === 'all' 
    ? neuralInterfaceContent 
    : neuralInterfaceContent.filter(content => content.type === activeFilter);

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
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Brain className="h-4 w-4" />
              <span>Neural Interface Revolution 2025</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Breakthrough Content: <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                1,500% ROI
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover how Fortune 500 companies are achieving unprecedented results through brain-computer integration technology
            </p>
          </motion.div>
        </div>

        {/* Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100">
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <span className="text-3xl font-bold text-gray-900">1,500%</span>
            </div>
            <p className="text-gray-600 font-medium">Average ROI</p>
            <p className="text-sm text-gray-500">24-month achievement</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100">
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg">
                <Users className="h-6 w-6 text-white" />
              </div>
              <span className="text-3xl font-bold text-gray-900">$180M</span>
            </div>
            <p className="text-gray-600 font-medium">Annual Savings</p>
            <p className="text-sm text-gray-500">Per enterprise</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-indigo-100">
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className="text-3xl font-bold text-gray-900">234%</span>
            </div>
            <p className="text-gray-600 font-medium">Productivity Gain</p>
            <p className="text-sm text-gray-500">Average improvement</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-green-100">
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2 bg-gradient-to-r from-green-500 to-green-600 rounded-lg">
                <Award className="h-6 w-6 text-white" />
              </div>
              <span className="text-3xl font-bold text-gray-900">99.7%</span>
            </div>
            <p className="text-gray-600 font-medium">Success Rate</p>
            <p className="text-sm text-gray-500">Implementation accuracy</p>
          </div>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => {
            const IconComponent = filter.icon;
            return (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                <IconComponent className="h-4 w-4" />
                <span>{filter.label}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Content Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 gap-8"
        >
          {filteredContent.map((content, index) => (
            <motion.div
              key={content.id}
              variants={itemVariants}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                {/* Content Header */}
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      content.type === 'blog' 
                        ? 'bg-blue-100 text-blue-700'
                        : content.type === 'case-study'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-purple-100 text-purple-700'
                    }`}>
                      {content.type === 'blog' ? 'Blog Post' : 
                       content.type === 'case-study' ? 'Case Study' : 'Implementation Guide'}
                    </span>
                    <div className="flex items-center space-x-1 text-gray-500">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">{content.readingTime}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-purple-600 transition-colors">
                    {content.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {content.description}
                  </p>
                </div>

                {/* Metrics */}
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg p-3">
                      <div className="flex items-center space-x-2">
                        <TrendingUp className="h-4 w-4 text-purple-600" />
                        <span className="font-bold text-purple-700">{content.metrics.roi}</span>
                      </div>
                      <p className="text-xs text-purple-600">ROI Achievement</p>
                    </div>
                    <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-3">
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-blue-600" />
                        <span className="font-bold text-blue-700">{content.metrics.savings}</span>
                      </div>
                      <p className="text-xs text-blue-600">Annual Savings</p>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {content.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                    {content.tags.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        +{content.tags.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* CTA */}
                  <Link
                    href={content.url}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <span>Read {content.type === 'blog' ? 'Article' : content.type === 'case-study' ? 'Case Study' : 'Guide'}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Achieve 1,500% ROI with Neural Interfaces?
            </h3>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Join Fortune 500 companies transforming their operations with brain-computer integration technology
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 hover:bg-gray-50 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Play className="h-5 w-5" />
                <span>Get Free Consultation</span>
              </Link>
              <Link
                href="/resources/neural-interface-implementation-master-guide-2025"
                className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 border border-white/30 flex items-center justify-center space-x-2"
              >
                <CheckCircle className="h-5 w-5" />
                <span>Download Master Guide</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NeuralInterfaceContentShowcase2025;
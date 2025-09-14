'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Star, 
  TrendingUp, 
  Users, 
  Zap, 
  Shield, 
  Brain, 
  Globe,
  CheckCircle,
  Play,
  Download,
  ExternalLink,
  Sparkles,
  Target,
  Award,
  Rocket
} from 'lucide-react';

const UltimateContentShowcase2026 = () => {
  const [activeTab, setActiveTab] = useState('ai-solutions');
  const [hoveredCard, setHoveredCard] = useState(null);

  const contentSections = {
    'ai-solutions': {
      title: 'Revolutionary AI Solutions 2026',
      subtitle: 'Transform Your Business with Next-Generation AI',
      icon: Brain,
      color: 'from-purple-600 to-blue-600',
      content: [
        {
          title: 'Neural Consensus AI',
          description: 'Advanced AI that achieves consensus across multiple neural networks for unprecedented accuracy',
          features: ['99.9% Accuracy', 'Real-time Processing', 'Multi-modal Analysis'],
          image: '/api/placeholder/400/300',
          category: 'AI Technology',
          rating: 5.0,
          users: '10K+',
          price: 'Starting at $299/month'
        },
        {
          title: 'Quantum Neural Fusion',
          description: 'Breakthrough technology combining quantum computing with neural networks',
          features: ['Quantum Speed', 'Neural Learning', 'Hybrid Processing'],
          image: '/api/placeholder/400/300',
          category: 'Quantum AI',
          rating: 4.9,
          users: '5K+',
          price: 'Starting at $599/month'
        },
        {
          title: 'Synthetic Intelligence Platform',
          description: 'Create and deploy synthetic intelligence agents for any business need',
          features: ['Custom Agents', 'API Integration', 'Scalable Deployment'],
          image: '/api/placeholder/400/300',
          category: 'Synthetic AI',
          rating: 4.8,
          users: '15K+',
          price: 'Starting at $199/month'
        }
      ]
    },
    'automation': {
      title: 'Advanced Automation Systems',
      subtitle: 'Automate Everything with Intelligent Systems',
      icon: Zap,
      color: 'from-orange-600 to-red-600',
      content: [
        {
          title: 'Autonomous Business Operations',
          description: 'Fully automated business processes that run without human intervention',
          features: ['Zero Human Input', 'Self-Healing', 'Continuous Optimization'],
          image: '/api/placeholder/400/300',
          category: 'Business Automation',
          rating: 5.0,
          users: '25K+',
          price: 'Starting at $399/month'
        },
        {
          title: 'Intelligent Workflow Engine',
          description: 'Smart workflow automation that adapts to your business needs',
          features: ['Dynamic Workflows', 'AI-Powered Decisions', 'Seamless Integration'],
          image: '/api/placeholder/400/300',
          category: 'Workflow Automation',
          rating: 4.9,
          users: '20K+',
          price: 'Starting at $149/month'
        },
        {
          title: 'Predictive Maintenance AI',
          description: 'Prevent equipment failures before they happen with predictive analytics',
          features: ['Predictive Analytics', 'Real-time Monitoring', 'Cost Reduction'],
          image: '/api/placeholder/400/300',
          category: 'Predictive AI',
          rating: 4.8,
          users: '12K+',
          price: 'Starting at $249/month'
        }
      ]
    },
    'security': {
      title: 'Next-Gen Security Solutions',
      subtitle: 'Protect Your Business with Advanced Security',
      icon: Shield,
      color: 'from-green-600 to-teal-600',
      content: [
        {
          title: 'Quantum-Safe Encryption',
          description: 'Future-proof encryption that resists quantum computer attacks',
          features: ['Quantum-Resistant', 'Military-Grade', 'Future-Proof'],
          image: '/api/placeholder/400/300',
          category: 'Cybersecurity',
          rating: 5.0,
          users: '8K+',
          price: 'Starting at $199/month'
        },
        {
          title: 'AI-Powered Threat Detection',
          description: 'Advanced threat detection using machine learning and behavioral analysis',
          features: ['Real-time Detection', 'Behavioral Analysis', 'Automated Response'],
          image: '/api/placeholder/400/300',
          category: 'Threat Detection',
          rating: 4.9,
          users: '18K+',
          price: 'Starting at $299/month'
        },
        {
          title: 'Zero-Trust Security Framework',
          description: 'Comprehensive zero-trust security implementation for modern businesses',
          features: ['Zero Trust Architecture', 'Continuous Verification', 'Micro-segmentation'],
          image: '/api/placeholder/400/300',
          category: 'Security Framework',
          rating: 4.8,
          users: '14K+',
          price: 'Starting at $349/month'
        }
      ]
    },
    'analytics': {
      title: 'Advanced Analytics & Insights',
      subtitle: 'Unlock the Power of Your Data',
      icon: TrendingUp,
      color: 'from-blue-600 to-indigo-600',
      content: [
        {
          title: 'Predictive Business Intelligence',
          description: 'Advanced BI with predictive capabilities for better decision making',
          features: ['Predictive Analytics', 'Real-time Dashboards', 'Custom Reports'],
          image: '/api/placeholder/400/300',
          category: 'Business Intelligence',
          rating: 5.0,
          users: '22K+',
          price: 'Starting at $179/month'
        },
        {
          title: 'Customer Behavior Analytics',
          description: 'Deep insights into customer behavior and preferences',
          features: ['Behavior Analysis', 'Personalization', 'ROI Tracking'],
          image: '/api/placeholder/400/300',
          category: 'Customer Analytics',
          rating: 4.9,
          users: '16K+',
          price: 'Starting at $129/month'
        },
        {
          title: 'Market Intelligence Platform',
          description: 'Comprehensive market analysis and competitive intelligence',
          features: ['Market Analysis', 'Competitive Intelligence', 'Trend Prediction'],
          image: '/api/placeholder/400/300',
          category: 'Market Intelligence',
          rating: 4.8,
          users: '11K+',
          price: 'Starting at $199/month'
        }
      ]
    }
  };

  const currentSection = contentSections[activeTab];

  const currentSection = contentSections[activeTab];

  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Ultimate Content Showcase 2026
          </div>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-clip-text text-transparent mb-6">
            {currentSection.title}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            {currentSection.subtitle}
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {Object.entries(contentSections).map(([key, section]) => {
            const Icon = section.icon;
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === key
                    ? `bg-gradient-to-r ${section.color} text-white shadow-lg transform scale-105`
                    : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 shadow-md'
                }`}
              >
                <Icon className="w-5 h-5" />
                {section.title.split(' ')[0]}
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
            {currentSection.content.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                {/* Image */}
                <div className="relative h-48 bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                      <Brain className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 backdrop-blur-sm text-slate-700 px-3 py-1 rounded-full text-sm font-medium">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-slate-600">{item.rating}</span>
                    </div>
                  </div>

                  <p className="text-slate-600 mb-4 line-clamp-2">
                    {item.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {item.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4 text-sm text-slate-500">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{item.users}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Target className="w-4 h-4" />
                        <span>Active</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-slate-900">{item.price}</div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <button className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2">
                      <Play className="w-4 h-4" />
                      Try Demo
                    </button>
                    <button className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg font-medium hover:bg-slate-50 transition-colors flex items-center gap-2">
                      <Download className="w-4 h-4" />
                    </button>
                    <button className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg font-medium hover:bg-slate-50 transition-colors flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using our revolutionary AI solutions to achieve unprecedented growth and efficiency.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-purple-50 transition-colors flex items-center gap-2">
                <Rocket className="w-5 h-5" />
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors flex items-center gap-2">
                <Award className="w-5 h-5" />
                View Case Studies
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2026;
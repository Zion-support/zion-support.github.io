'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Globe, 
  Shield, 
  TrendingUp, 
  Users, 
  ArrowRight, 
  Star,
  CheckCircle,
  Rocket,
  Target,
  Award
} from 'lucide-react';

const UltimateContentShowcase2025 = () => {
  const [activeTab, setActiveTab] = useState('ai-solutions');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contentSections = {
    'ai-solutions': {
      title: 'Revolutionary AI Solutions',
      subtitle: 'Transform Your Business with Cutting-Edge AI Technology',
      description: 'Discover our comprehensive suite of AI-powered solutions designed to revolutionize your business operations and drive unprecedented growth.',
      features: [
        {
          icon: Brain,
          title: 'Advanced Machine Learning',
          description: 'Leverage state-of-the-art ML algorithms for predictive analytics and intelligent decision-making.',
          benefits: ['Predictive Analytics', 'Pattern Recognition', 'Automated Insights']
        },
        {
          icon: Zap,
          title: 'Real-time Processing',
          description: 'Process data in real-time with lightning-fast AI algorithms for instant business insights.',
          benefits: ['Instant Analysis', 'Live Monitoring', 'Dynamic Optimization']
        },
        {
          icon: Shield,
          title: 'Enterprise Security',
          description: 'Bank-grade security protocols ensuring your data remains protected and compliant.',
          benefits: ['Data Encryption', 'Access Control', 'Compliance Ready']
        }
      ],
      stats: [
        { label: 'AI Models Deployed', value: '10,000+', icon: Brain },
        { label: 'Processing Speed', value: '99.9%', icon: Zap },
        { label: 'Client Satisfaction', value: '98%', icon: Star }
      ]
    },
    'automation': {
      title: 'Intelligent Automation',
      subtitle: 'Streamline Operations with Smart Automation',
      description: 'Eliminate manual processes and boost efficiency with our intelligent automation solutions that adapt to your business needs.',
      features: [
        {
          icon: Target,
          title: 'Workflow Automation',
          description: 'Automate complex business workflows with intelligent decision-making capabilities.',
          benefits: ['Process Optimization', 'Error Reduction', 'Time Savings']
        },
        {
          icon: Users,
          title: 'Team Collaboration',
          description: 'Enhance team productivity with AI-powered collaboration tools and smart notifications.',
          benefits: ['Smart Scheduling', 'Task Management', 'Communication Hub']
        },
        {
          icon: TrendingUp,
          title: 'Performance Analytics',
          description: 'Track and analyze performance metrics with detailed insights and recommendations.',
          benefits: ['Real-time Metrics', 'Trend Analysis', 'Actionable Insights']
        }
      ],
      stats: [
        { label: 'Processes Automated', value: '500+', icon: Target },
        { label: 'Time Saved', value: '75%', icon: TrendingUp },
        { label: 'Efficiency Gain', value: '300%', icon: Award }
      ]
    },
    'cloud-infrastructure': {
      title: 'Cloud Infrastructure',
      subtitle: 'Scalable, Secure, and Reliable Cloud Solutions',
      description: 'Build and deploy applications on our robust cloud infrastructure designed for enterprise-scale operations.',
      features: [
        {
          icon: Globe,
          title: 'Global Deployment',
          description: 'Deploy your applications across multiple regions with automatic failover and load balancing.',
          benefits: ['Multi-Region', 'Auto-Scaling', 'Load Balancing']
        },
        {
          icon: Shield,
          title: 'Advanced Security',
          description: 'Comprehensive security measures including encryption, monitoring, and threat detection.',
          benefits: ['End-to-End Encryption', 'Threat Detection', 'Compliance']
        },
        {
          icon: Rocket,
          title: 'High Performance',
          description: 'Optimized infrastructure for maximum performance and minimal latency.',
          benefits: ['Low Latency', 'High Throughput', 'Optimized Resources']
        }
      ],
      stats: [
        { label: 'Uptime Guarantee', value: '99.99%', icon: Shield },
        { label: 'Global Regions', value: '15+', icon: Globe },
        { label: 'Performance Boost', value: '400%', icon: Rocket }
      ]
    }
  };

  const currentContent = contentSections[activeTab as keyof typeof contentSections];

  return (
    <div className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4" />
            Ultimate Content Showcase 2025
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            {currentContent.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {currentContent.subtitle}
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            {currentContent.description}
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {Object.keys(contentSections).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              {contentSections[tab as keyof typeof contentSections].title}
            </button>
          ))}
        </motion.div>

        {/* Content Section */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Features */}
            <div className="space-y-8">
              {currentContent.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {feature.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <span
                            key={benefitIndex}
                            className="inline-flex items-center gap-1 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
                          >
                            <CheckCircle className="w-3 h-3" />
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats and CTA */}
            <div className="space-y-8">
              {/* Stats */}
              <div className="grid grid-cols-1 gap-6">
                {currentContent.stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-lg text-center"
                  >
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-600">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center"
              >
                <h3 className="text-2xl font-bold mb-4">
                  Ready to Transform Your Business?
                </h3>
                <p className="text-blue-100 mb-6">
                  Join thousands of companies already using our solutions to drive growth and innovation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300 flex items-center justify-center gap-2">
                    Get Started Today
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300">
                    Learn More
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2025;
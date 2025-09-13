'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Brain, 
  Zap, 
  Shield, 
  Cloud, 
  BarChart3, 
  Users, 
  Target,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Globe,
  Lock,
  Cpu,
  Database,
  Network,
  Rocket,
  Lightbulb,
  Award
} from 'lucide-react';

const UltimateContentShowcase2026 = () => {
  const [activeTab, setActiveTab] = useState('ai-solutions');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contentSections = {
    'ai-solutions': {
      title: 'Revolutionary AI Solutions 2026',
      subtitle: 'Transform Your Business with Next-Generation AI',
      icon: Brain,
      color: 'from-purple-600 to-blue-600',
      content: [
        {
          title: 'Neural Interface Technology',
          description: 'Direct brain-computer interfaces for unprecedented productivity',
          features: ['300% faster decision making', 'Real-time data processing', 'Intuitive control systems'],
          icon: Cpu
        },
        {
          title: 'Quantum AI Processing',
          description: 'Leverage quantum computing for complex problem solving',
          features: ['Exponential speed improvements', 'Advanced pattern recognition', 'Predictive analytics'],
          icon: Zap
        },
        {
          title: 'Autonomous Business Operations',
          description: 'Self-managing systems that adapt and optimize continuously',
          features: ['24/7 automated operations', 'Self-healing infrastructure', 'Intelligent resource allocation'],
          icon: Network
        }
      ]
    },
    'cybersecurity': {
      title: 'Advanced Cybersecurity Suite',
      subtitle: 'Protect Your Digital Assets with Military-Grade Security',
      icon: Shield,
      color: 'from-red-600 to-orange-600',
      content: [
        {
          title: 'AI-Powered Threat Detection',
          description: 'Machine learning algorithms that predict and prevent attacks',
          features: ['Real-time threat analysis', 'Predictive security modeling', 'Automated response systems'],
          icon: Target
        },
        {
          title: 'Zero-Trust Architecture',
          description: 'Never trust, always verify security model',
          features: ['Identity verification', 'Continuous monitoring', 'Least privilege access'],
          icon: Lock
        },
        {
          title: 'Quantum Encryption',
          description: 'Unbreakable encryption using quantum principles',
          features: ['Quantum key distribution', 'Post-quantum cryptography', 'Future-proof security'],
          icon: Award
        }
      ]
    },
    'cloud-infrastructure': {
      title: 'Next-Gen Cloud Infrastructure',
      subtitle: 'Scalable, Secure, and Intelligent Cloud Solutions',
      icon: Cloud,
      color: 'from-blue-600 to-cyan-600',
      content: [
        {
          title: 'Edge Computing Networks',
          description: 'Process data closer to the source for maximum efficiency',
          features: ['Ultra-low latency', 'Distributed processing', 'Real-time analytics'],
          icon: Globe
        },
        {
          title: 'Auto-Scaling Systems',
          description: 'Intelligent resource management that adapts to demand',
          features: ['Dynamic resource allocation', 'Cost optimization', 'Performance monitoring'],
          icon: TrendingUp
        },
        {
          title: 'Hybrid Cloud Solutions',
          description: 'Seamless integration between public and private clouds',
          features: ['Flexible deployment', 'Data sovereignty', 'Compliance management'],
          icon: Database
        }
      ]
    },
    'analytics': {
      title: 'Predictive Analytics Platform',
      subtitle: 'Turn Data into Strategic Insights and Actionable Intelligence',
      icon: BarChart3,
      color: 'from-green-600 to-emerald-600',
      content: [
        {
          title: 'Real-Time Business Intelligence',
          description: 'Instant insights from your data streams',
          features: ['Live dashboards', 'Automated reporting', 'Custom metrics'],
          icon: BarChart3
        },
        {
          title: 'Predictive Modeling',
          description: 'Forecast trends and outcomes with 95% accuracy',
          features: ['Market predictions', 'Customer behavior analysis', 'Risk assessment'],
          icon: TrendingUp
        },
        {
          title: 'AI-Driven Recommendations',
          description: 'Intelligent suggestions for business optimization',
          features: ['Strategic planning', 'Resource optimization', 'Growth opportunities'],
          icon: Lightbulb
        }
      ]
    }
  };

  const tabs = Object.keys(contentSections);

  return (
    <div className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            ULTIMATE CONTENT SHOWCASE 2026
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Revolutionary
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"> Technology</span>
            <br />
            Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience the future of business technology with our cutting-edge AI, cybersecurity, 
            and cloud solutions designed to deliver unprecedented results and competitive advantage.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {tabs.map((tab) => {
            const section = contentSections[tab];
            const Icon = section.icon;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex items-center gap-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === tab
                    ? `bg-gradient-to-r ${section.color} text-white shadow-2xl scale-105`
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                <Icon className="w-5 h-5" />
                {section.title}
              </button>
            );
          })}
        </motion.div>

        {/* Content Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-white mb-4">
                {contentSections[activeTab].title}
              </h3>
              <p className="text-xl text-gray-300">
                {contentSections[activeTab].subtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {contentSections[activeTab].content.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${contentSections[activeTab].color}`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                        {item.title}
                      </h4>
                    </div>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {item.description}
                    </p>
                    
                    <ul className="space-y-3">
                      {item.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3 text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-purple-100 mb-8">
              Join thousands of companies already experiencing 300% ROI with our revolutionary solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-purple-50 transition-all duration-300 flex items-center gap-2 group">
                Get Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center gap-2 group">
                View Case Studies
                <Star className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2026;
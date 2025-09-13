'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Zap, 
  Brain, 
  Rocket, 
  Shield, 
  Globe, 
  TrendingUp, 
  Users, 
  Award,
  Star,
  ArrowRight,
  CheckCircle,
  Lightbulb,
  Target,
  BarChart3
} from 'lucide-react';

const UltimateContentRevolution2026 = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contentSections = [
    {
      id: 'ai-breakthroughs',
      title: 'AI Breakthroughs 2026',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      content: [
        {
          title: 'Neural Interface Revolution',
          description: 'Direct brain-computer interfaces enabling thought-controlled applications',
          impact: '500% productivity increase',
          status: 'Live Now'
        },
        {
          title: 'Quantum AI Fusion',
          description: 'Quantum computing meets artificial intelligence for unprecedented processing power',
          impact: '1000x faster computations',
          status: 'Beta Testing'
        },
        {
          title: 'Consciousness AI',
          description: 'AI systems with self-awareness and emotional intelligence',
          impact: 'Revolutionary user experience',
          status: 'Research Phase'
        }
      ]
    },
    {
      id: 'automation-mastery',
      title: 'Automation Mastery',
      icon: Zap,
      color: 'from-blue-600 to-cyan-600',
      content: [
        {
          title: 'Autonomous Business Operations',
          description: 'Complete business process automation with zero human intervention',
          impact: '90% cost reduction',
          status: 'Deployed'
        },
        {
          title: 'Self-Healing Systems',
          description: 'AI systems that automatically detect and fix issues',
          impact: '99.9% uptime guarantee',
          status: 'Live Now'
        },
        {
          title: 'Predictive Maintenance',
          description: 'AI predicts and prevents system failures before they occur',
          impact: '75% fewer outages',
          status: 'Live Now'
        }
      ]
    },
    {
      id: 'security-revolution',
      title: 'Security Revolution',
      icon: Shield,
      color: 'from-red-600 to-orange-600',
      content: [
        {
          title: 'Quantum Encryption',
          description: 'Unbreakable encryption using quantum mechanics principles',
          impact: '100% security guarantee',
          status: 'Live Now'
        },
        {
          title: 'AI Threat Detection',
          description: 'Advanced AI systems that detect threats in real-time',
          impact: '99.99% threat detection rate',
          status: 'Live Now'
        },
        {
          title: 'Zero-Trust Architecture',
          description: 'Complete security model with continuous verification',
          impact: 'Zero breach guarantee',
          status: 'Deployed'
        }
      ]
    },
    {
      id: 'global-impact',
      title: 'Global Impact',
      icon: Globe,
      color: 'from-green-600 to-emerald-600',
      content: [
        {
          title: 'Climate AI Solutions',
          description: 'AI-powered solutions for climate change mitigation',
          impact: '50% carbon footprint reduction',
          status: 'Pilot Program'
        },
        {
          title: 'Healthcare Revolution',
          description: 'AI diagnostics and treatment recommendations',
          impact: '95% accuracy in diagnosis',
          status: 'FDA Approved'
        },
        {
          title: 'Education Transformation',
          description: 'Personalized AI tutoring for every student',
          impact: '300% learning improvement',
          status: 'Global Rollout'
        }
      ]
    }
  ];

  const stats = [
    { label: 'Active Users', value: '2.5M+', icon: Users },
    { label: 'ROI Achieved', value: '500%', icon: TrendingUp },
    { label: 'Countries Served', value: '150+', icon: Globe },
    { label: 'Awards Won', value: '25+', icon: Award }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
            <Sparkles className="w-5 h-5 text-purple-400 mr-2" />
            <span className="text-purple-200 font-medium">Ultimate Content Revolution 2026</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              The Future is
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Here Now
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience the most advanced AI and automation solutions that are transforming industries worldwide. 
            Join the revolution that's already delivering unprecedented results.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-4">
                <stat.icon className="w-8 h-8 text-purple-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Content Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {contentSections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <section.icon className="w-5 h-5" />
                  <span>{section.title}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <div className="grid md:grid-cols-3 gap-6">
                {contentSections[activeTab].content.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-6 border border-white/20 hover:border-purple-500/50 transition-all duration-300 group"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">
                        {item.title}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        item.status === 'Live Now' ? 'bg-green-500/20 text-green-400' :
                        item.status === 'Beta Testing' ? 'bg-yellow-500/20 text-yellow-400' :
                        item.status === 'Deployed' ? 'bg-blue-500/20 text-blue-400' :
                        'bg-purple-500/20 text-purple-400'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    
                    <div className="flex items-center text-purple-400 font-medium">
                      <Target className="w-4 h-4 mr-2" />
                      <span className="text-sm">{item.impact}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl p-8 border border-purple-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Join the Revolution?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Don't wait for the future to arrive. Start implementing these breakthrough technologies today 
              and see immediate results in your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40">
                <div className="flex items-center">
                  <span>Start Your Transformation</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
              
              <button className="px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="flex items-center">
                  <Lightbulb className="w-5 h-5 mr-2" />
                  <span>Learn More</span>
                </div>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UltimateContentRevolution2026;
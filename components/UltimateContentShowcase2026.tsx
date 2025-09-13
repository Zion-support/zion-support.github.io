'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Globe, 
  Shield, 
  Rocket, 
  Star, 
  TrendingUp, 
  Users, 
  ArrowRight,
  CheckCircle,
  Sparkles,
  Target,
  Lightbulb,
  Cpu,
  Database
} from 'lucide-react';

const UltimateContentShowcase2026 = () => {
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
      color: 'from-purple-600 to-blue-600',
      content: {
        headline: 'Revolutionary AI Technologies That Will Transform Your Business',
        description: 'Discover the latest AI innovations that are reshaping industries and creating unprecedented opportunities for growth.',
        features: [
          'Quantum-Enhanced Neural Networks',
          'Autonomous Business Intelligence',
          'Predictive Analytics 2.0',
          'Natural Language Processing Revolution',
          'Computer Vision Breakthroughs',
          'AI-Powered Decision Making'
        ],
        stats: [
          { label: 'AI Adoption Rate', value: '94%', icon: TrendingUp },
          { label: 'ROI Improvement', value: '340%', icon: Target },
          { label: 'Time Savings', value: '67%', icon: Zap }
        ]
      }
    },
    {
      id: 'automation-solutions',
      title: 'Advanced Automation',
      icon: Cpu,
      color: 'from-green-600 to-teal-600',
      content: {
        headline: 'Next-Generation Automation Solutions',
        description: 'Streamline your operations with cutting-edge automation technologies that work 24/7 to optimize your business processes.',
        features: [
          'Intelligent Process Automation',
          'Robotic Process Automation (RPA)',
          'Workflow Optimization',
          'Smart Document Processing',
          'Automated Customer Service',
          'Predictive Maintenance'
        ],
        stats: [
          { label: 'Process Efficiency', value: '89%', icon: Rocket },
          { label: 'Cost Reduction', value: '52%', icon: Shield },
          { label: 'Error Reduction', value: '95%', icon: CheckCircle }
        ]
      }
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing',
      icon: Database,
      color: 'from-indigo-600 to-purple-600',
      content: {
        headline: 'Quantum Computing Revolution',
        description: 'Harness the power of quantum computing to solve complex problems and unlock new possibilities in data processing.',
        features: [
          'Quantum Machine Learning',
          'Quantum Cryptography',
          'Quantum Optimization',
          'Quantum Simulation',
          'Quantum Neural Networks',
          'Quantum Cloud Computing'
        ],
        stats: [
          { label: 'Processing Speed', value: '1000x', icon: Zap },
          { label: 'Problem Solving', value: '∞', icon: Lightbulb },
          { label: 'Security Level', value: '100%', icon: Shield }
        ]
      }
    },
    {
      id: 'future-tech',
      title: 'Future Technologies',
      icon: Rocket,
      color: 'from-orange-600 to-red-600',
      content: {
        headline: 'Technologies of Tomorrow, Available Today',
        description: 'Get ahead of the curve with emerging technologies that will define the next decade of innovation.',
        features: [
          'Neural Interface Technology',
          'Augmented Reality Solutions',
          'Blockchain Integration',
          'Edge Computing Networks',
          '5G/6G Connectivity',
          'Sustainable Tech Solutions'
        ],
        stats: [
          { label: 'Innovation Index', value: '98%', icon: Star },
          { label: 'Future Readiness', value: '100%', icon: Globe },
          { label: 'Market Impact', value: '85%', icon: TrendingUp }
        ]
      }
    }
  ];

  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  const contentVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 }
  };

  if (!isVisible) return null;

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Ultimate Content Showcase 2026
          </div>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6">
            Revolutionary Technology Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore the most advanced technology solutions that are reshaping industries and creating unprecedented opportunities for business growth and innovation.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {contentSections.map((section, index) => {
            const Icon = section.icon;
            return (
              <button
                key={section.id}
                onClick={() => setActiveTab(index)}
                className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === index
                    ? `bg-gradient-to-r ${section.color} text-white shadow-lg transform scale-105`
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg'
                }`}
              >
                <Icon className="w-5 h-5 mr-2" />
                {section.title}
              </button>
            );
          })}
        </motion.div>

        {/* Content Display */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Content Section */}
                <div className="p-12">
                  <div className="mb-8">
                    <div className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${contentSections[activeTab].color} text-white text-sm font-medium mb-4`}>
                      <contentSections[activeTab].icon className="w-4 h-4 mr-2" />
                      {contentSections[activeTab].title}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      {contentSections[activeTab].content.headline}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {contentSections[activeTab].content.description}
                    </p>
                  </div>

                  {/* Features Grid */}
                  <div className="grid md:grid-cols-2 gap-4 mb-8">
                    {contentSections[activeTab].content.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-center p-3 bg-gray-50 rounded-lg"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-6 mb-8">
                    {contentSections[activeTab].content.stats.map((stat, index) => {
                      const StatIcon = stat.icon;
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                          className="text-center"
                        >
                          <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${contentSections[activeTab].color} text-white mb-2`}>
                            <StatIcon className="w-6 h-6" />
                          </div>
                          <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                          <div className="text-sm text-gray-600">{stat.label}</div>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r ${contentSections[activeTab].color} text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                    Explore Solutions
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </motion.button>
                </div>

                {/* Visual Section */}
                <div className={`bg-gradient-to-br ${contentSections[activeTab].color} p-12 flex items-center justify-center`}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-center text-white"
                  >
                    <contentSections[activeTab].icon className="w-32 h-32 mx-auto mb-6 opacity-80" />
                    <h4 className="text-2xl font-bold mb-4">Ready to Transform?</h4>
                    <p className="text-lg opacity-90 mb-6">
                      Join thousands of businesses already using our revolutionary technology solutions.
                    </p>
                    <div className="flex items-center justify-center space-x-4 text-sm">
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        <span>10,000+ Users</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        <span>4.9/5 Rating</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Revolutionize Your Business?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Get started with our cutting-edge technology solutions and transform your business today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:border-gray-400 transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UltimateContentShowcase2026;
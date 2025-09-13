import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, TrendingUp, Users, Zap, Shield, Brain, Globe, Lock, Rocket } from 'lucide-react';

const ComprehensiveContentShowcase2025 = () => {
  const [activeCategory, setActiveCategory] = useState('ai-automation');
  const [featuredContent, setFeaturedContent] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const contentCategories = {
    'ai-automation': {
      title: 'AI Automation Solutions',
      icon: Brain,
      color: 'from-blue-500 to-purple-600',
      content: [
        {
          id: 'ai-process-automation',
          title: 'Enterprise AI Process Automation Suite',
          description: 'Revolutionary AI-powered automation that reduces operational costs by 60% and increases productivity by 400%.',
          price: '$2,499/month',
          marketPrice: '$4,500-8,000/month',
          savings: 'Save up to $5,500/month',
          features: ['24/7 Autonomous Operations', 'Natural Language Processing', 'Advanced Analytics', 'Custom Integration'],
          benefits: ['Reduce operational costs by 60%', 'Increase productivity by 400%', 'ROI within 2 months', '99.9% uptime guarantee'],
          category: 'AI Automation',
          trending: true,
          new: true
        },
        {
          id: 'ai-content-generation',
          title: 'AI Content Generation Platform Pro',
          description: 'Advanced AI content creation with multi-language support, SEO optimization, and brand voice customization.',
          price: '$899/month',
          marketPrice: '$1,500-3,000/month',
          savings: 'Save up to $2,100/month',
          features: ['Multi-language Support', 'SEO Optimization', 'Brand Voice AI', 'Plagiarism Detection'],
          benefits: ['Save 90% on content creation time', 'Improve SEO rankings by 300%', 'Consistent brand messaging', 'Unlimited content generation'],
          category: 'AI Content',
          trending: true,
          new: false
        }
      ]
    },
    'quantum-computing': {
      title: 'Quantum Computing Solutions',
      icon: Zap,
      color: 'from-purple-500 to-pink-600',
      content: [
        {
          id: 'quantum-risk-assessment',
          title: 'Quantum Financial Risk Assessment Platform',
          description: 'Revolutionary quantum algorithms for financial risk modeling and portfolio optimization with unprecedented accuracy.',
          price: '$4,999/month',
          marketPrice: '$8,000-15,000/month',
          savings: 'Save up to $10,000/month',
          features: ['Quantum Risk Modeling', 'Portfolio Optimization', 'Real-time Analysis', 'Predictive Analytics'],
          benefits: ['Improve risk assessment by 85%', 'Reduce portfolio volatility by 40%', 'Faster decision making', 'Quantum advantage'],
          category: 'Quantum Finance',
          trending: true,
          new: true
        },
        {
          id: 'quantum-encryption',
          title: 'Quantum Cryptography Communication Platform',
          description: 'Unbreakable quantum encryption for ultra-secure communications and data transmission.',
          price: '$3,999/month',
          marketPrice: '$6,000-12,000/month',
          savings: 'Save up to $8,000/month',
          features: ['Quantum Key Distribution', 'Unbreakable Encryption', 'Real-time Communication', 'Future-proof Security'],
          benefits: ['Unbreakable encryption', 'Future-proof against quantum attacks', 'Zero-knowledge protocols', 'Government-grade security'],
          category: 'Quantum Security',
          trending: false,
          new: true
        }
      ]
    },
    'blockchain-web3': {
      title: 'Blockchain & Web3 Services',
      icon: Shield,
      color: 'from-green-500 to-blue-600',
      content: [
        {
          id: 'defi-platform',
          title: 'DeFi Platform Development Suite',
          description: 'Complete decentralized finance platform with smart contracts, liquidity pools, and automated market making.',
          price: '$3,999/month',
          marketPrice: '$7,000-15,000/month',
          savings: 'Save up to $11,000/month',
          features: ['Smart Contract Development', 'Liquidity Pool Management', 'AMM Integration', 'Cross-chain Support'],
          benefits: ['Launch DeFi protocols faster', 'Built-in security audits', 'Scalable architecture', 'Community governance'],
          category: 'DeFi Development',
          trending: true,
          new: false
        },
        {
          id: 'nft-marketplace',
          title: 'NFT Marketplace Platform Pro',
          description: 'Complete NFT marketplace with minting tools, auction systems, and royalty distribution.',
          price: '$2,499/month',
          marketPrice: '$4,000-8,000/month',
          savings: 'Save up to $5,500/month',
          features: ['NFT Minting Tools', 'Auction System', 'Royalty Management', 'Creator Dashboard'],
          benefits: ['Monetize digital assets', 'Build creator communities', 'Secure transactions', 'Built-in royalty system'],
          category: 'NFT Platform',
          trending: false,
          new: true
        }
      ]
    },
    'iot-solutions': {
      title: 'IoT & Smart Solutions',
      icon: Globe,
      color: 'from-orange-500 to-red-600',
      content: [
        {
          id: 'iot-predictive-maintenance',
          title: 'IoT Predictive Maintenance AI Platform',
          description: 'AI-powered predictive maintenance for industrial equipment with real-time monitoring and failure prediction.',
          price: '$1,999/month',
          marketPrice: '$3,500-7,000/month',
          savings: 'Save up to $5,000/month',
          features: ['Real-time Monitoring', 'AI Failure Prediction', 'Maintenance Scheduling', 'Cost Optimization'],
          benefits: ['Reduce downtime by 70%', 'Lower maintenance costs by 45%', 'Predict failures 30 days ahead', 'Optimize resource allocation'],
          category: 'IoT Maintenance',
          trending: true,
          new: false
        },
        {
          id: 'smart-city-platform',
          title: 'Smart City Infrastructure Management Platform',
          description: 'Comprehensive smart city solution for traffic optimization, utility management, and environmental monitoring.',
          price: '$4,999/month',
          marketPrice: '$8,000-15,000/month',
          savings: 'Save up to $10,000/month',
          features: ['Traffic Optimization', 'Utility Management', 'Environmental Monitoring', 'Citizen Engagement'],
          benefits: ['Reduce traffic congestion by 40%', 'Lower utility costs by 35%', 'Improve citizen satisfaction', 'Data-driven decisions'],
          category: 'Smart City',
          trending: false,
          new: true
        }
      ]
    }
  };

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            Revolutionary Technology Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transform your business with our cutting-edge AI, quantum computing, blockchain, and IoT solutions. 
            Experience unprecedented efficiency, security, and innovation.
          </p>
        </motion.div>

        {/* Category Navigation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {Object.entries(contentCategories).map(([key, category]) => {
            const Icon = category.icon;
            const isActive = activeCategory === key;
            
            return (
              <motion.button
                key={key}
                variants={itemVariants}
                onClick={() => setActiveCategory(key)}
                className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                  isActive
                    ? `bg-gradient-to-r ${category.color} text-white shadow-xl transform scale-105`
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-lg hover:shadow-xl'
                }`}
              >
                <Icon size={24} />
                <span>{category.title}</span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Content Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {contentCategories[activeCategory]?.content.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                {/* Card Header */}
                <div className="relative p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {item.new && (
                        <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          NEW
                        </span>
                      )}
                      {item.trending && (
                        <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                          <TrendingUp size={14} />
                          TRENDING
                        </span>
                      )}
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">{item.price}</div>
                      <div className="text-sm text-gray-500 line-through">{item.marketPrice}</div>
                      <div className="text-sm font-semibold text-green-600">{item.savings}</div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Star className="text-yellow-500" size={18} />
                      Key Features
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {item.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Rocket className="text-green-500" size={18} />
                      Business Benefits
                    </h4>
                    <div className="space-y-2">
                      {item.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-2xl font-semibold flex items-center justify-center gap-2 hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                  >
                    Get Started Today
                    <ArrowRight size={20} />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of businesses already using our revolutionary technology solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 py-4 px-8 rounded-2xl font-semibold flex items-center gap-2 hover:bg-gray-50 transition-colors"
              >
                Schedule Free Consultation
                <Users size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white py-4 px-8 rounded-2xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                View All Solutions
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComprehensiveContentShowcase2025;
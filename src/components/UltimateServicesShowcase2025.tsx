import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Zap, 
  Globe, 
  Database, 
  Smartphone, 
  Cloud, 
  Lock,
  TrendingUp,
  Users,
  Code,
  BarChart3,
  Rocket,
  Target,
  Palette,
  Cpu,
  Network,
  FileText,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Lightbulb
} from 'lucide-react';

const UltimateServicesShowcase2025: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('ai');
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const categories = [
    {
      id: 'ai',
      name: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    },
    {
      id: 'security',
      name: 'Cybersecurity',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200'
    },
    {
      id: 'cloud',
      name: 'Cloud Solutions',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      id: 'blockchain',
      name: 'Blockchain & Web3',
      icon: Lock,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      id: 'analytics',
      name: 'Data Analytics',
      icon: BarChart3,
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200'
    }
  ];

  const services = {
    ai: [
      {
        id: 'ai-autonomous-business',
        title: 'AI Autonomous Business Manager',
        description: 'Revolutionary AI system that autonomously manages your entire business operations with minimal human intervention.',
        features: ['Autonomous Decision Making', 'Real-time Market Analysis', 'Automated Operations', 'Predictive Analytics'],
        price: 'Starting at $2,999/month',
        rating: 4.9,
        clients: '500+',
        icon: Brain,
        featured: true,
        new: true
      },
      {
        id: 'ai-legal-research',
        title: 'AI Legal Research Assistant',
        description: 'Advanced AI-powered legal research tool that analyzes case law, statutes, and legal precedents in seconds.',
        features: ['Case Law Analysis', 'Legal Precedent Research', 'Document Review', 'Compliance Checking'],
        price: 'Starting at $1,499/month',
        rating: 4.8,
        clients: '300+',
        icon: FileText,
        featured: true
      },
      {
        id: 'ai-healthcare-analytics',
        title: 'AI Healthcare Analytics Platform',
        description: 'Comprehensive healthcare data analysis platform powered by advanced machine learning algorithms.',
        features: ['Patient Data Analysis', 'Predictive Health Models', 'Treatment Optimization', 'Risk Assessment'],
        price: 'Starting at $3,499/month',
        rating: 4.9,
        clients: '200+',
        icon: TrendingUp
      }
    ],
    security: [
      {
        id: 'advanced-cybersecurity',
        title: 'Advanced Cybersecurity Suite',
        description: 'Comprehensive cybersecurity solution protecting against the latest threats with AI-powered detection.',
        features: ['Threat Detection', 'Real-time Monitoring', 'Incident Response', 'Compliance Management'],
        price: 'Starting at $2,299/month',
        rating: 4.9,
        clients: '400+',
        icon: Shield,
        featured: true
      },
      {
        id: 'quantum-encryption',
        title: 'Quantum Encryption Services',
        description: 'Next-generation quantum encryption technology for ultra-secure data transmission and storage.',
        features: ['Quantum Key Distribution', 'Post-Quantum Cryptography', 'Secure Communication', 'Future-Proof Security'],
        price: 'Starting at $4,999/month',
        rating: 4.8,
        clients: '150+',
        icon: Lock,
        new: true
      }
    ],
    cloud: [
      {
        id: 'multi-cloud-orchestration',
        title: 'Multi-Cloud Orchestration Platform',
        description: 'Seamlessly manage and orchestrate workloads across multiple cloud providers with intelligent automation.',
        features: ['Multi-Cloud Management', 'Auto-Scaling', 'Cost Optimization', 'Disaster Recovery'],
        price: 'Starting at $1,799/month',
        rating: 4.8,
        clients: '350+',
        icon: Cloud,
        featured: true
      },
      {
        id: 'edge-computing',
        title: 'Edge Computing Solutions',
        description: 'Deploy edge computing infrastructure for ultra-low latency applications and IoT ecosystems.',
        features: ['Edge Infrastructure', 'IoT Integration', 'Real-time Processing', 'Global Distribution'],
        price: 'Starting at $2,599/month',
        rating: 4.7,
        clients: '250+',
        icon: Network
      }
    ],
    blockchain: [
      {
        id: 'defi-platform',
        title: 'DeFi Platform Development',
        description: 'Build and deploy decentralized finance platforms with advanced smart contract architecture.',
        features: ['Smart Contract Development', 'DeFi Protocols', 'Token Economics', 'Security Audits'],
        price: 'Starting at $5,999/month',
        rating: 4.9,
        clients: '100+',
        icon: Lock,
        featured: true,
        new: true
      },
      {
        id: 'nft-marketplace',
        title: 'NFT Marketplace Solutions',
        description: 'Complete NFT marketplace development with advanced features and cross-chain compatibility.',
        features: ['NFT Minting', 'Marketplace Features', 'Cross-Chain Support', 'Royalty Management'],
        price: 'Starting at $3,999/month',
        rating: 4.8,
        clients: '200+',
        icon: Palette
      }
    ],
    analytics: [
      {
        id: 'predictive-analytics',
        title: 'Predictive Analytics Engine',
        description: 'Advanced predictive analytics platform using machine learning to forecast business trends and outcomes.',
        features: ['Predictive Modeling', 'Trend Analysis', 'Risk Assessment', 'Business Intelligence'],
        price: 'Starting at $2,199/month',
        rating: 4.8,
        clients: '300+',
        icon: BarChart3,
        featured: true
      },
      {
        id: 'real-time-dashboard',
        title: 'Real-Time Analytics Dashboard',
        description: 'Comprehensive real-time analytics dashboard with customizable widgets and advanced visualization.',
        features: ['Real-Time Data', 'Custom Dashboards', 'Advanced Visualizations', 'Alert Systems'],
        price: 'Starting at $1,599/month',
        rating: 4.7,
        clients: '400+',
        icon: Cpu
      }
    ]
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

  const currentServices = services[activeCategory as keyof typeof services] || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full">
              <Award className="w-5 h-5" />
              <span className="font-semibold">2025 Ultimate Services</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6">
            Next-Generation Technology Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the future of technology with our cutting-edge AI, cybersecurity, cloud, and blockchain solutions. 
            Transform your business with innovative tools designed for the digital age.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.id;
            
            return (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  flex items-center space-x-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300
                  ${isActive 
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg shadow-${category.color.split('-')[1]}-200` 
                    : `bg-white text-gray-700 hover:bg-gray-50 border-2 ${category.borderColor}`
                  }
                `}
              >
                <Icon className="w-5 h-5" />
                <span>{category.name}</span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Services Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {currentServices.map((service) => {
              const Icon = service.icon;
              const category = categories.find(c => c.id === activeCategory);
              
              return (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  onHoverStart={() => setHoveredService(service.id)}
                  onHoverEnd={() => setHoveredService(null)}
                  className={`
                    relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden
                    border-2 ${category?.borderColor} ${service.featured ? 'ring-2 ring-blue-500 ring-opacity-50' : ''}
                  `}
                >
                  {/* Badges */}
                  <div className="absolute top-4 right-4 flex space-x-2 z-10">
                    {service.featured && (
                      <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </span>
                    )}
                    {service.new && (
                      <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                        <Lightbulb className="w-3 h-3 mr-1" />
                        New
                      </span>
                    )}
                  </div>

                  {/* Service Content */}
                  <div className="p-8">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${category?.color} flex items-center justify-center mb-6`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 mr-1" />
                          <span className="font-semibold text-gray-900">{service.rating}</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 text-blue-500 mr-1" />
                          <span className="text-sm text-gray-600">{service.clients} clients</span>
                        </div>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="mb-6">
                      <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {service.price}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`
                        w-full py-3 px-6 rounded-xl font-semibold text-white transition-all duration-300
                        bg-gradient-to-r ${category?.color} hover:shadow-lg
                        flex items-center justify-center space-x-2
                      `}
                    >
                      <span>Get Started</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>

                  {/* Hover Overlay */}
                  <AnimatePresence>
                    {hoveredService === service.id && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 pointer-events-none"
                      />
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using our cutting-edge technology solutions. 
              Get a free consultation and discover how we can accelerate your digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Schedule Free Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                View All Services
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UltimateServicesShowcase2025;
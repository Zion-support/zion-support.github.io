'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Star, 
  TrendingUp, 
  Users, 
  Zap, 
  Shield, 
  Globe, 
  Brain,
  Rocket,
  Target,
  Award,
  CheckCircle,
  Play,
  Download,
  Share2,
  Heart,
  MessageCircle,
  BookOpen,
  Lightbulb,
  Cpu,
  Database,
  Cloud,
  Lock,
  RefreshCw
} from 'lucide-react';

const UltimateContentShowcase2025 = () => {
  const [activeTab, setActiveTab] = useState('ai-innovations');
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contentSections = {
    'ai-innovations': {
      title: 'AI Innovations 2025',
      subtitle: 'Revolutionary AI Technologies Transforming Business',
      icon: Brain,
      color: 'from-purple-600 to-blue-600',
      content: [
        {
          title: 'Neural Interface Revolution',
          description: 'Direct brain-computer interfaces enabling unprecedented human-AI collaboration',
          stats: '500% efficiency boost',
          icon: Cpu,
          featured: true
        },
        {
          title: 'Quantum AI Fusion',
          description: 'Quantum computing meets artificial intelligence for exponential problem-solving',
          stats: '1000x faster processing',
          icon: Zap,
          featured: true
        },
        {
          title: 'Autonomous Business Systems',
          description: 'Self-managing AI systems that optimize operations without human intervention',
          stats: '99.9% uptime achieved',
          icon: RefreshCw,
          featured: false
        },
        {
          title: 'Predictive Analytics Engine',
          description: 'Advanced forecasting models predicting market trends with 95% accuracy',
          stats: '95% prediction accuracy',
          icon: TrendingUp,
          featured: false
        }
      ]
    },
    'business-solutions': {
      title: 'Business Solutions',
      subtitle: 'Complete Enterprise Transformation Platform',
      icon: Target,
      color: 'from-green-600 to-emerald-600',
      content: [
        {
          title: 'Enterprise Automation Suite',
          description: 'End-to-end automation platform reducing operational costs by 80%',
          stats: '80% cost reduction',
          icon: RefreshCw,
          featured: true
        },
        {
          title: 'AI-Powered Customer Service',
          description: 'Intelligent chatbots and virtual assistants with human-level understanding',
          stats: '24/7 availability',
          icon: MessageCircle,
          featured: true
        },
        {
          title: 'Smart Resource Management',
          description: 'AI-driven optimization of workforce and resource allocation',
          stats: '60% efficiency gain',
          icon: Users,
          featured: false
        },
        {
          title: 'Real-time Analytics Dashboard',
          description: 'Comprehensive business intelligence with instant insights',
          stats: 'Real-time insights',
          icon: TrendingUp,
          featured: false
        }
      ]
    },
    'future-tech': {
      title: 'Future Technologies',
      subtitle: 'Next-Generation Solutions for Tomorrow',
      icon: Rocket,
      color: 'from-orange-600 to-red-600',
      content: [
        {
          title: 'Edge AI Computing',
          description: 'Distributed AI processing at the edge for ultra-low latency',
          stats: '10ms response time',
          icon: Cloud,
          featured: true
        },
        {
          title: 'Blockchain Integration',
          description: 'Secure, decentralized AI networks with immutable data integrity',
          stats: '100% data security',
          icon: Shield,
          featured: true
        },
        {
          title: 'Augmented Reality Workspaces',
          description: 'Immersive 3D environments for enhanced productivity',
          stats: '300% productivity boost',
          icon: Globe,
          featured: false
        },
        {
          title: 'IoT Intelligence Hub',
          description: 'Centralized management of connected devices with AI insights',
          stats: '10M+ devices managed',
          icon: Database,
          featured: false
        }
      ]
    }
  };

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CEO, TechCorp',
      content: 'This platform revolutionized our entire operation. We saw 500% ROI in just 6 months.',
      avatar: 'SC',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      role: 'CTO, InnovateLabs',
      content: 'The AI capabilities are beyond anything we\'ve seen. Truly game-changing technology.',
      avatar: 'MR',
      rating: 5
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Research Director, FutureTech',
      content: 'The quantum AI fusion technology opened new possibilities we never imagined.',
      avatar: 'EW',
      rating: 5
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Active Users', icon: Users },
    { number: '500%', label: 'Average ROI', icon: TrendingUp },
    { number: '99.9%', label: 'Uptime', icon: Shield },
    { number: '50+', label: 'Countries', icon: Globe }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-cyan-600/20 animate-pulse" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-6">
            Ultimate Content
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Showcase 2025
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the most advanced AI technologies, business solutions, and future innovations 
            that are reshaping the world in 2025 and beyond.
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
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Navigation Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {Object.entries(contentSections).map(([key, section]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
                activeTab === key
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/50'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              <section.icon className="w-5 h-5 inline-block mr-2" />
              {section.title}
            </button>
          ))}
        </motion.div>

        {/* Content Section */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-white mb-4">
                {contentSections[activeTab].title}
              </h3>
              <p className="text-xl text-gray-300">
                {contentSections[activeTab].subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {contentSections[activeTab].content.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onHoverStart={() => setHoveredCard(index)}
                  onHoverEnd={() => setHoveredCard(null)}
                  className={`relative group cursor-pointer ${
                    item.featured ? 'md:col-span-2' : ''
                  }`}
                >
                  <div className={`relative p-8 rounded-2xl bg-gradient-to-br ${contentSections[activeTab].color} 
                    ${hoveredCard === index ? 'scale-105 shadow-2xl' : 'shadow-lg'} 
                    transition-all duration-300 overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <item.icon className="w-8 h-8 text-white" />
                        {item.featured && (
                          <div className="flex items-center text-yellow-400">
                            <Star className="w-5 h-5 fill-current" />
                            <span className="ml-1 text-sm font-semibold">Featured</span>
                          </div>
                        )}
                      </div>
                      <h4 className="text-2xl font-bold text-white mb-3">{item.title}</h4>
                      <p className="text-gray-200 mb-4">{item.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-semibold text-white">{item.stats}</span>
                        <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-4xl font-bold text-white text-center mb-12">
            What Our Users Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-gray-300 text-sm">{testimonial.role}</div>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-200 italic">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-gray-200 mb-8">
              Join thousands of companies already using our revolutionary AI solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-purple-600 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-300 flex items-center justify-center">
                <Download className="w-5 h-5 mr-2" />
                Download Guide
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2025;
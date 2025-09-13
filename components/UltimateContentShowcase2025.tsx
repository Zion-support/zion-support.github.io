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
  Sparkles,
  Target,
  Lightbulb
} from 'lucide-react';

const UltimateContentShowcase2025 = () => {
  const [activeTab, setActiveTab] = useState('ai-solutions');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contentSections = {
    'ai-solutions': {
      title: "Revolutionary AI Solutions",
      subtitle: "Transform Your Business with Cutting-Edge AI Technology",
      description: "Discover our comprehensive suite of AI-powered solutions designed to revolutionize how you work, think, and succeed in the digital age.",
      features: [
        {
          icon: Brain,
          title: "Advanced AI Automation",
          description: "Streamline operations with intelligent automation that learns and adapts to your business needs.",
          stats: "95% efficiency increase"
        },
        {
          icon: Zap,
          title: "Real-time Processing",
          description: "Lightning-fast AI processing that delivers instant insights and responses.",
          stats: "10x faster processing"
        },
        {
          icon: Shield,
          title: "Enterprise Security",
          description: "Bank-level security protocols ensuring your data remains protected at all times.",
          stats: "99.9% uptime guarantee"
        }
      ]
    },
    'cloud-infrastructure': {
      title: "Next-Gen Cloud Infrastructure",
      subtitle: "Scalable, Secure, and Lightning-Fast Cloud Solutions",
      description: "Build the future on our robust cloud infrastructure designed for enterprise-scale applications and global reach.",
      features: [
        {
          icon: Globe,
          title: "Global Edge Network",
          description: "Deploy your applications closer to users with our worldwide edge computing network.",
          stats: "200+ global locations"
        },
        {
          icon: TrendingUp,
          title: "Auto-Scaling",
          description: "Automatically scale resources based on demand to optimize costs and performance.",
          stats: "50% cost reduction"
        },
        {
          icon: Users,
          title: "Multi-Tenant Architecture",
          description: "Secure, isolated environments for different teams and projects within your organization.",
          stats: "Unlimited scalability"
        }
      ]
    },
    'micro-saas': {
      title: "Micro SaaS Solutions",
      subtitle: "Powerful Tools, Minimal Complexity",
      description: "Deploy specialized software solutions that solve specific business problems with maximum efficiency and minimal overhead.",
      features: [
        {
          icon: Target,
          title: "Focused Solutions",
          description: "Highly specialized tools designed to solve specific business challenges with precision.",
          stats: "90% faster deployment"
        },
        {
          icon: Lightbulb,
          title: "Innovation Ready",
          description: "Built with the latest technologies and designed for easy integration and customization.",
          stats: "100+ integrations"
        },
        {
          icon: Star,
          title: "User-Centric Design",
          description: "Intuitive interfaces that require minimal training and maximize user adoption.",
          stats: "98% user satisfaction"
        }
      ]
    }
  };

  const currentContent = contentSections[activeTab as keyof typeof contentSections];

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: isVisible ? 1 : 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium mb-6"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Ultimate Technology Showcase 2025
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {currentContent.title}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            {currentContent.subtitle}
          </p>
          
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            {currentContent.description}
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {Object.keys(contentSections).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-white text-slate-900 shadow-lg transform scale-105'
                  : 'bg-white/10 text-white hover:bg-white/20 hover:scale-105'
              }`}
            >
              {tab.split('-').map(word => 
                word.charAt(0).toUpperCase() + word.slice(1)
              ).join(' ')}
            </button>
          ))}
        </motion.div>

        {/* Content Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {currentContent.features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-blue-400 font-semibold text-lg">
                    {feature.stats}
                  </span>
                  <CheckCircle className="w-6 h-6 text-green-400" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <span className="flex items-center">
                Explore Solutions
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            
            <button className="group bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 border border-white/30">
              <span className="flex items-center">
                View Case Studies
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>
          
          <p className="text-gray-400 mt-6 text-sm">
            Join 10,000+ companies already transforming their business with our solutions
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2025;
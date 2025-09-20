"use client";
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight
  Star
  Zap
  Sparkles,
  TrendingUp,
  Users,
  Globe,
  X,
  Play,
  Download,
  ExternalLink,
  Brain,
  Cpu,
  Database,
  Cloud,
  Shield
} from 'lucide-react';

const NewContentNavigation = () => {
  const [isVisiblesetIsVisible] = useState(false);
  const [isExpandedsetIsExpanded] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }[]);

  const contentCategories = [
    {
      title: "AI Solutions",
      description: "Revolutionary AI technologies",
      icon: Brain,
      color: "from-purple-600 to-pink-600",
      href: "/ai-solutions",
      items: [
        "Machine Learning",
        "Natural Language Processing",
        "Computer Vision",
        "AI Automation"
      ]
    },
    {
      title: "Quantum Computing",
      description: "Next-generation quantum solutions",
      icon: Cpu,
      color: "from-blue-600 to-cyan-600",
      href: "/quantum-computing",
      items: [
        "Quantum Algorithms",
        "Quantum Machine Learning",
        "Quantum Security",
        "Quantum Optimization"
      ]
    },
    {
      title: "Neural Interfaces",
      description: "Brain-computer interface tech",
      icon: Database,
      color: "from-green-600 to-emerald-600",
      href: "/neural-interfaces",
      items: [
        "BCI Development",
        "Cognitive Enhancement",
        "Medical Applications",
        "Neural Signal Processing"
      ]
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions",
      icon: Cloud,
      color: "from-orange-600 to-red-600",
      href: "/cloud-infrastructure",
      items: [
        "Multi-Cloud Architecture",
        "Container Orchestration",
        "Serverless Computing",
        "Edge Computing"
      ]
    },
    {
      title: "Security Solutions",
      description: "Advanced security measures",
      icon: Shield,
      color: "from-indigo-600 to-purple-600",
      href: "/security-solutions",
      items: [
        "Threat Detection",
        "Data Encryption",
        "Access Control",
        "Compliance Monitoring"
      ]
    },
    {
      title: "Ultimate Showcase",
      description: "Complete technology showcase",
      icon: Sparkles,
      color: "from-pink-600 to-rose-600",
      href: "/showcase/ultimate-2025",
      items: [
        "All Technologies",
        "Interactive Demos",
        "Case Studies",
        "Success Stories"
      ]
    }
  ];

  const featuredContent = [
    {
      title: "AI 2025 Breakthrough",
      description: "Latest AI innovations transforming industries",
      href: "/ai-solutions",
      badge: "HOT",
      icon: TrendingUp
    },
    {
      title: "Quantum Revolution",
      description: "Quantum computing solutions for complex problems",
      href: "/quantum-computing",
      badge: "NEW",
      icon: Zap
    },
    {
      title: "Neural Interface Demo",
      description: "Experience brain-computer interfaces",
      href: "/neural-interfaces",
      badge: "DEMO",
      icon: Play
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            NEW CONTENT 2025
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Explore Revolutionary
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              {" "}Technologies
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover cutting-edge AIquantum computingand neural interface technologies 
            that are reshaping the future of business and human potential.
          </p>
        </div>

        {/* Featured Content */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {featuredContent.map((itemindex) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-white">{item.title}</div>
                    <p className="text-sm text-gray-300">{item.description}</p>
                  </div>
                </div>
                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                  item.badge === 'HOT' ? 'bg-red-500/20 text-red-300' :
                  item.badge === 'NEW' ? 'bg-green-500/20 text-green-300' :
                  'bg-blue-500/20 text-blue-300'
                }`}>
                  {item.badge}
                </span>
              </div>
              
              <Link
                href={item.href}
                className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium group-hover:translate-x-1 transition-all duration-300"
              >
                Explore Now
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Expandable Categories */}
        <div className="text-center mb-8">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20"
          >
            {isExpanded ? 'Hide' : 'Show'} All Categories
            <ArrowRight className={`w-4 h-4 ml-2 transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`} />
          </button>
        </div>

        {/* Categories Grid */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0height: 0 }}
              animate={{ opacity: 1height: 'auto' }}
              exit={{ opacity: 0height: 0 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {contentCategories.map((categoryindex) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                      <p className="text-sm text-gray-300">{category.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    {category.items.map((itemIndex) => (
                      <div key={itemIndex} className="flex items-center text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    href={category.href}
                    className="inline-flex items-center w-full justify-center px-4 py-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-purple-300 font-medium rounded-lg hover:from-purple-600/30 hover:to-blue-600/30 transition-all duration-300 group-hover:translate-y-[-2px]"
                  >
                    Explore {category.title}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6delay: 0.3 }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of companies already using our revolutionary technologies 
              to achieve unprecedented growth and efficiency.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl group"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/demo"
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20 group"
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NewContentNavigation;

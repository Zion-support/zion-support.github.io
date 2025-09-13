'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Zap, 
  Brain, 
  Rocket, 
  Star, 
  TrendingUp, 
  Users, 
  Award,
  ChevronRight,
  Play,
  BookOpen,
  Code,
  Database,
  Cloud,
  Shield,
  Target
} from 'lucide-react';

const NewContentShowcase2025 = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contentCategories = [
    {
      id: 'ai-innovations',
      title: 'AI Innovations 2025',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      content: [
        {
          title: 'Revolutionary AI Breakthroughs',
          description: 'Discover the latest AI technologies transforming industries',
          type: 'Article',
          readTime: '8 min read',
          featured: true,
          tags: ['AI', 'Machine Learning', 'Innovation']
        },
        {
          title: 'Neural Interface Revolution',
          description: 'Explore next-generation brain-computer interfaces',
          type: 'Case Study',
          readTime: '12 min read',
          featured: true,
          tags: ['Neural Interface', 'BCI', 'Future Tech']
        },
        {
          title: 'Quantum AI Fusion',
          description: 'Understanding quantum computing meets artificial intelligence',
          type: 'Guide',
          readTime: '15 min read',
          featured: false,
          tags: ['Quantum Computing', 'AI', 'Advanced Tech']
        }
      ]
    },
    {
      id: 'automation-solutions',
      title: 'Automation Solutions',
      icon: Zap,
      color: 'from-blue-500 to-cyan-500',
      content: [
        {
          title: 'Enterprise Automation Mastery',
          description: 'Complete guide to automating business processes',
          type: 'Tutorial',
          readTime: '20 min read',
          featured: true,
          tags: ['Automation', 'Enterprise', 'Efficiency']
        },
        {
          title: 'RPA Implementation Strategies',
          description: 'Best practices for robotic process automation',
          type: 'Guide',
          readTime: '10 min read',
          featured: false,
          tags: ['RPA', 'Implementation', 'Strategy']
        },
        {
          title: 'Workflow Optimization',
          description: 'Streamline your operations with smart workflows',
          type: 'Article',
          readTime: '6 min read',
          featured: false,
          tags: ['Workflow', 'Optimization', 'Productivity']
        }
      ]
    },
    {
      id: 'cloud-infrastructure',
      title: 'Cloud Infrastructure',
      icon: Cloud,
      color: 'from-green-500 to-emerald-500',
      content: [
        {
          title: 'Multi-Cloud Architecture',
          description: 'Designing resilient cloud infrastructure',
          type: 'Architecture',
          readTime: '25 min read',
          featured: true,
          tags: ['Cloud', 'Architecture', 'Scalability']
        },
        {
          title: 'Edge Computing Solutions',
          description: 'Bringing compute closer to data sources',
          type: 'Case Study',
          readTime: '18 min read',
          featured: true,
          tags: ['Edge Computing', 'IoT', 'Performance']
        },
        {
          title: 'Serverless Best Practices',
          description: 'Optimizing serverless applications for scale',
          type: 'Guide',
          readTime: '14 min read',
          featured: false,
          tags: ['Serverless', 'Best Practices', 'Scalability']
        }
      ]
    },
    {
      id: 'security-innovation',
      title: 'Security Innovation',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      content: [
        {
          title: 'Zero Trust Architecture',
          description: 'Implementing comprehensive security frameworks',
          type: 'Security',
          readTime: '22 min read',
          featured: true,
          tags: ['Security', 'Zero Trust', 'Architecture']
        },
        {
          title: 'AI-Powered Threat Detection',
          description: 'Using machine learning for cybersecurity',
          type: 'Innovation',
          readTime: '16 min read',
          featured: true,
          tags: ['AI Security', 'Threat Detection', 'ML']
        },
        {
          title: 'Blockchain Security Patterns',
          description: 'Securing decentralized applications',
          type: 'Guide',
          readTime: '12 min read',
          featured: false,
          tags: ['Blockchain', 'Security', 'DApps']
        }
      ]
    }
  ];

  const getContentIcon = (type: string) => {
    switch (type) {
      case 'Article': return BookOpen;
      case 'Case Study': return Target;
      case 'Guide': return Code;
      case 'Tutorial': return Play;
      case 'Architecture': return Database;
      case 'Security': return Shield;
      case 'Innovation': return Sparkles;
      default: return BookOpen;
    }
  };

  if (!isVisible) return null;

  return (
    <div className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            New Content Available
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Discover Our Latest
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Content Collection</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore cutting-edge insights, tutorials, and case studies covering the latest in AI, automation, cloud computing, and security innovation.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {contentCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveTab(index)}
                className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === index
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg transform scale-105`
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg'
                }`}
              >
                <Icon className="w-5 h-5 mr-2" />
                {category.title}
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
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {contentCategories[activeTab].content.map((item, index) => {
              const ContentIcon = getContentIcon(item.type);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                    item.featured ? 'ring-2 ring-blue-500 ring-opacity-50' : ''
                  }`}
                >
                  {item.featured && (
                    <div className="absolute top-4 right-4 z-10">
                      <div className="flex items-center px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-bold rounded-full">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </div>
                    </div>
                  )}
                  
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${contentCategories[activeTab].color} bg-opacity-10`}>
                        <ContentIcon className={`w-6 h-6 bg-gradient-to-r ${contentCategories[activeTab].color} bg-clip-text text-transparent`} />
                      </div>
                      <span className="ml-3 text-sm font-medium text-gray-500">{item.type}</span>
                      <span className="ml-auto text-sm text-gray-400">{item.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {item.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <button className="w-full flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 group-hover:shadow-lg">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Read More
                      <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
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
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Stay Updated with Latest Content</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Get notified when we publish new insights, tutorials, and case studies. Join thousands of professionals staying ahead of the curve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              />
              <button className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NewContentShowcase2025;
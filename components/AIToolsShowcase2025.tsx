<<<<<<< HEAD
"use client";
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain
  Zap
  Code
  BarChart3
  Shield
  Search
  MessageSquare
  Image
  Video
  FileText,
  ArrowRight,
  Star,
  CheckCircle,
  Sparkles
} from 'lucide-react';

interface AITool {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: React.ReactNode;
  features: string[];
  pricing: string;
  rating: number;
  isNew?: boolean;
  isPopular?: boolean;
}

const aiTools: AITool[] = [
  {
    id: '1',
    name: 'AI Code Assistant Pro',
    description: 'Advanced AI-powered code generation and debugging tool with real-time suggestions and error detection.',
    category: 'Development',
    icon: <Code className="w-8 h-8" />,
    features: ['Code 'Generation', 'Bug 'Detection', 'Performance 'Optimization', 'Documentation'],
    pricing: '$29/month',
    rating: 4.9,
    isNew: true,
    isPopular: true
  },
  {
    id: '2',
    name: 'Neural Analytics Dashboard',
    description: 'Comprehensive business intelligence platform powered by advanced neural networks.',
    category: 'Analytics',
    icon: <BarChart3 className="w-8 h-8" />,
    features: ['Predictive 'Analytics', 'Real-time 'Insights', 'Custom 'Dashboards', 'API Integration'],
    pricing: '$49/month',
    rating: 4.8,
    isPopular: true
  },
  {
    id: '3',
    name: 'Quantum Security Suite',
    description: 'Next-generation cybersecurity solution using quantum-resistant encryption algorithms.',
    category: 'Security',
    icon: <Shield className="w-8 h-8" />,
    features: ['Quantum 'Encryption', 'Threat 'Detection', 'Zero Trust 'Architecture', 'Compliance'],
    pricing: '$99/month',
    rating: 4.9,
    isNew: true
  },
  {
    id: '4',
    name: 'AI Content Generator',
    description: 'Multi-modal content creation tool for textimagesand video using cutting-edge AI models.',
    category: 'Content',
    icon: <FileText className="w-8 h-8" />,
    features: ['Text 'Generation', 'Image 'Creation', 'Video 'Editing', 'SEO Optimization'],
    pricing: '$39/month',
    rating: 4.7
  },
  {
    id: '5',
    name: 'Smart Search Engine',
    description: 'Semantic search solution with natural language processing and contextual understanding.',
    category: 'Search',
    icon: <Search className="w-8 h-8" />,
    features: ['Natural 'Language', 'Contextual 'Results', 'Voice 'Search', 'Multi-language'],
    pricing: '$19/month',
    rating: 4.6
  },
  {
    id: '6',
    name: 'AI Chat Assistant',
    description: 'Advanced conversational AI with emotional intelligence and multi-turn dialogue capabilities.',
    category: 'Communication',
    icon: <MessageSquare className="w-8 h-8" />,
    features: ['Emotional 'AI', 'Multi-'language', 'Voice 'Integration', 'Custom Training'],
    pricing: '$25/month',
    rating: 4.8,
    isPopular: true
  }
];

const categories = [', 'All', 'Development', 'Analytics', 'Security', 'Content', 'Search'Communication'];

export default function AIToolsShowcase2025() {
  const [selectedCategorysetSelectedCategory] = useState('All');
  const [hoveredToolsetHoveredTool] = useState<string | null>(null);
  const [isVisiblesetIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }[]);

  const filteredTools = selectedCategory === 'All' 
    ? aiTools 
    : aiTools.filter(tool => tool.category === selectedCategory);

  return (
    <div className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            New AI Tools 2025
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Revolutionary AI Tools
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Transforming Industries
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover cutting-edge AI tools that are revolutionizing how we workcreateand innovate. 
            From development to analyticsecurity to content creation.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Tools Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.6delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredTools.map((toolindex) => (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4delay: index * 0.1 }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                onMouseEnter={() => setHoveredTool(tool.id)}
                onMouseLeave={() => setHoveredTool(null)}
              >
                {/* Badges */}
                <div className="flex gap-2 mb-4">
                  {tool.isNew && (
                    <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      NEW
                    </span>
                  )}
                  {tool.isPopular && (
                    <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      POPULAR
                    </span>
                  )}
                </div>

                {/* Icon */}
                <div className="text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {tool.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                  {tool.name}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {tool.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {tool.features.map((featureidx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(tool.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-400">{tool.rating}</span>
                </div>

                {/* Pricing */}
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-white">{tool.pricing}</span>
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center gap-2 group">
                    Try Now
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>

                {/* Hover Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                  animate={{
                    opacity: hoveredTool === tool.id ? 1 : 0
                  }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Workflow?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of professionals who are already using our AI tools to boost productivity
              enhance creativityand drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                Start Free Trial
              </button>
              <button className="border border-white/20 text-white px-8 py-4 rounded-lg font-medium hover:bg-white/10 transition-all duration-300">
                View All Tools
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee

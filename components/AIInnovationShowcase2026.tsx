'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
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
  Database,
  Cloud,
  Lock,
  Award,
  ChevronRight,
  Play,
  Download,
  ExternalLink,
  BarChart3,
  Settings,
  Code,
  Layers,
  Network,
  Bot,
  Eye,
  MessageSquare,
  FileText,
  Image,
  Video,
  Mic,
  Search,
  Filter,
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail,
  Share2,
  Heart,
  Bookmark,
  Flag,
  AlertCircle,
  Info,
  HelpCircle,
  X,
  Plus,
  Edit,
  Trash2,
  Copy,
  Save,
  Upload,
  RefreshCw,
  RotateCcw,
  ChevronLeft,
  ChevronDown,
  ChevronUp,
  Menu,
  XCircle,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';

const AIInnovationShowcase2026 = () => {
  const [activeCategory, setActiveCategory] = useState('ai-tools');
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = {
    'ai-tools': {
      title: 'AI Tools & Utilities',
      description: 'Cutting-edge AI-powered tools for productivity and creativity',
      icon: Bot,
      color: 'from-blue-600 to-purple-600'
    },
    'machine-learning': {
      title: 'Machine Learning',
      description: 'Advanced ML models and frameworks for data science',
      icon: Brain,
      color: 'from-green-600 to-teal-600'
    },
    'computer-vision': {
      title: 'Computer Vision',
      description: 'AI systems that can see and understand visual content',
      icon: Eye,
      color: 'from-orange-600 to-red-600'
    },
    'natural-language': {
      title: 'Natural Language Processing',
      description: 'AI that understands and generates human language',
      icon: MessageSquare,
      color: 'from-purple-600 to-pink-600'
    },
    'automation': {
      title: 'Intelligent Automation',
      description: 'Smart automation solutions for business processes',
      icon: Settings,
      color: 'from-cyan-600 to-blue-600'
    },
    'analytics': {
      title: 'AI Analytics',
      description: 'Data analysis and insights powered by artificial intelligence',
      icon: BarChart3,
      color: 'from-indigo-600 to-purple-600'
    }
  };

  const innovations = [
    {
      id: 1,
      title: 'AI Content Generator Pro',
      description: 'Generate high-quality content for blogs, social media, and marketing materials using advanced AI.',
      category: 'ai-tools',
      image: '/api/placeholder/400/300',
      rating: 4.9,
      users: 25000,
      price: 'Free',
      features: ['Multi-language Support', 'SEO Optimization', 'Content Templates', 'Brand Voice Matching'],
      tags: ['Content Creation', 'AI Writing', 'Marketing', 'SEO'],
      status: 'Popular',
      trending: true,
      demo: true,
      api: true
    },
    {
      id: 2,
      title: 'Neural Image Enhancer',
      description: 'Transform low-quality images into high-resolution masterpieces using deep learning algorithms.',
      category: 'computer-vision',
      image: '/api/placeholder/400/300',
      rating: 4.8,
      users: 18000,
      price: '$29/month',
      features: ['Upscaling', 'Noise Reduction', 'Color Enhancement', 'Batch Processing'],
      tags: ['Image Processing', 'AI Enhancement', 'Photography', 'Graphics'],
      status: 'New',
      trending: true,
      demo: true,
      api: true
    },
    {
      id: 3,
      title: 'Smart Code Assistant',
      description: 'AI-powered coding companion that helps developers write better code faster.',
      category: 'ai-tools',
      image: '/api/placeholder/400/300',
      rating: 4.7,
      users: 35000,
      price: '$19/month',
      features: ['Code Completion', 'Bug Detection', 'Refactoring', 'Documentation'],
      tags: ['Development', 'Code Review', 'Productivity', 'AI Assistant'],
      status: 'Stable',
      trending: false,
      demo: true,
      api: true
    },
    {
      id: 4,
      title: 'Predictive Analytics Engine',
      description: 'Advanced machine learning models for business forecasting and trend analysis.',
      category: 'analytics',
      image: '/api/placeholder/400/300',
      rating: 4.6,
      users: 12000,
      price: '$99/month',
      features: ['Time Series Analysis', 'Anomaly Detection', 'Custom Models', 'Real-time Insights'],
      tags: ['Analytics', 'Predictions', 'Business Intelligence', 'Data Science'],
      status: 'Enterprise',
      trending: false,
      demo: true,
      api: true
    },
    {
      id: 5,
      title: 'Voice Synthesis Studio',
      description: 'Create natural-sounding voiceovers and audio content with AI voice synthesis.',
      category: 'natural-language',
      image: '/api/placeholder/400/300',
      rating: 4.8,
      users: 15000,
      price: '$39/month',
      features: ['Multiple Voices', 'Emotion Control', 'Language Support', 'Audio Export'],
      tags: ['Voice Synthesis', 'Audio', 'NLP', 'Content Creation'],
      status: 'Popular',
      trending: true,
      demo: true,
      api: true
    },
    {
      id: 6,
      title: 'Automated Workflow Designer',
      description: 'Visual workflow automation tool that learns from your processes and suggests optimizations.',
      category: 'automation',
      image: '/api/placeholder/400/300',
      rating: 4.5,
      users: 22000,
      price: '$49/month',
      features: ['Visual Designer', 'Process Learning', 'Integration Hub', 'Performance Analytics'],
      tags: ['Workflow', 'Automation', 'Productivity', 'Business Process'],
      status: 'Stable',
      trending: false,
      demo: true,
      api: true
    }
  ];

  const filteredInnovations = innovations.filter(item => item.category === activeCategory);

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2" />
            AI Innovation Showcase 2026
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Revolutionary AI
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Innovations
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest AI tools, machine learning models, and intelligent automation solutions that are reshaping industries and empowering businesses worldwide.
          </p>
        </motion.div>

        {/* Category Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {Object.entries(categories).map(([key, category]) => {
            const Icon = category.icon;
            return (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === key
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

        {/* Innovation Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredInnovations.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onHoverStart={() => setHoveredItem(item.id)}
                onHoverEnd={() => setHoveredItem(null)}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Status Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    item.status === 'New' ? 'bg-green-100 text-green-800' :
                    item.status === 'Popular' ? 'bg-blue-100 text-blue-800' :
                    item.status === 'Enterprise' ? 'bg-purple-100 text-purple-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {item.status}
                  </span>
                </div>

                {/* Trending Badge */}
                {item.trending && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 flex items-center">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Trending
                    </span>
                  </div>
                )}

                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  
                  {/* Demo Badge */}
                  {item.demo && (
                    <div className="absolute bottom-4 left-4">
                      <span className="px-2 py-1 bg-white/90 text-gray-800 text-xs rounded-full flex items-center">
                        <Play className="w-3 h-3 mr-1" />
                        Demo Available
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Title and Rating */}
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <div className="flex items-center text-yellow-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-medium text-gray-600">{item.rating}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {item.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {item.features.slice(0, 2).map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md"
                        >
                          {feature}
                        </span>
                      ))}
                      {item.features.length > 2 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                          +{item.features.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {item.users.toLocaleString()} users
                    </div>
                    <div className="font-medium text-gray-900">
                      {item.price}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {item.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group">
                      <Play className="w-4 h-4 mr-2" />
                      Try Demo
                    </button>
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                      <Bookmark className="w-4 h-4" />
                    </button>
                  </div>

                  {/* API Badge */}
                  {item.api && (
                    <div className="mt-3 flex items-center justify-center">
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full flex items-center">
                        <Code className="w-3 h-3 mr-1" />
                        API Available
                      </span>
                    </div>
                  )}
                </div>

                {/* Hover Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: hoveredItem === item.id ? 1 : 0 
                  }}
                  className="absolute inset-0 bg-gradient-to-t from-blue-600/90 to-purple-600/90 flex items-center justify-center"
                >
                  <div className="text-center text-white p-6">
                    <h4 className="text-xl font-bold mb-2">Explore Innovation</h4>
                    <p className="text-sm mb-4">Discover how this AI solution can transform your workflow</p>
                    <div className="flex gap-2">
                      <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                        View Details
                      </button>
                      <button className="border border-white text-white px-4 py-2 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors">
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Innovate with AI?</h3>
            <p className="text-xl mb-6 opacity-90">
              Join thousands of developers and businesses already using our AI innovations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center">
                <Star className="w-5 h-5 mr-2" />
                Start Building
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors">
                View Documentation
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AIInnovationShowcase2026;
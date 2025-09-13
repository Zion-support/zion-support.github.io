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

const AIInnovationShowcase2026PromotionBanner = () => {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Bot,
      title: 'AI Tools & Utilities',
      description: 'Cutting-edge AI-powered tools for productivity and creativity',
      color: 'from-blue-600 to-purple-600',
      stats: '50+ Tools'
    },
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Advanced ML models and frameworks for data science',
      color: 'from-green-600 to-teal-600',
      stats: '100+ Models'
    },
    {
      icon: Eye,
      title: 'Computer Vision',
      description: 'AI systems that can see and understand visual content',
      color: 'from-orange-600 to-red-600',
      stats: '25+ Solutions'
    },
    {
      icon: MessageSquare,
      title: 'Natural Language',
      description: 'AI that understands and generates human language',
      color: 'from-purple-600 to-pink-600',
      stats: '30+ APIs'
    }
  ];

  const innovations = [
    {
      title: 'AI Content Generator Pro',
      description: 'Generate high-quality content for blogs, social media, and marketing materials',
      rating: 4.9,
      users: '25K+',
      category: 'AI Tools'
    },
    {
      title: 'Neural Image Enhancer',
      description: 'Transform low-quality images into high-resolution masterpieces',
      rating: 4.8,
      users: '18K+',
      category: 'Computer Vision'
    },
    {
      title: 'Smart Code Assistant',
      description: 'AI-powered coding companion that helps developers write better code',
      rating: 4.7,
      users: '35K+',
      category: 'AI Tools'
    },
    {
      title: 'Voice Synthesis Studio',
      description: 'Create natural-sounding voiceovers and audio content with AI',
      rating: 4.8,
      users: '15K+',
      category: 'NLP'
    }
  ];

  const stats = [
    { number: '200+', label: 'AI Innovations' },
    { number: '500K+', label: 'Active Users' },
    { number: '99.9%', label: 'Uptime' },
    { number: '24/7', label: 'Support' }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium mb-6"
            >
              <Star className="w-4 h-4 mr-2" />
              🚀 NEW: AI Innovation Showcase 2026
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            >
              Revolutionary AI
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Innovations
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-300 mb-8 leading-relaxed"
            >
              Discover the latest AI tools, machine learning models, and intelligent automation solutions that are reshaping industries and empowering businesses worldwide.
            </motion.p>

            {/* Feature Showcase */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-8"
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentFeature}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center space-x-4"
                  >
                    <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${features[currentFeature].color} rounded-lg flex items-center justify-center`}>
                      {React.createElement(features[currentFeature].icon, { className: "w-6 h-6 text-white" })}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {features[currentFeature].title}
                      </h3>
                      <p className="text-sm text-gray-300 mb-2">
                        {features[currentFeature].description}
                      </p>
                      <div className="text-xs text-blue-400 font-medium">
                        {features[currentFeature].stats}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
                
                {/* Feature Dots */}
                <div className="flex justify-center mt-4 space-x-2">
                  {features.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentFeature(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentFeature
                          ? 'bg-blue-400 scale-125'
                          : 'bg-white/30 hover:bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-xl">
                <Star className="w-5 h-5 mr-2" />
                Explore Innovations
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
            </motion.div>
          </motion.div>

          {/* Right Content - Innovation Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {innovations.map((innovation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {innovation.title}
                    </h3>
                    <p className="text-sm text-gray-300 mb-3">
                      {innovation.description}
                    </p>
                    <div className="flex items-center space-x-4 text-xs text-gray-400">
                      <div className="flex items-center">
                        <Star className="w-3 h-3 text-yellow-400 fill-current mr-1" />
                        {innovation.rating}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-3 h-3 mr-1" />
                        {innovation.users}
                      </div>
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded">
                        {innovation.category}
                      </span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <button className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Innovate with AI?
            </h3>
            <p className="text-gray-300 mb-6">
              Join thousands of developers and businesses already using our AI innovations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                <Award className="w-5 h-5 mr-2" />
                Start Building
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center">
                <ExternalLink className="w-5 h-5 mr-2" />
                View Documentation
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AIInnovationShowcase2026PromotionBanner;
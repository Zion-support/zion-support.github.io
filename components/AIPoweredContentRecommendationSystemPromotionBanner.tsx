"use client";
'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain
  Sparkles
  TrendingUp
  Target
  Users
  Clock
  Star,
  ArrowRight,
  BookOpen,
  Play,
  Download,
  Share2,
  Heart,
  Eye,
  Tag,
  Calendar,
  User,
  Zap,
  Cpu,
  Globe,
  Database,
  Cloud,
  Shield,
  CheckCircle,
  AlertCircle,
  RefreshCw,
  Filter,
  Search,
  Settings,
  BarChart3,
  Activity,
  Lightbulb,
  Rocket,
  Award,
  ThumbsUp
} from 'lucide-react';

const AIPoweredContentRecommendationSystemPromotionBanner = () => {
  const [isVisiblesetIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }[]);

  const features = [
    'AI-Powered Personalization',
    'Real-Time Content Analysis',
    'Smart Recommendation Engine',
    'Behavioral Pattern Recognition',
    'Engagement Optimization',
    'Cross-Platform Content Discovery'
  ];

  const stats = [
    { value: '94.2%'label: 'AI 'Accuracy', 'icon: Target },
    { value: '98.7%'label: ''Personalization', 'icon: Users },
    { value: '+67%'label: 'Engagement 'Boost', 'icon: TrendingUp },
    { value: '1,247'label: 'Content 'Matched', 'icon: Database }
  ];

  const recommendationTypes = [
    { icon: BookOpenlabel: 'Blog 'Posts', 'count: '342'color: 'blue' },
    { icon: Targetlabel: 'Case 'Studies', 'count: '156'color: 'purple' },
    { icon: Playlabel: ''Tutorials', 'count: '289'color: 'green' },
    { icon: Cpulabel: ''Research', 'count: '123'color: 'orange' },
    { icon: Activitylabel: ''Videos', 'count: '89'color: 'red' },
    { icon: Shieldlabel: ''Whitepapers', 'count: '78'color: 'indigo' }
  ];

  const aiCapabilities = [
    {
      title: 'Neural Pattern Recognition',
      description: 'Advanced AI algorithms analyze your reading patterns and preferences',
      icon: Brain,
      accuracy: '94.2%'
    },
    {
      title: 'Behavioral Analysis',
      description: 'Machine learning models understand your content consumption habits',
      icon: Users,
      accuracy: '98.7%'
    },
    {
      title: 'Content Optimization',
      description: 'AI continuously optimizes recommendations based on engagement data',
      icon: TrendingUp,
      accuracy: '+67%'
    },
    {
      title: 'Real-Time Processing',
      description: 'Instant content analysis and recommendation generation',
      icon: Zap,
      accuracy: '<100ms'
    }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/10">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute top-32 right-20 w-24 h-24 bg-yellow-400/20 rounded-full blur-lg"></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-pink-400/10 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-cyan-400/20 rounded-full blur-lg"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
            <Brain className="w-4 h-4 mr-2" />
            AI-Powered Intelligence
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Discover Content with
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              AI Intelligence
            </span>
          </h1>
          
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Experience the future of content discovery with our advanced AI recommendation system. 
            Get personalized content suggestions that match your interests and boost engagement by 67%.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-purple-600 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 flex items-center justify-center group">
              <Brain className="w-5 h-5 mr-2" />
              Try AI Recommendations
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-xl font-semibold hover:bg-white/30 transition-all duration-300 flex items-center justify-center group">
              <BarChart3 className="w-5 h-5 mr-2" />
              View Analytics
              <TrendingUp className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </motion.div>

        {/* AI Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {stats.map((statindex) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-blue-100 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* AI Capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {aiCapabilities.map((capabilityindex) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                  <capability.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{capability.title}</h3>
                  <div className="text-yellow-400 text-sm font-medium">{capability.accuracy}</div>
                </div>
              </div>
              <p className="text-blue-100 text-sm">{capability.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {features.map((featureindex) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{feature}</h3>
              </div>
              <p className="text-blue-100 text-sm">
                Advanced AI capabilities that revolutionize how you discover and engage with content.
              </p>
            </div>
          ))}
        </motion.div>

        {/* Content Types Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8delay: 0.8 }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-12"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">AI-Powered Content Discovery</h2>
            <p className="text-blue-100">Intelligent recommendations across all content types</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {recommendationTypes.map((typeindex) => (
              <div key={index} className="text-center group">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-${type.color}-500/20 rounded-2xl mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <type.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-white font-semibold text-sm mb-1">{type.label}</div>
                <div className="text-blue-200 text-xs">{type.count} items</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* AI Demo Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8delay: 1.0 }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-12"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">See AI in Action</h2>
            <p className="text-blue-100">Watch how our AI analyzes your preferences and generates recommendations</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <Brain className="w-5 h-5 text-yellow-400 mr-2" />
                  <span className="text-white font-medium">AI Analysis</span>
                </div>
                <div className="text-blue-100 text-sm">
                  Analyzing reading patternsengagement historyand content preferences...
                </div>
              </div>
              
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <Target className="w-5 h-5 text-green-400 mr-2" />
                  <span className="text-white font-medium">Pattern Recognition</span>
                </div>
                <div className="text-blue-100 text-sm">
                  Identified 12 content themes and 8 engagement patterns from your activity.
                </div>
              </div>
              
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <Sparkles className="w-5 h-5 text-purple-400 mr-2" />
                  <span className="text-white font-medium">Recommendations Generated</span>
                </div>
                <div className="text-blue-100 text-sm">
                  Generated 24 personalized content recommendations with 94.2% accuracy.
                </div>
              </div>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Live AI Metrics</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-blue-100">Personalization Score</span>
                  <span className="text-white font-bold">98.7%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-400 to-blue-400 h-2 rounded-full" style={{width: '98.7%'}}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-blue-100">Content Match Rate</span>
                  <span className="text-white font-bold">94.2%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-400 h-2 rounded-full" style={{width: '94.2%'}}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-blue-100">Engagement Boost</span>
                  <span className="text-white font-bold">+67%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full" style={{width: '67%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8delay: 1.2 }}
          className="text-center"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Experience AI-Powered Content Discovery?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join thousands of users who are already discovering their perfect content with our 
              advanced AI recommendation system. Boost engagement and save time with intelligent suggestions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-xl font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 flex items-center justify-center group">
                <Brain className="w-5 h-5 mr-2" />
                Start AI Recommendations
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-xl font-semibold hover:bg-white/30 transition-all duration-300 flex items-center justify-center group">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
                <RefreshCw className="w-4 h-4 ml-2 group-hover:rotate-180 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AIPoweredContentRecommendationSystemPromotionBanner;

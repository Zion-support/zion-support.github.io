'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  TrendingUp, 
  Shield, 
  Users, 
  Zap, 
  Star,
  CheckCircle,
  Clock,
  Target,
  Award,
  BookOpen,
  FileText,
  BarChart3
} from 'lucide-react';

const RevolutionaryAI2025Banner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);

  const stats = [
    { value: '340%', label: 'Average ROI', icon: TrendingUp, color: 'text-green-400' },
    { value: '500+', label: 'Success Stories', icon: Users, color: 'text-blue-400' },
    { value: '$2.8B', label: 'Value Created', icon: BarChart3, color: 'text-purple-400' },
    { value: '98%', label: 'Satisfaction', icon: Star, color: 'text-yellow-400' }
  ];

  const contentHighlights = [
    {
      title: 'AI Cybersecurity Revolution',
      description: '89% threat reduction, $2.8M average savings',
      type: 'blog',
      url: '/blog/ai-2025-cybersecurity-revolution',
      icon: Shield,
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Healthcare AI Transformation',
      description: '450% ROI, $18.7M savings, 67% better outcomes',
      type: 'case-study',
      url: '/case-studies/healthcare-ai-transformation-2025',
      icon: Users,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'AI Implementation Roadmap',
      description: 'Complete guide to 340% ROI achievement',
      type: 'resource',
      url: '/resources/ai-implementation-roadmap-2025',
      icon: Target,
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return <BookOpen className="w-5 h-5" />;
      case 'case-study': return <FileText className="w-5 h-5" />;
      case 'resource': return <Target className="w-5 h-5" />;
      default: return <Star className="w-5 h-5" />;
    }
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-pulse" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-bounce" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-bounce" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-bounce" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
            <Award className="w-5 h-5 text-yellow-400 mr-2" />
            <span className="text-sm font-medium text-white">🚀 REVOLUTIONARY 2025 CONTENT</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            The AI Revolution is Here
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              And It's Transforming Everything
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Discover the cutting-edge AI insights, proven strategies, and real-world success stories 
            that are reshaping industries and delivering unprecedented results.
          </p>

          {/* Dynamic Stat Display */}
          <motion.div
            key={currentStat}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center bg-white/10 backdrop-blur-lg rounded-2xl px-8 py-4 border border-white/20"
          >
            <stats[currentStat].icon className={`w-8 h-8 ${stats[currentStat].color} mr-4`} />
            <div>
              <div className={`text-3xl font-bold ${stats[currentStat].color}`}>
                {stats[currentStat].value}
              </div>
              <div className="text-white text-sm">
                {stats[currentStat].label}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Content Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {contentHighlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <Link href={highlight.url}>
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 h-full group-hover:scale-105">
                  {/* Content Type Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/20 text-white">
                      {getTypeIcon(highlight.type)}
                      <span className="ml-2 capitalize">{highlight.type.replace('-', ' ')}</span>
                    </div>
                    <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium animate-pulse">
                      NEW
                    </div>
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${highlight.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <highlight.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {highlight.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {highlight.description}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center text-blue-400 font-semibold group-hover:text-blue-300 transition-colors">
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Success Stories Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mb-12"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Real Results from Real Organizations
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">450%</div>
              <div className="text-gray-300 text-sm">Healthcare ROI</div>
              <div className="text-gray-400 text-xs mt-1">Regional Hospital System</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">89%</div>
              <div className="text-gray-300 text-sm">Threat Reduction</div>
              <div className="text-gray-400 text-xs mt-1">Cybersecurity AI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">$18.7M</div>
              <div className="text-gray-300 text-sm">Annual Savings</div>
              <div className="text-gray-400 text-xs mt-1">Healthcare System</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">67%</div>
              <div className="text-gray-300 text-sm">Better Outcomes</div>
              <div className="text-gray-400 text-xs mt-1">Patient Care</div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              Join the AI Revolution
            </h3>
            <p className="text-xl text-blue-100 mb-6 max-w-3xl mx-auto">
              Don't get left behind. Access our comprehensive AI resources, case studies, and implementation guides 
              that have helped 500+ organizations achieve unprecedented success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link
                href="/resources"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                Explore All Resources
                <BookOpen className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/case-studies"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
              >
                View Success Stories
                <FileText className="w-5 h-5 ml-2" />
              </Link>
            </div>

            <div className="flex items-center justify-center text-blue-100 text-sm">
              <CheckCircle className="w-4 h-4 mr-2" />
              <span>Free access • No registration required • Updated weekly</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RevolutionaryAI2025Banner;
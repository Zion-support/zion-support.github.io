'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  TrendingUp, 
  Clock, 
  Users, 
  DollarSign, 
  Star,
  CheckCircle,
  Zap,
  Target,
  Award,
  BookOpen,
  FileText,
  BarChart3,
  Rocket
} from 'lucide-react';

const RevolutionaryContentBanner2025 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentMetric, setCurrentMetric] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % metrics.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const metrics = [
    { value: '500%', label: 'Average ROI', icon: TrendingUp, color: 'text-green-400' },
    { value: '$2.8B+', label: 'Total Savings', icon: DollarSign, color: 'text-yellow-400' },
    { value: '98%', label: 'Success Rate', icon: Star, color: 'text-blue-400' },
    { value: '60 Days', label: 'Time to Value', icon: Clock, color: 'text-purple-400' }
  ];

  const contentHighlights = [
    {
      title: 'Enterprise Automation Revolution',
      description: '500% ROI in 60 Days',
      type: 'blog',
      icon: BookOpen,
      url: '/blog/ai-2025-enterprise-automation-revolution',
      featured: true
    },
    {
      title: '$50M Annual Savings Case Study',
      description: 'Fortune 500 Success Story',
      type: 'case-study',
      icon: FileText,
      url: '/case-studies/ai-transformation-2025-ultimate-success',
      featured: true
    },
    {
      title: 'AI Implementation Master Guide',
      description: 'From Strategy to 500% ROI',
      type: 'resource',
      icon: BarChart3,
      url: '/resources/ai-implementation-master-guide-2025',
      featured: true
    }
  ];

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/90 to-blue-600/90" />
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -50, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Rocket className="w-4 h-4 mr-2 text-yellow-400" />
              <span className="text-sm font-medium">REVOLUTIONARY 2025 CONTENT</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Transform Your Business with
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Proven AI Strategies
              </span>
            </h2>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Discover the exact strategies, technologies, and implementation frameworks 
              that are driving 500% ROI for Fortune 500 companies. Real case studies, 
              step-by-step guides, and actionable insights.
            </p>

            {/* Animated Metrics */}
            <div className="mb-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentMetric}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center space-x-4"
                >
                  <metrics[currentMetric].icon className={`w-8 h-8 ${metrics[currentMetric].color}`} />
                  <div>
                    <div className={`text-3xl font-bold ${metrics[currentMetric].color}`}>
                      {metrics[currentMetric].value}
                    </div>
                    <div className="text-blue-200 text-sm">
                      {metrics[currentMetric].label}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog/ai-2025-enterprise-automation-revolution"
                className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
              >
                Read Latest Article
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                Get Free Assessment
              </Link>
            </div>
          </motion.div>

          {/* Right Column - Content Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">
              Featured Content
            </h3>
            
            {contentHighlights.map((content, index) => (
              <motion.div
                key={content.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg p-3 group-hover:scale-110 transition-transform duration-300">
                    <content.icon className="w-6 h-6 text-black" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <span className="bg-white/20 text-white px-2 py-1 rounded text-xs font-semibold mr-2">
                        {content.type.toUpperCase()}
                      </span>
                      {content.featured && (
                        <span className="bg-green-400 text-black px-2 py-1 rounded text-xs font-semibold">
                          FEATURED
                        </span>
                      )}
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                      {content.title}
                    </h4>
                    <p className="text-blue-200 text-sm mb-3">
                      {content.description}
                    </p>
                    <Link
                      href={content.url}
                      className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-semibold text-sm group-hover:translate-x-1 transition-all duration-300"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Additional Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20">
                <div className="text-2xl font-bold text-yellow-400 mb-1">9</div>
                <div className="text-sm text-blue-200">New Articles</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20">
                <div className="text-2xl font-bold text-green-400 mb-1">15K+</div>
                <div className="text-sm text-blue-200">Words of Content</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16 pt-8 border-t border-white/20"
        >
          <div className="flex flex-wrap justify-center items-center gap-6 text-blue-200">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
              <span>Real ROI data from actual implementations</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
              <span>Step-by-step implementation guides</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
              <span>Expert insights and best practices</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2025;
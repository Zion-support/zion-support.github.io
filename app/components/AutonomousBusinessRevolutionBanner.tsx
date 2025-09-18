'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, TrendingUp, Zap, Award, CheckCircle, Star } from 'lucide-react';

const AutonomousBusinessRevolutionBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [animatedStats, setAnimatedStats] = useState({
    roi: 0,
    savings: 0,
    efficiency: 0,
    satisfaction: 0
  });

  const targetStats = {
    roi: 500,
    savings: 180,
    efficiency: 340,
    satisfaction: 98
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('autonomousRevolutionBannerDismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }

    // Animate statistics
    const animateStats = () => {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setAnimatedStats({
          roi: Math.floor(targetStats.roi * progress),
          savings: Math.floor(targetStats.savings * progress),
          efficiency: Math.floor(targetStats.efficiency * progress),
          satisfaction: Math.floor(targetStats.satisfaction * progress)
        });

        if (currentStep >= steps) {
          clearInterval(timer);
          setAnimatedStats(targetStats);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    };

    const timer = setTimeout(animateStats, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('autonomousRevolutionBannerDismissed', 'true');
  };

  if (!isVisible) return null;

  const featuredContent = [
    {
      title: 'AI 2025: The Autonomous Business Revolution',
      description: 'Ultimate guide to achieving 500% ROI with autonomous systems',
      url: '/blog/ai-2025-autonomous-business-revolution-ultimate-guide',
      type: 'blog',
      readingTime: '25 min read'
    },
    {
      title: 'Fortune 500 Transformation Success',
      description: 'Real case study: $2.8B company achieves 500% ROI',
      url: '/case-studies/fortune-500-autonomous-transformation-500-percent-roi',
      type: 'case-study',
      readingTime: '15 min read'
    },
    {
      title: 'Implementation Guide 2025',
      description: 'Step-by-step roadmap from strategy to 500% ROI',
      url: '/resources/ai-autonomous-implementation-guide-2025',
      type: 'resource',
      readingTime: '30 min read'
    }
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white opacity-5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white opacity-5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-spin-slow"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center bg-white bg-opacity-10 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white border-opacity-20"
            >
              <Zap className="h-5 w-5 mr-2 text-yellow-300" />
              <span className="text-sm font-medium">🚀 AUTONOMOUS BUSINESS REVOLUTION 2025</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent"
            >
              Transform Your Business with
              <span className="block text-yellow-300">Autonomous AI Systems</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed"
            >
              Join Fortune 500 companies achieving <span className="text-yellow-300 font-bold">500% ROI</span> and 
              <span className="text-green-300 font-bold"> $180M savings</span> with autonomous business systems
            </motion.p>
          </div>

          {/* Statistics Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white border-opacity-20">
              <TrendingUp className="h-8 w-8 mx-auto mb-3 text-green-300" />
              <div className="text-3xl font-bold text-green-300 mb-1">{animatedStats.roi}%</div>
              <div className="text-blue-100 text-sm">Average ROI</div>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white border-opacity-20">
              <ArrowRight className="h-8 w-8 mx-auto mb-3 text-blue-300" />
              <div className="text-3xl font-bold text-blue-300 mb-1">${animatedStats.savings}M</div>
              <div className="text-blue-100 text-sm">Annual Savings</div>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white border-opacity-20">
              <Zap className="h-8 w-8 mx-auto mb-3 text-purple-300" />
              <div className="text-3xl font-bold text-purple-300 mb-1">{animatedStats.efficiency}%</div>
              <div className="text-blue-100 text-sm">Efficiency Gain</div>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white border-opacity-20">
              <Award className="h-8 w-8 mx-auto mb-3 text-yellow-300" />
              <div className="text-3xl font-bold text-yellow-300 mb-1">{animatedStats.satisfaction}%</div>
              <div className="text-blue-100 text-sm">Success Rate</div>
            </div>
          </motion.div>

          {/* Featured Content Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          >
            {featuredContent.map((content, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-yellow-300 fill-current" />
                    <span className="text-xs font-medium text-yellow-100 uppercase tracking-wide">
                      {content.type}
                    </span>
                  </div>
                  <CheckCircle className="h-4 w-4 text-green-300" />
                </div>
                
                <h3 className="text-lg font-bold mb-3 leading-tight">
                  {content.title}
                </h3>
                
                <p className="text-blue-100 text-sm mb-4 leading-relaxed">
                  {content.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-blue-200">{content.readingTime}</span>
                  <Link
                    href={content.url}
                    className="text-white hover:text-yellow-300 transition-colors text-sm font-medium flex items-center space-x-1"
                  >
                    <span>Read Now</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center"
          >
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Achieve 500% ROI?
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Join 500+ companies transforming their operations with autonomous business systems. 
                Get your free consultation and ROI assessment today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                >
                  <span>Start Your Transformation</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                
                <Link
                  href="/case-studies"
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
                >
                  View Success Stories
                </Link>
              </div>
              
              <div className="mt-6 flex items-center justify-center space-x-6 text-sm text-blue-200">
                <div className="flex items-center space-x-1">
                  <CheckCircle className="h-4 w-4 text-green-300" />
                  <span>Free Consultation</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="h-4 w-4 text-green-300" />
                  <span>ROI Assessment</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="h-4 w-4 text-green-300" />
                  <span>No Obligation</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AutonomousBusinessRevolutionBanner;
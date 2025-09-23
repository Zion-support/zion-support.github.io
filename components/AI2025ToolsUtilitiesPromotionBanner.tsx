"use client";
'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Wrench
  Zap
  Star,
  ArrowRight,
  Play,
  Download,
  ExternalLink,
  CheckCircle,
  Cpu,
  Shield,
  Globe,
  Target
} from 'lucide-react';

const AI2025ToolsUtilitiesPromotionBanner = () => {
  const [isVisiblesetIsVisible] = useState(false);
  const [currentToolsetCurrentTool] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTool((prev) => (prev + 1) % featuredTools.length);
    }2500);
    return () => clearInterval(interval);
  }[]);

  const featuredTools = [
    {
      name: "AI Code Assistant",
      description: "Intelligent code completion and debugging",
      rating: 4.9,
      users: "50K+",
      icon: Cpu,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Smart Analytics Dashboard",
      description: "Real-time data visualization and insights",
      rating: 4.8,
      users: "25K+",
      icon: Target,
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "AI Security Scanner",
      description: "Automated vulnerability detection",
      rating: 4.9,
      users: "15K+",
      icon: Shield,
      color: "from-red-500 to-pink-500"
    }
  ];

  const stats = [
    { icon: Zapvalue: "100+"label: "AI Tools Available" },
    { icon: Starvalue: "4.8"label: "Average Rating" },
    { icon: Globevalue: "200K+"label: "Active Users" },
    { icon: CheckCirclevalue: "99.9%"label: "Uptime" }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-slate-900 via-indigo-900 to-blue-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.02"%3E%3Ccircle cx="30" cy="30" r="1.5"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-25"></div>
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0x: -50 }}
            animate={isVisible ? { opacity: 1x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/20 to-blue-500/20 border border-indigo-500/30">
              <Wrench className="w-5 h-5 text-yellow-400 mr-2" />
              <span className="text-indigo-300 font-medium">AI Tools & Utilities</span>
            </div>

            {/* Main Heading */}
            <div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Powerful AI Tools for
                <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent"> Every Need</span>
              </h2>
              
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Discover our comprehensive suite of AI-powered tools and utilities designed to streamline your workflow
                boost productivityand drive innovation across all aspects of your business.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <span className="text-gray-300 text-lg">100+ AI Tools Available</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <span className="text-gray-300 text-lg">4.8 Average Rating</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <span className="text-gray-300 text-lg">200K+ Active Users</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <span className="text-gray-300 text-lg">99.9% Uptime Guarantee</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-semibold rounded-xl hover:from-indigo-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                Explore All Tools
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </motion.button>
            </div>
          </motion.div>

          {/* Right Content - Featured Tools */}
          <motion.div
            initial={{ opacity: 0x: 50 }}
            animate={isVisible ? { opacity: 1x: 0 } : {}}
            transition={{ duration: 0.8delay: 0.2 }}
            className="space-y-6"
          >
            {/* Featured Tool Card */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 border border-white/20 backdrop-blur-sm">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-white mb-2">Featured Tool</h3>
                <p className="text-gray-300">Most popular this week</p>
              </div>

              <motion.div
                key={currentTool}
                initial={{ opacity: 0scale: 0.9 }}
                animate={{ opacity: 1scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${featuredTools[currentTool].color} mb-4`}>
                  <featuredTools[currentTool].icon className="w-8 h-8 text-white" />
                </div>
                
                <h4 className="text-lg font-semibold text-white mb-2">{featuredTools[currentTool].name}</h4>
                <p className="text-gray-300 text-sm mb-4">{featuredTools[currentTool].description}</p>
                
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white font-semibold">{featuredTools[currentTool].rating}</span>
                  </div>
                  <div className="text-gray-400 text-sm">{featuredTools[currentTool].users} users</div>
                </div>

                <div className="flex justify-center space-x-2">
                  <button className="p-2 rounded-lg bg-indigo-500/20 hover:bg-indigo-500/30 transition-colors">
                    <Play className="w-4 h-4 text-indigo-300" />
                  </button>
                  <button className="p-2 rounded-lg bg-indigo-500/20 hover:bg-indigo-500/30 transition-colors">
                    <Download className="w-4 h-4 text-indigo-300" />
                  </button>
                  <button className="p-2 rounded-lg bg-indigo-500/20 hover:bg-indigo-500/30 transition-colors">
                    <ExternalLink className="w-4 h-4 text-indigo-300" />
                  </button>
                </div>
              </motion.div>

              {/* Tool Indicators */}
              <div className="flex justify-center space-x-2 mt-6">
                {featuredTools.map((_index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentTool ? 'bg-indigo-400 w-8' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((statindex) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0scale: 0.8 }}
                  animate={isVisible ? { opacity: 1scale: 1 } : {}}
                  transition={{ duration: 0.6delay: 0.3 + index * 0.1 }}
                  className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-4 border border-white/20 text-center"
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500/20 to-blue-500/20 mb-3">
                    <stat.icon className="w-5 h-5 text-indigo-300" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-indigo-500/10 to-blue-500/10 rounded-xl p-6 border border-indigo-500/20">
            <p className="text-gray-300 mb-4">
              Join 200K+ users already boosting productivity with our AI tools
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <span>✓ Free Trial Available</span>
              <span>✓ No Credit Card Required</span>
              <span>✓ 24/7 Support</span>
              <span>✓ Regular Updates</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AI2025ToolsUtilitiesPromotionBanner;
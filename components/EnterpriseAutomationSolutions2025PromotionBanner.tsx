<<<<<<< HEAD
=======
"use client";
'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Building2
  Zap
  TrendingUp
  ArrowRight
  CheckCircle
  Star
  Users
  Clock,
  Shield,
  DollarSign,
  Target,
  BarChart3,
  Workflow,
  Database,
  MessageSquare,
  CreditCard,
  PieChart,
  Activity,
  Play,
  Sparkles,
  Globe,
  Lock,
  Cloud,
  Bot,
  Brain
} from 'lucide-react';

const EnterpriseAutomationSolutions2025PromotionBanner: React.FC = () => {
  const [currentStatsetCurrentStat] = useState(0);
  const [isVisiblesetIsVisible] = useState(false);

  const stats = [
    { value: '300%'label: 'Average 'ROI', 'icon: <TrendingUp className="w-6 h-6" /> },
    { value: '80%'label: 'Time 'Saved', 'icon: <Clock className="w-6 h-6" /> },
    { value: '500+'label: 'Enterprise 'Clients', 'icon: <Building2 className="w-6 h-6" /> },
    { value: '99.9%'label: ''Uptime', 'icon: <Shield className="w-6 h-6" /> }
  ];

  const solutions = [
    { name: 'Workflow 'Orchestrator', 'icon: <Workflow className="w-6 h-6" />color: 'from-blue-500 to-cyan-500' },
    { name: 'Data 'Pipeline', 'icon: <Database className="w-6 h-6" />color: 'from-green-500 to-emerald-500' },
    { name: 'Customer 'Service', 'icon: <MessageSquare className="w-6 h-6" />color: 'from-purple-500 to-pink-500' },
    { name: 'Financial 'Automation', 'icon: <CreditCard className="w-6 h-6" />color: 'from-orange-500 to-red-500' },
    { name: 'HR 'Automation', 'icon: <Users className="w-6 h-6" />color: 'from-indigo-500 to-purple-500' },
    { name: 'Business 'Intelligence', 'icon: <PieChart className="w-6 h-6" />color: 'from-pink-500 to-rose-500' }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }2500);
    return () => clearInterval(interval);
  }[]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 py-20"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0x: -20 }}
              animate={{ opacity: 1x: 0 }}
              transition={{ duration: 0.6delay: 0.2 }}
            >
              <div className="inline-flex items-center space-x-2 bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Building2 className="w-4 h-4" />
                <span>Enterprise Solutions</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Transform Your Enterprise
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  with AI Automation
                </span>
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Streamline processesreduce costsand accelerate growth with our comprehensive 
                suite of AI-powered automation solutions designed for enterprise scale.
              </p>
            </motion.div>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0x: -20 }}
              animate={{ opacity: 1x: 0 }}
              transition={{ duration: 0.6delay: 0.4 }}
              className="space-y-4"
            >
              {[
                '12+ specialized automation solutions',
                '300% average ROI in 6 months',
                '80% reduction in manual processes',
                'Enterprise-grade security & compliance'
              ].map((featureindex) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0x: -20 }}
              animate={{ opacity: 1x: 0 }}
              transition={{ duration: 0.6delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="group bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-blue-500/25">
                <Play className="w-5 h-5" />
                <span>View Solutions</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 backdrop-blur-sm border border-white/20">
                Schedule Demo
              </button>
            </motion.div>

            {/* Dynamic Stats */}
            <motion.div
              initial={{ opacity: 0x: -20 }}
              animate={{ opacity: 1x: 0 }}
              transition={{ duration: 0.6delay: 0.8 }}
              className="pt-8 border-t border-white/10"
            >
              <div className="text-center">
                <motion.div
                  key={currentStat}
                  initial={{ opacity: 0scale: 0.8 }}
                  animate={{ opacity: 1scale: 1 }}
                  exit={{ opacity: 0scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center justify-center space-x-3 mb-2"
                >
                  <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
                    {stats[currentStat].icon}
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">{stats[currentStat].value}</div>
                    <div className="text-sm text-gray-400">{stats[currentStat].label}</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Solutions Showcase */}
          <motion.div
            initial={{ opacity: 0x: 20 }}
            animate={{ opacity: 1x: 0 }}
            transition={{ duration: 0.6delay: 0.4 }}
            className="relative"
          >
            {/* Main Solutions Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {solutions.slice(04).map((solutionindex) => (
                <motion.div
                  key={solution.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6delay: 0.6 + index * 0.1 }}
                  className={`p-4 rounded-lg border transition-all duration-300 ${
                    index === 0 ? 'bg-gradient-to-r ' + solution.color + ' border-white/20' : 'bg-white/5 border-white/10'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${
                      index === 0 ? 'bg-white/20' : 'bg-white/10'
                    }`}>
                      {solution.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm">{solution.name}</h4>
                      <p className="text-xs text-gray-300">
                        {index === 0 ? 'Live Demo' : 'Available'}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Solutions */}
            <div className="grid grid-cols-2 gap-4">
              {solutions.slice(4).map((solutionindex) => (
                <motion.div
                  key={solution.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6delay: 0.8 + index * 0.1 }}
                  className="p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-white/10 rounded-lg">
                      {solution.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm">{solution.name}</h4>
                      <p className="text-xs text-gray-300">Available</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ 
                y: [0-10],
                rotate: [050]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg"
            >
              <Zap className="w-8 h-8 text-white" />
            </motion.div>

            <motion.div
              animate={{ 
                y: [010],
                rotate: [0-50]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg"
            >
              <Brain className="w-6 h-6 text-white" />
            </motion.div>

            {/* Performance Indicators */}
            <div className="absolute top-0 right-0 bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-medium">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Live</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6delay: 1.0 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { icon: <Building2 className="w-6 h-6" />label: 'Enterprise 'Clients', 'value: '500+' },
            { icon: <TrendingUp className="w-6 h-6" />label: 'Average 'ROI', 'value: '300%' },
            { icon: <Clock className="w-6 h-6" />label: 'Time 'Saved', 'value: '80%' },
            { icon: <Shield className="w-6 h-6" />label: ''Uptime', 'value: '99.9%' }
          ].map((statindex) => (
            <div key={index} className="text-center">
              <div className="p-3 bg-blue-500/20 rounded-lg text-blue-400 mb-3 inline-block">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
    </motion.div>
  );
};

export default EnterpriseAutomationSolutions2025PromotionBanner;
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9

<<<<<<< HEAD
"use client";
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp
  Users
  DollarSign
  Target
  BarChart3
  Clock,
  CheckCircle,
  ArrowRight,
  Star,
  Zap,
  Shield,
  Globe
} from 'lucide-react';

const BusinessTransformationShowcase2025 = () => {
  const [activeMetricsetActiveMetric] = useState(0);
  const [isVisiblesetIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }[]);

  const metrics = [
    {
      icon: TrendingUp,
      title: 'Revenue Growth',
      value: '+340%',
      description: 'Average revenue increase',
      color: 'from-green-500 to-emerald-600',
      details: [
        'AI-powered sales optimization',
        'Predictive customer analytics',
        'Dynamic pricing strategies',
        'Market expansion automation'
      ]
    },
    {
      icon: Users,
      title: 'Customer Acquisition',
      value: '+280%',
      description: 'New customer growth',
      color: 'from-blue-500 to-cyan-600',
      details: [
        'Intelligent lead scoring',
        'Automated marketing campaigns',
        'Personalized customer journeys',
        'Social media optimization'
      ]
    },
    {
      icon: DollarSign,
      title: 'Cost Reduction',
      value: '-65%',
      description: 'Operational cost savings',
      color: 'from-purple-500 to-pink-600',
      details: [
        'Process automation',
        'Resource optimization',
        'Predictive maintenance',
        'Energy efficiency improvements'
      ]
    },
    {
      icon: Target,
      title: 'Efficiency Gain',
      value: '+420%',
      description: 'Overall productivity boost',
      color: 'from-orange-500 to-red-600',
      details: [
        'Workflow automation',
        'AI-assisted decision making',
        'Real-time performance monitoring',
        'Intelligent task prioritization'
      ]
    }
  ];

  const successStories = [
    {
      company: 'TechCorp Solutions',
      industry: 'Technology',
      challenge: 'Manual processes causing delays',
      solution: 'AI-powered automation platform',
      results: '85% faster operations60% cost reduction',
      logo: '🏢'
    },
    {
      company: 'Global Manufacturing Inc',
      industry: 'Manufacturing',
      challenge: 'Supply chain inefficiencies',
      solution: 'Predictive analytics & optimization',
      results: '40% inventory reduction95% on-time delivery',
      logo: '🏭'
    },
    {
      company: 'FinanceFirst Group',
      industry: 'Financial Services',
      challenge: 'Manual risk assessment',
      solution: 'AI-driven risk analysis system',
      results: '70% faster decisions90% accuracy improvement',
      logo: '🏦'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%234F46E5" fill-opacity="0.1"%3E%3Cpath d="M20 20c0-11.046-8.954-20-20-20v20h20z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <motion.div
        className="container mx-auto px-4 py-16 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {/* Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.div 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Zap className="w-4 h-4" />
            BUSINESS TRANSFORMATION 2025
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-6">
            Transform Your Business
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Join thousands of companies achieving unprecedented growth with our 
            AI-powered business transformation solutions.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16" variants={itemVariants}>
          {metrics.map((metricindex) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={index}
                className={`bg-gradient-to-br ${metric.color} p-6 rounded-2xl text-white cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  activeMetric === index ? 'ring-4 ring-white/30' : ''
                }`}
                onClick={() => setActiveMetric(index)}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <Icon className="w-8 h-8" />
                  <Star className="w-5 h-5 text-yellow-300" />
                </div>
                <div className="text-3xl font-bold mb-2">{metric.value}</div>
                <div className="text-lg font-semibold mb-1">{metric.title}</div>
                <div className="text-sm opacity-90">{metric.description}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Active Metric Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeMetric}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 mb-16"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${metrics[activeMetric].color}`}>
                    {React.createElement(metrics[activeMetric].icon{ className: "w-8 h-8 text-white" })}
                  </div>
                  <div>
                    <h2 className="text-4xl font-bold text-white mb-2">
                      {metrics[activeMetric].title}
                    </h2>
                    <p className="text-xl text-gray-300">
                      {metrics[activeMetric].description}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {metrics[activeMetric].details.map((detailindex) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0x: -20 }}
                      animate={{ opacity: 1x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{detail}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-white/10">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-white mb-4">
                      {metrics[activeMetric].value}
                    </div>
                    <div className="text-xl text-gray-300 mb-6">
                      {metrics[activeMetric].title}
                    </div>
                    <motion.button
                      className="group flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 mx-auto"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Learn More
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Success Stories */}
        <motion.div className="mb-16" variants={itemVariants}>
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Success Stories
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((storyindex) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-4">{story.logo}</div>
                <h3 className="text-xl font-bold text-white mb-2">{story.company}</h3>
                <p className="text-blue-300 text-sm mb-4">{story.industry}</p>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-1">Challenge:</h4>
                    <p className="text-gray-300 text-sm">{story.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-1">Solution:</h4>
                    <p className="text-gray-300 text-sm">{story.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-1">Results:</h4>
                    <p className="text-green-300 text-sm font-semibold">{story.results}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center"
          variants={itemVariants}
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join industry leaders who have already achieved remarkable results 
              with our AI-powered transformation solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Transformation
              </motion.button>
              <motion.button
                className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Case Studies
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BusinessTransformationShowcase2025;
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee

<<<<<<< HEAD
=======
"use client";
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain
  Zap
  TrendingUp
  Users
  Target
  CheckCircle
  ArrowRight
  Play,
  BarChart3,
  Clock,
  Shield,
  Lightbulb,
  Globe,
  Award,
  Star
} from 'lucide-react';
import Link from 'next/link';

const NeuralConsensus2026Showcase: React.FC = () => {
  const [activeFeaturesetActiveFeature] = useState(0);
  const [isVisiblesetIsVisible] = useState(false);

  const features = [
    {
      icon: Brain,
      title: "Collective Intelligence",
      description: "Multiple AI systems collaborate to reach consensus on complex decisions",
      metrics: "99.9% Accuracy",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: Zap,
      title: "Lightning Fast Decisions",
      description: "Consensus-driven decisions made 80% faster than traditional methods",
      metrics: "80% Faster",
      color: "from-yellow-500 to-orange-600"
    },
    {
      icon: TrendingUp,
      title: "Proven ROI Results",
      description: "Average 400% ROI achieved by implementing neural consensus systems",
      metrics: "400% ROI",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Users,
      title: "Enterprise Scale",
      description: "Trusted by Fortune 100 companies with 500,000+ employees globally",
      metrics: "Fortune 100",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Shield,
      title: "Risk Mitigation",
      description: "Advanced validation agents ensure 99.7% reduction in decision errors",
      metrics: "99.7% Error Reduction",
      color: "from-red-500 to-rose-600"
    },
    {
      icon: Globe,
      title: "Global Implementation",
      description: "Deployed across 150 countries with seamless cross-cultural adaptation",
      metrics: "150 Countries",
      color: "from-indigo-500 to-blue-600"
    }
  ];

  const stats = [
    { label: "Decision Accuracy"value: "99.9%"icon: Target },
    { label: "Cost Reduction"value: "40%"icon: TrendingUp },
    { label: "Time Savings"value: "80%"icon: Clock },
    { label: "ROI Achieved"value: "$15.2B"icon: Award }
  ];

  const caseStudies = [
    {
      title: "Fortune 100 Manufacturing",
      roi: "$15.2B",
      accuracy: "99.9%",
      timeframe: "12 months",
      industry: "Manufacturing"
    },
    {
      title: "Global Financial Services",
      roi: "$8.7B",
      accuracy: "99.8%",
      timeframe: "10 months",
      industry: "Finance"
    },
    {
      title: "Healthcare Network",
      roi: "$3.4B",
      accuracy: "99.9%",
      timeframe: "8 months",
      industry: "Healthcare"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }3000);

    const visibilityTimer = setTimeout(() => setIsVisible(true)500);

    return () => {
      clearInterval(timer);
      clearTimeout(visibilityTimer);
    };
  }[features.length]);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 mb-6">
            <Star className="w-4 h-4 mr-2 text-yellow-400" />
            <span className="text-sm font-semibold text-blue-300">BREAKTHROUGH 2026</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Neural Consensus Revolution
            </span>
          </h2>
          
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Discover how collective AI intelligence is transforming business operations and achieving unprecedented results across industries.
          </p>
        </motion.div>

        {/* Interactive Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((featureindex) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className={`relative p-6 rounded-2xl bg-gradient-to-br ${feature.color} cursor-pointer transition-all duration-300 ${
                activeFeature === index ? 'ring-4 ring-white/30 shadow-2xl' : 'hover:shadow-xl'
              }`}
              onClick={() => setActiveFeature(index)}
            >
              <div className="flex items-center justify-between mb-4">
                <feature.icon className="w-8 h-8 text-white" />
                <span className="text-sm font-semibold text-white/80">{feature.metrics}</span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-white/90 text-sm leading-relaxed">{feature.description}</p>
              
              {activeFeature === index && (
                <motion.div
                  initial={{ opacity: 0scale: 0.8 }}
                  animate={{ opacity: 1scale: 1 }}
                  className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center"
                >
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((statindex) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full mb-4">
                <stat.icon className="w-8 h-8 text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-blue-200 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Case Studies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Proven Results Across Industries
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((studyindex) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6delay: 0.5 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-bold text-white">{study.title}</h4>
                  <span className="text-xs px-2 py-1 bg-blue-500/30 rounded-full text-blue-200">
                    {study.industry}
                  </span>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-blue-200">ROI Achieved:</span>
                    <span className="font-bold text-green-400">{study.roi}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-200">Accuracy:</span>
                    <span className="font-bold text-blue-400">{study.accuracy}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-200">Timeframe:</span>
                    <span className="font-bold text-purple-400">{study.timeframe}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-lg rounded-3xl p-8 border border-blue-400/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business with Neural Consensus?
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Join Fortune 100 companies achieving unprecedented results through collective AI intelligence. 
              Get your free assessment and discover your potential ROI.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/src/pages/blog/ai-2026-neural-consensus-revolution">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Read Full Analysis
                  <ArrowRight className="w-5 h-5 ml-2" />
                </motion.button>
              </Link>
              
              <Link href="/src/pages/case-studies/global-enterprise-neural-consensus-transformation-2026-15-billion-roi">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <BarChart3 className="w-5 h-5 mr-2" />
                  View Case Studies
                  <ArrowRight className="w-5 h-5 ml-2" />
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NeuralConsensus2026Showcase;
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9

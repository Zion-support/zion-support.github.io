"use client";
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp
  Calendar
  Target
  Brain
  Zap
  Globe
  Shield
  Database,
  ArrowRight,
  CheckCircle,
  Star,
  Sparkles,
  Rocket,
  Cpu,
  Cloud,
  Lock
} from 'lucide-react';

const AITrendsPredictions2025 = () => {
  const [activeYearsetActiveYear] = useState('2025');
  const [isVisiblesetIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }[]);

  const trendsData = {
    '2025': {
      title: 'AI Revolution Acceleration',
      subtitle: 'The year of quantum-classical hybrid AI',
      trends: [
        {
          id: 1,
          title: 'Quantum-Neural Fusion',
          description: 'Hybrid quantum-classical neural networks achieve breakthrough performance',
          impact: '10,000x speed improvement',
          confidence: 95,
          icon: Brain,
          color: 'from-blue-500 to-cyan-500'
        },
        {
          id: 2,
          title: 'Autonomous Business Operations',
          description: 'AI systems manage entire business processes without human intervention',
          impact: '99.9% operational accuracy',
          confidence: 92,
          icon: Zap,
          color: 'from-purple-500 to-pink-500'
        },
        {
          id: 3,
          title: 'Multimodal AI Consciousness',
          description: 'AI that seamlessly processes textimagesvoiceand data simultaneously',
          impact: 'Unified intelligence platform',
          confidence: 88,
          icon: Sparkles,
          color: 'from-green-500 to-emerald-500'
        },
        {
          id: 4,
          title: 'Predictive Business Intelligence',
          description: 'AI predicts market trends and business outcomes with unprecedented accuracy',
          impact: '95% prediction accuracy',
          confidence: 90,
          icon: Target,
          color: 'from-orange-500 to-red-500'
        }
      ],
      predictions: [
        'Quantum computing becomes commercially viable for AI training',
        'AI-generated content reaches 80% of all digital content',
        'Autonomous vehicles achieve full Level 5 autonomy',
        'AI-powered cybersecurity prevents 99.9% of cyber attacks'
      ]
    },
    '2026': {
      title: 'AI Consciousness Emergence',
      subtitle: 'The dawn of synthetic general intelligence',
      trends: [
        {
          id: 1,
          title: 'Synthetic General Intelligence',
          description: 'AI systems demonstrate human-level reasoning across all domains',
          impact: 'AGI breakthrough achieved',
          confidence: 85,
          icon: Brain,
          color: 'from-indigo-500 to-purple-500'
        },
        {
          id: 2,
          title: 'Neural Interface Revolution',
          description: 'Direct brain-computer interfaces enable seamless human-AI collaboration',
          impact: 'Mind-machine integration',
          confidence: 78,
          icon: Cpu,
          color: 'from-cyan-500 to-blue-500'
        },
        {
          id: 3,
          title: 'Autonomous AI Ecosystems',
          description: 'Self-organizing AI networks that evolve and adapt independently',
          impact: 'Self-evolving systems',
          confidence: 82,
          icon: Globe,
          color: 'from-emerald-500 to-green-500'
        },
        {
          id: 4,
          title: 'Quantum Internet Infrastructure',
          description: 'Quantum-secured communication networks enable global AI coordination',
          impact: 'Unbreakable security',
          confidence: 88,
          icon: Lock,
          color: 'from-pink-500 to-rose-500'
        }
      ],
      predictions: [
        'First AGI system passes comprehensive Turing tests',
        'Neural interfaces allow direct thought-to-computer communication',
        'AI systems begin to demonstrate creativity and intuition',
        'Quantum internet enables instant global AI coordination'
      ]
    },
    '2027': {
      title: 'AI-Human Symbiosis',
      subtitle: 'The integration of human and artificial intelligence',
      trends: [
        {
          id: 1,
          title: 'Hybrid Human-AI Cognition',
          description: 'Enhanced human intelligence through direct AI augmentation',
          impact: '10x cognitive enhancement',
          confidence: 80,
          icon: Brain,
          color: 'from-violet-500 to-purple-500'
        },
        {
          id: 2,
          title: 'Emotional AI Systems',
          description: 'AI that understands and responds to human emotions with empathy',
          impact: 'Emotional intelligence parity',
          confidence: 75,
          icon: Sparkles,
          color: 'from-rose-500 to-pink-500'
        },
        {
          id: 3,
          title: 'Autonomous AI Research',
          description: 'AI systems that conduct independent scientific research',
          impact: 'Self-directed discovery',
          confidence: 83,
          icon: Rocket,
          color: 'from-blue-500 to-indigo-500'
        },
        {
          id: 4,
          title: 'Universal AI Translation',
          description: 'Real-time translation of all human languages and communication forms',
          impact: 'Language barrier elimination',
          confidence: 90,
          icon: Globe,
          color: 'from-green-500 to-teal-500'
        }
      ],
      predictions: [
        'AI systems demonstrate genuine emotional understanding',
        'Human-AI hybrid teams outperform pure human teams',
        'AI conducts breakthrough scientific research independently',
        'Universal communication breaks down all language barriers'
      ]
    }
  };

  const years = ['2025'2026'2027'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Calendar className="w-4 h-4" />
            Future AI Predictions
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Trends & Predictions
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> 2025-2027</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive predictions for the future of artificial intelligencefrom quantum breakthroughs to synthetic consciousness.
          </p>
        </motion.div>

        {/* Year Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8delay: 0.2 }}
          className="flex justify-center gap-4 mb-12"
        >
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setActiveYear(year)}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                activeYear === year
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {year}
            </button>
          ))}
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeYear}
            initial={{ opacity: 0x: 20 }}
            animate={{ opacity: 1x: 0 }}
            exit={{ opacity: 0x: -20 }}
            transition={{ duration: 0.5 }}
          >
            {/* Year Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {trendsData[activeYear].title}
              </h2>
              <p className="text-xl text-gray-300">
                {trendsData[activeYear].subtitle}
              </p>
            </div>

            {/* Trends Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
              {trendsData[activeYear].trends.map((trendindex) => {
                const Icon = trend.icon;
                return (
                  <motion.div
                    key={trend.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6delay: index * 0.1 }}
                    className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 bg-gradient-to-r ${trend.color} rounded-xl`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                            {trend.title}
                          </h3>
                          <div className="flex items-center gap-1 text-green-400">
                            <Star className="w-4 h-4" />
                            <span className="text-sm font-medium">{trend.confidence}%</span>
                          </div>
                        </div>
                        <p className="text-gray-300 mb-4">
                          {trend.description}
                        </p>
                        <div className="flex items-center gap-2 text-blue-400 font-medium">
                          <TrendingUp className="w-4 h-4" />
                          {trend.impact}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Predictions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6delay: 0.4 }}
              className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Key Predictions for {activeYear}
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {trendsData[activeYear].predictions.map((predictionindex) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0x: -20 }}
                    animate={{ opacity: 1x: 0 }}
                    transition={{ duration: 0.6delay: 0.5 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-300">{prediction}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Ahead of AI Evolution
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Get exclusive access to our detailed AI trend reports and be the first to know about breakthrough technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/ai-trends-report"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                Download Full Report
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/newsletter"
                className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-full font-medium hover:bg-white/20 transition-all duration-300"
              >
                Subscribe to Updates
                <Sparkles className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AITrendsPredictions2025;
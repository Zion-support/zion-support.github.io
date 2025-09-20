<<<<<<< HEAD
=======
"use client";
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar
  TrendingUp
  Brain
  Zap
  Globe
  Rocket
  Shield
  Users
  Lightbulb,
  Target,
  Award,
  ChevronRight,
  Play,
  BookOpen,
  Code,
  Database,
  Cloud,
  Cpu,
  Network,
  BarChart3,
  Star,
  ArrowRight
} from 'lucide-react';

const FuturePredictionsShowcase2025 = () => {
  const [activeYearsetActiveYear] = useState('2025');
  const [isVisiblesetIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }[]);

  const predictions = {
    '2025': {
      title: 'AI Revolution Begins',
      color: 'from-purple-600 to-blue-600',
      icon: Brain,
      predictions: [
        {
          title: 'Neural Interface Breakthrough',
          description: 'First commercial neural interface devices hit the market',
          probability: '85%',
          impact: 'High',
          icon: Cpu
        },
        {
          title: 'Quantum AI Fusion',
          description: 'Quantum computing integrated with AI systems',
          probability: '70%',
          impact: 'Revolutionary',
          icon: Zap
        },
        {
          title: 'Consciousness AI',
          description: 'AI systems achieve human-level consciousness',
          probability: '60%',
          impact: 'Transformative',
          icon: Lightbulb
        }
      ]
    },
    '2026': {
      title: 'Automation Mastery',
      color: 'from-green-600 to-emerald-600',
      icon: Rocket,
      predictions: [
        {
          title: 'Universal Automation',
          description: '90% of business processes fully automated',
          probability: '80%',
          impact: 'High',
          icon: Target
        },
        {
          title: 'AI Workforce Integration',
          description: 'AI and humans work seamlessly together',
          probability: '75%',
          impact: 'High',
          icon: Users
        },
        {
          title: 'Predictive Everything',
          description: 'AI predicts and prevents all major issues',
          probability: '65%',
          impact: 'Medium',
          icon: BarChart3
        }
      ]
    },
    '2030': {
      title: 'Transcendent Intelligence',
      color: 'from-orange-600 to-red-600',
      icon: Globe,
      predictions: [
        {
          title: 'Global AI Network',
          description: 'Worldwide interconnected AI consciousness',
          probability: '50%',
          impact: 'Revolutionary',
          icon: Network
        },
        {
          title: 'Reality Simulation',
          description: 'AI creates indistinguishable virtual realities',
          probability: '40%',
          impact: 'Transformative',
          icon: Cloud
        },
        {
          title: 'Immortality Research',
          description: 'AI enables human consciousness transfer',
          probability: '30%',
          impact: 'Revolutionary',
          icon: Shield
        }
      ]
    }
  };

  const years = Object.keys(predictions);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-indigo-500/10 to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent mb-6">
            Future Predictions
            <span className="block text-4xl md:text-6xl mt-2">Showcase 2025-2030</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Explore our expert predictions for the future of AItechnologyand human civilization 
            from 2025 to 2030 and beyond.
          </p>
        </motion.div>

        {/* Year Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {years.map((year) => {
            const yearData = predictions[year];
            const Icon = yearData.icon;
            return (
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                  activeYear === year
                    ? `bg-gradient-to-r ${yearData.color} text-white shadow-2xl scale-105`
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                <Icon className="w-6 h-6" />
                {year}
                <span className="text-sm opacity-75">{yearData.title}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Predictions Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeYear}
            initial={{ opacity: 0x: 50 }}
            animate={{ opacity: 1x: 0 }}
            exit={{ opacity: 0x: -50 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {predictions[activeYear].predictions.map((predictionindex) => {
              const Icon = prediction.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="relative bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${predictions[activeYear].color} opacity-10 rounded-3xl group-hover:opacity-20 transition-opacity duration-500`}></div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`p-4 rounded-2xl bg-gradient-to-r ${predictions[activeYear].color} shadow-lg`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">{prediction.title}</h3>
                          <div className="flex gap-2">
                            <div className="text-sm font-semibold text-green-400 bg-green-400/20 px-3 py-1 rounded-full">
                              {prediction.probability}
                            </div>
                            <div className="text-sm font-semibold text-blue-400 bg-blue-400/20 px-3 py-1 rounded-full">
                              {prediction.impact}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 text-lg leading-relaxed mb-6">
                        {prediction.description}
                      </p>
                      
                      <div className="flex items-center gap-2 text-indigo-400 font-semibold group-hover:text-indigo-300 transition-colors">
                        <span>Learn More</span>
                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Timeline Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8delay: 0.6 }}
          className="mt-16 bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-8">Technology Evolution Timeline</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-orange-500 rounded-full"></div>
            
            {/* Timeline Points */}
            <div className="flex justify-between items-center">
              {years.map((yearindex) => {
                const yearData = predictions[year];
                const Icon = yearData.icon;
                return (
                  <div key={year} className="flex flex-col items-center">
                    <div className={`w-16 h-16 bg-gradient-to-r ${yearData.color} rounded-full flex items-center justify-center shadow-2xl z-10`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="mt-4 text-center">
                      <div className="text-2xl font-bold text-white">{year}</div>
                      <div className="text-sm text-gray-400">{yearData.title}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:scale-105 transition-transform cursor-pointer shadow-2xl">
            <Star className="w-6 h-6" />
            Explore Full Predictions
            <ArrowRight className="w-5 h-5" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FuturePredictionsShowcase2025;
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9

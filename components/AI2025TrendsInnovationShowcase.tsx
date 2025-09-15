"use client";
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp
  Brain
  Zap
  Globe
  Shield
  Users
  BarChart3
  Cpu,
  Database,
  Cloud,
  Smartphone,
  ArrowRight,
  Star,
  CheckCircle,
  Lightbulb,
  Target
} from 'lucide-react';

const AI2025TrendsInnovationShowcase = () => {
  const [activeTrendsetActiveTrend] = useState(0);
  const [isVisiblesetIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveTrend((prev) => (prev + 1) % trends.length);
    }4000);
    return () => clearInterval(interval);
  }[]);

  const trends = [
    {
      id: 1,
      title: "Generative AI Revolution",
      description: "Transform your business with cutting-edge generative AI that creates contentautomates processesand drives innovation.",
      icon: Brain,
      stats: "85% efficiency increase",
      color: "from-purple-500 to-pink-500",
      features: ["Content Generation"Process Automation"Creative Solutions"]
    },
    {
      id: 2,
      title: "Edge AI Computing",
      description: "Deploy AI directly on devices for real-time processingreduced latencyand enhanced privacy.",
      icon: Cpu,
      stats: "60% faster processing",
      color: "from-blue-500 to-cyan-500",
      features: ["Real-time Processing"Privacy Protection"Reduced Latency"]
    },
    {
      id: 3,
      title: "AI-Powered Analytics",
      description: "Unlock insights from your data with advanced AI analytics that predict trends and optimize performance.",
      icon: BarChart3,
      stats: "300% better insights",
      color: "from-green-500 to-emerald-500",
      features: ["Predictive Analytics"Trend Analysis"Performance Optimization"]
    },
    {
      id: 4,
      title: "Quantum AI Integration",
      description: "Experience the future with quantum-enhanced AI that solves complex problems exponentially faster.",
      icon: Zap,
      stats: "1000x faster computation",
      color: "from-yellow-500 to-orange-500",
      features: ["Quantum Computing"Exponential Speed"Complex Problem Solving"]
    }
  ];

  const innovations = [
    {
      title: "Neural Interface Technology",
      description: "Direct brain-computer interfaces for seamless human-AI interaction",
      impact: "Revolutionary",
      category: "Human-AI Integration"
    },
    {
      title: "Autonomous Business Systems",
      description: "Self-managing business processes that adapt and optimize automatically",
      impact: "Transformative",
      category: "Business Automation"
    },
    {
      title: "AI-Powered Cybersecurity",
      description: "Advanced threat detection and prevention using machine learning",
      impact: "Critical",
      category: "Security"
    },
    {
      title: "Predictive Customer Experience",
      description: "Anticipate customer needs and deliver personalized experiences",
      impact: "Game-changing",
      category: "Customer Experience"
    }
  ];

  const benefits = [
    { icon: TrendingUptext: "Increased Revenue"value: "+150%" },
    { icon: Userstext: "Customer Satisfaction"value: "95%" },
    { icon: Shieldtext: "Security Enhancement"value: "99.9%" },
    { icon: Globetext: "Global Reach"value: "200+" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-6">
            <Star className="w-5 h-5 text-yellow-400 mr-2" />
            <span className="text-blue-300 font-medium">2025 AI Innovation Trends</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            The Future of
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> AI Innovation</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover the revolutionary AI trends and innovations that will transform your business in 2025 and beyond. 
            Stay ahead of the curve with cutting-edge technology solutions.
          </p>
        </motion.div>

        {/* Interactive Trends Carousel */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Trends Navigation */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white mb-6">Key AI Trends 2025</h3>
              {trends.map((trendindex) => (
                <motion.div
                  key={trend.id}
                  className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                    activeTrend === index
                      ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/50'
                      : 'bg-white/5 border border-white/10 hover:bg-white/10'
                  }`}
                  onClick={() => setActiveTrend(index)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${trend.color}`}>
                      <trend.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white">{trend.title}</h4>
                      <p className="text-sm text-gray-300">{trend.stats}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Active Trend Display */}
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTrend}
                  initial={{ opacity: 0x: 50 }}
                  animate={{ opacity: 1x: 0 }}
                  exit={{ opacity: 0x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/20"
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`p-4 rounded-xl bg-gradient-to-r ${trends[activeTrend].color}`}>
                      <trends[activeTrend].icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{trends[activeTrend].title}</h3>
                      <p className="text-blue-300 font-medium">{trends[activeTrend].stats}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    {trends[activeTrend].description}
                  </p>
                  
                  <div className="space-y-3">
                    {trends[activeTrend].features.map((featureindex) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Innovation Showcase */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Revolutionary Innovations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {innovations.map((innovationindex) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6delay: index * 0.1 }}
                className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-6 border border-white/20 hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium">
                    {innovation.category}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-300 text-sm font-medium">
                    {innovation.impact}
                  </span>
                </div>
                
                <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {innovation.title}
                </h4>
                
                <p className="text-gray-300 text-sm leading-relaxed">
                  {innovation.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Benefits Stats */}
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-blue-500/20">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Proven Results</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((benefitindex) => (
              <motion.div
                key={index}
                initial={{ opacity: 0scale: 0.8 }}
                animate={isVisible ? { opacity: 1scale: 1 } : {}}
                transition={{ duration: 0.6delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{benefit.value}</div>
                <div className="text-gray-300">{benefit.text}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Explore AI Solutions
              <ArrowRight className="w-5 h-5 ml-2 inline" />
            </button>
            <button className="px-8 py-4 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300">
              Download Report
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AI2025TrendsInnovationShowcase;
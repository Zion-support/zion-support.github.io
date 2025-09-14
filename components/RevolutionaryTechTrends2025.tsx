"use client";
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  TrendingUp, 
  Brain, 
  Cpu, 
  Database, 
  Shield, 
  Zap, 
  Globe,
  Users,
  BarChart3,
  Lightbulb,
  Rocket
} from 'lucide-react';

const RevolutionaryTechTrends2025 = () => {
  const [activeTrend, setActiveTrend] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const trends = [
    {
      id: 1,
      title: "Quantum AI Integration",
      description: "The convergence of quantum computing and artificial intelligence is creating unprecedented computational capabilities.",
      icon: Brain,
      impact: "1000x faster processing",
      applications: ["Drug Discovery", "Financial Modeling", "Climate Simulation"],
      color: "from-purple-500 to-indigo-600",
      stats: { growth: "400%", adoption: "85%", investment: "$50B" }
    },
    {
      id: 2,
      title: "Autonomous Everything",
      description: "Self-managing systems that operate independently while maintaining human oversight and ethical boundaries.",
      icon: Cpu,
      impact: "95% efficiency gain",
      applications: ["Smart Cities", "Manufacturing", "Healthcare"],
      color: "from-green-500 to-teal-600",
      stats: { growth: "300%", adoption: "70%", investment: "$30B" }
    },
    {
      id: 3,
      title: "Synthetic Intelligence",
      description: "AI systems that can create, modify, and improve themselves while maintaining alignment with human values.",
      icon: Lightbulb,
      impact: "Self-evolving capabilities",
      applications: ["Research", "Education", "Creative Industries"],
      color: "from-orange-500 to-red-600",
      stats: { growth: "500%", adoption: "60%", investment: "$25B" }
    },
    {
      id: 4,
      title: "Neural Interface Revolution",
      description: "Direct brain-computer interfaces that enable seamless interaction between human cognition and digital systems.",
      icon: Users,
      impact: "10x cognitive enhancement",
      applications: ["Medical Rehabilitation", "Education", "Entertainment"],
      color: "from-pink-500 to-rose-600",
      stats: { growth: "250%", adoption: "45%", investment: "$15B" }
    }
  ];

  const marketInsights = [
    {
      title: "Global AI Market",
      value: "$1.8T",
      change: "+45%",
      icon: BarChart3
    },
    {
      title: "Enterprise Adoption",
      value: "78%",
      change: "+23%",
      icon: TrendingUp
    },
    {
      title: "Investment Growth",
      value: "$200B",
      change: "+67%",
      icon: Rocket
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4" />
            Revolutionary Tech Trends 2025
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            The Future of
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Technology
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the groundbreaking technologies that are reshaping our world and creating unprecedented opportunities for innovation and growth.
          </p>
        </motion.div>

        {/* Market Insights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {marketInsights.map((insight, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <insight.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-green-600 font-semibold text-sm">{insight.change}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{insight.value}</h3>
              <p className="text-gray-600">{insight.title}</p>
            </div>
          ))}
        </motion.div>

        {/* Trends Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {trends.map((trend, index) => (
            <button
              key={trend.id}
              onClick={() => setActiveTrend(index)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTrend === index
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              {trend.title}
            </button>
          ))}
        </motion.div>

        {/* Active Trend Display */}
        <motion.div
          key={activeTrend}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-16"
        >
          <div className={`h-96 bg-gradient-to-br ${trends[activeTrend].color} relative overflow-hidden`}>
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10 h-full flex items-center justify-center p-8">
              <div className="text-center text-white max-w-4xl">
                <trends[activeTrend].icon className="w-20 h-20 mx-auto mb-6 opacity-90" />
                <h3 className="text-4xl md:text-6xl font-bold mb-6">
                  {trends[activeTrend].title}
                </h3>
                <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                  {trends[activeTrend].description}
                </p>
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8">
                  <Zap className="w-5 h-5" />
                  <span className="font-semibold text-lg">{trends[activeTrend].impact}</span>
                </div>
              </div>
            </div>
            
            {/* Animated Background Elements */}
            <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-24 h-24 bg-white/5 rounded-full animate-bounce"></div>
          </div>

          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Applications */}
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Key Applications</h4>
                <div className="space-y-3">
                  {trends[activeTrend].applications.map((app, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                      <span className="text-gray-700">{app}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Market Impact</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Growth Rate</span>
                    <span className="font-bold text-green-600">{trends[activeTrend].stats.growth}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Enterprise Adoption</span>
                    <span className="font-bold text-blue-600">{trends[activeTrend].stats.adoption}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Investment</span>
                    <span className="font-bold text-purple-600">{trends[activeTrend].stats.investment}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Ahead of the Curve
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get exclusive insights into the latest technology trends and be the first to implement revolutionary solutions in your industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2">
                Get Trend Report
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                Join Our Community
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RevolutionaryTechTrends2025;
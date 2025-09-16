'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain
  Zap
  Shield
  Cloud
  Database
  Cpu
  Network
  Lock,
  TrendingUp,
  Globe,
  Smartphone,
  Monitor
} from 'lucide-react';

const AdvancedTechTrends2026 = () => {
  const trends = [
    {
      icon: Brain,
      title: "Neural Interface Revolution",
      description: "Direct brain-computer interfaces enabling thought-controlled applications",
      impact: "300% productivity increase",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "Quantum AI Fusion",
      description: "Quantum computing meets artificial intelligence for unprecedented processing power",
      impact: "1000x faster computations",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Autonomous Security",
      description: "Self-healing cybersecurity systems that adapt to threats in real-time",
      impact: "99.9% threat prevention",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Cloud,
      title: "Edge Intelligence",
      description: "AI processing at the edge for instant decision-making and reduced latency",
      impact: "50ms response times",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Database,
      title: "Synthetic Data Generation",
      description: "AI-generated datasets that maintain privacy while enabling training",
      impact: "Zero data privacy risks",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Cpu,
      title: "Neuromorphic Computing",
      description: "Brain-inspired processors that mimic neural networks in hardware",
      impact: "100x energy efficiency",
      color: "from-teal-500 to-blue-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Advanced Tech Trends
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              2026 & Beyond
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the revolutionary technologies that will transform your business 
            and give you a competitive edge in the next decade.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trends.map((trendindex) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 group-hover:scale-105">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${trend.color} mb-6`}>
                  <trend.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">
                  {trend.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {trend.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-purple-300 bg-purple-900/30 px-3 py-1 rounded-full">
                    {trend.impact}
                  </span>
                  <TrendingUp className="w-5 h-5 text-green-400" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Lead the Future?
            </h3>
            <p className="text-xl mb-8 text-purple-100">
              Join the companies already implementing these cutting-edge technologies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-purple-50 transition-colors">
                Get Early Access
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-purple-600 transition-colors">
                Download Report
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdvancedTechTrends2026;
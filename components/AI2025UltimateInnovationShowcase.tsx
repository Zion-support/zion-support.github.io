"use client";
'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
ArrowRightZapBrainRocketTargetTrendingUpUsersGlobeShieldCpu
import Link from 'next/link';

const AI2025UltimateInnovationShowcase: React.FC = () => {
  const [activeTabsetActiveTab] = useState(0);
  const [isVisiblesetIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }[]);

  const innovations = [
    {
      title: "Quantum-AI Fusion Technology",
      description: "Revolutionary fusion of quantum computing and artificial intelligence delivering unprecedented processing power",
      icon: Cpu,
      metrics: "10,000x faster processing",
      color: "from-purple-600 to-blue-600"
    },
    {
      title: "Autonomous Business Operations",
      description: "Self-managing business systems that adapt and optimize without human intervention",
      icon: Brain,
      metrics: "99.9% automation accuracy",
      color: "from-green-600 to-emerald-600"
    },
    {
      title: "Neural Interface Revolution",
      description: "Direct brain-computer interfaces enabling seamless human-AI collaboration",
      icon: Zap,
      metrics: "Real-time consciousness sync",
      color: "from-orange-600 to-red-600"
    },
    {
      title: "Transcendent Intelligence",
      description: "AI systems that transcend traditional limitationsachieving superhuman cognitive abilities",
      icon: Rocket,
      metrics: "Beyond human comprehension",
      color: "from-indigo-600 to-purple-600"
    }
  ];

  const benefits = [
    { icon: TrendingUptext: "2,500-5,000% ROI Increase"color: "text-green-500" },
    { icon: Targetext: "99.9% Accuracy Rate"color: "text-blue-500" },
    { icon: Userstext: "10M+ Users Impacted"color: "text-purple-500" },
    { icon: Globetext: "Global Implementation"color: "text-orange-500" },
    { icon: Shieldtext: "Enterprise Security"color: "text-red-500" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0y: isVisible ? 0 : 50 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800 py-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0y: isVisible ? 0 : 30 }}
          transition={{ delay: 0.2duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
            <Zap className="w-4 h-4" />
            AI 2025 Ultimate Innovation Showcase
          </div>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent mb-6">
            Revolutionary AI Breakthroughs
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience the future of artificial intelligence with our groundbreaking innovations that are reshaping industries and transforming the world.
          </p>
        </motion.div>

        {/* Innovation Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {innovations.map((innovationindex) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isVisible ? 1 : 0y: isVisible ? 0 : 50 }}
              transition={{ delay: 0.4 + index * 0.1duration: 0.8 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl blur-xl"
                   style={{ background: `linear-gradient(to right${innovation.color})` }}></div>
              <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 h-full hover:border-gray-600 transition-all duration-300">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${innovation.color} mb-4`}>
                  <innovation.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{innovation.title}</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{innovation.description}</p>
                <div className="text-sm font-semibold text-blue-400">{innovation.metrics}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0y: isVisible ? 0 : 30 }}
          transition={{ delay: 0.8duration: 0.8 }}
          className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 mb-12"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-8">Proven Results & Impact</h2>
          <div className="grid md:grid-cols-5 gap-6">
            {benefits.map((benefitindex) => (
              <motion.div
                key={index}
                initial={{ opacity: 0scale: 0.8 }}
                animate={{ opacity: isVisible ? 1 : 0scale: isVisible ? 1 : 0.8 }}
                transition={{ delay: 1 + index * 0.1duration: 0.5 }}
                className="text-center"
              >
                <div className="inline-flex p-4 bg-gray-700 rounded-xl mb-4">
                  <benefit.icon className={`w-6 h-6 ${benefit.color}`} />
                </div>
                <p className="text-white font-semibold text-sm">{benefit.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0y: isVisible ? 0 : 30 }}
          transition={{ delay: 1.2duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Link
              href="/ai-2025-ultimate-breakthrough"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Explore Breakthroughs
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-gray-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:border-gray-500 hover:bg-gray-800/50 transition-all duration-300"
            >
              Get Started Today
            </Link>
          </div>
          <p className="text-gray-400 mt-6 text-sm">
            Join thousands of enterprises already transforming with our AI innovations
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AI2025UltimateInnovationShowcase;

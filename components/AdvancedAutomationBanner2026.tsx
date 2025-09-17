"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Bot, CheckCircle, Cog, Rocket, Sparkles, TrendingUp, Zap } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const AdvancedAutomationBanner2026: React.FC = () => {
  const automationStats = [
    {
      value: "85%",
      label: "Process Automation",
      description: "Average automation achieved"
    },
    {
      value: "300%",
      label: "Productivity Increase",
      description: "Typical ROI improvement"
    },
    {
      value: "24/7",
      label: "Autonomous Operations",
      description: "Continuous business operations"
    },
    {
      value: "99.9%",
      label: "Accuracy Rate",
      description: "Automated decision precision"
    }
  ];

  const automationFeatures = [
    {
      title: "AI-Powered Process Automation",
      description: "Intelligent automation that learns and adapts to your business processes",
      icon: Bot,
      benefits: ["Smart Decision Making", "Adaptive Workflows", "Continuous Learning"]
    },
    {
      title: "Autonomous Business Operations",
      description: "Fully automated business operations that run without human intervention",
      icon: Cog,
      benefits: ["Self-Healing Systems", "Predictive Maintenance", "Auto-Scaling"]
    },
    {
      title: "Intelligent Workflow Orchestration",
      description: "Advanced orchestration of complex business workflows across systems",
      icon: Zap,
      benefits: ["Cross-System Integration", "Real-time Monitoring", "Dynamic Optimization"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-300 text-sm font-medium">Advanced Automation 2026</span>
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-emerald-200 to-cyan-200 bg-clip-text text-transparent"
          >
            Autonomous Business Operations
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
          >
            Transform your business with AI-powered automation that works 24/7. 
            Achieve unprecedented efficiency and scale your operations autonomously.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/automation-consultation"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <Rocket className="w-5 h-5" />
              Start Automation Journey
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/automation-case-studies"
              className="inline-flex items-center gap-2 px-8 py-4 border border-emerald-500/50 hover:border-emerald-400 text-emerald-300 hover:text-white font-semibold rounded-full transition-all duration-300 hover:bg-emerald-500/10"
            >
              View Success Stories
              <TrendingUp className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {automationStats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center"
            >
              <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300">
                <div className="text-4xl font-bold text-white mb-2 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-300">
                  {stat.description}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {automationFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <div className="relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300 h-full">
                  <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center gap-3 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/30 rounded-full">
            <Zap className="w-5 h-5 text-yellow-400" />
            <span className="text-white font-medium">Free Automation Assessment Available</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdvancedAutomationBanner2026;
"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Brain, Cpu, Globe, Lock, Sparkles, Star, Zap } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const RevolutionaryContentBanner2026: React.FC = () => {
  const revolutionaryFeatures = [
    {
      title: "AI Consciousness Evolution 2026",
      description: "Breakthrough in artificial consciousness with quantum neural networks",
      icon: Brain,
      href: "/ai-consciousness-evolution-2026",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Quantum Internet Revolution",
      description: "Next-generation quantum communication networks",
      icon: Globe,
      href: "/quantum-internet-revolution-2026",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      title: "Synthetic Intelligence Platform",
      description: "Advanced synthetic intelligence beyond traditional AI",
      icon: Cpu,
      href: "/synthetic-intelligence-platform-2026",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      title: "Post-Quantum Cryptography",
      description: "Quantum-resistant security for the future",
      icon: Lock,
      href: "/post-quantum-cryptography-2026",
      gradient: "from-amber-500 to-orange-500"
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
    <section className="relative py-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 text-sm font-medium">Revolutionary Technology 2026</span>
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent"
          >
            The Future is Here
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
          >
            Experience breakthrough technologies that will reshape the digital landscape. 
            From AI consciousness to quantum internet, discover what's possible in 2026.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/revolutionary-tech-showcase-2026"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              Explore 2026 Innovations
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/future-tech-roadmap"
              className="inline-flex items-center gap-2 px-8 py-4 border border-purple-500/50 hover:border-purple-400 text-purple-300 hover:text-white font-semibold rounded-full transition-all duration-300 hover:bg-purple-500/10"
            >
              View Roadmap
              <Star className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {revolutionaryFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group"
              >
                <Link href={feature.href} className="block">
                  <div className="relative p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300 h-full">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.gradient} mb-4`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {feature.description}
                    </p>

                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/30 rounded-full">
            <Zap className="w-5 h-5 text-yellow-400" />
            <span className="text-white font-medium">Limited Early Access Available</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RevolutionaryContentBanner2026;
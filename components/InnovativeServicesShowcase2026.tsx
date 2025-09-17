"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Brain, Cloud, Database, Globe, Lock, Monitor, Network, Rocket, Shield, Sparkles, Zap } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';

const InnovativeServicesShowcase2026: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('ai');

  const serviceCategories = {
    ai: {
      title: "AI & Machine Learning",
      icon: Brain,
      gradient: "from-purple-500 to-pink-500"
    },
    quantum: {
      title: "Quantum Computing",
      icon: Globe,
      gradient: "from-cyan-500 to-blue-500"
    },
    security: {
      title: "Cybersecurity",
      icon: Shield,
      gradient: "from-emerald-500 to-teal-500"
    },
    cloud: {
      title: "Cloud Solutions",
      icon: Cloud,
      gradient: "from-amber-500 to-orange-500"
    }
  };

  const services = {
    ai: [
      {
        title: "AI Consciousness Platform",
        description: "Advanced artificial consciousness with quantum neural networks",
        features: ["Quantum Neural Networks", "Consciousness Simulation", "Emotional AI"],
        pricing: "From $50,000/month",
        popular: true
      },
      {
        title: "Synthetic Intelligence Suite",
        description: "Beyond traditional AI - synthetic intelligence for complex decision making",
        features: ["Synthetic Reasoning", "Creative Problem Solving", "Autonomous Learning"],
        pricing: "From $75,000/month",
        popular: false
      },
      {
        title: "Neural Interface Development",
        description: "Mind-machine interface solutions for seamless human-AI interaction",
        features: ["Brain-Computer Interface", "Thought Recognition", "Neural Feedback"],
        pricing: "From $100,000/month",
        popular: false
      }
    ],
    quantum: [
      {
        title: "Quantum Internet Infrastructure",
        description: "Next-generation quantum communication networks",
        features: ["Quantum Entanglement", "Instant Communication", "Unhackable Networks"],
        pricing: "From $200,000/month",
        popular: true
      },
      {
        title: "Quantum Computing as a Service",
        description: "Access to quantum computing power for complex problem solving",
        features: ["Quantum Algorithms", "Optimization Solutions", "Cryptographic Security"],
        pricing: "From $150,000/month",
        popular: false
      },
      {
        title: "Post-Quantum Cryptography",
        description: "Quantum-resistant security for future-proof protection",
        features: ["Quantum-Resistant Algorithms", "Future-Proof Security", "Advanced Encryption"],
        pricing: "From $125,000/month",
        popular: false
      }
    ],
    security: [
      {
        title: "AI-Powered Threat Detection",
        description: "Advanced AI systems for real-time threat identification and response",
        features: ["Real-time Monitoring", "Predictive Analysis", "Automated Response"],
        pricing: "From $25,000/month",
        popular: true
      },
      {
        title: "Zero-Trust Security Framework",
        description: "Comprehensive zero-trust architecture for enterprise security",
        features: ["Identity Verification", "Network Segmentation", "Continuous Monitoring"],
        pricing: "From $40,000/month",
        popular: false
      },
      {
        title: "Quantum Security Solutions",
        description: "Quantum-enhanced security for ultra-secure communications",
        features: ["Quantum Key Distribution", "Quantum Random Number Generation", "Quantum Authentication"],
        pricing: "From $80,000/month",
        popular: false
      }
    ],
    cloud: [
      {
        title: "Edge AI Computing",
        description: "Distributed AI computing at the edge for ultra-low latency",
        features: ["Edge Processing", "Real-time Analytics", "Distributed Intelligence"],
        pricing: "From $30,000/month",
        popular: true
      },
      {
        title: "Quantum Cloud Platform",
        description: "Hybrid classical-quantum cloud infrastructure",
        features: ["Quantum Processing Units", "Hybrid Workloads", "Scalable Architecture"],
        pricing: "From $100,000/month",
        popular: false
      },
      {
        title: "Autonomous Cloud Management",
        description: "Self-managing cloud infrastructure with AI optimization",
        features: ["Auto-scaling", "Predictive Maintenance", "Cost Optimization"],
        pricing: "From $45,000/month",
        popular: false
      }
    ]
  };

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
    <section className="relative py-20 px-4 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span className="text-indigo-300 text-sm font-medium">Innovative Services 2026</span>
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent"
          >
            Next-Generation Solutions
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
          >
            Discover our cutting-edge services that leverage the latest in AI, quantum computing, 
            and advanced technologies to transform your business operations.
          </motion.p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {Object.entries(serviceCategories).map(([key, category]) => {
            const IconComponent = category.icon;
            const isActive = activeCategory === key;
            
            return (
              <motion.button
                key={key}
                variants={itemVariants}
                onClick={() => setActiveCategory(key)}
                className={`inline-flex items-center gap-3 px-6 py-4 rounded-full transition-all duration-300 ${
                  isActive
                    ? `bg-gradient-to-r ${category.gradient} text-white shadow-2xl`
                    : 'bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                <IconComponent className="w-5 h-5" />
                <span className="font-semibold">{category.title}</span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Services Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {services[activeCategory as keyof typeof services].map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300 h-full">
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-semibold rounded-full">
                      <Star className="w-3 h-3" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold text-white">{service.pricing}</span>
                  </div>
                  <Link
                    href={`/services/${activeCategory}/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/services/consultation"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            <Rocket className="w-5 h-5" />
            Get Custom Solution
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default InnovativeServicesShowcase2026;
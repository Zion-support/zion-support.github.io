'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Target, 
  TrendingUp, 
  Shield, 
  Globe, 
  Rocket, 
  Star,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Cpu,
  Database,
  Cloud,
  Lock
} from 'lucide-react';

const AIInnovationShowcase2025 = () => {
  const [activeTab, setActiveTab] = useState('breakthroughs');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const innovations = {
    breakthroughs: [
      {
        id: 1,
        title: "Quantum-Neural Fusion Technology",
        description: "Revolutionary AI that combines quantum computing with neural networks for unprecedented processing power.",
        icon: Brain,
        impact: "10,000x faster processing",
        category: "Quantum AI"
      },
      {
        id: 2,
        title: "Autonomous Business Operations",
        description: "Self-managing AI systems that handle complex business processes without human intervention.",
        icon: Zap,
        impact: "99.9% accuracy",
        category: "Automation"
      },
      {
        id: 3,
        title: "Predictive Intelligence Platform",
        description: "AI that predicts market trends and business outcomes with 95% accuracy.",
        icon: Target,
        impact: "95% prediction accuracy",
        category: "Predictive AI"
      },
      {
        id: 4,
        title: "Multi-Modal AI Consciousness",
        description: "Advanced AI that processes text, images, voice, and data simultaneously.",
        icon: Sparkles,
        impact: "Unified processing",
        category: "Consciousness"
      }
    ],
    applications: [
      {
        id: 1,
        title: "Enterprise Automation Suite",
        description: "Complete business process automation with intelligent decision making.",
        features: ["Workflow automation", "Smart scheduling", "Predictive analytics"],
        roi: "2,500% ROI"
      },
      {
        id: 2,
        title: "AI-Powered Security Platform",
        description: "Advanced cybersecurity with AI-driven threat detection and response.",
        features: ["Real-time monitoring", "Threat prediction", "Auto-response"],
        roi: "99.9% threat prevention"
      },
      {
        id: 3,
        title: "Intelligent Content Generation",
        description: "AI that creates high-quality content across multiple formats and languages.",
        features: ["Multi-language support", "Brand consistency", "SEO optimization"],
        roi: "500% content efficiency"
      }
    ],
    technologies: [
      {
        id: 1,
        name: "Neural Architecture Search",
        description: "AI that designs optimal neural network architectures automatically.",
        icon: Cpu
      },
      {
        id: 2,
        name: "Quantum Machine Learning",
        description: "Machine learning algorithms running on quantum computers.",
        icon: Database
      },
      {
        id: 3,
        name: "Edge AI Computing",
        description: "AI processing at the edge for real-time decision making.",
        icon: Cloud
      },
      {
        id: 4,
        name: "Federated Learning",
        description: "Distributed AI training while preserving data privacy.",
        icon: Lock
      }
    ]
  };

  const tabs = [
    { id: 'breakthroughs', label: 'AI Breakthroughs', icon: Rocket },
    { id: 'applications', label: 'Applications', icon: Target },
    { id: 'technologies', label: 'Technologies', icon: Cpu }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Revolutionary AI 2025
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Innovation
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Showcase</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the cutting-edge AI technologies and breakthroughs that are reshaping industries and creating unprecedented opportunities for growth and innovation.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <Icon className="w-5 h-5" />
                {tab.label}
              </button>
            );
          })}
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="grid gap-8"
          >
            {activeTab === 'breakthroughs' && (
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                {innovations.breakthroughs.map((innovation, index) => {
                  const Icon = innovation.icon;
                  return (
                    <motion.div
                      key={innovation.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-300 group"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full">
                              {innovation.category}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                            {innovation.title}
                          </h3>
                          <p className="text-gray-300 mb-4">
                            {innovation.description}
                          </p>
                          <div className="flex items-center gap-2 text-green-400 font-medium">
                            <TrendingUp className="w-4 h-4" />
                            {innovation.impact}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}

            {activeTab === 'applications' && (
              <div className="grid md:grid-cols-3 gap-8">
                {innovations.applications.map((application, index) => (
                  <motion.div
                    key={application.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-300"
                  >
                    <h3 className="text-xl font-bold text-white mb-4">
                      {application.title}
                    </h3>
                    <p className="text-gray-300 mb-6">
                      {application.description}
                    </p>
                    <div className="space-y-3 mb-6">
                      {application.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="text-center">
                      <span className="inline-block bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                        {application.roi}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === 'technologies' && (
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {innovations.technologies.map((tech, index) => {
                  const Icon = tech.icon;
                  return (
                    <motion.div
                      key={tech.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 text-center group"
                    >
                      <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl w-fit mx-auto mb-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                        {tech.name}
                      </h3>
                      <p className="text-gray-300 text-sm">
                        {tech.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of companies already leveraging our AI innovations to achieve unprecedented growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-full font-medium hover:bg-white/20 transition-all duration-300"
              >
                View Success Stories
                <Star className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AIInnovationShowcase2025;
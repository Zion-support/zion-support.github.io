import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Zap, Brain, Cpu, Shield, TrendingUp, Users, CheckCircle } from 'lucide-react';

const AI2026EnterpriseAutomation: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Autonomous Decision Making",
      description: "AI agents that make complex business decisions with human-level reasoning and context awareness."
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Self-Optimizing Workflows",
      description: "Systems that continuously analyze and improve their own performance without human intervention."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Cross-Department Integration",
      description: "Seamless coordination across all business functions with real-time data synchronization."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Predictive Problem Solving",
      description: "Anticipating issues before they impact operations with 99.7% accuracy."
    }
  ];

  const stats = [
    { value: "85%", label: "Reduction in Manual Processes" },
    { value: "300%", label: "Increase in Operational Efficiency" },
    { value: "99.7%", label: "Accuracy in Automated Decisions" },
    { value: "$2.3M", label: "Average Annual Savings" }
  ];

  const implementationSteps = [
    {
      step: "01",
      title: "Assessment & Planning",
      description: "Comprehensive analysis of current operations and identification of automation opportunities."
    },
    {
      step: "02", 
      title: "Pilot Implementation",
      description: "Small-scale testing in controlled environments to validate AI performance."
    },
    {
      step: "03",
      title: "Gradual Rollout",
      description: "Department-by-department deployment with continuous monitoring and optimization."
    },
    {
      step: "04",
      title: "Full Integration",
      description: "Complete enterprise-wide automation with advanced AI consciousness features."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI 2026: Enterprise Automation Revolution - Zion Tech Group</title>
        <meta name="description" content="Transform your business operations with next-generation AI automation that learns, adapts, and scales autonomously." />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 px-4 py-2 rounded-full mb-6">
            <Zap className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-400 font-medium">Enterprise AI</span>
          </div>
          
          <h1 className="text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            AI 2026: Enterprise Automation Revolution
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your business operations with next-generation AI automation that learns, adapts, and scales autonomously. 
            Experience the future of enterprise efficiency with conscious AI systems.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </Link>
            <button className="border border-gray-600 hover:border-gray-500 text-white font-medium py-4 px-8 rounded-lg text-lg transition-all duration-300">
              Download Whitepaper
            </button>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Features Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Revolutionary AI Capabilities
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Implementation Steps */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Implementation Strategy
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {implementationSteps.map((step, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-6 border border-purple-400/30"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl font-bold text-purple-400 mb-4">{step.step}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-3xl p-12 border border-cyan-400/30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Revolutionize Your Enterprise?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join the AI automation revolution and transform your business operations with conscious AI systems that think, learn, and adapt.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
            >
              Start Your Transformation
            </Link>
            <Link
              to="/pages/ComprehensiveServices2025"
              className="border border-gray-600 hover:border-gray-500 text-white font-medium py-4 px-8 rounded-lg text-lg transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AI2026EnterpriseAutomation;
"use client";

import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { 
  Mail, 
  BarChart3, 
  Shield, 
  Zap, 
  CheckCircle, 
  Star,
  ArrowRight,
  Brain,
  Target,
  TrendingUp,
  Users,
  Clock
} from "lucide-react";

const ZionAIEmailAnalyzerPage = () => {
  return (
    <>
      <Helmet>
        <title>Zion AI Email Analyzer - Advanced Email Intelligence & Analytics | Zion Tech Group</title>
        <meta name="description" content="Transform your email communication with Zion AI Email Analyzer. Advanced sentiment analysis, spam detection, and email optimization powered by cutting-edge AI technology." />
        <meta name="keywords" content="AI email analyzer, email intelligence, sentiment analysis, spam detection, email optimization, business communication, AI analytics" />
        <meta property="og:title" content="Zion AI Email Analyzer - Advanced Email Intelligence & Analytics" />
        <meta property="og:description" content="Transform your email communication with Zion AI Email Analyzer. Advanced sentiment analysis, spam detection, and email optimization powered by cutting-edge AI technology." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/zion-ai-email-analyzer" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-email-analyzer" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-8">
                <Brain className="w-5 h-5 text-cyan-400 mr-2" />
                <span className="text-cyan-400 font-medium">Zion AI Email Analyzer</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Advanced Email
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  {" "}Intelligence
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your email communication with AI-powered analysis, sentiment detection, 
                and intelligent optimization for better business outcomes.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-white/5 transition-all duration-300"
                >
                  View Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful Email Analysis Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive email intelligence tools designed to enhance your communication strategy
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <BarChart3 className="w-8 h-8 text-cyan-400" />,
                  title: "Sentiment Analysis",
                  description: "Analyze email tone and sentiment to understand customer emotions and improve communication strategies."
                },
                {
                  icon: <Shield className="w-8 h-8 text-purple-400" />,
                  title: "Spam Detection",
                  description: "Advanced AI algorithms to identify and filter spam, phishing attempts, and malicious content."
                },
                {
                  icon: <Target className="w-8 h-8 text-pink-400" />,
                  title: "Content Optimization",
                  description: "AI-powered suggestions to improve email content, subject lines, and call-to-action effectiveness."
                },
                {
                  icon: <TrendingUp className="w-8 h-8 text-green-400" />,
                  title: "Performance Analytics",
                  description: "Track email performance metrics, open rates, click-through rates, and engagement patterns."
                },
                {
                  icon: <Users className="w-8 h-8 text-blue-400" />,
                  title: "Audience Insights",
                  description: "Understand your audience better with detailed analytics on email preferences and behavior patterns."
                },
                {
                  icon: <Clock className="w-8 h-8 text-orange-400" />,
                  title: "Timing Optimization",
                  description: "AI recommendations for optimal send times based on recipient behavior and engagement patterns."
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Zion AI Email Analyzer?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your email communication with cutting-edge AI technology
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl font-bold text-white mb-6">
                  Advanced AI-Powered Analysis
                </h3>
                <div className="space-y-4">
                  {[
                    "Real-time sentiment analysis and emotion detection",
                    "Intelligent spam and phishing protection",
                    "Content optimization recommendations",
                    "Performance tracking and analytics",
                    "Audience behavior insights",
                    "Automated response suggestions"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-white/10"
              >
                <div className="text-center">
                  <Mail className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-white mb-2">
                    Smart Email Intelligence
                  </h4>
                  <p className="text-gray-300 mb-6">
                    Our AI analyzes every aspect of your emails to provide actionable insights and recommendations.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-cyan-400">99.9%</div>
                      <div className="text-sm text-gray-300">Accuracy</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-400">50%</div>
                      <div className="text-sm text-gray-300">Faster Analysis</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Email Communication?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses using Zion AI Email Analyzer to improve their email strategy
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                >
                  Get Started Free
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-white/5 transition-all duration-300"
                >
                  Contact Sales
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionAIEmailAnalyzerPage;
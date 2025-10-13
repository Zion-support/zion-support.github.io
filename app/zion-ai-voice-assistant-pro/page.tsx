"use client";

import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { 
  Brain, 
  CheckCircle, 
  ArrowRight,
  Star,
  Zap,
  Shield,
  Target,
  TrendingUp,
  Users,
  Clock
} from "lucide-react";

const ZionAiVoiceAssistantProPage = () => {
  return (
    <>
      <Helmet>
        <title>Zion Ai Voice Assistant Pro | Zion Tech Group</title>
        <meta name="description" content="Advanced zion ai voice assistant pro solutions powered by cutting-edge AI technology to transform your business operations and drive growth." />
        <meta name="keywords" content="AI solutions, technology, business automation, digital transformation" />
        <meta property="og:title" content="Zion Ai Voice Assistant Pro" />
        <meta property="og:description" content="Advanced zion ai voice assistant pro solutions powered by cutting-edge AI technology to transform your business operations and drive growth." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/zion-ai-voice-assistant-pro" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-voice-assistant-pro" />
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
                <span className="text-cyan-400 font-medium">Zion Ai Voice Assistant Pro</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Zion Ai Voice Assistant Pro
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  {" "}Solutions
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Advanced zion ai voice assistant pro solutions powered by cutting-edge AI technology to transform your business operations and drive growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-white/5 transition-all duration-300"
                >
                  Learn More
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
                Key Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive solutions designed to enhance your business operations
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Brain className="w-8 h-8 text-cyan-400" />,
                  title: "AI-Powered Intelligence",
                  description: "Advanced artificial intelligence algorithms to optimize your business processes and decision-making."
                },
                {
                  icon: <Shield className="w-8 h-8 text-purple-400" />,
                  title: "Enterprise Security",
                  description: "Bank-level security measures to protect your data and ensure compliance with industry standards."
                },
                {
                  icon: <Target className="w-8 h-8 text-pink-400" />,
                  title: "Precision Analytics",
                  description: "Detailed insights and analytics to help you make informed business decisions and track performance."
                },
                {
                  icon: <TrendingUp className="w-8 h-8 text-green-400" />,
                  title: "Scalable Solutions",
                  description: "Flexible architecture that grows with your business needs and adapts to changing requirements."
                },
                {
                  icon: <Users className="w-8 h-8 text-blue-400" />,
                  title: "Team Collaboration",
                  description: "Seamless collaboration tools that enhance productivity and streamline team communication."
                },
                {
                  icon: <Clock className="w-8 h-8 text-orange-400" />,
                  title: "24/7 Support",
                  description: "Round-the-clock technical support and maintenance to ensure uninterrupted service."
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

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses using our solutions to transform their operations
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

export default ZionAiVoiceAssistantProPage;
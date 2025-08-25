import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Atom, Cpu, Zap, Star, ArrowRight, 
  Brain, Shield, Globe, Rocket, Database,
  CheckCircle, TrendingUp, Award, Sparkles,
  Lock, Cloud, BarChart3, Settings
} from 'lucide-react';

export default function QuantumAIFusionPlatform() {
  const features = [
    {
      icon: <Atom className="w-8 h-8 text-indigo-500" />,
      title: 'Quantum Computing Integration',
      description: 'Seamlessly integrate quantum computing power with advanced AI algorithms for unprecedented processing capabilities'
    },
    {
      icon: <Brain className="w-8 h-8 text-violet-500" />,
      title: 'Hybrid AI Architecture',
      description: 'Revolutionary hybrid architecture that combines classical AI with quantum computing principles'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Quantum Speed Processing',
      description: 'Process complex AI tasks at quantum speeds, solving problems in seconds that would take years'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Quantum Security',
      description: 'Unhackable quantum encryption and security protocols for your AI systems and data'
    }
  ];

  const benefits = [
    'Exponential processing power increase',
    'Quantum-enhanced machine learning',
    'Unbreakable quantum encryption',
    'Real-time complex problem solving',
    'Advanced pattern recognition',
    'Future-proof technology platform'
  ];

  const useCases = [
    {
      title: 'Financial Modeling',
      description: 'Quantum AI-powered risk assessment and portfolio optimization',
      icon: <BarChart3 className="w-6 h-6 text-blue-400" />
    },
    {
      title: 'Drug Discovery',
      description: 'Molecular simulation and drug interaction prediction',
      icon: <Database className="w-6 h-6 text-green-400" />
    },
    {
      title: 'Climate Modeling',
      description: 'Complex climate pattern analysis and prediction',
      icon: <Globe className="w-6 h-6 text-cyan-400" />
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced threat detection and quantum encryption',
      icon: <Lock className="w-6 h-6 text-red-400" />
    }
  ];

  return (
    <>
      <Head>
        <title>Quantum AI Fusion Platform - Zion Tech Group</title>
        <meta name="description" content="Revolutionary quantum AI fusion platform combining quantum computing with artificial intelligence for unprecedented processing power and capabilities." />
        <meta name="keywords" content="quantum AI, quantum computing, artificial intelligence, quantum fusion, quantum machine learning, quantum encryption" />
        <link rel="canonical" href="https://ziontechgroup.com/quantum-ai-fusion-platform" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/20 to-blue-500/20 border border-indigo-500/30 text-indigo-300 text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2" />
                Revolutionary Quantum Technology
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6">
                Quantum AI Fusion Platform
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                The world's first platform that seamlessly integrates quantum computing with artificial intelligence, 
                creating unprecedented processing power and capabilities for solving humanity's most complex challenges.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-semibold rounded-lg hover:from-indigo-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link href="/contact" className="inline-flex items-center px-8 py-4 border border-indigo-500/30 text-indigo-300 font-semibold rounded-lg hover:bg-indigo-500/10 transition-all duration-200">
                  Book Demo
                </Link>
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
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our Quantum AI Fusion Platform represents the convergence of two revolutionary technologies, 
                creating capabilities that were previously thought impossible.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-8 hover:border-indigo-500/50 transition-all duration-300"
                >
                  <div className="mb-6">{feature.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Transform Your Industry
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Quantum AI Fusion technology is revolutionizing industries across the globe, 
                solving problems that were previously unsolvable.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-8 hover:border-indigo-500/50 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="mr-4">{useCase.icon}</div>
                    <h3 className="text-2xl font-bold text-white">{useCase.title}</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{useCase.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Quantum AI Fusion?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the future of computing with our revolutionary platform that combines 
                the best of quantum computing and artificial intelligence.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <CheckCircle className="w-6 h-6 text-indigo-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready for the Quantum Future?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the quantum revolution and transform your business with unprecedented computing power. 
                Contact us today to learn how Quantum AI Fusion can solve your most complex challenges.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-semibold rounded-lg hover:from-indigo-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105">
                  Start Your Quantum Journey
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link href="/contact" className="inline-flex items-center px-8 py-4 border border-indigo-500/30 text-indigo-300 font-semibold rounded-lg hover:bg-indigo-500/10 transition-all duration-200">
                  Schedule Consultation
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
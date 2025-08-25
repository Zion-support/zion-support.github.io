import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Atom, Brain, Zap, Star, ArrowRight, 
  Cpu, Shield, Globe, Rocket, Database,
  CheckCircle, TrendingUp, Award, Sparkles,
  Lock, Cloud, BarChart3, Settings, Network, Car
} from 'lucide-react';

export default function QuantumNeuralNetworkPlatform() {
  const features = [
    {
      icon: <Atom className="w-8 h-8 text-purple-500" />,
      title: 'Quantum Neural Processing',
      description: 'Revolutionary quantum-enhanced neural networks that process information at quantum speeds'
    },
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'Advanced Learning Algorithms',
      description: 'State-of-the-art machine learning algorithms enhanced with quantum computing principles'
    },
    {
      icon: <Network className="w-8 h-8 text-green-500" />,
      title: 'Scalable Architecture',
      description: 'Infinitely scalable neural network architecture that grows with your computational needs'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Real-time Processing',
      description: 'Lightning-fast processing capabilities for real-time AI applications and decision making'
    }
  ];

  const benefits = [
    'Quantum-enhanced neural processing',
    'Exponential learning capabilities',
    'Real-time pattern recognition',
    'Scalable architecture',
    'Advanced AI decision making',
    'Future-proof technology'
  ];

  const applications = [
    {
      title: 'Financial Trading',
      description: 'Quantum AI-powered market analysis and automated trading systems',
      icon: <BarChart3 className="w-6 h-6 text-green-400" />
    },
    {
      title: 'Medical Diagnosis',
      description: 'Advanced medical imaging analysis and disease detection',
      icon: <Brain className="w-6 h-6 text-blue-400" />
    },
    {
      title: 'Autonomous Vehicles',
      description: 'Real-time decision making for self-driving cars and drones',
      icon: <Car className="w-6 h-6 text-purple-400" />
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced threat detection and pattern recognition',
      icon: <Shield className="w-6 h-6 text-red-400" />
    }
  ];

  return (
    <>
      <Head>
        <title>Quantum Neural Network Platform - Zion Tech Group</title>
        <meta name="description" content="Revolutionary quantum neural network platform combining quantum computing with advanced neural networks for unprecedented AI capabilities." />
        <meta name="keywords" content="quantum neural networks, quantum AI, neural networks, quantum computing, machine learning, artificial intelligence" />
        <link rel="canonical" href="https://ziontechgroup.com/quantum-neural-network-platform" />
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
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2" />
                Revolutionary Neural Technology
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6">
                Quantum Neural Network Platform
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                The next evolution in artificial intelligence - quantum-enhanced neural networks that combine 
                the power of quantum computing with advanced neural network architectures.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link href="/contact" className="inline-flex items-center px-8 py-4 border border-purple-500/30 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-200">
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
                Our Quantum Neural Network Platform represents the convergence of quantum computing 
                and neural network technology, creating unprecedented AI capabilities.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="mb-6">{feature.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Industry Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Quantum Neural Networks are transforming industries across the globe, 
                providing solutions to previously unsolvable problems.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {applications.map((application, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="mr-4">{application.icon}</div>
                    <h3 className="text-2xl font-bold text-white">{application.title}</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{application.description}</p>
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
                Why Choose Quantum Neural Networks?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the future of AI with our revolutionary platform that combines 
                quantum computing power with advanced neural network technology.
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
                  <CheckCircle className="w-6 h-6 text-purple-500 mt-1 flex-shrink-0" />
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
                Ready for the Neural Future?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Transform your business with quantum-enhanced neural networks. 
                Contact us today to learn how our platform can revolutionize your AI capabilities.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105">
                  Start Your Neural Journey
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link href="/contact" className="inline-flex items-center px-8 py-4 border border-purple-500/30 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-200">
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
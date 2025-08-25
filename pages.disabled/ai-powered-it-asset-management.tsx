import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Cpu, Brain, Zap, Star, ArrowRight, 
  Shield, Globe, Database, Settings, Monitor,
  CheckCircle, TrendingUp, Award, Sparkles,
  Lock, Cloud, BarChart3, Server, HardDrive, DollarSign
} from 'lucide-react';

export default function AIPoweredITAssetManagement() {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI-Powered Asset Discovery',
      description: 'Intelligent discovery and mapping of all IT assets across your infrastructure'
    },
    {
      icon: <Cpu className="w-8 h-8 text-green-500" />,
      title: 'Real-time Monitoring',
      description: 'Continuous monitoring and tracking of asset performance, health, and utilization'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Predictive Maintenance',
      description: 'AI-driven predictions for maintenance needs and potential failures'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Security Compliance',
      description: 'Automated security audits and compliance monitoring for all assets'
    }
  ];

  const benefits = [
    'Complete asset visibility',
    'Reduced maintenance costs',
    'Improved security posture',
    'Optimized resource utilization',
    'Automated compliance reporting',
    'Predictive issue resolution'
  ];

  const capabilities = [
    {
      title: 'Asset Inventory Management',
      description: 'Comprehensive tracking of hardware, software, and network assets',
      icon: <Database className="w-6 h-6 text-blue-400" />
    },
    {
      title: 'Performance Analytics',
      description: 'Advanced analytics and reporting on asset performance and efficiency',
      icon: <BarChart3 className="w-6 h-6 text-green-400" />
    },
    {
      title: 'Lifecycle Management',
      description: 'End-to-end management of asset lifecycle from procurement to retirement',
      icon: <TrendingUp className="w-6 h-6 text-purple-400" />
    },
    {
      title: 'Cost Optimization',
      description: 'AI-powered recommendations for cost reduction and resource optimization',
      icon: <DollarSign className="w-6 h-6 text-orange-400" />
    }
  ];

  return (
    <>
      <Head>
        <title>AI-Powered IT Asset Management - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered IT asset management platform that provides complete visibility, monitoring, and optimization of your technology infrastructure." />
        <meta name="keywords" content="IT asset management, AI asset tracking, IT infrastructure, asset monitoring, IT compliance, asset optimization" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-powered-it-asset-management" />
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
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2" />
                Revolutionary IT Management
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
                AI-Powered IT Asset Management
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Transform your IT infrastructure management with our revolutionary AI-powered platform. 
                Gain complete visibility, control, and optimization of all your technology assets.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-200 transform hover:scale-105">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link href="/contact" className="inline-flex items-center px-8 py-4 border border-blue-500/30 text-blue-300 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-200">
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
                Our AI-Powered IT Asset Management platform combines cutting-edge artificial intelligence 
                with comprehensive asset tracking to revolutionize your infrastructure management.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="mb-6">{feature.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Comprehensive Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our platform provides end-to-end IT asset management capabilities, 
                from discovery and monitoring to optimization and compliance.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="mr-4">{capability.icon}</div>
                    <h3 className="text-2xl font-bold text-white">{capability.title}</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{capability.description}</p>
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
                Why Choose AI-Powered Asset Management?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the future of IT infrastructure management with our revolutionary 
                AI-powered platform that provides complete control and optimization.
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
                  <CheckCircle className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
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
                Ready to Transform Your IT Management?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Gain complete control and visibility of your IT infrastructure with AI-powered asset management. 
                Contact us today to learn how our platform can revolutionize your technology operations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-200 transform hover:scale-105">
                  Start Your IT Transformation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link href="/contact" className="inline-flex items-center px-8 py-4 border border-blue-500/30 text-blue-300 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-200">
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
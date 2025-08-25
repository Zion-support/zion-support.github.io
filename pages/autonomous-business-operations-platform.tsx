import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Rocket, Cpu, Zap, Star, ArrowRight, 
  Brain, Shield, Globe, Database, Settings,
  CheckCircle, TrendingUp, Award, Sparkles,
  Lock, Cloud, BarChart3, Users, Building
} from 'lucide-react';

export default function AutonomousBusinessOperationsPlatform() {
  const features = [
    {
      icon: <Rocket className="w-8 h-8 text-teal-500" />,
      title: 'Autonomous Operations',
      description: 'Fully automated business processes that run independently with minimal human intervention'
    },
    {
      icon: <Brain className="w-8 h-8 text-violet-500" />,
      title: 'AI Decision Making',
      description: 'Intelligent systems that make complex business decisions based on real-time data analysis'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Real-time Optimization',
      description: 'Continuous optimization of business processes for maximum efficiency and performance'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Intelligent Security',
      description: 'Advanced security protocols that automatically detect and respond to threats'
    }
  ];

  const benefits = [
    '24/7 autonomous operation',
    'Reduced operational costs',
    'Increased efficiency and productivity',
    'Real-time decision making',
    'Scalable business processes',
    'Enhanced security and compliance'
  ];

  const useCases = [
    {
      title: 'Supply Chain Management',
      description: 'Automated inventory management, demand forecasting, and logistics optimization',
      icon: <Globe className="w-6 h-6 text-blue-400" />
    },
    {
      title: 'Customer Service',
      description: 'AI-powered customer support with intelligent routing and automated responses',
      icon: <Users className="w-6 h-6 text-green-400" />
    },
    {
      title: 'Financial Operations',
      description: 'Automated accounting, risk assessment, and financial reporting',
      icon: <BarChart3 className="w-6 h-6 text-purple-400" />
    },
    {
      title: 'HR Management',
      description: 'Automated recruitment, performance tracking, and employee development',
      icon: <Building className="w-6 h-6 text-orange-400" />
    }
  ];

  return (
    <>
      <Head>
        <title>Autonomous Business Operations Platform - Zion Tech Group</title>
        <meta name="description" content="Revolutionary autonomous business operations platform that automates and optimizes all aspects of your business with AI-powered decision making." />
        <meta name="keywords" content="autonomous business, business automation, AI operations, business optimization, automated processes, intelligent business" />
        <link rel="canonical" href="https://ziontechgroup.com/autonomous-business-operations-platform" />
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
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-teal-500/20 to-emerald-500/20 border border-teal-500/30 text-teal-300 text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2" />
                Revolutionary Business Automation
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-teal-400 via-emerald-400 to-green-400 bg-clip-text text-transparent mb-6">
                Autonomous Business Operations Platform
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Transform your business with the world's most advanced autonomous operations platform. 
                Our AI-powered system automates, optimizes, and manages every aspect of your business operations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-teal-600 hover:to-emerald-700 transition-all duration-200 transform hover:scale-105">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link href="/contact" className="inline-flex items-center px-8 py-4 border border-teal-500/30 text-teal-300 font-semibold rounded-lg hover:bg-teal-500/10 transition-all duration-200">
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
                Our Autonomous Business Operations Platform combines cutting-edge AI technology 
                with advanced automation to create a business that runs itself.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-8 hover:border-teal-500/50 transition-all duration-300"
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
                Transform Your Business
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our platform automates and optimizes every aspect of your business operations, 
                from customer service to financial management.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-8 hover:border-teal-500/50 transition-all duration-300"
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
                Why Choose Autonomous Operations?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the future of business with our revolutionary platform that 
                automates and optimizes every aspect of your operations.
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
                  <CheckCircle className="w-6 h-6 text-teal-500 mt-1 flex-shrink-0" />
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
                Ready to Automate Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Transform your business operations with autonomous AI-powered automation. 
                Contact us today to learn how our platform can revolutionize your business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-teal-600 hover:to-emerald-700 transition-all duration-200 transform hover:scale-105">
                  Start Your Automation Journey
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link href="/contact" className="inline-flex items-center px-8 py-4 border border-teal-500/30 text-teal-300 font-semibold rounded-lg hover:bg-teal-500/10 transition-all duration-200">
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
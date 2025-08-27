import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Monitor, Shield, TrendingUp, Database, Network, ArrowRight, Cpu, HardDrive, Zap, Target, Rocket, CheckCircle, Star, Lightbulb, Cloud, Settings, Brain, Server, Printer, Clock, Globe, BarChart3 } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const AIPoweredITAssetManagement = () => {
  const features = [
    {
      icon: Monitor,
      title: "Intelligent Asset Discovery",
      description: "AI-powered automatic discovery and classification of all IT assets across your network infrastructure."
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Continuous monitoring of asset health, performance, and utilization with instant alerts and notifications."
    },
    {
      icon: Target,
      title: "Predictive Maintenance",
      description: "AI algorithms predict potential failures and maintenance needs before they impact your operations."
    },
    {
      icon: Rocket,
      title: "Lifecycle Management",
      description: "Complete asset lifecycle tracking from procurement to retirement with optimization recommendations."
    },
    {
      icon: Globe,
      title: "Multi-Platform Support",
      description: "Unified management across Windows, Linux, macOS, cloud platforms, and mobile devices."
    }
  ];

  const capabilities = [
    {
      icon: Cpu,
      title: "Intelligent Asset Discovery",
      description: "AI-powered scanning and discovery of all IT assets across your infrastructure."
    },
    {
      icon: Shield,
      title: "Security Monitoring",
      description: "Continuous security assessment and threat detection for all managed assets."
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description: "Real-time performance monitoring and predictive maintenance insights."
    },
    {
      icon: Database,
      title: "Centralized Management",
      description: "Single platform for managing all IT assets across your entire infrastructure."
    },
    {
      icon: Network,
      title: "Network Optimization",
      description: "AI-powered network performance optimization and bandwidth management."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <SEOHead 
        title="AI-Powered IT Asset Management | Zion Tech Group"
        description="Intelligent IT asset management powered by AI for comprehensive monitoring, security, and optimization of your infrastructure."
        keywords="AI asset management, IT infrastructure, predictive maintenance, security monitoring, asset discovery"
      />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-6"
          >
            <div className="p-3 bg-blue-600/20 rounded-full">
              <Server className="h-12 w-12 text-blue-400"/>
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
          >
            AI-Powered IT Asset Management
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Intelligent monitoring, security, and optimization of your entire IT infrastructure 
            with AI-driven insights and predictive maintenance.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 text-lg"
            >
              Get Started
            </Link>
            <Link 
              to="/request-quote" 
              className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400/10 transition-all duration-300 text-lg"
            >
              Request Quote
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Key Features
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-600/20 rounded-lg mr-4">
                    <feature.icon className="h-6 w-6 text-blue-400"/>
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </div>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Advanced Capabilities
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-cyan-600/20 rounded-lg mr-4">
                    <capability.icon className="h-6 w-6 text-cyan-400"/>
                  </div>
                  <h3 className="text-xl font-semibold">{capability.title}</h3>
                </div>
                <p className="text-gray-300">{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20"
          >
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your IT Asset Management?</h3>
            <p className="text-gray-300 mb-6">
              Experience the power of AI-driven IT asset management with comprehensive monitoring, 
              security, and optimization capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
              >
                Contact Us
              </Link>
              <Link 
                to="/request-quote" 
                className="border border-blue-400 text-blue-400 px-6 py-3 rounded-lg font-semibold hover:bg-blue-400/10 transition-all duration-300"
              >
                Get Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIPoweredITAssetManagement;

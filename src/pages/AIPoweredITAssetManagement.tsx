import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Shield, TrendingUp, Database, Network, ArrowRight, Cpu, HardDrive } from 'lucide-react';

const AIPoweredITAssetManagement: React.FC = () => {
  const features = [
    {
      icon: Monitor,
      title: 'Real-time Asset Monitoring',
      description: 'Continuous monitoring of all IT assets with AI-powered anomaly detection and predictive maintenance.'
    },
    {
      icon: Shield,
      title: 'Intelligent Security',
      description: 'AI-driven threat detection and automated security response for all managed IT assets.'
    },
    {
      icon: TrendingUp,
      title: 'Performance Analytics',
      description: 'Advanced analytics and reporting for asset performance optimization and capacity planning.'
    },
    {
      icon: Database,
      title: 'Centralized Management',
      description: 'Single platform for managing all IT assets across your entire infrastructure.'
    },
    {
      icon: Network,
      title: 'Network Optimization',
      description: 'AI-powered network performance optimization and bandwidth management.'
    },
    {
      icon: Cpu,
      title: 'Resource Optimization',
      description: 'Intelligent resource allocation and workload balancing across your IT infrastructure.'
    }
  ];

  const benefits = [
    'Reduced IT costs by 30-40%',
    'Improved asset utilization',
    'Predictive maintenance',
    'Enhanced security posture',
    'Automated compliance',
    'Real-time visibility'
  ];

  const assetTypes = [
    {
      title: 'Hardware Assets',
      description: 'Servers, workstations, networking equipment, and mobile devices with comprehensive lifecycle management.'
    },
    {
      title: 'Software Assets',
      description: 'License management, software deployment, and compliance tracking across your organization.'
    },
    {
      title: 'Cloud Resources',
      description: 'Multi-cloud resource monitoring, cost optimization, and performance management.'
    },
    {
      title: 'Network Infrastructure',
      description: 'Network devices, bandwidth monitoring, and connectivity optimization.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600 bg-clip-text text-transparent">
              AI-Powered IT Asset Management
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your IT infrastructure management with AI-powered asset monitoring, optimization, 
              and security. Gain complete visibility and control over your technology investments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30">
                Start Free Trial
              </button>
              <button className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Platform Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered platform provides comprehensive IT asset management with intelligent automation, 
              security, and optimization capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Business Benefits
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">Key Advantages</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">Cost Calculator</h3>
              <p className="text-gray-300 mb-6">
                Calculate your potential savings and ROI with our AI-powered asset management platform.
              </p>
              <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 flex items-center justify-center space-x-2">
                <span>Calculate Savings</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Asset Types Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive Asset Coverage
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Manage all types of IT assets from a single, intelligent platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {assetTypes.map((assetType, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-800/50 rounded-xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold mb-4 text-blue-400">{assetType.title}</h3>
                <p className="text-gray-300 text-lg">{assetType.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Optimize Your IT Assets?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Transform your IT infrastructure management with AI-powered intelligence and automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30">
                Contact Sales
              </button>
              <button className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                Download Whitepaper
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIPoweredITAssetManagement;
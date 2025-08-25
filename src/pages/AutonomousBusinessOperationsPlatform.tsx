import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Zap, Shield, TrendingUp, Users, Globe, ArrowRight, Cpu, Network } from 'lucide-react';

const AutonomousBusinessOperationsPlatform: React.FC = () => {
  const features = [
    {
      icon: Bot,
      title: 'AI Autonomous Agents',
      description: 'Intelligent agents that autonomously manage and optimize business operations 24/7.'
    },
    {
      icon: Zap,
      title: 'Real-time Optimization',
      description: 'Continuous monitoring and automatic adjustment of business processes for maximum efficiency.'
    },
    {
      icon: Shield,
      title: 'Intelligent Security',
      description: 'AI-powered threat detection and automated response to security incidents.'
    },
    {
      icon: TrendingUp,
      title: 'Performance Analytics',
      description: 'Advanced insights and predictive analytics for business performance optimization.'
    },
    {
      icon: Cpu,
      title: 'Process Automation',
      description: 'End-to-end automation of complex business workflows and decision-making processes.'
    },
    {
      icon: Network,
      title: 'Scalable Architecture',
      description: 'Cloud-native platform that scales with your business growth and requirements.'
    }
  ];

  const benefits = [
    '24/7 autonomous operation',
    '90% reduction in manual tasks',
    'Real-time decision making',
    'Predictive maintenance',
    'Cost optimization',
    'Enhanced security'
  ];

  const useCases = [
    {
      title: 'Supply Chain Management',
      description: 'Autonomous monitoring and optimization of supply chain operations, inventory management, and logistics.'
    },
    {
      title: 'Customer Service',
      description: 'AI-powered customer support with intelligent routing, automated responses, and sentiment analysis.'
    },
    {
      title: 'Financial Operations',
      description: 'Automated financial reporting, risk assessment, and compliance monitoring.'
    },
    {
      title: 'HR & Recruitment',
      description: 'Intelligent candidate screening, automated onboarding, and performance management.'
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
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Autonomous Business Operations Platform
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with AI-powered autonomous operations. Our platform enables businesses 
              to run 24/7 with intelligent automation, real-time optimization, and predictive insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30">
                Start Free Trial
              </button>
              <button className="border border-green-500 text-green-400 hover:bg-green-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
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
              Our autonomous platform combines cutting-edge AI with business intelligence to create 
              a truly intelligent and self-optimizing business environment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-green-500 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
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
              <h3 className="text-2xl font-semibold mb-6 text-green-400">Key Advantages</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-semibold mb-6 text-green-400">ROI Calculator</h3>
              <p className="text-gray-300 mb-6">
                Calculate your potential savings and efficiency gains with our autonomous platform.
              </p>
              <button className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30 flex items-center justify-center space-x-2">
                <span>Calculate ROI</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Real-World Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how autonomous operations are transforming businesses across industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-800/50 rounded-xl p-8 border border-gray-700 hover:border-green-500 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold mb-4 text-green-400">{useCase.title}</h3>
                <p className="text-gray-300 text-lg">{useCase.description}</p>
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
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the autonomous business revolution and transform your operations with AI-powered intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30">
                Contact Sales
              </button>
              <button className="border border-green-500 text-green-400 hover:bg-green-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                Download Case Study
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AutonomousBusinessOperationsPlatform;
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, 
  Zap, 
  Settings, 
  BarChart3, 
  Target, 
  CheckCircle,
  ArrowRight,
  Play,
  Star
} from 'lucide-react';

const AdvancedAutomationSolutions = () => {
  const features = [
    {
      title: 'Intelligent Process Automation',
      description: 'AI-powered automation that learns and adapts to your business processes',
      icon: Bot,
      benefits: ['95% efficiency gain', 'Zero human error', '24/7 operation']
    },
    {
      title: 'Predictive Analytics',
      description: 'Advanced analytics that predict future trends and optimize operations',
      icon: BarChart3,
      benefits: ['99% accuracy', 'Real-time insights', 'Proactive optimization']
    },
    {
      title: 'Smart Workflow Management',
      description: 'Intelligent workflow orchestration that adapts to changing requirements',
      icon: Settings,
      benefits: ['Dynamic adaptation', 'Seamless integration', 'Scalable architecture']
    }
  ];

  const stats = [
    { label: 'ROI Increase', value: '340%' },
    { label: 'Efficiency Gain', value: '95%' },
    { label: 'Cost Reduction', value: '60%' },
    { label: 'Time Saved', value: '80%' }
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Advanced Automation
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {' '}Solutions
            </span>
          </motion.h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Revolutionary AI-powered automation that transforms your business operations 
            and delivers unprecedented efficiency gains.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mr-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6">{feature.description}</p>
              
              <ul className="space-y-2">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold mb-4">Ready to Automate Your Future?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Join thousands of businesses already achieving unprecedented results 
            with our advanced automation solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Start Automation
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
              View Demo
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdvancedAutomationSolutions;
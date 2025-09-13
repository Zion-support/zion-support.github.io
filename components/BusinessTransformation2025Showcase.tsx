'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Clock, 
  Shield, 
  Zap,
  Target,
  BarChart3,
  PieChart,
  Activity,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Lightbulb,
  Globe,
  Building2,
  Cpu,
  Database
} from 'lucide-react';

const BusinessTransformation2025Showcase = () => {
  const [activeMetric, setActiveMetric] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % metrics.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const metrics = [
    {
      title: 'Revenue Growth',
      value: '+150%',
      description: 'Average revenue increase',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Cost Reduction',
      value: '-60%',
      description: 'Operational cost savings',
      icon: DollarSign,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Efficiency Gain',
      value: '+300%',
      description: 'Process efficiency improvement',
      icon: Zap,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Time Savings',
      value: '75%',
      description: 'Reduction in manual tasks',
      icon: Clock,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const transformations = [
    {
      category: 'AI-Powered Automation',
      title: 'Intelligent Process Automation',
      description: 'Transform your business operations with AI-driven automation that learns, adapts, and optimizes continuously.',
      features: [
        'Automated decision-making systems',
        'Predictive maintenance algorithms',
        'Intelligent resource allocation',
        'Real-time process optimization'
      ],
      icon: Cpu,
      color: 'from-blue-600 to-cyan-600',
      impact: '90% reduction in manual work'
    },
    {
      category: 'Data Intelligence',
      title: 'Advanced Analytics & Insights',
      description: 'Unlock the power of your data with cutting-edge analytics that provide actionable insights and predictions.',
      features: [
        'Real-time data processing',
        'Predictive analytics models',
        'Automated reporting systems',
        'Intelligent data visualization'
      ],
      icon: BarChart3,
      color: 'from-purple-600 to-pink-600',
      impact: '95% accuracy in predictions'
    },
    {
      category: 'Customer Experience',
      title: 'Personalized Customer Journeys',
      description: 'Create exceptional customer experiences with AI-powered personalization and intelligent engagement.',
      features: [
        'AI-driven personalization',
        'Intelligent chatbots',
        'Predictive customer behavior',
        'Automated customer support'
      ],
      icon: Users,
      color: 'from-green-600 to-emerald-600',
      impact: '85% customer satisfaction'
    },
    {
      category: 'Security & Compliance',
      title: 'Advanced Security Framework',
      description: 'Protect your business with next-generation security solutions and automated compliance monitoring.',
      features: [
        'AI-powered threat detection',
        'Automated compliance reporting',
        'Real-time security monitoring',
        'Intelligent risk assessment'
      ],
      icon: Shield,
      color: 'from-red-600 to-orange-600',
      impact: '99.9% security uptime'
    }
  ];

  const currentMetric = metrics[activeMetric];

  return (
    <div className="relative py-20 bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23059669" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-6">
            <Star className="w-5 h-5 text-blue-600 mr-2" />
            <span className="text-blue-800 font-medium">Business Transformation 2025</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Transform Your Business with
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI-Powered Solutions
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join thousands of forward-thinking companies that have revolutionized their operations 
            with our cutting-edge AI technologies and automation solutions.
          </p>
        </motion.div>

        {/* Metrics Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className={`text-center p-6 rounded-2xl transition-all duration-300 ${
                activeMetric === index 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25' 
                  : 'bg-white text-gray-700 hover:shadow-lg hover:shadow-blue-500/10'
              }`}
              onMouseEnter={() => setActiveMetric(index)}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                activeMetric === index 
                  ? 'bg-white/20' 
                  : `bg-gradient-to-r ${metric.color}`
              }`}>
                <metric.icon className={`w-8 h-8 ${
                  activeMetric === index ? 'text-white' : 'text-white'
                }`} />
              </div>
              <div className={`text-3xl font-bold mb-2 ${
                activeMetric === index ? 'text-white' : 'text-gray-900'
              }`}>
                {metric.value}
              </div>
              <div className={`text-sm font-medium ${
                activeMetric === index ? 'text-white/80' : 'text-gray-600'
              }`}>
                {metric.title}
              </div>
              <div className={`text-xs mt-1 ${
                activeMetric === index ? 'text-white/60' : 'text-gray-500'
              }`}>
                {metric.description}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Transformations Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {transformations.map((transformation, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-r ${transformation.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <transformation.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-blue-600 mb-2">
                    {transformation.category}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {transformation.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {transformation.description}
                  </p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {transformation.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm font-medium text-gray-500">
                  Impact: <span className="text-green-600 font-semibold">{transformation.impact}</span>
                </div>
                <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center group">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Success Stories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Success Stories</h3>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Real results from companies that have transformed their business with our AI solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-200">Companies Transformed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">$2.5B+</div>
              <div className="text-blue-200">Total Cost Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-blue-200">Customer Satisfaction</div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center"
        >
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join the AI revolution and discover how our solutions can transform your business operations, 
              reduce costs, and drive unprecedented growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-blue-500/25">
                <Award className="w-5 h-5 mr-2" />
                Start Your Transformation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-full hover:bg-gray-50 transition-all duration-300 flex items-center justify-center group border border-gray-200">
                <Lightbulb className="w-5 h-5 mr-2" />
                View Case Studies
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BusinessTransformation2025Showcase;
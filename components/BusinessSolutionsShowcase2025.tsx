'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  Users, 
  TrendingUp, 
  Shield, 
  Zap, 
  Target,
  Award,
  Clock,
  DollarSign,
  BarChart3,
  ChevronRight,
  CheckCircle,
  Star,
  ArrowUpRight,
  Globe,
  Smartphone,
  Database,
  Cloud
} from 'lucide-react';

const BusinessSolutionsShowcase2025 = () => {
  const [activeSolution, setActiveSolution] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const solutions = [
    {
      id: 'enterprise-automation',
      title: 'Enterprise Automation',
      description: 'Transform your business operations with intelligent automation that scales with your growth.',
      icon: Building2,
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Workflow Orchestration',
        'Process Optimization',
        'Resource Management',
        'Performance Analytics'
      ],
      benefits: [
        'Reduce operational costs by 40%',
        'Increase productivity by 60%',
        'Eliminate manual errors',
        'Scale operations seamlessly'
      ],
      metrics: {
        costSavings: '40%',
        productivity: '60%',
        accuracy: '99.9%',
        satisfaction: '95%'
      },
      industries: ['Manufacturing', 'Healthcare', 'Finance', 'Retail']
    },
    {
      id: 'ai-customer-service',
      title: 'AI Customer Service',
      description: 'Revolutionary customer service automation that provides human-like interactions at scale.',
      icon: Users,
      color: 'from-purple-500 to-pink-500',
      features: [
        'Natural Language Processing',
        'Sentiment Analysis',
        'Multi-channel Support',
        '24/7 Availability'
      ],
      benefits: [
        'Improve response time by 80%',
        'Increase customer satisfaction',
        'Reduce support costs by 50%',
        'Handle multiple languages'
      ],
      metrics: {
        responseTime: '80%',
        satisfaction: '92%',
        costReduction: '50%',
        availability: '99.9%'
      },
      industries: ['E-commerce', 'SaaS', 'Telecommunications', 'Banking']
    },
    {
      id: 'data-analytics',
      title: 'Advanced Analytics',
      description: 'Unlock insights from your data with powerful AI-driven analytics and predictive modeling.',
      icon: BarChart3,
      color: 'from-green-500 to-emerald-500',
      features: [
        'Predictive Analytics',
        'Real-time Dashboards',
        'Data Visualization',
        'Machine Learning Models'
      ],
      benefits: [
        'Make data-driven decisions',
        'Predict market trends',
        'Optimize business processes',
        'Identify new opportunities'
      ],
      metrics: {
        accuracy: '94%',
        insights: '300%',
        decisionSpeed: '70%',
        roi: '250%'
      },
      industries: ['Marketing', 'Sales', 'Operations', 'Strategy']
    },
    {
      id: 'cloud-infrastructure',
      title: 'Cloud Infrastructure',
      description: 'Scalable, secure, and reliable cloud solutions that grow with your business needs.',
      icon: Cloud,
      color: 'from-orange-500 to-red-500',
      features: [
        'Auto-scaling',
        'High Availability',
        'Security Compliance',
        'Global Distribution'
      ],
      benefits: [
        'Reduce infrastructure costs',
        'Improve reliability',
        'Scale on demand',
        'Global reach'
      ],
      metrics: {
        uptime: '99.99%',
        costSavings: '35%',
        scalability: '1000%',
        performance: '90%'
      },
      industries: ['Technology', 'Media', 'Gaming', 'IoT']
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      role: 'CEO',
      content: 'The automation solutions transformed our operations completely. We saw a 60% increase in productivity within the first month.',
      rating: 5,
      avatar: '/api/placeholder/60/60'
    },
    {
      name: 'Michael Chen',
      company: 'Global Finance Ltd.',
      role: 'CTO',
      content: 'The AI customer service platform handles 10x more queries with higher satisfaction rates than our previous system.',
      rating: 5,
      avatar: '/api/placeholder/60/60'
    },
    {
      name: 'Emily Rodriguez',
      company: 'RetailMax',
      role: 'Operations Director',
      content: 'Our data analytics platform helped us identify new market opportunities worth $2M in additional revenue.',
      rating: 5,
      avatar: '/api/placeholder/60/60'
    }
  ];

  return (
    <div className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-gray-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] opacity-5"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium mb-6">
            <Building2 className="w-4 h-4 mr-2" />
            BUSINESS SOLUTIONS 2025
          </div>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6">
            Transform Your Business with
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Intelligent Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover comprehensive business solutions powered by AI and automation that drive growth, efficiency, and innovation across all industries.
          </p>
        </motion.div>

        {/* Solution Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {solutions.map((solution, index) => (
              <button
                key={solution.id}
                onClick={() => setActiveSolution(index)}
                className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeSolution === index
                    ? `bg-gradient-to-r ${solution.color} text-white shadow-lg transform scale-105`
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
                }`}
              >
                <solution.icon className="w-5 h-5 mr-2" />
                {solution.title}
              </button>
            ))}
          </div>

          {/* Solution Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSolution}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Left Side - Solution Details */}
              <div className="space-y-8">
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${solutions[activeSolution].color} text-white`}>
                      <solutions[activeSolution].icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{solutions[activeSolution].title}</h3>
                      <p className="text-gray-600">{solutions[activeSolution].description}</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-4">Key Features</h4>
                      <ul className="space-y-2">
                        {solutions[activeSolution].features.map((feature, index) => (
                          <li key={index} className="flex items-center text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-4">Benefits</h4>
                      <ul className="space-y-2">
                        {solutions[activeSolution].benefits.map((benefit, index) => (
                          <li key={index} className="flex items-center text-gray-600">
                            <ArrowUpRight className="w-4 h-4 text-blue-500 mr-2" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {solutions[activeSolution].industries.map((industry, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        {industry}
                      </span>
                    ))}
                  </div>

                  <button className={`w-full bg-gradient-to-r ${solutions[activeSolution].color} text-white py-3 px-6 rounded-lg font-medium hover:opacity-90 transition-all duration-300 flex items-center justify-center group`}>
                    Learn More
                    <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Right Side - Metrics */}
              <div className="space-y-6">
                <h4 className="text-2xl font-bold text-gray-900 mb-6">Performance Metrics</h4>
                
                <div className="grid grid-cols-2 gap-6">
                  {Object.entries(solutions[activeSolution].metrics).map(([key, value], index) => (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white rounded-xl p-6 shadow-lg text-center"
                    >
                      <div className="text-3xl font-bold text-gray-900 mb-2">{value}</div>
                      <div className="text-sm text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                    </motion.div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
                  <h5 className="font-bold text-gray-900 mb-4">Why Choose This Solution?</h5>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 mr-2" />
                      Proven track record across industries
                    </li>
                    <li className="flex items-center">
                      <Shield className="w-4 h-4 text-green-500 mr-2" />
                      Enterprise-grade security
                    </li>
                    <li className="flex items-center">
                      <Clock className="w-4 h-4 text-blue-500 mr-2" />
                      Quick implementation
                    </li>
                    <li className="flex items-center">
                      <Award className="w-4 h-4 text-purple-500 mr-2" />
                      Award-winning technology
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">What Our Clients Say</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl p-12 text-white"
        >
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of companies already using our solutions to drive growth and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors flex items-center justify-center">
              <Building2 className="w-5 h-5 mr-2" />
              Get Started
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center">
              <DollarSign className="w-5 h-5 mr-2" />
              View Pricing
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BusinessSolutionsShowcase2025;
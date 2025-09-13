'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  TrendingUp, 
  Users, 
  Target, 
  DollarSign,
  BarChart3,
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  Shield,
  Globe,
  Clock,
  Award
} from 'lucide-react';

const BusinessSolutionsShowcase2025 = () => {
  const [activeSolution, setActiveSolution] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const solutions = [
    {
      id: 'automation',
      title: 'AI-Powered Automation',
      description: 'Streamline operations with intelligent automation systems',
      icon: Zap,
      color: 'from-blue-500 to-cyan-500',
      features: ['Workflow Optimization', 'Process Automation', 'Smart Scheduling'],
      benefits: ['75% Time Savings', '90% Accuracy', '50% Cost Reduction'],
      price: 'Starting at $299/mo'
    },
    {
      id: 'analytics',
      title: 'Advanced Analytics',
      description: 'Transform data into actionable business insights',
      icon: BarChart3,
      color: 'from-green-500 to-emerald-500',
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Custom Reports'],
      benefits: ['40% Better Decisions', '60% Faster Insights', '25% Revenue Growth'],
      price: 'Starting at $199/mo'
    },
    {
      id: 'security',
      title: 'Enterprise Security',
      description: 'Protect your business with cutting-edge security solutions',
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      features: ['Threat Detection', 'Data Encryption', 'Access Control'],
      benefits: ['99.9% Uptime', 'Zero Breaches', '24/7 Monitoring'],
      price: 'Starting at $399/mo'
    },
    {
      id: 'collaboration',
      title: 'Team Collaboration',
      description: 'Enhance productivity with AI-driven collaboration tools',
      icon: Users,
      color: 'from-purple-500 to-indigo-500',
      features: ['Smart Meetings', 'Project Management', 'Knowledge Sharing'],
      benefits: ['35% Productivity Boost', '50% Faster Projects', '90% Team Satisfaction'],
      price: 'Starting at $149/mo'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CEO, TechCorp',
      content: 'These AI solutions transformed our business operations completely. We saw 200% ROI in just 6 months.',
      rating: 5,
      avatar: 'SC'
    },
    {
      name: 'Michael Rodriguez',
      role: 'CTO, InnovateLab',
      content: 'The automation tools saved us 40 hours per week. Our team can now focus on strategic initiatives.',
      rating: 5,
      avatar: 'MR'
    },
    {
      name: 'Emily Johnson',
      role: 'Operations Director, GlobalCorp',
      content: 'Outstanding support and implementation. The security solutions gave us complete peace of mind.',
      rating: 5,
      avatar: 'EJ'
    }
  ];

  const stats = [
    { label: 'Companies Transformed', value: '10,000+', icon: Building2 },
    { label: 'ROI Achieved', value: '300%', icon: TrendingUp },
    { label: 'Happy Customers', value: '50,000+', icon: Users },
    { label: 'Success Rate', value: '99.8%', icon: Award }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
            <Building2 className="w-4 h-4" />
            Business Solutions 2025
          </div>
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Transform Your
            <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent block">
              Business Operations
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Leverage cutting-edge AI solutions to optimize processes, boost productivity, and drive unprecedented growth
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="text-center"
            >
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Solutions Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Solution Selector */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-4"
          >
            <h2 className="text-4xl font-bold text-white mb-8">
              Our Solutions
            </h2>
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                className={`p-6 rounded-2xl border cursor-pointer transition-all duration-300 ${
                  activeSolution === index
                    ? 'bg-white/20 border-white/40 scale-105'
                    : 'bg-white/5 border-white/20 hover:bg-white/10'
                }`}
                onClick={() => setActiveSolution(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${solution.color}`}>
                    <solution.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {solution.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-3">
                      {solution.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {solution.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="bg-white/10 text-white text-xs px-2 py-1 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-green-400 font-semibold">
                        {solution.price}
                      </span>
                      <ArrowRight className="w-4 h-4 text-gray-400" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Solution Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative"
          >
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSolution}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  className="h-full flex flex-col"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${solutions[activeSolution].color}`}>
                      <solutions[activeSolution].icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {solutions[activeSolution].title}
                      </h3>
                      <p className="text-gray-300">
                        {solutions[activeSolution].description}
                      </p>
                    </div>
                  </div>

                  <div className="flex-1 space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">
                        Key Benefits
                      </h4>
                      <div className="grid grid-cols-1 gap-3">
                        {solutions[activeSolution].benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                            <span className="text-gray-300">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 border-t border-white/20">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-white font-semibold">Pricing</span>
                        <span className="text-green-400 font-bold text-lg">
                          {solutions[activeSolution].price}
                        </span>
                      </div>
                      <button className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-green-700 transition-all duration-300">
                        Get Started Today
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-300 text-lg">
              Join thousands of satisfied customers who have transformed their businesses
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl p-12 border border-white/20">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-200 text-lg mb-8 max-w-2xl mx-auto">
              Schedule a free consultation and discover how our AI solutions can drive your business forward
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors">
                Schedule Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors">
                View Pricing
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BusinessSolutionsShowcase2025;
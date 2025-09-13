'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Shield, 
  Cloud, 
  BarChart3, 
  Users, 
  Target, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Star,
  Sparkles,
  Rocket,
  Globe,
  Cpu,
  Database,
  Lock,
  Lightbulb,
  Award,
  Timer
} from 'lucide-react';

const RevolutionaryContentShowcase2025 = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contentSections = [
    {
      id: 'ai-automation',
      title: 'AI-Powered Business Automation',
      subtitle: 'Transform Your Operations with Intelligent Automation',
      icon: Brain,
      color: 'from-blue-600 to-purple-600',
      features: [
        'Intelligent Process Automation',
        'Predictive Analytics & Insights',
        'Real-time Decision Making',
        'Automated Customer Service',
        'Smart Resource Allocation',
        'Advanced Workflow Optimization'
      ],
      stats: [
        { label: 'ROI Increase', value: '340%', icon: TrendingUp },
        { label: 'Time Saved', value: '85%', icon: Timer },
        { label: 'Cost Reduction', value: '60%', icon: Target },
        { label: 'Efficiency Gain', value: '95%', icon: BarChart3 }
      ],
      description: 'Revolutionary AI automation solutions that transform your business operations, delivering unprecedented efficiency and profitability gains.'
    },
    {
      id: 'cybersecurity',
      title: 'Advanced Cybersecurity Solutions',
      subtitle: 'Protect Your Digital Assets with Military-Grade Security',
      icon: Shield,
      color: 'from-red-600 to-orange-600',
      features: [
        'AI-Powered Threat Detection',
        'Zero-Trust Architecture',
        'Real-time Security Monitoring',
        'Automated Incident Response',
        'Compliance Management',
        'Advanced Encryption'
      ],
      stats: [
        { label: 'Threat Detection', value: '99.9%', icon: Shield },
        { label: 'Response Time', value: '<2min', icon: Timer },
        { label: 'Uptime', value: '99.99%', icon: CheckCircle },
        { label: 'Compliance', value: '100%', icon: Award }
      ],
      description: 'Cutting-edge cybersecurity solutions that provide comprehensive protection against evolving threats and ensure regulatory compliance.'
    },
    {
      id: 'cloud-solutions',
      title: 'Scalable Cloud Infrastructure',
      subtitle: 'Build, Deploy, and Scale with Confidence',
      icon: Cloud,
      color: 'from-green-600 to-teal-600',
      features: [
        'Multi-Cloud Architecture',
        'Auto-Scaling Infrastructure',
        'Disaster Recovery Solutions',
        'Performance Optimization',
        'Cost Management',
        'Global CDN Integration'
      ],
      stats: [
        { label: 'Scalability', value: '10x', icon: TrendingUp },
        { label: 'Performance', value: '99.9%', icon: Zap },
        { label: 'Cost Savings', value: '45%', icon: Target },
        { label: 'Global Reach', value: '200+', icon: Globe }
      ],
      description: 'Enterprise-grade cloud solutions that provide unmatched scalability, performance, and reliability for your growing business needs.'
    },
    {
      id: 'data-analytics',
      title: 'Intelligent Data Analytics',
      subtitle: 'Unlock Insights That Drive Growth',
      icon: BarChart3,
      color: 'from-purple-600 to-pink-600',
      features: [
        'Real-time Data Processing',
        'Predictive Modeling',
        'Custom Dashboard Creation',
        'Machine Learning Integration',
        'Data Visualization',
        'Business Intelligence'
      ],
      stats: [
        { label: 'Data Processing', value: '1M+', icon: Database },
        { label: 'Accuracy', value: '98.5%', icon: Target },
        { label: 'Insights Generated', value: '500+', icon: Lightbulb },
        { label: 'Decision Speed', value: '10x', icon: Rocket }
      ],
      description: 'Advanced analytics platform that transforms raw data into actionable insights, enabling data-driven decision making and strategic growth.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechCorp',
      company: 'Fortune 500',
      content: 'Zion Tech Group transformed our entire operation. The AI automation alone increased our efficiency by 340% and saved us millions in operational costs.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Michael Chen',
      role: 'CTO, InnovateLabs',
      company: 'Startup Unicorn',
      content: 'Their cybersecurity solutions are unmatched. We sleep better knowing our data is protected by their military-grade security systems.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Emily Rodriguez',
      role: 'VP Operations, GlobalTech',
      company: 'Enterprise Leader',
      content: 'The cloud infrastructure they built for us scales seamlessly. We can handle 10x more traffic without any performance issues.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Revolutionary Technology Showcase 2025
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Transform Your Business with
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Revolutionary AI Solutions
            </span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Experience the future of business technology with our cutting-edge AI automation, 
            cybersecurity, and cloud solutions. Join thousands of companies achieving 
            unprecedented growth and efficiency.
          </motion.p>
        </motion.div>

        {/* Content Tabs */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {contentSections.map((section, index) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center gap-3 px-6 py-4 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === index
                      ? `bg-gradient-to-r ${section.color} text-white shadow-lg transform scale-105`
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {section.title}
                </button>
              );
            })}
          </div>

          {/* Active Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${contentSections[activeTab].color}`}>
                      {React.createElement(contentSections[activeTab].icon, { className: "w-8 h-8 text-white" })}
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">
                        {contentSections[activeTab].title}
                      </h3>
                      <p className="text-gray-300 text-lg">
                        {contentSections[activeTab].subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                    {contentSections[activeTab].description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {contentSections[activeTab].features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {contentSections[activeTab].stats.map((stat, index) => {
                      const StatIcon = stat.icon;
                      return (
                        <div key={index} className="text-center">
                          <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl">
                            <StatIcon className="w-6 h-6 text-white" />
                          </div>
                          <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                          <div className="text-sm text-gray-400">{stat.label}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="relative">
                  <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl p-8 border border-white/10">
                    <div className="text-center">
                      <div className="text-6xl font-bold text-white mb-4">340%</div>
                      <div className="text-xl text-gray-300 mb-6">Average ROI Increase</div>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300">Efficiency Gain</span>
                          <span className="text-white font-semibold">95%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300">Cost Reduction</span>
                          <span className="text-white font-semibold">60%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300">Time Saved</span>
                          <span className="text-white font-semibold">85%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Testimonials */}
        <motion.div variants={itemVariants} className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Trusted by Industry Leaders
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                    <div className="text-sm text-purple-400">{testimonial.company}</div>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          variants={itemVariants}
          className="text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of companies already achieving unprecedented growth with our 
            revolutionary AI solutions. Get your free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 group">
              Get Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center gap-2 group">
              View Case Studies
              <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RevolutionaryContentShowcase2025;
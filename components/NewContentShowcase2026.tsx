'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Globe, 
  Shield, 
  Rocket, 
  Star,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Users,
  Award,
  Lightbulb
} from 'lucide-react';

const NewContentShowcase2026 = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const contentSections = [
    {
      id: 'ai-innovations',
      title: 'AI Innovations 2026',
      icon: Brain,
      color: 'from-purple-600 to-blue-600',
      features: [
        'Neural Interface Technology',
        'Quantum AI Processing',
        'Autonomous Business Systems',
        'Predictive Analytics Engine'
      ],
      description: 'Revolutionary AI technologies that will transform how businesses operate in 2026 and beyond.'
    },
    {
      id: 'automation-solutions',
      title: 'Advanced Automation',
      icon: Zap,
      color: 'from-orange-500 to-red-500',
      features: [
        'Intelligent Process Automation',
        'Self-Healing Systems',
        'Dynamic Workflow Optimization',
        'Real-time Decision Making'
      ],
      description: 'Next-generation automation solutions that adapt and evolve with your business needs.'
    },
    {
      id: 'cloud-infrastructure',
      title: 'Cloud Infrastructure',
      icon: Globe,
      color: 'from-green-500 to-teal-500',
      features: [
        'Edge Computing Solutions',
        'Multi-Cloud Architecture',
        'Auto-Scaling Infrastructure',
        'Zero-Downtime Deployments'
      ],
      description: 'Robust, scalable cloud infrastructure designed for the modern digital enterprise.'
    },
    {
      id: 'security-solutions',
      title: 'Security & Compliance',
      icon: Shield,
      color: 'from-indigo-600 to-purple-600',
      features: [
        'AI-Powered Threat Detection',
        'Zero-Trust Architecture',
        'Automated Compliance',
        'Real-time Security Monitoring'
      ],
      description: 'Comprehensive security solutions that protect your business from evolving cyber threats.'
    }
  ];

  const stats = [
    { label: 'Projects Completed', value: '500+', icon: CheckCircle },
    { label: 'Client Satisfaction', value: '99%', icon: Star },
    { label: 'ROI Improvement', value: '300%', icon: TrendingUp },
    { label: 'Team Members', value: '50+', icon: Users }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, TechCorp',
      content: 'Zion Tech Group transformed our entire infrastructure. The AI solutions they implemented increased our efficiency by 300%.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'CEO, InnovateLabs',
      content: 'Outstanding service and cutting-edge technology. Our automation processes are now completely autonomous.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'VP Engineering, DataFlow',
      content: 'The cloud infrastructure they built for us is incredibly robust and scalable. Zero downtime in 2 years.',
      rating: 5
    }
  ];

  if (!isVisible) return null;

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary Content Showcase 2026
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the future of technology with our comprehensive suite of AI-powered solutions, 
            automation tools, and cutting-edge infrastructure services.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <stat.icon className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Content Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {contentSections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                <section.icon className="w-5 h-5 inline mr-2" />
                {section.title}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <div className="flex items-start space-x-6">
                <div className={`p-4 rounded-2xl bg-gradient-to-r ${contentSections[activeTab].color}`}>
                  <contentSections[activeTab].icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {contentSections[activeTab].title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-lg">
                    {contentSections[activeTab].description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {contentSections[activeTab].features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What Our Clients Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-500 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Join hundreds of companies already using our cutting-edge solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center">
                <Rocket className="w-5 h-5 mr-2" />
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300 flex items-center justify-center">
                <Lightbulb className="w-5 h-5 mr-2" />
                Learn More
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewContentShowcase2026;
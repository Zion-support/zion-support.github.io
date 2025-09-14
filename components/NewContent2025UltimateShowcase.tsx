"use client";
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Users, TrendingUp, Zap, Shield, Globe, Brain } from 'lucide-react';

const NewContent2025UltimateShowcase = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Brain className="w-8 h-8 text-blue-600" />,
      title: "AI-Powered Intelligence",
      description: "Revolutionary AI systems that adapt and learn from your business patterns",
      stats: "500% ROI Increase"
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-600" />,
      title: "Lightning-Fast Automation",
      description: "Automate complex workflows in seconds, not hours",
      stats: "90% Time Savings"
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: "Enterprise Security",
      description: "Bank-level security with zero-trust architecture",
      stats: "99.9% Uptime"
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-600" />,
      title: "Global Scalability",
      description: "Scale your operations across 50+ countries instantly",
      stats: "10M+ Users"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO, TechCorp",
      content: "This platform transformed our entire operation. We've seen 300% growth in just 6 months.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "CTO, InnovateLabs",
      content: "The AI capabilities are mind-blowing. It's like having a team of experts working 24/7.",
      rating: 5
    },
    {
      name: "Emily Watson",
      role: "VP Operations, GlobalTech",
      content: "Implementation was seamless and the results exceeded all expectations.",
      rating: 5
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={isVisible ? { scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-sm font-medium mb-6"
          >
            <Star className="w-4 h-4 mr-2" />
            NEW: Ultimate 2025 Showcase
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent"
          >
            Revolutionary AI Solutions
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              for 2025 & Beyond
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto"
          >
            Experience the future of business automation with our cutting-edge AI platform. 
            Join thousands of companies already transforming their operations.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-blue-100 mb-4">{feature.description}</p>
              <div className="text-sm font-bold text-green-400">{feature.stats}</div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-8 mb-16 border border-white/20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">50K+</div>
              <div className="text-blue-200">Active Users</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">99.9%</div>
              <div className="text-blue-200">Uptime</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">500%</div>
              <div className="text-blue-200">Average ROI</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-blue-200">Support</div>
            </div>
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-blue-100 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-blue-200 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join the AI revolution and see why thousands of companies choose our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition-colors duration-300 group"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/demo"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-600 transition-colors duration-300"
              >
                Watch Demo
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default NewContent2025UltimateShowcase;
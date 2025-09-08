import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Brain, Zap, Shield, Sparkles, Atom, 
  Cpu, Target, Users, ArrowRight, Star,
  CheckCircle, Clock, DollarSign, TrendingUp
        <meta name="description" content="Revolutionary AI consciousness and emotional intelligence services. Advanced AI systems with ethical frameworks and quantum-enhanced processing." />
        <meta name="keywords" content="AI consciousness, emotional AI, quantum AI, autonomous AI, AI ethics, AI creativity" />
        <meta name="description" content="Revolutionary AI consciousness and emotional intelligence services. Advanced AI solutions for the future of technology." />
        <meta name="keywords" content="AI consciousness, emotional intelligence, quantum AI, autonomous AI, AI ethics, AI creativity" />
          <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-black to-indigo-900/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  className="px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-xl font-semibold hover:from-violet-600 hover:to-purple-700 transition-all duration-200 hover:scale-105"
                  className="px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-lg font-semibold hover:from-violet-600 hover:to-purple-700 transition-all duration-200 hover:scale-105"
                  className="px-8 py-4 border border-violet-500/40 text-violet-300 rounded-xl font-semibold hover:bg-violet-500/10 transition-all duration-200"
                >
                  View All Services
                </Link>
        {/* Services Grid */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Benefits Section */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our AI Services?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Experience the future of AI with our cutting-edge consciousness and emotional intelligence solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
        <section className="py-20 bg-gradient-to-r from-violet-900/20 to-indigo-900/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Join the revolution in AI consciousness and emotional intelligence. 
                Transform your business with our cutting-edge solutions.
                  className="px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-xl font-semibold hover:from-violet-600 hover:to-purple-700 transition-all duration-200 hover:scale-105"
                  Explore All Services

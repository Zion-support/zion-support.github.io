import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Rocket, FileText, Users, Brain, Target, 
  Zap, Building, ArrowRight, Star, CheckCircle, 
  DollarSign, BarChart3, Settings, Cpu
        <meta name="description" content="Innovative business solutions for modern enterprises. AI content generation, quantum CRM, autonomous decision making, and healthcare diagnostics." />
        <meta name="keywords" content="micro SAAS, AI content, CRM, decision engine, legal AI, healthcare AI" />
        <meta name="description" content="Innovative business solutions for modern enterprises. Micro SAAS platforms that transform business operations." />
        <meta name="keywords" content="micro SAAS, business solutions, AI content, CRM, decision engine, legal analysis, healthcare diagnostics" />
          <div className="absolute inset-0 bg-gradient-to-br from-teal-900/20 via-black to-purple-900/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  className="px-8 py-4 bg-gradient-to-r from-teal-500 to-emerald-600 text-white rounded-xl font-semibold hover:from-teal-600 hover:to-emerald-700 transition-all duration-200 hover:scale-105"
                  className="px-8 py-4 bg-gradient-to-r from-teal-500 to-purple-600 text-white rounded-lg font-semibold hover:from-teal-600 hover:to-purple-700 transition-all duration-200 hover:scale-105"
                  className="px-8 py-4 border border-teal-500/40 text-teal-300 rounded-xl font-semibold hover:bg-teal-500/10 transition-all duration-200"
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
                Why Choose Our Micro SAAS Solutions?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Experience rapid deployment and immediate business impact with our innovative solutions
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
                  <div className="w-20 h-20 bg-gradient-to-r from-teal-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
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
        <section className="py-20 bg-gradient-to-r from-teal-900/20 to-purple-900/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                  className="px-8 py-4 bg-gradient-to-r from-teal-500 to-emerald-600 text-white rounded-xl font-semibold hover:from-teal-600 hover:to-emerald-700 transition-all duration-200 hover:scale-105"
                  Explore All Services
            >

import React from 'react';
<<<<<<< HEAD
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { ArrowRight, CheckCircle, Star, Zap, Shield, Globe, TrendingUp, Award, Clock, Users } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Products: NextPage = () => {
  const products = [
    {
      id: 'ai-content-generator',
      name: 'AI Content Generator',
      description: 'Advanced AI-powered content creation platform for blogs, social media, and marketing materials.',
      features: ['Natural Language Processing', 'Multi-language Support', 'SEO Optimization', 'Brand Voice Training'],
      pricing: 'Starting at $99/month',
      category: 'AI Tools',
      icon: Zap,
      link: '/products/ai-content-generator'
    },
    {
      id: 'project-management-suite',
      name: 'Project Management Suite',
      description: 'Comprehensive project management solution with AI-powered insights and automation.',
      features: ['Task Automation', 'Team Collaboration', 'Progress Analytics', 'Resource Planning'],
      pricing: 'Starting at $49/month',
      category: 'Productivity',
      icon: TrendingUp,
      link: '/products/project-management-suite'
    },
    {
      id: 'social-media-scheduler',
      name: 'Social Media Scheduler',
      description: 'Intelligent social media management with AI-driven content optimization.',
      features: ['Multi-platform Posting', 'Optimal Timing', 'Content Analytics', 'Engagement Tracking'],
      pricing: 'Starting at $29/month',
      category: 'Marketing',
      icon: Globe,
      link: '/products/social-media-scheduler'
    },
    {
      id: 'expense-tracker',
      name: 'Expense Tracker',
      description: 'Smart expense management with receipt scanning and automated categorization.',
      features: ['Receipt Scanning', 'Auto-categorization', 'Budget Tracking', 'Tax Preparation'],
      pricing: 'Starting at $19/month',
      category: 'Finance',
      icon: Shield,
      link: '/products/expense-tracker'
    },
    {
      id: 'lead-scoring-platform',
      name: 'Lead Scoring Platform',
      description: 'AI-powered lead qualification and scoring system for sales teams.',
      features: ['Behavioral Analysis', 'Predictive Scoring', 'CRM Integration', 'Custom Models'],
      pricing: 'Starting at $79/month',
      category: 'Sales',
      icon: Award,
      link: '/products/lead-scoring-platform'
    },
    {
      id: 'time-tracking-analytics',
      name: 'Time Tracking Analytics',
      description: 'Advanced time tracking with productivity insights and team analytics.',
      features: ['Automatic Tracking', 'Productivity Metrics', 'Team Insights', 'Project Billing'],
      pricing: 'Starting at $39/month',
      category: 'Productivity',
      icon: Clock,
      link: '/products/time-tracking-analytics'
    }
  ];

  const categories = ['All', 'AI Tools', 'Productivity', 'Marketing', 'Finance', 'Sales'];
=======
>>>>>>> main

export default function ProductsPage() {
  return (
<<<<<<< HEAD
    <MainLayout
      title="Products - Zion Tech Group"
      description="Discover our innovative software products designed to transform your business operations with cutting-edge AI and automation."
      keywords="software products, AI tools, business automation, productivity software, marketing tools"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Products</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Innovative software solutions designed to transform your business operations 
            with cutting-edge AI, automation, and intelligent insights.
          </motion.p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-3 bg-white border border-gray-300 rounded-lg hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 font-medium"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-lg mr-4">
                      <product.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <span className="text-sm text-blue-600 font-semibold">{product.category}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{product.name}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <span className="text-2xl font-bold text-blue-600">{product.pricing}</span>
                  </div>
                  
                  <div className="flex space-x-3">
                    <Link
                      href={product.link}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center group-hover:scale-105 transform transition-transform"
                    >
                      Learn More
                    </Link>
                    <Link
                      href="/contact"
                      className="flex-1 bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center"
                    >
                      Get Demo
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Contact our team to discuss how our products can help streamline your operations 
            and drive growth for your business.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-block text-lg hover:scale-105 hover:shadow-lg"
            >
              Get Started Today
            </Link>
            <Link
              href="/services"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-block text-lg hover:scale-105"
            >
              View Our Services
            </Link>
          </motion.div>
        </div>
      </section>
    </MainLayout>
=======
    <main className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-4">Products</h1>
      <p className="text-gray-700">Explore our product offerings.</p>
    </main>
>>>>>>> main
  );
}


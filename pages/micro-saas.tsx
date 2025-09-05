import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Cloud, Zap, Shield, Users, BarChart3, CheckCircle, ArrowRight, Clock, Star, DollarSign, Award, Globe, Lock, Cpu, Bot, FileText, Video, Mic, Code, Settings, Monitor, Smartphone, Server, Network, Car, Rocket, Heart, Building, Sprout, Mail, MessageSquare, Search, Eye, Target, TrendingUp, Package, Calendar, BookOpen, ShoppingCart, Home, Trash2, Camera, HardDrive, UserCheck, Lightbulb, Truck, Phone, MapPin } from 'lucide-react';
import Layout from '../components/Layout';

const microSaaSProducts = [
  {
    id: 'ai-business-validation',
    title: 'AI Business Validation Platform',
    description: 'Validate your business ideas with AI-powered market analysis, competitor research, and feasibility scoring',
    icon: Target,
    features: ['Market Analysis', 'Competitor Research', 'Feasibility Scoring', 'Investment Recommendations'],
    pricing: 'Starting at $99/month',
    category: 'Business Intelligence',
    benefits: ['Reduce startup failure risk', 'Data-driven decisions', 'Save months of research'],
    marketPrice: '$150-300/month',
    link: 'https://business-validation.ziontechgroup.com'
  },
  {
    id: 'ai-co-founder',
    title: 'AI Co-Founder as a Service',
    description: 'Get an AI-powered business partner that provides strategic advice, market insights, and growth recommendations',
    icon: Bot,
    features: ['Strategic Planning', 'Market Intelligence', 'Growth Hacking', '24/7 Availability'],
    pricing: 'Starting at $199/month',
    category: 'Business Strategy',
    benefits: ['Always-on business advisor', 'Scalable expertise', 'Cost-effective consulting'],
    marketPrice: '$500-1000/month',
    link: 'https://ai-cofounder.ziontechgroup.com'
  },
  {
    id: 'ai-content-studio',
    title: 'AI Content Creation Studio',
    description: 'Create high-quality content at scale with AI-powered writing, design, and video generation',
    icon: FileText,
    features: ['Content Writing', 'Video Creation', 'Design Generation', 'SEO Optimization'],
    pricing: 'Starting at $149/month',
    category: 'Content & Marketing',
    benefits: ['10x content production', 'Consistent brand voice', 'Multi-format output'],
    marketPrice: '$200-500/month',
    link: 'https://content-studio.ziontechgroup.com'
  },
  {
    id: 'ai-customer-support',
    title: 'AI Customer Support Suite',
    description: 'Automate customer service with intelligent chatbots, ticket routing, and sentiment analysis',
    icon: MessageSquare,
    features: ['Smart Chatbots', 'Ticket Automation', 'Sentiment Analysis', 'Multi-channel Support'],
    pricing: 'Starting at $79/month',
    category: 'Customer Service',
    benefits: ['24/7 availability', 'Instant responses', 'Reduced support costs'],
    marketPrice: '$100-300/month',
    link: 'https://ai-support.ziontechgroup.com'
  },
  {
    id: 'ai-sales-optimizer',
    title: 'AI Sales Optimization Platform',
    description: 'Boost sales performance with AI-powered lead scoring, pipeline management, and sales forecasting',
    icon: TrendingUp,
    features: ['Lead Scoring', 'Pipeline Analytics', 'Sales Forecasting', 'Performance Tracking'],
    pricing: 'Starting at $129/month',
    category: 'Sales & CRM',
    benefits: ['Higher conversion rates', 'Better lead quality', 'Accurate forecasting'],
    marketPrice: '$200-600/month',
    link: 'https://sales-optimizer.ziontechgroup.com'
  },
  {
    id: 'ai-finance-assistant',
    title: 'AI Finance Management Tool',
    description: 'Streamline financial operations with automated bookkeeping, expense tracking, and financial reporting',
    icon: DollarSign,
    features: ['Automated Bookkeeping', 'Expense Tracking', 'Financial Reports', 'Tax Preparation'],
    pricing: 'Starting at $89/month',
    category: 'Finance & Accounting',
    benefits: ['Automated workflows', 'Real-time insights', 'Compliance assurance'],
    marketPrice: '$150-400/month',
    link: 'https://finance-ai.ziontechgroup.com'
  }
];

export default function MicroSAASPage() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [searchTerm, setSearchTerm] = React.useState('');

  const categories = ['All', 'Business Intelligence', 'Business Strategy', 'Content & Marketing', 'Customer Service', 'Sales & CRM', 'Finance & Accounting'];

  const filteredProducts = microSaaSProducts.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout title="Micro SaaS Solutions - Zion Tech Group">
      <Head>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover our collection of AI-powered micro SaaS solutions designed to solve specific business problems efficiently and cost-effectively." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-6xl font-bold text-white mb-6"
              >
                Micro SaaS Solutions
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto"
              >
                Powerful, focused AI tools that solve specific business problems with precision and efficiency.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link href="/contact" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Get Started
                </Link>
                <Link href="#products" className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
                  View Products
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 bg-white/10 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search micro SaaS solutions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section id="products" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20"
                >
                  <div className="flex items-center mb-4">
                    <product.icon className="h-8 w-8 text-blue-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">{product.title}</h3>
                  </div>
                  <p className="text-blue-100 mb-4">{product.description}</p>
                  <div className="space-y-2 mb-4">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-blue-200">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-white mb-1">{product.pricing}</div>
                    <div className="text-sm text-blue-200">Market price: {product.marketPrice}</div>
                  </div>
                  <div className="space-y-2 mb-6">
                    {product.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="text-sm text-green-200">
                        ✓ {benefit}
                      </div>
                    ))}
                  </div>
                  <Link 
                    href={product.link} 
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium"
                  >
                    Learn More <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white/10 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Build Your Micro SaaS?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Let us help you create a focused, profitable micro SaaS solution tailored to your market.
            </p>
            <Link href="/contact" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Start Your Project
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}
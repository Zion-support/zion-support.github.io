import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Cloud, 
  Zap, 
  Shield, 
  BarChart3, 
  Users, 
  Settings, 
  CheckCircle, 
  ArrowRight, 
  Clock, 
  Award, 
  Star,
  Globe,
  Lock,
  Cpu,
  Bot,
  FileText,
  Image,
  Video,
  Mic,
  Code,
  Monitor,
  Smartphone,
  Server,
  Network,
  Car,
  Rocket,
  Heart,
  Building,
  Sprout,
  Mail,
  ShoppingCart,
  BookOpen,
  Package,
  DollarSign,
  TrendingUp,
  Target,
  Eye,
  Brain
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const microSaaSProducts = [
  {
    title: 'Cloud Cost Guard',
    description: 'Automated cloud cost monitoring and optimization for AWS, Azure, and GCP.',
    icon: Cloud,
    features: ['Cost Tracking', 'Budget Alerts', 'Optimization Recommendations', 'Multi-cloud Support'],
    pricing: '$29 - $299/month',
    category: 'Cloud Management',
    popular: true
  },
  {
    title: 'LLM Evaluation Suite',
    description: 'Comprehensive testing and evaluation platform for large language models.',
    icon: Brain,
    features: ['Model Testing', 'Performance Metrics', 'Bias Detection', 'Automated Reports'],
    pricing: '$199 - $1,999/month',
    category: 'AI Tools',
    popular: true
  },
  {
    title: 'Customer Feedback App',
    description: 'Collect, analyze, and act on customer feedback across multiple channels.',
    icon: Users,
    features: ['Multi-channel Collection', 'Sentiment Analysis', 'Action Tracking', 'Integration APIs'],
    pricing: '$49 - $499/month',
    category: 'Customer Experience',
    popular: true
  },
  {
    title: 'API Rate Limiting',
    description: 'Intelligent API rate limiting and throttling to protect your services.',
    icon: Shield,
    features: ['Dynamic Rate Limiting', 'DDoS Protection', 'Analytics Dashboard', 'Custom Rules'],
    pricing: '$99 - $999/month',
    category: 'API Management',
    popular: false
  },
  {
    title: 'Content Moderation AI',
    description: 'Automated content moderation using AI for text, images, and videos.',
    icon: Eye,
    features: ['Multi-media Support', 'Custom Rules', 'Real-time Processing', 'Human Review Queue'],
    pricing: '$149 - $1,499/month',
    category: 'Content Management',
    popular: true
  },
  {
    title: 'Workflow Automation',
    description: 'Visual workflow builder for automating business processes and integrations.',
    icon: Zap,
    features: ['Drag & Drop Builder', 'Pre-built Templates', 'Integration Library', 'Analytics'],
    pricing: '$79 - $799/month',
    category: 'Automation',
    popular: true
  },
  {
    title: 'AI Lead Scoring',
    description: 'Intelligent lead scoring and qualification using machine learning.',
    icon: Target,
    features: ['ML Models', 'Behavioral Analysis', 'Scoring Algorithms', 'CRM Integration'],
    pricing: '$199 - $1,999/month',
    category: 'Sales Tools',
    popular: false
  },
  {
    title: 'Intelligent Supply Chain Optimizer',
    description: 'AI-driven supply chain optimization with demand forecasting and inventory management.',
    icon: Package,
    features: ['Demand Forecasting', 'Inventory Optimization', 'Supplier Analytics', 'Risk Assessment'],
    pricing: '$599 - $3,999/month',
    category: 'Supply Chain',
    popular: true
  },
  {
    title: 'AI-Powered Legal Document Analyzer',
    description: 'Automated legal document analysis, contract review, and compliance checking using advanced NLP.',
    icon: FileText,
    features: ['Contract Analysis', 'Risk Assessment', 'Compliance Checking', 'Clause Extraction'],
    pricing: '$299 - $2,999/month',
    category: 'Legal Tech',
    popular: true
  },
  {
    title: 'Smart Energy Management',
    description: 'IoT-based energy monitoring and optimization for buildings and facilities.',
    icon: Sprout,
    features: ['Real-time Monitoring', 'Energy Analytics', 'Cost Optimization', 'Sustainability Reporting'],
    pricing: '$199 - $1,999/month',
    category: 'IoT Solutions',
    popular: false
  },
  {
    title: 'AI Medical Diagnosis Assistant',
    description: 'AI-powered medical diagnosis support with symptom analysis and treatment recommendations.',
    icon: Heart,
    features: ['Symptom Analysis', 'Diagnosis Support', 'Treatment Recommendations', 'Medical Records Integration'],
    pricing: '$499 - $4,999/month',
    category: 'Healthcare',
    popular: true
  },
  {
    title: 'Blockchain Analytics Dashboard',
    description: 'Comprehensive blockchain data analysis and visualization platform.',
    icon: Globe,
    features: ['Multi-chain Support', 'Transaction Analysis', 'DeFi Analytics', 'Custom Dashboards'],
    pricing: '$299 - $2,999/month',
    category: 'Blockchain',
    popular: false
  },
  {
    title: 'AI Personal Finance Manager',
    description: 'Intelligent personal finance tracking, budgeting, and investment advice.',
    icon: DollarSign,
    features: ['Expense Tracking', 'Budget Planning', 'Investment Analysis', 'Goal Setting'],
    pricing: '$9.99 - $99/month',
    category: 'FinTech',
    popular: true
  },
  {
    title: 'Smart Home Automation Hub',
    description: 'Centralized control and automation for smart home devices and systems.',
    icon: Building,
    features: ['Device Integration', 'Automation Rules', 'Voice Control', 'Energy Management'],
    pricing: '$49 - $499/month',
    category: 'Smart Home',
    popular: false
  },
  {
    title: 'AI Code Review Assistant',
    description: 'Automated code review and quality analysis using machine learning.',
    icon: Code,
    features: ['Code Analysis', 'Bug Detection', 'Security Scanning', 'Performance Optimization'],
    pricing: '$99 - $999/month',
    category: 'Developer Tools',
    popular: true
  },
  {
    title: 'Digital Marketing Analytics',
    description: 'Comprehensive marketing analytics and campaign optimization platform.',
    icon: BarChart3,
    features: ['Multi-channel Tracking', 'ROI Analysis', 'A/B Testing', 'Predictive Analytics'],
    pricing: '$149 - $1,499/month',
    category: 'Marketing',
    popular: true
  },
  {
    title: 'AI-Powered Email Marketing',
    description: 'Intelligent email marketing with personalization and automation.',
    icon: Mail,
    features: ['Personalization', 'Send Time Optimization', 'A/B Testing', 'Analytics'],
    pricing: '$79 - $799/month',
    category: 'Marketing',
    popular: false
  },
  {
    title: 'E-commerce Inventory Optimizer',
    description: 'AI-driven inventory management and demand forecasting for e-commerce.',
    icon: ShoppingCart,
    features: ['Demand Forecasting', 'Stock Optimization', 'Reorder Alerts', 'Analytics'],
    pricing: '$199 - $1,999/month',
    category: 'E-commerce',
    popular: true
  },
  {
    title: 'AI Learning Management System',
    description: 'Intelligent learning platform with personalized content and progress tracking.',
    icon: BookOpen,
    features: ['Personalized Learning', 'Progress Tracking', 'Content Generation', 'Assessment Tools'],
    pricing: '$99 - $999/month',
    category: 'EdTech',
    popular: false
  },
  {
    title: 'Smart Fleet Management',
    description: 'IoT-based fleet tracking, maintenance, and optimization platform.',
    icon: Car,
    features: ['Real-time Tracking', 'Maintenance Alerts', 'Route Optimization', 'Driver Analytics'],
    pricing: '$299 - $2,999/month',
    category: 'Fleet Management',
    popular: false
  },
  {
    title: 'AI-Powered HR Analytics',
    description: 'Human resources analytics and employee engagement platform.',
    icon: Users,
    features: ['Employee Analytics', 'Engagement Tracking', 'Performance Metrics', 'Predictive Insights'],
    pricing: '$199 - $1,999/month',
    category: 'HR Tech',
    popular: true
  }
];

const categories = ['All', 'Cloud Management', 'AI Tools', 'Customer Experience', 'API Management', 'Content Management', 'Automation', 'Sales Tools', 'Supply Chain', 'Legal Tech', 'IoT Solutions', 'Healthcare', 'Blockchain', 'FinTech', 'Smart Home', 'Developer Tools', 'Marketing', 'E-commerce', 'EdTech', 'Fleet Management', 'HR Tech'];

export default function MicroSaaSPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = microSaaSProducts.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-900 to-pink-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Micro SaaS Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Innovative, focused software solutions that solve specific business problems 
                with minimal overhead and maximum impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-all duration-300"
                >
                  Get Free Trial
                </Link>
                <Link 
                  href="#services" 
                  className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-purple-900 rounded-lg font-semibold transition-all duration-300"
                >
                  Explore Solutions
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Search Micro SaaS solutions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                        selectedCategory === category
                          ? 'bg-purple-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        {service.popular && (
                          <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded-full">
                            Popular
                          </span>
                        )}
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-center">
                              <CheckCircle className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-sm text-gray-500">Starting at</span>
                          <div className="text-lg font-bold text-purple-600">
                            {service.pricing}
                          </div>
                        </div>
                        <Link
                          href="/contact"
                          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium"
                        >
                          Get Started
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Build Your Micro SaaS?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Our development team can help you create, launch, and scale your micro SaaS solution 
                with modern technology and best practices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                >
                  Start Your Project
                </Link>
                <Link 
                  href="/ai-services" 
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold"
                >
                  Explore AI Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Cloud, 
  Zap, 
  BarChart3, 
  Code, 
  Settings, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Award, 
  Rocket, 
  Lightbulb, 
  Target, 
  Users, 
  Globe, 
  Shield, 
  Brain, 
  Database, 
  Server, 
  Lock, 
  FileText, 
  MessageSquare, 
  Calendar, 
  Bot, 
  Search, 
  Phone, 
  Mail, 
  MapPin, 
  ExternalLink
} from 'lucide-react';
import Layout from '../components/Layout';

const microSaasSolutions = [
  {
    id: 1,
    title: 'AI Content Marketing Suite',
    description: 'Automated content creation, SEO optimization, and social media management platform with advanced AI capabilities.',
    icon: FileText,
    features: ['AI Content Generation', 'SEO Optimization', 'Social Media Scheduling', 'Analytics Dashboard', 'Multi-language Support', 'Brand Voice Training'],
    pricing: '$29 - $199/month',
    category: 'AI Marketing',
    popular: true,
    benefits: ['10x Content Output', 'SEO Boost', 'Time Savings', 'Better Engagement', 'Cost Reduction'],
    marketPrice: '$50 - $300/month',
    link: 'https://ziontechgroup.com/ai-content-marketing',
    contact: '+1 302 464 0950'
  },
  {
    id: 2,
    title: 'Smart Lead Management System',
    description: 'AI-powered lead scoring, nurturing, and conversion optimization platform with predictive analytics.',
    icon: Target,
    features: ['Lead Scoring', 'Automated Nurturing', 'CRM Integration', 'Conversion Tracking', 'Predictive Analytics', 'A/B Testing'],
    pricing: '$49 - $299/month',
    category: 'AI Sales',
    popular: true,
    benefits: ['Higher Conversion', 'Automated Workflows', 'Better ROI', 'Data Insights', 'Reduced Manual Work'],
    marketPrice: '$75 - $500/month',
    link: 'https://ziontechgroup.com/smart-lead-management',
    contact: '+1 302 464 0950'
  },
  {
    id: 3,
    title: 'AI-Powered Analytics Dashboard',
    description: 'Real-time business intelligence with predictive analytics, custom reporting, and automated insights.',
    icon: BarChart3,
    features: ['Real-time Analytics', 'Predictive Insights', 'Custom Reports', 'Data Visualization', 'Automated Alerts', 'ROI Tracking'],
    pricing: '$39 - $249/month',
    category: 'AI Analytics',
    popular: true,
    benefits: ['Data-Driven Decisions', 'Predictive Insights', 'Custom Dashboards', 'ROI Tracking', 'Automated Reporting'],
    marketPrice: '$60 - $400/month',
    link: 'https://ziontechgroup.com/ai-analytics-dashboard',
    contact: '+1 302 464 0950'
  },
  {
    id: 4,
    title: 'Smart Document Processing',
    description: 'Automated document extraction, classification, and data entry using advanced AI and OCR technology.',
    icon: FileText,
    features: ['OCR Technology', 'Smart Classification', 'Data Extraction', 'Workflow Automation', 'Multi-format Support', 'API Integration'],
    pricing: '$19 - $149/month',
    category: 'AI Productivity',
    popular: false,
    benefits: ['Time Savings', 'Error Reduction', 'Automated Workflows', 'Better Organization', 'Cost Efficiency'],
    marketPrice: '$30 - $200/month',
    link: 'https://ziontechgroup.com/smart-document-processing',
    contact: '+1 302 464 0950'
  },
  {
    id: 5,
    title: 'AI Customer Support Bot',
    description: 'Intelligent chatbot platform with natural language processing and seamless human handoff capabilities.',
    icon: Bot,
    features: ['Natural Language Processing', 'Multi-channel Support', 'Human Handoff', 'Sentiment Analysis', 'Custom Training', 'API Integration'],
    pricing: '$39 - $199/month',
    category: 'AI Support',
    popular: true,
    benefits: ['24/7 Support', 'Instant Responses', 'Cost Reduction', 'Better Customer Experience', 'Scalable Support'],
    marketPrice: '$60 - $300/month',
    link: 'https://ziontechgroup.com/ai-customer-support',
    contact: '+1 302 464 0950'
  },
  {
    id: 6,
    title: 'Smart Project Management',
    description: 'AI-enhanced project management with resource optimization, risk prediction, and team collaboration.',
    icon: Calendar,
    features: ['Resource Optimization', 'Risk Prediction', 'Team Collaboration', 'Progress Tracking', 'Automated Reporting', 'Integration Hub'],
    pricing: '$29 - $179/month',
    category: 'AI Project Management',
    popular: false,
    benefits: ['Better Planning', 'Risk Mitigation', 'Team Collaboration', 'Resource Optimization', 'Improved Delivery'],
    marketPrice: '$45 - $250/month',
    link: 'https://ziontechgroup.com/smart-project-management',
    contact: '+1 302 464 0950'
  }
];

const categories = [
  { name: 'All', count: microSaasSolutions.length },
  { name: 'AI Marketing', count: microSaasSolutions.filter(s => s.category === 'AI Marketing').length },
  { name: 'AI Sales', count: microSaasSolutions.filter(s => s.category === 'AI Sales').length },
  { name: 'AI Analytics', count: microSaasSolutions.filter(s => s.category === 'AI Analytics').length },
  { name: 'AI Productivity', count: microSaasSolutions.filter(s => s.category === 'AI Productivity').length },
  { name: 'AI Support', count: microSaasSolutions.filter(s => s.category === 'AI Support').length },
  { name: 'AI Project Management', count: microSaasSolutions.filter(s => s.category === 'AI Project Management').length }
];

export default function MicroSaaS() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSolutions = microSaasSolutions.filter(solution => {
    const matchesCategory = selectedCategory === 'All' || solution.category === selectedCategory;
    const matchesSearch = solution.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         solution.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout
      title="Micro SaaS Solutions - Zion Tech Group"
      description="Discover our innovative Micro SaaS solutions designed to automate and optimize your business processes. AI-powered tools for marketing, sales, analytics, and more."
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-purple-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              Micro SaaS Solutions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
            >
              Powerful, focused software solutions that solve specific business problems. 
              Our AI-powered Micro SaaS tools help you automate, optimize, and scale your operations.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-lg font-semibold inline-flex items-center"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/pricing"
                className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-lg font-semibold"
              >
                View Pricing
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="relative max-w-md mx-auto mb-8">
              <input
                type="text"
                placeholder="Search Micro SaaS solutions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
            
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    selectedCategory === category.name
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSolutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <solution.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-center space-x-2">
                    {solution.popular && (
                      <span className="bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded-full">
                        Popular
                      </span>
                    )}
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {solution.title}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm">
                  {solution.description}
                </p>
                
                <div className="mb-4">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    {solution.category}
                  </span>
                </div>
                
                <ul className="space-y-1 mb-4">
                  {solution.features.slice(0, 3).map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Our Price:</span>
                    <span className="font-bold text-blue-600">{solution.pricing}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Market Price:</span>
                    <span className="text-gray-600 line-through">{solution.marketPrice}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <Link
                    href="/contact"
                    className="text-blue-600 hover:text-blue-700 font-semibold text-sm inline-flex items-center"
                  >
                    Learn More
                    <ArrowRight className="ml-1 w-3 h-3" />
                  </Link>
                  <a
                    href={solution.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Choose from our Micro SaaS solutions or let us create a custom solution for your specific needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-lg font-semibold inline-flex items-center"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/pricing"
              className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200 text-lg font-semibold"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Get in Touch
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-5 h-5 text-blue-600" />
                <span className="text-gray-600">+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <span className="text-gray-600">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span className="text-gray-600">Middletown, DE 19709</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
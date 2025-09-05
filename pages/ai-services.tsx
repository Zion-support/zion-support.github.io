import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Brain, Cloud, Shield, Database, Network, Monitor, Settings, CheckCircle, ArrowRight, Clock, Award, Star, Zap, TrendingUp, Users, Lock, Globe, Cpu, HardDrive, Wifi, Smartphone, Laptop, Building, BarChart3, Code, Search, ShoppingCart, BookOpen, DollarSign, Rocket, Phone, Mail, MapPin, MessageSquare, MessageCircle, Eye } from 'lucide-react';
import Layout from '../components/Layout';

const aiServices = [
  {
    id: 1,
    title: 'AI-Powered Business Automation',
    description: 'Streamline your business processes with intelligent automation solutions that learn and adapt to your workflows.',
    icon: Brain,
    features: [
      'Process Automation',
      'Workflow Optimization',
      'Intelligent Decision Making',
      'Cost Reduction'
    ],
    pricing: 'Starting at $2,500/month',
    category: 'Automation',
    benefits: ['Reduce operational costs by 40%', 'Eliminate manual errors', 'Scale processes automatically'],
    marketPrice: '$5,000-15,000/month',
    setupTime: '2-4 weeks',
    targetUsers: 'Operations, Finance, HR, Customer Service'
  },
  {
    id: 2,
    title: 'Machine Learning Analytics',
    description: 'Transform your data into actionable insights with advanced machine learning models and predictive analytics.',
    icon: BarChart3,
    features: [
      'Predictive Analytics',
      'Data Visualization',
      'Pattern Recognition',
      'Real-time Insights'
    ],
    pricing: 'Starting at $3,000/month',
    category: 'Analytics',
    benefits: ['Make data-driven decisions', 'Predict future trends', 'Optimize business performance'],
    marketPrice: '$4,000-12,000/month',
    setupTime: '3-6 weeks',
    targetUsers: 'Data Teams, Executives, Marketing, Sales'
  },
  {
    id: 3,
    title: 'Natural Language Processing',
    description: 'Enhance customer interactions and content management with advanced NLP capabilities.',
    icon: MessageSquare,
    features: [
      'Chatbot Development',
      'Sentiment Analysis',
      'Content Generation',
      'Language Translation'
    ],
    pricing: 'Starting at $2,000/month',
    category: 'NLP',
    benefits: ['Improve customer experience', 'Automate content creation', 'Enable multilingual support'],
    marketPrice: '$3,500-7,500/month',
    setupTime: '2-3 weeks',
    targetUsers: 'Customer Service, Content, Legal, Healthcare'
  },
  {
    id: 4,
    title: 'Predictive Analytics',
    description: 'Advanced predictive modeling for forecasting, risk assessment, and business intelligence.',
    icon: TrendingUp,
    category: 'Analytics',
    features: [
      'Demand forecasting & planning',
      'Risk assessment & mitigation',
      'Customer behavior prediction',
      'Financial modeling'
    ],
    pricing: 'Starting at $3,000/month',
    benefits: ['Improve forecasting accuracy', 'Reduce business risks', 'Optimize resource allocation'],
    marketPrice: '$4,000-10,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Finance, Operations, Marketing, Sales'
  },
  {
    id: 5,
    title: 'Computer Vision Solutions',
    description: 'Implement visual recognition and image processing capabilities for various business applications.',
    icon: Eye,
    features: [
      'Image Recognition',
      'Object Detection',
      'Quality Control',
      'Visual Search'
    ],
    pricing: 'Starting at $4,000/month',
    category: 'Computer Vision',
    benefits: ['Automate visual inspections', 'Enhance security systems', 'Improve user experience'],
    marketPrice: '$6,000-20,000/month',
    setupTime: '6-12 weeks',
    targetUsers: 'Manufacturing, Security, E-commerce, Healthcare'
  },
  {
    id: 6,
    title: 'AI Chatbot Development',
    description: 'Create intelligent conversational agents that provide 24/7 customer support and assistance.',
    icon: MessageCircle,
    features: [
      'Multi-channel Support',
      'Context Awareness',
      'Integration APIs',
      'Analytics Dashboard'
    ],
    pricing: 'Starting at $1,500/month',
    category: 'Chatbots',
    benefits: ['24/7 customer support', 'Reduce support costs', 'Improve response times'],
    marketPrice: '$2,500-8,000/month',
    setupTime: '2-4 weeks',
    targetUsers: 'Customer Service, Sales, Support Teams'
  }
];

const categories = ['All', 'Automation', 'Analytics', 'NLP', 'Computer Vision', 'Chatbots'];

export default function AIServicesPage() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredServices = aiServices.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = (service.title && service.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
                         (service.description && service.description.toLowerCase().includes(searchTerm.toLowerCase())) ||
                         (service.category && service.category.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout title="AI Services - Zion Tech Group">
      <Head>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Transform your business with cutting-edge AI services including machine learning, automation, and predictive analytics." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">
                AI Services
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Transform your business with cutting-edge artificial intelligence solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-white text-purple-900 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                  Get Started
                </Link>
                <Link href="#services" className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors">
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Search AI services..."
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
                      className={`px-4 py-2 rounded-lg font-medium transition-colors ${
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
        <section id="services" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6"
                >
                  <div className="flex items-center mb-4">
                    <service.icon className="h-8 w-8 text-purple-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-purple-600 mb-1">{service.pricing}</div>
                    <div className="text-sm text-gray-500">{service.category}</div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="text-sm text-green-600">
                        ✓ {benefit}
                      </div>
                    ))}
                  </div>
                  
                  <Link href="/contact" className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium">
                    Learn More <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-purple-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business with AI?</h2>
            <p className="text-xl mb-8 text-purple-100">
              Let our AI experts help you implement the right solutions for your business needs.
            </p>
            <Link href="/contact" className="bg-white text-purple-900 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
              Get Free AI Consultation
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}

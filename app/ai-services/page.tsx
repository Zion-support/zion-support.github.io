'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  MessageSquare, 
  Eye, 
  Zap, 
  BarChart, 
  Box, 
  Mic, 
  Shield, 
  TrendingUp, 
  Target, 
  FileText, 
  Search, 
  Phone,
  CheckCircle, 
  ArrowRight, 
  Star, 
  Clock,
  Globe, 
  Database, 
  Users, 
  Settings,
  Filter,
  DollarSign,
  Award,
  Cpu,
  Lock,
  Cloud,
  Smartphone,
  Code,
  BarChart3,
  Bot,
  Sparkles,
  ShoppingCart
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const aiServices = [
    {
      id: 1,
      title: 'AI-Powered Chatbots',
      description: 'Intelligent conversational AI that provides 24/7 customer support and lead generation.',
      icon: Bot,
      category: 'Customer Service',
      features: ['Natural Language Processing', 'Multi-language Support', 'Lead Qualification', 'Integration APIs'],
      price: 'Starting at $299/month',
      benefits: ['Reduce support costs by 60%', '24/7 availability', 'Instant responses', 'Scalable solutions']
    },
    {
      id: 2,
      title: 'AI Content Generation',
      description: 'Automated content creation for blogs, social media, and marketing materials.',
      icon: FileText,
      category: 'Content',
      features: ['Blog Post Generation', 'Social Media Content', 'Email Campaigns', 'SEO Optimization'],
      price: 'Starting at $199/month',
      benefits: ['10x faster content creation', 'SEO-optimized content', 'Brand voice consistency', 'Multi-platform publishing']
    },
    {
      id: 3,
      title: 'AI Data Analytics',
      description: 'Advanced analytics with machine learning insights and predictive modeling.',
      icon: BarChart3,
      category: 'Analytics',
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Custom Reports', 'Data Visualization'],
      price: 'Starting at $399/month',
      benefits: ['50% better decision making', 'Automated insights', 'Real-time monitoring', 'ROI optimization']
    },
    {
      id: 4,
      title: 'AI Image Recognition',
      description: 'Computer vision solutions for object detection, classification, and analysis.',
      icon: Eye,
      category: 'Computer Vision',
      features: ['Object Detection', 'Image Classification', 'Quality Control', 'Automated Tagging'],
      price: 'Starting at $499/month',
      benefits: ['99% accuracy', 'Real-time processing', 'Custom model training', 'API integration']
    },
    {
      id: 5,
      title: 'AI Voice Processing',
      description: 'Speech-to-text, text-to-speech, and voice command processing solutions.',
      icon: Mic,
      category: 'Voice',
      features: ['Speech Recognition', 'Voice Commands', 'Multi-language Support', 'Real-time Processing'],
      price: 'Starting at $249/month',
      benefits: ['Hands-free operation', 'Accessibility features', 'Multi-language support', 'High accuracy']
    },
    {
      id: 6,
      title: 'AI Cybersecurity',
      description: 'Intelligent threat detection and automated security response systems.',
      icon: Shield,
      category: 'Security',
      features: ['Threat Detection', 'Anomaly Detection', 'Automated Response', 'Compliance Monitoring'],
      price: 'Starting at $599/month',
      benefits: ['99.9% threat detection', 'Automated response', '24/7 monitoring', 'Compliance ready']
    },
    {
      id: 7,
      title: 'AI Business Intelligence',
      description: 'Comprehensive BI solutions with AI-powered insights and recommendations.',
      icon: TrendingUp,
      category: 'Business Intelligence',
      features: ['Smart Dashboards', 'Predictive Insights', 'Custom Analytics', 'Report Automation'],
      price: 'Starting at $349/month',
      benefits: ['Data-driven decisions', 'Automated reporting', 'Predictive insights', 'Custom dashboards']
    },
    {
      id: 8,
      title: 'AI Process Automation',
      description: 'Intelligent automation for repetitive tasks and workflow optimization.',
      icon: Zap,
      category: 'Automation',
      features: ['Workflow Automation', 'Task Scheduling', 'Error Reduction', 'Process Optimization'],
      price: 'Starting at $199/month',
      benefits: ['80% time savings', 'Error reduction', 'Cost optimization', 'Scalable automation']
    },
    {
      id: 9,
      title: 'AI Customer Analytics',
      description: 'Deep customer insights and behavior analysis for better engagement.',
      icon: Users,
      category: 'Customer Analytics',
      features: ['Customer Segmentation', 'Behavior Analysis', 'Churn Prediction', 'Personalization'],
      price: 'Starting at $299/month',
      benefits: ['Better customer retention', 'Personalized experiences', 'Churn prevention', 'Revenue growth']
    },
    {
      id: 10,
      title: 'AI Financial Analysis',
      description: 'Intelligent financial forecasting and risk assessment solutions.',
      icon: DollarSign,
      category: 'Finance',
      features: ['Financial Forecasting', 'Risk Assessment', 'Fraud Detection', 'Investment Analysis'],
      price: 'Starting at $499/month',
      benefits: ['Accurate forecasting', 'Risk mitigation', 'Fraud prevention', 'Investment optimization']
    },
    {
      id: 11,
      title: 'AI Healthcare Solutions',
      description: 'Medical AI for diagnosis assistance, patient monitoring, and treatment optimization.',
      icon: Award,
      category: 'Healthcare',
      features: ['Diagnosis Support', 'Patient Monitoring', 'Treatment Optimization', 'Medical Imaging'],
      price: 'Starting at $799/month',
      benefits: ['Improved accuracy', 'Faster diagnosis', 'Better outcomes', 'Cost reduction']
    },
    {
      id: 12,
      title: 'AI E-commerce Optimization',
      description: 'Smart recommendations, pricing optimization, and inventory management.',
      icon: ShoppingCart,
      category: 'E-commerce',
      features: ['Product Recommendations', 'Price Optimization', 'Inventory Management', 'Customer Insights'],
      price: 'Starting at $399/month',
      benefits: ['30% increase in sales', 'Better inventory management', 'Personalized shopping', 'Dynamic pricing']
    }
  ];

  const categories = ['all', 'Customer Service', 'Content', 'Analytics', 'Computer Vision', 'Voice', 'Security', 'Business Intelligence', 'Automation', 'Customer Analytics', 'Finance', 'Healthcare', 'E-commerce'];

  const filteredServices = aiServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const stats = [
    { number: '500+', label: 'AI Models Deployed' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '50+', label: 'Enterprise Clients' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta name="description" content="Comprehensive AI services including chatbots, content generation, data analytics, computer vision, and more. Transform your business with cutting-edge AI technology." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, chatbots, data analytics, computer vision, AI automation, business intelligence" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your business with cutting-edge AI solutions. From intelligent chatbots to advanced analytics, 
              we provide comprehensive AI services that drive growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link 
                to="/demo"
                className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
              >
                View Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search AI services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="pl-10 pr-8 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none"
                >
                  {categories.map(category => (
                    <option key={category} value={category} className="bg-slate-800">
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div key={service.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-purple-400 font-semibold">{service.price}</span>
                      <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full">
                        {service.category}
                      </span>
                    </div>
                    <Link 
                      to="/contact"
                      className="flex items-center text-white hover:text-purple-400 transition-colors"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our AI experts to discuss your requirements and get a customized solution that fits your business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Get Quote
                </Link>
                <Link 
                  to="/consultation"
                  className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
                >
                  Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AIServicesPage;
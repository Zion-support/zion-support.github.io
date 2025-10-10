'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { 
  CheckCircle, 
  ArrowRight, 
  Zap, 
  Star, 
  Users, 
  TrendingUp, 
  Shield, 
  Cloud, 
  BarChart3, 
  MessageSquare, 
  Brain, 
  Code, 
  Database, 
  Smartphone, 
  Globe, 
  Lock, 
  FileText, 
  Mail, 
  Calendar, 
  Target, 
  Cpu, 
  Settings, 
  Monitor, 
  Wifi, 
  CreditCard, 
  PieChart, 
  Search, 
  Filter, 
  Download, 
  Upload, 
  Eye, 
  AlertTriangle, 
  CheckSquare, 
  Clock, 
  DollarSign, 
  Award, 
  Rocket, 
  Sparkles,
  Package,
  Mic,
  Heart,
  Link as LinkIcon,
  Server,
  Box,
  Headphones,
  ShoppingCart,
  Phone,
  MapPin
} from 'lucide-react';

interface MicroSaasProduct {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  features: string[];
  price: string;
  originalPrice?: string;
  users: string;
  popular: boolean;
  category: string;
  link: string;
  marketPrice: string;
  savings?: string;
}

const MicroSaasPage: React.FC = () => {
  const products: MicroSaasProduct[] = [
    {
      id: '1',
      icon: BarChart3,
      title: 'ZionAnalytics Pro',
      description: 'Advanced business intelligence and real-time analytics platform with AI-powered insights',
      features: [
        'Real-time data visualization with 50+ chart types',
        'AI-powered predictive analytics and forecasting',
        'Custom dashboard builder with drag-and-drop interface',
        'Multi-source data integration (APIs, databases, files)',
        'Automated report generation and email scheduling',
        'Advanced filtering and segmentation tools',
        'Mobile app for iOS and Android',
        'White-label solution available',
        '24/7 technical support',
        'SOC 2 Type II compliant'
      ],
      price: '$49/month',
      originalPrice: '$99/month',
      users: 'Up to 10 users',
      popular: true,
      category: 'Analytics',
      link: 'https://ziontechgroup.com/analytics-pro',
      marketPrice: '$150-300/month',
      savings: '67% off market rate'
    },
    {
      id: '2',
      icon: Brain,
      title: 'ZionAI Content Studio',
      description: 'AI-powered content creation platform with multi-format support and brand consistency',
      features: [
        'GPT-4 powered content generation',
        'Multi-format content (blogs, social, email, ads)',
        'Brand voice customization and training',
        'SEO optimization and keyword research',
        'Plagiarism detection and originality scoring',
        'Content calendar and scheduling',
        'Team collaboration and approval workflows',
        'Performance analytics and ROI tracking',
        'Multi-language support (50+ languages)',
        'API integration for automated publishing'
      ],
      price: '$79/month',
      originalPrice: '$149/month',
      users: 'Up to 25 users',
      popular: true,
      category: 'Content Creation',
      link: 'https://ziontechgroup.com/ai-content-studio',
      marketPrice: '$200-500/month',
      savings: '60% off market rate'
    }
  ];

  const categories = ['All', 'Analytics', 'Content Creation', 'Security', 'Storage', 'Monitoring', 'Communication', 'Development', 'Data', 'Mobile', 'Web', 'Finance', 'Business Intelligence', 'Marketing', 'Project Management', 'Email Marketing', 'Inventory Management', 'Invoicing', 'Automation', 'Compliance', 'Video Editing', 'Translation', 'Customer Analytics', 'Email Management', 'Meeting Management', 'SEO', 'Data Quality', 'Contract Management', 'Survey Tools', 'Accounting', 'Recruitment', 'Content Moderation', 'Predictive Maintenance', 'Energy Management', 'Supply Chain', 'Fraud Detection', 'Customer Service', 'Marketing Automation', 'Document Processing'];

  const benefits = [
    'Quick setup and deployment (under 5 minutes)',
    'Scalable pricing plans with no hidden fees',
    '24/7 customer support and technical assistance',
    'Regular feature updates and improvements',
    'Enterprise-grade security and compliance',
    'Easy integration with existing systems',
    'White-label solutions available',
    'Free trial and money-back guarantee',
    'Comprehensive documentation and training',
    'Dedicated account management'
  ];

  const stats = [
    { icon: <Users className="w-8 h-8 text-cyan-400" />, value: '50K+', label: 'Active Users' },
    { icon: <TrendingUp className="w-8 h-8 text-green-400" />, value: '99.9%', label: 'Uptime SLA' },
    { icon: <Shield className="w-8 h-8 text-purple-400" />, value: '100%', label: 'Secure & Compliant' },
    { icon: <Zap className="w-8 h-8 text-orange-400" />, value: '2min', label: 'Setup Time' },
    { icon: <Award className="w-8 h-8 text-yellow-400" />, value: '4.9/5', label: 'Customer Rating' },
    { icon: <Rocket className="w-8 h-8 text-pink-400" />, value: '10x', label: 'Faster Deployment' }
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions | Zion Tech Group - AI-Powered Tools</title>
        <meta name="description" content="Discover our comprehensive suite of AI-powered micro SaaS solutions. From analytics to automation, find the perfect tool for your business needs with up to 67% savings." />
        <meta name="keywords" content="micro SaaS, AI tools, business software, analytics dashboard, project management, security monitoring, content creation, automation" />
      </Helmet>

      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="neon-text">Micro SaaS</span> Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Ready-to-use business tools that solve specific problems. Quick setup, affordable pricing, powerful features.
              <br />
              <span className="text-cyan-400 font-semibold">Save up to 67% compared to market rates!</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="neon-button bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <Sparkles className="inline-block mr-2 w-5 h-5" />
                Get Started
              </Link>
              <Link
                to="/pricing"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-bold py-4 px-8 rounded-lg transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center glass-card p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2 neon-text">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                      : 'glass-card text-gray-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                {selectedCategory === 'All' ? 'All Products' : `${selectedCategory} Products`}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <div key={product.id} className={`bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 ${product.popular ? 'ring-2 ring-blue-500' : ''}`}>
                    {product.popular && (
                      <div className="flex items-center justify-center mb-4">
                        <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                          <Star className="w-4 h-4 mr-1" />
                          Popular
                        </div>
                      </div>
                    )}
                    
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                        <product.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{product.title}</h3>
                        <p className="text-sm text-gray-500">{product.category}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
                    
                    <ul className="space-y-2 mb-6">
                      {product.features.slice(0, 5).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600 text-sm">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {product.features.length > 5 && (
                        <li className="text-gray-500 text-sm">
                          +{product.features.length - 5} more features
                        </li>
                      )}
                    </ul>

                    <div className="border-t pt-4">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                          {product.originalPrice && (
                            <span className="text-lg text-gray-500 line-through ml-2">{product.originalPrice}</span>
                          )}
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-500">Market: {product.marketPrice}</div>
                          {product.savings && (
                            <div className="text-sm text-green-600 font-medium">{product.savings}</div>
                          )}
                        </div>
                      </div>
                      <div className="text-sm text-gray-500 mb-4">{product.users}</div>
                      <div className="flex gap-2">
                        <a
                          href={product.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center py-2 px-4 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                        >
                          Try Now
                        </a>
                        <Link
                          to="/contact"
                          className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-300"
                        >
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">
              Why Choose Our Micro SaaS Solutions?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center glass-card p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-300 text-sm">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center glass-card p-8">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Choose from our ready-made solutions or let us build a custom micro SaaS tool for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                Browse Solutions
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300"
              >
                Custom Development
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default MicroSaasPage;

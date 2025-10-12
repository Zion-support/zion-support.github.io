'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain, Cloud, Code, 
  BarChart, FileText, MessageCircle, Target, CheckSquare, DollarSign, Box, 
  Settings, Heart, Eye, Mic, Workflow, Link as LinkIcon, Wifi, Package, 
  TrendingUp, Calendar, ShoppingCart, Sparkles, Cpu, Globe, Database, 
  Smartphone, Lock, Monitor, Server, Mail, Phone, MapPin, Clock
} from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const microSaasProducts = [
    {
      id: 'zion-analytics-pro',
      title: 'Zion Analytics Pro',
      description: 'Advanced business intelligence platform with AI-powered insights and real-time dashboards',
      price: '$99/month',
      originalPrice: '$149/month',
      features: [
        'Real-time analytics dashboard',
        'AI-powered predictive insights',
        'Custom report generation',
        'Team collaboration tools',
        'API integrations',
        'Mobile app access',
        'Data visualization tools',
        'Export to multiple formats'
      ],
      icon: BarChart,
      color: 'from-blue-500 to-purple-500',
      category: 'Analytics',
      rating: 4.9,
      reviews: 127,
      popular: true
    },
    {
      id: 'zion-chat-ai',
      title: 'Zion Chat AI',
      description: 'Intelligent customer support chatbot with natural language processing and multi-channel support',
      price: '$79/month',
      originalPrice: '$119/month',
      features: [
        'Multi-language support',
        'Sentiment analysis',
        'Escalation management',
        'Performance analytics',
        'Custom training',
        'Integration APIs',
        'Live chat handoff',
        'Knowledge base management'
      ],
      icon: MessageCircle,
      color: 'from-green-500 to-teal-500',
      category: 'Customer Support',
      rating: 4.8,
      reviews: 89,
      popular: false
    },
    {
      id: 'zion-security-shield',
      title: 'Zion Security Shield',
      description: 'Comprehensive cybersecurity monitoring and threat detection for small to medium businesses',
      price: '$149/month',
      originalPrice: '$199/month',
      features: [
        'Real-time threat detection',
        'Vulnerability scanning',
        'Incident response automation',
        'Compliance reporting',
        'Security awareness training',
        '24/7 monitoring',
        'Mobile device management',
        'Firewall management'
      ],
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      category: 'Security',
      rating: 4.9,
      reviews: 156,
      popular: true
    },
    {
      id: 'zion-cloud-vault',
      title: 'Zion Cloud Vault',
      description: 'Secure cloud backup and disaster recovery solution with automated backups and instant restore',
      price: '$59/month',
      originalPrice: '$89/month',
      features: [
        'Automated daily backups',
        'Instant file recovery',
        'Version history tracking',
        'Cross-platform sync',
        'End-to-end encryption',
        'Compliance certifications',
        'Unlimited storage',
        'Mobile access'
      ],
      icon: Cloud,
      color: 'from-cyan-500 to-blue-500',
      category: 'Backup & Recovery',
      rating: 4.7,
      reviews: 203,
      popular: false
    },
    {
      id: 'zion-content-studio',
      title: 'Zion Content Studio',
      description: 'AI-powered content creation and management platform for blogs, social media, and marketing',
      price: '$69/month',
      originalPrice: '$99/month',
      features: [
        'AI content generation',
        'Multi-platform publishing',
        'Brand voice training',
        'Content calendar',
        'SEO optimization',
        'Image generation',
        'Video creation tools',
        'Performance tracking'
      ],
      icon: FileText,
      color: 'from-purple-500 to-pink-500',
      category: 'Content Creation',
      rating: 4.6,
      reviews: 94,
      popular: false
    },
    {
      id: 'zion-crm-intelligence',
      title: 'Zion CRM Intelligence',
      description: 'Smart customer relationship management with AI insights and automated workflows',
      price: '$89/month',
      originalPrice: '$129/month',
      features: [
        'Lead scoring automation',
        'Sales forecasting',
        'Customer insights',
        'Automation workflows',
        'Email marketing',
        'Pipeline management',
        'Team collaboration',
        'Mobile CRM access'
      ],
      icon: Users,
      color: 'from-indigo-500 to-purple-500',
      category: 'CRM',
      rating: 4.8,
      reviews: 142,
      popular: true
    },
    {
      id: 'zion-data-sync',
      title: 'Zion Data Sync',
      description: 'Automated data synchronization across multiple platforms and databases',
      price: '$49/month',
      originalPrice: '$79/month',
      features: [
        'Real-time data sync',
        'Multiple platform support',
        'Data transformation',
        'Error handling',
        'Scheduled syncs',
        'Data validation',
        'API integrations',
        'Monitoring dashboard'
      ],
      icon: Database,
      color: 'from-emerald-500 to-green-500',
      category: 'Data Management',
      rating: 4.5,
      reviews: 67,
      popular: false
    },
    {
      id: 'zion-lead-magnet',
      title: 'Zion Lead Magnet',
      description: 'Lead generation and nurturing platform with automated email sequences and landing pages',
      price: '$79/month',
      originalPrice: '$119/month',
      features: [
        'Landing page builder',
        'Email automation',
        'Lead scoring',
        'A/B testing',
        'Analytics dashboard',
        'CRM integration',
        'Form builder',
        'Social media integration'
      ],
      icon: Target,
      color: 'from-yellow-500 to-orange-500',
      category: 'Marketing',
      rating: 4.7,
      reviews: 118,
      popular: false
    },
    {
      id: 'zion-project-master',
      title: 'Zion Project Master',
      description: 'Advanced project management with AI-powered insights and team collaboration tools',
      price: '$99/month',
      originalPrice: '$149/month',
      features: [
        'Gantt charts',
        'Resource management',
        'Time tracking',
        'Budget monitoring',
        'Team collaboration',
        'File sharing',
        'Progress reporting',
        'Mobile app'
      ],
      icon: CheckSquare,
      color: 'from-violet-500 to-purple-500',
      category: 'Project Management',
      rating: 4.8,
      reviews: 175,
      popular: true
    },
    {
      id: 'zion-email-automation',
      title: 'Zion Email Automation',
      description: 'Intelligent email marketing platform with AI-powered personalization and automation',
      price: '$59/month',
      originalPrice: '$89/month',
      features: [
        'Email templates',
        'Automation workflows',
        'Personalization engine',
        'A/B testing',
        'Analytics tracking',
        'List management',
        'Drip campaigns',
        'Integration APIs'
      ],
      icon: Mail,
      color: 'from-pink-500 to-rose-500',
      category: 'Email Marketing',
      rating: 4.6,
      reviews: 89,
      popular: false
    },
    {
      id: 'zion-inventory-smart',
      title: 'Zion Inventory Smart',
      description: 'AI-powered inventory management with demand forecasting and automated reordering',
      price: '$89/month',
      originalPrice: '$129/month',
      features: [
        'Demand forecasting',
        'Automated reordering',
        'Stock level monitoring',
        'Supplier management',
        'Barcode scanning',
        'Multi-location support',
        'Reporting dashboard',
        'Mobile app'
      ],
      icon: Box,
      color: 'from-teal-500 to-cyan-500',
      category: 'Inventory',
      rating: 4.7,
      reviews: 134,
      popular: false
    },
    {
      id: 'zion-invoice-genius',
      title: 'Zion Invoice Genius',
      description: 'Automated invoicing and payment processing with AI-powered expense categorization',
      price: '$49/month',
      originalPrice: '$79/month',
      features: [
        'Automated invoicing',
        'Payment processing',
        'Expense categorization',
        'Tax calculations',
        'Client portal',
        'Recurring billing',
        'Financial reporting',
        'Multi-currency support'
      ],
      icon: DollarSign,
      color: 'from-green-500 to-emerald-500',
      category: 'Finance',
      rating: 4.8,
      reviews: 156,
      popular: true
    }
  ];

  const categories = ['All', 'Analytics', 'Customer Support', 'Security', 'Backup & Recovery', 'Content Creation', 'CRM', 'Data Management', 'Marketing', 'Project Management', 'Email Marketing', 'Inventory', 'Finance'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = selectedCategory === 'All' 
    ? microSaasProducts 
    : microSaasProducts.filter(product => product.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Micro SAAS Products - Zion Tech Group | AI-Powered Business Solutions</title>
        <meta name="description" content="Discover our comprehensive suite of micro SAAS products designed to solve specific business challenges. From AI analytics to cybersecurity, we have the tools you need to succeed." />
        <meta name="keywords" content="micro saas, business software, AI tools, analytics, CRM, project management, cybersecurity, automation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-16">
          <div className="absolute inset-0 opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className={`text-4xl md:text-6xl font-bold text-white mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Micro SAAS
                <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Business Solutions
                </span>
              </h1>
              <p className={`text-xl text-gray-300 mb-8 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Powerful, ready-to-use software solutions designed to solve specific business challenges. 
                No complex setup, no lengthy implementations - just instant value.
              </p>
              <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  Call +1 302 464 0950
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product, index) => (
                <div
                  key={product.id}
                  className={`group relative bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:border-purple-500 ${
                    product.popular ? 'ring-2 ring-purple-500' : ''
                  }`}
                >
                  {product.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${product.color} rounded-xl mb-4`}>
                      <product.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{product.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{product.description}</p>
                    <div className="flex items-center justify-center space-x-2 mb-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-400">({product.reviews} reviews)</span>
                    </div>
                  </div>

                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <span className="text-3xl font-bold text-white">{product.price}</span>
                      <span className="text-lg text-gray-400 line-through">{product.originalPrice}</span>
                    </div>
                    <span className="text-sm text-green-400 font-semibold">
                      Save {Math.round((1 - parseInt(product.price.replace('$', '')) / parseInt(product.originalPrice.replace('$', ''))) * 100)}%
                    </span>
                  </div>

                  <div className="space-y-3 mb-6">
                    {product.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                    {product.features.length > 4 && (
                      <div className="text-sm text-gray-400 text-center">
                        +{product.features.length - 4} more features
                      </div>
                    )}
                  </div>

                  <div className="space-y-3">
                    <Link
                      to={`/${product.id}`}
                      className="w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                    >
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    <Link
                      to="/contact"
                      className="w-full inline-flex items-center justify-center px-4 py-3 border border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
                    >
                      Start Free Trial
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 to-purple-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses already using our micro SAAS solutions to streamline operations, 
              increase productivity, and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-gray-400">
              <p>Email: kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;
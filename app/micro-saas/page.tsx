'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Zap, CheckCircle, ArrowRight, Brain, Shield, BarChart, Star, Clock, Users, Cloud, Code, Database, Smartphone, Globe, Lock, FileText, Mail, Calendar, Target, Cpu, Settings, Monitor, Wifi, CreditCard, PieChart, Search, Filter, Download, Upload, Eye, AlertTriangle, CheckSquare, DollarSign, Award, Rocket, Sparkles } from 'lucide-react';

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
      icon: BarChart,
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
      originalPrice: '$199/month',
      users: '1,200+',
      popular: true,
      category: 'Analytics',
      link: '/zion-analytics-pro',
      marketPrice: '$199/month',
      savings: '75%'
    },
    {
      id: '2',
      icon: Brain,
      title: 'ZionChat AI',
      description: 'Intelligent customer support chatbot with natural language processing and multi-channel integration',
      features: [
        'Advanced NLP with 95% accuracy',
        'Multi-language support (50+ languages)',
        'Integration with 100+ platforms (Slack, Teams, WhatsApp)',
        'Custom knowledge base builder',
        'Sentiment analysis and mood detection',
        'Escalation to human agents',
        'Analytics and conversation insights',
        'Voice and text capabilities',
        'API for custom integrations',
        'Unlimited conversations'
      ],
      price: '$29/month',
      originalPrice: '$149/month',
      users: '850+',
      popular: false,
      category: 'AI & Chat',
      link: '/zion-chat-ai',
      marketPrice: '$149/month',
      savings: '80%'
    },
    {
      id: '3',
      icon: Shield,
      title: 'ZionSecurity Shield',
      description: 'Comprehensive cybersecurity monitoring and threat detection platform',
      features: [
        'Real-time threat monitoring',
        'Automated vulnerability scanning',
        'Incident response automation',
        'Compliance reporting (GDPR, HIPAA, SOX)',
        'Dark web monitoring',
        'Security awareness training',
        'Penetration testing tools',
        '24/7 security operations center',
        'Custom security policies',
        'Integration with existing security tools'
      ],
      price: '$79/month',
      originalPrice: '$299/month',
      users: '650+',
      popular: false,
      category: 'Security',
      link: '/zion-security-shield',
      marketPrice: '$299/month',
      savings: '74%'
    },
    {
      id: '4',
      icon: Cloud,
      title: 'ZionCloud Vault',
      description: 'Secure cloud backup and disaster recovery solution with enterprise-grade encryption',
      features: [
        'Automated backup scheduling',
        'End-to-end encryption (AES-256)',
        'Cross-platform sync (Windows, Mac, Linux)',
        'Version control and file history',
        'Disaster recovery planning',
        'Compliance with major standards',
        'Unlimited storage capacity',
        'Team collaboration features',
        'Mobile app for iOS and Android',
        '99.9% uptime guarantee'
      ],
      price: '$39/month',
      originalPrice: '$179/month',
      users: '1,100+',
      popular: false,
      category: 'Cloud & Storage',
      link: '/zion-cloud-vault',
      marketPrice: '$179/month',
      savings: '78%'
    },
    {
      id: '5',
      icon: FileText,
      title: 'ZionContent Studio',
      description: 'AI-powered content creation platform for blogs, social media, and marketing materials',
      features: [
        'AI content generation (blogs, articles, social posts)',
        'Multi-language content creation',
        'SEO optimization suggestions',
        'Brand voice customization',
        'Content calendar and scheduling',
        'Plagiarism detection',
        'Image and video generation',
        'Team collaboration tools',
        'Analytics and performance tracking',
        'Integration with major CMS platforms'
      ],
      price: '$59/month',
      originalPrice: '$249/month',
      users: '900+',
      popular: true,
      category: 'Content & Marketing',
      link: '/zion-content-studio',
      marketPrice: '$249/month',
      savings: '76%'
    },
    {
      id: '6',
      icon: Users,
      title: 'ZionCRM Intelligence',
      description: 'AI-enhanced customer relationship management with predictive analytics and automation',
      features: [
        'AI-powered lead scoring',
        'Automated follow-up sequences',
        'Predictive customer behavior analysis',
        'Email and SMS marketing automation',
        'Sales pipeline management',
        'Customer segmentation',
        'Integration with 500+ tools',
        'Custom reporting and dashboards',
        'Mobile app for sales teams',
        'Advanced analytics and insights'
      ],
      price: '$69/month',
      originalPrice: '$299/month',
      users: '750+',
      popular: false,
      category: 'CRM & Sales',
      link: '/zion-crm-intelligence',
      marketPrice: '$299/month',
      savings: '77%'
    }
  ];

  const categories = ['All', 'Analytics', 'AI & Chat', 'Security', 'Cloud & Storage', 'Content & Marketing', 'CRM & Sales'];

  const benefits = [
    {
      icon: Zap,
      title: 'Instant Setup',
      description: 'Get up and running in minutes with our one-click deployment'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with SOC 2 compliance and encryption'
    },
    {
      icon: Users,
      title: '24/7 Support',
      description: 'Round-the-clock technical support from our expert team'
    },
    {
      icon: BarChart,
      title: 'Proven Results',
      description: 'Join thousands of satisfied customers worldwide'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions | Zion Tech Group - Ready-to-Use Business Tools</title>
        <meta name="description" content="Discover our collection of micro SaaS solutions designed to solve specific business problems. AI-powered tools for analytics, CRM, security, and more." />
        <meta name="keywords" content="micro SaaS, business tools, AI solutions, analytics, CRM, security, cloud storage, content creation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/20 via-transparent to-transparent"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Micro SaaS Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Ready-to-use business tools that solve specific problems. No complex setup, 
                no lengthy implementation - just powerful solutions that work out of the box.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                >
                  Get Started Free
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <button className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  <Eye className="w-5 h-5 mr-2" />
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Choose Our Micro SaaS Solutions?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Built by experts, designed for businesses of all sizes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Our Micro SaaS Solutions
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Choose from our collection of powerful, ready-to-use business tools
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className={`bg-white/5 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 hover:border-cyan-400/30 relative ${
                  product.popular ? 'border-cyan-400/50 ring-2 ring-cyan-400/20' : 'border-white/10'
                }`}
              >
                {product.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <product.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{product.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{product.description}</p>
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <span className="text-2xl font-bold text-cyan-400">{product.price}</span>
                    {product.originalPrice && (
                      <>
                        <span className="text-lg text-gray-400 line-through">{product.originalPrice}</span>
                        <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">
                          Save {product.savings}
                        </span>
                      </>
                    )}
                  </div>
                  <div className="text-sm text-gray-400 mb-4">
                    Used by {product.users} businesses
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  {product.features.slice(0, 5).map((feature, index) => (
                    <div key={index} className="flex items-start text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                  {product.features.length > 5 && (
                    <div className="text-sm text-cyan-400">
                      +{product.features.length - 5} more features
                    </div>
                  )}
                </div>

                <div className="space-y-3">
                  <Link
                    to={product.link}
                    className="w-full py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center"
                  >
                    Try Free for 14 Days
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                  <button className="w-full py-2 border border-cyan-400 text-cyan-400 rounded-lg font-medium hover:bg-cyan-400 hover:text-white transition-all duration-300">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of businesses already using our micro SaaS solutions to streamline their operations and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
                >
                  <Clock className="w-5 h-5 mr-2" />
                  Schedule Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MicroSaasPage;
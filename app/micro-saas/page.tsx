'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Zap, Star, Users, TrendingUp, Shield, Cloud, BarChart3, MessageSquare, Brain, Code, Database, Smartphone, Globe, Lock, FileText, Mail, Calendar, Target, Cpu, Settings, Monitor, Wifi, Smartphone as Phone, CreditCard, PieChart, Search, Filter, Download, Upload, Eye, AlertTriangle, CheckSquare, Clock, DollarSign, Award, Rocket, Sparkles } from 'lucide-react';

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
      users: '10,000+',
      popular: true,
      category: 'Analytics',
      link: '/zion-analytics-pro',
      marketPrice: '$199/month',
      savings: '75%'
    },
    {
      id: '2',
      icon: MessageSquare,
      title: 'ZionChat AI',
      description: 'Intelligent customer support chatbot with natural language processing and multi-channel support',
      features: [
        'Advanced NLP with 95% accuracy',
        'Multi-language support (50+ languages)',
        'Integration with 100+ platforms',
        'Custom training on your data',
        'Live chat handoff to human agents',
        'Sentiment analysis and mood detection',
        'Voice and text conversation support',
        'Analytics and conversation insights',
        'API for custom integrations',
        '99.9% uptime SLA'
      ],
      price: '$29/month',
      originalPrice: '$59/month',
      users: '5,000+',
      popular: false,
      category: 'AI Chat',
      link: '/zion-chat-ai',
      marketPrice: '$149/month',
      savings: '80%'
    },
    {
      id: '3',
      icon: Shield,
      title: 'ZionSecurity Shield',
      description: 'Comprehensive cybersecurity monitoring and threat detection platform for small to medium businesses',
      features: [
        'Real-time threat monitoring and alerts',
        'Automated vulnerability scanning',
        'Compliance reporting (GDPR, HIPAA, SOX)',
        'Dark web monitoring for credential leaks',
        'Security awareness training modules',
        'Incident response automation',
        'Multi-factor authentication management',
        'Network security assessment',
        '24/7 security operations center',
        'Insurance-grade security reports'
      ],
      price: '$79/month',
      originalPrice: '$159/month',
      users: '2,500+',
      popular: true,
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
        'Automated daily backups with versioning',
        'End-to-end encryption (AES-256)',
        'Cross-platform support (Windows, Mac, Linux)',
        'Incremental backup technology',
        'Disaster recovery testing',
        'Compliance with major standards',
        'Unlimited storage capacity',
        'Point-in-time recovery',
        'Mobile app for file access',
        '99.99% data durability guarantee'
      ],
      price: '$19/month',
      originalPrice: '$39/month',
      users: '15,000+',
      popular: false,
      category: 'Backup',
      link: '/zion-cloud-vault',
      marketPrice: '$99/month',
      savings: '81%'
    },
    {
      id: '5',
      icon: FileText,
      title: 'ZionContent Studio',
      description: 'AI-powered content creation platform for blogs, social media, and marketing materials',
      features: [
        'AI content generation for multiple formats',
        'SEO optimization suggestions',
        'Brand voice consistency checking',
        'Plagiarism detection and originality scoring',
        'Multi-language content creation',
        'Image and video generation',
        'Content calendar and scheduling',
        'Team collaboration tools',
        'Performance analytics and insights',
        'Integration with major CMS platforms'
      ],
      price: '$39/month',
      originalPrice: '$79/month',
      users: '8,000+',
      popular: true,
      category: 'Content',
      link: '/zion-content-studio',
      marketPrice: '$199/month',
      savings: '80%'
    },
    {
      id: '6',
      icon: Users,
      title: 'ZionCRM Intelligence',
      description: 'AI-enhanced customer relationship management with predictive analytics and automation',
      features: [
        'AI-powered lead scoring and qualification',
        'Automated follow-up sequences',
        'Predictive customer lifetime value',
        'Churn prediction and prevention',
        'Email marketing automation',
        'Sales pipeline optimization',
        'Customer segmentation and targeting',
        'Integration with 500+ tools',
        'Advanced reporting and analytics',
        'Mobile CRM app'
      ],
      price: '$59/month',
      originalPrice: '$119/month',
      users: '6,000+',
      popular: false,
      category: 'CRM',
      link: '/zion-crm-intelligence',
      marketPrice: '$249/month',
      savings: '76%'
    }
  ];

  const categories = ['All', 'Analytics', 'AI Chat', 'Security', 'Backup', 'Content', 'CRM'];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | AI-Powered Business Tools</title>
        <meta name="description" content="Discover our collection of micro SaaS solutions designed to solve specific business problems with AI and automation. Affordable, scalable, and ready to use." />
        <meta name="keywords" content="micro SaaS, business tools, AI solutions, automation, productivity, analytics, CRM, content creation" />
      </Helmet>

      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Micro SaaS Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Powerful, AI-driven business tools designed to solve specific problems. 
                Affordable, scalable, and ready to transform your operations.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  <span>No Setup Fees</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  <span>Cancel Anytime</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  <span>Free Trial</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <div
                  key={product.id}
                  className={`bg-white/5 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 hover:scale-105 group ${
                    product.popular 
                      ? 'border-cyan-400/50 shadow-2xl shadow-cyan-500/20' 
                      : 'border-white/10 hover:border-cyan-400/30'
                  }`}
                >
                  {product.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                      product.popular 
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600' 
                        : 'bg-gradient-to-r from-purple-500 to-pink-600'
                    }`}>
                      <product.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2">{product.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{product.description}</p>
                    
                    <div className="flex items-center justify-center space-x-2 mb-4">
                      <span className="text-3xl font-bold text-white">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-lg text-gray-400 line-through">{product.originalPrice}</span>
                      )}
                    </div>
                    
                    {product.savings && (
                      <div className="inline-block bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium mb-4">
                        Save {product.savings}
                      </div>
                    )}
                    
                    <div className="text-sm text-gray-400 mb-6">
                      <div className="flex items-center justify-center">
                        <Users className="w-4 h-4 mr-2" />
                        <span>{product.users} users</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    {product.features.slice(0, 6).map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                    {product.features.length > 6 && (
                      <div className="text-sm text-cyan-400 font-medium">
                        +{product.features.length - 6} more features
                      </div>
                    )}
                  </div>

                  <div className="space-y-3">
                    <Link
                      to={product.link}
                      className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 flex items-center justify-center ${
                        product.popular
                          ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white'
                          : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                      }`}
                    >
                      Start Free Trial
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                    
                    <button className="w-full py-2 px-6 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our micro SaaS solutions to drive growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link
                to="/consultation"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
              >
                Schedule Consultation
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
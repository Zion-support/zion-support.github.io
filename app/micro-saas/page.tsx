'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Users, TrendingUp, Brain, Globe, Cloud, BarChart3, MessageSquare, CreditCard, Calendar, FileText, Search, ShoppingCart, Smartphone, Settings, Target, Database, Lock, Mail, Phone, MapPin } from 'lucide-react';

interface MicroSaasProduct {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  price: string;
  users: string;
  popular: boolean;
  category: string;
  benefits: string[];
  pricing: {
    monthly: string;
    yearly: string;
    setup: string;
  };
}

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const products: MicroSaasProduct[] = [
    {
      id: '1',
      icon: '📊',
      title: 'Zion Analytics Pro',
      description: 'Advanced real-time business intelligence and analytics platform with AI-powered insights',
      features: [
        'Real-time data visualization with 50+ chart types',
        'AI-powered predictive analytics and forecasting',
        'Custom dashboard builder with drag-and-drop interface',
        'Advanced data connectors (Salesforce, HubSpot, Google Analytics)',
        'Automated report generation and email delivery',
        'Multi-tenant architecture for agencies',
        'API access for custom integrations',
        'White-label solution available'
      ],
      price: '$89/month',
      users: 'Up to 25 users',
      popular: true,
      category: 'Analytics',
      benefits: ['Increase data-driven decisions by 300%', 'Reduce reporting time by 80%', 'Real-time insights'],
      pricing: {
        monthly: '$89',
        yearly: '$79',
        setup: 'Free'
      }
    },
    {
      id: '2',
      icon: '💬',
      title: 'Zion Chat AI',
      description: 'Next-generation AI customer support platform with advanced NLP and sentiment analysis',
      features: [
        'GPT-4 powered conversational AI with custom training',
        'Multi-channel support (Web, WhatsApp, SMS, Email)',
        'Advanced sentiment analysis and emotion detection',
        'Automated ticket routing and escalation',
        'Live agent handoff with context preservation',
        'Multi-language support (50+ languages)',
        'Advanced analytics and conversation insights',
        'CRM integration and lead qualification'
      ],
      price: '$149/month',
      users: 'Up to 50 users',
      popular: true,
      category: 'Communication',
      benefits: ['Reduce support costs by 60%', '24/7 customer service', '95% customer satisfaction'],
      pricing: {
        monthly: '$149',
        yearly: '$129',
        setup: '$199'
      }
    },
    {
      id: '3',
      icon: '🔐',
      title: 'Zion Security Shield',
      description: 'Enterprise-grade cybersecurity monitoring with AI threat detection and automated response',
      features: [
        'AI-powered threat detection and behavioral analysis',
        'Real-time security monitoring across all endpoints',
        'Automated incident response and remediation',
        'Compliance reporting (SOC2, GDPR, HIPAA)',
        'Penetration testing and vulnerability assessments',
        'Security awareness training platform',
        'Dark web monitoring and breach detection',
        '24/7 SOC (Security Operations Center) support'
      ],
      price: '$299/month',
      users: 'Up to 100 users',
      popular: false,
      category: 'Security',
      benefits: ['Prevent 99.9% of cyber threats', 'Compliance guaranteed', '24/7 monitoring'],
      pricing: {
        monthly: '$299',
        yearly: '$249',
        setup: '$499'
      }
    },
    {
      id: '4',
      icon: '☁️',
      title: 'Zion Cloud Vault',
      description: 'Intelligent cloud backup and disaster recovery with AI-powered optimization',
      features: [
        'AI-optimized backup scheduling and deduplication',
        'Cross-cloud backup (AWS, Azure, GCP, OneDrive)',
        'Instant disaster recovery with RTO < 15 minutes',
        'Advanced version control and file history',
        'End-to-end encryption with zero-knowledge architecture',
        'Compliance and audit trail reporting',
        'Automated testing and recovery validation',
        'Global CDN for fast data access'
      ],
      price: '$79/month',
      users: 'Up to 30 users',
      popular: false,
      category: 'Storage',
      benefits: ['99.99% uptime guarantee', 'Instant recovery', 'Unlimited storage'],
      pricing: {
        monthly: '$79',
        yearly: '$69',
        setup: 'Free'
      }
    },
    {
      id: '5',
      icon: '📈',
      title: 'Zion Performance AI',
      description: 'Advanced application performance monitoring with AI-powered optimization recommendations',
      features: [
        'Real-time APM with distributed tracing',
        'AI-powered performance anomaly detection',
        'Automated optimization recommendations',
        'Error tracking and crash reporting',
        'Uptime monitoring with global checkpoints',
        'Performance budget tracking and alerts',
        'Custom metrics and business KPIs',
        'Integration with CI/CD pipelines'
      ],
      price: '$129/month',
      users: 'Up to 40 users',
      popular: false,
      category: 'Monitoring',
      benefits: ['Improve performance by 40%', 'Reduce downtime by 90%', 'Real-time alerts'],
      pricing: {
        monthly: '$129',
        yearly: '$109',
        setup: '$99'
      }
    },
    {
      id: '6',
      icon: '🤖',
      title: 'Zion AI Workflow',
      description: 'Intelligent business process automation with custom AI models and workflow optimization',
      features: [
        'No-code workflow builder with AI assistance',
        'Custom AI model training and deployment',
        'Advanced task automation and scheduling',
        'Integration with 500+ business applications',
        'Document processing and data extraction',
        'Predictive analytics and decision support',
        'Multi-tenant workspace management',
        'Advanced reporting and analytics dashboard'
      ],
      price: '$199/month',
      users: 'Up to 75 users',
      popular: true,
      category: 'AI',
      benefits: ['Automate 80% of repetitive tasks', 'Custom AI models', '500+ integrations'],
      pricing: {
        monthly: '$199',
        yearly: '$169',
        setup: '$299'
      }
    },
    {
      id: '7',
      icon: '📧',
      title: 'Zion Email Marketing AI',
      description: 'AI-powered email marketing platform with advanced segmentation and personalization',
      features: [
        'AI-powered email content generation and optimization',
        'Advanced customer segmentation and targeting',
        'A/B testing with statistical significance',
        'Behavioral triggers and automated campaigns',
        'Advanced analytics and ROI tracking',
        'Email deliverability optimization',
        'GDPR compliance and consent management',
        'Integration with major e-commerce platforms'
      ],
      price: '$99/month',
      users: 'Up to 60 users',
      popular: false,
      category: 'Marketing',
      benefits: ['Increase open rates by 45%', 'AI content generation', 'Advanced analytics'],
      pricing: {
        monthly: '$99',
        yearly: '$79',
        setup: 'Free'
      }
    },
    {
      id: '8',
      icon: '💰',
      title: 'Zion Finance AI',
      description: 'Intelligent financial management and accounting automation platform',
      features: [
        'AI-powered expense categorization and reconciliation',
        'Automated invoice processing and approval workflows',
        'Real-time financial reporting and forecasting',
        'Tax compliance and preparation assistance',
        'Multi-currency support and exchange rate tracking',
        'Integration with banks and payment processors',
        'Advanced fraud detection and prevention',
        'Custom financial dashboards and KPIs'
      ],
      price: '$179/month',
      users: 'Up to 35 users',
      popular: false,
      category: 'Finance',
      benefits: ['Save 20 hours/week on accounting', 'AI expense categorization', 'Real-time reporting'],
      pricing: {
        monthly: '$179',
        yearly: '$149',
        setup: '$199'
      }
    },
    {
      id: '9',
      icon: '👥',
      title: 'Zion HR Management',
      description: 'Comprehensive human resources management with AI-powered insights and automation',
      features: [
        'AI-powered candidate screening and matching',
        'Employee onboarding and offboarding automation',
        'Performance management and review cycles',
        'Time tracking and attendance management',
        'Benefits administration and enrollment',
        'Learning management system (LMS)',
        'Employee engagement surveys and analytics',
        'Compliance tracking and reporting'
      ],
      price: '$159/month',
      users: 'Up to 100 users',
      popular: false,
      category: 'HR',
      benefits: ['Reduce hiring time by 50%', 'AI candidate matching', 'Complete HR automation'],
      pricing: {
        monthly: '$159',
        yearly: '$129',
        setup: '$149'
      }
    },
    {
      id: '10',
      icon: '🛒',
      title: 'Zion E-commerce AI',
      description: 'AI-powered e-commerce platform with advanced personalization and optimization',
      features: [
        'AI-powered product recommendations',
        'Dynamic pricing optimization',
        'Inventory management and demand forecasting',
        'Customer behavior analysis and segmentation',
        'Automated marketing campaigns',
        'Multi-channel selling (web, mobile, social)',
        'Advanced analytics and reporting',
        'Integration with major payment gateways'
      ],
      price: '$249/month',
      users: 'Up to 50 users',
      popular: true,
      category: 'E-commerce',
      benefits: ['Increase sales by 35%', 'AI recommendations', 'Multi-channel selling'],
      pricing: {
        monthly: '$249',
        yearly: '$199',
        setup: '$399'
      }
    },
    {
      id: '11',
      icon: '📱',
      title: 'Zion Mobile App Builder',
      description: 'No-code mobile app development platform with AI-powered design and optimization',
      features: [
        'Drag-and-drop app builder with AI assistance',
        'Cross-platform development (iOS, Android)',
        'AI-powered UI/UX design recommendations',
        'Real-time preview and testing',
        'App store optimization and publishing',
        'Push notifications and analytics',
        'Backend integration and API management',
        'White-label app development'
      ],
      price: '$189/month',
      users: 'Up to 20 users',
      popular: false,
      category: 'Development',
      benefits: ['Build apps 10x faster', 'No coding required', 'AI design assistance'],
      pricing: {
        monthly: '$189',
        yearly: '$159',
        setup: '$299'
      }
    },
    {
      id: '12',
      icon: '🌐',
      title: 'Zion SEO Optimizer',
      description: 'AI-powered SEO optimization platform with advanced keyword research and content optimization',
      features: [
        'AI-powered keyword research and analysis',
        'Content optimization and suggestions',
        'Technical SEO auditing and recommendations',
        'Competitor analysis and tracking',
        'Local SEO optimization',
        'Link building and outreach automation',
        'Ranking tracking and reporting',
        'Integration with Google Search Console'
      ],
      price: '$119/month',
      users: 'Up to 30 users',
      popular: false,
      category: 'SEO',
      benefits: ['Improve rankings by 200%', 'AI content optimization', 'Competitor analysis'],
      pricing: {
        monthly: '$119',
        yearly: '$99',
        setup: '$149'
      }
    },
    {
      id: '13',
      icon: '📋',
      title: 'Zion Project Manager',
      description: 'AI-powered project management with intelligent resource allocation and progress tracking',
      features: [
        'AI-powered project planning and resource allocation',
        'Gantt charts and timeline visualization',
        'Team collaboration and communication tools',
        'Time tracking and productivity analytics',
        'Risk assessment and mitigation planning',
        'Custom workflows and automation',
        'Integration with 100+ tools',
        'Mobile app for on-the-go management'
      ],
      price: '$139/month',
      users: 'Up to 50 users',
      popular: false,
      category: 'Productivity',
      benefits: ['Complete projects 30% faster', 'AI resource allocation', '100+ integrations'],
      pricing: {
        monthly: '$139',
        yearly: '$119',
        setup: '$199'
      }
    },
    {
      id: '14',
      icon: '🎯',
      title: 'Zion Lead Generator',
      description: 'AI-powered lead generation and qualification platform with automated outreach',
      features: [
        'AI-powered lead scoring and qualification',
        'Automated email and LinkedIn outreach',
        'Lead database with 50M+ contacts',
        'Intent data and behavioral tracking',
        'A/B testing for outreach campaigns',
        'CRM integration and lead routing',
        'Compliance with GDPR and CAN-SPAM',
        'Advanced analytics and ROI tracking'
      ],
      price: '$179/month',
      users: 'Up to 25 users',
      popular: true,
      category: 'Sales',
      benefits: ['Generate 5x more leads', 'AI lead scoring', 'Automated outreach'],
      pricing: {
        monthly: '$179',
        yearly: '$149',
        setup: '$249'
      }
    },
    {
      id: '15',
      icon: '📊',
      title: 'Zion Survey Builder',
      description: 'Advanced survey creation and analysis with AI-powered insights and recommendations',
      features: [
        'Drag-and-drop survey builder with AI assistance',
        'AI-powered question suggestions and optimization',
        'Advanced analytics and sentiment analysis',
        'Custom themes and branding options',
        'Multi-channel distribution (email, social, web)',
        'Real-time response tracking and notifications',
        'Data export and integration capabilities',
        'White-label solution for agencies'
      ],
      price: '$89/month',
      users: 'Up to 40 users',
      popular: false,
      category: 'Research',
      benefits: ['Get 3x more responses', 'AI question optimization', 'Advanced analytics'],
      pricing: {
        monthly: '$89',
        yearly: '$69',
        setup: 'Free'
      }
    }
  ];

  const categories = ['All', 'Analytics', 'Communication', 'Security', 'Storage', 'Monitoring', 'AI', 'Marketing', 'Finance', 'HR', 'E-commerce', 'Development', 'SEO', 'Productivity', 'Sales', 'Research'];

  const benefits = [
    'Quick setup and deployment (5 minutes)',
    'Scalable pricing plans for all business sizes',
    '24/7 customer support and technical assistance',
    'Regular feature updates and improvements',
    'Enterprise-grade security and compliance',
    'Easy integration with existing systems',
    'Free trial and money-back guarantee',
    'White-label solutions available'
  ];

  const stats = [
    { icon: <Users className="w-8 h-8 text-blue-500" />, value: '50K+', label: 'Active Users' },
    { icon: <TrendingUp className="w-8 h-8 text-green-500" />, value: '99.9%', label: 'Uptime' },
    { icon: <Shield className="w-8 h-8 text-purple-500" />, value: '100%', label: 'Secure' },
    { icon: <Zap className="w-8 h-8 text-orange-500" />, value: '5min', label: 'Setup Time' }
  ];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | 15+ AI-Powered Business Tools</title>
        <meta name="description" content="Discover our comprehensive collection of 15+ micro SaaS solutions powered by AI. From analytics to e-commerce, find the perfect tool for your business needs. Starting at $79/month." />
        <meta name="keywords" content="micro SaaS, AI tools, business software, analytics dashboard, project management, security monitoring, e-commerce, CRM, HR management" />
      </Helmet>

      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">SaaS</span> Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Ready-to-use business tools that solve specific problems. No complex setup, no long-term commitments - just powerful AI-powered solutions that work.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Our Micro SaaS Products</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our collection of specialized business tools designed to solve specific challenges.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${
                    product.popular
                      ? 'border-cyan-400 shadow-2xl shadow-cyan-500/25 scale-105'
                      : 'border-white/20'
                  } hover:border-cyan-400 transition-all duration-300 group`}
                >
                  {product.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                        <Star className="w-4 h-4 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-4">{product.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-2">{product.title}</h3>
                    <p className="text-gray-300 mb-4">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-3xl font-bold text-white">{product.price}</span>
                        <div className="text-sm text-gray-400">{product.users}</div>
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {product.features.slice(0, 6).map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                    {product.features.length > 6 && (
                      <li className="text-cyan-400 text-sm font-medium">
                        +{product.features.length - 6} more features
                      </li>
                    )}
                  </ul>

                  <div className="space-y-3">
                    <div className="text-center">
                      <div className="text-cyan-400 font-semibold text-sm mb-2">Key Benefits:</div>
                      <div className="text-xs text-gray-400">
                        {product.benefits.join(' • ')}
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-3">
                      <button className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600 transform hover:scale-105">
                        Start Free Trial
                      </button>
                      <button className="w-full py-2 px-6 rounded-lg font-semibold transition-all duration-300 bg-white/10 text-white border border-white/20 hover:bg-white/20">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No products found in this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Why Choose Our Micro SaaS Solutions?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We've designed our micro SaaS products to be simple, powerful, and accessible to businesses of all sizes.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">How It Works</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Getting started with our micro SaaS solutions is simple and straightforward.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Choose Your Solution</h3>
                <p className="text-gray-300">Browse our collection and select the micro SaaS product that fits your needs.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Start Free Trial</h3>
                <p className="text-gray-300">Sign up for a free trial and explore all features without any commitment.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Scale & Grow</h3>
                <p className="text-gray-300">Upgrade when you're ready and scale your usage as your business grows.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Choose the micro SaaS solution that fits your business needs. Start with a free trial and scale as you grow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 inline-flex items-center justify-center"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Start Free Trial
                </a>
                <a
                  href="/pricing"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300"
                >
                  View All Plans
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MicroSaasPage;

'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Zap, Star, Users, TrendingUp, Shield, Cloud, BarChart3, MessageSquare, Brain, Code, Database, Smartphone, Globe, Lock, FileText, Settings, Target, Cpu, Sparkles, Phone, Mail, MapPin } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

interface MicroSaasProduct {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  features: string[];
  price: string;
  users: string;
  popular: boolean;
  category: string;
  link: string;
  marketPrice: string;
  benefits: string[];
}

const MicroSaasPage: React.FC = () => {
  const products: MicroSaasProduct[] = [
    {
      id: '1',
      icon: BarChart3,
      title: 'AI Analytics Pro',
      description: 'Advanced AI-powered business analytics with predictive insights and real-time dashboards',
      features: [
        'Real-time data visualization with AI insights',
        'Predictive analytics and forecasting',
        'Custom report generation with AI assistance',
        'Multi-platform integration (50+ tools)',
        'Advanced filtering and drill-down capabilities',
        'Automated anomaly detection',
        'White-label reporting',
        'API access and webhooks'
      ],
      price: '$97/month',
      users: 'Up to 10 users',
      popular: true,
      category: 'Analytics',
      link: 'https://ziontechgroup.com/ai-analytics-pro',
      marketPrice: '$297/month',
      benefits: ['Save 67% vs competitors', 'ROI within 30 days', '24/7 AI monitoring']
    },
    {
      id: '2',
      icon: MessageSquare,
      title: 'Smart Chat Suite',
      description: 'AI-powered customer support with multilingual capabilities and advanced automation',
      features: [
        'Advanced AI chatbot with GPT-4 integration',
        'Live chat with human handoff',
        'Multi-language support (50+ languages)',
        'Sentiment analysis and mood tracking',
        'Ticket management with AI prioritization',
        'Knowledge base with AI search',
        'Voice and video chat support',
        'Advanced analytics and reporting'
      ],
      price: '$147/month',
      users: 'Up to 25 users',
      popular: true,
      category: 'Communication',
      link: 'https://ziontechgroup.com/smart-chat-suite',
      marketPrice: '$397/month',
      benefits: ['90% faster response times', '24/7 availability', 'Multilingual support']
    },
    {
      id: '3',
      icon: Shield,
      title: 'CyberGuard Pro',
      description: 'Enterprise-grade cybersecurity monitoring with AI threat detection and compliance management',
      features: [
        'Real-time threat detection with AI',
        'Automated security scans and vulnerability assessment',
        'Compliance reporting (SOC2, GDPR, HIPAA)',
        'Incident response automation',
        'Security dashboard with threat intelligence',
        'Penetration testing automation',
        'Security awareness training',
        '24/7 SOC monitoring'
      ],
      price: '$297/month',
      users: 'Up to 50 users',
      popular: false,
      category: 'Security',
      link: 'https://ziontechgroup.com/cyberguard-pro',
      marketPrice: '$797/month',
      benefits: ['99.9% threat detection accuracy', 'Compliance ready', '24/7 monitoring']
    },
    {
      id: '4',
      icon: Cloud,
      title: 'CloudSync Enterprise',
      description: 'Advanced cloud backup and disaster recovery with AI-powered optimization',
      features: [
        'Automated intelligent backups',
        'Cross-platform sync with conflict resolution',
        'Version control with AI-powered deduplication',
        'Disaster recovery with RTO < 1 hour',
        'End-to-end encryption (AES-256)',
        'Compliance and audit trails',
        'Multi-cloud redundancy',
        'AI-powered storage optimization'
      ],
      price: '$197/month',
      users: 'Up to 100 users',
      popular: false,
      category: 'Storage',
      link: 'https://ziontechgroup.com/cloudsync-enterprise',
      marketPrice: '$497/month',
      benefits: ['99.99% uptime guarantee', 'Unlimited storage', 'AI optimization']
    },
    {
      id: '5',
      icon: Zap,
      title: 'Performance Optimizer',
      description: 'AI-powered application performance monitoring with automated optimization recommendations',
      features: [
        'Real-time performance monitoring',
        'AI-powered error tracking and analysis',
        'Uptime monitoring with global checks',
        'Performance insights with recommendations',
        'Automated alert management',
        'Load testing and capacity planning',
        'Database performance optimization',
        'CDN optimization suggestions'
      ],
      price: '$127/month',
      users: 'Up to 30 users',
      popular: false,
      category: 'Monitoring',
      link: 'https://ziontechgroup.com/performance-optimizer',
      marketPrice: '$327/month',
      benefits: ['50% faster load times', 'Proactive monitoring', 'AI recommendations']
    },
    {
      id: '6',
      icon: Brain,
      title: 'AI Workflow Engine',
      description: 'Intelligent automation platform with custom AI models and advanced workflow orchestration',
      features: [
        'Visual workflow builder with AI assistance',
        'Custom AI model training and deployment',
        'Advanced task scheduling and orchestration',
        '500+ pre-built integrations',
        'Natural language workflow creation',
        'Process mining and optimization',
        'ROI tracking and analytics',
        'White-label automation solutions'
      ],
      price: '$397/month',
      users: 'Up to 100 users',
      popular: true,
      category: 'AI',
      link: 'https://ziontechgroup.com/ai-workflow-engine',
      marketPrice: '$997/month',
      benefits: ['80% process automation', 'Custom AI models', 'Unlimited workflows']
    },
    {
      id: '7',
      icon: Database,
      title: 'Data Intelligence Hub',
      description: 'Advanced data management and intelligence platform with AI-powered insights',
      features: [
        'Unified data warehouse with AI ETL',
        'Real-time data processing and streaming',
        'AI-powered data quality management',
        'Advanced data visualization and BI',
        'Machine learning model deployment',
        'Data governance and compliance',
        'API management and data sharing',
        'Predictive data analytics'
      ],
      price: '$247/month',
      users: 'Up to 75 users',
      popular: false,
      category: 'Data',
      link: 'https://ziontechgroup.com/data-intelligence-hub',
      marketPrice: '$647/month',
      benefits: ['Unified data platform', 'AI-powered insights', 'Real-time processing']
    },
    {
      id: '8',
      icon: Smartphone,
      title: 'Mobile App Builder',
      description: 'No-code mobile app development platform with AI assistance and advanced features',
      features: [
        'Drag-and-drop app builder with AI',
        'Native iOS and Android apps',
        'Real-time preview and testing',
        'Advanced UI/UX components',
        'Backend-as-a-Service integration',
        'Push notifications and analytics',
        'App store deployment assistance',
        'White-label app solutions'
      ],
      price: '$197/month',
      users: 'Up to 20 users',
      popular: false,
      category: 'Development',
      link: 'https://ziontechgroup.com/mobile-app-builder',
      marketPrice: '$497/month',
      benefits: ['No-code development', 'Native performance', 'Quick deployment']
    },
    {
      id: '9',
      icon: Globe,
      title: 'Website Optimizer Pro',
      description: 'AI-powered website optimization with performance monitoring and SEO automation',
      features: [
        'AI-powered SEO optimization',
        'Performance monitoring and optimization',
        'A/B testing with AI insights',
        'Content optimization suggestions',
        'Core Web Vitals monitoring',
        'Automated image optimization',
        'CDN integration and management',
        'Conversion rate optimization'
      ],
      price: '$97/month',
      users: 'Up to 15 users',
      popular: false,
      category: 'SEO',
      link: 'https://ziontechgroup.com/website-optimizer-pro',
      marketPrice: '$297/month',
      benefits: ['50% faster websites', 'Better SEO rankings', 'Higher conversions']
    },
    {
      id: '10',
      icon: FileText,
      title: 'Document AI Processor',
      description: 'Intelligent document processing with OCR, AI analysis, and automated workflows',
      features: [
        'Advanced OCR with 99% accuracy',
        'AI-powered document classification',
        'Automated data extraction',
        'Document workflow automation',
        'Multi-format support (PDF, Word, Excel)',
        'Compliance and audit trails',
        'API integration capabilities',
        'Custom AI model training'
      ],
      price: '$147/month',
      users: 'Up to 40 users',
      popular: false,
      category: 'Document',
      link: 'https://ziontechgroup.com/document-ai-processor',
      marketPrice: '$397/month',
      benefits: ['99% OCR accuracy', 'Automated processing', 'Custom AI models']
    },
    {
      id: '11',
      icon: Target,
      title: 'Marketing Automation Suite',
      description: 'Comprehensive marketing automation with AI-powered personalization and analytics',
      features: [
        'AI-powered email marketing campaigns',
        'Advanced lead scoring and nurturing',
        'Social media automation',
        'Personalized content recommendations',
        'Marketing analytics and ROI tracking',
        'A/B testing with AI optimization',
        'CRM integration and synchronization',
        'White-label marketing solutions'
      ],
      price: '$197/month',
      users: 'Up to 50 users',
      popular: true,
      category: 'Marketing',
      link: 'https://ziontechgroup.com/marketing-automation-suite',
      marketPrice: '$497/month',
      benefits: ['300% higher engagement', 'AI personalization', 'Complete automation']
    },
    {
      id: '12',
      icon: Settings,
      title: 'IT Operations Center',
      description: 'Comprehensive IT operations management with AI monitoring and automation',
      features: [
        'AI-powered infrastructure monitoring',
        'Automated incident response',
        'IT asset management and tracking',
        'Service desk automation',
        'Change management workflows',
        'Compliance monitoring and reporting',
        'Performance optimization recommendations',
        '24/7 AI-powered support'
      ],
      price: '$297/month',
      users: 'Up to 100 users',
      popular: false,
      category: 'IT Operations',
      link: 'https://ziontechgroup.com/it-operations-center',
      marketPrice: '$797/month',
      benefits: ['90% faster incident resolution', 'Proactive monitoring', 'Complete automation']
    }
  ];

  const categories = ['All', 'Analytics', 'Communication', 'Security', 'Storage', 'Monitoring', 'AI', 'Data', 'Development', 'SEO', 'Document', 'Marketing', 'IT Operations'];

  const benefits = [
    'AI-powered automation and insights',
    'Enterprise-grade security and compliance',
    '24/7 expert support and monitoring',
    'Regular updates with new AI features',
    '99.9% uptime guarantee',
    'Easy integration with 500+ tools',
    'White-label and custom solutions',
    'ROI within 30 days guarantee'
  ];

  const stats = [
    { icon: <Users className="w-8 h-8 text-cyan-400" />, value: '50K+', label: 'Active Users' },
    { icon: <TrendingUp className="w-8 h-8 text-green-400" />, value: '99.9%', label: 'Uptime' },
    { icon: <Shield className="w-8 h-8 text-purple-400" />, value: '100%', label: 'Secure' },
    { icon: <Zap className="w-8 h-8 text-orange-400" />, value: '2min', label: 'Setup Time' }
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | AI-Powered Business Tools</title>
        <meta name="description" content="Discover our collection of AI-powered micro SaaS solutions designed to solve specific business problems. Enterprise-grade security, quick setup, competitive pricing." />
        <meta name="keywords" content="micro SaaS, AI business tools, analytics, customer chat, security, cloud backup, performance monitoring, AI automation" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,255,255,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            AI-Powered
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"> Micro SaaS</span>
            <br />Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Enterprise-grade micro SaaS tools powered by AI. Solve specific business problems with intelligent automation, 
            advanced analytics, and cutting-edge technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://ziontechgroup.com/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Started Free
            </a>
            <a
              href="https://ziontechgroup.com/pricing"
              className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-bold py-4 px-8 rounded-lg transition-all duration-300"
            >
              View Pricing
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20">
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
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
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
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
            {selectedCategory === 'All' ? 'All Products' : `${selectedCategory} Products`}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className={`glass-card p-8 hover:bg-white/10 transition-all duration-300 group relative overflow-hidden ${product.popular ? 'ring-2 ring-cyan-400 shadow-lg shadow-cyan-400/25' : ''}`}>
                {product.popular && (
                  <div className="absolute top-4 right-4">
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Popular
                    </div>
                  </div>
                )}
                
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <product.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{product.title}</h3>
                  <p className="text-gray-300 mb-4">{product.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-3xl font-bold text-cyan-400">{product.price}</span>
                      <span className="text-lg text-gray-400 line-through ml-2">{product.marketPrice}</span>
                    </div>
                    <div className="text-sm text-gray-400">
                      <Users className="w-4 h-4 inline mr-1" />
                      {product.users}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.benefits.map((benefit, index) => (
                      <span key={index} className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {product.features.slice(0, 5).map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                  {product.features.length > 5 && (
                    <li className="text-cyan-400 text-sm font-medium">
                      +{product.features.length - 5} more features
                    </li>
                  )}
                </ul>

                <div className="space-y-3">
                  <a
                    href={product.link}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                  >
                    Start Free Trial
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                  <a
                    href="https://ziontechgroup.com/contact"
                    className="w-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 py-3 px-6 rounded-lg font-medium transition-all duration-300 text-center block"
                  >
                    Contact Sales
                  </a>
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
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">Why Choose Our Micro SaaS?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">Get in Touch</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
                <p className="text-gray-300">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 backdrop-blur-sm rounded-3xl p-12 border border-cyan-400/20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Choose from our collection of AI-powered micro SaaS solutions and start solving your business problems today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="https://ziontechgroup.com/pricing"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-bold py-4 px-8 rounded-lg transition-all duration-300"
              >
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MicroSaasPage;
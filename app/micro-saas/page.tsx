'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  BarChart3,
  MessageSquare,
  FileText,
  Target,
  Shield,
  Cloud,
  Brain,
  Zap,
  Users,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Search,
  Filter,
  Star,
  Clock,
  Globe,
  Lock,
  Smartphone,
  Database,
  Settings,
  Headphones,
  Code,
  Monitor,
  Wifi,
  Server,
  Package,
  Mic,
  Eye,
  Calendar,
  Mail,
  Phone,
  MapPin,
  Heart,
  TrendingUp,
  ShoppingCart,
  Cpu,
  Workflow,
  MessageCircle,
  CheckSquare,
  FileText as FileTextIcon,
  Box,
  Link as LinkIcon
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const MicroSaasPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPricing, setSelectedPricing] = useState('all');

  const microSaasServices = [
    // AI-Powered Micro SaaS
    {
      icon: Brain,
      title: 'Zion AI Content Studio',
      description: 'AI-powered content creation platform that generates high-quality blog posts, social media content, and marketing materials in seconds.',
      category: 'ai',
      pricing: 'premium',
      features: [
        'GPT-4 Powered Content Generation',
        'Multi-language Support (50+ languages)',
        'SEO Optimization Built-in',
        'Brand Voice Customization',
        'Plagiarism Detection',
        'Content Calendar Integration',
        'Social Media Auto-posting',
        'Analytics & Performance Tracking'
      ],
      price: '$49/month',
      marketPrice: '$99-299/month',
      benefits: [
        'Save 90% content creation time',
        'Increase engagement by 300%',
        'Consistent brand voice',
        'SEO-optimized content'
      ],
      link: 'https://ziontechgroup.com/ai-content-studio',
      rating: 4.9,
      users: '2,500+',
      launchDate: '2024-01-15'
    },
    {
      icon: MessageSquare,
      title: 'Zion Chat AI Pro',
      description: 'Advanced AI customer support platform with natural language processing, sentiment analysis, and multi-channel support.',
      category: 'ai',
      pricing: 'premium',
      features: [
        'GPT-4 Powered Conversations',
        'Multi-channel Support (Web, Email, SMS)',
        'Sentiment Analysis & Mood Detection',
        'Automated Ticket Routing',
        'Live Agent Handoff',
        'Knowledge Base Integration',
        'Custom Bot Training',
        'Advanced Analytics Dashboard'
      ],
      price: '$99/month',
      marketPrice: '$199-599/month',
      benefits: [
        '24/7 customer support',
        'Reduce response time by 95%',
        'Increase customer satisfaction by 200%',
        'Generate qualified leads'
      ],
      link: 'https://ziontechgroup.com/chat-ai-pro',
      rating: 4.8,
      users: '1,800+',
      launchDate: '2024-02-01'
    },
    {
      icon: BarChart3,
      title: 'Zion Analytics Intelligence',
      description: 'AI-powered business intelligence platform that transforms raw data into actionable insights with predictive analytics.',
      category: 'ai',
      pricing: 'premium',
      features: [
        'Real-time Data Visualization',
        'AI-powered Predictive Analytics',
        'Custom Dashboard Builder',
        'Advanced Data Connectors',
        'Automated Report Generation',
        'Anomaly Detection',
        'Multi-tenant Architecture',
        'API Integration'
      ],
      price: '$79/month',
      marketPrice: '$149-499/month',
      benefits: [
        'Data-driven decision making',
        'Predict future trends',
        'Automated reporting',
        'ROI optimization'
      ],
      link: 'https://ziontechgroup.com/analytics-intelligence',
      rating: 4.7,
      users: '3,200+',
      launchDate: '2024-01-20'
    },
    {
      icon: FileText,
      title: 'Zion Invoice Genius',
      description: 'AI-powered invoice generation and management system with automated billing, payment tracking, and financial insights.',
      category: 'business',
      pricing: 'standard',
      features: [
        'AI-powered Invoice Generation',
        'Automated Recurring Billing',
        'Multi-currency Support',
        'Payment Tracking & Reminders',
        'Tax Calculation & Compliance',
        'Client Portal & Self-service',
        'Financial Analytics',
        'Integration with 50+ Payment Gateways'
      ],
      price: '$29/month',
      marketPrice: '$59-199/month',
      benefits: [
        'Save 90% invoice creation time',
        'Reduce payment delays by 60%',
        'Automated follow-ups',
        'Professional branded invoices'
      ],
      link: 'https://ziontechgroup.com/invoice-genius',
      rating: 4.6,
      users: '4,100+',
      launchDate: '2024-01-10'
    },
    {
      icon: Target,
      title: 'Zion Lead Magnet Pro',
      description: 'Advanced lead generation and qualification platform with AI-powered prospect scoring and automated nurturing campaigns.',
      category: 'marketing',
      pricing: 'premium',
      features: [
        'AI-powered Lead Scoring',
        'Multi-channel Lead Capture',
        'Automated Lead Nurturing',
        'CRM Integration (Salesforce, HubSpot)',
        'Advanced Analytics & ROI Tracking',
        'A/B Testing for Campaigns',
        'Email & SMS Automation',
        'Social Media Lead Generation'
      ],
      price: '$89/month',
      marketPrice: '$179-499/month',
      benefits: [
        'Increase qualified leads by 300%',
        'Automated lead nurturing',
        'Better conversion rates',
        'ROI optimization'
      ],
      link: 'https://ziontechgroup.com/lead-magnet-pro',
      rating: 4.8,
      users: '2,300+',
      launchDate: '2024-02-15'
    },
    {
      icon: Shield,
      title: 'Zion Security Shield',
      description: 'Comprehensive cybersecurity monitoring and threat detection platform designed for small to medium businesses.',
      category: 'security',
      pricing: 'premium',
      features: [
        'Real-time Threat Monitoring',
        'Vulnerability Scanning',
        'Incident Response Automation',
        'Security Analytics Dashboard',
        'Compliance Reporting (GDPR, HIPAA)',
        'Employee Security Training',
        'Dark Web Monitoring',
        '24/7 Security Operations Center'
      ],
      price: '$149/month',
      marketPrice: '$299-999/month',
      benefits: [
        'Enhanced security posture',
        'Reduced risk exposure',
        'Compliance assurance',
        'Peace of mind'
      ],
      link: 'https://ziontechgroup.com/security-shield',
      rating: 4.9,
      users: '1,600+',
      launchDate: '2024-01-25'
    },
    {
      icon: Cloud,
      title: 'Zion Cloud Vault',
      description: 'Secure cloud backup and disaster recovery solution with automated data protection and instant recovery capabilities.',
      category: 'storage',
      pricing: 'standard',
      features: [
        'Automated Backups (Every 15 minutes)',
        'Cross-platform Sync',
        'Version Control & File History',
        'Disaster Recovery Planning',
        'End-to-end Encryption',
        'Compliance Support (SOC2, GDPR)',
        'Team Collaboration Tools',
        'Mobile Access & Sync'
      ],
      price: '$39/month',
      marketPrice: '$79-299/month',
      benefits: [
        'Complete data protection',
        'Business continuity',
        'Cost-effective storage',
        'Easy recovery process'
      ],
      link: 'https://ziontechgroup.com/cloud-vault',
      rating: 4.7,
      users: '5,200+',
      launchDate: '2024-01-05'
    },
    {
      icon: Users,
      title: 'Zion Team Collaboration Hub',
      description: 'All-in-one team collaboration platform with project management, communication, and productivity tools.',
      category: 'productivity',
      pricing: 'standard',
      features: [
        'Project Management & Task Tracking',
        'Team Chat & Video Conferencing',
        'File Sharing & Collaboration',
        'Time Tracking & Reporting',
        'Calendar Integration',
        'Document Collaboration',
        'Team Performance Analytics',
        'Mobile Apps (iOS & Android)'
      ],
      price: '$59/month',
      marketPrice: '$99-299/month',
      benefits: [
        'Increase team productivity by 40%',
        'Better project visibility',
        'Improved communication',
        'Centralized workspace'
      ],
      link: 'https://ziontechgroup.com/team-collaboration-hub',
      rating: 4.5,
      users: '3,800+',
      launchDate: '2024-02-10'
    },
    {
      icon: Zap,
      title: 'Zion Workflow Automation',
      description: 'No-code workflow automation platform that connects your favorite apps and automates repetitive business processes.',
      category: 'automation',
      pricing: 'standard',
      features: [
        'Visual Workflow Builder',
        '500+ App Integrations',
        'Conditional Logic & Triggers',
        'Custom Webhooks & APIs',
        'Team Collaboration on Workflows',
        'Workflow Analytics & Monitoring',
        'Template Library',
        'Enterprise Security Features'
      ],
      price: '$69/month',
      marketPrice: '$129-399/month',
      benefits: [
        'Save 20+ hours per week',
        'Reduce human errors',
        'Improve process efficiency',
        'Scale business operations'
      ],
      link: 'https://ziontechgroup.com/workflow-automation',
      rating: 4.6,
      users: '2,900+',
      launchDate: '2024-01-30'
    },
    {
      icon: Eye,
      title: 'Zion Social Media Manager',
      description: 'AI-powered social media management platform with content scheduling, analytics, and engagement optimization.',
      category: 'marketing',
      pricing: 'standard',
      features: [
        'Multi-platform Scheduling',
        'AI Content Suggestions',
        'Hashtag Research & Optimization',
        'Engagement Analytics',
        'Competitor Analysis',
        'Influencer Collaboration Tools',
        'Social Listening',
        'ROI Tracking & Reporting'
      ],
      price: '$49/month',
      marketPrice: '$99-299/month',
      benefits: [
        'Increase social engagement by 250%',
        'Save 15+ hours per week',
        'Better content performance',
        'Data-driven social strategy'
      ],
      link: 'https://ziontechgroup.com/social-media-manager',
      rating: 4.4,
      users: '4,500+',
      launchDate: '2024-02-05'
    },
    {
      icon: Code,
      title: 'Zion API Gateway',
      description: 'Enterprise-grade API management platform with monitoring, security, and developer tools for modern applications.',
      category: 'development',
      pricing: 'premium',
      features: [
        'API Gateway & Load Balancing',
        'Rate Limiting & Throttling',
        'API Analytics & Monitoring',
        'Developer Portal',
        'API Documentation Generator',
        'OAuth 2.0 & JWT Authentication',
        'Webhook Management',
        'API Versioning & Lifecycle'
      ],
      price: '$199/month',
      marketPrice: '$399-1299/month',
      benefits: [
        'Secure API management',
        'Developer productivity',
        'API performance optimization',
        'Scalable architecture'
      ],
      link: 'https://ziontechgroup.com/api-gateway',
      rating: 4.8,
      users: '1,200+',
      launchDate: '2024-02-20'
    },
    {
      icon: Monitor,
      title: 'Zion Website Monitor',
      description: 'Comprehensive website monitoring and performance optimization platform with real-time alerts and analytics.',
      category: 'monitoring',
      pricing: 'standard',
      features: [
        'Uptime Monitoring (Every 1 minute)',
        'Performance Analytics',
        'Real-time Alerts (Email, SMS, Slack)',
        'SSL Certificate Monitoring',
        'Page Speed Analysis',
        'Mobile Performance Testing',
        'Historical Data & Reports',
        'Team Collaboration Tools'
      ],
      price: '$39/month',
      marketPrice: '$79-199/month',
      benefits: [
        '99.9% uptime guarantee',
        'Faster website performance',
        'Proactive issue detection',
        'Better user experience'
      ],
      link: 'https://ziontechgroup.com/website-monitor',
      rating: 4.7,
      users: '3,600+',
      launchDate: '2024-01-12'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: microSaasServices.length },
    { id: 'ai', name: 'AI-Powered', count: microSaasServices.filter(s => s.category === 'ai').length },
    { id: 'business', name: 'Business Tools', count: microSaasServices.filter(s => s.category === 'business').length },
    { id: 'marketing', name: 'Marketing', count: microSaasServices.filter(s => s.category === 'marketing').length },
    { id: 'security', name: 'Security', count: microSaasServices.filter(s => s.category === 'security').length },
    { id: 'storage', name: 'Storage & Backup', count: microSaasServices.filter(s => s.category === 'storage').length },
    { id: 'productivity', name: 'Productivity', count: microSaasServices.filter(s => s.category === 'productivity').length },
    { id: 'automation', name: 'Automation', count: microSaasServices.filter(s => s.category === 'automation').length },
    { id: 'development', name: 'Development', count: microSaasServices.filter(s => s.category === 'development').length },
    { id: 'monitoring', name: 'Monitoring', count: microSaasServices.filter(s => s.category === 'monitoring').length }
  ];

  const pricingTiers = [
    { id: 'all', name: 'All Pricing', count: microSaasServices.length },
    { id: 'standard', name: 'Standard ($29-79)', count: microSaasServices.filter(s => s.pricing === 'standard').length },
    { id: 'premium', name: 'Premium ($79-199)', count: microSaasServices.filter(s => s.pricing === 'premium').length }
  ];

  const filteredServices = microSaasServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesPricing = selectedPricing === 'all' || service.pricing === selectedPricing;
    return matchesSearch && matchesCategory && matchesPricing;
  });

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | AI & IT Services</title>
        <meta name="description" content="Discover our comprehensive suite of micro SaaS solutions including AI content creation, analytics, security, and productivity tools for modern businesses." />
        <meta name="keywords" content="micro saas, ai tools, business software, productivity tools, marketing automation, security solutions" />
        <meta property="og:title" content="Micro SaaS Solutions - Zion Tech Group" />
        <meta property="og:description" content="Transform your business with our innovative micro SaaS solutions" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2" />
              Micro SaaS Solutions
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent neon-text-enhanced">
              Micro SaaS
              <span className="block text-3xl md:text-4xl mt-2 text-cyan-400">Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
              Powerful, Affordable, AI-Powered Tools
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Discover our comprehensive suite of micro SaaS solutions designed to transform your business operations. 
              From AI-powered content creation to advanced analytics and security, our tools are built for modern businesses 
              that demand efficiency, innovation, and results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40"
              >
                <Phone className="w-5 h-5 inline mr-2" />
                Call: (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                <Mail className="w-5 h-5 inline mr-2" />
                Get Free Demo
              </a>
            </div>
          </section>

          {/* Stats Section */}
          <section className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">12+</div>
                <div className="text-gray-300">Micro SaaS Tools</div>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">35K+</div>
                <div className="text-gray-300">Active Users</div>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">4.7</div>
                <div className="text-gray-300">Average Rating</div>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime SLA</div>
              </div>
            </div>
          </section>

          {/* Search and Filter */}
          <section className="mb-12">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search micro SaaS solutions..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <Filter className="text-gray-400 w-5 h-5" />
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    >
                      {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name} ({category.count})
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex items-center space-x-2">
                    <DollarSign className="text-gray-400 w-5 h-5" />
                    <select
                      value={selectedPricing}
                      onChange={(e) => setSelectedPricing(e.target.value)}
                      className="px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    >
                      {pricingTiers.map((tier) => (
                        <option key={tier.id} value={tier.id}>
                          {tier.name} ({tier.count})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Services Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">{service.title}</h3>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="text-cyan-400 font-semibold">{service.price}</span>
                          <span className="text-gray-400 text-sm line-through">{service.marketPrice}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-300">{service.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {service.users}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {new Date(service.launchDate).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      Try Free Demo
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                    <a
                      href="/contact"
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Join thousands of businesses already using our micro SaaS solutions. 
                Get started with a free trial and see the difference our tools can make.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Start Free Trial
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Call: (302) 464-0950
                </a>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default MicroSaasPage;
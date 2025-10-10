'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Cloud, Shield, BarChart3, MessageCircle, Eye, Workflow, Database, Settings, Users, Smartphone, Globe, Zap, FileText, Target, CheckCircle, ArrowRight, Search, Filter } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services = [
    {
      id: 1,
      title: 'AI-Powered Chatbots',
      description: 'Advanced conversational AI with natural language processing and sentiment analysis',
      category: 'AI Services',
      icon: Brain,
      price: '$299/month',
      marketPrice: '$500-2000/month',
      features: ['Natural language processing', 'Multi-language support', 'Sentiment analysis', 'CRM integration', 'Real-time learning'],
      benefits: ['Reduce support costs by 60%', '24/7 availability', 'Instant responses', 'Scalable solutions'],
      popular: true,
    },
    {
      id: 2,
      title: 'AI Content Generation Pro',
      description: 'Automated content creation using advanced language models for blogs, social media, and marketing',
      category: 'AI Services',
      icon: FileText,
      price: '$199/month',
      marketPrice: '$300-1500/month',
      features: ['Blog post generation', 'Social media content', 'Email marketing campaigns', 'SEO optimization', 'Brand voice customization'],
      benefits: ['Save 80% content creation time', 'Consistent brand voice', 'SEO optimization', 'Multi-platform publishing'],
      popular: true,
    },
    {
      id: 3,
      title: 'AI Data Analytics',
      description: 'Advanced analytics and business intelligence powered by machine learning algorithms',
      category: 'AI Services',
      icon: BarChart3,
      price: '$399/month',
      marketPrice: '$800-3000/month',
      features: ['Predictive analytics', 'Real-time dashboards', 'Automated reporting', 'Anomaly detection', 'Custom data models'],
      benefits: ['Data-driven insights', 'Predictive forecasting', 'Automated reporting', 'ROI optimization'],
      popular: false,
    },
    {
      id: 4,
      title: 'AI Computer Vision',
      description: 'Image and video analysis solutions for quality control, security, and automation',
      category: 'AI Services',
      icon: Eye,
      price: '$599/month',
      marketPrice: '$1000-5000/month',
      features: ['Object detection', 'Quality control automation', 'Facial recognition', 'Video analytics', 'Real-time processing'],
      benefits: ['Automated quality control', 'Enhanced security', 'Real-time monitoring', 'Cost reduction'],
      popular: true,
    },
    {
      id: 5,
      title: 'AI Workflow Automation',
      description: 'Intelligent process automation that learns and optimizes business workflows for maximum efficiency',
      category: 'AI Services',
      icon: Workflow,
      price: '$349/month',
      marketPrice: '$600-2500/month',
      features: ['Process mining', 'Workflow optimization', 'Task automation', 'Exception handling', 'Performance monitoring'],
      benefits: ['Process efficiency', 'Error reduction', 'Cost savings', 'Scalable automation'],
      popular: true,
    },
    {
      id: 6,
      title: 'Cloud Infrastructure & Migration',
      description: 'Complete cloud solutions including AWS, Azure, and GCP with seamless migration services',
      category: 'IT Services',
      icon: Cloud,
      price: '$2,500/month',
      marketPrice: '$4000-15000/month',
      features: ['Cloud architecture design', 'Multi-cloud strategies', 'Cost optimization', 'Disaster recovery', 'Auto-scaling', 'Security compliance'],
      benefits: ['99.9% uptime guarantee', 'Cost reduction up to 40%', 'Scalable infrastructure', 'Expert migration support'],
      popular: true,
    },
    {
      id: 7,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services including threat detection, compliance, and incident response',
      category: 'IT Services',
      icon: Shield,
      price: '$1,800/month',
      marketPrice: '$3000-12000/month',
      features: ['Threat detection & response', 'Vulnerability assessments', 'Penetration testing', 'Security monitoring', 'Compliance management', 'Employee training'],
      benefits: ['24/7 security monitoring', 'Reduced security incidents', 'Compliance assurance', 'Expert security team'],
      popular: true,
    },
    {
      id: 8,
      title: 'Database Management',
      description: 'Expert database design, optimization, and management for all major database systems',
      category: 'IT Services',
      icon: Database,
      price: '$1,200/month',
      marketPrice: '$2000-8000/month',
      features: ['Database design & optimization', 'Performance tuning', 'Backup & recovery', 'Data migration', 'Security hardening', 'Monitoring & maintenance'],
      benefits: ['Improved performance', 'Data security', 'Automated backups', 'Expert DBA support'],
      popular: false,
    },
    {
      id: 9,
      title: 'DevOps & CI/CD',
      description: 'Modern development operations with automated deployment, monitoring, and infrastructure as code',
      category: 'IT Services',
      icon: Settings,
      price: '$2,200/month',
      marketPrice: '$3500-10000/month',
      features: ['CI/CD pipeline setup', 'Infrastructure as code', 'Container orchestration', 'Monitoring & logging', 'Automated testing', 'Deployment automation'],
      benefits: ['Faster deployments', 'Reduced downtime', 'Improved code quality', 'Automated workflows'],
      popular: true,
    },
    {
      id: 10,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with optimal user experience',
      category: 'IT Services',
      icon: Smartphone,
      price: '$8,000/project',
      marketPrice: '$15000-50000/project',
      features: ['iOS & Android apps', 'Cross-platform development', 'App store optimization', 'Push notifications', 'Offline functionality', 'Performance optimization'],
      benefits: ['Native performance', 'Cross-platform compatibility', 'App store success', 'User engagement'],
      popular: true,
    },
    {
      id: 11,
      title: 'Zion Analytics Pro',
      description: 'Advanced real-time business intelligence and analytics platform with AI-powered insights',
      category: 'Micro SAAS',
      icon: BarChart3,
      price: '$89/month',
      marketPrice: '$150-500/month',
      features: ['Real-time data visualization', 'AI-powered predictive analytics', 'Custom dashboard builder', 'Advanced data connectors', 'Automated report generation', 'Multi-tenant architecture'],
      benefits: ['Data-driven decision making', 'Real-time insights', 'Custom dashboards', 'Automated reporting'],
      popular: true,
      link: 'https://ziontechgroup.com/zion-analytics-pro'
    },
    {
      id: 12,
      title: 'Zion Chat AI',
      description: 'Next-generation AI customer support platform with advanced NLP and sentiment analysis',
      category: 'Micro SAAS',
      icon: MessageCircle,
      price: '$149/month',
      marketPrice: '$300-800/month',
      features: ['GPT-4 Powered AI', 'Multi-channel support', 'Advanced sentiment analysis', 'Automated ticket routing', 'Live agent handoff', 'Multi-language support'],
      benefits: ['24/7 customer support', 'Reduced response time', 'Improved customer satisfaction', 'Lead generation'],
      popular: true,
      link: 'https://ziontechgroup.com/zion-chat-ai'
    },
    {
      id: 13,
      title: 'Zion Security Shield',
      description: 'Comprehensive cybersecurity monitoring and threat detection platform',
      category: 'Micro SAAS',
      icon: Shield,
      price: '$199/month',
      marketPrice: '$400-1200/month',
      features: ['Real-time threat monitoring', 'Automated incident response', 'Compliance reporting', 'Security awareness training', 'Vulnerability scanning', '24/7 SOC support'],
      benefits: ['Enhanced security posture', 'Reduced breach risk', 'Compliance automation', 'Expert security team'],
      popular: true,
      link: 'https://ziontechgroup.com/zion-security-shield'
    },
    {
      id: 14,
      title: 'Zion Cloud Vault',
      description: 'Secure cloud backup and disaster recovery solution with automated data protection',
      category: 'Micro SAAS',
      icon: Cloud,
      price: '$79/month',
      marketPrice: '$150-400/month',
      features: ['Automated backups', 'Cross-region replication', 'Point-in-time recovery', 'Encryption at rest', 'Compliance ready', 'Unlimited storage'],
      benefits: ['Data protection', 'Business continuity', 'Cost-effective storage', 'Easy recovery'],
      popular: false,
      link: 'https://ziontechgroup.com/zion-cloud-vault'
    },
    {
      id: 15,
      title: 'Zion Content Studio',
      description: 'AI-powered content creation and management platform for marketing teams',
      category: 'Micro SAAS',
      icon: FileText,
      price: '$129/month',
      marketPrice: '$200-600/month',
      features: ['AI content generation', 'Brand voice consistency', 'Multi-platform publishing', 'SEO optimization', 'Content calendar', 'Team collaboration'],
      benefits: ['10x content production', 'Consistent brand voice', 'SEO optimization', 'Team efficiency'],
      popular: true,
      link: 'https://ziontechgroup.com/zion-content-studio'
    },
    {
      id: 16,
      title: 'Zion CRM Intelligence',
      description: 'AI-enhanced customer relationship management with predictive analytics and automation',
      category: 'Micro SAAS',
      icon: Users,
      price: '$179/month',
      marketPrice: '$300-800/month',
      features: ['AI lead scoring', 'Predictive analytics', 'Automated follow-ups', 'Sales forecasting', 'Customer insights', 'Integration ecosystem'],
      benefits: ['Higher conversion rates', 'Better customer insights', 'Automated workflows', 'Sales optimization'],
      popular: true,
      link: 'https://ziontechgroup.com/zion-crm-intelligence'
    },
  ];

  const categories = ['all', 'AI Services', 'IT Services', 'Micro SAAS'];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Comprehensive AI and IT services including chatbots, analytics, cloud solutions, and Micro SAAS platforms." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <Navigation />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text-enhanced">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI and IT solutions to transform your business and drive growth
            </p>
          </div>
          
          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="bg-slate-800/50 rounded-2xl p-6 cyber-card-enhanced group hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-cyan-400 font-semibold">{service.price}</span>
                      {service.marketPrice && (
                        <span className="text-gray-400 text-sm line-through">{service.marketPrice}</span>
                      )}
                      {service.popular && (
                        <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">Popular</span>
                      )}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-green-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between">
                  <a
                    href={service.link || "/contact"}
                    className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                    target={service.link ? "_blank" : "_self"}
                    rel={service.link ? "noopener noreferrer" : undefined}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                  <a
                    href={service.link || "/contact"}
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                    target={service.link ? "_blank" : "_self"}
                    rel={service.link ? "noopener noreferrer" : undefined}
                  >
                    {service.link ? 'Get Started' : 'Get Quote'}
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No services found matching your criteria.</p>
            </div>
          )}
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default ServicesPage;

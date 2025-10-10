'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Code, 
  BarChart, 
  Users, 
  Zap, 
  Target, 
  Globe, 
  Database, 
  Smartphone, 
  Lock, 
  TrendingUp, 
  Settings, 
  Calendar, 
  CheckSquare, 
  FileText,
  MessageSquare,
  Heart,
  DollarSign,
  Box,
  Monitor,
  Link as LinkIcon,
  Server,
  Share2,
  Mic,
  Wrench,
  Truck,
  ArrowRight,
  CheckCircle,
  Star,
  Filter
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Services', icon: Globe },
    { id: 'ai', name: 'AI Services', icon: Brain },
    { id: 'it', name: 'IT Services', icon: Cloud },
    { id: 'saas', name: 'Micro SaaS', icon: Box }
  ];

  const services = [
    // AI Services
    {
      id: 'ai-project-manager',
      name: 'AI Project Manager',
      description: 'Intelligent project management with AI-powered task prioritization and resource allocation',
      category: 'ai',
      icon: Calendar,
      price: '$99/month',
      features: ['Task prioritization', 'Resource allocation', 'Predictive analytics', 'Team collaboration'],
      link: '/ai-project-manager'
    },
    {
      id: 'ai-social-media-manager',
      name: 'AI Social Media Manager',
      description: 'Automated social media management with AI content generation and smart scheduling',
      category: 'ai',
      icon: Share2,
      price: '$149/month',
      features: ['Content generation', 'Smart scheduling', 'Analytics', 'Multi-platform support'],
      link: '/ai-social-media-manager'
    },
    {
      id: 'ai-email-marketing',
      name: 'AI Email Marketing',
      description: 'Intelligent email automation with AI content generation and optimal send times',
      category: 'ai',
      icon: Mail,
      price: '$99/month',
      features: ['Email automation', 'Content generation', 'Segmentation', 'Analytics'],
      link: '/ai-email-marketing-automation'
    },
    {
      id: 'ai-cloud-infrastructure',
      name: 'AI Cloud Infrastructure',
      description: 'Intelligent cloud management with AI optimization and automated scaling',
      category: 'ai',
      icon: Cloud,
      price: '$2,500/month',
      features: ['Auto-scaling', 'Cost optimization', 'Performance monitoring', 'Security automation'],
      link: '/ai-cloud-infrastructure'
    },
    {
      id: 'ai-analytics',
      name: 'AI Analytics',
      description: 'Advanced data insights with AI-powered analytics and predictive modeling',
      category: 'ai',
      icon: BarChart,
      price: '$199/month',
      features: ['Predictive analytics', 'Real-time insights', 'Custom dashboards', 'Automated reporting'],
      link: '/ai-analytics'
    },
    {
      id: 'ai-automation',
      name: 'AI Automation',
      description: 'Intelligent workflow automation with AI decision-making capabilities',
      category: 'ai',
      icon: Zap,
      price: '$399/month',
      features: ['Workflow automation', 'AI decision making', 'Process optimization', 'Integration management'],
      link: '/ai-automation'
    },
    // IT Services
    {
      id: 'cloud-infrastructure',
      name: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions with automated management and optimization',
      category: 'it',
      icon: Cloud,
      price: '$2,500/month',
      features: ['Cloud migration', 'Server management', 'Auto-scaling', '24/7 monitoring'],
      link: '/it-services'
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity',
      description: 'Comprehensive security solutions with advanced threat detection',
      category: 'it',
      icon: Shield,
      price: '$4,000/month',
      features: ['Threat detection', 'Security audits', 'Compliance management', 'Incident response'],
      link: '/it-services'
    },
    {
      id: 'api-management',
      name: 'API Management',
      description: 'Complete API development and management solutions',
      category: 'it',
      icon: Code,
      price: '$3,000/month',
      features: ['API development', 'Documentation', 'Testing', 'Monitoring'],
      link: '/it-services'
    },
    {
      id: 'database-management',
      name: 'Database Management',
      description: 'Comprehensive database services with optimization and maintenance',
      category: 'it',
      icon: Database,
      price: '$1,800/month',
      features: ['Database design', 'Performance optimization', 'Backup & recovery', 'Security hardening'],
      link: '/it-services'
    },
    // Micro SaaS
    {
      id: 'ai-crm',
      name: 'AI-Powered CRM',
      description: 'Intelligent customer relationship management with AI insights',
      category: 'saas',
      icon: Users,
      price: '$149/month',
      features: ['AI insights', 'Automated follow-ups', 'Predictive analytics', 'Integration'],
      link: '/ai-crm'
    },
    {
      id: 'ai-chatbot',
      name: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots for customer support and sales',
      category: 'saas',
      icon: MessageSquare,
      price: '$99/month',
      features: ['No-code builder', 'Multi-channel support', 'Analytics', 'Custom training'],
      link: '/ai-chatbot-builder'
    },
    {
      id: 'ai-content-studio',
      name: 'AI Content Studio',
      description: 'Complete content creation suite with AI writing and design',
      category: 'saas',
      icon: FileText,
      price: '$299/month',
      features: ['Content generation', 'Image creation', 'Video editing', 'Social media automation'],
      link: '/ai-content-studio'
    }
  ];

  const filteredServices = services.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const stats = [
    { icon: <Users className="w-8 h-8 text-blue-500" />, value: '500+', label: 'Projects Completed' },
    { icon: <TrendingUp className="w-8 h-8 text-green-500" />, value: '99.9%', label: 'Uptime SLA' },
    { icon: <Shield className="w-8 h-8 text-purple-500" />, value: '100%', label: 'Secure' },
    { icon: <Zap className="w-8 h-8 text-orange-500" />, value: '24/7', label: 'Support' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
      <Helmet>
        <title>Services - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Comprehensive AI and IT services including project management, social media automation, cloud infrastructure, cybersecurity, and more." />
        <meta name="keywords" content="AI services, IT services, micro SaaS, cloud infrastructure, cybersecurity, automation" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="cyber-scan-line mb-8">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 holographic-text cyber-text glitch">
              Our Services
            </h1>
            <p className="text-2xl text-cyan-400 mb-8 font-medium cyber-glow neon-text">
              Comprehensive AI & IT Solutions
            </p>
          </div>
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            From AI-powered automation to cloud infrastructure, we provide end-to-end solutions 
            that transform your business and drive growth.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
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

      {/* Search and Filter */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1">
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg border transition-all duration-300 flex items-center space-x-2 ${
                    selectedCategory === category.id
                      ? 'border-cyan-400 bg-cyan-400/10 text-cyan-400'
                      : 'border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="quantum-card p-8 hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mr-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                    <div className="text-cyan-400 font-semibold">{service.price}</div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-400 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex space-x-3">
                  <Link
                    to={service.link}
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 text-center"
                  >
                    Learn More
                  </Link>
                  <Link
                    to="/contact"
                    className="flex-1 border border-cyan-500 text-cyan-400 font-semibold py-3 px-6 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 text-center"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="quantum-tunnel p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6 neon-text">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss your specific needs and create a custom solution that drives real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="cyber-button w-full sm:w-auto text-center"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 text-center"
              >
                Call +1 (302) 464-0950
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
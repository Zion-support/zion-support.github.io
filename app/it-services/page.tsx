'use client';

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Cloud, Server, Database, Shield, Network, Monitor, 
  Smartphone, Laptop, HardDrive, Cpu, MemoryStick, 
  Wifi, Router, Lock, Settings, Wrench, Hammer, 
  CheckCircle, Star, ArrowRight, Zap, Users, 
  BarChart3, Globe, Smartphone as Phone, Mail, 
  MapPin, Clock, Award, Phone as PhoneIcon, 
  Mail as MailIcon, MapPin as Location, Calendar,
  Search, ExternalLink, Brain, Bot, Target, 
  Layers, BarChart, PieChart, LineChart, Activity, 
  Sparkles, Atom, DollarSign, MessageSquare, 
  TrendingUp, CheckCircle as CheckIcon, ArrowRight as Arrow
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

interface ITService {
  id: string;
  name: string;
  description: string;
  features: string[];
  pricing: {
    monthly: number;
    yearly: number;
    setup?: number;
  };
  category: string;
  icon: React.ComponentType<any>;
  popular?: boolean;
  comingSoon?: boolean;
  link: string;
  trial: string;
  roi: string;
  useCases: string[];
  industries: string[];
}

const itServices: ITService[] = [
  // Cloud Infrastructure
  {
    id: 'cloud-infrastructure',
    name: 'Cloud Infrastructure Pro',
    description: 'Comprehensive cloud solutions with AWS, Azure, and Google Cloud integration, automated scaling, and 24/7 monitoring.',
    features: [
      'Multi-cloud deployment',
      'Automated scaling',
      '24/7 monitoring',
      'Disaster recovery',
      'Security compliance',
      'Cost optimization',
      'Performance tuning',
      'Migration services'
    ],
    pricing: { monthly: 999, yearly: 9990, setup: 1999 },
    category: 'Cloud',
    icon: Cloud,
    popular: true,
    link: 'https://ziontechgroup.com/cloud-infrastructure',
    trial: '14-day free trial',
    roi: '400% ROI in 6 months',
    useCases: ['Application hosting', 'Data backup', 'Disaster recovery', 'Scalable infrastructure'],
    industries: ['SaaS', 'E-commerce', 'Healthcare', 'Finance']
  },
  {
    id: 'cloud-migration',
    name: 'Cloud Migration Pro',
    description: 'Seamless migration to cloud platforms with zero downtime, data integrity, and performance optimization.',
    features: [
      'Zero-downtime migration',
      'Data integrity assurance',
      'Performance optimization',
      'Security compliance',
      'Cost analysis',
      'Migration planning',
      'Testing & validation',
      'Post-migration support'
    ],
    pricing: { monthly: 799, yearly: 7990, setup: 1499 },
    category: 'Cloud',
    icon: Server,
    popular: false,
    link: 'https://ziontechgroup.com/cloud-migration',
    trial: '14-day free trial',
    roi: '300% ROI in 4 months',
    useCases: ['Legacy system migration', 'Data center migration', 'Application modernization', 'Hybrid cloud setup'],
    industries: ['Enterprise', 'Government', 'Healthcare', 'Finance']
  },

  // Cybersecurity
  {
    id: 'cybersecurity',
    name: 'Cybersecurity Pro',
    description: 'Comprehensive security solutions with threat detection, vulnerability assessment, and incident response.',
    features: [
      'Threat detection & response',
      'Vulnerability assessment',
      'Penetration testing',
      'Security monitoring',
      'Compliance management',
      'Incident response',
      'Security training',
      '24/7 SOC support'
    ],
    pricing: { monthly: 1299, yearly: 12990, setup: 2499 },
    category: 'Security',
    icon: Shield,
    popular: true,
    link: 'https://ziontechgroup.com/cybersecurity',
    trial: '30-day free trial',
    roi: '500% ROI in 8 months',
    useCases: ['Threat protection', 'Compliance management', 'Security monitoring', 'Incident response'],
    industries: ['Finance', 'Healthcare', 'Government', 'E-commerce']
  },
  {
    id: 'data-protection',
    name: 'Data Protection Pro',
    description: 'Advanced data protection with encryption, backup, recovery, and compliance management.',
    features: [
      'Data encryption',
      'Automated backups',
      'Disaster recovery',
      'Compliance management',
      'Data classification',
      'Access controls',
      'Audit logging',
      'GDPR compliance'
    ],
    pricing: { monthly: 599, yearly: 5990, setup: 1199 },
    category: 'Security',
    icon: Lock,
    popular: false,
    link: 'https://ziontechgroup.com/data-protection',
    trial: '14-day free trial',
    roi: '250% ROI in 3 months',
    useCases: ['Data backup', 'Compliance management', 'Disaster recovery', 'Data encryption'],
    industries: ['Healthcare', 'Finance', 'Legal', 'Government']
  },

  // Network & Infrastructure
  {
    id: 'network-management',
    name: 'Network Management Pro',
    description: 'Complete network infrastructure management with monitoring, optimization, and security.',
    features: [
      'Network monitoring',
      'Performance optimization',
      'Security management',
      'Traffic analysis',
      'Bandwidth management',
      'Fault detection',
      'Capacity planning',
      '24/7 support'
    ],
    pricing: { monthly: 699, yearly: 6990, setup: 1399 },
    category: 'Network',
    icon: Network,
    popular: true,
    link: 'https://ziontechgroup.com/network-management',
    trial: '14-day free trial',
    roi: '300% ROI in 5 months',
    useCases: ['Network monitoring', 'Performance optimization', 'Security management', 'Capacity planning'],
    industries: ['Enterprise', 'Education', 'Healthcare', 'Manufacturing']
  },
  {
    id: 'wifi-solutions',
    name: 'WiFi Solutions Pro',
    description: 'Enterprise-grade WiFi solutions with seamless connectivity, security, and management.',
    features: [
      'Enterprise WiFi deployment',
      'Seamless roaming',
      'Security protocols',
      'Guest network management',
      'Analytics & reporting',
      'Remote management',
      'Capacity optimization',
      'Troubleshooting support'
    ],
    pricing: { monthly: 299, yearly: 2990, setup: 599 },
    category: 'Network',
    icon: Wifi,
    popular: false,
    link: 'https://ziontechgroup.com/wifi-solutions',
    trial: '7-day free trial',
    roi: '200% ROI in 2 months',
    useCases: ['Office WiFi', 'Guest networks', 'Remote work support', 'IoT connectivity'],
    industries: ['Office', 'Retail', 'Hospitality', 'Education']
  },

  // Database & Data Management
  {
    id: 'database-management',
    name: 'Database Management Pro',
    description: 'Comprehensive database solutions with optimization, backup, recovery, and performance tuning.',
    features: [
      'Database optimization',
      'Backup & recovery',
      'Performance tuning',
      'Security management',
      'Monitoring & alerting',
      'Migration services',
      'High availability',
      '24/7 support'
    ],
    pricing: { monthly: 799, yearly: 7990, setup: 1599 },
    category: 'Database',
    icon: Database,
    popular: true,
    link: 'https://ziontechgroup.com/database-management',
    trial: '14-day free trial',
    roi: '350% ROI in 6 months',
    useCases: ['Database optimization', 'Backup management', 'Performance tuning', 'Migration services'],
    industries: ['E-commerce', 'Finance', 'Healthcare', 'SaaS']
  },
  {
    id: 'data-analytics',
    name: 'Data Analytics Pro',
    description: 'Transform your data into actionable insights with advanced analytics, visualization, and reporting.',
    features: [
      'Data visualization',
      'Advanced analytics',
      'Real-time reporting',
      'Predictive modeling',
      'Data integration',
      'Custom dashboards',
      'API integrations',
      'Training & support'
    ],
    pricing: { monthly: 599, yearly: 5990, setup: 1199 },
    category: 'Database',
    icon: BarChart3,
    popular: false,
    link: 'https://ziontechgroup.com/data-analytics',
    trial: '14-day free trial',
    roi: '300% ROI in 4 months',
    useCases: ['Business intelligence', 'Performance analytics', 'Predictive modeling', 'Custom reporting'],
    industries: ['Retail', 'Finance', 'Healthcare', 'Manufacturing']
  },

  // DevOps & Automation
  {
    id: 'devops',
    name: 'DevOps Pro',
    description: 'Complete DevOps solutions with CI/CD, infrastructure as code, and automated deployment.',
    features: [
      'CI/CD pipelines',
      'Infrastructure as code',
      'Automated deployment',
      'Container orchestration',
      'Monitoring & logging',
      'Security scanning',
      'Performance optimization',
      'Team training'
    ],
    pricing: { monthly: 899, yearly: 8990, setup: 1799 },
    category: 'DevOps',
    icon: Settings,
    popular: true,
    link: 'https://ziontechgroup.com/devops',
    trial: '14-day free trial',
    roi: '400% ROI in 5 months',
    useCases: ['CI/CD implementation', 'Infrastructure automation', 'Deployment automation', 'Performance monitoring'],
    industries: ['SaaS', 'Fintech', 'E-commerce', 'Startups']
  },
  {
    id: 'automation',
    name: 'IT Automation Pro',
    description: 'Automate IT processes with intelligent workflows, monitoring, and self-healing systems.',
    features: [
      'Process automation',
      'Self-healing systems',
      'Intelligent monitoring',
      'Workflow optimization',
      'Error handling',
      'Performance tuning',
      'Cost optimization',
      'Custom integrations'
    ],
    pricing: { monthly: 499, yearly: 4990, setup: 999 },
    category: 'DevOps',
    icon: Zap,
    popular: false,
    link: 'https://ziontechgroup.com/it-automation',
    trial: '14-day free trial',
    roi: '250% ROI in 3 months',
    useCases: ['Process automation', 'System monitoring', 'Error handling', 'Performance optimization'],
    industries: ['Enterprise', 'Manufacturing', 'Healthcare', 'Finance']
  },

  // Hardware & Support
  {
    id: 'hardware-support',
    name: 'Hardware Support Pro',
    description: 'Comprehensive hardware support with maintenance, upgrades, and 24/7 technical assistance.',
    features: [
      'Hardware maintenance',
      'Upgrade services',
      '24/7 technical support',
      'Remote diagnostics',
      'Preventive maintenance',
      'Warranty management',
      'Asset tracking',
      'Disposal services'
    ],
    pricing: { monthly: 399, yearly: 3990, setup: 799 },
    category: 'Hardware',
    icon: Monitor,
    popular: false,
    link: 'https://ziontechgroup.com/hardware-support',
    trial: '7-day free trial',
    roi: '200% ROI in 4 months',
    useCases: ['Hardware maintenance', 'System upgrades', 'Technical support', 'Asset management'],
    industries: ['Office', 'Education', 'Healthcare', 'Manufacturing']
  },
  {
    id: 'mobile-device-management',
    name: 'Mobile Device Management Pro',
    description: 'Secure and manage mobile devices with enterprise-grade security and management tools.',
    features: [
      'Device enrollment',
      'Security policies',
      'App management',
      'Remote wipe',
      'Compliance monitoring',
      'Location tracking',
      'Usage analytics',
      'Support services'
    ],
    pricing: { monthly: 199, yearly: 1990, setup: 399 },
    category: 'Hardware',
    icon: Smartphone,
    popular: false,
    link: 'https://ziontechgroup.com/mobile-device-management',
    trial: '7-day free trial',
    roi: '150% ROI in 2 months',
    useCases: ['Device security', 'App management', 'Compliance monitoring', 'Remote management'],
    industries: ['Enterprise', 'Healthcare', 'Education', 'Government']
  },

  // Consulting & Training
  {
    id: 'it-consulting',
    name: 'IT Consulting Pro',
    description: 'Strategic IT consulting with architecture design, technology selection, and implementation planning.',
    features: [
      'IT strategy planning',
      'Architecture design',
      'Technology selection',
      'Implementation planning',
      'Risk assessment',
      'Cost optimization',
      'Vendor management',
      'Project management'
    ],
    pricing: { monthly: 1299, yearly: 12990, setup: 2499 },
    category: 'Consulting',
    icon: Users,
    popular: true,
    link: 'https://ziontechgroup.com/it-consulting',
    trial: '30-day free trial',
    roi: '500% ROI in 12 months',
    useCases: ['IT strategy', 'Architecture design', 'Technology selection', 'Implementation planning'],
    industries: ['Enterprise', 'Startups', 'Government', 'Healthcare']
  },
  {
    id: 'it-training',
    name: 'IT Training Pro',
    description: 'Comprehensive IT training programs with hands-on experience and certification support.',
    features: [
      'Custom training programs',
      'Hands-on labs',
      'Certification support',
      'Online & offline training',
      'Progress tracking',
      'Expert instructors',
      'Real-world scenarios',
      'Ongoing support'
    ],
    pricing: { monthly: 299, yearly: 2990, setup: 599 },
    category: 'Consulting',
    icon: Award,
    popular: false,
    link: 'https://ziontechgroup.com/it-training',
    trial: '7-day free trial',
    roi: '200% ROI in 3 months',
    useCases: ['Team training', 'Certification preparation', 'Skill development', 'Technology adoption'],
    industries: ['Enterprise', 'Education', 'Government', 'Healthcare']
  }
];

const categories = [
  'All',
  'Cloud',
  'Security',
  'Network',
  'Database',
  'DevOps',
  'Hardware',
  'Consulting'
];

const benefits = [
  {
    icon: TrendingUp,
    title: 'Proven ROI',
    description: 'Our IT solutions deliver an average ROI of 350% within 6 months',
    stat: '350%'
  },
  {
    icon: Clock,
    title: 'Rapid Deployment',
    description: 'Get up and running in under 72 hours with our streamlined implementation',
    stat: '72h'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level security with 99.9% uptime guarantee and compliance',
    stat: '99.9%'
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: '24/7 support from certified IT professionals and engineers',
    stat: '24/7'
  }
];

const testimonials = [
  {
    name: 'Jennifer Martinez',
    company: 'TechCorp Solutions',
    role: 'CTO',
    content: 'Cloud Infrastructure Pro transformed our operations. We achieved 99.9% uptime and reduced costs by 40% within 3 months.',
    rating: 5,
    avatar: '/images/testimonials/jennifer-martinez.jpg'
  },
  {
    name: 'David Thompson',
    company: 'SecureBank Inc.',
    role: 'CISO',
    content: 'The cybersecurity solution provided comprehensive protection. We detected and prevented 95% of potential threats before they could impact our systems.',
    rating: 5,
    avatar: '/images/testimonials/david-thompson.jpg'
  },
  {
    name: 'Lisa Chen',
    company: 'DataFlow Systems',
    role: 'IT Director',
    content: 'DevOps Pro streamlined our deployment process. We reduced deployment time by 80% and improved code quality significantly.',
    rating: 5,
    avatar: '/images/testimonials/lisa-chen.jpg'
  }
];

export default function ITServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredServices, setFilteredServices] = useState(itServices);

  useEffect(() => {
    let filtered = itServices;
    
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(service => 
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase())) ||
        service.useCases.some(useCase => useCase.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    setFilteredServices(filtered);
  }, [selectedCategory, searchTerm]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 cyber-grid neural-network-bg">
      <Navigation />
      <ScrollToTop />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 rounded-full px-4 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 text-sm font-medium">IT Services</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-text-advanced">
              Enterprise IT Solutions
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Comprehensive IT services that keep your business running smoothly. From cloud infrastructure 
              to cybersecurity, we provide the technology foundation your business needs to succeed.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-blue-500/20 px-4 py-2 rounded-lg">
                <Cloud className="w-5 h-5 text-blue-400" />
                <span className="text-white font-medium">350% Average ROI</span>
              </div>
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg">
                <Shield className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">Enterprise Security</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg">
                <Award className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">Certified Experts</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 group"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/consultation"
                className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search IT services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                  />
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-blue-500 text-white shadow-lg'
                        : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className={`cyber-card-advanced p-6 hover:scale-105 transition-all duration-300 group relative ${
                  service.popular ? 'ring-2 ring-blue-400' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">{formatPrice(service.pricing.monthly)}</div>
                    <div className="text-sm text-gray-400">/month</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-sm text-blue-400">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Use Cases:</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.useCases.slice(0, 3).map((useCase, index) => (
                      <span key={index} className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded">
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Trial:</span>
                    <span className="text-blue-400 font-medium">{service.trial}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Expected ROI:</span>
                    <span className="text-green-400 font-medium">{service.roi}</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <a
                    href={service.link}
                    className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 text-white py-2 px-4 rounded-lg font-medium hover:from-blue-600 hover:to-cyan-700 transition-all block text-center"
                  >
                    Learn More
                  </a>
                  <a
                    href="/contact"
                    className="w-full border border-blue-400 text-blue-400 py-2 px-4 rounded-lg font-medium hover:bg-blue-400 hover:text-slate-900 transition-all block text-center"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
              <p className="text-gray-300 mb-8">Try adjusting your search or filter criteria</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-all duration-300"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 neon-text">
              Why Choose Our IT Services?
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Proven results and enterprise-grade IT solutions that deliver measurable business value
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{benefit.stat}</div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 neon-text">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Real results from real customers who have transformed their IT infrastructure with our solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="cyber-card-advanced p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-blue-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses that have already transformed their IT operations with our solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Get Started
            </a>
            <a
              href="/consultation"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Consultation
            </a>
          </div>
          <div className="mt-8 text-sm text-gray-200">
            <p>📞 Call us: <a href="tel:+13024640950" className="text-white hover:text-blue-200">+1 (302) 464-0950</a></p>
            <p>✉️ Email: <a href="mailto:kleber@ziontechgroup.com" className="text-white hover:text-blue-200">kleber@ziontechgroup.com</a></p>
            <p>📍 Address: 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
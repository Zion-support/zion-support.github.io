'use client';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Cloud, Server, Shield, Code, Database, Settings, ArrowRight, 
  CheckCircle, Star, DollarSign, Clock, Globe, Smartphone, 
  Users, Zap, Target, TrendingUp, Calendar, MessageCircle, 
  Lock, Monitor, Package, Cpu, Globe2, Smartphone2, 
  CreditCard, PieChart, Activity, Briefcase, Building2, 
  ShoppingCart, Headphones, Camera, Music, Video, Image, 
  Download, Upload, Share2, Plus, Minus, X, Search, Filter, 
  SortAsc, SortDesc, RefreshCw, Eye, Mic, MicOff, Play, 
  Pause, Square, Volume2, VolumeX, Wifi, WifiOff, Battery, 
  BatteryCharging, Thermometer, Droplets, Wind, Sun, Moon, 
  CloudRain, CloudSnow, AlertTriangle, AlertCircle, 
  CheckCircle2, XCircle, Info, HelpCircle, ExternalLink, 
  Download as DownloadIcon, Upload as UploadIcon, Trash2, 
  Edit3, Save, Copy, Scissors, RotateCcw, RotateCw, 
  Maximize, Minimize, ZoomIn, ZoomOut, Move, 
  RotateCcw as RotateLeft, RotateCw as RotateRight, 
  FlipHorizontal, FlipVertical, Network, HardDrive, 
  Router, Wrench, Tool, Cog, Layers, GitBranch, 
  Terminal, Command, Zap as Lightning, RefreshCw as Refresh,
  AlertTriangle as Alert, CheckCircle as Check, 
  XCircle as X, Info as InfoIcon, HelpCircle as Help,
  ExternalLink as External, Download as Download2,
  Upload as Upload2, Trash2 as Trash, Edit3 as Edit,
  Save as SaveIcon, Copy as CopyIcon, Scissors as Cut,
  RotateCcw as RotateLeft2, RotateCw as RotateRight2,
  Maximize as Max, Minimize as Min, ZoomIn as ZoomIn2,
  ZoomOut as ZoomOut2, Move as MoveIcon
} from 'lucide-react';

const ItServicesPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const itServices = [
    {
      id: 'cloud-infrastructure',
      name: 'Cloud Infrastructure Solutions',
      description: 'Comprehensive cloud infrastructure services including migration, optimization, and management across AWS, Azure, and GCP.',
      icon: Cloud,
      category: 'Cloud Services',
      price: '$2,999/month',
      features: [
        'Multi-cloud architecture design',
        'Cloud migration and modernization',
        'Infrastructure as Code (IaC)',
        'Auto-scaling and load balancing',
        'Disaster recovery planning',
        'Cost optimization strategies',
        'Security and compliance',
        '24/7 monitoring and support'
      ],
      benefits: [
        'Reduce infrastructure costs by 40%',
        'Improve scalability and performance',
        'Enhance security and compliance',
        'Achieve 99.9% uptime guarantee'
      ],
      marketPrice: '$5,999-19,999/month',
      targetAudience: 'Enterprises, growing businesses',
      href: '/ai-cloud-infrastructure'
    },
    {
      id: 'cybersecurity-suite',
      name: 'Comprehensive Cybersecurity Suite',
      description: 'Advanced cybersecurity solutions with threat detection, prevention, and response capabilities for enterprise security.',
      icon: Shield,
      category: 'Security & Compliance',
      price: '$1,999/month',
      features: [
        'Advanced threat detection and response',
        'Security assessment and auditing',
        'Penetration testing services',
        'Compliance management (SOC2, GDPR, HIPAA)',
        'Security awareness training',
        'Incident response planning',
        'Vulnerability management',
        'Security monitoring and alerting'
      ],
      benefits: [
        'Reduce security incidents by 90%',
        'Improve compliance posture',
        'Protect against advanced threats',
        'Minimize security risks'
      ],
      marketPrice: '$3,999-14,999/month',
      targetAudience: 'Enterprises, healthcare, finance',
      href: '/ai-cybersecurity-suite'
    },
    {
      id: 'api-management',
      name: 'API Management Platform',
      description: 'Complete API lifecycle management with development, testing, deployment, and monitoring capabilities.',
      icon: Code,
      category: 'Development & Integration',
      price: '$1,499/month',
      features: [
        'API design and development',
        'API gateway and management',
        'Rate limiting and throttling',
        'API documentation and testing',
        'Developer portal creation',
        'API analytics and monitoring',
        'Security and authentication',
        'Integration with existing systems'
      ],
      benefits: [
        'Accelerate API development by 60%',
        'Improve API performance and reliability',
        'Enhance developer experience',
        'Reduce integration complexity'
      ],
      marketPrice: '$2,999-9,999/month',
      targetAudience: 'Developers, enterprises, SaaS companies',
      href: '/ai-api-management'
    },
    {
      id: 'infrastructure-monitoring',
      name: 'Infrastructure Monitoring & Management',
      description: 'Comprehensive infrastructure monitoring with real-time alerts, performance optimization, and predictive analytics.',
      icon: Monitor,
      category: 'Monitoring & Management',
      price: '$899/month',
      features: [
        'Real-time infrastructure monitoring',
        'Performance analytics and reporting',
        'Predictive failure detection',
        'Automated alerting and escalation',
        'Capacity planning and optimization',
        'Log management and analysis',
        'Custom dashboard creation',
        'Integration with existing tools'
      ],
      benefits: [
        'Reduce downtime by 70%',
        'Improve system performance by 50%',
        'Prevent failures before they occur',
        'Optimize resource utilization'
      ],
      marketPrice: '$1,799-5,999/month',
      targetAudience: 'IT operations, DevOps teams',
      href: '/ai-infrastructure-monitoring'
    },
    {
      id: 'edge-computing',
      name: 'Edge Computing Solutions',
      description: 'Edge computing infrastructure and services for low-latency applications and distributed processing.',
      icon: Cpu,
      category: 'Edge & IoT',
      price: '$1,299/month',
      features: [
        'Edge infrastructure deployment',
        'IoT device management',
        'Real-time data processing',
        'Edge AI and machine learning',
        'Content delivery optimization',
        'Edge security and compliance',
        'Performance monitoring',
        'Global edge network management'
      ],
      benefits: [
        'Reduce latency by 80%',
        'Improve application performance',
        'Enable real-time processing',
        'Reduce bandwidth costs'
      ],
      marketPrice: '$2,499-7,999/month',
      targetAudience: 'IoT companies, real-time applications',
      href: '/ai-edge-computing'
    },
    {
      id: 'content-delivery-network',
      name: 'Content Delivery Network (CDN)',
      description: 'Global CDN services with intelligent caching, optimization, and security for fast content delivery.',
      icon: Globe,
      category: 'Content & Media',
      price: '$599/month',
      features: [
        'Global CDN infrastructure',
        'Intelligent caching strategies',
        'Image and video optimization',
        'DDoS protection and security',
        'Real-time analytics and reporting',
        'Custom edge rules and configurations',
        'API acceleration',
        'Mobile optimization'
      ],
      benefits: [
        'Improve page load times by 60%',
        'Reduce bandwidth costs by 40%',
        'Enhance user experience globally',
        'Protect against DDoS attacks'
      ],
      marketPrice: '$999-4,999/month',
      targetAudience: 'Websites, e-commerce, media companies',
      href: '/ai-content-delivery-network'
    },
    {
      id: 'database-management',
      name: 'Database Management & Optimization',
      description: 'Comprehensive database services including design, optimization, migration, and performance tuning.',
      icon: Database,
      category: 'Data & Analytics',
      price: '$1,799/month',
      features: [
        'Database design and architecture',
        'Performance optimization and tuning',
        'Database migration services',
        'Backup and disaster recovery',
        'Security and compliance',
        'Monitoring and alerting',
        'Query optimization',
        'Scalability planning'
      ],
      benefits: [
        'Improve database performance by 70%',
        'Reduce query response times by 80%',
        'Enhance data security and compliance',
        'Optimize storage and costs'
      ],
      marketPrice: '$2,999-9,999/month',
      targetAudience: 'Enterprises, data-driven companies',
      href: '/ai-database-management'
    },
    {
      id: 'network-solutions',
      name: 'Network Infrastructure Solutions',
      description: 'Complete network design, implementation, and management services for enterprise networking needs.',
      icon: Network,
      category: 'Networking',
      price: '$1,399/month',
      features: [
        'Network design and architecture',
        'LAN/WAN implementation',
        'Wireless network solutions',
        'Network security and firewalls',
        'VPN and remote access',
        'Network monitoring and management',
        'Performance optimization',
        'Disaster recovery planning'
      ],
      benefits: [
        'Improve network performance by 50%',
        'Enhance security and reliability',
        'Reduce network downtime',
        'Optimize network costs'
      ],
      marketPrice: '$2,499-7,999/month',
      targetAudience: 'Enterprises, offices, remote teams',
      href: '/ai-network-solutions'
    },
    {
      id: 'devops-automation',
      name: 'DevOps & CI/CD Automation',
      description: 'Complete DevOps transformation with CI/CD pipelines, automation, and infrastructure management.',
      icon: GitBranch,
      category: 'DevOps & Automation',
      price: '$2,499/month',
      features: [
        'CI/CD pipeline implementation',
        'Infrastructure automation',
        'Container orchestration (Kubernetes)',
        'Configuration management',
        'Monitoring and logging',
        'Security integration',
        'Performance optimization',
        'Team training and support'
      ],
      benefits: [
        'Accelerate deployment by 80%',
        'Reduce deployment failures by 90%',
        'Improve team productivity by 60%',
        'Enhance system reliability'
      ],
      marketPrice: '$4,999-14,999/month',
      targetAudience: 'Development teams, enterprises',
      href: '/ai-devops-automation'
    },
    {
      id: 'managed-it-services',
      name: 'Managed IT Services',
      description: 'Comprehensive managed IT services including help desk, maintenance, and proactive support.',
      icon: Settings,
      category: 'Managed Services',
      price: '$1,999/month',
      features: [
        '24/7 help desk support',
        'Proactive monitoring and maintenance',
        'Software and hardware management',
        'Security updates and patches',
        'Backup and disaster recovery',
        'User training and support',
        'IT asset management',
        'Compliance and reporting'
      ],
      benefits: [
        'Reduce IT costs by 30%',
        'Improve system uptime by 95%',
        'Enhance security posture',
        'Free up internal IT resources'
      ],
      marketPrice: '$3,999-12,999/month',
      targetAudience: 'Small to medium businesses',
      href: '/ai-managed-it-services'
    },
    {
      id: 'data-backup-recovery',
      name: 'Data Backup & Recovery Solutions',
      description: 'Comprehensive data protection with automated backups, disaster recovery, and business continuity planning.',
      icon: HardDrive,
      category: 'Data Protection',
      price: '$799/month',
      features: [
        'Automated backup solutions',
        'Disaster recovery planning',
        'Data replication and synchronization',
        'Recovery testing and validation',
        'Compliance and retention policies',
        'Cloud and on-premises options',
        'Monitoring and alerting',
        'Rapid recovery procedures'
      ],
      benefits: [
        'Protect against data loss',
        'Minimize recovery time by 90%',
        'Ensure business continuity',
        'Meet compliance requirements'
      ],
      marketPrice: '$1,499-4,999/month',
      targetAudience: 'All businesses, critical data',
      href: '/ai-data-backup-recovery'
    },
    {
      id: 'it-consulting',
      name: 'IT Strategy & Consulting',
      description: 'Strategic IT consulting services for digital transformation, technology planning, and implementation guidance.',
      icon: Briefcase,
      category: 'Consulting',
      price: '$299/hour',
      features: [
        'IT strategy development',
        'Technology assessment and planning',
        'Digital transformation guidance',
        'Vendor selection and management',
        'Project management and oversight',
        'Change management support',
        'Training and knowledge transfer',
        'Ongoing advisory services'
      ],
      benefits: [
        'Align IT with business goals',
        'Reduce technology risks',
        'Optimize IT investments',
        'Accelerate digital transformation'
      ],
      marketPrice: '$399-799/hour',
      targetAudience: 'Executives, IT leaders',
      href: '/ai-it-consulting'
    }
  ];

  const categories = [
    'All',
    'Cloud Services',
    'Security & Compliance',
    'Development & Integration',
    'Monitoring & Management',
    'Edge & IoT',
    'Content & Media',
    'Data & Analytics',
    'Networking',
    'DevOps & Automation',
    'Managed Services',
    'Data Protection',
    'Consulting'
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = itServices.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
              <Server className="w-4 h-4 mr-2" />
              Enterprise IT Solutions
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Comprehensive IT Services
            </span>
            <br />
            <span className="text-3xl md:text-5xl lg:text-6xl">
              for Modern Enterprises
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your IT infrastructure with our comprehensive suite of enterprise-grade services. From cloud migration 
            and cybersecurity to DevOps automation and managed services, we deliver solutions that drive efficiency and growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2 group"
            >
              <span>Explore IT Solutions</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 inline-flex items-center space-x-2"
            >
              <span>Call (302) 464-0950</span>
            </a>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search IT services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
              />
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {selectedCategory === 'All' ? 'All IT Services' : `${selectedCategory} Services`}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {filteredServices.length} service{filteredServices.length !== 1 ? 's' : ''} found
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div
                key={service.id}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-slate-800/70 transition-all duration-300 group border border-slate-700 hover:border-cyan-500/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                    <div className="text-sm text-gray-400">
                      {service.price.includes('/hour') ? 'per hour' : 'per month'}
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.name}
                </h3>
                
                <div className="inline-block px-3 py-1 bg-cyan-500/10 text-cyan-400 text-sm font-medium rounded-full mb-4">
                  {service.category}
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-white font-semibold mb-2 flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      Key Features
                    </h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-300 flex items-center">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-2 flex items-center">
                      <TrendingUp className="w-4 h-4 text-green-400 mr-2" />
                      Benefits
                    </h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <li key={idx} className="text-sm text-gray-300 flex items-center">
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                  <div className="flex items-center">
                    <DollarSign className="w-4 h-4 mr-1" />
                    <span>Market: {service.marketPrice}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    <span>{service.targetAudience}</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Link
                    to={service.href}
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center space-x-2 group"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a
                    href="/contact"
                    className="px-6 py-3 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 rounded-lg font-semibold transition-all duration-300"
                  >
                    Contact
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Partner with us to build a robust, scalable, and secure IT infrastructure that drives your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2 group"
            >
              <span>Start Your IT Transformation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2"
            >
              <span>(302) 464-0950</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ItServicesPage;
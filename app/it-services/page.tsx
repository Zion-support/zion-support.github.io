'use client';
'use client';
import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Cloud, Shield, Settings, Database, Smartphone, Lock, BarChart, Users, 
  CheckCircle, ArrowRight, Phone, Mail, MapPin, Clock, Star, Zap, Cpu, 
  HardDrive, Wifi, Server, Code, Globe, Target, TrendingUp, Award, 
  Monitor, Network, RefreshCw, AlertTriangle, Headphones, FileText,
  Search, Filter, Building, Building2, Router, Laptop, Printer, Storage,
  Database as DatabaseIcon, Server as ServerIcon, Cloud as CloudIcon,
  Shield as SecurityIcon, Lock as LockIcon, Key, Eye, EyeOff, Info,
  HelpCircle, ExternalLink, ChevronRight, ChevronDown, Plus, Minus, X,
  Menu, Maximize, Minimize, RotateCcw, RotateCw, Move, Copy, Edit,
  Trash2, Save, Share, Link, Unlink, Unlock, Volume2, VolumeX, Mic,
  MicOff, Video, VideoOff, Camera, CameraOff, Image, ImageOff, File,
  Folder, FolderOpen, Archive, Inbox, Outbox, Send, Mail as MailIcon,
  MailOpen, Reply, Forward, Flag, Bookmark, Tag, Tags, Hash, AtSign,
  DollarSign, Percent, Timer, Layers, Workflow, Bot, Download, Upload,
  Play, Pause, Square, Circle, Triangle, Hexagon, Octagon, Diamond,
  Heart, ThumbsUp, ThumbsDown, AlertCircle, ExclamationTriangle,
  ExclamationCircle, QuestionMarkCircle, Lightbulb, Bulb, Sun, Moon,
  CloudRain, CloudSnow, CloudLightning, Wind, Droplets, Flame, Snowflake,
  Thunder, Rainbow, Sunrise, Sunset, Compass, Map, Navigation as NavIcon,
  Route, Home, Store, Factory, Warehouse, Hospital, School, University,
  Church, Mosque, Synagogue, Temple, Bank, CreditCard, Wallet, Coins,
  Banknote, Receipt, Calculator, PieChart, LineChart, Activity,
  TrendingDown, ArrowUp, ArrowDown, ArrowLeft, ArrowUpRight, ArrowDownRight,
  ArrowUpLeft, ArrowDownLeft, ArrowUpDown, ArrowLeftRight, ArrowRightLeft,
  ChevronUp, ChevronLeft, DoubleChevronUp, DoubleChevronDown, DoubleChevronLeft,
  DoubleChevronRight, ChevronsUp, ChevronsDown, ChevronsLeft, ChevronsRight,
  MoveUp, MoveDown, MoveLeft, MoveRight, RotateCcw as RotateCcwIcon,
  RotateCw as RotateCwIcon, Grid3X3, ShoppingCart, ShoppingBag, ShoppingBasket,
  Cart, Basket, Bag, Package, Box, Container, Truck, Car, Bus, Train, Plane,
  Ship, Bike, Scooter, Motorcycle, Van, Taxi, Ambulance, FireTruck, PoliceCar
} from 'lucide-react';

export default function ITServicesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const itServices = useMemo(() => [
    // IT Consulting & Strategy
    {
      id: 'it-strategy-consulting',
      name: 'IT Strategy Consulting',
      description: 'Comprehensive IT strategy development, technology assessment, and digital transformation roadmap for enterprise organizations.',
      category: 'consulting',
      price: { starting: 250, period: 'hour' },
      rating: 4.9,
      reviews: 1847,
      features: [
        'IT strategy development and planning',
        'Technology assessment and evaluation',
        'Digital transformation roadmap creation',
        'Cost optimization analysis and recommendations',
        'Risk assessment and mitigation strategies',
        'Implementation planning and project management',
        'Technology vendor evaluation and selection',
        'Change management and training programs'
      ],
      icon: Target,
      popular: true,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30',
      textColor: 'text-blue-400',
      stats: { projects: '500+', rating: 4.9, clients: '300+' },
      demo: 'https://demo.ziontechgroup.com/it-consulting',
      docs: 'https://docs.ziontechgroup.com/it-consulting',
      benefits: [
        '40% reduction in IT costs',
        '60% improvement in operational efficiency',
        'Enhanced security posture',
        'Future-proof technology stack'
      ]
    },
    {
      id: 'digital-transformation',
      name: 'Digital Transformation Services',
      description: 'End-to-end digital transformation solutions that modernize business processes and drive innovation across all departments.',
      category: 'consulting',
      price: { starting: 50000, period: 'project' },
      rating: 4.8,
      reviews: 1234,
      features: [
        'Business process analysis and optimization',
        'Legacy system modernization',
        'Cloud-first architecture design',
        'Data migration and integration',
        'Change management and training',
        'Performance monitoring and optimization',
        'ROI measurement and reporting',
        'Ongoing support and maintenance'
      ],
      icon: TrendingUp,
      popular: true,
      color: 'from-purple-500 to-indigo-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30',
      textColor: 'text-purple-400',
      stats: { transformations: '200+', success: '95%', savings: '35%' },
      demo: 'https://demo.ziontechgroup.com/digital-transformation',
      docs: 'https://docs.ziontechgroup.com/digital-transformation',
      benefits: [
        '35% cost savings through automation',
        '95% successful transformation rate',
        'Improved customer experience',
        'Enhanced competitive advantage'
      ]
    },
    // Cloud Infrastructure & Services
    {
      id: 'cloud-infrastructure',
      name: 'Cloud Infrastructure Solutions',
      description: 'Comprehensive cloud infrastructure design, migration, and management with AWS, Azure, and Google Cloud expertise.',
      category: 'infrastructure',
      price: { starting: 2999, period: 'month' },
      rating: 4.9,
      reviews: 2156,
      features: [
        'Multi-cloud architecture design and implementation',
        'Cloud migration planning and execution',
        'Infrastructure as Code (IaC) automation',
        'Auto-scaling and load balancing configuration',
        'Disaster recovery and backup solutions',
        'Cost optimization and monitoring',
        'Security hardening and compliance',
        '24/7 monitoring and support'
      ],
      icon: Cloud,
      popular: true,
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/30',
      textColor: 'text-cyan-400',
      stats: { uptime: '99.9%', savings: '50%', migrations: '300+' },
      demo: 'https://demo.ziontechgroup.com/cloud-infrastructure',
      docs: 'https://docs.ziontechgroup.com/cloud-infrastructure',
      benefits: [
        '50% reduction in infrastructure costs',
        '99.9% uptime guarantee',
        'Scalable and flexible infrastructure',
        'Enhanced security and compliance'
      ]
    },
    {
      id: 'hybrid-cloud-solutions',
      name: 'Hybrid Cloud Solutions',
      description: 'Seamless integration between on-premises and cloud environments for optimal performance and cost efficiency.',
      category: 'infrastructure',
      price: { starting: 3999, period: 'month' },
      rating: 4.7,
      reviews: 987,
      features: [
        'Hybrid cloud architecture design',
        'On-premises to cloud integration',
        'Data synchronization and replication',
        'Workload optimization and placement',
        'Security and compliance management',
        'Performance monitoring and optimization',
        'Disaster recovery planning',
        'Cost management and optimization'
      ],
      icon: Network,
      popular: false,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30',
      textColor: 'text-green-400',
      stats: { efficiency: '+40%', cost: '-30%', uptime: '99.8%' },
      demo: 'https://demo.ziontechgroup.com/hybrid-cloud',
      docs: 'https://docs.ziontechgroup.com/hybrid-cloud',
      benefits: [
        '40% improvement in operational efficiency',
        '30% reduction in total cost of ownership',
        'Flexible workload placement',
        'Seamless data integration'
      ]
    },
    // Cybersecurity & Compliance
    {
      id: 'cybersecurity-suite',
      name: 'Advanced Cybersecurity Suite',
      description: 'Comprehensive cybersecurity solutions including threat detection, vulnerability assessment, and incident response.',
      category: 'security',
      price: { starting: 3999, period: 'month' },
      rating: 4.9,
      reviews: 1654,
      features: [
        'Advanced threat detection and prevention',
        'Vulnerability assessment and penetration testing',
        'Security monitoring and incident response',
        'Compliance management (SOC2, ISO27001, GDPR)',
        'Security awareness training programs',
        'Endpoint detection and response (EDR)',
        'Network security monitoring',
        '24/7 security operations center (SOC)'
      ],
      icon: Shield,
      popular: true,
      color: 'from-red-500 to-orange-500',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/30',
      textColor: 'text-red-400',
      stats: { threats: '1M+', accuracy: '99.5%', response: '<5min' },
      demo: 'https://demo.ziontechgroup.com/cybersecurity',
      docs: 'https://docs.ziontechgroup.com/cybersecurity',
      benefits: [
        '99.5% threat detection accuracy',
        'Sub-5-minute incident response time',
        'Comprehensive compliance assurance',
        '24/7 security monitoring'
      ]
    },
    {
      id: 'compliance-management',
      name: 'Compliance Management System',
      description: 'Automated compliance management solution ensuring adherence to industry regulations and standards.',
      category: 'security',
      price: { starting: 2499, period: 'month' },
      rating: 4.8,
      reviews: 1234,
      features: [
        'Automated compliance monitoring and reporting',
        'Regulatory change detection and alerts',
        'Risk assessment and scoring',
        'Audit trail generation and management',
        'Policy management and enforcement',
        'Training and certification tracking',
        'Documentation and evidence collection',
        'Multi-jurisdiction compliance support'
      ],
      icon: Lock,
      popular: false,
      color: 'from-amber-500 to-yellow-500',
      bgColor: 'bg-amber-500/10',
      borderColor: 'border-amber-500/30',
      textColor: 'text-amber-400',
      stats: { compliance: '100%', regulations: '200+', audits: '500+' },
      demo: 'https://demo.ziontechgroup.com/compliance',
      docs: 'https://docs.ziontechgroup.com/compliance',
      benefits: [
        '100% compliance assurance',
        '200+ regulation coverage',
        'Automated audit preparation',
        'Real-time risk monitoring'
      ]
    },
    // IT Support & Managed Services
    {
      id: 'managed-it-services',
      name: 'Managed IT Services',
      description: 'Comprehensive IT support and maintenance services with 24/7 monitoring and proactive issue resolution.',
      category: 'support',
      price: { starting: 1999, period: 'month' },
      rating: 4.8,
      reviews: 2789,
      features: [
        '24/7 help desk and technical support',
        'Proactive system monitoring and maintenance',
        'Remote and on-site support services',
        'Hardware and software management',
        'Backup and disaster recovery services',
        'Security updates and patch management',
        'Performance optimization and tuning',
        'IT asset management and tracking'
      ],
      icon: Users,
      popular: true,
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-500/10',
      borderColor: 'border-indigo-500/30',
      textColor: 'text-indigo-400',
      stats: { response: '<15min', uptime: '99.9%', satisfaction: '98%' },
      demo: 'https://demo.ziontechgroup.com/managed-it',
      docs: 'https://docs.ziontechgroup.com/managed-it',
      benefits: [
        'Sub-15-minute response time',
        '99.9% system uptime guarantee',
        '98% customer satisfaction rate',
        'Proactive issue prevention'
      ]
    },
    {
      id: 'it-helpdesk',
      name: 'IT Help Desk Solutions',
      description: 'Advanced help desk and ticketing system with AI-powered automation and self-service capabilities.',
      category: 'support',
      price: { starting: 999, period: 'month' },
      rating: 4.7,
      reviews: 1456,
      features: [
        'AI-powered ticket routing and prioritization',
        'Self-service portal and knowledge base',
        'Multi-channel support (email, phone, chat)',
        'Automated issue resolution workflows',
        'Performance analytics and reporting',
        'Integration with existing systems',
        'Mobile app for technicians',
        'Customer satisfaction tracking'
      ],
      icon: Headphones,
      popular: false,
      color: 'from-teal-500 to-cyan-500',
      bgColor: 'bg-teal-500/10',
      borderColor: 'border-teal-500/30',
      textColor: 'text-teal-400',
      stats: { resolution: '80%', satisfaction: '95%', tickets: '10K+' },
      demo: 'https://demo.ziontechgroup.com/helpdesk',
      docs: 'https://docs.ziontechgroup.com/helpdesk',
      benefits: [
        '80% automated ticket resolution',
        '95% customer satisfaction rate',
        'Reduced resolution time by 60%',
        'Comprehensive self-service options'
      ]
    },
    // Database & Data Management
    {
      id: 'database-management',
      name: 'Database Management Services',
      description: 'Comprehensive database administration, optimization, and management for all major database platforms.',
      category: 'database',
      price: { starting: 1799, period: 'month' },
      rating: 4.8,
      reviews: 1234,
      features: [
        'Database design and architecture',
        'Performance tuning and optimization',
        'Backup and disaster recovery planning',
        'Data migration and integration',
        'Security hardening and access control',
        'Monitoring and alerting systems',
        'Capacity planning and scaling',
        'Compliance and audit support'
      ],
      icon: Database,
      popular: true,
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/30',
      textColor: 'text-emerald-400',
      stats: { performance: '+50%', uptime: '99.9%', databases: '500+' },
      demo: 'https://demo.ziontechgroup.com/database',
      docs: 'https://docs.ziontechgroup.com/database',
      benefits: [
        '50% improvement in database performance',
        '99.9% database uptime guarantee',
        'Automated backup and recovery',
        'Expert database administration'
      ]
    },
    {
      id: 'data-analytics-platform',
      name: 'Data Analytics Platform',
      description: 'Advanced data analytics and business intelligence platform for data-driven decision making.',
      category: 'database',
      price: { starting: 2999, period: 'month' },
      rating: 4.7,
      reviews: 987,
      features: [
        'Data warehouse design and implementation',
        'ETL/ELT pipeline development',
        'Real-time data processing and analytics',
        'Interactive dashboards and reporting',
        'Machine learning model integration',
        'Data visualization and storytelling',
        'Self-service analytics tools',
        'Data governance and quality management'
      ],
      icon: BarChart,
      popular: false,
      color: 'from-violet-500 to-purple-500',
      bgColor: 'bg-violet-500/10',
      borderColor: 'border-violet-500/30',
      textColor: 'text-violet-400',
      stats: { insights: '10M+', users: '1000+', reports: '50K+' },
      demo: 'https://demo.ziontechgroup.com/analytics',
      docs: 'https://docs.ziontechgroup.com/analytics',
      benefits: [
        'Real-time business insights',
        'Self-service analytics capabilities',
        'Advanced data visualization',
        'Machine learning integration'
      ]
    },
    // Network & Infrastructure
    {
      id: 'network-solutions',
      name: 'Network Infrastructure Solutions',
      description: 'Design, implementation, and management of secure, high-performance network infrastructure.',
      category: 'network',
      price: { starting: 2199, period: 'month' },
      rating: 4.8,
      reviews: 1456,
      features: [
        'Network design and architecture',
        'Security implementation and hardening',
        'Performance optimization and monitoring',
        'Wireless network deployment',
        'VPN and remote access solutions',
        'Load balancing and traffic management',
        'Network automation and orchestration',
        '24/7 network monitoring and support'
      ],
      icon: Wifi,
      popular: true,
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/30',
      textColor: 'text-orange-400',
      stats: { uptime: '99.9%', speed: '+200%', security: '100%' },
      demo: 'https://demo.ziontechgroup.com/network',
      docs: 'https://docs.ziontechgroup.com/network',
      benefits: [
        '99.9% network uptime guarantee',
        '200% improvement in network speed',
        '100% security compliance',
        '24/7 network monitoring'
      ]
    },
    {
      id: 'sd-wan-solutions',
      name: 'SD-WAN Solutions',
      description: 'Software-defined wide area network solutions for improved connectivity, security, and performance.',
      category: 'network',
      price: { starting: 1599, period: 'month' },
      rating: 4.6,
      reviews: 876,
      features: [
        'SD-WAN design and implementation',
        'Multi-site connectivity optimization',
        'Application-aware routing',
        'Security integration and management',
        'Performance monitoring and analytics',
        'Cloud connectivity optimization',
        'Bandwidth management and QoS',
        'Centralized management and control'
      ],
      icon: Router,
      popular: false,
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-500/10',
      borderColor: 'border-pink-500/30',
      textColor: 'text-pink-400',
      stats: { cost: '-40%', performance: '+300%', sites: '100+' },
      demo: 'https://demo.ziontechgroup.com/sd-wan',
      docs: 'https://docs.ziontechgroup.com/sd-wan',
      benefits: [
        '40% reduction in WAN costs',
        '300% improvement in application performance',
        'Simplified network management',
        'Enhanced security and compliance'
      ]
    },
    // DevOps & Automation
    {
      id: 'devops-services',
      name: 'DevOps & Automation Services',
      description: 'Comprehensive DevOps implementation with CI/CD pipelines, infrastructure automation, and monitoring solutions.',
      category: 'devops',
      price: { starting: 3299, period: 'month' },
      rating: 4.9,
      reviews: 1987,
      features: [
        'CI/CD pipeline design and implementation',
        'Infrastructure as Code (IaC) automation',
        'Container orchestration and management',
        'Monitoring and observability solutions',
        'Security integration and compliance',
        'Performance optimization and scaling',
        'Disaster recovery and backup automation',
        'Team training and best practices'
      ],
      icon: Code,
      popular: true,
      color: 'from-slate-500 to-gray-500',
      bgColor: 'bg-slate-500/10',
      borderColor: 'border-slate-500/30',
      textColor: 'text-slate-400',
      stats: { deployment: '10x', downtime: '-90%', efficiency: '+200%' },
      demo: 'https://demo.ziontechgroup.com/devops',
      docs: 'https://docs.ziontechgroup.com/devops',
      benefits: [
        '10x faster deployment cycles',
        '90% reduction in downtime',
        '200% improvement in team efficiency',
        'Automated infrastructure management'
      ]
    },
    {
      id: 'container-orchestration',
      name: 'Container Orchestration Platform',
      description: 'Kubernetes and container orchestration solutions for scalable, resilient application deployment.',
      category: 'devops',
      price: { starting: 2499, period: 'month' },
      rating: 4.7,
      reviews: 1234,
      features: [
        'Kubernetes cluster design and deployment',
        'Container registry and image management',
        'Service mesh implementation',
        'Auto-scaling and load balancing',
        'Monitoring and logging solutions',
        'Security scanning and compliance',
        'Backup and disaster recovery',
        'Multi-cloud and hybrid deployment'
      ],
      icon: Container,
      popular: false,
      color: 'from-blue-600 to-indigo-600',
      bgColor: 'bg-blue-600/10',
      borderColor: 'border-blue-600/30',
      textColor: 'text-blue-400',
      stats: { scaling: '100x', efficiency: '+150%', cost: '-30%' },
      demo: 'https://demo.ziontechgroup.com/containers',
      docs: 'https://docs.ziontechgroup.com/containers',
      benefits: [
        '100x application scaling capability',
        '150% improvement in resource efficiency',
        '30% reduction in infrastructure costs',
        'Simplified application management'
      ]
    }
  ], []);

  const categories = [
    { id: 'all', name: 'All IT Services', icon: Grid3X3, count: itServices.length },
    { id: 'consulting', name: 'IT Consulting', icon: Target, count: itServices.filter(s => s.category === 'consulting').length },
    { id: 'infrastructure', name: 'Infrastructure', icon: Cloud, count: itServices.filter(s => s.category === 'infrastructure').length },
    { id: 'security', name: 'Security & Compliance', icon: Shield, count: itServices.filter(s => s.category === 'security').length },
    { id: 'support', name: 'IT Support', icon: Users, count: itServices.filter(s => s.category === 'support').length },
    { id: 'database', name: 'Database & Analytics', icon: Database, count: itServices.filter(s => s.category === 'database').length },
    { id: 'network', name: 'Network Solutions', icon: Wifi, count: itServices.filter(s => s.category === 'network').length },
    { id: 'devops', name: 'DevOps & Automation', icon: Code, count: itServices.filter(s => s.category === 'devops').length }
  ];

  const filteredServices = useMemo(() => {
    let filtered = itServices;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    // Sort services
    switch (sortBy) {
      case 'popular':
        filtered = filtered.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
        break;
      case 'price-low':
        filtered = filtered.sort((a, b) => a.price.starting - b.price.starting);
        break;
      case 'price-high':
        filtered = filtered.sort((a, b) => b.price.starting - a.price.starting);
        break;
      case 'rating':
        filtered = filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'name':
        filtered = filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return filtered;
  }, [itServices, selectedCategory, searchTerm, sortBy]);

  const formatPrice = (price: typeof itServices[0]['price']) => {
    if (price.period === 'hour') {
      return `$${price.starting}/hour`;
    } else if (price.period === 'project') {
      return `$${price.starting.toLocaleString()}/project`;
    } else {
      return `$${price.starting.toLocaleString()}/${price.period === 'month' ? 'mo' : 'yr'}`;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Helmet>
        <title>IT Services - Zion Tech Group | Enterprise IT Solutions</title>
        <meta name="description" content="Comprehensive IT services including cloud infrastructure, cybersecurity, network solutions, and system administration. Enterprise-grade IT support and consulting." />
        <meta name="keywords" content="it services, cloud infrastructure, cybersecurity, network solutions, system administration, it consulting, managed it services, devops, database management" />
        <link rel="canonical" href="https://ziontechgroup.com/it-services" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text cyber-text">
            IT <span className="holographic-text">Services</span>
          </h1>
          <p className="text-xl text-cyan-400 mb-8 font-medium cyber-glow">
            Enterprise-Grade IT Solutions and Support
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Comprehensive IT services including cloud infrastructure, cybersecurity, network solutions, and system administration. 
            Our expert team delivers enterprise-grade IT support and consulting to keep your business running smoothly.
          </p>
          
          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search IT services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              />
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-cyan-400 text-slate-900'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {category.name} ({category.count})
                  </button>
                );
              })}
            </div>

            {/* Sort Options */}
            <div className="flex justify-center">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <option value="popular">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="name">Alphabetical</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className={`cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300 ${service.borderColor} ${
                    service.popular ? 'ring-2 ring-cyan-400/50' : ''
                  }`}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 rounded-lg ${service.bgColor} flex items-center justify-center`}>
                        <Icon className={`w-6 h-6 ${service.textColor}`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{service.name}</h3>
                        {service.popular && (
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                            <Star className="w-3 h-3 mr-1" />
                            Popular
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">{formatPrice(service.price)}</div>
                      <div className="text-sm text-gray-400">starting</div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    {Object.entries(service.stats).slice(0, 2).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-cyan-400">{value}</div>
                        <div className="text-xs text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                      </div>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 4 && (
                        <li className="text-sm text-cyan-400">
                          +{service.features.length - 4} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(service.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-400'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-gray-400">
                        {service.rating} ({service.reviews.toLocaleString()} reviews)
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-3">
                    <a
                      href={service.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all text-center"
                    >
                      <Play className="w-4 h-4 inline mr-2" />
                      Demo
                    </a>
                    <a
                      href={service.docs}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-slate-700 text-white py-2 px-4 rounded-lg font-medium hover:bg-slate-600 transition-all text-center"
                    >
                      <FileText className="w-4 h-4 inline mr-2" />
                      Docs
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
          
          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No services found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6 neon-text">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our IT experts help you implement the perfect solution for your business needs. 
            Contact us today for a free consultation and discover how our IT services can revolutionize your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              ✉️ Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

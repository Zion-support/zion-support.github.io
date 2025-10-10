'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Cloud, 
  Shield, 
  Settings, 
  Database, 
  Smartphone, 
  Globe, 
  Zap, 
  ArrowRight,
  Search,
  CheckCircle,
  Server,
  Network,
  Lock,
  Code,
  BarChart3,
  Users,
  Headphones,
  Monitor,
  HardDrive,
  Wifi,
  Smartphone as Mobile,
  Laptop,
  Printer,
  Router,
  Filter,
  Clock,
  DollarSign,
  Star,
  Cpu,
  Brain,
  Sparkles
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

interface ITService {
  id: number;
  title: string;
  description: string;
  icon: any;
  category: string;
  features: string[];
  price: string;
  marketPrice: string;
  benefits: string[];
  demoUrl?: string;
  trialDays: number;
  popular: boolean;
  uptime: string;
  responseTime: string;
}

const ItServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const itServices: ITService[] = [
    {
      id: 1,
      title: 'Cloud Infrastructure & Migration',
      description: 'Complete cloud solutions including AWS, Azure, and GCP with seamless migration services and 99.9% uptime guarantee.',
      icon: Cloud,
      category: 'Cloud',
      features: [
        'Cloud architecture design and implementation',
        'Multi-cloud strategies (AWS, Azure, GCP)',
        'Cost optimization and monitoring',
        'Disaster recovery and backup',
        'Auto-scaling solutions',
        'Security compliance (SOC2, ISO27001)',
        'Migration planning and execution',
        'Performance optimization',
        '24/7 monitoring and support',
        'Cloud cost management'
      ],
      price: 'Starting at $2,500/month',
      marketPrice: '$4000-15000/month',
      benefits: ['99.9% uptime guarantee', 'Cost reduction up to 40%', 'Scalable infrastructure', 'Expert migration support', 'Reduce operational costs by 50%'],
      demoUrl: 'https://demo.ziontechgroup.com/cloud',
      trialDays: 14,
      popular: true,
      uptime: '99.9%',
      responseTime: '< 1 hour'
    },
    {
      id: 2,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services including threat detection, compliance, incident response, and 24/7 monitoring.',
      icon: Shield,
      category: 'Security',
      features: [
        'Threat detection and response',
        'Vulnerability assessments',
        'Penetration testing',
        'Security monitoring (24/7)',
        'Compliance management (SOC2, GDPR, HIPAA)',
        'Employee security training',
        'Incident response planning',
        'Security audits',
        'Firewall management',
        'Endpoint protection'
      ],
      price: 'Starting at $1,800/month',
      marketPrice: '$3000-12000/month',
      benefits: ['24/7 security monitoring', 'Reduce security incidents by 95%', 'Compliance assurance', 'Expert security team', 'Prevent data breaches'],
      demoUrl: 'https://demo.ziontechgroup.com/security',
      trialDays: 7,
      popular: true,
      uptime: '99.99%',
      responseTime: '< 15 minutes'
    },
    {
      id: 3,
      title: 'DevOps & CI/CD',
      description: 'Modern development operations with automated deployment, monitoring, infrastructure as code, and continuous integration.',
      icon: Settings,
      category: 'DevOps',
      features: [
        'CI/CD pipeline setup and optimization',
        'Infrastructure as Code (Terraform, CloudFormation)',
        'Container orchestration (Kubernetes, Docker)',
        'Monitoring and logging (ELK, Prometheus)',
        'Automated testing and deployment',
        'Version control management',
        'Environment management',
        'Performance monitoring',
        'Security scanning',
        'Disaster recovery automation'
      ],
      price: 'Starting at $2,200/month',
      marketPrice: '$3500-10000/month',
      benefits: ['Faster deployments (10x)', 'Reduced downtime by 90%', 'Improved code quality', 'Automated workflows', 'Increase development speed by 300%'],
      demoUrl: 'https://demo.ziontechgroup.com/devops',
      trialDays: 14,
      popular: false,
      uptime: '99.95%',
      responseTime: '< 30 minutes'
    },
    {
      id: 4,
      title: 'Database Management',
      description: 'Expert database design, optimization, and management for all major database systems with AI-powered performance tuning.',
      icon: Database,
      category: 'Database',
      features: [
        'Database design and optimization',
        'Performance tuning and monitoring',
        'Backup and recovery solutions',
        'Data migration and synchronization',
        'Security hardening',
        'Monitoring and maintenance',
        'Query optimization',
        'Index management',
        'Replication setup',
        'Disaster recovery planning'
      ],
      price: 'Starting at $1,200/month',
      marketPrice: '$2000-8000/month',
      benefits: ['Improved performance by 300%', 'Data security and compliance', 'Automated backups', 'Expert DBA support', 'Reduce database costs by 40%'],
      demoUrl: 'https://demo.ziontechgroup.com/database',
      trialDays: 14,
      popular: false,
      uptime: '99.9%',
      responseTime: '< 2 hours'
    },
    {
      id: 5,
      title: 'IT Infrastructure Management',
      description: 'Complete infrastructure setup and management including servers, networks, hardware, and cloud resources.',
      icon: Server,
      category: 'Infrastructure',
      features: [
        'Server setup and configuration',
        'Network design and implementation',
        'Hardware procurement and management',
        'System administration',
        'Performance monitoring',
        'Capacity planning',
        'Load balancing',
        'High availability setup',
        'Disaster recovery',
        'IT asset management'
      ],
      price: 'Starting at $1,500/month',
      marketPrice: '$2500-10000/month',
      benefits: ['Reliable infrastructure', 'Proactive monitoring', 'Cost optimization', 'Expert administration', 'Reduce infrastructure costs by 35%'],
      demoUrl: 'https://demo.ziontechgroup.com/infrastructure',
      trialDays: 14,
      popular: false,
      uptime: '99.8%',
      responseTime: '< 1 hour'
    },
    {
      id: 6,
      title: 'Managed IT Services',
      description: 'Comprehensive IT support and management including helpdesk, maintenance, monitoring, and 24/7 support.',
      icon: Headphones,
      category: 'Support',
      features: [
        '24/7 helpdesk support',
        'Remote monitoring and management',
        'Proactive maintenance',
        'Software management and updates',
        'User support and training',
        'Incident management',
        'Change management',
        'Asset tracking',
        'Security updates',
        'Performance optimization'
      ],
      price: 'Starting at $800/month',
      marketPrice: '$1200-5000/month',
      benefits: ['Reduced IT costs by 50%', 'Improved uptime by 99%', 'Expert support team', 'Proactive maintenance', 'Increase productivity by 40%'],
      demoUrl: 'https://demo.ziontechgroup.com/support',
      trialDays: 14,
      popular: true,
      uptime: '99.9%',
      responseTime: '< 15 minutes'
    },
    {
      id: 7,
      title: 'Web Development',
      description: 'Custom web applications and websites built with modern technologies, responsive design, and SEO optimization.',
      icon: Globe,
      category: 'Development',
      features: [
        'Custom web applications (React, Next.js, Vue)',
        'Responsive design (mobile-first)',
        'E-commerce solutions',
        'API development and integration',
        'Performance optimization',
        'Security implementation',
        'SEO optimization',
        'Content management systems',
        'Progressive Web Apps (PWA)',
        'Third-party integrations'
      ],
      price: 'Starting at $5,000/project',
      marketPrice: '$8000-50000/project',
      benefits: ['Modern technology stack', 'Mobile-responsive design', 'SEO optimization', 'Security best practices', 'Increase conversion rates by 200%'],
      demoUrl: 'https://demo.ziontechgroup.com/web',
      trialDays: 30,
      popular: false,
      uptime: '99.9%',
      responseTime: 'Variable'
    },
    {
      id: 8,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with modern UI/UX and AI integration.',
      icon: Smartphone,
      category: 'Development',
      features: [
        'iOS and Android native apps',
        'Cross-platform development (React Native, Flutter)',
        'UI/UX design and optimization',
        'App store optimization',
        'Push notifications',
        'Offline capabilities',
        'API integration',
        'Security implementation',
        'Performance optimization',
        'App maintenance and updates'
      ],
      price: 'Starting at $8,000/project',
      marketPrice: '$15000-100000/project',
      benefits: ['Native performance', 'Cross-platform compatibility', 'Modern UI/UX', 'App store optimization', 'Increase user engagement by 300%'],
      demoUrl: 'https://demo.ziontechgroup.com/mobile',
      trialDays: 30,
      popular: false,
      uptime: '99.9%',
      responseTime: 'Variable'
    },
    {
      id: 9,
      title: 'Data Analytics & BI',
      description: 'Business intelligence solutions with data visualization, reporting, analytics, and AI-powered insights.',
      icon: BarChart3,
      category: 'Analytics',
      features: [
        'Data visualization and dashboards',
        'Business intelligence solutions',
        'Custom reporting and analytics',
        'Data warehousing',
        'Predictive analytics',
        'Report automation',
        'Data integration',
        'Real-time analytics',
        'Machine learning integration',
        'Data governance'
      ],
      price: 'Starting at $1,800/month',
      marketPrice: '$3000-15000/month',
      benefits: ['Data-driven insights', 'Custom dashboards', 'Automated reporting', 'Predictive analytics', 'Improve decision making by 200%'],
      demoUrl: 'https://demo.ziontechgroup.com/analytics',
      trialDays: 14,
      popular: false,
      uptime: '99.9%',
      responseTime: '< 1 hour'
    },
    {
      id: 10,
      title: 'Network Solutions',
      description: 'Complete network design, implementation, and management including LAN, WAN, wireless, and security.',
      icon: Network,
      category: 'Networking',
      features: [
        'Network design and implementation',
        'Wireless solutions (WiFi 6, 5G)',
        'VPN setup and management',
        'Network security',
        'Performance optimization',
        'Monitoring and maintenance',
        'Load balancing',
        'Quality of Service (QoS)',
        'Network segmentation',
        'Disaster recovery'
      ],
      price: 'Starting at $1,000/month',
      marketPrice: '$1500-6000/month',
      benefits: ['Reliable connectivity', 'Enhanced security', 'Performance optimization', 'Expert management', 'Reduce network issues by 90%'],
      demoUrl: 'https://demo.ziontechgroup.com/network',
      trialDays: 14,
      popular: false,
      uptime: '99.8%',
      responseTime: '< 2 hours'
    },
    {
      id: 11,
      title: 'IT Consulting',
      description: 'Strategic IT consulting to help plan, implement, and optimize your technology infrastructure and digital transformation.',
      icon: Users,
      category: 'Consulting',
      features: [
        'IT strategy planning',
        'Technology assessment',
        'Digital transformation',
        'Vendor management',
        'Project management',
        'Change management',
        'Technology roadmaps',
        'Cost optimization',
        'Risk assessment',
        'Compliance consulting'
      ],
      price: 'Starting at $200/hour',
      marketPrice: '$300-500/hour',
      benefits: ['Strategic guidance', 'Technology expertise', 'Cost optimization', 'Digital transformation', 'Reduce IT costs by 30%'],
      demoUrl: 'https://demo.ziontechgroup.com/consulting',
      trialDays: 7,
      popular: false,
      uptime: 'N/A',
      responseTime: '< 24 hours'
    },
    {
      id: 12,
      title: 'Process Automation',
      description: 'Workflow automation solutions to streamline business processes, improve efficiency, and reduce manual work.',
      icon: Zap,
      category: 'Automation',
      features: [
        'Workflow automation',
        'Process optimization',
        'Integration solutions',
        'Document management',
        'Task automation',
        'Performance monitoring',
        'RPA (Robotic Process Automation)',
        'API automation',
        'Data processing automation',
        'Notification systems'
      ],
      price: 'Starting at $1,500/month',
      marketPrice: '$2500-8000/month',
      benefits: ['Improved efficiency by 200%', 'Reduced errors by 95%', 'Cost savings', 'Scalable automation', 'Save 40+ hours/week'],
      demoUrl: 'https://demo.ziontechgroup.com/automation',
      trialDays: 14,
      popular: true,
      uptime: '99.9%',
      responseTime: '< 1 hour'
    }
  ];

  const categories = [
    'all', 'Cloud', 'Security', 'DevOps', 'Database', 'Infrastructure', 
    'Support', 'Development', 'Analytics', 'Networking', 'Consulting', 'Automation'
  ];

  const filteredServices = itServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'popular':
        return b.popular ? 1 : -1;
      case 'price-low':
        return parseInt(a.price.replace('Starting at $', '').replace('/month', '')) - parseInt(b.price.replace('Starting at $', '').replace('/month', ''));
      case 'price-high':
        return parseInt(b.price.replace('Starting at $', '').replace('/month', '')) - parseInt(a.price.replace('Starting at $', '').replace('/month', ''));
      case 'name':
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  const stats = [
    { icon: <Server className="w-8 h-8 text-cyan-500" />, value: '500+', label: 'Servers Managed' },
    { icon: <Shield className="w-8 h-8 text-green-500" />, value: '99.9%', label: 'Security Uptime' },
    { icon: <Users className="w-8 h-8 text-purple-500" />, value: '200+', label: 'Clients Served' },
    { icon: <Zap className="w-8 h-8 text-orange-500" />, value: '50%', label: 'Cost Reduction' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 neural-network-bg matrix-rain">
      <Helmet>
        <title>IT Services - Zion Tech Group | Comprehensive Information Technology Solutions</title>
        <meta name="description" content="Complete IT services including cloud solutions, cybersecurity, infrastructure management, DevOps, and more. Expert IT support and consulting for modern businesses." />
        <meta name="keywords" content="IT services, cloud solutions, cybersecurity, IT infrastructure, managed IT, IT consulting, DevOps, database management, web development" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 holographic-text cyber-text glitch" data-text="IT Services">
              IT <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Complete IT solutions to modernize your infrastructure, enhance security, and drive business growth. 
              From cloud migration to cybersecurity, we deliver enterprise-grade technology services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="cyber-button w-full sm:w-auto text-center"
              >
                <Zap className="w-5 h-5 mr-2 inline" />
                Get Started
              </Link>
              <Link
                to="/consultation"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 w-full sm:w-auto text-center"
              >
                <MessageSquare className="w-5 h-5 mr-2 inline" />
                Free Consultation
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center cyber-card p-6">
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

        {/* Search and Filter Section */}
        <section className="py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="cyber-card p-6">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search IT services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                  />
                </div>
                <div className="relative md:w-64">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors appearance-none">
                    <option value="all" className="bg-slate-800">All Categories</option>
                    {categories.slice(1).map(category => (
                      <option key={category} value={category} className="bg-slate-800">
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="relative md:w-48">
                  <Settings className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors appearance-none">
                    <option value="popular" className="bg-slate-800">Most Popular</option>
                    <option value="price-low" className="bg-slate-800">Price: Low to High</option>
                    <option value="price-high" className="bg-slate-800">Price: High to Low</option>
                    <option value="name" className="bg-slate-800">Name A-Z</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.slice(1).map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-cyan-500 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
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
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6 neon-text">
                {selectedCategory === 'all' ? 'All IT Services' : `${selectedCategory} Services`}
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                {sortedServices.length} service{sortedServices.length !== 1 ? 's' : ''} found. Choose the perfect IT solution for your business needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedServices.map((service) => (
                <div
                  key={service.id}
                  className={`relative cyber-card hologram-card p-8 ${
                    service.popular
                      ? 'border-cyan-400 shadow-2xl shadow-cyan-500/25 scale-105'
                      : 'border-white/20'
                  } hover:border-cyan-400 transition-all duration-300 group`}
                >
                  {service.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                        <Star className="w-4 h-4 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                        <span className="text-lg text-gray-400 line-through ml-2">{service.marketPrice}</span>
                      </div>
                      <div className="text-sm text-gray-400">
                        {service.trialDays}-day trial
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="text-center">
                        <div className="text-cyan-400 font-bold">{service.uptime}</div>
                        <div className="text-gray-400">Uptime SLA</div>
                      </div>
                      <div className="text-center">
                        <div className="text-green-400 font-bold">{service.responseTime}</div>
                        <div className="text-gray-400">Response Time</div>
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 5).map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 5 && (
                      <li className="text-gray-400 text-sm">
                        +{service.features.length - 5} more features
                      </li>
                    )}
                  </ul>

                  <div className="space-y-3 mb-6">
                    <div className="text-sm">
                      <div className="text-gray-400 mb-2">Key Benefits:</div>
                      <div className="space-y-1">
                        {service.benefits.slice(0, 3).map((benefit, index) => (
                          <div key={index} className="text-cyan-400 text-sm">• {benefit}</div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <Link
                      to="/contact"
                      className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 transform hover:scale-105 text-center"
                    >
                      <Zap className="w-5 h-5 mr-2 inline" />
                      Get Started
                    </Link>
                    <div className="flex gap-2">
                      <Link
                        to={service.demoUrl || '/demo'}
                        className="flex-1 py-2 px-4 rounded-lg font-semibold transition-all duration-300 bg-white/10 text-white border border-white/20 hover:bg-white/20 text-center text-sm"
                      >
                        <Monitor className="w-4 h-4 mr-1 inline" />
                        Demo
                      </Link>
                      <Link
                        to="/contact"
                        className="flex-1 py-2 px-4 rounded-lg font-semibold transition-all duration-300 bg-white/10 text-white border border-white/20 hover:bg-white/20 text-center text-sm"
                      >
                        <MessageSquare className="w-4 h-4 mr-1 inline" />
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {sortedServices.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <p className="text-gray-500 text-lg">No services found matching your criteria.</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                  className="mt-4 text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Why Choose Our IT Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven expertise and results that drive business success with enterprise-grade IT solutions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="cyber-card p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Enterprise-Grade Security</h3>
                <p className="text-gray-300">Comprehensive security solutions with 24/7 monitoring and expert incident response.</p>
              </div>
              <div className="cyber-card p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Rapid Implementation</h3>
                <p className="text-gray-300">Quick deployment and setup with minimal downtime and maximum efficiency.</p>
              </div>
              <div className="cyber-card p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Expert Team</h3>
                <p className="text-gray-300">Certified professionals with years of experience in enterprise IT solutions.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="cyber-card hologram-card p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Ready to Modernize Your IT?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our IT experts to discuss your requirements and get a customized solution that drives business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="cyber-button w-full sm:w-auto text-center"
                >
                  <Zap className="w-5 h-5 mr-2 inline" />
                  Contact Us
                </Link>
                <Link
                  to="/consultation"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 w-full sm:w-auto text-center"
                >
                  <MessageSquare className="w-5 h-5 mr-2 inline" />
                  Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ItServicesPage;
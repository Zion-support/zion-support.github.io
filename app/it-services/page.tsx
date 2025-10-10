'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  ArrowRight, 
  Search, 
  Filter, 
  Star, 
  Zap, 
  Shield, 
  Cloud, 
  Database, 
  Network, 
  Smartphone, 
  Server, 
  Settings, 
  Users, 
  Lock, 
  Globe, 
  BarChart3, 
  Activity, 
  Cpu, 
  HardDrive, 
  Wifi, 
  Monitor, 
  Headphones, 
  FileText, 
  Clock, 
  Award, 
  TrendingUp,
  DollarSign,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

interface ITService {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  features: string[];
  price: string;
  originalPrice?: string;
  category: string;
  popular: boolean;
  link: string;
  marketPrice: string;
  benefits: string[];
  sla: string;
  responseTime: string;
}

const ITServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    'All', 'Cloud Services', 'Cybersecurity', 'Infrastructure', 'Support', 
    'Consulting', 'Development', 'Data Management', 'Networking', 'Compliance'
  ];

  const itServices: ITService[] = [
    // Cloud Services
    {
      id: '1',
      icon: Cloud,
      title: 'Cloud Migration & Management',
      description: 'Complete cloud migration services with AWS, Azure, and Google Cloud. We handle everything from planning to execution and ongoing management.',
      features: [
        'Multi-cloud strategy and planning',
        'Zero-downtime migration',
        'Cost optimization and monitoring',
        'Security and compliance setup',
        '24/7 cloud monitoring',
        'Auto-scaling configuration',
        'Disaster recovery planning',
        'Cloud governance and policies'
      ],
      price: '$2,999/month',
      originalPrice: '$4,999/month',
      category: 'Cloud Services',
      popular: true,
      link: '/cloud-migration-management',
      marketPrice: '$8,000-15,000/month',
      benefits: ['40% cost reduction', '99.9% uptime SLA', 'Zero downtime migration'],
      sla: '99.9%',
      responseTime: '15 minutes'
    },
    {
      id: '2',
      icon: Server,
      title: 'Hybrid Cloud Solutions',
      description: 'Seamless hybrid cloud infrastructure combining on-premises and cloud resources for optimal performance and cost efficiency.',
      features: [
        'Hybrid architecture design',
        'Data synchronization',
        'Workload optimization',
        'Security integration',
        'Cost management',
        'Performance monitoring',
        'Compliance management',
        'Migration planning'
      ],
      price: '$3,499/month',
      category: 'Cloud Services',
      popular: false,
      link: '/hybrid-cloud-solutions',
      marketPrice: '$10,000-20,000/month',
      benefits: ['Flexible infrastructure', 'Cost optimization', 'Seamless integration'],
      sla: '99.8%',
      responseTime: '30 minutes'
    },

    // Cybersecurity
    {
      id: '3',
      icon: Shield,
      title: 'Enterprise Security Suite',
      description: 'Comprehensive cybersecurity solution with 24/7 monitoring, threat detection, incident response, and compliance management.',
      features: [
        '24/7 security monitoring',
        'Threat detection and response',
        'Vulnerability management',
        'Penetration testing',
        'Security awareness training',
        'Compliance reporting (SOC2, GDPR)',
        'Incident response planning',
        'Security policy development'
      ],
      price: '$4,999/month',
      originalPrice: '$7,999/month',
      category: 'Cybersecurity',
      popular: true,
      link: '/enterprise-security-suite',
      marketPrice: '$15,000-30,000/month',
      benefits: ['Enterprise-grade security', '24/7 monitoring', 'Compliance automation'],
      sla: '99.9%',
      responseTime: '5 minutes'
    },
    {
      id: '4',
      icon: Lock,
      title: 'Zero Trust Security Architecture',
      description: 'Implement zero trust security model with identity verification, micro-segmentation, and continuous monitoring.',
      features: [
        'Identity and access management',
        'Network micro-segmentation',
        'Device trust verification',
        'Continuous monitoring',
        'Policy enforcement',
        'Threat intelligence',
        'Security analytics',
        'Compliance automation'
      ],
      price: '$3,999/month',
      category: 'Cybersecurity',
      popular: false,
      link: '/zero-trust-security',
      marketPrice: '$12,000-25,000/month',
      benefits: ['Enhanced security posture', 'Reduced attack surface', 'Continuous verification'],
      sla: '99.8%',
      responseTime: '10 minutes'
    },

    // Infrastructure
    {
      id: '5',
      icon: Server,
      title: 'IT Infrastructure Management',
      description: 'Complete IT infrastructure management including servers, storage, networking, and data center operations.',
      features: [
        'Server management and monitoring',
        'Storage optimization',
        'Network configuration',
        'Data center operations',
        'Capacity planning',
        'Performance optimization',
        'Backup and recovery',
        'Hardware lifecycle management'
      ],
      price: '$2,499/month',
      category: 'Infrastructure',
      popular: true,
      link: '/it-infrastructure-management',
      marketPrice: '$6,000-12,000/month',
      benefits: ['Optimized performance', 'Reduced downtime', 'Cost efficiency'],
      sla: '99.5%',
      responseTime: '30 minutes'
    },
    {
      id: '6',
      icon: Database,
      title: 'Database Administration',
      description: 'Professional database administration services with optimization, monitoring, backup, and security management.',
      features: [
        'Database performance tuning',
        'Backup and recovery planning',
        'Security and access control',
        'Capacity planning',
        'Migration and upgrades',
        'Monitoring and alerting',
        'Disaster recovery',
        'Compliance management'
      ],
      price: '$1,999/month',
      category: 'Data Management',
      popular: false,
      link: '/database-administration',
      marketPrice: '$5,000-10,000/month',
      benefits: ['Improved performance', 'Data protection', 'Reduced costs'],
      sla: '99.7%',
      responseTime: '20 minutes'
    },

    // Support Services
    {
      id: '7',
      icon: Headphones,
      title: '24/7 IT Support & Helpdesk',
      description: 'Round-the-clock IT support with expert technicians, remote assistance, and comprehensive helpdesk services.',
      features: [
        '24/7/365 support coverage',
        'Remote desktop assistance',
        'Hardware and software support',
        'User training and onboarding',
        'Incident management',
        'Knowledge base management',
        'Service level agreements',
        'Multi-channel support'
      ],
      price: '$1,299/month',
      originalPrice: '$1,999/month',
      category: 'Support',
      popular: true,
      link: '/24-7-it-support',
      marketPrice: '$3,000-6,000/month',
      benefits: ['Always available', 'Fast response times', 'Expert technicians'],
      sla: '99.9%',
      responseTime: '5 minutes'
    },
    {
      id: '8',
      icon: Users,
      title: 'Managed IT Services',
      description: 'Comprehensive managed IT services including monitoring, maintenance, updates, and proactive problem resolution.',
      features: [
        'Proactive monitoring',
        'Preventive maintenance',
        'Software updates and patches',
        'Security management',
        'Performance optimization',
        'Asset management',
        'Vendor management',
        'Strategic planning'
      ],
      price: '$2,999/month',
      category: 'Support',
      popular: false,
      link: '/managed-it-services',
      marketPrice: '$7,000-14,000/month',
      benefits: ['Proactive management', 'Reduced downtime', 'Cost predictability'],
      sla: '99.8%',
      responseTime: '15 minutes'
    },

    // Consulting Services
    {
      id: '9',
      icon: Settings,
      title: 'IT Strategy & Consulting',
      description: 'Strategic IT consulting to align technology with business goals, digital transformation, and technology roadmap development.',
      features: [
        'IT strategy development',
        'Digital transformation planning',
        'Technology assessment',
        'Vendor evaluation',
        'Cost optimization',
        'Risk assessment',
        'Compliance planning',
        'Change management'
      ],
      price: '$299/hour',
      category: 'Consulting',
      popular: true,
      link: '/it-strategy-consulting',
      marketPrice: '$500-800/hour',
      benefits: ['Strategic alignment', 'Cost optimization', 'Risk mitigation'],
      sla: 'N/A',
      responseTime: '24 hours'
    },
    {
      id: '10',
      icon: BarChart3,
      title: 'IT Audit & Assessment',
      description: 'Comprehensive IT audits and assessments to evaluate security, compliance, performance, and optimization opportunities.',
      features: [
        'Security vulnerability assessment',
        'Compliance audit',
        'Performance analysis',
        'Cost optimization review',
        'Risk assessment',
        'Best practices evaluation',
        'Recommendation report',
        'Implementation planning'
      ],
      price: '$4,999/assessment',
      category: 'Consulting',
      popular: false,
      link: '/it-audit-assessment',
      marketPrice: '$10,000-25,000/assessment',
      benefits: ['Comprehensive evaluation', 'Actionable recommendations', 'Risk identification'],
      sla: 'N/A',
      responseTime: '48 hours'
    },

    // Development Services
    {
      id: '11',
      icon: Globe,
      title: 'Custom Software Development',
      description: 'Custom software development services including web applications, mobile apps, and enterprise solutions.',
      features: [
        'Custom web applications',
        'Mobile app development',
        'API development',
        'Database design',
        'UI/UX design',
        'Testing and QA',
        'Deployment and maintenance',
        'Documentation and training'
      ],
      price: '$1,999/month',
      category: 'Development',
      popular: true,
      link: '/custom-software-development',
      marketPrice: '$5,000-15,000/month',
      benefits: ['Tailored solutions', 'Modern technologies', 'Ongoing support'],
      sla: '99.5%',
      responseTime: '24 hours'
    },
    {
      id: '12',
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile app development with modern frameworks and best practices.',
      features: [
        'iOS and Android development',
        'Cross-platform solutions',
        'UI/UX design',
        'App store optimization',
        'Push notifications',
        'Offline functionality',
        'Security implementation',
        'Performance optimization'
      ],
      price: '$2,499/month',
      category: 'Development',
      popular: false,
      link: '/mobile-app-development',
      marketPrice: '$6,000-20,000/month',
      benefits: ['Native performance', 'Cross-platform', 'App store ready'],
      sla: '99.5%',
      responseTime: '24 hours'
    },

    // Data Management
    {
      id: '13',
      icon: HardDrive,
      title: 'Data Backup & Recovery',
      description: 'Comprehensive data backup and disaster recovery solutions with automated backups and instant recovery capabilities.',
      features: [
        'Automated daily backups',
        'Real-time data replication',
        'Instant recovery options',
        'Disaster recovery planning',
        'Data encryption',
        'Compliance reporting',
        'Testing and validation',
        '24/7 monitoring'
      ],
      price: '$799/month',
      category: 'Data Management',
      popular: true,
      link: '/data-backup-recovery',
      marketPrice: '$2,000-5,000/month',
      benefits: ['Data protection', 'Quick recovery', 'Compliance ready'],
      sla: '99.9%',
      responseTime: '15 minutes'
    },
    {
      id: '14',
      icon: BarChart3,
      title: 'Business Intelligence & Analytics',
      description: 'Data analytics and business intelligence solutions with dashboards, reporting, and predictive analytics.',
      features: [
        'Data warehouse design',
        'ETL process development',
        'Interactive dashboards',
        'Automated reporting',
        'Predictive analytics',
        'Data visualization',
        'Self-service analytics',
        'Mobile BI access'
      ],
      price: '$2,999/month',
      category: 'Data Management',
      popular: false,
      link: '/business-intelligence-analytics',
      marketPrice: '$8,000-20,000/month',
      benefits: ['Data-driven insights', 'Automated reporting', 'Self-service analytics'],
      sla: '99.7%',
      responseTime: '30 minutes'
    },

    // Networking
    {
      id: '15',
      icon: Network,
      title: 'Network Design & Management',
      description: 'Complete network design, implementation, and management services for enterprise networking solutions.',
      features: [
        'Network architecture design',
        'LAN/WAN implementation',
        'Wireless network setup',
        'VPN configuration',
        'Load balancing',
        'Network security',
        'Performance monitoring',
        'Troubleshooting and support'
      ],
      price: '$1,999/month',
      category: 'Networking',
      popular: true,
      link: '/network-design-management',
      marketPrice: '$5,000-12,000/month',
      benefits: ['Optimized performance', 'Enhanced security', 'Reliable connectivity'],
      sla: '99.8%',
      responseTime: '20 minutes'
    },
    {
      id: '16',
      icon: Wifi,
      title: 'Wireless Network Solutions',
      description: 'Advanced wireless network solutions with enterprise-grade security, performance optimization, and management.',
      features: [
        'Enterprise wireless design',
        'Security implementation',
        'Performance optimization',
        'Guest network management',
        'Access point management',
        'Network monitoring',
        'Troubleshooting support',
        'Capacity planning'
      ],
      price: '$1,499/month',
      category: 'Networking',
      popular: false,
      link: '/wireless-network-solutions',
      marketPrice: '$3,000-8,000/month',
      benefits: ['High performance', 'Enterprise security', 'Easy management'],
      sla: '99.7%',
      responseTime: '25 minutes'
    },

    // Compliance
    {
      id: '17',
      icon: FileText,
      title: 'Compliance Management',
      description: 'Comprehensive compliance management services for SOC2, GDPR, HIPAA, and other regulatory requirements.',
      features: [
        'Compliance assessment',
        'Policy development',
        'Control implementation',
        'Audit preparation',
        'Documentation management',
        'Training programs',
        'Monitoring and reporting',
        'Remediation support'
      ],
      price: '$3,499/month',
      category: 'Compliance',
      popular: true,
      link: '/compliance-management',
      marketPrice: '$10,000-25,000/month',
      benefits: ['Regulatory compliance', 'Risk mitigation', 'Audit readiness'],
      sla: '99.5%',
      responseTime: '24 hours'
    },
    {
      id: '18',
      icon: Shield,
      title: 'Security Compliance Audit',
      description: 'Comprehensive security compliance audits to ensure adherence to industry standards and regulations.',
      features: [
        'Security framework assessment',
        'Gap analysis',
        'Risk evaluation',
        'Control testing',
        'Compliance reporting',
        'Remediation planning',
        'Follow-up audits',
        'Certification support'
      ],
      price: '$5,999/audit',
      category: 'Compliance',
      popular: false,
      link: '/security-compliance-audit',
      marketPrice: '$15,000-40,000/audit',
      benefits: ['Compliance assurance', 'Risk identification', 'Certification support'],
      sla: 'N/A',
      responseTime: '48 hours'
    }
  ];

  const filteredServices = itServices.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const stats = [
    {
      icon: Server,
      value: '500+',
      label: 'Servers Managed',
      description: 'Across enterprise clients'
    },
    {
      icon: Shield,
      value: '99.9%',
      label: 'Security Uptime',
      description: 'Zero security breaches'
    },
    {
      icon: Users,
      value: '1000+',
      label: 'IT Professionals',
      description: 'Expert team members'
    },
    {
      icon: Award,
      value: '24/7',
      label: 'Support',
      description: 'Always here to help'
    }
  ];

  const benefits = [
    'Certified IT professionals',
    '24/7 monitoring and support',
    'Proactive maintenance and updates',
    'Scalable solutions that grow with you',
    'Industry-leading security practices',
    'Compliance and audit support',
    'Cost-effective pricing models',
    'Rapid response times',
    'Custom solutions for your needs',
    'Ongoing training and support'
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group | Enterprise IT Solutions & Support</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, infrastructure management, 24/7 support, and consulting. Enterprise-grade IT solutions for every business." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, infrastructure management, IT support, IT consulting, managed IT services, Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com/it-services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 holographic-text cyber-text glitch" data-text="IT Services">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">IT</span> Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive IT services and solutions for modern businesses. From cloud migration to cybersecurity, 
              we provide enterprise-grade IT support and consulting to keep your business running smoothly.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center cyber-card hologram-card p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2 neon-text">{stat.value}</div>
                  <div className="text-cyan-400 text-sm font-medium">{stat.label}</div>
                  <div className="text-gray-400 text-xs mt-1">{stat.description}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="cyber-button w-full sm:w-auto text-center"
              >
                <Zap className="w-5 h-5 mr-2" />
                Get IT Consultation
              </Link>
              <Link
                to="/pricing"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300 w-full sm:w-auto text-center"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="cyber-card hologram-card p-6 border border-white/20">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search IT services..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    />
                  </div>
                </div>
                <div className="md:w-64">
                  <div className="relative">
                    <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors appearance-none"
                    >
                      {categories.map((category) => (
                        <option key={category} value={category} className="bg-gray-800">
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
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
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6 neon-text">
                {selectedCategory === 'All' ? 'All IT Services' : `${selectedCategory} Solutions`}
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of IT services designed to meet your business needs.
              </p>
              <div className="mt-4 text-cyan-400 font-medium">
                {filteredServices.length} service{filteredServices.length !== 1 ? 's' : ''} found
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className={`relative cyber-card hologram-card p-8 border ${
                    service.popular
                      ? 'border-cyan-400 shadow-2xl shadow-cyan-500/25 scale-105'
                      : 'border-white/20'
                  } hover:border-cyan-400 transition-all duration-300 group`}
                >
                  {service.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                        <Star className="w-4 h-4 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <span className="text-2xl font-bold text-white">{service.price}</span>
                      {service.originalPrice && (
                        <span className="text-gray-400 text-sm line-through">{service.originalPrice}</span>
                      )}
                    </div>
                    <div className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                      {service.category}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-gray-400 text-sm">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>

                  <div className="mb-6 p-4 bg-white/5 rounded-lg">
                    <div className="text-sm text-gray-300 mb-2">Market Price: <span className="text-gray-400 line-through">{service.marketPrice}</span></div>
                    <div className="text-sm text-green-400 font-medium">You Save: {service.benefits[0]}</div>
                    <div className="text-sm text-cyan-400 font-medium mt-1">SLA: {service.sla}</div>
                    <div className="text-sm text-cyan-400 font-medium">Response: {service.responseTime}</div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <Link
                      to={service.link}
                      className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600 transform hover:scale-105 text-center"
                    >
                      Get Started
                    </Link>
                    <Link
                      to={service.link}
                      className="w-full py-2 px-6 rounded-lg font-semibold transition-all duration-300 bg-white/10 text-white border border-white/20 hover:bg-white/20 text-center"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6 neon-text">Why Choose Our IT Services?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We provide enterprise-grade IT services with certified professionals and industry-leading practices.
              </p>
            </div>

            <div className="cyber-card hologram-card p-8 border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

        {/* Contact Information */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="cyber-card hologram-card p-12 border border-white/20">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-6 neon-text">Ready to Get Started?</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Contact our IT experts to discuss your needs and get a customized solution for your business.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
                  <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 font-semibold text-lg">
                    +1 (302) 464-0950
                  </a>
                  <p className="text-gray-400 text-sm mt-2">24/7 Emergency Support</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 font-semibold text-lg">
                    kleber@ziontechgroup.com
                  </a>
                  <p className="text-gray-400 text-sm mt-2">Quick Response Guaranteed</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
                  <p className="text-cyan-400 font-semibold text-lg">
                    364 E Main St STE 1008<br />
                    Middletown, DE 19709
                  </p>
                  <p className="text-gray-400 text-sm mt-2">Mon-Fri: 9AM-6PM EST</p>
                </div>
              </div>

              <div className="text-center mt-12">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 cyber-button"
                  >
                    <Zap className="w-5 h-5" />
                    Get Free IT Consultation
                  </Link>
                  <Link
                    to="/pricing"
                    className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
                  >
                    View All Pricing
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ITServicesPage;
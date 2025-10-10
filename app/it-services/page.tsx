'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Clock, 
  Zap, 
  Shield, 
  Brain, 
  Cloud, 
  Code, 
  BarChart, 
  Users, 
  Settings, 
  Target, 
  Globe, 
  Database, 
  Smartphone, 
  Lock, 
  TrendingUp, 
  Calendar, 
  CheckSquare, 
  FileText,
  Mail,
  CreditCard,
  Search,
  Filter,
  Eye,
  MessageSquare,
  PieChart,
  Layers,
  Cpu,
  Wifi,
  Monitor,
  Headphones,
  Camera,
  Mic,
  Video,
  Palette,
  Image,
  Music,
  Download,
  Upload,
  Share,
  Heart,
  ThumbsUp,
  Award,
  Rocket,
  Lightbulb,
  Wrench,
  Tool,
  Activity,
  Bell,
  Bookmark,
  Flag,
  Gift,
  Home,
  MapPin,
  Phone,
  Send,
  ShoppingCart,
  Tag,
  User,
  UserPlus,
  Volume2,
  WifiOff,
  X,
  Y,
  ZoomIn,
  ZoomOut,
  Bot,
  CircuitBoard,
  Cpu2,
  Database2,
  Fingerprint,
  Key,
  Lock2,
  Network,
  Server,
  Terminal,
  Wifi2,
  HardDrive,
  Router,
  Printer,
  Scanner,
  Keyboard,
  Mouse,
  Headset,
  Webcam,
  Power,
  Battery,
  Wifi3,
  Bluetooth,
  Usb,
  Hdmi,
  Ethernet,
  Wifi4,
  Wifi5,
  Wifi6,
  Wifi7,
  Wifi8,
  Wifi9,
  Wifi10
} from 'lucide-react';

interface ITService {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  features: string[];
  price: string;
  category: string;
  popular: boolean;
  rating: number;
  benefits: string[];
  link: string;
  sla: string;
}

const ItServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const itServices: ITService[] = [
    // Infrastructure & Cloud Services
    {
      id: '1',
      icon: Cloud,
      title: 'Cloud Infrastructure Management',
      description: 'Comprehensive cloud infrastructure management with 99.9% uptime guarantee, auto-scaling, and 24/7 monitoring across AWS, Azure, and GCP.',
      features: [
        'Multi-cloud architecture design and implementation',
        'Auto-scaling and load balancing configuration',
        'Disaster recovery and backup solutions',
        'Cost optimization and resource management',
        'Security hardening and compliance',
        'Performance monitoring and optimization',
        'Migration and modernization services',
        '24/7 infrastructure monitoring and support'
      ],
      price: 'Starting at $2,500/month',
      category: 'Infrastructure',
      popular: true,
      rating: 4.9,
      benefits: [
        '99.9% uptime SLA guarantee',
        'Reduced infrastructure costs by up to 40%',
        'Improved scalability and flexibility',
        'Enhanced security and compliance',
        'Faster deployment and time-to-market'
      ],
      link: 'https://ziontechgroup.com/cloud-infrastructure',
      sla: '99.9% Uptime SLA'
    },
    {
      id: '2',
      icon: Server,
      title: 'Server Management & Maintenance',
      description: 'Complete server management including setup, configuration, monitoring, maintenance, and optimization for Windows, Linux, and Unix systems.',
      features: [
        'Server installation and configuration',
        'Operating system updates and patching',
        'Performance monitoring and optimization',
        'Security hardening and vulnerability management',
        'Backup and disaster recovery setup',
        'Capacity planning and scaling',
        'Remote management and support',
        'Compliance and audit support'
      ],
      price: 'Starting at $1,200/month',
      category: 'Infrastructure',
      popular: false,
      rating: 4.8,
      benefits: [
        'Proactive server maintenance',
        'Reduced downtime and outages',
        'Improved security posture',
        'Cost-effective server management',
        'Expert technical support'
      ],
      link: 'https://ziontechgroup.com/server-management',
      sla: '4-Hour Response Time'
    },
    {
      id: '3',
      icon: Network,
      title: 'Network Infrastructure & Security',
      description: 'Complete network design, implementation, and security including LAN, WAN, wireless, and VPN solutions with advanced threat protection.',
      features: [
        'Network design and architecture planning',
        'Router, switch, and firewall configuration',
        'Wireless network setup and optimization',
        'VPN and remote access solutions',
        'Network security and threat protection',
        'Bandwidth management and QoS',
        'Network monitoring and analytics',
        'Compliance and security auditing'
      ],
      price: 'Starting at $1,800/month',
      category: 'Infrastructure',
      popular: true,
      rating: 4.8,
      benefits: [
        'Secure and reliable network connectivity',
        'Improved network performance',
        'Enhanced security and threat protection',
        'Reduced network downtime',
        'Scalable network solutions'
      ],
      link: 'https://ziontechgroup.com/network-infrastructure',
      sla: '2-Hour Response Time'
    },

    // Cybersecurity Services
    {
      id: '4',
      icon: Shield,
      title: 'Cybersecurity & Threat Protection',
      description: 'Comprehensive cybersecurity services including threat detection, incident response, vulnerability assessment, and security compliance.',
      features: [
        '24/7 security monitoring and threat detection',
        'Vulnerability assessment and penetration testing',
        'Incident response and forensic analysis',
        'Security awareness training and education',
        'Compliance management (SOC2, GDPR, HIPAA)',
        'Endpoint protection and EDR solutions',
        'Email security and phishing protection',
        'Security policy development and implementation'
      ],
      price: 'Starting at $3,500/month',
      category: 'Security',
      popular: true,
      rating: 4.9,
      benefits: [
        'Advanced threat protection',
        'Reduced security risks and breaches',
        'Compliance with industry standards',
        'Improved security posture',
        'Expert security guidance and support'
      ],
      link: 'https://ziontechgroup.com/cybersecurity',
      sla: '1-Hour Response Time'
    },
    {
      id: '5',
      icon: Lock,
      title: 'Identity & Access Management',
      description: 'Comprehensive identity and access management solutions including SSO, MFA, user provisioning, and privileged access management.',
      features: [
        'Single Sign-On (SSO) implementation',
        'Multi-Factor Authentication (MFA) setup',
        'User provisioning and deprovisioning',
        'Privileged access management',
        'Identity governance and compliance',
        'Password management and policies',
        'Directory services integration',
        'Audit and compliance reporting'
      ],
      price: 'Starting at $2,200/month',
      category: 'Security',
      popular: false,
      rating: 4.7,
      benefits: [
        'Enhanced security and access control',
        'Improved user experience',
        'Reduced administrative overhead',
        'Better compliance and auditing',
        'Centralized identity management'
      ],
      link: 'https://ziontechgroup.com/identity-management',
      sla: '4-Hour Response Time'
    },
    {
      id: '6',
      icon: Database,
      title: 'Data Protection & Backup Solutions',
      description: 'Comprehensive data protection including backup, recovery, encryption, and disaster recovery planning with 99.9% data availability.',
      features: [
        'Automated backup and recovery systems',
        'Data encryption and security',
        'Disaster recovery planning and testing',
        'Cloud backup and hybrid solutions',
        'Data retention and compliance',
        'Point-in-time recovery capabilities',
        'Cross-platform backup support',
        '24/7 backup monitoring and support'
      ],
      price: 'Starting at $1,500/month',
      category: 'Security',
      popular: false,
      rating: 4.8,
      benefits: [
        '99.9% data availability guarantee',
        'Reduced data loss risks',
        'Faster recovery times',
        'Compliance with data regulations',
        'Cost-effective backup solutions'
      ],
      link: 'https://ziontechgroup.com/data-protection',
      sla: '99.9% Data Availability'
    },

    // Managed IT Services
    {
      id: '7',
      icon: Users,
      title: 'Managed IT Services',
      description: 'Complete managed IT services including help desk, desktop support, system administration, and proactive maintenance.',
      features: [
        '24/7 help desk and technical support',
        'Desktop and laptop support',
        'Software installation and updates',
        'Hardware procurement and management',
        'Proactive system monitoring',
        'Remote support and troubleshooting',
        'IT asset management and tracking',
        'User training and documentation'
      ],
      price: 'Starting at $1,800/month',
      category: 'Managed Services',
      popular: true,
      rating: 4.8,
      benefits: [
        'Reduced IT operational costs',
        'Improved system reliability',
        'Faster issue resolution',
        'Proactive maintenance and updates',
        'Expert technical support'
      ],
      link: 'https://ziontechgroup.com/managed-it-services',
      sla: '2-Hour Response Time'
    },
    {
      id: '8',
      icon: Monitor,
      title: 'Desktop & Endpoint Management',
      description: 'Comprehensive desktop and endpoint management including deployment, configuration, security, and maintenance.',
      features: [
        'Desktop deployment and imaging',
        'Software distribution and updates',
        'Endpoint security and antivirus',
        'Device compliance and management',
        'Remote desktop and support',
        'Mobile device management (MDM)',
        'Patch management and updates',
        'Performance monitoring and optimization'
      ],
      price: 'Starting at $1,200/month',
      category: 'Managed Services',
      popular: false,
      rating: 4.7,
      benefits: [
        'Standardized desktop environments',
        'Improved security and compliance',
        'Reduced support tickets',
        'Better user productivity',
        'Centralized management and control'
      ],
      link: 'https://ziontechgroup.com/desktop-management',
      sla: '4-Hour Response Time'
    },
    {
      id: '9',
      icon: Mail,
      title: 'Email & Communication Systems',
      description: 'Complete email and communication solutions including Exchange, Office 365, email security, and collaboration tools.',
      features: [
        'Email server setup and configuration',
        'Office 365 migration and management',
        'Email security and spam filtering',
        'Email archiving and compliance',
        'Collaboration tools and SharePoint',
        'Mobile email configuration',
        'Email backup and recovery',
        'User training and support'
      ],
      price: 'Starting at $1,000/month',
      category: 'Managed Services',
      popular: false,
      rating: 4.6,
      benefits: [
        'Reliable email communication',
        'Enhanced security and spam protection',
        'Improved collaboration and productivity',
        'Reduced email downtime',
        'Better compliance and archiving'
      ],
      link: 'https://ziontechgroup.com/email-systems',
      sla: '4-Hour Response Time'
    },

    // Software Development & Integration
    {
      id: '10',
      icon: Code,
      title: 'Custom Software Development',
      description: 'Custom software development services including web applications, mobile apps, desktop software, and system integration.',
      features: [
        'Web application development',
        'Mobile app development (iOS/Android)',
        'Desktop software development',
        'API development and integration',
        'Database design and optimization',
        'User interface and experience design',
        'Quality assurance and testing',
        'Deployment and maintenance support'
      ],
      price: 'Starting at $3,500/month',
      category: 'Development',
      popular: true,
      rating: 4.9,
      benefits: [
        'Tailored solutions for specific needs',
        'Modern and scalable applications',
        'Improved business processes',
        'Competitive advantage through technology',
        'Ongoing support and maintenance'
      ],
      link: 'https://ziontechgroup.com/custom-software',
      sla: 'Project-Based Timeline'
    },
    {
      id: '11',
      icon: Wifi,
      title: 'System Integration & APIs',
      description: 'System integration services including API development, data migration, third-party integrations, and legacy system modernization.',
      features: [
        'API development and integration',
        'Data migration and synchronization',
        'Third-party system integration',
        'Legacy system modernization',
        'Middleware development',
        'Database integration and ETL',
        'Real-time data processing',
        'Integration testing and validation'
      ],
      price: 'Starting at $2,800/month',
      category: 'Development',
      popular: false,
      rating: 4.8,
      benefits: [
        'Seamless system connectivity',
        'Improved data flow and efficiency',
        'Reduced manual processes',
        'Better system interoperability',
        'Future-proof integration solutions'
      ],
      link: 'https://ziontechgroup.com/system-integration',
      sla: 'Project-Based Timeline'
    },
    {
      id: '12',
      icon: Database2,
      title: 'Database Management & Optimization',
      description: 'Comprehensive database services including design, optimization, migration, backup, and performance tuning.',
      features: [
        'Database design and architecture',
        'Performance tuning and optimization',
        'Database migration and upgrades',
        'Backup and recovery planning',
        'Security and access control',
        'Monitoring and maintenance',
        'Data warehousing solutions',
        'Cloud database management'
      ],
      price: 'Starting at $2,200/month',
      category: 'Development',
      popular: false,
      rating: 4.7,
      benefits: [
        'Optimized database performance',
        'Improved data reliability',
        'Reduced database downtime',
        'Better data security',
        'Scalable database solutions'
      ],
      link: 'https://ziontechgroup.com/database-management',
      sla: '4-Hour Response Time'
    },

    // IT Consulting & Strategy
    {
      id: '13',
      icon: Lightbulb,
      title: 'IT Strategy & Consulting',
      description: 'Strategic IT consulting services including technology assessment, roadmap development, and digital transformation planning.',
      features: [
        'IT strategy and roadmap development',
        'Technology assessment and evaluation',
        'Digital transformation planning',
        'Vendor evaluation and selection',
        'IT governance and compliance',
        'Cost optimization and budgeting',
        'Change management and training',
        'Ongoing advisory and support'
      ],
      price: 'Starting at $2,000/month',
      category: 'Consulting',
      popular: true,
      rating: 4.8,
      benefits: [
        'Clear IT strategy and direction',
        'Reduced technology risks',
        'Optimized IT investments',
        'Faster digital transformation',
        'Expert guidance and support'
      ],
      link: 'https://ziontechgroup.com/it-consulting',
      sla: 'Project-Based Timeline'
    },
    {
      id: '14',
      icon: BarChart,
      title: 'IT Audit & Compliance',
      description: 'Comprehensive IT audits and compliance services including security assessments, risk analysis, and regulatory compliance.',
      features: [
        'IT security audits and assessments',
        'Compliance gap analysis',
        'Risk assessment and mitigation',
        'Regulatory compliance support',
        'Policy development and review',
        'Audit trail and documentation',
        'Remediation planning and support',
        'Ongoing compliance monitoring'
      ],
      price: 'Starting at $3,000/month',
      category: 'Consulting',
      popular: false,
      rating: 4.7,
      benefits: [
        'Improved security posture',
        'Regulatory compliance assurance',
        'Reduced audit risks',
        'Better risk management',
        'Professional audit documentation'
      ],
      link: 'https://ziontechgroup.com/it-audit',
      sla: 'Project-Based Timeline'
    },
    {
      id: '15',
      icon: Settings,
      title: 'IT Project Management',
      description: 'Professional IT project management services including planning, execution, monitoring, and delivery of technology initiatives.',
      features: [
        'Project planning and scoping',
        'Resource allocation and management',
        'Timeline and milestone tracking',
        'Risk management and mitigation',
        'Quality assurance and testing',
        'Stakeholder communication',
        'Budget management and control',
        'Project delivery and handover'
      ],
      price: 'Starting at $2,500/month',
      category: 'Consulting',
      popular: false,
      rating: 4.8,
      benefits: [
        'Successful project delivery',
        'Reduced project risks',
        'Better resource utilization',
        'Improved project communication',
        'On-time and on-budget delivery'
      ],
      link: 'https://ziontechgroup.com/it-project-management',
      sla: 'Project-Based Timeline'
    },

    // Support & Maintenance
    {
      id: '16',
      icon: Headphones,
      title: '24/7 IT Support & Help Desk',
      description: 'Round-the-clock IT support and help desk services with guaranteed response times and expert technical assistance.',
      features: [
        '24/7 technical support availability',
        'Multi-channel support (phone, email, chat)',
        'Remote support and troubleshooting',
        'Incident management and tracking',
        'Knowledge base and documentation',
        'Escalation procedures and management',
        'Service level agreements (SLAs)',
        'Customer satisfaction monitoring'
      ],
      price: 'Starting at $1,500/month',
      category: 'Support',
      popular: true,
      rating: 4.9,
      benefits: [
        'Always-available technical support',
        'Faster issue resolution',
        'Reduced downtime and disruptions',
        'Improved user satisfaction',
        'Proactive problem prevention'
      ],
      link: 'https://ziontechgroup.com/it-support',
      sla: '1-Hour Response Time'
    },
    {
      id: '17',
      icon: Wrench,
      title: 'IT Maintenance & Updates',
      description: 'Proactive IT maintenance services including system updates, patches, security updates, and performance optimization.',
      features: [
        'Regular system maintenance',
        'Security patch management',
        'Software updates and upgrades',
        'Performance monitoring and tuning',
        'Preventive maintenance scheduling',
        'System health checks',
        'Capacity planning and scaling',
        'Documentation and reporting'
      ],
      price: 'Starting at $1,200/month',
      category: 'Support',
      popular: false,
      rating: 4.7,
      benefits: [
        'Improved system reliability',
        'Enhanced security posture',
        'Reduced unexpected downtime',
        'Better system performance',
        'Proactive issue prevention'
      ],
      link: 'https://ziontechgroup.com/it-maintenance',
      sla: '4-Hour Response Time'
    },
    {
      id: '18',
      icon: Activity,
      title: 'IT Monitoring & Alerting',
      description: 'Comprehensive IT monitoring services with real-time alerts, performance tracking, and proactive issue detection.',
      features: [
        'Real-time system monitoring',
        'Performance metrics and tracking',
        'Automated alerting and notifications',
        'Capacity planning and forecasting',
        'Uptime monitoring and reporting',
        'Custom dashboards and reports',
        'Integration with existing tools',
        '24/7 monitoring center support'
      ],
      price: 'Starting at $1,800/month',
      category: 'Support',
      popular: false,
      rating: 4.8,
      benefits: [
        'Proactive issue detection',
        'Reduced system downtime',
        'Better performance visibility',
        'Faster problem resolution',
        'Improved system reliability'
      ],
      link: 'https://ziontechgroup.com/it-monitoring',
      sla: 'Real-Time Monitoring'
    }
  ];

  const categories = [
    { id: 'all', name: 'All IT Services' },
    { id: 'Infrastructure', name: 'Infrastructure' },
    { id: 'Security', name: 'Security' },
    { id: 'Managed Services', name: 'Managed Services' },
    { id: 'Development', name: 'Development' },
    { id: 'Consulting', name: 'Consulting' },
    { id: 'Support', name: 'Support' }
  ];

  const stats = [
    { number: '500+', label: 'IT Projects Completed' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' },
    { number: '50+', label: 'IT Experts' }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? itServices.filter(service => 
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : itServices.filter(service => 
        service.category === selectedCategory && (
          service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          service.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
      <Helmet>
        <title>IT Services | Zion Tech Group - Comprehensive Information Technology Solutions</title>
        <meta name="description" content="Complete IT services including infrastructure management, cybersecurity, cloud solutions, and managed services. Expert IT support and consulting." />
        <meta name="keywords" content="IT services, managed IT, cybersecurity, cloud infrastructure, IT consulting, IT support, network security" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 holographic-text cyber-text glitch" data-text="IT Services">
            <span className="text-cyan-400 neon-text">IT</span> Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Comprehensive <span className="text-cyan-400 font-bold">information technology solutions</span> to keep your business running smoothly, 
            securely, and efficiently with expert support and cutting-edge technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="tel:+13024640950"
              className="cyber-button text-lg px-8 py-4 inline-flex items-center space-x-2 group"
              aria-label="Call us at (302) 464-0950">
              <Phone className="w-5 h-5" />
              <span>(302) 464-0950</span>
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="cyber-button-secondary text-lg px-8 py-4 inline-flex items-center space-x-2 group"
              aria-label="Email us at kleber@ziontechgroup.com">
              <Mail className="w-5 h-5" />
              <span>kleber@ziontechgroup.com</span>
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="cyber-card hologram-card p-6 border border-cyan-500/20">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search IT services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-300 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  />
                </div>
              </div>
              <div className="md:w-64">
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400 w-5 h-5" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors appearance-none">
                    {categories.map((category) => (
                      <option key={category.id} value={category.id} className="bg-slate-800">
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.slice(1).map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 text-white cyber-glow'
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white neon-text">
              {selectedCategory === 'all' ? 'All IT Services' : `${selectedCategory} Services`}
            </h2>
            <span className="text-cyan-400 font-semibold">
              {filteredServices.length} service{filteredServices.length !== 1 ? 's' : ''} found
            </span>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className={`cyber-card group hover:scale-105 transition-all duration-300 relative ${
                service.popular ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/20' : 'border-slate-700/50'
              }`}>
                {service.popular && (
                  <div className="absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                    <Star className="w-4 h-4 mr-1 fill-current" />
                    Most Popular
                  </div>
                )}
                
                <div className="p-8">
                  <div className="flex items-start mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform flex-shrink-0">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-400 mb-2">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 mr-1 text-yellow-400 fill-current" />
                          {service.rating}
                        </div>
                        <div className="text-cyan-400 font-medium">
                          {service.category}
                        </div>
                        <div className="text-green-400 font-medium">
                          {service.sla}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
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
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.benefits.slice(0, 3).map((benefit, index) => (
                        <span key={index} className="px-3 py-1 bg-slate-800/50 text-gray-300 text-xs rounded-full">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">{service.price}</div>
                    <div className="text-sm text-gray-300">Contact for custom pricing and implementation</div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={service.link}
                      className="flex-1 cyber-button text-center py-3 px-6 inline-flex items-center justify-center group-hover:scale-105 transition-transform"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                      href="/contact"
                      className="flex-1 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 text-center"
                    >
                      Get Quote
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">💻</div>
              <h3 className="text-2xl font-bold text-white mb-4">No IT services found</h3>
              <p className="text-gray-300 mb-6">Try adjusting your search terms or category filter</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="cyber-button"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="cyber-card hologram-card p-12 border border-cyan-500/30">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Ready to Optimize Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let our IT experts assess your current infrastructure and recommend the best solutions for your business needs. 
              Get a free IT consultation and discover how we can improve your technology operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a
                href="/contact"
                className="cyber-button text-lg px-8 py-4 inline-flex items-center space-x-2 group"
              >
                <span>Get Free IT Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+13024640950"
                className="cyber-button-secondary text-lg px-8 py-4 inline-flex items-center space-x-2 group"
              >
                <Phone className="w-5 h-5" />
                <span>(302) 464-0950</span>
              </a>
            </div>
            <div className="text-center">
              <p className="text-gray-300 text-sm mb-2">
                📍 364 E Main St STE 1008, Middletown, DE 19709
              </p>
              <p className="text-gray-300 text-sm">
                ⏰ Mon-Fri: 9AM-6PM EST | 24/7 Emergency Support Available
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ItServicesPage;
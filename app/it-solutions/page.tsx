'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ServerIcon, 
  ArrowRightIcon,
  SparklesIcon,
  BoltIcon,
  ChartBarIcon,
  CodeBracketIcon,
  GlobeAltIcon,
  CloudIcon,
  LockClosedIcon,
  CogIcon,
  RocketLaunchIcon,
  LightBulbIcon,
  BeakerIcon,
  CommandLineIcon,
  CircleStackIcon,
  CircleStackIcon as DatabaseIcon,
  CloudArrowUpIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  ClockIcon,
  CheckCircleIcon,
  StarIcon,
  EyeIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  Cog6ToothIcon,
  MagnifyingGlassIcon,
  PaintBrushIcon,
  VideoCameraIcon,
  MicrophoneIcon,
  PhotoIcon,
  BrainIcon,
  CursorArrowRaysIcon,
  ChartPieIcon,
  PresentationChartLineIcon,
  CubeIcon,
  PuzzlePieceIcon,
  WrenchScrewdriverIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  PhoneIcon,
  EnvelopeIcon,
  MailIcon,
  CalendarIcon,
  ClipboardDocumentListIcon,
  CpuChipIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon as WebIcon,
  ShoppingCartIcon,
  CreditCardIcon,
  BanknotesIcon,
  TagIcon,
  MegaphoneIcon,
  ShareIcon,
  HeartIcon,
  ChatBubbleOvalLeftIcon,
  UserIcon,
  KeyIcon,
  ShieldCheckIcon as SecurityIcon,
  WifiIcon,
  SignalIcon,
  Bars3Icon,
  XMarkIcon,
  ComputerDesktopIcon,
  GlobeAltIcon as NetworkIcon,
  HardDriveIcon,
  CpuChipIcon as ProcessorIcon,
  MemoryIcon,
  PrinterIcon,
  RouterIcon,
  ShieldCheckIcon as FirewallIcon,
  CircleStackIcon as BackupIcon,
  ArrowPathIcon as UpdateIcon,
  WrenchScrewdriverIcon as MaintenanceIcon,
  QuestionMarkCircleIcon as SupportIcon,
  ChartBarIcon as MonitoringIcon,
  CogIcon as OptimizationIcon,
  PuzzlePieceIcon as IntegrationIcon,
  ArrowRightIcon as MigrationIcon,
  RocketLaunchIcon as DeploymentIcon,
  CogIcon as ConfigurationIcon,
  WrenchScrewdriverIcon as TroubleshootingIcon,
  ShieldCheckIcon as SecurityShieldIcon,
  ChartBarIcon as PerformanceIcon,
  RocketLaunchIcon as ScalabilityIcon,
  ShieldCheckIcon as ReliabilityIcon,
  CheckCircleIcon as ComplianceIcon,
  DocumentTextIcon as DocumentationIcon,
  AcademicCapIcon as TrainingIcon,
  UserGroupIcon as ConsultingIcon,
  RocketLaunchIcon as ImplementationIcon,
  WrenchScrewdriverIcon as MaintenanceWrenchIcon,
  QuestionMarkCircleIcon as SupportHeadsetIcon,
  ChartBarIcon as MonitoringChartIcon,
  CogIcon as OptimizationGearIcon,
  PuzzlePieceIcon as IntegrationPuzzleIcon,
  ArrowRightIcon as MigrationArrowIcon,
  RocketLaunchIcon as DeploymentRocketIcon,
  CogIcon as ConfigurationCogIcon,
  WrenchScrewdriverIcon as TroubleshootingWrenchIcon
} from '@heroicons/react/24/outline';

const ITSolutionsPage: React.FC = () => {
  const itServices = [
    {
      title: 'Cloud Infrastructure Setup',
      description: 'Complete cloud infrastructure setup and migration services for AWS, Azure, and Google Cloud Platform.',
      price: '$2,500/month',
      features: ['Cloud Migration', 'Auto-scaling', 'Load Balancing', 'Security Configuration', 'Monitoring Setup', 'Backup Solutions'],
      icon: CloudArrowUpIcon,
      href: '/cloud-infrastructure-setup',
      category: 'Cloud Services',
      popular: true,
      duration: '2-4 weeks'
    },
    {
      title: 'Network Security & Firewall',
      description: 'Comprehensive network security solutions with advanced firewall configuration and threat protection.',
      price: '$1,800/month',
      features: ['Firewall Configuration', 'Intrusion Detection', 'VPN Setup', 'Network Monitoring', 'Security Audits', 'Compliance Management'],
      icon: FirewallIcon,
      href: '/network-security-firewall',
      category: 'Security',
      popular: false,
      duration: '1-2 weeks'
    },
    {
      title: 'Server Management & Maintenance',
      description: '24/7 server monitoring, maintenance, and optimization services for optimal performance.',
      price: '$1,200/month',
      features: ['24/7 Monitoring', 'Performance Optimization', 'Security Updates', 'Backup Management', 'Hardware Maintenance', 'Troubleshooting'],
      icon: ServerIcon,
      href: '/server-management-maintenance',
      category: 'Infrastructure',
      popular: true,
      duration: 'Ongoing'
    },
    {
      title: 'Database Administration',
      description: 'Professional database administration services including optimization, backup, and security management.',
      price: '$1,500/month',
      features: ['Database Optimization', 'Backup & Recovery', 'Security Management', 'Performance Tuning', 'Migration Services', 'Monitoring'],
      icon: DatabaseIcon,
      href: '/database-administration',
      category: 'Database',
      popular: false,
      duration: 'Ongoing'
    },
    {
      title: 'IT Support & Helpdesk',
      description: 'Comprehensive IT support services with 24/7 helpdesk and remote assistance capabilities.',
      price: '$800/month',
      features: ['24/7 Helpdesk', 'Remote Support', 'Hardware Support', 'Software Installation', 'User Training', 'Issue Resolution'],
      icon: SupportHeadsetIcon,
      href: '/it-support-helpdesk',
      category: 'Support',
      popular: false,
      duration: 'Ongoing'
    },
    {
      title: 'System Integration',
      description: 'Seamless integration of various systems and applications for improved workflow and efficiency.',
      price: '$3,000/month',
      features: ['API Integration', 'System Migration', 'Data Synchronization', 'Workflow Automation', 'Custom Development', 'Testing & QA'],
      icon: IntegrationPuzzleIcon,
      href: '/system-integration',
      category: 'Integration',
      popular: true,
      duration: '4-8 weeks'
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Advanced cybersecurity services including threat detection, incident response, and security training.',
      price: '$2,200/month',
      features: ['Threat Detection', 'Incident Response', 'Security Training', 'Vulnerability Assessment', 'Compliance Audits', 'Penetration Testing'],
      icon: SecurityShieldIcon,
      href: '/cybersecurity-solutions',
      category: 'Security',
      popular: true,
      duration: 'Ongoing'
    },
    {
      title: 'Backup & Disaster Recovery',
      description: 'Comprehensive backup and disaster recovery solutions to protect your critical business data.',
      price: '$1,000/month',
      features: ['Automated Backups', 'Disaster Recovery Planning', 'Data Encryption', 'Offsite Storage', 'Recovery Testing', 'Compliance'],
      icon: BackupIcon,
      href: '/backup-disaster-recovery',
      category: 'Data Protection',
      popular: false,
      duration: '1-2 weeks'
    },
    {
      title: 'IT Consulting & Strategy',
      description: 'Strategic IT consulting services to help align technology with business objectives.',
      price: '$200/hour',
      features: ['IT Strategy Planning', 'Technology Assessment', 'Vendor Selection', 'Budget Planning', 'Roadmap Development', 'Best Practices'],
      icon: ConsultingIcon,
      href: '/it-consulting-strategy',
      category: 'Consulting',
      popular: false,
      duration: 'As needed'
    },
    {
      title: 'Network Design & Implementation',
      description: 'Custom network design and implementation services for optimal performance and security.',
      price: '$2,800/month',
      features: ['Network Design', 'Hardware Selection', 'Implementation', 'Testing & Optimization', 'Documentation', 'Training'],
      icon: NetworkIcon,
      href: '/network-design-implementation',
      category: 'Networking',
      popular: false,
      duration: '3-6 weeks'
    },
    {
      title: 'IT Asset Management',
      description: 'Comprehensive IT asset management including inventory, lifecycle management, and optimization.',
      price: '$600/month',
      features: ['Asset Inventory', 'Lifecycle Management', 'License Management', 'Cost Optimization', 'Compliance Tracking', 'Reporting'],
      icon: ComputerDesktopIcon,
      href: '/it-asset-management',
      category: 'Management',
      popular: false,
      duration: 'Ongoing'
    },
    {
      title: 'Cloud Migration Services',
      description: 'Expert cloud migration services to help you move to the cloud safely and efficiently.',
      price: '$4,000/month',
      features: ['Migration Planning', 'Data Migration', 'Application Migration', 'Testing & Validation', 'Go-live Support', 'Training'],
      icon: MigrationArrowIcon,
      href: '/cloud-migration-services',
      category: 'Cloud Services',
      popular: true,
      duration: '6-12 weeks'
    }
  ];

  const categories = [
    'All',
    'Cloud Services',
    'Security',
    'Infrastructure',
    'Database',
    'Support',
    'Integration',
    'Data Protection',
    'Consulting',
    'Networking',
    'Management'
  ];

  const pricingTiers = [
    {
      name: 'Basic IT Support',
      price: '$1,500',
      period: '/month',
      description: 'Essential IT services for small businesses',
      features: [
        'Basic server management',
        'Email support',
        'Security monitoring',
        'Backup solutions',
        'Up to 25 users',
        'Standard response time'
      ],
      popular: false
    },
    {
      name: 'Professional IT Services',
      price: '$3,500',
      period: '/month',
      description: 'Comprehensive IT services for growing businesses',
      features: [
        'Full server management',
        '24/7 support',
        'Advanced security',
        'Cloud services',
        'Up to 100 users',
        'Priority response time',
        'Monthly reporting',
        'IT consulting'
      ],
      popular: true
    },
    {
      name: 'Enterprise IT Solutions',
      price: 'Custom',
      period: '',
      description: 'Tailored IT solutions for large organizations',
      features: [
        'Custom IT solutions',
        'Dedicated support team',
        'Advanced security suite',
        'Multi-cloud management',
        'Unlimited users',
        'Immediate response time',
        'Custom reporting',
        'Strategic IT consulting',
        'SLA guarantees'
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      title: '24/7 Monitoring',
      description: 'Round-the-clock monitoring and support to keep your systems running smoothly',
      icon: MonitoringChartIcon
    },
    {
      title: 'Proactive Maintenance',
      description: 'Preventive maintenance to avoid costly downtime and system failures',
      icon: MaintenanceWrenchIcon
    },
    {
      title: 'Scalable Solutions',
      description: 'IT infrastructure that grows with your business needs',
      icon: ScalabilityIcon
    },
    {
      title: 'Security First',
      description: 'Comprehensive security measures to protect your business data',
      icon: SecurityShieldIcon
    }
  ];

  const technologies = [
    {
      name: 'Cloud Platforms',
      items: ['AWS', 'Microsoft Azure', 'Google Cloud Platform', 'IBM Cloud'],
      icon: CloudIcon
    },
    {
      name: 'Operating Systems',
      items: ['Windows Server', 'Linux (Ubuntu, CentOS)', 'macOS', 'VMware'],
      icon: ComputerDesktopIcon
    },
    {
      name: 'Databases',
      items: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQL Server', 'Oracle'],
      icon: DatabaseIcon
    },
    {
      name: 'Security Tools',
      items: ['Firewalls', 'Antivirus', 'VPN', 'SIEM', 'Penetration Testing'],
      icon: SecurityShieldIcon
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT solutions including cloud infrastructure, network security, server management, and system integration services for modern businesses." />
        <meta name="keywords" content="IT solutions, cloud infrastructure, network security, server management, system integration, IT support, cybersecurity" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20 animated-grid"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 gradient-text neon-text">
              IT Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Comprehensive Technology Infrastructure Services
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
              From cloud infrastructure to cybersecurity, we provide end-to-end IT solutions 
              to keep your business running smoothly and securely.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 hover-lift hover-glow flex items-center gap-2 glow-effect"
              >
                Get IT Consultation
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/demo" 
                className="group border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 hover-lift hover-glow flex items-center gap-2 glass"
              >
                View IT Demo
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 gradient-text">
              Why Choose Our IT Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Reliable, secure, and scalable technology infrastructure for your business
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover-lift hover-glow glass-dark">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform floating">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 gradient-text">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services Grid */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">IT Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT solutions designed to meet your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className={`group bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:transform hover:scale-105 relative ${
                service.popular ? 'border-purple-500 ring-2 ring-purple-500/20' : 'border-slate-700/50 hover:border-purple-500/50'
              }`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Popular
                    </span>
                  </div>
                )}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full">
                    {service.category}
                  </span>
                  <span className="text-xs text-blue-400 font-semibold">
                    {service.duration}
                  </span>
                </div>
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-purple-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-purple-400">{service.price}</span>
                </div>
                <ul className="text-sm text-gray-400 mb-6 space-y-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <StarIcon className="w-4 h-4 text-yellow-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex items-center text-purple-400 group-hover:text-purple-300 transition-colors">
                  <Link to={service.href} className="flex items-center">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Technologies We <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Work With</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We work with leading technologies to deliver the best solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="group bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-purple-400 transition-colors">
                  {tech.name}
                </h3>
                <ul className="text-sm text-gray-400 space-y-2">
                  {tech.items.map((item, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              IT Solutions <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Pricing</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect IT support package for your business
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border transition-all duration-300 hover-lift hover-glow glass-dark relative ${
                tier.popular ? 'border-purple-500 ring-2 ring-purple-500/20 scale-105' : 'border-slate-600 hover:border-purple-500'
              }`}>
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-400 mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    <span className="text-gray-400 ml-1">{tier.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact" 
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    tier.popular 
                      ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:from-purple-700 hover:to-cyan-700' 
                      : 'border-2 border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-cyan-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Optimize Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Contact our IT experts today to discuss how we can help optimize your technology infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/contact" 
              className="group bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 hover-lift hover-glow flex items-center gap-2 glow-effect"
            >
              Get IT Consultation
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/pricing" 
              className="group border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 hover-lift hover-glow flex items-center gap-2 glass"
            >
              View All Pricing
              <CurrencyDollarIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ITSolutionsPage;
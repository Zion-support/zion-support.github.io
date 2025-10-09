'use client';

import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { 
  Cloud, 
  Shield, 
  Settings, 
  Database, 
  Smartphone, 
  Lock, 
  BarChart, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Star, 
  Zap, 
  Cpu, 
  HardDrive, 
  Wifi, 
  Server, 
  Code, 
  Globe, 
  Target, 
  TrendingUp,
  Search,
  Filter,
  Building,
  Building2,
  Network,
  Router,
  Monitor,
  Laptop,
  Printer,
  HardDrive as Storage,
  Database as DatabaseIcon,
  Server as ServerIcon,
  Cloud as CloudIcon,
  Shield as SecurityIcon,
  Lock as LockIcon,
  Key,
  Eye,
  EyeOff,
  AlertTriangle,
  CheckCircle as CheckIcon,
  XCircle,
  Info,
  HelpCircle,
  ExternalLink,
  ChevronRight,
  ChevronDown,
  Plus,
  Minus,
  X,
  Menu,
  Maximize,
  Minimize,
  RotateCcw,
  RotateCw,
  Move,
  Copy,
  Edit,
  Trash2,
  Save,
  Share,
  Link,
  Unlink,
  Unlock,
  Volume2,
  VolumeX,
  Mic,
  MicOff,
  Video,
  VideoOff,
  Camera,
  CameraOff,
  Image,
  ImageOff,
  File,
  Folder,
  FolderOpen,
  Archive,
  Inbox,
  Outbox,
  Send,
  Mail as MailIcon,
  MailOpen,
  Reply,
  Forward,
  Flag,
  Bookmark,
  Tag,
  Tags,
  Hash,
  AtSign,
  DollarSign,
  Percent,
  Timer,
  Layers,
  Workflow,
  Bot,
  Download,
  Upload,
  RefreshCw,
  Play,
  Pause,
  Square,
  Circle,
  Triangle,
  Hexagon,
  Octagon,
  Diamond,
  Heart,
  ThumbsUp,
  ThumbsDown,
  AlertCircle,
  ExclamationTriangle,
  ExclamationCircle,
  QuestionMarkCircle,
  Lightbulb,
  Bulb,
  Sun,
  Moon,
  CloudRain,
  CloudSnow,
  CloudLightning,
  Wind,
  Droplets,
  Flame,
  Snowflake,
  Thunder,
  Rainbow,
  Sunrise,
  Sunset,
  Compass,
  Map,
  Navigation as NavIcon,
  Route,
  Home,
  Store,
  Factory,
  Warehouse,
  Hospital,
  School,
  University,
  Church,
  Mosque,
  Synagogue,
  Temple,
  Bank,
  CreditCard,
  Wallet,
  Coins,
  Banknote,
  Receipt,
  Calculator,
  PieChart,
  LineChart,
  Activity,
  TrendingDown,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight as ArrowRightIcon,
  ArrowUpRight,
  ArrowDownRight,
  ArrowUpLeft,
  ArrowDownLeft,
  ArrowUpDown,
  ArrowLeftRight,
  ArrowRightLeft,
  ChevronUp,
  ChevronDown as ChevronDownIcon,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
  ChevronUp as ChevronUpIcon,
  ChevronDown as ChevronDownIcon2,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon2,
  DoubleChevronUp,
  DoubleChevronDown,
  DoubleChevronLeft,
  DoubleChevronRight,
  ChevronsUp,
  ChevronsDown,
  ChevronsLeft,
  ChevronsRight,
  Move as MoveIcon,
  MoveUp,
  MoveDown,
  MoveLeft,
  MoveRight,
  RotateCcw as RotateCcwIcon,
  RotateCw as RotateCwIcon,
  Grid3X3,
  ShoppingCart,
  ShoppingBag,
  ShoppingBasket,
  Cart,
  Basket,
  Bag,
  Package,
  Box,
  Container,
  Truck,
  Car,
  Bus,
  Train,
  Plane,
  Ship,
  Bike,
  Scooter,
  Motorcycle,
  Van,
  Taxi,
  Ambulance,
  FireTruck,
  PoliceCar,
  Taxi as TaxiIcon,
  Ambulance as AmbulanceIcon,
  FireTruck as FireTruckIcon,
  PoliceCar as PoliceCarIcon,
  Car as CarIcon,
  Bus as BusIcon,
  Train as TrainIcon,
  Plane as PlaneIcon,
  Ship as ShipIcon,
  Bike as BikeIcon,
  Scooter as ScooterIcon,
  Motorcycle as MotorcycleIcon,
  Van as VanIcon,
  Truck as TruckIcon,
  Package as PackageIcon,
  Box as BoxIcon,
  Container as ContainerIcon,
  ShoppingCart as ShoppingCartIcon,
  ShoppingBag as ShoppingBagIcon,
  ShoppingBasket as ShoppingBasketIcon,
  Cart as CartIcon,
  Basket as BasketIcon,
  Bag as BagIcon
} from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const itServices = [
    // Core IT Services
    {
      id: 'it-consulting',
      name: 'IT Strategy Consulting',
      category: 'consulting',
      description: 'Comprehensive IT strategy development, technology assessment, and digital transformation roadmap for enterprise organizations.',
      features: [
        'IT strategy development',
        'Technology assessment',
        'Digital transformation roadmap',
        'Cost optimization analysis',
        'Risk assessment and mitigation',
        'Implementation planning'
      ],
      pricing: { hourly: 250, project: 75000, retainer: 15000 },
      popular: true,
      icon: '💼',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30',
      textColor: 'text-blue-400',
      stats: { projects: '300+', rating: 4.9, clients: '200+' },
      demo: 'https://demo.ziontechgroup.com/it-consulting',
      docs: 'https://docs.ziontechgroup.com/it-consulting',
      benefits: [
        'Reduce IT costs by 40%',
        'Improve efficiency by 60%',
        'Enhance security posture',
        'Future-proof technology stack'
      ]
    },
    {
      id: 'cloud-infrastructure',
      name: 'Cloud Infrastructure Solutions',
      category: 'infrastructure',
      description: 'Comprehensive cloud infrastructure design, migration, and management with AWS, Azure, and Google Cloud expertise.',
      features: [
        'Cloud architecture design',
        'Multi-cloud migration',
        'Infrastructure as Code',
        'Auto-scaling and load balancing',
        'Disaster recovery planning',
        'Cost optimization'
      ],
      pricing: { monthly: 2000, yearly: 20000, setup: 10000 },
      popular: true,
      icon: '☁️',
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/30',
      textColor: 'text-cyan-400',
      stats: { uptime: '99.9%', savings: '50%', migrations: '150+' },
      demo: 'https://demo.ziontechgroup.com/cloud-infrastructure',
      docs: 'https://docs.ziontechgroup.com/cloud-infrastructure',
      benefits: [
        '50% cost reduction',
        '99.9% uptime guarantee',
        'Scalable infrastructure',
        'Enhanced security'
      ]
    },
    {
      id: 'cybersecurity-suite',
      name: 'Cybersecurity Suite',
      category: 'security',
      description: 'Comprehensive cybersecurity solutions including threat detection, vulnerability assessment, and incident response.',
      features: [
        'Threat detection and prevention',
        'Vulnerability assessment',
        'Security monitoring',
        'Incident response',
        'Compliance management',
        'Security training'
      ],
      pricing: { monthly: 3000, yearly: 30000, setup: 20000 },
      popular: true,
      icon: '🛡️',
      color: 'from-red-500 to-orange-500',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/30',
      textColor: 'text-red-400',
      stats: { threats: '1M+', accuracy: '99.5%', response: '<5min' },
      demo: 'https://demo.ziontechgroup.com/cybersecurity',
      docs: 'https://docs.ziontechgroup.com/cybersecurity',
      benefits: [
        '99.5% threat detection accuracy',
        'Sub-5-minute response time',
        'Compliance assurance',
        '24/7 monitoring'
      ]
    },
    {
      id: 'network-solutions',
      name: 'Network Solutions',
      category: 'networking',
      description: 'Advanced network design, implementation, and management with SD-WAN, wireless, and security integration.',
      features: [
        'Network design and planning',
        'SD-WAN implementation',
        'Wireless network setup',
        'Network security',
        'Performance monitoring',
        'Troubleshooting and support'
      ],
      pricing: { monthly: 1500, yearly: 15000, setup: 8000 },
      popular: true,
      icon: '🌐',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30',
      textColor: 'text-green-400',
      stats: { uptime: '99.8%', speed: '10Gbps', sites: '500+' },
      demo: 'https://demo.ziontechgroup.com/network-solutions',
      docs: 'https://docs.ziontechgroup.com/network-solutions',
      benefits: [
        'High-speed connectivity',
        '99.8% uptime guarantee',
        'Scalable architecture',
        'Enhanced security'
      ]
    },
    {
      id: 'database-management',
      name: 'Database Management',
      category: 'database',
      description: 'Comprehensive database administration, optimization, and management for SQL, NoSQL, and cloud databases.',
      features: [
        'Database administration',
        'Performance optimization',
        'Backup and recovery',
        'Security hardening',
        'Monitoring and alerting',
        'Migration services'
      ],
      pricing: { monthly: 1200, yearly: 12000, setup: 6000 },
      popular: true,
      icon: '🗄️',
      color: 'from-purple-500 to-indigo-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30',
      textColor: 'text-purple-400',
      stats: { databases: '200+', uptime: '99.9%', performance: '95%' },
      demo: 'https://demo.ziontechgroup.com/database-management',
      docs: 'https://docs.ziontechgroup.com/database-management',
      benefits: [
        '99.9% database uptime',
        '95% performance improvement',
        'Automated backups',
        'Security compliance'
      ]
    },
    {
      id: 'devops-cicd',
      name: 'DevOps & CI/CD',
      category: 'devops',
      description: 'Complete DevOps implementation with CI/CD pipelines, infrastructure automation, and monitoring solutions.',
      features: [
        'CI/CD pipeline setup',
        'Infrastructure automation',
        'Container orchestration',
        'Monitoring and logging',
        'Security integration',
        'Performance optimization'
      ],
      pricing: { monthly: 1800, yearly: 18000, setup: 10000 },
      popular: true,
      icon: '⚙️',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/30',
      textColor: 'text-orange-400',
      stats: { deployments: '1000+', efficiency: '80%', uptime: '99.9%' },
      demo: 'https://demo.ziontechgroup.com/devops-cicd',
      docs: 'https://docs.ziontechgroup.com/devops-cicd',
      benefits: [
        '80% faster deployments',
        '99.9% deployment success rate',
        'Automated testing',
        'Continuous monitoring'
      ]
    },
    {
      id: 'it-support',
      name: '24/7 IT Support',
      category: 'support',
      description: 'Comprehensive IT support services with 24/7 monitoring, helpdesk, and technical assistance.',
      features: [
        '24/7 monitoring',
        'Helpdesk support',
        'Remote assistance',
        'Hardware maintenance',
        'Software updates',
        'User training'
      ],
      pricing: { monthly: 800, yearly: 8000, setup: 2000 },
      popular: false,
      icon: '🆘',
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/30',
      textColor: 'text-yellow-400',
      stats: { response: '<15min', resolution: '95%', satisfaction: '98%' },
      demo: 'https://demo.ziontechgroup.com/it-support',
      docs: 'https://docs.ziontechgroup.com/it-support',
      benefits: [
        'Sub-15-minute response time',
        '95% first-call resolution',
        '98% customer satisfaction',
        'Proactive monitoring'
      ]
    },
    {
      id: 'system-administration',
      name: 'System Administration',
      category: 'administration',
      description: 'Comprehensive system administration services for Windows, Linux, and cloud environments.',
      features: [
        'Server administration',
        'User management',
        'Security configuration',
        'Performance monitoring',
        'Backup management',
        'Patch management'
      ],
      pricing: { monthly: 1000, yearly: 10000, setup: 5000 },
      popular: false,
      icon: '🖥️',
      color: 'from-slate-500 to-gray-500',
      bgColor: 'bg-slate-500/10',
      borderColor: 'border-slate-500/30',
      textColor: 'text-slate-400',
      stats: { servers: '100+', uptime: '99.9%', efficiency: '90%' },
      demo: 'https://demo.ziontechgroup.com/system-administration',
      docs: 'https://docs.ziontechgroup.com/system-administration',
      benefits: [
        '99.9% server uptime',
        '90% efficiency improvement',
        'Automated management',
        'Proactive maintenance'
      ]
    },
    {
      id: 'cloud-migration',
      name: 'Cloud Migration Services',
      category: 'migration',
      description: 'Seamless cloud migration services with minimal downtime and maximum data integrity.',
      features: [
        'Migration planning',
        'Data migration',
        'Application migration',
        'Testing and validation',
        'Go-live support',
        'Post-migration optimization'
      ],
      pricing: { project: 50000, hourly: 300, retainer: 10000 },
      popular: false,
      icon: '🚀',
      color: 'from-violet-500 to-purple-500',
      bgColor: 'bg-violet-500/10',
      borderColor: 'border-violet-500/30',
      textColor: 'text-violet-400',
      stats: { migrations: '100+', downtime: '<2hrs', success: '99%' },
      demo: 'https://demo.ziontechgroup.com/cloud-migration',
      docs: 'https://docs.ziontechgroup.com/cloud-migration',
      benefits: [
        'Less than 2 hours downtime',
        '99% migration success rate',
        'Zero data loss',
        'Cost optimization'
      ]
    },
    {
      id: 'it-training',
      name: 'IT Training & Certification',
      category: 'training',
      description: 'Comprehensive IT training programs and certification preparation for technical teams.',
      features: [
        'Technical training programs',
        'Certification preparation',
        'Hands-on labs',
        'Instructor-led training',
        'Online learning platform',
        'Progress tracking'
      ],
      pricing: { monthly: 500, yearly: 5000, setup: 1000 },
      popular: false,
      icon: '🎓',
      color: 'from-emerald-500 to-green-500',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/30',
      textColor: 'text-emerald-400',
      stats: { students: '1000+', passrate: '95%', courses: '50+' },
      demo: 'https://demo.ziontechgroup.com/it-training',
      docs: 'https://docs.ziontechgroup.com/it-training',
      benefits: [
        '95% certification pass rate',
        '50+ technical courses',
        'Hands-on experience',
        'Industry-recognized certifications'
      ]
    },
    {
      id: 'disaster-recovery',
      name: 'Disaster Recovery Solutions',
      category: 'recovery',
      description: 'Comprehensive disaster recovery planning and implementation with automated backup and recovery systems.',
      features: [
        'Disaster recovery planning',
        'Automated backups',
        'Recovery testing',
        'Business continuity planning',
        'Data replication',
        'Recovery time optimization'
      ],
      pricing: { monthly: 1500, yearly: 15000, setup: 8000 },
      popular: false,
      icon: '🔄',
      color: 'from-amber-500 to-yellow-500',
      bgColor: 'bg-amber-500/10',
      borderColor: 'border-amber-500/30',
      textColor: 'text-amber-400',
      stats: { rto: '<1hr', rpo: '<15min', tests: '100+' },
      demo: 'https://demo.ziontechgroup.com/disaster-recovery',
      docs: 'https://docs.ziontechgroup.com/disaster-recovery',
      benefits: [
        'Less than 1 hour RTO',
        'Less than 15 minutes RPO',
        'Automated testing',
        'Business continuity assurance'
      ]
    },
    {
      id: 'it-automation',
      name: 'IT Process Automation',
      category: 'automation',
      description: 'Intelligent automation of IT processes including provisioning, monitoring, and maintenance tasks.',
      features: [
        'Process automation',
        'Workflow optimization',
        'Task scheduling',
        'Error handling',
        'Performance monitoring',
        'Integration capabilities'
      ],
      pricing: { monthly: 1200, yearly: 12000, setup: 6000 },
      popular: false,
      icon: '🤖',
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-500/10',
      borderColor: 'border-pink-500/30',
      textColor: 'text-pink-400',
      stats: { processes: '200+', efficiency: '85%', errors: '95%' },
      demo: 'https://demo.ziontechgroup.com/it-automation',
      docs: 'https://docs.ziontechgroup.com/it-automation',
      benefits: [
        '85% process efficiency improvement',
        '95% error reduction',
        'Automated task execution',
        'Cost savings'
      ]
    },
    {
      id: 'compliance-management',
      name: 'Compliance Management',
      category: 'compliance',
      description: 'Comprehensive compliance management for GDPR, HIPAA, SOX, and other regulatory requirements.',
      features: [
        'Compliance assessment',
        'Policy development',
        'Audit preparation',
        'Risk management',
        'Training programs',
        'Monitoring and reporting'
      ],
      pricing: { monthly: 2000, yearly: 20000, setup: 10000 },
      popular: false,
      icon: '📋',
      color: 'from-indigo-500 to-blue-500',
      bgColor: 'bg-indigo-500/10',
      borderColor: 'border-indigo-500/30',
      textColor: 'text-indigo-400',
      stats: { compliance: '100%', audits: '50+', violations: '0' },
      demo: 'https://demo.ziontechgroup.com/compliance-management',
      docs: 'https://docs.ziontechgroup.com/compliance-management',
      benefits: [
        '100% compliance rate',
        'Zero regulatory violations',
        'Automated monitoring',
        'Audit readiness'
      ]
    },
    {
      id: 'performance-monitoring',
      name: 'IT Performance Monitoring',
      category: 'monitoring',
      description: 'Comprehensive IT performance monitoring with real-time analytics, alerting, and optimization recommendations.',
      features: [
        'Real-time monitoring',
        'Performance analytics',
        'Alert management',
        'Capacity planning',
        'Trend analysis',
        'Optimization recommendations'
      ],
      pricing: { monthly: 800, yearly: 8000, setup: 3000 },
      popular: false,
      icon: '📊',
      color: 'from-teal-500 to-cyan-500',
      bgColor: 'bg-teal-500/10',
      borderColor: 'border-teal-500/30',
      textColor: 'text-teal-400',
      stats: { metrics: '1000+', alerts: '24/7', uptime: '99.9%' },
      demo: 'https://demo.ziontechgroup.com/performance-monitoring',
      docs: 'https://docs.ziontechgroup.com/performance-monitoring',
      benefits: [
        'Real-time visibility',
        'Proactive alerting',
        'Performance optimization',
        'Cost reduction'
      ]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Grid3X3, count: itServices.length },
    { id: 'consulting', name: 'IT Consulting', icon: Users, count: itServices.filter(s => s.category === 'consulting').length },
    { id: 'infrastructure', name: 'Infrastructure', icon: Server, count: itServices.filter(s => s.category === 'infrastructure').length },
    { id: 'security', name: 'Security', icon: Shield, count: itServices.filter(s => s.category === 'security').length },
    { id: 'networking', name: 'Networking', icon: Network, count: itServices.filter(s => s.category === 'networking').length },
    { id: 'database', name: 'Database', icon: Database, count: itServices.filter(s => s.category === 'database').length },
    { id: 'devops', name: 'DevOps', icon: Settings, count: itServices.filter(s => s.category === 'devops').length },
    { id: 'support', name: 'Support', icon: Phone, count: itServices.filter(s => s.category === 'support').length },
    { id: 'administration', name: 'Administration', icon: Settings, count: itServices.filter(s => s.category === 'administration').length },
    { id: 'migration', name: 'Migration', icon: ArrowRight, count: itServices.filter(s => s.category === 'migration').length },
    { id: 'training', name: 'Training', icon: BookOpen, count: itServices.filter(s => s.category === 'training').length },
    { id: 'recovery', name: 'Disaster Recovery', icon: RefreshCw, count: itServices.filter(s => s.category === 'recovery').length },
    { id: 'automation', name: 'Automation', icon: Bot, count: itServices.filter(s => s.category === 'automation').length },
    { id: 'compliance', name: 'Compliance', icon: FileText, count: itServices.filter(s => s.category === 'compliance').length },
    { id: 'monitoring', name: 'Monitoring', icon: BarChart, count: itServices.filter(s => s.category === 'monitoring').length }
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
        filtered = filtered.sort((a, b) => a.pricing.monthly - b.pricing.monthly);
        break;
      case 'price-high':
        filtered = filtered.sort((a, b) => b.pricing.monthly - a.pricing.monthly);
        break;
      case 'rating':
        filtered = filtered.sort((a, b) => b.stats.rating - a.stats.rating);
        break;
      case 'name':
        filtered = filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  const totalValue = itServices.reduce((total, service) => {
    return total + service.pricing.yearly;
  }, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud infrastructure, cybersecurity, network solutions, and system administration. Enterprise-grade IT support and consulting." />
        <meta name="keywords" content="it services, cloud infrastructure, cybersecurity, network solutions, system administration, it consulting, managed it services" />
        <link rel="canonical" href="https://ziontechgroup.com/it-services" />
      </Helmet>

      {/* Navigation */}
      <Navigation />

      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text cyber-text">
            IT Services
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
            Enterprise-Grade IT Solutions and Support
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Comprehensive IT services including cloud infrastructure, cybersecurity, network solutions, and system administration. 
            Our expert team delivers enterprise-grade IT support and consulting to keep your business running smoothly.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            <div className="cyber-card hologram-card p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl mb-3">🖥️</div>
              <h3 className="font-bold text-white mb-3 text-base sm:text-lg">15+ IT Services</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Comprehensive suite of IT solutions</p>
            </div>
            <div className="cyber-card hologram-card p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl mb-3">💰</div>
              <h3 className="font-bold text-white mb-3 text-base sm:text-lg">$300K+ Value</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Total value of IT services portfolio</p>
            </div>
            <div className="cyber-card hologram-card p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl mb-3">⚡</div>
              <h3 className="font-bold text-white mb-3 text-base sm:text-lg">99.9% Uptime</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Enterprise-grade reliability</p>
            </div>
            <div className="cyber-card hologram-card p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl mb-3">🔒</div>
              <h3 className="font-bold text-white mb-3 text-base sm:text-lg">Enterprise Security</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Bank-level security and compliance</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
              aria-label="Call us at (302) 464-0950"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free Consultation
            </a>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="mb-12">
          <div className="cyber-card hologram-card p-6">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search IT services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-cyan-500 text-white'
                        : 'bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
              >
                <option value="popular">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="name">Alphabetical</option>
              </select>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className={`cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300 ${service.borderColor} ${
                  service.popular ? 'ring-2 ring-cyan-400/50' : ''
                }`}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 rounded-lg ${service.bgColor} flex items-center justify-center text-2xl`}>
                      {service.icon}
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
                    <div className="text-2xl font-bold text-white">${service.pricing.monthly.toLocaleString()}</div>
                    <div className="text-sm text-gray-400">/month</div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>

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

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-lg font-bold text-white">{service.stats.projects || service.stats.uptime || service.stats.servers || service.stats.migrations || service.stats.students || service.stats.rto || service.stats.processes || service.stats.compliance || service.stats.metrics}</div>
                    <div className="text-xs text-gray-400">
                      {service.stats.projects ? 'Projects' : 
                       service.stats.uptime ? 'Uptime' : 
                       service.stats.servers ? 'Servers' : 
                       service.stats.migrations ? 'Migrations' : 
                       service.stats.students ? 'Students' : 
                       service.stats.rto ? 'RTO' : 
                       service.stats.processes ? 'Processes' : 
                       service.stats.compliance ? 'Compliance' : 
                       service.stats.metrics ? 'Metrics' : 'Clients'}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-white">{service.stats.rating}</div>
                    <div className="text-xs text-gray-400">Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-white">{service.stats.clients || service.stats.savings || service.stats.speed || service.stats.performance || service.stats.efficiency || service.stats.success || service.stats.passrate || service.stats.rpo || service.stats.errors || service.stats.violations || service.stats.alerts}</div>
                    <div className="text-xs text-gray-400">
                      {service.stats.clients ? 'Clients' : 
                       service.stats.savings ? 'Savings' : 
                       service.stats.speed ? 'Speed' : 
                       service.stats.performance ? 'Performance' : 
                       service.stats.efficiency ? 'Efficiency' : 
                       service.stats.success ? 'Success' : 
                       service.stats.passrate ? 'Pass Rate' : 
                       service.stats.rpo ? 'RPO' : 
                       service.stats.errors ? 'Error Reduction' : 
                       service.stats.violations ? 'Violations' : 
                       service.stats.alerts ? 'Alerts' : 'Uptime'}
                    </div>
                  </div>
                </div>

                {/* Benefits */}
                {service.benefits && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 3).map((benefit, index) => (
                        <li key={index} className="text-sm text-cyan-400">
                          • {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Pricing */}
                <div className="mb-6 p-4 bg-slate-800/50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">Monthly</span>
                    <span className="text-lg font-bold text-white">${service.pricing.monthly.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Yearly</span>
                    <div className="text-right">
                      <span className="text-lg font-bold text-white">${service.pricing.yearly.toLocaleString()}</span>
                      <span className="text-xs text-green-400 ml-2">
                        Save ${(service.pricing.monthly * 12) - service.pricing.yearly}
                      </span>
                    </div>
                  </div>
                  {service.pricing.setup > 0 && (
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-sm text-gray-400">Setup</span>
                      <span className="text-sm text-white">${service.pricing.setup.toLocaleString()}</span>
                    </div>
                  )}
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
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center mb-16">
          <div className="cyber-card hologram-card p-8">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Transform Your IT Infrastructure?</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Get started with our IT services today and experience enterprise-grade technology solutions that keep your business running smoothly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};


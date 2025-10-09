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

export default function ITServicesPage() {
  const [activeTab, setActiveTab] = useState('overview');

  const itServices = [
    {
      category: 'Infrastructure & Cloud Solutions',
      icon: Cloud,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      services: [
        {
          name: 'Cloud Migration & Setup',
          description: 'Seamless migration to cloud platforms with zero downtime and cost optimization',
          features: ['AWS/Azure/GCP Migration', 'Hybrid Cloud Solutions', 'Cost Optimization', 'Security Implementation', 'Performance Monitoring', 'Auto-scaling'],
          pricing: 'Starting at $10,000',
          timeline: '2-8 weeks',
          popular: true
        },
        {
          name: 'IT Infrastructure Design',
          description: 'Scalable and secure infrastructure architecture for enterprise environments',
          features: ['Network Design', 'Server Configuration', 'Load Balancing', 'Disaster Recovery', 'High Availability', 'Security Hardening'],
          pricing: 'Starting at $15,000',
          timeline: '3-6 weeks',
          popular: true
        },
        {
          name: 'Database Management',
          description: 'Optimized database performance and management with 24/7 monitoring',
          features: ['Performance Tuning', 'Backup & Recovery', 'Security Hardening', 'Monitoring', 'Query Optimization', 'Index Management'],
          pricing: 'Starting at $5,000/month',
          timeline: 'Ongoing',
          popular: true
        },
        {
          name: 'Cloud Cost Optimization',
          description: 'Reduce cloud costs by up to 40% with intelligent resource management',
          features: ['Cost Analysis', 'Resource Optimization', 'Auto-scaling', 'Reserved Instances', 'Spot Instances', 'Cost Alerts'],
          pricing: 'Starting at $3,000/month',
          timeline: '2-4 weeks',
          popular: false
        },
        {
          name: 'Multi-Cloud Strategy',
          description: 'Comprehensive multi-cloud architecture and management solutions',
          features: ['Multi-cloud Architecture', 'Vendor Management', 'Cost Optimization', 'Security Compliance', 'Disaster Recovery', 'Performance Monitoring'],
          pricing: 'Starting at $12,000',
          timeline: '4-8 weeks',
          popular: false
        }
      ]
    },
    {
      category: 'Security & Compliance',
      icon: Shield,
      color: 'text-red-400',
      bgColor: 'bg-red-500/10',
      services: [
        {
          name: 'Cybersecurity Suite',
          description: 'Comprehensive security solutions for enterprise protection with 24/7 monitoring',
          features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring', 'Incident Response', 'Penetration Testing', 'Security Audits'],
          pricing: 'Starting at $8,000/month',
          timeline: '2-4 weeks',
          popular: true
        },
        {
          name: 'Compliance Management',
          description: 'Ensure compliance with industry standards and regulations across all frameworks',
          features: ['GDPR Compliance', 'HIPAA Compliance', 'SOX Compliance', 'Audit Support', 'Policy Management', 'Risk Assessment'],
          pricing: 'Starting at $12,000',
          timeline: '4-8 weeks',
          popular: true
        },
        {
          name: 'Security Training',
          description: 'Employee security awareness and training programs with ongoing support',
          features: ['Phishing Simulation', 'Security Workshops', 'Policy Development', 'Assessment', 'Certification Programs', 'Ongoing Training'],
          pricing: 'Starting at $3,000',
          timeline: '1-2 weeks',
          popular: false
        },
        {
          name: 'Zero Trust Architecture',
          description: 'Implement zero trust security model for enhanced protection',
          features: ['Identity Verification', 'Device Trust', 'Network Segmentation', 'Access Control', 'Continuous Monitoring', 'Risk Assessment'],
          pricing: 'Starting at $15,000',
          timeline: '6-12 weeks',
          popular: false
        },
        {
          name: 'Security Operations Center (SOC)',
          description: '24/7 security monitoring and incident response services',
          features: ['24/7 Monitoring', 'Threat Hunting', 'Incident Response', 'Forensic Analysis', 'Security Analytics', 'Compliance Reporting'],
          pricing: 'Starting at $20,000/month',
          timeline: '4-8 weeks',
          popular: false
        }
      ]
    },
    {
      category: 'Support & Maintenance',
      icon: Settings,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      services: [
        {
          name: '24/7 IT Support',
          description: 'Round-the-clock technical support and monitoring',
          features: ['Help Desk Support', 'Remote Monitoring', 'Proactive Maintenance', 'Emergency Response'],
          pricing: 'Starting at $2,000/month',
          timeline: 'Immediate'
        },
        {
          name: 'System Administration',
          description: 'Complete system administration and management',
          features: ['User Management', 'System Updates', 'Performance Monitoring', 'Backup Management'],
          pricing: 'Starting at $4,000/month',
          timeline: 'Ongoing'
        },
        {
          name: 'IT Consulting',
          description: 'Strategic IT planning and technology consulting',
          features: ['Technology Assessment', 'Strategic Planning', 'Vendor Management', 'Budget Planning'],
          pricing: 'Starting at $200/hour',
          timeline: 'As needed'
        }
      ]
    },
    {
      category: 'Development & Integration',
      icon: Code,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      services: [
        {
          name: 'Custom Software Development',
          description: 'Tailored software solutions for your business needs with modern technologies',
          features: ['Web Applications', 'Mobile Apps', 'API Development', 'Integration Services', 'Cloud-native Apps', 'Microservices'],
          pricing: 'Starting at $15,000',
          timeline: '6-12 weeks',
          popular: true
        },
        {
          name: 'System Integration',
          description: 'Connect and integrate disparate systems with seamless data flow',
          features: ['API Integration', 'Data Migration', 'Workflow Automation', 'Legacy System Modernization', 'Real-time Sync', 'Error Handling'],
          pricing: 'Starting at $8,000',
          timeline: '3-8 weeks',
          popular: true
        },
        {
          name: 'DevOps & CI/CD',
          description: 'Streamline development and deployment processes with automation',
          features: ['Automated Testing', 'Continuous Integration', 'Deployment Automation', 'Monitoring', 'Infrastructure as Code', 'Container Orchestration'],
          pricing: 'Starting at $6,000',
          timeline: '2-6 weeks',
          popular: true
        },
        {
          name: 'API Development & Management',
          description: 'Comprehensive API development, documentation, and management solutions',
          features: ['RESTful APIs', 'GraphQL APIs', 'API Documentation', 'Rate Limiting', 'Authentication', 'Analytics'],
          pricing: 'Starting at $5,000',
          timeline: '3-6 weeks',
          popular: false
        },
        {
          name: 'Legacy System Modernization',
          description: 'Modernize legacy systems with cloud-native architectures and microservices',
          features: ['System Analysis', 'Architecture Design', 'Data Migration', 'API Development', 'Testing', 'Deployment'],
          pricing: 'Starting at $25,000',
          timeline: '12-24 weeks',
          popular: false
        }
      ]
    },
    {
      category: 'Data & Analytics',
      icon: BarChart,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      services: [
        {
          name: 'Data Warehouse Solutions',
          description: 'Comprehensive data warehouse design and implementation for business intelligence',
          features: ['Data Modeling', 'ETL Processes', 'Data Quality', 'Performance Optimization', 'Security', 'Scalability'],
          pricing: 'Starting at $20,000',
          timeline: '8-16 weeks',
          popular: true
        },
        {
          name: 'Business Intelligence & Reporting',
          description: 'Advanced BI solutions with interactive dashboards and real-time reporting',
          features: ['Interactive Dashboards', 'Real-time Reporting', 'Data Visualization', 'Self-service BI', 'Mobile Access', 'Automated Reports'],
          pricing: 'Starting at $12,000',
          timeline: '6-12 weeks',
          popular: true
        },
        {
          name: 'Data Lake Implementation',
          description: 'Scalable data lake solutions for big data analytics and machine learning',
          features: ['Data Ingestion', 'Storage Optimization', 'Data Catalog', 'Security', 'Governance', 'Analytics Ready'],
          pricing: 'Starting at $15,000',
          timeline: '8-14 weeks',
          popular: false
        },
        {
          name: 'Real-time Data Processing',
          description: 'Stream processing and real-time analytics solutions',
          features: ['Stream Processing', 'Real-time Analytics', 'Event Processing', 'Data Pipelines', 'Monitoring', 'Alerting'],
          pricing: 'Starting at $18,000',
          timeline: '10-18 weeks',
          popular: false
        }
      ]
    },
    {
      category: 'Network & Connectivity',
      icon: Wifi,
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
      services: [
        {
          name: 'Network Design & Implementation',
          description: 'Enterprise-grade network infrastructure design and deployment',
          features: ['Network Architecture', 'VLAN Design', 'Routing & Switching', 'Wireless Networks', 'Security', 'Monitoring'],
          pricing: 'Starting at $25,000',
          timeline: '6-12 weeks',
          popular: true
        },
        {
          name: 'SD-WAN Solutions',
          description: 'Software-defined wide area network solutions for enhanced connectivity',
          features: ['Centralized Management', 'Application Optimization', 'Security Integration', 'Cost Optimization', 'Performance Monitoring', 'Automation'],
          pricing: 'Starting at $30,000',
          timeline: '8-16 weeks',
          popular: false
        },
        {
          name: 'Network Security',
          description: 'Comprehensive network security solutions and monitoring',
          features: ['Firewall Management', 'Intrusion Detection', 'VPN Solutions', 'Network Segmentation', 'Threat Prevention', 'Compliance'],
          pricing: 'Starting at $12,000',
          timeline: '4-8 weeks',
          popular: false
        }
      ]
    },
    {
      category: 'Managed IT Services',
      icon: Settings,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      services: [
        {
          name: '24/7 IT Support',
          description: 'Round-the-clock technical support and monitoring with guaranteed response times',
          features: ['Help Desk Support', 'Remote Monitoring', 'Proactive Maintenance', 'Emergency Response', 'SLA Guarantees', 'Knowledge Base'],
          pricing: 'Starting at $2,000/month',
          timeline: 'Immediate',
          popular: true
        },
        {
          name: 'System Administration',
          description: 'Complete system administration and management with optimization',
          features: ['User Management', 'System Updates', 'Performance Monitoring', 'Backup Management', 'Security Updates', 'Capacity Planning'],
          pricing: 'Starting at $4,000/month',
          timeline: 'Ongoing',
          popular: true
        },
        {
          name: 'IT Consulting',
          description: 'Strategic IT planning and technology consulting for digital transformation',
          features: ['Technology Assessment', 'Strategic Planning', 'Vendor Management', 'Budget Planning', 'Digital Transformation', 'Innovation'],
          pricing: 'Starting at $200/hour',
          timeline: 'As needed',
          popular: false
        },
        {
          name: 'IT Asset Management',
          description: 'Comprehensive IT asset lifecycle management and optimization',
          features: ['Asset Discovery', 'Inventory Management', 'License Management', 'Depreciation Tracking', 'Procurement', 'Disposal'],
          pricing: 'Starting at $3,000/month',
          timeline: '2-4 weeks',
          popular: false
        }
      ]
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: 'Our clients see 40% improvement in system performance',
      stat: '40%'
    },
    {
      icon: Clock,
      title: 'Rapid Response',
      description: 'Average response time of 15 minutes for critical issues',
      stat: '15 min'
    },
    {
      icon: DollarSign,
      title: 'Cost Savings',
      description: 'Reduce IT costs by up to 60% through optimization',
      stat: '60%'
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'Zero security breaches with our comprehensive approach',
      stat: '100%'
    }
  ];

  const technologies = [
    {
      category: 'Cloud Platforms',
      icon: Cloud,
      techs: ['AWS', 'Microsoft Azure', 'Google Cloud', 'IBM Cloud', 'Oracle Cloud']
    },
    {
      category: 'Security Tools',
      icon: Shield,
      techs: ['CrowdStrike', 'Palo Alto', 'Cisco', 'Fortinet', 'Splunk']
    },
    {
      category: 'Databases',
      icon: Database,
      techs: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch']
    },
    {
      category: 'Monitoring',
      icon: BarChart,
      techs: ['Datadog', 'New Relic', 'Prometheus', 'Grafana', 'Zabbix']
    }
  ];

  const process = [
    {
      step: 1,
      title: 'Assessment & Planning',
      description: 'Comprehensive analysis of your current IT infrastructure and needs',
      duration: '1-2 weeks'
    },
    {
      step: 2,
      title: 'Strategy Development',
      description: 'Create a detailed IT strategy aligned with your business goals',
      duration: '1-2 weeks'
    },
    {
      step: 3,
      title: 'Implementation',
      description: 'Deploy solutions with minimal disruption to your operations',
      duration: '2-8 weeks'
    },
    {
      step: 4,
      title: 'Testing & Optimization',
      description: 'Thorough testing and performance optimization',
      duration: '1-2 weeks'
    },
    {
      step: 5,
      title: 'Support & Monitoring',
      description: 'Ongoing support, monitoring, and continuous improvement',
      duration: 'Ongoing'
    }
  ];

  const caseStudies = [
    {
      company: 'ManufacturingCorp',
      industry: 'Manufacturing',
      challenge: 'Outdated IT infrastructure causing production delays',
      solution: 'Complete infrastructure modernization and cloud migration',
      results: ['50% faster processing', '99.9% uptime', '40% cost reduction'],
      image: '/images/case-studies/manufacturing.jpg'
    },
    {
      company: 'FinanceFirst Bank',
      industry: 'Banking',
      challenge: 'Security vulnerabilities and compliance issues',
      solution: 'Comprehensive cybersecurity suite and compliance framework',
      results: ['Zero security incidents', '100% compliance', '60% faster audits'],
      image: '/images/case-studies/banking.jpg'
    },
    {
      company: 'RetailMax Stores',
      industry: 'Retail',
      challenge: 'Disconnected systems and poor customer experience',
      solution: 'System integration and unified platform development',
      results: ['30% improved efficiency', '25% better customer satisfaction', '200% ROI'],
      image: '/images/case-studies/retail.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
              IT Services
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Comprehensive IT solutions that keep your business running smoothly, securely, and efficiently. 
              From infrastructure to security, we've got you covered.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg">
                <Shield className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">Enterprise Security</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
                <Cloud className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">Cloud Solutions</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg">
                <Settings className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Choose Our IT Services?
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Proven expertise and enterprise-grade solutions that deliver measurable business value
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
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

      {/* IT Services */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Our IT Services
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT solutions designed to meet your business needs
            </p>
          </div>
          <div className="space-y-16">
            {itServices.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center space-x-3 mb-8">
                  <category.icon className={`w-8 h-8 ${category.color}`} />
                  <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300 group relative">
                      {service.popular && (
                        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                          Popular
                        </div>
                      )}
                      <h4 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{service.name}</h4>
                      <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                      <div className="space-y-3 mb-6">
                        <h5 className="text-sm font-semibold text-cyan-400">Key Features:</h5>
                        <div className="grid grid-cols-2 gap-2">
                          {service.features.slice(0, 4).map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-2 text-xs text-gray-300">
                              <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                              <span className="truncate">{feature}</span>
                            </div>
                          ))}
                          {service.features.length > 4 && (
                            <div className="text-xs text-gray-400 col-span-2">
                              +{service.features.length - 4} more features
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="space-y-2 mb-6">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-400">Pricing:</span>
                          <span className="text-sm font-medium text-white">{service.pricing}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-400">Timeline:</span>
                          <span className="text-sm font-medium text-cyan-400">{service.timeline}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all text-sm">
                          Learn More
                        </button>
                        <button className="flex-1 border border-cyan-400 text-cyan-400 py-2 px-4 rounded-lg font-medium hover:bg-cyan-400 hover:text-slate-900 transition-all text-sm">
                          Contact
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Technologies We Work With
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We work with the latest and most reliable technologies in the industry
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{tech.category}</h3>
                <div className="space-y-2">
                  {tech.techs.map((technology, techIndex) => (
                    <div key={techIndex} className="text-sm text-gray-300 bg-slate-700/50 px-3 py-1 rounded">
                      {technology}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Our IT Implementation Process
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures successful IT implementation
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-purple-600"></div>
              {process.map((step, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-slate-800/50 p-6 rounded-lg">
                      <div className="text-cyan-400 font-bold text-lg mb-2">Step {step.step}</div>
                      <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-gray-300 mb-2">{step.description}</p>
                      <div className="text-sm text-cyan-400 font-medium">{step.duration}</div>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-slate-900"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Real results from real clients across various industries
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-white">
                    {study.company.split(' ').map(word => word[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{study.company}</h3>
                <p className="text-cyan-400 text-sm mb-4">{study.industry}</p>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-1">Challenge:</h4>
                    <p className="text-sm text-gray-400">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-1">Solution:</h4>
                    <p className="text-sm text-gray-400">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-1">Results:</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center space-x-2 text-sm text-green-400">
                          <CheckCircle className="w-3 h-3 flex-shrink-0" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Modernize Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join hundreds of enterprises that have already transformed their IT operations with our solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Get Started Today
            </a>
            <a
              href="/consultation"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Free Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
=======
export default ITServicesPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-6b21

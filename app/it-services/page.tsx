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
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const itServices = useMemo(() => [
    {
      id: 'it-infrastructure',
      name: 'IT Infrastructure Solutions',
      category: 'infrastructure',
      description: 'Complete IT infrastructure design, implementation, and management for enterprise environments.',
      features: [
        'Network Design & Implementation',
        'Server Configuration & Management',
        'Cloud Infrastructure Setup',
        'Data Center Solutions',
        'Disaster Recovery Planning',
        '24/7 Infrastructure Monitoring'
      ],
      pricing: {
        starter: { price: '$5,000', period: 'month', description: 'Small business infrastructure' },
        professional: { price: '$15,000', period: 'month', description: 'Mid-size enterprise' },
        enterprise: { price: '$50,000', period: 'month', description: 'Large enterprise infrastructure' }
      },
      benefits: [
        '99.9% uptime guarantee',
        '50% reduction in IT costs',
        'Scalable infrastructure solutions',
        'Expert technical support'
      ],
      icon: Server,
      color: 'from-blue-500 to-cyan-500',
      popular: true,
      link: '/it-infrastructure'
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity Services',
      category: 'security',
      description: 'Comprehensive cybersecurity solutions including threat detection, incident response, and compliance.',
      features: [
        'Threat Detection & Prevention',
        'Security Assessment & Auditing',
        'Incident Response & Recovery',
        'Compliance Management (SOC2, ISO27001)',
        'Security Training & Awareness',
        '24/7 Security Monitoring'
      ],
      pricing: {
        starter: { price: '$3,000', period: 'month', description: 'Basic security monitoring' },
        professional: { price: '$8,000', period: 'month', description: 'Advanced threat protection' },
        enterprise: { price: '$25,000', period: 'month', description: 'Full security suite' }
      },
      benefits: [
        '99.5% threat detection accuracy',
        'Zero security breaches guarantee',
        'Compliance certification support',
        'Real-time security monitoring'
      ],
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      popular: true,
      link: '/cybersecurity'
    },
    {
      id: 'cloud-migration',
      name: 'Cloud Migration & Management',
      category: 'cloud',
      description: 'Seamless cloud migration services with AWS, Azure, and Google Cloud expertise.',
      features: [
        'Multi-Cloud Strategy & Planning',
        'Application Migration & Optimization',
        'Cloud Cost Optimization',
        'Security & Compliance Setup',
        'Performance Monitoring & Optimization',
        'Cloud Training & Support'
      ],
      pricing: {
        starter: { price: '$10,000', period: 'one-time', description: 'Small application migration' },
        professional: { price: '$35,000', period: 'one-time', description: 'Enterprise migration' },
        enterprise: { price: '$100,000', period: 'one-time', description: 'Full cloud transformation' }
      },
      benefits: [
        '40% reduction in cloud costs',
        'Zero downtime migration',
        'Improved scalability and performance',
        'Expert cloud architecture design'
      ],
      icon: Cloud,
      color: 'from-purple-500 to-indigo-500',
      popular: true,
      link: '/cloud-migration'
    },
    {
      id: 'devops-cicd',
      name: 'DevOps & CI/CD',
      category: 'devops',
      description: 'Complete DevOps implementation with automated CI/CD pipelines and infrastructure as code.',
      features: [
        'CI/CD Pipeline Setup & Optimization',
        'Infrastructure as Code (IaC)',
        'Container Orchestration (Kubernetes)',
        'Automated Testing & Deployment',
        'Monitoring & Logging Solutions',
        'DevOps Training & Consulting'
      ],
      pricing: {
        starter: { price: '$4,000', period: 'month', description: 'Basic CI/CD setup' },
        professional: { price: '$12,000', period: 'month', description: 'Advanced DevOps pipeline' },
        enterprise: { price: '$30,000', period: 'month', description: 'Full DevOps transformation' }
      },
      benefits: [
        '80% faster deployment cycles',
        '90% reduction in deployment errors',
        'Automated infrastructure management',
        'Improved development productivity'
      ],
      icon: Code,
      color: 'from-green-500 to-emerald-500',
      popular: false,
      link: '/devops-cicd'
    },
    {
      id: 'database-management',
      name: 'Database Management',
      category: 'database',
      description: 'Comprehensive database administration, optimization, and migration services.',
      features: [
        'Database Design & Architecture',
        'Performance Tuning & Optimization',
        'Backup & Recovery Solutions',
        'Database Migration Services',
        'Security & Access Management',
        '24/7 Database Monitoring'
      ],
      pricing: {
        starter: { price: '$2,500', period: 'month', description: 'Up to 5 databases' },
        professional: { price: '$7,500', period: 'month', description: 'Up to 25 databases' },
        enterprise: { price: '$20,000', period: 'month', description: 'Unlimited databases' }
      },
      benefits: [
        '99.9% database availability',
        '50% improvement in query performance',
        'Automated backup and recovery',
        'Expert database optimization'
      ],
      icon: Database,
      color: 'from-orange-500 to-yellow-500',
      popular: false,
      link: '/database-management'
    },
    {
      id: 'network-solutions',
      name: 'Network Solutions',
      category: 'networking',
      description: 'Advanced networking solutions including LAN, WAN, wireless, and SD-WAN implementation.',
      features: [
        'Network Design & Architecture',
        'Wireless Network Implementation',
        'SD-WAN & VPN Solutions',
        'Network Security & Firewall',
        'Performance Monitoring & Optimization',
        'Network Troubleshooting & Support'
      ],
      pricing: {
        starter: { price: '$3,500', period: 'month', description: 'Small office network' },
        professional: { price: '$10,000', period: 'month', description: 'Multi-location network' },
        enterprise: { price: '$25,000', period: 'month', description: 'Enterprise network infrastructure' }
      },
      benefits: [
        '99.9% network uptime',
        '50% improvement in network performance',
        'Secure remote access solutions',
        'Expert network optimization'
      ],
      icon: Wifi,
      color: 'from-cyan-500 to-blue-500',
      popular: true,
      link: '/network-solutions'
    },
    {
      id: 'system-administration',
      name: 'System Administration',
      category: 'administration',
      description: 'Complete system administration services for Windows, Linux, and hybrid environments.',
      features: [
        'Server Administration & Maintenance',
        'User Account Management',
        'System Monitoring & Alerting',
        'Patch Management & Updates',
        'Performance Tuning & Optimization',
        'Disaster Recovery & Backup'
      ],
      pricing: {
        starter: { price: '$2,000', period: 'month', description: 'Up to 10 servers' },
        professional: { price: '$6,000', period: 'month', description: 'Up to 50 servers' },
        enterprise: { price: '$15,000', period: 'month', description: 'Unlimited servers' }
      },
      benefits: [
        '99.9% system availability',
        'Automated system maintenance',
        'Proactive issue resolution',
        'Expert system optimization'
      ],
      icon: Settings,
      color: 'from-indigo-500 to-purple-500',
      popular: false,
      link: '/system-administration'
    },
    {
      id: 'it-consulting',
      name: 'IT Consulting',
      category: 'consulting',
      description: 'Strategic IT consulting services to help optimize your technology investments.',
      features: [
        'IT Strategy & Planning',
        'Technology Assessment & Audit',
        'Digital Transformation Consulting',
        'Vendor Selection & Management',
        'IT Budget Planning & Optimization',
        'Technology Roadmap Development'
      ],
      pricing: {
        hourly: { price: '$200', period: 'hour', description: 'Hourly consulting' },
        project: { price: '$15,000', period: 'project', description: 'Project-based consulting' },
        retainer: { price: '$5,000', period: 'month', description: 'Monthly retainer' }
      },
      benefits: [
        'Expert technology guidance',
        'Cost optimization strategies',
        'Strategic technology planning',
        'Vendor relationship management'
      ],
      icon: Users,
      color: 'from-pink-500 to-rose-500',
      popular: false,
      link: '/it-consulting'
    },
    {
      id: 'it-support',
      name: 'IT Support & Helpdesk',
      category: 'support',
      description: '24/7 IT support services with remote assistance and on-site support options.',
      features: [
        '24/7 Helpdesk Support',
        'Remote Desktop Support',
        'On-site Technical Support',
        'Hardware & Software Troubleshooting',
        'User Training & Support',
        'IT Asset Management'
      ],
      pricing: {
        basic: { price: '$1,500', period: 'month', description: 'Up to 25 users' },
        standard: { price: '$4,000', period: 'month', description: 'Up to 100 users' },
        premium: { price: '$10,000', period: 'month', description: 'Unlimited users' }
      },
      benefits: [
        '24/7 technical support',
        'Fast response times',
        'Proactive issue resolution',
        'Comprehensive user support'
      ],
      icon: Phone,
      color: 'from-teal-500 to-cyan-500',
      popular: true,
      link: '/it-support'
    },
    {
      id: 'it-training',
      name: 'IT Training & Certification',
      category: 'training',
      description: 'Comprehensive IT training programs and certification preparation for your team.',
      features: [
        'Custom Training Programs',
        'Certification Preparation',
        'Hands-on Lab Sessions',
        'Online Learning Platform',
        'Progress Tracking & Reporting',
        'Certified Instructor Support'
      ],
      pricing: {
        individual: { price: '$500', period: 'person', description: 'Individual training' },
        group: { price: '$2,000', period: 'group', description: 'Group training (up to 10)' },
        enterprise: { price: '$10,000', period: 'month', description: 'Unlimited training' }
      },
      benefits: [
        'Improved team skills',
        'Industry certification preparation',
        'Customized training content',
        'Expert instructor guidance'
      ],
      icon: BookOpen,
      color: 'from-yellow-500 to-orange-500',
      popular: false,
      link: '/it-training'
    },
    {
      id: 'disaster-recovery',
      name: 'Disaster Recovery',
      category: 'recovery',
      description: 'Comprehensive disaster recovery planning and implementation to protect your business.',
      features: [
        'Disaster Recovery Planning',
        'Backup Strategy & Implementation',
        'Business Continuity Planning',
        'Recovery Testing & Validation',
        'Emergency Response Procedures',
        'Recovery Time Optimization'
      ],
      pricing: {
        basic: { price: '$5,000', period: 'month', description: 'Basic DR planning' },
        standard: { price: '$15,000', period: 'month', description: 'Comprehensive DR solution' },
        enterprise: { price: '$40,000', period: 'month', description: 'Full DR transformation' }
      },
      benefits: [
        'Minimal downtime during disasters',
        'Comprehensive backup solutions',
        'Tested recovery procedures',
        'Business continuity assurance'
      ],
      icon: AlertTriangle,
      color: 'from-red-500 to-orange-500',
      popular: false,
      link: '/disaster-recovery'
    },
    {
      id: 'it-automation',
      name: 'IT Automation',
      category: 'automation',
      description: 'Intelligent IT automation solutions to streamline operations and reduce manual tasks.',
      features: [
        'Process Automation & Workflows',
        'Automated Monitoring & Alerting',
        'Self-healing Infrastructure',
        'Automated Backup & Recovery',
        'Script Development & Deployment',
        'Integration & API Management'
      ],
      pricing: {
        starter: { price: '$3,000', period: 'month', description: 'Basic automation' },
        professional: { price: '$8,000', period: 'month', description: 'Advanced automation' },
        enterprise: { price: '$20,000', period: 'month', description: 'Full automation suite' }
      },
      benefits: [
        '75% reduction in manual tasks',
        'Improved operational efficiency',
        'Reduced human errors',
        '24/7 automated monitoring'
      ],
      icon: Zap,
      color: 'from-violet-500 to-purple-500',
      popular: true,
      link: '/it-automation'
    }
  ], []);

  const categories = [
    { id: 'all', name: 'All Services', icon: Grid3X3 },
    { id: 'infrastructure', name: 'Infrastructure', icon: Server },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'cloud', name: 'Cloud', icon: Cloud },
    { id: 'devops', name: 'DevOps', icon: Code },
    { id: 'database', name: 'Database', icon: Database },
    { id: 'networking', name: 'Networking', icon: Wifi },
    { id: 'administration', name: 'Administration', icon: Settings },
    { id: 'consulting', name: 'Consulting', icon: Users },
    { id: 'support', name: 'Support', icon: Phone },
    { id: 'training', name: 'Training', icon: BookOpen },
    { id: 'recovery', name: 'Recovery', icon: AlertTriangle },
    { id: 'automation', name: 'Automation', icon: Zap }
  ];

  const filteredServices = useMemo(() => {
    return itServices.filter(service => {
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          service.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [itServices, selectedCategory, searchTerm]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Services - Zion Tech Group | Comprehensive IT Solutions & Support</title>
        <meta name="description" content="Professional IT services including infrastructure, cybersecurity, cloud migration, DevOps, and 24/7 support. Transform your business with our expert IT solutions." />
        <meta name="keywords" content="IT services, IT support, cybersecurity, cloud migration, DevOps, infrastructure, network solutions, IT consulting" />
        <meta property="og:title" content="IT Services - Zion Tech Group" />
        <meta property="og:description" content="Transform your business with our comprehensive IT services. From infrastructure to cybersecurity, we deliver expert IT solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/it-services" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute inset-0 cyber-grid"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                IT Services
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Comprehensive IT solutions and support services to keep your business running smoothly. 
              From infrastructure to cybersecurity, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search IT services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 justify-center mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-cyan-400'
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
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="cyber-card p-8 hover:scale-105 transition-all duration-300 group relative overflow-hidden"
              >
                {service.popular && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                    Popular
                  </div>
                )}
                
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {service.name}
                </h3>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-4 mb-6">
                  <h4 className="text-lg font-semibold text-cyan-400">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4 mb-6">
                  <h4 className="text-lg font-semibold text-cyan-400">Pricing:</h4>
                  <div className="space-y-2">
                    {Object.entries(service.pricing).map(([tier, pricing]) => (
                      <div key={tier} className="flex justify-between items-center text-sm">
                        <span className="text-gray-300 capitalize">{tier}:</span>
                        <span className="text-white font-semibold">
                          {pricing.price}/{pricing.period}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <h4 className="text-lg font-semibold text-cyan-400">Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <TrendingUp className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex space-x-3">
                  <a
                    href={service.link}
                    className="flex-1 cyber-button text-center py-3 px-4 rounded-lg font-semibold transition-all duration-300"
                  >
                    Learn More
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="cyber-button py-3 px-4 rounded-lg font-semibold transition-all duration-300"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Optimize Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Our IT experts are ready to help you implement the perfect solution for your business needs. 
            Get a free consultation and see how we can transform your IT operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ITServicesPage;

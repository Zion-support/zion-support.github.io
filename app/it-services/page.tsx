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
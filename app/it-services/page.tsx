'use client';
<<<<<<< HEAD

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
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Grid3X3, count: itServices.length },
    { id: 'consulting', name: 'IT Consulting', icon: Users, count: itServices.filter(s => s.category === 'consulting').length },
    { id: 'infrastructure', name: 'Infrastructure', icon: Server, count: itServices.filter(s => s.category === 'infrastructure').length },
    { id: 'security', name: 'Security', icon: Shield, count: itServices.filter(s => s.category === 'security').length }
=======
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Cloud, Shield, Settings, Database, Smartphone, Lock, BarChart, Users, 
  CheckCircle, ArrowRight, Phone, Mail, MapPin, Clock, Star, Zap, Cpu, 
  HardDrive, Wifi, Server, Code, Globe, Target, TrendingUp, Award, 
  Monitor, Network, RefreshCw, AlertTriangle, Headphones, FileText
} from 'lucide-react';

export default function ITServicesPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const itServices = [
    {
      id: 'it-infrastructure',
      name: 'IT Infrastructure',
      description: 'Build and maintain robust IT infrastructure for your business.',
      icon: Server,
      features: ['Server Management', 'Network Setup', 'Cloud Migration', 'Infrastructure Monitoring'],
      benefits: ['99.9% uptime guarantee', 'Scalable solutions', '24/7 monitoring', 'Proactive maintenance'],
      pricing: { starting: 2999, period: 'month' },
      popular: true
    },
    {
      id: 'it-support',
      name: 'IT Support',
      description: 'Comprehensive IT support and maintenance services.',
      icon: Users,
      features: ['24/7 Support', 'Help Desk', 'System Maintenance', 'Troubleshooting'],
      benefits: ['Instant response', 'Expert technicians', 'Remote assistance', 'Preventive maintenance'],
      pricing: { starting: 1999, period: 'month' },
      popular: false
    },
    {
      id: 'cloud-infrastructure',
      name: 'Cloud Infrastructure',
      description: 'Migrate and optimize your cloud infrastructure.',
      icon: Cloud,
      features: ['Cloud Migration', 'Infrastructure as Code', 'Cost Optimization', 'Security Hardening'],
      benefits: ['Reduced costs', 'Enhanced security', 'Better scalability', 'Improved performance'],
      pricing: { starting: 3999, period: 'month' },
      popular: false
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity',
      description: 'Protect your business with comprehensive security solutions.',
      icon: Shield,
      features: ['Security Assessment', 'Threat Detection', 'Incident Response', 'Security Training'],
      benefits: ['Advanced protection', 'Compliance support', 'Risk mitigation', 'Security awareness'],
      pricing: { starting: 2499, period: 'month' },
      popular: false
    },
    {
      id: 'database-management',
      name: 'Database Management',
      description: 'Optimize and maintain your database systems.',
      icon: Database,
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Data Migration'],
      benefits: ['Improved performance', 'Data security', 'Automated backups', 'Expert support'],
      pricing: { starting: 1799, period: 'month' },
      popular: false
    },
    {
      id: 'network-solutions',
      name: 'Network Solutions',
      description: 'Design and implement secure network infrastructure.',
      icon: Network,
      features: ['Network Design', 'Security Implementation', 'Performance Optimization', 'Monitoring'],
      benefits: ['Secure connectivity', 'High performance', 'Scalable design', '24/7 monitoring'],
      pricing: { starting: 2199, period: 'month' },
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "David Kim",
      company: "TechStart Inc",
      content: "Their IT infrastructure services have been game-changing for our business. 99.9% uptime as promised!",
      rating: 5
    },
    {
      name: "Lisa Chen",
      company: "DataCorp Solutions",
      content: "The cloud migration was seamless. We saved 40% on infrastructure costs while improving performance.",
      rating: 5
    },
    {
      name: "Robert Johnson",
      company: "SecureTech Ltd",
      content: "Their cybersecurity solutions protected us from multiple threats. Highly recommended!",
      rating: 5
    }
  ];

  const stats = [
    { label: 'Uptime Guarantee', value: '99.9%' },
    { label: 'Client Satisfaction', value: '98%' },
    { label: 'Response Time', value: '< 15 min' },
    { label: 'Projects Completed', value: '500+' }
>>>>>>> cursor/fix-errors-and-merge-to-main-f2a7
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

  return (
<<<<<<< HEAD
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

export default ITServicesPage;
=======
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including infrastructure, support, cloud solutions, and cybersecurity." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              IT Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Comprehensive IT solutions to keep your business running smoothly and securely
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                Get Started Today
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                View Our Work
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our IT Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From infrastructure to cybersecurity, we provide comprehensive IT solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <service.icon className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-lg font-semibold text-blue-600 mb-4">
                  Starting at ${service.pricing.starting}/{service.pricing.period}
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Real results from real businesses</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Optimize Your IT?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how our IT services can improve your business operations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Schedule Consultation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-f2a7

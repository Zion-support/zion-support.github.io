import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Rocket, 
  Cpu, 
  Globe,
  Zap,
  Users,
  ShoppingCart,
  MessageCircle,
  BookOpen,
  Settings,
  BarChart3,
  Database,
  Network,
  Smartphone,
  Monitor,
  Server,
  ShieldCheck,
  Globe2,
  Leaf,
  Satellite,
  Atom,
  Code,
  FileText,
  GraduationCap,
  Building,
  Briefcase,
  Lightbulb,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  DollarSign,
  Heart,
  Lock,
  Cloud,
  Eye,
  Workflow,
  Bot,
  Activity,
  Gamepad2,
  Coins,
  Palette,
  Target,
  Handshake,
  BarChart,
  Users2,
  Settings as SettingsIcon,
  ChevronRight,
  Play,
  Pause,
  RotateCcw,
  Maximize2,
  Minimize2,
  Volume2,
  VolumeX,
  Mic,
  MicOff,
  Video,
  VideoOff,
  Watch,
  Headphones,
  Speaker,
  Camera,
  Image,
  File,
  Folder,
  HardDrive,
  Wifi,
  Bluetooth,
  Gamepad2 as Gamepad2Icon,
  Coins as CoinsIcon,
  Leaf as LeafIcon,
  Filter,
  Search,
  SortAsc,
  SortDesc,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export default function ComprehensivePricingGuide2031() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const allServices = [
    // AI & Neuroscience
    {
      name: 'AI Quantum Neural Interface',
      category: 'AI & Neuroscience',
      description: 'Revolutionary brain-computer interface with quantum processing',
      pricing: {
        starter: '$2,500/month',
        professional: '$5,000/month',
        enterprise: '$12,000/month'
      },
      features: ['Quantum neural processing', 'Real-time brain interface', 'AI consciousness simulation'],
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      href: '/services/AI-Quantum-Neural-Interface',
      marketPrice: '$15,000/month',
      roi: '300%',
      delivery: '6-8 weeks'
    },
    {
      name: 'AI Enterprise Orchestrator',
      category: 'AI & Analytics',
      description: 'Multi-agent AI coordination & workflow automation',
      pricing: {
        starter: '$3,500/month',
        professional: '$6,500/month',
        enterprise: '$15,000/month'
      },
      features: ['Multi-agent coordination', 'Workflow automation', 'Enterprise integration'],
      icon: Brain,
      color: 'from-green-600 to-emerald-600',
      href: '/services/ai-enterprise-orchestrator',
      marketPrice: '$8,500/month',
      roi: '250%',
      delivery: '4-6 weeks'
    },
    {
      name: 'AI Business Intelligence',
      category: 'AI & Analytics',
      description: 'Advanced AI-powered business intelligence and analytics',
      pricing: {
        starter: '$2,800/month',
        professional: '$5,200/month',
        enterprise: '$12,500/month'
      },
      features: ['Predictive analytics', 'Real-time insights', 'Custom dashboards'],
      icon: BarChart3,
      color: 'from-blue-600 to-cyan-600',
      href: '/services/ai-business-intelligence',
      marketPrice: '$4,500/month',
      roi: '200%',
      delivery: '3-4 weeks'
    },
    {
      name: 'AI Content Generation',
      category: 'AI & Analytics',
      description: 'AI-powered content creation and optimization platform',
      pricing: {
        starter: '$1,800/month',
        professional: '$3,800/month',
        enterprise: '$8,500/month'
      },
      features: ['Content generation', 'SEO optimization', 'Multi-language support'],
      icon: FileText,
      color: 'from-indigo-600 to-purple-600',
      href: '/services/ai-content-generation-platform',
      marketPrice: '$3,200/month',
      roi: '180%',
      delivery: '2-3 weeks'
    },
    {
      name: 'AI Marketing Automation',
      category: 'AI & Analytics',
      description: 'Intelligent marketing automation with AI optimization',
      pricing: {
        starter: '$2,500/month',
        professional: '$4,800/month',
        enterprise: '$10,500/month'
      },
      features: ['Campaign automation', 'AI optimization', 'Performance tracking'],
      icon: TrendingUp,
      color: 'from-pink-600 to-rose-600',
      href: '/services/ai-marketing-automation',
      marketPrice: '$4,200/month',
      roi: '220%',
      delivery: '3-4 weeks'
    },
    {
      name: 'AI Project Management',
      category: 'AI & Analytics',
      description: 'AI-powered project management and team collaboration',
      pricing: {
        starter: '$2,200/month',
        professional: '$4,200/month',
        enterprise: '$9,500/month'
      },
      features: ['Task automation', 'Team collaboration', 'Predictive timelines'],
      icon: Target,
      color: 'from-orange-600 to-red-600',
      href: '/services/ai-project-management-platform',
      marketPrice: '$3,800/month',
      roi: '190%',
      delivery: '3-4 weeks'
    },

    // Cybersecurity
    {
      name: 'AI Cybersecurity Suite',
      category: 'Cybersecurity',
      description: 'Comprehensive AI-powered cybersecurity platform',
      pricing: {
        starter: '$4,500/month',
        professional: '$8,500/month',
        enterprise: '$18,500/month'
      },
      features: ['Threat detection', 'Real-time response', 'Compliance automation'],
      icon: Shield,
      color: 'from-red-600 to-orange-600',
      href: '/services/ai-cybersecurity-suite',
      marketPrice: '$6,500/month',
      roi: '280%',
      delivery: '4-5 weeks'
    },
    {
      name: 'AI Threat Detection',
      category: 'Cybersecurity',
      description: 'Advanced AI-powered threat detection and response',
      pricing: {
        starter: '$3,800/month',
        professional: '$6,800/month',
        enterprise: '$15,500/month'
      },
      features: ['Real-time detection', 'Automated response', 'Threat intelligence'],
      icon: ShieldCheck,
      color: 'from-red-600 to-pink-600',
      href: '/services/ai-cybersecurity-threat-detection',
      marketPrice: '$5,500/month',
      roi: '250%',
      delivery: '3-4 weeks'
    },
    {
      name: 'Zero Trust Architecture',
      category: 'Cybersecurity',
      description: 'Comprehensive zero trust network security solution',
      pricing: {
        starter: '$5,500/month',
        professional: '$9,500/month',
        enterprise: '$22,500/month'
      },
      features: ['Identity verification', 'Access control', 'Network segmentation'],
      icon: Lock,
      color: 'from-blue-600 to-indigo-600',
      href: '/services/Zero-Trust-Network-Architecture',
      marketPrice: '$7,200/month',
      roi: '320%',
      delivery: '6-8 weeks'
    },
    {
      name: 'Incident Response Platform',
      category: 'Cybersecurity',
      description: 'AI-powered incident response and management',
      pricing: {
        starter: '$3,200/month',
        professional: '$5,800/month',
        enterprise: '$12,500/month'
      },
      features: ['Automated response', 'Incident tracking', 'Forensic analysis'],
      icon: Activity,
      color: 'from-orange-600 to-yellow-600',
      href: '/services/incident-response-platform',
      marketPrice: '$4,800/month',
      roi: '240%',
      delivery: '3-4 weeks'
    },
    {
      name: 'SOC2 Compliance Tracker',
      category: 'Cybersecurity',
      description: 'Automated SOC2 compliance monitoring and reporting',
      pricing: {
        starter: '$2,500/month',
        professional: '$4,500/month',
        enterprise: '$9,500/month'
      },
      features: ['Compliance monitoring', 'Automated reporting', 'Audit trails'],
      icon: CheckCircle,
      color: 'from-green-600 to-blue-600',
      href: '/services/SOC2ComplianceTracker',
      marketPrice: '$3,900/month',
      roi: '200%',
      delivery: '2-3 weeks'
    },

    // Quantum & Advanced Tech
    {
      name: 'AI Space Mining Platform',
      category: 'Space Technology',
      description: 'Autonomous space exploration and resource extraction',
      pricing: {
        starter: '$12,500/month',
        professional: '$25,500/month',
        enterprise: '$55,500/month'
      },
      features: ['Autonomous mining', 'Resource detection', 'Space logistics'],
      icon: Rocket,
      color: 'from-blue-600 to-cyan-600',
      href: '/services/AI-Space-Mining-Platform',
      marketPrice: '$15,000/month',
      roi: '400%',
      delivery: '12-16 weeks'
    },
    {
      name: 'Quantum AI Platform',
      category: 'Quantum Computing',
      description: 'Next-generation quantum computing solutions',
      pricing: {
        starter: '$8,500/month',
        professional: '$16,500/month',
        enterprise: '$35,500/month'
      },
      features: ['Quantum algorithms', 'Optimization', 'Research support'],
      icon: Atom,
      color: 'from-indigo-600 to-purple-600',
      href: '/services/quantum-ai-platform',
      marketPrice: '$12,000/month',
      roi: '350%',
      delivery: '8-10 weeks'
    },
    {
      name: 'AI Quantum Hybrid Platform',
      category: 'Quantum Computing',
      description: 'Hybrid AI and quantum computing solutions',
      pricing: {
        starter: '$15,500/month',
        professional: '$28,500/month',
        enterprise: '$65,500/month'
      },
      features: ['Hybrid computing', 'Quantum AI', 'Advanced algorithms'],
      icon: Atom,
      color: 'from-purple-600 to-pink-600',
      href: '/services/ai-quantum-hybrid-platform',
      marketPrice: '$25,000/month',
      roi: '450%',
      delivery: '10-12 weeks'
    },
    {
      name: 'Space Technology Solutions',
      category: 'Space Technology',
      description: 'Comprehensive space technology and exploration solutions',
      pricing: {
        starter: '$8,500/month',
        professional: '$16,500/month',
        enterprise: '$35,500/month'
      },
      features: ['Space exploration', 'Satellite technology', 'Mission planning'],
      icon: Satellite,
      color: 'from-blue-600 to-indigo-600',
      href: '/services/space-tech',
      marketPrice: '$15,000/month',
      roi: '300%',
      delivery: '8-10 weeks'
    },
    {
      name: 'Green IT Solutions',
      category: 'Sustainability',
      description: 'Sustainable IT infrastructure and green technology',
      pricing: {
        starter: '$4,500/month',
        professional: '$7,500/month',
        enterprise: '$16,500/month'
      },
      features: ['Energy efficiency', 'Carbon reduction', 'Sustainable practices'],
      icon: Leaf,
      color: 'from-green-600 to-emerald-600',
      href: '/services/green-it',
      marketPrice: '$6,500/month',
      roi: '220%',
      delivery: '4-5 weeks'
    },

    // Enterprise Solutions
    {
      name: 'Digital Transformation',
      category: 'Enterprise Solutions',
      description: 'Comprehensive digital transformation consulting and implementation',
      pricing: {
        starter: '$8,500/month',
        professional: '$15,500/month',
        enterprise: '$35,500/month'
      },
      features: ['Strategy consulting', 'Implementation', 'Change management'],
      icon: Building,
      color: 'from-blue-600 to-cyan-600',
      href: '/services/digital-transformation',
      marketPrice: '$12,000/month',
      roi: '280%',
      delivery: '6-8 weeks'
    },
    {
      name: 'Cloud DevOps Platform',
      category: 'Enterprise Solutions',
      description: 'Advanced cloud infrastructure and DevOps automation',
      pricing: {
        starter: '$5,500/month',
        professional: '$9,500/month',
        enterprise: '$20,500/month'
      },
      features: ['Cloud infrastructure', 'DevOps automation', 'CI/CD pipelines'],
      icon: Cloud,
      color: 'from-cyan-600 to-blue-600',
      href: '/services/cloud-devops',
      marketPrice: '$8,500/month',
      roi: '250%',
      delivery: '4-5 weeks'
    },
    {
      name: 'IT Infrastructure Management',
      category: 'Enterprise Solutions',
      description: 'Comprehensive IT infrastructure management and optimization',
      pricing: {
        starter: '$6,500/month',
        professional: '$11,500/month',
        enterprise: '$25,500/month'
      },
      features: ['Infrastructure management', 'Performance optimization', 'Monitoring'],
      icon: Server,
      color: 'from-gray-600 to-blue-600',
      href: '/services/ITInfrastructure',
      marketPrice: '$9,200/month',
      roi: '240%',
      delivery: '4-6 weeks'
    },

    // Healthcare & Finance
    {
      name: 'AI Healthcare Analytics',
      category: 'Healthcare AI',
      description: 'Predictive diagnostics and care optimization',
      pricing: {
        starter: '$3,500/month',
        professional: '$6,500/month',
        enterprise: '$14,500/month'
      },
      features: ['Predictive analytics', 'Diagnostic support', 'Care optimization'],
      icon: Heart,
      color: 'from-pink-600 to-rose-600',
      href: '/services/ai-healthcare-analytics',
      marketPrice: '$4,500/month',
      roi: '260%',
      delivery: '4-5 weeks'
    },
    {
      name: 'AI Financial Trading Platform',
      category: 'Financial Services',
      description: 'AI-powered financial trading and analysis platform',
      pricing: {
        starter: '$4,500/month',
        professional: '$8,500/month',
        enterprise: '$18,500/month'
      },
      features: ['Trading algorithms', 'Market analysis', 'Risk management'],
      icon: DollarSign,
      color: 'from-green-600 to-emerald-600',
      href: '/services/ai-financial-trading-platform',
      marketPrice: '$6,800/month',
      roi: '300%',
      delivery: '5-6 weeks'
    }
  ];

  const categories = ['all', ...Array.from(new Set(allServices.map(service => service.category)))];
  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: 'low', label: 'Under $5,000/month' },
    { value: 'medium', label: '$5,000 - $15,000/month' },
    { value: 'high', label: 'Over $15,000/month' }
  ];

  const sortOptions = [
    { value: 'name', label: 'Name' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'category', label: 'Category' },
    { value: 'roi', label: 'ROI' }
  ];

  const filteredServices = allServices.filter(service => {
    if (selectedCategory !== 'all' && service.category !== selectedCategory) return false;
    
    const avgPrice = parseFloat(service.pricing.professional.replace(/[^0-9]/g, ''));
    if (priceRange === 'low' && avgPrice >= 5000) return false;
    if (priceRange === 'medium' && (avgPrice < 5000 || avgPrice >= 15000)) return false;
    if (priceRange === 'high' && avgPrice < 15000) return false;
    
    return true;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'price-low':
        return parseFloat(a.pricing.professional.replace(/[^0-9]/g, '')) - parseFloat(b.pricing.professional.replace(/[^0-9]/g, ''));
      case 'price-high':
        return parseFloat(b.pricing.professional.replace(/[^0-9]/g, '')) - parseFloat(a.pricing.professional.replace(/[^0-9]/g, ''));
      case 'category':
        return a.category.localeCompare(b.category);
      case 'roi':
        return parseFloat(b.roi.replace('%', '')) - parseFloat(a.roi.replace('%', ''));
      default:
        return 0;
    }
  });

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <div className="min-h-screen bg-zion-blue text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-zion-blue via-zion-purple to-zion-cyan py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-zion-cyan bg-clip-text text-transparent">
              Comprehensive Pricing Guide 2031
            </h1>
            <p className="text-xl lg:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
              Complete pricing information for all Zion Tech Group services. 
              Compare features, pricing tiers, and ROI to find the perfect solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
              >
                Get Custom Quote
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-lg font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Schedule Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-zion-blue-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-zion-blue border border-zion-purple/30 rounded-xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-zion-slate-light mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-2 bg-zion-blue-dark border border-zion-purple/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range Filter */}
              <div>
                <label className="block text-sm font-medium text-zion-slate-light mb-2">Price Range</label>
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full px-4 py-2 bg-zion-blue-dark border border-zion-purple/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                >
                  {priceRanges.map(range => (
                    <option key={range.value} value={range.value}>{range.label}</option>
                  ))}
                </select>
              </div>

              {/* Sort By */}
              <div>
                <label className="block text-sm font-medium text-zion-slate-light mb-2">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-2 bg-zion-blue-dark border border-zion-purple/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                >
                  {sortOptions.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>

              {/* Results Count */}
              <div className="flex items-end">
                <div className="text-center w-full">
                  <div className="text-2xl font-bold text-zion-cyan">{sortedServices.length}</div>
                  <div className="text-sm text-zion-slate-light">Services Found</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-zion-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {sortedServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-blue-dark border border-zion-purple/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300 group"
              >
                {/* Service Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-zion-cyan font-semibold uppercase tracking-wide">{service.category}</div>
                  </div>
                </div>

                {/* Service Info */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-zion-cyan transition-colors">
                  {service.name}
                </h3>
                <p className="text-zion-slate-light text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Pricing Tiers */}
                <div className="mb-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-zion-slate-light">Starter:</span>
                    <span className="text-zion-cyan font-semibold">{service.pricing.starter}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-zion-slate-light">Professional:</span>
                    <span className="text-zion-cyan font-semibold">{service.pricing.professional}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-zion-slate-light">Enterprise:</span>
                    <span className="text-zion-cyan font-semibold">{service.pricing.enterprise}</span>
                  </div>
                </div>

                {/* Market Comparison */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="text-center p-2 bg-zion-blue rounded-lg">
                    <div className="text-xs text-zion-slate-light">Market Price</div>
                    <div className="text-zion-cyan font-semibold text-sm">{service.marketPrice}</div>
                  </div>
                  <div className="text-center p-2 bg-zion-blue rounded-lg">
                    <div className="text-xs text-zion-slate-light">ROI</div>
                    <div className="text-zion-cyan font-semibold text-sm">{service.roi}</div>
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-zion-slate-light text-xs">
                        <CheckCircle className="w-3 h-3 text-zion-cyan mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Additional Info */}
                <div className="mb-4 text-xs text-zion-slate-light">
                  <div className="flex justify-between">
                    <span>Delivery: {service.delivery}</span>
                  </div>
                </div>

                {/* CTA */}
                <Link
                  to={service.href}
                  className="inline-flex items-center justify-center w-full py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 group-hover:scale-105"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-purple">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Need a Custom Solution?
              </h2>
              <p className="text-xl text-zion-slate-light mb-8">
                Contact our team to discuss custom pricing, enterprise solutions, or to get a personalized quote for your specific needs.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-zion-slate-light">
                  <Phone className="w-5 h-5 text-zion-cyan mr-3" />
                  <a href={`tel:${contactInfo.phone}`} className="hover:text-zion-cyan transition-colors">
                    {contactInfo.phone}
                  </a>
                </div>
                <div className="flex items-center text-zion-slate-light">
                  <Mail className="w-5 h-5 text-zion-cyan mr-3" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-zion-cyan transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center text-zion-slate-light">
                  <MapPin className="w-5 h-5 text-zion-cyan mr-3" />
                  <span>{contactInfo.address}</span>
                </div>
                <div className="flex items-center text-zion-slate-light">
                  <Globe className="w-5 h-5 text-zion-cyan mr-3" />
                  <a href={contactInfo.website} className="hover:text-zion-cyan transition-colors">
                    {contactInfo.website}
                  </a>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                >
                  Get Custom Quote
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-lg font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
                >
                  Schedule Consultation
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-zion-blue border border-zion-purple/30 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6 text-center">Why Choose Zion Tech Group?</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-zion-cyan mr-3 flex-shrink-0" />
                  <span className="text-zion-slate-light">Competitive Pricing</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-zion-cyan mr-3 flex-shrink-0" />
                  <span className="text-zion-slate-light">Proven ROI</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-zion-cyan mr-3 flex-shrink-0" />
                  <span className="text-zion-slate-light">Expert Support</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-zion-cyan mr-3 flex-shrink-0" />
                  <span className="text-zion-slate-light">Custom Solutions</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-zion-cyan mr-3 flex-shrink-0" />
                  <span className="text-zion-slate-light">Fast Delivery</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-zion-cyan mr-3 flex-shrink-0" />
                  <span className="text-zion-slate-light">Ongoing Maintenance</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
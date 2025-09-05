<<<<<<< HEAD
import React, { useState } from 'react',
import Head from 'next/head',
import { Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Zap as ZapIcon, Code, BookOpen, Activity, Database as DatabaseIcon, Play, Mail, Phone, MapPin, Filter, Grid, List, ChevronDown, ChevronUp, Sparkles, FlaskConical, Dna, Car, Leaf, Factory, Truck, Microscope, GraduationCap, ShieldCheck, Brain, Atom, Globe2, Bot, Eye, Trophy, FlaskConical as FlaskIcon, Dna as DnaIcon, Car as CarIcon, Leaf as LeafIcon, Factory as FactoryIcon, Truck as TruckIcon, Microscope as MicroscopeIcon, GraduationCap as GraduationCapIcon, ShieldCheck as ShieldCheckIcon } from 'lucide-react',
import Button from '../components/ui/Button',
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground',
import UltraFuturisticCard from '../components/ui/UltraFuturisticCard',
import { revolutionaryMicroSaasServices, revolutionaryServiceCategories, getRevolutionaryServicesByCategory, getPopularRevolutionaryServices, getRevolutionaryServicesByPriceRange } from '../data/revolutionary-micro-saas-services',
import { motion, AnimatePresence } from 'framer-motion',

export default function RevolutionaryServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All'),
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid'),
  const [priceRange, setPriceRange] = useState('All'),
  const [searchQuery, setSearchQuery] = useState(''),
  const [sortBy, setSortBy] = useState('name'),
  const [showFilters, setShowFilters] = useState(false),
  const [selectedService, setSelectedService] = useState<any>(null),

  const priceRanges = [
    { value: 'All', label: 'All Prices' },
    { value: '0-1000', label: '$0 - $1,000' },
    { value: '1001-2500', label: '$1,001 - $2,500' },
    { value: '2501-5000', label: '$2,501 - $5,000' },
    { value: '5001+', label: '$5,001+' }
  ],

  const sortOptions = [
    { value: 'name', label: 'Name A-Z' },
    { value: 'price', label: 'Price Low-High' },
    { value: 'popularity', label: 'Most Popular' },
    { value: 'category', label: 'Category' },
    { value: 'roi', label: 'Highest ROI' }
  ],

  // Filter and sort services
  let filteredServices = revolutionaryMicroSaasServices,

  // Category filter
  if (selectedCategory !== 'All') {
    filteredServices = getRevolutionaryServicesByCategory(selectedCategory)
  }

  // Price range filter
  if (priceRange !== 'All') {
    const [min, max] = priceRange.split('-').map(p => p === '+' ? Infinity : parseInt(p)),
    filteredServices = getRevolutionaryServicesByPriceRange(min, max)
  }
=======
import React, {_useState} from 'react';
import Head from 'next/head';
import Button from '../components/ui/Button';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import UltraFuturisticCard from '../components/ui/UltraFuturisticCard';

export default function RevolutionaryServicesPage() {_const [selectedCategory, _setSelectedCategory] = useState('All');
  const [viewMode, _setViewMode] = useState<'grid' | 'list'>('grid');
  const [priceRange, _setPriceRange] = useState('All');
  const [searchQuery, _setSearchQuery] = useState('');
  const [sortBy, _setSortBy] = useState('name');
  const [showFilters, _setShowFilters] = useState(false);
  const [selectedService, _setSelectedService] = useState<any>(null);

  const _priceRanges = [
    { value: 'All', _label: 'All Prices'},
    {_value: '0-1000', _label: '$0 - $1, _000'},
    {_value: '1001-2500', _label: '$1, _001 - $2, _500'},
    {_value: '2501-5000', _label: '$2, _501 - $5, _000'},
    {_value: '5001+', _label: '$5, _001+'}
  ];

  const _sortOptions = [
    {_value: 'name', _label: 'Name A-Z'},
    {_value: 'price', _label: 'Price Low-High'},
    {_value: 'popularity', _label: 'Most Popular'},
    {_value: 'category', _label: 'Category'},
    {_value: 'roi', _label: 'Highest ROI'}
  ];

  // Filter and sort services
  let _filteredServices = revolutionaryMicroSaasServices;

  // Category filter
  if (selectedCategory !== 'All') {_filteredServices = getRevolutionaryServicesByCategory(selectedCategory);}

  // Price range filter
  if (priceRange !== 'All') {_const [min, _max] = priceRange.split('-').map(p => p === '+' ? Infinity : parseInt(p));
    filteredServices = getRevolutionaryServicesByPriceRange(min, _max);}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  // Search filter
  if (searchQuery) {_filteredServices = filteredServices.filter(service =>
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.category.toLowerCase().includes(searchQuery.toLowerCase())
<<<<<<< HEAD
    )
  }
=======
    );}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  // Sort services
  filteredServices.sort(_(a, _b) => {_switch (sortBy) {
      case 'price':
<<<<<<< HEAD
        return parseFloat(a.price.replace('$', '').replace(, '')) - parseFloat(b.price.replace('$', '').replace(, '')),
=======
        return parseFloat(a.price.replace('$', _'').replace(', _', _'')) - parseFloat(b.price.replace('$', _'').replace(', _', _''));
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      case 'popularity':
        return (b.popular ? 1 : 0) - (a.popular ? 1 : 0),
      case 'category':
        return a.category.localeCompare(b.category),
      case 'roi':
<<<<<<< HEAD
        const aRoi = parseFloat(a.roi.match(/\d+/)?.[0] || '0'),
        const bRoi = parseFloat(b.roi.match(/\d+/)?.[0] || '0'),
        return bRoi - aRoi,
      default: return a.name.localeCompare(b.name)
    }
  }),

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  },

  const popularServices = getPopularRevolutionaryServices(),

  // Enhanced service categories with better descriptions
  const enhancedCategories = [
    {
      name: 'Quantum AI & Cognitive Computing',
      description: 'Revolutionary quantum AI solutions with human-level reasoning capabilities',
      icon: <Brain className=&quot;w-6 h-6&quot; />,
      count: revolutionaryMicroSaasServices.filter(s => s.category === 'Quantum AI & Cognitive Computing').length,
      color: 'from-purple-500 to-indigo-600'
    },
    {
      name: 'Autonomous Manufacturing & Industry 4.0',
      description: 'Next-generation autonomous manufacturing with zero human intervention',
      icon: <Factory className=&quot;w-6 h-6&quot; />,
      count: revolutionaryMicroSaasServices.filter(s => s.category === 'Autonomous Manufacturing & Industry 4.0').length,
      color: 'from-orange-500 to-red-600'
    },
    {
      name: 'Quantum Blockchain & DeFi',
      description: 'Quantum-secured blockchain platforms with infinite scalability',
      icon: <Globe className=&quot;w-6 h-6&quot; />,
      count: revolutionaryMicroSaasServices.filter(s => s.category === 'Quantum Blockchain & DeFi').length,
      color: 'from-green-500 to-emerald-600'
    },
    {
      name: 'AI Biomedical Research & Drug Discovery',
      description: 'AI-powered platforms for accelerated drug discovery and medical research',
      icon: <FlaskIcon className=&quot;w-6 h-6&quot; />,
      count: revolutionaryMicroSaasServices.filter(s => s.category === 'AI Biomedical Research & Drug Discovery').length,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      name: 'Quantum Cybersecurity & Threat Detection',
      description: 'Quantum-resistant cybersecurity with AI-powered threat detection',
      icon: <ShieldCheck className=&quot;w-6 h-6&quot; />,
      count: revolutionaryMicroSaasServices.filter(s => s.category === 'Quantum Cybersecurity & Threat Detection').length,
      color: 'from-red-500 to-pink-600'
    },
    {
      name: 'Space Technology & Satellite Optimization',
      description: 'Revolutionary platforms for space exploration and satellite optimization',
      icon: <Rocket className=&quot;w-6 h-6&quot; />,
      count: revolutionaryMicroSaasServices.filter(s => s.category === 'Space Technology & Satellite Optimization').length,
      color: 'from-indigo-500 to-purple-600'
    },
    {
      name: 'AI Content Creation & Marketing',
      description: 'Quantum-powered content creation at infinite scale',
      icon: <FileText className=&quot;w-6 h-6&quot; />,
      count: revolutionaryMicroSaasServices.filter(s => s.category === 'AI Content Creation & Marketing').length,
      color: 'from-teal-500 to-cyan-600'
    },
    {
      name: 'Quantum Computing as a Service',
      description: 'Enterprise quantum computing with real quantum processors',
      icon: <Cpu className=&quot;w-6 h-6&quot; />,
      count: revolutionaryMicroSaasServices.filter(s => s.category === 'Quantum Computing as a Service').length,
      color: 'from-violet-500 to-purple-600'
    },
    {
      name: 'Autonomous Vehicles & Smart Transportation',
      description: 'AI platforms for autonomous vehicles and smart transportation',
      icon: <CarIcon className=&quot;w-6 h-6&quot; />,
      count: revolutionaryMicroSaasServices.filter(s => s.category === 'Autonomous Vehicles & Smart Transportation').length,
      color: 'from-emerald-500 to-green-600'
    },
    {
      name: 'Smart Energy & Renewable Energy',
      description: 'AI platforms for smart energy grids and renewable energy optimization',
      icon: <LeafIcon className=&quot;w-6 h-6&quot; />,
      count: revolutionaryMicroSaasServices.filter(s => s.category === 'Smart Energy & Renewable Energy').length,
      color: 'from-yellow-500 to-orange-600'
    }
  ],
=======
        const _aRoi = parseFloat(a.roi.match(/\d+/)?.[0] || '0');
        const _bRoi = parseFloat(b.roi.match(/\d+/)?.[0] || '0');
        return bRoi - aRoi;
      default:
        return a.name.localeCompare(b.name);}
  });

  const _contactInfo = {_mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'};

  const _popularServices = getPopularRevolutionaryServices();

  // Enhanced service categories with better descriptions
  const _enhancedCategories = [
    {_name: 'Quantum AI & Cognitive Computing', _description: 'Revolutionary quantum AI solutions with human-level reasoning capabilities', _icon: <Brain className="w-6 h-6" />, _count: revolutionaryMicroSaasServices.filter(s => s.category === 'Quantum AI & Cognitive Computing').length, _color: 'from-purple-500 to-indigo-600'},
    {_name: 'Autonomous Manufacturing & Industry 4.0', _description: 'Next-generation autonomous manufacturing with zero human intervention', _icon: <Factory className="w-6 h-6" />, _count: revolutionaryMicroSaasServices.filter(s => s.category === 'Autonomous Manufacturing & Industry 4.0').length, _color: 'from-orange-500 to-red-600'},
    {_name: 'Quantum Blockchain & DeFi', _description: 'Quantum-secured blockchain platforms with infinite scalability', _icon: <Globe className="w-6 h-6" />, _count: revolutionaryMicroSaasServices.filter(s => s.category === 'Quantum Blockchain & DeFi').length, _color: 'from-green-500 to-emerald-600'},
    {_name: 'AI Biomedical Research & Drug Discovery', _description: 'AI-powered platforms for accelerated drug discovery and medical research', _icon: <FlaskIcon className="w-6 h-6" />, _count: revolutionaryMicroSaasServices.filter(s => s.category === 'AI Biomedical Research & Drug Discovery').length, _color: 'from-blue-500 to-indigo-600'},
    {_name: 'Quantum Cybersecurity & Threat Detection', _description: 'Quantum-resistant cybersecurity with AI-powered threat detection', _icon: <ShieldCheck className="w-6 h-6" />, _count: revolutionaryMicroSaasServices.filter(s => s.category === 'Quantum Cybersecurity & Threat Detection').length, _color: 'from-red-500 to-pink-600'},
    {_name: 'Space Technology & Satellite Optimization', _description: 'Revolutionary platforms for space exploration and satellite optimization', _icon: <Rocket className="w-6 h-6" />, _count: revolutionaryMicroSaasServices.filter(s => s.category === 'Space Technology & Satellite Optimization').length, _color: 'from-indigo-500 to-purple-600'},
    {_name: 'AI Content Creation & Marketing', _description: 'Quantum-powered content creation at infinite scale', _icon: <FileText className="w-6 h-6" />, _count: revolutionaryMicroSaasServices.filter(s => s.category === 'AI Content Creation & Marketing').length, _color: 'from-teal-500 to-cyan-600'},
    {_name: 'Quantum Computing as a Service', _description: 'Enterprise quantum computing with real quantum processors', _icon: <Cpu className="w-6 h-6" />, _count: revolutionaryMicroSaasServices.filter(s => s.category === 'Quantum Computing as a Service').length, _color: 'from-violet-500 to-purple-600'},
    {_name: 'Autonomous Vehicles & Smart Transportation', _description: 'AI platforms for autonomous vehicles and smart transportation', _icon: <CarIcon className="w-6 h-6" />, _count: revolutionaryMicroSaasServices.filter(s => s.category === 'Autonomous Vehicles & Smart Transportation').length, _color: 'from-emerald-500 to-green-600'},
    {_name: 'Smart Energy & Renewable Energy', _description: 'AI platforms for smart energy grids and renewable energy optimization', _icon: <LeafIcon className="w-6 h-6" />, _count: revolutionaryMicroSaasServices.filter(s => s.category === 'Smart Energy & Renewable Energy').length, _color: 'from-yellow-500 to-orange-600'}
  ];
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _containerVariants = {_hidden: { opacity: 0},
    visible: {_opacity: 1, _transition: {
        staggerChildren: 0.1}
    }
  },

  const _itemVariants = {_hidden: { y: 20, _opacity: 0},
    visible: {_y: 0, _opacity: 1, _transition: {
        duration: 0.5}
    }
  },

<<<<<<< HEAD
  return (
    <UltraFuturisticBackground variant=&quot;quantum&quot; intensity=&quot;high&quot;>
      <div className=&quot;min-h-screen&quot;>
        <Head>
          <title>Revolutionary Micro SaaS Services | Zion Tech Group - Quantum AI, Autonomous Systems, Space Technology</title>
          <meta name=&quot;description&quot; content=&quot;Discover revolutionary micro SaaS services from Zion Tech Group. Quantum AI, autonomous manufacturing, space technology, biomedical research, and cutting-edge solutions. Start your free trial today.&quot; />
          <meta name=&quot;keywords&quot; content=&quot;revolutionary micro SaaS, quantum AI, autonomous manufacturing, space technology, biomedical research, quantum cybersecurity, blockchain, autonomous vehicles, smart energy&quot; />
          <meta name=&quot;author&quot; content=&quot;Zion Tech Group&quot; />
          <meta property=&quot;og:title&quot; content=&quot;Revolutionary Micro SaaS Services | Zion Tech Group&quot; />
          <meta property=&quot;og:description&quot; content=&quot;Cutting-edge micro SaaS platform with quantum AI, autonomous systems, and revolutionary technology solutions.&quot; />
          <meta property=&quot;og:url&quot; content=&quot;https://ziontechgroup.com/revolutionary-services&quot; />
          <meta property=&quot;og:type&quot; content=&quot;website&quot; />
          <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/revolutionary-services&quot; />
        </Head>

        {/* Hero Section */}
        <section className=&quot;relative py-20 overflow-hidden&quot;>
          <div className=&quot;container mx-auto px-4 text-center&quot;>
            <div className=&quot;max-w-5xl mx-auto&quot;>
              <motion.h1 
                className=&quot;text-6xl md:text-8xl font-bold mb-8 futuristic-glow&quot;
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
=======
  return (_<UltraFuturisticBackground variant="quantum" intensity="high">
      <div className="min-h-screen">
        <Head>
          <title>Revolutionary Micro SaaS Services | Zion Tech Group - Quantum AI, _Autonomous Systems, _Space Technology</title>
          <meta name="description" content="Discover revolutionary micro SaaS services from Zion Tech Group. Quantum AI, _autonomous manufacturing, _space technology, _biomedical research, _and cutting-edge solutions. Start your free trial today." />
          <meta name="keywords" content="revolutionary micro SaaS, _quantum AI, _autonomous manufacturing, _space technology, _biomedical research, _quantum cybersecurity, _blockchain, _autonomous vehicles, _smart energy" />
          <meta name="author" content="Zion Tech Group" />
          <meta property="og:title" content="Revolutionary Micro SaaS Services | Zion Tech Group" />
          <meta property="og:description" content="Cutting-edge micro SaaS platform with quantum AI, _autonomous systems, _and revolutionary technology solutions." />
          <meta property="og:url" content="https://ziontechgroup.com/revolutionary-services" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://ziontechgroup.com/revolutionary-services" />
        </Head>

        {_/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-5xl mx-auto">
              <motion.h1 
                className="text-6xl md:text-8xl font-bold mb-8 futuristic-glow"
                initial={_{ opacity: 0, _y: 30}}
                animate={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.8}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                <span className=&quot;bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent&quot;>
                  Revolutionary
                </span>
                <br />
                <span className=&quot;text-white&quot;>Micro SaaS Services</span>
              </motion.h1>
              <motion.p 
<<<<<<< HEAD
                className=&quot;text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed&quot;
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
=======
                className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed"
                initial={_{ opacity: 0, _y: 20}}
                animate={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.8, _delay: 0.2}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                Experience the future of technology with our revolutionary micro SaaS platform. 
                Quantum AI, _autonomous systems, _space technology, _and cutting-edge solutions that redefine what's possible.
              </motion.p>
              
              {_/* Service Count Stats */}
              <motion.div 
<<<<<<< HEAD
                className=&quot;grid grid-cols-2 md:grid-cols-4 gap-6 mb-16&quot;
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className=&quot;text-center&quot;>
                  <div className=&quot;text-3xl font-bold text-cyan-400 mb-2&quot;>{revolutionaryMicroSaasServices.length}+</div>
                  <div className=&quot;text-gray-400&quot;>Revolutionary Services</div>
=======
                className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
                initial={_{ opacity: 0, _y: 20}}
                animate={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.8, _delay: 0.4}}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{_revolutionaryMicroSaasServices.length}+</div>
                  <div className="text-gray-400">Revolutionary Services</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </div>
                <div className=&quot;text-center&quot;>
                  <div className=&quot;text-3xl font-bold text-purple-400 mb-2&quot;>99.99%</div>
                  <div className=&quot;text-gray-400&quot;>Accuracy Rate</div>
                </div>
                <div className=&quot;text-center&quot;>
                  <div className=&quot;text-3xl font-bold text-green-400 mb-2&quot;>21</div>
                  <div className=&quot;text-gray-400&quot;>Day Free Trial</div>
                </div>
                <div className=&quot;text-center&quot;>
                  <div className=&quot;text-3xl font-bold text-pink-400 mb-2&quot;>2000%+</div>
                  <div className=&quot;text-gray-400&quot;>Average ROI</div>
                </div>
              </motion.div>

              {_/* CTA Buttons */}
              <motion.div 
<<<<<<< HEAD
                className=&quot;flex flex-col sm:flex-row gap-4 justify-center items-center&quot;
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Button 
                  variant=&quot;primary&quot; 
                  size=&quot;lg&quot;
                  onClick={() => document.getElementById('services-grid')?.scrollIntoView({ behavior: 'smooth' })}
=======
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={_{ opacity: 0, _y: 20}}
                animate={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.8, _delay: 0.6}}
              >
                <Button 
                  variant="primary" 
                  size="lg"
                  onClick={_() => document.getElementById('services-grid')?.scrollIntoView({ behavior: 'smooth'})}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                >
                  Explore Services
                  <ArrowRight className=&quot;ml-2 w-5 h-5&quot; />
                </Button>
                <Button 
<<<<<<< HEAD
                  variant="futuristic" 
                  size="lg"
<<<<<<< HEAD
                  onClick={() => window.open('https://ziontechgroup.com/contact_blank')}
=======
                  variant=&quot;futuristic&quot; 
                  size=&quot;lg&quot;
                  onClick={() => window.open('https://ziontechgroup.com/contact', '_blank')}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
                  onClick={_() => window.open('https://ziontechgroup.com/contact', _'_blank')}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                >
                  Get Started
                  <Rocket className=&quot;ml-2 w-5 h-5&quot; />
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Contact Information Banner */}
        <section className=&quot;py-8 bg-gradient-to-r from-slate-900/80 to-slate-800/80 backdrop-blur-sm border-t border-b border-cyan-400/20&quot;>
          <div className=&quot;container mx-auto px-4&quot;>
            <div className=&quot;flex flex-col md:flex-row justify-between items-center gap-4&quot;>
              <div className=&quot;flex items-center gap-4&quot;>
                <Phone className=&quot;w-5 h-5 text-cyan-400&quot; />
                <span className=&quot;text-white&quot;>{contactInfo.mobile}</span>
                <Mail className=&quot;w-5 h-5 text-purple-400&quot; />
                <span className=&quot;text-white&quot;>{contactInfo.email}</span>
              </div>
              <div className=&quot;flex items-center gap-4&quot;>
                <MapPin className=&quot;w-5 h-5 text-green-400&quot; />
                <span className=&quot;text-white&quot;>{contactInfo.address}</span>
                <Globe className=&quot;w-5 h-5 text-blue-400&quot; />
                <span className=&quot;text-white&quot;>{contactInfo.website}</span>
=======
        {_/* Contact Information Banner */}
        <section className="py-8 bg-gradient-to-r from-slate-900/80 to-slate-800/80 backdrop-blur-sm border-t border-b border-cyan-400/20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span className="text-white">{_contactInfo.mobile}</span>
                <Mail className="w-5 h-5 text-purple-400" />
                <span className="text-white">{_contactInfo.email}</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-5 h-5 text-green-400" />
                <span className="text-white">{_contactInfo.address}</span>
                <Globe className="w-5 h-5 text-blue-400" />
                <span className="text-white">{_contactInfo.website}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </div>
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Category Navigation */}
        <section className=&quot;py-12&quot;>
          <div className=&quot;container mx-auto px-4&quot;>
            <motion.div 
              className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6&quot;
              variants={containerVariants}
              initial=&quot;hidden&quot;
              whileInView=&quot;visible&quot;
              viewport={{ once: true }}
=======
        {_/* Category Navigation */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
              variants={_containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={_{ once: true}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              {_enhancedCategories.map(_(category, _index) => (_<motion.div
                  key={category.name}
                  variants={_itemVariants}
                  whileHover={_{ scale: 1.05}}
                  whileTap={_{ scale: 0.95}}
                >
                  <UltraFuturisticCard
<<<<<<< HEAD
                    variant=&quot;quantum-advanced&quot;
                    size=&quot;small&quot;
                    className=&quot;text-center cursor-pointer h-full&quot;
                    onClick={() => setSelectedCategory(category.name === selectedCategory ? 'All' : category.name)}
=======
                    variant="quantum-advanced"
                    size="small"
                    className="text-center cursor-pointer h-full"
                    onClick={_() => setSelectedCategory(category.name === selectedCategory ? 'All' : category.name)}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  >
                    <div className={_`w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center text-white`}>
                      {_category.icon}
                    </div>
<<<<<<< HEAD
                    <h3 className=&quot;text-lg font-semibold text-white mb-2&quot;>{category.name}</h3>
                    <p className=&quot;text-sm text-gray-400 mb-3&quot;>{category.description}</p>
                    <div className=&quot;text-2xl font-bold text-cyan-400&quot;>{category.count}</div>
                    <div className=&quot;text-xs text-gray-500&quot;>Services</div>
=======
                    <h3 className="text-lg font-semibold text-white mb-2">{_category.name}</h3>
                    <p className="text-sm text-gray-400 mb-3">{_category.description}</p>
                    <div className="text-2xl font-bold text-cyan-400">{_category.count}</div>
                    <div className="text-xs text-gray-500">Services</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </UltraFuturisticCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Popular Services Showcase */}
        <section className=&quot;py-16&quot;>
          <div className=&quot;container mx-auto px-4&quot;>
            <motion.div 
              className=&quot;text-center mb-12&quot;
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
=======
        {_/* Popular Services Showcase */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-12"
              initial={_{ opacity: 0, _y: 20}}
              whileInView={_{ opacity: 1, _y: 0}}
              viewport={_{ once: true}}
              transition={_{ duration: 0.6}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-4&quot;>
                <span className=&quot;bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent&quot;>
                  Most Popular
                </span>
                <br />
                <span className=&quot;text-white&quot;>Revolutionary Services</span>
              </h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Discover our most sought-after revolutionary micro SaaS services that are transforming industries worldwide.
              </p>
            </motion.div>

            <motion.div 
<<<<<<< HEAD
              className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;
              variants={containerVariants}
              initial=&quot;hidden&quot;
              whileInView=&quot;visible&quot;
              viewport={{ once: true }}
=======
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={_containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={_{ once: true}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              {_popularServices.slice(0, _6).map(_(service, _index) => (_<motion.div
                  key={service.id}
                  variants={_itemVariants}
                  whileHover={_{ y: -10}}
                >
                  <UltraFuturisticCard
<<<<<<< HEAD
                    variant={service.variant as any}
                    size=&quot;large&quot;
                    className=&quot;h-full cursor-pointer&quot;
                    onClick={() => setSelectedService(service)}
                  >
                    <div className=&quot;text-center mb-6&quot;>
                      <div className=&quot;text-4xl mb-4&quot;>{service.icon}</div>
                      <h3 className=&quot;text-2xl font-bold text-white mb-2&quot;>{service.name}</h3>
                      <p className=&quot;text-gray-300 mb-4&quot;>{service.tagline}</p>
                      <div className=&quot;text-3xl font-bold text-cyan-400 mb-2&quot;>{service.price}</div>
                      <div className=&quot;text-sm text-gray-400&quot;>{service.period}</div>
                    </div>
                    
                    <div className=&quot;space-y-3 mb-6&quot;>
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className=&quot;flex items-center gap-2&quot;>
                          <Check className=&quot;w-4 h-4 text-green-400 flex-shrink-0&quot; />
                          <span className=&quot;text-sm text-gray-300&quot;>{feature}</span>
=======
                    variant={_service.variant as any}
                    size="large"
                    className="h-full cursor-pointer"
                    onClick={_() => setSelectedService(service)}
                  >
                    <div className="text-center mb-6">
                      <div className="text-4xl mb-4">{_service.icon}</div>
                      <h3 className="text-2xl font-bold text-white mb-2">{_service.name}</h3>
                      <p className="text-gray-300 mb-4">{_service.tagline}</p>
                      <div className="text-3xl font-bold text-cyan-400 mb-2">{_service.price}</div>
                      <div className="text-sm text-gray-400">{_service.period}</div>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      {_service.features.slice(0, _4).map(_(feature, _idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{_feature}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        </div>
                      ))}
                    </div>

                    <div className=&quot;text-center&quot;>
                                                 <Button 
<<<<<<< HEAD
                             variant=&quot;primary&quot; 
                             size=&quot;md&quot;
                             onClick={() => window.open(service.link, '_blank')}
                             className=&quot;w-full&quot;
=======
                             variant="primary" 
                             size="md"
                             onClick={_() => window.open(service.link, _'_blank')}
                             className="w-full"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                           >
                             Learn More
                             <ExternalLink className=&quot;ml-2 w-4 h-4&quot; />
                           </Button>
                    </div>
                  </UltraFuturisticCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Services Grid */}
        <section id=&quot;services-grid&quot; className=&quot;py-16&quot;>
          <div className=&quot;container mx-auto px-4&quot;>
            {/* Filters and Controls */}
            <motion.div 
              className=&quot;mb-8&quot;
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
=======
        {_/* Services Grid */}
        <section id="services-grid" className="py-16">
          <div className="container mx-auto px-4">
            {_/* Filters and Controls */}
            <motion.div 
              className="mb-8"
              initial={_{ opacity: 0, _y: 20}}
              whileInView={_{ opacity: 1, _y: 0}}
              viewport={_{ once: true}}
              transition={_{ duration: 0.6}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              <div className=&quot;flex flex-col lg:flex-row gap-6 items-center justify-between&quot;>
                <div className=&quot;flex flex-wrap gap-4&quot;>
                  <select
<<<<<<< HEAD
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className=&quot;px-4 py-2 bg-slate-800 border border-cyan-400/30 rounded-lg text-white focus:outline-none focus:border-cyan-400&quot;
                  >
                    <option value=&quot;All&quot;>All Categories</option>
                    {revolutionaryServiceCategories.map(category => (
                      <option key={category} value={category}>{category}</option>
=======
                    value={_selectedCategory}
                    onChange={_(_e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-2 bg-slate-800 border border-cyan-400/30 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                  >
                    <option value="All">All Categories</option>
                    {_revolutionaryServiceCategories.map(category => (
                      <option key={category} value={_category}>{_category}</option>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    ))}
                  </select>
                  
                  <select
<<<<<<< HEAD
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className=&quot;px-4 py-2 bg-slate-800 border border-purple-400/30 rounded-lg text-white focus:outline-none focus:border-purple-400&quot;
=======
                    value={_priceRange}
                    onChange={_(_e) => setPriceRange(e.target.value)}
                    className="px-4 py-2 bg-slate-800 border border-purple-400/30 rounded-lg text-white focus:outline-none focus:border-purple-400"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  >
                    {_priceRanges.map(range => (
                      <option key={range.value} value={_range.value}>{_range.label}</option>
                    ))}
                  </select>
                  
                  <select
<<<<<<< HEAD
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className=&quot;px-4 py-2 bg-slate-800 border border-green-400/30 rounded-lg text-white focus:outline-none focus:border-green-400&quot;
=======
                    value={_sortBy}
                    onChange={_(_e) => setSortBy(e.target.value)}
                    className="px-4 py-2 bg-slate-800 border border-green-400/30 rounded-lg text-white focus:outline-none focus:border-green-400"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  >
                    {_sortOptions.map(option => (
                      <option key={option.value} value={_option.value}>{_option.label}</option>
                    ))}
                  </select>
                </div>
                
                <div className=&quot;flex items-center gap-4&quot;>
                  <div className=&quot;relative&quot;>
                    <Search className=&quot;absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400&quot; />
                    <input
<<<<<<< HEAD
                      type=&quot;text&quot;
                      placeholder=&quot;Search services...&quot;
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className=&quot;pl-10 pr-4 py-2 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 w-64&quot;
=======
                      type="text"
                      placeholder="Search services..."
                      value={_searchQuery}
                      onChange={_(_e) => setSearchQuery(e.target.value)}
                      className="pl-10 pr-4 py-2 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 w-64"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    />
                  </div>
                  
                  <div className=&quot;flex border border-gray-600 rounded-lg overflow-hidden&quot;>
                    <button
                      onClick={_() => setViewMode('grid')}
                      className={_`px-3 py-2 ${viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'bg-slate-800 text-gray-400'}`}
                    >
                      <Grid className=&quot;w-4 h-4&quot; />
                    </button>
                    <button
                      onClick={_() => setViewMode('list')}
                      className={_`px-3 py-2 ${viewMode === 'list' ? 'bg-cyan-500 text-white' : 'bg-slate-800 text-gray-400'}`}
                    >
                      <List className=&quot;w-4 h-4&quot; />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            {_/* Services Display */}
            <motion.div 
<<<<<<< HEAD
              className={viewMode === 'grid' 
                ? &quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;
                : &quot;space-y-6&quot;
              }
              variants={containerVariants}
              initial=&quot;hidden&quot;
              whileInView=&quot;visible&quot;
              viewport={{ once: true }}
=======
              className={_viewMode === 'grid' 
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                : "space-y-6"}
              variants={_containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={_{ once: true}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              {_filteredServices.map(_(service, _index) => (_<motion.div
                  key={service.id}
                  variants={_itemVariants}
                  whileHover={_{ y: -5}}
                >
                  <UltraFuturisticCard
                    variant={_service.variant as any}
                    size={_viewMode === 'grid' ? 'large' : 'medium'}
                    className={_`h-full cursor-pointer ${viewMode === 'list' ? 'flex flex-col md:flex-row' : ''}`}
                    onClick={_() => setSelectedService(service)}
                  >
                    {_viewMode === 'grid' ? (
                      // Grid View
<<<<<<< HEAD
                      <div className=&quot;text-center&quot;>
                        <div className=&quot;text-4xl mb-4&quot;>{service.icon}</div>
                        <h3 className=&quot;text-xl font-bold text-white mb-2&quot;>{service.name}</h3>
                        <p className=&quot;text-gray-300 mb-4 text-sm&quot;>{service.tagline}</p>
                        <div className=&quot;text-2xl font-bold text-cyan-400 mb-2&quot;>{service.price}</div>
                        <div className=&quot;text-sm text-gray-400 mb-4&quot;>{service.period}</div>
                        
                        <div className=&quot;space-y-2 mb-6&quot;>
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <div key={idx} className=&quot;flex items-center gap-2 text-sm&quot;>
                              <Check className=&quot;w-3 h-3 text-green-400 flex-shrink-0&quot; />
                              <span className=&quot;text-gray-300&quot;>{feature}</span>
=======
                      <div className="text-center">
                        <div className="text-4xl mb-4">{service.icon}</div>
                        <h3 className="text-xl font-bold text-white mb-2">{_service.name}</h3>
                        <p className="text-gray-300 mb-4 text-sm">{_service.tagline}</p>
                        <div className="text-2xl font-bold text-cyan-400 mb-2">{_service.price}</div>
                        <div className="text-sm text-gray-400 mb-4">{_service.period}</div>
                        
                        <div className="space-y-2 mb-6">
                          {_service.features.slice(0, _3).map(_(feature, _idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm">
                              <Check className="w-3 h-3 text-green-400 flex-shrink-0" />
                              <span className="text-gray-300">{_feature}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                            </div>
                          ))}
                        </div>

                        <div className=&quot;text-center&quot;>
                          <Button 
<<<<<<< HEAD
                            variant=&quot;primary&quot; 
                            size=&quot;sm&quot;
                            onClick={() => window.open(service.link, '_blank')}
                            className=&quot;w-full&quot;
=======
                            variant="primary" 
                            size="sm"
                            onClick={_() => window.open(service.link, _'_blank')}
                            className="w-full"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                          >
                            Learn More
                            <ExternalLink className=&quot;ml-2 w-4 h-4&quot; />
                          </Button>
                        </div>
                      </div>
                    ) : (
                      // List View
<<<<<<< HEAD
                      <div className=&quot;flex flex-col md:flex-row gap-6 w-full&quot;>
                        <div className=&quot;text-4xl md:text-5xl flex-shrink-0&quot;>{service.icon}</div>
                        <div className=&quot;flex-1&quot;>
                          <div className=&quot;flex flex-col md:flex-row md:items-center md:justify-between mb-4&quot;>
                            <div>
                              <h3 className=&quot;text-xl font-bold text-white mb-2&quot;>{service.name}</h3>
                              <p className=&quot;text-gray-300 text-sm&quot;>{service.tagline}</p>
                            </div>
                            <div className=&quot;text-right mt-2 md:mt-0&quot;>
                              <div className=&quot;text-2xl font-bold text-cyan-400&quot;>{service.price}</div>
                              <div className=&quot;text-sm text-gray-400&quot;>{service.period}</div>
=======
                      <div className="flex flex-col md:flex-row gap-6 w-full">
                        <div className="text-4xl md:text-5xl flex-shrink-0">{_service.icon}</div>
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                            <div>
                              <h3 className="text-xl font-bold text-white mb-2">{_service.name}</h3>
                              <p className="text-gray-300 text-sm">{_service.tagline}</p>
                            </div>
                            <div className="text-right mt-2 md:mt-0">
                              <div className="text-2xl font-bold text-cyan-400">{_service.price}</div>
                              <div className="text-sm text-gray-400">{_service.period}</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                            </div>
                          </div>
                          
                          <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4 mb-4&quot;>
                            <div>
<<<<<<< HEAD
                              <h4 className=&quot;text-sm font-semibold text-cyan-400 mb-2&quot;>Key Features</h4>
                              <div className=&quot;space-y-1&quot;>
                                {service.features.slice(0, 4).map((feature, idx) => (
                                  <div key={idx} className=&quot;flex items-center gap-2 text-sm&quot;>
                                    <Check className=&quot;w-3 h-3 text-green-400 flex-shrink-0&quot; />
                                    <span className=&quot;text-gray-300&quot;>{feature}</span>
=======
                              <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features</h4>
                              <div className="space-y-1">
                                {_service.features.slice(0, _4).map(_(feature, _idx) => (
                                  <div key={idx} className="flex items-center gap-2 text-sm">
                                    <Check className="w-3 h-3 text-green-400 flex-shrink-0" />
                                    <span className="text-gray-300">{_feature}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div>
<<<<<<< HEAD
                              <h4 className=&quot;text-sm font-semibold text-purple-400 mb-2&quot;>Market Info</h4>
                              <div className=&quot;space-y-1 text-sm text-gray-300&quot;>
                                <div><span className=&quot;text-gray-400&quot;>ROI:</span> {service.roi}</div>
                                <div><span className=&quot;text-gray-400&quot;>Market:</span> {service.marketSize}</div>
                                <div><span className=&quot;text-gray-400&quot;>Growth:</span> {service.growthRate}</div>
=======
                              <h4 className="text-sm font-semibold text-purple-400 mb-2">Market Info</h4>
                              <div className="space-y-1 text-sm text-gray-300">
                                <div><span className="text-gray-400">ROI:</span> {_service.roi}</div>
                                <div><span className="text-gray-400">Market:</span> {_service.marketSize}</div>
                                <div><span className="text-gray-400">Growth:</span> {_service.growthRate}</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                              </div>
                            </div>
                          </div>
                          
                          <div className=&quot;flex gap-2&quot;>
                                                         <Button 
<<<<<<< HEAD
                               variant=&quot;primary&quot; 
                               size=&quot;sm&quot;
                               onClick={() => window.open(service.link, '_blank')}
=======
                               variant="primary" 
                               size="sm"
                               onClick={_() => window.open(service.link, _'_blank')}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                             >
                               Learn More
                               <ExternalLink className=&quot;ml-2 w-4 h-4&quot; />
                             </Button>
                             <Button 
<<<<<<< HEAD
                               variant=&quot;futuristic&quot; 
                               size=&quot;sm&quot;
                               onClick={() => setSelectedService(service)}
=======
                               variant="futuristic" 
                               size="sm"
                               onClick={_() => setSelectedService(service)}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                             >
                               View Details
                               <Eye className=&quot;ml-2 w-4 h-4&quot; />
                             </Button>
                          </div>
                        </div>
                      </div>
                    )}
                  </UltraFuturisticCard>
                </motion.div>
              ))}
            </motion.div>

<<<<<<< HEAD
            {filteredServices.length === 0 && (
              <motion.div 
                className=&quot;text-center py-16&quot;
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
=======
            {_filteredServices.length === 0 && (_<motion.div 
                className="text-center py-16"
                initial={{ opacity: 0}}
                animate={_{ opacity: 1}}
                transition={_{ duration: 0.6}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                <div className=&quot;text-6xl mb-4&quot;>🔍</div>
                <h3 className=&quot;text-2xl font-bold text-white mb-2&quot;>No Services Found</h3>
                <p className=&quot;text-gray-400 mb-6&quot;>Try adjusting your search criteria or filters.</p>
                                         <Button 
<<<<<<< HEAD
                           variant=&quot;primary&quot;
                           onClick={() => {
                             setSearchQuery(''),
                             setSelectedCategory('All'),
                             setPriceRange('All')
                           }}
=======
                           variant="primary"
                           onClick={_() => {
                             setSearchQuery('');
                             setSelectedCategory('All');
                             setPriceRange('All');}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                         >
                           Clear Filters
                         </Button>
              </motion.div>
            )}
          </div>
        </section>

        {_/* Service Details Modal */}
        <AnimatePresence>
<<<<<<< HEAD
          {selectedService && (
            <motion.div
              className=&quot;fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4&quot;
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
            >
              <motion.div
                className=&quot;bg-slate-900 rounded-2xl border border-cyan-400/30 max-w-4xl w-full max-h-[90vh] overflow-y-auto&quot;
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className=&quot;p-8&quot;>
                  <div className=&quot;flex justify-between items-start mb-6&quot;>
                    <div className=&quot;flex items-center gap-4&quot;>
                      <div className=&quot;text-5xl&quot;>{selectedService.icon}</div>
                      <div>
                        <h2 className=&quot;text-3xl font-bold text-white mb-2&quot;>{selectedService.name}</h2>
                        <p className=&quot;text-xl text-gray-300&quot;>{selectedService.tagline}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedService(null)}
                      className=&quot;text-gray-400 hover:text-white text-2xl&quot;
=======
          {_selectedService && (_<motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0}}
              animate={_{ opacity: 1}}
              exit={_{ opacity: 0}}
              onClick={_() => setSelectedService(null)}
            >
              <motion.div
                className="bg-slate-900 rounded-2xl border border-cyan-400/30 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                initial={_{ scale: 0.9, _opacity: 0}}
                animate={_{ scale: 1, _opacity: 1}}
                exit={_{ scale: 0.9, _opacity: 0}}
                onClick={_(_e) => e.stopPropagation()}
              >
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-4">
                      <div className="text-5xl">{_selectedService.icon}</div>
                      <div>
                        <h2 className="text-3xl font-bold text-white mb-2">{_selectedService.name}</h2>
                        <p className="text-xl text-gray-300">{_selectedService.tagline}</p>
                      </div>
                    </div>
                    <button
                      onClick={_() => setSelectedService(null)}
                      className="text-gray-400 hover:text-white text-2xl"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    >
                      ×
                    </button>
                  </div>

                  <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-8&quot;>
                    <div>
<<<<<<< HEAD
                      <h3 className=&quot;text-xl font-semibold text-cyan-400 mb-4&quot;>Service Details</h3>
                      <p className=&quot;text-gray-300 mb-6&quot;>{selectedService.description}</p>
=======
                      <h3 className="text-xl font-semibold text-cyan-400 mb-4">Service Details</h3>
                      <p className="text-gray-300 mb-6">{_selectedService.description}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      
                      <div className=&quot;space-y-4&quot;>
                        <div>
<<<<<<< HEAD
                          <h4 className=&quot;text-sm font-semibold text-purple-400 mb-2&quot;>Pricing</h4>
                          <div className=&quot;text-2xl font-bold text-white&quot;>{selectedService.price}{selectedService.period}</div>
                          <div className=&quot;text-sm text-gray-400&quot;>{selectedService.marketPrice}</div>
                        </div>
                        
                        <div>
                          <h4 className=&quot;text-sm font-semibold text-green-400 mb-2&quot;>ROI & Market</h4>
                          <div className=&quot;text-sm text-gray-300 space-y-1&quot;>
                            <div><span className=&quot;text-gray-400&quot;>ROI:</span> {selectedService.roi}</div>
                            <div><span className=&quot;text-gray-400&quot;>Market Size:</span> {selectedService.marketSize}</div>
                            <div><span className=&quot;text-gray-400&quot;>Growth Rate:</span> {selectedService.growthRate}</div>
=======
                          <h4 className="text-sm font-semibold text-purple-400 mb-2">Pricing</h4>
                          <div className="text-2xl font-bold text-white">{_selectedService.price}{_selectedService.period}</div>
                          <div className="text-sm text-gray-400">{_selectedService.marketPrice}</div>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-semibold text-green-400 mb-2">ROI & Market</h4>
                          <div className="text-sm text-gray-300 space-y-1">
                            <div><span className="text-gray-400">ROI:</span> {_selectedService.roi}</div>
                            <div><span className="text-gray-400">Market Size:</span> {_selectedService.marketSize}</div>
                            <div><span className="text-gray-400">Growth Rate:</span> {_selectedService.growthRate}</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className=&quot;text-xl font-semibold text-cyan-400 mb-4&quot;>Features & Capabilities</h3>
                      
                      <div className=&quot;space-y-4&quot;>
                        <div>
<<<<<<< HEAD
                          <h4 className=&quot;text-sm font-semibold text-purple-400 mb-2&quot;>Key Features</h4>
                          <div className=&quot;space-y-2&quot;>
                            {selectedService.features.map((feature, idx) => (
                              <div key={idx} className=&quot;flex items-center gap-2 text-sm&quot;>
                                <Check className=&quot;w-3 h-3 text-green-400 flex-shrink-0&quot; />
                                <span className=&quot;text-gray-300&quot;>{feature}</span>
=======
                          <h4 className="text-sm font-semibold text-purple-400 mb-2">Key Features</h4>
                          <div className="space-y-2">
                            {_selectedService.features.map(_(feature, _idx) => (
                              <div key={idx} className="flex items-center gap-2 text-sm">
                                <Check className="w-3 h-3 text-green-400 flex-shrink-0" />
                                <span className="text-gray-300">{_feature}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
<<<<<<< HEAD
                          <h4 className=&quot;text-sm font-semibold text-green-400 mb-2&quot;>Benefits</h4>
                          <div className=&quot;space-y-2&quot;>
                            {selectedService.benefits.map((benefit, idx) => (
                              <div key={idx} className=&quot;flex items-center gap-2 text-sm&quot;>
                                <Star className=&quot;w-3 h-3 text-yellow-400 flex-shrink-0&quot; />
                                <span className=&quot;text-gray-300&quot;>{benefit}</span>
=======
                          <h4 className="text-sm font-semibold text-green-400 mb-2">Benefits</h4>
                          <div className="space-y-2">
                            {_selectedService.benefits.map(_(benefit, _idx) => (
                              <div key={idx} className="flex items-center gap-2 text-sm">
                                <Star className="w-3 h-3 text-yellow-400 flex-shrink-0" />
                                <span className="text-gray-300">{_benefit}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
<<<<<<< HEAD
                          <h4 className=&quot;text-sm font-semibold text-blue-400 mb-2&quot;>Capabilities</h4>
                          <div className=&quot;space-y-2&quot;>
                            {selectedService.capabilities.map((capability, idx) => (
                              <div key={idx} className=&quot;flex items-center gap-2 text-sm&quot;>
                                <Zap className=&quot;w-3 h-3 text-cyan-400 flex-shrink-0&quot; />
                                <span className=&quot;text-gray-300&quot;>{capability}</span>
=======
                          <h4 className="text-sm font-semibold text-blue-400 mb-2">Capabilities</h4>
                          <div className="space-y-2">
                            {_selectedService.capabilities.map(_(capability, _idx) => (
                              <div key={idx} className="flex items-center gap-2 text-sm">
                                <Zap className="w-3 h-3 text-cyan-400 flex-shrink-0" />
                                <span className="text-gray-300">{_capability}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

<<<<<<< HEAD
                  <div className=&quot;mt-8 pt-6 border-t border-gray-700&quot;>
                    <div className=&quot;flex flex-col sm:flex-row gap-4 justify-between items-center&quot;>
                      <div className=&quot;text-sm text-gray-400&quot;>
                        <div>Setup Time: {selectedService.setupTime}</div>
                        <div>Trial: {selectedService.trialDays} days</div>
=======
                  <div className="mt-8 pt-6 border-t border-gray-700">
                    <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                      <div className="text-sm text-gray-400">
                        <div>Setup Time: {_selectedService.setupTime}</div>
                        <div>Trial: {_selectedService.trialDays} days</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      </div>
                      
                      <div className=&quot;flex gap-4&quot;>
                                                 <Button 
<<<<<<< HEAD
                           variant=&quot;primary&quot;
                           onClick={() => window.open(selectedService.link, '_blank')}
=======
                           variant="primary"
                           onClick={_() => window.open(selectedService.link, _'_blank')}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                         >
                           Visit Service
                           <ExternalLink className=&quot;ml-2 w-4 h-4&quot; />
                         </Button>
                         <Button 
<<<<<<< HEAD
                           variant="futuristic"
<<<<<<< HEAD
                           onClick={() => window.open('https://ziontechgroup.com/contact_blank')}
=======
                           variant=&quot;futuristic&quot;
                           onClick={() => window.open('https://ziontechgroup.com/contact', '_blank')}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
                           onClick={_() => window.open('https://ziontechgroup.com/contact', _'_blank')}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                         >
                           Contact Sales
                           <Mail className=&quot;ml-2 w-4 h-4&quot; />
                         </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

<<<<<<< HEAD
        {/* Contact Section */}
        <section className=&quot;py-20&quot;>
          <div className=&quot;container mx-auto px-4 text-center&quot;>
            <motion.div 
              className=&quot;max-w-4xl mx-auto&quot;
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
=======
        {_/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <motion.div 
              className="max-w-4xl mx-auto"
              initial={_{ opacity: 0, _y: 20}}
              whileInView={_{ opacity: 1, _y: 0}}
              viewport={_{ once: true}}
              transition={_{ duration: 0.8}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
                Ready to Experience the Future?
              </h2>
              <p className=&quot;text-xl text-gray-300 mb-8&quot;>
                Join thousands of companies already transforming their business with our revolutionary micro SaaS services.
              </p>
              
              <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center items-center mb-8&quot;>
                                 <Button 
<<<<<<< HEAD
                   variant="primary" 
                   size="lg"
<<<<<<< HEAD
                   onClick={() => window.open('https://ziontechgroup.com/contact_blank')}
=======
                   variant=&quot;primary&quot; 
                   size=&quot;lg&quot;
                   onClick={() => window.open('https://ziontechgroup.com/contact', '_blank')}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
                   onClick={_() => window.open('https://ziontechgroup.com/contact', _'_blank')}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                 >
                   Start Free Trial
                   <Rocket className=&quot;ml-2 w-5 h-5&quot; />
                 </Button>
                 <Button 
<<<<<<< HEAD
                   variant="futuristic" 
                   size="lg"
<<<<<<< HEAD
                   onClick={() => window.open('https://ziontechgroup.com/contact_blank')}
=======
                   variant=&quot;futuristic&quot; 
                   size=&quot;lg&quot;
                   onClick={() => window.open('https://ziontechgroup.com/contact', '_blank')}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
                   onClick={_() => window.open('https://ziontechgroup.com/contact', _'_blank')}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                 >
                   Schedule Demo
                   <Calendar className=&quot;ml-2 w-5 h-5&quot; />
                 </Button>
              </div>

              <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-6 text-center&quot;>
                <div>
<<<<<<< HEAD
                  <Phone className=&quot;w-8 h-8 text-cyan-400 mx-auto mb-2&quot; />
                  <div className=&quot;text-white font-semibold&quot;>{contactInfo.mobile}</div>
                  <div className=&quot;text-gray-400 text-sm&quot;>Call us anytime</div>
                </div>
                <div>
                  <Mail className=&quot;w-8 h-8 text-purple-400 mx-auto mb-2&quot; />
                  <div className=&quot;text-white font-semibold&quot;>{contactInfo.email}</div>
                  <div className=&quot;text-gray-400 text-sm&quot;>Email us 24/7</div>
                </div>
                <div>
                  <MapPin className=&quot;w-8 h-8 text-green-400 mx-auto mb-2&quot; />
                  <div className=&quot;text-white font-semibold&quot;>{contactInfo.address}</div>
                  <div className=&quot;text-gray-400 text-sm&quot;>Visit our office</div>
=======
                  <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                  <div className="text-white font-semibold">{_contactInfo.mobile}</div>
                  <div className="text-gray-400 text-sm">Call us anytime</div>
                </div>
                <div>
                  <Mail className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <div className="text-white font-semibold">{_contactInfo.email}</div>
                  <div className="text-gray-400 text-sm">Email us 24/7</div>
                </div>
                <div>
                  <MapPin className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <div className="text-white font-semibold">{_contactInfo.address}</div>
                  <div className="text-gray-400 text-sm">Visit our office</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraFuturisticBackground>
  )
}
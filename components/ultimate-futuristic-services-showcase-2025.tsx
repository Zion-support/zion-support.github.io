import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import {
  Star,
  TrendingUp,
  Users,
  Award,
  Clock,
  Heart,
  Brain,
  Atom,
  Shield,
  Rocket,
  Zap,
  Globe,
  CheckCircle,
  ArrowRight,
  Search,
  Filter,
  ChevronDown,
  ChevronUp,
  Eye,
  Play,
  Sparkles,
  Target,
  Microscope,
  Lock,
  Cloud,
  BarChart3,
  Settings,
  Cpu,
  Database,
  Network,
  Server,
  ShieldCheck,
  GlobeIcon,
  StarIcon,
  TrendingUpIcon,
  UsersIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  CpuIcon,
  DollarSign,
  Phone,
  Mail,
  MapPin,
  Dna,
  Target as TargetIcon,
  Shield as ShieldIcon,
  BookOpen,
  Sparkles as SparklesIcon,
  Zap as ZapIcon,
  Brain as BrainIcon,
  Play as PlayIcon,;
} from 'lucide-react';
import Layout from '../components/layout/Layout';
import { ultimateFuturisticServices2025 } from '../data/2025-ultimate-futuristic-services';
<<<<<<< HEAD
=======

=======
import { 
  Star, TrendingUp, Users, Award, Clock, Heart, 
  Brain, Atom, Shield, Rocket, Zap, Globe, 
  CheckCircle, ArrowRight, Search, Filter;
  ChevronDown, ChevronUp, Eye, Play, Sparkles;
  Target, Microscope, Lock, Cloud, BarChart3;
  Settings, Cpu, Database, Network, Server;
  ShieldCheck, GlobeIcon, StarIcon, TrendingUpIcon;
  UsersIcon, CheckCircleIcon, ArrowRightIcon;
  CpuIcon, DollarSign, Phone, Mail, MapPin;
  Dna, Target as TargetIcon, Shield as ShieldIcon;
  BookOpen, Sparkles as SparklesIcon, Zap as ZapIcon;
  Brain as BrainIcon, Play as PlayIcon
} from 'lucide-react';
import Layout from '../components/layout/Layout';
import { ultimateFuturisticServices2025 } from '../data/2025-ultimate-futuristic-services';
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
import { 
  Star, TrendingUp, Users, Award, Clock, Heart, 
  Brain, Atom, Shield, Rocket, Zap, Globe, 
  CheckCircle, ArrowRight, Search, Filter;
  ChevronDown, ChevronUp, Eye, Play, Sparkles;
  Target, Microscope, Lock, Cloud, BarChart3;
  Settings, Cpu, Database, Network, Server;
  ShieldCheck, GlobeIcon, StarIcon, TrendingUpIcon;
  UsersIcon, CheckCircleIcon, ArrowRightIcon;
  CpuIcon, DollarSign, Phone, Mail, MapPin;
  Dna, Target as TargetIcon, Shield as ShieldIcon;
  BookOpen, Sparkles as SparklesIcon, Zap as ZapIcon;
  Brain as BrainIcon, Play as PlayIcon
} from 'lucide-react';
import Layout from '../components/layout/Layout';
import { ultimateFuturisticServices2025 } from '../data/2025-ultimate-futuristic-services';
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  website: 'https://ziontechgroup.com',
};
visible: {
  opacity: 1, transition: {
  staggerChildren: 0.1 

};
const itemVariants = {
  hidden: {
  y: 20, opacity: 0 
};
visible: {
  y: 0, opacity: 1, transition: {
  duration: 0.5 

<<<<<<< HEAD
=======

=======
  website: 'https://ziontechgroup.com'
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
};

];

const stats = [
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  {
    number: '15+',
    label: 'Revolutionary Services',
    icon: Star,
    color: 'text-cyan-400',
  },
  {
    number: '1000%+',
    label: 'Average ROI',
    icon: TrendingUp,
    color: 'text-purple-400',
  },
  {
    number: '99.9%',
    label: 'Success Rate',
    icon: Award,
    color: 'text-green-400',
  },
  {
    number: '24/7',
    label: 'Expert Support',
    icon: Clock,
    color: 'text-pink-400',
<<<<<<< HEAD
  },];
=======
  },
=======
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    title: 'AI & Consciousness',
    description: 'Revolutionary AI platforms with consciousness and emotional intelligence',
    icon: Brain,
    color: 'from-violet-500 to-purple-600',
    count: 3
  };
  {
    title: 'Quantum & Emerging Tech',
    description: 'Breakthrough quantum computing and space technology solutions',
    icon: Atom,
    color: 'from-indigo-500 to-blue-600',
    count: 4
  };
  {
    title: 'Space Technology',
    description: 'AI-powered space exploration and resource extraction',
    icon: Rocket,
    color: 'from-blue-500 to-cyan-600',
    count: 1
  };
  {
    title: 'Financial Technology',
    description: 'Quantum AI-powered financial trading and analytics',
    icon: DollarSign,
    color: 'from-green-500 to-emerald-600',
    count: 1
  };
  {
    title: 'Content Automation',
    description: 'Autonomous AI content creation and management',
    icon: BookOpen,
    color: 'from-purple-500 to-pink-600',
    count: 1
  };
  {
    title: 'Cybersecurity',
    description: 'Quantum encryption and advanced threat detection',
    icon: Shield,
    color: 'from-red-500 to-orange-600',
    count: 1
  };
  {
    title: 'Healthcare Technology',
    description: 'AI-powered medical diagnostics and treatment',
    icon: Heart,
    color: 'from-teal-500 to-cyan-600',
    count: 1
  };
  {
    title: 'Energy Technology',
    description: 'Quantum computing for fusion power and energy optimization',
    icon: Zap,
    color: 'from-yellow-500 to-orange-600',
    count: 1
  };
  {
    title: 'Education Technology',
    description: 'Personalized AI-powered learning platforms',
    icon: BookOpen,
    color: 'from-indigo-500 to-purple-600',
    count: 1
  };
  {
    title: 'Materials Science',
    description: 'AI-powered quantum materials research and discovery',
    icon: Microscope,
    color: 'from-cyan-500 to-blue-600',
    count: 1
  }
];

const stats = [
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  { number: '15+', label: 'Revolutionary Services', icon: Star, color: 'text-cyan-400' },
  { number: '1000%+', label: 'Average ROI', icon: TrendingUp, color: 'text-purple-400' },
  { number: '99.9%', label: 'Success Rate', icon: Award, color: 'text-green-400' },
  { number: '24/7', label: 'Expert Support', icon: Clock, color: 'text-pink-400' }
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
];
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

export default function UltimateFuturisticServicesShowcase2025() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [viewMode, setViewMode] = useState('grid');

  const filteredServices = ultimateFuturisticServices2025.filter(service => {
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    const matchesSearch =
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === 'all' || service.category === selectedCategory;
<<<<<<< HEAD
    return matchesSearch && matchesCategory;  });
=======
    return matchesSearch && matchesCategory;
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  });
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        return (
          parseFloat(a.price.replace(/[^0-9.]/g, '')) -
          parseFloat(b.price.replace(/[^0-9.]/g, ''))
        );
      case 'price-high':
        return (
          parseFloat(b.price.replace(/[^0-9.]/g, '')) -
          parseFloat(a.price.replace(/[^0-9.]/g, ''))
<<<<<<< HEAD
        );      case 'rating':
        return b.rating - a.rating;
      case 'customers':
        return b.customers - a.customers;
      default:
        return b.popular ? 1 : -1;    }
=======
        );
=======
        return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, ''));
      case 'price-high':
        return parseFloat(b.price.replace(/[^0-9.]/g, '')) - parseFloat(a.price.replace(/[^0-9.]/g, ''));
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, ''));
      case 'price-high':
        return parseFloat(b.price.replace(/[^0-9.]/g, '')) - parseFloat(a.price.replace(/[^0-9.]/g, ''));
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      case 'rating':
        return b.rating - a.rating;
      case 'customers':
        return b.customers - a.customers;
<<<<<<< HEAD
<<<<<<< HEAD
      default:
        return b.popular ? 1 : -1;
=======
      default: return b.popular ? 1 : -1
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      default: return b.popular ? 1 : -1
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
<<<<<<< HEAD
        staggerChildren: 0.1,
      },
    },  };
=======
<<<<<<< HEAD
<<<<<<< HEAD
        staggerChildren: 0.1,
      },
    },
=======
        staggerChildren: 0.1
      }
    }
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        staggerChildren: 0.1
      }
    }
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  };
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
<<<<<<< HEAD
        duration: 0.5,
      },
    },  };
=======
<<<<<<< HEAD
<<<<<<< HEAD
        duration: 0.5,
      },
    },
=======
        duration: 0.5
      }
    }
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        duration: 0.5
      }
    }
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  };
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  return (
    <Layout>
      <Head>
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        <title>
          Ultimate Futuristic Services Showcase 2025 | Zion Tech Group
        </title>
        <meta
          name='description'
          content='Discover our revolutionary futuristic services including AI consciousness, quantum computing, space technology, and breakthrough innovations. Transform your business with cutting-edge technology.'
        />
        <meta
          name='keywords'
          content='futuristic services, AI consciousness, quantum computing, space technology, breakthrough innovations, Zion Tech Group'
        />
        <meta
          property='og:title'
          content='Ultimate Futuristic Services Showcase 2025 | Zion Tech Group'
        />
        <meta
          property='og:description'
          content='Discover our revolutionary futuristic services including AI consciousness, quantum computing, space technology, and breakthrough innovations.'
        />
        <meta
          property='og:url'
          content='https://ziontechgroup.com/ultimate-futuristic-services-showcase-2025'
        />
        <meta property='og:type' content='website' />
        <link
          rel='canonical'
          href='https://ziontechgroup.com/ultimate-futuristic-services-showcase-2025'
        />
      </Head>

      {/* Hero Section */}
      <section className='relative py-20 lg:py-32 overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black'></div>
<<<<<<< HEAD
        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>          <motion.div
=======
        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
=======
        <title>Ultimate Futuristic Services Showcase 2025 | Zion Tech Group</title>
        <meta name="description" content="Discover our revolutionary futuristic services including AI consciousness, quantum computing, space technology, and breakthrough innovations. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="futuristic services, AI consciousness, quantum computing, space technology, breakthrough innovations, Zion Tech Group" />
        <meta property="og:title" content="Ultimate Futuristic Services Showcase 2025 | Zion Tech Group" />
        <meta property="og:description" content="Discover our revolutionary futuristic services including AI consciousness, quantum computing, space technology, and breakthrough innovations." />
        <meta property="og:url" content="https://ziontechgroup.com/ultimate-futuristic-services-showcase-2025" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/ultimate-futuristic-services-showcase-2025" />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        <title>Ultimate Futuristic Services Showcase 2025 | Zion Tech Group</title>
        <meta name="description" content="Discover our revolutionary futuristic services including AI consciousness, quantum computing, space technology, and breakthrough innovations. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="futuristic services, AI consciousness, quantum computing, space technology, breakthrough innovations, Zion Tech Group" />
        <meta property="og:title" content="Ultimate Futuristic Services Showcase 2025 | Zion Tech Group" />
        <meta property="og:description" content="Discover our revolutionary futuristic services including AI consciousness, quantum computing, space technology, and breakthrough innovations." />
        <meta property="og:url" content="https://ziontechgroup.com/ultimate-futuristic-services-showcase-2025" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/ultimate-futuristic-services-showcase-2025" />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          <motion.div
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
<<<<<<< HEAD
            <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6'>
              <span className='bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
=======
<<<<<<< HEAD
<<<<<<< HEAD
            <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6'>
              <span className='bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
=======
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                Ultimate Futuristic
              </span>
              <br />
              <span className='bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent'>
                Services 2025
              </span>
            </h1>
            <p className='text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto'>
              Experience the future of technology with our revolutionary
              services that combine AI consciousness, quantum computing, space
              technology, and breakthrough innovations to transform your
              business.
            </p>
<<<<<<< HEAD
            <div className='flex flex-wrap justify-center gap-4 mb-12'>              {stats.map((stat, index) => (
=======
<<<<<<< HEAD
            <div className='flex flex-wrap justify-center gap-4 mb-12'>
=======
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Ultimate Futuristic
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
                Services 2025
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Experience the future of technology with our revolutionary services that combine AI consciousness,
              quantum computing, space technology, and breakthrough innovations to transform your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            <div className="flex flex-wrap justify-center gap-4 mb-12">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              {stats.map((stat, index) => (
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  className='flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20'
                >
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  <div className='text-left'>
                    <div className='text-2xl font-bold text-white'>
                      {stat.number}
                    </div>
<<<<<<< HEAD
                    <div className='text-sm text-gray-300'>{stat.label}</div>                  </div>
=======
                    <div className='text-sm text-gray-300'>{stat.label}</div>
=======
                  className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20"
                >
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  <div className="text-left">
                    <div className="text-2xl font-bold text-white">{stat.number}</div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20"
                >
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  <div className="text-left">
                    <div className="text-2xl font-bold text-white">{stat.number}</div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  </div>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
<<<<<<< HEAD
      <section className='py-12 bg-gradient-to-r from-black via-purple-900/10 to-black'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col lg:flex-row gap-6 items-center justify-between'>
=======
<<<<<<< HEAD
<<<<<<< HEAD
      <section className='py-12 bg-gradient-to-r from-black via-purple-900/10 to-black'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col lg:flex-row gap-6 items-center justify-between'>
=======
      <section className="py-12 bg-gradient-to-r from-black via-purple-900/10 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            {/* Search */}
            <div className='relative flex-1 max-w-md'>
              <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
              <input
                type='text'
                placeholder='Search futuristic services...'
                value={searchTerm}
<<<<<<< HEAD
                onChange={e => setSearchTerm(e.target.value)}
                className='w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent'              />
            </div>

            {/* Category Filter */}
            <div className='flex flex-wrap gap-3'>
=======
<<<<<<< HEAD
                onChange={e => setSearchTerm(e.target.value)}
                className='w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent'
=======
      <section className="py-12 bg-gradient-to-r from-black via-purple-900/10 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search futuristic services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              />
            </div>

            {/* Category Filter */}
<<<<<<< HEAD
<<<<<<< HEAD
            <div className='flex flex-wrap gap-3'>
=======
            <div className="flex flex-wrap gap-3">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              <select
                value={selectedCategory}
                onChange={e => setSelectedCategory(e.target.value)}
                className='px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent'
              >
<<<<<<< HEAD
                <option value='all'>All Categories</option>
                {serviceCategories.map(category => (                  <option key={category.title} value={category.title}>
=======
<<<<<<< HEAD
                <option value='all'>All Categories</option>
                {serviceCategories.map(category => (
=======
            <div className="flex flex-wrap gap-3">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="all">All Categories</option>
                {serviceCategories.map((category) => (
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                <option value="all">All Categories</option>
                {serviceCategories.map((category) => (
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  <option key={category.title} value={category.title}>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                    {category.title} ({category.count})
                  </option>
                ))}
              </select>

              {/* Sort Options */}
              <select
                value={sortBy}
<<<<<<< HEAD
                onChange={e => setSortBy(e.target.value)}
                className='px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent'
=======
<<<<<<< HEAD
<<<<<<< HEAD
                onChange={e => setSortBy(e.target.value)}
                className='px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent'
=======
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              >
                <option value='popular'>Most Popular</option>
                <option value='price-low'>Price: Low to High</option>
                <option value='price-high'>Price: High to Low</option>
                <option value='rating'>Highest Rated</option>
                <option value='customers'>Most Customers</option>
              </select>

              {/* View Mode Toggle */}
<<<<<<< HEAD
              <div className='flex bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-1'>                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-purple-500 text-white' : 'text-gray-400'}`}
                >
=======
<<<<<<< HEAD
              <div className='flex bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-1'>
=======
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="popular">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="customers">Most Customers</option>
              </select>

              {/* View Mode Toggle */}
              <div className="flex bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-1">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              <div className="flex bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-1">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-purple-500 text-white' : 'text-gray-400'}`}
                >
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  <div className='grid grid-cols-2 gap-1 w-4 h-4'>
                    <div className='bg-current rounded-sm'></div>
                    <div className='bg-current rounded-sm'></div>
                    <div className='bg-current rounded-sm'></div>
<<<<<<< HEAD
                    <div className='bg-current rounded-sm'></div>                  </div>
=======
                    <div className='bg-current rounded-sm'></div>
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  <div className="grid grid-cols-2 gap-1 w-4 h-4">
                    <div className="bg-current rounded-sm"></div>
                    <div className="bg-current rounded-sm"></div>
                    <div className="bg-current rounded-sm"></div>
                    <div className="bg-current rounded-sm"></div>
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  </div>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-purple-500 text-white' : 'text-gray-400'}`}
                >
<<<<<<< HEAD
                  <div className='space-y-1 w-4 h-4'>
                    <div className='bg-current rounded-sm h-0.5'></div>
                    <div className='bg-current rounded-sm h-0.5'></div>
                    <div className='bg-current rounded-sm h-0.5'></div>                  </div>
=======
<<<<<<< HEAD
<<<<<<< HEAD
                  <div className='space-y-1 w-4 h-4'>
                    <div className='bg-current rounded-sm h-0.5'></div>
                    <div className='bg-current rounded-sm h-0.5'></div>
                    <div className='bg-current rounded-sm h-0.5'></div>
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  <div className="space-y-1 w-4 h-4">
                    <div className="bg-current rounded-sm h-0.5"></div>
                    <div className="bg-current rounded-sm h-0.5"></div>
                    <div className="bg-current rounded-sm h-0.5"></div>
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  </div>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      <section className='py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            className={
              viewMode === 'grid'
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
                : 'space-y-6'
<<<<<<< HEAD
            }          >
=======
            }
=======
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          >
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            {sortedServices.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className={`group relative ${
<<<<<<< HEAD
                  viewMode === 'grid'                    ? 'bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:scale-105'
=======
<<<<<<< HEAD
<<<<<<< HEAD
                  viewMode === 'grid'
=======
                  viewMode === 'grid' 
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  viewMode === 'grid' 
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                    ? 'bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:scale-105'
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                    : 'bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300'
                }`}
              >
                {/* Popular Badge */}
                {service.popular && (
<<<<<<< HEAD
                  <div className='absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold px-3 py-1 rounded-full'>                    Popular
=======
<<<<<<< HEAD
<<<<<<< HEAD
                  <div className='absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold px-3 py-1 rounded-full'>
=======
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                    Popular
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  </div>
                )}

                {/* Service Header */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                <div
                  className={`${viewMode === 'list' ? 'flex items-start space-x-6' : 'text-center'}`}
                >
                  <div
                    className={`${viewMode === 'list' ? 'flex-shrink-0' : 'mx-auto mb-4'}`}
                  >
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-3xl`}
                    >
<<<<<<< HEAD
=======
=======
                <div className={`${viewMode === 'list' ? 'flex items-start space-x-6' : 'text-center'}`}>
                  <div className={`${viewMode === 'list' ? 'flex-shrink-0' : 'mx-auto mb-4'}`}>
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-3xl`}>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                      {service.icon}
                    </div>
                  </div>

                  <div className={`${viewMode === 'list' ? 'flex-1' : ''}`}>
                    <h3 className='text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors'>
                      {service.name}
                    </h3>
                    <p className='text-gray-300 text-sm mb-3'>
                      {service.tagline}
                    </p>

                    {/* Price */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                    <div className='flex items-center justify-center space-x-2 mb-4'>
                      <span className='text-3xl font-bold text-white'>
                        {service.price}
                      </span>
<<<<<<< HEAD
                      <span className='text-gray-400'>{service.period}</span>                    </div>
=======
                      <span className='text-gray-400'>{service.period}</span>
=======
                <div className={`${viewMode === 'list' ? 'flex items-start space-x-6' : 'text-center'}`}>
                  <div className={`${viewMode === 'list' ? 'flex-shrink-0' : 'mx-auto mb-4'}`}>
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-3xl`}>
                      {service.icon}
                    </div>
                  </div>
                  
                  <div className={`${viewMode === 'list' ? 'flex-1' : ''}`}>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-300 text-sm mb-3">{service.tagline}</p>
                    
                    {/* Price */}
                    <div className="flex items-center justify-center space-x-2 mb-4">
                      <span className="text-3xl font-bold text-white">{service.price}</span>
                      <span className="text-gray-400">{service.period}</span>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                    <div className="flex items-center justify-center space-x-2 mb-4">
                      <span className="text-3xl font-bold text-white">{service.price}</span>
                      <span className="text-gray-400">{service.period}</span>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                    </div>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  </div>
                </div>

                {/* Description */}
<<<<<<< HEAD
                <p className='text-gray-300 mb-6 leading-relaxed'>
                  {service.description}
                </p>
=======
<<<<<<< HEAD
<<<<<<< HEAD
                <p className='text-gray-300 mb-6 leading-relaxed'>
                  {service.description}
                </p>
=======
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

                {/* Features */}
                <div className='mb-6'>
                  <h4 className='text-white font-semibold mb-3 flex items-center'>
                    <Sparkles className='w-4 h-4 mr-2 text-purple-400' />
                    Key Features
                  </h4>
                  <div className='grid grid-cols-1 gap-2'>
                    {service.features.slice(0, 4).map((feature, idx) => (
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                      <div
                        key={idx}
                        className='flex items-center text-sm text-gray-300'
                      >
<<<<<<< HEAD
                        <CheckCircle className='w-4 h-4 text-green-400 mr-2 flex-shrink-0' />                        {feature}
                      </div>
                    ))}
                    {service.features.length > 4 && (
                      <div className='text-sm text-purple-400 mt-2'>                        +{service.features.length - 4} more features
=======
                        <CheckCircle className='w-4 h-4 text-green-400 mr-2 flex-shrink-0' />
=======
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3 flex items-center">
                    <Sparkles className="w-4 h-4 mr-2 text-purple-400" />
                    Key Features
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                        {feature}
                      </div>
                    ))}
                    {service.features.length > 4 && (
<<<<<<< HEAD
<<<<<<< HEAD
                      <div className='text-sm text-purple-400 mt-2'>
=======
                      <div className="text-sm text-purple-400 mt-2">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                      <div className="text-sm text-purple-400 mt-2">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                        +{service.features.length - 4} more features
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                      </div>
                    )}
                  </div>
                </div>

                {/* Service Details */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                <div className='grid grid-cols-2 gap-4 mb-6 text-sm'>
                  <div className='text-gray-400'>
                    <span className='block'>Setup Time</span>
                    <span className='text-white font-medium'>
                      {service.setupTime}
                    </span>
<<<<<<< HEAD
=======
=======
                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div className="text-gray-400">
                    <span className="block">Setup Time</span>
                    <span className="text-white font-medium">{service.setupTime}</span>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  </div>
                  <div className='text-gray-400'>
                    <span className='block'>Trial</span>
                    <span className='text-white font-medium'>
                      {service.trialDays} days
                    </span>
                  </div>
                  <div className='text-gray-400'>
                    <span className='block'>Rating</span>
                    <div className='flex items-center'>
                      <span className='text-white font-medium mr-1'>
                        {service.rating}
                      </span>
                      <Star className='w-4 h-4 text-yellow-400 fill-current' />
                    </div>
                  </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  <div className='text-gray-400'>
                    <span className='block'>Customers</span>
                    <span className='text-white font-medium'>
                      {service.customers}+
<<<<<<< HEAD
                    </span>                  </div>
                </div>

                {/* ROI and Market Info */}
=======
                    </span>
=======
                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div className="text-gray-400">
                    <span className="block">Setup Time</span>
                    <span className="text-white font-medium">{service.setupTime}</span>
                  </div>
                  <div className="text-gray-400">
                    <span className="block">Trial</span>
                    <span className="text-white font-medium">{service.trialDays} days</span>
                  </div>
                  <div className="text-gray-400">
                    <span className="block">Rating</span>
                    <div className="flex items-center">
                      <span className="text-white font-medium mr-1">{service.rating}</span>
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    </div>
                  </div>
                  <div className="text-gray-400">
                    <span className="block">Customers</span>
                    <span className="text-white font-medium">{service.customers}+</span>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  <div className="text-gray-400">
                    <span className="block">Customers</span>
                    <span className="text-white font-medium">{service.customers}+</span>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  </div>
                </div>

                {/* ROI and Market Info */}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                <div className='mb-6 p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20'>
                  <div className='text-sm'>
                    <div className='text-gray-300 mb-2'>
                      <span className='font-semibold text-white'>ROI:</span>{' '}
                      {service.roi}
                    </div>
                    <div className='text-gray-300'>
                      <span className='font-semibold text-white'>
                        Market Size:
                      </span>{' '}
<<<<<<< HEAD
                      {service.marketSize}                    </div>
=======
                      {service.marketSize}
=======
                <div className="mb-6 p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20">
                  <div className="text-sm">
                    <div className="text-gray-300 mb-2">
                      <span className="font-semibold text-white">ROI: </span> {service.roi}
                    </div>
                    <div className="text-gray-300">
                      <span className="font-semibold text-white">Market Size: </span> {service.marketSize}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                <div className="mb-6 p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20">
                  <div className="text-sm">
                    <div className="text-gray-300 mb-2">
                      <span className="font-semibold text-white">ROI: </span> {service.roi}
                    </div>
                    <div className="text-gray-300">
                      <span className="font-semibold text-white">Market Size: </span> {service.marketSize}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                    </div>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  </div>
                </div>

                {/* Action Buttons */}
<<<<<<< HEAD
                <div className='flex flex-col sm:flex-row gap-3'>
=======
<<<<<<< HEAD
<<<<<<< HEAD
                <div className='flex flex-col sm:flex-row gap-3'>
=======
                <div className="flex flex-col sm:flex-row gap-3">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  <Link
                    href={service.link}
                    className='flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-6 rounded-lg text-center hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105'
                  >
                    Get Started
                  </Link>
<<<<<<< HEAD
                  <button className='px-4 py-3 border border-white/20 text-white rounded-lg hover:border-purple-500/50 transition-colors'>
                    <Eye className='w-5 h-5' />                  </button>
                </div>

                {/* Contact Info */}
                <div className='mt-6 pt-6 border-t border-white/10'>
                  <div className='text-center text-sm text-gray-400'>
=======
<<<<<<< HEAD
                  <button className='px-4 py-3 border border-white/20 text-white rounded-lg hover:border-purple-500/50 transition-colors'>
                    <Eye className='w-5 h-5' />
=======
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href={service.link}
                    className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-6 rounded-lg text-center hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
                  >
                    Get Started
                  </Link>
                  <button className="px-4 py-3 border border-white/20 text-white rounded-lg hover:border-purple-500/50 transition-colors">
                    <Eye className="w-5 h-5" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  <button className="px-4 py-3 border border-white/20 text-white rounded-lg hover:border-purple-500/50 transition-colors">
                    <Eye className="w-5 h-5" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  </button>
                </div>

                {/* Contact Info */}
<<<<<<< HEAD
<<<<<<< HEAD
                <div className='mt-6 pt-6 border-t border-white/10'>
                  <div className='text-center text-sm text-gray-400'>
=======
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="text-center text-sm text-gray-400">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                    <p>Contact us for custom pricing and implementation</p>
                    <div className='flex items-center justify-center space-x-4 mt-2'>
                      <a
                        href={`tel:${contactInfo.mobile}`}
                        className='flex items-center text-purple-400 hover:text-purple-300'
                      >
                        <Phone className='w-4 h-4 mr-1' />
                        {contactInfo.mobile}
                      </a>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                      <a
                        href={`mailto:${contactInfo.email}`}
                        className='flex items-center text-purple-400 hover:text-purple-300'
                      >
<<<<<<< HEAD
                        <Mail className='w-4 h-4 mr-1' />                        {contactInfo.email}
=======
                        <Mail className='w-4 h-4 mr-1' />
=======
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="text-center text-sm text-gray-400">
                    <p>Contact us for custom pricing and implementation</p>
                    <div className="flex items-center justify-center space-x-4 mt-2">
                      <a href={`tel:${contactInfo.mobile}`} className="flex items-center text-purple-400 hover:text-purple-300">
                        <Phone className="w-4 h-4 mr-1" />
                        {contactInfo.mobile}
                      </a>
                      <a href={`mailto:${contactInfo.email}`} className="flex items-center text-purple-400 hover:text-purple-300">
                        <Mail className="w-4 h-4 mr-1" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                      <a href={`mailto:${contactInfo.email}`} className="flex items-center text-purple-400 hover:text-purple-300">
                        <Mail className="w-4 h-4 mr-1" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                        {contactInfo.email}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* No Results */}
          {sortedServices.length === 0 && (
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            <div className='text-center py-16'>
              <div className='text-6xl mb-4'>🔍</div>
              <h3 className='text-2xl font-bold text-white mb-2'>
                No services found
              </h3>
              <p className='text-gray-400 mb-6'>
                Try adjusting your search criteria or category filter
              </p>
<<<<<<< HEAD
=======
=======
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-gray-400 mb-6">Try adjusting your search criteria or category filter</p>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
<<<<<<< HEAD
                className='bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300'              >
=======
<<<<<<< HEAD
                className='bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300'
=======
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-gray-400 mb-6">Try adjusting your search criteria or category filter</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all')
                }}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              >
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
      <section className='py-20 bg-gradient-to-r from-purple-900/20 via-black to-pink-900/20'>
        <div className='max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8'>          <motion.div
=======
<<<<<<< HEAD
<<<<<<< HEAD
      <section className='py-20 bg-gradient-to-r from-purple-900/20 via-black to-pink-900/20'>
        <div className='max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8'>
=======
      <section className="py-20 bg-gradient-to-r from-purple-900/20 via-black to-pink-900/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      <section className="py-20 bg-gradient-to-r from-purple-900/20 via-black to-pink-900/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          <motion.div
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
<<<<<<< HEAD
            <h2 className='text-3xl md:text-5xl font-bold text-white mb-6'>
=======
<<<<<<< HEAD
<<<<<<< HEAD
            <h2 className='text-3xl md:text-5xl font-bold text-white mb-6'>
=======
            <h2 className="text-3xl md: text-5xl font-bold text-white mb-6">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              Ready to Experience the Future?
            </h2>
            <p className='text-xl text-gray-300 mb-8'>
              Transform your business with our revolutionary futuristic
              services. Get in touch with our experts to discuss your specific
              needs and implementation strategy.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
<<<<<<< HEAD
                href='/contact'
                className='bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-4 px-8 rounded-lg text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105'              >
                Contact Our Experts
              </Link>
              <Link
                href='/pricing'
                className='border border-white/20 text-white font-semibold py-4 px-8 rounded-lg text-lg hover:border-purple-500/50 transition-colors'              >
=======
<<<<<<< HEAD
                href='/contact'
                className='bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-4 px-8 rounded-lg text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105'
=======
            <h2 className="text-3xl md: text-5xl font-bold text-white mb-6">
              Ready to Experience the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Transform your business with our revolutionary futuristic services. 
              Get in touch with our experts to discuss your specific needs and implementation strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-4 px-8 rounded-lg text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                href="/contact"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-4 px-8 rounded-lg text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              >
                Contact Our Experts
              </Link>
              <Link
<<<<<<< HEAD
<<<<<<< HEAD
                href='/pricing'
                className='border border-white/20 text-white font-semibold py-4 px-8 rounded-lg text-lg hover:border-purple-500/50 transition-colors'
=======
                href="/pricing"
                className="border border-white/20 text-white font-semibold py-4 px-8 rounded-lg text-lg hover:border-purple-500/50 transition-colors"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                href="/pricing"
                className="border border-white/20 text-white font-semibold py-4 px-8 rounded-lg text-lg hover:border-purple-500/50 transition-colors"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              >
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

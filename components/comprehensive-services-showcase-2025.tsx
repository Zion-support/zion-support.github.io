import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import {
  Search,
  Filter,
  Grid3X3,
  List,
  Star,
  Users,
  TrendingUp,
  Zap,
  Brain,
  Atom,
  Shield,
  Rocket,
  Palette,
  BookOpen,
  Truck,
  DollarSign,
  Settings,
  ArrowRight,
  ChevronDown,
  CheckCircle,
  Clock,
  Award,
  Target,
  Globe,
  Sparkles,
  Cpu,
  Lock,
  Cloud,
  BarChart3,
  Eye,
  Heart,
  Lightbulb,
  Palette as PaletteIcon,
  Code,
  Database,
  Shield as ShieldIcon,
  Globe as GlobeIcon,
  Zap as ZapIcon,
<<<<<<< HEAD
  Target as TargetIcon,;} from 'lucide-react';
=======
  Target as TargetIcon,;
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
import { 
  Search, Filter, Grid3X3, List, 
  Star, Users, TrendingUp, Zap, Brain, Atom, Shield, Rocket, Palette, BookOpen, Truck, DollarSign, Settings;
  ArrowRight, ChevronDown, CheckCircle, Clock, Award, Target, Globe, Sparkles, Cpu, Lock, Cloud, BarChart3;
  Eye, Heart, Lightbulb, Palette as PaletteIcon, Code, Database, Shield as ShieldIcon, Globe as GlobeIcon, Zap as ZapIcon, Target as TargetIcon
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
} from 'lucide-react';
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

// Import service data
import { innovativeRealMicroSaasServices2025 } from '../data/2025-innovative-real-micro-saas-services';
import { innovativeAIServicesEnhanced2025 } from '../data/2025-innovative-ai-services-enhanced';
import { innovativeITServicesEnhanced2025 } from '../data/2025-innovative-it-services-enhanced';
import { emergingTechServicesEnhanced2025 } from '../data/emerging-tech-services';
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
interface Service {
  id: string;
  name: string;
  tagline: string;
  price: string;
  description: string;
  features: string[];
  category: string;
  rating: number;
  reviews: number;
  customers: number;
  marketSize: string;
  growthRate: string;
  launchDate: string;
  badge?: string;
  icon?: React.ReactNode;

const allServices: Service[] = [
  ...innovativeRealMicroSaasServices2025.map(service => ({
    ...service,
    category: 'Micro SAAS',
    icon: <Rocket className='w-6 h-6' />,
  })),
  ...innovativeAIServicesEnhanced2025.map(service => ({
    ...service,
    category: 'AI & Consciousness',
    icon: <Brain className='w-6 h-6' />,
  })),
  ...innovativeITServicesEnhanced2025.map(service => ({
    ...service,
    category: 'Enterprise IT',
    icon: <Shield className='w-6 h-6' />,
  })),
  ...emergingTechServicesEnhanced2025.map(service => ({
    ...service,
    category: 'Quantum & Emerging Tech',
    icon: <Atom className='w-6 h-6' />,
  })),
];

const categories = [
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  {
    name: 'All Services',
    icon: <Globe className='w-5 h-5' />,
    count: allServices.length,
  },
  {
    name: 'Micro SAAS',
    icon: <Rocket className='w-5 h-5' />,
    count: innovativeRealMicroSaasServices2025.length,
  },
  {
    name: 'AI & Consciousness',
    icon: <Brain className='w-5 h-5' />,
    count: innovativeAIServicesEnhanced2025.length,
  },
  {
    name: 'Enterprise IT',
    icon: <Shield className='w-5 h-5' />,
    count: innovativeITServicesEnhanced2025.length,
  },
  {
    name: 'Quantum & Emerging Tech',
    icon: <Atom className='w-5 h-5' />,
    count: emergingTechServicesEnhanced2025.length,
<<<<<<< HEAD
  },];
=======
  },
=======
interface Service {
  id: string,
  name: string,
  tagline: string,
  price: string,
  description: string,
  features: string[],
  category: string,
  rating: number,
  reviews: number,
  customers: number,
  marketSize: string,
  growthRate: string,
  launchDate: string,
  badge?: string;
  icon?: React.ReactNode
}

const allServices: Service[] = [
  ...innovativeRealMicroSaasServices2025.map(service => ({
    ...service;
    category: 'Micro SAAS',
    icon: <Rocket className="w-6 h-6" />
  }));
  ...innovativeAIServicesEnhanced2025.map(service => ({
    ...service;
    category: 'AI & Consciousness',
    icon: <Brain className="w-6 h-6" />
  }));
  ...innovativeITServicesEnhanced2025.map(service => ({
    ...service;
    category: 'Enterprise IT',
    icon: <Shield className="w-6 h-6" />
  }));
  ...emergingTechServicesEnhanced2025.map(service => ({
    ...service;
    category: 'Quantum & Emerging Tech',
    icon: <Atom className="w-6 h-6" />
  }))
];

const categories = [
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  { name: 'All Services', icon: <Globe className="w-5 h-5" />, count: allServices.length },
  { name: 'Micro SAAS', icon: <Rocket className="w-5 h-5" />, count: innovativeRealMicroSaasServices2025.length },
  { name: 'AI & Consciousness', icon: <Brain className="w-5 h-5" />, count: innovativeAIServicesEnhanced2025.length },
  { name: 'Enterprise IT', icon: <Shield className="w-5 h-5" />, count: innovativeITServicesEnhanced2025.length },
  { name: 'Quantum & Emerging Tech', icon: <Atom className="w-5 h-5" />, count: emergingTechServicesEnhanced2025.length }
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
];
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

const priceRanges = [
  { label: 'All Prices', value: 'all' },
  { label: 'Under $50/month', value: 'under-50' },
  { label: '$50 - $200/month', value: '50-200' },
  { label: '$200 - $500/month', value: '200-500' },
<<<<<<< HEAD
  { label: 'Over $500/month', value: 'over-500' },];
=======
<<<<<<< HEAD
<<<<<<< HEAD
  { label: 'Over $500/month', value: 'over-500' },
=======
  { label: 'Over $500/month', value: 'over-500' }
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  { label: 'Over $500/month', value: 'over-500' }
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
];
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

const sortOptions = [
  { label: 'Most Popular', value: 'popular' },
  { label: 'Highest Rated', value: 'rating' },
  { label: 'Newest', value: 'newest' },
  { label: 'Price: Low to High', value: 'price-low' },
<<<<<<< HEAD
  { label: 'Price: High to Low', value: 'price-high' },];
=======
<<<<<<< HEAD
<<<<<<< HEAD
  { label: 'Price: High to Low', value: 'price-high' },
=======
  { label: 'Price: High to Low', value: 'price-high' }
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  { label: 'Price: High to Low', value: 'price-high' }
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
];
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

export default function ComprehensiveServicesShowcase2025() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Services');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
<<<<<<< HEAD
  const [filteredServices, setFilteredServices] =
    useState<Service[]>(allServices);
=======
<<<<<<< HEAD
<<<<<<< HEAD
  const [filteredServices, setFilteredServices] =
    useState<Service[]>(allServices);
=======
  const [filteredServices, setFilteredServices] = useState<Service[]>(allServices);
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  const [filteredServices, setFilteredServices] = useState<Service[]>(allServices);
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  useEffect(() => {
    let filtered = allServices;

    // Filter by search term
    if (searchTerm) {
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      filtered = filtered.filter(
        service =>
          service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          service.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          service.tagline.toLowerCase().includes(searchTerm.toLowerCase())
<<<<<<< HEAD
      );    }

    // Filter by category
    if (selectedCategory !== 'All Services') {
      filtered = filtered.filter(
        service => service.category === selectedCategory
      );    }
=======
      );
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tagline.toLowerCase().includes(searchTerm.toLowerCase())
      )
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }

    // Filter by category
    if (selectedCategory !== 'All Services') {
<<<<<<< HEAD
<<<<<<< HEAD
      filtered = filtered.filter(
        service => service.category === selectedCategory
      );
=======
      filtered = filtered.filter(service => service.category === selectedCategory)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      filtered = filtered.filter(service => service.category === selectedCategory)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

    // Filter by price range
    if (selectedPriceRange !== 'all') {
      filtered = filtered.filter(service => {
        const price = parseFloat(service.price.replace(/[^0-9.]/g, ''));
        switch (selectedPriceRange) {
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          case 'under-50':
            return price < 50;
          case '50-200':
            return price >= 50 && price <= 200;
          case '200-500':
            return price > 200 && price <= 500;
          case 'over-500':
            return price > 500;
          default:
<<<<<<< HEAD
            return true;        }
=======
            return true;
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          case 'under-50': return price < 50;
          case '50-200': return price >= 50 && price <= 200;
          case '200-500': return price > 200 && price <= 500;
          case 'over-500': return price > 500;
          default: return true
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      });
    }

    // Sort services
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'popular':
          return b.customers - a.customers;
        case 'rating':
          return b.rating - a.rating;
        case 'newest':
<<<<<<< HEAD
          return (
            new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime()
          );
=======
<<<<<<< HEAD
<<<<<<< HEAD
          return (
            new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime()
          );
=======
          return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime();
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        case 'price-low':
          return (
            parseFloat(a.price.replace(/[^0-9.]/g, '')) -
            parseFloat(b.price.replace(/[^0-9.]/g, ''))
          );
        case 'price-high':
          return (
            parseFloat(b.price.replace(/[^0-9.]/g, '')) -
            parseFloat(a.price.replace(/[^0-9.]/g, ''))
          );
        default:
          return 0;
      }
    });

<<<<<<< HEAD
    setFilteredServices(filtered);  }, [searchTerm, selectedCategory, selectedPriceRange, sortBy]);

  const getCategoryColor = (category: string) => {
    switch (category) {
=======
<<<<<<< HEAD
    setFilteredServices(filtered);
=======
          return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime();
        case 'price-low':
          return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, ''));
        case 'price-high':
          return parseFloat(b.price.replace(/[^0-9.]/g, '')) - parseFloat(a.price.replace(/[^0-9.]/g, ''));
        default: return 0
      }
    });

    setFilteredServices(filtered)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    setFilteredServices(filtered)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }, [searchTerm, selectedCategory, selectedPriceRange, sortBy]);

  const getCategoryColor = (category: string) => {
    switch (category) {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      case 'Micro SAAS':
        return 'from-blue-500 to-cyan-500';
      case 'AI & Consciousness':
        return 'from-purple-500 to-pink-500';
      case 'Enterprise IT':
        return 'from-green-500 to-emerald-500';
      case 'Quantum & Emerging Tech':
        return 'from-orange-500 to-red-500';
      default:
<<<<<<< HEAD
        return 'from-gray-500 to-slate-500';    }
=======
        return 'from-gray-500 to-slate-500';
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      case 'Micro SAAS': return 'from-blue-500 to-cyan-500';
      case 'AI & Consciousness': return 'from-purple-500 to-pink-500';
      case 'Enterprise IT': return 'from-green-500 to-emerald-500';
      case 'Quantum & Emerging Tech': return 'from-orange-500 to-red-500';
      default: return 'from-gray-500 to-slate-500'
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      case 'Micro SAAS':
        return <Rocket className='w-5 h-5' />;
      case 'AI & Consciousness':
        return <Brain className='w-5 h-5' />;
      case 'Enterprise IT':
        return <Shield className='w-5 h-5' />;
      case 'Quantum & Emerging Tech':
        return <Atom className='w-5 h-5' />;
      default:
<<<<<<< HEAD
        return <Globe className='w-5 h-5' />;    }
=======
        return <Globe className='w-5 h-5' />;
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      case 'Micro SAAS': return <Rocket className="w-5 h-5" />;
      case 'AI & Consciousness': return <Brain className="w-5 h-5" />;
      case 'Enterprise IT': return <Shield className="w-5 h-5" />;
      case 'Quantum & Emerging Tech': return <Atom className="w-5 h-5" />;
      default: return <Globe className="w-5 h-5" />
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  };

  return (
    <Layout>
      <Head>
        <title>Comprehensive Services Showcase 2025 - Zion Tech Group</title>
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        <meta
          name='description'
          content='Explore our complete portfolio of innovative micro SAAS, AI, IT, and emerging technology services. Find the perfect solution for your business needs.'
        />
        <meta
          name='keywords'
          content='micro SAAS, AI services, IT solutions, quantum computing, emerging technology, business solutions, Zion Tech Group'
        />
<<<<<<< HEAD
=======
=======
        <meta name="description" content="Explore our complete portfolio of innovative micro SAAS, AI, IT, and emerging technology services. Find the perfect solution for your business needs." />
        <meta name="keywords" content="micro SAAS, AI services, IT solutions, quantum computing, emerging technology, business solutions, Zion Tech Group" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      </Head>

      {/* Hero Section */}
      <div className='relative min-h-screen flex items-center justify-center overflow-hidden'>
        {/* Animated Background */}
        <div className='absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black'>
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]'></div>
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.1),transparent_50%)]'></div>
        </div>

        {/* Floating Elements */}
        <div className='absolute inset-0 overflow-hidden'>
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className='absolute w-2 h-2 bg-cyan-400 rounded-full opacity-20'
              animate={{
<<<<<<< HEAD
                x: [0, 100, 0],
                y: [0, -100, 0],
                opacity: [0.2, 0.8, 0.2],
=======
                x: [0, 100, 0];
                y: [0, -100, 0];
                opacity: [0.2, 0.8, 0.2]}}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                delay: i * 0.5}}
              style={{
                left: `${Math.random() * 100}%`,
<<<<<<< HEAD
                top: `${Math.random() * 100}%`,
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                delay: i * 0.5,
              }}
              style={{
                left: `${Math.random() * 100}%`,
<<<<<<< HEAD
                top: `${Math.random() * 100}%`,
              }}            />
          ))}
        </div>

        <div className='relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto'>          <motion.div
=======
                top: `${Math.random() * 100}%`}}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                top: `${Math.random() * 100}%`}}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            />
          ))}
        </div>

<<<<<<< HEAD
<<<<<<< HEAD
        <div className='relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto'>
=======
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          <motion.div
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
<<<<<<< HEAD
            <h1 className='text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6'>
              <span className='bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent'>
=======
<<<<<<< HEAD
<<<<<<< HEAD
            <h1 className='text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6'>
              <span className='bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent'>
=======
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                Comprehensive
              </span>
              <br />
              <span className='text-white'>Services Showcase</span>
            </h1>
            <p className='text-xl sm:text-2xl text-cyan-300 mb-8 max-w-4xl mx-auto'>
              Discover our complete portfolio of {allServices.length}+
              innovative micro SAAS, AI, IT, and emerging technology services
            </p>

            {/* Stats */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-12'>
              {[
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                {
                  label: 'Total Services',
                  value: allServices.length,
                  icon: <Globe className='w-8 h-8' />,
                },
                {
                  label: 'AI Solutions',
                  value: innovativeAIServicesEnhanced2025.length,
                  icon: <Brain className='w-8 h-8' />,
                },
                {
                  label: 'IT Services',
                  value: innovativeITServicesEnhanced2025.length,
                  icon: <Shield className='w-8 h-8' />,
                },
                {
                  label: 'Emerging Tech',
                  value: emergingTechServicesEnhanced2025.length,
                  icon: <Atom className='w-8 h-8' />,
<<<<<<< HEAD
                },              ].map((stat, index) => (
=======
                },
=======
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Comprehensive
              </span>
              <br />
              <span className="text-white">Services Showcase</span>
            </h1>
            <p className="text-xl sm:text-2xl text-cyan-300 mb-8 max-w-4xl mx-auto">
              Discover our complete portfolio of {allServices.length}+ innovative micro SAAS, AI, IT, and emerging technology services
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {[
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                { label: 'Total Services', value: allServices.length, icon: <Globe className="w-8 h-8" /> },
                { label: 'AI Solutions', value: innovativeAIServicesEnhanced2025.length, icon: <Brain className="w-8 h-8" /> },
                { label: 'IT Services', value: innovativeITServicesEnhanced2025.length, icon: <Shield className="w-8 h-8" /> },
                { label: 'Emerging Tech', value: emergingTechServicesEnhanced2025.length, icon: <Atom className="w-8 h-8" /> }
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              ].map((stat, index) => (
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
<<<<<<< HEAD
                  className='text-center'
=======
<<<<<<< HEAD
<<<<<<< HEAD
                  className='text-center'
=======
                  className="text-center"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                >
                  <div className='inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full mb-3 text-cyan-400'>
                    {stat.icon}
                  </div>
<<<<<<< HEAD
                  <div className='text-3xl font-bold text-white mb-1'>
                    {stat.value}
                  </div>
                  <div className='text-sm text-cyan-300'>{stat.label}</div>                </motion.div>
=======
<<<<<<< HEAD
                  <div className='text-3xl font-bold text-white mb-1'>
                    {stat.value}
                  </div>
                  <div className='text-sm text-cyan-300'>{stat.label}</div>
=======
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full mb-3 text-cyan-400">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-cyan-300">{stat.label}</div>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-cyan-300">{stat.label}</div>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                </motion.div>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              ))}
            </div>

            {/* Search Bar */}
<<<<<<< HEAD
            <div className='max-w-2xl mx-auto'>
              <div className='relative'>
                <Search className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
=======
<<<<<<< HEAD
<<<<<<< HEAD
            <div className='max-w-2xl mx-auto'>
              <div className='relative'>
                <Search className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
=======
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                <input
                  type='text'
                  placeholder='Search for services, features, or solutions...'
                  value={searchTerm}
<<<<<<< HEAD
                  onChange={e => setSearchTerm(e.target.value)}
                  className='w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-lg border border-cyan-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50'                />
=======
<<<<<<< HEAD
                  onChange={e => setSearchTerm(e.target.value)}
                  className='w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-lg border border-cyan-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50'
=======
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for services, features, or solutions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-lg border border-cyan-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-lg border border-cyan-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                />
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Filters and Controls */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      <div className='bg-black/50 backdrop-blur-lg border-b border-cyan-500/20 sticky top-20 z-40'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
          <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0'>
            {/* Category Filters */}
            <div className='flex flex-wrap items-center space-x-2'>
<<<<<<< HEAD
              {categories.map(category => (                <button
=======
              {categories.map(category => (
=======
      <div className="bg-black/50 backdrop-blur-lg border-b border-cyan-500/20 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            {/* Category Filters */}
            <div className="flex flex-wrap items-center space-x-2">
              {categories.map((category) => (
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      <div className="bg-black/50 backdrop-blur-lg border-b border-cyan-500/20 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            {/* Category Filters */}
            <div className="flex flex-wrap items-center space-x-2">
              {categories.map((category) => (
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                <button
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category.name
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {category.icon}
                  <span>{category.name}</span>
<<<<<<< HEAD
                  <span className='bg-white/20 px-2 py-1 rounded-full text-xs'>                    {category.count}
=======
<<<<<<< HEAD
<<<<<<< HEAD
                  <span className='bg-white/20 px-2 py-1 rounded-full text-xs'>
=======
                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                    {category.count}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  </span>
                </button>
              ))}
            </div>

            {/* Price and Sort Controls */}
<<<<<<< HEAD
            <div className='flex flex-wrap items-center space-x-4'>
=======
<<<<<<< HEAD
<<<<<<< HEAD
            <div className='flex flex-wrap items-center space-x-4'>
=======
            <div className="flex flex-wrap items-center space-x-4">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              {/* Price Range Filter */}
              <select
                value={selectedPriceRange}
                onChange={e => setSelectedPriceRange(e.target.value)}
                className='px-4 py-2 bg-white/10 border border-cyan-500/30 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50'
              >
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                {priceRanges.map(range => (
                  <option
                    key={range.value}
                    value={range.value}
                    className='bg-gray-900 text-white'
<<<<<<< HEAD
                  >                    {range.label}
=======
                  >
=======
            <div className="flex flex-wrap items-center space-x-4">
              {/* Price Range Filter */}
              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="px-4 py-2 bg-white/10 border border-cyan-500/30 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
              >
                {priceRanges.map((range) => (
                  <option key={range.value} value={range.value} className="bg-gray-900 text-white">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                {priceRanges.map((range) => (
                  <option key={range.value} value={range.value} className="bg-gray-900 text-white">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                    {range.label}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  </option>
                ))}
              </select>

              {/* Sort Options */}
              <select
                value={sortBy}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                onChange={e => setSortBy(e.target.value)}
                className='px-4 py-2 bg-white/10 border border-cyan-500/30 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50'
              >
                {sortOptions.map(option => (
                  <option
                    key={option.value}
                    value={option.value}
                    className='bg-gray-900 text-white'
<<<<<<< HEAD
                  >                    {option.label}
=======
                  >
=======
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-white/10 border border-cyan-500/30 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value} className="bg-gray-900 text-white">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-white/10 border border-cyan-500/30 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value} className="bg-gray-900 text-white">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                    {option.label}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  </option>
                ))}
              </select>

              {/* View Mode Toggle */}
<<<<<<< HEAD
              <div className='flex items-center space-x-1 bg-white/10 rounded-lg p-1'>                <button
=======
<<<<<<< HEAD
<<<<<<< HEAD
              <div className='flex items-center space-x-1 bg-white/10 rounded-lg p-1'>
=======
              <div className="flex items-center space-x-1 bg-white/10 rounded-lg p-1">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              <div className="flex items-center space-x-1 bg-white/10 rounded-lg p-1">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                <button
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-all duration-200 ${
                    viewMode === 'grid'
                      ? 'bg-cyan-500 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
<<<<<<< HEAD
                  <Grid3X3 className='w-4 h-4' />                </button>
=======
<<<<<<< HEAD
<<<<<<< HEAD
                  <Grid3X3 className='w-4 h-4' />
=======
                  <Grid3X3 className="w-4 h-4" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  <Grid3X3 className="w-4 h-4" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                </button>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-all duration-200 ${
                    viewMode === 'list'
                      ? 'bg-cyan-500 text-white'
                      : 'text-white'
                  }`}
                >
<<<<<<< HEAD
                  <List className='w-4 h-4' />                </button>
=======
<<<<<<< HEAD
<<<<<<< HEAD
                  <List className='w-4 h-4' />
=======
                  <List className="w-4 h-4" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  <List className="w-4 h-4" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                </button>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid/List */}
<<<<<<< HEAD
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        {/* Results Count */}
        <div className='mb-8'>
          <p className='text-gray-400'>            Showing {filteredServices.length} of {allServices.length} services
=======
<<<<<<< HEAD
<<<<<<< HEAD
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        {/* Results Count */}
        <div className='mb-8'>
          <p className='text-gray-400'>
=======
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Results Count */}
        <div className="mb-8">
          <p className="text-gray-400">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Results Count */}
        <div className="mb-8">
          <p className="text-gray-400">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            Showing {filteredServices.length} of {allServices.length} services
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          </p>
        </div>

        {viewMode === 'grid' ? (
<<<<<<< HEAD
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>            {filteredServices.map((service, index) => (
=======
<<<<<<< HEAD
<<<<<<< HEAD
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
=======
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            {filteredServices.map((service, index) => (
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
<<<<<<< HEAD
                className='group relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-lg border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300'
=======
<<<<<<< HEAD
<<<<<<< HEAD
                className='group relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-lg border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300'
=======
                className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-lg border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              >
                {/* Category Badge */}
                <div className='absolute top-4 right-4'>
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service.category)} text-white`}
                  >
                    {getCategoryIcon(service.category)}
<<<<<<< HEAD
                    <span className='ml-2'>{service.category}</span>                  </span>
                </div>

                {/* Service Icon */}
                <div className='mb-4'>
                  <div className='w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300'>                    {service.icon}
=======
<<<<<<< HEAD
                    <span className='ml-2'>{service.category}</span>
=======
                className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-lg border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300"
              >
                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service.category)} text-white`}>
                    {getCategoryIcon(service.category)}
                    <span className="ml-2">{service.category}</span>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                    <span className="ml-2">{service.category}</span>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  </span>
                </div>

                {/* Service Icon */}
<<<<<<< HEAD
<<<<<<< HEAD
                <div className='mb-4'>
                  <div className='w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300'>
=======
                <div className="mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                <div className="mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                    {service.icon}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  </div>
                </div>

                {/* Service Info */}
<<<<<<< HEAD
                <h3 className='text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-200'>
=======
<<<<<<< HEAD
<<<<<<< HEAD
                <h3 className='text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-200'>
=======
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-200">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  {service.name}
                </h3>
                <p className='text-gray-400 mb-3 line-clamp-2'>
                  {service.tagline}
                </p>
<<<<<<< HEAD
                <p className='text-sm text-gray-500 mb-4 line-clamp-3'>                  {service.description}
                </p>

                {/* Price */}
=======
<<<<<<< HEAD
                <p className='text-sm text-gray-500 mb-4 line-clamp-3'>
=======
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-200">
                  {service.name}
                </h3>
                <p className="text-gray-400 mb-3 line-clamp-2">
                  {service.tagline}
                </p>
                <p className="text-sm text-gray-500 mb-4 line-clamp-3">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                <p className="text-sm text-gray-500 mb-4 line-clamp-3">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  {service.description}
                </p>

                {/* Price */}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                <div className='mb-4'>
                  <span className='text-2xl font-bold text-cyan-400'>
                    {service.price}
                  </span>
                  <span className='text-gray-500 text-sm ml-2'>/month</span>
<<<<<<< HEAD
=======
=======
                <div className="mb-4">
                  <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                  <span className="text-gray-500 text-sm ml-2">/month</span>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                </div>

                {/* Stats */}
                <div className='flex items-center justify-between mb-4 text-sm'>
                  <div className='flex items-center space-x-1 text-yellow-400'>
                    <Star className='w-4 h-4 fill-current' />
                    <span className='text-white'>{service.rating}</span>
                    <span className='text-gray-500'>({service.reviews})</span>
                  </div>
<<<<<<< HEAD
                  <div className='flex items-center space-x-1 text-gray-400'>
                    <Users className='w-4 h-4' />                    <span>{service.customers.toLocaleString()}</span>
=======
<<<<<<< HEAD
                  <div className='flex items-center space-x-1 text-gray-400'>
                    <Users className='w-4 h-4' />
=======
                <div className="mb-4">
                  <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                  <span className="text-gray-500 text-sm ml-2">/month</span>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between mb-4 text-sm">
                  <div className="flex items-center space-x-1 text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-white">{service.rating}</span>
                    <span className="text-gray-500">({service.reviews})</span>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-400">
                    <Users className="w-4 h-4" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  <div className="flex items-center space-x-1 text-gray-400">
                    <Users className="w-4 h-4" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                    <span>{service.customers.toLocaleString()}</span>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  </div>
                </div>

                {/* Features Preview */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                <div className='mb-4'>
                  <div className='text-xs text-gray-500 mb-2'>
                    Key Features:
                  </div>
                  <div className='space-y-1'>
<<<<<<< HEAD
=======
=======
                <div className="mb-4">
                  <div className="text-xs text-gray-500 mb-2">Key Features:</div>
                  <div className="space-y-1">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div
                        key={idx}
                        className='flex items-center space-x-2 text-sm text-gray-400'
                      >
                        <CheckCircle className='w-3 h-3 text-cyan-400' />
                        <span className='line-clamp-1'>{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 3 && (
<<<<<<< HEAD
                      <div className='text-xs text-cyan-400'>                        +{service.features.length - 3} more features
=======
<<<<<<< HEAD
                      <div className='text-xs text-cyan-400'>
=======
                <div className="mb-4">
                  <div className="text-xs text-gray-500 mb-2">Key Features:</div>
                  <div className="space-y-1">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                        <CheckCircle className="w-3 h-3 text-cyan-400" />
                        <span className="line-clamp-1">{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <div className="text-xs text-cyan-400">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                      <div className="text-xs text-cyan-400">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                        +{service.features.length - 3} more features
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                      </div>
                    )}
                  </div>
                </div>

                {/* Market Info */}
<<<<<<< HEAD
                <div className='mb-4 text-xs text-gray-500'>
                  <div className='flex items-center justify-between'>                    <span>Market Size: {service.marketSize}</span>
=======
<<<<<<< HEAD
<<<<<<< HEAD
                <div className='mb-4 text-xs text-gray-500'>
                  <div className='flex items-center justify-between'>
=======
                <div className="mb-4 text-xs text-gray-500">
                  <div className="flex items-center justify-between">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                <div className="mb-4 text-xs text-gray-500">
                  <div className="flex items-center justify-between">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                    <span>Market Size: {service.marketSize}</span>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                    <span>Growth: {service.growthRate}</span>
                  </div>
                </div>

                {/* CTA Button */}
<<<<<<< HEAD
                <button className='w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-3 px-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 group-hover:scale-105'>                  Learn More
=======
<<<<<<< HEAD
<<<<<<< HEAD
                <button className='w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-3 px-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 group-hover:scale-105'>
=======
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-3 px-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 group-hover:scale-105">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-3 px-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 group-hover:scale-105">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  Learn More
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                </button>
              </motion.div>
            ))}
          </div>
        ) : (
<<<<<<< HEAD
          <div className='space-y-6'>            {filteredServices.map((service, index) => (
=======
<<<<<<< HEAD
<<<<<<< HEAD
          <div className='space-y-6'>
=======
          <div className="space-y-6">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          <div className="space-y-6">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            {filteredServices.map((service, index) => (
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
<<<<<<< HEAD
                className='group bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-lg border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300'
=======
<<<<<<< HEAD
<<<<<<< HEAD
                className='group bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-lg border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300'
=======
                className="group bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-lg border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              >
                <div className='flex items-start space-x-6'>
                  {/* Service Icon */}
<<<<<<< HEAD
                  <div className='flex-shrink-0'>
                    <div className='w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300'>                      {service.icon}
=======
<<<<<<< HEAD
                  <div className='flex-shrink-0'>
                    <div className='w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300'>
=======
                className="group bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-lg border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300"
              >
                <div className="flex items-start space-x-6">
                  {/* Service Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                      {service.icon}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                    </div>
                  </div>

                  {/* Service Details */}
<<<<<<< HEAD
                  <div className='flex-1 min-w-0'>
                    <div className='flex items-start justify-between mb-3'>
=======
<<<<<<< HEAD
<<<<<<< HEAD
                  <div className='flex-1 min-w-0'>
                    <div className='flex items-start justify-between mb-3'>
=======
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-3">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                      <div>
                        <h3 className='text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-200'>
                          {service.name}
                        </h3>
                        <p className='text-lg text-cyan-300 mb-2'>
                          {service.tagline}
                        </p>
                        <p className='text-gray-400 mb-4'>
                          {service.description}
                        </p>
                      </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                      <div className='text-right'>
                        <div className='text-3xl font-bold text-cyan-400 mb-2'>
                          {service.price}
                        </div>
                        <div className='text-gray-500 text-sm'>/month</div>
                        <span
                          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service.category)} text-white mt-2`}
<<<<<<< HEAD
                        >                          {service.category}
=======
                        >
=======
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-200">
                          {service.name}
                        </h3>
                        <p className="text-lg text-cyan-300 mb-2">
                          {service.tagline}
                        </p>
                        <p className="text-gray-400 mb-4">
                          {service.description}
                        </p>
                      </div>
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                      <div className="text-right">
                        <div className="text-3xl font-bold text-cyan-400 mb-2">{service.price}</div>
                        <div className="text-gray-500 text-sm">/month</div>
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service.category)} text-white mt-2`}>
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                          {service.category}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                        </span>
                      </div>
                    </div>

                    {/* Stats Row */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                    <div className='flex items-center space-x-8 mb-4 text-sm'>
                      <div className='flex items-center space-x-1 text-yellow-400'>
                        <Star className='w-4 h-4 fill-current' />
                        <span className='text-white font-medium'>
                          {service.rating}
                        </span>
                        <span className='text-gray-500'>
                          ({service.reviews} reviews)
                        </span>
<<<<<<< HEAD
=======
=======
                    <div className="flex items-center space-x-8 mb-4 text-sm">
                      <div className="flex items-center space-x-1 text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-white font-medium">{service.rating}</span>
                        <span className="text-gray-500">({service.reviews} reviews)</span>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                      </div>
                      <div className='flex items-center space-x-1 text-gray-400'>
                        <Users className='w-4 h-4' />
                        <span className='text-white font-medium'>
                          {service.customers.toLocaleString()}
                        </span>
                        <span className='text-gray-500'>customers</span>
                      </div>
                      <div className='flex items-center space-x-1 text-gray-400'>
                        <TrendingUp className='w-4 h-4' />
                        <span className='text-white font-medium'>
                          {service.growthRate}
                        </span>
                        <span className='text-gray-500'>growth</span>
                      </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                      <div className='flex items-center space-x-1 text-gray-400'>
                        <Globe className='w-4 h-4' />
                        <span className='text-white font-medium'>
                          {service.marketSize}
                        </span>
<<<<<<< HEAD
                        <span className='text-gray-500'>market</span>                      </div>
                    </div>

                    {/* Features */}
=======
                        <span className='text-gray-500'>market</span>
=======
                    <div className="flex items-center space-x-8 mb-4 text-sm">
                      <div className="flex items-center space-x-1 text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-white font-medium">{service.rating}</span>
                        <span className="text-gray-500">({service.reviews} reviews)</span>
                      </div>
                      <div className="flex items-center space-x-1 text-gray-400">
                        <Users className="w-4 h-4" />
                        <span className="text-white font-medium">{service.customers.toLocaleString()}</span>
                        <span className="text-gray-500">customers</span>
                      </div>
                      <div className="flex items-center space-x-1 text-gray-400">
                        <TrendingUp className="w-4 h-4" />
                        <span className="text-white font-medium">{service.growthRate}</span>
                        <span className="text-gray-500">growth</span>
                      </div>
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                      <div className="flex items-center space-x-1 text-gray-400">
                        <Globe className="w-4 h-4" />
                        <span className="text-white font-medium">{service.marketSize}</span>
                        <span className="text-gray-500">market</span>
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                      </div>
                    </div>

                    {/* Features */}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                    <div className='mb-4'>
                      <div className='text-sm text-gray-500 mb-2'>
                        Key Features:
                      </div>
                      <div className='grid grid-cols-2 gap-2'>
                        {service.features.slice(0, 6).map((feature, idx) => (
                          <div
                            key={idx}
                            className='flex items-center space-x-2 text-sm text-gray-400'
                          >
<<<<<<< HEAD
                            <CheckCircle className='w-3 h-3 text-cyan-400 flex-shrink-0' />                            <span>{feature}</span>
=======
                            <CheckCircle className='w-3 h-3 text-cyan-400 flex-shrink-0' />
=======
                    <div className="mb-4">
                      <div className="text-sm text-gray-500 mb-2">Key Features:</div>
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.slice(0, 6).map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                            <CheckCircle className="w-3 h-3 text-cyan-400 flex-shrink-0" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                    <div className="mb-4">
                      <div className="text-sm text-gray-500 mb-2">Key Features:</div>
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.slice(0, 6).map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                            <CheckCircle className="w-3 h-3 text-cyan-400 flex-shrink-0" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                            <span>{feature}</span>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                    <div className='flex items-center justify-between'>
                      <button className='bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-3 px-6 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 group-hover:scale-105'>
                        Learn More
                      </button>
                      <div className='text-xs text-gray-500'>
                        Launched:{' '}
<<<<<<< HEAD
                        {new Date(service.launchDate).toLocaleDateString()}                      </div>
=======
                        {new Date(service.launchDate).toLocaleDateString()}
=======
                    <div className="flex items-center justify-between">
                      <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover: from-cyan-600 hover:to-blue-700 text-white font-medium py-3 px-6 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 group-hover:scale-105">
                        Learn More
                      </button>
                      <div className="text-xs text-gray-500">
                        Launched: {new Date(service.launchDate).toLocaleDateString()}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                    <div className="flex items-center justify-between">
                      <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover: from-cyan-600 hover:to-blue-700 text-white font-medium py-3 px-6 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 group-hover:scale-105">
                        Learn More
                      </button>
                      <div className="text-xs text-gray-500">
                        Launched: {new Date(service.launchDate).toLocaleDateString()}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                      </div>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* No Results */}
        {filteredServices.length === 0 && (
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          <div className='text-center py-20'>
            <div className='w-24 h-24 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6'>
              <Search className='w-12 h-12 text-cyan-400' />
            </div>
            <h3 className='text-2xl font-bold text-white mb-2'>
              No services found
            </h3>
            <p className='text-gray-400 mb-6'>
              Try adjusting your search terms or filters to find what you're
<<<<<<< HEAD
              looking for.            </p>
=======
              looking for.
=======
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-cyan-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
            <p className="text-gray-400 mb-6">
              Try adjusting your search terms or filters to find what you're looking for.
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-cyan-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
            <p className="text-gray-400 mb-6">
              Try adjusting your search terms or filters to find what you're looking for.
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            </p>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All Services');
<<<<<<< HEAD
                setSelectedPriceRange('all');
              }}
              className='bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-3 px-6 rounded-xl transition-all duration-200'            >
=======
<<<<<<< HEAD
<<<<<<< HEAD
                setSelectedPriceRange('all');
              }}
              className='bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-3 px-6 rounded-xl transition-all duration-200'
=======
                setSelectedPriceRange('all')
              }}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-3 px-6 rounded-xl transition-all duration-200"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                setSelectedPriceRange('all')
              }}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-3 px-6 rounded-xl transition-all duration-200"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            >
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              Clear All Filters
            </button>
          </div>
        )}
      </div>

      {/* CTA Section */}
<<<<<<< HEAD
      <div className='bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-t border-cyan-500/20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center'>          <motion.div
=======
<<<<<<< HEAD
<<<<<<< HEAD
      <div className='bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-t border-cyan-500/20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center'>
=======
      <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-t border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-t border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          <motion.div
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
<<<<<<< HEAD
            <h2 className='text-4xl font-bold text-white mb-6'>
=======
<<<<<<< HEAD
<<<<<<< HEAD
            <h2 className='text-4xl font-bold text-white mb-6'>
=======
            <h2 className="text-4xl font-bold text-white mb-6">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              Ready to Transform Your Business?
            </h2>
            <p className='text-xl text-cyan-300 mb-8 max-w-3xl mx-auto'>
              Our team of experts is ready to help you implement the perfect
              solution for your needs. Get in touch today and discover how our
              innovative services can drive your success.
            </p>
            <div className='flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6'>
              <a
<<<<<<< HEAD
                href='/contact'
                className='bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-4 px-8 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105'              >
                Get Started Today
              </a>
              <a
                href='/pricing'
                className='border border-cyan-500/50 text-cyan-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 font-medium py-4 px-8 rounded-xl transition-all duration-200'              >
=======
<<<<<<< HEAD
                href='/contact'
                className='bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-4 px-8 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105'
=======
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-cyan-300 mb-8 max-w-3xl mx-auto">
              Our team of experts is ready to help you implement the perfect solution for your needs. 
              Get in touch today and discover how our innovative services can drive your success.
            </p>
            <div className="flex flex-col sm: flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-4 px-8 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-4 px-8 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              >
                Get Started Today
              </a>
              <a
<<<<<<< HEAD
<<<<<<< HEAD
                href='/pricing'
                className='border border-cyan-500/50 text-cyan-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 font-medium py-4 px-8 rounded-xl transition-all duration-200'
=======
                href="/pricing"
                className="border border-cyan-500/50 text-cyan-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 font-medium py-4 px-8 rounded-xl transition-all duration-200"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                href="/pricing"
                className="border border-cyan-500/50 text-cyan-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 font-medium py-4 px-8 rounded-xl transition-all duration-200"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              >
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                View Pricing Plans
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  );
  filtered = filtered.filter (service => service.name.toLowerCase () .includes (searchTerm.toLowerCase () ) || service.description.toLowerCase () .includes (searchTerm.toLowerCase () ) || service.tagline.toLowerCase () .includes (searchTerm.toLowerCase () ) 
}//Sort services filtered.sort ( (a, b) => {
  switch (sortBy) {
  case 'popular': return b.customers - a.customers;
case 'rating': return b.rating - a.rating;
case 'newest': return new Date (b.launchDate) .getTime () - new Date (a.launchDate) .getTime ();
case 'price-low': setFilteredServices (filtered) 
}, [searchTerm, selectedCategory, selectedPriceRange, sortBy]);

};
description"content=" Explore our complete portfolio of innovative micro SAAS, AI, IT, and emerging technology services. Find the perfect solution for your business needs."/> <meta name=" keywords"content=" micro SAAS, AI services, IT solutions, quantum computing, emerging technology, business solutions, Zion Tech Group"/> </Head> left: `$ {
  Math.random () * 100 
}%`;
top: `$ {
  Math.random () * 100 
}%` 

}/>) ) 
}</div> <div className=" relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"> <motion.div initial= {
  {
  opacity: 0, y: 30 

}animate= {
  {
  opacity: 1, y: 0 

}transition= {
  {
  duration: 0.8 

}> <h1 className=" text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6"> <span className=" bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"> Comprehensive </span> <br /> <span className=" text-white">Services Showcase</span> </h1> </motion.div>) ) 
}</div> /> </div> </div> </motion.div> </div> </div> key= {
  category.name 
}onClick= {
  () => setSelectedCategory (category.name) 
}className= {
  `flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 $ {
  selectedCategory === category.name ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25' : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white' 
}` 
}> </span> </button>) ) 
}</div> </option>) ) 
}</select> {
  /* Sort Options */ 
}<select </option>) ) 
}</select> <button onClick= {
  () => setViewMode ('grid') 
}className= {
  `p-2 rounded-md transition-all duration-200 $ {
  viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white' 
}` 
}> <Grid3X3 className=" w-4 h-4"/> </button> <button onClick= {
  () => setViewMode ('list') 
}className= {
  `p-2 rounded-md transition-all duration-200 $ {
  viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-white' 
}` 
}> <List className=" w-4 h-4"/> </button> </div> </div> </div> </div> </div> + {
  service.features.length - 3 
}more features </div>) 
}</div> </div> Learn More </button> </motion.div>) ) 
}</div> </span> </div> </div> </div>) ) 
}</div> </div> </div> </div> </div> </div> </motion.div>) ) 
}</div>) 
}</div> <h3 className=" text-2xl font-bold text-white mb-2">No services found</h3> <p className=" text-gray-400 mb-6"> Try adjusting your search terms or filters to find what you're looking for. </p> <button onClick= {
  () => {
  > Clear All Filters </button> </div>) 
}</div> <motion.div initial= {
  {
  opacity: 0, y: 30 

}whileInView= {
  {
  opacity: 1, y: 0 

}transition= {
  {
  duration: 0.8 

}viewport= {
  {
  once: true 

<<<<<<< HEAD
}> <h2 className=" text-4xl font-bold text-white mb-6"> Ready to Transform Your Business? </h2> <p className=" text-xl text-cyan-300 mb-8 max-w-3xl mx-auto"> Our team of experts is ready to help you implement the perfect solution for your needs. Get in touch today and discover how our innovative services can drive your success. </p> <a href=" /contact"className=" bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-4 px-8 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105"> Get Started Today </a> <a href=" /pricing"className=" border border-cyan-500/50 text-cyan-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 font-medium py-4 px-8 rounded-xl transition-all duration-200" > View Pricing Plans </a> </div> </motion.div> </div> </div> </Layout>) 
=======
}> <h2 className=" text-4xl font-bold text-white mb-6"> Ready to Transform Your Business? </h2> <p className=" text-xl text-cyan-300 mb-8 max-w-3xl mx-auto"> Our team of experts is ready to help you implement the perfect solution for your needs. Get in touch today and discover how our innovative services can drive your success. </p> <a href=" /contact"className=" bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-4 px-8 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105"> Get Started Today </a> <a href=" /pricing"className=" border border-cyan-500/50 text-cyan-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 font-medium py-4 px-8 rounded-xl transition-all duration-200" > View Pricing Plans </a> </div> </motion.div> </div> </div> </Layout>) 
=======
  )
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  )
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

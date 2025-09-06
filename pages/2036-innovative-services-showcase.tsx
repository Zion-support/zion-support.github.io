import React, { useState } from 'react';
import SEO from '../components/SEO';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
<<<<<<< HEAD
<<<<<<< HEAD
import {
  Brain,
  Rocket,
  Shield,
  Zap,
  Target,
  Atom,
  Globe,
  Cpu,
  Lock,
  Cloud,
  Settings,
  Eye,
  Award,
  Clock,
  Star,
  TrendingUp,
  Users,
  Building,
  Lightbulb,
  ArrowRight,
  Filter,
  Search,
  Grid,
  List,
  Phone,
  Mail,
  MapPin,;
} from 'lucide-react';
import { real2036InnovativeServices } from '../data/real-2036-innovative-services';
import { real2036SpecializedServices } from '../data/real-2036-specialized-services';

=======
import { 
  Brain, Rocket, Shield, Zap, Target, Atom, Globe, 
  Cpu, Lock, Cloud, Settings, Eye, Award, Clock, 
  Star, TrendingUp, Users, Building, Lightbulb;
  ArrowRight, Filter, Search, Grid, List, Phone, Mail, MapPin
} from 'lucide-react';
import { real2036InnovativeServices } from '../data/real-2036-innovative-services';
import { real2036SpecializedServices } from '../data/real-2036-specialized-services';
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
import { 
  Brain, Rocket, Shield, Zap, Target, Atom, Globe, 
  Cpu, Lock, Cloud, Settings, Eye, Award, Clock, 
  Star, TrendingUp, Users, Building, Lightbulb;
  ArrowRight, Filter, Search, Grid, List, Phone, Mail, MapPin
} from 'lucide-react';
import { real2036InnovativeServices } from '../data/real-2036-innovative-services';
import { real2036SpecializedServices } from '../data/real-2036-specialized-services';
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
<<<<<<< HEAD
<<<<<<< HEAD
  website: 'https://ziontechgroup.com',
=======
  website: 'https://ziontechgroup.com'
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
};

const categories = [
  'All ServicesAI & DataQuantum TechnologySpace TechnologyIT InfrastructureCybersecurityEdge ComputingBlockchain';
  'ManufacturingHealthcare AIEmerging TechnologyBiotechnologyHuman-Computer InteractionMetaverseAutonomous SystemsClimate Technology'
];

const categoryIcons: { [key: string]: React.ReactNode } = {
<<<<<<< HEAD
  'AI & Data': <Brain className='w-5 h-5' />,
  'Quantum Technology': <Atom className='w-5 h-5' />,
  'Space Technology': <Rocket className='w-5 h-5' />,
  'IT Infrastructure': <Cpu className='w-5 h-5' />,
  Cybersecurity: <Shield className='w-5 h-5' />,
  'Edge Computing': <Zap className='w-5 h-5' />,
  Blockchain: <Globe className='w-5 h-5' />,
  Manufacturing: <Building className='w-5 h-5' />,
  'Healthcare AI': <Eye className='w-5 h-5' />,
  'Emerging Technology': <Lightbulb className='w-5 h-5' />,
  Biotechnology: <Target className='w-5 h-5' />,
  'Human-Computer Interaction': <Users className='w-5 h-5' />,
  Metaverse: <Globe className='w-5 h-5' />,
  'Autonomous Systems': <Rocket className='w-5 h-5' />,
  'Climate Technology': <Globe className='w-5 h-5' />,
=======
  website: 'https://ziontechgroup.com'
};

const categories = [
  'All ServicesAI & DataQuantum TechnologySpace TechnologyIT InfrastructureCybersecurityEdge ComputingBlockchain';
  'ManufacturingHealthcare AIEmerging TechnologyBiotechnologyHuman-Computer InteractionMetaverseAutonomous SystemsClimate Technology'
];

const categoryIcons: { [key: string]: React.ReactNode } = {
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  'AI & Data': <Brain className="w-5 h-5" />;
  'Quantum Technology': <Atom className="w-5 h-5" />;
  'Space Technology': <Rocket className="w-5 h-5" />;
  'IT Infrastructure': <Cpu className="w-5 h-5" />;
  'Cybersecurity': <Shield className="w-5 h-5" />;
  'Edge Computing': <Zap className="w-5 h-5" />;
  'Blockchain': <Globe className="w-5 h-5" />;
  'Manufacturing': <Building className="w-5 h-5" />;
  'Healthcare AI': <Eye className="w-5 h-5" />;
  'Emerging Technology': <Lightbulb className="w-5 h-5" />;
  'Biotechnology': <Target className="w-5 h-5" />;
  'Human-Computer Interaction': <Users className="w-5 h-5" />;
  'Metaverse': <Globe className="w-5 h-5" />;
  'Autonomous Systems': <Rocket className="w-5 h-5" />;
  'Climate Technology': <Globe className="w-5 h-5" />
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
};

export default function InnovativeServicesShowcase2036() {
  const [selectedCategory, setSelectedCategory] = useState('All Services');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
<<<<<<< HEAD
<<<<<<< HEAD
  const [sortBy, setSortBy] = useState<
    'name' | 'price' | 'rating' | 'marketSize'
  >('name');
=======
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'rating' | 'marketSize'>('name');
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

  const allServices = [...real2036InnovativeServices, ...real2036SpecializedServices];

  const filteredServices = allServices.filter(service => {
<<<<<<< HEAD
    const matchesCategory =
      selectedCategory === 'All Services' ||
      service.category === selectedCategory;
    const matchesSearch =
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
=======
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'rating' | 'marketSize'>('name');

  const allServices = [...real2036InnovativeServices, ...real2036SpecializedServices];

  const filteredServices = allServices.filter(service => {
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    const matchesCategory = selectedCategory === 'All Services' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price':
<<<<<<< HEAD
<<<<<<< HEAD
        return (
          parseFloat(a.price.replace('$', '').replace(',', '')) -
          parseFloat(b.price.replace('$', '').replace(',', ''))
        );
      case 'rating':
        return (b.rating || 0) - (a.rating || 0);
      case 'marketSize':
        return (
          parseFloat(b.marketSize?.replace('$', '').replace('B', '') || '0') -
          parseFloat(a.marketSize?.replace('$', '').replace('B', '') || '0')
        );
      default:
        return a.name.localeCompare(b.name);
=======
        return parseFloat(a.price.replace('$', '').replace(, '')) - parseFloat(b.price.replace('$', '').replace(, ''));
      case 'rating':
        return (b.rating || 0) - (a.rating || 0);
      case 'marketSize':
        return parseFloat(b.marketSize?.replace('$', '').replace('B', '') || '0') - parseFloat(a.marketSize?.replace('$', '').replace('B', '') || '0');
      default: return a.name.localeCompare(b.name)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        return parseFloat(a.price.replace('$', '').replace(, '')) - parseFloat(b.price.replace('$', '').replace(, ''));
      case 'rating':
        return (b.rating || 0) - (a.rating || 0);
      case 'marketSize':
        return parseFloat(b.marketSize?.replace('$', '').replace('B', '') || '0') - parseFloat(a.marketSize?.replace('$', '').replace('B', '') || '0');
      default: return a.name.localeCompare(b.name)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
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

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
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

  return (
    <Layout>
<<<<<<< HEAD
<<<<<<< HEAD
      <SEO
        title='2036 Innovative Services Showcase | Zion Tech Group'
        description='Discover our cutting-edge 2036 innovative micro SAAS services, IT solutions, and AI platforms. Transform your business with next-generation technology.'
        keywords='2036 services, innovative micro SAAS, AI platforms, quantum technology, space technology, IT solutions, Zion Tech Group'
=======
      <SEO 
        title="2036 Innovative Services Showcase | Zion Tech Group"
        description="Discover our cutting-edge 2036 innovative micro SAAS services, IT solutions, and AI platforms. Transform your business with next-generation technology."
        keywords="2036 services, innovative micro SAAS, AI platforms, quantum technology, space technology, IT solutions, Zion Tech Group"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-cyan-900/20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.1),transparent_50%)]" />
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`}}
              animate={{
                y: [0, -100, 0];
                opacity: [0.3, 1, 0.3]}}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
<<<<<<< HEAD
                delay: Math.random() * 2,
              }}
=======
      <SEO 
        title="2036 Innovative Services Showcase | Zion Tech Group"
        description="Discover our cutting-edge 2036 innovative micro SAAS services, IT solutions, and AI platforms. Transform your business with next-generation technology."
        keywords="2036 services, innovative micro SAAS, AI platforms, quantum technology, space technology, IT solutions, Zion Tech Group"
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-cyan-900/20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.1),transparent_50%)]" />
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`}}
              animate={{
                y: [0, -100, 0];
                opacity: [0.3, 1, 0.3]}}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2}}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                delay: Math.random() * 2}}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            />
          ))}
        </div>

<<<<<<< HEAD
<<<<<<< HEAD
        <div className='relative z-10 text-center max-w-6xl mx-auto'>
          <motion.h1
            className='text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent'
=======
        <div className="relative z-10 text-center max-w-6xl mx-auto">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        <div className="relative z-10 text-center max-w-6xl mx-auto">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            2036 Innovative Services
          </motion.h1>
<<<<<<< HEAD
<<<<<<< HEAD
          <motion.p
            className='text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed'
=======
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
<<<<<<< HEAD
<<<<<<< HEAD
            Experience the future of technology with our cutting-edge micro SAAS
            services, AI platforms, and quantum solutions. Transform your
            business with next-generation innovation.
          </motion.p>
          <motion.div
            className='flex flex-col sm:flex-row gap-4 justify-center'
=======
            Experience the future of technology with our cutting-edge micro SAAS services,
            AI platforms, and quantum solutions. Transform your business with next-generation innovation.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            Experience the future of technology with our cutting-edge micro SAAS services,
            AI platforms, and quantum solutions. Transform your business with next-generation innovation.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
<<<<<<< HEAD
<<<<<<< HEAD
            <button className='px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25'>
              Explore Services
            </button>
            <button className='px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105'>
=======
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
              Explore Services
            </button>
            <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
              Explore Services
            </button>
            <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              Contact Us
            </button>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
<<<<<<< HEAD
<<<<<<< HEAD
      <section className='py-12 px-4 bg-gradient-to-r from-gray-900 to-gray-800'>
        <div className='max-w-6xl mx-auto'>
          <motion.div
            className='grid grid-cols-1 md:grid-cols-3 gap-8'
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      <section className="py-12 px-4 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
<<<<<<< HEAD
<<<<<<< HEAD
            <div className='text-center p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-cyan-400 transition-all duration-300'>
              <Phone className='w-8 h-8 mx-auto mb-4 text-cyan-400' />
              <h3 className='text-lg font-semibold mb-2'>Phone</h3>
              <p className='text-gray-300'>{contactInfo.mobile}</p>
=======
            <div className="text-center p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-cyan-400 transition-all duration-300">
              <Phone className="w-8 h-8 mx-auto mb-4 text-cyan-400" />
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-gray-300">{contactInfo.mobile}</p>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            </div>
            <div className="text-center p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-cyan-400 transition-all duration-300">
              <Mail className="w-8 h-8 mx-auto mb-4 text-cyan-400" />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-300">{contactInfo.email}</p>
            </div>
<<<<<<< HEAD
            <div className='text-center p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-cyan-400 transition-all duration-300'>
              <MapPin className='w-8 h-8 mx-auto mb-4 text-cyan-400' />
              <h3 className='text-lg font-semibold mb-2'>Address</h3>
              <p className='text-gray-300'>{contactInfo.address}</p>
=======
            <div className="text-center p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-cyan-400 transition-all duration-300">
              <Phone className="w-8 h-8 mx-auto mb-4 text-cyan-400" />
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-gray-300">{contactInfo.mobile}</p>
            </div>
            <div className="text-center p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-cyan-400 transition-all duration-300">
              <Mail className="w-8 h-8 mx-auto mb-4 text-cyan-400" />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-300">{contactInfo.email}</p>
            </div>
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            <div className="text-center p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-cyan-400 transition-all duration-300">
              <MapPin className="w-8 h-8 mx-auto mb-4 text-cyan-400" />
              <h3 className="text-lg font-semibold mb-2">Address</h3>
              <p className="text-gray-300">{contactInfo.address}</p>
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
<<<<<<< HEAD
<<<<<<< HEAD
      <section className='py-20 px-4'>
        <div className='max-w-7xl mx-auto'>
          {/* Section Header */}
          <motion.div
            className='text-center mb-16'
=======
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
<<<<<<< HEAD
<<<<<<< HEAD
            <h2 className='text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>
              Revolutionary Services
            </h2>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              Discover our comprehensive portfolio of innovative micro SAAS
              services, AI platforms, and cutting-edge technology solutions
              designed for the future.
=======
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Revolutionary Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our comprehensive portfolio of innovative micro SAAS services,
              AI platforms, and cutting-edge technology solutions designed for the future.
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Revolutionary Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our comprehensive portfolio of innovative micro SAAS services,
              AI platforms, and cutting-edge technology solutions designed for the future.
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            </p>
          </motion.div>

          {/* Filters and Controls */}
<<<<<<< HEAD
<<<<<<< HEAD
          <motion.div
            className='mb-12 space-y-6'
=======
          <motion.div 
            className="mb-12 space-y-6"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          <motion.div 
            className="mb-12 space-y-6"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Search and View Controls */}
<<<<<<< HEAD
<<<<<<< HEAD
            <div className='flex flex-col lg:flex-row gap-4 justify-between items-center'>
              <div className='relative flex-1 max-w-md'>
                <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
=======
            <div className="flex flex-col lg:flex-row gap-4 justify-between items-center">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300"
                />
              </div>
              
              <div className="flex gap-4 items-center">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300"
                >
                  <option value="name">Sort by Name</option>
                  <option value="price">Sort by Price</option>
                  <option value="rating">Sort by Rating</option>
                  <option value="marketSize">Sort by Market Size</option>
                </select>
<<<<<<< HEAD

                <div className='flex bg-gray-800/50 border border-gray-700 rounded-lg p-1'>
=======
            <div className="flex flex-col lg:flex-row gap-4 justify-between items-center">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300"
                />
              </div>
              
              <div className="flex gap-4 items-center">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300"
                >
                  <option value="name">Sort by Name</option>
                  <option value="price">Sort by Price</option>
                  <option value="rating">Sort by Rating</option>
                  <option value="marketSize">Sort by Market Size</option>
                </select>
                
                <div className="flex bg-gray-800/50 border border-gray-700 rounded-lg p-1">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                
                <div className="flex bg-gray-800/50 border border-gray-700 rounded-lg p-1">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded ${viewMode === 'grid' ? 'bg-cyan-500 text-black' : 'text-gray-400 hover:text-white'}`}
                  >
<<<<<<< HEAD
<<<<<<< HEAD
                    <Grid className='w-5 h-5' />
=======
                    <Grid className="w-5 h-5" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                    <Grid className="w-5 h-5" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded ${viewMode === 'list' ? 'bg-cyan-500 text-black' : 'text-gray-400 hover:text-white'}`}
                  >
<<<<<<< HEAD
<<<<<<< HEAD
                    <List className='w-5 h-5' />
=======
                    <List className="w-5 h-5" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                    <List className="w-5 h-5" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  </button>
                </div>
              </div>
            </div>

            {/* Category Filters */}
<<<<<<< HEAD
<<<<<<< HEAD
            <div className='flex flex-wrap gap-3 justify-center'>
              {categories.map(category => (
=======
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg border transition-all duration-300 flex items-center gap-2 ${
                    selectedCategory === category
                      ? 'bg-cyan-500 text-black border-cyan-500'
                      : 'bg-gray-800/50 text-gray-300 border-gray-700 hover:border-cyan-400 hover:text-cyan-400'
                  }`}
                >
<<<<<<< HEAD
<<<<<<< HEAD
                  {categoryIcons[category] || <Star className='w-4 h-4' />}
=======
                  {categoryIcons[category] || <Star className="w-4 h-4" />}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  {categoryIcons[category] || <Star className="w-4 h-4" />}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
<<<<<<< HEAD
<<<<<<< HEAD
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className={
              viewMode === 'grid'
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
                : 'space-y-6'
            }
=======
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          >
            {sortedServices.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className={`bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700 rounded-xl p-6 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 ${
                  viewMode === 'list' ? 'flex gap-6' : ''
                }`}
              >
                {viewMode === 'list' && (
<<<<<<< HEAD
<<<<<<< HEAD
                  <div className='flex-shrink-0'>
                    <div className='w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center text-2xl'>
                      {categoryIcons[service.category] || (
                        <Star className='w-8 h-8' />
                      )}
=======
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center text-2xl">
                      {categoryIcons[service.category] || <Star className="w-8 h-8" />}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                    </div>
                  </div>
                )}
                
                <div className="flex-1">
                  {/* Service Header */}
                  <div className="mb-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-cyan-400 font-semibold">{service.price}</span>
                        {service.period && <span className="text-gray-400 text-sm">{service.period}</span>}
                      </div>
                    </div>
                    <p className="text-cyan-400 font-medium mb-2">{service.tagline}</p>
                    <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
                  </div>

                  {/* Service Details */}
                  <div className="space-y-4">
                    {/* Category and Rating */}
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 bg-gray-800 text-cyan-400 text-sm rounded-full border border-gray-700">
                        {service.category}
                      </span>
                      {service.rating && (
<<<<<<< HEAD
                        <div className='flex items-center gap-1'>
                          <Star className='w-4 h-4 text-yellow-400 fill-current' />
                          <span className='text-sm text-gray-300'>
                            {service.rating}
                          </span>
=======
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center text-2xl">
                      {categoryIcons[service.category] || <Star className="w-8 h-8" />}
                    </div>
                  </div>
                )}
                
                <div className="flex-1">
                  {/* Service Header */}
                  <div className="mb-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-cyan-400 font-semibold">{service.price}</span>
                        {service.period && <span className="text-gray-400 text-sm">{service.period}</span>}
                      </div>
                    </div>
                    <p className="text-cyan-400 font-medium mb-2">{service.tagline}</p>
                    <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
                  </div>

                  {/* Service Details */}
                  <div className="space-y-4">
                    {/* Category and Rating */}
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 bg-gray-800 text-cyan-400 text-sm rounded-full border border-gray-700">
                        {service.category}
                      </span>
                      {service.rating && (
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-gray-300">{service.rating}</span>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-gray-300">{service.rating}</span>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                        </div>
                      )}
                    </div>

                    {/* Market Size */}
                    {service.marketSize && (
<<<<<<< HEAD
<<<<<<< HEAD
                      <div className='text-sm text-gray-400'>
                        Market Size:{' '}
                        <span className='text-green-400 font-medium'>
                          {service.marketSize}
                        </span>
=======
                      <div className="text-sm text-gray-400">
                        Market Size: <span className="text-green-400 font-medium">{service.marketSize}</span>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                      <div className="text-sm text-gray-400">
                        Market Size: <span className="text-green-400 font-medium">{service.marketSize}</span>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                      </div>
                    )}

                    {/* Features */}
                    <div>
<<<<<<< HEAD
<<<<<<< HEAD
                      <h4 className='text-sm font-semibold text-gray-300 mb-2'>
                        Key Features:
                      </h4>
                      <div className='grid grid-cols-1 gap-1'>
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <div
                            key={idx}
                            className='flex items-center gap-2 text-sm text-gray-400'
                          >
                            <div className='w-1.5 h-1.5 bg-cyan-400 rounded-full' />
=======
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                      <div className="grid grid-cols-1 gap-1">
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                      <div className="grid grid-cols-1 gap-1">
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                            {feature}
                          </div>
                        ))}
                        {service.features.length > 4 && (
<<<<<<< HEAD
<<<<<<< HEAD
                          <div className='text-xs text-gray-500 mt-1'>
=======
                          <div className="text-xs text-gray-500 mt-1">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                          <div className="text-xs text-gray-500 mt-1">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                            +{service.features.length - 4} more features
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Target Audience */}
                    {service.targetAudience && (
                      <div>
<<<<<<< HEAD
<<<<<<< HEAD
                        <h4 className='text-sm font-semibold text-gray-300 mb-2'>
                          Target Audience:
                        </h4>
                        <p className='text-sm text-gray-400'>
                          {service.targetAudience}
                        </p>
=======
                        <h4 className="text-sm font-semibold text-gray-300 mb-2">Target Audience:</h4>
                        <p className="text-sm text-gray-400">{service.targetAudience}</p>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                        <h4 className="text-sm font-semibold text-gray-300 mb-2">Target Audience:</h4>
                        <p className="text-sm text-gray-400">{service.targetAudience}</p>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                      </div>
                    )}

                    {/* Competitive Advantage */}
                    {service.competitiveAdvantage && (
                      <div>
<<<<<<< HEAD
<<<<<<< HEAD
                        <h4 className='text-sm font-semibold text-gray-300 mb-2'>
                          Competitive Advantage:
                        </h4>
                        <p className='text-sm text-gray-400'>
                          {service.competitiveAdvantage}
                        </p>
=======
                        <h4 className="text-sm font-semibold text-gray-300 mb-2">Competitive Advantage:</h4>
                        <p className="text-sm text-gray-400">{service.competitiveAdvantage}</p>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                        <h4 className="text-sm font-semibold text-gray-300 mb-2">Competitive Advantage:</h4>
                        <p className="text-sm text-gray-400">{service.competitiveAdvantage}</p>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                      </div>
                    )}

                    {/* CTA Button */}
<<<<<<< HEAD
<<<<<<< HEAD
                    <div className='mt-6'>
=======
                    <div className="mt-6">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                      <a
                        href={service.link}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
                      >
                        Learn More
<<<<<<< HEAD
                        <ArrowRight className='w-4 h-4' />
=======
                    <div className="mt-6">
                      <a
                        href={service.link}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                        <ArrowRight className="w-4 h-4" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Results Summary */}
<<<<<<< HEAD
<<<<<<< HEAD
          <motion.div
            className='mt-12 text-center text-gray-400'
=======
          <motion.div 
            className="mt-12 text-center text-gray-400"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          <motion.div 
            className="mt-12 text-center text-gray-400"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Showing {sortedServices.length} of {allServices.length} services
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
<<<<<<< HEAD
<<<<<<< HEAD
      <section className='py-20 px-4 bg-gradient-to-r from-gray-900 to-gray-800'>
        <div className='max-w-4xl mx-auto text-center'>
=======
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto text-center">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto text-center">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
<<<<<<< HEAD
<<<<<<< HEAD
            <h2 className='text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>
=======
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the future of technology with our innovative services. 
              Contact us today to discuss how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${contactInfo.email}`}
<<<<<<< HEAD
                className='px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25'
=======
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the future of technology with our innovative services. 
              Contact us today to discuss how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${contactInfo.email}`}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              >
                Get Started Today
              </a>
              <a
                href={`tel:${contactInfo.mobile}`}
<<<<<<< HEAD
<<<<<<< HEAD
                className='px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105'
=======
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover: bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover: bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              >
                Call Us Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
<<<<<<< HEAD
<<<<<<< HEAD
  );


};
const itemVariants = {
  hidden: {
  y: 20, opacity: 0 
};
visible: {
  y: 0, opacity: 1, transition: {
  duration: 0.5 


};

}%`;
top: `$ {
  Math.random () * 100 
}%` 

}animate= {
  {
  y: [0, -100, 0], opacity: [0.3, 1, 0.3] 

}transition= {
  {
  duration: 3 + Math.random () * 2, repeat: Infinity, delay: Math.random () * 2 

}/>) ) 
}</div> <div className="relative z-10 text-center max-w-6xl mx-auto" > <motion.h1 > 2036 Innovative Services </motion.h1> <motion.p > Experience the future of technology with our cutting-edge micro SAAS services;
AI platforms, and quantum solutions. Transform your business with next-generation innovation. </motion.p> <motion.div > <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25" > Explore Services </button> <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105" > Contact Us </button> </motion.div> </div> </section> </div> </motion.div> </div> </section> > <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" > Revolutionary Services </h2> <p className="text-xl text-gray-300 max-w-3xl mx-auto" > Discover our comprehensive portfolio of innovative micro SAAS services;
AI platforms, and cutting-edge technology solutions designed for the future. </p> </motion.div> {
  /* Filters and Controls */ 
}<motion.div /> </div> <div className="flex gap-4 items-center" > <select > <option value="name" >Sort by Name</option> <option value="price" >Sort by Price</option> <option value="rating" >Sort by Rating</option> <option value="marketSize" >Sort by Market Size</option> </select> <div className="flex bg-gray-800/50 border border-gray-700 rounded-lg p-1" > <button onClick= {
  () => setViewMode ('grid') 
}className= {
  `p-2 rounded $ {
  viewMode === 'grid'? 'bg-cyan-500 text-black': 'text-gray-400 hover:text-white' 
}` 
}> <Grid className="w-5 h-5" /> </button> <button onClick= {
  () => setViewMode ('list') 
}className= {
  `p-2 rounded $ {
  viewMode === 'list'? 'bg-cyan-500 text-black': 'text-gray-400 hover:text-white' 
}` 
}> <List className="w-5 h-5" /> </button> </div> </div> </div> key= {
  category 
}onClick= {
  () => setSelectedCategory (category) 
}className= {
  `px-4 py-2 rounded-lg border transition-all duration-300 flex items-center gap-2 $ {
  selectedCategory === category ? 'bg-cyan-500 text-black border-cyan-500': 'bg-gray-800/50 text-gray-300 border-gray-700 hover:border-cyan-400 hover:text-cyan-400' 
}` 
}> </button>) ) 
}</div> </motion.div> {
  /* Services Grid */ 
}<motion.div > {
  sortedServices.map ( (service, index) => (<motion.div key= {
  service.id 
}variants= {
  itemVariants 
}className= {
  `bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700 rounded-xl p-6 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 $ {
  viewMode === 'list'? 'flex gap-6': '' 
}` 
}> </div> </div>) 
}</div>) 
}</div> </div>) 
}{
  /* Features */ 
}<div> + {
  service.features.length - 4 
}more features </div>) 
}</div> </div> {
  /* Target Audience */ 
}{
  service.targetAudience && (<div> <h4 className="text-sm font-semibold text-gray-300 mb-2" >Target Audience:</h4> <p className="text-sm text-gray-400" > {
  service.targetAudience 
}</p> </div>) 
}{
  /* Competitive Advantage */ 
}{
  service.competitiveAdvantage && (<div> <h4 className="text-sm font-semibold text-gray-300 mb-2" >Competitive Advantage:</h4> <p className="text-sm text-gray-400" > {
  service.competitiveAdvantage 
}</p> </div>) 
}> Learn More <ArrowRight className="w-4 h-4" /> </Link> </div> </div> </div> </motion.div>) ) 
}</motion.div> {
  /* Results Summary */ 
}<motion.div > Showing {
  sortedServices.length 
}of {
  allServices.length 
}services </motion.div> </div> </section> <motion.div initial= {
  {
  opacity: 0, y: 20 

}whileInView= {
  {
  opacity: 1, y: 0 

}transition= {
  {
  duration: 0.6 

}viewport= {
  {
  once: true 

}> <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" > Ready to Transform Your Business? </h2> <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto" > Join the future of technology with our innovative services. Contact us today to discuss how we can help you achieve your goals. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center" > <a > Get Started Today </Link> <a 
=======
  )
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  )
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

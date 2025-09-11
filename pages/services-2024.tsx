<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useState, useMemo } from 'react',
import Head from 'next/head';
import { motion } from 'framer-motion';

<<<<<<< HEAD
import {;
  Search, Filter, Star, Users, TrendingUp,;
  Brain, Atom, Cpu, Shield, Database, Cloud,;
  ArrowRight, CheckCircle, Zap, Sparkles;
} from 'lucide-react',;


import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

import {
  Search
  Filter
  Star
  Users
  TrendingUp
  Brain
  Atom
  Cpu
  Shield
  Database
  Cloud
  ArrowRight
  CheckCircle
  Zap
  Sparkles;} from 'lucide-react';
import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import {
  Search,
  Filter,
  Star,
  Users,
  TrendingUp,
  Brain,
  Atom,
  Cpu,
  Shield,
  Database,
  Cloud,
  ArrowRight,
  CheckCircle,
  Zap,;
  Sparkles,;} from 'lucide-react';
import {;
  Search, Filter, Star, Users, TrendingUp,;
  Brain, Atom, Cpu, Shield, Database, Cloud,;
  ArrowRight, CheckCircle, Zap, Sparkles;
} from 'lucide-react',;
=======



class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
=======

import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { realMicroSaasServices2024 } from '../data/2024-real-micro-saas-services';
import { innovativeITServices2024 } from '../data/2024-innovative-it-services';
import UltraFuturisticBackground2034 from '../components/backgrounds/UltraFuturisticBackground2034';
import Link from 'next/link';
<<<<<<< HEAD


<<<<<<< HEAD
const Services2024Page: React.FC = () => {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<
    'name' | 'price' | 'rating' | 'customers'
  >('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
<<<<<<< HEAD
  // Combine all services
  const allServices = [
    ...realMicroSaasServices2024
    ...innovativeITServices2024
  ];
  // Filter and sort services
  const filteredServices = useMemo(() => {
    let filtered = allServices.filter(service => {
      const matchesSearch =
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) |
        service.tagline.toLowerCase().includes(searchQuery.toLowerCase()) |
        service.features.some(feature =>
          feature.toLowerCase().includes(searchQuery.toLowerCase())
        );
      const matchesCategory =
        selectedCategory === 'all' |
        (selectedCategory === 'ai' && service.variant.includes('ai')) |
        (selectedCategory === 'quantum' &&
          service.variant.includes('security')) |
        (selectedCategory === 'it' && service.variant.includes('it')) |
        (selectedCategory === 'api' && service.variant.includes('api')) |
        (selectedCategory === 'cloud' && service.variant.includes('cloud')) |
        (selectedCategory === 'marketing' &&
          service.variant.includes('marketing')) |
        (selectedCategory === 'project' &&
          service.variant.includes('project')) |
        (selectedCategory === 'customer' &&
          service.variant.includes('customer'));
      return matchesSearch && matchesCategory;    });
    // Sort services
    filtered.sort((a, b) => {
      let aValue: any, bValue: any;
      switch (sortBy) {
        case 'price':
          aValue = parseFloat(a.price.replace(/[^0-9.]/g, ''));
          bValue = parseFloat(b.price.replace(/[^0-9.]/g, ''));
=======
=======
const Services2024Page: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<;
    'name' | 'price' | 'rating' | 'customers';
  >('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


  // Combine all services;
  const allServices = [;
    ...realMicroSaasServices2024,;
    ...innovativeITServices2024,;
  ];

  // Filter and sort services;
  const filteredServices = useMemo(() => {;
    let filtered = allServices && allServices.filter(service => {;
      const matchesSearch =;
        service && service.name.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()) ||;
        service && service.tagline.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()) ||;
        service && service.features.some(feature =>;
          feature && feature.toLowerCase().includes(searchQuery && searchQuery.toLowerCase());
        );

      const matchesCategory =;
        selectedCategory === 'all' ||;
        (selectedCategory === 'ai' && service && service.variant.includes('ai')) ||;
        (selectedCategory === 'quantum' &&;
          service && service.variant.includes('security')) ||;
        (selectedCategory === 'it' && service && service.variant.includes('it')) ||;
        (selectedCategory === 'api' && service && service.variant.includes('api')) ||;
        (selectedCategory === 'cloud' && service && service.variant.includes('cloud')) ||;
        (selectedCategory === 'marketing' &&;
          service && service.variant.includes('marketing')) ||;
        (selectedCategory === 'project' &&;
          service && service.variant.includes('project')) ||;
        (selectedCategory === 'customer' &&;
          service && service.variant.includes('customer'));

      return matchesSearch && matchesCategory;    });

    // Sort services;
    filtered && filtered.sort((a, b) => {;

      let aValue: any, bValue: any;
      switch (sortBy) {;
        case 'price':;
          aValue = parseFloat(a && a.price.replace(/[^0-9.]/g, ''));
          bValue = parseFloat(b && b.price.replace(/[^0-9.]/g, ''));

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          break;
        case 'rating':
          aValue = a.rating;
          bValue = b.rating;
          break;
        case 'customers':
          aValue = parseInt(a.customers.replace(/[^0-9]/g, ''));
          bValue = parseInt(b.customers.replace(/[^0-9]/g, ''));
          break;
        default:
          aValue = a.name.toLowerCase();
          bValue = b.name.toLowerCase();
      }
<<<<<<< HEAD
      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });
    return filtered;
  }, [allServices, searchQuery, selectedCategory, sortBy, sortOrder]);
  const categories = [
    {
      id: 'all'
      name: 'All Services'
      icon: Sparkles
      count: allServices.length
    }
    {
      id: 'ai'
      name: 'AI & ML'
      icon: Brain
      count: allServices.filter(s => s.variant.includes('ai')).length
    }
    {
      id: 'quantum'
      name: 'Quantum & Security'
      icon: Shield
      count: allServices.filter(s => s.variant.includes('security')).length
    }
    {
      id: 'it'
      name: 'Enterprise IT'
      icon: Cpu
      count: allServices.filter(s => s.variant.includes('it')).length
    }
    {
      id: 'api'
      name: 'API & Development'
      icon: Database
      count: allServices.filter(s => s.variant.includes('api')).length
    }
    {
      id: 'cloud'
      name: 'Cloud & DevOps'
      icon: Cloud
      count: allServices.filter(s => s.variant.includes('cloud')).length
    }
    {
      id: 'marketing'
      name: 'Marketing & SEO'
      icon: TrendingUp
      count: allServices.filter(s => s.variant.includes('marketing')).length
    }
    {
      id: 'project'
      name: 'Project Management'
      icon: Users
      count: allServices.filter(s => s.variant.includes('project')).length
    }
    {
      id: 'customer'
      name: 'Customer Success'
      icon: CheckCircle
      count: allServices.filter(s => s.variant.includes('customer')).length
    },  ];
=======
=======
          break;
        case 'rating':;
          aValue = a && a.rating;
          bValue = b && b.rating;
          break;
        case 'customers':;
          aValue = parseInt(a && a.customers.replace(/[^0-9]/g, ''));
          bValue = parseInt(b && b.customers.replace(/[^0-9]/g, ''));
          break;
        default:;
          aValue = a && a.name.toLowerCase();
          bValue = b && b.name.toLowerCase();
      }
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          break;
        case 'rating':;
          a_value = a.rating;
          b_value = b.rating;
          break;
        case 'customers':;
          a_value = parse_int (a.customers.replace (/[^0 - 9]/g, ''));
          b_value = parse_int (b.customers.replace (/[^0 - 9]/g, ''));
          break;


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const getVariantIcon = (variant: string) => {
    if (variant.includes('ai')) return Brain;
    if (variant.includes('security')) return Shield;
    if (variant.includes('it')) return Cpu;
    if (variant.includes('api')) return Database;
    if (variant.includes('cloud')) return Cloud;
    if (variant.includes('marketing')) return TrendingUp;
    if (variant.includes('project')) return Users;
    if (variant.includes('customer')) return CheckCircle;
<<<<<<< HEAD
<<<<<<< HEAD
    return Sparkles;  }
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    return Sparkles
  };


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const getVariantColor = (variant: string) => {
    if (variant.includes('ai')) return 'from-blue-500 to-cyan-500';
    if (variant.includes('security')) return 'from-red-500 to-pink-500';
    if (variant.includes('it')) return 'from-green-500 to-emerald-500';
    if (variant.includes('api')) return 'from-purple-500 to-violet-500';
    if (variant.includes('cloud')) return 'from-indigo-500 to-blue-500';
    if (variant.includes('marketing')) return 'from-yellow-500 to-orange-500';
    if (variant.includes('project')) return 'from-teal-500 to-cyan-500';
    if (variant.includes('customer')) return 'from-pink-500 to-rose-500';
<<<<<<< HEAD
<<<<<<< HEAD



    return 'from-gray-500 to-slate-500';  }
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======

=======
=======



=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const Services2024Page: React.FC = () => {;
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'rating' | 'customers'>('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  // Combine all services;
  const allServices = [...realMicroSaasServices2024, ...innovativeITServices2024],;
  // Filter and sort services;
  const filteredServices = useMemo(() => {;
    const filtered = allServices.filter(service => {;
      const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||;
                           service.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||;
                           service.features.some(feature => feature.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCategory = selectedCategory === 'all' ||;
                             (selectedCategory === 'ai' && service.variant.includes('ai')) ||;
                             (selectedCategory === 'quantum' && service.variant.includes('security')) ||;
                             (selectedCategory === 'it' && service.variant.includes('it')) ||;
                             (selectedCategory === 'api' && service.variant.includes('api')) ||;
                             (selectedCategory === 'cloud' && service.variant.includes('cloud')) ||;
                             (selectedCategory === 'marketing' && service.variant.includes('marketing')) ||;
                             (selectedCategory === 'project' && service.variant.includes('project')) ||;
                             (selectedCategory === 'customer' && service.variant.includes('customer'));
      return matchesSearch && matchesCategory;
    });
    // Sort services;
    filtered.sort((a, b) => {;
      let aValue: any, bValue: any,;
      switch (sortBy) {;
        case 'price':;
          aValue = parseFloat(a.price.replace(/[^0-9.]/g, '')),;
          bValue = parseFloat(b.price.replace(/[^0-9.]/g, '')),;
          break,;
        case 'rating':;
          aValue = a.rating;
          bValue = b.rating;
          break,;
        case 'customers':;
          aValue = parseInt(a.customers.replace(/[^0-9]/g, '')),;
          bValue = parseInt(b.customers.replace(/[^0-9]/g, '')),;
          break,;
        default: aValue = a.name.toLowerCase();
          bValue = b.name.toLowerCase();
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
      if (sortOrder === 'asc') {;
        return aValue > bValue ? 1 : -1;
      } else {;
        return aValue < bValue ? 1 : -1;
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    });
    return filtered;
  }, [allServices, searchQuery, selectedCategory, sortBy, sortOrder]),;
  const categories = [;
    { id: 'all', name: 'All Services', icon: Sparkles, count: allServices.length },;
    { id: 'ai', name: 'AI & ML', icon: Brain, count: allServices.filter(s => s.variant.includes('ai')).length },;
    { id: 'quantum', name: 'Quantum & Security', icon: Shield, count: allServices.filter(s => s.variant.includes('security')).length },;
    { id: 'it', name: 'Enterprise IT', icon: Cpu, count: allServices.filter(s => s.variant.includes('it')).length },;
    { id: 'api', name: 'API & Development', icon: Database, count: allServices.filter(s => s.variant.includes('api')).length },;
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud, count: allServices.filter(s => s.variant.includes('cloud')).length },;
    { id: 'marketing', name: 'Marketing & SEO', icon: TrendingUp, count: allServices.filter(s => s.variant.includes('marketing')).length },;
    { id: 'project', name: 'Project Management', icon: Users, count: allServices.filter(s => s.variant.includes('project')).length },;
    { id: 'customer', name: 'Customer Success', icon: CheckCircle, count: allServices.filter(s => s.variant.includes('customer')).length   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],


<<<<<<< HEAD
  const getVariantIcon = (variant: string) => {
    if (variant.includes('ai')) return Brain,
    if (variant.includes('security')) return Shield,
    if (variant.includes('it')) return Cpu,
    if (variant.includes('api')) return Database,
    if (variant.includes('cloud')) return Cloud,
    if (variant.includes('marketing')) return TrendingUp,
    if (variant.includes('project')) return Users,
    if (variant.includes('customer')) return CheckCircle,
    return Sparkles
  },
  const getVariantColor = (variant: string) => {
    if (variant.includes('ai')) return 'from-blue-500 to-cyan-500',
    if (variant.includes('security')) return 'from-red-500 to-pink-500',
    if (variant.includes('it')) return 'from-green-500 to-emerald-500',
    if (variant.includes('api')) return 'from-purple-500 to-violet-500',
    if (variant.includes('cloud')) return 'from-indigo-500 to-blue-500',
    if (variant.includes('marketing')) return 'from-yellow-500 to-orange-500',
    if (variant.includes('project')) return 'from-teal-500 to-cyan-500',
    if (variant.includes('customer')) return 'from-pink-500 to-rose-500',
    return 'from-gray-500 to-slate-500'
  };
<<<<<<< HEAD
    return 'from-gray-500 to-slate-500';  }
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

const Services2024Page: React.FC = () => {;
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'rating' | 'customers'>('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  // Combine all services;
  const allServices = [...realMicroSaasServices2024, ...innovativeITServices2024],;
  // Filter and sort services;
  const filteredServices = useMemo(() => {;
    const filtered = allServices.filter(service => {;
      const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||;
                           service.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||;
                           service.features.some(feature => feature.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCategory = selectedCategory === 'all' ||;
                             (selectedCategory === 'ai' && service.variant.includes('ai')) ||;
                             (selectedCategory === 'quantum' && service.variant.includes('security')) ||;
                             (selectedCategory === 'it' && service.variant.includes('it')) ||;
                             (selectedCategory === 'api' && service.variant.includes('api')) ||;
                             (selectedCategory === 'cloud' && service.variant.includes('cloud')) ||;
                             (selectedCategory === 'marketing' && service.variant.includes('marketing')) ||;
                             (selectedCategory === 'project' && service.variant.includes('project')) ||;
                             (selectedCategory === 'customer' && service.variant.includes('customer'));
      return matchesSearch && matchesCategory;
    });
    // Sort services;
    filtered.sort((a, b) => {;
      let aValue: any, bValue: any,;
      switch (sortBy) {;
        case 'price':;
          aValue = parseFloat(a.price.replace(/[^0-9.]/g, '')),;
          bValue = parseFloat(b.price.replace(/[^0-9.]/g, '')),;
          break,;
        case 'rating':;
          aValue = a.rating;
          bValue = b.rating;
          break,;
        case 'customers':;
          aValue = parseInt(a.customers.replace(/[^0-9]/g, '')),;
          bValue = parseInt(b.customers.replace(/[^0-9]/g, '')),;
          break,;
        default: aValue = a.name.toLowerCase();
          bValue = b.name.toLowerCase();
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
      if (sortOrder === 'asc') {;
        return aValue > bValue ? 1 : -1;
      } else {;
        return aValue < bValue ? 1 : -1;
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    });
    return filtered;
  }, [allServices, searchQuery, selectedCategory, sortBy, sortOrder]),;
  const categories = [;
    { id: 'all', name: 'All Services', icon: Sparkles, count: allServices.length },;
    { id: 'ai', name: 'AI & ML', icon: Brain, count: allServices.filter(s => s.variant.includes('ai')).length },;
    { id: 'quantum', name: 'Quantum & Security', icon: Shield, count: allServices.filter(s => s.variant.includes('security')).length },;
    { id: 'it', name: 'Enterprise IT', icon: Cpu, count: allServices.filter(s => s.variant.includes('it')).length },;
    { id: 'api', name: 'API & Development', icon: Database, count: allServices.filter(s => s.variant.includes('api')).length },;
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud, count: allServices.filter(s => s.variant.includes('cloud')).length },;
    { id: 'marketing', name: 'Marketing & SEO', icon: TrendingUp, count: allServices.filter(s => s.variant.includes('marketing')).length },;
    { id: 'project', name: 'Project Management', icon: Users, count: allServices.filter(s => s.variant.includes('project')).length },;
    { id: 'customer', name: 'Customer Success', icon: CheckCircle, count: allServices.filter(s => s.variant.includes('customer')).length   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const getVariantIcon = (variant: string) => {
    if (variant.includes('ai')) return Brain,
    if (variant.includes('security')) return Shield,
    if (variant.includes('it')) return Cpu,
    if (variant.includes('api')) return Database,
    if (variant.includes('cloud')) return Cloud,
    if (variant.includes('marketing')) return TrendingUp,
    if (variant.includes('project')) return Users,
    if (variant.includes('customer')) return CheckCircle,
    return Sparkles
  },
  const getVariantColor = (variant: string) => {
    if (variant.includes('ai')) return 'from-blue-500 to-cyan-500',
    if (variant.includes('security')) return 'from-red-500 to-pink-500',
    if (variant.includes('it')) return 'from-green-500 to-emerald-500',
    if (variant.includes('api')) return 'from-purple-500 to-violet-500',
    if (variant.includes('cloud')) return 'from-indigo-500 to-blue-500',
    if (variant.includes('marketing')) return 'from-yellow-500 to-orange-500',
    if (variant.includes('project')) return 'from-teal-500 to-cyan-500',
    if (variant.includes('customer')) return 'from-pink-500 to-rose-500',
<<<<<<< HEAD
    return 'from-gray-500 to-slate-500'
  },
  return (
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    return 'from-gray-500 to-slate-500'
  },
  return (
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        />;
        <link rel='canonical' href='https://ziontechgroup && ziontechgroup.com/services-2024' />;
      </Head>;
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <>
      <Head>
        <title>2024 Revolutionary Services - Zion Tech Group</title>
        <meta name="description" content="Discover our revolutionary 2024 services including AI automation, quantum security, and enterprise IT solutions. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="AI services, quantum security, enterprise IT, automation, 2024 technology, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/services-2024" />
      </Head>
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        {/* Hero Section */}

        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div

              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}


      <UltraFuturisticBackground2034 intensity={0.8} theme="quantum" />
      <div className="relative z-10 min-h-screen">
        {/* Hero Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
<<<<<<< HEAD
      <UltraFuturisticBackground2034 intensity={0.8} theme='quantum' />
      <div className='relative z-10 min-h-screen'>
        {/* Hero Section */}
        <section className='pt-32 pb-20 px-4 sm:px-6 lg:px-8'>
          <div className='max-w-7xl mx-auto text-center'>            <motion.div
=======
      <UltraFuturisticBackground2034 intensity={0.8} theme='quantum' />
      <div className='relative z-10 min-h-screen'>
        {/* Hero Section */}

        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
      <UltraFuturisticBackground2034 intensity={0.8} theme="quantum" />
      <div className="relative z-10 min-h-screen">
        {/* Hero Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              animate={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            >
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border border-cyan-500/30 rounded-full px-6 py-2 mb-8">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-400 font-medium">2024 Revolutionary Services</span>
              </div>
<<<<<<< HEAD
<<<<<<< HEAD
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <h1 className='text-5xl md:text-7xl font-bold text-white mb-6'>
                <span className='bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent'>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
<<<<<<< HEAD
=======

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                  Future-Ready
                </span>
                <br />
                <span className='text-white'>Solutions</span>
              </h1>

              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border border-cyan-500/30 rounded-full px-6 py-2 mb-8">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-400 font-medium">2024 Revolutionary Services</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  Future-Ready
                </span>
                <br />
                <span className="text-white">Solutions</span>
              </h1>
<<<<<<< HEAD
<<<<<<< HEAD
              


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <p className='text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed'>
                Experience the next generation of AI, quantum security, and
                enterprise IT solutions. Transform your business with our
                revolutionary 2024 service portfolio.
              </p>
              {/* Stats */}
              <div className='grid grid-cols-1 md:grid-cols-4 gap-8 mb-16'>
                <div className='text-center'>
                  <div className='text-3xl font-bold text-cyan-400 mb-2'>
                    {allServices.length}
                  </div>
                  <div className='text-gray-400'>Revolutionary Services</div>
<<<<<<< HEAD
=======

              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border border-cyan-500/30 rounded-full px-6 py-2 mb-8">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-400 font-medium">2024 Revolutionary Services</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Future-Ready
                </span>
                <br />
                <span className="text-white">Solutions</span>
              </h1>
              
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Experience the next generation of AI, quantum security, and enterprise IT solutions.
                Transform your business with our revolutionary 2024 service portfolio.
              </p>
              {/* Stats */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Experience the next generation of AI, quantum security, and enterprise IT solutions. 
                Transform your business with our revolutionary 2024 service portfolio.
              </p>

              {/* Stats */}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{allServices.length}</div>
                  <div className="text-gray-400">Revolutionary Services</div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">17</div>
                  <div className="text-gray-400">Service Categories</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-400 mb-2">4.8</div>
                  <div className="text-gray-400">Average Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">1000+</div>
                  <div className="text-gray-400">Happy Customers</div>
                </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </div>
            </motion.div>
          </div>
        </section>
<<<<<<< HEAD
<<<<<<< HEAD
              transition={{ duration: 0 && 0.8 }}>;
        {/* Search and Filters */}
        {/* Search and Filters */}
        <section className='px-4 sm:px-6 lg:px-8 mb-16'>
          <div className='max-w-7xl mx-auto'>
            <div className='bg-black/50 border border-cyan-500/30 rounded-2xl p-6 backdrop-blur-sm'>
              <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>
                {/* Search */}
                <div className='lg:col-span-2'>
                  <div className='relative'>
                    <Search className='absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400' />
        {/* Search and Filters */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section className="px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="bg-black/50 border border-cyan-500/30 rounded-2xl p-6 backdrop-blur-sm">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
=======

              transition={{ duration: 0 && 0.8 }}>;
              <div className='inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border border-cyan-500/30 rounded-full px-6 py-2 mb-8'>;
                <Sparkles className='w-5 h-5 text-cyan-400' />;
                <span className='text-cyan-400 font-medium'>;
                  2024 Revolutionary Services;
                </span>;
              </div>;
              <h1 className='text-5xl md:text-7xl font-bold text-white mb-6'>;
                <span className='bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent'>;
                  Future-Ready;
                </span>;
                <br />;
                <span className='text-white'>Solutions</span>;
              </h1>;
              <p className='text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed'>;
                Experience the next generation of AI, quantum security, and;
                enterprise IT solutions. Transform your business with our;
                revolutionary 2024 service portfolio.;
              </p>;
              {/* Stats */}
              <div className='grid grid-cols-1 md:grid-cols-4 gap-8 mb-16'>;
                <div className='text-center'>;
                  <div className='text-3xl font-bold text-cyan-400 mb-2'>;
                    {allServices && allServices.length}
                  </div>;
                  <div className='text-gray-400'>Revolutionary Services</div>;
                </div>;
                <div className='text-center'>;
                  <div className='text-3xl font-bold text-purple-400 mb-2'>;
                    17;
                  </div>;
                  <div className='text-gray-400'>Service Categories</div>;
                </div>;
                <div className='text-center'>;
                  <div className='text-3xl font-bold text-pink-400 mb-2'>;
                    4 && 4.8;
                  </div>;
                  <div className='text-gray-400'>Average Rating</div>;
                </div>;
                <div className='text-center'>;
                  <div className='text-3xl font-bold text-green-400 mb-2'>;
                    1000+;
                  </div>;
                  <div className='text-gray-400'>Happy Customers</div>                </div>;
              </div>;
            </motion && motion.div>;
          </div>;
        </section>;


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Search and Filters */}


                    <input
                      type="text"
                      placeholder="Search services by name, features, or description..."
                      value={searchQuery}
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                {/* Search */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                <div className="lg:col-span-2">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search services by name, features, or description..."
                      value={searchQuery  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-12 pr-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Sort */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                <div className="flex space-x-2">

<<<<<<< HEAD
                    onChange={(e) => setSelectedCategory(e.target.value)} className="w-full px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-200">
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name} ({category.count})
                      </option>
                    ))}
</select>;
                </div>;
                {/* Sort */}
                <div className='flex space-x-2'>;
                {/* Sort */}
                <div className="flex space-x-2">
=======
                      onChange={e => setSearchQuery(e && e.target.value)}
                      className='w-full pl-12 pr-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-200'                    />;
                  </div>;
                </div>;
=======
                      onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-12 pr-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-200"
                    />
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
                  </div>
                </div>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                {/* Category Filter */}
                <div>;
                  <select
                    value={selectedCategory}


<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                    ))}

                  </select>;
                </div>;

=======
                {/* Sort */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                <div className="flex space-x-2">

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  <select
                    value={sortBy}
                    onChange={e => setSortBy(e && e.target.value as any)}
                    className='flex-1 px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-200';
        default:;
          a_value = a.name.toLowerCase ();
          b_value = b.name.toLowerCase ();
      }
      // Check condition
if ( {) {
  $2
}
        return a_value > b_value ? 1 : -1;
      } else {
        return a_value < b_value ? 1 : -1;
      }
    });
;
    return filtered;
  }, [all_services, search_query, selected_category, sort_by, sort_order]);
;
  const categories = [;
    {
      id: 'all',
      name: 'All Services',
      icon: Sparkles,
      count: all_services.length,
    },
    {
      id: 'ai',
      name: 'AI & ML',
      icon: Brain,
      count: all_services.filter (string => s.variant.includes ('ai')).length,
    },
    {
      id: 'quantum',
      name: 'Quantum & Security',
      icon: Shield,
      count: all_services.filter (string => s.variant.includes ('security')).length,
    },
    {
      id: 'it',
      name: 'Enterprise IT',
      icon: Cpu,
      count: all_services.filter (string => s.variant.includes ('it')).length,
    },
    {
      id: 'api',
      name: 'API & Development',
      icon: Database,
      count: all_services.filter (string => s.variant.includes ('api')).length,
    },
    {
      id: 'cloud',
      name: 'Cloud & DevOps',
      icon: Cloud,
      count: all_services.filter (string => s.variant.includes ('cloud')).length,
    },
    {
      id: 'marketing',
      name: 'Marketing & SEO',
      icon: TrendingUp,
      count: all_services.filter (string => s.variant.includes ('marketing')).length,
    },
    {
      id: 'project',
      name: 'Project Management',
      icon: Users,
      count: all_services.filter (string => s.variant.includes ('project')).length,
    },
    {
      id: 'customer',
      name: 'Customer Success',
      icon: CheckCircle,
      count: all_services.filter (string => s.variant.includes ('customer')).length,
    },  ];
;
  const getVariantIcon = (variant: string) =>: any {
    if () return Brain) {
  $2
}
    if () return Shield) {
  $2
}
    if () return Cpu) {
  $2
}
    if () return Database) {
  $2
}
    if () return Cloud) {
  $2
}
    if () return TrendingUp) {
  $2
}
    if () return Users) {
  $2
}
    if () return CheckCircle) {
  $2
}
    return Sparkles;  }
;
  const getVariantColor = (variant: string) =>: any {
    if () return 'from - blue - 500 to - cyan - 500') {
  $2
}
    if () return 'from - red - 500 to - pink - 500') {
  $2
}
    if () return 'from - green - 500 to - emerald - 500') {
  $2
}
    if () return 'from - purple - 500 to - violet - 500') {
  $2
}
    if () return 'from - indigo - 500 to - blue - 500') {
  $2
}
    if () return 'from - yellow - 500 to - orange - 500') {
  $2
}
    if () return 'from - teal - 500 to - cyan - 500') {
  $2
}
    if () return 'from - pink - 500 to - rose - 500') {
  $2
}
    return 'from - gray - 500 to - slate - 500';  }
;
  return (
    <>;
      <Head>;
        <title > 2024 Revolutionary Services - Zion Tech Group</title>;
        <meta;
          name='description';
          content='Discover our revolutionary 2024 services including AI automation, quantum security, and enterprise IT solutions. Transform your business with cutting - edge technology.';
        />;
        <meta;
          name='keywords';
          content='AI services, quantum security, enterprise IT, automation, 2024 technology, Zion Tech Group';
        />;
        <link rel='canonical' href='https://ziontechgroup.com / services - 2024' />;
      </Head>;
      <UltraFuturisticBackground2034 intensity={0.8} theme='quantum' />;
      <div className='relative z - 10 min - h-screen'>;
        {/* Hero Section */}
        <section className='pt - 32 pb - 20 px - 4 sm:px - 6 lg:px - 8'>;
          <div className='max - w-7xl mx - auto text - center'>            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
            >;
              <div className='inline - flex items - center space - x-2 bg - gradient - to - r from - cyan - 500 / 20 to - purple - 600 / 20 border border - cyan - 500 / 30 rounded - full px - 6 py - 2 mb - 8'>;
                <Sparkles className='w - 5 h - 5 text - cyan - 400' />;
                <span className='text - cyan - 400 font - medium'>;
                  2024 Revolutionary Services;
                </span>;
              </div>;
              <h1 className='text - 5xl md:text - 7xl font - bold text - white mb - 6'>;
                <span className='bg - gradient - to - r from - cyan - 400 via - purple - 500 to - pink - 500 bg - clip - text text - transparent'>;
                  Future - Ready;
                </span>;
                <br />;
                <span className='text - white'>Solutions</span>;
              </h1>;
              <p className='text - xl md:text - 2xl text - gray - 300 mb - 12 max - w-4xl mx - auto leading - relaxed'>;
                Experience the next generation of AI, quantum security, and;
                enterprise IT solutions. Transform your business with our;
                revolutionary 2024 service portfolio.;
              </p>;
              {/* Stats */}
              <div className='grid grid - cols - 1 md:grid - cols - 4 gap - 8 mb - 16'>;
                <div className='text - center'>;
                  <div className='text - 3xl font - bold text - cyan - 400 mb - 2'>;
                    {all_services.length}
                  </div>;
                  <div className='text - gray - 400'>Revolutionary Services</div>;
                </div>;
                <div className='text - center'>;
                  <div className='text - 3xl font - bold text - purple - 400 mb - 2'>;
                    17;
                  </div>;
                  <div className='text - gray - 400'>Service Categories</div>;
                </div>;
                <div className='text - center'>;
                  <div className='text - 3xl font - bold text - pink - 400 mb - 2'>;
                    4.8;
                  </div>;
                  <div className='text - gray - 400'>Average Rating</div>;
                </div>;
                <div className='text - center'>;
                  <div className='text - 3xl font - bold text - green - 400 mb - 2'>;
                    1000+;
                  </div>;
                  <div className='text - gray - 400'>Happy Customers</div>                </div>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
        {/* Search and Filters */}
        <section className='px - 4 sm:px - 6 lg:px - 8 mb - 16'>;
          <div className='max - w-7xl mx - auto'>;
            <div className='bg - black / 50 border border - cyan - 500 / 30 rounded - 2xl p - 6 backdrop - blur - sm'>;
              <div className='grid grid - cols - 1 lg:grid - cols - 4 gap - 6'>;
                {/* Search */}
                <div className='lg:col - span - 2'>;
                  <div className='relative'>;
                    <Search className='absolute left - 4 top - 1/2 transform -translate - y-1 / 2 w - 5 h - 5 text - gray - 400' />;
                    <input;
                      type='text';
                      placeholder='Search services by name, features, or description...';
                      value={search_query}
                      on_change={e => setSearchQuery (e.target.value)}
                      className='w - full pl - 12 pr - 4 py - 3 bg - black / 50 border border - cyan - 500 / 30 rounded - lg text - white placeholder - gray - 400 focus:outline - none focus:border - cyan - 400 focus:ring - 1 focus:ring - cyan - 400 transition - all duration - 200'                    />;
                  </div>;
                </div>;
                {/* Category Filter */}
                <div>;
                  <select;
                    value={selected_category}
                    on_change={e => setSelectedCategory (e.target.value)}
                    className='w - full px - 4 py - 3 bg - black / 50 border border - cyan - 500 / 30 rounded - lg text - white focus:outline - none focus:border - cyan - 400 focus:ring - 1 focus:ring - cyan - 400 transition - all duration - 200';
                  >;
                    {categories.map (category => (                      <option key={category.id} value={category.id}>;
                        {category.name} ({category.count});
                      </option>))}
                  </select>;
                </div>;
                {/* Sort */}
                <div className='flex space - x-2'>;
                  <select;
                    value={sort_by}
                    on_change={e => setSortBy (e.target.value as any)}
                    className='flex - 1 px - 4 py - 3 bg - black / 50 border border - cyan - 500 / 30 rounded - lg text - white focus:outline - none focus:border - cyan - 400 focus:ring - 1 focus:ring - cyan - 400 transition - all duration - 200';
                  >;
                    <option value='name'>Sort by Name</option>;
                    <option value='price'>Sort by Price</option>;
                    <option value='rating'>Sort by Rating</option>;
                    <option value='customers'>Sort by Customers</option>;
                  </select>;
<<<<<<< HEAD
                    onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')} className="px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200">
                    {sortOrder === 'asc' ? '↑' : '↓'}
                {/* Category Filter */}
                <div>
                  <select
                    value={selectedCategory}
                    onChange={e => setSelectedCategory(e.target.value)}
                    className='w-full px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-200'
                  >
                    {categories.map(category => (                      <option key={category.id} value={category.id}>
                        {category.name} ({category.count})
                      </option>
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    ))}
                  </select>
                </div>
                {/* Sort */}
                <div className='flex space-x-2'>
                {/* Category Filter */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                <div>;
                  <select;
                    value={selectedCategory  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    onChange={(e) => setSelectedCategory(e.target.value)} className="w-full px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-200">
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name} ({category.count})
                      </option>
                    ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  </select>;
                </div>;
<<<<<<< HEAD
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                {/* Sort */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                <div className="flex space-x-2">
<<<<<<< HEAD
                  <select
                    value={sortBy  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                  <select
                    value={sortBy}
                    onChange={e => setSortBy(e && e.target.value as any)}
                    className='flex-1 px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-200';
=======
        default:;
          a_value = a.name.toLowerCase ();
          b_value = b.name.toLowerCase ();
      }
      // Check condition
if ( {) {
  $2
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}
                    onChange={(e) => setSortBy(e.target.value as any)} className="flex-1 px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-200">
                    <option value="name">Sort by Name</option>
                    <option value="price">Sort by Price</option>
                    <option value="rating">Sort by Rating</option>
                    <option value="customers">Sort by Customers</option>
                  </select>
                  <button
                    onClick={() =>
                      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
                    }
                    className='px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200'
                  >                    {sortOrder === 'asc' ? '↑' : '↓'}
<<<<<<< HEAD
=======

                    onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')} className="px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200">
                    {sortOrder === 'asc' ? '↑' : '↓'}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
<<<<<<< HEAD
<<<<<<< HEAD
                  <button;

        {/* Services Grid */}
        <section className='px-4 sm:px-6 lg:px-8 mb-20'>
          <div className='max-w-7xl mx-auto'>
=======

=======
                  <button;
                    on_click={() =>;
                      setSortOrder (sort_order === 'asc' ? 'desc' : 'asc');
                    }
                    className='px - 4 py - 3 bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white rounded - lg hover:from - cyan - 600 hover:to - purple - 700 transition - all duration - 200';
                  >                    {sort_order === 'asc' ? '↑' : '↓'}

=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        {/* Services Grid */}
        <section className='px-4 sm:px-6 lg:px-8 mb-20'>
          <div className='max-w-7xl mx-auto'>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')} className="px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200">
                    {sortOrder === 'asc' ? '↑' : '↓'  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  </button>;
                </div>;
              </div>;
            </div>;
          </div>;
        </section>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        {/* Services Grid */}
        <section className='px - 4 sm:px - 6 lg:px - 8 mb - 20'>;
          <div className='max - w-7xl mx - auto'>;
            {filtered_services.length === 0 ? (
              <div className='text - center py - 20'>;
                <div className='text - 6xl mb - 4'>🔍</div>;
                <h3 className='text - 2xl font - semibold text - white mb - 2'>;
                  No services found;
                </h3>;
                <p className='text - gray - 400'>;
                  Try adjusting your search criteria or filters.;
                </p>;
              </div>) : (
              <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8'>                {filtered_services.map ((service, index) => (
                  <motion.div;
                    key={service.id}
                    initial={{ opacity: 0, coordinate_y: 20 }}
                    animate={{ opacity: 1, coordinate_y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className='group';
                  >;
                    <div className='bg - black / 50 border border - cyan - 500 / 30 rounded - 2xl p - 6 h - full hover:border - cyan - 400 / 50 transition - all duration - 300 hover:transform hover:scale - 105 backdrop - blur - sm'>;
                      {/* Service Header */}
                      <div className='flex items - start justify - between mb - 4'>;
                        <div className='w - 12 h - 12 bg - gradient - to - r from - cyan - 500 / 20 to - purple - 600 / 20 rounded - lg flex items - center justify - center'>;
                          {React.create_element (
                            getVariantIcon (service.variant),
                            {
                              class_name: `w - 6 h - 6 text - cyan - 400`,

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                            }
                          )}
                        </div>;

                        <div className='text - right'>;
                          <div className='text - 2xl font - bold text - cyan - 400'>;
                            {service.price}
<<<<<<< HEAD
<<<<<<< HEAD
        {/* Services Grid */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-7xl mx-auto">
        {/* Services Grid */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-7xl mx-auto">
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            {filteredServices.length === 0 ? (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-semibold text-white mb-2">No services found</h3>
                <p className="text-gray-400">Try adjusting your search criteria or filters.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service, index) => (
                  <motion.div
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

                    key={service.id  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    animate={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

                    transition={{ duration: 0.6, delay: index * 0.1 }} className="group">
<<<<<<< HEAD
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
=======
                    <div className="bg-black/50 border border-cyan-500/30 rounded-2xl p-6 h-full hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm">
                      {/* Service Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-lg flex items-center justify-center">
                          {React.createElement(getVariantIcon(service.variant), { 
                            className: `w-6 h-6 text-cyan-400` 
                          })}
                        </div>
<div className="text-right">
                          <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                          <div className="text-sm text-gray-400">per month</div>



                        </div>
                      </div>

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

                      {/* Service Info */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

<<<<<<< HEAD
                      {/* Service Info */}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-200">
                        {service.name}
                      </h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {service.tagline}
                      </p>
                      <div className='flex items-start justify-between mb-4'>;
                        <div className='w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-lg flex items-center justify-center'>;
                          {React && React.createElement(;
                            getVariantIcon(service && service.variant),;
                            {;
                              className: `w-6 h-6 text-cyan-400`,;
                            }
                          )}
                        </div>;
                        <div className='text-right'>;
                          <div className='text-2xl font-bold text-cyan-400'>;
                            {service && service.price}
                          </div>;
                          <div className='text-sm text-gray-400'>per month</div>                        </div>;
                      </div>;
                      {/* Service Info */}
                      <h3 className='text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-200'>;
                        {service && service.name}
                      </h3>;
                      <p className='text-gray-300 mb-4 leading-relaxed'>                        {service && service.tagline}
                      </p>;
<<<<<<< HEAD
                      {/* Features */}
=======
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className='group'
                  >
                    <div className='bg-black/50 border border-cyan-500/30 rounded-2xl p-6 h-full hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm'>
                      {/* Service Header */}
                      <div className='flex items-start justify-between mb-4'>
                        <div className='w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-lg flex items-center justify-center'>
                          {React.createElement(
                            getVariantIcon(service.variant)
                            {
                              className: `w-6 h-6 text-cyan-400`
                            }
                          )}
                    key={service.id  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    animate={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
                    transition={{ duration: 0.6, delay: index * 0.1 }} className="group">
                    <div className="bg-black/50 border border-cyan-500/30 rounded-2xl p-6 h-full hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm">
                      {/* Service Header */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-lg flex items-center justify-center">
                          {React.createElement(getVariantIcon(service.variant), {
                            className: `w-6 h-6 text-cyan-400`
                          })  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======

                    transition={{ duration: 0.6, delay: index * 0.1 }} className="group">
                    <div className="bg-black/50 border border-cyan-500/30 rounded-2xl p-6 h-full hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm">
                      {/* Service Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-lg flex items-center justify-center">
                          {React.createElement(getVariantIcon(service.variant), { 
                            className: `w-6 h-6 text-cyan-400` 
                          })}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                          <div className="text-sm text-gray-400">per month</div>
                        </div>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      </div>
                      {/* Service Info */}
                      <h3 className='text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-200'>
                        {service.name}
                      </h3>
                      <p className='text-gray-300 mb-4 leading-relaxed'>                        {service.tagline}
                      </p>
                      {/* Features */}
                      <div className='mb-6'>
                        <h4 className='text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider'>
                          Key Features
                        </h4>
                        <div className='space-y-2'>
                          {service.features
                            .slice(0, 3)
                            .map((feature, featureIndex) => (
                              <div
                                key={featureIndex}
                                className='flex items-center space-x-2'
                              >
                                <CheckCircle className='w-4 h-4 text-green-400 flex-shrink-0' />
                                <span className='text-sm text-gray-300'>
                                  {feature}
                                </span>
                              </div>
                            ))}
<<<<<<< HEAD
=======
=======
                      {/* Service Info */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-200">
                        {service.name}
                      </h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {service.tagline}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
                      </p>
=======
                      <div className='flex items-start justify-between mb-4'>;
                        <div className='w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-lg flex items-center justify-center'>;
                          {React && React.createElement(;
                            getVariantIcon(service && service.variant),;
                            {;
                              className: `w-6 h-6 text-cyan-400`,;
                            }
                          )}
                        </div>;
                        <div className='text-right'>;
                          <div className='text-2xl font-bold text-cyan-400'>;
                            {service && service.price}
                          </div>;
                          <div className='text-sm text-gray-400'>per month</div>                        </div>;
                      </div>;

                      {/* Service Info */}
                      <h3 className='text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-200'>;
                        {service && service.name}
                      </h3>;
                      <p className='text-gray-300 mb-4 leading-relaxed'>                        {service && service.tagline}
                      </p>;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



                      {/* Features */}

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                      {/* Service Info */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-200">
                        {service.name  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      </h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {service.tagline  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      </p>;
                      {/* Features */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">Key Features</h4>
                        <div className="space-y-2">
                          {service.features.slice(0, 3).map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                              <span className="text-sm text-gray-300">{feature}</span>
                            </div>
<<<<<<< HEAD
<<<<<<< HEAD
                          ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                          {service.features.length > 3 && (
                            <div className="text-sm text-cyan-400">
                              +{service.features.length - 3} more features
                            </div>
                          )}
<<<<<<< HEAD
=======

                          {service.features.length > 3 && (
                            <div className="text-sm text-cyan-400">
                              +{service.features.length - 3} more features
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                            </div>

                          </div>;
                          <div className='text - sm text - gray - 400'>per month</div>                        </div>;
                      </div>;
                      {/* Service Info */}
                      <h3 className='text - xl font - semibold text - white mb - 2 group - hover:text - cyan - 400 transition - colors duration - 200'>;
                        {service.name}
                      </h3>;
                      <p className='text - gray - 300 mb - 4 leading - relaxed'>                        {service.tagline}
                      </p>;
                      {/* Features */}
                      <div className='mb - 6'>;
                        <h4 className='text - sm font - semibold text - gray - 400 mb - 3 uppercase tracking - wider'>;
                          Key Features;
                        </h4>;
                        <div className='space - y-2'>;
                          {service.features;
                            .slice (0, 3);
                            .map ((feature, feature_index) => (
                              <div;
                                key={feature_index}
                                className='flex items - center space - x-2';
                              >;
                                <CheckCircle className='w - 4 h - 4 text - green - 400 flex - shrink - 0' />;
                                <span className='text - sm text - gray - 300'>;
                                  {feature}
                                </span>;
                              </div>))}
                          {service.features.length > 3 && (
                            <div className='text - sm text - cyan - 400'>                              +{service.features.length - 3} more features;
                            </div>)}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

                          )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

                        </div>;
                      </div>;
                      {/* Stats */}
                      <div className='grid grid - cols - 3 gap - 4 mb - 6'>;
                        <div className='text - center'>;
                          <div className='flex items - center justify - center space - x-1 mb - 1'>;
                            <Star className='w - 4 h - 4 text - yellow - 400 fill - current' />;
                            <span className='text - sm font - semibold text - white'>;
                              {service.rating}
                            </span>;
                          </div>;
                          <div className='text - xs text - gray - 400'>Rating</div>;
                        </div>;
                        <div className='text - center'>;
                          <div className='text - sm font - semibold text - white mb - 1'>;
                            {service.customers}
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        </div>
                      </div>
                      {/* Stats */}
                      <div className='grid grid-cols-3 gap-4 mb-6'>
                        <div className='text-center'>
                          <div className='flex items-center justify-center space-x-1 mb-1'>
                            <Star className='w-4 h-4 text-yellow-400 fill-current' />
                            <span className='text-sm font-semibold text-white'>
                              {service.rating}
                            </span>
                          )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
                        </div>;
                      </div>;
                      {/* Stats */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

                        </div>;
                      </div>;
                      {/* Stats */}
                      <div className='grid grid - cols - 3 gap - 4 mb - 6'>;
                        <div className='text - center'>;
                          <div className='flex items - center justify - center space - x-1 mb - 1'>;
                            <Star className='w - 4 h - 4 text - yellow - 400 fill - current' />;
                            <span className='text - sm font - semibold text - white'>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                              {service.rating}
                            </span>;
                          </div>;
                          <div className='text - xs text - gray - 400'>Rating</div>;
                        </div>;
                        <div className='text - center'>;
                          <div className='text - sm font - semibold text - white mb - 1'>;
                            {service.customers}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="text-center">
                          <div className="flex items-center justify-center space-x-1 mb-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-sm font-semibold text-white">{service.rating}</span>
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                          </div>
                          <div className="text-xs text-gray-400">Rating</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm font-semibold text-white mb-1">{service.customers}</div>
                          <div className="text-xs text-gray-400">Customers</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm font-semibold text-white mb-1">{service.launchDate}</div>
                          <div className="text-xs text-gray-400">Launched</div>
                        </div>
<<<<<<< HEAD
                      </div>
<<<<<<< HEAD
                      <div className="flex items-center justify-between">

                      {/* CTA */}
                      <div className="flex items-center justify-between">
                      {/* CTA */}
                      <div className='flex items-center justify-between'>
=======

                        </div>;
                      </div>;
                      {/* Stats */}
                      <div className='grid grid-cols-3 gap-4 mb-6'>;
                        <div className='text-center'>;
                          <div className='flex items-center justify-center space-x-1 mb-1'>;
                            <Star className='w-4 h-4 text-yellow-400 fill-current' />;
                            <span className='text-sm font-semibold text-white'>;
                              {service && service.rating}
                            </span>;
                          </div>;
                          <div className='text-xs text-gray-400'>Rating</div>;
                        </div>;
                        <div className='text-center'>;
                          <div className='text-sm font-semibold text-white mb-1'>;
                            {service && service.customers}
                          </div>;
                          <div className='text-xs text-gray-400'>Customers</div>;
                        </div>;
                        <div className='text-center'>;
                          <div className='text-sm font-semibold text-white mb-1'>;
                            {service && service.launchDate}
                          </div>;
                          <div className='text-xs text-gray-400'>Launched</div>                        </div>;
                      </div>;


                      {/* CTA */}

=======
                      <div className="flex items-center justify-between">
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
                      </div>
                      {/* CTA */}
                      <div className='flex items-center justify-between'>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      {/* CTA */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      <div className="flex items-center justify-between">
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        <Link
                          href={service.link} className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200 group">
                          <span className="font-medium">Learn More</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                        </Link>
                        <div className="text-xs text-gray-400 bg-gray-800/50 px-2 py-1 rounded">
<<<<<<< HEAD
                          {service.variant.replace('-futuristic', '').replace('- ')  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======
                          {service.variant.replace('-futuristic', '').replace('- ')}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        </div>
                      </div>
                    </div>
                  </motion.div>
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

                      <div className="grid grid-cols-3 gap-4 mb-6">;
                        <div className="text-center">;
                          <div className="flex items-center justify-center space-x-1 mb-1">;
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />;
                            <span className="text-sm font-semibold text-white">{service.rating}</span>;
                          </div>;
                          <div className="text-xs text-gray-400">Rating</div>;
                        </div>;
                        <div className="text-center">;
                          <div className="text-sm font-semibold text-white mb-1">{service.customers}</div>;
                          <div className="text-xs text-gray-400">Customers</div>;
                        </div>;
                        <div className="text-center">;
                          <div className="text-sm font-semibold text-white mb-1">{service.launchDate}</div>;
                          <div className="text-xs text-gray-400">Launched</div>;
                        </div>;
                      </div>;
                      {/* CTA */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      <div className="flex items-center justify-between">;
                        <Link;
                          href={service.link} className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200 group">;
                          <span className="font-medium">Learn More</span>;
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />;
                        </Link>;
                        <div className="text-xs text-gray-400 bg-gray-800/50 px-2 py-1 rounded">;
                          {service.variant.replace('-futuristic', '').replace('- ')  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                        </div>;
                      </div>;
                    </div>;
                  </motion.div>;
                ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              </div>;
            )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

<<<<<<< HEAD
                ))}
</div>;
            )}
        {/* CTA Section */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
viewport={{ once: true }} className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-cyan-500/30 rounded-2xl p-12 backdrop-blur-sm">
              <h2 className="text-4xl font-bold text-white mb-6">
=======
          </div>;
        </section>;
        {/* CTA Section */}
        <section className='px-4 sm:px-6 lg:px-8 mb-20'>;
          <div className='max-w-4xl mx-auto text-center'>            <motion&& motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              viewport={{ once: true }}
              className='bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-cyan-500/30 rounded-2xl p-12 backdrop-blur-sm'>;
              <h2 className='text-4xl font-bold text-white mb-6'>;
                Ready to Transform Your Business?;
              </h2>;
              <p className='text-xl text-gray-300 mb-8 leading-relaxed'>;
                          </div>;
                          <div className='text - xs text - gray - 400'>Customers</div>;
                        </div>;
                        <div className='text - center'>;
                          <div className='text - sm font - semibold text - white mb - 1'>;
                            {service.launch_date}
                          </div>;
                          <div className='text - xs text - gray - 400'>Launched</div>                        </div>;
                      </div>;
                      {/* CTA */}
                      <div className='flex items - center justify - between'>;
                        <Link;
                          href={service.link}
                          className='flex items - center space - x-2 text - cyan - 400 hover:text - cyan - 300 transition - colors duration - 200 group';
                        >;
                          <span className='font - medium'>Learn More</span>;
                          <ArrowRight className='w - 4 h - 4 group - hover:translate - x-1 transition - transform duration - 200' />;
                        </Link>;
                        <div className='text - xs text - gray - 400 bg - gray - 800 / 50 px - 2 py - 1 rounded'>;
                          {service.variant;
                            .replace ('-futuristic', '');
                            .replace ('-', ' ')}                        </div>;
                      </div>;
                    </div>;
                  </motion.div>))}
              </div>)}
          </div>;
        </section>;
        {/* CTA Section */}
        <section className='px - 4 sm:px - 6 lg:px - 8 mb - 20'>;
          <div className='max - w-4xl mx - auto text - center'>            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='bg - gradient - to - r from - cyan - 500 / 10 to - purple - 600 / 10 border border - cyan - 500 / 30 rounded - 2xl p - 12 backdrop - blur - sm';
            >;
              <h2 className='text - 4xl font - bold text - white mb - 6'>;
                Ready to Transform Your Business?;
              </h2>;
              <p className='text - xl text - gray - 300 mb - 8 leading - relaxed'>;
                Join thousands of businesses already leveraging our;
                revolutionary 2024 services. Get started today and experience;
                the future of technology.;
              </p>;


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join thousands of businesses already leveraging our revolutionary 2024 services. 
                Get started today and experience the future of technology.
              </p>
              <div className="flex flex-col sm: flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
<Link
=======
                ))}
              </div>
            )}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          </div>
        </section>
        {/* CTA Section */}
        <section className='px-4 sm:px-6 lg:px-8 mb-20'>
          <div className='max-w-4xl mx-auto text-center'>            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-cyan-500/30 rounded-2xl p-12 backdrop-blur-sm'
            >
              <h2 className='text-4xl font-bold text-white mb-6'>
                      <div className="grid grid-cols-3 gap-4 mb-6">;
                        <div className="text-center">;
                          <div className="flex items-center justify-center space-x-1 mb-1">;
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />;
                            <span className="text-sm font-semibold text-white">{service.rating}</span>;
                          </div>;
                          <div className="text-xs text-gray-400">Rating</div>;
                        </div>;
                        <div className="text-center">;
                          <div className="text-sm font-semibold text-white mb-1">{service.customers}</div>;
                          <div className="text-xs text-gray-400">Customers</div>;
                        </div>;
                        <div className="text-center">;
                          <div className="text-sm font-semibold text-white mb-1">{service.launchDate}</div>;
                          <div className="text-xs text-gray-400">Launched</div>;
                        </div>;
                      </div>;
                      {/* CTA */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      <div className="flex items-center justify-between">;
                        <Link;
                          href={service.link} className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200 group">;
                          <span className="font-medium">Learn More</span>;
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />;
                        </Link>;
                        <div className="text-xs text-gray-400 bg-gray-800/50 px-2 py-1 rounded">;
                          {service.variant.replace('-futuristic', '').replace('- ')  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                        </div>;
                      </div>;
                    </div>;
                  </motion.div>;
                ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              </div>;
            )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
          </div>;
        </section>;
        {/* CTA Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              viewport={{ once: true }} className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-cyan-500/30 rounded-2xl p-12 backdrop-blur-sm">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join thousands of businesses already leveraging our revolutionary 2024 services.
=======

          </div>;
        </section>;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        {/* CTA Section */}
        <section className='px-4 sm:px-6 lg:px-8 mb-20'>;
          <div className='max-w-4xl mx-auto text-center'>            <motion&& motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              viewport={{ once: true }}
              className='bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-cyan-500/30 rounded-2xl p-12 backdrop-blur-sm'>;
              <h2 className='text-4xl font-bold text-white mb-6'>;
                Ready to Transform Your Business?;
              </h2>;
              <p className='text-xl text-gray-300 mb-8 leading-relaxed'>;
=======
                          </div>;
                          <div className='text - xs text - gray - 400'>Customers</div>;
                        </div>;
                        <div className='text - center'>;
                          <div className='text - sm font - semibold text - white mb - 1'>;
                            {service.launch_date}
                          </div>;
                          <div className='text - xs text - gray - 400'>Launched</div>                        </div>;
                      </div>;
                      {/* CTA */}
                      <div className='flex items - center justify - between'>;
                        <Link;
                          href={service.link}
                          className='flex items - center space - x-2 text - cyan - 400 hover:text - cyan - 300 transition - colors duration - 200 group';
                        >;
                          <span className='font - medium'>Learn More</span>;
                          <ArrowRight className='w - 4 h - 4 group - hover:translate - x-1 transition - transform duration - 200' />;
                        </Link>;
                        <div className='text - xs text - gray - 400 bg - gray - 800 / 50 px - 2 py - 1 rounded'>;
                          {service.variant;
                            .replace ('-futuristic', '');
                            .replace ('-', ' ')}                        </div>;
                      </div>;
                    </div>;
                  </motion.div>))}
              </div>)}
          </div>;
        </section>;
        {/* CTA Section */}
        <section className='px - 4 sm:px - 6 lg:px - 8 mb - 20'>;
          <div className='max - w-4xl mx - auto text - center'>            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='bg - gradient - to - r from - cyan - 500 / 10 to - purple - 600 / 10 border border - cyan - 500 / 30 rounded - 2xl p - 12 backdrop - blur - sm';
            >;
              <h2 className='text - 4xl font - bold text - white mb - 6'>;
                Ready to Transform Your Business?;
              </h2>;
              <p className='text - xl text - gray - 300 mb - 8 leading - relaxed'>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                Join thousands of businesses already leveraging our;
                revolutionary 2024 services. Get started today and experience;
                the future of technology.;
              </p>;


                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join thousands of businesses already leveraging our revolutionary 2024 services. 
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                Get started today and experience the future of technology.
              </p>
              <div className="flex flex-col sm: flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Link
                  href="/contact" className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-cyan-500/25 font-semibold">
                  <Zap className="w-5 h-5" />
                  <span>Get Started Today</span>
                </Link>
                <Link
                  href="/pricing-2033" className="flex items-center space-x-2 border border-cyan-500/30 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-500/10 transition-all duration-200 font-semibold">
                  <span>View Pricing Plans</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
<<<<<<< HEAD
<<<<<<< HEAD
=======
                <Link
                  href=&quot;/pricing-2033&quot; className=&quot;flex items-center space-x-2 border border-cyan-500/30 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-500/10 transition-all duration-200 font-semibold&quot;>
                  <span>View Pricing Plans</span>
                  <ArrowRight className=&quot;w-4 h-4&quot; />

=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                </Link>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>


<<<<<<< HEAD
<<<<<<< HEAD
  )
  ),
};

  )
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  className='flex items-center space-x-2 border border-cyan-500/30 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-500/10 transition-all duration-200 font-semibold'>;
                  <span>View Pricing Plans</span>;
                  <ArrowRight className='w-4 h-4' />                </Link>;
              </div>;
            </motion && motion.div>;
          </div>;
        </section>;
      </div>;
    </>;
  ),;
};
<<<<<<< HEAD
export default Services2024Page;

<<<<<<< HEAD
=======

=======
              <div className='flex flex - col sm:flex - row items - center justify - center space - y-4 sm:space - y-0 sm:space - x-6'>;
                <Link;
                  href='/contact';
                  className='flex items - center space - x-2 bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white px - 8 py - 4 rounded - lg hover:from - cyan - 600 hover:to - purple - 700 transition - all duration - 200 shadow - lg hover:shadow - cyan - 500 / 25 font - semibold';
                >;
                  <Zap className='w - 5 h - 5' />;
                  <span > Get Started Today</span>;
                </Link>;
                <Link;
                  href='/pricing - 2033';
                  className='flex items - center space - x-2 border border - cyan - 500 / 30 text - cyan - 400 px - 8 py - 4 rounded - lg hover:bg - cyan - 500 / 10 transition - all duration - 200 font - semibold';
                >;
                  <span > View Pricing Plans</span>;
                  <ArrowRight className='w - 4 h - 4' />                </Link>;
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
export default Services2024Page;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
},
export default Services2024Page,
        <section className="px-4 sm:px-6 lg:px-8 mb-20">;
          <div className="max-w-4xl mx-auto text-center">;
            <motion.div;
              initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              viewport={{ once: true }} className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-cyan-500/30 rounded-2xl p-12 backdrop-blur-sm">;
              <h2 className="text-4xl font-bold text-white mb-6">;
                Ready to Transform Your Business?;
              </h2>;
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">;
                Join thousands of businesses already leveraging our revolutionary 2024 services.;
                Get started today and experience the future of technology.;
              </p>;
              <div className="flex flex-col sm: flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">;
                <Link;
<<<<<<< HEAD
                  href="/contact" className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-cyan-500/25 font-semibold">;
                  <Zap className="w-5 h-5" />;
                  <span>Get Started Today</span>;
                </Link>;
                <Link;
                  href="/pricing-2033" className="flex items-center space-x-2 border border-cyan-500/30 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-500/10 transition-all duration-200 font-semibold">;
                  <span>View Pricing Plans</span>;
                  <ArrowRight className="w-4 h-4" />;
                </Link>;
=======
                  href='/contact';
                  className='flex items - center space - x-2 bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white px - 8 py - 4 rounded - lg hover:from - cyan - 600 hover:to - purple - 700 transition - all duration - 200 shadow - lg hover:shadow - cyan - 500 / 25 font - semibold';
                >;
                  <Zap className='w - 5 h - 5' />;
                  <span > Get Started Today</span>;
                </Link>;
                <Link;
                  href='/pricing - 2033';
                  className='flex items - center space - x-2 border border - cyan - 500 / 30 text - cyan - 400 px - 8 py - 4 rounded - lg hover:bg - cyan - 500 / 10 transition - all duration - 200 font - semibold';
                >;
                  <span > View Pricing Plans</span>;
                  <ArrowRight className='w - 4 h - 4' />                </Link>;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
<<<<<<< HEAD


export default Services2024Page;
;
<<<<<<< HEAD
    </>;
  );
},;
export default Services2024Page;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    </>),
}
;
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
export default Services2024Page;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

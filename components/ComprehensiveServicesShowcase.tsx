import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

<<<<<<< HEAD

import {;
  Star,;
  Clock,;
  Users,;
  TrendingUp,;
  CheckCircle,;
  ExternalLink,;
  ChevronRight,;
  Shield,;
  Zap,;
  Globe,;
  Rocket,;
  Brain,;
  Atom,;
  Search,;
  Filter,;
  Grid,;
  List,;
  ArrowRight,;
  Award,;
  Target,;
} from 'lucide-react';
import { comprehensiveMicroSaasServices } from '../data/comprehensive-2025-micro-saas-expansion';
import { specializedEmergingTechServices } from '../data/specialized-emerging-tech-services-2025';import {
  Star, Clock, Users, TrendingUp, CheckCircle, ExternalLink, ;

=======
import { 
  Star, Clock, Users, TrendingUp, CheckCircle, ExternalLink, 

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
import {
  Star
  Clock
  Users
  TrendingUp
  CheckCircle
  ExternalLink
  ChevronRight
  Shield
  Zap
  Globe
  Rocket
  Brain
  Atom
  Search
  Filter
  Grid
  List
  ArrowRight
  Award
  Target;
} from 'lucide-react';
import { comprehensiveMicroSaasServices } from '../data/comprehensive-2025-micro-saas-expansion';
import { specializedEmergingTechServices } from '../data/specialized-emerging-tech-services-2025';import { ;
  Star, Clock, Users, TrendingUp, CheckCircle, ExternalLink, ;
import { 
  Star, Clock, Users, TrendingUp, CheckCircle, ExternalLink, 

  Star,
  Clock,
  Users,
  TrendingUp,
  CheckCircle,
  ExternalLink,
  ChevronRight,
  Shield,
  Zap,
  Globe,
  Rocket,
  Brain,
  Atom,
  Search,
  Filter,
  Grid,
  List,
  ArrowRight,
  Award,;
  Target,;
} from 'lucide-react';
import { comprehensiveMicroSaasServices } from '../data/comprehensive-2025-micro-saas-expansion';
import { specializedEmergingTechServices } from '../data/specialized-emerging-tech-services-2025';import {
  Star, Clock, Users, TrendingUp, CheckCircle, ExternalLink, ;
import { 
  Star, Clock, Users, TrendingUp, CheckCircle, ExternalLink, 

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  ChevronRight, Shield, Zap, Globe, Rocket, Brain, Atom;
  Search, Filter, Grid, List, ArrowRight, Award, Target;
} from 'lucide-react';
import { comprehensiveMicroSaasServices } from '../data/comprehensive-2025-micro-saas-expansion';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
import { specializedEmergingTechServices } from '../data/specialized-emerging-tech-services-2025';

export default function ComprehensiveServicesShowcase() {

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedService, setSelectedService] = useState<string | null>(null),
  const [searchTerm, setSearchTerm] = useState('');
<<<<<<< HEAD

  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'popularity' | 'price' | 'rating' | 'newest'>('popularity');

  // Combine all services
  const allServices = [...comprehensiveMicroSaasServices, ...specializedEmergingTechServices];

  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀', count: allServices.length },
    { id: 'AI & Machine Learning', name: 'AI & ML', icon: '🧠', count: allServices.filter(s => s.category === 'AI & Machine Learning').length },
    { id: 'Healthcare AI', name: 'Healthcare', icon: '🏥', count: allServices.filter(s => s.category === 'Healthcare AI').length },
    { id: 'Fintech AI', name: 'Fintech', icon: '💰', count: allServices.filter(s => s.category === 'Fintech AI').length },
    { id: 'Cybersecurity', name: 'Security', icon: '🛡️', count: allServices.filter(s => s.category === 'Cybersecurity').length },
    { id: 'IoT & Smart Cities', name: 'Smart Cities', icon: '🏙️', count: allServices.filter(s => s.category === 'IoT & Smart Cities').length },
    { id: 'Blockchain & DeFi', name: 'Blockchain', icon: '🔗', count: allServices.filter(s => s.category === 'Blockchain & DeFi').length },
    { id: 'Quantum Computing', name: 'Quantum', icon: '⚛️', count: allServices.filter(s => s.category === 'Quantum Computing').length },
    { id: 'Space Technology', name: 'Space Tech', icon: '🚀', count: allServices.filter(s => s.category === 'Space Technology').length },
    { id: 'Autonomous Systems', name: 'Autonomous', icon: '🤖', count: allServices.filter(s => s.category === 'Autonomous Systems').length },
    { id: 'AR/VR & Metaverse', name: 'AR/VR', icon: '🥽', count: allServices.filter(s => s.category === 'AR/VR & Metaverse').length },
    { id: '5G/6G Networks', name: '5G/6G', icon: '📡', count: allServices.filter(s => s.category === '5G/6G Networks').length },
    { id: 'Biotechnology AI', name: 'Biotech', icon: '🧬', count: allServices.filter(s => s.category === 'Biotechnology AI').length },
    { id: 'Renewable Energy', name: 'Energy', icon: '⚡', count: allServices.filter(s => s.category === 'Renewable Energy').length },
    { id: 'Edge Computing', name: 'Edge', icon: '🌐', count: allServices.filter(s => s.category === 'Edge Computing').length },
    { id: 'Quantum Internet', name: 'Q-Internet', icon: '🌍', count: allServices.filter(s => s.category === 'Quantum Internet').length },
    { id: 'Neuromorphic Computing', name: 'Neuro', icon: '🧠', count: allServices.filter(s => s.category === 'Neuromorphic Computing').length }
  ];

  // Filter and sort services
  const filteredServices = allServices
    .filter(service => {
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch
    })

=======
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid'),
  const [sortBy, setSortBy] = useState<'popularity' | 'price' | 'rating' | 'newest'>('popularity'),

  // Combine all services

  const allServices = [
    ...comprehensiveMicroSaasServices
    ...specializedEmergingTechServices
  ];
  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀', count: allServices.length }
    {
      id: 'AI & Machine Learning'
      name: 'AI & ML'
      icon: '🧠'
      count: allServices.filter(s => s.category === 'AI & Machine Learning')
        .length
    }
    {
      id: 'Healthcare AI'
      name: 'Healthcare'
      icon: '🏥'
      count: allServices.filter(s => s.category === 'Healthcare AI').length
    }
    {
      id: 'Fintech AI'
      name: 'Fintech'
      icon: '💰'
      count: allServices.filter(s => s.category === 'Fintech AI').length
    }
    {
      id: 'Cybersecurity'
      name: 'Security'
      icon: '🛡️'
      count: allServices.filter(s => s.category === 'Cybersecurity').length
    }
    {
      id: 'IoT & Smart Cities'
      name: 'Smart Cities'
      icon: '🏙️'
      count: allServices.filter(s => s.category === 'IoT & Smart Cities')
        .length
    }
    {
      id: 'Blockchain & DeFi'
      name: 'Blockchain'
      icon: '🔗'
      count: allServices.filter(s => s.category === 'Blockchain & DeFi').length
    }
    {
      id: 'Quantum Computing'
      name: 'Quantum'
      icon: '⚛️'
      count: allServices.filter(s => s.category === 'Quantum Computing').length
    }
    {
      id: 'Space Technology'
      name: 'Space Tech'
      icon: '🚀'
      count: allServices.filter(s => s.category === 'Space Technology').length
    }
    {
      id: 'Autonomous Systems'
      name: 'Autonomous'
      icon: '🤖'
      count: allServices.filter(s => s.category === 'Autonomous Systems')
        .length
    }
    {
      id: 'AR/VR & Metaverse'
      name: 'AR/VR'
      icon: '🥽'
      count: allServices.filter(s => s.category === 'AR/VR & Metaverse').length
    }
    {
      id: '5G/6G Networks'
      name: '5G/6G'
      icon: '📡'
      count: allServices.filter(s => s.category === '5G/6G Networks').length
    }
    {
      id: 'Biotechnology AI'
      name: 'Biotech'
      icon: '🧬'
      count: allServices.filter(s => s.category === 'Biotechnology AI').length
    }
    {
      id: 'Renewable Energy'
      name: 'Energy'
      icon: '⚡'
      count: allServices.filter(s => s.category === 'Renewable Energy').length
    }
    {
      id: 'Edge Computing'
      name: 'Edge'
      icon: '🌐'
      count: allServices.filter(s => s.category === 'Edge Computing').length
    }
    {
      id: 'Quantum Internet'
      name: 'Q-Internet'
      icon: '🌍'
      count: allServices.filter(s => s.category === 'Quantum Internet').length
    }
    {
      id: 'Neuromorphic Computing'
      name: 'Neuro'
      icon: '🧠'
      count: allServices.filter(s => s.category === 'Neuromorphic Computing')
        .length
    },  ];    { id: 'AI & Machine Learning', name: 'AI & ML', icon: '🧠', count: allServices.filter(s => s.category === 'AI & Machine Learning').length }
    { id: 'Healthcare AI', name: 'Healthcare', icon: '🏥', count: allServices.filter(s => s.category === 'Healthcare AI').length }
    { id: 'Fintech AI', name: 'Fintech', icon: '💰', count: allServices.filter(s => s.category === 'Fintech AI').length }
    { id: 'Cybersecurity', name: 'Security', icon: '🛡️', count: allServices.filter(s => s.category === 'Cybersecurity').length }
    { id: 'IoT & Smart Cities', name: 'Smart Cities', icon: '🏙️', count: allServices.filter(s => s.category === 'IoT & Smart Cities').length }
    { id: 'Blockchain & DeFi', name: 'Blockchain', icon: '🔗', count: allServices.filter(s => s.category === 'Blockchain & DeFi').length }
    { id: 'Quantum Computing', name: 'Quantum', icon: '⚛️', count: allServices.filter(s => s.category === 'Quantum Computing').length }
    { id: 'Space Technology', name: 'Space Tech', icon: '🚀', count: allServices.filter(s => s.category === 'Space Technology').length }
    { id: 'Autonomous Systems', name: 'Autonomous', icon: '🤖', count: allServices.filter(s => s.category === 'Autonomous Systems').length }
    { id: 'AR/VR & Metaverse', name: 'AR/VR', icon: '🥽', count: allServices.filter(s => s.category === 'AR/VR & Metaverse').length }
    { id: '5G/6G Networks', name: '5G/6G', icon: '📡', count: allServices.filter(s => s.category === '5G/6G Networks').length }
    { id: 'Biotechnology AI', name: 'Biotech', icon: '🧬', count: allServices.filter(s => s.category === 'Biotechnology AI').length }
    { id: 'Renewable Energy', name: 'Energy', icon: '⚡', count: allServices.filter(s => s.category === 'Renewable Energy').length }
    { id: 'Edge Computing', name: 'Edge', icon: '🌐', count: allServices.filter(s => s.category === 'Edge Computing').length }
    { id: 'Quantum Internet', name: 'Q-Internet', icon: '🌍', count: allServices.filter(s => s.category === 'Quantum Internet').length }
    { id: 'Neuromorphic Computing', name: 'Neuro', icon: '🧠', count: allServices.filter(s => s.category === 'Neuromorphic Computing').length }
  // Filter and sort services
  const filteredServices = allServices
    .filter(service => {
      const matchesCategory =
        selectedCategory === 'all' |service.category === selectedCategory;
      const matchesSearch =
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) |
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) |
        service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;    })      const matchesCategory = selectedCategory === 'all' |service.category === selectedCategory;
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) |
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) |
                           service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    .sort((a, b) => {
      switch (sortBy) {
        case 'popularity':
          return b.popular ? 1 : -1;
        case 'price':
<<<<<<< HEAD

  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<;
    'popularity' | 'price' | 'rating' | 'newest';
  >('popularity');
  // Combine all services;
  const allServices = [;
    ...comprehensiveMicroSaasServices,;
    ...specializedEmergingTechServices,;
  ];
=======
          return parseFloat(a.price.replace('$', '').replace(, '')) - parseFloat(b.price.replace('$', '').replace(, ''));
=======
          return parseFloat(a.price.replace('$', '').replace(, '')) - parseFloat(b.price.replace('$', '').replace(, ''));
          return (
            parseFloat(a.price.replace('$', '').replace(',', '')) -
            parseFloat(b.price.replace('$', '').replace(',', ''))
          );
        case 'rating':
          return b.rating - a.rating;
        case 'newest':
          return (
            new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime()
          );
        default:
          return 0;      }          return parseFloat(a.price.replace('$', '').replace(, '')) - parseFloat(b.price.replace('$', '').replace(, ''));
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        case 'rating':
          return b.rating - a.rating;
        case 'newest':
          return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime();
        default: return 0
<<<<<<< HEAD
      }
    });


=======

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  const categories = [;
    { id: 'all', name: 'All Services', icon: '🚀', count: allServices && allServices.length },;
    {;
      id: 'AI & Machine Learning',;
      name: 'AI & ML',;
      icon: '🧠',;
      count: allServices && allServices.filter(s => s && s.category === 'AI & Machine Learning');
        .length,;
    },;
    {;
      id: 'Healthcare AI',;
      name: 'Healthcare',;
      icon: '🏥',;
      count: allServices && allServices.filter(s => s && s.category === 'Healthcare AI').length,;
    },;
    {;
      id: 'Fintech AI',;
      name: 'Fintech',;
      icon: '💰',;
      count: allServices && allServices.filter(s => s && s.category === 'Fintech AI').length,;
    },;
    {;
      id: 'Cybersecurity',;
      name: 'Security',;
      icon: '🛡️',;
      count: allServices && allServices.filter(s => s && s.category === 'Cybersecurity').length,;
    },;
    {;
      id: 'IoT & Smart Cities',;
      name: 'Smart Cities',;
      icon: '🏙️',;
      count: allServices && allServices.filter(s => s && s.category === 'IoT & Smart Cities');
        .length,;
    },;
    {;
      id: 'Blockchain & DeFi',;
      name: 'Blockchain',;
      icon: '🔗',;
      count: allServices && allServices.filter(s => s && s.category === 'Blockchain & DeFi').length,;
    },;
    {;
      id: 'Quantum Computing',;
      name: 'Quantum',;
      icon: '⚛️',;
      count: allServices && allServices.filter(s => s && s.category === 'Quantum Computing').length,;
    },;
    {;
      id: 'Space Technology',;
      name: 'Space Tech',;
      icon: '🚀',;
      count: allServices && allServices.filter(s => s && s.category === 'Space Technology').length,;
    },;
    {;
      id: 'Autonomous Systems',;
      name: 'Autonomous',;
      icon: '🤖',;
      count: allServices && allServices.filter(s => s && s.category === 'Autonomous Systems');
        .length,;
    },;
    {;
      id: 'AR/VR & Metaverse',;
      name: 'AR/VR',;
      icon: '🥽',;
      count: allServices && allServices.filter(s => s && s.category === 'AR/VR & Metaverse').length,;
    },;
    {;
      id: '5G/6G Networks',;
      name: '5G/6G',;
      icon: '📡',;
      count: allServices && allServices.filter(s => s && s.category === '5G/6G Networks').length,;
    },;
    {;
      id: 'Biotechnology AI',;
      name: 'Biotech',;
      icon: '🧬',;
      count: allServices && allServices.filter(s => s && s.category === 'Biotechnology AI').length,;
    },;
    {;
      id: 'Renewable Energy',;
      name: 'Energy',;
      icon: '⚡',;
      count: allServices && allServices.filter(s => s && s.category === 'Renewable Energy').length,;
    },;
    {;
      id: 'Edge Computing',;
      name: 'Edge',;
      icon: '🌐',;
      count: allServices && allServices.filter(s => s && s.category === 'Edge Computing').length,;
    },;
    {;
      id: 'Quantum Internet',;
      name: 'Q-Internet',;
      icon: '🌍',;
      count: allServices && allServices.filter(s => s && s.category === 'Quantum Internet').length,;
    },;
    {;
      id: 'Neuromorphic Computing',;
      name: 'Neuro',;
      icon: '🧠',;
      count: allServices && allServices.filter(s => s && s.category === 'Neuromorphic Computing');
        .length,;
    },  ];    { id: 'AI & Machine Learning', name: 'AI & ML', icon: '🧠', count: allServices && allServices.filter(s => s && s.category === 'AI & Machine Learning').length },;
    { id: 'Healthcare AI', name: 'Healthcare', icon: '🏥', count: allServices && allServices.filter(s => s && s.category === 'Healthcare AI').length },;
    { id: 'Fintech AI', name: 'Fintech', icon: '💰', count: allServices && allServices.filter(s => s && s.category === 'Fintech AI').length },;
    { id: 'Cybersecurity', name: 'Security', icon: '🛡️', count: allServices && allServices.filter(s => s && s.category === 'Cybersecurity').length },;
    { id: 'IoT & Smart Cities', name: 'Smart Cities', icon: '🏙️', count: allServices && allServices.filter(s => s && s.category === 'IoT & Smart Cities').length },;
    { id: 'Blockchain & DeFi', name: 'Blockchain', icon: '🔗', count: allServices && allServices.filter(s => s && s.category === 'Blockchain & DeFi').length },;
    { id: 'Quantum Computing', name: 'Quantum', icon: '⚛️', count: allServices && allServices.filter(s => s && s.category === 'Quantum Computing').length },;
    { id: 'Space Technology', name: 'Space Tech', icon: '🚀', count: allServices && allServices.filter(s => s && s.category === 'Space Technology').length },;
    { id: 'Autonomous Systems', name: 'Autonomous', icon: '🤖', count: allServices && allServices.filter(s => s && s.category === 'Autonomous Systems').length },;
    { id: 'AR/VR & Metaverse', name: 'AR/VR', icon: '🥽', count: allServices && allServices.filter(s => s && s.category === 'AR/VR & Metaverse').length },;
    { id: '5G/6G Networks', name: '5G/6G', icon: '📡', count: allServices && allServices.filter(s => s && s.category === '5G/6G Networks').length },;
    { id: 'Biotechnology AI', name: 'Biotech', icon: '🧬', count: allServices && allServices.filter(s => s && s.category === 'Biotechnology AI').length },;
    { id: 'Renewable Energy', name: 'Energy', icon: '⚡', count: allServices && allServices.filter(s => s && s.category === 'Renewable Energy').length },;
    { id: 'Edge Computing', name: 'Edge', icon: '🌐', count: allServices && allServices.filter(s => s && s.category === 'Edge Computing').length },;
    { id: 'Quantum Internet', name: 'Q-Internet', icon: '🌍', count: allServices && allServices.filter(s => s && s.category === 'Quantum Internet').length },;
    { id: 'Neuromorphic Computing', name: 'Neuro', icon: '🧠', count: allServices && allServices.filter(s => s && s.category === 'Neuromorphic Computing').length }

  // Filter and sort services;
  const filteredServices = allServices;
    .filter(service => {;
      const matchesCategory =;
        selectedCategory === 'all' || service && service.category === selectedCategory;
      const matchesSearch =;
        service && service.name.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()) ||;
        service && service.description.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()) ||;
        service && service.tagline.toLowerCase().includes(searchTerm && searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;    })      const matchesCategory = selectedCategory === 'all' || service && service.category === selectedCategory;
      const matchesSearch = service && service.name.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()) ||;
                           service && service.description.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()) ||;
                           service && service.tagline.toLowerCase().includes(searchTerm && searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    .sort((a, b) => {;
      switch (sortBy) {;
        case 'popularity':;
          return b && b.popular ? 1 : -1;
        case 'price':;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          return (
            parseFloat(a && a.price.replace('$', '').replace(',', '')) -;
            parseFloat(b && b.price.replace('$', '').replace(',', ''));
          );
        case 'rating':;
          return b && b.rating - a && a.rating;
        case 'newest':;
          return (
            new Date(b && b.launchDate).getTime() - new Date(a && a.launchDate).getTime();
          );
        default:;
          return 0;      }          return parseFloat(a && a.price.replace('$', '').replace(, '')) - parseFloat(b && b.price.replace('$', '').replace(, ''));
        case 'rating':;
          return b && b.rating - a && a.rating;
        case 'newest':;
          return new Date(b && b.launchDate).getTime() - new Date(a && a.launchDate).getTime();
        default: return 0;
    });
<<<<<<< HEAD





  const getCategoryIcon = (category: string) => {
    const categoryData = categories.find(cat => cat.id === category);


  const getCategoryIcon = (category: string) => {;
    const categoryData = categories && categories.find(cat => cat && cat.id === category);
    return categoryData?.icon || '🚀';
  };

  const formatPrice = (price: string) => {;
    return price && price.replace('$', '').replace(',', '');
  };

  return (
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    <section className='py-20 px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950'>;
      <div className='max-w-7xl mx-auto'>        {/* Header */}  };


  const formatPrice = (price: string) => {;
    return price && price.replace('$', '').replace(, '');
  };
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

  return (


        {/* Header */}
        <motion&& motion.div
<<<<<<< HEAD
=======

=======

  const getCategoryIcon = (category: string) => {;
    const categoryData = categories && categories.find(cat => cat && cat.id === category);
    return categoryData?.icon || '🚀';
  };
  const formatPrice = (price: string) => {;
    return price && price.replace('$', '').replace(',', '');
  };
  return (
    <section className='py-20 px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950'>;
      <div className='max-w-7xl mx-auto'>        {/* Header */}  };
    return categoryData?.icon || '🚀'
  };
  const formatPrice = (price: string) => {;
    return price && price.replace('$', '').replace(, '');
  };
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion&& motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0 && 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            Revolutionary Micro SAAS Services 2025
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
            Discover our cutting-edge micro SAAS solutions that are transforming industries and driving the future of technology
          </p>
          <div className="flex items-center justify-center gap-6 text-white/60 mb-8">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span>Enterprise-grade security</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5" />
              <span>AI-powered optimization</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5" />
              <span>Global deployment</span>
            </div>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-400">{allServices.length}+</div>
                <div className="text-white/60">Services Available</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400">99.9%</div>
                <div className="text-white/60">Uptime Guarantee</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400">24/7</div>
                <div className="text-white/60">Support Available</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-400">500%+</div>
                <div className="text-white/60">Average ROI</div>
        case 'popularity':
          return b.popular ? 1 : -1,
        case 'price':
          return parseFloat(a.price.replace('$', '').replace(, '')) - parseFloat(b.price.replace('$', '').replace(, '')),
        case 'rating':
          return b.rating - a.rating,
        case 'newest':
        case 'rating':
          return b.rating - a.rating,
        case 'newest':

          return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime(),
        default: return 0
      }
    }),

  const getCategoryIcon = (category: string) => {
    const categoryData = categories.find(cat => cat.id === category)
    return categoryData?.icon || '🚀'
  },

  const formatPrice = (price: string) => {
    return price.replace('$', '').replace(, '')
  },

  return (
    <section className=&quot;py-20 px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950&quot;>
      <div className=&quot;max-w-7xl mx-auto&quot;>
    });

  const getCategoryIcon = (category: string) => {
    const categoryData = categories.find(cat => cat.id === category);
    return categoryData?.icon |'🚀';
  }
  const formatPrice = (price: string) => {
    return price.replace('$', '').replace(',', '');
  }
  return (
    <section className='py-20 px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950'>
      <div className='max-w-7xl mx-auto'>        {/* Header */}  }
  const formatPrice = (price: string) => {
    return price.replace('$', '').replace(, '')
  }

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    <section className='py-20 px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950'>
      <div className='max-w-7xl mx-auto'>        {/* Header */}

        {/* Header */}

<<<<<<< HEAD

        <motion.div
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
        <motion.div
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0 && 0.8 }}
          viewport={{ once: true }}


<<<<<<< HEAD
=======
          className=&quot;text-center mb-16&quot;
        >
          <h2 className=&quot;text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent&quot;>
            Revolutionary Micro SAAS Services 2025
          </h2>
          <p className=&quot;text-xl text-white/70 max-w-3xl mx-auto mb-8&quot;>
            Discover our cutting-edge micro SAAS solutions that are transforming industries and driving the future of technology
          </p>
          <div className=&quot;flex items-center justify-center gap-6 text-white/60 mb-8&quot;>
            <div className=&quot;flex items-center gap-2&quot;>
              <Shield className=&quot;w-5 h-5&quot; />
              <span>Enterprise-grade security</span>
            </div>
            <div className=&quot;flex items-center gap-2&quot;>
              <Zap className=&quot;w-5 h-5&quot; />
              <span>AI-powered optimization</span>
            </div>
            <div className=&quot;flex items-center gap-2&quot;>
              <Globe className=&quot;w-5 h-5&quot; />
              <span>Global deployment</span>
            </div>
          </div>
          <div className=&quot;bg-white/5 rounded-2xl p-6 border border-white/10&quot;>
            <div className=&quot;grid grid-cols-1 md:grid-cols-4 gap-6 text-center&quot;>
              <div>
                <div className=&quot;text-3xl font-bold text-blue-400&quot;>{allServices.length}+</div>
                <div className=&quot;text-white/60&quot;>Services Available</div>
              </div>
              <div>
                <div className=&quot;text-3xl font-bold text-green-400&quot;>99.9%</div>
                <div className=&quot;text-white/60&quot;>Uptime Guarantee</div>
              </div>
              <div>
                <div className=&quot;text-3xl font-bold text-purple-400&quot;>24/7</div>
                <div className=&quot;text-white/60&quot;>Support Available</div>
              </div>
              <div>
                <div className=&quot;text-3xl font-bold text-orange-400&quot;>500%+</div>
                <div className=&quot;text-white/60&quot;>Average ROI</div>

          className='text-center mb-16'

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        >
          <h2 className='text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent'>
            Revolutionary Micro SAAS Services 2025
          </h2>
          <p className='text-xl text-white/70 max-w-3xl mx-auto mb-8'>
            Discover our cutting-edge micro SAAS solutions that are transforming
            industries and driving the future of technology
          </p>
          <div className='flex items-center justify-center gap-6 text-white/60 mb-8'>
            <div className='flex items-center gap-2'>
              <Shield className='w-5 h-5' />
              <span>Enterprise-grade security</span>
            </div>
            <div className='flex items-center gap-2'>
              <Zap className='w-5 h-5' />
              <span>AI-powered optimization</span>
            </div>
            <div className='flex items-center gap-2'>
              <Globe className='w-5 h-5' />
              <span>Global deployment</span>
            </div>
          </div>
          <div className='bg-white/5 rounded-2xl p-6 border border-white/10'>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-6 text-center'>
              <div>
                <div className='text-3xl font-bold text-blue-400'>
                  {allServices.length}+
                </div>
                <div className='text-white/60'>Services Available</div>
              </div>
              <div>
                <div className='text-3xl font-bold text-green-400'>99.9%</div>
                <div className='text-white/60'>Uptime Guarantee</div>
              </div>
              <div>
                <div className='text-3xl font-bold text-purple-400'>24/7</div>
                <div className='text-white/60'>Support Available</div>
              </div>
              <div>
                <div className='text-3xl font-bold text-orange-400'>500%+</div>
                <div className='text-white/60'>Average ROI</div>              </div>        >
=======
          className="text-center mb-16"
        >
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            Revolutionary Micro SAAS Services 2025
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
            Discover our cutting-edge micro SAAS solutions that are transforming industries and driving the future of technology
          </p>
          <div className="flex items-center justify-center gap-6 text-white/60 mb-8">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span>Enterprise-grade security</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5" />
              <span>AI-powered optimization</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5" />
              <span>Global deployment</span>
            </div>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-400">{allServices.length}+</div>
                <div className="text-white/60">Services Available</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400">99.9%</div>
                <div className="text-white/60">Uptime Guarantee</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400">24/7</div>
                <div className="text-white/60">Support Available</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-400">500%+</div>
                <div className="text-white/60">Average ROI</div>
              </div>
            </div>
          </div>
        </motion.div>


          className='text-center mb-16'>;
<<<<<<< HEAD
=======
className='text-center mb-16'>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          <h2 className='text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent'>;
            Revolutionary Micro SAAS Services 2025;
          </h2>;
          <p className='text-xl text-white/70 max-w-3xl mx-auto mb-8'>;
            Discover our cutting-edge micro SAAS solutions that are transforming;
            industries and driving the future of technology;
          </p>;
          <div className='flex items-center justify-center gap-6 text-white/60 mb-8'>;
            <div className='flex items-center gap-2'>;
              <Shield className='w-5 h-5' />;
              <span>Enterprise-grade security</span>;
            </div>;
            <div className='flex items-center gap-2'>;
              <Zap className='w-5 h-5' />;
              <span>AI-powered optimization</span>;
            </div>;
            <div className='flex items-center gap-2'>;
              <Globe className='w-5 h-5' />;
              <span>Global deployment</span>;
            </div>;
          </div>;
          <div className='bg-white/5 rounded-2xl p-6 border border-white/10'>;
            <div className='grid grid-cols-1 md:grid-cols-4 gap-6 text-center'>;
              <div>;
                <div className='text-3xl font-bold text-blue-400'>;
                  {allServices && allServices.length}+;
                </div>;
                <div className='text-white/60'>Services Available</div>;
              </div>;
              <div>;
                <div className='text-3xl font-bold text-green-400'>99 && 99.9%</div>;
                <div className='text-white/60'>Uptime Guarantee</div>;
              </div>;
              <div>;
                <div className='text-3xl font-bold text-purple-400'>24/7</div>;
                <div className='text-white/60'>Support Available</div>;
              </div>;
              <div>;
                <div className='text-3xl font-bold text-orange-400'>500%+</div>;
                <div className='text-white/60'>Average ROI</div>              </div>        >;
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">;
            Revolutionary Micro SAAS Services 2025;
          </h2>;
          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">;
            Discover our cutting-edge micro SAAS solutions that are transforming industries and driving the future of technology;
          </p>;
          <div className="flex items-center justify-center gap-6 text-white/60 mb-8">;
            <div className="flex items-center gap-2">;
              <Shield className="w-5 h-5" />;
              <span>Enterprise-grade security</span>;
            </div>;
            <div className="flex items-center gap-2">;
              <Zap className="w-5 h-5" />;
              <span>AI-powered optimization</span>;
            </div>;
            <div className="flex items-center gap-2">;
              <Globe className="w-5 h-5" />;
              <span>Global deployment</span>;
            </div>;
          </div>;
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">;
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">;
              <div>;
                <div className="text-3xl font-bold text-blue-400">{allServices && allServices.length}+</div>;
                <div className="text-white/60">Services Available</div>;
              </div>;
              <div>;
                <div className="text-3xl font-bold text-green-400">99 && 99.9%</div>;
                <div className="text-white/60">Uptime Guarantee</div>;
              </div>;
              <div>;
                <div className="text-3xl font-bold text-purple-400">24/7</div>;
                <div className="text-white/60">Support Available</div>;
              </div>;
              <div>;
                <div className="text-3xl font-bold text-orange-400">500%+</div>;
                <div className="text-white/60">Average ROI</div>;
              </div>;
            </div>;
          </div>;
        </motion && motion.div>;

<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        {/* Search and Filters */}
        <motion&& motion.div
=======


        {/* Search and Filters */}
        <motion&& motion.div
        {/* Search and Filters */}
        <motion&& motion.div

        {/* Search and Filters */}
        <motion.div
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0 && 0.6 }}
          viewport={{ once: true }}


        >
          <div className='flex flex-col lg:flex-row gap-6 items-center justify-between'>
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
                onChange={e => setSearchTerm(e && e.target.value)}
                className='w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20'              />;
            </div>;
            {/* Sort and View Controls */}
            <div className='flex items-center gap-4'>        >;
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">;
          className="mb-12"
        >
          className='mb-12'

        >
          <div className='flex flex-col lg:flex-row gap-6 items-center justify-between'>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            {/* Search */}
            <div className='relative flex-1 max-w-md'>;
              <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 w-5 h-5' />;
              <input
                type='text'
                placeholder='Search services...'
                value={searchTerm}

          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">

<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
                onChange={e => setSearchTerm(e.target.value)}
                className='w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20'              />
            </div>
            {/* Sort and View Controls */}
            <div className='flex items-center gap-4'>        >
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            {/* Search */}
            <div className="relative flex-1 max-w-md">;
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 w-5 h-5" />;
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
<<<<<<< HEAD


            {/* Sort and View Controls */}

=======
                onChange={(e) => setSearchTerm(e && e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20";
              />;
            </div>;
            {/* Sort and View Controls */}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                onChange={e => setSortBy(e && e.target.value as any)}
                className='bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-400';
=======
  Star,
  Clock,
  Users,
  TrendingUp,
  CheckCircle,
  ExternalLink,
  ChevronRight,
  Shield,
  Zap,
  Globe,
  Rocket,
  Brain,
  Atom,
  Search,
  Filter,
  Grid,
  List,
  ArrowRight,
  Award,
  Target,
} from 'lucide-react';
import { comprehensiveMicroSaasServices } from '../data / comprehensive - 2025 - micro - saas - expansion';
import { specializedEmergingTechServices } from '../data / specialized - emerging - tech - services - 2025';import {
  Star, Clock, Users, TrendingUp, CheckCircle, ExternalLink,
  ChevronRight, Shield, Zap, Globe, Rocket, Brain, Atom;
  Search, Filter, Grid, List, ArrowRight, Award, Target;
} from 'lucide-react';
import { comprehensiveMicroSaasServices } from '../data / comprehensive - 2025 - micro - saas - expansion';
import { specializedEmergingTechServices } from '../data / specialized - emerging - tech - services - 2025';
  const [selected_category, setSelectedCategory] = useState ('all');
  const [selected_service, setSelectedService] = useState < string | null>(null);
  const [search_term, setSearchTerm] = useState ('');
  const [view_mode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sort_by, setSortBy] = useState<;
    'popularity' | 'price' | 'rating' | 'newest';
  >('popularity');
  // Combine all services;
  const all_services = [;
    ...comprehensiveMicroSaasServices,
    ...specializedEmergingTechServices,
  ];
;
  const categories = [;
    { id: 'all', name: 'All Services', icon: '🚀', count: all_services.length },
    {
      id: 'AI & Machine Learning',
      name: 'AI & ML',
      icon: '🧠',
      count: all_services.filter (string => s.category === 'AI & Machine Learning');
        .length,
    },
    {
      id: 'Healthcare AI',
      name: 'Healthcare',
      icon: '🏥',
      count: all_services.filter (string => s.category === 'Healthcare AI').length,
    },
    {
      id: 'Fintech AI',
      name: 'Fintech',
      icon: '💰',
      count: all_services.filter (string => s.category === 'Fintech AI').length,
    },
    {
      id: 'Cybersecurity',
      name: 'Security',
      icon: '🛡️',
      count: all_services.filter (string => s.category === 'Cybersecurity').length,
    },
    {
      id: 'IoT & Smart Cities',
      name: 'Smart Cities',
      icon: '🏙️',
      count: all_services.filter (string => s.category === 'IoT & Smart Cities');
        .length,
    },
    {
      id: 'Blockchain & DeFi',
      name: 'Blockchain',
      icon: '🔗',
      count: all_services.filter (string => s.category === 'Blockchain & DeFi').length,
    },
    {
      id: 'Quantum Computing',
      name: 'Quantum',
      icon: '⚛️',
      count: all_services.filter (string => s.category === 'Quantum Computing').length,
    },
    {
      id: 'Space Technology',
      name: 'Space Tech',
      icon: '🚀',
      count: all_services.filter (string => s.category === 'Space Technology').length,
    },
    {
      id: 'Autonomous Systems',
      name: 'Autonomous',
      icon: '🤖',
      count: all_services.filter (string => s.category === 'Autonomous Systems');
        .length,
    },
    {
      id: 'AR / VR & Metaverse',
      name: 'AR / VR',
      icon: '🥽',
      count: all_services.filter (string => s.category === 'AR / VR & Metaverse').length,
    },
    {
      id: '5G / 6G Networks',
      name: '5G / 6G',
      icon: '📡',
      count: all_services.filter (string => s.category === '5G / 6G Networks').length,
    },
    {
      id: 'Biotechnology AI',
      name: 'Biotech',
      icon: '🧬',
      count: all_services.filter (string => s.category === 'Biotechnology AI').length,
    },
    {
      id: 'Renewable Energy',
      name: 'Energy',
      icon: '⚡',
      count: all_services.filter (string => s.category === 'Renewable Energy').length,
    },
    {
      id: 'Edge Computing',
      name: 'Edge',
      icon: '🌐',
      count: all_services.filter (string => s.category === 'Edge Computing').length,
    },
    {
      id: 'Quantum Internet',
      name: 'Q - Internet',
      icon: '🌍',
      count: all_services.filter (string => s.category === 'Quantum Internet').length,
    },
    {
      id: 'Neuromorphic Computing',
      name: 'Neuro',
      icon: '🧠',
      count: all_services.filter (string => s.category === 'Neuromorphic Computing');
        .length,
    },  ];    { id: 'AI & Machine Learning', name: 'AI & ML', icon: '🧠', count: all_services.filter (string => s.category === 'AI & Machine Learning').length },
    { id: 'Healthcare AI', name: 'Healthcare', icon: '🏥', count: all_services.filter (string => s.category === 'Healthcare AI').length },
    { id: 'Fintech AI', name: 'Fintech', icon: '💰', count: all_services.filter (string => s.category === 'Fintech AI').length },
    { id: 'Cybersecurity', name: 'Security', icon: '🛡️', count: all_services.filter (string => s.category === 'Cybersecurity').length },
    { id: 'IoT & Smart Cities', name: 'Smart Cities', icon: '🏙️', count: all_services.filter (string => s.category === 'IoT & Smart Cities').length },
    { id: 'Blockchain & DeFi', name: 'Blockchain', icon: '🔗', count: all_services.filter (string => s.category === 'Blockchain & DeFi').length },
    { id: 'Quantum Computing', name: 'Quantum', icon: '⚛️', count: all_services.filter (string => s.category === 'Quantum Computing').length },
    { id: 'Space Technology', name: 'Space Tech', icon: '🚀', count: all_services.filter (string => s.category === 'Space Technology').length },
    { id: 'Autonomous Systems', name: 'Autonomous', icon: '🤖', count: all_services.filter (string => s.category === 'Autonomous Systems').length },
    { id: 'AR / VR & Metaverse', name: 'AR / VR', icon: '🥽', count: all_services.filter (string => s.category === 'AR / VR & Metaverse').length },
    { id: '5G / 6G Networks', name: '5G / 6G', icon: '📡', count: all_services.filter (string => s.category === '5G / 6G Networks').length },
    { id: 'Biotechnology AI', name: 'Biotech', icon: '🧬', count: all_services.filter (string => s.category === 'Biotechnology AI').length },
    { id: 'Renewable Energy', name: 'Energy', icon: '⚡', count: all_services.filter (string => s.category === 'Renewable Energy').length },
    { id: 'Edge Computing', name: 'Edge', icon: '🌐', count: all_services.filter (string => s.category === 'Edge Computing').length },
    { id: 'Quantum Internet', name: 'Q - Internet', icon: '🌍', count: all_services.filter (string => s.category === 'Quantum Internet').length },
    { id: 'Neuromorphic Computing', name: 'Neuro', icon: '🧠', count: all_services.filter (string => s.category === 'Neuromorphic Computing').length }
  // Filter and sort services;
  const filtered_services = all_services;
    .filter (service => {
      const matches_category =;
        selected_category === 'all' || service.category === selected_category;
      const matches_search =;
        service.name.toLowerCase ().includes (search_term.toLowerCase ()) ||;
        service.description.toLowerCase ().includes (search_term.toLowerCase ()) ||;
        service.tagline.toLowerCase ().includes (search_term.toLowerCase ());
      return matches_category && matches_search;    })      const matches_category = selected_category === 'all' || service.category === selected_category;
      const matches_search = service.name.toLowerCase ().includes (search_term.toLowerCase ()) ||;
                          service.description.toLowerCase ().includes (search_term.toLowerCase ()) ||;
                          service.tagline.toLowerCase ().includes (search_term.toLowerCase ());
      return matches_category && matches_search;
    .sort ((a, b) => {
      switch (sort_by) {
        case 'popularity':;
          return b.popular ? 1 : -1;
        case 'price':;
          return (
            parse_float (a.price.replace ('$', '').replace (', ', '')) -;
            parse_float (b.price.replace ('$', '').replace (', ', '')));
        case 'rating':;
          return b.rating - a.rating;
        case 'newest':;
          return (
            new Date (b.launch_date).get_time () - new Date (a.launch_date).get_time ());
        default:;
          return 0;      }          return parse_float (a.price.replace ('$', '').replace (, '')) - parse_float (b.price.replace ('$', '').replace (, ''));
        case 'rating':;
          return b.rating - a.rating;
        case 'newest':;
          return new Date (b.launch_date).get_time () - new Date (a.launch_date).get_time ();
        default: return 0;
    });
;
  const getCategoryIcon = (category: string) =>: any {
    const category_data = categories.find (cat => cat.id === category);
    return category_data?.icon || '🚀';
  }
;
  const format_price = (price: string) =>: any {
    return price.replace ('$', '').replace (', ', '');
  }
;
  return (
    <section className='py - 20 px - 6 bg - gradient - to - br from - slate - 950 via - slate - 900 to - slate - 950'>;
      <div className='max - w-7xl mx - auto'>        {/* Header */}  }
;
  const format_price = (price: string) =>: any {
    return price.replace ('$', '').replace (, '');
  }
;
  return (
    <section className="py - 20 px - 6 bg - gradient - to - br from - slate - 950 via - slate - 900 to - slate - 950">;
      <div className="max - w-7xl mx - auto">;
        {/* Header */}
        <motion.div;
          initial={{ opacity: 0, coordinate_y: 30 }}
          whileInView={{ opacity: 1, coordinate_y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text - center mb - 16';
        >;
          <h2 className='text - 4xl md:text - 5xl font - bold mb - 6 bg - gradient - to - r from - white to - blue - 100 bg - clip - text text - transparent'>;
            Revolutionary Micro SAAS Services 2025;
          </h2>;
          <p className='text - xl text - white / 70 max - w-3xl mx - auto mb - 8'>;
            Discover our cutting - edge micro SAAS solutions that are transforming;
            industries and driving the future of technology;
          </p>;
          <div className='flex items - center justify - center gap - 6 text - white / 60 mb - 8'>;
            <div className='flex items - center gap - 2'>;
              <Shield className='w - 5 h - 5' />;
              <span > Enterprise - grade security</span>;
            </div>;
            <div className='flex items - center gap - 2'>;
              <Zap className='w - 5 h - 5' />;
              <span > AI - powered optimization</span>;
            </div>;
            <div className='flex items - center gap - 2'>;
              <Globe className='w - 5 h - 5' />;
              <span > Global deployment</span>;
            </div>;
          </div>;
          <div className='bg - white / 5 rounded - 2xl p - 6 border border - white / 10'>;
            <div className='grid grid - cols - 1 md:grid - cols - 4 gap - 6 text - center'>;
              <div>;
                <div className='text - 3xl font - bold text - blue - 400'>;
                  {all_services.length}+;
                </div>;
                <div className='text - white / 60'>Services Available</div>;
              </div>;
              <div>;
                <div className='text - 3xl font - bold text - green - 400'>99.9%</div>;
                <div className='text - white / 60'>Uptime Guarantee</div>;
              </div>;
              <div>;
                <div className='text - 3xl font - bold text - purple - 400'>24 / 7</div>;
                <div className='text - white / 60'>Support Available</div>;
              </div>;
              <div>;
                <div className='text - 3xl font - bold text - orange - 400'>500%+</div>;
                <div className='text - white / 60'>Average ROI</div>              </div>        >;
          <h2 className="text - 4xl md:text - 5xl font - bold mb - 6 bg - gradient - to - r from - white to - blue - 100 bg - clip - text text - transparent">;
            Revolutionary Micro SAAS Services 2025;
          </h2>;
          <p className="text - xl text - white / 70 max - w-3xl mx - auto mb - 8">;
            Discover our cutting - edge micro SAAS solutions that are transforming industries and driving the future of technology;
          </p>;
          <div className="flex items - center justify - center gap - 6 text - white / 60 mb - 8">;
            <div className="flex items - center gap - 2">;
              <Shield className="w - 5 h - 5" />;
              <span > Enterprise - grade security</span>;
            </div>;
            <div className="flex items - center gap - 2">;
              <Zap className="w - 5 h - 5" />;
              <span > AI - powered optimization</span>;
            </div>;
            <div className="flex items - center gap - 2">;
              <Globe className="w - 5 h - 5" />;
              <span > Global deployment</span>;
            </div>;
          </div>;
          <div className="bg - white / 5 rounded - 2xl p - 6 border border - white / 10">;
            <div className="grid grid - cols - 1 md:grid - cols - 4 gap - 6 text - center">;
              <div>;
                <div className="text - 3xl font - bold text - blue - 400">{all_services.length}+</div>;
                <div className="text - white / 60">Services Available</div>;
              </div>;
              <div>;
                <div className="text - 3xl font - bold text - green - 400">99.9%</div>;
                <div className="text - white / 60">Uptime Guarantee</div>;
              </div>;
              <div>;
                <div className="text - 3xl font - bold text - purple - 400">24 / 7</div>;
                <div className="text - white / 60">Support Available</div>;
              </div>;
              <div>;
                <div className="text - 3xl font - bold text - orange - 400">500%+</div>;
                <div className="text - white / 60">Average ROI</div>;
              </div>;
            </div>;
          </div>;
        </motion.div>;
        {/* Search and Filters */}
        <motion.div;
          initial={{ opacity: 0, coordinate_y: 20 }}
          whileInView={{ opacity: 1, coordinate_y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='mb - 12';
        >;
          <div className='flex flex - col lg:flex - row gap - 6 items - center justify - between'>;
            {/* Search */}
            <div className='relative flex - 1 max - w-md'>;
              <Search className='absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - white / 40 w - 5 h - 5' />;
              <input;
                type='text';
                placeholder='Search services...';
                value={search_term}
                on_change={e => setSearchTerm (e.target.value)}
                className='w - full pl - 10 pr - 4 py - 3 bg - white / 10 border border - white / 20 rounded - xl text - white placeholder - white / 40 focus:outline - none focus:border - blue - 400 focus:ring - 2 focus:ring - blue - 400 / 20'              />;
            </div>;
            {/* Sort and View Controls */}
            <div className='flex items - center gap - 4'>        >;
          <div className="flex flex - col lg:flex - row gap - 6 items - center justify - between">;
            {/* Search */}
            <div className="relative flex - 1 max - w-md">;
              <Search className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - white / 40 w - 5 h - 5" />;
              <input;
                type="text";
                placeholder="Search services...";
                value={search_term}
                on_change={(e) => setSearchTerm (e.target.value)}
                className="w - full pl - 10 pr - 4 py - 3 bg - white / 10 border border - white / 20 rounded - xl text - white placeholder - white / 40 focus:outline - none focus:border - blue - 400 focus:ring - 2 focus:ring - blue - 400 / 20";
              />;
            </div>;
            {/* Sort and View Controls */}
            <div className='flex items - center gap - 4'>;
              <select;
                value={sort_by}
                on_change={e => setSortBy (e.target.value as any)}
                className='bg - white / 10 border border - white / 20 rounded - xl px - 4 py - 3 text - white focus:outline - none focus:border - blue - 400';
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              >;
                <option value='popularity'>Most Popular</option>;
                <option value='price'>Price: Low to High</option>;
                <option value='rating'>Highest Rated</option>;
                <option value='newest'>Newest First</option>;
              </select>;
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            <div className="flex items-center gap-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-400"
              >
                <option value="popularity">Most Popular</option>
                <option value="price">Price: Low to High</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest First</option>
              </select>
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              <div className='flex bg-white/10 rounded-xl p-1'>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all ${;
                    viewMode === 'grid';
                      ? 'bg-blue-600 text-white';
                      : 'text-white/60 hover:text-white';
                  }`}
<<<<<<< HEAD

=======
                >
                  <Grid className="w-5 h-5" />
            <div className='flex items-center gap-4'>

              />
            </div>

            {/* Sort and View Controls */}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all ${


                </button>


<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
                    viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-white/60 hover:text-white'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
                    viewMode === 'list'
                      ? 'bg-blue-600 text-white'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  <List className='w-5 h-5' />                </button>                    viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-white/60 hover:text-white'
                  }`}
                >
                  <List className="w-5 h-5" />

                </button>

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              </div>
            </div>
          </div>
        </motion.div>


                >;
<<<<<<< HEAD
=======
>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                  <List className="w-5 h-5" />;
              </div>;
            </div>;
          </div>;
        </motion && motion.div>;

<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        {/* Category Filter */}
        <motion&& motion.div
=======


        {/* Category Filter */}
        <motion&& motion.div
        {/* Category Filter */}
        <motion&& motion.div

        {/* Category Filter */}
        <motion.div
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0 && 0.6 }}
          viewport={{ once: true }}


<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
              <div className='flex bg - white / 10 rounded - xl p - 1'>;
                <button;
                  on_click={() => setViewMode ('grid')}
                  className={`p - 2 rounded - lg transition - all ${
                    view_mode === 'grid';
                      ? 'bg - blue - 600 text - white';
                      : 'text - white / 60 hover:text - white';
                  }`}
                >;
                  <Grid className='w - 5 h - 5' />                </button>                <button;
                  on_click={() => setViewMode ('list')}
                  className={`p - 2 rounded - lg transition - all ${
                    view_mode === 'grid' ? 'bg - blue - 600 text - white' : 'text - white / 60 hover:text - white';
                  }`}
                >;
                  <Grid className="w - 5 h - 5" />;
                </button>;
                <button;
                  on_click={() => setViewMode ('list')}
                  className={`p - 2 rounded - lg transition - all ${
                    view_mode === 'list';
                      ? 'bg - blue - 600 text - white';
                      : 'text - white / 60 hover:text - white';
                  }`}
                >;
                  <List className='w - 5 h - 5' />                </button>                    view_mode === 'list' ? 'bg - blue - 600 text - white' : 'text - white / 60 hover:text - white';
                  }`}
                >;
                  <List className="w - 5 h - 5" />;
              </div>;
            </div>;
          </div>;
        </motion.div>;
        {/* Category Filter */}
        <motion.div;
          initial={{ opacity: 0, coordinate_y: 20 }}
          whileInView={{ opacity: 1, coordinate_y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='mb - 12';
        >;
          <div className='flex flex - wrap justify - center gap - 3'>;
            {categories.map (category => (              <button          className="mb - 12";
        >;
          <div className="flex flex - wrap justify - center gap - 3">;
            {categories.map ((category) => (
          className='mb-12'
        >
          <div className='flex flex-wrap justify-center gap-3'>
            {categories.map(category => (              <button          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
            {categories.map(category => (              <button

              <button

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                key={category.id}
                on_click={() => setSelectedCategory (category.id)}
                className={`px - 6 py - 3 rounded - full font - medium transition - all duration - 300 flex items - center gap - 2 ${
                  selected_category === category.id;
                    ? 'bg - gradient - to - r from - blue - 600 to - cyan - 600 text - white shadow - lg';
                    : 'bg - white / 10 text - white / 70 hover:bg - white / 20 hover:text - white';
                }`}
              >;
                <span>{category.icon}</span>;
                {category.name}

          </div>;
        </motion && motion.div>;




            ))}
          </div>
        </motion.div>


<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
          </div>;
        </motion && motion.div>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        {/* Services Display */}
        {viewMode === 'grid' ? (;
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>            <AnimatePresence>          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            <AnimatePresence>;
              {filteredServices && filteredServices.map((service, index) => (;
                <motion&& motion.div
                  key={service && service.id}
<<<<<<< HEAD
=======
                <span className='text-xs bg-white/20 px-2 py-1 rounded-full'>
                  {category.count}
                </span>              </button>                <span className="text-xs bg-white/20 px-2 py-1 rounded-full">{category.count}</span>
              </button>
            ))}
          </div>
        </motion.div>

            ))}
          </div>
        </motion.div>

        {/* Services Display */}
        {viewMode === 'grid' ? (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>            <AnimatePresence>          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
                  className='group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl'>;
                  {/* Popular Badge */}
<<<<<<< HEAD


=======
                  {service && service.popular && (;
                    <div className='absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1'>;
                      <Star className='w-3 h-3' />                      Popular                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl";
                >;
                  {/* Popular Badge */}
                  {service && service.popular && (;
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">;
                      <Star className="w-3 h-3" />;
                    </div>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        {/* Services Display */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredServices.map((service, index) => (
                <motion.div
=======
                <span className='text - xs bg - white / 20 px - 2 py - 1 rounded - full'>;
                  {category.count}
                </span>              </button>                <span className="text - xs bg - white / 20 px - 2 py - 1 rounded - full">{category.count}</span>;
              </button>))}
          </div>;
        </motion.div>;
        {/* Services Display */}
        {view_mode === 'grid' ? (
          <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8'>            <AnimatePresence>          <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8">;
            <AnimatePresence>;
              {filtered_services.map ((service, index) => (
                <motion.div;
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                  key={service.id}
                  initial={{ opacity: 0, coordinate_y: 30 }}
                  animate={{ opacity: 1, coordinate_y: 0 }}
                  exit={{ opacity: 0, coordinate_y: -30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}

                      <Star className='w-3 h-3' />                      Popular

                      Popular




                    </div>
                  )}
                  {/* Service Content */}

<<<<<<< HEAD
                  className='group relative overflow - hidden rounded - 2xl border border - white / 10 bg - gradient - to - br from - white / 5 to - white / 10 backdrop - blur - xl hover:border - cyan - 400 / 30 transition - all duration - 300 transform hover:scale - 105 hover:shadow - 2xl';
                >;
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className='absolute top - 4 right - 4 bg - gradient - to - r from - yellow - 400 to - orange - 500 text - black text - xs font - bold px - 3 py - 1 rounded - full flex items - center gap - 1'>;
                      <Star className='w - 3 h - 3' />                      Popular                  className="group relative overflow - hidden rounded - 2xl border border - white / 10 bg - gradient - to - br from - white / 5 to - white / 10 backdrop - blur - xl hover:border - cyan - 400 / 30 transition - all duration - 300 transform hover:scale - 105 hover:shadow - 2xl";
                >;
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute top - 4 right - 4 bg - gradient - to - r from - yellow - 400 to - orange - 500 text - black text - xs font - bold px - 3 py - 1 rounded - full flex items - center gap - 1">;
                      <Star className="w - 3 h - 3" />;
                    </div>)}
                  {/* Service Content */}
                  <div className='p - 6'>;
                    <div className='flex items - start justify - between mb - 4'>;
                      <div className='text - 4xl'>{service.icon}</div>;
                      <div className='text - right'>;
                        <div className='text - 2xl font - bold text - white'>;

=======
                  className='group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl'
                >
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className='absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1'>
                      <Star className='w-3 h-3' />                      Popular                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                >
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                      <Star className="w-3 h-3" />
                    </div>
                  )}
                      <Star className='w-3 h-3' />                      Popular

                      Popular

                    </div>
                  )}

                  {/* Service Content */}
                  <div className='p-6'>
                    <div className='flex items-start justify-between mb-4'>
                      <div className='text-4xl'>{service.icon}</div>
                      <div className='text-right'>
                        <div className='text-2xl font-bold text-white'>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                          {service.price}
                        </div>;
                        <div className='text - xs text - white / 60'>;
                          {service.period}
<<<<<<< HEAD





>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                      </div>
                    </div>
                    <h3 className='text-xl font-bold text-white mb-2'>
=======
                        </div>;
                      </div>;
                    </div>;
                    <h3 className='text - xl font - bold text - white mb - 2'>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
                        </div>

                      </div>
                    </div>
                    <h3 className='text-xl font-bold text-white mb-2'>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                      {service.name}
                    </h3>;
                    <p className='text - white / 70 text - sm mb - 4'>;
                      {service.tagline}
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                  <div className='p-6'>;
                    <div className='flex items-start justify-between mb-4'>;
                      <div className='text-4xl'>{service && service.icon}</div>;
                      <div className='text-right'>;
                        <div className='text-2xl font-bold text-white'>;
                          {service && service.price}
                        </div>;
                        <div className='text-xs text-white/60'>;
                          {service && service.period}
                        </div>;
                      </div>;
                    </div>;

                    <h3 className='text-xl font-bold text-white mb-2'>;
                      {service && service.name}
                    </h3>;
                    <p className='text-white/70 text-sm mb-4'>;
                      {service && service.tagline}
                    </p>;
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                    {/* Features */}
                    <div className='space-y-2 mb-6'>;
                      {service && service.features.slice(0, 3).map((feature, idx) => (;
                        <div
                          key={idx}
<<<<<<< HEAD


=======
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl">{service.icon}</div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-white">{service.price}</div>
                        <div className="text-xs text-white/60">{service.period}</div>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-white/70 text-sm mb-4">{service.tagline}</p>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                          className='flex items-center gap-2 text-sm text-white/60'>;
                          <CheckCircle className='w-4 h-4 text-green-400' />                          {feature}                      </div>;
                    </div>;

                    <h3 className="text-xl font-bold text-white mb-2">{service && service.name}</h3>;
                    <p className="text-white/70 text-sm mb-4">{service && service.tagline}</p>;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                    {/* Features */}
<<<<<<< HEAD


                          {feature}
                        </div>;
                      ))}

=======
                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-white/60">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          {feature}
                        </div>;
                      ))}

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                    </p>;
                    {/* Features */}
                    <div className='space - y-2 mb - 6'>;
                      {service.features.slice (0, 3).map ((feature, idx) => (
                        <div;
                          key={idx}
                          className='flex items - center gap - 2 text - sm text - white / 60';
                        >;
                          <CheckCircle className='w - 4 h - 4 text - green - 400' />                          {feature}                      </div>;
                    </div>;
                    <h3 className="text - xl font - bold text - white mb - 2">{service.name}</h3>;
                    <p className="text - white / 70 text - sm mb - 4">{service.tagline}</p>;
                    {/* Features */}
                    <div className="space - y-2 mb - 6">;
                      {service.features.slice (0, 3).map ((feature, idx) => (
                        <div key={idx} className="flex items - center gap - 2 text - sm text - white / 60">;
                          <CheckCircle className="w - 4 h - 4 text - green - 400" />;
                          {feature}
                        </div>))}
                    </div>;
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                    {/* Stats */}
                    <div className='grid grid - cols - 3 gap - 4 mb - 6 text - center'>;
                      <div>;
                        <div className='text - lg font - bold text - blue - 400'>;


                    {/* Stats */}
                    <div className='grid grid-cols-3 gap-4 mb-6 text-center'>


                      <div>
                        <div className='text-lg font-bold text-blue-400'>
                          {service.rating}

                    </div>
<<<<<<< HEAD

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                      <div>

=======
                    {/* Stats */}
                    <div className='grid grid-cols-3 gap-4 mb-6 text-center'>

                    {/* Stats */}
                    <div className='grid grid-cols-3 gap-4 mb-6 text-center'>

                      <div>
                        <div className='text-lg font-bold text-blue-400'>
                          {service.rating}
                    </div>
                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                      <div>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                        <div className="text-lg font-bold text-blue-400">{service.rating}</div>
                        <div className="text-xs text-white/60">Rating</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-green-400">{service.customers}+</div>
                        <div className="text-xs text-white/60">Customers</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-purple-400">{service.trialDays}d</div>
                        <div className="text-xs text-white/60">Trial</div>
                      </div>
                    </div>

<<<<<<< HEAD
=======
                    {/* CTA */}
                    <a
                      href={service.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 px-4 rounded-xl font-medium text-center block hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2'
                    >
                      Learn More
                      <ExternalLink className='w-4 h-4' />                    </a>                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 px-4 rounded-xl font-medium text-center block hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      Learn More
                      <ExternalLink className="w-4 h-4" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className='space-y-6'>            <AnimatePresence>          <div className="space-y-6">
            <AnimatePresence>
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className='group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 p-6'

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                    </div>;

                    {/* Stats */}
                    <div className='grid grid-cols-3 gap-4 mb-6 text-center'>;
                      <div>;
                        <div className='text-lg font-bold text-blue-400'>;
                          {service && service.rating}
                        </div>;
                        <div className='text-xs text-white/60'>Rating</div>;
                      </div>;
                      <div>;
                        <div className='text-lg font-bold text-green-400'>;
                          {service && service.customers}+;
                        </div>;
                        <div className='text-xs text-white/60'>Customers</div>;
                      </div>;
                      <div>;
                        <div className='text-lg font-bold text-purple-400'>;
                          {service && service.trialDays}d;
                        </div>;
                        <div className='text-xs text-white/60'>Trial</div>                      </div>                      <div>;
                        <div className="text-lg font-bold text-blue-400">{service && service.rating}</div>;
                        <div className="text-xs text-white/60">Rating</div>;
                      </div>;
                      <div>;
                        <div className="text-lg font-bold text-green-400">{service && service.customers}+</div>;
                        <div className="text-xs text-white/60">Customers</div>;
                      </div>;
                      <div>;
                        <div className="text-lg font-bold text-purple-400">{service && service.trialDays}d</div>;
                        <div className="text-xs text-white/60">Trial</div>;
                      </div>;
                    </div>;


<<<<<<< HEAD
=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======


>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                    {/* CTA */}
                    <a

                      )}

                >
<<<<<<< HEAD
=======
                    {/* CTA */}
                    <a
                        </div>;
                        <div className='text - xs text - white / 60'>Rating</div>;
                      </div>;
                      <div>;
                        <div className='text - lg font - bold text - green - 400'>;
                          {service.customers}+;
                        </div>;
                        <div className='text - xs text - white / 60'>Customers</div>;
                      </div>;
                      <div>;
                        <div className='text - lg font - bold text - purple - 400'>;
                          {service.trial_days}d;
                        </div>;
                        <div className='text - xs text - white / 60'>Trial</div>                      </div>                      <div>;
                        <div className="text - lg font - bold text - blue - 400">{service.rating}</div>;
                        <div className="text - xs text - white / 60">Rating</div>;
                      </div>;
                      <div>;
                        <div className="text - lg font - bold text - green - 400">{service.customers}+</div>;
                        <div className="text - xs text - white / 60">Customers</div>;
                      </div>;
                      <div>;
                        <div className="text - lg font - bold text - purple - 400">{service.trial_days}d</div>;
                        <div className="text - xs text - white / 60">Trial</div>;
                      </div>;
                    </div>;
                    {/* CTA */}
                    <a;
                      href={service.link}
                      target='_blank';
                      rel='noopener noreferrer';
                      className='w - full bg - gradient - to - r from - blue - 600 to - cyan - 600 text - white py - 3 px - 4 rounded - xl font - medium text - center block hover:from - blue - 700 hover:to - cyan - 700 transition - all duration - 300 flex items - center justify - center gap - 2';
                    >;
                      Learn More;
                      <ExternalLink className='w - 4 h - 4' />                    </a>                      target="_blank";
                      rel="noopener noreferrer";
                      className="w - full bg - gradient - to - r from - blue - 600 to - cyan - 600 text - white py - 3 px - 4 rounded - xl font - medium text - center block hover:from - blue - 700 hover:to - cyan - 700 transition - all duration - 300 flex items - center justify - center gap - 2";
                    >;
                      Learn More;
                      <ExternalLink className="w - 4 h - 4" />;
                  </div>;
                </motion.div>))}
            </AnimatePresence>;
          </div>) : (
          <div className='space - y-6'>            <AnimatePresence>          <div className="space - y-6">;
            <AnimatePresence>;
              {filtered_services.map ((service, index) => (
                <motion.div;
                  key={service.id}
                  initial={{ opacity: 0, coordinate_x: -30 }}
                  animate={{ opacity: 1, coordinate_x: 0 }}
                  exit={{ opacity: 0, coordinate_x: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className='group relative overflow - hidden rounded - 2xl border border - white / 10 bg - gradient - to - r from - white / 5 to - white / 10 backdrop - blur - xl hover:border - cyan - 400 / 30 transition - all duration - 300 p - 6';
                >;
                  <div className='flex flex - col lg:flex - row gap - 6'>;
                    {/* Left Side - Icon and Basic Info */}
                    <div className='flex - shrink - 0'>;
                      <div className='text - 6xl mb - 4'>{service.icon}</div>;
                      {service.popular && (
                        <div className='bg - gradient - to - r from - yellow - 400 to - orange - 500 text - black text - xs font - bold px - 3 py - 1 rounded - full text - center'>                          Popular                >;
                  <div className="flex flex - col lg:flex - row gap - 6">;
                    {/* Left Side - Icon and Basic Info */}
                    <div className="flex - shrink - 0">;
                      <div className="text - 6xl mb - 4">{service.icon}</div>;
                      {service.popular && (
                        <div className="bg - gradient - to - r from - yellow - 400 to - orange - 500 text - black text - xs font - bold px - 3 py - 1 rounded - full text - center">;
                          Popular;
                        </div>)}
                    </div>;
                    {/* Center - Service Details */}
                    <div className='flex - 1'>;
                      <div className='flex items - start justify - between mb - 4'>;
                        <div>;
                          <h3 className='text - 2xl font - bold text - white mb - 2'>;
                            {service.name}
                          </h3>;
                          <p className='text - white / 70 text - lg mb - 3'>;
                            {service.tagline}
                          </p>;
                          <p className='text - white / 60 text - sm'>;
                            {service.description}
                          </p>;
                        </div>;
                        <div className='text - right'>;
                          <div className='text - 3xl font - bold text - white'>;
                            {service.price}
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 px-4 rounded-xl font-medium text-center block hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      Learn More
                      <ExternalLink className="w-4 h-4" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className='space-y-6'>            <AnimatePresence>          <div className="space-y-6">
            <AnimatePresence>
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className='group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 p-6'

                >
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                  <div className='flex flex-col lg:flex-row gap-6'>
                    {/* Left Side - Icon and Basic Info */}
                    <div className='flex-shrink-0'>
                      <div className='text-6xl mb-4'>{service.icon}</div>
                      {service.popular && (

                        <div className='bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full text-center'>                          Popular

<<<<<<< HEAD
=======
                        <div className='bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full text-center'>                          Popular                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Left Side - Icon and Basic Info */}
                    <div className="flex-shrink-0">
                      <div className="text-6xl mb-4">{service.icon}</div>
                      {service.popular && (
                        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full text-center">
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                          Popular

                        </div>
                      )}
                    </div>
<<<<<<< HEAD

                    {/* Center - Service Details */}

                    <div className='flex-1'>
                      <div className='flex items-start justify-between mb-4'>



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                        <div>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
                    {/* Center - Service Details */}
                    <div className='flex-1'>
                      <div className='flex items-start justify-between mb-4'>
                        <div className='bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full text-center'>                          Popular

                          Popular

                        </div>
                      )}
                    </div>

                    {/* Center - Service Details */}
                    <div className='flex-1'>
                      <div className='flex items-start justify-between mb-4'>

                        <div>
                          <h3 className='text-2xl font-bold text-white mb-2'>
                            {service.name}
                          </h3>
                          <p className='text-white/70 text-lg mb-3'>
                            {service.tagline}
                          </p>
                          <p className='text-white/60 text-sm'>
                            {service.description}
                          </p>
                        </div>
                        <div className='text-right'>
                          <div className='text-3xl font-bold text-white'>
                            {service.price}
                          </div>
                          <div className='text-white/60'>{service.period}</div>                        </div>
                      </div>
                      {/* Features Grid */}                        <div>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                          <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                          <p className="text-white/70 text-lg mb-3">{service.tagline}</p>
                          <p className="text-white/60 text-sm">{service.description}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-bold text-white">{service.price}</div>
                          <div className="text-white/60">{service.period}</div>
                        </div>
                      </div>
=======
                    </div>;

                    {/* Center - Service Details */}
                    <div className='flex-1'>;
                      <div className='flex items-start justify-between mb-4'>;
                        <div>;
                          <h3 className='text-2xl font-bold text-white mb-2'>;
                            {service && service.name}
                          </h3>;
                          <p className='text-white/70 text-lg mb-3'>;
                            {service && service.tagline}
                          </p>;
                          <p className='text-white/60 text-sm'>;
                            {service && service.description}
                          </p>;
                        </div>;
                        <div className='text-right'>;
                          <div className='text-3xl font-bold text-white'>;
                            {service && service.price}
                          </div>;
                          <div className='text-white/60'>{service && service.period}</div>                        </div>;
                      </div>;

                      {/* Features Grid */}                        <div>;
                          <h3 className="text-2xl font-bold text-white mb-2">{service && service.name}</h3>;
                          <p className="text-white/70 text-lg mb-3">{service && service.tagline}</p>;
                          <p className="text-white/60 text-sm">{service && service.description}</p>;
                        </div>;
                        <div className="text-right">;
                          <div className="text-3xl font-bold text-white">{service && service.price}</div>;
                          <div className="text-white/60">{service && service.period}</div>;
                        </div>;
                      </div>;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                      {/* Features Grid */}
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                        ))}

                      {/* Stats Row */}
                      <div className='flex items-center gap-6 text-sm text-white/60'>
                        <div className='flex items-center gap-2'>
                          <Star className='w-4 h-4 text-yellow-400' />
                          <span>
                            {service.rating} ({service.reviews} reviews)
                          </span>
                        </div>                        </div>
                      <div className="grid grid-cols-2 gap-2 mb-4">
<<<<<<< HEAD
=======
                      <div className='grid grid-cols-2 gap-2 mb-4'>
                        {service.features.slice(0, 6).map((feature, idx) => (
                          <div
                            key={idx}
                            className='flex items-center gap-2 text-sm text-white/60'
                          >
                            <CheckCircle className='w-4 h-4 text-green-400 flex-shrink-0' />
                            <span className='truncate'>{feature}</span>                          </div>                      <div className="grid grid-cols-2 gap-2 mb-4">
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                        {service.features.slice(0, 6).map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-white/60">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="truncate">{feature}</span>
                          </div>
                        ))}
                      </div>

<<<<<<< HEAD
=======
                          </div>

                        ))}
                      </div>

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                      {/* Stats Row */}
                      <div className="flex items-center gap-6 text-sm text-white/60">
                        <div className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-yellow-400" />
                          <span>{service.rating} ({service.reviews} reviews)</span>
                        </div>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-blue-400" />
                          <span>{service.customers}+ customers</span>
                        </div>
<<<<<<< HEAD

                        <div className="flex items-center gap-2">

=======
                        <div className="flex items-center gap-2">
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                          <Clock className="w-4 h-4 text-green-400" />
                          <span>{service.setupTime} setup</span>
                        </div>
                      </div>
                    </div>
                    {/* Right Side - CTA and Category */}
<<<<<<< HEAD

                    <div className="flex-shrink-0 flex flex-col items-end gap-4">

=======
                    <div className='flex-shrink-0 flex flex-col items-end gap-4'>
                      <div className='text-right'>
                        <div className='text-sm text-white/60 mb-1'>
                          Category
                        </div>
                        <div className='flex items-center gap-2 text-white'>
                          <span>{getCategoryIcon(service.category)}</span>
                          <span className='text-sm'>{service.category}</span>                        </div>                    <div className="flex-shrink-0 flex flex-col items-end gap-4">
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                      <div className="text-right">
                        <div className="text-sm text-white/60 mb-1">Category</div>
                        <div className="flex items-center gap-2 text-white">
                          <span>{getCategoryIcon(service.category)}</span>
                          <span className="text-sm">{service.category}</span>
<<<<<<< HEAD

                        </div>

=======
                        </div>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                      </div>
=======
                      </div>;

                      {/* Stats Row */}
                      <div className='flex items-center gap-6 text-sm text-white/60'>;
                        <div className='flex items-center gap-2'>;
                          <Star className='w-4 h-4 text-yellow-400' />;
                          <span>;
                            {service && service.rating} ({service && service.reviews} reviews);
                          </span>;
                        </div>                        </div>;
                        <div className="flex items-center gap-2">;
                          <Users className="w-4 h-4 text-blue-400" />;
                          <span>{service && service.customers}+ customers</span>;
                        </div>;
                        <div className='flex items-center gap-2'>;
                          <Users className='w-4 h-4 text-blue-400' />;
                          <span>{service && service.customers}+ customers</span>;
                        </div>;
                        <div className='flex items-center gap-2'>;
                          <Clock className='w-4 h-4 text-green-400' />                          <span>{service && service.setupTime} setup</span>                        <div className="flex items-center gap-2">;
                          <Clock className="w-4 h-4 text-green-400" />;
                          <span>{service && service.setupTime} setup</span>;
                        </div>;
                      </div>;
                    </div>;

                    {/* Right Side - CTA and Category */}
                    <div className='flex-shrink-0 flex flex-col items-end gap-4'>;
                      <div className='text-right'>;
                        <div className='text-sm text-white/60 mb-1'>;
                          Category;
                        </div>;
                        <div className='flex items-center gap-2 text-white'>;
                          <span>{getCategoryIcon(service && service.category)}</span>;
                          <span className='text-sm'>{service && service.category}</span>                        </div>                    <div className="flex-shrink-0 flex flex-col items-end gap-4">;
                      <div className="text-right">;
                        <div className="text-sm text-white/60 mb-1">Category</div>;
                        <div className="flex items-center gap-2 text-white">;
                          <span>{getCategoryIcon(service && service.category)}</span>;
                          <span className="text-sm">{service && service.category}</span>;
                      </div>;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                      <a
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                        href={service.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 px-6 rounded-xl font-medium hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center gap-2"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4" />
<<<<<<< HEAD
                      </a>
                    </div>
                  </div>
                </motion.div>

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

                    </div>
                  </div>
                </motion.div>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              ))}
            </AnimatePresence>;
          </div>;
        )}


<<<<<<< HEAD



=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        {/* No Results */}
        {filteredServices && filteredServices.length === 0 && (;
          <motion&& motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
<<<<<<< HEAD


=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            className='text-center py-20'
          >
            <div className='text-6xl mb-4'>🔍</div>
            <h3 className='text-2xl font-bold text-white mb-2'>
              No services found
            </h3>
            <p className='text-white/60'>
              Try adjusting your search or filter criteria


<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            </p>          </motion.div>

          </motion.div>



<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        )}
        {/* Contact CTA */}
        <motion&& motion.div
=======
        )}
        {/* Contact CTA */}
        <motion&& motion.div
            className='text-center py-20'
          >
            <div className='text-6xl mb-4'>🔍</div>
            <h3 className='text-2xl font-bold text-white mb-2'>
              No services found
            </h3>
            <p className='text-white/60'>
              Try adjusting your search or filter criteria
            </p>          </motion.div>            className="text-center py-20"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
            <p className="text-white/60">Try adjusting your search or filter criteria</p>
        )}
            </p>          </motion.div>

          </motion.div>

        )}

        {/* Contact CTA */}
        <motion.div
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0 && 0.8 }}
          viewport={{ once: true }}


<<<<<<< HEAD
=======
          className="mt-20 text-center"
        >
          className='mt-20 text-center'

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        >
          <div className='bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl p-12 border border-blue-500/30'>
            <h3 className='text-3xl font-bold text-white mb-4'>
              Ready to Transform Your Business?
            </h3>
            <p className='text-xl text-white/70 mb-8 max-w-2xl mx-auto'>
              Join thousands of companies already using our revolutionary micro
              SAAS services to drive innovation and growth.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              <a
                href='mailto:kleber@ziontechgroup && ziontechgroup.com'
                className='bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 px-8 rounded-xl font-medium hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2'>;
                Contact Sales Team;
                <ArrowRight className='w-5 h-5' />;
              </a>;
              <a
                href='tel:+13024640950'
<<<<<<< HEAD
                className='bg-white/10 text-white py-4 px-8 rounded-xl font-medium hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2'>        >;
          <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl p-12 border border-blue-500/30">;
            <h3 className="text-3xl font-bold text-white mb-4">;
              Ready to Transform Your Business?;
            </h3>;
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">;
              Join thousands of companies already using our revolutionary micro SAAS services to drive innovation and growth.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;

=======
          className="mt-20 text-center"
        >
=======
          className="mt-20 text-center"
        >
                className='bg-white/10 text-white py-4 px-8 rounded-xl font-medium hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2'              >        >
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl p-12 border border-blue-500/30">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Join thousands of companies already using our revolutionary micro SAAS services to drive innovation and growth.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
<<<<<<< HEAD

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
              <a
                href="mailto:kleber@ziontechgroup && ziontechgroup.com"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 px-8 rounded-xl font-medium hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2">;
                Contact Sales Team;
                <ArrowRight className="w-5 h-5" />;
              </a>;
              <a
                href="tel:+13024640950"


=======
              <a


                className="bg-white/10 text-white py-4 px-8 rounded-xl font-medium hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2">;
                          </div>;
                          <div className='text - white / 60'>{service.period}</div>                        </div>;
                      </div>;
                      {/* Features Grid */}                        <div>;
                          <h3 className="text - 2xl font - bold text - white mb - 2">{service.name}</h3>;
                          <p className="text - white / 70 text - lg mb - 3">{service.tagline}</p>;
                          <p className="text - white / 60 text - sm">{service.description}</p>;
                        </div>;
                        <div className="text - right">;
                          <div className="text - 3xl font - bold text - white">{service.price}</div>;
                          <div className="text - white / 60">{service.period}</div>;
                        </div>;
                      </div>;
                      {/* Features Grid */}
                      <div className='grid grid - cols - 2 gap - 2 mb - 4'>;
                        {service.features.slice (0, 6).map ((feature, idx) => (
                          <div;
                            key={idx}
                            className='flex items - center gap - 2 text - sm text - white / 60';
                          >;
                            <CheckCircle className='w - 4 h - 4 text - green - 400 flex - shrink - 0' />;
                            <span className='truncate'>{feature}</span>                          </div>                      <div className="grid grid - cols - 2 gap - 2 mb - 4">;
                        {service.features.slice (0, 6).map ((feature, idx) => (
                          <div key={idx} className="flex items - center gap - 2 text - sm text - white / 60">;
                            <CheckCircle className="w - 4 h - 4 text - green - 400 flex - shrink - 0" />;
                            <span className="truncate">{feature}</span>))}
                      </div>;
                      {/* Stats Row */}
                      <div className='flex items - center gap - 6 text - sm text - white / 60'>;
                        <div className='flex items - center gap - 2'>;
                          <Star className='w - 4 h - 4 text - yellow - 400' />;
                          <span>;
                            {service.rating} ({service.reviews} reviews);
                          </span>;
                        </div>                        </div>;
                        <div className="flex items - center gap - 2">;
                          <Users className="w - 4 h - 4 text - blue - 400" />;
                          <span>{service.customers}+ customers</span>;
                        </div>;
                        <div className='flex items - center gap - 2'>;
                          <Users className='w - 4 h - 4 text - blue - 400' />;
                          <span>{service.customers}+ customers</span>;
                        </div>;
                        <div className='flex items - center gap - 2'>;
                          <Clock className='w - 4 h - 4 text - green - 400' />                          <span>{service.setup_time} setup</span>                        <div className="flex items - center gap - 2">;
                          <Clock className="w - 4 h - 4 text - green - 400" />;
                          <span>{service.setup_time} setup</span>;
                        </div>;
                      </div>;
                    </div>;
                    {/* Right Side - CTA and Category */}
                    <div className='flex - shrink - 0 flex flex - col items - end gap - 4'>;
                      <div className='text - right'>;
                        <div className='text - sm text - white / 60 mb - 1'>;
                          Category;
                        </div>;
                        <div className='flex items - center gap - 2 text - white'>;
                          <span>{getCategoryIcon (service.category)}</span>;
                          <span className='text - sm'>{service.category}</span>                        </div>                    <div className="flex - shrink - 0 flex flex - col items - end gap - 4">;
                      <div className="text - right">;
                        <div className="text - sm text - white / 60 mb - 1">Category</div>;
                        <div className="flex items - center gap - 2 text - white">;
                          <span>{getCategoryIcon (service.category)}</span>;
                          <span className="text - sm">{service.category}</span>;
                      </div>;
                      <a;
                        href={service.link}
                        target='_blank';
                        rel='noopener noreferrer';
                        className='bg - gradient - to - r from - blue - 600 to - cyan - 600 text - white py - 3 px - 6 rounded - xl font - medium hover:from - blue - 700 hover:to - cyan - 700 transition - all duration - 300 flex items - center gap - 2';
                      >;
                        Learn More;
                        <ArrowRight className='w - 4 h - 4' />                      </a>                        target="_blank";
                        rel="noopener noreferrer";
                        className="bg - gradient - to - r from - blue - 600 to - cyan - 600 text - white py - 3 px - 6 rounded - xl font - medium hover:from - blue - 700 hover:to - cyan - 700 transition - all duration - 300 flex items - center gap - 2";
                      >;
                        Learn More;
                        <ArrowRight className="w - 4 h - 4" />;
                    </div>;
                  </div>;
                </motion.div>))}
            </AnimatePresence>;
          </div>)}
        {/* No Results */}
        {filtered_services.length === 0 && (
          <motion.div;
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='text - center py - 20';
          >;
            <div className='text - 6xl mb - 4'>🔍</div>;
            <h3 className='text - 2xl font - bold text - white mb - 2'>;
              No services found;
            </h3>;
            <p className='text - white / 60'>;
              Try adjusting your search or filter criteria;
            </p>          </motion.div>            className="text - center py - 20";
          >;
            <div className="text - 6xl mb - 4">🔍</div>;
            <h3 className="text - 2xl font - bold text - white mb - 2">No services found</h3>;
            <p className="text - white / 60">Try adjusting your search or filter criteria</p>)}
        {/* Contact CTA */}
        <motion.div;
          initial={{ opacity: 0, coordinate_y: 30 }}
          whileInView={{ opacity: 1, coordinate_y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='mt - 20 text - center';
        >;
          <div className='bg - gradient - to - r from - blue - 600 / 20 to - cyan - 600 / 20 rounded - 3xl p - 12 border border - blue - 500 / 30'>;
            <h3 className='text - 3xl font - bold text - white mb - 4'>;
              Ready to Transform Your Business?;
            </h3>;
            <p className='text - xl text - white / 70 mb - 8 max - w-2xl mx - auto'>;
              Join thousands of companies already using our revolutionary micro;
              SAAS services to drive innovation and growth.;
            </p>;
            <div className='flex flex - col sm:flex - row gap - 4 justify - center'>;
              <a;
                href='mailto:kleber@ziontechgroup.com';
                className='bg - gradient - to - r from - blue - 600 to - cyan - 600 text - white py - 4 px - 8 rounded - xl font - medium hover:from - blue - 700 hover:to - cyan - 700 transition - all duration - 300 flex items - center justify - center gap - 2';
              >;
                Contact Sales Team;
                <ArrowRight className='w - 5 h - 5' />;
              </a>;
              <a;
                href='tel:+13024640950';
                className='bg - white / 10 text - white py - 4 px - 8 rounded - xl font - medium hover:bg - white / 20 transition - all duration - 300 flex items - center justify - center gap - 2'              >        >;
          <div className="bg - gradient - to - r from - blue - 600 / 20 to - cyan - 600 / 20 rounded - 3xl p - 12 border border - blue - 500 / 30">;
            <h3 className="text - 3xl font - bold text - white mb - 4">;
              Ready to Transform Your Business?;
            </h3>;
            <p className="text - xl text - white / 70 mb - 8 max - w-2xl mx - auto">;
              Join thousands of companies already using our revolutionary micro SAAS services to drive innovation and growth.;
            </p>;
            <div className="flex flex - col sm: flex - row gap - 4 justify - center">;
              <a;
                href="mailto:kleber@ziontechgroup.com";
                className="bg - gradient - to - r from - blue - 600 to - cyan - 600 text - white py - 4 px - 8 rounded - xl font - medium hover:from - blue - 700 hover:to - cyan - 700 transition - all duration - 300 flex items - center justify - center gap - 2";
              >;
                Contact Sales Team;
                <ArrowRight className="w - 5 h - 5" />;
              </a>;
              <a;
                href="tel:+13024640950";
                className="bg - white / 10 text - white py - 4 px - 8 rounded - xl font - medium hover:bg - white / 20 transition - all duration - 300 flex items - center justify - center gap - 2";
              >;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                Call +1 302 464 0950;
              </a>;
            </div>;
          </div>;
<<<<<<< HEAD


=======
  );
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
  );
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
        </motion.div>;
      </div>;
    </section>);
<<<<<<< HEAD
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
              <a
                href=&quot;mailto:kleber@ziontechgroup.com&quot;
                className=&quot;bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 px-8 rounded-xl font-medium hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2&quot;
              >
                Contact Sales Team
                <ArrowRight className=&quot;w-5 h-5&quot; />
              </a>
              <a
                href=&quot;tel:+13024640950&quot;
                className=&quot;bg-white/10 text-white py-4 px-8 rounded-xl font-medium hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2&quot;
                href="mailto:kleber@ziontechgroup.com"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 px-8 rounded-xl font-medium hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Contact Sales Team
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="bg-white/10 text-white py-4 px-8 rounded-xl font-medium hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
);
  );
}

  );
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

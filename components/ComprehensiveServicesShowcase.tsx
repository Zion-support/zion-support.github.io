import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
=======
import { Star, Clock, Users, TrendingUp, CheckCircle, ExternalLink;
import {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
import { Star, Clock, Users, TrendingUp, CheckCircle, ExternalLink;
import {
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
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
<<<<<<< HEAD
<<<<<<< HEAD
import { specializedEmergingTechServices } from '../data/specialized-emerging-tech-services-2025';import {
  Star, Clock, Users, TrendingUp, CheckCircle, ExternalLink

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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  Award,;
  Target,;
} from 'lucide-react';
import { comprehensiveMicroSaasServices } from '../data/comprehensive-2025-micro-saas-expansion';
<<<<<<< HEAD
<<<<<<< HEAD
import { specializedEmergingTechServices } from '../data/specialized-emerging-tech-services-2025';import {
  Star, Clock, Users, TrendingUp, CheckCircle, ExternalLink, ;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
  ChevronRight, Shield, Zap, Globe, Rocket, Brain, Atom;
  Search, Filter, Grid, List, ArrowRight, Award, Target;
} from 'lucide-react';
import { comprehensiveMicroSaasServices } from '../data/comprehensive-2025-micro-saas-expansion';
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { specializedEmergingTechServices } from '../data/specialized-emerging-tech-services-2025';
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedService, setSelectedService] = useState<string | null>(null),
  const [searchTerm, setSearchTerm] = useState('');
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

        {/* Header */}
=======
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
  const allServices = null;
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
        selectedCategory === 'all' || service.category === selectedCategory;
      const matchesSearch =
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) |
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) |
        service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    })
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
    .sort((a, b) => {
      switch (sortBy) {
        case 'popularity':
          return b.popular ? 1 : -1;
        case 'price':
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    <section className='py-20 px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950'>
      <div className='max-w-7xl mx-auto'>        {/* Header */}

=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
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
          return 0;
      }
    });
  const getCategoryIcon = (category: string) => {
    const categoryData = categories.find(cat => cat.id === category);
return categoryData?.icon || '🚀';
  };

<<<<<<< HEAD
<<<<<<< HEAD
=======
  const formatPrice = (price: string) => {
    return price.replace('$', '').replace(',', '');
  }
  return (
    <section className='py-20 px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950'>
      <div className='max-w-7xl mx-auto'>
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto">
origin/cursor/automate-test-improve-and-merge-code-2533
        {/* Header */}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        <motion.div
  const formatPrice = (price: string) => {;
    return price && price.replace('$', '').replace(, '')
};

  return (
        {/* Header */}
        <motion&& motion.div
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
className='text-center mb-16'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
className='text-center mb-16'
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
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
<<<<<<< HEAD
<<<<<<< HEAD
                <div className='text-white/60'>Average ROI</div>              </div>        >
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
=======
=======
                <div className='text-white/60'>Average ROI</div>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
                <div className='text-white/60'>Average ROI</div>
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
              </div>
            </div>
          </div>
        </motion.div>
          className='text-center mb-16'>;
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
<<<<<<< HEAD



>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        {/* Search and Filters */}
        <motion&& motion.div
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0 && 0.6 }}
          viewport={{ once: true }}
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
className='mb-12'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
className='mb-12'
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
        >
          <div className='flex flex-col lg:flex-row gap-6 items-center justify-between'>
            {/* Search */}
            <div className='relative flex-1 max-w-md'>
              <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 w-5 h-5' />
              <input
                type='text'
                placeholder='Search services...'
                value={searchTerm}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

                onChange={e => setSearchTerm(e && e.target.value)}
                className='w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20'              />;
            </div>;


            {/* Sort and View Controls */}

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            {/* Search */}
            <div className="relative flex-1 max-w-md">;
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 w-5 h-5" />;
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
              >;
                <option value='popularity'>Most Popular</option>;
                <option value='price'>Price: Low to High</option>;
                <option value='rating'>Highest Rated</option>;
                <option value='newest'>Newest First</option>;
              </select>;
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
                onChange={e => setSearchTerm(e.target.value)}
                className='w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20'
              />
            </div>
            {/* Sort and View Controls */}
<div className='flex items-center gap-4'>
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value as any)}
                className='bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-400'
              >
                <option value='popularity'>Most Popular</option>
                <option value='price'>Price: Low to High</option>
                <option value='rating'>Highest Rated</option>
                <option value='newest'>Newest First</option>
              </select>
              <div className='flex bg-white/10 rounded-xl p-1'>
origin/cursor/automate-test-improve-and-merge-code-2533
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all ${;
                    viewMode === 'grid';
                      ? 'bg-blue-600 text-white';
                      : 'text-white/60 hover:text-white';
                  }`}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                >
                  <Grid className='w-5 h-5' />                </button>                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all ${
                    viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-white/60 hover:text-white'
                  }`}
                >
                  <Grid className="w-5 h-5" />
            <div className='flex items-center gap-4'>


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
                >
                  <Grid className='w-5 h-5' />
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
                >
                  <Grid className='w-5 h-5' />
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all ${
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
viewMode === 'list'
                      ? 'bg-blue-600 text-white'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  <List className='w-5 h-5' />
                </button>
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
              </div>
            </div>
          </div>
        </motion.div>
<<<<<<< HEAD

        {/* Category Filter */}
        <motion.div

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
                >;
                  <List className="w-5 h-5" />;
              </div>;
            </div>;
          </div>;
        </motion && motion.div>;

<<<<<<< HEAD
<<<<<<< HEAD



>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        {/* Category Filter */}
        <motion&& motion.div
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0 && 0.6 }}
          viewport={{ once: true }}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          className='mb-12'
        >
          <div className='flex flex-wrap justify-center gap-3'>
            {categories.map(category => (              <button          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
            {categories.map(category => (              <button

=======

=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
className='mb-12'
        >
          <div className='flex flex-wrap justify-center gap-3'>
            {categories.map(category => (
              <button
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
<span className='text-xs bg-white/20 px-2 py-1 rounded-full'>
                  {category.count}
                </span>
              </button>
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
            ))}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        {/* Services Display */}
<<<<<<< HEAD
<<<<<<< HEAD
        {viewMode === 'grid' ? (;
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>            <AnimatePresence>          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            <AnimatePresence>;
              {filteredServices && filteredServices.map((service, index) => (;
                <motion&& motion.div
                  key={service && service.id}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        {/* Services Display */}
        {viewMode === 'grid' ? (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>            <AnimatePresence>          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
        {viewMode === 'grid' ? (
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            <AnimatePresence>
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
                  className='group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl'>;
                  {/* Popular Badge */}
        {/* Services Display */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredServices.map((service, index) => (
                <motion.div
                <span className='text - xs bg - white / 20 px - 2 py - 1 rounded - full'>;
                  {category.count}
                </span>              </button>                <span className="text - xs bg - white / 20 px - 2 py-1 rounded-full">{category.count}</span>;
              </button>))}
          </div>;
        </motion.div>;
        {/* Services Display */}
        {view_mode === 'grid' ? (
          <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8'>            <AnimatePresence>          <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols-3 gap-8">;
            <AnimatePresence>;
              {filtered_services.map ((service, index) => (
                <motion.div;
                  key={service.id}
                  initial={{ opacity: 0, coordinate_y: 30 }}
                  animate={{ opacity: 1, coordinate_y: 0 }}
                  exit={{ opacity: 0, coordinate_y: -30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

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
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                      <Star className='w-3 h-3' />                      Popular

                      Popular

<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
className='group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl'
                >
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className='absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1'>
                      <Star className='w-3 h-3' />
                      Popular
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
                    </div>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
                    </div>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                  )}

                  {/* Service Content */}
<<<<<<< HEAD
                  <div className='p - 6'>;
                    <div className='flex items - start justify - between mb - 4'>;
                      <div className='text - 4xl'>{service.icon}</div>;
                      <div className='text - right'>;
                        <div className='text - 2xl font - bold text - white'>;

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<div className='p-6'>
                    <div className='flex items-start justify-between mb-4'>
                      <div className='text-4xl'>{service.icon}</div>
                      <div className='text-right'>
                        <div className='text-2xl font-bold text-white'>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                          {service.price}
                        </div>
                        <div className='text-xs text-white/60'>
                          {service.period}
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
                      </div>
                    </div>
                    <h3 className='text-xl font-bold text-white mb-2'>

                      </div>
                    </div>
                    <h3 className='text-xl font-bold text-white mb-2'>

=======
                      </div>
                    </div>
                    <h3 className='text-xl font-bold text-white mb-2'>
                        </div>;
                      </div>;
                    </div>;
                    <h3 className='text - xl font - bold text - white mb - 2'>;
                        </div>
                      </div>
                    </div>
                    <h3 className='text-xl font-bold text-white mb-2'>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                      {service.name}
                    </h3>;
                    <p className='text - white / 70 text - sm mb - 4'>;
                      {service.tagline}
                    {/* Features */}
                    <div className='space-y-2 mb-6'>;
                      {service && service.features.slice(0, 3).map((feature, idx) => (;
                        <div
                          key={idx}
<<<<<<< HEAD
<<<<<<< HEAD
                          className='flex items-center gap-2 text-sm text-white/60'>;
                          <CheckCircle className='w-4 h-4 text-green-400' />                          {feature}                      </div>;
                    </div>;

                    <h3 className="text-xl font-bold text-white mb-2">{service && service.name}</h3>;
                    <p className="text-white/70 text-sm mb-4">{service && service.tagline}</p>;
<<<<<<< HEAD
                    {/* Features */}

<<<<<<< HEAD

                          {feature}
                        </div>;
                      ))}
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

                    {/* Stats */}
                    <div className='grid grid-cols-3 gap-4 mb-6 text-center'>

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
                    {/* Stats */}
                    <div className='grid grid-cols-3 gap-4 mb-6 text-center'>

=======
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-0308
                          className='flex items-center gap-2 text-sm text-white/60'
                        >
                          <CheckCircle className='w-4 h-4 text-green-400' />
                          {feature}
                        </div>
                      ))}
                    </div>
                    {/* Stats */}
<div className='grid grid-cols-3 gap-4 mb-6 text-center'>
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
                      <div>
                        <div className='text-lg font-bold text-blue-400'>
                          {service.rating}

                    </div>
<<<<<<< HEAD
                    {/* Stats */}
                    <div className='grid grid-cols-3 gap-4 mb-6 text-center'>
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                      <div>
                        <div className='text-lg font-bold text-blue-400'>
                          {service.rating}

                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                      <div>
                        <div className='text-lg font-bold text-purple-400'>
                          {service.trialDays}d
                        </div>
                        <div className='text-xs text-white/60'>Trial</div>
origin/cursor/automate-test-improve-and-merge-code-2533
                      </div>
                    </div>
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
=======

<<<<<<< HEAD



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
                      )}

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                    {/* CTA */}
                    <a
                      href={service.link}
target='_blank'
                      rel='noopener noreferrer'
                      className='w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 px-4 rounded-xl font-medium text-center block hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2'
                    >
                      Learn More
                      <ExternalLink className='w-4 h-4' />
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
<div className='space-y-6'>
            <AnimatePresence>
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
<<<<<<< HEAD
<<<<<<< HEAD
                  className='group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 p-6'

                      )}

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
className='group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 p-6'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
className='group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 p-6'
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
                >
                  <div className='flex flex-col lg:flex-row gap-6'>
                    {/* Left Side - Icon and Basic Info */}
                    <div className='flex-shrink-0'>
                      <div className='text-6xl mb-4'>{service.icon}</div>
                      {service.popular && (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
                      )}
                    </div>
{/* Center - Service Details */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
=======
                        <div className='bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full text-center'>
                          Popular
                        </div>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
                        <div className='bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full text-center'>
                          Popular
                        </div>
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
                      )}
                    </div>
                    {/* CTA */}
                    <a
                    {/* Center - Service Details */}
<<<<<<< HEAD
<<<<<<< HEAD
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
                      )}
                    </div>

                    {/* Center - Service Details */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
<div className='flex-1'>
                      <div className='flex items-start justify-between mb-4'>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
<div className='flex-1'>
                      <div className='flex items-start justify-between mb-4'>
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
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
<<<<<<< HEAD
                          <div className='text-white/60'>{service.period}</div>                        </div>
                      </div>
                      {/* Features Grid */}                        <div>
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                          <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                          <p className="text-white/70 text-lg mb-3">{service.tagline}</p>
                          <p className="text-white/60 text-sm">{service.description}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-bold text-white">{service.price}</div>
                          <div className="text-white/60">{service.period}</div>
=======
                          <div className='text-white/60'>{service.period}</div>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                        </div>
                      </div>
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
                      {/* Features Grid */}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                      <div className='grid grid-cols-2 gap-2 mb-4'>
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
<div className='grid grid-cols-2 gap-2 mb-4'>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                        {service.features.slice(0, 6).map((feature, idx) => (
                          <div
                            key={idx}
                            className='flex items-center gap-2 text-sm text-white/60'
                          >
                            <CheckCircle className='w-4 h-4 text-green-400 flex-shrink-0' />
<<<<<<< HEAD
                            <span className='truncate'>{feature}</span>                          </div>                      <div className="grid grid-cols-2 gap-2 mb-4">
=======
=======
                            <span className='truncate'>{feature}</span>
                          </div>
                        ))}
                      </div>
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
                      {/* Stats Row */}
<div className='flex items-center gap-6 text-sm text-white/60'>
                        <div className='flex items-center gap-2'>
                          <Star className='w-4 h-4 text-yellow-400' />
                          <span>
                            {service.rating} ({service.reviews} reviews)
                          </span>
                        </div>                        </div>
                      <div className="grid grid-cols-2 gap-2 mb-4">
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                        {service.features.slice(0, 6).map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-white/60">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="truncate">{feature}</span>
<<<<<<< HEAD
=======
                          </div>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                        ))}
                      </div>

                          </div>

<<<<<<< HEAD
=======
                        ))}

=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                        ))}
                      </div>

                      {/* Stats Row */}
                      <div className="flex items-center gap-6 text-sm text-white/60">
                        <div className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-yellow-400" />
                          <span>{service.rating} ({service.reviews} reviews)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-blue-400" />
                          <span>{service.customers}+ customers</span>
                        </div>
                        <div className='flex items-center gap-2'>
                          <Users className='w-4 h-4 text-blue-400' />
                          <span>{service.customers}+ customers</span>
                        </div>
                        <div className='flex items-center gap-2'>
                          <Clock className='w-4 h-4 text-green-400' />
origin/cursor/automate-test-improve-and-merge-code-2533
                          <span>{service.setupTime} setup</span>
                        </div>
                      </div>
                    </div>
=======
                    {/* Right Side - CTA and Category */}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

                    <div className="flex-shrink-0 flex flex-col items-end gap-4">
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                      <div className="text-right">
                        <div className="text-sm text-white/60 mb-1">Category</div>
                        <div className="flex items-center gap-2 text-white">
                          <span>{getCategoryIcon(service.category)}</span>
                          <span className="text-sm">{service.category}</span>
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
<<<<<<< HEAD
<<<<<<< HEAD
                      <a

                    </div>
                  </div>
                </motion.div>
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
<div className='flex-shrink-0 flex flex-col items-end gap-4'>
                      <div className='text-right'>
                        <div className='text-sm text-white/60 mb-1'>
                          Category
                        </div>
                        <div className='flex items-center gap-2 text-white'>
                          <span>{getCategoryIcon(service.category)}</span>
                          <span className='text-sm'>{service.category}</span>
                        </div>
                      </div>
                      <a
                        href={service.link}
target='_blank'
                        rel='noopener noreferrer'
                        className='bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 px-6 rounded-xl font-medium hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center gap-2'
                      >
                        Learn More
                        <ArrowRight className='w-4 h-4' />
                      </a>
                    </div>
                  </div>
                </motion.div>
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
              ))}
            </AnimatePresence>;
          </div>;
        )}
<<<<<<< HEAD

=======




>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
        )}

=======
=======
        {/* No Results */}
        {filteredServices && filteredServices.length === 0 && (;
          <motion&& motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
className='text-center py-20'
          >
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            <div className='text-6xl mb-4'>🔍</div>
            <h3 className='text-2xl font-bold text-white mb-2'>
              No services found
            </h3>
            <p className='text-white/60'>
              Try adjusting your search or filter criteria
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            </p>          </motion.div>            className="text-center py-20"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
            <p className="text-white/60">Try adjusting your search or filter criteria</p>
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
        )}
            </p>          </motion.div>

          </motion.div>

        )}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

            </p>          </motion.div>

          </motion.div>

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        )}

=======
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-0308
            </p>
          </motion.div>
origin/cursor/automate-test-improve-and-merge-code-2533
        )}

=======


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        )}

        )}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        {/* Contact CTA */}

          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0 && 0.8 }}
          viewport={{ once: true }}
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
className='mt-20 text-center'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
className='mt-20 text-center'
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
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
              <a
                href='mailto:kleber@ziontechgroup.com'
                className='bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 px-8 rounded-xl font-medium hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2'
              >
                Contact Sales Team
                <ArrowRight className='w-5 h-5' />
              </a>
              <a
                href='tel:+13024640950'
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                className='bg-white/10 text-white py-4 px-8 rounded-xl font-medium hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2'              >        >

          <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl p-12 border border-blue-500/30">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Join thousands of companies already using our revolutionary micro SAAS services to drive innovation and growth.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
              <a

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                className="bg-white/10 text-white py-4 px-8 rounded-xl font-medium hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
                className='bg-white/10 text-white py-4 px-8 rounded-xl font-medium hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2'
origin/cursor/automate-test-improve-and-merge-code-2533
              >
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
}

                Call +1 302 464 0950;
              </a>;
            </div>;
          </div>;
<<<<<<< HEAD
<<<<<<< HEAD


}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
        </motion.div>;
      </div>;
    </section>);
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
=======
                href="mailto:kleber@ziontechgroup.com"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 px-8 rounded-xl font-medium hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Contact Sales Team
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="bg-white/10 text-white py-4 px-8 rounded-xl font-medium hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
              >
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
  );
}
  );
}
}
        </motion.div>;
      </div>;
    </section>);
}
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-0308
  );
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508

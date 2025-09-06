import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
<<<<<<< HEAD

<<<<<<< HEAD
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
=======

=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  Award,;
  Target,;
} from 'lucide-react';
import { comprehensiveMicroSaasServices } from '../data/comprehensive-2025-micro-saas-expansion';
<<<<<<< HEAD
<<<<<<< HEAD
import { specializedEmergingTechServices } from '../data/specialized-emerging-tech-services-2025';import {
  Star, Clock, Users, TrendingUp, CheckCircle, ExternalLink, ;
=======
import { specializedEmergingTechServices } from '../data/specialized-emerging-tech-services-2025';import { ;
  Star, Clock, Users, TrendingUp, CheckCircle, ExternalLink, ;

=======
import { 
  Star, Clock, Users, TrendingUp, CheckCircle, ExternalLink, 

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  ChevronRight, Shield, Zap, Globe, Rocket, Brain, Atom;
  Search, Filter, Grid, List, ArrowRight, Award, Target;
} from 'lucide-react';
import { comprehensiveMicroSaasServices } from '../data/comprehensive-2025-micro-saas-expansion';
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
import { specializedEmergingTechServices } from '../data/specialized-emerging-tech-services-2025';
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedService, setSelectedService] = useState<string | null>(null),
  const [searchTerm, setSearchTerm] = useState('');
    .sort((a, b) => {
      switch (sortBy) {
        case 'popularity':
          return b.popular ? 1 : -1;
        case 'price':

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
    <section className="py-20 px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
    <section className='py-20 px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950'>
      <div className='max-w-7xl mx-auto'>        {/* Header */}

        {/* Header */}

        <motion.div
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  const formatPrice = (price: string) => {;
    return price && price.replace('$', '').replace(, '');
  };

  return (
        {/* Header */}
        <motion&& motion.div
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0 && 0.8 }}
          viewport={{ once: true }}
<<<<<<< HEAD
          className='text-center mb-16'

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
<<<<<<< HEAD

<<<<<<< HEAD
=======

=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
        {/* Search and Filters */}
        <motion&& motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0 && 0.6 }}
          viewport={{ once: true }}
<<<<<<< HEAD
          className='mb-12'

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
        >
          <div className='flex flex-col lg:flex-row gap-6 items-center justify-between'>
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            {/* Search */}
            <div className='relative flex-1 max-w-md'>
              <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 w-5 h-5' />
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
              <input
                type='text'
                placeholder='Search services...'
                value={searchTerm}
<<<<<<< HEAD

                onChange={e => setSearchTerm(e && e.target.value)}
                className='w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20'              />;
            </div>;


            {/* Sort and View Controls */}
            <div className='flex items-center gap-4'>        >
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
            {/* Search */}
            <div className="relative flex-1 max-w-md">;
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 w-5 h-5" />;
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
            {/* Sort and View Controls */}
              >;
                <option value='popularity'>Most Popular</option>;
                <option value='price'>Price: Low to High</option>;
                <option value='rating'>Highest Rated</option>;
                <option value='newest'>Newest First</option>;
              </select>;

                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all ${;
                    viewMode === 'grid';
                      ? 'bg-blue-600 text-white';
                      : 'text-white/60 hover:text-white';
                  }`}
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


<<<<<<< HEAD
            {/* Sort and View Controls */}

=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all ${
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

<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
              </div>
            </div>
          </div>
        </motion.div>
<<<<<<< HEAD

<<<<<<< HEAD
=======

=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
                >;
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
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
        {/* Category Filter */}
        <motion&& motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0 && 0.6 }}
          viewport={{ once: true }}
<<<<<<< HEAD
          className='mb-12'
        >
          <div className='flex flex-wrap justify-center gap-3'>
            {categories.map(category => (              <button          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
            {categories.map(category => (              <button


<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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

<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
            ))}
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
        {/* Services Display */}
        {viewMode === 'grid' ? (;
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>            <AnimatePresence>          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            <AnimatePresence>;
              {filteredServices && filteredServices.map((service, index) => (;
                <motion&& motion.div
                  key={service && service.id}
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
                  key={service.id}
                  initial={{ opacity: 0, coordinate_y: 30 }}
                  animate={{ opacity: 1, coordinate_y: 0 }}
                  exit={{ opacity: 0, coordinate_y: -30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
<<<<<<< HEAD

                  {service.popular && (
                    <div className='absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1'>
<<<<<<< HEAD
                      <Star className='w-3 h-3' />                      Popular                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                >
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                      <Star className="w-3 h-3" />
                    </div>
                  )}
=======


=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
                      <Star className='w-3 h-3' />                      Popular

                      Popular

<<<<<<< HEAD
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
                    </div>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
                  )}

<<<<<<< HEAD
=======
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
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
                  {/* Service Content */}
                  <div className='p-6'>
                    <div className='flex items-start justify-between mb-4'>
                      <div className='text-4xl'>{service.icon}</div>
                      <div className='text-right'>
                        <div className='text-2xl font-bold text-white'>
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
                          {service.price}
                        </div>
                        <div className='text-xs text-white/60'>
                          {service.period}
<<<<<<< HEAD
                        </div>

<<<<<<< HEAD
=======




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
                      </div>
                    </div>
                    <h3 className='text-xl font-bold text-white mb-2'>
=======
                        </div>;
                      </div>;
                    </div>;
                    <h3 className='text - xl font - bold text - white mb - 2'>;
=======
                        </div>
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                      </div>
                    </div>
                    <h3 className='text-xl font-bold text-white mb-2'>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
                      {service.name}
                    </h3>;
                    <p className='text - white / 70 text - sm mb - 4'>;
                      {service.tagline}
                    {/* Features */}
                    <div className='space-y-2 mb-6'>;
                      {service && service.features.slice(0, 3).map((feature, idx) => (;
                        <div
                          key={idx}
                          className='flex items-center gap-2 text-sm text-white/60'>;
                          <CheckCircle className='w-4 h-4 text-green-400' />                          {feature}                      </div>;
                    </div>;

                    <h3 className="text-xl font-bold text-white mb-2">{service && service.name}</h3>;
                    <p className="text-white/70 text-sm mb-4">{service && service.tagline}</p>;

                    {/* Features */}
                    <div className="space-y-2 mb-6">;
                      {service && service.features.slice(0, 3).map((feature, idx) => (;
                        <div key={idx} className="flex items-center gap-2 text-sm text-white/60">;
                          <CheckCircle className="w-4 h-4 text-green-400" />;
                          {feature}
                        </div>;
                      ))}
<<<<<<< HEAD
                    </div>
                    {/* Stats */}
                    <div className='grid grid-cols-3 gap-4 mb-6 text-center'>


                    {/* Stats */}
                    <div className='grid grid-cols-3 gap-4 mb-6 text-center'>

<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
                      <div>
                        <div className='text-lg font-bold text-blue-400'>
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                          {service.rating}

                    </div>
<<<<<<< HEAD
                    {/* Stats */}
                    <div className='grid grid-cols-3 gap-4 mb-6 text-center'>
=======

                    {/* Stats */}
                    <div className='grid grid-cols-3 gap-4 mb-6 text-center'>

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                      <div>
                        <div className='text-lg font-bold text-blue-400'>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                          {service.rating}
                    </div>
                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                      <div>

=======
                    {/* Stats */}
                    <div className='grid grid - cols - 3 gap - 4 mb - 6 text - center'>;
                      <div>;
                        <div className='text - lg font - bold text - blue - 400'>;
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
                      )}

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
                >
                  <div className='flex flex-col lg:flex-row gap-6'>
                    {/* Left Side - Icon and Basic Info */}
                    <div className='flex-shrink-0'>
                      <div className='text-6xl mb-4'>{service.icon}</div>
                      {service.popular && (
                        <div className='bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full text-center'>                          Popular                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Left Side - Icon and Basic Info */}
                    <div className="flex-shrink-0">
                      <div className="text-6xl mb-4">{service.icon}</div>
                      {service.popular && (
                        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full text-center">
                          Popular
                        </div>
                      )}
                    </div>
                    {/* Center - Service Details */}
                    <div className='flex-1'>
                      <div className='flex items-start justify-between mb-4'>
                        <div className='bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full text-center'>                          Popular

                          Popular

                        </div>
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
                    {/* CTA */}
                    <a
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
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
                      )}
                    </div>

                    {/* Center - Service Details */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
<<<<<<< HEAD
=======
                    {/* Center - Service Details */}
                    <div className='flex-1'>
                      <div className='flex items-start justify-between mb-4'>
=======
                        <div className='bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full text-center'>                          Popular

                          Popular

                        </div>
                      )}
                    </div>

                    {/* Center - Service Details */}

                    <div className='flex-1'>
                      <div className='flex items-start justify-between mb-4'>

<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
                          <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                          <p className="text-white/70 text-lg mb-3">{service.tagline}</p>
                          <p className="text-white/60 text-sm">{service.description}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-bold text-white">{service.price}</div>
                          <div className="text-white/60">{service.period}</div>
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
                      <div className='grid grid-cols-2 gap-2 mb-4'>
                        {service.features.slice(0, 6).map((feature, idx) => (
                          <div
                            key={idx}
                            className='flex items-center gap-2 text-sm text-white/60'
                          >
                            <CheckCircle className='w-4 h-4 text-green-400 flex-shrink-0' />
                            <span className='truncate'>{feature}</span>                          </div>                      <div className="grid grid-cols-2 gap-2 mb-4">
                        {service.features.slice(0, 6).map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-white/60">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="truncate">{feature}</span>
                        ))}
                      </div>

                          </div>

                        ))}

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
                      {/* Stats Row */}
                      <div className='flex items-center gap-6 text-sm text-white/60'>
                        <div className='flex items-center gap-2'>
                          <Star className='w-4 h-4 text-yellow-400' />
                          <span>
                            {service.rating} ({service.reviews} reviews)
                          </span>
                        </div>                        </div>
=======
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        {service.features.slice(0, 6).map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-white/60">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="truncate">{feature}</span>
                          </div>
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                        ))}
                      </div>
=======

                          </div>

=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
                          <Clock className="w-4 h-4 text-green-400" />
                          <span>{service.setupTime} setup</span>
                        </div>
                      </div>
                    </div>
                    {/* Right Side - CTA and Category */}
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
                      <a
<<<<<<< HEAD

=======
                        href={service.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 px-6 rounded-xl font-medium hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center gap-2"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </motion.div>
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
              ))}
            </AnimatePresence>;
          </div>;
        )}
<<<<<<< HEAD

=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
        {/* No Results */}
        {filteredServices && filteredServices.length === 0 && (;
          <motion&& motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
<<<<<<< HEAD


=======
            className='text-center py-20'
          >
            <div className='text-6xl mb-4'>🔍</div>
            <h3 className='text-2xl font-bold text-white mb-2'>
              No services found
            </h3>
            <p className='text-white/60'>
              Try adjusting your search or filter criteria
<<<<<<< HEAD
            </p>          </motion.div>            className="text-center py-20"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
            <p className="text-white/60">Try adjusting your search or filter criteria</p>
        )}
            </p>          </motion.div>

          </motion.div>

        )}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
<<<<<<< HEAD
            </p>          </motion.div>            className="text-center py-20"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
            <p className="text-white/60">Try adjusting your search or filter criteria</p>
<<<<<<< HEAD
        )}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
            </p>          </motion.div>

          </motion.div>

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        )}

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
        )}
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
        {/* Contact CTA */}
        <motion&& motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0 && 0.8 }}
          viewport={{ once: true }}
<<<<<<< HEAD
          className='mt-20 text-center'

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              <a
                href='mailto:kleber@ziontechgroup.com'
                className='bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 px-8 rounded-xl font-medium hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2'
              >
                Contact Sales Team
                <ArrowRight className='w-5 h-5' />
              </a>
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
              <a
                href='tel:+13024640950'
                className='bg-white/10 text-white py-4 px-8 rounded-xl font-medium hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2'>        >;
          <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl p-12 border border-blue-500/30">;
            <h3 className="text-3xl font-bold text-white mb-4">;
              Ready to Transform Your Business?;
            </h3>;
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">;
              Join thousands of companies already using our revolutionary micro SAAS services to drive innovation and growth.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <a
                href="mailto:kleber@ziontechgroup && ziontechgroup.com"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 px-8 rounded-xl font-medium hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2">;
                Contact Sales Team;
                <ArrowRight className="w-5 h-5" />;
              </a>;
              <a
                href="tel:+13024640950"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
                className="bg-white/10 text-white py-4 px-8 rounded-xl font-medium hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
<<<<<<< HEAD
);
<<<<<<< HEAD
=======
  );
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
                Call +1 302 464 0950;
              </a>;
            </div>;
          </div>;
  );
}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
  );
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
        </motion.div>;
      </div>;
    </section>);
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f

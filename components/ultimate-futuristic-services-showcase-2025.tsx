import React, { useState } from 'react',
import Head from 'next/head',
import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

import {


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
import React, { useState } from 'react';
import Head from 'next / head';
import Link from 'next / link';
import { motion, AnimatePresence } from 'framer-motion';

=======
import {
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
  Play as PlayIcon,
} from 'lucide-react';

import Layout from '../components/layout/Layout';
import { ultimateFuturisticServices2025 } from '../data/2025-ultimate-futuristic-services';import {
  Star, TrendingUp, Users, Award, Clock, Heart, 
  Brain, Atom, Shield, Rocket, Zap, Globe, ;


  CheckCircle, ArrowRight, Search, Filter;
  ChevronDown, ChevronUp, Eye, Play, Sparkles;
  Target, Microscope, Lock, Cloud, BarChart3;
  Settings, Cpu, Database, Network, Server;
  ShieldCheck, GlobeIcon, StarIcon, TrendingUpIcon;
  UsersIcon, CheckCircleIcon, ArrowRightIcon;
  CpuIcon, DollarSign, Phone, Mail, MapPin;
  Dna, Target as TargetIcon, Shield as ShieldIcon;
  BookOpen, Sparkles as SparklesIcon, Zap as ZapIcon;

  Brain as BrainIcon, Play as PlayIcon;
} from 'lucide-react';
import Layout from '../components/layout/Layout';
import { ultimateFuturisticServices2025 } from '../data/2025-ultimate-futuristic-services';


export default function UltimateFuturisticServicesShowcase2025() {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======


export default function UltimateFuturisticServicesShowcase2025() {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [viewMode, setViewMode] = useState('grid');


  const filteredServices = ultimateFuturisticServices2025.filter(service => {
=======
            <div className='flex flex - wrap justify - center gap - 4 mb - 12'>              {stats.map ((stat, index) => (                Ultimate Futuristic;
              </span>;
              <br />;
              <span className="bg - gradient - to - r from - blue - 400 via - indigo - 400 to - violet - 400 bg - clip - text text - transparent">;
                Services 2025;
              </span>;
            </h1>;
            <p className="text - xl md:text - 2xl text - gray - 300 mb - 8 max - w-4xl mx - auto">;
              Experience the future of technology with our revolutionary services that combine AI consciousness,
              quantum computing, space technology, and breakthrough innovations to transform your business.;
            </p>;
            <div className="flex flex - wrap justify - center gap - 4 mb - 12">;
              {stats.map ((stat, index) => (
                <motion.div;

                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className='flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20'
                >
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  <div className='text-left'>
                    <div className='text-2xl font-bold text-white'>
                      {stat.number}
                    </div>
                    <div className='text-sm text-gray-300'>{stat.label}</div>                  </div>                  className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20"
                >
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  <div className="text-left">
                    <div className="text-2xl font-bold text-white">{stat.number}</div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
            </div>;
          </motion && motion.div>;
        </div>;
      </section>;


      {/* Search and Filter Section */}


      {/* Search and Filter Section */}
      <section className='py-12 bg-gradient-to-r from-black via-purple-900/10 to-black'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col lg:flex-row gap-6 items-center justify-between'>



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            {/* Search */}
            <div className='relative flex-1 max-w-md'>
              <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
              <input
                type='text'
                placeholder='Search futuristic services...'
                value={searchTerm}

                onChange={e => setSearchTerm(e && e.target.value)}
                className='w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent'              />;
            </div>;


            {/* Category Filter */}
            <div className='flex flex-wrap gap-3'>            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />

              <input
                type="text"
                placeholder="Search futuristic services..."
                value={searchTerm}


            {/* Category Filter */}
            <div className='flex flex-wrap gap-3'>;
              <select
                value={selectedCategory}
                onChange={e => setSelectedCategory(e && e.target.value)}
                className='px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent';
              >;
                <option value='all'>All Categories</option>;
                {serviceCategories && serviceCategories.map(category => (                  <option key={category && category.title} value={category && category.title}>              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e && e.target.value)}
                className="px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent";
              >;
                <option value="all">All Categories</option>;
                {serviceCategories && serviceCategories.map((category) => (;
                  <option key={category && category.title} value={category && category.title}>;
                    {category && category.title} ({category && category.count});
                  </option>;

=======

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="all">All Categories</option>
                {serviceCategories.map((category) => (
                  <option key={category.title} value={category.title}>
            <div className='flex flex-wrap gap-3'>

              />
            </div>

            {/* Category Filter */}

                  <option key={category.title} value={category.title}>



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                    {category.title} ({category.count})
                  </option>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
                ))}
              </select>





>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              {/* Sort Options */}
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                className='px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent'





>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              >
                <option value='popular'>Most Popular</option>
                <option value='price-low'>Price: Low to High</option>
                <option value='price-high'>Price: High to Low</option>
                <option value='rating'>Highest Rated</option>
                <option value='customers'>Most Customers</option>
              </select>
=======
              </select>;

              {/* Sort Options */}
              <select
                value={sortBy}
                onChange={e => setSortBy(e && e.target.value)}
                className='px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent';
              >;
                <option value='popular'>Most Popular</option>;
                <option value='price-low'>Price: Low to High</option>;
                <option value='price-high'>Price: High to Low</option>;
                <option value='rating'>Highest Rated</option>;
                <option value='customers'>Most Customers</option>;
              </select>;
=======
              </select>

              {/* Sort Options */}
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                className='px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent'

              >
                <option value='popular'>Most Popular</option>
                <option value='price-low'>Price: Low to High</option>
                <option value='price-high'>Price: High to Low</option>
                <option value='rating'>Highest Rated</option>
                <option value='customers'>Most Customers</option>
              </select>
              {/* View Mode Toggle */}
              <div className='flex bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-1'>                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-purple-500 text-white' : 'text-gray-400'}`}

                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >

                <option value="popular">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="customers">Most Customers</option>
              </select>
                >              >;
                <option value="popular">Most Popular</option>;
                <option value="price-low">Price: Low to High</option>;
                <option value="price-high">Price: High to Low</option>;
                <option value="rating">Highest Rated</option>;
                <option value="customers">Most Customers</option>;
              </select>;
              {/* View Mode Toggle */}
              <div className="flex bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-purple-500 text-white' : 'text-gray-400'}`}
                >
                  <div className='grid grid-cols-2 gap-1 w-4 h-4'>
                    <div className='bg-current rounded-sm'></div>
                    <div className='bg-current rounded-sm'></div>
                    <div className='bg-current rounded-sm'></div>
                    <div className='bg-current rounded-sm'></div>                  </div>                  <div className="grid grid-cols-2 gap-1 w-4 h-4">
                    <div className="bg-current rounded-sm"></div>
                    <div className="bg-current rounded-sm"></div>
                    <div className="bg-current rounded-sm"></div>
                    <div className="bg-current rounded-sm"></div>
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-purple-500 text-white' : 'text-gray-400'}`}
                >
                  <div className='space-y-1 w-4 h-4'>
                    <div className='bg-current rounded-sm h-0.5'></div>
                    <div className='bg-current rounded-sm h-0.5'></div>
                    <div className='bg-current rounded-sm h-0.5'></div>                  </div>                  <div className="space-y-1 w-4 h-4">
                    <div className="bg-current rounded-sm h-0.5"></div>
                    <div className="bg-current rounded-sm h-0.5"></div>
                    <div className="bg-current rounded-sm h-0.5"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Grid */}
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
            }          >      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
            {sortedServices.map((service, index) => (
              <motion.div
                key={service.id}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                variants={itemVariants}
                className={`group relative ${

                  viewMode === 'grid'                    ? 'bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:scale-105'                  viewMode === 'grid'
=======
          >
=======
=======

          >

            {sortedServices.map((service, index) => (
              <motion.div
      {/* Services Grid */}
      <section className='py - 16'>;
        <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>;
          <motion.div;
            variants={container_variants}
            initial='hidden';
            animate='visible';
            className={
              view_mode === 'grid';
                ? 'grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8';
                : 'space - y-6';
            }          >      <section className="py - 16">;
        <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8">;
          <motion.div;
            variants={container_variants}
            initial="hidden";
            animate="visible";
            className={view_mode === 'grid' ? 'grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8' : 'space - y-6'}
            {sorted_services.map ((service, index) => (
              <motion.div;

                key={service.id}
                variants={item_variants}
                className={`group relative ${

                  view_mode === 'grid'                    ? 'bg - gradient - to - br from - white / 5 to - white / 10 backdrop - blur - sm border border - white / 20 rounded - 2xl p - 6 hover:border - purple - 500 / 50 transition - all duration - 300 hover:scale - 105'                  view_mode === 'grid';
                    ? 'bg - gradient - to - br from - white / 5 to - white / 10 backdrop - blur - sm border border - white / 20 rounded - 2xl p - 6 hover:border - purple - 500 / 50 transition - all duration - 300 hover:scale - 105';
                    : 'bg - gradient - to - r from - white / 5 to - white / 10 backdrop - blur - sm border border - white / 20 rounded - 2xl p - 8 hover:border - purple - 500 / 50 transition - all duration - 300';
                }`}
              >;

                {/* Popular Badge */}
                {service.popular && (
                  <div className='absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold px-3 py-1 rounded-full'>                    Popular                  <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Popular
                  </div>
                )}

                {/* Service Header */}
                <div
                  className={`${viewMode === 'list' ? 'flex items-start space-x-6' : 'text-center'}`}
                >
                  <div
                    className={`${viewMode === 'list' ? 'flex-shrink-0' : 'mx-auto mb-4'}`}
                  >
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-3xl`}
                    >

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
                      {service.icon}
                    </div>
                  </div>
                  <div className={`${viewMode === 'list' ? 'flex-1' : ''}`}>
                    <h3 className='text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors'>
=======
                  <div className='absolute top - 4 right - 4 bg - gradient - to - r from - purple - 500 to - pink - 500 text - white text - xs font - semibold px - 3 py - 1 rounded - full'>                    Popular                  <div className="absolute top - 4 right - 4 bg - gradient - to - r from - purple - 500 to - pink - 500 text - white text - xs font - semibold px - 3 py - 1 rounded - full">;
                    Popular;
                  </div>)}
                {/* Service Header */}
                <div;
                  className={`${view_mode === 'list' ? 'flex items - start space - x-6' : 'text - center'}`}
                >;
                  <div;
                    className={`${view_mode === 'list' ? 'flex - shrink - 0' : 'mx - auto mb - 4'}`}
                  >;
                    <div;
                      className={`w - 16 h - 16 rounded - 2xl bg - gradient - to - br ${service.color} flex items - center justify - center text - 3xl`}
                    >;
                      {service.icon}
                    </div>;
                  </div>;
                  <div className={`${view_mode === 'list' ? 'flex - 1' : ''}`}>;
                    <h3 className='text - xl font - bold text - white mb - 2 group - hover:text - purple - 400 transition - colors'>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                      {service.name}
                    </h3>;
                    <p className='text - gray - 300 text - sm mb - 3'>;
                      {service.tagline}

                    </p>;

                    {/* Price */}
                    <div className='flex items - center justify - center space - x-2 mb - 4'>;
                      <span className='text - 3xl font - bold text - white'>;
                        {service.price}

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
                    </div>
                  </div>
                </div>
                {/* Description */}

                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service && service.color} flex items-center justify-center text-3xl`}>;
                      {service && service.icon}
                    </div>;
                  </div>;

                  <div className={`${viewMode === 'list' ? 'flex-1' : ''}`}>;
                    <h3 className='text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors'>;
                      {service && service.name}
                    </h3>;
                    <p className='text-gray-300 text-sm mb-3'>;
                      {service && service.tagline}
                    </p>;

                    {/* Price */}
                    <div className='flex items-center justify-center space-x-2 mb-4'>;
                      <span className='text-3xl font-bold text-white'>;
                        {service && service.price}
                      </span>;
                      <span className='text-gray-400'>{service && service.period}</span>                    </div>                      {service && service.icon}
                    </div>;
                  </div>;

                  <div className={`${viewMode === 'list' ? 'flex-1' : ''}`}>;
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">;
                      {service && service.name}
                    </h3>;
                    <p className="text-gray-300 text-sm mb-3">{service && service.tagline}</p>;

                    {/* Price */}
                    <div className="flex items-center justify-center space-x-2 mb-4">;
                      <span className="text-3xl font-bold text-white">{service && service.price}</span>;
                      <span className="text-gray-400">{service && service.period}</span>;
                    </div>;
                  </div>;
                </div>;

                {/* Description */}
                <p className='text-gray-300 mb-6 leading-relaxed'>;
                  {service && service.description}
                </p>;


                {/* Features */}
                <div className='mb-6'>;
                  <h4 className='text-white font-semibold mb-3 flex items-center'>;
                    <Sparkles className='w-4 h-4 mr-2 text-purple-400' />;
                    Key Features;
                  </h4>;
                  <div className='grid grid-cols-1 gap-2'>;
                    {service && service.features.slice(0, 4).map((feature, idx) => (;
                      <div
                        key={idx}
                        className='flex items-center text-sm text-gray-300'>;
                        <CheckCircle className='w-4 h-4 text-green-400 mr-2 flex-shrink-0' />                        {feature}
                      </div>;
                    ))}

=======
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                      </span>;
                      <span className='text - gray - 400'>{service.period}</span>                    </div>                      {service.icon}
                    </div>;
                  </div>;
                  <div className={`${view_mode === 'list' ? 'flex - 1' : ''}`}>;
                    <h3 className="text - xl font - bold text - white mb - 2 group - hover:text - purple - 400 transition - colors">;
=======
                  <div className='absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold px-3 py-1 rounded-full'>                    Popular                  <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Popular
                  </div>
                )}

                {/* Service Header */}
                <div
                  className={`${viewMode === 'list' ? 'flex items-start space-x-6' : 'text-center'}`}
                >
                  <div
                    className={`${viewMode === 'list' ? 'flex-shrink-0' : 'mx-auto mb-4'}`}
                  >
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-3xl`}
                    >

                      {service.icon}
                    </div>
                  </div>
                  <div className={`${viewMode === 'list' ? 'flex-1' : ''}`}>
                    <h3 className='text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors'>
                      {service.name}
                    </h3>;
                    <p className="text - gray - 300 text - sm mb - 3">{service.tagline}</p>;
                    {/* Price */}
                    <div className="flex items - center justify - center space - x-2 mb - 4">;
                      <span className="text - 3xl font - bold text - white">{service.price}</span>;
                      <span className="text - gray - 400">{service.period}</span>;
                    </div>;
                  </div>;
                </div>;
                {/* Description */}
                <p className='text - gray - 300 mb - 6 leading - relaxed'>;
                  {service.description}
                </p>;
                {/* Features */}
                <div className='mb - 6'>;
                  <h4 className='text - white font - semibold mb - 3 flex items - center'>;
                    <Sparkles className='w - 4 h - 4 mr - 2 text - purple - 400' />;
                    Key Features;
                  </h4>;
                  <div className='grid grid - cols - 1 gap - 2'>;
                    {service.features.slice (0, 4).map ((feature, idx) => (
                      <div;
                        key={idx}
                        className='flex items - center text - sm text - gray - 300';
                      >;
                        <CheckCircle className='w - 4 h - 4 text - green - 400 mr - 2 flex - shrink - 0' />                        {feature}
                      </div>))}
                    {service.features.length > 4 && (
                      <div className='text - sm text - purple - 400 mt - 2'>                        +{service.features.length - 4} more features;

                {/* Features */}
                <div className="mb - 6">;
                  <h4 className="text - white font - semibold mb - 3 flex items - center">;
                    <Sparkles className="w - 4 h - 4 mr - 2 text - purple - 400" />;
                    Key Features;
                  </h4>;
                  <div className="grid grid - cols - 1 gap - 2">;
                    {service.features.slice (0, 4).map ((feature, idx) => (
                      <div key={idx} className="flex items - center text - sm text - gray - 300">;
                        <CheckCircle className="w - 4 h - 4 text - green - 400 mr - 2 flex - shrink - 0" />;
=======
                      <div className='text-sm text-purple-400 mt-2'>                        +{service.features.length - 4} more features


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                {/* Service Details */}
                <div className='grid grid-cols-2 gap-4 mb-6 text-sm'>
                  <div className='text-gray-400'>
                    <span className='block'>Setup Time</span>
                    <span className='text-white font-medium'>
                      {service.setupTime}
                    </span>





>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
                  <div className='text-gray-400'>
                    <span className='block'>Customers</span>
                    <span className='text-white font-medium'>
                      {service.customers}+
                    </span>                  </div>
                </div>
                {/* ROI and Market Info */}                  </div>
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
                  </div>
                </div>

                  </div>;
                </div>;
                {/* Service Details */}
                <div className='grid grid-cols-2 gap-4 mb-6 text-sm'>;
                  <div className='text-gray-400'>;
                    <span className='block'>Setup Time</span>;
                    <span className='text-white font-medium'>;
                      {service && service.setupTime}
                    </span>;
                  </div>;
                  <div className='text-gray-400'>;
                    <span className='block'>Trial</span>;
                    <span className='text-white font-medium'>;
                      {service && service.trialDays} days;
                    </span>;
                  </div>;
                  <div className='text-gray-400'>;
                    <span className='block'>Rating</span>;
                    <div className='flex items-center'>;
                      <span className='text-white font-medium mr-1'>;
                        {service && service.rating}
                      </span>;
                      <Star className='w-4 h-4 text-yellow-400 fill-current' />;
                    </div>;
                  </div>;
                  <div className='text-gray-400'>;
                    <span className='block'>Customers</span>;
                    <span className='text-white font-medium'>;
                      {service && service.customers}+;
                    </span>                  </div>;
                </div>;
                {/* ROI and Market Info */}                  </div>;
                  <div className="text-gray-400">;
                    <span className="block">Trial</span>;
                    <span className="text-white font-medium">{service && service.trialDays} days</span>;
                  </div>;
                  <div className="text-gray-400">;
                    <span className="block">Rating</span>;
                    <div className="flex items-center">;
                      <span className="text-white font-medium mr-1">{service && service.rating}</span>;
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />;
                    </div>;
                  </div>;
                  <div className="text-gray-400">;
                    <span className="block">Customers</span>;
                    <span className="text-white font-medium">{service && service.customers}+</span>;
                  </div>;
                </div>;


                {/* ROI and Market Info */}
                <div className='mb-6 p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20'>;
                  <div className='text-sm'>;
                    <div className='text-gray-300 mb-2'>;
                      <span className='font-semibold text-white'>ROI:</span>{' '}
                      {service && service.roi}
                    </div>;
                    <div className='text-gray-300'>;
                      <span className='font-semibold text-white'>;
                        Market Size:;
                      </span>{' '}


                {/* ROI and Market Info */}
                <div className="mb-6 p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20">

                  <div className="text-sm">
                    <div className="text-gray-300 mb-2">
                      <span className="font-semibold text-white">ROI: </span> {service.roi}
                    </div>
                    <div className="text-gray-300">
                      <span className="font-semibold text-white">Market Size: </span> {service.marketSize}

                    </div>

                  </div>
                </div>
                      {service && service.marketSize}                    </div>                <div className="mb-6 p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20">;
                  <div className="text-sm">;
                    <div className="text-gray-300 mb-2">;
                      <span className="font-semibold text-white">ROI: </span> {service && service.roi}
                    </div>;
                    <div className="text-gray-300">;
                      <span className="font-semibold text-white">Market Size: </span> {service && service.marketSize}
                  </div>;
                </div>;
                {/* Action Buttons */}

                    href={service && service.link}
                    className='flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-6 rounded-lg text-center hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105'>;
                    Get Started;
                  </Link>;
                  <button className='px-4 py-3 border border-white/20 text-white rounded-lg hover:border-purple-500/50 transition-colors'>;
                    <Eye className='w-5 h-5' />                  </button>;
                </div>;


                {/* Contact Info */}
                <div className='mt-6 pt-6 border-t border-white/10'>;
                  <div className='text-center text-sm text-gray-400'>                  <Link

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link

                    href={service.link}
                    className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-6 rounded-lg text-center hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
                  >
                    Get Started
                  </Link>
                  <button className="px-4 py-3 border border-white/20 text-white rounded-lg hover:border-purple-500/50 transition-colors">
                    <Eye className="w-5 h-5" />
                  </button>
                </div>
                {/* Contact Info */}
                <div className='mt-6 pt-6 border-t border-white/10'>
                  <div className='text-center text-sm text-gray-400'>
                    <p>Contact us for custom pricing and implementation</p>
                    <div className='flex items-center justify-center space-x-4 mt-2'>
                      <a
                        href={`tel:${contactInfo.mobile}`}
                        className='flex items-center text-purple-400 hover:text-purple-300'
                      >
                        <Phone className='w-4 h-4 mr-1' />
                        {contactInfo.mobile}
                      </a>
                      <a
                        href={`mailto:${contactInfo.email}`}
                        className='flex items-center text-purple-400 hover:text-purple-300'
                      >
                        <Mail className='w-4 h-4 mr-1' />                        {contactInfo.email}                    <p>Contact us for custom pricing and implementation</p>
                    <div className="flex items-center justify-center space-x-4 mt-2">
                      <a href={`tel:${contactInfo.mobile}`} className="flex items-center text-purple-400 hover:text-purple-300">
                        <Phone className="w-4 h-4 mr-1" />
                        {contactInfo.mobile}
                      </a>
                      <a href={`mailto:${contactInfo.email}`} className="flex items-center text-purple-400 hover:text-purple-300">
                        <Mail className="w-4 h-4 mr-1" />
                        {contactInfo.email}

                    href={service && service.link}
                    className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-6 rounded-lg text-center hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">;
                    Get Started;
                  </Link>;
                  <button className="px-4 py-3 border border-white/20 text-white rounded-lg hover:border-purple-500/50 transition-colors">;
                    <Eye className="w-5 h-5" />;
                  </button>;
                </div>;


                {/* Contact Info */}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>





>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          {/* No Results */}

          {sortedServices.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-gray-400 mb-6">Try adjusting your search criteria or category filter</p>
              <button
                onClick={() => {

                  setSearchTerm('');

                  setSelectedCategory('all');

                }}


          )}
        </div>
      </section>

        </div>;
      </section>;


=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      {/* CTA Section */}
      <section className='py-20 bg-gradient-to-r from-purple-900/20 via-black to-pink-900/20'>
        <div className='max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8'>          <motion.div      <section className="py-20 bg-gradient-to-r from-purple-900/20 via-black to-pink-900/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md: text-5xl font-bold text-white mb-6">
              Ready to Experience the Future?
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Transform your business with our revolutionary futuristic services.
              Get in touch with our experts to discuss your specific needs and implementation strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
=======
                className='border border-white/20 text-white font-semibold py-4 px-8 rounded-lg text-lg hover:border-purple-500/50 transition-colors'>              Ready to Experience the Future?;
            </h2>;
            <p className="text-xl text-gray-300 mb-8">;
              Transform your business with our revolutionary futuristic services. ;
              Get in touch with our experts to discuss your specific needs and implementation strategy.;
            </p>;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;


              <Link
                href="/contact"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-4 px-8 rounded-lg text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
              >
                Contact Our Experts
              </Link>
              <Link
                href='/pricing'
                className='border border-white/20 text-white font-semibold py-4 px-8 rounded-lg text-lg hover:border-purple-500/50 transition-colors'                href="/pricing"
                className="border border-white/20 text-white font-semibold py-4 px-8 rounded-lg text-lg hover:border-purple-500/50 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>


}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
  );
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
}
  );
}
                      <div className='text - sm text - purple - 400 mt - 2'>                      <div className="text - sm text - purple - 400 mt - 2">;
                        +{service.features.length - 4} more features;
                      </div>)}
                  </div>;
                </div>;
                {/* Service Details */}
                <div className='grid grid - cols - 2 gap - 4 mb - 6 text - sm'>;
                  <div className='text - gray - 400'>;
                    <span className='block'>Setup Time</span>;
                    <span className='text - white font - medium'>;
                      {service.setup_time}
                    </span>;
                  </div>;
                  <div className='text - gray - 400'>;
                    <span className='block'>Trial</span>;
                    <span className='text - white font - medium'>;
                      {service.trial_days} days;
                    </span>;
                  </div>;
                  <div className='text - gray - 400'>;
                    <span className='block'>Rating</span>;
                    <div className='flex items - center'>;
                      <span className='text - white font - medium mr - 1'>;
                        {service.rating}
                      </span>;
                      <Star className='w - 4 h - 4 text - yellow - 400 fill - current' />;
                    </div>;
                  </div>;
                  <div className='text - gray - 400'>;
                    <span className='block'>Customers</span>;
                    <span className='text - white font - medium'>;
                      {service.customers}+;
                    </span>                  </div>;
                </div>;
                {/* ROI and Market Info */}                  </div>;
                  <div className="text - gray - 400">;
                    <span className="block">Trial</span>;
                    <span className="text - white font - medium">{service.trial_days} days</span>;
                  </div>;
                  <div className="text - gray - 400">;
                    <span className="block">Rating</span>;
                    <div className="flex items - center">;
                      <span className="text - white font - medium mr - 1">{service.rating}</span>;
                      <Star className="w - 4 h - 4 text - yellow - 400 fill - current" />;
                    </div>;
                  </div>;
                  <div className="text - gray - 400">;
                    <span className="block">Customers</span>;
                    <span className="text - white font - medium">{service.customers}+</span>;
                  </div>;
                </div>;
                {/* ROI and Market Info */}
                <div className='mb - 6 p - 4 bg - gradient - to - r from - purple - 500 / 10 to - pink - 500 / 10 rounded - lg border border - purple - 500 / 20'>;
                  <div className='text - sm'>;
                    <div className='text - gray - 300 mb - 2'>;
                      <span className='font - semibold text - white'>ROI:</span>{' '}
                      {service.roi}
                    </div>;
                    <div className='text - gray - 300'>;
                      <span className='font - semibold text - white'>;
                        Market Size:;
                      </span>{' '}
                      {service.market_size}                    </div>                <div className="mb - 6 p - 4 bg - gradient - to - r from - purple - 500 / 10 to - pink - 500 / 10 rounded - lg border border - purple - 500 / 20">;
                  <div className="text - sm">;
                    <div className="text - gray - 300 mb - 2">;
                      <span className="font - semibold text - white">ROI: </span> {service.roi}
                    </div>;
                    <div className="text - gray - 300">;
                      <span className="font - semibold text - white">Market Size: </span> {service.market_size}
                  </div>;
                </div>;
                {/* Action Buttons */}
                <div className='flex flex - col sm:flex - row gap - 3'>;
                  <Link;
                    href={service.link}
                    className='flex - 1 bg - gradient - to - r from - purple - 500 to - pink - 500 text - white font - semibold py - 3 px - 6 rounded - lg text - center hover:from - purple - 600 hover:to - pink - 600 transition - all duration - 300 transform hover:scale - 105';
                  >;
                    Get Started;
                  </Link>;
                  <button className='px - 4 py - 3 border border - white / 20 text - white rounded - lg hover:border - purple - 500 / 50 transition - colors'>;
                    <Eye className='w - 5 h - 5' />                  </button>;
                </div>;
                {/* Contact Info */}
                <div className='mt - 6 pt - 6 border - t border - white / 10'>;
                  <div className='text - center text - sm text - gray - 400'>                  <Link;
                    href={service.link}
                    className="flex - 1 bg - gradient - to - r from - purple - 500 to - pink - 500 text - white font - semibold py - 3 px - 6 rounded - lg text - center hover:from - purple - 600 hover:to - pink - 600 transition - all duration - 300 transform hover:scale - 105";
                  >;
                    Get Started;
                  </Link>;
                  <button className="px - 4 py - 3 border border - white / 20 text - white rounded - lg hover:border - purple - 500 / 50 transition - colors">;
                    <Eye className="w - 5 h - 5" />;
                  </button>;
                </div>;
                {/* Contact Info */}
                <div className='mt - 6 pt - 6 border - t border - white / 10'>;
                  <div className='text - center text - sm text - gray - 400'>;
                    <p > Contact us for custom pricing and implementation</p>;
                    <div className='flex items - center justify - center space - x-4 mt - 2'>;
                      <a;
                        href={`tel:${contact_info.mobile}`}
                        className='flex items - center text - purple - 400 hover:text - purple - 300';
                      >;
                        <Phone className='w - 4 h - 4 mr - 1' />;
                        {contact_info.mobile}
                      </a>;
                      <a;
                        href={`mailto:${contact_info.email}`}
                        className='flex items - center text - purple - 400 hover:text - purple - 300';
                      >;
                        <Mail className='w - 4 h - 4 mr - 1' />                        {contact_info.email}                    <p > Contact us for custom pricing and implementation</p>;
                    <div className="flex items - center justify - center space - x-4 mt - 2">;
                      <a href={`tel:${contact_info.mobile}`} className="flex items - center text - purple - 400 hover:text - purple - 300">;
                        <Phone className="w - 4 h - 4 mr - 1" />;
                        {contact_info.mobile}
                      </a>;
                      <a href={`mailto:${contact_info.email}`} className="flex items - center text - purple - 400 hover:text - purple - 300">;
                        <Mail className="w - 4 h - 4 mr - 1" />;
                        {contact_info.email}
                      </a>;
                    </div>;
                  </div>;
                </div>;
              </motion.div>))}
          </motion.div>;
          {/* No Results */}
          {sorted_services.length === 0 && (
            <div className='text - center py - 16'>;
              <div className='text - 6xl mb - 4'>🔍</div>;
              <h3 className='text - 2xl font - bold text - white mb - 2'>;
                No services found;
              </h3>;
              <p className='text - gray - 400 mb - 6'>;
                Try adjusting your search criteria or category filter;
              </p>;
              <button;
                on_click={() => {
                  setSearchTerm ('');
                  setSelectedCategory ('all');
                }}
                className='bg - gradient - to - r from - purple - 500 to - pink - 500 text - white font - semibold py - 3 px - 6 rounded - lg hover:from - purple - 600 hover:to - pink - 600 transition - all duration - 300'              >              <button;
                on_click={() => {
                  setSearchTerm ('');
                  setSelectedCategory ('all');
                }}
                className="bg - gradient - to - r from - purple - 500 to - pink - 500 text - white font - semibold py - 3 px - 6 rounded - lg hover:from - purple - 600 hover:to - pink - 600 transition - all duration - 300";
              >;
                Clear Filters;
              </button>;
            </div>)}
        </div>;
      </section>;
      {/* CTA Section */}
      <section className='py - 20 bg - gradient - to - r from - purple - 900 / 20 via - black to - pink - 900 / 20'>;
        <div className='max - w-4xl mx - auto text - center px - 4 sm:px - 6 lg:px - 8'>          <motion.div      <section className="py - 20 bg - gradient - to - r from - purple - 900 / 20 via - black to - pink - 900 / 20">;
        <div className="max - w-4xl mx - auto text - center px - 4 sm:px - 6 lg:px - 8">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >;
            <h2 className='text - 3xl md:text - 5xl font - bold text - white mb - 6'>;
              Ready to Experience the Future?;
            </h2>;
            <p className='text - xl text - gray - 300 mb - 8'>;
              Transform your business with our revolutionary futuristic;
              services. Get in touch with our experts to discuss your specific;
              needs and implementation strategy.;
            </p>;
            <div className='flex flex - col sm:flex - row gap - 4 justify - center'>;
              <Link;
                href='/contact';
                className='bg - gradient - to - r from - purple - 500 to - pink - 500 text - white font - semibold py - 4 px - 8 rounded - lg text - lg hover:from - purple - 600 hover:to - pink - 600 transition - all duration - 300 transform hover:scale - 105'              >;
                Contact Our Experts;
              </Link>;
              <Link;
                href='/pricing';
                className='border border - white / 20 text - white font - semibold py - 4 px - 8 rounded - lg text - lg hover:border - purple - 500 / 50 transition - colors'              >              Ready to Experience the Future?;
            </h2>;
            <p className="text - xl text - gray - 300 mb - 8">;
              Transform your business with our revolutionary futuristic services.;
              Get in touch with our experts to discuss your specific needs and implementation strategy.;
            </p>;
            <div className="flex flex - col sm:flex - row gap - 4 justify - center">;
              <Link;
                href="/contact";
                className="bg - gradient - to - r from - purple - 500 to - pink - 500 text - white font - semibold py - 4 px - 8 rounded - lg text - lg hover:from - purple - 600 hover:to - pink - 600 transition - all duration - 300 transform hover:scale - 105";
              >;
                Contact Our Experts;
              </Link>;
              <Link;
                href='/pricing';
                className='border border - white / 20 text - white font - semibold py - 4 px - 8 rounded - lg text - lg hover:border - purple - 500 / 50 transition - colors'                href="/pricing";
                className="border border - white / 20 text - white font - semibold py - 4 px - 8 rounded - lg text - lg hover:border - purple - 500 / 50 transition - colors";
              >;
                View Pricing;
              </Link>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </Layout>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4

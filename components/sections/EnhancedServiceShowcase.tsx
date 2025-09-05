<<<<<<< HEAD
import React, { useState, useMemo } from 'react',
import { motion, AnimatePresence } from 'framer-motion',
import { 
  Star, Users, TrendingUp, DollarSign, Clock, 
  CheckCircle, ArrowRight, Zap, Shield, Rocket,
  Brain, Globe, Lock, Code, Database, Cloud
} from 'lucide-react',
import Button from '../ui/Button',
interface Service {
  id: string,
  name: string,
  tagline: string,
  price: string,
  period: string,
  description: string,
  features: string[],
  popular: boolean,
  icon: string,
  color: string,
  textColor: string,
  link: string,
  marketPosition: string,
  targetAudience: string,
  trialDays: number,
  setupTime: string,
  category: string,
  realService: boolean,
  technology: string[],
  integrations: string[],
  useCases: string[],
  roi: string,
  competitors: string[],
  marketSize: string,
  growthRate: string,
  variant: string,
  contactInfo: {
    mobile: string,
    email: string,
    address: string,
    website: string
  },
  realImplementation: boolean,
  implementationDetails: string,
  launchDate: string,
  customers: number,
  rating: number,
  reviews: number
}

interface EnhancedServiceShowcaseProps {
  title: string,
  subtitle: string,
  showFilters?: boolean,
  services?: Service[],
  maxServices?: number
}

const EnhancedServiceShowcase: React.FC<EnhancedServiceShowcaseProps> = ({
  title,
  subtitle,
  showFilters = false,
  services = [],
  maxServices = 12
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all'),
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all'),
  const [sortBy, setSortBy] = useState<string>('popular'),

  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀' },
    { id: 'ai', name: 'AI & ML', icon: '🧠' },
    { id: 'quantum', name: 'Quantum', icon: '⚛️' },
    { id: 'blockchain', name: 'Blockchain', icon: '⛓️' },
    { id: 'enterprise', name: 'Enterprise', icon: '🏢' },
    { id: 'emerging', name: 'Emerging Tech', icon: '🌟' }
  ],

  const priceRanges = [
    { id: 'all', name: 'All Prices' },
    { id: 'low', name: 'Under $1K/month' },
    { id: 'medium', name: '$1K - $5K/month' },
    { id: 'high', name: '$5K - $20K/month' },
    { id: 'premium', name: '$20K+/month' }
  ],

  const sortOptions = [
    { id: 'popular', name: 'Most Popular' },
    { id: 'rating', name: 'Highest Rated' },
    { id: 'roi', name: 'Best ROI' },
    { id: 'price-low', name: 'Price Low to High' },
    { id: 'price-high', name: 'Price High to Low' }
  ],

  const filteredServices = useMemo(() => {
    const filtered = services.filter(service => {
      const matchesCategory = selectedCategory === 'all' || 
=======
import React, {_useState, _useMemo} from 'react';
import {_Star, _Users, _TrendingUp, _DollarSign, _Clock, _CheckCircle, _ArrowRight, _Zap, _Shield, _Rocket, _Brain, _Globe, _Lock, _Code, _Database, _Cloud} from 'lucide-react';
import Button from '../ui/Button';

interface Service {_id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
  icon: string;
  color: string;
  textColor: string;
  link: string;
  marketPosition: string;
  targetAudience: string;
  trialDays: number;
  setupTime: string;
  category: string;
  realService: boolean;
  technology: string[];
  integrations: string[];
  useCases: string[];
  roi: string;
  competitors: string[];
  marketSize: string;
  growthRate: string;
  variant: string;
  contactInfo: {
    mobile: string;
    email: string;
    address: string;
    website: string;};
  realImplementation: boolean;
  implementationDetails: string;
  launchDate: string;
  customers: number;
  rating: number;
  reviews: number;
}

interface EnhancedServiceShowcaseProps {_title: string;
  subtitle: string;
  showFilters?: boolean;
  services?: Service[];
  maxServices?: number;}

const EnhancedServiceShowcase: React.FC<EnhancedServiceShowcaseProps> = (_{_title, _subtitle, _showFilters = false, _services = [], _maxServices = 12}) => {_const [selectedCategory, _setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, _setSelectedPriceRange] = useState<string>('all');
  const [sortBy, _setSortBy] = useState<string>('popular');

  const _categories = [
    { id: 'all', _name: 'All Services', _icon: '🚀'},
    {_id: 'ai', _name: 'AI & ML', _icon: '🧠'},
    {_id: 'quantum', _name: 'Quantum', _icon: '⚛️'},
    {_id: 'blockchain', _name: 'Blockchain', _icon: '⛓️'},
    {_id: 'enterprise', _name: 'Enterprise', _icon: '🏢'},
    {_id: 'emerging', _name: 'Emerging Tech', _icon: '🌟'}
  ];

  const _priceRanges = [
    {_id: 'all', _name: 'All Prices'},
    {_id: 'low', _name: 'Under $1K/month'},
    {_id: 'medium', _name: '$1K - $5K/month'},
    {_id: 'high', _name: '$5K - $20K/month'},
    {_id: 'premium', _name: '$20K+/month'}
  ];

  const _sortOptions = [
    {_id: 'popular', _name: 'Most Popular'},
    {_id: 'rating', _name: 'Highest Rated'},
    {_id: 'roi', _name: 'Best ROI'},
    {_id: 'price-low', _name: 'Price Low to High'},
    {_id: 'price-high', _name: 'Price High to Low'}
  ];

  const _filteredServices = useMemo__(() => {_let _filtered = services.filter(service => {
      const _matchesCategory = selectedCategory === 'all' || 
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                             (selectedCategory === 'ai' && (service.category.includes('AI') || service.category.includes('Machine Learning'))) ||
                             (selectedCategory === 'quantum' && (service.category.includes('Quantum') || service.category.includes('Space'))) ||
                             (selectedCategory === 'blockchain' && (service.category.includes('Blockchain') || service.category.includes('DeFi') || service.category.includes('NFT'))) ||
                             (selectedCategory === 'enterprise' && (service.category.includes('Enterprise') || service.category.includes('IT'))) ||
                             (selectedCategory === 'emerging' && (service.category.includes('Neural') || service.category.includes('Autonomous') || service.category.includes('Space') || service.category.includes('Biotech'))),

<<<<<<< HEAD
      const matchesPrice = selectedPriceRange === 'all' ||
                          (selectedPriceRange === 'low' && parseFloat(service.price.replace(/[$]/g, '')) < 1000) ||
                          (selectedPriceRange === 'medium' && parseFloat(service.price.replace(/[$]/g, '')) >= 1000 && parseFloat(service.price.replace(/[$]/g, '')) < 5000) ||
                          (selectedPriceRange === 'high' && parseFloat(service.price.replace(/[$]/g, '')) >= 5000 && parseFloat(service.price.replace(/[$]/g, '')) < 20000) ||
                          (selectedPriceRange === 'premium' && parseFloat(service.price.replace(/[$]/g, '')) >= 20000),

      return matchesCategory && matchesPrice
    }),

    // Sort services
    switch (sortBy) {
      case 'popular':
        filtered.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0)),
        break,
      case 'rating':
        filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0)),
        break,
      case 'roi':
        filtered.sort((a, b) => {
          const aROI = parseInt(a.roi.match(/\d+/)?.[0] || '0'),
          const bROI = parseInt(b.roi.match(/\d+/)?.[0] || '0'),
          return bROI - aROI
        }),
        break,
      case 'price-low':
        filtered.sort((a, b) => parseFloat(a.price.replace(/[$]/g, '')) - parseFloat(b.price.replace(/[$]/g, ''))),
        break,
      case 'price-high':
        filtered.sort((a, b) => parseFloat(b.price.replace(/[$]/g, '')) - parseFloat(a.price.replace(/[$]/g, ''))),
        break,
      default: break
=======
      const _matchesPrice = selectedPriceRange === 'all' ||
                          (selectedPriceRange === 'low' && parseFloat(service.price.replace(/[$]/g, _'')) < 1000) ||
                          (selectedPriceRange === 'medium' && parseFloat(service.price.replace(/[$]/g, _'')) >= 1000 && parseFloat(service.price.replace(/[$]/g, _'')) < 5000) ||
                          (selectedPriceRange === 'high' && parseFloat(service.price.replace(/[$]/g, _'')) >= 5000 && parseFloat(service.price.replace(/[$]/g, _'')) < 20000) ||
                          (selectedPriceRange === 'premium' && parseFloat(service.price.replace(/[$]/g, _'')) >= 20000);

      return matchesCategory && matchesPrice;});

    // Sort services
    switch (sortBy) {_case 'popular':
        filtered.sort(_(a, _b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
        break;
      case 'rating':
        filtered.sort(_(a, _b) => (b.rating || 0) - (a.rating || 0));
        break;
      case 'roi':
        filtered.sort(_(a, _b) => {
          const _aROI = parseInt(a.roi.match(/\d+/)?.[0] || '0');
          const _bROI = parseInt(b.roi.match(/\d+/)?.[0] || '0');
          return bROI - aROI;});
        break;
      case 'price-low':
        filtered.sort(_(a, _b) => parseFloat(a.price.replace(/[$]/g, '')) - parseFloat(b.price.replace(/[$]/g, '')));
        break;
      case 'price-high':
        filtered.sort(_(a, _b) => parseFloat(b.price.replace(/[$]/g, '')) - parseFloat(a.price.replace(/[$]/g, '')));
        break;
      default:
        break;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }

    return filtered.slice(0, maxServices)
  }, [services, selectedCategory, selectedPriceRange, sortBy, maxServices]),

<<<<<<< HEAD
  const stats = [
    { label: 'Total Services', value: services.length, icon: Rocket, color: 'text-blue-400' },
    { label: 'Active Customers', value: services.reduce((sum, s) => sum + (s.customers || 0), 0), icon: Users, color: 'text-green-400' },
    { label: 'Average Rating', value: (services.reduce((sum, s) => sum + (s.rating || 0), 0) / services.length).toFixed(1), icon: Star, color: 'text-yellow-400' },
    { label: 'Market Growth', value: '300%+', icon: TrendingUp, color: 'text-purple-400' }
  ],

  return (
    <section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
      <div className=&quot;max-w-7xl mx-auto&quot;>
        {/* Header */}
        <div className=&quot;text-center mb-16&quot;>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className=&quot;text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6&quot;
=======
  const _stats = [
    {_label: 'Total Services', _value: services.length, _icon: Rocket, _color: 'text-blue-400'},
    {_label: 'Active Customers', _value: services.reduce(_(sum, _s) => sum + (s.customers || 0), _0), _icon: Users, _color: 'text-green-400'},
    {_label: 'Average Rating', _value: (_services.reduce((sum, _s) => sum + (s.rating || 0), _0) / services.length).toFixed(1), _icon: Star, _color: 'text-yellow-400'},
    {_label: 'Market Growth', _value: '300%+', _icon: TrendingUp, _color: 'text-purple-400'}
  ];

  return (_<section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {_/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            {_title}
          </motion.h2>
          <motion.p
<<<<<<< HEAD
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className=&quot;text-xl text-gray-300 mb-8 max-w-3xl mx-auto&quot;
=======
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8, _delay: 0.2}}
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            {_subtitle}
          </motion.p>

          {_/* Stats */}
          <motion.div
<<<<<<< HEAD
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className=&quot;grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto&quot;
          >
            {stats.map((stat, index) => (
              <div key={index} className=&quot;text-center&quot;>
                <div className={`${stat.color} mb-2 flex justify-center`}>
                  <stat.icon className=&quot;w-8 h-8&quot; />
                </div>
                <div className=&quot;text-2xl font-bold text-white&quot;>{stat.value}</div>
                <div className=&quot;text-sm text-gray-400&quot;>{stat.label}</div>
=======
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8, _delay: 0.4}}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {_stats.map((stat, _index) => (
              <div key={index} className="text-center">
                <div className={_`${stat.color} mb-2 flex justify-center`}>
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-2xl font-bold text-white">{_stat.value}</div>
                <div className="text-sm text-gray-400">{_stat.label}</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </div>
            ))}
          </motion.div>
        </div>

<<<<<<< HEAD
        {/* Filters */}
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className=&quot;mb-12&quot;
          >
            <div className=&quot;bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50&quot;>
              <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-6&quot;>
                {/* Category Filter */}
=======
        {_/* Filters */}
        {_showFilters && (_<motion.div
            initial={{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8, _delay: 0.6}}
            className="mb-12"
          >
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {_/* Category Filter */}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                <div>
                  <label className=&quot;block text-sm font-medium text-gray-300 mb-3&quot;>Category</label>
                  <select
<<<<<<< HEAD
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className=&quot;w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent&quot;
=======
                    value={_selectedCategory}
                    onChange={_(e) => setSelectedCategory(e.target.value)}
                    className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  >
                    {_categories.map(_(category) => (
                      <option key={category.id} value={_category.id}>
                        {_category.icon} {_category.name}
                      </option>
                    ))}
                  </select>
                </div>

                {_/* Price Range Filter */}
                <div>
                  <label className=&quot;block text-sm font-medium text-gray-300 mb-3&quot;>Price Range</label>
                  <select
<<<<<<< HEAD
                    value={selectedPriceRange}
                    onChange={(e) => setSelectedPriceRange(e.target.value)}
                    className=&quot;w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent&quot;
=======
                    value={_selectedPriceRange}
                    onChange={_(_e) => setSelectedPriceRange(e.target.value)}
                    className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  >
                    {_priceRanges.map(_(range) => (
                      <option key={range.id} value={_range.id}>
                        {_range.name}
                      </option>
                    ))}
                  </select>
                </div>

                {_/* Sort Options */}
                <div>
                  <label className=&quot;block text-sm font-medium text-gray-300 mb-3&quot;>Sort By</label>
                  <select
<<<<<<< HEAD
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className=&quot;w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent&quot;
=======
                    value={_sortBy}
                    onChange={_(_e) => setSortBy(e.target.value)}
                    className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  >
                    {_sortOptions.map(_(option) => (
                      <option key={option.id} value={_option.id}>
                        {_option.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {_/* Services Grid */}
        <motion.div
<<<<<<< HEAD
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;
=======
          initial={_{ opacity: 0, _y: 30}}
          whileInView={_{ opacity: 1, _y: 0}}
          transition={_{ duration: 0.8, _delay: 0.8}}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        >
          <AnimatePresence>
            {_filteredServices.map(_(service, _index) => (
              <motion.div
                key={service.id}
<<<<<<< HEAD
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className=&quot;group&quot;
              >
                <div className=&quot;relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 h-full&quot;>
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className=&quot;absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full&quot;>
=======
                initial={_{ opacity: 0, _y: 30, _scale: 0.9}}
                whileInView={_{ opacity: 1, _y: 0, _scale: 1}}
                transition={_{ duration: 0.6, _delay: index * 0.1}}
                whileHover={_{ y: -5, _scale: 1.02}}
                className="group"
              >
                <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 h-full">
                  {_/* Popular Badge */}
                  {_service.popular && (
                    <div className="absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      ⭐ Most Popular
                    </div>
                  )}

<<<<<<< HEAD
                  {/* Header */}
                  <div className=&quot;mb-6&quot;>
                    <div className=&quot;flex items-center justify-between mb-4&quot;>
                      <div className=&quot;text-3xl&quot;>{service.icon}</div>
                      <div className=&quot;text-right&quot;>
                        <div className=&quot;text-2xl font-bold text-white&quot;>{service.price}</div>
                        <div className=&quot;text-sm text-gray-400&quot;>{service.period}</div>
                      </div>
                    </div>
                    <h3 className=&quot;text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors&quot;>
                      {service.name}
                    </h3>
                    <p className=&quot;text-gray-300 text-sm leading-relaxed&quot;>
                      {service.tagline}
                    </p>
                  </div>

                  {/* Features */}
                  <div className=&quot;mb-6&quot;>
                    <h4 className=&quot;text-sm font-semibold text-gray-300 mb-3 flex items-center&quot;>
                      <CheckCircle className=&quot;w-4 h-4 mr-2 text-green-400&quot; />
                      Key Features
                    </h4>
                    <ul className=&quot;space-y-2&quot;>
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className=&quot;text-sm text-gray-400 flex items-start&quot;>
                          <span className=&quot;text-cyan-400 mr-2&quot;>•</span>
                          {feature}
=======
                  {_/* Header */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-3xl">{_service.icon}</div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-white">{_service.price}</div>
                        <div className="text-sm text-gray-400">{_service.period}</div>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {_service.name}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {_service.tagline}
                    </p>
                  </div>

                  {_/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-3 flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {_service.features.slice(0, _4).map(_(feature, _idx) => (
                        <li key={idx} className="text-sm text-gray-400 flex items-start">
                          <span className="text-cyan-400 mr-2">•</span>
                          {_feature}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        </li>
                      ))}
                    </ul>
                  </div>

<<<<<<< HEAD
                  {/* Stats */}
                  <div className=&quot;grid grid-cols-3 gap-4 mb-6 text-center&quot;>
                    <div>
                      <div className=&quot;text-lg font-bold text-white&quot;>{service.rating}</div>
                      <div className=&quot;text-xs text-gray-400&quot;>Rating</div>
                    </div>
                    <div>
                      <div className=&quot;text-lg font-bold text-white&quot;>{service.customers?.toLocaleString() || '0'}</div>
                      <div className=&quot;text-xs text-gray-400&quot;>Customers</div>
                    </div>
                    <div>
                      <div className=&quot;text-lg font-bold text-white&quot;>{service.trialDays}</div>
                      <div className=&quot;text-xs text-gray-400&quot;>Trial Days</div>
                    </div>
                  </div>

                  {/* ROI Highlight */}
                  <div className=&quot;mb-6 p-4 bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-lg border border-green-500/20&quot;>
                    <div className=&quot;text-sm text-green-400 font-semibold mb-1&quot;>🚀 ROI Promise</div>
                    <div className=&quot;text-xs text-gray-300 leading-relaxed&quot;>
                      {service.roi}
                    </div>
                  </div>

                  {/* Market Position */}
                  <div className=&quot;mb-6 p-4 bg-gray-800/30 rounded-lg&quot;>
                    <div className=&quot;text-sm text-cyan-400 font-semibold mb-2&quot;>📊 Market Position</div>
                    <div className=&quot;text-xs text-gray-300 leading-relaxed&quot;>
                      {service.marketPosition}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className=&quot;mt-auto&quot;>
                    <Button
                      href={service.link}
                      variant=&quot;primary&quot;
                      className=&quot;w-full group-hover:bg-cyan-500 transition-colors&quot;
=======
                  {_/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                    <div>
                      <div className="text-lg font-bold text-white">{_service.rating}</div>
                      <div className="text-xs text-gray-400">Rating</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white">{_service.customers?.toLocaleString() || '0'}</div>
                      <div className="text-xs text-gray-400">Customers</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white">{_service.trialDays}</div>
                      <div className="text-xs text-gray-400">Trial Days</div>
                    </div>
                  </div>

                  {_/* ROI Highlight */}
                  <div className="mb-6 p-4 bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-lg border border-green-500/20">
                    <div className="text-sm text-green-400 font-semibold mb-1">🚀 ROI Promise</div>
                    <div className="text-xs text-gray-300 leading-relaxed">
                      {_service.roi}
                    </div>
                  </div>

                  {_/* Market Position */}
                  <div className="mb-6 p-4 bg-gray-800/30 rounded-lg">
                    <div className="text-sm text-cyan-400 font-semibold mb-2">📊 Market Position</div>
                    <div className="text-xs text-gray-300 leading-relaxed">
                      {_service.marketPosition}
                    </div>
                  </div>

                  {_/* CTA */}
                  <div className="mt-auto">
                    <Button
                      href={_service.link}
                      variant="primary"
                      className="w-full group-hover:bg-cyan-500 transition-colors"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    >
                      Get Started
                      <ArrowRight className=&quot;ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform&quot; />
                    </Button>
                  </div>

<<<<<<< HEAD
                  {/* Contact Info */}
                  <div className=&quot;mt-4 text-center&quot;>
                    <div className=&quot;text-xs text-gray-500&quot;>
                      Contact: <span className=&quot;text-cyan-400&quot;>{service.contactInfo.mobile}</span>
                    </div>
                    <div className=&quot;text-xs text-gray-500&quot;>
                      Email: <span className=&quot;text-cyan-400&quot;>{service.contactInfo.email}</span>
=======
                  {_/* Contact Info */}
                  <div className="mt-4 text-center">
                    <div className="text-xs text-gray-500">
                      Contact: <span className="text-cyan-400">{_service.contactInfo.mobile}</span>
                    </div>
                    <div className="text-xs text-gray-500">
                      Email: <span className="text-cyan-400">{_service.contactInfo.email}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {_/* Call to Action */}
        <motion.div
<<<<<<< HEAD
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className=&quot;text-center mt-16&quot;
=======
          initial={_{ opacity: 0, _y: 30}}
          whileInView={_{ opacity: 1, _y: 0}}
          transition={_{ duration: 0.8, _delay: 1.0}}
          className="text-center mt-16"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        >
          <div className=&quot;bg-gradient-to-r from-cyan-900/20 to-purple-900/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20&quot;>
            <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>
              Ready to Transform Your Business?
            </h3>
            <p className=&quot;text-gray-300 mb-6 max-w-2xl mx-auto&quot;>
              Join thousands of companies already achieving breakthrough results with our cutting-edge AI, quantum, and blockchain solutions. 
              Get started today and see the future of business technology.
            </p>
<<<<<<< HEAD
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary" className="text-lg px-8 py-4">
=======
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <Button href=&quot;/contact&quot; variant=&quot;primary&quot; className=&quot;text-lg px-8 py-4&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                Schedule a Consultation
                <ArrowRight className=&quot;ml-2 w-5 h-5&quot; />
              </Button>
              <Button href=&quot;/pricing&quot; variant=&quot;secondary&quot; className=&quot;text-lg px-8 py-4&quot;>
                View Pricing Plans
                <DollarSign className=&quot;ml-2 w-5 h-5&quot; />
              </Button>
            </div>
            <div className=&quot;mt-6 text-sm text-gray-400&quot;>
              <p>📞 Call us: <span className=&quot;text-cyan-400&quot;>+1 302 464 0950</span></p>
              <p>📧 Email: <span className=&quot;text-cyan-400&quot;>kleber@ziontechgroup.com</span></p>
              <p>🌐 Visit: <span className=&quot;text-cyan-400&quot;>https://ziontechgroup.com</span></p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
},

export default EnhancedServiceShowcase,
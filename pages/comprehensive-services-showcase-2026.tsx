<<<<<<< HEAD
import React, { useState, useEffect } from 'react',
import { motion } from 'framer-motion',
import { innovativeMicroSaasServices2026 } from '../data/2026-innovative-micro-saas-expansion',
import { specializedITSolutions2026 } from '../data/2026-specialized-it-solutions',
import { emergingTechServices2026 } from '../data/2026-emerging-tech-services',
import { 
  Search, Filter, Star, Users, TrendingUp, 
  Clock, Zap, Shield, Cloud, Brain, 
  Database, Globe, Robot, Cube, Sparkles
} from 'lucide-react',

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

const ComprehensiveServicesShowcase2026: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState(''),
  const [selectedCategory, setSelectedCategory] = useState('all'),
  const [selectedPriceRange, setSelectedPriceRange] = useState('all'),
  const [sortBy, setSortBy] = useState('popularity'),

  const allServices = [
    ...innovativeMicroSaasServices2026,
    ...specializedITSolutions2026,
    ...emergingTechServices2026
  ],

  const categories = [
    'allBusiness Intelligence & AnalyticsContent Creation & MarketingCustomer Service & SupportE-commerce & RetailHR & RecruitmentFinancial ManagementProject Management',
    'Education & TrainingHealthcare & MedicalCloud Infrastructure & DevOpsCybersecurity & Threat IntelligenceData Engineering & AnalyticsAPI Management & IntegrationNetwork Monitoring & ManagementDatabase Management & Optimization',
    'IT Service ManagementBackup & Disaster RecoveryQuantum Computing & AIBlockchain & Web3Internet of Things (IoT)Edge Computing & 5GAR/VR & Immersive TechnologyRobotics & Automation',
    'Digital Twin & Simulation'
  ],

  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: '0-100', label: '$0 - $100' },
    { value: '100-200', label: '$100 - $200' },
    { value: '200-400', label: '$200 - $400' },
    { value: '400-600', label: '$400 - $600' },
    { value: '600+', label: '$600+' }
  ],
=======
import React, {_useState, _useEffect} from 'react';
import {_Search, _Filter, _Star, _Users, _TrendingUp, _Clock, _Zap, _Shield, _Cloud, _Brain, _Database, _Globe, _Robot, _Cube, _Sparkles} from 'lucide-react';

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

const ComprehensiveServicesShowcase2026: React.FC = () => {_const [searchTerm, _setSearchTerm] = useState('');
  const [selectedCategory, _setSelectedCategory] = useState('all');
  const [selectedPriceRange, _setSelectedPriceRange] = useState('all');
  const [sortBy, _setSortBy] = useState('popularity');

  const _allServices = [
    ...innovativeMicroSaasServices2026, _...specializedITSolutions2026, _...emergingTechServices2026
  ];

  const _categories = [
    'all', _'Business Intelligence & Analytics', _'Content Creation & Marketing', _'Customer Service & Support', _'E-commerce & Retail', _'HR & Recruitment', _'Financial Management', _'Project Management', _'Education & Training', _'Healthcare & Medical', _'Cloud Infrastructure & DevOps', _'Cybersecurity & Threat Intelligence', _'Data Engineering & Analytics', _'API Management & Integration', _'Network Monitoring & Management', _'Database Management & Optimization', _'IT Service Management', _'Backup & Disaster Recovery', _'Quantum Computing & AI', _'Blockchain & Web3', _'Internet of Things (IoT)', _'Edge Computing & 5G', _'AR/VR & Immersive Technology', _'Robotics & Automation', _'Digital Twin & Simulation'
  ];

  const _priceRanges = [
    { value: 'all', _label: 'All Prices'},
    {_value: '0-100', _label: '$0 - $100'},
    {_value: '100-200', _label: '$100 - $200'},
    {_value: '200-400', _label: '$200 - $400'},
    {_value: '400-600', _label: '$400 - $600'},
    {_value: '600+', _label: '$600+'}
  ];
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _filteredServices = allServices.filter(service => {_const _matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase()),
    
<<<<<<< HEAD
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory,
    
    const matchesPrice = selectedPriceRange === 'all' || (() => {
      const price = parseInt(service.price.replace('$', '')),
      switch (selectedPriceRange) {
        case '0-100': return price <= 100,
        case '100-200': return price > 100 && price <= 200,
        case '200-400': return price > 200 && price <= 400,
        case '400-600': return price > 400 && price <= 600,
        case '600+': return price > 600,
        default: return true
      }
    })(),
=======
    const _matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    
    const _matchesPrice = selectedPriceRange === 'all' || __(() => {
      const _price = parseInt(service.price.replace('$', _''));
      switch (selectedPriceRange) {
        case '0-100': return price <= 100;
        case '100-200': return price > 100 && price <= 200;
        case '200-400': return price > 200 && price <= 400;
        case '400-600': return price > 400 && price <= 600;
        case '600+': return price > 600;
        default: return true;}
    })();
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    return matchesSearch && matchesCategory && matchesPrice
  }),

  const _sortedServices = [...filteredServices].sort(_(a, _b) => {_switch (sortBy) {
      case 'popularity':
        return b.popular ? 1 : -1,
      case 'price-low':
<<<<<<< HEAD
        return parseInt(a.price.replace('$', '')) - parseInt(b.price.replace('$', '')),
      case 'price-high':
        return parseInt(b.price.replace('$', '')) - parseInt(a.price.replace('$', '')),
=======
        return parseInt(a.price.replace('$', _'')) - parseInt(b.price.replace('$', _''));
      case 'price-high':
        return parseInt(b.price.replace('$', _'')) - parseInt(a.price.replace('$', _''));
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      case 'rating':
        return b.rating - a.rating,
      case 'customers':
<<<<<<< HEAD
        return b.customers - a.customers,
      default: return 0
    }
  }),

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
<<<<<<< HEAD
      'Business Intelligence & Analytics': <Database className="w-5 h-5" />,
      'Content Creation & Marketing': <Sparkles className="w-5 h-5" />,
      'Customer Service & Support': <Users className="w-5 h-5" />,
      'E-commerce & Retail': <Globe className="w-5 h-5" />,
      'HR & Recruitment': <Users className="w-5 h-5" />,
      'Financial Management': <TrendingUp className="w-5 h-5" />,
      'Project Management': <Clock className="w-5 h-5" />,
      'Education & Training': <Brain className="w-5 h-5" />,
      'Healthcare & Medical': <Shield className="w-5 h-5" />,
      'Cloud Infrastructure & DevOps': <Cloud className="w-5 h-5" />,
      'Cybersecurity & Threat Intelligence': <Shield className="w-5 h-5" />,
      'Data Engineering & Analytics': <Database className="w-5 h-5" />,
      'API Management & Integration': <Zap className="w-5 h-5" />,
      'Network Monitoring & Management': <Globe className="w-5 h-5" />,
      'Database Management & Optimization': <Database className="w-5 h-5" />,
      'IT Service Management': <Users className="w-5 h-5" />,
      'Backup & Disaster Recovery': <Cloud className="w-5 h-5" />,
      'Quantum Computing & AI': <Brain className="w-5 h-5" />,
      'Blockchain & Web3': <Cube className="w-5 h-5" />,
      'Internet of Things (IoT)': <Zap className="w-5 h-5" />,
      'Edge Computing & 5G': <Globe className="w-5 h-5" />,
      'AR/VR & Immersive Technology': <Cube className="w-5 h-5" />,
      'Robotics & Automation': <Robot className="w-5 h-5" />,
      'Digital Twin & Simulation': <Cube className="w-5 h-5" />
    },
    return iconMap[category] || <Sparkles className="w-5 h-5" />
  },
=======
      'Business Intelligence & Analytics': <Database className=&quot;w-5 h-5&quot; />,
      'Content Creation & Marketing': <Sparkles className=&quot;w-5 h-5&quot; />,
      'Customer Service & Support': <Users className=&quot;w-5 h-5&quot; />,
      'E-commerce & Retail': <Globe className=&quot;w-5 h-5&quot; />,
      'HR & Recruitment': <Users className=&quot;w-5 h-5&quot; />,
      'Financial Management': <TrendingUp className=&quot;w-5 h-5&quot; />,
      'Project Management': <Clock className=&quot;w-5 h-5&quot; />,
      'Education & Training': <Brain className=&quot;w-5 h-5&quot; />,
      'Healthcare & Medical': <Shield className=&quot;w-5 h-5&quot; />,
      'Cloud Infrastructure & DevOps': <Cloud className=&quot;w-5 h-5&quot; />,
      'Cybersecurity & Threat Intelligence': <Shield className=&quot;w-5 h-5&quot; />,
      'Data Engineering & Analytics': <Database className=&quot;w-5 h-5&quot; />,
      'API Management & Integration': <Zap className=&quot;w-5 h-5&quot; />,
      'Network Monitoring & Management': <Globe className=&quot;w-5 h-5&quot; />,
      'Database Management & Optimization': <Database className=&quot;w-5 h-5&quot; />,
      'IT Service Management': <Users className=&quot;w-5 h-5&quot; />,
      'Backup & Disaster Recovery': <Cloud className=&quot;w-5 h-5&quot; />,
      'Quantum Computing & AI': <Brain className=&quot;w-5 h-5&quot; />,
      'Blockchain & Web3': <Cube className=&quot;w-5 h-5&quot; />,
      'Internet of Things (IoT)': <Zap className=&quot;w-5 h-5&quot; />,
      'Edge Computing & 5G': <Globe className=&quot;w-5 h-5&quot; />,
      'AR/VR & Immersive Technology': <Cube className=&quot;w-5 h-5&quot; />,
      'Robotics & Automation': <Robot className=&quot;w-5 h-5&quot; />,
      'Digital Twin & Simulation': <Cube className=&quot;w-5 h-5&quot; />
    };
    return iconMap[category] || <Sparkles className=&quot;w-5 h-5&quot; />;
=======
        return b.customers - a.customers;
      default:
        return 0;}
  });

  const _getCategoryIcon = (_category: string) => {_const iconMap: { [key: string]: React.ReactNode} = {_'Business Intelligence & Analytics': <Database className="w-5 h-5" />, _'Content Creation & Marketing': <Sparkles className="w-5 h-5" />, _'Customer Service & Support': <Users className="w-5 h-5" />, _'E-commerce & Retail': <Globe className="w-5 h-5" />, _'HR & Recruitment': <Users className="w-5 h-5" />, _'Financial Management': <TrendingUp className="w-5 h-5" />, _'Project Management': <Clock className="w-5 h-5" />, _'Education & Training': <Brain className="w-5 h-5" />, _'Healthcare & Medical': <Shield className="w-5 h-5" />, _'Cloud Infrastructure & DevOps': <Cloud className="w-5 h-5" />, _'Cybersecurity & Threat Intelligence': <Shield className="w-5 h-5" />, _'Data Engineering & Analytics': <Database className="w-5 h-5" />, _'API Management & Integration': <Zap className="w-5 h-5" />, _'Network Monitoring & Management': <Globe className="w-5 h-5" />, _'Database Management & Optimization': <Database className="w-5 h-5" />, _'IT Service Management': <Users className="w-5 h-5" />, _'Backup & Disaster Recovery': <Cloud className="w-5 h-5" />, _'Quantum Computing & AI': <Brain className="w-5 h-5" />, _'Blockchain & Web3': <Cube className="w-5 h-5" />, _'Internet of Things (IoT)': <Zap className="w-5 h-5" />, _'Edge Computing & 5G': <Globe className="w-5 h-5" />, _'AR/VR & Immersive Technology': <Cube className="w-5 h-5" />, _'Robotics & Automation': <Robot className="w-5 h-5" />, _'Digital Twin & Simulation': <Cube className="w-5 h-5" />};
    return iconMap[category] || <Sparkles className="w-5 h-5" />;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

<<<<<<< HEAD
  return (
    <div className=&quot;min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900&quot;>
        {/* Hero Section */}
        <div className=&quot;relative overflow-hidden&quot;>
          <div className=&quot;absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20&quot;></div>
          <div className=&quot;relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=&quot;text-center&quot;
=======
  return (_<div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
        {_/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              animate={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              className="text-center"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              <h1 className=&quot;text-5xl md:text-7xl font-bold text-white mb-6&quot;>
                ZionTech Group
                <span className=&quot;block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500&quot;>
                  2026 Services
                </span>
              </h1>
<<<<<<< HEAD
              <p className=&quot;text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto&quot;>
                Discover our comprehensive suite of innovative micro SAAS services, IT solutions, and emerging technology platforms designed to transform your business.
              </p>
              <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center items-center&quot;>
                <div className=&quot;flex items-center space-x-2 text-white&quot;>
                  <Users className=&quot;w-5 h-5&quot; />
                  <span>{allServices.length}+ Services</span>
=======
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Discover our comprehensive suite of innovative micro SAAS services, _IT solutions, _and emerging technology platforms designed to transform your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center space-x-2 text-white">
                  <Users className="w-5 h-5" />
                  <span>{_allServices.length}+ Services</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </div>
                <div className=&quot;flex items-center space-x-2 text-white&quot;>
                  <Star className=&quot;w-5 h-5 text-yellow-400&quot; />
                  <span>4.5+ Average Rating</span>
                </div>
                <div className=&quot;flex items-center space-x-2 text-white&quot;>
                  <TrendingUp className=&quot;w-5 h-5 text-green-400&quot; />
                  <span>Growing Rapidly</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

<<<<<<< HEAD
        {/* Search and Filters */}
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8&quot;>
          <div className=&quot;bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20&quot;>
            <div className=&quot;grid grid-cols-1 md:grid-cols-4 gap-4&quot;>
              {/* Search */}
              <div className=&quot;relative&quot;>
                <Search className=&quot;absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5&quot; />
                <input
                  type=&quot;text&quot;
                  placeholder=&quot;Search services...&quot;
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className=&quot;w-full pl-10 pr-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400&quot;
=======
        {_/* Search and Filters */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {_/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={_searchTerm}
                  onChange={_(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                />
              </div>

              {_/* Category Filter */}
              <div>
                <select
<<<<<<< HEAD
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className=&quot;w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400&quot;
                >
                  {categories.map(category => (
                    <option key={category} value={category} className=&quot;bg-gray-800 text-white&quot;>
                      {category === 'all' ? 'All Categories' : category}
=======
                  value={_selectedCategory}
                  onChange={_(_e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  {_categories.map(category => (
                    <option key={category} value={_category} className="bg-gray-800 text-white">
                      {_category === 'all' ? 'All Categories' : category}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </option>
                  ))}
                </select>
              </div>

              {_/* Price Range Filter */}
              <div>
                <select
<<<<<<< HEAD
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)}
                  className=&quot;w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400&quot;
                >
                  {priceRanges.map(range => (
                    <option key={range.value} value={range.value} className=&quot;bg-gray-800 text-white&quot;>
                      {range.label}
=======
                  value={_selectedPriceRange}
                  onChange={_(_e) => setSelectedPriceRange(e.target.value)}
                  className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  {_priceRanges.map(range => (
                    <option key={range.value} value={_range.value} className="bg-gray-800 text-white">
                      {_range.label}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </option>
                  ))}
                </select>
              </div>

              {_/* Sort By */}
              <div>
                <select
<<<<<<< HEAD
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className=&quot;w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400&quot;
=======
                  value={_sortBy}
                  onChange={_(_e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                >
                  <option value=&quot;popularity&quot; className=&quot;bg-gray-800 text-white&quot;>Sort by Popularity</option>
                  <option value=&quot;price-low&quot; className=&quot;bg-gray-800 text-white&quot;>Price: Low to High</option>
                  <option value=&quot;price-high&quot; className=&quot;bg-gray-800 text-white&quot;>Price: High to Low</option>
                  <option value=&quot;rating&quot; className=&quot;bg-gray-800 text-white&quot;>Sort by Rating</option>
                  <option value=&quot;customers&quot; className=&quot;bg-gray-800 text-white&quot;>Sort by Customers</option>
                </select>
              </div>
            </div>
          </div>
        </div>

<<<<<<< HEAD
        {/* Services Grid */}
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8&quot;>
          <div className=&quot;mb-8&quot;>
            <h2 className=&quot;text-3xl font-bold text-white mb-2&quot;>
              {filteredServices.length} Services Found
=======
        {_/* Services Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">
              {_filteredServices.length} Services Found
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </h2>
            <p className=&quot;text-gray-300&quot;>
              Discover innovative solutions tailored to your business needs
            </p>
          </div>

<<<<<<< HEAD
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {sortedServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className=&quot;bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105&quot;
              >
                {/* Service Header */}
                <div className=&quot;flex items-start justify-between mb-4&quot;>
                  <div className=&quot;flex items-center space-x-3&quot;>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center text-2xl`}>
                      {service.icon}
                    </div>
                    <div>
                      <h3 className=&quot;text-xl font-bold text-white&quot;>{service.name}</h3>
                      <p className=&quot;text-sm text-gray-300&quot;>{service.category}</p>
                    </div>
                  </div>
                  {service.popular && (
                    <div className=&quot;bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold&quot;>
=======
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {_sortedServices.map(_(service, _index) => (
              <motion.div
                key={service.id}
                initial={_{ opacity: 0, _y: 20}}
                animate={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.5, _delay: index * 0.1}}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                {_/* Service Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={_`w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center text-2xl`}>
                      {_service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{_service.name}</h3>
                      <p className="text-sm text-gray-300">{_service.category}</p>
                    </div>
                  </div>
                  {_service.popular && (
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      Popular
                    </div>
                  )}
                </div>

<<<<<<< HEAD
                {/* Service Details */}
                <p className=&quot;text-gray-300 mb-4&quot;>{service.tagline}</p>
                
                {/* Price and Trial */}
                <div className=&quot;flex items-center justify-between mb-4&quot;>
                  <div className=&quot;text-2xl font-bold text-white&quot;>
                    {service.price}<span className=&quot;text-sm text-gray-400&quot;>{service.period}</span>
                  </div>
                  <div className=&quot;text-sm text-gray-300&quot;>
                    {service.trialDays} days free trial
                  </div>
                </div>

                {/* Features */}
                <div className=&quot;mb-4&quot;>
                  <h4 className=&quot;text-sm font-semibold text-white mb-2&quot;>Key Features:</h4>
                  <ul className=&quot;space-y-1&quot;>
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className=&quot;text-xs text-gray-300 flex items-center&quot;>
                        <div className=&quot;w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2&quot;></div>
                        {feature}
=======
                {_/* Service Details */}
                <p className="text-gray-300 mb-4">{_service.tagline}</p>
                
                {_/* Price and Trial */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold text-white">
                    {_service.price}<span className="text-sm text-gray-400">{_service.period}</span>
                  </div>
                  <div className="text-sm text-gray-300">
                    {_service.trialDays} days free trial
                  </div>
                </div>

                {_/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {_service.features.slice(0, _3).map(_(feature, _idx) => (
                      <li key={idx} className="text-xs text-gray-300 flex items-center">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
                        {_feature}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      </li>
                    ))}
                  </ul>
                </div>

<<<<<<< HEAD
                {/* Stats */}
                <div className=&quot;grid grid-cols-3 gap-4 mb-4 text-center&quot;>
                  <div>
                    <div className=&quot;text-lg font-bold text-white&quot;>{service.rating}</div>
                    <div className=&quot;text-xs text-gray-400&quot;>Rating</div>
                  </div>
                  <div>
                    <div className=&quot;text-lg font-bold text-white&quot;>{service.customers}</div>
                    <div className=&quot;text-xs text-gray-400&quot;>Customers</div>
                  </div>
                  <div>
                    <div className=&quot;text-lg font-bold text-white&quot;>{service.setupTime}</div>
                    <div className=&quot;text-xs text-gray-400&quot;>Setup</div>
                  </div>
                </div>

                {/* Market Info */}
                <div className=&quot;mb-4 p-3 bg-white/5 rounded-lg&quot;>
                  <div className=&quot;text-xs text-gray-300 mb-1&quot;>Market Size: {service.marketSize}</div>
                  <div className=&quot;text-xs text-gray-300&quot;>Growth Rate: {service.growthRate}</div>
=======
                {_/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                  <div>
                    <div className="text-lg font-bold text-white">{_service.rating}</div>
                    <div className="text-xs text-gray-400">Rating</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white">{_service.customers}</div>
                    <div className="text-xs text-gray-400">Customers</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white">{_service.setupTime}</div>
                    <div className="text-xs text-gray-400">Setup</div>
                  </div>
                </div>

                {_/* Market Info */}
                <div className="mb-4 p-3 bg-white/5 rounded-lg">
                  <div className="text-xs text-gray-300 mb-1">Market Size: {_service.marketSize}</div>
                  <div className="text-xs text-gray-300">Growth Rate: {_service.growthRate}</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </div>

                {_/* CTA Button */}
                <a
<<<<<<< HEAD
                  href={service.link}
                  target=&quot;_blank&quot;
                  rel=&quot;noopener noreferrer&quot;
                  className=&quot;block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center py-3 px-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105&quot;
=======
                  href={_service.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center py-3 px-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                >
                  Learn More & Get Started
                </Link>

<<<<<<< HEAD
                {/* Contact Info */}
                <div className=&quot;mt-4 text-center&quot;>
                  <div className=&quot;text-xs text-gray-400&quot;>
                    Contact: {service.contactInfo.email}
                  </div>
                  <div className=&quot;text-xs text-gray-400&quot;>
                    Phone: {service.contactInfo.mobile}
=======
                {_/* Contact Info */}
                <div className="mt-4 text-center">
                  <div className="text-xs text-gray-400">
                    Contact: {_service.contactInfo.email}
                  </div>
                  <div className="text-xs text-gray-400">
                    Phone: {_service.contactInfo.mobile}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

<<<<<<< HEAD
        {/* Contact Section */}
<<<<<<< HEAD
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-16">
=======
        {_/* Contact Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-8 border border-cyan-400/30">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
=======
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16&quot;>
          <div className=&quot;bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-8 border border-cyan-400/30&quot;>
            <div className=&quot;text-center&quot;>
              <h2 className=&quot;text-3xl font-bold text-white mb-4&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                Ready to Transform Your Business?
              </h2>
              <p className=&quot;text-xl text-gray-300 mb-8 max-w-2xl mx-auto&quot;>
                Get in touch with our team to discuss how our innovative services can help you achieve your goals.
              </p>
              <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-6 mb-8&quot;>
                <div className=&quot;text-center&quot;>
                  <div className=&quot;w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4&quot;>
                    <Users className=&quot;w-8 h-8 text-cyan-400&quot; />
                  </div>
                  <h3 className=&quot;text-lg font-semibold text-white mb-2&quot;>Expert Team</h3>
                  <p className=&quot;text-gray-300 text-sm&quot;>Dedicated professionals ready to help</p>
                </div>
                <div className=&quot;text-center&quot;>
                  <div className=&quot;w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4&quot;>
                    <Zap className=&quot;w-8 h-8 text-blue-400&quot; />
                  </div>
                  <h3 className=&quot;text-lg font-semibold text-white mb-2&quot;>Fast Implementation</h3>
                  <p className=&quot;text-gray-300 text-sm&quot;>Quick setup and deployment</p>
                </div>
                <div className=&quot;text-center&quot;>
                  <div className=&quot;w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4&quot;>
                    <Shield className=&quot;w-8 h-8 text-purple-400&quot; />
                  </div>
                  <h3 className=&quot;text-lg font-semibold text-white mb-2&quot;>24/7 Support</h3>
                  <p className=&quot;text-gray-300 text-sm&quot;>Round-the-clock assistance</p>
                </div>
              </div>
              <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center items-center&quot;>
                <a
                  href=&quot;mailto:kleber@ziontechgroup.com&quot;
                  className=&quot;bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300&quot;
                >
                  Email Us
                </Link>
                <a
                  href=&quot;tel:+13024640950&quot;
                  className=&quot;bg-white/10 text-white px-8 py-3 rounded-lg font-semibold border border-white/30 hover:bg-white/20 transition-all duration-300&quot;
                >
                  Call Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
},

export default ComprehensiveServicesShowcase2026,
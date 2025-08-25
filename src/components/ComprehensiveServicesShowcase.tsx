<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Star, 
  Zap, 
  Brain, 
  Code, 
  Globe,
  TrendingUp,
  Users,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Clock
} from 'lucide-react';
import { COMPREHENSIVE_SERVICES } from '../data/comprehensiveServices';
import { INNOVATIVE_SERVICES } from '../data/innovativeServices';

interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  pricingModel: string;
  marketPrice: string;
  features: string[];
  benefits: string[];
  tags: string[];
  featured?: boolean;
  source?: string;
  estimatedDelivery?: string;
  supportLevel?: string;
}

const ComprehensiveServicesShowcase = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');

  // Combine all services
  const allServices = useMemo((): Service[] => {
    const comprehensive = COMPREHENSIVE_SERVICES.map(service => ({
      ...service,
      source: 'comprehensive',
      featured: true
    }));
    const innovative = INNOVATIVE_SERVICES.map(service => ({
      ...service,
      source: 'innovative',
      featured: service.featured || false
    }));
    return [...comprehensive, ...innovative];
  }, []);

  // Get unique categories
  const categories = useMemo(() => {
    const cats = [...new Set(allServices.map(service => service.category))];
    return ['all', ...cats];
  }, [allServices]);

  // Filter and sort services
  const filteredServices = useMemo(() => {
    let filtered = allServices.filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      
      const matchesPrice = selectedPriceRange === 'all' || 
        (selectedPriceRange === 'budget' && service.price <= 100) ||
        (selectedPriceRange === 'mid' && service.price > 100 && service.price <= 500) ||
        (selectedPriceRange === 'premium' && service.price > 500);

      return matchesSearch && matchesCategory && matchesPrice;
    });

    // Sort services
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'featured':
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
      case 'name':
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/Tabs';
import { Phone, Mail, Globe, Clock, Users, CheckCircle, TrendingUp } from 'lucide-react';
import { SERVICE_CATEGORIES } from '@/data/comprehensiveServices';

const ServiceCard = ({ service }: { service: any }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const getPricingDisplay = (service: any) => {
    switch (service.pricingModel) {
      case 'one-time':
        return `${service.currency}${service.price.toLocaleString()}`;
      case 'monthly':
        return `${service.currency}${service.price.toLocaleString()}/month`;
      case 'yearly':
        return `${service.currency}${service.price.toLocaleString()}/year`;
      case 'per-user':
        return `${service.currency}${service.price.toLocaleString()}/user`;
      case 'per-project':
        return `${service.currency}${service.price.toLocaleString()}/project`;
<<<<<<< HEAD
      default:
        return `${service.currency}${service.price.toLocaleString()}`;
    }
  };

  const getSupportLevelColor = (level: string) => {
    switch (level) {
      case 'basic': return 'bg-gray-100 text-gray-800';
      case 'standard': return 'bg-blue-100 text-blue-800';
      case 'premium': return 'bg-purple-100 text-purple-800';
      case 'enterprise': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
=======
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
      default:
        break;
    }

    return filtered;
  }, [allServices, searchTerm, selectedCategory, selectedPriceRange, sortBy]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Machine Learning':
        return <Brain className="w-5 h-5" />;
      case 'IT Services':
        return <Code className="w-5 h-5" />;
      case 'Micro SAAS':
        return <Zap className="w-5 h-5" />;
      case 'AI Services':
        return <Sparkles className="w-5 h-5" />;
      default:
        return <Globe className="w-5 h-5" />;
    }
  };

  const getPriceRangeLabel = (range: string) => {
    switch (range) {
      case 'budget':
        return 'Under $100';
      case 'mid':
        return '$100 - $500';
      case 'premium':
        return 'Over $500';
      default:
        return 'All Prices';
    }
  };

  const ServiceCard = ({ service, index }: { service: Service; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative group cursor-pointer ${
        viewMode === 'grid' ? 'col-span-1' : 'col-span-full'
      }`}
    >
      <div className="relative h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 group-hover:scale-105">
        {/* Featured Badge */}
        {service.featured && (
          <div className="absolute -top-3 -right-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
            <Star className="w-3 h-3" />
            Featured
          </div>
        )}

        {/* Category Icon */}
        <div className="flex items-center gap-2 mb-4">
          <div className="p-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg">
            {getCategoryIcon(service.category)}
          </div>
          <span className="text-xs text-gray-400 uppercase tracking-wider">
            {service.subcategory}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-gray-300 text-sm mb-4 line-clamp-3">
          {service.description}
        </p>

        {/* Price */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-cyan-400" />
            <span className="text-2xl font-bold text-white">
              {service.price.toLocaleString()}
            </span>
            <span className="text-gray-400 text-sm">
              /{service.pricingModel}
            </span>
          </div>
          <div className="text-right">
            <div className="text-xs text-gray-400">Market Price</div>
            <div className="text-sm text-cyan-400 font-medium">{service.marketPrice}</div>
          </div>
        </div>

        {/* Features Preview */}
        <div className="mb-4">
          <div className="text-xs text-gray-400 mb-2">Key Features:</div>
          <div className="flex flex-wrap gap-1">
            {service.features.slice(0, 3).map((feature: string, idx: number) => (
              <span
                key={idx}
                className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-md border border-gray-700"
              >
                {feature}
              </span>
            ))}
            {service.features.length > 3 && (
              <span className="px-2 py-1 bg-gray-800 text-gray-400 text-xs rounded-md border border-gray-700">
                +{service.features.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-4">
          <div className="text-xs text-gray-400 mb-2">Key Benefits:</div>
          <div className="space-y-1">
            {service.benefits.slice(0, 2).map((benefit: string, idx: number) => (
              <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {service.tags.slice(0, 4).map((tag: string, idx: number) => (
            <span
              key={idx}
              className="px-2 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded-md border border-cyan-500/20"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-700">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Clock className="w-3 h-3" />
            <span>{service.estimatedDelivery}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Users className="w-3 h-3" />
            <span>{service.supportLevel}</span>
          </div>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-end justify-center pb-6">
          <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center gap-2">
            Get Started
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
            Comprehensive Tech Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover our cutting-edge AI, IT, and micro SAAS solutions designed to transform your business. 
            From intelligent automation to quantum-ready security, we provide the tools you need to succeed.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
        >
          {[
            { label: 'Total Services', value: allServices.length, icon: Zap },
            { label: 'AI Solutions', value: allServices.filter(s => s.category.includes('AI')).length, icon: Brain },
            { label: 'IT Services', value: allServices.filter(s => s.category.includes('IT')).length, icon: Code },
            { label: 'Micro SAAS', value: allServices.filter(s => s.category.includes('SAAS')).length, icon: Globe }
          ].map((stat, idx) => (
            <div key={idx} className="text-center p-4 bg-gray-800/50 rounded-xl border border-gray-700">
              <div className="flex justify-center mb-2">
                <stat.icon className="w-8 h-8 text-cyan-400" />
              </div>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Filters and Search */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="max-w-7xl mx-auto mb-8"
      >
        <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
=======
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Star, TrendingUp, Zap, Shield, Brain, Code, BarChart3, Settings, Globe, Smartphone, Cloud, Lock, Database } from 'lucide-react';
import { COMPREHENSIVE_SERVICES, serviceCategories, ComprehensiveService } from '../data/comprehensiveServices';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select } from './ui/select';
import FuturisticNeonButton from './ui/FuturisticNeonButton';

const categoryIcons = {
  'AI & Machine Learning': Brain,
  'Cloud & Infrastructure': Cloud,
  'Cybersecurity': Lock,
  'Data Analytics': BarChart3,
  'Digital Transformation': TrendingUp,
  'E-commerce Solutions': Globe,
  'Mobile Development': Smartphone,
  'Web Development': Code,
  'Business Process Automation': Zap,
  'IT Consulting': Settings
};

const ComprehensiveServicesShowcase: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'category'>('name');

  const filteredServices = COMPREHENSIVE_SERVICES.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.title.localeCompare(b.title);
      case 'price':
        const aMinPrice = Math.min(...a.pricing.map(p => p.amount));
        const bMinPrice = Math.min(...b.pricing.map(p => p.amount));
        return aMinPrice - bMinPrice;
      case 'category':
        return a.category.localeCompare(b.category);
      default:
        return 0;
    }
  });

  const categories = ['all', ...serviceCategories];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
    }
  };

  return (
<<<<<<< HEAD
=======
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark relative overflow-hidden">
      {/* Header Section */}
      <motion.div 
        className="relative z-10 text-center py-20 px-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan bg-clip-text text-transparent"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Comprehensive Services
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Discover our comprehensive range of professional services designed to transform your business and drive innovation
        </motion.p>
        <motion.div 
          className="flex flex-wrap justify-center gap-4 text-zion-cyan"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex items-center gap-2">
            <Brain className="w-6 h-6" />
            <span>AI-Powered</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-6 h-6" />
            <span>Enterprise Ready</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-6 h-6" />
            <span>Professional Grade</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Search and Filter Section */}
      <motion.div 
        className="relative z-10 max-w-6xl mx-auto px-4 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <Card className="bg-zion-blue-dark/50 backdrop-blur-lg border-zion-blue-light/30 p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
              <Input
>>>>>>> origin/cursor/build-and-fix-errors-e276
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
<<<<<<< HEAD
                className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
=======
                className="pl-10 bg-zion-slate-dark/50 border-zion-blue-light/30 text-white placeholder-zion-slate-light focus:border-zion-cyan"
>>>>>>> origin/cursor/build-and-fix-errors-e276
              />
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
    <Card className="h-full border-zion-blue-light bg-zion-blue-dark hover:border-zion-purple/50 transition-all duration-300">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between mb-2">
          <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan border-zion-purple/30">
            {service.subcategory}
          </Badge>
          <Badge className={getSupportLevelColor(service.supportLevel)}>
            {service.supportLevel}
          </Badge>
        </div>
        <CardTitle className="text-white text-lg leading-tight mb-2">
          {service.title}
        </CardTitle>
        <CardDescription className="text-zion-slate-light text-sm leading-relaxed">
          {service.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-4">
          <div className="bg-zion-blue-light/10 rounded-lg p-3 border border-zion-blue-light/20">
            <div className="flex items-center justify-between">
              <span className="text-zion-slate-light text-sm">Starting at</span>
              <span className="text-zion-cyan font-bold text-lg">
                {getPricingDisplay(service)}
              </span>
<<<<<<< HEAD
            </div>
            <div className="text-zion-slate-light text-xs mt-1">
              Market range: {service.marketPrice}
            </div>
          </div>

=======
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
            </div>

            {/* Category Filter */}
<<<<<<< HEAD
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-500"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>

            {/* Price Range Filter */}
            <select
              value={selectedPriceRange}
              onChange={(e) => setSelectedPriceRange(e.target.value)}
              className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-500"
            >
              <option value="all">All Prices</option>
              <option value="budget">Under $100</option>
              <option value="mid">$100 - $500</option>
              <option value="premium">Over $500</option>
            </select>

            {/* Sort By */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-500"
            >
              <option value="featured">Featured First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name A-Z</option>
            </select>

            {/* View Mode */}
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-3 py-2 rounded-lg transition-colors ${
                  viewMode === 'grid' 
                    ? 'bg-cyan-500 text-white' 
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                Grid
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-3 py-2 rounded-lg transition-colors ${
                  viewMode === 'list' 
                    ? 'bg-cyan-500 text-white' 
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                List
              </button>
            </div>
          </div>

<<<<<<< HEAD
          {/* Active Filters Display */}
          {(selectedCategory !== 'all' || selectedPriceRange !== 'all' || searchTerm) && (
            <div className="mt-4 flex flex-wrap gap-2">
              {selectedCategory !== 'all' && (
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full border border-cyan-500/30">
                  Category: {selectedCategory}
                </span>
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
          <div>
            <h4 className="text-white font-semibold text-sm mb-2 flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-zion-cyan" />
              Key Features
            </h4>
            <div className="grid grid-cols-1 gap-1">
              {service.features.slice(0, 3).map((feature: string, index: number) => (
                <div key={index} className="text-zion-slate-light text-xs flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mt-2 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
              {service.features.length > 3 && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-zion-cyan hover:text-zion-cyan-light text-xs p-0 h-auto"
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                  {isExpanded ? 'Show less' : `+${service.features.length - 3} more features`}
                </Button>
<<<<<<< HEAD
              )}
            </div>
=======
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
              )}
              {selectedPriceRange !== 'all' && (
                <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm rounded-full border border-purple-500/30">
                  Price: {getPriceRangeLabel(selectedPriceRange)}
                </span>
              )}
              {searchTerm && (
                <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full border border-green-500/30">
                  Search: "{searchTerm}"
                </span>
              )}
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setSelectedPriceRange('all');
                }}
                className="px-3 py-1 bg-gray-600 text-gray-300 text-sm rounded-full hover:bg-gray-500 transition-colors"
              >
                Clear All
              </button>
            </div>
<<<<<<< HEAD
          )}
        </div>
      </motion.div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto">
        {filteredServices.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
            <p className="text-gray-400 mb-6">
              Try adjusting your search criteria or filters
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedPriceRange('all');
              }}
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
            >
              Reset Filters
            </button>
          </motion.div>
        ) : (
          <>
            {/* Results Count */}
            <div className="text-gray-400 mb-6">
              Showing {filteredServices.length} of {allServices.length} services
            </div>

            {/* Services Grid */}
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              <AnimatePresence>
                {filteredServices.map((service, index) => (
                  <ServiceCard key={service.id} service={service} index={index} />
                ))}
              </AnimatePresence>
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
            {isExpanded && (
              <div className="mt-2 space-y-1">
                {service.features.slice(3).map((feature: string, index: number) => (
                  <div key={index} className="text-zion-slate-light text-xs flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mt-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-2 flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-zion-cyan" />
              Benefits
            </h4>
            <div className="grid grid-cols-1 gap-1">
              {service.benefits.slice(0, 3).map((benefit: string, index: number) => (
                <div key={index} className="text-zion-slate-light text-xs flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mt-2 flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
<<<<<<< HEAD
            </div>
          </div>

=======
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
            </div>
          </>
        )}
      </div>

<<<<<<< HEAD
      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="max-w-4xl mx-auto mt-16 text-center"
      >
        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-cyan-500/20">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-gray-300 mb-6">
            Our team of experts is ready to help you implement the perfect solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Get Started Today
            </button>
            <button className="px-8 py-4 bg-gray-700 text-white rounded-lg font-semibold hover:bg-gray-600 transition-all duration-300 flex items-center justify-center gap-2">
              <Users className="w-5 h-5" />
              Schedule Consultation
            </button>
          </div>
          <div className="mt-6 text-sm text-gray-400">
            Contact us: <span className="text-cyan-400">+1 302 464 0950</span> | 
            <span className="text-cyan-400"> kleber@ziontechgroup.com</span>
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="flex items-center gap-2 text-zion-slate-light">
              <Clock className="h-3 w-3 text-zion-cyan" />
              <span>{service.estimatedDelivery}</span>
            </div>
            <div className="flex items-center gap-2 text-zion-slate-light">
              <Users className="h-3 w-3 text-zion-cyan" />
              <span>{service.targetAudience.length} target audiences</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-1">
            {service.tags.slice(0, 3).map((tag: string, index: number) => (
              <Badge key={index} variant="outline" className="text-xs border-zion-blue-light/30 text-zion-slate-light">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="bg-zion-blue-light/5 rounded-lg p-3 border border-zion-blue-light/10">
            <h4 className="text-white font-semibold text-sm mb-2">Get Started</h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2 text-zion-slate-light">
                <Phone className="h-3 w-3 text-zion-cyan" />
                <a href={`tel:${service.contactInfo.phone}`} className="text-zion-cyan hover:text-zion-cyan-light">
                  {service.contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-2 text-zion-slate-light">
                <Mail className="h-3 w-3 text-zion-cyan" />
                <a href={`mailto:${service.contactInfo.email}`} className="text-zion-cyan hover:text-zion-cyan-light">
                  {service.contactInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-2 text-zion-slate-light">
                <Globe className="h-3 w-3 text-zion-cyan" />
                <a href={service.contactInfo.website} target="_blank" rel="noopener noreferrer" className="text-zion-cyan hover:text-zion-cyan-light">
                  Visit Website
                </a>
              </div>
            </div>
<<<<<<< HEAD
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

=======
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
          </div>
        </div>
=======
            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <option value="all">All Categories</option>
              {categories.filter(cat => cat !== 'all').map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </Select>

            {/* Sort By */}
            <Select
              value={sortBy}
              onValueChange={(value) => setSortBy(value as 'name' | 'price' | 'category')}
            >
              <option value="name">Sort by Name</option>
              <option value="price">Sort by Price</option>
              <option value="category">Sort by Category</option>
            </Select>
          </div>
        </Card>
      </motion.div>

      {/* Services Grid */}
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-4 pb-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedServices.map((service) => {
            const CategoryIcon = categoryIcons[service.category as keyof typeof categoryIcons] || Globe;
            const minPrice = Math.min(...service.pricing.map(p => p.amount));
            const maxPrice = Math.max(...service.pricing.map(p => p.amount));
            
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Card className="bg-zion-blue-dark/30 backdrop-blur-lg border-zion-blue-light/20 hover:border-zion-cyan/50 transition-all duration-300 h-full overflow-hidden">
                  {/* Service Header */}
                  <div className="p-6 border-b border-zion-blue-light/20">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg">
                          <CategoryIcon className="w-6 h-6 text-white" />
                        </div>
                        <Badge variant="outline" className="border-zion-cyan/50 text-zion-cyan">
                          {service.category}
                        </Badge>
                      </div>
                      {service.status === 'coming-soon' && (
                        <Badge variant="secondary" className="bg-zion-purple/20 text-zion-purple border-zion-purple/30">
                          Coming Soon
                        </Badge>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-zion-slate-light text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Pricing */}
                    <div className="bg-zion-slate-dark/30 rounded-lg p-4 mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-zion-slate-light text-sm">Starting from</span>
                        <span className="text-zion-cyan font-bold">
                          ${minPrice}
                          {minPrice !== maxPrice && ` - $${maxPrice}`}
                        </span>
                      </div>
                      <div className="text-xs text-zion-slate-light">
                        {service.pricing.length} pricing options available
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="p-6">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-zion-cyan" />
                      Key Features
                    </h4>
                    <div className="grid grid-cols-1 gap-2 mb-4">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-zion-slate-light">
                          <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></div>
                          {feature}
                        </div>
                      ))}
                      {service.features.length > 4 && (
                        <div className="text-xs text-zion-cyan">
                          +{service.features.length - 4} more features
                        </div>
                      )}
                    </div>

                    {/* Benefits */}
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-zion-cyan" />
                        Benefits
                      </h4>
                      <div className="text-sm text-zion-slate-light">
                        {service.benefits[0]} • {service.benefits[1]}
                      </div>
                    </div>

                    {/* Support Level */}
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                        <Shield className="w-4 h-4 text-zion-cyan" />
                        Support Level
                      </h4>
                      <Badge 
                        variant="outline" 
                        className={`text-xs ${
                          service.supportLevel === 'enterprise' 
                            ? 'border-zion-purple/50 text-zion-purple' 
                            : service.supportLevel === 'premium'
                            ? 'border-zion-cyan/50 text-zion-cyan'
                            : 'border-zion-slate-light/50 text-zion-slate-light'
                        }`}
                      >
                        {service.supportLevel.charAt(0).toUpperCase() + service.supportLevel.slice(1)}
                      </Badge>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.tags.slice(0, 3).map((tag, index) => (
                        <Badge 
                          key={index} 
                          variant="outline" 
                          className="text-xs border-zion-slate-light/30 text-zion-slate-light hover:border-zion-cyan/50 hover:text-zion-cyan transition-colors"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <FuturisticNeonButton
                        onClick={() => window.location.href = `mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                        className="flex-1"
                      >
                        Get Quote
                      </FuturisticNeonButton>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.location.href = `tel:${service.contactInfo.phone}`}
                        className="border-zion-blue-light/30 text-zion-cyan hover:bg-zion-cyan/10 hover:border-zion-cyan"
                      >
                        Call Now
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* No Results */}
        {sortedServices.length === 0 && (
          <motion.div 
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="text-zion-slate-light text-lg mb-4">
              No services found matching your criteria
            </div>
            <Button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="bg-zion-cyan hover:bg-zion-cyan-light text-white"
            >
              Clear Filters
            </Button>
          </motion.div>
        )}
      </motion.div>

      {/* Contact CTA Section */}
      <motion.div 
        className="relative z-10 max-w-4xl mx-auto px-4 pb-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <Card className="bg-gradient-to-r from-zion-blue-dark/50 to-zion-purple-dark/50 backdrop-blur-lg border-zion-cyan/30 p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-zion-slate-light text-lg mb-6 max-w-2xl mx-auto">
            Our team of experts is ready to help you implement the perfect solution for your business needs. 
            Get in touch today for a personalized consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticNeonButton
              onClick={() => window.location.href = 'mailto:kleber@ziontechgroup.com?subject=Business Consultation Request'}
              size="lg"
            >
              Schedule Consultation
            </FuturisticNeonButton>
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.location.href = 'tel:+13024640950'}
              className="border-zion-cyan/50 text-zion-cyan hover:bg-zion-cyan/10 hover:border-zion-cyan"
            >
              Call +1 (302) 464-0950
            </Button>
          </div>
          <div className="mt-6 text-zion-slate-light">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>📧 kleber@ziontechgroup.com</p>
          </div>
        </Card>
>>>>>>> origin/cursor/build-and-fix-errors-e276
      </motion.div>
    </div>
  );
};

<<<<<<< HEAD
<<<<<<< HEAD
export default ComprehensiveServicesShowcase;
=======
export default ComprehensiveServicesShowcase;
>>>>>>> origin/cursor/build-and-fix-errors-e276
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
export const ComprehensiveServicesShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState(SERVICE_CATEGORIES[0].name);

  return (
    <section className="py-20 bg-zion-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">Tech Solutions</span>
          </h2>
          <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
            Discover our extensive portfolio of professional technology services designed to accelerate your business growth, enhance security, and drive innovation across all aspects of your organization.
          </p>
        </div>

        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-8 bg-zion-blue-dark border border-zion-blue-light">
            {SERVICE_CATEGORIES.map((category) => (
              <TabsTrigger
                key={category.name}
                value={category.name}
                className="text-zion-slate-light data-[state=active]:bg-zion-purple data-[state=active]:text-white data-[state=active]:border-zion-purple"
              >
                <span className="hidden md:block">{category.icon}</span>
                <span className="text-xs md:text-sm">{category.name.split(' ')[0]}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {SERVICE_CATEGORIES.map((category) => (
            <TabsContent key={category.name} value={category.name} className="mt-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {category.icon} {category.name}
                </h3>
                <p className="text-zion-slate-light max-w-2xl mx-auto">
                  {category.description}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-16 text-center">
          <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-zion-slate-light mb-6">
              Our expert team is ready to help you implement the perfect technology solutions. Get in touch today for a personalized consultation and quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
                <Phone className="h-4 w-4 mr-2" />
                Call +1 302 464 0950
              </Button>
              <Button variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10">
                <Mail className="h-4 w-4 mr-2" />
                Email kleber@ziontechgroup.com
              </Button>
              <Button variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10">
                <Globe className="h-4 w-4 mr-2" />
                Visit ziontechgroup.com
              </Button>
            </div>
            <div className="mt-6 text-zion-slate-light text-sm">
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
<<<<<<< HEAD
};
=======
};
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7

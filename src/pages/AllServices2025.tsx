import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Star, 
  CheckCircle, 
  ArrowRight, 
  Zap, 
  Shield, 
  Cloud, 
  Database, 
  Cpu, 
  Link, 
  Smartphone, 
  Building2, 
  FlaskConical,
  TrendingUp,
  Users,
  Globe,
  Lock,
  BarChart3,
  Network,
  Code,
  Server,
  Brain,
  Eye,
  Rocket,
  Target,
  Award,
  Clock,
  DollarSign,
  Phone,
  Mail,
  ExternalLink,
  ChevronRight,
  BookOpen,
  Play,
  Download,
  Share2,
  Heart
} from 'lucide-react';
import { COMPREHENSIVE_MICRO_SAAS_SERVICES_2025, SERVICE_CATEGORIES, PRICING_TIERS } from '../data/comprehensiveMicroSaasServices2025';
import ComprehensiveServicesShowcase from '../components/ComprehensiveServicesShowcase';

interface ServiceCardProps {
  service: typeof COMPREHENSIVE_MICRO_SAAS_SERVICES_2025[0];
  index: number;
  viewMode: 'grid' | 'list';
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index, viewMode }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Machine Learning':
        return <Brain className="w-6 h-6" />;
      case 'Cybersecurity & Compliance':
        return <Shield className="w-6 h-6" />;
      case 'Cloud & DevOps':
        return <Cloud className="w-6 h-6" />;
      case 'Data Analytics & BI':
        return <BarChart3 className="w-6 h-6" />;
      case 'IoT & Edge Computing':
        return <Cpu className="w-6 h-6" />;
      case 'Blockchain & Web3':
        return <Link className="w-6 h-6" />;
      case 'Mobile & Web Development':
        return <Smartphone className="w-6 h-6" />;
      case 'Enterprise Software':
        return <Building2 className="w-6 h-6" />;
      case 'Industry Solutions':
        return <Target className="w-6 h-6" />;
      case 'Emerging Technology':
        return <FlaskConical className="w-6 h-6" />;
      default:
        return <Code className="w-6 h-6" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI & Machine Learning':
        return 'from-purple-500 to-pink-600';
      case 'Cybersecurity & Compliance':
        return 'from-red-500 to-orange-600';
      case 'Cloud & DevOps':
        return 'from-blue-500 to-cyan-600';
      case 'Data Analytics & BI':
        return 'from-green-500 to-emerald-600';
      case 'IoT & Edge Computing':
        return 'from-indigo-500 to-purple-600';
      case 'Blockchain & Web3':
        return 'from-yellow-500 to-orange-600';
      case 'Mobile & Web Development':
        return 'from-teal-500 to-blue-600';
      case 'Enterprise Software':
        return 'from-gray-500 to-slate-600';
      case 'Industry Solutions':
        return 'from-rose-500 to-pink-600';
      case 'Emerging Technology':
        return 'from-violet-500 to-purple-600';
      default:
        return 'from-gray-500 to-slate-600';
    }
  };

  if (viewMode === 'list') {
    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ x: 5 }}
        className="group cursor-pointer bg-gradient-to-br from-zion-slate-dark to-zion-slate rounded-2xl border border-zion-slate-light/20 p-6 hover:border-zion-cyan/50 transition-all duration-300"
      >
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Service Info */}
          <div className="flex-1">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className={`w-16 h-16 bg-gradient-to-r ${getCategoryColor(service.category)} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                  {getCategoryIcon(service.category)}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-zion-slate-light">{service.category} • {service.subcategory}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-zion-cyan mb-1">
                  ${service.price}
                  <span className="text-sm text-zion-slate-light">/mo</span>
                </div>
                <div className="text-sm text-zion-slate-light">{service.pricingModel}</div>
              </div>
            </div>

            <p className="text-zion-slate-light mb-6 leading-relaxed">{service.description}</p>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="text-center">
                <div className="text-lg font-bold text-white">{service.estimatedDelivery}</div>
                <div className="text-xs text-zion-slate-light">Delivery Time</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-green-400">{service.roi}</div>
                <div className="text-xs text-zion-slate-light">ROI</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-blue-400">{service.supportLevel}</div>
                <div className="text-xs text-zion-slate-light">Support</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-purple-400">{service.compliance.length}</div>
                <div className="text-xs text-zion-slate-light">Compliance</div>
              </div>
            </div>

            {/* Features */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {service.features.slice(0, 6).map((feature, idx) => (
                  <div key={idx} className="flex items-center text-sm text-zion-slate-light">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                    <span className="truncate">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="lg:w-64 flex flex-col justify-between">
            <div className="space-y-4 mb-6">
              <div className="text-center">
                <div className="text-sm text-zion-slate-light mb-1">Market Price</div>
                <div className="text-lg font-bold text-white">{service.marketPrice}</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-zion-slate-light mb-1">Technology</div>
                <div className="text-lg font-bold text-zion-cyan">{service.technology.length} tools</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-zion-slate-light mb-1">Integrations</div>
                <div className="text-lg font-bold text-blue-400">{service.integrations.length} platforms</div>
              </div>
            </div>
            
            <div className="space-y-3">
              <Link
                to={`/services/${service.id}`}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg font-semibold hover:from-zion-cyan/90 hover:to-zion-blue/90 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <div className="flex gap-2">
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    isLiked 
                      ? 'bg-red-500/20 text-red-400 border border-red-500/30' 
                      : 'bg-zion-slate-light/20 text-zion-slate-light border border-zion-slate-light/30 hover:bg-red-500/20 hover:text-red-400 hover:border-red-500/30'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
                  {isLiked ? 'Liked' : 'Like'}
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-zion-slate-light/20 text-zion-slate-light border border-zion-slate-light/30 rounded-lg hover:bg-zion-cyan/20 hover:text-zion-cyan hover:border-zion-cyan/30 transition-all duration-300">
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Beta Badge */}
        {service.betaAccess && (
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-gradient-to-r from-zion-cyan to-zion-blue text-white text-xs rounded-full font-semibold">
              BETA ACCESS
            </span>
          </div>
        )}
      </motion.div>
    );
  }

  // Grid View
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-gradient-to-br from-zion-slate-dark to-zion-slate rounded-2xl border border-zion-slate-light/20 p-6 h-full transition-all duration-300 hover:border-zion-cyan/50 hover:shadow-2xl hover:shadow-zion-cyan/25">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className={`w-12 h-12 bg-gradient-to-r ${getCategoryColor(service.category)} rounded-xl flex items-center justify-center text-white`}>
            {getCategoryIcon(service.category)}
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-zion-cyan">${service.price}</div>
            <div className="text-sm text-zion-slate-light">per month</div>
          </div>
        </div>

        {/* Title and Category */}
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors duration-300">
          {service.title}
        </h3>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-sm text-zion-slate-light">{service.category}</span>
          <span className="text-zion-slate-light">•</span>
          <span className="text-sm text-zion-slate-light">{service.subcategory}</span>
        </div>

        {/* Description */}
        <p className="text-zion-slate-light text-sm mb-4 leading-relaxed">
          {service.description}
        </p>

        {/* Key Features */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
          <div className="space-y-1">
            {service.features.slice(0, 3).map((feature, idx) => (
              <div key={idx} className="flex items-center text-xs text-zion-slate-light">
                <CheckCircle className="w-3 h-3 text-zion-cyan mr-2 flex-shrink-0" />
                {feature}
              </div>
            ))}
            {service.features.length > 3 && (
              <div className="text-xs text-zion-cyan">
                +{service.features.length - 3} more features
              </div>
            )}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
          <div className="space-y-1">
            {service.benefits.slice(0, 2).map((benefit, idx) => (
              <div key={idx} className="flex items-center text-xs text-zion-slate-light">
                <TrendingUp className="w-3 h-3 text-zion-cyan mr-2 flex-shrink-0" />
                {benefit}
              </div>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {service.tags.slice(0, 3).map((tag, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-auto pt-4 border-t border-zion-slate-light/20">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-zion-slate-light" />
              <span className="text-xs text-zion-slate-light">{service.estimatedDelivery}</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-xs text-zion-slate-light">Premium</span>
            </div>
          </div>

          {/* CTA Button */}
          <Link
            to={`/services/${service.id}`}
            className="w-full bg-gradient-to-r from-zion-cyan to-zion-blue text-white py-2 px-4 rounded-lg font-semibold text-center block hover:from-zion-cyan/90 hover:to-zion-blue/90 transition-all duration-300 group-hover:scale-105"
          >
            Get Started
          </Link>

          {/* Contact Info */}
          <div className="mt-3 text-center">
            <div className="flex items-center justify-center gap-4 text-xs text-zion-slate-light">
              <a
                href={`tel:${service.contactInfo.phone}`}
                className="flex items-center gap-1 hover:text-zion-cyan transition-colors duration-300"
              >
                <Phone className="w-3 h-3" />
                Contact
              </a>
              <a
                href={`mailto:${service.contactInfo.email}`}
                className="flex items-center gap-1 hover:text-zion-cyan transition-colors duration-300"
              >
                <Mail className="w-3 h-3" />
                Email
              </a>
            </div>
          </div>
        </div>

        {/* Beta Badge */}
        {service.betaAccess && (
          <div className="absolute top-4 right-4">
            <span className="px-2 py-1 bg-gradient-to-r from-zion-cyan to-zion-blue text-white text-xs rounded-full font-semibold">
              BETA
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const AllServices2025: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedPricing, setSelectedPricing] = useState<string>('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'category' | 'delivery'>('name');

  const filteredServices = useMemo(() => {
    let filtered = COMPREHENSIVE_MICRO_SAAS_SERVICES_2025.filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
      
      const matchesPricing = selectedPricing === 'All' || 
        (selectedPricing === 'Starter' && service.price <= 299) ||
        (selectedPricing === 'Professional' && service.price > 299 && service.price <= 799) ||
        (selectedPricing === 'Enterprise' && service.price > 799);

      return matchesSearch && matchesCategory && matchesPricing;
    });

    // Sort services
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.title.localeCompare(b.title);
        case 'price':
          return a.price - b.price;
        case 'category':
          return a.category.localeCompare(b.category);
        case 'delivery':
          return a.estimatedDelivery.localeCompare(b.estimatedDelivery);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, selectedPricing, sortBy]);

  const pricingRanges = [
    { label: 'All', value: 'All' },
    { label: 'Starter ($149-$299)', value: 'Starter' },
    { label: 'Professional ($299-$799)', value: 'Professional' },
    { label: 'Enterprise ($799+)', value: 'Enterprise' }
  ];

  const sortOptions = [
    { label: 'Name A-Z', value: 'name' },
    { label: 'Price Low-High', value: 'price' },
    { label: 'Category', value: 'category' },
    { label: 'Delivery Time', value: 'delivery' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-zion-slate-dark to-background">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-zion-slate-dark to-zion-slate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
              All <span className="bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple bg-clip-text text-transparent">Services 2025</span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed mb-8">
              Discover our comprehensive portfolio of innovative technology solutions designed to transform your business and drive digital innovation
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-zion-slate-light">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-zion-cyan" />
                <span className="text-sm font-medium">{COMPREHENSIVE_MICRO_SAAS_SERVICES_2025.length} Services Available</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-zion-cyan" />
                <span className="text-sm font-medium">Enterprise Grade</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-zion-cyan" />
                <span className="text-sm font-medium">Global Support</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {[
              { label: 'Categories', value: SERVICE_CATEGORIES.length, icon: Target },
              { label: 'Starting Price', value: '$149', icon: DollarSign },
              { label: 'Avg. Delivery', value: '4-6 weeks', icon: Clock },
              { label: 'Support Level', value: '24/7', icon: Users }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-zion-cyan mb-2">{stat.value}</div>
                <div className="text-sm text-zion-slate-light">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 bg-zion-slate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="bg-zion-slate-dark/50 backdrop-blur-sm rounded-2xl p-6 border border-zion-slate-light/20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
              <input
                type="text"
                placeholder="Search services by name, description, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-zion-slate rounded-lg border border-zion-slate-light/30 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
            </div>

            {/* Filters and Controls */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-white mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 bg-zion-slate rounded-lg border border-zion-slate-light/30 text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                >
                  <option value="All">All Categories</option>
                  {SERVICE_CATEGORIES.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Pricing Filter */}
              <div>
                <label className="block text-sm font-medium text-white mb-2">Pricing</label>
                <select
                  value={selectedPricing}
                  onChange={(e) => setSelectedPricing(e.target.value)}
                  className="w-full px-3 py-2 bg-zion-slate rounded-lg border border-zion-slate-light/30 text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                >
                  {pricingRanges.map((range) => (
                    <option key={range.value} value={range.value}>{range.label}</option>
                  ))}
                </select>
              </div>

              {/* Sort By */}
              <div>
                <label className="block text-sm font-medium text-white mb-2">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="w-full px-3 py-2 bg-zion-slate rounded-lg border border-zion-slate-light/30 text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>

              {/* View Mode */}
              <div>
                <label className="block text-sm font-medium text-white mb-2">View</label>
                <div className="flex gap-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      viewMode === 'grid'
                        ? 'bg-zion-cyan text-white'
                        : 'bg-zion-slate-light/20 text-zion-slate-light hover:bg-zion-slate-light/30'
                    }`}
                  >
                    Grid
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      viewMode === 'list'
                        ? 'bg-zion-cyan text-white'
                        : 'bg-zion-slate-light/20 text-zion-slate-light hover:bg-zion-slate-light/30'
                    }`}
                  >
                    List
                  </button>
                </div>
              </div>

              {/* Results Count */}
              <div className="flex items-end">
                <div className="w-full px-3 py-2 bg-zion-slate rounded-lg border border-zion-slate-light/30">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-zion-cyan">{filteredServices.length}</div>
                    <div className="text-xs text-zion-slate-light">Services Found</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid/List */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredServices.length > 0 ? (
            <motion.div 
              className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {filteredServices.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} viewMode={viewMode} />
              ))}
            </motion.div>
          ) : (
            <motion.div 
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-24 h-24 bg-zion-slate-light/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-zion-slate-light" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">No Services Found</h3>
              <p className="text-zion-slate-light mb-6">
                Try adjusting your search criteria or browse all our services
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                  setSelectedPricing('All');
                }}
                className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg font-semibold hover:from-zion-cyan/90 hover:to-zion-blue/90 transition-all duration-300"
              >
                View All Services
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-10 leading-relaxed">
              Our team of experts is ready to help you implement the perfect solution for your business needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg font-semibold hover:from-zion-cyan/90 hover:to-zion-blue/90 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Us Now
              </a>
            </div>
            <div className="text-zion-slate-light">
              <p className="text-sm mb-2">
                <strong>Contact:</strong> +1 302 464 0950 | <strong>Email:</strong> kleber@ziontechgroup.com
              </p>
              <p className="text-sm">
                <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comprehensive Services Showcase */}
      <ComprehensiveServicesShowcase />
    </div>
  );
};

export default AllServices2025;
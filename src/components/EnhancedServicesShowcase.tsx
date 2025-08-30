import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { servicesData, getServicesByCategory, getPopularServices, getNewServices, searchServices } from '../data/servicesData';
import {
  Brain,
  Shield,
  Cpu,
  Rocket,
  Zap,
  ArrowRight,
  Star,
  Users,
  Award,
  CheckCircle,
  Play,
  ChevronRight,
  Globe,
  Target,
  TrendingUp,
  Heart,
  Eye,
  Atom,
  Activity,
  Code,
  Database,
  Server,
  Network,
  BarChart3,
  Lock,
  Building,
  Briefcase,
  Newspaper,
  TestTube,
  GraduationCap,
  HelpCircle,
  Search,
  Filter,
  X,
  MessageCircle,
  Truck,
  Workflow,
  Leaf,
  LinkIcon,
  Settings,
  Mail,
  Wrench,
  Smile,
  Edit,
  Grid,
  List,
  Phone,
  DollarSign
} from 'lucide-react';

const iconMap: { [key: string]: React.ComponentType<any> } = {
  Brain,
  Shield,
  Cpu,
  Rocket,
  Zap,
  Users,
  Target,
  BarChart3,
  Heart,
  Eye,
  Atom,
  Activity,
  Code,
  Database,
  Server,
  Network,
  Lock,
  Building,
  Briefcase,
  Newspaper,
  TestTube,
  GraduationCap,
  HelpCircle,
  Globe,
  TrendingUp,
  MessageCircle,
  Truck,
  Workflow,
  Leaf,
  LinkIcon,
  Settings,
  Mail,
  Wrench,
  Smile,
  Edit,
  Grid,
  List,
  Phone,
  DollarSign
};

export function EnhancedServicesShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'popularity'>('popularity');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = [
    { id: 'all', name: 'All Services', icon: Globe, count: servicesData.length },
    { id: 'AI', name: 'AI Solutions', icon: Brain, count: getServicesByCategory('AI').length },
    { id: 'Quantum', name: 'Quantum Computing', icon: Atom, count: getServicesByCategory('Quantum').length },
    { id: 'Cybersecurity', name: 'Cybersecurity', icon: Shield, count: getServicesByCategory('Cybersecurity').length },
    { id: 'Cloud', name: 'Cloud & DevOps', icon: Cloud, count: getServicesByCategory('Cloud').length },
    { id: 'IoT', name: 'IoT & Edge', icon: Activity, count: getServicesByCategory('IoT').length },
    { id: 'Space', name: 'Space Technology', icon: Rocket, count: getServicesByCategory('Space').length },
    { id: 'Sustainability', name: 'Sustainability', icon: Leaf, count: getServicesByCategory('Sustainability').length },
    { id: 'Enterprise', name: 'Enterprise', icon: Building, count: getServicesByCategory('Enterprise').length }
  ];

  const filteredServices = useMemo(() => {
    let filtered = servicesData;
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }
    
    if (searchQuery) {
      filtered = searchServices(searchQuery);
    }
    
    // Sort services
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.title.localeCompare(b.title);
        case 'price':
          return a.pricing.starter - b.pricing.starter;
        case 'popularity':
          if (a.isPopular && !b.isPopular) return -1;
          if (!a.isPopular && b.isPopular) return 1;
          if (a.isNew && !b.isNew) return -1;
          if (!a.isNew && b.isNew) return 1;
          return 0;
        default:
          return 0;
      }
    });
    
    return filtered;
  }, [selectedCategory, searchQuery, sortBy]);

  const popularServices = getPopularServices();
  const newServices = getNewServices();

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h1 
            className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Innovative Technology Solutions
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover our comprehensive portfolio of AI-powered micro SaaS solutions, 
            cutting-edge IT services, and revolutionary AI platforms designed to transform your business.
          </motion.p>
        </div>

        {/* Featured Services Section */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8">Featured Solutions</h2>
          
          {/* Popular Services */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <Star className="w-6 h-6 text-yellow-400 mr-2" />
              Most Popular Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularServices.slice(0, 6).map((service) => (
                <ServiceCard key={service.id} service={service} featured />
              ))}
            </div>
          </div>

          {/* New Services */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <Sparkles className="w-6 h-6 text-cyan-400 mr-2" />
              New & Revolutionary
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newServices.slice(0, 6).map((service) => (
                <ServiceCard key={service.id} service={service} new />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Search and Filter Section */}
        <motion.div 
          className="mb-12 bg-gray-800/50 rounded-xl p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  <category.icon className="w-4 h-4 inline mr-2" />
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            {/* Sort and View Controls */}
            <div className="flex gap-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <option value="popularity">Sort by Popularity</option>
                <option value="name">Sort by Name</option>
                <option value="price">Sort by Price</option>
              </select>

              <div className="flex bg-gray-700 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${
                    viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${
                    viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Services Grid/List */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">
              {selectedCategory === 'all' ? 'All Services' : `${categories.find(c => c.id === selectedCategory)?.name}`}
            </h2>
            <p className="text-gray-400">
              {filteredServices.length} service{filteredServices.length !== 1 ? 's' : ''} found
            </p>
          </div>

          {filteredServices.length === 0 ? (
            <div className="text-center py-16">
              <Search className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">No services found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
              {filteredServices.map((service) => (
                <ServiceCard 
                  key={service.id} 
                  service={service} 
                  viewMode={viewMode}
                />
              ))}
            </div>
          )}
        </motion.div>

        {/* Contact CTA */}
        <motion.div 
          className="text-center bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-12 border border-cyan-500/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get in touch with our team to discuss your specific needs and discover how our innovative solutions can drive your success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all transform hover:scale-105"
            >
              <Phone className="w-5 h-5 mr-2" />
              Contact Us
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center px-8 py-4 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-600 transition-all transform hover:scale-105"
            >
              <DollarSign className="w-5 h-5 mr-2" />
              View Pricing
            </Link>
          </div>
          <div className="mt-8 text-gray-400">
            <p>Mobile: +1 302 464 0950 | Email: kleber@ziontechgroup.com</p>
            <p>Address: 364 E Main St STE 1008 Middletown DE 19709</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

interface ServiceCardProps {
  service: any;
  featured?: boolean;
  new?: boolean;
  viewMode?: 'grid' | 'list';
}

function ServiceCard({ service, featured, new: isNew, viewMode = 'grid' }: ServiceCardProps) {
  const IconComponent = iconMap[service.icon] || Zap;

  if (viewMode === 'list') {
    return (
      <motion.div
        className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all hover:bg-gray-800/70"
        whileHover={{ y: -2 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-start gap-6">
          <div className="flex-shrink-0">
            <div className={`w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center ${
              featured ? 'ring-2 ring-yellow-400' : isNew ? 'ring-2 ring-cyan-400' : ''
            }`}>
              <IconComponent className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-xl font-bold text-white">{service.title}</h3>
              {featured && <Star className="w-5 h-5 text-yellow-400" />}
              {isNew && <span className="px-2 py-1 bg-cyan-500 text-white text-xs font-semibold rounded-full">NEW</span>}
            </div>
            
            <p className="text-gray-300 mb-4">{service.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {service.tags.slice(0, 4).map((tag: string) => (
                <span key={tag} className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="text-2xl font-bold text-cyan-400">
                  ${service.pricing.starter}
                  <span className="text-sm text-gray-400 font-normal">/month</span>
                </div>
                <div className="text-sm text-gray-400">
                  Professional: ${service.pricing.professional}/month
                </div>
              </div>
              
              <Link
                to={service.link}
                className="inline-flex items-center px-4 py-2 bg-cyan-500 text-white font-semibold rounded-lg hover:bg-cyan-600 transition-colors"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all hover:bg-gray-800/70 group"
      whileHover={{ y: -4 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center ${
          featured ? 'ring-2 ring-yellow-400' : isNew ? 'ring-2 ring-cyan-400' : ''
        }`}>
          <IconComponent className="w-6 h-6 text-white" />
        </div>
        <div className="flex items-center gap-2">
          {featured && <Star className="w-4 h-4 text-yellow-400" />}
          {isNew && <span className="px-2 py-1 bg-cyan-500 text-white text-xs font-semibold rounded-full">NEW</span>}
        </div>
      </div>

      {/* Content */}
      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
        {service.title}
      </h3>
      
      <p className="text-gray-300 text-sm mb-4 line-clamp-3">
        {service.shortDescription}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1 mb-4">
        {service.tags.slice(0, 3).map((tag: string) => (
          <span key={tag} className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">
            {tag}
          </span>
        ))}
      </div>

      {/* Pricing */}
      <div className="mb-4">
        <div className="text-2xl font-bold text-cyan-400">
          ${service.pricing.starter}
          <span className="text-sm text-gray-400 font-normal">/month</span>
        </div>
        <div className="text-xs text-gray-400">
          Starting from • Professional: ${service.pricing.professional}/month
        </div>
      </div>

      {/* Features Preview */}
      <div className="mb-4">
        <div className="text-sm text-gray-400 mb-2">Key Features:</div>
        <ul className="space-y-1">
          {service.features.slice(0, 3).map((feature: string, index: number) => (
            <li key={index} className="text-xs text-gray-300 flex items-center">
              <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <Link
        to={service.link}
        className="inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all transform hover:scale-105"
      >
        Learn More
        <ArrowRight className="w-4 h-4 ml-2" />
      </Link>
    </motion.div>
  );
}

// Missing icon components
const Sparkles = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);

const Cloud = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
  </svg>
);

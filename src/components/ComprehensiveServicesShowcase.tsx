import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Cpu, 
  Rocket, 
  Zap, 
  ArrowRight,
  Star,
  Users,
  Heart,
  TrendingUp,
  Truck,
  PenTool,
  Workflow,
  MessageCircle,
  Kanban,
  FileText,
  Target,
  Server,
  BarChart3,
  Search,
  Code,
  AlertTriangle,
  Atom,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  Clock,
  DollarSign,
  Filter,
  Search as SearchIcon,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Play,
  Award,
  Globe,
  Sparkles
} from 'lucide-react';
import { COMPREHENSIVE_SERVICES_2025, SERVICE_CATEGORIES, PRICE_RANGES, Service } from '../data/comprehensiveServices2025';

const iconMap: { [key: string]: any } = {
  Brain,
  Shield,
  Cpu,
  Rocket,
  Zap,
  Users,
  Heart,
  TrendingUp,
  Truck,
  PenTool,
  Workflow,
  MessageCircle,
  Kanban,
  FileText,
  Target,
  Server,
  BarChart3,
  Search,
  Code,
  AlertTriangle,
  Atom
};

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const IconComponent = iconMap[service.icon] || Zap;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className={`p-3 rounded-lg bg-gradient-to-r ${service.color}`}>
            <IconComponent className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">{service.title}</h3>
            <p className="text-gray-400 text-sm">{service.category}</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-cyan-400">${service.price.toLocaleString()}</div>
          <div className="text-sm text-gray-400">{service.priceRange}</div>
        </div>
      </div>

      <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>

      <div className="space-y-3 mb-4">
        <div>
          <h4 className="text-sm font-semibold text-cyan-400 mb-2 flex items-center">
            <CheckCircle className="w-4 h-4 mr-2" />
            Key Features
          </h4>
          <div className="grid grid-cols-1 gap-1">
            {service.features.slice(0, isExpanded ? service.features.length : 3).map((feature, idx) => (
              <div key={idx} className="text-sm text-gray-400 flex items-center">
                <div className="w-1 h-1 bg-cyan-400 rounded-full mr-2"></div>
                {feature}
              </div>
            ))}
          </div>
          {service.features.length > 3 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-cyan-400 text-sm hover:text-cyan-300 transition-colors mt-2 flex items-center"
            >
              {isExpanded ? (
                <>
                  <ChevronUp className="w-4 h-4 mr-1" />
                  Show Less
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4 mr-1" />
                  Show More
                </>
              )}
            </button>
          )}
        </div>

        <div>
          <h4 className="text-sm font-semibold text-green-400 mb-2 flex items-center">
            <TrendingUp className="w-4 h-4 mr-2" />
            Benefits
          </h4>
          <div className="grid grid-cols-1 gap-1">
            {service.benefits.slice(0, 2).map((benefit, idx) => (
              <div key={idx} className="text-sm text-gray-400 flex items-center">
                <div className="w-1 h-1 bg-green-400 rounded-full mr-2"></div>
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {service.tags.slice(0, 4).map((tag, idx) => (
          <span
            key={idx}
            className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full border border-gray-600"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="border-t border-gray-700 pt-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-4 text-sm text-gray-400">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center">
              <Award className="w-4 h-4 mr-1" />
              <span>Enterprise Grade</span>
            </div>
          </div>
        </div>

        <div className="flex space-x-3">
          <Link
            to={service.link}
            className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 font-semibold text-center flex items-center justify-center"
          >
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
          <a
            href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
            className="bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition-all duration-200 font-semibold flex items-center"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export const ComprehensiveServicesShowcase: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const filteredServices = useMemo(() => {
    return COMPREHENSIVE_SERVICES_2025.filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || 
                             service.category.toLowerCase().includes(selectedCategory);
      
      const matchesPrice = selectedPriceRange === 'all' || 
                          (selectedPriceRange === 'budget' && service.price <= 3000) ||
                          (selectedPriceRange === 'mid-range' && service.price > 3000 && service.price <= 7000) ||
                          (selectedPriceRange === 'enterprise' && service.price > 7000 && service.price <= 15000) ||
                          (selectedPriceRange === 'premium' && service.price > 15000);
      
      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [searchQuery, selectedCategory, selectedPriceRange]);

  const sortedServices = useMemo(() => {
    return [...filteredServices].sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'newest':
          return b.id.localeCompare(a.id);
        case 'popular':
          return b.price - a.price; // Using price as popularity proxy
        default:
          return 0;
      }
    });
  }, [filteredServices, sortBy]);

  return (
    <div className="min-h-screen bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mb-6"
          >
            <Sparkles className="w-5 h-5 text-white" />
            <span className="text-white font-medium">2025 Innovation Showcase</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl font-bold text-white mb-6"
          >
            Revolutionary AI & Technology Services
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            Discover our cutting-edge micro SAAS services designed to transform industries and drive unprecedented growth. 
            Each service combines proven AI technology with innovative business solutions.
          </motion.p>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gray-800 rounded-xl p-6 border border-gray-700 max-w-2xl mx-auto mb-8"
          >
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Globe className="w-5 h-5 mr-2 text-cyan-400" />
              Contact Zion Tech Group
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-2 text-cyan-400" />
                <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-2 text-cyan-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-2 text-cyan-400" />
                <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Filters Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-gray-800 rounded-xl p-6 border border-gray-700 mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              <option value="all">All Categories</option>
              {SERVICE_CATEGORIES.map(category => (
                <option key={category.id} value={category.id}>{category.name}</option>
              ))}
            </select>

            {/* Price Range Filter */}
            <select
              value={selectedPriceRange}
              onChange={(e) => setSelectedPriceRange(e.target.value)}
              className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              <option value="all">All Prices</option>
              {PRICE_RANGES.map(range => (
                <option key={range.id} value={range.id}>{range.name} ({range.range})</option>
              ))}
            </select>

            {/* Sort By */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="newest">Newest</option>
              <option value="popular">Most Popular</option>
            </select>
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-8"
        >
          <p className="text-gray-400">
            Showing {sortedServices.length} of {COMPREHENSIVE_SERVICES_2025.length} services
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          <AnimatePresence>
            {sortedServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {sortedServices.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-gray-400 text-lg mb-4">
              No services found matching your criteria
            </div>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedPriceRange('all');
                setSortBy('featured');
              }}
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              Clear all filters
            </button>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Join thousands of companies already leveraging our cutting-edge technology solutions
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Service Inquiry"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-cyan-600 rounded-lg hover:bg-gray-100 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-transparent text-white rounded-lg hover:bg-white/10 transition-all duration-200 font-semibold text-lg border-2 border-white"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ComprehensiveServicesShowcase;
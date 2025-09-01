import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Search,
  Filter,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  DollarSign,
  Users,
  Globe,
  Clock,
  Shield,
  Brain,
  Zap,
  BarChart3,
  Rocket,
  CheckCircle,
  TrendingUp,
  Target,
  Heart,
  Eye,
  Activity,
  Code,
  Server,
  Network,
  Award,
  Lightbulb,
  Sparkles,
  Link as LinkIcon,
  Database,
  Cloud,
  Lock,
  Cpu,
  Truck,
  Package,
  Factory,
  ShoppingCart,
  Settings,
  Monitor,
  ShieldCheck,
  AlertTriangle,
  BarChart,
  Database as DatabaseIcon,
  Globe as GlobeIcon,
  Zap as ZapIcon,
  Users as UsersIcon,
  Lock as LockIcon
} from 'lucide-react';
import { ADVANCED_MICRO_SAAS_SERVICES_2028 } from '../data/advancedMicroSaasServices2028';
import { EMERGING_TECH_SERVICES_2028 } from '../data/emergingTechServices2028';

export function AdvancedServicesShowcase2028() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All');
  const [sortBy, setSortBy] = useState('featured');

  // Combine all services
  const allServices = [...ADVANCED_MICRO_SAAS_SERVICES_2028, ...EMERGING_TECH_SERVICES_2028];

  // Get unique categories
  const categories = ['All', ...new Set(allServices.map(service => service.category))];

  // Price ranges
  const priceRanges = [
    'All',
    'Under $1,000',
    '$1,000 - $2,999',
    '$3,000 - $4,999',
    '$5,000+'
  ];

  // Filter and sort services
  const filteredServices = useMemo(() => {
    let filtered = allServices;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    // Filter by price range
    if (selectedPriceRange !== 'All') {
      filtered = filtered.filter(service => {
        const price = service.price;
        switch (selectedPriceRange) {
          case 'Under $1,000':
            return price < 1000;
          case '$1,000 - $2,999':
            return price >= 1000 && price <= 2999;
          case '$3,000 - $4,999':
            return price >= 3000 && price <= 4999;
          case '$5,000+':
            return price >= 5000;
          default:
            return true;
        }
      });
    }

    // Sort services
    switch (sortBy) {
      case 'featured':
        filtered = filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
      case 'price-low':
        filtered = filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered = filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered = filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'ai-score':
        filtered = filtered.sort((a, b) => b.aiScore - a.aiScore);
        break;
      default:
        break;
    }

    return filtered;
  }, [searchTerm, selectedCategory, selectedPriceRange, sortBy, allServices]);

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: any } = {
      'Cybersecurity': Shield,
      'Blockchain': LinkIcon,
      'Healthcare': Heart,
      'Quantum Computing': Cpu,
      'Financial Technology': DollarSign,
      'Internet of Things': Network,
      'Legal Technology': ShieldCheck,
      'Sustainability': Globe,
      'Space Technology': Rocket,
      'Autonomous Systems': Activity,
      'Environmental Technology': Globe,
      'Manufacturing': Factory,
      'Education Technology': Users,
      'Quantum AI': Brain,
      'Quantum Technology': Cpu
    };
    return iconMap[category] || Settings;
  };

  const getCategoryColor = (category: string) => {
    const colorMap: { [key: string]: string } = {
      'Cybersecurity': 'text-red-400',
      'Blockchain': 'text-blue-400',
      'Healthcare': 'text-green-400',
      'Quantum Computing': 'text-purple-400',
      'Financial Technology': 'text-yellow-400',
      'Internet of Things': 'text-cyan-400',
      'Legal Technology': 'text-indigo-400',
      'Sustainability': 'text-emerald-400',
      'Space Technology': 'text-pink-400',
      'Autonomous Systems': 'text-orange-400',
      'Environmental Technology': 'text-teal-400',
      'Manufacturing': 'text-gray-400',
      'Education Technology': 'text-violet-400',
      'Quantum AI': 'text-purple-400',
      'Quantum Technology': 'text-purple-400'
    };
    return colorMap[category] || 'text-gray-400';
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Advanced Technology Solutions 2028
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Advanced Services Showcase
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover our comprehensive portfolio of cutting-edge micro SAAS services, 
              IT solutions, and AI-powered platforms designed for the future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-500"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>

            {/* Price Range Filter */}
            <select
              value={selectedPriceRange}
              onChange={(e) => setSelectedPriceRange(e.target.value)}
              className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-500"
            >
              {priceRanges.map(range => (
                <option key={range} value={range}>{range}</option>
              ))}
            </select>

            {/* Sort By */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-500"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="ai-score">AI Score</option>
            </select>

            {/* Results Count */}
            <div className="flex items-center justify-center px-4 py-2 bg-gray-700 rounded-lg">
              <span className="text-gray-300">{filteredServices.length} services</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {filteredServices.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <h3 className="text-2xl font-bold mb-4">No services found</h3>
              <p className="text-gray-400">Try adjusting your search criteria or filters.</p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-800 rounded-lg border border-gray-700 hover:border-cyan-500 transition-all duration-300 overflow-hidden"
                >
                  {/* Service Image */}
                  <div className="relative h-48 bg-gradient-to-br from-gray-700 to-gray-800">
                    <img
                      src={service.images[0]}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    {service.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-cyan-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Service Content */}
                  <div className="p-6">
                    {/* Category and Rating */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        {React.createElement(getCategoryIcon(service.category), {
                          className: `w-5 h-5 mr-2 ${getCategoryColor(service.category)}`
                        })}
                        <span className="text-sm text-gray-400">{service.category}</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 mr-1" />
                        <span className="text-sm text-gray-300">{service.rating}</span>
                        <span className="text-sm text-gray-500 ml-1">({service.reviewCount})</span>
                      </div>
                    </div>

                    {/* Title and Description */}
                    <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">{service.description}</p>

                    {/* AI Score */}
                    <div className="flex items-center mb-4">
                      <Brain className="w-4 h-4 text-cyan-400 mr-2" />
                      <span className="text-sm text-gray-300">AI Score: {service.aiScore}/100</span>
                    </div>

                    {/* Price and CTA */}
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold text-cyan-400">
                          ${service.price.toLocaleString()}
                          <span className="text-sm text-gray-400">/month</span>
                        </div>
                        <div className="text-sm text-gray-500">{service.marketPrice}</div>
                      </div>
                      <Link
                        to={`/services/${service.id}`}
                        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                      >
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </div>

                    {/* Tags */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {service.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900 to-blue-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us to learn more about our advanced technology solutions and get started today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-cyan-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"
              >
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-cyan-600 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-gray-400">+1 302 464 0950</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-400">kleber@ziontechgroup.com</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Address</h3>
              <p className="text-gray-400">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
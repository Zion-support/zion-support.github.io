import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Atom, 
  Shield, 
  Target, 
  Server, 
  Network, 
  Code, 
  BarChart3,
  Star,
  Sparkles,
  Zap,
  TrendingUp,
  Users,
  Globe,
  Award,
  Clock,
  CheckCircle,
  ArrowRight,
  Search,
  Filter,
  Grid,
  List,
  Eye,
  Heart,
  Infinity,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Phone,
  Mail,
  MapPin,
  Globe as GlobeIcon
} from 'lucide-react';

// Import all service data
import { revolutionary2045AdvancedRealMicroSaas } from '../data/revolutionary-2045-advanced-real-micro-saas';
import { revolutionary2045AdvancedITServices } from '../data/revolutionary-2045-advanced-it-services';
import { revolutionary2045AdvancedAIServices } from '../data/revolutionary-2045-advanced-ai-services';
import { innovative2025AIAutonomousServices } from '../data/2025-innovative-ai-autonomous-services';
import { innovativeITInfrastructureServices2025 } from '../data/2025-innovative-it-infrastructure-services';
import { innovativeMicroSaasServices2025 } from '../data/2025-innovative-micro-saas-services';

const InnovativeServicesShowcase2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'category'>('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  // Combine all services
  const allServices = [
    ...revolutionary2045AdvancedRealMicroSaas,
    ...revolutionary2045AdvancedITServices,
    ...revolutionary2045AdvancedAIServices,
    ...innovative2025AIAutonomousServices,
    ...innovativeITInfrastructureServices2025,
    ...innovativeMicroSaasServices2025
  ];

  // Service categories
  const categories = [
    { id: 'all', name: 'All Services', icon: Sparkles, color: 'from-purple-500 to-pink-500', count: allServices.length },
    { id: 'ai-autonomous', name: 'AI & Autonomous', icon: Brain, color: 'from-cyan-500 to-blue-500', count: [...revolutionary2045AdvancedAIServices, ...innovative2025AIAutonomousServices].length },
    { id: 'quantum', name: 'Quantum Technology', icon: Atom, color: 'from-blue-500 to-indigo-500', count: allServices.filter(s => s.category.includes('Quantum')).length },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-red-500 to-orange-500', count: allServices.filter(s => s.category.includes('Security')).length },
    { id: 'micro-saas', name: 'Micro SAAS', icon: Target, color: 'from-emerald-500 to-teal-500',     count: [...revolutionary2045AdvancedRealMicroSaas, ...innovativeMicroSaasServices2025].length },
    { id: 'it-infrastructure', name: 'IT Infrastructure', icon: Server, color: 'from-yellow-500 to-orange-500', count: [...revolutionary2045AdvancedITServices, ...innovativeITInfrastructureServices2025].length },
    { id: 'edge-computing', name: 'Edge Computing', icon: Network, color: 'from-indigo-500 to-purple-500', count: allServices.filter(s => s.category.includes('Edge')).length },
    { id: 'devops', name: 'DevOps & Automation', icon: Code, color: 'from-orange-500 to-red-500', count: allServices.filter(s => s.category.includes('DevOps')).length },
    { id: 'data-analytics', name: 'Data & Analytics', icon: BarChart3, color: 'from-teal-500 to-cyan-500', count: allServices.filter(s => s.category.includes('Data')).length }
  ];

  // Filter and sort services
  const getFilteredServices = () => {
    let filtered = allServices;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => 
        service.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
        service.type.toLowerCase().includes(selectedCategory.toLowerCase())
      );
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort services
    filtered.sort((a, b) => {
      let aValue: any, bValue: any;

      switch (sortBy) {
        case 'name':
          aValue = a.name;
          bValue = b.name;
          break;
        case 'price':
          aValue = parseFloat(a.pricing.starter.replace(/[^0-9.]/g, ''));
          bValue = parseFloat(b.pricing.starter.replace(/[^0-9.]/g, ''));
          break;
        case 'category':
          aValue = a.category;
          bValue = b.category;
          break;
        default:
          aValue = a.name;
          bValue = b.name;
      }

      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    return filtered;
  };

  const filteredServices = getFilteredServices();

  const handleServiceClick = (service: any) => {
    window.location.href = service.slug;
  };

  const handleContactClick = () => {
    window.location.href = '/contact';
  };

  return (
    <Layout>
      <div className="relative min-h-screen bg-black">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-cyan-900/20" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]" />
            
            {/* Floating Elements */}
            <motion.div
              animate={{ 
                x: [0, 100, 0],
                y: [0, -100, 0],
                rotate: [0, 360, 0]
              }}
              transition={{ 
                duration: 20,
                repeat: -1,
                ease: "linear"
              }}
              className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-lg"
            />
            <motion.div
              animate={{ 
                x: [0, -100, 0],
                y: [0, 100, 0],
                rotate: [0, -360, 0]
              }}
              transition={{ 
                duration: 25,
                repeat: -1,
                ease: "linear"
              }}
              className="absolute top-40 right-32 w-24 h-24 border border-purple-400/20 rounded-full"
            />
          </div>

          {/* Category Filters */}
          <div className="mt-6">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    {category.icon}
                    <span>{category.name}</span>
                    <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                      {category.count}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedCategory}-${searchTerm}-${viewMode}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={viewMode === 'grid' 
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
              : 'space-y-6'
            }
          >
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 ${
                  viewMode === 'list' ? 'flex items-start space-x-6' : ''
                }`}
              >
                {viewMode === 'grid' ? (
                  // Grid View
                  <>
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-3xl">{service.icon}</div>
                      {service.popular && (
                        <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                          Popular
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{service.tagline}</p>

                    <div className="mb-4">
                      <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                      <span className="text-gray-400">{service.period}</span>
                    </div>

                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {getServiceDescription(service)}
                    </p>

                    <div className="mb-4">
                      <span className="text-xs text-gray-400">Category:</span>
                      <span className="text-xs text-cyan-400 ml-2">{getServiceCategory(service)}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <Users className="w-4 h-4" />
                        <span>{service.customers}+ customers</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(service.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-600'
                            }`}
                          />
                        ))}
                        <span className="text-xs text-gray-400 ml-1">({service.reviews})</span>
                      </div>
                    </div>

                    <a
                      href={service.link}
                      className="mt-4 w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 flex items-center justify-center space-x-2 group"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </>
                ) : (
                  // List View
                  <>
                    <div className="flex-shrink-0">
                      <div className="text-4xl">{service.icon}</div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-bold text-white">{service.name}</h3>
                        {service.popular && (
                          <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                            Popular
                          </span>
                        )}
                      </div>

                      <p className="text-gray-300 text-sm mb-3">{service.tagline}</p>

                      <div className="flex items-center space-x-6 mb-3 text-sm">
                        <div>
                          <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                          <span className="text-gray-400">{service.period}</span>
                        </div>
                        <div className="text-gray-400">
                          <span>Category: </span>
                          <span className="text-cyan-400">{getServiceCategory(service)}</span>
                        </div>
                        <div className="text-gray-400">
                          <span>Setup: </span>
                          <span className="text-green-400">{service.setupTime}</span>
                        </div>
                      </div>

                      <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                        {getServiceDescription(service)}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <div className="flex items-center space-x-1">
                            <Users className="w-4 h-4" />
                            <span>{service.customers}+ customers</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>Trial: {service.trialDays} days</span>
                          </div>
                        </div>

                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(service.rating)
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-gray-600'
                              }`}
                            />
                          ))}
                          <span className="text-xs text-gray-400 ml-1">({service.reviews})</span>
                        </div>
                      </div>

                      <a
                        href={service.link}
                        className="mt-4 inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 group"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
            <p className="text-gray-400">Try adjusting your search terms or category filters.</p>
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with Innovation?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Join hundreds of companies already leveraging our cutting-edge services 
            to drive growth, efficiency, and competitive advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://ziontechgroup.com/contact"
              className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Get Started Today
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors duration-200"
            >
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnovativeServicesShowcase2025;

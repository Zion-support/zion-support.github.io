<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD:src/pages/EnhancedServicesShowcase2025.tsx
import { allEnhancedServices, EnhancedService } from '../data/enhanced-2025-comprehensive-services';
<<<<<<<< HEAD:src/pages/EnhancedServicesShowcase2025.tsx.disabled
=======
import { 
  Brain, 
  Shield, 
  Cpu, 
  Cloud, 
  Rocket, 
  Target, 
  Users, 
  Code, 
  Network, 
  Database, 
  Lock, 
  BarChart3, 
  Heart, 
  DollarSign, 
  ShoppingCart, 
  Building,
  Eye,
  Zap,
  Globe,
  ArrowRight,
  Search,
  Filter,
  Star,
  CheckCircle,
  Clock,
  TrendingUp,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { enhancedInnovativeMicroSaasServices2025 } from '../data/enhancedInnovativeServices2025';
>>>>>>> origin/cursor/website-audit-and-enhancement-5c03:src/pages/EnhancedServicesShowcase2025.tsx.disabled

========
>>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/EnhancedServicesShowcase2025.tsx
const EnhancedServicesShowcase2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('name');
  const [selectedService, setSelectedService] = useState<EnhancedService | null>(null);
  const categories = [
    'all',
    'AI & Business Intelligence',
    'Cybersecurity & Quantum Computing',
    'DevOps & Infrastructure',
    'Blockchain & Supply Chain',
    'Healthcare & AI',
    'Quantum Computing & AI',
    'FinTech & AI',
    'IoT & Edge Computing',
    'Legal Tech & AI',
    'Marketing & AI',
    'Energy & Sustainability',
    'Logistics & Transportation'
  ];
  const filteredServices = allEnhancedServices
    .filter(service =>
      selectedCategory === 'all' || service.category === selectedCategory
    )
    .filter(service =>
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.tagline.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.category.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return parseFloat(a.price.replace('$', '').replace(',', '')) - parseFloat(b.price.replace('$', '').replace(',', ''));
        case 'rating':
          return b.rating - a.rating;
        case 'marketSize':
          return parseFloat(b.marketSize.replace('$', '').replace('B', '')) - parseFloat(a.marketSize.replace('$', '').replace('B', ''));
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });
  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: string } = {
      'AI & Business Intelligence': '🧠',
      'Cybersecurity & Quantum Computing': '🔒',
      'DevOps & Infrastructure': '⚙️',
      'Blockchain & Supply Chain': '⛓️',
      'Healthcare & AI': '🏥',
      'Quantum Computing & AI': '🔮',
      'FinTech & AI': '💰',
      'IoT & Edge Computing': '🌐',
      'Legal Tech & AI': '⚖️',
      'Marketing & AI': '📢',
      'Energy & Sustainability': '⚡',
      'Logistics & Transportation': '🚚'
    };
    return icons[category] || '🚀';
  };
  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'AI & Business Intelligence': 'from-blue-500 to-cyan-500',
      'Cybersecurity & Quantum Computing': 'from-red-500 to-pink-500',
      'DevOps & Infrastructure': 'from-green-500 to-emerald-500',
      'Blockchain & Supply Chain': 'from-purple-500 to-indigo-500',
      'Healthcare & AI': 'from-teal-500 to-cyan-500',
      'Quantum Computing & AI': 'from-violet-500 to-purple-500',
      'FinTech & AI': 'from-yellow-500 to-orange-500',
      'IoT & Edge Computing': 'from-indigo-500 to-blue-500',
      'Legal Tech & AI': 'from-gray-500 to-slate-500',
      'Marketing & AI': 'from-pink-500 to-rose-500',
      'Energy & Sustainability': 'from-green-500 to-teal-500',
      'Logistics & Transportation': 'from-orange-500 to-red-500'
    };
    return colors[category] || 'from-gray-500 to-slate-500';
=======
import React, { useState } from 'react';
import { advancedInnovativeServicesExpansionV3 } from '../data/2025-advanced-innovative-services-expansion-v3';
import { specializedEnterpriseSolutions2025 } from '../data/2025-specialized-enterprise-solutions';

const EnhancedServicesShowcase2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedService, setExpandedService] = useState<string | null>(null);

<<<<<<< HEAD:src/pages/EnhancedServicesShowcase2025.tsx
  const allServices = [
    ...advancedInnovativeServicesExpansionV3,
    ...specializedEnterpriseSolutions2025
  ];
  
  const categories = Array.from(new Set(allServices.map(service => service.category)));

  const filteredServices = allServices.filter(service =>
=======
  const categories = Array.from(new Set(enhancedInnovativeMicroSaasServices2025.map(service => service.category)));

  const filteredServices = enhancedInnovativeMicroSaasServices2025.filter(service =>
>>>>>>> origin/cursor/website-audit-and-enhancement-5c03:src/pages/EnhancedServicesShowcase2025.tsx.disabled
    (selectedCategory === 'all' || service.category === selectedCategory) &&
    (service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
     service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
     service.technology.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase())))
  );

  const toggleServiceExpansion = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  const getCategoryIcon = (categoryName: string) => {
    const iconMap: { [key: string]: string } = {
      'AI & Machine Learning': '🤖',
      'Cybersecurity': '🔐',
      'Cloud & DevOps': '☁️',
      'Blockchain & Web3': '⛓️',
      'IoT & Edge Computing': '🌐',
      'Digital Twin & Simulation': '🔄',
      'Testing & Quality Assurance': '🧪',
      'Compliance & Privacy': '📋',
      'Fintech & Digital Banking': '💰',
      'Healthcare & Biotech': '🏥',
      'Space Technology': '🚀',
      'Automotive & Transportation': '🚗',
      'Energy & Sustainability': '⚡',
      'Manufacturing & Industrial': '🏭'
    };
    return iconMap[categoryName] || '⚡';
  };

  const getCategoryColor = (categoryName: string) => {
    const colorMap: { [key: string]: string } = {
      'AI & Machine Learning': 'from-blue-600 to-purple-700',
      'Cybersecurity': 'from-red-600 to-orange-700',
      'Cloud & DevOps': 'from-green-600 to-teal-700',
      'Blockchain & Web3': 'from-purple-600 to-indigo-700',
      'IoT & Edge Computing': 'from-cyan-600 to-blue-700',
      'Digital Twin & Simulation': 'from-orange-600 to-red-700',
      'Testing & Quality Assurance': 'from-emerald-600 to-green-700',
      'Compliance & Privacy': 'from-indigo-600 to-purple-700',
      'Fintech & Digital Banking': 'from-green-600 to-emerald-700',
      'Healthcare & Biotech': 'from-blue-600 to-cyan-700',
      'Space Technology': 'from-purple-600 to-pink-700',
      'Automotive & Transportation': 'from-orange-600 to-red-700',
      'Energy & Sustainability': 'from-green-600 to-teal-700',
      'Manufacturing & Industrial': 'from-gray-600 to-slate-700'
    };
    return colorMap[categoryName] || 'from-blue-600 to-cyan-700';
>>>>>>> origin/cursor/expand-services-and-deploy-updates-00d5
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
<<<<<<< HEAD
            Enhanced 2025
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              {" "}Comprehensive Services
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Discover our cutting-edge collection of innovative micro SAAS solutions, IT services, and AI services.
            Each service is designed to transform your business and drive innovation with real-world applications.
          </p>
          {/* Contact Info */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-blue-400 mb-4">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p><span className="text-blue-400">Phone:</span> +1 302 464 0950</p>
                <p><span className="text-blue-400">Email:</span> kleber@ziontechgroup.com</p>
              </div>
              <div>
                <p><span className="text-blue-400">Website:</span> ziontechgroup.com</p>
                <p><span className="text-blue-400">Address:</span> 364 E Main St STE 1008 Middletown DE 19709</p>
              </div>
=======
            Zion Tech Group
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              {" "}Enhanced Services 2025
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Discover our comprehensive portfolio of cutting-edge technology solutions designed to transform your business 
            and drive innovation across all industries.
          </p>
          
          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-6 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
<<<<<<< HEAD:src/pages/EnhancedServicesShowcase2025.tsx
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-blue-400">{allServices.length}</div>
=======
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-lg p-4">
                              <div className="text-3xl font-bold text-cyan-400">{enhancedInnovativeMicroSaasServices2025.length}</div>
>>>>>>> origin/cursor/website-audit-and-enhancement-5c03:src/pages/EnhancedServicesShowcase2025.tsx.disabled
              <div className="text-gray-400">Total Services</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-cyan-400">{categories.length}</div>
              <div className="text-gray-400">Categories</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-green-400">99%</div>
              <div className="text-gray-400">Success Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-purple-400">24/7</div>
              <div className="text-gray-400">Support</div>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-00d5
            </div>
          </div>
        </div>
      </section>
<<<<<<<< HEAD:src/pages/EnhancedServicesShowcase2025.tsx.disabled

<<<<<<< HEAD
========
>>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/EnhancedServicesShowcase2025.tsx
      {/* Filters and Search */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-blue-400 mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {categories.map(category => (
                    <option key={category} value={category} className="bg-slate-800 text-white">
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>
              {/* Search */}
              <div>
                <label className="block text-sm font-medium text-blue-400 mb-2">Search Services</label>
                <input
                  type="text"
                  placeholder="Search by name, description, or category..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {/* Sort By */}
              <div>
                <label className="block text-sm font-medium text-blue-400 mb-2">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="name" className="bg-slate-800 text-white">Name</option>
                  <option value="price" className="bg-slate-800 text-white">Price</option>
                  <option value="rating" className="bg-slate-800 text-white">Rating</option>
                  <option value="marketSize" className="bg-slate-800 text-white">Market Size</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Grid */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 overflow-hidden hover:border-blue-400 transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                {/* Service Header */}
                <div className={`p-6 bg-gradient-to-r ${getCategoryColor(service.category)}`}>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl">{getCategoryIcon(service.category)}</span>
                    <span className="text-sm bg-white/20 px-2 py-1 rounded-full">{service.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-white/90 text-sm">{service.tagline}</p>
                </div>
                {/* Service Content */}
                <div className="p-6">
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">{service.description}</p>
                  {/* Pricing */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-blue-400">
                      {service.price}
                      <span className="text-sm text-gray-400">{service.period}</span>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-yellow-400">
                        {'★'.repeat(Math.floor(service.rating))}
                        <span className="text-gray-400 ml-1">({service.reviews})</span>
                      </div>
                      <div className="text-xs text-gray-400">{service.rating}/5.0</div>
                    </div>
                  </div>
                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Features</h4>
                    <div className="space-y-1">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="text-xs text-gray-300 flex items-center">
                          <span className="text-green-400 mr-2">✓</span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Market Info */}
                  <div className="grid grid-cols-2 gap-4 text-xs text-gray-400 mb-4">
                    <div>
                      <span className="text-blue-400">Market Size:</span> {service.marketSize}
                    </div>
                    <div>
                      <span className="text-blue-400">Customers:</span> {service.customers.toLocaleString()}
                    </div>
                  </div>
                  {/* CTA Button */}
                  <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105">
                    Learn More
                  </button>
=======
      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {selectedCategory === 'all' ? 'All Services' : selectedCategory}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {selectedCategory === 'all' 
                ? 'Browse our complete portfolio of innovative services'
                : `Explore our ${selectedCategory} solutions`
              }
            </p>
            <p className="text-gray-400 mt-2">
              Showing {filteredServices.length} of {allServices.length} services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div
                key={service.id}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.name}</h3>
                <p className="text-gray-300 mb-4 line-clamp-2">{service.description}</p>
                
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-blue-600/20 text-blue-400 text-sm rounded-full border border-blue-600/30">
                    {service.category}
                  </span>
                </div>

                <div className="mb-6">
                  <div className="text-3xl font-bold text-green-400 mb-2">{service.price}</div>
                  <div className="text-gray-400">{service.period}</div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-center">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 3 && (
                      <li className="text-sm text-gray-400 flex items-center">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
                        +{service.features.length - 3} more features
                      </li>
                    )}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-purple-400 mb-2">Technology:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technology.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 bg-purple-600/20 text-purple-300 text-xs rounded-md">
                        {tech}
                      </span>
                    ))}
                    {service.technology.length > 3 && (
                      <span className="px-2 py-1 bg-gray-600/20 text-gray-300 text-xs rounded-md">
                        +{service.technology.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                <div className="space-y-3">
                  <a
                    href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.name}`}
                    className="block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                  >
                    Get Started
                  </a>
                  <a
                    href={`tel:${service.contactInfo.mobile}`}
                    className="block w-full text-center px-6 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
                  >
                    Call for Demo
                  </a>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-00d5
                </div>

                <div className="mt-6 pt-6 border-t border-white/20">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Rating:</span>
                    <div className="flex items-center space-x-1">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'fill-current' : 'fill-gray-600'}`} viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                          </svg>
                        ))}
                      </div>
                      <span className="text-gray-400">({service.reviews})</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {filteredServices.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
<<<<<<< HEAD
              <h3 className="text-xl font-semibold text-gray-300 mb-2">No services found</h3>
              <p className="text-gray-400">Try adjusting your search criteria or category filter.</p>
            </div>
          )}
        </div>
      </section>
      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <span className="text-4xl">{getCategoryIcon(selectedService.category)}</span>
                  <div>
                    <h2 className="text-2xl font-bold text-white">{selectedService.name}</h2>
                    <p className="text-blue-400">{selectedService.category}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-gray-400 hover:text-white text-2xl"
                >
                  ×
                </button>
              </div>
              {/* Service Details */}
              <div className="space-y-6">
                {/* Tagline and Description */}
                <div>
                  <h3 className="text-lg font-semibold text-blue-400 mb-2">Overview</h3>
                  <p className="text-gray-300 mb-2">{selectedService.tagline}</p>
                  <p className="text-gray-300">{selectedService.description}</p>
                </div>
                {/* Pricing and Rating */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-slate-700 rounded-lg p-4">
                    <h4 className="text-sm font-semibold text-blue-400 mb-2">Pricing</h4>
                    <div className="text-2xl font-bold text-white">{selectedService.price}</div>
                    <div className="text-gray-400 text-sm">{selectedService.period}</div>
                  </div>
                  <div className="bg-slate-700 rounded-lg p-4">
                    <h4 className="text-sm font-semibold text-blue-400 mb-2">Rating</h4>
                    <div className="text-2xl font-bold text-white">{selectedService.rating}/5.0</div>
                    <div className="text-gray-400 text-sm">{selectedService.reviews} reviews</div>
                  </div>
                  <div className="bg-slate-700 rounded-lg p-4">
                    <h4 className="text-sm font-semibold text-blue-400 mb-2">Market Size</h4>
                    <div className="text-2xl font-bold text-white">{selectedService.marketSize}</div>
                    <div className="text-gray-400 text-sm">Total Addressable Market</div>
                  </div>
                </div>
                {/* Features */}
                <div>
                  <h3 className="text-lg font-semibold text-blue-400 mb-3">Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedService.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-gray-300">
                        <span className="text-green-400 mr-2">✓</span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                {/* Use Cases */}
                <div>
                  <h3 className="text-lg font-semibold text-blue-400 mb-3">Use Cases</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedService.useCases.map((useCase, index) => (
                      <div key={index} className="text-gray-300">
                        • {useCase}
                      </div>
                    ))}
                  </div>
                </div>
                {/* Technology and Integrations */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-blue-400 mb-3">Technology Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.technology.map((tech, index) => (
                        <span key={index} className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-400 mb-3">Integrations</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.integrations.slice(0, 6).map((integration, index) => (
                        <span key={index} className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-sm">
                          {integration}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                {/* ROI and Setup */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-blue-400 mb-2">ROI & Benefits</h3>
                    <p className="text-gray-300">{selectedService.roi}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-400 mb-2">Setup & Trial</h3>
                    <p className="text-gray-300">
                      <span className="text-green-400">{selectedService.trialDays} days free trial</span>
                      <br />
                      Setup time: {selectedService.setupTime}
                    </p>
                  </div>
                </div>
                {/* Contact and Website */}
                <div className="bg-slate-700 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-blue-400 mb-3">Get Started</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 mb-2">Contact Information</h4>
                      <p className="text-gray-300">Phone: {selectedService.contact.phone}</p>
                      <p className="text-gray-300">Email: {selectedService.contact.email}</p>
                      <p className="text-gray-300">Address: {selectedService.contact.address}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 mb-2">Website</h4>
                      <a
                        href={selectedService.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 underline"
                      >
                        Visit Website
                      </a>
                    </div>
                  </div>
                </div>
              </div>
=======
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-gray-400">Try adjusting your search or category filter</p>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-00d5
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today to discuss your specific needs and discover how our innovative services can help transform your business
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:kleber@ziontechgroup.com?subject=Enhanced Services Inquiry"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              Get Custom Quote
            </a>
            <a
              href="tel:+13024640950"
              className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
            >
              Schedule Consultation
            </a>
          </div>
        </div>
<<<<<<< HEAD
      )}
      {/* Footer CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today to learn more about our comprehensive services and how they can drive innovation in your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
            >
              Call Now: +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
            >
              Email: kleber@ziontechgroup.com
            </a>
          </div>
        </div>
=======
>>>>>>> origin/cursor/expand-services-and-deploy-updates-00d5
      </section>
    </div>
  );
};
export default EnhancedServicesShowcase2025;
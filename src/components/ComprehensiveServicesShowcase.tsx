import React, { useState, useMemo } from 'react';
import { innovativeMicroSaasServices2025 } from '../data/innovativeMicroSaasServices2025';
import { innovativeITServices2025 } from '../data/innovativeITServices2025';
import { innovativeAIServices2025 } from '../data/innovativeAIServices2025';

interface Service {
  id: number;
  name: string;
  category: string;
  description: string;
  price?: number;
  hourlyRate?: number;
  pricingModel?: string;
  features: string[];
  benefits: string[];
  targetAudience: string[];
  tags: string[];
  contactInfo: {
    phone: string;
    email: string;
    website: string;
    address: string;
  };
  marketPrice: string;
  aiScore?: number;
  accuracy?: string;
  setupTime?: string;
  deliveryTime?: string;
  sla?: string;
  roi?: string;
  userLimit?: string;
  projectRate?: number;
  responseTime?: string;
  certifications?: string[];
  support?: string;
  useCases?: string[];
  aiModels?: string[];
  trainingData?: string;
  compliance?: string[];
}

const ComprehensiveServicesShowcase: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedServiceType, setSelectedServiceType] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // Combine all services
  const allServices: Service[] = [
    ...innovativeMicroSaasServices2025,
    ...innovativeITServices2025,
    ...innovativeAIServices2025
  ];

  // Get unique categories
  const categories = useMemo(() => {
    const cats = [...new Set(allServices.map(service => service.category))];
    return ['all', ...cats];
  }, [allServices]);

  // Get unique service types
  const serviceTypes = [
    { id: 'all', name: 'All Services', count: allServices.length },
    { id: 'microsaas', name: 'Micro SAAS', count: innovativeMicroSaasServices2025.length },
    { id: 'it', name: 'IT Services', count: innovativeITServices2025.length },
    { id: 'ai', name: 'AI Services', count: innovativeAIServices2025.length }
  ];

  // Price ranges
  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'all' },
    { id: 'budget', name: 'Budget ($0-$99)', range: '0-99' },
    { id: 'mid-range', name: 'Mid-Range ($100-$299)', range: '100-299' },
    { id: 'premium', name: 'Premium ($300-$599)', range: '300-599' },
    { id: 'enterprise', name: 'Enterprise ($600+)', range: '600+' }
  ];

  // Filter and sort services
  const filteredServices = useMemo(() => {
    let filtered = allServices;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    // Filter by service type
    if (selectedServiceType !== 'all') {
      switch (selectedServiceType) {
        case 'microsaas':
          filtered = filtered.filter(service => innovativeMicroSaasServices2025.some(s => s.id === service.id));
          break;
        case 'it':
          filtered = filtered.filter(service => innovativeITServices2025.some(s => s.id === service.id));
          break;
        case 'ai':
          filtered = filtered.filter(service => innovativeAIServices2025.some(s => s.id === service.id));
          break;
      }
    }

    // Filter by price range
    if (selectedPriceRange !== 'all') {
      const range = priceRanges.find(r => r.id === selectedPriceRange)?.range;
      if (range && range !== 'all') {
        if (range === '600+') {
          filtered = filtered.filter(service => {
            const price = service.price || service.hourlyRate || 0;
            return price >= 600;
          });
        } else {
          const [min, max] = range.split('-').map(Number);
          filtered = filtered.filter(service => {
            const price = service.price || service.hourlyRate || 0;
            return price >= min && price <= max;
          });
        }
      }
    }

    // Sort services
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price-low':
          return (a.price || a.hourlyRate || 0) - (b.price || b.hourlyRate || 0);
        case 'price-high':
          return (b.price || b.hourlyRate || 0) - (a.price || a.hourlyRate || 0);
        case 'category':
          return a.category.localeCompare(b.category);
        case 'ai-score':
          return (b.aiScore || 0) - (a.aiScore || 0);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchQuery, selectedCategory, selectedServiceType, selectedPriceRange, sortBy, allServices, priceRanges]);

  const getServiceIcon = (service: Service) => {
    if (innovativeMicroSaasServices2025.some(s => s.id === service.id)) return '🚀';
    if (innovativeITServices2025.some(s => s.id === service.id)) return '⚡';
    if (innovativeAIServices2025.some(s => s.id === service.id)) return '🤖';
    return '💼';
  };

  const getServicePrice = (service: Service) => {
    if (service.price) {
      return `$${service.price}/${service.pricingModel || 'month'}`;
    }
    if (service.hourlyRate) {
      return `$${service.hourlyRate}/hour`;
    }
    return 'Contact for pricing';
  };

  const getServiceType = (service: Service) => {
    if (innovativeMicroSaasServices2025.some(s => s.id === service.id)) return 'Micro SAAS';
    if (innovativeITServices2025.some(s => s.id === service.id)) return 'IT Service';
    if (innovativeAIServices2025.some(s => s.id === service.id)) return 'AI Service';
    return 'Service';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-20">
      {/* Header Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Comprehensive
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              {" "}Services Portfolio
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Discover our complete range of innovative technology solutions designed to transform your business
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-lg px-6 py-3">
              <span className="text-2xl font-bold text-blue-400">{allServices.length}</span>
              <p className="text-sm text-gray-300">Total Services</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg px-6 py-3">
              <span className="text-2xl font-bold text-green-400">24/7</span>
              <p className="text-sm text-gray-300">Support Available</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg px-6 py-3">
              <span className="text-2xl font-bold text-purple-400">99.9%</span>
              <p className="text-sm text-gray-300">Uptime SLA</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg px-6 py-3">
              <span className="text-2xl font-bold text-yellow-400">300%+</span>
              <p className="text-sm text-gray-300">Average ROI</p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search services by name, category, or features..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {/* Service Type Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Service Type</label>
                <select
                  value={selectedServiceType}
                  onChange={(e) => setSelectedServiceType(e.target.value)}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {serviceTypes.map(type => (
                    <option key={type.id} value={type.id}>
                      {type.name} ({type.count})
                    </option>
                  ))}
                </select>
              </div>

              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Price Range</label>
                <select
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {priceRanges.map(range => (
                    <option key={range.id} value={range.id}>
                      {range.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort By */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="name">Name</option>
                  <option value="price-low">Price (Low to High)</option>
                  <option value="price-high">Price (High to Low)</option>
                  <option value="category">Category</option>
                  <option value="ai-score">AI Score</option>
                </select>
              </div>

              {/* View Mode */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">View</label>
                <div className="flex bg-white/10 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`flex-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      viewMode === 'grid'
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    Grid
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`flex-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      viewMode === 'list'
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    List
                  </button>
                </div>
              </div>
            </div>

            {/* Active Filters Display */}
            <div className="mt-4 flex flex-wrap gap-2">
              {selectedServiceType !== 'all' && (
                <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm">
                  {serviceTypes.find(t => t.id === selectedServiceType)?.name}
                </span>
              )}
              {selectedCategory !== 'all' && (
                <span className="px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-sm">
                  {selectedCategory}
                </span>
              )}
              {selectedPriceRange !== 'all' && (
                <span className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm">
                  {priceRanges.find(r => r.id === selectedPriceRange)?.name}
                </span>
              )}
              {searchQuery && (
                <span className="px-3 py-1 bg-yellow-600/20 text-yellow-400 rounded-full text-sm">
                  Search: "{searchQuery}"
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Results Count */}
      <section className="px-4 sm:px-6 lg:px-8 mb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            <p className="text-gray-300">
              Showing {filteredServices.length} of {allServices.length} services
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedServiceType('all');
                setSelectedPriceRange('all');
                setSortBy('name');
              }}
              className="text-blue-400 hover:text-blue-300 text-sm"
            >
              Clear all filters
            </button>
          </div>
        </div>
      </section>

      {/* Services Display */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          {filteredServices.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-400 mb-2">No services found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
            </div>
          ) : viewMode === 'grid' ? (
            /* Grid View */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  onClick={() => setSelectedService(service)}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer group"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="text-3xl">{getServiceIcon(service)}</div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400">{getServiceType(service)}</div>
                      <div className="text-lg font-bold text-blue-400">{getServicePrice(service)}</div>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {service.name}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                      {service.features.length > 3 && (
                        <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-full">
                          +{service.features.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-400">
                      {service.aiScore && `${service.aiScore}% AI Score`}
                      {service.setupTime && `Setup: ${service.setupTime}`}
                      {service.deliveryTime && `Delivery: ${service.deliveryTime}`}
                    </div>
                    <div className="text-blue-400 text-sm font-semibold group-hover:text-blue-300 transition-colors">
                      Learn More →
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* List View */
            <div className="space-y-4">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  onClick={() => setSelectedService(service)}
                  className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl">{getServiceIcon(service)}</div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                          {service.name}
                        </h3>
                        <div className="text-right">
                          <div className="text-sm text-gray-400">{getServiceType(service)}</div>
                          <div className="text-lg font-bold text-blue-400">{getServicePrice(service)}</div>
                        </div>
                      </div>
                      <p className="text-gray-300 mb-3">{service.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {service.tags.slice(0, 5).map((tag, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{getServiceIcon(selectedService)}</div>
                  <div>
                    <h2 className="text-3xl font-bold text-white">{selectedService.name}</h2>
                    <p className="text-gray-400">{getServiceType(selectedService)} • {selectedService.category}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-blue-400 mb-3">Description</h3>
                  <p className="text-gray-300 mb-6">{selectedService.description}</p>

                  <h3 className="text-xl font-semibold text-blue-400 mb-3">Features</h3>
                  <ul className="space-y-2 mb-6">
                    {selectedService.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-300 flex items-center">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-xl font-semibold text-green-400 mb-3">Benefits</h3>
                  <ul className="space-y-2 mb-6">
                    {selectedService.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-gray-300 flex items-center">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-xl font-semibold text-purple-400 mb-3">Target Audience</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedService.targetAudience.map((audience, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm"
                      >
                        {audience}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="bg-white/10 rounded-lg p-6 mb-6">
                    <h3 className="text-xl font-semibold text-blue-400 mb-4">Pricing & Details</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-300">Price:</span>
                        <span className="text-white font-semibold">{getServicePrice(selectedService)}</span>
                      </div>
                      {selectedService.marketPrice && (
                        <div className="flex justify-between">
                          <span className="text-gray-300">Market Price:</span>
                          <span className="text-white">{selectedService.marketPrice}</span>
                        </div>
                      )}
                      {selectedService.aiScore && (
                        <div className="flex justify-between">
                          <span className="text-gray-300">AI Score:</span>
                          <span className="text-white text-green-400">{selectedService.aiScore}%</span>
                        </div>
                      )}
                      {selectedService.accuracy && (
                        <div className="flex justify-between">
                          <span className="text-gray-300">Accuracy:</span>
                          <span className="text-white">{selectedService.accuracy}</span>
                        </div>
                      )}
                      {selectedService.setupTime && (
                        <div className="flex justify-between">
                          <span className="text-gray-300">Setup Time:</span>
                          <span className="text-white">{selectedService.setupTime}</span>
                        </div>
                      )}
                      {selectedService.deliveryTime && (
                        <div className="flex justify-between">
                          <span className="text-gray-300">Delivery Time:</span>
                          <span className="text-white">{selectedService.deliveryTime}</span>
                        </div>
                      )}
                      {selectedService.sla && (
                        <div className="flex justify-between">
                          <span className="text-gray-300">SLA:</span>
                          <span className="text-white">{selectedService.sla}</span>
                        </div>
                      )}
                      {selectedService.roi && (
                        <div className="flex justify-between">
                          <span className="text-gray-300">ROI:</span>
                          <span className="text-white text-green-400">{selectedService.roi}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="bg-white/10 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-blue-400 mb-4">Contact Information</h3>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span className="text-white">{selectedService.contactInfo.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="text-white">{selectedService.contactInfo.email}</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                        <span className="text-white">{selectedService.contactInfo.website}</span>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <a
                        href={`mailto:${selectedService.contactInfo.email}?subject=Inquiry about ${selectedService.name}`}
                        className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 text-center block"
                      >
                        Get Started Today
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Choose from our comprehensive portfolio of innovative services and start your transformation journey today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              Contact Us Today
            </a>
            <a
              href="tel:+13024640950"
              className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
            >
              Call Now: +1 302 464 0950
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensiveServicesShowcase;
import React, { useState, useMemo } from 'react';
import { enhancedInnovativeMicroSaasServices2025, enhancedITServices2025, enhancedAIServices2025 } from '../data/enhancedInnovativeServices2025';
import { nextGenInnovativeServices2025 } from '../data/nextGenInnovativeServices2025';

interface ServiceContact {
  phone: string;
  email: string;
  website: string;
  address: string;
}

const ComprehensiveServicesShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedServices, setSelectedServices] = useState<number[]>([]);
  const [showComparison, setShowComparison] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'type'>('name');
  const [favorites, setFavorites] = useState<number[]>([]);

  const allServices = useMemo(() => [
    ...enhancedInnovativeMicroSaasServices2025.map(service => ({ 
      ...service, 
      type: 'Micro SAAS',
      displayPrice: service.price,
      displayPricingModel: service.pricingModel
    })),
    ...enhancedITServices2025.map(service => ({ 
      ...service, 
      type: 'IT Services',
      displayPrice: service.hourlyRate,
      displayPricingModel: 'hourly'
    })),
    ...enhancedAIServices2025.map(service => ({ 
      ...service, 
      type: 'AI Services',
      displayPrice: service.price,
      displayPricingModel: service.pricingModel
    })),
    ...nextGenInnovativeServices2025.map(service => ({ 
      ...service, 
      type: 'Next-Gen Services',
      displayPrice: service.price,
      displayPricingModel: service.pricingModel
    }))
  ], []);

  const filteredServices = useMemo(() => {
    let filtered = allServices.filter(service => {
      const matchesCategory = activeCategory === 'all' || service.type === activeCategory;
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesPrice = service.displayPrice >= priceRange[0] && service.displayPrice <= priceRange[1];
      return matchesCategory && matchesSearch && matchesPrice;
    });

    // Sort services
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.displayPrice - b.displayPrice;
        case 'type':
          return a.type.localeCompare(b.type);
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [allServices, activeCategory, searchTerm, priceRange, sortBy]);

  const categories = [
    { id: 'all', name: 'All Services', count: allServices.length },
    { id: 'Micro SAAS', name: 'Micro SAAS', count: enhancedInnovativeMicroSaasServices2025.length },
    { id: 'IT Services', name: 'IT Services', count: enhancedITServices2025.length },
    { id: 'AI Services', name: 'AI Services', count: enhancedAIServices2025.length },
    { id: 'Next-Gen Services', name: 'Next-Gen Services', count: nextGenInnovativeServices2025.length }
  ];

  const formatPrice = (price: number, model: string) => {
    if (model === 'monthly') return `$${price.toLocaleString()}/month`;
    if (model === 'one-time') return `$${price.toLocaleString()}`;
    return `$${price.toLocaleString()}`;
  };

  const toggleServiceSelection = (serviceId: number) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : prev.length < 3 
          ? [...prev, serviceId]
          : prev
    );
  };

  const toggleFavorite = (serviceId: number) => {
    setFavorites(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const selectedServicesData = allServices.filter(service => selectedServices.includes(service.id));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Header Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Comprehensive
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              {" "}Innovative Services
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Discover our cutting-edge micro SAAS solutions, IT services, and AI-powered innovations designed to transform your business in 2025 and beyond
          </p>
          
          {/* Search and Filter */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search services, features, or technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
                aria-label="Search services"
              />
              <svg className="absolute right-3 top-3 h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Advanced Filters */}
          <div className="max-w-4xl mx-auto mb-8 space-y-4">
            {/* Price Range Filter */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
              <label className="text-gray-300 text-sm font-medium">Price Range:</label>
              <div className="flex items-center gap-2">
                <span className="text-gray-400">${priceRange[0].toLocaleString()}</span>
                <input
                  type="range"
                  min="0"
                  max="10000"
                  step="100"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-32 h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer"
                />
                <span className="text-gray-400">${priceRange[1].toLocaleString()}</span>
              </div>
            </div>

            {/* Sort Options */}
            <div className="flex items-center gap-4 justify-center">
              <label className="text-gray-300 text-sm font-medium">Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'name' | 'price' | 'type')}
                className="px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-400"
              >
                <option value="name">Name</option>
                <option value="price">Price</option>
                <option value="type">Type</option>
              </select>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                    : 'bg-white/10 backdrop-blur-lg border border-white/20 text-gray-300 hover:bg-white/20'
                }`}
                aria-pressed={activeCategory === category.id}
                aria-label={`Filter by ${category.name}`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* Comparison Bar */}
          {selectedServices.length > 0 && (
            <div className="max-w-4xl mx-auto mb-8 p-4 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-blue-400 font-semibold">
                    {selectedServices.length} service{selectedServices.length !== 1 ? 's' : ''} selected for comparison
                  </span>
                  <button
                    onClick={() => setShowComparison(!showComparison)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    {showComparison ? 'Hide' : 'Show'} Comparison
                  </button>
                </div>
                <button
                  onClick={() => setSelectedServices([])}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Clear selection"
                >
                  Clear All
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Service Comparison Section */}
      {showComparison && selectedServicesData.length > 0 && (
        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Service Comparison</h2>
            <div className="overflow-x-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 min-w-max">
                {selectedServicesData.map((service) => (
                  <div
                    key={service.id}
                    className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border-2 border-blue-400/50"
                  >
                    <div className="text-center mb-4">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full font-medium">
                        {service.type}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2 text-center">{service.name}</h3>
                    <div className="space-y-3">
                      <div className="text-center">
                        <span className="text-2xl font-bold text-blue-400">
                          {formatPrice(service.displayPrice, service.displayPricingModel)}
                        </span>
                      </div>
                      <div className="text-sm text-gray-300">
                        <strong>Features:</strong> {service.features.length}
                      </div>
                      <div className="text-sm text-gray-300">
                        <strong>Benefits:</strong> {service.benefits.length}
                      </div>
                      <div className="text-sm text-gray-300">
                        <strong>Tags:</strong> {service.tags.length}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Services Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div
                key={service.id}
                className={`bg-white/10 backdrop-blur-lg rounded-xl p-6 border transition-all duration-300 hover:transform hover:scale-105 ${
                  selectedServices.includes(service.id) 
                    ? 'border-blue-400/50 bg-blue-500/10' 
                    : 'border-white/20 hover:border-white/40'
                }`}
              >
                {/* Service Header */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full font-medium">
                      {service.type}
                    </span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => toggleFavorite(service.id)}
                        className={`text-2xl transition-transform hover:scale-110 ${
                          favorites.includes(service.id) ? 'text-yellow-400' : 'text-gray-400'
                        }`}
                        aria-label={favorites.includes(service.id) ? 'Remove from favorites' : 'Add to favorites'}
                      >
                        {favorites.includes(service.id) ? '⭐' : '☆'}
                      </button>
                      <span className="text-2xl">
                        {service.type === 'Micro SAAS' ? '🚀' : 
                         service.type === 'IT Services' ? '🖥️' : 
                         service.type === 'AI Services' ? '🤖' : '⚡'}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 text-sm">{service.description}</p>
                </div>

                {/* Pricing */}
                <div className="mb-4 p-3 bg-white/5 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-400">
                      {formatPrice(service.displayPrice, service.displayPricingModel)}
                    </span>
                    <span className="text-sm text-gray-400">
                      {service.displayPricingModel === 'monthly' ? 'per month' : 
                       service.displayPricingModel === 'hourly' ? 'per hour' : 'one-time'}
                    </span>
                  </div>
                  {service.marketPrice && (
                    <p className="text-xs text-gray-400 mt-1">
                      Market: {service.marketPrice}
                    </p>
                  )}
                </div>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Features:</h4>
                  <div className="space-y-1">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="text-sm text-gray-300 flex items-center">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                        {feature}
                      </div>
                    ))}
                    {service.features.length > 4 && (
                      <div className="text-xs text-gray-500 mt-1">
                        +{service.features.length - 4} more features
                      </div>
                    )}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-green-400 mb-2">Benefits:</h4>
                  <div className="space-y-1">
                    {service.benefits.slice(0, 3).map((benefit, idx) => (
                      <div key={idx} className="text-sm text-gray-300 flex items-center">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {service.tags.slice(0, 4).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-white/10 text-xs text-gray-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="border-t border-white/20 pt-4 space-y-3">
                  <div className="flex gap-2">
                    <button
                      onClick={() => toggleServiceSelection(service.id)}
                      className={`flex-1 px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                        selectedServices.includes(service.id)
                          ? 'bg-red-600 text-white hover:bg-red-700'
                          : 'bg-blue-600 text-white hover:bg-blue-700'
                      }`}
                    >
                      {selectedServices.includes(service.id) ? 'Remove' : 'Compare'}
                    </button>
                    <a
                      href={`mailto:${service.contactInfo.email}`}
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 text-center"
                    >
                      Get Started
                    </a>
                  </div>
                  <div className="text-xs text-gray-400 text-center">
                    <p>📧 {service.contactInfo.email}</p>
                    <p>📱 {service.contactInfo.phone}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-white mb-2">No services found</h3>
              <p className="text-gray-400">Try adjusting your search terms or category filter</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our innovative services can drive your success and competitive advantage
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
          <div className="mt-8 text-gray-400">
            <p>📍 364 E Main St STE 1008 Middletown DE 19709</p>
            <p>🌐 https://ziontechgroup.com</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensiveServicesShowcase;
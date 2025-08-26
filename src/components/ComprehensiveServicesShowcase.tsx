import React, { useState } from 'react';
import { enhancedInnovativeMicroSaasServices2025, enhancedITServices2025, enhancedAIServices2025 } from '../data/enhancedInnovativeServices2025';
import { nextGenInnovativeServices2025 } from '../data/nextGenInnovativeServices2025';
import { specializedInnovativeServices2025 } from '../data/specializedInnovativeServices2025';

interface ServiceContact {
  phone: string;
  email: string;
  website: string;
  address: string;
}

const ComprehensiveServicesShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const allServices = [
    ...enhancedInnovativeMicroSaasServices2025.map(service => ({ 
      ...service, 
      type: 'Micro SAAS',
      displayPrice: service.price,
      displayPricingModel: service.pricingModel,
      innovationScore: 8.5 // Default innovation score for Micro SAAS
    })),
    ...enhancedITServices2025.map(service => ({ 
      ...service, 
      type: 'IT Services',
      displayPrice: service.hourlyRate,
      displayPricingModel: 'hourly',
      innovationScore: 8.8 // Default innovation score for IT Services
    })),
    ...enhancedAIServices2025.map(service => ({ 
      ...service, 
      type: 'AI Services',
      displayPrice: service.price,
      displayPricingModel: service.pricingModel,
      innovationScore: 9.0 // Default innovation score for AI Services
    })),
    ...nextGenInnovativeServices2025.map(service => ({ 
      ...service, 
      type: 'Next-Gen Services',
      displayPrice: service.price,
      displayPricingModel: service.pricingModel,
      innovationScore: service.innovationScore || 9.2 // Use existing or default
    })),
    ...specializedInnovativeServices2025.map(service => ({ 
      ...service, 
      type: 'Specialized Services',
      displayPrice: service.price,
      displayPricingModel: service.pricingModel,
      innovationScore: service.innovationScore || 9.1 // Use existing or default
    }))
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.type === activeCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const categories = [
    { id: 'all', name: 'All Services', count: allServices.length },
    { id: 'Micro SAAS', name: 'Micro SAAS', count: enhancedInnovativeMicroSaasServices2025.length },
    { id: 'IT Services', name: 'IT Services', count: enhancedITServices2025.length },
    { id: 'AI Services', name: 'AI Services', count: enhancedAIServices2025.length },
    { id: 'Next-Gen Services', name: 'Next-Gen Services', count: nextGenInnovativeServices2025.length },
    { id: 'Specialized Services', name: 'Specialized Services', count: specializedInnovativeServices2025.length }
  ];

  const formatPrice = (price: number, model: string) => {
    if (model === 'monthly') return `$${price.toLocaleString()}/month`;
    if (model === 'one-time') return `$${price.toLocaleString()}`;
    if (model === 'hourly') return `$${price.toLocaleString()}/hour`;
    if (model === 'per-transaction') return `$${price.toFixed(2)}/transaction`;
    if (model === 'per-word') return `$${price.toFixed(2)}/word`;
    if (model === 'per-character') return `$${price.toFixed(2)}/character`;
    return `$${price.toLocaleString()}`;
  };

  const getServiceIcon = (type: string) => {
    switch (type) {
      case 'Micro SAAS': return '🚀';
      case 'IT Services': return '🖥️';
      case 'AI Services': return '🤖';
      case 'Next-Gen Services': return '⚡';
      case 'Specialized Services': return '🔬';
      default: return '💡';
    }
  };

  const getServiceColor = (type: string) => {
    switch (type) {
      case 'Micro SAAS': return 'bg-blue-500/20 text-blue-400';
      case 'IT Services': return 'bg-green-500/20 text-green-400';
      case 'AI Services': return 'bg-purple-500/20 text-purple-400';
      case 'Next-Gen Services': return 'bg-orange-500/20 text-orange-400';
      case 'Specialized Services': return 'bg-pink-500/20 text-pink-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

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
              />
              <svg className="absolute right-3 top-3 h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
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
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* Service Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center p-6 bg-white/5 backdrop-blur-lg rounded-xl border border-white/20">
              <div className="text-3xl font-bold text-blue-400 mb-2">
                {allServices.length}+
              </div>
              <div className="text-sm text-gray-300">Total Services</div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-lg rounded-xl border border-white/20">
              <div className="text-3xl font-bold text-green-400 mb-2">
                {allServices.filter(s => s.innovationScore && s.innovationScore >= 9.0).length}
              </div>
              <div className="text-sm text-gray-300">Premium Innovation</div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-lg rounded-xl border border-white/20">
              <div className="text-3xl font-bold text-purple-400 mb-2">
                {allServices.filter(s => s.type === 'AI Services').length}
              </div>
              <div className="text-sm text-gray-300">AI Solutions</div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-lg rounded-xl border border-white/20">
              <div className="text-3xl font-bold text-orange-400 mb-2">
                {allServices.filter(s => s.type === 'Next-Gen Services').length}
              </div>
              <div className="text-sm text-gray-300">Next-Gen Tech</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Innovation Highlights */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                Most Innovative Services
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {allServices
                .filter(service => service.innovationScore && service.innovationScore >= 9.0)
                .sort((a, b) => (b.innovationScore || 0) - (a.innovationScore || 0))
                .slice(0, 6)
                .map((service, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 backdrop-blur-lg rounded-xl p-4 border border-yellow-500/30"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getServiceColor(service.type)}`}>
                        {service.type}
                      </span>
                      <span className="text-yellow-400 text-sm font-bold">
                        {service.innovationScore}/10
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-1">{service.name}</h4>
                    <p className="text-gray-300 text-sm">{service.description.substring(0, 100)}...</p>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-yellow-400 font-semibold">
                        {formatPrice(service.displayPrice, service.displayPricingModel)}
                      </span>
                      <span className="text-2xl">{getServiceIcon(service.type)}</span>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* All Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                {/* Service Header */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-3 py-1 rounded-full font-medium ${getServiceColor(service.type)}`}>
                      {service.type}
                    </span>
                    <span className="text-2xl">
                      {getServiceIcon(service.type)}
                    </span>
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
                       service.displayPricingModel === 'hourly' ? 'per hour' : 
                       service.displayPricingModel === 'per-transaction' ? 'per transaction' :
                       service.displayPricingModel === 'per-word' ? 'per word' :
                       service.displayPricingModel === 'per-character' ? 'per character' :
                       'one-time'}
                    </span>
                  </div>
                  {service.marketPrice && (
                    <p className="text-xs text-gray-400 mt-1">
                      Market: {service.marketPrice}
                    </p>
                  )}
                  {service.innovationScore && (
                    <div className="flex items-center mt-2">
                      <span className="text-xs text-yellow-400 mr-2">Innovation Score:</span>
                      <div className="flex items-center">
                        <span className="text-sm font-semibold text-yellow-400 mr-1">
                          {service.innovationScore}/10
                        </span>
                        <div className="flex space-x-1">
                          {[...Array(10)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-2 h-2 rounded-full ${
                                i < Math.floor(service.innovationScore) 
                                  ? 'bg-yellow-400' 
                                  : 'bg-gray-600'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
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

                {/* Contact Info */}
                <div className="border-t border-white/20 pt-4">
                  <div className="text-center">
                    <a
                      href={`mailto:${service.contactInfo.email}`}
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                    >
                      Get Started
                    </a>
                    <div className="mt-2 text-xs text-gray-400">
                      <p>📧 {service.contactInfo.email}</p>
                      <p>📱 {service.contactInfo.phone}</p>
                    </div>
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
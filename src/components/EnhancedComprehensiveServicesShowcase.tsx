import React, { useState } from 'react';
import { advancedInnovativeServices2025V3 } from '../data/2025-advanced-innovative-services-expansion-v3';
import { specializedEnterpriseSolutions2025 } from '../data/2025-specialized-enterprise-solutions';
import { advancedAIAutomationServices2025 } from '../data/2025-advanced-ai-automation-services';
import { specializedITInfrastructureServices2025 } from '../data/2025-specialized-it-infrastructure-services';
import { innovativeMicroSaasSolutions2025 } from '../data/2025-innovative-micro-saas-solutions';
import { emergingTechnologyServices2025 } from '../data/2025-emerging-technology-services';

interface ServiceContact {
  mobile: string;
  email: string;
  address: string;
  website: string;
}

const EnhancedComprehensiveServicesShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedService, setSelectedService] = useState<any>(null);

  const allServices = [
    ...advancedInnovativeServices2025V3.map(service => ({ 
      ...service, 
      type: 'Advanced AI & Innovation',
      displayPrice: service.price
    })),
    ...specializedEnterpriseSolutions2025.map(service => ({ 
      ...service, 
      type: 'Specialized Enterprise',
      displayPrice: service.price
    })),
    ...advancedAIAutomationServices2025.map(service => ({ 
      ...service, 
      type: 'AI Automation',
      displayPrice: service.price
    })),
    ...specializedITInfrastructureServices2025.map(service => ({ 
      ...service, 
      type: 'IT Infrastructure',
      displayPrice: service.price
    })),
    ...innovativeMicroSaasSolutions2025.map(service => ({ 
      ...service, 
      type: 'Micro SAAS Solutions',
      displayPrice: service.price
    })),
    ...emergingTechnologyServices2025.map(service => ({ 
      ...service, 
      type: 'Emerging Technology',
      displayPrice: service.price
    }))
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.type === activeCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = [
    { id: 'all', name: 'All Services', count: allServices.length },
    { id: 'Advanced AI & Innovation', name: 'Advanced AI & Innovation', count: advancedInnovativeServices2025V3.length },
    { id: 'Specialized Enterprise', name: 'Specialized Enterprise', count: specializedEnterpriseSolutions2025.length },
    { id: 'AI Automation', name: 'AI Automation', count: advancedAIAutomationServices2025.length },
    { id: 'IT Infrastructure', name: 'IT Infrastructure', count: specializedITInfrastructureServices2025.length },
    { id: 'Micro SAAS Solutions', name: 'Micro SAAS Solutions', count: innovativeMicroSaasSolutions2025.length },
    { id: 'Emerging Technology', name: 'Emerging Technology', count: emergingTechnologyServices2025.length }
  ];

  const handleServiceClick = (service: any) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Header Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Zion Tech Group
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              {" "}Innovative Services 2025
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Discover our cutting-edge portfolio of micro SAAS solutions, IT services, and AI-powered innovations designed to transform your business and drive competitive advantage in the digital age
          </p>
          
          {/* Key Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-blue-400 mb-2">{allServices.length}+</div>
              <div className="text-sm text-gray-300">Innovative Services</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-cyan-400 mb-2">7</div>
              <div className="text-sm text-gray-300">Technology Categories</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-green-400 mb-2">99%</div>
              <div className="text-sm text-gray-300">Client Satisfaction</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-sm text-gray-300">Support Available</div>
            </div>
          </div>

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
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* Contact Information */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4 text-center">Contact Zion Tech Group</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p><strong>Mobile:</strong> +1 302 464 0950</p>
                <p><strong>Email:</strong> kleber@ziontechgroup.com</p>
              </div>
              <div>
                <p><strong>Address:</strong> 364 E Main St STE 1008</p>
                <p>Middletown DE 19709</p>
              </div>
            </div>
            <div className="text-center mt-4">
              <a
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                Visit our website
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
                onClick={() => handleServiceClick(service)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{service.icon}</div>
                  {service.popular && (
                    <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-2 py-1 rounded-full">
                      Popular
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{service.tagline}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold text-blue-400">{service.displayPrice}</div>
                  <div className="text-gray-400 text-sm">{service.period}</div>
                </div>
                
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">{service.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>Category: {service.category}</span>
                  <span>Setup: {service.setupTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="text-5xl">{selectedService.icon}</div>
                  <div>
                    <h2 className="text-3xl font-bold">{selectedService.name}</h2>
                    <p className="text-xl text-gray-300">{selectedService.tagline}</p>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-white text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Service Details</h3>
                  <p className="text-gray-300 mb-6">{selectedService.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Features:</h4>
                    <ul className="grid grid-cols-1 gap-2">
                      {selectedService.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-300">
                          <span className="text-green-400">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Technology Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.technology.map((tech, index) => (
                        <span key={index} className="bg-blue-600/20 text-blue-300 px-2 py-1 rounded text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <div className="bg-white/10 rounded-lg p-6 mb-6">
                    <h4 className="font-semibold mb-4">Pricing & Information</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Price:</span>
                        <span className="text-2xl font-bold text-blue-400">{selectedService.displayPrice}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Period:</span>
                        <span>{selectedService.period}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Trial:</span>
                        <span>{selectedService.trialDays} days</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Setup Time:</span>
                        <span>{selectedService.setupTime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Category:</span>
                        <span>{selectedService.category}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 rounded-lg p-6 mb-6">
                    <h4 className="font-semibold mb-4">Market Information</h4>
                    <div className="space-y-3 text-sm">
                      <div>
                        <span className="font-medium">Market Position:</span>
                        <p className="text-gray-300 mt-1">{selectedService.marketPosition}</p>
                      </div>
                      <div>
                        <span className="font-medium">Target Audience:</span>
                        <p className="text-gray-300 mt-1">{selectedService.targetAudience}</p>
                      </div>
                      <div>
                        <span className="font-medium">ROI:</span>
                        <p className="text-gray-300 mt-1">{selectedService.roi}</p>
                      </div>
                      <div>
                        <span className="font-medium">Market Size:</span>
                        <p className="text-gray-300 mt-1">{selectedService.marketSize}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={selectedService.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 px-6 rounded-lg text-center font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                    >
                      Learn More
                    </a>
                    <a
                      href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${selectedService.name}`}
                      className="flex-1 bg-white/10 text-white py-3 px-6 rounded-lg text-center font-semibold hover:bg-white/20 transition-all duration-300"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EnhancedComprehensiveServicesShowcase;
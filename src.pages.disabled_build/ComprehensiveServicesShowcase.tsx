import React, { useState } from 'react';
import { INNOVATIVE_SERVICES } from '../data/servicesData';
import { IT_SERVICES } from '../data/itServicesData';
import { AI_SERVICES } from '../data/aiServicesData';
import { MICRO_SAAS_SERVICES } from '../data/microSaasServicesData';
import { ADVANCED_MICRO_SAAS_SERVICES } from '../data/advancedMicroSaasServices2025';
import { ADVANCED_IT_SERVICES } from '../data/advancedITServices2025';
import { ADVANCED_AI_SERVICES } from '../data/advancedAIServices2025';

interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  currency: string;
  pricingModel: string;
  features: string[];
  benefits: string[];
  useCases: string[];
  targetAudience: string[];
  tags: string[];
  estimatedDelivery: string;
  supportLevel: string;
  marketPrice: string;
  roi: string;
  innovationLevel: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
  technicalSpecs?: {
    technology: string[];
    integrations: string[];
    apiEndpoints: number;
    uptime: string;
    security: string[];
  };
  competitors?: string[];
  marketSize?: string;
}

const ComprehensiveServicesShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const allServices = [
    ...INNOVATIVE_SERVICES.map(s => ({ ...s, serviceType: 'Innovative Services' })),
    ...IT_SERVICES.map(s => ({ ...s, serviceType: 'IT Services' })),
    ...AI_SERVICES.map(s => ({ ...s, serviceType: 'AI Services' })),
    ...MICRO_SAAS_SERVICES.map(s => ({ ...s, serviceType: 'Micro SAAS Services' })),
    ...ADVANCED_MICRO_SAAS_SERVICES.map(s => ({ ...s, serviceType: 'Advanced Micro SAAS Services' })),
    ...ADVANCED_IT_SERVICES.map(s => ({ ...s, serviceType: 'Advanced IT Services' })),
    ...ADVANCED_AI_SERVICES.map(s => ({ ...s, serviceType: 'Advanced AI Services' }))
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: allServices.length },
    { id: 'AI & Analytics', name: 'AI & Analytics', count: allServices.filter(s => s.category.includes('AI') || s.category.includes('Analytics')).length },
    { id: 'Cloud Services', name: 'Cloud Services', count: allServices.filter(s => s.category.includes('Cloud')).length },
    { id: 'Cybersecurity', name: 'Cybersecurity', count: allServices.filter(s => s.category.includes('Security') || s.category.includes('Cybersecurity')).length },
    { id: 'DevOps', name: 'DevOps', count: allServices.filter(s => s.category.includes('DevOps')).length },
    { id: 'Marketing', name: 'Marketing', count: allServices.filter(s => s.category.includes('Marketing') || s.category.includes('Social Media')).length },
    { id: 'Project Management', name: 'Project Management', count: allServices.filter(s => s.category.includes('Project Management')).length },
    { id: 'CRM', name: 'CRM', count: allServices.filter(s => s.category.includes('CRM')).length },
    { id: 'Analytics', name: 'Analytics', count: allServices.filter(s => s.category.includes('Analytics')).length }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? allServices 
    : allServices.filter(service => 
        service.category.includes(selectedCategory) || 
        service.subcategory.includes(selectedCategory)
      );

  const formatPrice = (price: number, currency: string, model: string) => {
    if (model === 'monthly') {
      return `${currency}${price.toLocaleString()}/month`;
    } else if (model === 'project') {
      return `${currency}${price.toLocaleString()}/project`;
    }
    return `${currency}${price.toLocaleString()}`;
  };

  const getInnovationLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'cutting-edge': return 'bg-purple-100 text-purple-800';
      case 'advanced': return 'bg-blue-100 text-blue-800';
      case 'standard': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Comprehensive Technology Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Discover our extensive portfolio of innovative micro SAAS services, IT solutions, and AI-powered platforms designed to transform your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="bg-white/20 px-4 py-2 rounded-full">
                <strong>{allServices.length}+</strong> Services Available
              </div>
              <div className="bg-white/20 px-4 py-2 rounded-full">
                <strong>24/7</strong> Support
              </div>
              <div className="bg-white/20 px-4 py-2 rounded-full">
                <strong>99.9%</strong> Uptime
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info Banner */}
      <div className="bg-blue-600 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg">
            <strong>Contact Us:</strong> Phone: +1 302 464 0950 | Email: kleber@ziontechgroup.com | 
            Address: 364 E Main St STE 1008 Middletown DE 19709 | Website: 
            <a href="https://ziontechgroup.com" className="underline ml-1">https://ziontechgroup.com</a>
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Category Filter */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Browse by Category</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
              onClick={() => setSelectedService(service)}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-sm text-blue-600 font-medium mb-2">{service.serviceType}</p>
                    <p className="text-sm text-gray-600 mb-2">{service.category} • {service.subcategory}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getInnovationLevelColor(service.innovationLevel)}`}>
                    {service.innovationLevel}
                  </span>
                </div>

                <p className="text-gray-700 mb-4 line-clamp-3">{service.description}</p>

                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold text-green-600">
                    {formatPrice(service.price, service.currency, service.pricingModel)}
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">Market Price</div>
                    <div className="text-sm font-medium">{service.marketPrice}</div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <span>ROI: <strong className="text-green-600">{service.roi}</strong></span>
                  <span>Delivery: <strong>{service.estimatedDelivery}</strong></span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  {service.tags.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                      +{service.tags.length - 3} more
                    </span>
                  )}
                </div>

                <div className="text-center">
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Service Detail Modal */}
        {selectedService && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedService.title}</h2>
                    <p className="text-lg text-blue-600 font-medium mb-2">{selectedService.serviceType}</p>
                    <p className="text-gray-600">{selectedService.category} • {selectedService.subcategory}</p>
                  </div>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="text-gray-400 hover:text-gray-600 text-2xl"
                  >
                    ×
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Description</h3>
                    <p className="text-gray-700 mb-6">{selectedService.description}</p>

                    <h3 className="text-xl font-bold mb-4">Key Features</h3>
                    <ul className="space-y-2 mb-6">
                      {selectedService.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <h3 className="text-xl font-bold mb-4">Benefits</h3>
                    <ul className="space-y-2 mb-6">
                      {selectedService.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-blue-500 mr-2">→</span>
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="bg-gray-50 p-6 rounded-lg mb-6">
                      <h3 className="text-xl font-bold mb-4">Pricing & Details</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="font-medium">Price:</span>
                          <span className="text-2xl font-bold text-green-600">
                            {formatPrice(selectedService.price, selectedService.currency, selectedService.pricingModel)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Market Price:</span>
                          <span>{selectedService.marketPrice}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">ROI:</span>
                          <span className="text-green-600 font-bold">{selectedService.roi}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Delivery:</span>
                          <span>{selectedService.estimatedDelivery}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Support:</span>
                          <span className="capitalize">{selectedService.supportLevel}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Innovation Level:</span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getInnovationLevelColor(selectedService.innovationLevel)}`}>
                            {selectedService.innovationLevel}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg mb-6">
                      <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                      <div className="space-y-2">
                        <p><strong>Phone:</strong> {selectedService.contactInfo.phone}</p>
                        <p><strong>Email:</strong> {selectedService.contactInfo.email}</p>
                        <p><strong>Website:</strong> 
                          <a href={selectedService.contactInfo.website} className="text-blue-600 hover:underline ml-1">
                            {selectedService.contactInfo.website}
                          </a>
                        </p>
                      </div>
                    </div>

                    {selectedService.technicalSpecs && (
                      <div className="mb-6">
                        <h3 className="text-xl font-bold mb-4">Technical Specifications</h3>
                        <div className="space-y-3">
                          <div>
                            <span className="font-medium">Technologies:</span>
                            <div className="flex flex-wrap gap-2 mt-1">
                              {selectedService.technicalSpecs.technology.map((tech, index) => (
                                <span key={index} className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div>
                            <span className="font-medium">Uptime:</span> {selectedService.technicalSpecs.uptime}
                          </div>
                          <div>
                            <span className="font-medium">API Endpoints:</span> {selectedService.technicalSpecs.apiEndpoints}
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="text-center">
                      <button className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                        Get Started Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ComprehensiveServicesShowcase;
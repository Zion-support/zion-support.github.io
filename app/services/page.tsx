'use client';

import React, { useState } from 'react';
import { INNOVATIVE_SERVICES, ADVANCED_AI_SERVICES, INNOVATIVE_IT_SERVICES, INNOVATIVE_MICRO_SAAS } from '../../src/data/servicesData';
import { IT_SERVICES } from '../../src/data/itServicesData';
import { AI_SERVICES } from '../../src/data/aiServicesData';
import { MICRO_SAAS_SERVICES } from '../../src/data/microSaasServicesData';

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

export default function ComprehensiveServicesShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const allServices = [
    ...INNOVATIVE_SERVICES.map(s => ({ ...s, serviceType: 'Innovative Services' })),
    ...IT_SERVICES.map(s => ({ ...s, serviceType: 'IT Services' })),
    ...AI_SERVICES.map(s => ({ ...s, serviceType: 'AI Services' })),
    ...MICRO_SAAS_SERVICES.map(s => ({ ...s, serviceType: 'Micro SAAS Services' })),
    ...ADVANCED_AI_SERVICES.map(s => ({ ...s, serviceType: 'Advanced AI Services' })),
    ...INNOVATIVE_IT_SERVICES.map(s => ({ ...s, serviceType: 'Innovative IT Services' })),
    ...INNOVATIVE_MICRO_SAAS.map(s => ({ ...s, serviceType: 'Innovative Micro SAAS' }))
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
    { id: 'Analytics', name: 'Analytics', count: allServices.filter(s => s.category.includes('Analytics')).length },
    { id: 'Finance & Banking', name: 'Finance & Banking', count: allServices.filter(s => s.category.includes('Finance') || s.category.includes('Banking')).length },
    { id: 'IoT & Smart Home', name: 'IoT & Smart Home', count: allServices.filter(s => s.category.includes('IoT') || s.category.includes('Smart Home')).length },
    { id: 'Education & Training', name: 'Education & Training', count: allServices.filter(s => s.category.includes('Education') || s.category.includes('Training')).length },
    { id: 'E-commerce & Retail', name: 'E-commerce & Retail', count: allServices.filter(s => s.category.includes('E-commerce') || s.category.includes('Retail')).length },
    { id: 'Collaboration & Productivity', name: 'Collaboration & Productivity', count: allServices.filter(s => s.category.includes('Collaboration') || s.category.includes('Productivity')).length },
    { id: 'Customer Experience', name: 'Customer Experience', count: allServices.filter(s => s.category.includes('Customer Experience') || s.category.includes('Customer Service')).length }
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
              <span className="bg-white/20 px-4 py-2 rounded-full">AI & Machine Learning</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Cloud Infrastructure</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Cybersecurity</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Micro SAAS</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">DevOps & Automation</span>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info Banner */}
      <div className="bg-blue-600 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm">
            <span>📞 <strong>+1 302 464 0950</strong></span>
            <span>✉️ <strong>kleber@ziontechgroup.com</strong></span>
            <span>📍 <strong>364 E Main St STE 1008, Middletown DE 19709</strong></span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setSelectedService(service)}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getInnovationLevelColor(service.innovationLevel)}`}>
                  {service.innovationLevel}
                </span>
              </div>
              
              <p className="text-gray-600 mb-4 line-clamp-3">{service.description}</p>
              
              <div className="mb-4">
                <div className="text-2xl font-bold text-blue-600 mb-1">
                  {formatPrice(service.price, service.currency, service.pricingModel)}
                </div>
                <div className="text-sm text-gray-500">Market: {service.marketPrice}</div>
              </div>

              <div className="mb-4">
                <div className="text-sm text-gray-600 mb-2">
                  <strong>ROI:</strong> {service.roi}
                </div>
                <div className="text-sm text-gray-600">
                  <strong>Delivery:</strong> {service.estimatedDelivery}
                </div>
              </div>

              <div className="flex flex-wrap gap-1 mb-4">
                {service.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                    {tag}
                  </span>
                ))}
                {service.tags.length > 3 && (
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                    +{service.tags.length - 3} more
                  </span>
                )}
              </div>

              <div className="text-sm text-gray-500">
                <strong>Category:</strong> {service.category} • {service.subcategory}
              </div>
            </div>
          ))}
        </div>

        {/* Service Detail Modal */}
        {selectedService && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedService.title}</h2>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span className={`px-3 py-1 rounded-full font-medium ${getInnovationLevelColor(selectedService.innovationLevel)}`}>
                        {selectedService.innovationLevel}
                      </span>
                      <span>Category: {selectedService.category}</span>
                      <span>Subcategory: {selectedService.subcategory}</span>
                    </div>
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
                    <h3 className="text-xl font-bold mb-4">Service Details</h3>
                    <p className="text-gray-700 mb-6">{selectedService.description}</p>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3">Pricing</h4>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-3xl font-bold text-blue-600 mb-2">
                          {formatPrice(selectedService.price, selectedService.currency, selectedService.pricingModel)}
                        </div>
                        <div className="text-sm text-gray-600 mb-2">Market Price: {selectedService.marketPrice}</div>
                        <div className="text-sm text-gray-600">ROI: {selectedService.roi}</div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3">Key Features</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        {selectedService.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3">Benefits</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        {selectedService.benefits.map((benefit, index) => (
                          <li key={index}>{benefit}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div>
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3">Use Cases</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        {selectedService.useCases.map((useCase, index) => (
                          <li key={index}>{useCase}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3">Target Audience</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        {selectedService.targetAudience.map((audience, index) => (
                          <li key={index}>{audience}</li>
                        ))}
                      </ul>
                    </div>

                    {selectedService.technicalSpecs && (
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold mb-3">Technical Specifications</h4>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="mb-2">
                            <strong>Technology:</strong> {selectedService.technicalSpecs.technology.join(', ')}
                          </div>
                          <div className="mb-2">
                            <strong>Integrations:</strong> {selectedService.technicalSpecs.integrations.join(', ')}
                          </div>
                          <div className="mb-2">
                            <strong>API Endpoints:</strong> {selectedService.technicalSpecs.apiEndpoints}
                          </div>
                          <div className="mb-2">
                            <strong>Uptime:</strong> {selectedService.technicalSpecs.uptime}
                          </div>
                          <div>
                            <strong>Security:</strong> {selectedService.technicalSpecs.security.join(', ')}
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
                      <div className="space-y-2 text-gray-700">
                        <div>📞 <strong>Phone:</strong> {selectedService.contactInfo.phone}</div>
                        <div>✉️ <strong>Email:</strong> {selectedService.contactInfo.email}</div>
                        <div>🌐 <strong>Website:</strong> {selectedService.contactInfo.website}</div>
                      </div>
                      <div className="mt-4">
                        <div className="text-sm text-gray-600 mb-2">
                          <strong>Estimated Delivery:</strong> {selectedService.estimatedDelivery}
                        </div>
                        <div className="text-sm text-gray-600">
                          <strong>Support Level:</strong> {selectedService.supportLevel}
                        </div>
                      </div>
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
}
import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Calculator, CheckCircle, Clock, DollarSign, Users, Zap } from 'lucide-react';

const serviceTypes = [
  {
    id: 'ai-services',
    name: 'AI Services',
    description: 'Machine learning, computer vision, NLP, and AI consulting',
    basePrice: 2500,
    features: ['Custom AI Models', 'Data Analysis', 'API Integration', 'Training & Support']
  },
  {
    id: 'it-services',
    name: 'IT Services',
    description: 'Cloud migration, DevOps, system integration, and IT consulting',
    basePrice: 1800,
    features: ['Cloud Migration', 'DevOps Setup', 'System Integration', '24/7 Support']
  },
  {
    id: 'micro-saas',
    name: 'Micro SaaS',
    description: 'Custom micro SaaS solutions and business automation',
    basePrice: 1500,
    features: ['Custom Development', 'API Development', 'User Management', 'Analytics']
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    description: 'Security audits, penetration testing, and compliance',
    basePrice: 2000,
    features: ['Security Audit', 'Penetration Testing', 'Compliance', 'Monitoring']
  },
  {
    id: 'cloud-solutions',
    name: 'Cloud Solutions',
    description: 'Cloud infrastructure, migration, and optimization',
    basePrice: 1800,
    features: ['Cloud Setup', 'Migration', 'Optimization', 'Monitoring']
  },
  {
    id: 'mobile-development',
    name: 'Mobile Development',
    description: 'iOS, Android, and cross-platform mobile apps',
    basePrice: 3000,
    features: ['Native Apps', 'Cross-platform', 'UI/UX Design', 'App Store']
  }
];

const projectSizes = [
  { id: 'small', name: 'Small Project', multiplier: 1, description: '1-3 months, basic features' },
  { id: 'medium', name: 'Medium Project', multiplier: 2, description: '3-6 months, advanced features' },
  { id: 'large', name: 'Large Project', multiplier: 4, description: '6-12 months, enterprise features' },
  { id: 'enterprise', name: 'Enterprise', multiplier: 8, description: '12+ months, custom solutions' }
];

const additionalServices = [
  { id: 'ui-ux', name: 'UI/UX Design', price: 500 },
  { id: 'testing', name: 'QA Testing', price: 300 },
  { id: 'maintenance', name: 'Maintenance (12 months)', price: 200 },
  { id: 'training', name: 'Team Training', price: 400 },
  { id: 'documentation', name: 'Documentation', price: 200 },
  { id: 'deployment', name: 'Deployment & Setup', price: 300 }
];

export default function QuotePage() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedSize, setSelectedSize] = useState<string>('medium');
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    timeline: '',
    description: ''
  });

  const calculateTotal = () => {
    let total = 0;
    
    // Base service costs
    selectedServices.forEach(serviceId => {
      const service = serviceTypes.find(s => s.id === serviceId);
      if (service) {
        const size = projectSizes.find(s => s.id === selectedSize);
        total += service.basePrice * (size?.multiplier || 1);
      }
    });
    
    // Additional services
    selectedAddons.forEach(addonId => {
      const addon = additionalServices.find(a => a.id === addonId);
      if (addon) {
        total += addon.price;
      }
    });
    
    return total;
  };

  const handleServiceToggle = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleAddonToggle = (addonId: string) => {
    setSelectedAddons(prev => 
      prev.includes(addonId) 
        ? prev.filter(id => id !== addonId)
        : [...prev, addonId]
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Quote request submitted:', {
      services: selectedServices,
      size: selectedSize,
      addons: selectedAddons,
      total: calculateTotal(),
      formData
    });
  };

  return (
    <>
      <Head>
        <title>Get a Quote - Zion Tech Group</title>
        <meta name="description" content="Get a personalized quote for AI services, IT solutions, micro SaaS development, and technology consulting from Zion Tech Group." />
        <meta name="keywords" content="get quote, technology consulting, AI services quote, IT services pricing, custom development quote" />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get Your Quote
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Get a personalized quote for your technology project. 
              Our transparent pricing helps you plan your budget effectively.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Quote Calculator */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Project Configuration</h2>
              
              {/* Service Selection */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Select Services</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {serviceTypes.map((service) => (
                    <div
                      key={service.id}
                      className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                        selectedServices.includes(service.id)
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => handleServiceToggle(service.id)}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-gray-900">{service.name}</h4>
                        <input
                          type="checkbox"
                          checked={selectedServices.includes(service.id)}
                          onChange={() => handleServiceToggle(service.id)}
                          className="w-4 h-4 text-blue-600"
                        />
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{service.description}</p>
                      <p className="text-sm font-medium text-blue-600">
                        Starting at ${service.basePrice.toLocaleString()}/month
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Size */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Size</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {projectSizes.map((size) => (
                    <div
                      key={size.id}
                      className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                        selectedSize === size.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setSelectedSize(size.id)}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-gray-900">{size.name}</h4>
                        <input
                          type="radio"
                          name="size"
                          checked={selectedSize === size.id}
                          onChange={() => setSelectedSize(size.id)}
                          className="w-4 h-4 text-blue-600"
                        />
                      </div>
                      <p className="text-sm text-gray-600">{size.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Services */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Additional Services</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {additionalServices.map((addon) => (
                    <div
                      key={addon.id}
                      className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                        selectedAddons.includes(addon.id)
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => handleAddonToggle(addon.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-900">{addon.name}</h4>
                          <p className="text-sm text-blue-600">+${addon.price.toLocaleString()}</p>
                        </div>
                        <input
                          type="checkbox"
                          checked={selectedAddons.includes(addon.id)}
                          onChange={() => handleAddonToggle(addon.id)}
                          className="w-4 h-4 text-blue-600"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Details Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Details</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select timeline</option>
                    <option value="asap">ASAP</option>
                    <option value="1-month">Within 1 month</option>
                    <option value="3-months">Within 3 months</option>
                    <option value="6-months">Within 6 months</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={4}
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Describe your project requirements, goals, and any specific needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Request Quote
                </button>
              </form>
            </div>
          </div>

          {/* Quote Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6 sticky top-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quote Summary</h3>
              
              {selectedServices.length > 0 ? (
                <div className="space-y-4">
                  <div className="space-y-2">
                    {selectedServices.map(serviceId => {
                      const service = serviceTypes.find(s => s.id === serviceId);
                      const size = projectSizes.find(s => s.id === selectedSize);
                      if (!service || !size) return null;
                      
                      return (
                        <div key={serviceId} className="flex justify-between text-sm">
                          <span className="text-gray-600">{service.name}</span>
                          <span className="font-medium">
                            ${(service.basePrice * size.multiplier).toLocaleString()}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                  
                  {selectedAddons.length > 0 && (
                    <div className="border-t pt-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Additional Services</h4>
                      <div className="space-y-2">
                        {selectedAddons.map(addonId => {
                          const addon = additionalServices.find(a => a.id === addonId);
                          if (!addon) return null;
                          
                          return (
                            <div key={addonId} className="flex justify-between text-sm">
                              <span className="text-gray-600">{addon.name}</span>
                              <span className="font-medium">+${addon.price.toLocaleString()}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between text-xl font-bold text-gray-900">
                      <span>Total Estimate</span>
                      <span>${calculateTotal().toLocaleString()}</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      *This is an estimate. Final pricing may vary based on specific requirements.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="text-center text-gray-500">
                  <Calculator className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                  <p>Select services to see your quote</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
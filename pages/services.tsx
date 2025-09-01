import React, { useState } from 'react';
import Head from 'next/head';
import { Brain, Shield, Cloud, Code, Server, Zap, Users, Target, Star, CheckCircle, Phone, Mail, MapPin, Search, Filter, ArrowRight, ExternalLink } from 'lucide-react';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '../src/data/innovativeMicroSaasServices2025';
import { SPECIALIZED_AI_SERVICES_2025 } from '../src/data/specializedAIServices2025';
import { SPECIALIZED_IT_INFRASTRUCTURE_SERVICES_2025 } from '../src/data/specializedITInfrastructureServices2025';

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');

  const allServices = [
    ...INNOVATIVE_MICRO_SAAS_SERVICES_2025,
    ...SPECIALIZED_AI_SERVICES_2025,
    ...SPECIALIZED_IT_INFRASTRUCTURE_SERVICES_2025
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Star, count: allServices.length },
    { id: 'Micro SAAS', name: 'Micro SAAS', icon: Code, count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.length },
    { id: 'AI & Analytics', name: 'AI & Analytics', icon: Brain, count: SPECIALIZED_AI_SERVICES_2025.length },
    { id: 'IT Infrastructure', name: 'IT Infrastructure', icon: Server, count: SPECIALIZED_IT_INFRASTRUCTURE_SERVICES_2025.length }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category.includes(selectedCategory);
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return a.price - b.price;
      case 'name':
        return a.title.localeCompare(b.title);
      case 'innovation':
        return b.innovationLevel.localeCompare(a.innovationLevel);
      default:
        return 0;
    }
  });

  const getCategoryIcon = (category: string) => {
    if (category.includes('AI')) return Brain;
    if (category.includes('Infrastructure')) return Server;
    if (category.includes('Cloud')) return Cloud;
    if (category.includes('Security')) return Shield;
    if (category.includes('DevOps')) return Code;
    return Star;
  };

  const getInnovationLevelColor = (level: string) => {
    switch (level) {
      case 'Revolutionary': return 'bg-purple-100 text-purple-800';
      case 'Cutting-edge': return 'bg-blue-100 text-blue-800';
      case 'Advanced': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <>
      <Head>
        <title>Services - Zion Tech Group | Innovative AI, IT & Micro SAAS Solutions</title>
        <meta name="description" content="Discover Zion Tech Group's comprehensive range of innovative micro SAAS services, specialized AI solutions, and cutting-edge IT infrastructure services. Transform your business with our advanced technology solutions." />
        <meta name="keywords" content="AI services, IT infrastructure, micro SAAS, cloud computing, cybersecurity, DevOps, edge computing, quantum computing" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Revolutionary Technology Services
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-8">
                Transform your business with our cutting-edge AI, IT infrastructure, and micro SAAS solutions. 
                Built for the future, delivering results today.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>30+ Innovative Services</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Enterprise-Grade Security</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>24/7 Expert Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Overview */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Service Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From micro SAAS solutions to enterprise AI platforms, we provide the technology foundation 
              your business needs to thrive in the digital age.
            </p>
          </div>

          {/* Category Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={category.id}
                  className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${
                    selectedCategory === category.id ? 'ring-2 ring-blue-500' : ''
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.name}</h3>
                    <p className="text-3xl font-bold text-blue-600">{category.count}</p>
                    <p className="text-sm text-gray-500">Services Available</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Search and Filter */}
          <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services by name, description, or tags..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="name">Sort by Name</option>
                  <option value="price">Sort by Price</option>
                  <option value="innovation">Sort by Innovation Level</option>
                </select>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {sortedServices.map((service) => {
              const CategoryIcon = getCategoryIcon(service.category);
              return (
                <div key={service.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  {/* Service Header */}
                  <div className="p-6 border-b border-gray-100">
                    <div className="flex items-start justify-between mb-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg">
                        <CategoryIcon className="w-6 h-6 text-blue-600" />
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getInnovationLevelColor(service.innovationLevel)}`}>
                        {service.innovationLevel}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-blue-600">
                        {service.currency}{service.price.toLocaleString()}
                        <span className="text-sm text-gray-500 font-normal">/month</span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-500">ROI</div>
                        <div className="text-lg font-semibold text-green-600">{service.roi}</div>
                      </div>
                    </div>
                  </div>

                  {/* Service Details */}
                  <div className="p-6">
                    {/* Category & Tags */}
                    <div className="mb-4">
                      <div className="text-sm text-gray-500 mb-2">Category</div>
                      <div className="text-sm font-medium text-gray-900">{service.category}</div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-sm text-gray-500 mb-2">Tags</div>
                      <div className="flex flex-wrap gap-2">
                        {service.tags.slice(0, 3).map((tag, index) => (
                          <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                            {tag}
                          </span>
                        ))}
                        {service.tags.length > 3 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                            +{service.tags.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Key Benefits */}
                    <div className="mb-4">
                      <div className="text-sm text-gray-500 mb-2">Key Benefits</div>
                      <ul className="space-y-1">
                        {service.benefits.slice(0, 3).map((benefit, index) => (
                          <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technical Specs */}
                    {service.technicalSpecs && (
                      <div className="mb-4">
                        <div className="text-sm text-gray-500 mb-2">Technology Stack</div>
                        <div className="flex flex-wrap gap-2">
                          {service.technicalSpecs.technology.slice(0, 4).map((tech, index) => (
                            <span key={index} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded">
                              {tech}
                            </span>
                          ))}
                          {service.technicalSpecs.technology.length > 4 && (
                            <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded">
                              +{service.technicalSpecs.technology.length - 4} more
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex gap-3 mt-6">
                      <a
                        href={`mailto:${service.contactInfo.email}?subject=Inquiry for ${service.title}`}
                        className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-3 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center gap-2"
                      >
                        <Mail className="w-4 h-4" />
                        Get Quote
                      </a>
                      {service.demoUrl && (
                        <a
                          href={service.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-200 flex items-center gap-2"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Demo
                        </a>
                      )}
                    </div>

                    {/* Contact Info */}
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Phone className="w-4 h-4" />
                        <span>{service.contactInfo.phone}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                        <Mail className="w-4 h-4" />
                        <span>{service.contactInfo.email}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* No Results */}
          {sortedServices.length === 0 && (
            <div className="text-center py-16">
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No services found</h3>
              <p className="text-gray-600">Try adjusting your search criteria or category selection.</p>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                Let our team of experts help you implement the right technology solutions 
                to drive growth, efficiency, and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:kleber@ziontechgroup.com?subject=Technology Solutions Consultation"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Schedule Consultation
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
              <p className="text-xl text-gray-600">Ready to discuss your technology needs? Contact us today.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <Phone className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600">+1 302 464 0950</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <Mail className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">kleber@ziontechgroup.com</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <MapPin className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Address</h3>
                <p className="text-gray-600">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
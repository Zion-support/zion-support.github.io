import React, { useState } from 'react';
import Head from 'next/head';
import { Search, Filter, Star } from 'lucide-react';

export default function ServicesCatalog() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const services = [
    {
      id: 1,
      name: 'Cloud Cost Guard (FinOps Assistant)',
      category: 'micro-saas',
      description: 'Anomaly detection, rightsizing, forecasting and budget guardrails across AWS/Azure/GCP.',
      price: 'Starting at $299/month',
      rating: 4.8,
      features: ['Cost Optimization', 'Budget Alerts', 'Multi-Cloud Support', 'Real-time Monitoring']
    },
    {
      id: 2,
      name: 'AI Content Generator',
      category: 'ai-services',
      description: 'Automated content creation using advanced AI models for blogs, social media, and marketing.',
      price: 'Starting at $199/month',
      rating: 4.9,
      features: ['Content Generation', 'SEO Optimization', 'Multi-language Support', 'Brand Voice Training']
    },
    {
      id: 3,
      name: 'DevOps Automation Suite',
      category: 'it-services',
      description: 'Complete CI/CD pipeline automation with monitoring and deployment tools.',
      price: 'Starting at $399/month',
      rating: 4.7,
      features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring', 'Auto-scaling']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: services.length },
    { id: 'micro-saas', name: 'Micro SaaS', count: services.filter(s => s.category === 'micro-saas').length },
    { id: 'ai-services', name: 'AI Services', count: services.filter(s => s.category === 'ai-services').length },
    { id: 'it-services', name: 'IT Services', count: services.filter(s => s.category === 'it-services').length }
  ];

  const filteredServices = services.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Head>
        <title>Services Catalog - Zion Tech Group</title>
        <meta name="description" content="Browse our comprehensive catalog of 350+ innovative services including micro SaaS, AI, and IT solutions." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Services Catalog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive catalog of 350+ innovative services designed to accelerate your digital transformation.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <Filter className="w-5 h-5 text-gray-400 mt-3" />
                <div className="flex gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {category.name} ({category.count})
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                    {service.category}
                  </span>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm text-gray-600">{service.rating}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.name}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-blue-600">
                    {service.price}
                  </span>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No services found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
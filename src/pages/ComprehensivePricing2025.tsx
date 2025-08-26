import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { innovativeMicroSaasServices2025 } from '../data/2025-innovative-micro-saas-expansion';
import { specializedIndustrySolutions2025 } from '../data/2025-specialized-industry-solutions';
import { emergingTechServices2025 } from '../data/2025-emerging-tech-services';

const ComprehensivePricing2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('price');
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');

  // Combine all services
  const allServices = [
    ...innovativeMicroSaasServices2025,
    ...specializedIndustrySolutions2025,
    ...emergingTechServices2025
  ];

  const categories = [
    'all',
    'Quantum AI & Research',
    'Edge AI & IoT',
    'Blockchain & Web3',
    'Sustainable AI',
    'Healthcare AI',
    'Financial AI',
    'Cybersecurity AI',
    'Logistics & Supply Chain AI',
    'Education AI',
    'Aerospace & Defense',
    'Automotive & Transportation',
    'Energy & Utilities',
    'Manufacturing & Industry 4.0',
    'Healthcare & Life Sciences',
    'Retail & E-commerce',
    'Construction & Real Estate',
    'Agriculture & Food',
    'Quantum Computing',
    'Neuromorphic Computing',
    'DNA Computing',
    'Photonic Computing',
    'Biological Computing',
    'Swarm Robotics',
    'Brain-Computer Interfaces',
    'Synthetic Biology'
  ];

  const filteredServices = allServices
    .filter(service => 
      selectedCategory === 'all' || service.category === selectedCategory
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return parseFloat(a.price.replace('$', '').replace(',', '')) - parseFloat(b.price.replace('$', '').replace(',', ''));
        case 'category':
          return a.category.localeCompare(b.category);
        case 'rating':
          return b.rating - a.rating;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return parseFloat(a.price.replace('$', '').replace(',', '')) - parseFloat(b.price.replace('$', '').replace(',', ''));
      }
    });

  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: string } = {
      'Quantum AI & Research': '🔮',
      'Edge AI & IoT': '🌐',
      'Blockchain & Web3': '⛓️',
      'Sustainable AI': '🌱',
      'Healthcare AI': '🏥',
      'Financial AI': '💰',
      'Cybersecurity AI': '🔒',
      'Logistics & Supply Chain AI': '🚚',
      'Education AI': '🎓',
      'Aerospace & Defense': '✈️',
      'Automotive & Transportation': '🚗',
      'Energy & Utilities': '⚡',
      'Manufacturing & Industry 4.0': '🏭',
      'Healthcare & Life Sciences': '🧬',
      'Retail & E-commerce': '🛍️',
      'Construction & Real Estate': '🏗️',
      'Agriculture & Food': '🌾',
      'Quantum Computing': '⚛️',
      'Neuromorphic Computing': '🧠',
      'DNA Computing': '🧬',
      'Photonic Computing': '💡',
      'Biological Computing': '🦠',
      'Swarm Robotics': '🤖',
      'Brain-Computer Interfaces': '🧠',
      'Synthetic Biology': '🧪'
    };
    return icons[category] || '🚀';
  };

  const getTechnologyBadge = (service: any) => {
    if (service.quantumFeatures) return 'Quantum';
    if (service.blockchainFeatures) return 'Blockchain';
    if (service.edgeComputing) return 'Edge Computing';
    if (service.aiCapabilities) return 'AI/ML';
    if (service.sustainabilityMetrics) return 'Sustainability';
    if (service.technology) return service.technology;
    return 'Innovative';
  };

  const getPriceRange = (price: string) => {
    const numPrice = parseFloat(price.replace('$', '').replace(',', ''));
    if (numPrice < 100) return 'Budget';
    if (numPrice < 500) return 'Standard';
    if (numPrice < 2000) return 'Premium';
    return 'Enterprise';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Comprehensive
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              {" "}Pricing 2025
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Transparent pricing for all our innovative micro SAAS services. 
            Choose the perfect solution for your business needs with flexible pricing options 
            and comprehensive feature sets.
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
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Overview */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">Budget</div>
              <div className="text-sm text-gray-300">$89 - $299/month</div>
              <div className="text-xs text-gray-400 mt-2">Perfect for startups and small businesses</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">Standard</div>
              <div className="text-sm text-gray-300">$349 - $899/month</div>
              <div className="text-xs text-gray-400 mt-2">Ideal for growing companies</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">Premium</div>
              <div className="text-sm text-gray-300">$1,199 - $2,999/month</div>
              <div className="text-xs text-gray-400 mt-2">For established enterprises</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">Enterprise</div>
              <div className="text-sm text-gray-300">$3,999 - $5,999/month</div>
              <div className="text-xs text-gray-400 mt-2">For large organizations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Controls */}
      <section className="px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
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

              {/* Sort By */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="price">Price (Low to High)</option>
                  <option value="name">Name</option>
                  <option value="category">Category</option>
                  <option value="rating">Rating</option>
                </select>
              </div>

              {/* View Mode */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">View Mode</label>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setViewMode('cards')}
                    className={`px-3 py-2 rounded-lg ${viewMode === 'cards' ? 'bg-blue-600' : 'bg-white/10'}`}
                  >
                    Cards
                  </button>
                  <button
                    onClick={() => setViewMode('table')}
                    className={`px-3 py-2 rounded-lg ${viewMode === 'table' ? 'bg-blue-600' : 'bg-white/10'}`}
                  >
                    Table
                  </button>
                </div>
              </div>
            </div>

            {/* Results Count */}
            <div className="text-center">
              <p className="text-gray-300">
                Showing {filteredServices.length} of {allServices.length} services
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Pricing */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          {viewMode === 'cards' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service) => (
                <div key={service.id} className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 overflow-hidden hover:border-blue-400 transition-all duration-300 hover:transform hover:scale-105">
                  {/* Service Header */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-2xl">{getCategoryIcon(service.category)}</div>
                      <div className="flex flex-col items-end gap-2">
                        <span className="px-2 py-1 bg-blue-600 text-xs font-semibold rounded-full">
                          {getTechnologyBadge(service)}
                        </span>
                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                          getPriceRange(service.price) === 'Budget' ? 'bg-green-600' :
                          getPriceRange(service.price) === 'Standard' ? 'bg-blue-600' :
                          getPriceRange(service.price) === 'Premium' ? 'bg-purple-600' : 'bg-cyan-600'
                        }`}>
                          {getPriceRange(service.price)}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 text-blue-400">{service.name}</h3>
                    <p className="text-sm text-gray-300 mb-3">{service.tagline}</p>
                    
                    {/* Price */}
                    <div className="mb-4 text-center">
                      <span className="text-3xl font-bold text-green-400">{service.price}</span>
                      <span className="text-gray-400">{service.period}</span>
                    </div>

                    {/* Features Preview */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                      <ul className="text-xs text-gray-400 space-y-1">
                        {service.features.slice(0, 4).map((feature, index) => (
                          <li key={index} className="flex items-center">
                            <span className="text-green-400 mr-2">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 text-center text-xs mb-4">
                      <div>
                        <div className="text-blue-400 font-semibold">{service.rating}</div>
                        <div className="text-gray-400">Rating</div>
                      </div>
                      <div>
                        <div className="text-blue-400 font-semibold">{service.customers}</div>
                        <div className="text-gray-400">Customers</div>
                      </div>
                      <div>
                        <div className="text-blue-400 font-semibold">{service.trialDays}</div>
                        <div className="text-gray-400">Trial Days</div>
                      </div>
                    </div>

                    {/* ROI */}
                    <div className="text-center mb-4">
                      <div className="text-xs text-gray-400">ROI</div>
                      <div className="text-sm text-green-400 font-semibold">{service.roi}</div>
                    </div>
                  </div>

                  {/* Service Footer */}
                  <div className="bg-white/5 px-6 py-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">{service.category}</span>
                      <Link
                        to={`/services/${service.id}`}
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors duration-200"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-white/5">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Service</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Category</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Price</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Rating</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Trial</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Technology</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    {filteredServices.map((service) => (
                      <tr key={service.id} className="hover:bg-white/5">
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <div className="text-2xl mr-3">{getCategoryIcon(service.category)}</div>
                            <div>
                              <div className="text-sm font-medium text-blue-400">{service.name}</div>
                              <div className="text-xs text-gray-400">{service.tagline}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm text-gray-300">{service.category}</span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm font-medium text-green-400">{service.price}</div>
                          <div className="text-xs text-gray-400">{service.period}</div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <span className="text-sm text-blue-400 mr-2">{service.rating}</span>
                            <div className="flex text-yellow-400">
                              {[...Array(5)].map((_, i) => (
                                <span key={i} className={i < Math.floor(service.rating) ? 'text-yellow-400' : 'text-gray-600'}>
                                  ★
                                </span>
                              ))}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm text-gray-300">{service.trialDays} days</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                            getPriceRange(service.price) === 'Budget' ? 'bg-green-600' :
                            getPriceRange(service.price) === 'Standard' ? 'bg-blue-600' :
                            getPriceRange(service.price) === 'Premium' ? 'bg-purple-600' : 'bg-cyan-600'
                          }`}>
                            {getTechnologyBadge(service)}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <Link
                            to={`/services/${service.id}`}
                            className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg transition-colors duration-200"
                          >
                            View
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-6 text-blue-100">
              Contact us today to discuss your specific needs and find the perfect service for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Contact Sales
              </Link>
              <Link
                to="/innovative-services-showcase-2025"
                className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensivePricing2025;
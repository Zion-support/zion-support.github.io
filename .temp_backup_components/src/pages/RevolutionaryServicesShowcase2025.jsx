import React, { useState } from 'react';
import { REVOLUTIONARY_2025_ADVANCED_SERVICES } from '../../data/revolutionary-2025-advanced-services';
import { EMERGING_TECH_2025_SPECIALIZED_SERVICES } from '../../data/emerging-tech-2025-specialized-services';
const RevolutionaryServicesShowcase2025 = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const allServices = [
        ...REVOLUTIONARY_2025_ADVANCED_SERVICES.map(service => ({ ...service, source: 'revolutionary' })),
        ...EMERGING_TECH_2025_SPECIALIZED_SERVICES.map(service => ({ ...service, source: 'emerging' }))
    ];
    const categories = [
        'all',
        'Micro SAAS',
        'IT Services',
        'AI Solutions',
        'Blockchain & Web3',
        'IoT & Edge Computing',
        'Sustainable Technology',
        'Space Technology',
        'Biotechnology',
        'Quantum Technology'
    ];
    const filteredServices = allServices.filter(service => {
        const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
        const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });
    return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Revolutionary Services Showcase 2025
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our cutting-edge micro SAAS services, specialized IT solutions, and innovative AI platforms designed to transform your business in 2025 and beyond.
            </p>
            
            {/* Contact Information */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Contact Zion Tech Group</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-gray-300">
                <div>
                  <p className="font-semibold text-white">Phone</p>
                  <p>+1 302 464 0950</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <p>kleber@ziontechgroup.com</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Website</p>
                  <p>https://ziontechgroup.com</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Address</p>
                  <p>364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
            </div>

            {/* Market Overview */}
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-6 mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Market Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300">
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-400">$2.8T+</p>
                  <p>Total Addressable Market</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-purple-400">15.7%</p>
                  <p>Annual Growth Rate</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-green-400">500+</p>
                  <p>Global Clients Served</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <input type="text" placeholder="Search services..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"/>
          </div>
          <div className="flex-shrink-0">
            <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              {categories.map(category => (<option key={category} value={category} className="bg-slate-800 text-white">
                  {category === 'all' ? 'All Categories' : category}
                </option>))}
            </select>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (<div key={service.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105">
              {/* Service Header */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${service.category === 'Micro SAAS' ? 'bg-blue-500/20 text-blue-400' :
                service.category === 'IT Services' ? 'bg-green-500/20 text-green-400' :
                    service.category === 'AI Solutions' ? 'bg-purple-500/20 text-purple-400' :
                        'bg-gray-500/20 text-gray-400'}`}>
                    {service.category}
                  </span>
                  <span className="text-sm text-gray-400">{service.subcategory}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{service.tagline}</p>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-green-400">{service.price}</div>
                  <span className="text-gray-400">{service.period}</span>
                </div>
              </div>

              {/* Service Description */}
              <p className="text-gray-300 text-sm mb-6 line-clamp-3">{service.description}</p>

              {/* Key Features */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Key Features</h4>
                <div className="space-y-2">
                  {service.features.slice(0, 3).map((feature, index) => (<div key={index} className="flex items-center text-sm text-gray-300">
                      <span className="text-blue-400 mr-2">✓</span>
                      {feature}
                    </div>))}
                  {service.features.length > 3 && (<div className="text-sm text-gray-400">
                      +{service.features.length - 3} more features
                    </div>)}
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Key Benefits</h4>
                <div className="space-y-2">
                  {service.benefits.slice(0, 2).map((benefit, index) => (<div key={index} className="flex items-center text-sm text-gray-300">
                      <span className="text-green-400 mr-2">→</span>
                      {benefit}
                    </div>))}
                </div>
              </div>

              {/* Market Info */}
              <div className="mb-6 text-sm">
                <div className="grid grid-cols-2 gap-4 text-gray-400">
                  <div>
                    <p className="font-semibold text-white">Market Size</p>
                    <p>{service.marketSize}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Growth Rate</p>
                    <p>{service.growthRate}</p>
                  </div>
                </div>
              </div>

              {/* ROI and Setup */}
              <div className="mb-6 text-sm">
                <div className="grid grid-cols-2 gap-4 text-gray-400">
                  <div>
                    <p className="font-semibold text-white">Expected ROI</p>
                    <p className="text-green-400">{service.roi}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Setup Time</p>
                    <p>{service.setupTime}</p>
                  </div>
                </div>
              </div>

              {/* Trial Info */}
              <div className="mb-6 text-center">
                <div className="bg-blue-500/20 rounded-lg p-3">
                  <p className="text-white font-semibold">{service.trialDays} Days Free Trial</p>
                  <p className="text-blue-400 text-sm">No credit card required</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <a href={service.websiteUrl} target="_blank" rel="noopener noreferrer" className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                  Learn More & Get Started
                </a>
                {service.demoUrl && (<a href={service.demoUrl} target="_blank" rel="noopener noreferrer" className="block w-full border border-white/20 text-white text-center py-3 px-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                    Request Demo
                  </a>)}
              </div>

              {/* Contact Info */}
              <div className="mt-6 pt-6 border-t border-white/10 text-center">
                <p className="text-sm text-gray-400 mb-2">Need help? Contact us directly:</p>
                <div className="space-y-1 text-sm text-gray-300">
                  <p>{service.contactInfo.phone}</p>
                  <p>{service.contactInfo.email}</p>
                </div>
              </div>
            </div>))}
        </div>

        {/* No Results */}
        {filteredServices.length === 0 && (<div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
            <p className="text-gray-300">Try adjusting your search terms or category filter.</p>
          </div>)}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our revolutionary services are designed to give you a competitive edge in 2025 and beyond. 
              Contact us today to discuss how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+13024640950" className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-all duration-300">
                📞 Call Now: +1 302 464 0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="border-2 border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300">
                ✉️ Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>);
};
export default RevolutionaryServicesShowcase2025;

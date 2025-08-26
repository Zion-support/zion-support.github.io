import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { advancedMicroSaasInnovations2025 } from '../../data/2025-advanced-micro-saas-innovations';
import { specializedIndustrySolutions2025 } from '../../data/2025-specialized-industry-solutions';

const AdvancedServicesShowcase2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const allServices = [...advancedMicroSaasInnovations2025, ...specializedIndustrySolutions2025];
  
  const categories = ['all', ...Array.from(new Set(allServices.map(service => service.category)))];
  
  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Business Intelligence & Analytics': 'from-blue-600 to-indigo-700',
      'Cybersecurity & Communication': 'from-purple-600 to-violet-700',
      'Customer Success & Retention': 'from-green-600 to-emerald-700',
      'Supply Chain & Logistics': 'from-orange-600 to-red-700',
      'Legal Technology': 'from-slate-600 to-gray-700',
      'Quantum Computing & AI': 'from-indigo-600 to-purple-700',
      'Content Marketing & SEO': 'from-teal-600 to-cyan-700',
      'Cybersecurity': 'from-red-600 to-pink-700',
      'Sustainability & ESG': 'from-emerald-600 to-green-700',
      'Neuroscience & Performance': 'from-violet-600 to-purple-700',
      'Healthcare Technology': 'from-blue-600 to-cyan-700',
      'Financial Technology': 'from-green-600 to-emerald-700',
      'Manufacturing Technology': 'from-orange-600 to-red-700',
      'Real Estate Technology': 'from-blue-600 to-indigo-700',
      'Educational Technology': 'from-purple-600 to-violet-700',
      'Logistics & Transportation': 'from-teal-600 to-cyan-700',
      'Retail Technology': 'from-pink-600 to-rose-700',
      'Construction Technology': 'from-amber-600 to-orange-700',
      'Hospitality Technology': 'from-indigo-600 to-purple-700'
    };
    return colors[category] || 'from-gray-600 to-slate-700';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Advanced
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              {" "}Micro SAAS
            </span>
            {" "}Innovations 2025
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Discover our cutting-edge portfolio of AI-powered, quantum-enhanced, and blockchain-integrated micro SAAS solutions. 
            Transform your business with technology that's 2-3 years ahead of the market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              Get Started Today
            </Link>
            <Link
              to="/request-quote"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
            >
              Request Custom Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-purple-900/50 to-pink-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-2">{allServices.length}+</div>
              <div className="text-gray-300">Innovative Services</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">25+</div>
              <div className="text-gray-300">Industry Categories</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">$2.5T+</div>
              <div className="text-gray-300">Total Addressable Market</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-gray-300">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 mb-8">
            {/* Search */}
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search services by name, description, or features..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-all duration-300"
              />
            </div>
            
            {/* Category Filter */}
            <div className="lg:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 text-white focus:outline-none focus:border-blue-400 transition-all duration-300"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-slate-800 text-white">
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div
                key={service.id}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl mb-2">{service.icon}</div>
                  {service.popular && (
                    <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-2 py-1 rounded-full">
                      Popular
                    </span>
                  )}
                </div>

                {/* Service Info */}
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                  {service.name}
                </h3>
                <p className="text-gray-300 mb-3 text-sm">{service.tagline}</p>
                
                {/* Price */}
                <div className="mb-4">
                  <span className="text-2xl font-bold text-blue-400">{service.price}</span>
                  <span className="text-gray-400">{service.period}</span>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-blue-400 mb-3">Key Features:</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {service.features.slice(0, 5).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 flex-shrink-0"></span>
                        <span className="truncate">{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 5 && (
                      <div className="text-xs text-gray-500 mt-2">
                        +{service.features.length - 5} more features
                      </div>
                    )}
                  </div>
                </div>

                {/* Market Info */}
                <div className="mb-6 space-y-2">
                  <div className="text-xs">
                    <span className="text-gray-400">Market Size:</span>
                    <span className="text-white ml-2">{service.marketSize}</span>
                  </div>
                  <div className="text-xs">
                    <span className="text-gray-400">Growth Rate:</span>
                    <span className="text-white ml-2">{service.growthRate}</span>
                  </div>
                  <div className="text-xs">
                    <span className="text-gray-400">ROI:</span>
                    <span className="text-white ml-2">{service.roi}</span>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="mb-6">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service.category)} text-white`}>
                    {service.category}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-3">
                  <Link
                    to={service.link}
                    className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 text-sm"
                  >
                    Learn More
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-4 py-2 bg-white/10 text-white font-medium rounded-lg hover:bg-white/20 transition-all duration-300 text-sm border border-white/20"
                  >
                    Contact Sales
                  </Link>
                </div>

                {/* Trial Info */}
                <div className="mt-4 text-center">
                  <span className="text-xs text-gray-400">
                    {service.trialDays}-day free trial • Setup in {service.setupTime}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-white mb-2">No services found</h3>
              <p className="text-gray-300">Try adjusting your search terms or category filter.</p>
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
            Our innovative micro SAAS solutions are designed to give you a competitive edge. 
            Get started today and experience the future of business technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              Schedule a Demo
            </Link>
            <Link
              to="/request-quote"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
            >
              Get Custom Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gradient-to-r from-slate-800/50 to-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div>
              <div className="text-blue-400 font-semibold mb-2">Phone</div>
              <div className="text-gray-300">+1 302 464 0950</div>
            </div>
            <div>
              <div className="text-blue-400 font-semibold mb-2">Email</div>
              <div className="text-gray-300">kleber@ziontechgroup.com</div>
            </div>
            <div>
              <div className="text-blue-400 font-semibold mb-2">Address</div>
              <div className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdvancedServicesShowcase2025;
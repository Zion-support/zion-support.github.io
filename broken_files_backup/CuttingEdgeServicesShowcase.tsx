import React, { useState } from 'react';
import { cuttingEdgeInnovations2025 } from '../data/2025-cutting-edge-innovations';
import { specializedIndustrySolutions2025 } from '../data/2025-specialized-industry-solutions';
const CuttingEdgeServicesShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedIndustry, setSelectedIndustry] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const allServices = [...cuttingEdgeInnovations2025, ...specializedIndustrySolutions2025];
  const categories = ['All', ...Array.from(new Set(allServices.map(service => service.category)))];
  const industries = ['All', ...Array.from(new Set(specializedIndustrySolutions2025.map(service => service.industry)))];
  const filteredServices = allServices.filter(service => {
    const categoryMatch = selectedCategory === 'All' || service.category === selectedCategory;
    const industryMatch = selectedIndustry === 'All' ||
      ('industry' in service ? service.industry === selectedIndustry : true);
    const searchMatch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return categoryMatch && industryMatch && searchMatch;
  });
  const formatPrice = (price: number, model: string) => {
    if (model === 'percentage of revenue') {
      return `${price}% of revenue`;
    } else if (model === 'per device per day') {
      return `$${price.toFixed(2)}/device/day`;
    } else if (model === 'per kWh managed') {
      return `$${price.toFixed(3)}/kWh`;
    } else if (model === 'per acre') {
      return `$${price.toFixed(2)}/acre/month`;
    } else if (model === 'per inference') {
      return `$${price.toFixed(3)}/inference`;
    } else if (model === 'monthly per student') {
      return `$${price}/student/month`;
    } else if (model === 'monthly per attorney') {
      return `$${price}/attorney/month`;
    } else {
      return `$${price}/${model}`;
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Cutting-Edge Innovation Services 2025
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Discover our comprehensive portfolio of next-generation micro SAAS services,
            AI solutions, and specialized industry platforms designed to transform your business
            and drive innovation across all sectors.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-300">
              🚀 20+ New Services
            </span>
            <span className="px-4 py-2 bg-green-600/20 border border-green-500/30 rounded-full text-green-300">
              💡 AI-Powered Solutions
            </span>
            <span className="px-4 py-2 bg-purple-600/20 border border-purple-500/30 rounded-full text-purple-300">
              🏭 Industry-Specific
            </span>
            <span className="px-4 py-2 bg-orange-600/20 border border-orange-500/30 rounded-full text-orange-300">
              ⚡ Cutting-Edge Tech
            </span>
          </div>
        </div>
        {/* Contact Information */}
        <div className="bg-slate-800/50 border border-white/10 rounded-2xl p-8 mb-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-gray-300 mb-6">
              Contact our innovation experts to discuss how these cutting-edge solutions can drive your success
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-blue-400">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-green-400">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-purple-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>
        {/* Filters */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="flex flex-wrap gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 bg-slate-800 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="px-4 py-2 bg-slate-800 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-500"
              >
                {industries.map(industry => (
                  <option key={industry} value={industry}>{industry}</option>
                ))}
              </select>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="px-4 py-2 pl-10 bg-slate-800 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 w-64"
              />
              <svg className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div key={service.id} className="bg-slate-800/50 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105">
              {/* Service Header */}
              <div className="mb-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-blue-400 text-sm font-medium">{service.category}</p>
                    {'industry' in service && (
                      <p className="text-green-400 text-sm">{service.industry}</p>
                    )}
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">
                      {formatPrice(service.price, service.pricingModel)}
                    </div>
                    <div className="text-sm text-gray-400">{service.pricingModel}</div>
                  </div>
                </div>
              </div>
              {/* Description */}
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {service.description}
              </p>
              {/* Key Features */}
              <div className="mb-4">
                <h4 className="text-white font-semibold mb-2 text-sm">Key Features</h4>
                <div className="grid grid-cols-1 gap-1">
                  {service.features.slice(0, 4).map((feature, idx) => (
                    <div key={idx} className="flex items-start text-gray-300 text-xs">
                      <svg className="w-3 h-3 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
              {/* Benefits */}
              <div className="mb-4">
                <h4 className="text-white font-semibold mb-2 text-sm">Benefits</h4>
                <div className="grid grid-cols-1 gap-1">
                  {service.benefits.slice(0, 3).map((benefit, idx) => (
                    <div key={idx} className="flex items-start text-gray-300 text-xs">
                      <svg className="w-3 h-3 text-blue-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
              {/* Additional Info */}
              <div className="grid grid-cols-2 gap-4 text-xs mb-4">
                <div>
                  <span className="text-gray-400">Market Price:</span>
                  <div className="text-white font-medium">{service.marketPrice}</div>
                </div>
                <div>
                  <span className="text-gray-400">ROI:</span>
                  <div className="text-green-400 font-medium">{service.roi}</div>
                </div>
                <div>
                  <span className="text-gray-400">Setup Time:</span>
                  <div className="text-white font-medium">{service.setupTime}</div>
                </div>
                <div>
                  <span className="text-gray-400">Free Tier:</span>
                  <div className={service.freeTier ? "text-green-400" : "text-red-400"}>
                    {service.freeTier ? "Yes" : "No"}
                  </div>
                </div>
              </div>
              {/* Tags */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {service.tags.slice(0, 4).map((tag, idx) => (
                    <span key={idx} className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              {/* Contact Button */}
              <div className="text-center">
                <a
                  href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.name}`}
                  className="inline-block w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200"
                >
                  Get Started
                </a>
                <p className="text-xs text-gray-400 mt-2">
                  Contact us for pricing and demo
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Lead the Innovation Revolution?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join hundreds of forward-thinking companies already transforming their operations
              with our cutting-edge AI and technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Innovation Services Consultation"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 text-lg"
              >
                Schedule a Consultation
              </a>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 bg-slate-700/50 border border-white/20 text-white font-bold rounded-lg hover:bg-slate-700/70 transition-all duration-200 text-lg"
              >
                Call Now: +1 302 464 0950
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CuttingEdgeServicesShowcase;
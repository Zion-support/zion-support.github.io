import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import { EMERGING_TECH_SERVICES_2027 } from '../data/emergingTechServices2027';

const EmergingTechServices: NextPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<string>('innovation');

  const categories = [
    { id: 'all', name: 'All Technologies', color: 'from-blue-500 to-purple-600' },
    { id: 'Quantum Technology', name: 'Quantum Technology', color: 'from-purple-500 to-pink-600' },
    { id: 'Space Technology', name: 'Space Technology', color: 'from-indigo-500 to-blue-600' },
    { id: 'Biotechnology', name: 'Biotechnology', color: 'from-green-500 to-teal-600' },
    { id: 'Advanced AI', name: 'Advanced AI', color: 'from-orange-500 to-red-600' },
    { id: 'Energy Technology', name: 'Energy Technology', color: 'from-yellow-500 to-orange-600' }
  ];

  const filteredServices = EMERGING_TECH_SERVICES_2027.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return a.pricing.monthly - b.pricing.monthly;
      case 'innovation':
        return b.innovationLevel === 'Revolutionary' ? 1 : -1;
      case 'roi':
        return parseInt(b.roi.split('%')[0]) - parseInt(a.roi.split('%')[0]);
      default:
        return 0;
    }
  });

  const getInnovationColor = (level: string) => {
    switch (level) {
      case 'Revolutionary': return 'from-red-500 to-pink-600';
      case 'Breakthrough': return 'from-purple-500 to-indigo-600';
      case 'Advanced': return 'from-blue-500 to-cyan-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'Revolutionary': return 'bg-gradient-to-r from-red-500 to-pink-600';
      case 'Breakthrough': return 'bg-gradient-to-r from-purple-500 to-indigo-600';
      case 'Advanced': return 'bg-gradient-to-r from-blue-500 to-cyan-600';
      default: return 'bg-gradient-to-r from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <Head>
        <title>Emerging Tech Services 2027 - Zion Tech Group | Revolutionary Technology Solutions</title>
        <meta name="description" content="Discover the future of technology with Zion Tech Group's revolutionary emerging tech services. From quantum computing to biocomputing, we're pioneering the next generation of innovation." />
        <meta name="keywords" content="emerging technology, quantum computing, space technology, biocomputing, neuromorphic computing, fusion energy, Zion Tech Group" />
        <meta name="author" content="Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/emerging-tech-services" />
      </Head>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Emerging Tech Services 2027
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Discover the future of technology with our revolutionary emerging tech services. 
            From quantum computing to biocomputing, we're pioneering the next generation of innovation.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-blue-400/20">
              <span className="text-2xl">🚀</span>
              <span className="text-gray-300">Revolutionary Technology</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-purple-400/20">
              <span className="text-2xl">🧠</span>
              <span className="text-gray-300">AI-Powered Solutions</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-pink-400/20">
              <span className="text-2xl">⚡</span>
              <span className="text-gray-300">Future-Ready Infrastructure</span>
            </div>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-12 border border-blue-400/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search emerging tech services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/10 border border-blue-400/30 rounded-xl px-4 py-3 text-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50"
              />
              <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Category Filter */}
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-white/10 border border-blue-400/30 rounded-xl px-4 py-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 appearance-none"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
              <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {/* Sort By */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full bg-white/10 border border-blue-400/30 rounded-xl px-4 py-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 appearance-none"
              >
                <option value="innovation">Sort by Innovation Level</option>
                <option value="price">Sort by Price</option>
                <option value="roi">Sort by ROI</option>
              </select>
              <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {sortedServices.map((service, index) => (
            <div
              key={service.id}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-blue-400/20 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Service Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">{service.icon}</div>
                <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${getBadgeColor(service.badge)}`}>
                  {service.badge}
                </span>
              </div>

              {/* Service Title and Description */}
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-300 text-sm mb-4 line-clamp-3">{service.description}</p>

              {/* Innovation Level */}
              <div className="mb-4">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getInnovationColor(service.innovationLevel)} text-white`}>
                  {service.innovationLevel}
                </span>
              </div>

              {/* Pricing */}
              <div className="mb-4">
                <div className="text-2xl font-bold text-blue-400">
                  ${service.pricing.monthly.toLocaleString()}
                  <span className="text-sm text-gray-400">/month</span>
                </div>
                <div className="text-sm text-gray-400">
                  ${service.pricing.yearly.toLocaleString()}/year
                </div>
              </div>

              {/* ROI */}
              <div className="mb-4">
                <div className="text-sm text-gray-400">Expected ROI</div>
                <div className="text-lg font-bold text-green-400">{service.roi}</div>
              </div>

              {/* Key Features */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2">Key Features</h4>
                <div className="space-y-1">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center text-xs text-gray-300">
                      <span className="text-green-400 mr-2">✓</span>
                      {feature}
                    </div>
                  ))}
                  {service.features.length > 3 && (
                    <div className="text-xs text-gray-400">
                      +{service.features.length - 3} more features
                    </div>
                  )}
                </div>
              </div>

              {/* Market Size */}
              <div className="mb-4">
                <div className="text-sm text-gray-400">Market Size</div>
                <div className="text-sm font-medium text-white">{service.marketSize}</div>
              </div>

              {/* Contact Info */}
              <div className="border-t border-white/20 pt-4 mb-4">
                <div className="text-xs text-gray-400 mb-2">Contact Information</div>
                <div className="space-y-1 text-xs text-gray-300">
                  <div>📞 {service.contactInfo.phone}</div>
                  <div>✉️ {service.contactInfo.email}</div>
                  <div>🌐 {service.contactInfo.website}</div>
                </div>
              </div>

              {/* CTA Button */}
              <a
                href={service.link}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 block"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl p-12 border border-blue-400/30">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Embrace the Future?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our revolutionary emerging technology services can transform your business and give you a competitive advantage in the digital age.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
            >
              Get Started Today
            </a>
            <a
              href="tel:+13024640950"
              className="bg-white/10 text-white px-8 py-4 rounded-xl font-semibold text-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              📞 Call +1 (302) 464-0950
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergingTechServices;
import type { NextPage } from 'next';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import {
  Brain,
  Shield,
  Heart,
  DollarSign,
  Network,
  Target,
  Users,
  Cpu,
  Gavel,
  Satellite,
  CheckCircle,
  Star,
  TrendingUp,
  Zap,
  Globe,
  Lock,
  Search,
  Filter,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ExternalLink
} from 'lucide-react';
import { COMPREHENSIVE_INNOVATIVE_SERVICES_2031 } from '../src/data/comprehensiveInnovativeServices2031';

const RevolutionaryServicesShowcase2031: NextPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('innovation');

  const categories = [
    { id: 'all', name: 'All Services', icon: Brain, color: 'from-purple-600 to-pink-600' },
    { id: 'AI & Fintech', name: 'AI & Fintech', icon: DollarSign, color: 'from-green-600 to-teal-600' },
    { id: 'Cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-red-600 to-orange-600' },
    { id: 'AI & Healthcare', name: 'AI & Healthcare', icon: Heart, color: 'from-pink-600 to-rose-600' },
    { id: 'IoT & Edge Computing', name: 'IoT & Edge', icon: Satellite, color: 'from-blue-600 to-cyan-600' },
    { id: 'Blockchain & Supply Chain', name: 'Blockchain', icon: Network, color: 'from-violet-600 to-purple-600' },
    { id: 'AI & Marketing', name: 'AI & Marketing', icon: Target, color: 'from-yellow-600 to-orange-600' },
    { id: 'AI & Customer Service', name: 'AI & Support', icon: Users, color: 'from-indigo-600 to-blue-600' },
    { id: 'AI & Quantum Computing', name: 'Quantum AI', icon: Cpu, color: 'from-emerald-600 to-green-600' },
    { id: 'AI & Legal Tech', name: 'AI & Legal', icon: Gavel, color: 'from-amber-600 to-yellow-600' }
  ];

  // Filter and sort services
  const filteredServices = COMPREHENSIVE_INNOVATIVE_SERVICES_2031
    .filter(service => {
      const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'innovation':
          return b.innovationLevel === 'Breakthrough' ? 1 : -1;
        case 'price':
          return parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, ''));
        case 'roi':
          return parseInt(b.roi.replace(/[^0-9]/g, '')) - parseInt(a.roi.replace(/[^0-9]/g, ''));
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

  const getInnovationColor = (level: string) => {
    switch (level) {
      case 'Breakthrough': return 'from-purple-600 to-pink-600';
      case 'Advanced': return 'from-blue-600 to-cyan-600';
      default: return 'from-green-600 to-teal-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Revolutionary Services Showcase 2031 - Zion Tech Group | Cutting-Edge AI, Quantum & Tech Solutions</title>
        <meta name="description" content="Discover our revolutionary 2031 services portfolio featuring AI-powered solutions, quantum computing, cybersecurity, healthcare diagnostics, IoT edge computing, blockchain supply chain, and more cutting-edge technology." />
        <meta name="keywords" content="AI services 2031, quantum computing services, cybersecurity services, healthcare AI, IoT edge computing, blockchain supply chain, Zion Tech Group services" />
      </Helmet>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative container mx-auto px-4 py-24 text-center text-white">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Revolutionary Services 2031
          </h1>
          <p className="text-xl mb-8 max-w-4xl mx-auto text-gray-300">
            Experience the future of technology with our comprehensive portfolio of AI-powered solutions, 
            quantum computing platforms, advanced cybersecurity, and cutting-edge micro SAAS services. 
            Transform your business with innovation that drives unprecedented results.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+13024640950"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              📞 Call +1 (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              ✉️ Request Consultation
            </a>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search our revolutionary services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-300 w-5 h-5" />
            </div>
          </div>

          {/* Filters Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 text-sm ${
                      activeCategory === category.id
                        ? `bg-gradient-to-r ${category.color} text-white shadow-lg transform scale-105`
                        : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span>{category.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Sort Options */}
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-gray-300" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="innovation">Sort by Innovation</option>
                <option value="price">Sort by Price</option>
                <option value="roi">Sort by ROI</option>
                <option value="name">Sort by Name</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              {/* Service Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className={`w-12 h-12 bg-gradient-to-r ${getInnovationColor(service.innovationLevel)} rounded-xl flex items-center justify-center`}>
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        service.innovationLevel === 'Breakthrough' 
                          ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                          : service.innovationLevel === 'Advanced'
                          ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                          : 'bg-green-500/20 text-green-300 border border-green-500/30'
                      }`}>
                        {service.innovationLevel}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-blue-300 text-sm font-medium">{service.tagline}</p>
                </div>
              </div>

              {/* Service Description */}
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="text-white font-bold text-xl mb-1">{service.price}</div>
                  <div className="text-gray-400 text-xs">Starting Price</div>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="text-green-400 font-bold text-xl mb-1">{service.roi}</div>
                  <div className="text-gray-400 text-xs">Expected ROI</div>
                </div>
              </div>

              {/* Key Benefits */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3 flex items-center">
                  <Star className="w-4 h-4 mr-2 text-yellow-400" />
                  Key Benefits
                </h4>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="text-sm text-gray-300 flex items-start">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-400 mt-0.5 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3 flex items-center">
                  <Zap className="w-4 h-4 mr-2 text-blue-400" />
                  Key Features
                </h4>
                <div className="flex flex-wrap gap-2">
                  {service.features.slice(0, 6).map((feature, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300 border border-white/20"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Use Cases */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3 flex items-center">
                  <Globe className="w-4 h-4 mr-2 text-purple-400" />
                  Perfect For
                </h4>
                <div className="flex flex-wrap gap-2">
                  {service.useCases.slice(0, 4).map((useCase, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-purple-500/20 rounded-full text-xs text-purple-300 border border-purple-500/30"
                    >
                      {useCase}
                    </span>
                  ))}
                </div>
              </div>

              {/* Technical Specifications */}
              {service.technicalSpecs && (
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3 flex items-center">
                    <Cpu className="w-4 h-4 mr-2 text-cyan-400" />
                    Technical Specs
                  </h4>
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="text-gray-400">Uptime:</span>
                      <span className="text-white ml-2">{service.technicalSpecs.uptime}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">API Endpoints:</span>
                      <span className="text-white ml-2">{service.technicalSpecs.apiEndpoints}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Technology:</span>
                      <span className="text-white ml-2">{service.technicalSpecs.technology.slice(0, 2).join(', ')}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Security:</span>
                      <span className="text-white ml-2">{service.technicalSpecs.security.slice(0, 2).join(', ')}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Market Information */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3 flex items-center">
                  <TrendingUp className="w-4 h-4 mr-2 text-green-400" />
                  Market Insights
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Market Price:</span>
                    <span className="text-white">{service.marketPrice}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Trend:</span>
                    <span className="text-white">{service.marketTrend}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Competitors:</span>
                    <span className="text-white">{service.competitors.slice(0, 2).join(', ')}</span>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg p-4 mb-6">
                <h4 className="text-white font-semibold mb-3 flex items-center">
                  <Users className="w-4 h-4 mr-2 text-blue-400" />
                  Get Started Today
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-gray-300">
                    <Phone className="w-4 h-4 mr-2" />
                    <a href={`tel:${service.contactInfo.phone}`} className="hover:text-blue-300 transition-colors">
                      {service.contactInfo.phone}
                    </a>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Mail className="w-4 h-4 mr-2" />
                    <a href={`mailto:${service.contactInfo.email}`} className="hover:text-blue-300 transition-colors">
                      {service.contactInfo.email}
                    </a>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{service.contactInfo.address}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <a
                  href={`mailto:${service.contactInfo.email}?subject=Service Inquiry for ${service.name}`}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-3 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Request Quote
                </a>
                <a
                  href={service.contactInfo.website}
                  className="bg-white/10 text-white py-3 px-4 rounded-lg font-medium hover:bg-white/20 transition-all duration-200 flex items-center justify-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        {filteredServices.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
            <p className="text-gray-300 mb-6">Try adjusting your search or category filters</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchTerm('');
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              View All Services
            </button>
          </div>
        )}
      </div>

      {/* Bottom CTA Section */}
      <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-t border-white/10">
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join hundreds of companies already leveraging our revolutionary technology solutions. 
            Get in touch today to discover how we can accelerate your digital transformation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+13024640950"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              📞 Call +1 (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              ✉️ Contact Us
            </a>
            <a
              href="https://ziontechgroup.com"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              🌐 Visit Website
            </a>
          </div>
          <div className="mt-8 text-gray-400">
            <p className="text-sm">
              <strong>Zion Tech Group</strong> | 364 E Main St STE 1008, Middletown DE 19709
            </p>
            <p className="text-sm">
              Mobile: +1 302 464 0950 | Email: kleber@ziontechgroup.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryServicesShowcase2031;
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
  ExternalLink,
  Calculator,
  BarChart3,
  Award,
  Clock,
  Users2,
  Building2
} from 'lucide-react';
import { COMPREHENSIVE_INNOVATIVE_SERVICES_2031 } from '../src/data/comprehensiveInnovativeServices2031';

const ComprehensivePricingGuide2031: NextPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [innovationLevel, setInnovationLevel] = useState('all');

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

  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'budget', name: 'Budget ($1K-$2K)', range: '1000-2000' },
    { id: 'mid', name: 'Mid-Range ($2K-$4K)', range: '2000-4000' },
    { id: 'premium', name: 'Premium ($4K-$8K)', range: '4000-8000' },
    { id: 'enterprise', name: 'Enterprise ($8K+)', range: '8000+' }
  ];

  const innovationLevels = [
    { id: 'all', name: 'All Levels', color: 'from-gray-600 to-gray-700' },
    { id: 'Advanced', name: 'Advanced', color: 'from-blue-600 to-cyan-600' },
    { id: 'Breakthrough', name: 'Breakthrough', color: 'from-purple-600 to-pink-600' }
  ];

  // Filter services based on selected criteria
  const filteredServices = COMPREHENSIVE_INNOVATIVE_SERVICES_2031.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesInnovation = innovationLevel === 'all' || service.innovationLevel === innovationLevel;
    
    let matchesPrice = true;
    if (priceRange !== 'all') {
      const price = parseInt(service.price.replace(/[^0-9]/g, ''));
      switch (priceRange) {
        case 'budget':
          matchesPrice = price >= 1000 && price <= 2000;
          break;
        case 'mid':
          matchesPrice = price >= 2000 && price <= 4000;
          break;
        case 'premium':
          matchesPrice = price >= 4000 && price <= 8000;
          break;
        case 'enterprise':
          matchesPrice = price >= 8000;
          break;
      }
    }
    
    return matchesCategory && matchesInnovation && matchesPrice;
  });

  const getPriceRange = (price: string) => {
    const numPrice = parseInt(price.replace(/[^0-9]/g, ''));
    if (numPrice <= 2000) return 'budget';
    if (numPrice <= 4000) return 'mid';
    if (numPrice <= 8000) return 'premium';
    return 'enterprise';
  };

  const getROIColor = (roi: string) => {
    const roiNum = parseInt(roi.replace(/[^0-9]/g, ''));
    if (roiNum >= 500) return 'text-purple-400';
    if (roiNum >= 300) return 'text-green-400';
    if (roiNum >= 200) return 'text-blue-400';
    return 'text-yellow-400';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Comprehensive Pricing Guide 2031 - Zion Tech Group | AI, Quantum & Tech Solutions Pricing</title>
        <meta name="description" content="Explore our comprehensive 2031 pricing guide featuring AI-powered solutions, quantum computing, cybersecurity, healthcare diagnostics, IoT edge computing, blockchain supply chain, and more cutting-edge technology pricing." />
        <meta name="keywords" content="AI services pricing 2031, quantum computing pricing, cybersecurity pricing, healthcare AI pricing, IoT edge computing pricing, blockchain supply chain pricing, Zion Tech Group pricing" />
      </Helmet>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative container mx-auto px-4 py-24 text-center text-white">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Comprehensive Pricing Guide 2031
          </h1>
          <p className="text-xl mb-8 max-w-4xl mx-auto text-gray-300">
            Transparent pricing for our revolutionary technology solutions. Compare features, ROI, and value 
            across our comprehensive portfolio of AI-powered services, quantum computing platforms, and cutting-edge solutions.
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
              ✉️ Request Custom Quote
            </a>
          </div>
        </div>
      </div>

      {/* Pricing Overview Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Pricing Overview</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our pricing is designed to provide exceptional value while ensuring accessibility across different business sizes and needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl flex items-center justify-center">
              <DollarSign className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Budget Tier</h3>
            <p className="text-gray-300 text-sm mb-4">$1K - $2K/month</p>
            <p className="text-gray-400 text-xs">Perfect for startups and small businesses</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Mid-Range</h3>
            <p className="text-gray-300 text-sm mb-4">$2K - $4K/month</p>
            <p className="text-gray-400 text-xs">Ideal for growing companies</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Premium</h3>
            <p className="text-gray-300 text-sm mb-4">$4K - $8K/month</p>
            <p className="text-gray-400 text-xs">For established enterprises</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl flex items-center justify-center">
              <Users2 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Enterprise</h3>
            <p className="text-gray-300 text-sm mb-4">$8K+/month</p>
            <p className="text-gray-400 text-xs">Custom solutions for large organizations</p>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 mb-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Filter & Compare Services</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Category Filter */}
              <div>
                <label className="block text-white font-medium mb-3">Service Category</label>
                <select
                  value={activeCategory}
                  onChange={(e) => setActiveCategory(e.target.value)}
                  className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                  ))}
                </select>
              </div>

              {/* Price Range Filter */}
              <div>
                <label className="block text-white font-medium mb-3">Price Range</label>
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {priceRanges.map((range) => (
                    <option key={range.id} value={range.id}>{range.name}</option>
                  ))}
                </select>
              </div>

              {/* Innovation Level Filter */}
              <div>
                <label className="block text-white font-medium mb-3">Innovation Level</label>
                <select
                  value={innovationLevel}
                  onChange={(e) => setInnovationLevel(e.target.value)}
                  className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {innovationLevels.map((level) => (
                    <option key={level.id} value={level.id}>{level.name}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Pricing Grid */}
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
                    <div className={`w-12 h-12 bg-gradient-to-r ${
                      service.innovationLevel === 'Breakthrough' 
                        ? 'from-purple-600 to-pink-600' 
                        : 'from-blue-600 to-cyan-600'
                    } rounded-xl flex items-center justify-center`}>
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex flex-col">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        service.innovationLevel === 'Breakthrough' 
                          ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                          : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                      }`}>
                        {service.innovationLevel}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium mt-1 ${
                        getPriceRange(service.price) === 'budget' ? 'bg-green-500/20 text-green-300 border border-green-500/30' :
                        getPriceRange(service.price) === 'mid' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' :
                        getPriceRange(service.price) === 'premium' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' :
                        'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                      }`}>
                        {priceRanges.find(r => r.id === getPriceRange(service.price))?.name}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-blue-300 text-sm font-medium">{service.tagline}</p>
                </div>
              </div>

              {/* Pricing Information */}
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg p-6 mb-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-white font-bold text-2xl mb-1">{service.price}</div>
                    <div className="text-gray-400 text-xs">Starting Price</div>
                  </div>
                  <div className="text-center">
                    <div className={`font-bold text-2xl mb-1 ${getROIColor(service.roi)}`}>{service.roi}</div>
                    <div className="text-gray-400 text-xs">Expected ROI</div>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <div className="text-gray-300 text-sm">
                    Market Price: <span className="text-white">{service.marketPrice}</span>
                  </div>
                </div>
              </div>

              {/* Key Benefits */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3 flex items-center">
                  <Star className="w-4 h-4 mr-2 text-yellow-400" />
                  Key Benefits
                </h4>
                <ul className="space-y-2">
                  {service.benefits.slice(0, 3).map((benefit, index) => (
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
                  {service.features.slice(0, 4).map((feature, index) => (
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
                  {service.useCases.slice(0, 3).map((useCase, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-purple-500/20 rounded-full text-xs text-purple-300 border border-purple-500/30"
                    >
                      {useCase}
                    </span>
                  ))}
                </div>
              </div>

              {/* ROI Calculator */}
              <div className="bg-white/5 rounded-lg p-4 mb-6">
                <h4 className="text-white font-semibold mb-3 flex items-center">
                  <Calculator className="w-4 h-4 mr-2 text-green-400" />
                  ROI Calculator
                </h4>
                <div className="text-sm text-gray-300">
                  <div className="flex justify-between mb-2">
                    <span>Monthly Investment:</span>
                    <span className="text-white">{service.price}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Expected ROI:</span>
                    <span className={`${getROIColor(service.roi)}`}>{service.roi}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Annual Value:</span>
                    <span className="text-white">
                      ${(parseInt(service.price.replace(/[^0-9]/g, '')) * 12).toLocaleString()}
                    </span>
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
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <a
                  href={`mailto:${service.contactInfo.email}?subject=Pricing Inquiry for ${service.name}`}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-3 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Get Quote
                </a>
                <a
                  href={`tel:${service.contactInfo.phone}`}
                  className="bg-white/10 text-white py-3 px-4 rounded-lg font-medium hover:bg-white/20 transition-all duration-200 flex items-center justify-center"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        {filteredServices.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
            <p className="text-gray-300 mb-6">Try adjusting your filters to see available services</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setPriceRange('all');
                setInnovationLevel('all');
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
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Contact us today for a personalized quote and consultation. Our team will help you find 
            the perfect solution for your business needs and budget.
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
              ✉️ Request Custom Quote
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

export default ComprehensivePricingGuide2031;
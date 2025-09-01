import type { NextPage } from 'next';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import {
  Brain,
  Cloud,
  Shield,
  Globe,
  Zap,
  Database,
  Smartphone,
  Code,
  Lock,
  TrendingUp,
  Rocket,
  Cpu,
  Network,
  Palette,
  BarChart3,
  Sparkles,
  Target,
  Users,
  CheckCircle,
  DollarSign,
  Heart,
  Building,
  Car,
  Factory,
  ShoppingCart,
  Gavel,
  Microscope,
  Satellite,
  Leaf,
  Search
} from 'lucide-react';
import { COMPREHENSIVE_INNOVATIVE_SERVICES_2031 } from '../src/data/comprehensiveInnovativeServices2031';

const ComprehensiveProducts2031: NextPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const productCategories = [
    { id: 'all', name: 'All Products', icon: Rocket, color: 'from-purple-600 to-pink-600' },
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

  // Filter products based on category and search
  const filteredProducts = COMPREHENSIVE_INNOVATIVE_SERVICES_2031.filter(product => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <Helmet>
        <title>Comprehensive Products 2031 - Zion Tech Group | Revolutionary AI, Quantum, & Tech Solutions</title>
        <meta name="description" content="Explore our revolutionary 2031 product portfolio featuring AI-powered solutions, quantum computing, cybersecurity, healthcare diagnostics, IoT edge computing, blockchain supply chain, and more cutting-edge technology." />
        <meta name="keywords" content="AI products 2031, quantum computing, cybersecurity, healthcare AI, IoT edge computing, blockchain supply chain, Zion Tech Group products" />
      </Helmet>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative container mx-auto px-4 py-24 text-center text-white">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Revolutionary Products 2031
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
              ✉️ Request Demo
            </a>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search our revolutionary products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-300 w-5 h-5" />
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {productCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg transform scale-105`
                    : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'
                }`}
              >
                <IconComponent className="w-5 h-5" />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              {/* Product Header */}
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
                <p className="text-blue-300 text-sm font-medium">{product.tagline}</p>
              </div>

              {/* Product Description */}
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                {product.description}
              </p>

              {/* Key Benefits */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3 flex items-center">
                  <Sparkles className="w-4 h-4 mr-2 text-yellow-400" />
                  Key Benefits
                </h4>
                <ul className="space-y-2">
                  {product.benefits.slice(0, 3).map((benefit, index) => (
                    <li key={index} className="text-sm text-gray-300 flex items-start">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-400 mt-0.5 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing and ROI */}
              <div className="bg-white/5 rounded-lg p-4 mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-bold text-xl">{product.price}</span>
                  <span className="text-green-400 text-sm font-medium">ROI: {product.roi}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-300">Market Price: {product.marketPrice}</span>
                  <span className="text-blue-300">Innovation: {product.innovationLevel}</span>
                </div>
              </div>

              {/* Features Preview */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3 flex items-center">
                  <Target className="w-4 h-4 mr-2 text-blue-400" />
                  Key Features
                </h4>
                <div className="flex flex-wrap gap-2">
                  {product.features.slice(0, 4).map((feature, index) => (
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
                  <Building className="w-4 h-4 mr-2 text-purple-400" />
                  Perfect For
                </h4>
                <div className="flex flex-wrap gap-2">
                  {product.useCases.slice(0, 3).map((useCase, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-purple-500/20 rounded-full text-xs text-purple-300 border border-purple-500/30"
                    >
                      {useCase}
                    </span>
                  ))}
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
                    <span className="mr-2">📞</span>
                    <a href={`tel:${product.contactInfo.phone}`} className="hover:text-blue-300 transition-colors">
                      {product.contactInfo.phone}
                    </a>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="mr-2">✉️</span>
                    <a href={`mailto:${product.contactInfo.email}`} className="hover:text-blue-300 transition-colors">
                      {product.contactInfo.email}
                    </a>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="mr-2">🌐</span>
                    <a href={product.contactInfo.website} className="hover:text-blue-300 transition-colors" target="_blank" rel="noopener noreferrer">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <a
                  href={`mailto:${product.contactInfo.email}?subject=Demo Request for ${product.name}`}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-3 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                >
                  Request Demo
                </a>
                <a
                  href={`tel:${product.contactInfo.phone}`}
                  className="bg-white/10 text-white py-3 px-4 rounded-lg font-medium hover:bg-white/20 transition-all duration-200"
                >
                  Call Now
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-2xl font-bold text-white mb-4">No products found</h3>
            <p className="text-gray-300 mb-6">Try adjusting your search or category filters</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchTerm('');
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              View All Products
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

export default ComprehensiveProducts2031;
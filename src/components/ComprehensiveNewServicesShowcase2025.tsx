import React, { useState } from 'react';
import { motion  } from 'framer-motion';
import { comprehensiveNewServices2025  } from '../data/comprehensiveNewServices2025';
import { Search,
  Filter,
  Star,
  TrendingUp,
  Users,
  Shield,
  Zap,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Globe,
  CheckCircle,
  DollarSign,
  Clock,
  Target,
  Award,
  Rocket,
  Brain,
  Atom,
  Lock,
  Heart,
  GraduationCap,
  BarChart3,
  Satellite,
  Cpu
 } from 'lucide-react';

export function ComprehensiveNewServicesShowcase2025(...args: any[]): any {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const categories = [
    { id: 'all', name: 'All Services', icon: Globe },
    { id: 'ai-services', name: 'AI Services', icon: Brain },
    { id: 'quantum-computing', name: 'Quantum Computing', icon: Atom },
    { id: 'blockchain-web3', name: 'Blockchain & Web3', icon: Lock },
    { id: 'biotech-ai', name: 'HealthTech & BioTech', icon: Heart },
    { id: 'fintech', name: 'FinTech', icon: DollarSign },
    { id: 'edutech', name: 'EduTech', icon: GraduationCap },
    { id: 'martech', name: 'MarTech', icon: BarChart3 },
    { id: 'space-tech', name: 'Space Tech', icon: Satellite },
    { id: 'emerging-tech', name: 'Emerging Tech', icon: Cpu }
  ];

  const filteredServices = comprehensiveNewServices2025
    .filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === 'featured') return b.featured ? 1 : -1;
      if (sortBy === 'price-low') return parseFloat(a.pricing.monthly.replace(/[^0-9]/g, '')) - parseFloat(b.pricing.monthly.replace(/[^0-9]/g, ''));
      if (sortBy === 'price-high') return parseFloat(b.pricing.monthly.replace(/[^0-9]/g, '')) - parseFloat(a.pricing.monthly.replace(/[^0-9]/g, ''));
      return 0;
    });

  const getCategoryIcon = (category: anystring)  => {
    const categoryData = categories.find(cat => cat.id === category);
    return categoryData ? categoryData.icon : Globe;
  };

  const getCategoryColor = (category: anystring)  => {
    const colors: { [key: string]: string } = {
      'ai-services': 'from-purple-500 to-pink-600',
      'quantum-computing': 'from-indigo-500 to-purple-600',
      'blockchain-web3': 'from-green-500 to-teal-600',
      'biotech-ai': 'from-red-500 to-pink-600',
      'fintech': 'from-orange-500 to-red-600',
      'edutech': 'from-blue-500 to-indigo-600',
      'martech': 'from-green-500 to-emerald-600',
      'space-tech': 'from-purple-500 to-indigo-600',
      'emerging-tech': 'from-teal-500 to-cyan-600'
    };
    return colors[category] || 'from-gray-500 to-gray-600';
  };

  return (
    <div className="min-h-screen py-8 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold text-white mb-6">
              Revolutionary New Services 2025
            </h1>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Discover our cutting-edge micro SAAS services, IT solutions, and AI-powered platforms. 
              Each service is designed to transform your business with innovative technology and proven ROI.
            </p>
          </motion.div>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            >
              <option value="featured">Featured First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md: anygrid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index)  => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 border border-gray-700 hover:border-cyan-500/30 group"
            >
              {/* Service Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 bg-gradient-to-r ${getCategoryColor(service.category)} rounded-lg flex items-center justify-center text-2xl`}>
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-400">{service.tagline}</p>
                  </div>
                </div>
                {service.featured && (
                  <div className="flex items-center space-x-1 text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-xs">Featured</span>
                  </div>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Pricing */}
              <div className="mb-4 p-3 bg-gray-700 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-white">{service.pricing.monthly}</span>
                    <span className="text-gray-400 text-sm ml-2">/month</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-400">Market Price</div>
                    <div className="text-sm text-cyan-400">{service.pricing.marketPrice}</div>
                  </div>
                </div>
                <div className="mt-2 text-xs text-gray-400">
                  Setup: {service.pricing.setup} • Enterprise: {service.pricing.enterprise}
                </div>
              </div>

              {/* Key Features */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Features:</h4>
                <div className="space-y-1">
                  {service.features.slice(0, 3).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2 text-xs text-gray-300">
                      <CheckCircle className="w-3 h-3 text-cyan-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                  {service.features.length > 3 && (
                    <div className="text-xs text-gray-500">
                      +{service.features.length - 3} more features
                    </div>
                  )}
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Benefits:</h4>
                <div className="space-y-1">
                  {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-2 text-xs text-gray-300">
                      <TrendingUp className="w-3 h-3 text-green-400 flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Specs */}
              <div className="mb-4 p-3 bg-gray-700 rounded-lg">
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-gray-400">ROI:</span>
                    <div className="text-green-400 font-medium">{service.roi}</div>
                  </div>
                  <div>
                    <span className="text-gray-400">Trial:</span>
                    <div className="text-cyan-400 font-medium">{service.trialDays} days</div>
                  </div>
                  <div>
                    <span className="text-gray-400">Setup:</span>
                    <div className="text-gray-300">{service.setupTime}</div>
                  </div>
                  <div>
                    <span className="text-gray-400">Market Size:</span>
                    <div className="text-gray-300">{service.marketSize}</div>
                  </div>
                </div>
              </div>

              {/* Target Audience */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-400 mb-2">Perfect For:</h4>
                <div className="text-xs text-gray-300 leading-relaxed">
                  {service.targetAudience}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-2">
                <a
                  href={service.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-200 group-hover:scale-105"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 inline ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                  className="block w-full text-center bg-transparent text-cyan-400 px-4 py-2 rounded-lg font-semibold border border-cyan-400 hover:bg-cyan-400 hover:text-white transition-all duration-200"
                >
                  Contact Sales
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Information Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-20 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-2xl p-12"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
              Our team of experts is ready to help you implement these cutting-edge solutions. 
              Get in touch today to start your transformation journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <p className="text-cyan-100">+1 302 464 0950</p>
              <p className="text-cyan-200 text-sm">Available 24/7</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <p className="text-cyan-100">kleber@ziontechgroup.com</p>
              <p className="text-cyan-200 text-sm">Response within 2 hours</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-cyan-100">364 E Main St STE 1008</p>
              <p className="text-cyan-200 text-sm">Middletown DE 19709</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href="https://ziontechgroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-cyan-600 rounded-lg hover:bg-gray-100 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Globe className="w-5 h-5" />
              <span>Visit Our Website</span>
            </a>
          </div>
        </motion.div>

        {/* Stats Section */}
        <div className="mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-2">15+</div>
              <div className="text-gray-400">New Services</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                  <Brain className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-2">10+</div>
              <div className="text-gray-400">AI-Powered</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-gray-400">Uptime</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                  <Zap className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-400">Support</div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComprehensiveNewServicesShowcase2025;
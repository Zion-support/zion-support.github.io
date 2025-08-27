import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  DollarSign, 
  TrendingUp, 
  Users, 
  Target, 
  CheckCircle,
  Star,
  Phone,
  Mail,
  MapPin,
  Globe,
  Filter,
  Search,
  ArrowRight,
  Zap,
  Brain,
  Leaf,
  Eye,
  Code,
  Building2,
  Cpu,
  Network,
  Waves,
  Factory,
  Rocket
} from 'lucide-react';
import { 
  comprehensivePricingGuide2027, 
  pricingCategories2027, 
  pricingSubcategories2027 
} from '../data/comprehensivePricingGuide2027';

const categoryIcons: { [key: string]: React.ComponentType<any> } = {
  'Metaverse Solutions': Eye,
  'Web3 Solutions': Code,
  'Sustainable Tech': Leaf,
  'NeuroTech Solutions': Brain,
  'Fusion Energy Solutions': Zap
};

const categoryColors: { [key: string]: string } = {
  'Metaverse Solutions': 'from-purple-500 to-pink-500',
  'Web3 Solutions': 'from-blue-500 to-cyan-500',
  'Sustainable Tech': 'from-green-500 to-emerald-500',
  'NeuroTech Solutions': 'from-indigo-500 to-purple-500',
  'Fusion Energy Solutions': 'from-orange-500 to-red-500'
};

export default function ComprehensivePricingGuide2027() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const filteredServices = comprehensivePricingGuide2027.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSubcategory = selectedSubcategory === 'All' || service.subcategory === selectedSubcategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSubcategory && matchesSearch;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">
                Comprehensive Pricing Guide 2027
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
              Explore detailed pricing, features, and market information for our cutting-edge innovative services
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-zion-cyan text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2"
              >
                <DollarSign className="w-5 h-5" />
                View Pricing
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="border-2 border-zion-cyan text-zion-cyan px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Contact Sales
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Contact Info Banner */}
      <div className="bg-zion-slate-dark/50 backdrop-blur-sm border-t border-b border-zion-cyan/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap items-center justify-center gap-8 text-zion-slate-light">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-zion-cyan" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-zion-cyan" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-zion-cyan" />
              <span>364 E Main St STE 1008 Middletown DE 19709</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-zion-cyan" />
              <a href="https://ziontechgroup.com" className="text-zion-cyan hover:text-zion-blue transition-colors">
                ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-zion-slate-dark/30 backdrop-blur-sm rounded-2xl p-6 border border-zion-cyan/20">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSelectedSubcategory('All');
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === 'All'
                    ? 'bg-zion-cyan text-white'
                    : 'bg-zion-slate-dark/50 text-zion-slate-light hover:bg-zion-slate-dark/70'
                }`}
              >
                All Categories
              </button>
              {pricingCategories2027.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setSelectedSubcategory('All');
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-zion-cyan text-white'
                      : 'bg-zion-slate-dark/50 text-zion-slate-light hover:bg-zion-slate-dark/70'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Subcategory Filter */}
            {selectedCategory !== 'All' && (
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedSubcategory('All')}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                    selectedSubcategory === 'All'
                      ? 'bg-zion-blue text-white'
                      : 'bg-zion-slate-dark/50 text-zion-slate-light hover:bg-zion-slate-dark/70'
                  }`}
                >
                  All
                </button>
                {pricingSubcategories2027[selectedCategory]?.map((subcategory) => (
                  <button
                    key={subcategory}
                    onClick={() => setSelectedSubcategory(subcategory)}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                      selectedSubcategory === subcategory
                        ? 'bg-zion-blue text-white'
                        : 'bg-zion-slate-dark/50 text-zion-slate-light hover:bg-zion-slate-dark/70'
                    }`}
                  >
                    {subcategory}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Services Pricing Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {filteredServices.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="bg-zion-slate-dark/30 backdrop-blur-sm rounded-2xl border border-zion-cyan/20 overflow-hidden"
            >
              {/* Service Header */}
              <div className="p-8 border-b border-zion-cyan/20">
                <div className="flex flex-col lg:flex-row gap-6 items-start">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${categoryColors[service.category]}`}>
                      {React.createElement(categoryIcons[service.category] || Code, { className: "w-8 h-8 text-white" })}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm font-medium text-zion-cyan">{service.category}</span>
                        <span className="text-zion-slate-light">•</span>
                        <span className="text-sm text-zion-slate-light">{service.subcategory}</span>
                      </div>
                      <h2 className="text-3xl font-bold text-white mb-2">{service.title}</h2>
                      <p className="text-zion-slate-light text-lg max-w-3xl">{service.description}</p>
                    </div>
                  </div>

                  {/* Market Info */}
                  <div className="lg:ml-auto">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="bg-zion-slate-dark/50 rounded-lg p-4">
                        <div className="text-zion-slate-light text-sm mb-1">Market Size</div>
                        <div className="text-white font-semibold">{service.marketInfo.marketSize}</div>
                      </div>
                      <div className="bg-zion-slate-dark/50 rounded-lg p-4">
                        <div className="text-zion-slate-light text-sm mb-1">Growth Rate</div>
                        <div className="text-white font-semibold">{service.marketInfo.growthRate}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pricing Tiers */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Pricing Plans</h3>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  {/* Starter Plan */}
                  <div className="bg-zion-slate-dark/50 rounded-xl p-6 border border-zion-cyan/20">
                    <div className="text-center mb-6">
                      <h4 className="text-xl font-bold text-white mb-2">Starter</h4>
                      <div className="text-3xl font-bold text-zion-cyan mb-1">{service.pricing.starter.price}</div>
                      <div className="text-zion-slate-light text-sm capitalize">{service.pricing.starter.billing}</div>
                    </div>
                    <div className="space-y-3 mb-6">
                      {service.pricing.starter.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-zion-slate-light">
                          <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="text-center">
                      <button className="w-full bg-zion-cyan text-white py-2 px-4 rounded-lg font-semibold hover:bg-zion-blue transition-colors">
                        Get Started
                      </button>
                    </div>
                  </div>

                  {/* Professional Plan */}
                  <div className="bg-zion-slate-dark/50 rounded-xl p-6 border-2 border-zion-cyan relative">
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-zion-cyan text-white px-3 py-1 rounded-full text-xs font-semibold">Popular</span>
                    </div>
                    <div className="text-center mb-6">
                      <h4 className="text-xl font-bold text-white mb-2">Professional</h4>
                      <div className="text-3xl font-bold text-zion-cyan mb-1">{service.pricing.professional.price}</div>
                      <div className="text-zion-slate-light text-sm capitalize">{service.pricing.professional.billing}</div>
                    </div>
                    <div className="space-y-3 mb-6">
                      {service.pricing.professional.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-zion-slate-light">
                          <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="text-center">
                      <button className="w-full bg-zion-cyan text-white py-2 px-4 rounded-lg font-semibold hover:bg-zion-blue transition-colors">
                        Get Started
                      </button>
                    </div>
                  </div>

                  {/* Enterprise Plan */}
                  <div className="bg-zion-slate-dark/50 rounded-xl p-6 border border-zion-cyan/20">
                    <div className="text-center mb-6">
                      <h4 className="text-xl font-bold text-white mb-2">Enterprise</h4>
                      <div className="text-3xl font-bold text-zion-cyan mb-1">{service.pricing.enterprise.price}</div>
                      <div className="text-zion-slate-light text-sm capitalize">{service.pricing.enterprise.billing}</div>
                    </div>
                    <div className="space-y-3 mb-6">
                      {service.pricing.enterprise.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-zion-slate-light">
                          <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="text-center">
                      <button className="w-full bg-zion-cyan text-white py-2 px-4 rounded-lg font-semibold hover:bg-zion-blue transition-colors">
                        Contact Sales
                      </button>
                    </div>
                  </div>

                  {/* Custom Plan */}
                  <div className="bg-zion-slate-dark/50 rounded-xl p-6 border border-zion-cyan/20">
                    <div className="text-center mb-6">
                      <h4 className="text-xl font-bold text-white mb-2">Custom</h4>
                      <div className="text-zion-cyan font-semibold mb-1">Custom Pricing</div>
                      <div className="text-zion-slate-light text-sm">Tailored Solution</div>
                    </div>
                    <div className="space-y-3 mb-6">
                      {service.pricing.custom.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-zion-slate-light">
                          <Star className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="text-center">
                      <button className="w-full bg-zion-cyan text-white py-2 px-4 rounded-lg font-semibold hover:bg-zion-blue transition-colors">
                        Get Quote
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="p-8 bg-zion-slate-dark/20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Features */}
                  <div>
                    <h4 className="text-lg font-bold text-white mb-4">Core Features</h4>
                    <div className="space-y-2">
                      {service.features.core.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-zion-slate-light">
                          <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h4 className="text-lg font-bold text-white mb-4">Key Benefits</h4>
                    <div className="space-y-2">
                      {service.benefits.slice(0, 4).map((benefit, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-zion-slate-light">
                          <TrendingUp className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Market Info */}
                  <div>
                    <h4 className="text-lg font-bold text-white mb-4">Market Information</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-zion-slate-light text-sm">Average Market Price:</span>
                        <span className="text-white font-medium">{service.marketInfo.averageMarketPrice}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zion-slate-light text-sm">Expected ROI:</span>
                        <span className="text-white font-medium">{service.marketInfo.roi}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zion-slate-light text-sm">Setup Time:</span>
                        <span className="text-white font-medium">{service.marketInfo.setupTime}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Section */}
                <div className="mt-8 text-center">
                  <div className="bg-zion-slate-dark/50 rounded-xl p-6 border border-zion-cyan/20">
                    <h4 className="text-xl font-bold text-white mb-2">Ready to Get Started?</h4>
                    <p className="text-zion-slate-light mb-4">
                      Contact our sales team to discuss your requirements and get a personalized quote
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                      <a
                        href="tel:+13024640950"
                        className="bg-zion-cyan text-white px-6 py-3 rounded-lg font-semibold hover:bg-zion-blue transition-colors flex items-center gap-2"
                      >
                        <Phone className="w-4 h-4" />
                        Call Sales
                      </a>
                      <a
                        href="mailto:kleber@ziontechgroup.com"
                        className="border-2 border-zion-cyan text-zion-cyan px-6 py-3 rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-colors flex items-center gap-2"
                      >
                        <Mail className="w-4 h-4" />
                        Email Sales
                      </a>
                      <a
                        href="https://ziontechgroup.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-2 border-zion-cyan text-zion-cyan px-6 py-3 rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-colors flex items-center gap-2"
                      >
                        <Globe className="w-4 h-4" />
                        Visit Website
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
            <p className="text-zion-slate-light">
              Try adjusting your search terms or category filters
            </p>
          </div>
        )}
      </div>

      {/* Contact CTA Section */}
      <div className="bg-gradient-to-r from-zion-slate-dark to-zion-slate border-t border-zion-cyan/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Need Custom Pricing or Have Questions?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Our sales team is ready to help you find the perfect solution for your business needs. Get in touch for personalized pricing and expert guidance.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <motion.a
                href="tel:+13024640950"
                whileHover={{ scale: 1.05 }}
                className="bg-zion-cyan text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Sales Team
              </motion.a>
              <motion.a
                href="mailto:kleber@ziontechgroup.com"
                whileHover={{ scale: 1.05 }}
                className="border-2 border-zion-cyan text-zion-cyan px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Email Sales
              </motion.a>
              <motion.a
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="border-2 border-zion-cyan text-zion-cyan px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2"
              >
                <Globe className="w-5 h-5" />
                Visit Website
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
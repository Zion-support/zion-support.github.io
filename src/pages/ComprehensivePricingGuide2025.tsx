import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  CheckCircle,
  Star,
  TrendingUp,
  DollarSign,
  Clock,
  Users,
  Shield,
  Zap,
  ArrowRight,
  Search,
  Filter,
  Calculator,
  BarChart3,
  Target,
  Award,
  Globe,
  Building,
  Smartphone,
  MessageCircle,
  ExternalLink
} from 'lucide-react';
import { innovativeZionServices2025 } from '../data/innovative-zion-services-2025';

export default function ComprehensivePricingGuide2025() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories', count: innovativeZionServices2025.length },
    { id: 'legaltech', name: 'Legal Tech', count: innovativeZionServices2025.filter(s => s.category === 'legaltech').length },
    { id: 'realestate-tech', name: 'Real Estate Tech', count: innovativeZionServices2025.filter(s => s.category === 'realestate-tech').length },
    { id: 'logistics-tech', name: 'Logistics Tech', count: innovativeZionServices2025.filter(s => s.category === 'logistics-tech').length },
    { id: 'energy-tech', name: 'Energy Tech', count: innovativeZionServices2025.filter(s => s.category === 'energy-tech').length },
    { id: 'agriculture-tech', name: 'Agriculture Tech', count: innovativeZionServices2025.filter(s => s.category === 'agriculture-tech').length },
    { id: 'quantum-computing', name: 'Quantum Computing', count: innovativeZionServices2025.filter(s => s.category === 'quantum-computing').length },
    { id: 'space-tech', name: 'Space Tech', count: innovativeZionServices2025.filter(s => s.category === 'space-tech').length },
    { id: 'fintech', name: 'FinTech', count: innovativeZionServices2025.filter(s => s.category === 'fintech').length },
    { id: 'healthtech', name: 'Health Tech', count: innovativeZionServices2025.filter(s => s.category === 'healthtech').length },
    { id: 'edtech', name: 'EdTech', count: innovativeZionServices2025.filter(s => s.category === 'edtech').length }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All pricing tiers' },
    { id: 'budget', name: 'Budget ($49-$299)', range: '$49 - $299/month' },
    { id: 'mid-range', name: 'Mid-Range ($300-$999)', range: '$300 - $999/month' },
    { id: 'enterprise', name: 'Enterprise ($1,000+)', range: '$1,000+/month' }
  ];

  const filteredServices = innovativeZionServices2025.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    
    const matchesPrice = (() => {
      const monthlyPrice = parseInt(service.pricing.monthly.replace(/[^0-9]/g, ''));
      switch (priceRange) {
        case 'budget': return monthlyPrice <= 299;
        case 'mid-range': return monthlyPrice >= 300 && monthlyPrice <= 999;
        case 'enterprise': return monthlyPrice >= 1000;
        default: return true;
      }
    })();
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const getPriceRange = (priceString: string) => {
    const price = parseInt(priceString.replace(/[^0-9]/g, ''));
    if (price <= 299) return 'budget';
    if (price <= 999) return 'mid-range';
    return 'enterprise';
  };

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue via-zion-slate to-zion-cyan">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Comprehensive Pricing Guide
              <span className="block text-zion-cyan">2025 Edition</span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
              Transparent pricing for all our innovative services. Compare market rates, 
              understand ROI, and find the perfect solution for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={`mailto:${contactInfo.email}?subject=Pricing Inquiry&body=Hi, I'm interested in learning more about your pricing options. Please provide detailed information about your services and pricing plans.`}
                className="inline-flex items-center px-8 py-4 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-dark transition-colors duration-200"
              >
                Get Custom Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 bg-white text-zion-blue font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Call for Pricing
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Overview Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/20"
            >
              <DollarSign className="h-12 w-12 text-zion-cyan mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">
                ${Math.min(...innovativeZionServices2025.map(s => parseInt(s.pricing.monthly.replace(/[^0-9]/g, ''))))}
              </div>
              <div className="text-zion-slate-light">Starting Price</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/20"
            >
              <TrendingUp className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">25%</div>
              <div className="text-zion-slate-light">Average Savings vs Market</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/20"
            >
              <Clock className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">14</div>
              <div className="text-zion-slate-light">Days Average Trial</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/20"
            >
              <Users className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">{innovativeZionServices2025.length}</div>
              <div className="text-zion-slate-light">Services Available</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range Filter */}
              <div>
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                >
                  {priceRanges.map((range) => (
                    <option key={range.id} value={range.id}>
                      {range.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Pricing Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {filteredServices.length === 0 ? (
            <div className="text-center py-20">
              <Search className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No services found</h3>
              <p className="text-zion-slate-light">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300"
                >
                  {/* Service Header */}
                  <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-4xl">{service.icon}</span>
                      <div className="text-right">
                        <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                          {service.innovationLevel}
                        </span>
                        <div className="text-xs mt-1 opacity-80">
                          {getPriceRange(service.pricing.monthly).toUpperCase()}
                        </div>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                    <p className="text-white/90 text-sm">{service.tagline}</p>
                  </div>

                  {/* Pricing Details */}
                  <div className="p-6">
                    {/* Pricing Tiers */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3">Pricing Plans:</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <div>
                            <div className="font-medium text-gray-800">Monthly</div>
                            <div className="text-sm text-gray-500">Billed monthly</div>
                          </div>
                          <div className="text-right">
                            <div className="text-xl font-bold text-zion-blue">{service.pricing.monthly}</div>
                            <div className="text-sm text-gray-500">No setup fee</div>
                          </div>
                        </div>
                        
                        <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg border border-green-200">
                          <div>
                            <div className="font-medium text-gray-800">Yearly</div>
                            <div className="text-sm text-green-600">Save 17%</div>
                          </div>
                          <div className="text-right">
                            <div className="text-xl font-bold text-green-600">{service.pricing.yearly}</div>
                            <div className="text-sm text-gray-500">Billed annually</div>
                          </div>
                        </div>
                        
                        <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg border border-purple-200">
                          <div>
                            <div className="font-medium text-gray-800">Enterprise</div>
                            <div className="text-sm text-purple-600">Custom solution</div>
                          </div>
                          <div className="text-right">
                            <div className="text-xl font-bold text-purple-600">{service.pricing.enterprise}</div>
                            <div className="text-sm text-gray-500">Contact sales</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Setup and Market Comparison */}
                    <div className="mb-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-3 bg-blue-50 rounded-lg">
                          <div className="text-sm text-gray-600 mb-1">Setup Fee</div>
                          <div className="text-lg font-bold text-blue-600">{service.pricing.setup}</div>
                        </div>
                        <div className="text-center p-3 bg-orange-50 rounded-lg">
                          <div className="text-sm text-gray-600 mb-1">Market Price</div>
                          <div className="text-lg font-bold text-orange-600">{service.pricing.marketPrice}</div>
                        </div>
                      </div>
                    </div>

                    {/* Key Benefits */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3">Key Benefits:</h4>
                      <ul className="space-y-2">
                        {service.benefits.slice(0, 3).map((benefit, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* ROI and Trial */}
                    <div className="mb-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-3 bg-green-50 rounded-lg">
                          <div className="text-sm text-gray-600 mb-1">ROI Promise</div>
                          <div className="text-sm font-medium text-green-600 line-clamp-2">{service.roi}</div>
                        </div>
                        <div className="text-center p-3 bg-blue-50 rounded-lg">
                          <div className="text-sm text-gray-600 mb-1">Free Trial</div>
                          <div className="text-lg font-bold text-blue-600">{service.trialDays} days</div>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3">
                      <Link
                        to={service.link}
                        className="w-full bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold py-3 px-4 rounded-lg hover:from-zion-cyan-dark hover:to-zion-blue-dark transition-all duration-200 text-center block"
                      >
                        View Details
                      </Link>
                      <a
                        href={`mailto:${service.contactInfo.email}?subject=Pricing Inquiry for ${service.name}&body=Hi, I'm interested in learning more about your ${service.name} service. Please provide detailed pricing information and answer the following questions:%0D%0A%0D%0A1. What's included in each pricing tier?%0D%0A2. Are there any additional fees?%0D%0A3. What's the implementation timeline?%0D%0A4. Do you offer custom pricing for enterprise?%0D%0A%0D%0AThank you!`}
                        className="w-full bg-white border-2 border-zion-cyan text-zion-cyan font-semibold py-3 px-4 rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-200 text-center block"
                      >
                        Get Custom Quote
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Pricing Comparison Table */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-zion-blue mb-6">
              Pricing Comparison & ROI Analysis
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compare our pricing with market rates and understand the return on investment for each service
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-zion-slate text-white">
                  <th className="p-4 text-left">Service</th>
                  <th className="p-4 text-center">Our Price</th>
                  <th className="p-4 text-center">Market Price</th>
                  <th className="p-4 text-center">Savings</th>
                  <th className="p-4 text-center">ROI</th>
                  <th className="p-4 text-center">Trial</th>
                  <th className="p-4 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {innovativeZionServices2025.slice(0, 10).map((service, index) => (
                  <tr key={service.id} className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                    <td className="p-4">
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">{service.icon}</span>
                        <div>
                          <div className="font-semibold text-gray-800">{service.name}</div>
                          <div className="text-sm text-gray-500">{service.category}</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <div className="font-bold text-zion-blue">{service.pricing.monthly}</div>
                      <div className="text-sm text-gray-500">{service.pricing.yearly}</div>
                    </td>
                    <td className="p-4 text-center">
                      <div className="text-gray-600">{service.pricing.marketPrice}</div>
                    </td>
                    <td className="p-4 text-center">
                      <div className="text-green-600 font-semibold">25%</div>
                      <div className="text-sm text-gray-500">Average</div>
                    </td>
                    <td className="p-4 text-center">
                      <div className="text-sm text-gray-600 line-clamp-2">{service.roi}</div>
                    </td>
                    <td className="p-4 text-center">
                      <div className="text-blue-600 font-semibold">{service.trialDays} days</div>
                    </td>
                    <td className="p-4 text-center">
                      <a
                        href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.name}`}
                        className="inline-flex items-center px-4 py-2 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan-dark transition-colors text-sm"
                      >
                        Get Quote
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-zion-slate to-zion-blue">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Need Custom Pricing?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Our team is ready to create a custom solution that fits your budget and requirements. 
              Get in touch for personalized pricing and implementation plans.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="bg-zion-cyan rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                <a
                  href={`mailto:${contactInfo.email}?subject=Custom Pricing Inquiry&body=Hi, I'm interested in custom pricing for your services. Please provide information about custom solutions and enterprise pricing options.`}
                  className="text-zion-cyan-light hover:text-white transition-colors"
                >
                  {contactInfo.email}
                </a>
              </div>
              
              <div className="text-center">
                <div className="bg-zion-cyan rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                <a
                  href={`tel:${contactInfo.mobile}`}
                  className="text-zion-cyan-light hover:text-white transition-colors"
                >
                  {contactInfo.mobile}
                </a>
              </div>
              
              <div className="text-center">
                <div className="bg-zion-cyan rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Building className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-zion-cyan-light">
                  {contactInfo.address}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${contactInfo.email}?subject=Custom Pricing Consultation&body=Hi, I'd like to schedule a consultation to discuss custom pricing options for your services. Please let me know available times and what information I should prepare.`}
                className="inline-flex items-center px-8 py-4 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-dark transition-colors duration-200"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href={contactInfo.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-white text-zion-blue font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Visit Our Website
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
import React, { useState } from 'react';
=======
import { advancedInnovativeServicesExpansionV3 } from '../data/2025-advanced-innovative-services-expansion-v3';
import { specializedEnterpriseSolutions2025 } from '../data/2025-specialized-enterprise-solutions';
const ComprehensivePricing2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const allServices = [
    ...advancedInnovativeServicesExpansionV3,
    ...specializedEnterpriseSolutions2025
  ];
  const categories = [
    { id: 'all', name: 'All Services', count: allServices.length },
    { id: 'AI & Machine Learning', name: 'AI & Machine Learning', count: allServices.filter(s => s.category.includes('AI') || s.category.includes('Machine')).length },
    { id: 'Cybersecurity', name: 'Cybersecurity', count: allServices.filter(s => s.category.includes('Cybersecurity') || s.category.includes('Security')).length },
    { id: 'Cloud & DevOps', name: 'Cloud & DevOps', count: allServices.filter(s => s.category.includes('Cloud') || s.category.includes('DevOps')).length },
    { id: 'Blockchain & Web3', name: 'Blockchain & Web3', count: allServices.filter(s => s.category.includes('Blockchain') || s.category.includes('Web3')).length },
    { id: 'IoT & Edge Computing', name: 'IoT & Edge Computing', count: allServices.filter(s => s.category.includes('IoT') || s.category.includes('Edge')).length },
    { id: 'Digital Twin & Simulation', name: 'Digital Twin & Simulation', count: allServices.filter(s => s.category.includes('Digital Twin') || s.category.includes('Simulation')).length },
    { id: 'Testing & Quality Assurance', name: 'Testing & Quality Assurance', count: allServices.filter(s => s.category.includes('Testing') || s.category.includes('Quality')).length },
    { id: 'Compliance & Privacy', name: 'Compliance & Privacy', count: allServices.filter(s => s.category.includes('Compliance') || s.category.includes('Privacy')).length },
    { id: 'Fintech & Digital Banking', name: 'Fintech & Digital Banking', count: allServices.filter(s => s.category.includes('Fintech') || s.category.includes('Banking')).length },
    { id: 'Healthcare & Biotech', name: 'Healthcare & Biotech', count: allServices.filter(s => s.category.includes('Healthcare') || s.category.includes('Biotech')).length },
    { id: 'Space Technology', name: 'Space Technology', count: allServices.filter(s => s.category.includes('Space') || s.category.includes('Satellite')).length },
    { id: 'Automotive & Transportation', name: 'Automotive & Transportation', count: allServices.filter(s => s.category.includes('Automotive') || s.category.includes('Transportation')).length },
    { id: 'Energy & Sustainability', name: 'Energy & Sustainability', count: allServices.filter(s => s.category.includes('Energy') || s.category.includes('Sustainability')).length },
    { id: 'Manufacturing & Industrial', name: 'Manufacturing & Industrial', count: allServices.filter(s => s.category.includes('Manufacturing') || s.category.includes('Industrial')).length }
  ];
  const filteredServices = allServices.filter(service => {
    if (selectedCategory === 'all') return true;
    return service.category.includes(selectedCategory) || 
           service.category.includes(selectedCategory.split(' ')[0]) ||
           service.category.includes(selectedCategory.split(' ')[1]);
  });
  const getDiscountedPrice = (price: string, discount: string) => {
    const numericPrice = parseInt(price.replace(/[^0-9]/g, ''));
    const discountPercent = parseInt(discount.replace(/[^0-9]/g, ''));
    const discountedPrice = numericPrice * (1 - discountPercent / 100);
    return `$${Math.round(discountedPrice).toLocaleString()}`;
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Comprehensive
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              {" "}Pricing 2025
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Transparent pricing for our cutting-edge micro SAAS solutions, IT services, and AI-powered innovations. Choose the plan that best fits your business needs and budget.
          </p>
          {/* Billing Cycle Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>Monthly</span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                billingCycle === 'annual' ? 'bg-blue-600' : 'bg-gray-600'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  billingCycle === 'annual' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-lg ${billingCycle === 'annual' ? 'text-white' : 'text-gray-400'}`}>
              Annual <span className="text-green-400 text-sm">(Save up to 40%)</span>
            </span>
          </div>
          {/* Key Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-blue-400 mb-2">{allServices.length}+</div>
              <div className="text-sm text-gray-300">Innovative Services</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-cyan-400 mb-2">15</div>
              <div className="text-sm text-gray-300">Technology Categories</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-green-400 mb-2">40%</div>
              <div className="text-sm text-gray-300">Annual Discount</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-purple-400 mb-2">30</div>
              <div className="text-sm text-gray-300">Day Free Trial</div>
            </div>
          </div>
        </div>
      </section>
      {/* Category Filter */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                    : 'bg-white/10 backdrop-blur-lg border border-white/20 text-gray-300 hover:bg-white/20'
                }`}
=======
              >
                <Download className="w-5 h-5" />
                Download Pricing Guide
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 hover:bg-blue-400 hover:text-white transition-all duration-300"
              >
                <Play className="w-5 h-5" />
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Contact Information Banner */}
      <div className="bg-gradient-to-r from-green-800 to-blue-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-white">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <Phone className="w-5 h-5 text-green-300" />
              <span className="font-semibold">+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <Mail className="w-5 h-5 text-green-300" />
              <span className="font-semibold">kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-5 h-5 text-green-300" />
              <span className="font-semibold">364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <Search className="absolute right-3 top-3 w-5 h-5 text-white/60" />
              </div>
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              {categories.map(category => (
                <option key={category} value={category} className="bg-slate-800 text-white">
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
            <select
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              className="px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              {industries.map(industry => (
                <option key={industry} value={industry} className="bg-slate-800 text-white">
                  {industry === 'all' ? 'All Industries' : industry}
                </option>
              ))}
            </select>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              <option value="price" className="bg-slate-800 text-white">Price: Low to High</option>
              <option value="price-desc" className="bg-slate-800 text-white">Price: High to Low</option>
              <option value="roi" className="bg-slate-800 text-white">ROI: High to Low</option>
              <option value="delivery" className="bg-slate-800 text-white">Delivery: Fast to Slow</option>
            </select>
          </div>
        </div>
=======
      {/* Pricing Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div
                key={service.id}
                className={`bg-white/10 backdrop-blur-lg rounded-xl p-6 border transition-all duration-300 hover:transform hover:scale-105 ${
                  service.popular 
                    ? 'border-purple-500/50 bg-gradient-to-br from-purple-600/20 to-pink-600/20' 
                    : 'border-white/20 hover:border-white/40'
                }`}
              >
                {service.popular && (
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.name}</h3>
                <p className="text-gray-300 mb-4 line-clamp-2">{service.description}</p>
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-blue-600/20 text-blue-400 text-sm rounded-full border border-blue-600/30">
                    {service.category}
                  </span>
                </div>
                <div className="mb-6">
                  <div className="text-3xl font-bold text-green-400 mb-2">
                    {billingCycle === 'annual' && service.annualDiscount 
                      ? getDiscountedPrice(service.price, service.annualDiscount)
                      : service.price
                    }
=======
                  </div>
                  <div className="text-gray-400 mb-2">{service.period}</div>
                  {billingCycle === 'annual' && service.annualDiscount && (
                    <div className="text-sm text-green-400">
                      {service.annualDiscount} off annual billing
                    </div>
                  )}
                </div>
=======
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-center">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-sm text-gray-400 flex items-center">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
                        +{service.features.length - 4} more features
                      </li>
=======
                    )}
                  </ul>
                </div>
                <div className="mb-6">
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                    <span>Setup Fee:</span>
                    <span className="text-white">{service.setupFee || 'Included'}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                    <span>Free Trial:</span>
                    <span className="text-white">{service.trialDays} days</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>Setup Time:</span>
                    <span className="text-white">{service.setupTime}</span>
                  </div>
                </div>
=======
                <div className="space-y-3">
                  <a
                    href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.name}`}
                    className="block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                  >
                    Get Started
                  </a>
                  <a
                    href={`tel:${service.contactInfo.mobile}`}
                    className="block w-full text-center px-6 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
                  >
                    Call for Demo
                  </a>
                </div>
                <div className="mt-6 pt-6 border-t border-white/20">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Rating:</span>
                    <div className="flex items-center space-x-1">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'fill-current' : 'fill-gray-600'}`} viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                          </svg>
                        ))}
                      </div>
                      <span className="text-gray-400">({service.reviews})</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Enterprise Solutions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Enterprise Solutions
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Custom enterprise deployments with dedicated support, custom integrations, and tailored solutions for large organizations
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-semibold text-white mb-3">Custom Development</h3>
              <p className="text-gray-300 mb-4">
                Tailored solutions built specifically for your business requirements and workflows
              </p>
              <div className="text-green-400 font-semibold">Custom Pricing</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold text-white mb-3">Integration Services</h3>
              <p className="text-gray-300 mb-4">
                Seamless integration with your existing systems and third-party applications
              </p>
              <div className="text-green-400 font-semibold">From $5,000</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-semibold text-white mb-3">Dedicated Support</h3>
              <p className="text-gray-300 mb-4">
                24/7 dedicated support team and account management for enterprise clients
              </p>
              <div className="text-green-400 font-semibold">From $2,000/month</div>
            </div>
          </div>
        </div>
      </section>
=======
        {/* Call to Action */}
        {sortedServices.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
            <p className="text-blue-200 mb-6">Try adjusting your search criteria or browse all our services.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedIndustry('all');
              }}
              className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300"
            >
              View All Services
            </button>
          </motion.div>
        )}
      </div>
      {/* Bottom CTA Section */}
      <div className="bg-gradient-to-r from-green-800 to-blue-800 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our services can help transform your business and drive competitive advantage
=======
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our services can help transform your business and drive competitive advantage
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
              <div className="text-2xl mb-2">📧</div>
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <p className="text-gray-300 text-sm mb-3">Get detailed information and custom quotes</p>
              <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
              <div className="text-2xl mb-2">📞</div>
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <p className="text-gray-300 text-sm mb-3">Speak directly with our experts</p>
              <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300">
                +1 302 464 0950
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
              <div className="text-2xl mb-2">📍</div>
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-gray-300 text-sm mb-3">Schedule an in-person meeting</p>
              <p className="text-blue-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:kleber@ziontechgroup.com?subject=Pricing Inquiry 2025"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
=======
            <a
              href="mailto:kleber@ziontechgroup.com?subject=Pricing Inquiry 2025"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              <Phone className="w-5 h-5 inline mr-2" />
              Call +1 302 464 0950
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-900 transition-all duration-300"
            >
              Schedule Consultation
            </a>
=======
              Schedule Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ComprehensivePricing2025;
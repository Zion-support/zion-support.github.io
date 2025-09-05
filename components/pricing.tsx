import React, {_useState} from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {_Check, _Star, _Users, _TrendingUp, _DollarSign, _Clock, _Shield, _Zap, _Rocket, _Brain, _Atom, _Globe, _Target, _ArrowRight, _Phone, _Mail, _MapPin, _ExternalLink} from 'lucide-react';
import UltraFuturisticBackground2029 from '../components/backgrounds/UltraFuturisticBackground2029';
import UltraFuturisticNavigation2029 from '../components/layout/UltraFuturisticNavigation2029';
import UltraFuturisticFooter2029 from '../components/layout/UltraFuturisticFooter2029';

// Import all service data

export default function PricingPage() {_const [selectedCategory, _setSelectedCategory] = useState('All');
  const [selectedPriceRange, _setSelectedPriceRange] = useState('All');

  // Combine all services
  const _allServices = [
    ...enhancedRealMicroSaasServices, _...innovativeAIServices2029, _...quantumSpaceInnovations2029, _...enterpriseITInnovations2029, _...innovativeMicroSaas2029
  ];

  // Get unique services by ID
  const _uniqueServices = allServices.filter(_(service, _index, _self) => 
    index === self.findIndex(s => s.id === service.id)
  );

  // Get all categories
  const _categories = ['All', _...Array.from(new Set(uniqueServices.map(s => 
    Array.isArray(s.category) ? s.category[0] : s.category
  )))];

  // Price ranges
  const _priceRanges = [
    { id: 'All', _name: 'All Prices', _range: 'All'},
    {_id: 'Under $1K', _name: 'Under $1K/month', _range: 'Under $1K'},
    {_id: '$1K - $5K', _name: '$1K - $5K/month', _range: '$1K - $5K'},
    {_id: '$5K - $20K', _name: '$5K - $20K/month', _range: '$5K - $20K'},
    {_id: '$20K+', _name: '$20K+/month', _range: '$20K+'}
  ];

  // Filter services
  const _filteredServices = uniqueServices.filter(service => {_const _matchesCategory = selectedCategory === 'All' || 
                           (Array.isArray(service.category) ? 
                             service.category.includes(selectedCategory) : 
                             service.category === selectedCategory);
    
    const _price = parseFloat(service.price.replace(/[^0-9.]/g, _''));
    const _matchesPrice = selectedPriceRange === 'All' ||
                        (selectedPriceRange === 'Under $1K' && price < 1000) ||
                        (selectedPriceRange === '$1K - $5K' && price >= 1000 && price < 5000) ||
                        (selectedPriceRange === '$5K - $20K' && price >= 5000 && price < 20000) ||
                        (selectedPriceRange === '$20K+' && price >= 20000);
    
    return matchesCategory && matchesPrice;});

  const _contactInfo = {_mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'};

  // Group services by category for better organization
  const _servicesByCategory = filteredServices.reduce(_(acc, _service) => {_const _category = Array.isArray(service.category) ? service.category[0] : service.category;
    if (!acc[category]) {
      acc[category] = [];}
    acc[category].push(service);
    return acc;
  }, {} as Record<string, typeof filteredServices>);

  const _faqs = [
    {_question: 'Can I change my plan at any time?', _answer: 'Yes, _you can upgrade or downgrade your plan at any time. Changes take effect immediately and are prorated.'},
    {_question: 'Is there a free trial available?', _answer: 'Yes, _all our services offer a 14-day free trial with full access to all features. No credit card required.'},
    {_question: 'What payment methods do you accept?', _answer: 'We accept all major credit cards, _PayPal, _and bank transfers for annual plans. Enterprise customers can be invoiced.'},
    {_question: 'Do you offer volume discounts?', _answer: 'Yes, _we offer volume discounts for teams and organizations. Contact our sales team for custom pricing.'},
    {_question: 'Can I cancel my subscription?', _answer: 'Yes, _you can cancel your subscription at any time. You\'ll continue to have access until the end of your billing period.'},
    {_question: 'Is there a setup fee?', _answer: 'No setup fees for any of our plans. You can start using our services immediately after signing up.'}
  ];

  const _categories = [
    'All',
    'Content & Marketing',
    'Development & DevOps',
    'Sales & CRM',
    'Legal & Compliance',
    'Human Resources',
    'Analytics & Data',
    'Finance & Accounting',
    'Project Management',
    'Customer Experience',
    'Security & Compliance'
  ];

  const _filteredServices = selectedCategory === 'All' 
    ? microSaasServices 
    : microSaasServices.filter(service => service.category === selectedCategory);

  const _yearlyDiscount = 0.2; // 20% discount for yearly billing

  return (_<UltraFuturisticBackground2029>
      <Head>
        <title>Revolutionary 2029 Technology Pricing | Zion Tech Group</title>
        <meta name="description" content="Explore comprehensive pricing for our revolutionary 2029 technology services including AI consciousness, _quantum computing, _space mining, _and advanced biotechnology." />
        <meta name="keywords" content="technology pricing, _AI services pricing, _quantum computing pricing, _space technology pricing, _2029 technology pricing" />
        <meta name="viewport" content="width=device-width, _initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com/pricing" />
      </Head>

      <UltraFuturisticNavigation2029 />

      <main className="relative z-10 pt-20">
        {_/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={_{ opacity: 0, _y: 20}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Revolutionary 2029
              </span>
              <br />
              <span className="text-white">Technology Pricing</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Transparent pricing for our cutting-edge technology services that are already operational and delivering transformative results
            </p>
            
            {_/* Filter Controls */}
            <div className="flex flex-col lg:flex-row gap-4 justify-center items-center mb-8">
              <select
                value={_selectedCategory}
                onChange={_(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-gray-900/50 border border-cyan-500/20 rounded-xl text-white focus:outline-none focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-500/20"
              >
                {_categories.map(category => (
                  <option key={category} value={_category}>{_category}</option>
                ))}
              </select>
              
              <select
                value={_selectedPriceRange}
                onChange={_(_e) => setSelectedPriceRange(e.target.value)}
                className="px-4 py-3 bg-gray-900/50 border border-cyan-500/20 rounded-xl text-white focus:outline-none focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-500/20"
              >
                {_priceRanges.map(range => (
                  <option key={range.id} value={_range.id}>{_range.name}</option>
                ))}
              </select>
            </div>

            <div className="text-center text-gray-400">
              <p>Showing {_filteredServices.length} services in {_Object.keys(servicesByCategory).length} categories</p>
            </div>
          </motion.div>
        </section>

        {_/* Pricing Categories */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {_Object.entries(servicesByCategory).map(_([category, _services], _categoryIndex) => (
              <motion.div
                key={category}
                initial={_{ opacity: 0, _y: 30}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.8, _delay: categoryIndex * 0.2}}
                viewport={_{ once: true}}
                className="mb-20"
              >
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {_category} Services
                  </h2>
                  <p className="text-gray-400 text-lg">
                    {_services.length} revolutionary {_category.toLowerCase()} solutions
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {_services.map(_(service, _serviceIndex) => (
                    <motion.div
                      key={service.id}
                      initial={_{ opacity: 0, _y: 20}}
                      whileInView={_{ opacity: 1, _y: 0}}
                      transition={_{ duration: 0.6, _delay: serviceIndex * 0.1}}
                      viewport={_{ once: true}}
                      className="group cursor-pointer"
                    >
                      <div className={_`p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 backdrop-blur-sm hover:transform hover:scale-105 ${service.popular ? 'ring-2 ring-yellow-400/50' : ''}`}>
                        {_/* Popular Badge */}
                        {_service.popular && (
                          <div className="flex items-center justify-center mb-4">
                            <div className="px-3 py-1 bg-yellow-400/20 border border-yellow-400/30 rounded-full">
                              <span className="text-sm text-yellow-400 font-medium flex items-center">
                                <Star className="w-4 h-4 mr-1 fill-current" />
                                Most Popular
                              </span>
                            </div>
                          </div>
                        )}

                        {_/* Service Icon */}
                        <div className={_`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                          <span className="text-2xl">{_service.icon}</span>
                        </div>

                        {_/* Service Title and Tagline */}
                        <h3 className="text-xl font-semibold text-white mb-2">{_service.name}</h3>
                        <p className="text-sm text-cyan-400 mb-4">{_service.tagline}</p>
                        
                        {_/* Price */}
                        <div className="mb-6">
                          <div className="flex items-baseline">
                            <span className={_`${service.textColor} font-bold text-3xl`}>
                              {_service.price}
                            </span>
                            <span className="text-gray-400 text-lg ml-2">{_service.period}</span>
                          </div>
                          {_service.setupTime && (
                            <p className="text-sm text-gray-500 mt-1">Setup: {service.setupTime}</p>
                          )}
                        </div>

                        {_/* Description */}
                        <p className="text-gray-300 leading-relaxed mb-6 line-clamp-3">
                          {_service.description}
                        </p>

                        {_/* Key Features */}
                        <div className="mb-6">
                          <h4 className="text-sm font-medium text-gray-400 mb-3">Key Features:</h4>
                          <div className="space-y-2">
                            {_service.features.slice(0, _4).map(_(feature, _idx) => (
                              <div key={idx} className="flex items-center space-x-2">
                                <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                                <span className="text-sm text-gray-300">{_feature}</span>
                              </div>
                            ))}
                            {_service.features.length > 4 && (
                              <span className="text-xs text-gray-500">+{service.features.length - 4} more features</span>
                            )}
                          </div>
                        </div>

                        {_/* Additional Info */}
                        <div className="mb-6 p-4 bg-gray-800/30 rounded-xl">
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="text-gray-400">Trial:</span>
                              <span className="text-white ml-2">{_service.trialDays} days</span>
                            </div>
                            {_service.rating && (
                              <div>
                                <span className="text-gray-400">Rating:</span>
                                <span className="text-white ml-2">{service.rating}/5</span>
                              </div>
                            )}
                            {_service.customers && (
                              <div>
                                <span className="text-gray-400">Customers:</span>
                                <span className="text-white ml-2">{service.customers}</span>
                              </div>
                            )}
                            {_service.launchDate && (
                              <div>
                                <span className="text-gray-400">Launched:</span>
                                <span className="text-white ml-2">{new Date(service.launchDate).getFullYear()}</span>
                              </div>
                            )}
                          </div>
                        </div>

                        {_/* Market Position */}
                        {_service.marketPosition && (
                          <div className="mb-6 p-3 bg-blue-900/20 border border-blue-500/20 rounded-lg">
                            <p className="text-xs text-blue-300 leading-relaxed">
                              {service.marketPosition}
                            </p>
                          </div>
                        )}

                        {_/* ROI Information */}
                        {_service.roi && (
                          <div className="mb-6 p-3 bg-green-900/20 border border-green-500/20 rounded-lg">
                            <p className="text-xs text-green-300 leading-relaxed">
                              <strong>ROI:</strong> {service.roi}
                            </p>
                          </div>
                        )}

                        {_/* CTA */}
                        <div className="flex items-center justify-between">
                          <Link href={_service.link || `/services/${service.id}`}>
                            <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
                              <span className="flex items-center">
                                Learn More
                                <ArrowRight className="w-4 h-4 ml-2" />
                              </span>
                            </button>
                          </Link>
                          <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {_/* Contact CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={_{ opacity: 0, _y: 30}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              viewport={_{ once: true}}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Get Started with
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"> Revolutionary Technology?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our team to discuss pricing, implementation, and how our revolutionary 2029 services can transform your business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Link href="/contact">
                  <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
                    <Phone className="inline-block w-5 h-5 mr-2" />
                    Schedule Consultation
                  </button>
                </Link>
                <a href={_`mailto:${contactInfo.email}`}>
                  <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-xl font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-200 transform hover:scale-105">
                    <Mail className="inline-block w-5 h-5 mr-2" />
                    Get Quote
                  </button>
                </a>
              </div>

              {_/* Contact Information */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-gray-300">
                <div className="flex items-center justify-center space-x-2">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <span>{_contactInfo.mobile}</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <span>{_contactInfo.email}</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <MapPin className="w-5 h-5 text-pink-400" />
                  <span className="text-sm">{_contactInfo.address}</span>
                </div>
              </div>

              {_/* Additional Info */}
              <div className="mt-12 p-6 bg-gray-900/30 rounded-2xl border border-cyan-500/20">
                <h3 className="text-xl font-semibold text-white mb-4">Why Choose Zion Tech Group?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-400" />
                    <span>All services are operational and market-tested</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-400" />
                    <span>Proven ROI and customer success stories</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-400" />
                    <span>Comprehensive support and implementation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-400" />
                    <span>Cutting-edge 2029 technology</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <UltraFuturisticFooter2029 />
    </UltraFuturisticBackground2029>
  );
}

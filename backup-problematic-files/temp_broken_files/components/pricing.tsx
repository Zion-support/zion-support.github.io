import React, { useState } from 'react',
import Head from 'next/head',
import Link from 'next/link',
import { motion } from 'framer-motion',
import { 
  Check, Star, Users, TrendingUp, DollarSign, Clock,
  Shield, Zap, Rocket, Brain, Atom, Globe, Target,
  ArrowRight, Phone, Mail, MapPin, ExternalLink
 from 'lucide-react',
import UltraFuturisticBackground2029 from '../components/backgrounds/UltraFuturisticBackground2029',
import UltraFuturisticNavigation2029 from '../components/layout/UltraFuturisticNavigation2029',
import UltraFuturisticFooter2029 from '../components/layout/UltraFuturisticFooter2029',
/ Import all service data,
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services',
import { innovativeAIServices2029 } from '../data/2029-innovative-ai-services',
import { quantumSpaceInnovations2029 } from '../data/2029-quantum-space-innovations',
import { enterpriseITInnovations2029 } from '../data/2029-enterprise-it-innovations',
import { innovativeMicroSaas2029 } from '../data/2029-innovative-micro-saas',
export default function PricingPage() {
  const [selectedCategory, setSelectedCategory] = useState('All'),
  const [selectedPriceRange, setSelectedPriceRange] = useState('All'),

  // Combine all services,
const allServices = [
    ...enhancedRealMicroSaasServices,
    ...innovativeAIServices2029,
    ...quantumSpaceInnovations2029,
    ...enterpriseITInnovations2029,
    ...innovativeMicroSaas2029
  ],
  // Get unique services by ID,
const uniqueServices = allServices.filter(_(service, index, self) => 
    index = = self.findIndex(s => s.id = = service.id),

  // Get all categories,
const categories = ['All', _...Array.from(new Set(uniqueServices.map(s => 
    Array.isArray(s.category) ? s.category[0] : s.category
  ))],

  // Price ranges,
const priceRanges = [
    { id: 'All', name: 'All Prices', range: 'All' },
    { id: 'Under $1K', name: 'Under $1K/month', range: 'Under $1K' },
    { id: '$1K - $5K', name: '$1K - $5K/month', range: '$1K - $5K' },
    { id: '$5K - $20K', name: '$5K - $20K/month', range: '$5K - $20K' },
    { id: '$20K+', name: '$20K+/month', range: '$20K+' }
  ],
  // Filter services,
const filteredServices = uniqueServices.filter(service => {const matchesCategory = selectedCategory = = 'All' || 
                           (Array.isArray(service.category) ? 
                             service.category.includes(selectedCategory) : 
                             service.category = = selectedCategory),

    const price = parseFloat(service.price.replace(/[^0-9.]/g, ''),
    const matchesPrice = selectedPriceRange = = 'All' ||                        (selectedPriceRange = = 'Under $1K' && price < 1000) ||
                        (selectedPriceRange = = '$1K - $5K' && price >= 1000 && price < 5000) ||
                        (selectedPriceRange = = '$5K - $20K' && price >= 5000 && price < 20000) ||
                        (selectedPriceRange = = '$20K+' && price >= 20000),

    return matchesCategory && matchesPrice
  }),

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  },

  // Group services by category for better organization,
const servicesByCategory = filteredServices.reduce(acc, service) => {
    const category = Array.isArray(service.category) ? service.category[0] : service.category,
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(service),
    return acc
  }, {} as Record<string typeof filteredServices>),

  const faqs = [
    {
      question: 'Can I change my plan at any time?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and are prorated.'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes, all our services offer a 14-day free trial with full access to all features. No credit card required.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers for annual plans. Enterprise customers can be invoiced.'
    },
    {
      question: 'Do you offer volume discounts?',
      answer: 'Yes, we offer volume discounts for teams and organizations. Contact our sales team for custom pricing.'
    },
    {
      question: 'Can I cancel my subscription?',
      answer: 'Yes, you can cancel your subscription at any time. You\'ll continue to have access until the end of your billing period.'
    },
    {
      question: 'Is there a setup fee?',
      answer: 'No setup fees for any of our plans. You can start using our services immediately after signing up.'
    }
  ],

  const categories = [
    'AllContent & MarketingDevelopment & DevOpsSales & CRMLegal & ComplianceHuman ResourcesAnalytics & DataFinance & Accounting',
    'Project ManagementCustomer ExperienceSecurity & Compliance'
  ],
  const filteredServices = selectedCategory = = 'All' 
    ? microSaasServices 
    : microSaasServices.filter(service => service.category = = selectedCategory),

  const yearlyDiscount = 0.2, // 20% discount for yearly billing,
return (_<UltraFuturisticBackground2029>
      <Head>
        <title>Revolutionary 2029 Technology Pricing | Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Explore comprehensive pricing for our revolutionary 2029 technology services including AI consciousness, quantum computing, space mining, and advanced biotechnology.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;technology pricing, AI services pricing, quantum computing pricing, space technology pricing, 2029 technology pricing&quot; />
        <meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/pricing&quot; />      </Head>

      <UltraFuturisticNavigation2029 />

      <main className=&quot;relative z-10 pt-20&quot;>
        {/* Hero Section */}
        <section className=&quot;py-20 px-4 sm:px-6 lg:px-8 text-center&quot;>
          <motion.div,
initial={ opacity: 0, y: 20 }
            animate={ opacity: 1, y: 0 }
            transition={ duration: 0.8 }
            className=&quot;max-w-4xl mx-auto&quot;          >
            <h1 className=&quot;text-5xl md:text-6xl font-bold text-white mb-6&quot;>
              <span className=&quot;bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent&quot;>
                Revolutionary 2029
              </span>
              <br />
              <span className=&quot;text-white&quot;>Technology Pricing</span>
            </h1>
            <p className=&quot;text-xl text-gray-300 mb-8&quot;>
              Transparent pricing for our cutting-edge technology services that are already operational and delivering transformative results
            </p>

            {/* Filter Controls */}
            <div className=&quot;flex flex-col lg:flex-row gap-4 justify-center items-center mb-8&quot;>
              <select,
value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className=&quot;px-4 py-3 bg-gray-900/50 border border-cyan-500/20 rounded-xl text-white focus:outline-none focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-500/20&quot;              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                )}
              </select>

              <select,
value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className=&quot;px-4 py-3 bg-gray-900/50 border border-cyan-500/20 rounded-xl text-white focus:outline-none focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-500/20&quot;              >
                {priceRanges.map(range => (
                  <option key={range.id} value={range.id}>{range.name}</option>
                )}
              </select>
            </div>

            <div className=&quot;text-center text-gray-400&quot;>
              <p>Showing {filteredServices.length} services in {Object.keys(servicesByCategory).length} categories</p>            </div>
          </motion.div>
        </section>

        {/* Pricing Categories */}
        <section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;max-w-7xl mx-auto&quot;>
            {Object.entries(servicesByCategory).map([category, services], categoryIndex) => (
              <motion.div,
key={category}
                initial={ opacity: 0, y: 30 }
                whileInView={ opacity: 1, y: 0 }
                transition={ duration: 0.8, delay: categoryIndex * 0.2 }
                viewport={ once: true }
                className=&quot;mb-20&quot;
              >
                <div className=&quot;text-center mb-12&quot;>
                  <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-4&quot;>
                    {category} Services
                  </h2>
                  <p className=&quot;text-gray-400 text-lg&quot;>
                    {services.length} revolutionary {category.toLowerCase()} solutions
                  </p>
                </div>

                <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
                  {services.map(service, serviceIndex) => (
                    <motion.div,
key={service.id}
                      initial={ opacity: 0, y: 20 }
                      whileInView={ opacity: 1, y: 0 }
                      transition={ duration: 0.6, delay: serviceIndex * 0.1 }
                      viewport={ once: true }
                      className=&quot;group cursor-pointer&quot;
                    >
                      <div className={`p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 backdrop-blur-sm hover:transform hover:scale-105 ${service.popular ? 'ring-2 ring-yellow-400/50' : ''}`}>
                        {/* Popular Badge */}
                        {service.popular && (
                          <div className=&quot;flex items-center justify-center mb-4&quot;>
                            <div className=&quot;px-3 py-1 bg-yellow-400/20 border border-yellow-400/30 rounded-full&quot;>
                              <span className=&quot;text-sm text-yellow-400 font-medium flex items-center&quot;>
                                <Star className=&quot;w-4 h-4 mr-1 fill-current&quot; />                                Most Popular
                              </span>
                            </div>
                          </div>
                        )}

                        {/* Service Icon */}
                        <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                          <span className=&quot;text-2xl&quot;>{service.icon}</span>
                        </div>

                        {/* Service Title and Tagline */}
                        <h3 className=&quot;text-xl font-semibold text-white mb-2&quot;>{service.name}</h3>
                        <p className=&quot;text-sm text-cyan-400 mb-4&quot;>{service.tagline}</p>

                        {/* Price */}
                        <div className=&quot;mb-6&quot;>
                          <div className=&quot;flex items-baseline&quot;>
                            <span className={`${service.textColor} font-bold text-3xl`}>
                              {service.price}
                            </span>
                            <span className=&quot;text-gray-400 text-lg ml-2&quot;>{service.period}</span>
                          </div>
                          {service.setupTime && (
                            <p className=&quot;text-sm text-gray-500 mt-1&quot;>Setup: {service.setupTime}</p>
                          )}
                        </div>;

                        {/* Description */}
                        <p className=&quot;text-gray-300 leading-relaxed mb-6 line-clamp-3&quot;>
                          {service.description}
                        </p>;

                        {/* Key Features */}
                        <div className=&quot;mb-6&quot;>
                          <h4 className=&quot;text-sm font-medium text-gray-400 mb-3&quot;>Key Features:</h4>
                          <div className=&quot;space-y-2&quot;>
                            {service.features.slice(0, 4).map(feature, idx) => (
                              <div key={idx} className=&quot;flex items-center space-x-2&quot;>
                                <Check className=&quot;w-4 h-4 text-green-400 flex-shrink-0&quot; />
                                <span className=&quot;text-sm text-gray-300&quot;>{feature}</span>
                              </div>
                            )}
                            {service.features.length > 4 && (
                              <span className=&quot;text-xs text-gray-500&quot;>+{service.features.length - 4} more features</span>                            )}
                          </div>
                        </div>

                        {/* Additional Info */}
                        <div className=&quot;mb-6 p-4 bg-gray-800/30 rounded-xl&quot;>
                          <div className=&quot;grid grid-cols-2 gap-4 text-sm&quot;>
                            <div>
                              <span className=&quot;text-gray-400&quot;>Trial:</span>
                              <span className=&quot;text-white ml-2&quot;>{service.trialDays} days</span>                            </div>
                            {service.rating && (
                              <div>
                                <span className=&quot;text-gray-400&quot;>Rating:</span>
                                <span className=&quot;text-white ml-2&quot;>{service.rating}/5</span>
                              </div>
                            )}
                            {service.customers && (
                              <div>
                                <span className=&quot;text-gray-400&quot;>Customers:</span>
                                <span className=&quot;text-white ml-2&quot;>{service.customers}</span>
                              </div>
                            )}
                            {service.launchDate && (
                              <div>
                                <span className=&quot;text-gray-400&quot;>Launched:</span>
                                <span className=&quot;text-white ml-2&quot;>{new Date(service.launchDate).getFullYear()}</span>
                              </div>
                            )}
                          </div>;
                        </div>;

                        {/* Market Position */}
                        {service.marketPosition && (
                          <div className=&quot;mb-6 p-3 bg-blue-900/20 border border-blue-500/20 rounded-lg&quot;>
                            <p className=&quot;text-xs text-blue-300 leading-relaxed&quot;>                              {service.marketPosition}
                            </p>
                          </div>
                        )}

                        {/* ROI Information */}
                        {service.roi && (
                          <div className=&quot;mb-6 p-3 bg-green-900/20 border border-green-500/20 rounded-lg&quot;>
                            <p className=&quot;text-xs text-green-300 leading-relaxed&quot;>                              <strong>ROI:</strong> {service.roi}
                            </p>
                          </div>
                        )}

                        {/* CTA */}
                        <div className=&quot;flex items-center justify-between&quot;>
                          <Link href={service.link || `/services/${service.id}`}>
                            <button className=&quot;px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105&quot;>
                              <span className=&quot;flex items-center&quot;>                                Learn More
                                <ArrowRight className=&quot;w-4 h-4 ml-2&quot; />
                              </span>
                            </button>
                          </a>
                          <ExternalLink className=&quot;w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors&quot; />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>;
              </motion.div>;
            )}
          </div>;
        </section>;

        {/* Contact CTA Section */}
        <section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;max-w-4xl mx-auto text-center&quot;>            <motion.div,
initial={_{ opacity: 0, y: 30}
              whileInView={_{ opacity: 1, y: 0}
              transition={_{ duration: 0.8}
              viewport={_{ once: true}
            >
              <h2 className=&quot;text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6&quot;>
                Ready to Get Started with
                <span className=&quot;bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent&quot;> Revolutionary Technology?</span>
              </h2>
              <p className=&quot;text-xl text-gray-300 mb-8&quot;>
                Contact our team to discuss pricing, implementation, and how our revolutionary 2029 services can transform your business.
              </p>

              <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center items-center mb-8&quot;>
                <Link href=&quot;/contact&quot;>
                  <button className=&quot;px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105&quot;>
                    <Phone className=&quot;inline-block w-5 h-5 mr-2&quot; />
                    Schedule Consultation
                  </button>
                </a>
                <a href={`mailto:${contactInfo.email}`}>
                  <button className=&quot;px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-xl font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-200 transform hover:scale-105&quot;>
                    <Mail className=&quot;inline-block w-5 h-5 mr-2&quot; />                    Get Quote
                  </button>
                </a>
              </div>

              {/* Contact Information */}
              <div className=&quot;grid grid-cols-1 sm:grid-cols-3 gap-6 text-gray-300&quot;>
                <div className=&quot;flex items-center justify-center space-x-2&quot;>
                  <Phone className=&quot;w-5 h-5 text-cyan-400&quot; />
                  <span>{contactInfo.mobile}</span>
                </div>
                <div className=&quot;flex items-center justify-center space-x-2&quot;>
                  <Mail className=&quot;w-5 h-5 text-purple-400&quot; />
                  <span>{contactInfo.email}</span>
                </div>
                <div className=&quot;flex items-center justify-center space-x-2&quot;>
                  <MapPin className=&quot;w-5 h-5 text-pink-400&quot; />
                  <span className=&quot;text-sm&quot;>{contactInfo.address}</span>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-12 p-6 bg-gray-900/30 rounded-2xl border border-cyan-500/20">
                <h3 className="text-xl font-semibold text-white mb-4">Why Choose Zion Tech Group?</h3>
                <div className="grid grid-cols-1 md: grid-cols-2 gap-4 text-sm text-gray-300">
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-400" />
              <div className=&quot;mt-12 p-6 bg-gray-900/30 rounded-2xl border border-cyan-500/20&quot;>
                <h3 className=&quot;text-xl font-semibold text-white mb-4&quot;>Why Choose Zion Tech Group?</h3>
                <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300&quot;>
                  <div className=&quot;flex items-center space-x-2&quot;>
                    <Check className=&quot;w-4 h-4 text-green-400&quot; />
                    <span>All services are operational and market-tested</span>
                  </div>
                  <div className=&quot;flex items-center space-x-2&quot;>
                    <Check className=&quot;w-4 h-4 text-green-400&quot; />
                    <span>Proven ROI and customer success stories</span>
                  </div>
                  <div className=&quot;flex items-center space-x-2&quot;>
                    <Check className=&quot;w-4 h-4 text-green-400&quot; />
                    <span>Comprehensive support and implementation</span>
                  </div>
                  <div className=&quot;flex items-center space-x-2&quot;>
                    <Check className=&quot;w-4 h-4 text-green-400&quot; />
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
  )}
whileInView= {
  opacity: 1, y: 0 

transition= {
  duration: 0.8 

viewport= {
  once: true 

> <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6" > Ready to Get Started with <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent" > Revolutionary Technology?</span> </h2> <p className="text-xl text-gray-300 mb-8" > Contact our team to discuss pricing, implementation, and how our revolutionary 2029 services can transform your business. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8" > <Link href="/contact" > <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105" > <Phone className="inline-block w-5 h-5 mr-2" /> Schedule Consultation </button> Get Quote </button> </a> </div> <div className="mt-12 p-6 bg-gray-900/30 rounded-2xl border border-cyan-500/20"> <h3 className="text-xl font-semibold text-white mb-4">Why Choose Zion Tech Group?</h3> <div className="grid grid-cols-1 md: grid-cols-2 gap-4 text-sm text-gray-300"> <div className="flex items-center space-x-2"> <Check className="w-4 h-4 text-green-400" /> flex items-center space-x-2"> <Check className=" w-4 h-4 text-green-400"/> <span>Proven ROI and customer success stories</span> </div> <div className=" flex items-center space-x-2"> <Check className=" w-4 h-4 text-green-400"/> <span>Comprehensive support and implementation</span> </div> <div className=" flex items-center space-x-2"> <Check className=" w-4 h-4 text-green-400" /> <span>Cutting-edge 2029 technology</span> </div> </div> </div> </motion.div> </div> </section> </main> <UltraFuturisticFooter2029 /> </UltraFuturisticBackground2029>) 

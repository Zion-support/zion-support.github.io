import React, { useState } from 'react',
import Head from 'next/head',
import Link from 'next/link',
import { motion, AnimatePresence } from 'framer-motion',
import { 
  CheckCircle, ArrowRight, Star, TrendingUp, Phone, Mail, MapPin,
  Rocket, Brain, Atom, Shield, Award, Zap, Cloud, Target, Search,
  Filter, Grid, List, DollarSign, Users, Clock, Eye, Heart
} from 'lucide-react',

import { comprehensiveRealServices2025 } from '../data/2025-comprehensive-real-services',
const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
},

const categories = [
  'All ServicesAI & Machine LearningCustomer SuccessSupply ChainFinancial PlanningSales IntelligenceHR AnalyticsDecision Intelligence',
  'Content MarketingCRM & Customer IntelligenceBusiness Intelligence'
],

const pricingRanges = [
  'All PricesUnder $300$300 - $500$500 - $800$800+'
],

export default function ComprehensiveServicesShowcase2025() {
  const [selectedCategory, setSelectedCategory] = useState('All Services'),
  const [selectedPriceRange, setSelectedPriceRange] = useState('All Prices'),
  const [searchQuery, setSearchQuery] = useState(''),
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid'),
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'rating' | 'popularity'>('popularity'),

  // Filter services based on selections,
const filteredServices = comprehensiveRealServices2025.filter(service => {
    const categoryMatch = selectedCategory === 'All Services' || service.category.includes(selectedCategory),
    
    let priceMatch = true,
    if (selectedPriceRange !== 'All Prices') {
      const price = parseInt(service.price.replace('$', '')),      switch (selectedPriceRange) {
        case 'Under $300':
          priceMatch = price < 300,
          break,
        case '$300 - $500':
          priceMatch = price >= 300 && price <= 500,
          break,
        case '$500 - $800':
          priceMatch = price > 500 && price <= 800,
          break,
        case '$800+':
          priceMatch = price > 800,
          break
      }    }
    
    const searchMatch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       service.category.toLowerCase().includes(searchQuery.toLowerCase()),
    
    return categoryMatch && priceMatch && searchMatch
  }),

  // Sort services,
const sortedServices = [...filteredServices].sort(_(a, b) => {switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name),
      case 'price':
        return parseInt(a.price.replace('$', '')) - parseInt(b.price.replace('$', '')),      case 'rating':
        return b.rating - a.rating,
      case 'popularity':
        return (b.popular ? 1 : 0) - (a.popular ? 1 : 0),
      default: return 0
    }
  }),

  const getPriceRange = (price: string) => {
    const numPrice = parseInt(price.replace('$', '')),
    if (numPrice < 300) return 'Under $300',
    if (numPrice <= 500) return '$300 - $500',
    if (numPrice <= 800) return '$500 - $800',
    return '$800+'
  },
  const getCategoryIcon = (category: string) => {const categoryData = categories.find(cat => 
      category.toLowerCase().includes(cat.id.toLowerCase())
    ),
    return categoryData ? categoryData.icon : Globe
  },
  const getCategoryColor = (category: string) => {const categoryData = categories.find(cat => 
      category.toLowerCase().includes(cat.id.toLowerCase())
    ),
    return categoryData ? categoryData.color : 'from-gray-500 to-gray-600'
  },
  return (
    <>
      <Head>
        <title>Comprehensive Services Showcase 2025 | Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Explore our comprehensive portfolio of real, innovative micro SAAS services, IT solutions, and AI platforms. Transform your business with cutting-edge technology.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;AI services, micro SAAS, IT solutions, business automation, customer success, supply chain optimization, financial planning, sales intelligence&quot; />
        <meta property=&quot;og:title&quot; content=&quot;Comprehensive Services Showcase 2025 | Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Explore our comprehensive portfolio of real, innovative micro SAAS services, IT solutions, and AI platforms.&quot; />
        <meta property=&quot;og:url&quot; content=&quot;https://ziontechgroup.com/comprehensive-services-showcase-2025&quot; />
        <meta property=&quot;og:type&quot; content=&quot;website&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/comprehensive-services-showcase-2025&quot; />
      </Head>

        {/* Hero Section */}
        <section className=&quot;relative py-20 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden&quot;>
          {/* Animated Background */}
          <div className=&quot;absolute inset-0&quot;>
            <div className=&quot;absolute inset-0 bg-[radial-gradient(circleat_30%20%,rgba(120,119,198,0.1),transparent50%)]&quot; />
            <div className=&quot;absolute inset-0 bg-[radial-gradient(circleat_70%80%,rgba(34,211,238,0.05),transparent50%)]&quot; />
            <div className=&quot;absolute top-1/4 left-1/4 w-32 h-32 bg-cyan-500/5 rounded-full blur-3xl animate-pulse&quot;></div>
            <div className=&quot;absolute top-3/4 right-1/4 w-24 h-24 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000&quot;></div>
            <div className=&quot;absolute bottom-1/4 left-1/3 w-20 h-20 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-2000&quot;></div>          </div>

          <div className=&quot;relative z-10 container mx-auto px-4 text-center&quot;>
            <motion.div,
initial={_{ opacity: 0, y: 30}}
              animate={_{ opacity: 1, y: 0}}
              transition={_{ duration: 0.8}}
            >
              <h1 className=&quot;text-5xl lg:text-7xl font-bold mb-6&quot;>
                <span className=&quot;bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent&quot;>
                  Comprehensive Services
                </span>
                <br />
                <span className=&quot;text-white&quot;>Showcase 2025</span>
              </h1>
              <p className=&quot;text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed&quot;>
                Discover our portfolio of <span className=&quot;text-cyan-400 font-semibold&quot;>real, innovative micro SAAS services</span>, 
                cutting-edge IT solutions, and revolutionary AI platforms. Transform your business with 
                <span className=&quot;text-blue-400 font-semibold&quot;> proven technology</span> that delivers measurable results.
              </p>
              
              {/* Stats */}
              <div className=&quot;grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12&quot;>
                <div className=&quot;text-center&quot;>
                  <div className=&quot;text-3xl font-bold text-cyan-400 mb-2&quot;>{comprehensiveRealServices2025.length}+</div>
                  <div className=&quot;text-gray-400&quot;>Real Services</div>                </div>
                <div className=&quot;text-center&quot;>
                  <div className=&quot;text-3xl font-bold text-blue-400 mb-2&quot;>$2.5B+</div>
                  <div className=&quot;text-gray-400&quot;>Market Coverage</div>
                </div>
                <div className=&quot;text-center&quot;>
                  <div className=&quot;text-3xl font-bold text-purple-400 mb-2&quot;>95%</div>
                  <div className=&quot;text-gray-400&quot;>AI Accuracy</div>
                </div>
                <div className=&quot;text-center&quot;>
                  <div className=&quot;text-3xl font-bold text-green-400 mb-2&quot;>400%</div>
                  <div className=&quot;text-gray-400&quot;>Average ROI</div>
                </div>
              </div>

              {/* Contact CTA */}
              <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center items-center&quot;>                <Link,
href=&quot;/contact&quot;
                  className=&quot;px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-cyan-500/25&quot;
                >
                  Get Started Today
                  <ArrowRight className=&quot;w-5 h-5 ml-2 inline&quot; />
                </Link>
                <a,
href={`tel:${contactInfo.mobile}`}
                  className=&quot;px-8 py-4 border border-cyan-500/30 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300&quot;
                >
                  <Phone className=&quot;w-5 h-5 mr-2 inline&quot; />
                  {contactInfo.mobile}
                </Link>              </div>
            </motion.div>
          </div>
        </section>

        {/* Filters and Search Section */}
        <section className=&quot;py-12 bg-gray-900 border-b border-gray-800&quot;>
          <div className=&quot;container mx-auto px-4&quot;>
            <div className=&quot;flex flex-col lg:flex-row gap-6 items-center justify-between&quot;>
              {/* Search */}
              <div className=&quot;relative flex-1 max-w-md&quot;>
                <Search className=&quot;absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5&quot; />
                <input,
type=&quot;text&quot;
                  placeholder=&quot;Search services...&quot;
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className=&quot;w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent&quot;
                />
              </div>

              {/* Category Filter */}
              <div className=&quot;flex flex-wrap gap-2&quot;>
                {categories.map((category) => (
                  <button                    key={category}
                    onClick={_() => setSelectedCategory(category)}
                    className={_`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'}`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Price Range Filter */}
              <div className=&quot;flex items-center gap-2&quot;>
                <Filter className=&quot;w-5 h-5 text-gray-400&quot; />
                <select,
value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)}
                  className=&quot;px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500&quot;                >
                  {pricingRanges.map(_(range) => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
              </div>

              {/* View Mode Toggle */}
              <div className=&quot;flex items-center gap-2 bg-gray-800 rounded-lg p-1&quot;>                <button,
onClick={_() => setViewMode('grid')}
                  className={_`p-2 rounded-md transition-all duration-300 ${
                    viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'}`}
                >
                  <Grid className=&quot;w-5 h-5&quot; />
                </button>
                <button,
onClick={_() => setViewMode('list')}
                  className={_`p-2 rounded-md transition-all duration-300 ${
                    viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'}`}
                >
                  <List className=&quot;w-5 h-5&quot; />
                </button>
              </div>

              {/* Sort Options */}
              <div className=&quot;flex items-center gap-2&quot;>
                <span className=&quot;text-gray-400 text-sm&quot;>Sort by:</span>
                <select,
value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className=&quot;px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500&quot;                >
                  <option value=&quot;popularity&quot;>Popularity</option>
                  <option value=&quot;name&quot;>Name</option>
                  <option value=&quot;price&quot;>Price</option>
                  <option value=&quot;rating&quot;>Rating</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid/List */}
        <section className=&quot;py-20 bg-black&quot;>
          <div className=&quot;container mx-auto px-4&quot;>
            {/* Results Count */}
            <div className=&quot;mb-8&quot;>
              <p className=&quot;text-gray-400&quot;>
                Showing <span className=&quot;text-cyan-400 font-semibold&quot;>{sortedServices.length}</span> of{' '}
                <span className=&quot;text-cyan-400 font-semibold&quot;>{comprehensiveRealServices2025.length}</span> services
              </p>
            </div>

            {viewMode === 'grid' ? (
              /* Grid View */
              <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
                {sortedServices.map((service, index) => (
                  <motion.div,
key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className=&quot;group&quot;
                  >
                    <div className=&quot;bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 h-full relative overflow-hidden&quot;>
                      {/* Popular Badge */}
                      {service.popular && (
                        <div className=&quot;absolute top-4 right-4&quot;>
                          <span className=&quot;px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-semibold rounded-full&quot;>                            Popular
                          </span>
                        </div>
                      )}

                      {/* Service Icon */}
                      <div className=&quot;text-6xl mb-6&quot;>{service.icon}</div>
                      
                      {/* Service Info */}
                      <h3 className=&quot;text-2xl font-bold text-white mb-3&quot;>{service.name}</h3>
                      <p className=&quot;text-gray-300 mb-4 line-clamp-3&quot;>{service.description}</p>
                      
                      {/* Price */}
                      <div className=&quot;flex items-center justify-between mb-6&quot;>
                        <div className=&quot;text-3xl font-bold text-cyan-400&quot;>
                          {service.price}
                          <span className=&quot;text-lg text-gray-400&quot;>{service.period}</span>
                        </div>
                        <div className=&quot;flex items-center gap-1&quot;>
                          <Star className=&quot;w-5 h-5 text-yellow-400 fill-current&quot; />
                          <span className=&quot;text-white font-semibold&quot;>{service.rating}</span>
                          <span className=&quot;text-gray-400&quot;>({service.reviews})</span>
                        </div>
                      </div>

                      {/* Key Features */}
                      <div className=&quot;space-y-2 mb-6&quot;>
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className=&quot;flex items-center&quot;>
                            <CheckCircle className=&quot;w-4 h-4 text-green-400 mr-3 flex-shrink-0&quot; />
                            <span className=&quot;text-gray-300 text-sm&quot;>{feature}</span>                          </div>
                        ))}
                      </div>

                      {/* Category and Setup */}
                      <div className=&quot;flex items-center justify-between mb-6 text-sm&quot;>
                        <span className=&quot;px-3 py-1 bg-gray-700 text-gray-300 rounded-full&quot;>
                          {service.category}
                        </span>
                        <span className=&quot;text-gray-400&quot;>
                          Setup: {service.setupTime}
                        </span>
                      </div>

                      {/* Key Benefits */}
                      <div className=&quot;mb-6&quot;>
                        <h4 className=&quot;text-white font-semibold mb-3&quot;>Key Benefits:</h4>
                        <div className=&quot;space-y-2&quot;>
                          {service.keyBenefits.slice(0, 2).map((benefit, idx) => (
                            <div key={idx} className=&quot;flex items-center&quot;>
                              <div className=&quot;w-2 h-2 bg-cyan-400 rounded-full mr-3&quot;></div>
                              <span className=&quot;text-gray-300 text-sm&quot;>{benefit}</span>                            </div>
                          ))}
                        </div>
                      </div>

                      {_/* CTA Button */}
                      <Link,
href={service.link}
                        className=&quot;block w-full text-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105&quot;                      >
                        Learn More
                        <ArrowRight className=&quot;w-4 h-4 ml-2 inline&quot; />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              /* List View */
              <div className=&quot;space-y-6&quot;>
                {sortedServices.map((service, index) => (
                  <motion.div,
key={service.id}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className=&quot;group&quot;
                  >
                    <div className=&quot;bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300&quot;>
                      <div className=&quot;flex flex-col lg:flex-row gap-6 items-start&quot;>
                        {/* Service Icon and Basic Info */}
                        <div className=&quot;flex items-start gap-4&quot;>
                          <div className=&quot;text-4xl&quot;>{service.icon}</div>
                          <div className=&quot;flex-1&quot;>
                            <div className=&quot;flex items-center gap-3 mb-2&quot;>
                              <h3 className=&quot;text-2xl font-bold text-white&quot;>{service.name}</h3>
                              {service.popular && (
                                <span className=&quot;px-2 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-semibold rounded-full&quot;>                                  Popular
                                </span>
                              )}
                            </div>
                            <p className=&quot;text-gray-300 mb-3&quot;>{service.description}</p>
                            <div className=&quot;flex items-center gap-4 text-sm text-gray-400&quot;>
                              <span>Category: {service.category}</span>
                              <span>Setup: {service.setupTime}</span>
                              <span>Trial: {service.trialDays} days</span>                            </div>
                          </div>
                        </div>

                        {/* Price and Rating */}
                        <div className=&quot;text-right&quot;>
                          <div className=&quot;text-3xl font-bold text-cyan-400 mb-2&quot;>
                            {service.price}
                            <span className=&quot;text-lg text-gray-400&quot;>{service.period}</span>
                          </div>
                          <div className=&quot;flex items-center justify-end gap-1 mb-2&quot;>
                            <Star className=&quot;w-4 h-4 text-yellow-400 fill-current&quot; />
                            <span className=&quot;text-white font-semibold&quot;>{service.rating}</span>
                            <span className=&quot;text-gray-400&quot;>({service.reviews})</span>
                          </div>
                          <span className=&quot;text-sm text-gray-400&quot;>
                            {getPriceRange(service.price)}                          </span>
                        </div>
                      </div>

                      {/* Features and Benefits */}
                      <div className=&quot;mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6&quot;>
                        <div>
                          <h4 className=&quot;text-white font-semibold mb-3&quot;>Key Features:</h4>
                          <div className=&quot;space-y-2&quot;>
                            {service.features.slice(0, 4).map((feature, idx) => (
                              <div key={idx} className=&quot;flex items-center&quot;>
                                <CheckCircle className=&quot;w-4 h-4 text-green-400 mr-3 flex-shrink-0&quot; />
                                <span className=&quot;text-gray-300 text-sm&quot;>{feature}</span>                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className=&quot;text-white font-semibold mb-3&quot;>Key Benefits:</h4>
                          <div className=&quot;space-y-2&quot;>
                            {service.keyBenefits.slice(0, 4).map((benefit, idx) => (
                              <div key={idx} className=&quot;flex items-center&quot;>
                                <div className=&quot;w-2 h-2 bg-cyan-400 rounded-full mr-3&quot;></div>
                                <span className=&quot;text-gray-300 text-sm&quot;>{benefit}</span>                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* CTA and Additional Info */}
                      <div className=&quot;mt-6 flex flex-col lg:flex-row items-center justify-between gap-4&quot;>
                        <div className=&quot;flex items-center gap-4 text-sm text-gray-400&quot;>
                          <span>Market: {service.marketSize}</span>
                          <span>Growth: {service.growthRate}</span>
                          <span>ROI: {service.roi}</span>
                        </div>
                        <Link,
href={service.link}
                          className=&quot;px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105&quot;                        >
                          Learn More
                          <ArrowRight className=&quot;w-4 h-4 ml-2 inline&quot; />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* No Results */}
            {sortedServices.length === 0 && (
              <div className=&quot;text-center py-20&quot;>
                <div className=&quot;text-6xl mb-6&quot;>🔍</div>
                <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>No services found</h3>
                <p className=&quot;text-gray-400 mb-6&quot;>                  Try adjusting your filters or search terms to find what you're looking for.
                </p>
                <button,
onClick={() => {
                    setSelectedCategory('All Services'),
                    setSelectedPriceRange('All Prices'),
                    setSearchQuery('')
                  }}
                  className=&quot;px-6 py-3 bg-cyan-500 text-white font-semibold rounded-lg hover:bg-cyan-600 transition-all duration-300&quot;                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Contact Section */}
        <section className=&quot;py-20 bg-gradient-to-b from-black to-gray-900&quot;>
          <div className=&quot;container mx-auto px-4 text-center&quot;>
            <motion.div,
initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className=&quot;max-w-4xl mx-auto&quot;            >
              <h2 className=&quot;text-4xl lg:text-6xl font-bold mb-6&quot;>
                <span className=&quot;bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent&quot;>
                  Ready to Transform
                </span>
                <br />
                <span className=&quot;text-white&quot;>Your Business?</span>
              </h2>
              <p className=&quot;text-xl text-gray-300 mb-8 max-w-3xl mx-auto&quot;>
                Let's discuss how our innovative services can help you achieve your business goals. 
                Get in touch with our experts today.
              </p>
              
              <div className=&quot;flex flex-col sm:flex-row gap-6 justify-center items-center mb-8&quot;>
                <a,
href={`tel:${contactInfo.mobile}`}
                  className=&quot;flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105&quot;
                >
                  <Phone className=&quot;w-5 h-5 mr-2&quot; />
                  {contactInfo.mobile}
                </Link>
                <a,
href={`mailto:${contactInfo.email}`}
                  className=&quot;flex items-center px-6 py-3 border border-cyan-500/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300&quot;
                >
                  <Mail className=&quot;w-5 h-5 mr-2&quot; />
                  {contactInfo.email}
                </Link>
              </div>

              <div className=&quot;text-center text-gray-400&quot;>
                <p className=&quot;mb-2&quot;>{contactInfo.address}</p>
                <p>Visit us at: <a href={contactInfo.website} className=&quot;text-cyan-400 hover:text-cyan-300 transition-colors&quot;>{contactInfo.website}</Link></p>              </div>
            </motion.div>
          </div>
        </section>
    </>
  )
},

export default ComprehensiveServicesShowcase2025,

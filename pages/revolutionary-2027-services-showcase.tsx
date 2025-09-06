import React, { useState, useMemo } from 'react',
import Head from 'next/head'
import { motion, AnimatePresence } from 'framer-motion',
import { Search, CheckCircle, ArrowRight, Rocket, Mail, Phone, MapPin, MessageSquare, Globe } from 'lucide-react',


import UltraQuantumHolographicBackground from '../components/ui/UltraQuantumHolographicBackground'
import { revolutionary2027AIServices } from '../data/revolutionary-2027-ai-services'
import { revolutionary2027ITServices } from '../data/revolutionary-2027-it-services'
import { revolutionary2027MicroSaasServices } from '../data/revolutionary-2027-micro-saas'
export default function Revolutionary2027ServicesShowcase() {
  const [searchTerm, setSearchTerm] = useState(''),
  const [selectedCategory, setSelectedCategory] = useState<string>('all'),
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all'),
  const [sortBy, setSortBy] = useState<string>('name'),

  const allServices = [
    ...revolutionary2027AIServices,
    ...revolutionary2027ITServices,
    ...revolutionary2027MicroSaasServices
  ],

  // Dynamic category counts
  const aiCount = allServices.filter(service => service.category.includes('AI')).length
  const quantumCount = allServices.filter(service => service.category.includes('Quantum')).length
  const itCount = allServices.filter(service => service.category.includes('IT') || service.category.includes('Infrastructure')).length
  const microSaasCount = allServices.filter(service => service.category.includes('Micro SaaS') || service.category.includes('Marketing') || service.category.includes('Legal') || service.category.includes('Health')).length
  const holographicCount = allServices.filter(service => service.category.includes('Holographic')).length

  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀', count: allServices.length },
    { id: 'ai', name: 'AI Services', icon: '🧠', count: aiCount },
    { id: 'quantum', name: 'Quantum Services', icon: '⚛️', count: quantumCount },
    { id: 'it', name: 'IT Infrastructure', icon: '⚙️', count: itCount },
    { id: 'micro-saas', name: 'Micro SaaS', icon: '💻', count: microSaasCount },
    { id: 'holographic', name: 'Holographic', icon: '🎭', count: holographicCount }
  ],

  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'under-500', name: 'Under $500', range: 'Under $500' },
    { id: '500-2000', name: '$500 - $2,000', range: '$500 - $2,000' },
    { id: '2000-10000', name: '$2,000 - $10,000', range: '$2,000 - $10,000' },
    { id: 'over-10000', name: 'Over $10,000', range: 'Over $10,000' }
  ],

  const sortOptions = [
    { id: 'name', name: 'Name' },
    { id: 'price', name: 'Price' },
    { id: 'rating', name: 'Rating' },
    { id: 'customers', name: 'Customers' },
    { id: 'launchDate', name: 'Launch Date' }
  ],

  const filteredServices = useMemo(() => {
    let filtered = allServices
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => {
        if (selectedCategory === 'ai') return service.category.includes('AI'),
        if (selectedCategory === 'quantum') return service.category.includes('Quantum'),
        if (selectedCategory === 'it') return service.category.includes('IT') || service.category.includes('Infrastructure'),
        if (selectedCategory === 'micro-saas') return service.category.includes('Micro SaaS') || service.category.includes('Marketing') || service.category.includes('Legal') || service.category.includes('Health'),
        if (selectedCategory === 'holographic') return service.category.includes('Holographic'),
        return true
      })
    }

    // Price range filter
    if (selectedPriceRange !== 'all') {
      filtered = filtered.filter(service => {
        const price = parseInt(service.price.replace(/[^0-9]/g, '')),
        if (selectedPriceRange === 'under-500') return price < 500,
        if (selectedPriceRange === '500-2000') return price >= 500 && price < 2000,
        if (selectedPriceRange === '2000-10000') return price >= 2000 && price < 10000,
        if (selectedPriceRange === 'over-10000') return price >= 10000,
        return true
      })
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
    }

    // Search filter
    if (searchTerm) {_filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }
      );}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    // Sort
    filtered.sort(_(a, _b) => {_switch (sortBy) {
        case 'price':
          return parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, '')),
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
        case 'rating':
          return b.rating - a.rating,
        case 'customers':
          return b.customers - a.customers,
        case 'launchDate':
          return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime(),
        default: return a.name.localeCompare(b.name)
      }
    }),
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231

    return filtered
  }, [allServices, searchTerm, selectedCategory, selectedPriceRange, sortBy]),

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  },

  return (_<UltraQuantumHolographicBackground intensity={_2.0}>
      <Head>
        <title>Revolutionary 2027 Services Showcase - Zion Tech Group | Next-Generation AI, Quantum & Technology Solutions</title>
        <meta name=&quot;description&quot; content=&quot;Discover the most revolutionary AI, Quantum, and Technology services of 2027. Cutting-edge solutions with proven ROI and real-world implementation.&quot; />
        <meta property=&quot;og:title&quot; content=&quot;Revolutionary 2027 Services Showcase - Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Explore the future of technology with our revolutionary 2027 services showcase.&quot; />
        <meta property=&quot;og:url&quot; content=&quot;https://ziontechgroup.com/revolutionary-2027-services-showcase&quot; />
        <meta property=&quot;og:type&quot; content=&quot;website&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/revolutionary-2027-services-showcase&quot; />
      </Head>

      {/* Hero Section */}
      <section className=&quot;pt-24 pb-16 px-4 relative overflow-hidden&quot;>
        <div className=&quot;max-w-7xl mx-auto text-center relative z-10&quot;>
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
          >
            <h1 className=&quot;text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-8&quot;>
              Revolutionary 2027
            </h1>
            <h2 className=&quot;text-4xl md:text-6xl font-bold text-white mb-6&quot;>
              Services Showcase
            </h2>
            <p className=&quot;text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed&quot;>
              Experience the future of technology with our revolutionary AI, Quantum Computing, and Next-Generation IT services. 
              Each solution delivers measurable ROI and transforms industries.
            </p>
            
            {/* Contact Information */}
            <div className=&quot;flex flex-wrap items-center justify-center gap-6 text-center mb-8&quot;>
              <motion.div className=&quot;flex items-center gap-2 text-cyan-400&quot;
                whileHover={{ scale: 1.05 }}
                transition={{ type: &quot;spring&quot;, stiffness: 300 }}
              >
                <Phone className=&quot;w-5 h-5&quot; />
                <span className=&quot;font-semibold&quot;>{contactInfo.mobile}</span>
              </motion.div>
              <motion.div className=&quot;flex items-center gap-2 text-purple-400&quot;
                whileHover={{ scale: 1.05 }}
                transition={{ type: &quot;spring&quot;, stiffness: 300 }}
              >
                <Mail className=&quot;w-5 h-5&quot; />
                <span className=&quot;font-semibold&quot;>{contactInfo.email}</span>
              </motion.div>
              <motion.div className=&quot;flex items-center gap-2 text-green-400&quot;
                whileHover={{ scale: 1.05 }}
                transition={{ type: &quot;spring&quot;, stiffness: 300 }}
              >
                <MapPin className=&quot;w-5 h-5&quot; />
                <span className=&quot;text-sm font-semibold&quot;>{contactInfo.address}</span>
              </motion.div>
            </div>

            {/* CTA Buttons */}
            <div className=&quot;flex flex-wrap items-center justify-center gap-4&quot;>
              <a href=&quot;/contact&quot; className=&quot;bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-lg px-8 py-4 hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300&quot;>
                <Rocket className=&quot;w-5 h-5 mr-2&quot; />
                Get Started Today
              </Link>
              <a href=&quot;/services&quot; className=&quot;border-2 border-purple-500 text-purple-400 text-lg px-8 py-4 hover:bg-purple-500 hover:text-white transform hover:scale-105 transition-all duration-300&quot;>
                <Globe className=&quot;w-5 h-5 mr-2&quot; />
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className=&quot;py-8 px-4&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <div className=&quot;bg-black/40 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50&quot;>
            {/* Search Bar */}
            <div className=&quot;relative mb-6&quot;>
              <Search className=&quot;absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5&quot; />
              <input
                type=&quot;text&quot;
                placeholder=&quot;Search revolutionary services...&quot;
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} className=&quot;w-full pl-12 pr-4 py-4 bg-gray-900/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent&quot;
              />
            </div>

            {/* Filters */}
            <div className=&quot;grid grid-cols-1 md:grid-cols-4 gap-4&quot;>
              {/* Category Filter */}
              <div>
                <label className=&quot;block text-sm font-medium text-gray-300 mb-2&quot;>Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)} className=&quot;w-full px-3 py-2 bg-gray-900/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500&quot;>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>

              {_/* Price Range Filter */}
              <div>
                <label className=&quot;block text-sm font-medium text-gray-300 mb-2&quot;>Price Range</label>
                <select
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)} className=&quot;w-full px-3 py-2 bg-gray-900/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500&quot;>
                  {priceRanges.map((range) => (
                    <option key={range.id} value={range.id}>
                      {range.name}
                    </option>
                  ))}
                </select>
              </div>

              {_/* Sort By */}
              <div>
                <label className=&quot;block text-sm font-medium text-gray-300 mb-2&quot;>Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)} className=&quot;w-full px-3 py-2 bg-gray-900/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500&quot;>
                  {sortOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Results Count */}
              <div className=&quot;flex items-end&quot;>
                <div className=&quot;text-gray-300&quot;>
                  <span className=&quot;text-sm&quot;>Showing </span>
                  <span className=&quot;font-semibold text-cyan-400&quot;>{filteredServices.length}</span>
                  <span className=&quot;text-sm&quot;> of </span>
                  <span className=&quot;font-semibold text-purple-400&quot;>{allServices.length}</span>
                  <span className=&quot;text-sm&quot;> services</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className=&quot;py-12 px-4&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <AnimatePresence mode=&quot;wait&quot;>
            {filteredServices.length > 0 ? (
              <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -10, scale: 1.02 }} className=&quot;group&quot;>
                    <div className=&quot;h-full bg-black/40 backdrop-blur-lg border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden p-6 bg-black/40 border border-gray-700/50 rounded-lg backdrop-blur-sm&quot;>
                      {/* Service Header */}
                      <div className=&quot;p-6&quot;>
                        <div className=&quot;flex items-start justify-between mb-4&quot;>
                          <div className=&quot;text-4xl&quot;>{service.icon}</div>
                          {service.popular && (
                            <div className=&quot;bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-2 py-1 rounded-full font-semibold&quot;>
                              POPULAR
                            </div>
                          )}
                        </div>

                        <h3 className=&quot;text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors&quot;>
                          {service.name}
                        </h3>
                        <p className=&quot;text-gray-300 text-sm mb-3 line-clamp-2&quot;>
                          {service.tagline}
                        </p>

                        {/* Price */}
                        <div className=&quot;flex items-baseline gap-2 mb-4&quot;>
                          <span className=&quot;text-3xl font-bold text-white&quot;>{service.price}</span>
                          <span className=&quot;text-gray-400&quot;>{service.period}</span>
                        </div>

                        {/* Description */}
                        <p className=&quot;text-gray-300 text-sm mb-4 line-clamp-3&quot;>
                          {service.description}
                        </p>

                        {/* Features */}
                        <div className=&quot;mb-4&quot;>
                          <h4 className=&quot;text-sm font-semibold text-gray-200 mb-2&quot;>Key Features:</h4>
                          <ul className=&quot;space-y-1&quot;>
                            {service.features.slice(0, 3).map((feature, idx) => (
                              <li key={idx} className=&quot;flex items-center gap-2 text-xs text-gray-400&quot;>
                                <CheckCircle className=&quot;w-3 h-3 text-emerald-400 flex-shrink-0&quot; />
                                <span className=&quot;line-clamp-1&quot;>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Stats */}
                        <div className=&quot;grid grid-cols-3 gap-4 mb-4 text-center&quot;>
                          <div>
                            <div className=&quot;text-lg font-bold text-cyan-400&quot;>{service.customers}</div>
                            <div className=&quot;text-xs text-gray-400&quot;>Customers</div>
                          </div>
                          <div>
                            <div className=&quot;text-lg font-bold text-purple-400&quot;>{service.rating}</div>
                            <div className=&quot;text-xs text-gray-400&quot;>Rating</div>
                          </div>
                          <div>
                            <div className=&quot;text-lg font-bold text-green-400&quot;>{service.reviews}</div>
                            <div className=&quot;text-xs text-gray-400&quot;>Reviews</div>
                          </div>
                        </div>

                        {/* Category Badge */}
                        <div className=&quot;mb-4&quot;>
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${service.color} text-white`}>
                            {service.category}
                          </span>
                        </div>

                        {/* Action Buttons */}
                        <div className=&quot;flex gap-2&quot;>
                          <a 
                            href={service.link} className=&quot;flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm py-2 hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300&quot;>
                            <ArrowRight className=&quot;w-4 h-4 mr-1&quot; />
                            Learn More
                          </Link>
                          <a 
                            href=&quot;/contact&quot; className=&quot;px-4 py-2 border border-gray-600 text-gray-200 hover:bg-gray-700 hover:border-gray-500 transform hover:scale-105 transition-all duration-300&quot;>
                            <MessageSquare className=&quot;w-4 h-4&quot; />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }} className=&quot;text-center py-16&quot;>
                <div className=&quot;text-6xl mb-4&quot;>🔍</div>
                <h3 className=&quot;text-2xl font-bold text-white mb-2&quot;>No services found</h3>
                <p className=&quot;text-gray-400 mb-6&quot;>Try adjusting your search criteria or filters</p>
                <button 
                  onClick={() => {
                  Clear Filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className=&quot;py-16 px-4&quot;>
        <div className=&quot;max-w-4xl mx-auto text-center&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }} className=&quot;bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-lg rounded-3xl p-12 border border-cyan-500/30&quot;>
            <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
              Ready to Transform Your Business?
            </h2>
            <p className=&quot;text-xl text-gray-300 mb-8 max-w-2xl mx-auto&quot;>
              Join the future of technology with our revolutionary 2027 services. 
              Each solution is designed to deliver measurable ROI and competitive advantage.
            </p>
            
            <div className=&quot;flex flex-wrap items-center justify-center gap-6 mb-8&quot;>
              <div className=&quot;flex items-center gap-2 text-cyan-400&quot;>
                <Phone className=&quot;w-5 h-5&quot; />
                <span className=&quot;font-semibold&quot;>{contactInfo.mobile}</span>
              </div>
              <div className=&quot;flex items-center gap-2 text-purple-400&quot;>
                <Mail className=&quot;w-5 h-5&quot; />
                <span className=&quot;font-semibold&quot;>{contactInfo.email}</span>
              </div>
              <div className=&quot;flex items-center gap-2 text-green-400&quot;>
                <MapPin className=&quot;w-5 h-5&quot; />
                <span className=&quot;text-sm font-semibold&quot;>{contactInfo.address}</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-lg px-8 py-4 hover: from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300">
                <Rocket className="w-5 h-5 mr-2" />
                Start Your Transformation
              </Link>
              <a href=&quot;/services&quot; className=&quot;border-2 border-purple-500 text-purple-400 text-lg px-8 py-4 hover:bg-purple-500 hover:text-white transform hover:scale-105 transition-all duration-300&quot;>
                <Globe className=&quot;w-5 h-5 mr-2&quot; />
                Explore All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </UltraQuantumHolographicBackground>
  )
}
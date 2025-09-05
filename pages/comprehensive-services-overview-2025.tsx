import React, { useState } from 'react',
import Head from 'next/head',
import { motion, AnimatePresence } from 'framer-motion',
import { 
  Check, Star, Users, Clock, Shield, Zap, Globe, Rocket, Brain, Atom,
  ArrowRight, ExternalLink, TrendingUp, Award, Target, ChevronDown, Search,
  Filter, Grid, List, BarChart3, DollarSign, Target as TargetIcon
} from 'lucide-react',
import { comprehensiveMicroSaasServices } from '../data/comprehensive-2025-micro-saas-expansion',
import { specializedEmergingTechServices } from '../data/specialized-emerging-tech-services-2025',
export default function ComprehensiveServicesOverviewPage() {
  const [selectedCategory, setSelectedCategory] = useState('all'),
  const [searchTerm, setSearchTerm] = useState(''),
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid'),
  const [sortBy, setSortBy] = useState<'popularity' | 'price' | 'rating' | 'newest'>('popularity'),

  // Combine all services
  const allServices = [...comprehensiveMicroSaasServices, ...specializedEmergingTechServices],

  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀', count: allServices.length },
    { id: 'AI & Machine Learning', name: 'AI & ML', icon: '🧠', count: allServices.filter(s => s.category === 'AI & Machine Learning').length },
    { id: 'Healthcare AI', name: 'Healthcare', icon: '🏥', count: allServices.filter(s => s.category === 'Healthcare AI').length },
    { id: 'Fintech AI', name: 'Fintech', icon: '💰', count: allServices.filter(s => s.category === 'Fintech AI').length },
    { id: 'Cybersecurity', name: 'Security', icon: '🛡️', count: allServices.filter(s => s.category === 'Cybersecurity').length },
    { id: 'IoT & Smart Cities', name: 'Smart Cities', icon: '🏙️', count: allServices.filter(s => s.category === 'IoT & Smart Cities').length },
    { id: 'Blockchain & DeFi', name: 'Blockchain', icon: '🔗', count: allServices.filter(s => s.category === 'Blockchain & DeFi').length },
    { id: 'Quantum Computing', name: 'Quantum', icon: '⚛️', count: allServices.filter(s => s.category === 'Quantum Computing').length },
    { id: 'Space Technology', name: 'Space Tech', icon: '🚀', count: allServices.filter(s => s.category === 'Space Technology').length },
    { id: 'Autonomous Systems', name: 'Autonomous', icon: '🤖', count: allServices.filter(s => s.category === 'Autonomous Systems').length },
    { id: 'AR/VR & Metaverse', name: 'AR/VR', icon: '🥽', count: allServices.filter(s => s.category === 'AR/VR & Metaverse').length },
    { id: '5G/6G Networks', name: '5G/6G', icon: '📡', count: allServices.filter(s => s.category === '5G/6G Networks').length },
    { id: 'Biotechnology AI', name: 'Biotech', icon: '🧬', count: allServices.filter(s => s.category === 'Biotechnology AI').length },
    { id: 'Renewable Energy', name: 'Energy', icon: '⚡', count: allServices.filter(s => s.category === 'Renewable Energy').length },
    { id: 'Edge Computing', name: 'Edge', icon: '🌐', count: allServices.filter(s => s.category === 'Edge Computing').length },
    { id: 'Quantum Internet', name: 'Q-Internet', icon: '🌍', count: allServices.filter(s => s.category === 'Quantum Internet').length },
    { id: 'Neuromorphic Computing', name: 'Neuro', icon: '🧠', count: allServices.filter(s => s.category === 'Neuromorphic Computing').length }
  ],

  // Filter and sort services
  const filteredServices = allServices
    .filter(service => {
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory,
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tagline.toLowerCase().includes(searchTerm.toLowerCase()),
      return matchesCategory && matchesSearch
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'popularity':
          return b.popular ? 1 : -1,
        case 'price':
          return parseFloat(a.price.replace('$', '').replace(, '')) - parseFloat(b.price.replace('$', '').replace(, '')),
        case 'rating':
          return b.rating - a.rating,
        case 'newest':
          return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime(),
        default: return 0
      }
    }),

  const getCategoryIcon = (category: string) => {
    const categoryData = categories.find(cat => cat.id === category),
    return categoryData?.icon || '🚀'
  },

  // Calculate market statistics
  const totalMarketSize = allServices.reduce((sum, service) => {
    const marketSize = service.marketSize.match(/\$([\d.]+)B/),
    return sum + (marketSize ? parseFloat(marketSize[1]) : 0)
  }, 0),

  const averageROI = allServices.reduce((sum, service) => {
    const roi = service.roi.match(/(\d+)%/),
    return sum + (roi ? parseInt(roi[1]) : 0)
  }, 0) / allServices.length,

  const totalCustomers = allServices.reduce((sum, service) => sum + service.customers, 0),

  return (
    <>
      <Head>
        <title>Comprehensive Services Overview 2025 - Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Explore our comprehensive micro SAAS services overview for 2025. Revolutionary AI, quantum computing, cybersecurity, and emerging technology solutions.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;micro SAAS services, AI services, quantum computing, cybersecurity, emerging technology, Zion Tech Group&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/comprehensive-services-overview-2025&quot; />
      </Head>

      <div className=&quot;min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950&quot;>
        {/* Hero Section */}
        <section className=&quot;py-20 px-6&quot;>
          <div className=&quot;max-w-7xl mx-auto text-center&quot;>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className=&quot;text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent&quot;>
                Revolutionary Micro SAAS Services 2025
              </h1>
              <p className=&quot;text-xl text-white/70 max-w-3xl mx-auto mb-8&quot;>
                Discover our cutting-edge micro SAAS solutions that are transforming industries and driving the future of technology with AI, quantum computing, and emerging technologies
              </p>
              
              {/* Market Statistics */}
              <div className=&quot;grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12&quot;>
                <div className=&quot;bg-white/5 rounded-2xl p-6 border border-white/10&quot;>
                  <div className=&quot;text-3xl font-bold text-blue-400&quot;>{allServices.length}+</div>
                  <div className=&quot;text-white/60&quot;>Services Available</div>
                </div>
                <div className=&quot;bg-white/5 rounded-2xl p-6 border border-white/10&quot;>
                  <div className=&quot;text-3xl font-bold text-green-400&quot;>${totalMarketSize.toFixed(1)}B+</div>
                  <div className=&quot;text-white/60&quot;>Total Market Size</div>
                </div>
                <div className=&quot;bg-white/5 rounded-2xl p-6 border border-white/10&quot;>
                  <div className=&quot;text-3xl font-bold text-purple-400&quot;>{totalCustomers.toLocaleString()}+</div>
                  <div className=&quot;text-white/60&quot;>Total Customers</div>
                </div>
                <div className=&quot;bg-white/5 rounded-2xl p-6 border border-white/10&quot;>
                  <div className=&quot;text-3xl font-bold text-orange-400&quot;>{averageROI.toFixed(0)}%+</div>
                  <div className=&quot;text-white/60&quot;>Average ROI</div>
                </div>
              </div>

              {/* Key Benefits */}
              <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto&quot;>
                <div className=&quot;bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-2xl p-6 border border-blue-500/30&quot;>
                  <div className=&quot;text-4xl mb-4&quot;>🚀</div>
                  <h3 className=&quot;text-xl font-bold text-white mb-2&quot;>First-to-Market Solutions</h3>
                  <p className=&quot;text-white/70 text-sm&quot;>Revolutionary services that give you competitive advantages in emerging markets</p>
                </div>
                <div className=&quot;bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-2xl p-6 border border-green-500/30&quot;>
                  <div className=&quot;text-4xl mb-4&quot;>⚡</div>
                  <h3 className=&quot;text-xl font-bold text-white mb-2&quot;>AI-Powered Optimization</h3>
                  <p className=&quot;text-white/70 text-sm&quot;>Advanced AI algorithms that continuously optimize and improve your operations</p>
                </div>
                <div className=&quot;bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl p-6 border border-purple-500/30&quot;>
                  <div className=&quot;text-4xl mb-4&quot;>🛡️</div>
                  <h3 className=&quot;text-xl font-bold text-white mb-2&quot;>Enterprise Security</h3>
                  <p className=&quot;text-white/70 text-sm&quot;>Military-grade security with quantum-resistant encryption and AI threat detection</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className=&quot;px-6 mb-16&quot;>
          <div className=&quot;max-w-7xl mx-auto&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className=&quot;flex flex-col lg:flex-row gap-6 items-center justify-between&quot;
            >
              {/* Search */}
              <div className=&quot;relative flex-1 max-w-md&quot;>
                <Search className=&quot;absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 w-5 h-5&quot; />
                <input
                  type=&quot;text&quot;
                  placeholder=&quot;Search services...&quot;
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className=&quot;w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20&quot;
                />
              </div>

              {/* Sort and View Controls */}
              <div className=&quot;flex items-center gap-4&quot;>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className=&quot;bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-400&quot;
                >
                  <option value=&quot;popularity&quot;>Most Popular</option>
                  <option value=&quot;price&quot;>Price: Low to High</option>
                  <option value=&quot;rating&quot;>Highest Rated</option>
                  <option value=&quot;newest&quot;>Newest First</option>
                </select>

                <div className=&quot;flex bg-white/10 rounded-xl p-1&quot;>
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg transition-all ${
                      viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-white/60 hover:text-white'
                    }`}
                  >
                    <Grid className=&quot;w-5 h-5&quot; />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg transition-all ${
                      viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-white/60 hover:text-white'
                    }`}
                  >
                    <List className=&quot;w-5 h-5&quot; />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className=&quot;px-6 mb-16&quot;>
          <div className=&quot;max-w-7xl mx-auto&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className=&quot;flex flex-wrap justify-center gap-3&quot;
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                      : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  <span>{category.icon}</span>
                  {category.name}
                  <span className=&quot;text-xs bg-white/20 px-2 py-1 rounded-full&quot;>{category.count}</span>
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Services Display */}
        <section className=&quot;px-6 pb-20&quot;>
          <div className=&quot;max-w-7xl mx-auto&quot;>
            {viewMode === 'grid' ? (
              <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
                <AnimatePresence mode=&quot;wait&quot;>
                  {filteredServices.map((service, index) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -30 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl&quot;
                    >
                      {/* Popular Badge */}
                      {service.popular && (
                        <div className=&quot;absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 z-10&quot;>
                          <Star className=&quot;w-3 h-3&quot; />
                          Popular
                        </div>
                      )}

                      {/* Service Content */}
                      <div className=&quot;p-6&quot;>
                        <div className=&quot;flex items-start justify-between mb-4&quot;>
                          <div className=&quot;text-4xl&quot;>{service.icon}</div>
                          <div className=&quot;text-right&quot;>
                            <div className=&quot;text-2xl font-bold text-white&quot;>{service.price}</div>
                            <div className=&quot;text-white/60 text-sm&quot;>{service.period}</div>
                          </div>
                        </div>

                        <h3 className=&quot;text-xl font-bold text-white mb-2&quot;>{service.name}</h3>
                        <p className=&quot;text-white/70 text-sm mb-4&quot;>{service.tagline}</p>

                        {/* Features */}
                        <div className=&quot;space-y-2 mb-6&quot;>
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <div key={idx} className=&quot;flex items-center gap-2 text-sm text-white/60&quot;>
                              <Check className=&quot;w-4 h-4 text-green-400&quot; />
                              {feature}
                            </div>
                          ))}
                        </div>

                        {/* Stats */}
                        <div className=&quot;grid grid-cols-3 gap-4 mb-6 text-center&quot;>
                          <div>
                            <div className=&quot;text-lg font-bold text-blue-400&quot;>{service.rating}</div>
                            <div className=&quot;text-xs text-white/60&quot;>Rating</div>
                          </div>
                          <div>
                            <div className=&quot;text-lg font-bold text-green-400&quot;>{service.customers}+</div>
                            <div className=&quot;text-xs text-white/60&quot;>Customers</div>
                          </div>
                          <div>
                            <div className=&quot;text-lg font-bold text-purple-400&quot;>{service.trialDays}d</div>
                            <div className=&quot;text-xs text-white/60&quot;>Trial</div>
                          </div>
                        </div>

                        {/* CTA */}
                        <a
                          href={service.link}
                          target=&quot;_blank&quot;
                          rel=&quot;noopener noreferrer&quot;
                          className=&quot;w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 px-4 rounded-xl font-medium text-center block hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2&quot;
                        >
                          Learn More
                          <ExternalLink className=&quot;w-4 h-4&quot; />
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            ) : (
              <div className=&quot;space-y-6&quot;>
                <AnimatePresence mode=&quot;wait&quot;>
                  {filteredServices.map((service, index) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 30 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 p-6&quot;
                    >
                      <div className=&quot;flex flex-col lg:flex-row gap-6&quot;>
                        {/* Left Side - Icon and Basic Info */}
                        <div className=&quot;flex-shrink-0&quot;>
                          <div className=&quot;text-6xl mb-4&quot;>{service.icon}</div>
                          {service.popular && (
                            <div className=&quot;bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full text-center&quot;>
                              Popular
                            </div>
                          )}
                        </div>

                        {/* Center - Service Details */}
                        <div className=&quot;flex-1&quot;>
                          <div className=&quot;flex items-start justify-between mb-4&quot;>
                            <div>
                              <h3 className=&quot;text-2xl font-bold text-white mb-2&quot;>{service.name}</h3>
                              <p className=&quot;text-white/70 text-lg mb-3&quot;>{service.tagline}</p>
                              <p className=&quot;text-white/60 text-sm&quot;>{service.description}</p>
                            </div>
                            <div className=&quot;text-right&quot;>
                              <div className=&quot;text-3xl font-bold text-white&quot;>{service.price}</div>
                              <div className=&quot;text-white/60&quot;>{service.period}</div>
                            </div>
                          </div>

                          {/* Features Grid */}
                          <div className=&quot;grid grid-cols-2 gap-2 mb-4&quot;>
                            {service.features.slice(0, 6).map((feature, idx) => (
                              <div key={idx} className=&quot;flex items-center gap-2 text-sm text-white/60&quot;>
                                <Check className=&quot;w-4 h-4 text-green-400 flex-shrink-0&quot; />
                                <span className=&quot;truncate&quot;>{feature}</span>
                              </div>
                            ))}
                          </div>

                          {/* Stats Row */}
                          <div className=&quot;flex items-center gap-6 text-sm text-white/60&quot;>
                            <div className=&quot;flex items-center gap-2&quot;>
                              <Star className=&quot;w-4 h-4 text-yellow-400&quot; />
                              <span>{service.rating} ({service.reviews} reviews)</span>
                            </div>
                            <div className=&quot;flex items-center gap-2&quot;>
                              <Users className=&quot;w-4 h-4 text-blue-400&quot; />
                              <span>{service.customers}+ customers</span>
                            </div>
                            <div className=&quot;flex items-center gap-2&quot;>
                              <Clock className=&quot;w-4 h-4 text-green-400&quot; />
                              <span>{service.setupTime} setup</span>
                            </div>
                          </div>
                        </div>

                        {/* Right Side - CTA and Category */}
                        <div className=&quot;flex-shrink-0 flex flex-col items-end gap-4&quot;>
                          <div className=&quot;text-right&quot;>
                            <div className=&quot;text-sm text-white/60 mb-1&quot;>Category</div>
                            <div className=&quot;flex items-center gap-2 text-white&quot;>
                              <span>{getCategoryIcon(service.category)}</span>
                              <span className=&quot;text-sm&quot;>{service.category}</span>
                            </div>
                          </div>

                          <a
                            href={service.link}
                            target=&quot;_blank&quot;
                            rel=&quot;noopener noreferrer&quot;
                            className=&quot;bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 px-6 rounded-xl font-medium hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center gap-2&quot;
                          >
                            Learn More
                            <ArrowRight className=&quot;w-4 h-4&quot; />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            )}

            {/* No Results */}
            {filteredServices.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className=&quot;text-center py-20&quot;
              >
                <div className=&quot;text-6xl mb-4&quot;>🔍</div>
                <h3 className=&quot;text-2xl font-bold text-white mb-2&quot;>No services found</h3>
                <p className=&quot;text-white/60&quot;>Try adjusting your search or filter criteria</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Contact CTA */}
        <section className=&quot;px-6 pb-20&quot;>
          <div className=&quot;max-w-4xl mx-auto&quot;>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className=&quot;text-center&quot;
            >
              <div className=&quot;bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl p-12 border border-blue-500/30&quot;>
                <h2 className=&quot;text-3xl font-bold text-white mb-4&quot;>
                  Ready to Transform Your Business?
                </h2>
                <p className=&quot;text-xl text-white/70 mb-8 max-w-2xl mx-auto&quot;>
                  Join thousands of companies already using our revolutionary micro SAAS services to drive innovation and growth.
                </p>
<<<<<<< HEAD
                <div className="flex flex-col sm: flex-row gap-4 justify-center">
=======
                <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                  <a
                    href=&quot;mailto:kleber@ziontechgroup.com&quot;
                    className=&quot;bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 px-8 rounded-xl font-medium hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2&quot;
                  >
                    Contact Sales Team
                    <ArrowRight className=&quot;w-5 h-5&quot; />
                  </Link>
                  <a
                    href=&quot;tel:+13024640950&quot;
                    className=&quot;bg-white/10 text-white py-4 px-8 rounded-xl font-medium hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2&quot;
                  >
                    Call +1 302 464 0950
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}
import React, { useState } from 'react',
import Head from 'next/head'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion',
import { 
  Search, Filter, Star, Users, TrendingUp,
  DollarSign, Clock, CheckCircle, ArrowRight,
  Brain, Rocket, Dna, Globe, Shield, Wifi,
  Package, Bot, Car, Building2, Monitor, Cpu,
  Zap, Atom, Database, Cloud, Lock, Code,
  Phone, Mail, MapPin, ExternalLink, ChevronDown,
  Award, Target, Zap as ZapIcon, Globe as GlobeIcon
} from 'lucide-react',

// Import the new revolutionary services
import { revolutionary2025Services } from '../data/revolutionary-2025-innovative-services'
import { revolutionary2025ITServices } from '../data/revolutionary-2025-it-infrastructure'
const allServices = [...revolutionary2025Services, ...revolutionary2025ITServices],

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
},

const serviceCategories = [
  {
    id: 'ai-consciousness',
    title: '🧠 AI Consciousness & Emotional Intelligence',
    description: 'Revolutionary AI consciousness and emotional intelligence platforms',
    icon: Brain,
    color: 'from-violet-500 to-purple-500',
    services: allServices.filter(s => s.category.includes('AI Consciousness') || s.category.includes('Healthcare AI')),
    gradient: 'from-violet-500/20 to-indigo-500/20'
  },
  {
    id: 'quantum-emerging',
    title: '⚛️ Quantum & Emerging Tech',
    description: 'Quantum computing, DNA computing, and beyond',
    icon: Atom,
    color: 'from-blue-500 to-cyan-500',
    services: allServices.filter(s => s.category.includes('Quantum') || s.category.includes('DNA Computing')),
    gradient: 'from-blue-500/20 to-cyan-500/20'
  },
  {
    id: 'space-tech',
    title: '🚀 Space Technology & Satellite',
    description: 'Space mission management and satellite operations',
    icon: Rocket,
    color: 'from-indigo-500 to-blue-500',
    services: allServices.filter(s => s.category.includes('Space Technology')),
    gradient: 'from-indigo-500/20 to-blue-500/20'
  },
  {
    id: 'cybersecurity',
    title: '🔒 Next-Generation Cybersecurity',
    description: 'Quantum encryption and AI threat detection',
    icon: Shield,
    color: 'from-red-500 to-pink-500',
    services: allServices.filter(s => s.category.includes('Cybersecurity')),
    gradient: 'from-red-500/20 to-pink-500/20'
  },
  {
    id: 'cloud-infrastructure',
    title: '☁️ Quantum Cloud & Infrastructure',
    description: 'Quantum-enhanced cloud computing and infrastructure',
    icon: Cloud,
    color: 'from-cyan-500 to-blue-500',
    services: allServices.filter(s => s.category.includes('Cloud') || s.category.includes('Infrastructure')),
    gradient: 'from-cyan-500/20 to-blue-500/20'
  },
  {
    id: 'fintech',
    title: '🏦 Financial Technology Revolution',
    description: 'AI-powered trading and quantum risk management',
    icon: DollarSign,
    color: 'from-green-500 to-emerald-500',
    services: allServices.filter(s => s.category.includes('Financial Technology')),
    gradient: 'from-green-500/20 to-emerald-500/20'
  },
  {
    id: 'industrial-iot',
    title: '🏭 Industrial IoT & Smart Manufacturing',
    description: 'Zero downtime manufacturing and predictive maintenance',
    icon: Building2,
    color: 'from-gray-500 to-slate-500',
    services: allServices.filter(s => s.category.includes('Industrial IoT')),
    gradient: 'from-gray-500/20 to-slate-500/20'
  },
  {
    id: 'edtech',
    title: '🎓 Education Technology Revolution',
    description: 'AI-powered personalized learning and 10x faster knowledge acquisition',
    icon: Users,
    color: 'from-blue-500 to-cyan-500',
    services: allServices.filter(s => s.category.includes('Education Technology')),
    gradient: 'from-blue-500/20 to-cyan-500/20'
  },
  {
    id: 'sustainability',
    title: '🌱 Sustainability & Green Technology',
    description: 'AI-powered environmental solutions for carbon neutrality',
    icon: Globe,
    color: 'from-green-500 to-emerald-500',
    services: allServices.filter(s => s.category.includes('Sustainability')),
    gradient: 'from-green-500/20 to-emerald-500/20'
  },
  {
    id: 'logistics',
    title: '🚛 Logistics & Supply Chain',
    description: '99.9% delivery accuracy and zero waste supply chain',
    icon: Package,
    color: 'from-orange-500 to-red-500',
    services: allServices.filter(s => s.category.includes('Logistics')),
    gradient: 'from-orange-500/20 to-red-500/20'
  }
],

export default function Revolutionary2025ServicesShowcase() {
  const [searchTerm, setSearchTerm] = useState(''),
  const [selectedCategory, setSelectedCategory] = useState('all'),
  const [sortBy, setSortBy] = useState('popularity'),
  const [viewMode, setViewMode] = useState('grid'),

// Import the new revolutionary services

const _allServices = [...revolutionary2025Services, ...revolutionary2025ITServices];

const _contactInfo = {_mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'};

const _serviceCategories = [
  {_id: 'ai-consciousness', _title: '🧠 AI Consciousness & Emotional Intelligence', _description: 'Revolutionary AI consciousness and emotional intelligence platforms', _icon: Brain, _color: 'from-violet-500 to-purple-500', _services: allServices.filter(s => s.category.includes('AI Consciousness') || s.category.includes('Healthcare AI')), _gradient: 'from-violet-500/20 to-indigo-500/20'},
  {_id: 'quantum-emerging', _title: '⚛️ Quantum & Emerging Tech', _description: 'Quantum computing, _DNA computing, _and beyond', _icon: Atom, _color: 'from-blue-500 to-cyan-500', _services: allServices.filter(s => s.category.includes('Quantum') || s.category.includes('DNA Computing')), _gradient: 'from-blue-500/20 to-cyan-500/20'},
  {_id: 'space-tech', _title: '🚀 Space Technology & Satellite', _description: 'Space mission management and satellite operations', _icon: Rocket, _color: 'from-indigo-500 to-blue-500', _services: allServices.filter(s => s.category.includes('Space Technology')), _gradient: 'from-indigo-500/20 to-blue-500/20'},
  {_id: 'cybersecurity', _title: '🔒 Next-Generation Cybersecurity', _description: 'Quantum encryption and AI threat detection', _icon: Shield, _color: 'from-red-500 to-pink-500', _services: allServices.filter(s => s.category.includes('Cybersecurity')), _gradient: 'from-red-500/20 to-pink-500/20'},
  {_id: 'cloud-infrastructure', _title: '☁️ Quantum Cloud & Infrastructure', _description: 'Quantum-enhanced cloud computing and infrastructure', _icon: Cloud, _color: 'from-cyan-500 to-blue-500', _services: allServices.filter(s => s.category.includes('Cloud') || s.category.includes('Infrastructure')), _gradient: 'from-cyan-500/20 to-blue-500/20'},
  {_id: 'fintech', _title: '🏦 Financial Technology Revolution', _description: 'AI-powered trading and quantum risk management', _icon: DollarSign, _color: 'from-green-500 to-emerald-500', _services: allServices.filter(s => s.category.includes('Financial Technology')), _gradient: 'from-green-500/20 to-emerald-500/20'},
  {_id: 'industrial-iot', _title: '🏭 Industrial IoT & Smart Manufacturing', _description: 'Zero downtime manufacturing and predictive maintenance', _icon: Building2, _color: 'from-gray-500 to-slate-500', _services: allServices.filter(s => s.category.includes('Industrial IoT')), _gradient: 'from-gray-500/20 to-slate-500/20'},
  {_id: 'edtech', _title: '🎓 Education Technology Revolution', _description: 'AI-powered personalized learning and 10x faster knowledge acquisition', _icon: Users, _color: 'from-blue-500 to-cyan-500', _services: allServices.filter(s => s.category.includes('Education Technology')), _gradient: 'from-blue-500/20 to-cyan-500/20'},
  {_id: 'sustainability', _title: '🌱 Sustainability & Green Technology', _description: 'AI-powered environmental solutions for carbon neutrality', _icon: Globe, _color: 'from-green-500 to-emerald-500', _services: allServices.filter(s => s.category.includes('Sustainability')), _gradient: 'from-green-500/20 to-emerald-500/20'},
  {_id: 'logistics', _title: '🚛 Logistics & Supply Chain', _description: '99.9% delivery accuracy and zero waste supply chain', _icon: Package, _color: 'from-orange-500 to-red-500', _services: allServices.filter(s => s.category.includes('Logistics')), _gradient: 'from-orange-500/20 to-red-500/20'}
];

export default function Revolutionary2025ServicesShowcase() {_const [searchTerm, _setSearchTerm] = useState('');
  const [selectedCategory, _setSelectedCategory] = useState('all');
  const [sortBy, _setSortBy] = useState('popularity');
  const [viewMode, _setViewMode] = useState('grid');
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _filteredServices = allServices.filter(service => {
    const _matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase()),
    const matchesCategory = selectedCategory === 'all' || 
                           service.category.toLowerCase().includes(selectedCategory.toLowerCase()),
    return matchesSearch && matchesCategory
  }),
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231

  const _sortedServices = [...filteredServices].sort(_(a, _b) => {_switch (sortBy) {
      case 'price-low':
        return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, '')),
      case 'price-high':
        return parseFloat(b.price.replace(/[^0-9.]/g, '')) - parseFloat(a.price.replace(/[^0-9.]/g, '')),
      case 'rating':
        return b.rating - a.rating,
      case 'customers':
      case 'rating':
        return b.rating - a.rating,
      case 'customers':
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
        return b.customers - a.customers,
      default: return b.popular ? 1 : -1
    }
  }),

  return (
    <>
      <Head>
        <title>Revolutionary 2025 Services Showcase | Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Discover the most innovative micro SAAS services, IT solutions, and AI platforms of 2025. Revolutionary technology with real implementation and proven ROI.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;AI services, quantum computing, cybersecurity, cloud infrastructure, fintech, healthcare AI, space technology, Zion Tech Group&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/revolutionary-2025-services-showcase&quot; />
      </Head>

      <div className=&quot;min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white&quot;>
        {/* Hero Section */}
        <section className=&quot;relative py-20 px-4 overflow-hidden&quot;>
          <div className=&quot;absolute inset-0 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20&quot; />
          <div className=&quot;absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%239C92AC&quot; fill-opacity=&quot;0.1&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30&quot; />
          
          <div className=&quot;container mx-auto relative z-10&quot;>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=&quot;text-center max-w-4xl mx-auto&quot;
            >
              <h1 className=&quot;text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent&quot;>
                Revolutionary 2025 Services
              </h1>
              <p className=&quot;text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed&quot;>
                Discover the most innovative micro SAAS services, IT solutions, and AI platforms that are reshaping industries and creating unprecedented value.
              </p>
              <div className=&quot;flex flex-wrap justify-center gap-4 mb-8&quot;>
                <div className=&quot;flex items-center gap-2 bg-purple-500/20 border border-purple-500/30 px-4 py-2 rounded-full&quot;>
                  <Star className=&quot;w-5 h-5 text-purple-400&quot; />
                  <span className=&quot;text-purple-300&quot;>Real Implementation</span>
                </div>
                <div className=&quot;flex items-center gap-2 bg-blue-500/20 border border-blue-500/30 px-4 py-2 rounded-full&quot;>
                  <TrendingUp className=&quot;w-5 h-5 text-blue-400&quot; />
                  <span className=&quot;text-blue-300&quot;>Proven ROI</span>
                </div>
                <div className=&quot;flex items-center gap-2 bg-green-500/20 border border-green-500/30 px-4 py-2 rounded-full&quot;>
                  <Award className=&quot;w-5 h-5 text-green-400&quot; />
                  <span className=&quot;text-green-300&quot;>Market Leaders</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className=&quot;py-8 px-4 border-b border-gray-800&quot;>
          <div className=&quot;container mx-auto&quot;>
            <div className=&quot;flex flex-col lg:flex-row gap-6 items-center justify-between&quot;>
              {/* Search */}
              <div className=&quot;relative flex-1 max-w-md&quot;>
                <Search className=&quot;absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5&quot; />
                <input
                  type=&quot;text&quot;
                  placeholder=&quot;Search revolutionary services...&quot;
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className=&quot;w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent&quot;
                />
              </div>

              {/* Filters */}
              <div className=&quot;flex flex-wrap gap-4 items-center&quot;>
                {/* Category Filter */}
                <div className=&quot;relative&quot;>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className=&quot;appearance-none bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent pr-10&quot;
                  >
                    <option value=&quot;all&quot;>All Categories</option>
                    {serviceCategories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.title.split(' ').slice(1).join(' ')}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className=&quot;absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none&quot; />
                </div>

                {/* Sort Filter */}
                <div className=&quot;relative&quot;>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className=&quot;appearance-none bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent pr-10&quot;
                  >
                    <option value=&quot;popularity&quot;>Most Popular</option>
                    <option value=&quot;rating&quot;>Highest Rated</option>
                    <option value=&quot;customers&quot;>Most Customers</option>
                    <option value=&quot;price-low&quot;>Price: Low to High</option>
                    <option value=&quot;price-high&quot;>Price: High to Low</option>
                  </select>
                  <ChevronDown className=&quot;absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none&quot; />
                </div>

                {/* View Mode */}
                <div className=&quot;flex bg-gray-800/50 border border-gray-700 rounded-lg p-1&quot;>
                  <button
                    onClick={_() => setViewMode('grid')}
                    className={_`p-2 rounded ${viewMode === 'grid' ? 'bg-purple-500 text-white' : 'text-gray-400 hover:text-white'}`}
                  >
                    <svg className=&quot;w-5 h-5&quot; fill=&quot;currentColor&quot; viewBox=&quot;0 0 20 20&quot;>
                      <path d=&quot;M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z&quot; />
                    </svg>
                  </button>
                  <button
                    onClick={_() => setViewMode('list')}
                    className={_`p-2 rounded ${viewMode === 'list' ? 'bg-purple-500 text-white' : 'text-gray-400 hover:text-white'}`}
                  >
                    <svg className=&quot;w-5 h-5&quot; fill=&quot;currentColor&quot; viewBox=&quot;0 0 20 20&quot;>
                      <path fillRule=&quot;evenodd&quot; d=&quot;M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z&quot; clipRule=&quot;evenodd&quot; />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className=&quot;py-16 px-4&quot;>
          <div className=&quot;container mx-auto&quot;>
            {/* Results Count */}
            <div className=&quot;mb-8&quot;>
              <p className=&quot;text-gray-400&quot;>
                Showing <span className=&quot;text-white font-semibold&quot;>{filteredServices.length}</span> revolutionary services
                {selectedCategory !== 'all' && (
                  <> in <span className=&quot;text-white font-semibold&quot;>{serviceCategories.find(c => c.id === selectedCategory)?.title.split(' ').slice(1).join(' ')}</span></>
                )}
              </p>
            </div>

            {/* Services Grid */}
            <AnimatePresence mode=&quot;wait&quot;>
              {viewMode === 'grid' ? (
                <motion.div
                  key=&quot;grid&quot;
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className=&quot;grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8&quot;
                >
                  {_sortedServices.map((service, _index) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className=&quot;group relative&quot;
                    >
                      <div className=&quot;relative bg-gradient-to-br from-gray-900/80 to-black/90 border border-gray-700/50 rounded-2xl p-6 h-full backdrop-blur-xl hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105&quot;>
                        {/* Popular Badge */}
                        {service.popular && (
                          <div className=&quot;absolute -top-3 -right-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full&quot;>
                            POPULAR
                          </div>
                        )}

                        {/* Service Icon */}
                        <div className=&quot;text-4xl mb-4&quot;>{service.icon}</div>

                        {/* Service Title */}
                        <h3 className=&quot;text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors&quot;>
                          {service.name}
                        </h3>

                        {/* Tagline */}
                        <p className=&quot;text-gray-300 text-sm mb-4 leading-relaxed&quot;>
                          {service.tagline}
                        </p>

                        {/* Price */}
                        <div className=&quot;text-3xl font-bold text-white mb-4&quot;>
                          {service.price}
                          <span className=&quot;text-lg text-gray-400 font-normal&quot;>{service.period}</span>
                        </div>

                        {/* Features */}
                        <div className=&quot;space-y-2 mb-6&quot;>
                          <h4 className=&quot;text-sm font-semibold text-purple-400&quot;>Key Features</h4>
                          <ul className=&quot;space-y-1&quot;>
                            {service.features.slice(0, 4).map((feature, featureIndex) => (
                              <li key={featureIndex} className=&quot;flex items-center text-xs text-gray-300&quot;>
                                <CheckCircle className=&quot;w-3 h-3 text-green-400 mr-2 flex-shrink-0&quot; />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Market Data */}
                        <div className=&quot;grid grid-cols-2 gap-3 mb-6&quot;>
                          <div className=&quot;bg-gray-800/50 rounded-lg p-3&quot;>
                            <div className=&quot;text-xs text-gray-400 mb-1&quot;>Market Size</div>
                            <div className=&quot;text-sm text-gray-200&quot;>{service.marketSize}</div>
                          </div>
                          <div className=&quot;bg-gray-800/50 rounded-lg p-3&quot;>
                            <div className=&quot;text-xs text-gray-400 mb-1&quot;>Growth Rate</div>
                            <div className=&quot;text-sm text-gray-200&quot;>{service.growthRate}</div>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className=&quot;flex space-x-3 mb-4&quot;>
                          <Link href={service.link} target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot;>
                            <button className=&quot;flex-1 bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-all duration-300 text-sm&quot;>
                              <ExternalLink className=&quot;w-4 h-4 mr-2 inline&quot; />
                              Learn More
                            </button>
                          </Link>
                          <Link href=&quot;/contact&quot;>
                            <button className=&quot;px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:border-purple-500 hover:text-purple-400 transition-all duration-300 text-sm&quot;>
                              Contact
                            </button>
                          </Link>
                        </div>

                        {/* Contact Info */}
                        <div className=&quot;grid grid-cols-1 gap-2 text-xs&quot;>
                          <div className=&quot;flex items-center gap-2 text-purple-400&quot;>
                            <Phone className=&quot;w-3 h-3&quot; />
                            <a href={`tel:${service.contactInfo.mobile.replace(/[^+\d]/g, '')}`} className=&quot;hover:text-white&quot;>
                              {service.contactInfo.mobile}
                            </Link>
                          </div>
                          <div className=&quot;flex items-center gap-2 text-blue-400&quot;>
                            <Mail className=&quot;w-3 h-3&quot; />
                            <a href={`mailto:${service.contactInfo.email}`} className=&quot;hover:text-white&quot;>
                              {service.contactInfo.email}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key=&quot;list&quot;
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className=&quot;space-y-6&quot;
                >
                  {_sortedServices.map((service, _index) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className=&quot;bg-gradient-to-r from-gray-900/80 to-black/90 border border-gray-700/50 rounded-xl p-6 backdrop-blur-xl hover:border-purple-500/50 transition-all duration-300&quot;
                    >
                      <div className=&quot;flex flex-col lg:flex-row gap-6&quot;>
                        {/* Left Column */}
                        <div className=&quot;flex-1&quot;>
                          <div className=&quot;flex items-start gap-4 mb-4&quot;>
                            <div className=&quot;text-4xl&quot;>{service.icon}</div>
                            <div className=&quot;flex-1&quot;>
                              <div className=&quot;flex items-center gap-3 mb-2&quot;>
                                <h3 className=&quot;text-xl font-bold text-white&quot;>{service.name}</h3>
                                {service.popular && (
                                  <span className=&quot;bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full&quot;>
                                    POPULAR
                                  </span>
                                )}
                              </div>
                              <p className=&quot;text-gray-300 text-sm&quot;>{service.tagline}</p>
                            </div>
                          </div>
                          
                          <p className=&quot;text-gray-300 mb-4 leading-relaxed&quot;>{service.description}</p>
                          
                          <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4 mb-4&quot;>
                            <div>
                              <h4 className=&quot;text-sm font-semibold text-purple-400 mb-2&quot;>Key Features</h4>
                              <ul className=&quot;space-y-1&quot;>
                                {service.features.slice(0, 4).map((feature, featureIndex) => (
                                  <li key={featureIndex} className=&quot;flex items-center text-sm text-gray-300&quot;>
                                    <CheckCircle className=&quot;w-4 h-4 text-green-400 mr-2 flex-shrink-0&quot; />
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className=&quot;text-sm font-semibold text-blue-400 mb-2&quot;>Technology Stack</h4>
                              <div className=&quot;flex flex-wrap gap-2&quot;>
                                {service.technology.slice(0, 6).map((tech, techIndex) => (
                                  <span key={techIndex} className=&quot;bg-gray-800/50 text-gray-300 text-xs px-2 py-1 rounded&quot;>
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Right Column */}
                        <div className=&quot;lg:w-80 space-y-4&quot;>
                          {/* Price */}
                          <div className=&quot;text-center&quot;>
                            <div className=&quot;text-3xl font-bold text-white mb-1&quot;>
                              {service.price}
                              <span className=&quot;text-lg text-gray-400 font-normal&quot;>{service.period}</span>
                            </div>
                            <div className=&quot;text-sm text-gray-400&quot;>30-day free trial</div>
                          </div>

                          {/* Market Data */}
                          <div className=&quot;grid grid-cols-2 gap-3&quot;>
                            <div className=&quot;bg-gray-800/50 rounded-lg p-3 text-center&quot;>
                              <div className=&quot;text-xs text-gray-400 mb-1&quot;>Market Size</div>
                              <div className=&quot;text-sm text-gray-200&quot;>{service.marketSize}</div>
                            </div>
                            <div className=&quot;bg-gray-800/50 rounded-lg p-3 text-center&quot;>
                              <div className=&quot;text-xs text-gray-400 mb-1&quot;>Growth Rate</div>
                              <div className=&quot;text-sm text-gray-200&quot;>{service.growthRate}</div>
                            </div>
                          </div>

                          {/* ROI */}
                          <div className=&quot;bg-green-500/20 border border-green-500/30 rounded-lg p-3&quot;>
                            <div className=&quot;text-xs text-green-400 mb-1&quot;>Expected ROI</div>
                            <div className=&quot;text-sm text-green-300&quot;>{service.roi}</div>
                          </div>

                          {/* Action Buttons */}
                          <div className=&quot;space-y-3&quot;>
                            <Link href={service.link} target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot;>
                              <button className=&quot;w-full bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300&quot;>
                                <ExternalLink className=&quot;w-4 h-4 mr-2 inline&quot; />
                                Learn More
                              </button>
                            </Link>
                            <Link href=&quot;/contact&quot;>
                              <button className=&quot;w-full px-4 py-3 border border-gray-600 text-gray-300 rounded-lg hover:border-purple-500 hover:text-purple-400 transition-all duration-300&quot;>
                                Contact Sales
                              </button>
                            </Link>
                          </div>

                          {/* Contact Info */}
                          <div className=&quot;space-y-2 text-xs&quot;>
                            <div className=&quot;flex items-center gap-2 text-purple-400&quot;>
                              <Phone className=&quot;w-3 h-3&quot; />
                              <a href={`tel:${service.contactInfo.mobile.replace(/[^+\d]/g, '')}`} className=&quot;hover:text-white&quot;>
                                {service.contactInfo.mobile}
                              </Link>
                            </div>
                            <div className=&quot;flex items-center gap-2 text-blue-400&quot;>
                              <Mail className=&quot;w-3 h-3&quot; />
                              <a href={`mailto:${service.contactInfo.email}`} className=&quot;hover:text-white&quot;>
                                {service.contactInfo.email}
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* No Results */}
            {filteredServices.length === 0 && (
              <div className=&quot;text-center py-16&quot;>
                <div className=&quot;text-6xl mb-4&quot;>🔍</div>
                <h3 className=&quot;text-2xl font-bold text-white mb-2&quot;>No services found</h3>
                <p className=&quot;text-gray-400 mb-6&quot;>Try adjusting your search terms or filters</p>
                <button
                  onClick={() => {
                    setSearchTerm(''),
                    setSelectedCategory('all')
                  }}
                  className=&quot;bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors&quot;
                  className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Contact Section */}
        <section className=&quot;py-20 px-4 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20&quot;>
          <div className=&quot;container mx-auto text-center&quot;>
            <motion.div
              initial={_{ opacity: 0, _y: 30}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              viewport={_{ once: true}}
            >
              <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
                Ready to Transform Your Business?
              </h2>
              <p className=&quot;text-xl text-gray-300 mb-8 max-w-3xl mx-auto&quot;>
                Join thousands of companies already leveraging our revolutionary services to achieve unprecedented growth and innovation.
              </p>
              
              <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8&quot;>
                <div className=&quot;bg-gray-800/50 border border-gray-700/50 rounded-lg p-6&quot;>
                  <Phone className=&quot;w-8 h-8 text-purple-400 mx-auto mb-4&quot; />
                  <h3 className=&quot;text-lg font-semibold text-white mb-2&quot;>Call Us</h3>
                  <p className=&quot;text-gray-300 mb-3&quot;>{contactInfo.mobile}</p>
                  <a href={`tel:${contactInfo.mobile.replace(/[^+\d]/g, '')}`} className=&quot;text-purple-400 hover:text-purple-300&quot;>
                    Call Now →
                  </Link>
                </div>
                
                <div className=&quot;bg-gray-800/50 border border-gray-700/50 rounded-lg p-6&quot;>
                  <Mail className=&quot;w-8 h-8 text-blue-400 mx-auto mb-4&quot; />
                  <h3 className=&quot;text-lg font-semibold text-white mb-2&quot;>Email Us</h3>
                  <p className=&quot;text-gray-300 mb-3&quot;>{contactInfo.email}</p>
                  <a href={`mailto:${contactInfo.email}`} className=&quot;text-blue-400 hover:text-blue-300&quot;>
                    Send Email →
                  </Link>
                </div>
                
                <div className=&quot;bg-gray-800/50 border border-gray-700/50 rounded-lg p-6&quot;>
                  <MapPin className=&quot;w-8 h-8 text-green-400 mx-auto mb-4&quot; />
                  <h3 className=&quot;text-lg font-semibold text-white mb-2&quot;>Visit Us</h3>
                  <p className=&quot;text-gray-300 mb-3 text-sm&quot;>{contactInfo.address}</p>
                  <a href={`https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`} target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot; className=&quot;text-green-400 hover:text-green-300&quot;>
                    Get Directions →
                  </Link>
                </div>
              </div>

              <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
                <Link href=&quot;/contact&quot;>
                  <button className=&quot;bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105&quot;>
                    Start Your Transformation
                  </button>
                </Link>
                <Link href={contactInfo.website}>
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
                    Visit Website
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}
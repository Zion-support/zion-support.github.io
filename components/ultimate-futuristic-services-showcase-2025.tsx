import React, { useState } from 'react',
import Head from 'next/head'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion',
import { 
  Star, TrendingUp, Users, Award, Clock, Heart,
  Brain, Atom, Shield, Rocket, Zap, Globe,
  CheckCircle, ArrowRight, Search, Filter,
  ChevronDown, ChevronUp, Eye, Play, Sparkles,
  Target, Microscope, Lock, Cloud, BarChart3,
  Settings, Cpu, Database, Network, Server,
  ShieldCheck, GlobeIcon, StarIcon, TrendingUpIcon,
  UsersIcon, CheckCircleIcon, ArrowRightIcon,
  CpuIcon, DollarSign, Phone, Mail, MapPin,
  Dna, Target as TargetIcon, Shield as ShieldIcon,
  BookOpen, Sparkles as SparklesIcon, Zap as ZapIcon,
  Brain as BrainIcon, Play as PlayIcon
} from 'lucide-react',
import Layout from '../components/layout/Layout'
import { ultimateFuturisticServices2025 } from '../data/2025-ultimate-futuristic-services'
const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
},

const serviceCategories = [
  {
    title: 'AI & Consciousness',
    description: 'Revolutionary AI platforms with consciousness and emotional intelligence',
    icon: Brain,
    color: 'from-violet-500 to-purple-600',
    count: 3
  },
  {
    title: 'Quantum & Emerging Tech',
    description: 'Breakthrough quantum computing and space technology solutions',
    icon: Atom,
    color: 'from-indigo-500 to-blue-600',
    count: 4
  },
  {
    title: 'Space Technology',
    description: 'AI-powered space exploration and resource extraction',
    icon: Rocket,
    color: 'from-blue-500 to-cyan-600',
    count: 1
  },
  {
    title: 'Financial Technology',
    description: 'Quantum AI-powered financial trading and analytics',
    icon: DollarSign,
    color: 'from-green-500 to-emerald-600',
    count: 1
  },
  {
    title: 'Content Automation',
    description: 'Autonomous AI content creation and management',
    icon: BookOpen,
    color: 'from-purple-500 to-pink-600',
    count: 1
  },
  {
    title: 'Cybersecurity',
    description: 'Quantum encryption and advanced threat detection',
    icon: Shield,
    color: 'from-red-500 to-orange-600',
    count: 1
  },
  {
    title: 'Healthcare Technology',
    description: 'AI-powered medical diagnostics and treatment',
    icon: Heart,
    color: 'from-teal-500 to-cyan-600',
    count: 1
  },
  {
    title: 'Energy Technology',
    description: 'Quantum computing for fusion power and energy optimization',
    icon: Zap,
    color: 'from-yellow-500 to-orange-600',
    count: 1
  },
  {
    title: 'Education Technology',
    description: 'Personalized AI-powered learning platforms',
    icon: BookOpen,
    color: 'from-indigo-500 to-purple-600',
    count: 1
  },
  {
    title: 'Materials Science',
    description: 'AI-powered quantum materials research and discovery',
    icon: Microscope,
    color: 'from-cyan-500 to-blue-600',
    count: 1
  }
],

const stats = [
  { number: '15+', label: 'Revolutionary Services', icon: Star, color: 'text-cyan-400' },
  { number: '1000%+', label: 'Average ROI', icon: TrendingUp, color: 'text-purple-400' },
  { number: '99.9%', label: 'Success Rate', icon: Award, color: 'text-green-400' },
  { number: '24/7', label: 'Expert Support', icon: Clock, color: 'text-pink-400' }
],

export default function UltimateFuturisticServicesShowcase2025() {
  const [searchTerm, setSearchTerm] = useState(''),
  const [selectedCategory, setSelectedCategory] = useState('all'),
  const [sortBy, setSortBy] = useState('popular'),
  const [viewMode, setViewMode] = useState('grid'),

const _contactInfo = {_mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'};

const _serviceCategories = [
  {_title: 'AI & Consciousness', _description: 'Revolutionary AI platforms with consciousness and emotional intelligence', _icon: Brain, _color: 'from-violet-500 to-purple-600', _count: 3},
  {_title: 'Quantum & Emerging Tech', _description: 'Breakthrough quantum computing and space technology solutions', _icon: Atom, _color: 'from-indigo-500 to-blue-600', _count: 4},
  {_title: 'Space Technology', _description: 'AI-powered space exploration and resource extraction', _icon: Rocket, _color: 'from-blue-500 to-cyan-600', _count: 1},
  {_title: 'Financial Technology', _description: 'Quantum AI-powered financial trading and analytics', _icon: DollarSign, _color: 'from-green-500 to-emerald-600', _count: 1},
  {_title: 'Content Automation', _description: 'Autonomous AI content creation and management', _icon: BookOpen, _color: 'from-purple-500 to-pink-600', _count: 1},
  {_title: 'Cybersecurity', _description: 'Quantum encryption and advanced threat detection', _icon: Shield, _color: 'from-red-500 to-orange-600', _count: 1},
  {_title: 'Healthcare Technology', _description: 'AI-powered medical diagnostics and treatment', _icon: Heart, _color: 'from-teal-500 to-cyan-600', _count: 1},
  {_title: 'Energy Technology', _description: 'Quantum computing for fusion power and energy optimization', _icon: Zap, _color: 'from-yellow-500 to-orange-600', _count: 1},
  {_title: 'Education Technology', _description: 'Personalized AI-powered learning platforms', _icon: BookOpen, _color: 'from-indigo-500 to-purple-600', _count: 1},
  {_title: 'Materials Science', _description: 'AI-powered quantum materials research and discovery', _icon: Microscope, _color: 'from-cyan-500 to-blue-600', _count: 1}
];

const _stats = [
  {_number: '15+', _label: 'Revolutionary Services', _icon: Star, _color: 'text-cyan-400'},
  {_number: '1000%+', _label: 'Average ROI', _icon: TrendingUp, _color: 'text-purple-400'},
  {_number: '99.9%', _label: 'Success Rate', _icon: Award, _color: 'text-green-400'},
  {_number: '24/7', _label: 'Expert Support', _icon: Clock, _color: 'text-pink-400'}
];

export default function UltimateFuturisticServicesShowcase2025() {_const [searchTerm, _setSearchTerm] = useState('');
  const [selectedCategory, _setSelectedCategory] = useState('all');
  const [sortBy, _setSortBy] = useState('popular');
  const [viewMode, _setViewMode] = useState('grid');
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _filteredServices = ultimateFuturisticServices2025.filter(service => {
    const _matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase()),
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory
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

  const _containerVariants = {_hidden: { opacity: 0}
    visible: {_opacity: 1, _transition: {
        staggerChildren: 0.1}
    }
  },

  const _itemVariants = {_hidden: { y: 20, _opacity: 0},
    visible: {_y: 0, _opacity: 1, _transition: {
        duration: 0.5}
    }
  },

  return (_<Layout>
      <Head>
        <title>Ultimate Futuristic Services Showcase 2025 | Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Discover our revolutionary futuristic services including AI consciousness, quantum computing, space technology, and breakthrough innovations. Transform your business with cutting-edge technology.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;futuristic services, AI consciousness, quantum computing, space technology, breakthrough innovations, Zion Tech Group&quot; />
        <meta property=&quot;og:title&quot; content=&quot;Ultimate Futuristic Services Showcase 2025 | Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Discover our revolutionary futuristic services including AI consciousness, quantum computing, space technology, and breakthrough innovations.&quot; />
        <meta property=&quot;og:url&quot; content=&quot;https://ziontechgroup.com/ultimate-futuristic-services-showcase-2025&quot; />
        <meta property=&quot;og:type&quot; content=&quot;website&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/ultimate-futuristic-services-showcase-2025&quot; />
      </Head>

      {/* Hero Section */}
      <section className=&quot;relative py-20 lg:py-32 overflow-hidden&quot;>
        <div className=&quot;absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black&quot;></div>
        <div className=&quot;relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;>
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
          >
            <h1 className=&quot;text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6&quot;>
              <span className=&quot;bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent&quot;>
                Ultimate Futuristic
              </span>
              <br />
              <span className=&quot;bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent&quot;>
                Services 2025
              </span>
            </h1>
            <p className=&quot;text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto&quot;>
              Experience the future of technology with our revolutionary services that combine AI consciousness, 
              quantum computing, space technology, and breakthrough innovations to transform your business.
            </p>
            <div className=&quot;flex flex-wrap justify-center gap-4 mb-12&quot;>
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className=&quot;flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20&quot;
                >
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  <div className=&quot;text-left&quot;>
                    <div className=&quot;text-2xl font-bold text-white&quot;>{stat.number}</div>
                    <div className=&quot;text-sm text-gray-300&quot;>{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className=&quot;py-12 bg-gradient-to-r from-black via-purple-900/10 to-black&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;flex flex-col lg:flex-row gap-6 items-center justify-between&quot;>
            {/* Search */}
            <div className=&quot;relative flex-1 max-w-md&quot;>
              <Search className=&quot;absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5&quot; />
              <input
                type=&quot;text&quot;
                placeholder=&quot;Search futuristic services...&quot;
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className=&quot;w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent&quot;
              />
            </div>

            {/* Category Filter */}
            <div className=&quot;flex flex-wrap gap-3&quot;>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className=&quot;px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent&quot;
              >
                <option value=&quot;all&quot;>All Categories</option>
                {serviceCategories.map((category) => (
                  <option key={category.title} value={category.title}>
                    {category.title} ({category.count})
                  </option>
                ))}
              </select>

              {_/* Sort Options */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className=&quot;px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent&quot;
              >
                <option value=&quot;popular&quot;>Most Popular</option>
                <option value=&quot;price-low&quot;>Price: Low to High</option>
                <option value=&quot;price-high&quot;>Price: High to Low</option>
                <option value=&quot;rating&quot;>Highest Rated</option>
                <option value=&quot;customers&quot;>Most Customers</option>
              </select>

              {/* View Mode Toggle */}
              <div className=&quot;flex bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-1&quot;>
                <button
                  onClick={_() => setViewMode('grid')}
                  className={_`p-2 rounded ${viewMode === 'grid' ? 'bg-purple-500 text-white' : 'text-gray-400'}`}
                >
                  <div className=&quot;grid grid-cols-2 gap-1 w-4 h-4&quot;>
                    <div className=&quot;bg-current rounded-sm&quot;></div>
                    <div className=&quot;bg-current rounded-sm&quot;></div>
                    <div className=&quot;bg-current rounded-sm&quot;></div>
                    <div className=&quot;bg-current rounded-sm&quot;></div>
                  </div>
                </button>
                <button
                  onClick={_() => setViewMode('list')}
                  className={_`p-2 rounded ${viewMode === 'list' ? 'bg-purple-500 text-white' : 'text-gray-400'}`}
                >
                  <div className=&quot;space-y-1 w-4 h-4&quot;>
                    <div className=&quot;bg-current rounded-sm h-0.5&quot;></div>
                    <div className=&quot;bg-current rounded-sm h-0.5&quot;></div>
                    <div className=&quot;bg-current rounded-sm h-0.5&quot;></div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className=&quot;py-16&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <motion.div
            variants={containerVariants}
            initial=&quot;hidden&quot;
            animate=&quot;visible&quot;
            className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}
          >
            {_sortedServices.map(_(service, _index) => (
              <motion.div
                key={service.id}
                variants={_itemVariants}
                className={_`group relative ${
                  viewMode === 'grid' 
                    ? 'bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:scale-105'
                    : 'bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300'}`}
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className=&quot;absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold px-3 py-1 rounded-full&quot;>
                    Popular
                  </div>
                )}

                {_/* Service Header */}
                <div className={_`${viewMode === 'list' ? 'flex items-start space-x-6' : 'text-center'}`}>
                  <div className={_`${viewMode === 'list' ? 'flex-shrink-0' : 'mx-auto mb-4'}`}>
                    <div className={_`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-3xl`}>
                      {_service.icon}
                    </div>
                  </div>
                  
                  <div className={`${viewMode === 'list' ? 'flex-1' : ''}`}>
                    <h3 className=&quot;text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors&quot;>
                      {service.name}
                    </h3>
                    <p className=&quot;text-gray-300 text-sm mb-3&quot;>{service.tagline}</p>
                    
                    {/* Price */}
                    <div className=&quot;flex items-center justify-center space-x-2 mb-4&quot;>
                      <span className=&quot;text-3xl font-bold text-white&quot;>{service.price}</span>
                      <span className=&quot;text-gray-400&quot;>{service.period}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className=&quot;text-gray-300 mb-6 leading-relaxed&quot;>{service.description}</p>

                {/* Features */}
                <div className=&quot;mb-6&quot;>
                  <h4 className=&quot;text-white font-semibold mb-3 flex items-center&quot;>
                    <Sparkles className=&quot;w-4 h-4 mr-2 text-purple-400&quot; />
                    Key Features
                  </h4>
                  <div className=&quot;grid grid-cols-1 gap-2&quot;>
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className=&quot;flex items-center text-sm text-gray-300&quot;>
                        <CheckCircle className=&quot;w-4 h-4 text-green-400 mr-2 flex-shrink-0&quot; />
                        {feature}
                      </div>
                    ))}
                    {service.features.length > 4 && (
                      <div className=&quot;text-sm text-purple-400 mt-2&quot;>
                        +{service.features.length - 4} more features
                      </div>
                    )}
                  </div>
                </div>

                {/* Service Details */}
                <div className=&quot;grid grid-cols-2 gap-4 mb-6 text-sm&quot;>
                  <div className=&quot;text-gray-400&quot;>
                    <span className=&quot;block&quot;>Setup Time</span>
                    <span className=&quot;text-white font-medium&quot;>{service.setupTime}</span>
                  </div>
                  <div className=&quot;text-gray-400&quot;>
                    <span className=&quot;block&quot;>Trial</span>
                    <span className=&quot;text-white font-medium&quot;>{service.trialDays} days</span>
                  </div>
                  <div className=&quot;text-gray-400&quot;>
                    <span className=&quot;block&quot;>Rating</span>
                    <div className=&quot;flex items-center&quot;>
                      <span className=&quot;text-white font-medium mr-1&quot;>{service.rating}</span>
                      <Star className=&quot;w-4 h-4 text-yellow-400 fill-current&quot; />
                    </div>
                  </div>
                  <div className=&quot;text-gray-400&quot;>
                    <span className=&quot;block&quot;>Customers</span>
                    <span className=&quot;text-white font-medium&quot;>{service.customers}+</span>
                  </div>
                </div>

                {/* ROI and Market Info */}
                <div className=&quot;mb-6 p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20&quot;>
                  <div className=&quot;text-sm&quot;>
                    <div className=&quot;text-gray-300 mb-2&quot;>
                      <span className=&quot;font-semibold text-white&quot;>ROI:</span> {service.roi}
                    </div>
                    <div className=&quot;text-gray-300&quot;>
                      <span className=&quot;font-semibold text-white&quot;>Market Size:</span> {service.marketSize}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className=&quot;flex flex-col sm:flex-row gap-3&quot;>
                  <Link
                    href={service.link}
                    className=&quot;flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-6 rounded-lg text-center hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105&quot;
                  >
                    Get Started
                  </a>
                  <button className=&quot;px-4 py-3 border border-white/20 text-white rounded-lg hover:border-purple-500/50 transition-colors&quot;>
                    <Eye className=&quot;w-5 h-5&quot; />
                  </button>
                </div>

                {/* Contact Info */}
                <div className=&quot;mt-6 pt-6 border-t border-white/10&quot;>
                  <div className=&quot;text-center text-sm text-gray-400&quot;>
                    <p>Contact us for custom pricing and implementation</p>
                    <div className=&quot;flex items-center justify-center space-x-4 mt-2&quot;>
                      <a href={`tel:${contactInfo.mobile}`} className=&quot;flex items-center text-purple-400 hover:text-purple-300&quot;>
                        <Phone className=&quot;w-4 h-4 mr-1&quot; />
                        {contactInfo.mobile}
                      </a>
                      <a href={`mailto:${contactInfo.email}`} className=&quot;flex items-center text-purple-400 hover:text-purple-300&quot;>
                        <Mail className=&quot;w-4 h-4 mr-1&quot; />
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* No Results */}
          {sortedServices.length === 0 && (
            <div className=&quot;text-center py-16&quot;>
              <div className=&quot;text-6xl mb-4&quot;>🔍</div>
              <h3 className=&quot;text-2xl font-bold text-white mb-2&quot;>No services found</h3>
              <p className=&quot;text-gray-400 mb-6&quot;>Try adjusting your search criteria or category filter</p>
              <button
                onClick={() => {
                  setSearchTerm(''),
                  setSelectedCategory('all')
                }}
                className=&quot;bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300&quot;
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className=&quot;py-20 bg-gradient-to-r from-purple-900/20 via-black to-pink-900/20&quot;>
        <div className=&quot;max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8&quot;>
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
          >
            <h2 className="text-3xl md: text-5xl font-bold text-white mb-6">
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
              Ready to Experience the Future?
            </h2>
            <p className=&quot;text-xl text-gray-300 mb-8&quot;>
              Transform your business with our revolutionary futuristic services. 
              Get in touch with our experts to discuss your specific needs and implementation strategy.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <Link
                href=&quot;/contact&quot;
                className=&quot;bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-4 px-8 rounded-lg text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105&quot;
              >
                Contact Our Experts
              </a>
              <Link
                href=&quot;/pricing&quot;
                className=&quot;border border-white/20 text-white font-semibold py-4 px-8 rounded-lg text-lg hover:border-purple-500/50 transition-colors&quot;
              >
                View Pricing
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}
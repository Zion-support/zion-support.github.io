import React, { useState } from 'react',
import Head from 'next/head',
import { motion } from 'framer-motion',
import { 
  Search, Filter, Star, CheckCircle, ArrowRight,
  Brain, Atom, Shield, Rocket, Target, Microscope,
  Phone, Mail, MapPin, TrendingUp, Users, Award,
  Zap, Globe, Cpu, Database, Lock, Cloud,
  Stethoscope, GraduationCap, Leaf, Truck
} from 'lucide-react',
import Layout from '../components/layout/Layout',
// Import all the new 2025 innovative service data,
import { innovativeFinancialServices2025 } from '../data/2025-innovative-financial-services',
import { innovativeHealthcareServices2025 } from '../data/2025-innovative-healthcare-services',
import { innovativeEducationServices2025 } from '../data/2025-innovative-education-services',
import { innovativeSustainabilityServices2025 } from '../data/2025-innovative-sustainability-services',
import { innovativeLogisticsServices2025 } from '../data/2025-innovative-logistics-services',
// Import existing services for comprehensive coverage,
import { realMicroSaasServices2025 } from '../data/2025-real-micro-saas-services',
import { innovativeAIServices2025 } from '../data/2025-innovative-ai-services',
import { innovativeITServices2025 } from '../data/2025-innovative-it-services',
import { emergingTechServices2025 } from '../data/2025-emerging-tech-services',
const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
},

const serviceCategories = [
  {
    id: 'financial-technology',
    title: '💰 Financial Technology',
    description: 'Innovative fintech, DeFi, and financial services',
    icon: TrendingUp,
    color: 'from-green-500 to-emerald-500',
    services: [...innovativeFinancialServices2025],
    gradient: 'from-green-500/20 to-emerald-500/20',
    badge: 'New'
  },
  {
    id: 'healthcare-biotech',
    title: '🏥 Healthcare & Biotech',
    description: 'AI-powered healthcare and biotechnology solutions',
    icon: Stethoscope,
    color: 'from-blue-500 to-indigo-500',
    services: [...innovativeHealthcareServices2025],
    gradient: 'from-blue-500/20 to-indigo-500/20',
    badge: 'Hot'
  },
  {
    id: 'education-technology',
    title: '🎓 Education Technology',
    description: 'AI-powered learning and educational innovation',
    icon: GraduationCap,
    color: 'from-purple-500 to-pink-500',
    services: [...innovativeEducationServices2025],
    gradient: 'from-purple-500/20 to-pink-500/20',
    badge: 'Innovative'
  },
  {
    id: 'sustainability-green-tech',
    title: '🌱 Sustainability & Green Tech',
    description: 'Environmental technology and sustainability solutions',
    icon: Leaf,
    color: 'from-emerald-500 to-teal-500',
    services: [...innovativeSustainabilityServices2025],
    gradient: 'from-emerald-500/20 to-teal-500/20',
    badge: 'Eco-Friendly'
  },
  {
    id: 'logistics-supply-chain',
    title: '🚚 Logistics & Supply Chain',
    description: 'Autonomous logistics and supply chain optimization',
    icon: Truck,
    color: 'from-orange-500 to-red-500',
    services: [...innovativeLogisticsServices2025],
    gradient: 'from-orange-500/20 to-red-500/20',
    badge: 'Autonomous'
  },
  {
    id: 'ai-consciousness',
    title: '🧠 AI & Consciousness',
    description: 'Revolutionary AI consciousness and emotional intelligence platforms',
    icon: Brain,
    color: 'from-violet-500 to-purple-500',
    services: [...innovativeAIServices2025],
    gradient: 'from-violet-500/20 to-indigo-500/20',
    badge: 'Revolutionary'
  },
  {
    id: 'quantum-emerging',
    title: '⚛️ Quantum & Emerging Tech',
    description: 'Quantum computing, DNA computing, and beyond',
    icon: Atom,
    color: 'from-indigo-500 to-blue-500',
    services: [...emergingTechServices2025],
    gradient: 'from-indigo-500/20 to-cyan-500/20',
    badge: 'Quantum'
  },
  {
    id: 'enterprise-it',
    title: '🏙️ Enterprise IT',
    description: 'Autonomous operations and zero-trust security',
    icon: Shield,
    color: 'from-blue-500 to-cyan-500',
    services: [...innovativeITServices2025],
    gradient: 'from-blue-500/20 to-teal-500/20',
    badge: 'Enterprise'
  },
  {
    id: 'micro-saas',
    title: '🎯 Micro SAAS',
    description: 'Innovative solutions for every business need',
    icon: Target,
    color: 'from-teal-500 to-green-500',
    services: [...realMicroSaasServices2025],
    gradient: 'from-teal-500/20 to-green-500/20',
    badge: 'Popular'
  }
],

export default function InnovativeServicesShowcase2025() {
  const [searchTerm, setSearchTerm] = useState(''),
  const [selectedCategory, setSelectedCategory] = useState('all'),
  const [sortBy, setSortBy] = useState('name'),
  const filteredServices = serviceCategories.flatMap(category => 
    category.services.filter(service =>
      (selectedCategory === 'all' || category.id === selectedCategory) &&
      (searchTerm === '' || 
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.category.toLowerCase().includes(searchTerm.toLowerCase()))
    )
  ),

  const sortedServices = [...filteredServices].sort(_(a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name),
      case 'price':
        return a.pricing.starter.price - b.pricing.starter.price,
      case 'category':
        return a.category.localeCompare(b.category),
      default: return 0
    }
  }),
  return (_<Layout>
      <Head>
        <title>Innovative Services Showcase 2025 | Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Discover our comprehensive collection of innovative micro SAAS, AI, healthcare, fintech, and emerging technology services for 2025 and beyond.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;innovative services, micro SAAS, AI services, healthcare technology, fintech, Zion Tech Group&quot; />
        <meta property=&quot;og:title&quot; content=&quot;Innovative Services Showcase 2025 - Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Comprehensive collection of innovative technology services.&quot; />
        <meta property=&quot;og:url&quot; content=&quot;https://ziontechgroup.com/innovative-services-showcase-2025&quot; />
      </Head>

      {/* Hero Section */}
      <section className=&quot;relative min-h-screen flex items-center justify-center overflow-hidden&quot;>
        <div className=&quot;absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-black&quot;></div>
        
        {/* Background Elements */}
        <div className=&quot;absolute inset-0 overflow-hidden pointer-events-none&quot;>
          <div className=&quot;absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse&quot;></div>
          <div className=&quot;absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000&quot;></div>
          <div className=&quot;absolute bottom-32 left-32 w-28 h-28 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse delay-500&quot;></div>        </div>

        <div className=&quot;relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto&quot;>
          <motion.div,
initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className=&quot;mb-8&quot;          >
            <div className=&quot;inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6&quot;>
              <Star className=&quot;w-4 h-4 mr-2&quot; />
              Innovation Showcase 2025
            </div>
            <h1 className=&quot;text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6&quot;>
              <span className=&quot;bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent&quot;>
                Innovative Services
              </span>
              <br />
              <span className=&quot;text-white&quot;>Showcase</span>
            </h1>
            <p className=&quot;text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto&quot;>
              Discover our comprehensive collection of revolutionary micro SAAS, AI, healthcare, fintech, and emerging technology services that are transforming industries worldwide.            </p>
          </motion.div>

          {_/* Stats */}
          <motion.div,
initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className=&quot;grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto&quot;
          >
            <div className=&quot;text-center&quot;>
              <div className=&quot;text-3xl md:text-4xl font-bold text-cyan-400 mb-2&quot;>
                {serviceCategories.reduce((total, category) => total + category.services.length, 0)}+              </div>
              <div className=&quot;text-gray-400&quot;>Services</div>
            </div>
            <div className=&quot;text-center&quot;>
              <div className=&quot;text-3xl md:text-4xl font-bold text-purple-400 mb-2&quot;>
                {serviceCategories.length}              </div>
              <div className=&quot;text-gray-400&quot;>Categories</div>
            </div>
            <div className=&quot;text-center&quot;>
              <div className=&quot;text-3xl md:text-4xl font-bold text-pink-400 mb-2&quot;>
                24/7
              </div>
              <div className=&quot;text-gray-400&quot;>Support</div>
            </div>
            <div className=&quot;text-center&quot;>
              <div className=&quot;text-3xl md:text-4xl font-bold text-green-400 mb-2&quot;>
                99.9%
              </div>
              <div className=&quot;text-gray-400&quot;>Uptime</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className=&quot;py-16 bg-gradient-to-b from-black to-slate-900&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;bg-gradient-to-r from-slate-800/50 to-slate-700/50 border border-slate-600/30 rounded-2xl p-8&quot;>
            <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-6&quot;>
              {/* Search */}
              <div className=&quot;relative&quot;>
                <Search className=&quot;absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5&quot; />
                <input,
type=&quot;text&quot;
                  placeholder=&quot;Search services...&quot;
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className=&quot;w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50&quot;                />
              </div>

              {_/* Category Filter */}
              <div>
                <select,
value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className=&quot;w-full px-4 py-3 bg-slate-800/50 border border-slate-600/30 rounded-xl text-white focus:outline-none focus:border-cyan-500/50&quot;
                >
                  <option value=&quot;all&quot;>All Categories</option>
                  {serviceCategories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.title}                    </option>
                  ))}
                </select>
              </div>

              {_/* Sort By */}
              <div>
                <select,
value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className=&quot;w-full px-4 py-3 bg-slate-800/50 border border-slate-600/30 rounded-xl text-white focus:outline-none focus:border-cyan-500/50&quot;                >
                  <option value=&quot;name&quot;>Sort by Name</option>
                  <option value=&quot;price&quot;>Sort by Price</option>
                  <option value=&quot;category&quot;>Sort by Category</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className=&quot;py-20 bg-slate-900&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {sortedServices.map((service, index) => (
              <motion.div,
key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className=&quot;group bg-gradient-to-br from-slate-800/50 to-slate-700/50 border border-slate-600/30 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105&quot;
              >
                {/* Service Header */}
                <div className=&quot;mb-6&quot;>
                  <div className=&quot;flex items-center justify-between mb-4&quot;>
                    <div className=&quot;w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center&quot;>
                      <Target className=&quot;w-6 h-6 text-white&quot; />
                    </div>
                                      <div className=&quot;text-right&quot;>
                    <div className=&quot;text-sm text-gray-400&quot;>{service.category}</div>
                    <div className=&quot;text-2xl font-bold text-white&quot;>${service.pricing?.starter?.price || 'Custom'}</div>
                    <div className=&quot;text-sm text-gray-400&quot;>/month</div>
                  </div>
                  </div>
                  <h3 className=&quot;text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors&quot;>
                    {service.name}
                  </h3>
                  <p className=&quot;text-gray-300 text-sm leading-relaxed&quot;>
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className=&quot;mb-6&quot;>
                  <h4 className=&quot;text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide&quot;>Key Features</h4>
                  <ul className=&quot;space-y-2&quot;>
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className=&quot;flex items-center text-sm text-gray-300&quot;>
                        <CheckCircle className=&quot;w-4 h-4 text-cyan-400 mr-2 flex-shrink-0&quot; />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 3 && (
                      <li className=&quot;text-sm text-cyan-400&quot;>                        +{service.features.length - 3} more features
                      </li>
                    )}
                  </ul>
                </div>

                {/* Market Info */}
                <div className=&quot;mb-6 grid grid-cols-2 gap-4 text-sm&quot;>
                  <div>
                    <div className=&quot;text-gray-400&quot;>Market Size</div>
                    <div className=&quot;text-white font-semibold&quot;>{service.marketSize}</div>
                  </div>
                  <div>
                    <div className=&quot;text-gray-400&quot;>Target Audience</div>
                    <div className=&quot;text-white font-semibold truncate&quot;>{service.targetAudience}</div>
                  </div>
                </div>

                {/* CTA */}
                <div className=&quot;flex gap-3&quot;>
                  <a,
href={service.website}
                    className=&quot;flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold py-3 px-4 rounded-xl text-center hover:from-cyan-600 hover:to-blue-600 transition-all duration-300&quot;                  >
                    Learn More
                  </a>
                  <a,
href={`mailto:${service.contact.email}`}
                    className=&quot;px-4 py-3 border border-cyan-500/30 text-cyan-400 rounded-xl hover:bg-cyan-500/10 transition-all duration-300&quot;                  >
                    <Mail className=&quot;w-5 h-5&quot; />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {sortedServices.length === 0 && (
            <motion.div,
initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className=&quot;text-center py-20&quot;            >
              <div className=&quot;text-gray-400 text-xl mb-4&quot;>No services found</div>
              <div className=&quot;text-gray-500&quot;>Try adjusting your search or filter criteria</div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className=&quot;py-20 bg-gradient-to-b from-slate-900 to-black&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <motion.div,
initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;text-center mb-16&quot;          >
            <h2 className=&quot;text-3xl md:text-5xl font-bold text-white mb-6&quot;>
              Ready to Transform Your Business?
            </h2>
            <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
              Contact our team to learn more about how our innovative services can revolutionize your operations and drive growth.
            </p>
          </motion.div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8&quot;>
            <motion.div,
initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className=&quot;text-center&quot;            >
              <div className=&quot;w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4&quot;>
                <Phone className=&quot;w-8 h-8 text-white&quot; />
              </div>
              <h3 className=&quot;text-xl font-semibold text-white mb-2&quot;>Phone</h3>
              <p className=&quot;text-gray-300&quot;>{contactInfo.mobile}</p>
            </motion.div>

            <motion.div,
initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className=&quot;text-center&quot;            >
              <div className=&quot;w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4&quot;>
                <Mail className=&quot;w-8 h-8 text-white&quot; />
              </div>
              <h3 className=&quot;text-xl font-semibold text-white mb-2&quot;>Email</h3>
              <p className=&quot;text-gray-300&quot;>{contactInfo.email}</p>
            </motion.div>

            <motion.div,
initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className=&quot;text-center&quot;            >
              <div className=&quot;w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4&quot;>
                <MapPin className=&quot;w-8 h-8 text-white&quot; />
              </div>
              <h3 className=&quot;text-xl font-semibold text-white mb-2&quot;>Address</h3>
              <p className=&quot;text-gray-300&quot;>{contactInfo.address}</p>            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

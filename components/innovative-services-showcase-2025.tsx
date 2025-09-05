import React, {_useState} from 'react';
import Head from 'next/head';
import {_Search, _Filter, _Star, _CheckCircle, _ArrowRight, _Brain, _Atom, _Shield, _Rocket, _Target, _Microscope, _Phone, _Mail, _MapPin, _TrendingUp, _Users, _Award, _Zap, _Globe, _Cpu, _Database, _Lock, _Cloud, _Stethoscope, _GraduationCap, _Leaf, _Truck} from 'lucide-react';
import Layout from '../components/layout/Layout';

// Import all the new 2025 innovative service data

// Import existing services for comprehensive coverage

const _contactInfo = {_mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'};

const _serviceCategories = [
  {_id: 'financial-technology', _title: '💰 Financial Technology', _description: 'Innovative fintech, _DeFi, _and financial services', _icon: TrendingUp, _color: 'from-green-500 to-emerald-500', _services: [...innovativeFinancialServices2025], _gradient: 'from-green-500/20 to-emerald-500/20', _badge: 'New'},
  {_id: 'healthcare-biotech', _title: '🏥 Healthcare & Biotech', _description: 'AI-powered healthcare and biotechnology solutions', _icon: Stethoscope, _color: 'from-blue-500 to-indigo-500', _services: [...innovativeHealthcareServices2025], _gradient: 'from-blue-500/20 to-indigo-500/20', _badge: 'Hot'},
  {_id: 'education-technology', _title: '🎓 Education Technology', _description: 'AI-powered learning and educational innovation', _icon: GraduationCap, _color: 'from-purple-500 to-pink-500', _services: [...innovativeEducationServices2025], _gradient: 'from-purple-500/20 to-pink-500/20', _badge: 'Innovative'},
  {_id: 'sustainability-green-tech', _title: '🌱 Sustainability & Green Tech', _description: 'Environmental technology and sustainability solutions', _icon: Leaf, _color: 'from-emerald-500 to-teal-500', _services: [...innovativeSustainabilityServices2025], _gradient: 'from-emerald-500/20 to-teal-500/20', _badge: 'Eco-Friendly'},
  {_id: 'logistics-supply-chain', _title: '🚚 Logistics & Supply Chain', _description: 'Autonomous logistics and supply chain optimization', _icon: Truck, _color: 'from-orange-500 to-red-500', _services: [...innovativeLogisticsServices2025], _gradient: 'from-orange-500/20 to-red-500/20', _badge: 'Autonomous'},
  {_id: 'ai-consciousness', _title: '🧠 AI & Consciousness', _description: 'Revolutionary AI consciousness and emotional intelligence platforms', _icon: Brain, _color: 'from-violet-500 to-purple-500', _services: [...innovativeAIServices2025], _gradient: 'from-violet-500/20 to-indigo-500/20', _badge: 'Revolutionary'},
  {_id: 'quantum-emerging', _title: '⚛️ Quantum & Emerging Tech', _description: 'Quantum computing, _DNA computing, _and beyond', _icon: Atom, _color: 'from-indigo-500 to-blue-500', _services: [...emergingTechServices2025], _gradient: 'from-indigo-500/20 to-cyan-500/20', _badge: 'Quantum'},
  {_id: 'enterprise-it', _title: '🏙️ Enterprise IT', _description: 'Autonomous operations and zero-trust security', _icon: Shield, _color: 'from-blue-500 to-cyan-500', _services: [...innovativeITServices2025], _gradient: 'from-blue-500/20 to-teal-500/20', _badge: 'Enterprise'},
  {_id: 'micro-saas', _title: '🎯 Micro SAAS', _description: 'Innovative solutions for every business need', _icon: Target, _color: 'from-teal-500 to-green-500', _services: [...realMicroSaasServices2025], _gradient: 'from-teal-500/20 to-green-500/20', _badge: 'Popular'}
];

export default function InnovativeServicesShowcase2025() {_const [searchTerm, _setSearchTerm] = useState('');
  const [selectedCategory, _setSelectedCategory] = useState('all');
  const [sortBy, _setSortBy] = useState('name');

  const _filteredServices = serviceCategories.flatMap(category => 
    category.services.filter(service =>
      (selectedCategory === 'all' || category.id === selectedCategory) &&
      (searchTerm === '' || 
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.category.toLowerCase().includes(searchTerm.toLowerCase()))
    )
  );

  const _sortedServices = [...filteredServices].sort(_(a, _b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'price':
        return a.pricing.starter.price - b.pricing.starter.price;
      case 'category':
        return a.category.localeCompare(b.category);
      default:
        return 0;}
  });

  return (_<Layout>
      <Head>
        <title>Innovative Services Showcase 2025 | Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive collection of innovative micro SAAS, _AI, _healthcare, _fintech, _and emerging technology services for 2025 and beyond." />
        <meta name="keywords" content="innovative services, _micro SAAS, _AI services, _healthcare technology, _fintech, _Zion Tech Group" />
        <meta property="og:title" content="Innovative Services Showcase 2025 - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive collection of innovative technology services." />
        <meta property="og:url" content="https://ziontechgroup.com/innovative-services-showcase-2025" />
      </Head>

      {_/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-black"></div>
        
        {_/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-32 w-28 h-28 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            className="mb-8"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Innovation Showcase 2025
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Innovative Services
              </span>
              <br />
              <span className="text-white">Showcase</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our comprehensive collection of revolutionary micro SAAS, _AI, _healthcare, _fintech, _and emerging technology services that are transforming industries worldwide.
            </p>
          </motion.div>

          {_/* Stats */}
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8, _delay: 0.2}}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                {_serviceCategories.reduce((total, _category) => total + category.services.length, _0)}+
              </div>
              <div className="text-gray-400">Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">
                {_serviceCategories.length}
              </div>
              <div className="text-gray-400">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">
                24/7
              </div>
              <div className="text-gray-400">Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">
                99.9%
              </div>
              <div className="text-gray-400">Uptime</div>
            </div>
          </motion.div>
        </div>
      </section>

      {_/* Search and Filter Section */}
      <section className="py-16 bg-gradient-to-b from-black to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 border border-slate-600/30 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {_/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={_searchTerm}
                  onChange={_(_e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50"
                />
              </div>

              {_/* Category Filter */}
              <div>
                <select
                  value={_selectedCategory}
                  onChange={_(_e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/30 rounded-xl text-white focus:outline-none focus:border-cyan-500/50"
                >
                  <option value="all">All Categories</option>
                  {_serviceCategories.map(category => (
                    <option key={category.id} value={_category.id}>
                      {_category.title}
                    </option>
                  ))}
                </select>
              </div>

              {_/* Sort By */}
              <div>
                <select
                  value={_sortBy}
                  onChange={_(_e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/30 rounded-xl text-white focus:outline-none focus:border-cyan-500/50"
                >
                  <option value="name">Sort by Name</option>
                  <option value="price">Sort by Price</option>
                  <option value="category">Sort by Category</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {_/* Services Grid */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {_sortedServices.map(_(service, _index) => (
              <motion.div
                key={service.id}
                initial={_{ opacity: 0, _y: 30}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.8, _delay: index * 0.1}}
                viewport={_{ once: true}}
                className="group bg-gradient-to-br from-slate-800/50 to-slate-700/50 border border-slate-600/30 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                {_/* Service Header */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                                      <div className="text-right">
                    <div className="text-sm text-gray-400">{_service.category}</div>
                    <div className="text-2xl font-bold text-white">${_service.pricing?.starter?.price || 'Custom'}</div>
                    <div className="text-sm text-gray-400">/month</div>
                  </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {_service.name}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {_service.description}
                  </p>
                </div>

                {_/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">Key Features</h4>
                  <ul className="space-y-2">
                    {_service.features.slice(0, _3).map(_(feature, _featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {_feature}
                      </li>
                    ))}
                    {_service.features.length > 3 && (
                      <li className="text-sm text-cyan-400">
                        +{service.features.length - 3} more features
                      </li>
                    )}
                  </ul>
                </div>

                {_/* Market Info */}
                <div className="mb-6 grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-gray-400">Market Size</div>
                    <div className="text-white font-semibold">{_service.marketSize}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Target Audience</div>
                    <div className="text-white font-semibold truncate">{_service.targetAudience}</div>
                  </div>
                </div>

                {_/* CTA */}
                <div className="flex gap-3">
                  <a
                    href={_service.website}
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold py-3 px-4 rounded-xl text-center hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                  >
                    Learn More
                  </a>
                  <a
                    href={_`mailto:${service.contact.email}`}
                    className="px-4 py-3 border border-cyan-500/30 text-cyan-400 rounded-xl hover:bg-cyan-500/10 transition-all duration-300"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {_sortedServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0}}
              animate={_{ opacity: 1}}
              className="text-center py-20"
            >
              <div className="text-gray-400 text-xl mb-4">No services found</div>
              <div className="text-gray-500">Try adjusting your search or filter criteria</div>
            </motion.div>
          )}
        </div>
      </section>

      {_/* Contact Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Contact our team to learn more about how our innovative services can revolutionize your operations and drive growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={_{ opacity: 0, _y: 30}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8, _delay: 0.1}}
              viewport={_{ once: true}}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
              <p className="text-gray-300">{_contactInfo.mobile}</p>
            </motion.div>

            <motion.div
              initial={_{ opacity: 0, _y: 30}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8, _delay: 0.2}}
              viewport={_{ once: true}}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-300">{_contactInfo.email}</p>
            </motion.div>

            <motion.div
              initial={_{ opacity: 0, _y: 30}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8, _delay: 0.3}}
              viewport={_{ once: true}}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
              <p className="text-gray-300">{_contactInfo.address}</p>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

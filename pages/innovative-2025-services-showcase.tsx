<<<<<<< HEAD
import React, { useState } from 'react',
import { motion } from 'framer-motion',
import { 
  Brain, Shield, Rocket, Globe, Cpu, Database, 
  TrendingUp, Users, Star, Zap, Lock, Target,
  ArrowRight, Phone, Mail, MapPin, ExternalLink
} from 'lucide-react',

// Import our new innovative services
import { innovativeMicroSaasExpansionV32025 } from '../data/2025-innovative-micro-saas-expansion-v3',
import { innovativeITServicesExpansion2025V3 } from '../data/2025-innovative-it-services-expansion-v3',
import { innovativeAIServicesExpansion2025V3 } from '../data/2025-innovative-ai-services-expansion-v3',
const Innovative2025ServicesShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all'),
  const [searchTerm, setSearchTerm] = useState(''),

  // Combine all innovative services
  const allInnovativeServices = [
    ...innovativeMicroSaasExpansionV32025,
    ...innovativeITServicesExpansion2025V3,
    ...innovativeAIServicesExpansion2025V3
  ],

  const categories = [
    { id: 'all', name: 'All Services', icon: SparklesIcon, color: 'from-purple-500 to-pink-500', count: allInnovativeServices.length },
    { id: 'ai', name: 'AI & Machine Learning', icon: BrainIcon, color: 'from-cyan-500 to-blue-500', count: allInnovativeServices.filter(s => s.category.includes('AI') || s.category.includes('Machine Learning')).length },
    { id: 'it', name: 'IT Infrastructure', icon: Cpu, color: 'from-yellow-500 to-orange-500', count: allInnovativeServices.filter(s => s.category.includes('IT') || s.category.includes('Infrastructure')).length },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: ShieldIcon, color: 'from-red-500 to-orange-500', count: allInnovativeServices.filter(s => s.category.includes('Security')).length },
    { id: 'cloud', name: 'Cloud & FinOps', icon: Database, color: 'from-blue-500 to-indigo-500', count: allInnovativeServices.filter(s => s.category.includes('Cloud') || s.category.includes('FinOps')).length },
    { id: 'developer', name: 'Developer Tools', icon: Code, color: 'from-green-500 to-teal-500', count: allInnovativeServices.filter(s => s.category.includes('Developer')).length }
  ],
=======
import React, {_useState} from 'react';
import {_Brain, _Shield, _Rocket, _Globe, _Cpu, _Database, _TrendingUp, _Users, _Star, _Zap, _Lock, _Target, _ArrowRight, _Phone, _Mail, _MapPin, _ExternalLink} from 'lucide-react';

// Import our new innovative services

const Innovative2025ServicesShowcase: React.FC = () => {_const [selectedCategory, _setSelectedCategory] = useState('all');
  const [searchTerm, _setSearchTerm] = useState('');

  // Combine all innovative services
  const _allInnovativeServices = [
    ...innovativeMicroSaasExpansionV32025, _...innovativeITServicesExpansion2025V3, _...innovativeAIServicesExpansion2025V3
  ];

  const _categories = [
    { id: 'all', _name: 'All Services', _icon: SparklesIcon, _color: 'from-purple-500 to-pink-500', _count: allInnovativeServices.length},
    {_id: 'ai', _name: 'AI & Machine Learning', _icon: BrainIcon, _color: 'from-cyan-500 to-blue-500', _count: allInnovativeServices.filter(s => s.category.includes('AI') || s.category.includes('Machine Learning')).length},
    {_id: 'it', _name: 'IT Infrastructure', _icon: Cpu, _color: 'from-yellow-500 to-orange-500', _count: allInnovativeServices.filter(s => s.category.includes('IT') || s.category.includes('Infrastructure')).length},
    {_id: 'cybersecurity', _name: 'Cybersecurity', _icon: ShieldIcon, _color: 'from-red-500 to-orange-500', _count: allInnovativeServices.filter(s => s.category.includes('Security')).length},
    {_id: 'cloud', _name: 'Cloud & FinOps', _icon: Database, _color: 'from-blue-500 to-indigo-500', _count: allInnovativeServices.filter(s => s.category.includes('Cloud') || s.category.includes('FinOps')).length},
    {_id: 'developer', _name: 'Developer Tools', _icon: Code, _color: 'from-green-500 to-teal-500', _count: allInnovativeServices.filter(s => s.category.includes('Developer')).length}
  ];
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _filteredServices = allInnovativeServices.filter(service => {_const _matchesCategory = selectedCategory === 'all' || 
      service.category.toLowerCase().includes(selectedCategory) ||
      (selectedCategory === 'ai' && (service.category.includes('AI') || service.category.includes('Machine Learning'))) ||
      (selectedCategory === 'it' && (service.category.includes('IT') || service.category.includes('Infrastructure'))) ||
      (selectedCategory === 'cybersecurity' && service.category.includes('Security')) ||
      (selectedCategory === 'cloud' && (service.category.includes('Cloud') || service.category.includes('FinOps'))) ||
      (selectedCategory === 'developer' && service.category.includes('Developer')),
    
    const _matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (service as any).tagline?.toLowerCase().includes(searchTerm.toLowerCase()),
    
<<<<<<< HEAD
    return matchesCategory && matchesSearch
  }),

  const stats = [
<<<<<<< HEAD
    { number: "15+", label: "Innovative Services", icon: Star },
    { number: "99.9%", label: "Uptime Guarantee", icon: CheckCircle },
    { number: "24/7", label: "AI Support Available", icon: Brain },
    { number: "200+", label: "Countries Served", icon: Globe }
  ],
=======
    { number: &quot;15+&quot;, label: &quot;Innovative Services&quot;, icon: Star },
    { number: &quot;99.9%&quot;, label: &quot;Uptime Guarantee&quot;, icon: CheckCircle },
    { number: &quot;24/7&quot;, label: &quot;AI Support Available&quot;, icon: Brain },
    { number: &quot;200+&quot;, label: &quot;Countries Served&quot;, icon: Globe }
=======
    return matchesCategory && matchesSearch;});

  const _stats = [
    {_number: "15+", _label: "Innovative Services", _icon: Star},
    {_number: "99.9%", _label: "Uptime Guarantee", _icon: CheckCircle},
    {_number: "24/7", _label: "AI Support Available", _icon: Brain},
    {_number: "200+", _label: "Countries Served", _icon: Globe}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  ];
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

<<<<<<< HEAD
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
<<<<<<< HEAD
    transition: { duration: 0.6, ease: "easeOut" }
  },
=======
    transition: { duration: 0.6, ease: &quot;easeOut&quot; }
=======
  const _fadeInUp = {_initial: { opacity: 0, _y: 30},
    animate: {_opacity: 1, _y: 0},
    transition: {_duration: 0.6, _ease: "easeOut"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  const _staggerContainer = {_animate: {
      transition: {
        staggerChildren: 0.1}
    }
  },

  return (
    <>
      <Head>
        <title>Innovative 2025 Services Showcase - Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Discover Zion Tech Group's innovative 2025 services including AI-powered solutions, advanced IT infrastructure, and cutting-edge micro SAAS platforms. Transform your business with our revolutionary technology solutions.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;innovative services 2025, AI services, IT infrastructure, micro SAAS, cybersecurity, cloud solutions, Zion Tech Group&quot; />
        <meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/innovative-2025-services-showcase&quot; />
      </Head>

<<<<<<< HEAD
      <div className=&quot;min-h-screen bg-black text-white overflow-hidden&quot;>
        {/* Animated Background */}
        <div className=&quot;fixed inset-0 z-0&quot;>
          <div className=&quot;absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black&quot;></div>
          <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(120,119,198,0.3),transparent_50%)]&quot;></div>
          <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.3),transparent_50%)]&quot;></div>
          <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,rgba(120,219,255,0.3),transparent_50%)]&quot;></div>
          
          {/* Floating Particles */}
          <div className=&quot;absolute inset-0 overflow-hidden&quot;>
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className=&quot;absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse&quot;
                style={{
=======
      <div className="min-h-screen bg-black text-white overflow-hidden">
        {_/* Animated Background */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.3),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,rgba(120,219,255,0.3),transparent_50%)]"></div>
          
          {_/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden">
            {_[...Array(20)].map(_(_, _i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse"
                style={_{
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  left: `${Math.random() * 100}%`,
                  top: `${_Math.random() * 100}%`,
                  animationDelay: `${_Math.random() * 2}s`,
                  animationDuration: `${_2 + Math.random() * 3}s`
                }}
              />
            ))}
          </div>
        </div>

<<<<<<< HEAD
        {/* Content */}
        <div className=&quot;relative z-10&quot;>
          {/* Header */}
          <motion.header 
            className=&quot;relative z-20 py-8 px-4 sm:px-6 lg:px-8&quot;
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
=======
        {_/* Content */}
        <div className="relative z-10">
          {_/* Header */}
          <motion.header 
            className="relative z-20 py-8 px-4 sm:px-6 lg:px-8"
            initial={_{ opacity: 0, _y: -20}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            <span className=&quot;bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent&quot;>
              Innovative 2025
            </span>
            <br />
            <span className=&quot;text-white&quot;>Services Showcase</span>
          </motion.h1>
          
          <motion.p
<<<<<<< HEAD
            className=&quot;text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed&quot;
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
=======
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={_{ opacity: 0, _y: 30}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8, _delay: 0.2}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            Experience the future of technology with our revolutionary AI platforms, quantum computing solutions, 
            autonomous systems, and innovative micro SAAS services that are transforming industries worldwide.
          </motion.p>

          <motion.div
<<<<<<< HEAD
            className=&quot;flex flex-col sm:flex-row gap-4 justify-center items-center&quot;
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className=&quot;max-w-7xl mx-auto&quot;>
              {/* Search Bar */}
              <div className=&quot;mb-8&quot;>
                <div className=&quot;relative max-w-2xl mx-auto&quot;>
                  <input
                    type=&quot;text&quot;
                    placeholder=&quot;Search innovative services...&quot;
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className=&quot;w-full px-6 py-4 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent&quot;
=======
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={_{ opacity: 0, _y: 30}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8, _delay: 0.4}}
          >
            <div className="max-w-7xl mx-auto">
              {_/* Search Bar */}
              <div className="mb-8">
                <div className="relative max-w-2xl mx-auto">
                  <input
                    type="text"
                    placeholder="Search innovative services..."
                    value={_searchTerm}
                    onChange={_(_e) => setSearchTerm(e.target.value)}
                    className="w-full px-6 py-4 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  />
                  <Search className=&quot;absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400&quot; />
                </div>
              </div>

<<<<<<< HEAD
              {/* Category Filters */}
              <div className=&quot;flex flex-wrap justify-center gap-4 mb-8&quot;>
                {categories.map((category) => (
                  <button
=======
              {_/* Category Filters */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {_categories.map(_(category) => (_<button
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    key={category.id}
                    onClick={_() => setSelectedCategory(category.id)}
                    className={_`flex items-center space-x-2 px-6 py-3 rounded-xl border transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'border-purple-500 bg-purple-500/20 text-purple-300'
                        : 'border-gray-700 text-gray-300 hover:border-gray-600 hover:text-white'}`}
                  >
<<<<<<< HEAD
                    <category.icon className=&quot;w-5 h-5&quot; />
                    <span>{category.name}</span>
                    <span className=&quot;bg-gray-700 px-2 py-1 rounded-full text-xs&quot;>
                      {category.count}
=======
                    <category.icon className="w-5 h-5" />
                    <span>{_category.name}</span>
                    <span className="bg-gray-700 px-2 py-1 rounded-full text-xs">
                      {_category.count}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </motion.section>

          {_/* Services Grid */}
          <motion.section 
<<<<<<< HEAD
            className=&quot;relative z-20 py-16 px-4 sm:px-6 lg:px-8&quot;
            variants={staggerContainer}
            initial=&quot;initial&quot;
            animate=&quot;animate&quot;
          >
            <div className=&quot;max-w-7xl mx-auto&quot;>
              <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
                {filteredServices.map((service) => (
                  <motion.div
                    key={service.id}
                    className=&quot;group relative&quot;
                    variants={fadeInUp}
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className=&quot;relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 backdrop-blur-sm&quot;>
                      {/* Service Icon and Header */}
                      <div className=&quot;p-8&quot;>
                        <div className=&quot;flex items-center justify-between mb-6&quot;>
                          <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${(service as any).color || 'from-blue-500 to-purple-500'} flex items-center justify-center text-3xl`}>
                            {(service as any).icon || '🚀'}
                          </div>
                                                      {(service as any).popular && (
                            <div className=&quot;bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full&quot;>
=======
            className="relative z-20 py-16 px-4 sm:px-6 lg:px-8"
            variants={_staggerContainer}
            initial="initial"
            animate="animate"
          >
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {_filteredServices.map(_(service) => (
                  <motion.div
                    key={service.id}
                    className="group relative"
                    variants={_fadeInUp}
                    whileHover={_{ y: -10}}
                    transition={_{ duration: 0.3}}
                  >
                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 backdrop-blur-sm">
                      {_/* Service Icon and Header */}
                      <div className="p-8">
                        <div className="flex items-center justify-between mb-6">
                          <div className={_`w-16 h-16 rounded-xl bg-gradient-to-r ${(service as any).color || 'from-blue-500 to-purple-500'} flex items-center justify-center text-3xl`}>
                            {_(service as any).icon || '🚀'}
                          </div>
                                                      {_(service as any).popular && (
                            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                              POPULAR
                            </div>
                          )}
                        </div>

<<<<<<< HEAD
                        {/* Service Name and Tagline */}
                        <h3 className=&quot;text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors&quot;>
                          {service.name}
                        </h3>
                        <p className=&quot;text-gray-300 mb-6 leading-relaxed&quot;>
                          {(service as any).tagline || service.description?.substring(0, 100) || 'Innovative service solution'}
                        </p>

                        {/* Price */}
                        <div className=&quot;flex items-baseline mb-6&quot;>
                          <span className=&quot;text-3xl font-bold text-white&quot;>{(service as any).price || (service as any).pricing?.starter || 'Contact Us'}</span>
                          <span className=&quot;text-gray-400 ml-2&quot;>{(service as any).period || ''}</span>
                        </div>

                        {/* Features */}
                        <div className=&quot;space-y-3 mb-8&quot;>
                          {service.features.slice(0, 5).map((feature, featureIndex) => (
                            <div key={featureIndex} className=&quot;flex items-start space-x-3&quot;>
                              <CheckCircle className=&quot;w-5 h-5 text-green-400 mt-0.5 flex-shrink-0&quot; />
                              <span className=&quot;text-gray-300 text-sm&quot;>{feature}</span>
                            </div>
                          ))}
                          {service.features.length > 5 && (
                            <div className=&quot;text-gray-500 text-sm&quot;>
=======
                        {_/* Service Name and Tagline */}
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                          {_service.name}
                        </h3>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                          {_(service as any).tagline || service.description?.substring(0, _100) || 'Innovative service solution'}
                        </p>

                        {_/* Price */}
                        <div className="flex items-baseline mb-6">
                          <span className="text-3xl font-bold text-white">{_(service as any).price || (service as any).pricing?.starter || 'Contact Us'}</span>
                          <span className="text-gray-400 ml-2">{_(service as any).period || ''}</span>
                        </div>

                        {_/* Features */}
                        <div className="space-y-3 mb-8">
                          {_service.features.slice(0, _5).map(_(feature, _featureIndex) => (
                            <div key={featureIndex} className="flex items-start space-x-3">
                              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-300 text-sm">{_feature}</span>
                            </div>
                          ))}
                          {_service.features.length > 5 && (
                            <div className="text-gray-500 text-sm">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                              +{service.features.length - 5} more features
                            </div>
                          )}
                        </div>

<<<<<<< HEAD
                        {/* Service Stats */}
                        <div className=&quot;grid grid-cols-3 gap-4 mb-6 text-center&quot;>
                          <div>
                            <div className=&quot;text-lg font-bold text-white&quot;>{(service as any).customers || '1000'}+</div>
                            <div className=&quot;text-xs text-gray-400&quot;>Customers</div>
                          </div>
                          <div>
                            <div className=&quot;text-lg font-bold text-white&quot;>{(service as any).rating || '4.8'}</div>
                            <div className=&quot;text-xs text-gray-400&quot;>Rating</div>
                          </div>
                          <div>
                            <div className=&quot;text-lg font-bold text-white&quot;>{(service as any).reviews || '500'}</div>
                            <div className=&quot;text-xs text-gray-400&quot;>Reviews</div>
=======
                        {_/* Service Stats */}
                        <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                          <div>
                            <div className="text-lg font-bold text-white">{_(service as any).customers || '1000'}+</div>
                            <div className="text-xs text-gray-400">Customers</div>
                          </div>
                          <div>
                            <div className="text-lg font-bold text-white">{_(service as any).rating || '4.8'}</div>
                            <div className="text-xs text-gray-400">Rating</div>
                          </div>
                          <div>
                            <div className="text-lg font-bold text-white">{_(service as any).reviews || '500'}</div>
                            <div className="text-xs text-gray-400">Reviews</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                          </div>
                        </div>

                        {_/* CTA Button */}
                        <Link
<<<<<<< HEAD
                          href={`/services/${service.id}`}
                          className=&quot;w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2&quot;
=======
                          href={_`/services/${service.id}`}
                          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        >
                          <span>Learn More</span>
                          <ArrowRight className=&quot;w-5 h-5&quot; />
                        </Link>
                      </div>

<<<<<<< HEAD
                      {/* Hover Overlay */}
                      <div className=&quot;absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300&quot; />
=======
                      {_/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </div>
                  </motion.div>
                ))}
              </div>

<<<<<<< HEAD
              {filteredServices.length === 0 && (
                <motion.div 
                  className=&quot;text-center py-20&quot;
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
=======
              {_filteredServices.length === 0 && (_<motion.div 
                  className="text-center py-20"
                  initial={{ opacity: 0}}
                  animate={_{ opacity: 1}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                >
                  <div className=&quot;text-6xl mb-6&quot;>🔍</div>
                  <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>No services found</h3>
                  <p className=&quot;text-gray-400 mb-8&quot;>
                    Try adjusting your search terms or category filters
                  </p>
                  <button
<<<<<<< HEAD
                    onClick={() => {
                      setSearchTerm(''),
                      setSelectedCategory('all')
                    }}
                    className=&quot;bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300&quot;
=======
                    onClick={_() => {
                      setSearchTerm('');
                      setSelectedCategory('all');}}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  >
                    Clear Filters
                  </button>
                </motion.div>
              )}
            </div>
          </motion.section>

          {_/* Contact Section */}
          <motion.section 
<<<<<<< HEAD
            className=&quot;relative z-20 py-20 px-4 sm:px-6 lg:px-8&quot;
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
=======
            className="relative z-20 py-20 px-4 sm:px-6 lg:px-8"
            initial={_{ opacity: 0, _y: 30}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8, _delay: 1.2}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            <div className=&quot;max-w-4xl mx-auto text-center&quot;>
              <h2 className=&quot;text-4xl md:text-5xl font-bold mb-8&quot;>
                Ready to Transform Your Business?
              </h2>
              <p className=&quot;text-xl text-gray-300 mb-12&quot;>
                Get in touch with our team to learn more about our innovative 2025 services 
                and how they can revolutionize your operations.
              </p>
              
              <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8 mb-12&quot;>
                <div className=&quot;text-center&quot;>
                  <Phone className=&quot;w-8 h-8 text-purple-400 mx-auto mb-4&quot; />
                  <h3 className=&quot;text-lg font-semibold text-white mb-2&quot;>Phone</h3>
                  <p className=&quot;text-gray-300&quot;>+1 302 464 0950</p>
                </div>
                <div className=&quot;text-center&quot;>
                  <Mail className=&quot;w-8 h-8 text-purple-400 mx-auto mb-4&quot; />
                  <h3 className=&quot;text-lg font-semibold text-white mb-2&quot;>Email</h3>
                  <p className=&quot;text-gray-300&quot;>kleber@ziontechgroup.com</p>
                </div>
                <div className=&quot;text-center&quot;>
                  <MapPin className=&quot;w-8 h-8 text-purple-400 mx-auto mb-4&quot; />
                  <h3 className=&quot;text-lg font-semibold text-white mb-2&quot;>Address</h3>
                  <p className=&quot;text-gray-300&quot;>364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>

              <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
                <Link
                  href=&quot;/contact&quot;
                  className=&quot;bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105&quot;
                >
                  Contact Us Today
                </Link>
                <Link
                  href=&quot;/services&quot;
                  className=&quot;border border-gray-600 text-white px-8 py-4 rounded-xl font-semibold hover:border-gray-500 transition-all duration-300&quot;
                >
                  View All Services
                </Link>
              </div>
            </div>
          </motion.section>

          {_/* Footer */}
          <motion.footer 
<<<<<<< HEAD
            className=&quot;relative z-20 py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800&quot;
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
=======
            className="relative z-20 py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800"
            initial={_{ opacity: 0, _y: 30}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8, _delay: 1.4}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
<<<<<<< HEAD
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md: grid-cols-4 gap-8">
=======
            <div className=&quot;max-w-7xl mx-auto&quot;>
              <div className=&quot;grid grid-cols-1 md:grid-cols-4 gap-8&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                <div>
                  <div className=&quot;flex items-center space-x-2 mb-4&quot;>
                    <div className=&quot;w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center&quot;>
                      <Zap className=&quot;w-5 h-5 text-white&quot; />
                    </div>
                    <span className=&quot;text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent&quot;>
                      Zion Tech Group
                    </span>
                  </div>
                  <p className=&quot;text-gray-400 text-sm&quot;>
                    Transforming businesses with innovative technology solutions for the future.
                  </p>
                </div>
                
                <div>
                  <h3 className=&quot;text-white font-semibold mb-4&quot;>Services</h3>
                  <ul className=&quot;space-y-2 text-sm text-gray-400&quot;>
                    <li><Link href=&quot;/services&quot; className=&quot;hover:text-white transition-colors&quot;>AI Services</Link></li>
                    <li><Link href=&quot;/services&quot; className=&quot;hover:text-white transition-colors&quot;>IT Infrastructure</Link></li>
                    <li><Link href=&quot;/services&quot; className=&quot;hover:text-white transition-colors&quot;>Micro SAAS</Link></li>
                    <li><Link href=&quot;/services&quot; className=&quot;hover:text-white transition-colors&quot;>Cybersecurity</Link></li>
                  </ul>
                </div>
                
                <div>
                  <h3 className=&quot;text-white font-semibold mb-4&quot;>Company</h3>
                  <ul className=&quot;space-y-2 text-sm text-gray-400&quot;>
                    <li><Link href=&quot;/about&quot; className=&quot;hover:text-white transition-colors&quot;>About Us</Link></li>
                    <li><Link href=&quot;/team&quot; className=&quot;hover:text-white transition-colors&quot;>Our Team</Link></li>
                    <li><Link href=&quot;/careers&quot; className=&quot;hover:text-white transition-colors&quot;>Careers</Link></li>
                    <li><Link href=&quot;/news&quot; className=&quot;hover:text-white transition-colors&quot;>News</Link></li>
                  </ul>
                </div>
                
                <div>
                  <h3 className=&quot;text-white font-semibold mb-4&quot;>Connect</h3>
                  <ul className=&quot;space-y-2 text-sm text-gray-400&quot;>
                    <li><Link href=&quot;/contact&quot; className=&quot;hover:text-white transition-colors&quot;>Contact</Link></li>
                    <li><Link href=&quot;/support&quot; className=&quot;hover:text-white transition-colors&quot;>Support</Link></li>
                    <li><Link href=&quot;/blog&quot; className=&quot;hover:text-white transition-colors&quot;>Blog</Link></li>
                    <li><Link href=&quot;/resources&quot; className=&quot;hover:text-white transition-colors&quot;>Resources</Link></li>
                  </ul>
                </div>
              </div>
              
              <div className=&quot;mt-12 pt-8 border-t border-gray-800 text-center&quot;>
                <p className=&quot;text-gray-400 text-sm&quot;>
                  © 2025 Zion Tech Group. All rights reserved. | 
                  <Link href=&quot;/privacy&quot; className=&quot;hover:text-white transition-colors ml-2&quot;>Privacy Policy</Link> | 
                  <Link href=&quot;/terms&quot; className=&quot;hover:text-white transition-colors ml-2&quot;>Terms of Service</Link>
                </p>
              </div>
            </div>
          </motion.footer>
        </div>
      </div>
    </>
  )
},

export default Innovative2025ServicesShowcase,

<<<<<<< HEAD
import React, { useState, useMemo } from 'react',
import Head from 'next/head',
import Link from 'next/link',
import { motion } from 'framer-motion',
import {
  Search, Star, DollarSign, CheckCircle,
  ArrowRight, Rocket, Phone, Mail, MapPin, Grid, List,
  ChevronDown, Sparkles
} from 'lucide-react',
import { ultimate2026Services } from '../data/ultimate-2026-services',
import { revolutionary2026Innovations } from '../data/revolutionary-2026-innovations',
export default function Ultimate2026ServicesShowcase() {
  const [searchTerm, setSearchTerm] = useState(''),
  const [selectedCategory, setSelectedCategory] = useState<string>('all'),
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all'),
  const [sortBy, setSortBy] = useState<string>('name'),
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid'),

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  },
=======
import React, {_useState, _useMemo} from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {_Search, _Star, _DollarSign, _CheckCircle, _ArrowRight, _Rocket, _Phone, _Mail, _MapPin, _Grid, _List, _ChevronDown, _Sparkles} from 'lucide-react';

export default function Ultimate2026ServicesShowcase() {_const [searchTerm, _setSearchTerm] = useState('');
  const [selectedCategory, _setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, _setSelectedPriceRange] = useState<string>('all');
  const [sortBy, _setSortBy] = useState<string>('name');
  const [viewMode, _setViewMode] = useState<'grid' | 'list'>('grid');

  const _contactInfo = {
    mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  // Combine all services
  const _allServices = [
    ...ultimate2026Services,
    ...revolutionary2026Innovations
  ],

  // Dynamic category counts
  const _aiCount = allServices.filter(service =>
    service.category?.includes('AI') || service.category?.includes('Machine Learning')
<<<<<<< HEAD
  ).length,
  const quantumCount = allServices.filter(service =>
    service.category?.includes('Quantum') || service.category?.includes('Space')
  ).length,
  const enterpriseCount = allServices.filter(service =>
    service.category?.includes('Enterprise') || service.category?.includes('IT')
  ).length,
  const emergingCount = allServices.filter(service =>
=======
  ).length;
  const _quantumCount = allServices.filter(service =>
    service.category?.includes('Quantum') || service.category?.includes('Space')
  ).length;
  const _enterpriseCount = allServices.filter(service =>
    service.category?.includes('Enterprise') || service.category?.includes('IT')
  ).length;
  const _emergingCount = allServices.filter(service =>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    service.category?.includes('Emerging') || service.category?.includes('Innovation')
  ).length,

<<<<<<< HEAD
  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀', count: allServices.length },
    { id: 'ai', name: 'AI & Machine Learning', icon: '🧠', count: aiCount },
    { id: 'quantum', name: 'Quantum & Space', icon: '⚛️', count: quantumCount },
    { id: 'enterprise', name: 'Enterprise IT', icon: '🏢', count: enterpriseCount },
    { id: 'emerging', name: 'Emerging Tech', icon: '✨', count: emergingCount }
  ],

  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'low', name: 'Under $1K/month', range: 'Under $1K' },
    { id: 'medium', name: '$1K - $5K/month', range: '$1K - $5K' },
    { id: 'high', name: '$5K - $20K/month', range: '$5K - $20K' },
    { id: 'enterprise', name: 'Custom pricing', range: 'Custom' }
  ],
=======
  const _categories = [
    {_id: 'all', _name: 'All Services', _icon: '🚀', _count: allServices.length},
    {_id: 'ai', _name: 'AI & Machine Learning', _icon: '🧠', _count: aiCount},
    {_id: 'quantum', _name: 'Quantum & Space', _icon: '⚛️', _count: quantumCount},
    {_id: 'enterprise', _name: 'Enterprise IT', _icon: '🏢', _count: enterpriseCount},
    {_id: 'emerging', _name: 'Emerging Tech', _icon: '✨', _count: emergingCount}
  ];

  const _priceRanges = [
    {_id: 'all', _name: 'All Prices', _range: 'All'},
    {_id: 'low', _name: 'Under $1K/month', _range: 'Under $1K'},
    {_id: 'medium', _name: '$1K - $5K/month', _range: '$1K - $5K'},
    {_id: 'high', _name: '$5K - $20K/month', _range: '$5K - $20K'},
    {_id: 'enterprise', _name: 'Custom pricing', _range: 'Custom'}
  ];
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  // Filter and sort services
  const _filteredServices = useMemo__(() => {_let _filtered = allServices.filter(service => {
      const _matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.category.toLowerCase().includes(searchTerm.toLowerCase()),

      const _matchesCategory = selectedCategory === 'all' ||
        (selectedCategory === 'ai' && service.category.includes('AI')) ||
        (selectedCategory === 'quantum' && (service.category.includes('Quantum') || service.category.includes('Space'))) ||
        (selectedCategory === 'enterprise' && (service.category.includes('Enterprise') || service.category.includes('IT'))) ||
        (selectedCategory === 'emerging' && (service.category.includes('Emerging') || service.category.includes('Innovation'))),

<<<<<<< HEAD
      const matchesPrice = selectedPriceRange === 'all' ||
        (selectedPriceRange === 'low' && service.price !== 'Custom pricing' && parseInt(service.price.replace(/[^0-9]/g, '')) < 1000) ||
        (selectedPriceRange === 'medium' && service.price !== 'Custom pricing' && parseInt(service.price.replace(/[^0-9]/g, '')) >= 1000 && parseInt(service.price.replace(/[^0-9]/g, '')) <= 5000) ||
        (selectedPriceRange === 'high' && service.price !== 'Custom pricing' && parseInt(service.price.replace(/[^0-9]/g, '')) > 5000) ||
        (selectedPriceRange === 'enterprise' && service.price === 'Custom pricing'),

      return matchesSearch && matchesCategory && matchesPrice
    }),

    // Sort services
    switch (sortBy) {
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name)),
        break,
      case 'price':
        filtered.sort((a, b) => {
          const priceA = a.price === 'Custom pricing' ? 999999 : parseInt(a.price.replace(/[^0-9]/g, '')),
          const priceB = b.price === 'Custom pricing' ? 999999 : parseInt(b.price.replace(/[^0-9]/g, '')),
          return priceA - priceB
        }),
        break,
      case 'popularity':
        filtered.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0)),
        break,
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating),
        break,
      default: break
=======
      const _matchesPrice = selectedPriceRange === 'all' ||
        (selectedPriceRange === 'low' && service.price !== 'Custom pricing' && parseInt(service.price.replace(/[^0-9]/g, _'')) < 1000) ||
        (selectedPriceRange === 'medium' && service.price !== 'Custom pricing' && parseInt(service.price.replace(/[^0-9]/g, _'')) >= 1000 && parseInt(service.price.replace(/[^0-9]/g, _'')) <= 5000) ||
        (selectedPriceRange === 'high' && service.price !== 'Custom pricing' && parseInt(service.price.replace(/[^0-9]/g, _'')) > 5000) ||
        (selectedPriceRange === 'enterprise' && service.price === 'Custom pricing');

      return matchesSearch && matchesCategory && matchesPrice;});

    // Sort services
    switch (sortBy) {_case 'name':
        filtered.sort(_(a, _b) => a.name.localeCompare(b.name));
        break;
      case 'price':
        filtered.sort(_(a, _b) => {
          const _priceA = a.price === 'Custom pricing' ? 999999 : parseInt(a.price.replace(/[^0-9]/g, _''));
          const _priceB = b.price === 'Custom pricing' ? 999999 : parseInt(b.price.replace(/[^0-9]/g, _''));
          return priceA - priceB;});
        break;
      case 'popularity':
        filtered.sort(_(a, _b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
        break;
      case 'rating':
        filtered.sort(_(a, _b) => b.rating - a.rating);
        break;
      default:
        break;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }

    return filtered
  }, [allServices, searchTerm, selectedCategory, selectedPriceRange, sortBy]),

<<<<<<< HEAD
  const featuredServices = allServices.filter(service => service.popular).slice(0, 6),
=======
  const _featuredServices = allServices.filter(service => service.popular).slice(0, 6);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (
    <>
      <Head>
        <title>Ultimate 2026 Services Showcase | Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Discover our revolutionary 2026 innovations including AI consciousness simulation, quantum neural interfaces, autonomous AI agents, and cutting-edge enterprise solutions. Transform your business with next-generation technology.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;AI consciousness, quantum computing, autonomous AI, metaverse development, space technology, edge computing, 5G networks, cybersecurity, healthcare AI, climate prediction&quot; />
        <meta property=&quot;og:title&quot; content=&quot;Ultimate 2026 Services Showcase | Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Revolutionary 2026 innovations that will transform your business. AI, quantum computing, and emerging technologies.&quot; />
        <meta property=&quot;og:url&quot; content=&quot;https://ziontechgroup.com/ultimate-2026-services-showcase&quot; />
        <meta property=&quot;og:type&quot; content=&quot;website&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/ultimate-2026-services-showcase&quot; />
      </Head>

<<<<<<< HEAD
      {/* Hero Section */}
      <section className=&quot;relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black&quot;>
        {/* Animated Background */}
        <div className=&quot;absolute inset-0&quot;>
          <div className=&quot;absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 animate-pulse&quot;></div>
          <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]&quot;></div>
          <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1),transparent_50%)]&quot;></div>
=======
      {_/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
        {_/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 animate-pulse"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1),transparent_50%)]"></div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        </div>

        <div className=&quot;relative z-10 text-center px-6 max-w-7xl mx-auto&quot;>
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
          >
            <h1 className=&quot;text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent&quot;>
              Ultimate 2026
              <br />
              <span className=&quot;text-6xl md:text-8xl&quot;>Innovations</span>
            </h1>
            <p className=&quot;text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed&quot;>
              Discover revolutionary AI consciousness simulation, quantum neural interfaces, autonomous AI agents,
              and cutting-edge enterprise solutions that will transform your business in 2026 and beyond.
            </p>

<<<<<<< HEAD
            {/* Service Statistics */}
            <div className=&quot;grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto&quot;>
              <div className=&quot;text-center&quot;>
                <div className=&quot;text-3xl md:text-4xl font-bold text-cyan-400 mb-2&quot;>{allServices.length}+</div>
                <div className=&quot;text-gray-400&quot;>Revolutionary Services</div>
              </div>
              <div className=&quot;text-center&quot;>
                <div className=&quot;text-3xl md:text-4xl font-bold text-purple-400 mb-2&quot;>{aiCount}+</div>
                <div className=&quot;text-gray-400&quot;>AI Solutions</div>
              </div>
              <div className=&quot;text-center&quot;>
                <div className=&quot;text-3xl md:text-4xl font-bold text-pink-400 mb-2&quot;>{quantumCount}+</div>
                <div className=&quot;text-gray-400&quot;>Quantum Tech</div>
              </div>
              <div className=&quot;text-center&quot;>
                <div className=&quot;text-3xl md:text-4xl font-bold text-green-400 mb-2&quot;>{enterpriseCount}+</div>
                <div className=&quot;text-gray-400&quot;>Enterprise Solutions</div>
=======
            {_/* Service Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{_allServices.length}+</div>
                <div className="text-gray-400">Revolutionary Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">{_aiCount}+</div>
                <div className="text-gray-400">AI Solutions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">{_quantumCount}+</div>
                <div className="text-gray-400">Quantum Tech</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">{_enterpriseCount}+</div>
                <div className="text-gray-400">Enterprise Solutions</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </div>
            </div>

            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <Link href=&quot;#services&quot; className=&quot;inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105&quot;>
                <Rocket className=&quot;w-5 h-5 mr-2&quot; />
                Explore Services
              </Link>
              <Link href=&quot;/contact&quot; className=&quot;inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300&quot;>
                <Phone className=&quot;w-5 h-5 mr-2&quot; />
                Get Started
              </Link>
            </div>
          </motion.div>
        </div>

<<<<<<< HEAD
        {/* Floating Elements */}
        <div className=&quot;absolute top-20 left-20 w-32 h-32 bg-cyan-500/20 rounded-full blur-xl animate-pulse&quot;></div>
        <div className=&quot;absolute bottom-20 right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000&quot;></div>
        <div className=&quot;absolute top-1/2 left-10 w-24 h-24 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-500&quot;></div>
      </section>

      {/* Contact Bar */}
      <section className=&quot;bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 text-white py-4&quot;>
        <div className=&quot;max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between&quot;>
          <div className=&quot;flex items-center space-x-6 mb-4 md:mb-0&quot;>
            <div className=&quot;flex items-center&quot;>
              <Phone className=&quot;w-4 h-4 mr-2&quot; />
              <span className=&quot;text-sm&quot;>{contactInfo.mobile}</span>
            </div>
            <div className=&quot;flex items-center&quot;>
              <Mail className=&quot;w-4 h-4 mr-2&quot; />
              <span className=&quot;text-sm&quot;>{contactInfo.email}</span>
            </div>
            <div className=&quot;flex items-center&quot;>
              <MapPin className=&quot;w-4 h-4 mr-2&quot; />
              <span className=&quot;text-sm&quot;>{contactInfo.address}</span>
=======
        {_/* Floating Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-cyan-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-10 w-24 h-24 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-500"></div>
      </section>

      {_/* Contact Bar */}
      <section className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 text-white py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              <span className="text-sm">{_contactInfo.mobile}</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              <span className="text-sm">{_contactInfo.email}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              <span className="text-sm">{_contactInfo.address}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </div>
          </div>
          <div className=&quot;flex items-center space-x-4&quot;>
            <span className=&quot;text-sm font-semibold&quot;>Ready to Transform Your Business?</span>
            <Link href=&quot;/contact&quot; className=&quot;bg-white text-purple-600 px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors&quot;>
              Contact Us
            </Link>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Featured Services */}
      <section className=&quot;py-20 bg-gray-900&quot;>
        <div className=&quot;max-w-7xl mx-auto px-6&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }} className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
              Featured <span className=&quot;text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400&quot;>Revolutionary Services</span>
=======
      {_/* Featured Services */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Revolutionary Services</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </h2>
            <p className=&quot;text-xl text-gray-400 max-w-3xl mx-auto&quot;>
              Our most popular and innovative 2026 services that are transforming industries worldwide
            </p>
          </motion.div>

<<<<<<< HEAD
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }} className=&quot;group relative&quot;>
                <div className=&quot;relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 p-8 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105&quot;>
                  <div className=&quot;absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300&quot;></div>

                  <div className=&quot;relative z-10&quot;>
                    <div className=&quot;flex items-center justify-between mb-4&quot;>
                      <div className=&quot;text-4xl&quot;>{service.icon}</div>
                      {service.popular && (
                        <div className=&quot;bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center&quot;>
                          <Star className=&quot;w-3 h-3 mr-1&quot; />
=======
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {_featuredServices.map(_(service, _index) => (
              <motion.div
                key={service.id}
                initial={_{ opacity: 0, _y: 30}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.8, _delay: index * 0.1}} className="group relative">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 p-8 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-4xl">{_service.icon}</div>
                      {_service.popular && (
                        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                          <Star className="w-3 h-3 mr-1" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                          Popular
                        </div>
                      )}
                    </div>

<<<<<<< HEAD
                    <h3 className=&quot;text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors&quot;>
                      {service.name}
                    </h3>

                    <p className=&quot;text-gray-400 mb-4 line-clamp-3&quot;>
                      {service.description}
                    </p>

                    <div className=&quot;flex items-center justify-between mb-4&quot;>
                      <div className=&quot;text-2xl font-bold text-cyan-400&quot;>
                        {service.price}
                        <span className=&quot;text-sm text-gray-400&quot;>{service.period}</span>
                      </div>
                      <div className=&quot;flex items-center text-yellow-400&quot;>
                        <Star className=&quot;w-4 h-4 fill-current&quot; />
                        <span className=&quot;ml-1 text-sm text-gray-400&quot;>{service.rating}</span>
                      </div>
                    </div>

                    <div className=&quot;flex items-center justify-between&quot;>
                      <div className=&quot;text-sm text-gray-500&quot;>
                        {service.customers.toLocaleString()} customers
                      </div>
                      <Link
                        href={service.link} className=&quot;inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1 transform duration-200&quot;>
=======
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {_service.name}
                    </h3>

                    <p className="text-gray-400 mb-4 line-clamp-3">
                      {_service.description}
                    </p>

                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl font-bold text-cyan-400">
                        {_service.price}
                        <span className="text-sm text-gray-400">{_service.period}</span>
                      </div>
                      <div className="flex items-center text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="ml-1 text-sm text-gray-400">{_service.rating}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        {_service.customers.toLocaleString()} customers
                      </div>
                      <Link
                        href={_service.link} className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1 transform duration-200">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        Learn More
                        <ArrowRight className=&quot;w-4 h-4 ml-1&quot; />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Services Section */}
      <section id=&quot;services&quot; className=&quot;py-20 bg-black&quot;>
        <div className=&quot;max-w-7xl mx-auto px-6&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }} className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
              All <span className=&quot;text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400&quot;>Revolutionary Services</span>
=======
      {_/* Services Section */}
      <section id="services" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              All <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Revolutionary Services</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </h2>
            <p className=&quot;text-xl text-gray-400 max-w-3xl mx-auto&quot;>
              Explore our complete portfolio of cutting-edge 2026 innovations
            </p>
          </motion.div>

<<<<<<< HEAD
          {/* Filters and Search */}
          <div className=&quot;mb-12 space-y-6&quot;>
            {/* Search Bar */}
            <div className=&quot;relative max-w-2xl mx-auto&quot;>
              <Search className=&quot;absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5&quot; />
              <input
                type=&quot;text&quot;
                placeholder=&quot;Search revolutionary services...&quot;
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} className=&quot;w-full pl-12 pr-4 py-4 bg-gray-800 border border-gray-700 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all&quot;
              />
            </div>

            {/* Filters */}
            <div className=&quot;flex flex-wrap items-center justify-center gap-4&quot;>
              {/* Category Filter */}
              <div className=&quot;relative&quot;>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)} className=&quot;appearance-none bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all&quot;>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
=======
          {_/* Filters and Search */}
          <div className="mb-12 space-y-6">
            {_/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search revolutionary services..."
                value={_searchTerm}
                onChange={_(_e) => setSearchTerm(e.target.value)} className="w-full pl-12 pr-4 py-4 bg-gray-800 border border-gray-700 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
              />
            </div>

            {_/* Filters */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              {_/* Category Filter */}
              <div className="relative">
                <select
                  value={_selectedCategory}
                  onChange={_(_e) => setSelectedCategory(e.target.value)} className="appearance-none bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all">
                  {_categories.map(_(category) => (
                    <option key={category.id} value={_category.id}>
                      {_category.name} ({_category.count})
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </option>
                  ))}
                </select>
                <ChevronDown className=&quot;absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none&quot; />
              </div>

<<<<<<< HEAD
              {/* Price Filter */}
              <div className=&quot;relative&quot;>
                <select
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)} className=&quot;appearance-none bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all&quot;>
                  {priceRanges.map((range) => (
                    <option key={range.id} value={range.id}>
                      {range.name}
=======
              {_/* Price Filter */}
              <div className="relative">
                <select
                  value={_selectedPriceRange}
                  onChange={_(_e) => setSelectedPriceRange(e.target.value)} className="appearance-none bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all">
                  {_priceRanges.map(_(range) => (
                    <option key={range.id} value={_range.id}>
                      {_range.name}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </option>
                  ))}
                </select>
                <ChevronDown className=&quot;absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none&quot; />
              </div>

<<<<<<< HEAD
              {/* Sort */}
              <div className=&quot;relative&quot;>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)} className=&quot;appearance-none bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all&quot;>
                  <option value=&quot;name&quot;>Sort by Name</option>
                  <option value=&quot;price&quot;>Sort by Price</option>
                  <option value=&quot;popularity&quot;>Sort by Popularity</option>
                  <option value=&quot;rating&quot;>Sort by Rating</option>
=======
              {_/* Sort */}
              <div className="relative">
                <select
                  value={_sortBy}
                  onChange={_(_e) => setSortBy(e.target.value)} className="appearance-none bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all">
                  <option value="name">Sort by Name</option>
                  <option value="price">Sort by Price</option>
                  <option value="popularity">Sort by Popularity</option>
                  <option value="rating">Sort by Rating</option>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </select>
                <ChevronDown className=&quot;absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none&quot; />
              </div>

<<<<<<< HEAD
              {/* View Mode */}
              <div className=&quot;flex bg-gray-800 border border-gray-700 rounded-lg p-1&quot;>
=======
              {_/* View Mode */}
              <div className="flex bg-gray-800 border border-gray-700 rounded-lg p-1">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                <button
                  onClick={_() => setViewMode('grid')}
                  className={_`p-2 rounded ${viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'}`}
                >
                  <Grid className=&quot;w-4 h-4&quot; />
                </button>
                <button
                  onClick={_() => setViewMode('list')}
                  className={_`p-2 rounded ${viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'}`}
                >
                  <List className=&quot;w-4 h-4&quot; />
                </button>
              </div>
            </div>
          </div>

          {_/* Services Grid/List */}
          <div className={_viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
            {_filteredServices.map(_(service, _index) => (
              <motion.div
                key={service.id}
                initial={_{ opacity: 0, _y: 30}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.8, _delay: index * 0.05}}
                className={_viewMode === 'grid' ? 'group relative' : 'group relative bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300'}
              >
<<<<<<< HEAD
                {viewMode === 'grid' ? (
                  <div className=&quot;relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 p-8 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105&quot;>
                    <div className=&quot;absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300&quot;></div>

                    <div className=&quot;relative z-10&quot;>
                      <div className=&quot;flex items-center justify-between mb-4&quot;>
                        <div className=&quot;text-4xl&quot;>{service.icon}</div>
                        {service.popular && (
                          <div className=&quot;bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center&quot;>
                            <Star className=&quot;w-3 h-3 mr-1&quot; />
=======
                {_viewMode === 'grid' ? (
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 p-8 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-4xl">{service.icon}</div>
                        {_service.popular && (
                          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                            <Star className="w-3 h-3 mr-1" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                            Popular
                          </div>
                        )}
                      </div>

<<<<<<< HEAD
                      <h3 className=&quot;text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors&quot;>
                        {service.name}
                      </h3>

                      <p className=&quot;text-gray-400 mb-4 line-clamp-3&quot;>
                        {service.description}
                      </p>

                      <div className=&quot;flex items-center justify-between mb-4&quot;>
                        <div className=&quot;text-2xl font-bold text-cyan-400&quot;>
                          {service.price}
                          <span className=&quot;text-sm text-gray-400&quot;>{service.period}</span>
                        </div>
                        <div className=&quot;flex items-center text-yellow-400&quot;>
                          <Star className=&quot;w-4 h-4 fill-current&quot; />
                          <span className=&quot;ml-1 text-sm text-gray-400&quot;>{service.rating}</span>
                        </div>
                      </div>

                      <div className=&quot;flex items-center justify-between&quot;>
                        <div className=&quot;text-sm text-gray-500&quot;>
                          {service.customers.toLocaleString()} customers
                        </div>
                        <Link
                          href={service.link} className=&quot;inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1 transform duration-200&quot;>
=======
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                        {_service.name}
                      </h3>

                      <p className="text-gray-400 mb-4 line-clamp-3">
                        {_service.description}
                      </p>

                      <div className="flex items-center justify-between mb-4">
                        <div className="text-2xl font-bold text-cyan-400">
                          {_service.price}
                          <span className="text-sm text-gray-400">{_service.period}</span>
                        </div>
                        <div className="flex items-center text-yellow-400">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="ml-1 text-sm text-gray-400">{_service.rating}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-500">
                          {_service.customers.toLocaleString()} customers
                        </div>
                        <Link
                          href={_service.link} className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1 transform duration-200">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                          Learn More
                          <ArrowRight className=&quot;w-4 h-4 ml-1&quot; />
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : (
<<<<<<< HEAD
                  <div className=&quot;flex items-center space-x-6&quot;>
                    <div className=&quot;text-4xl&quot;>{service.icon}</div>
                    <div className=&quot;flex-1&quot;>
                      <div className=&quot;flex items-center justify-between mb-2&quot;>
                        <h3 className=&quot;text-xl font-bold text-white group-hover:text-cyan-400 transition-colors&quot;>
                          {service.name}
                        </h3>
                        {service.popular && (
                          <div className=&quot;bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center&quot;>
                            <Star className=&quot;w-3 h-3 mr-1&quot; />
=======
                  <div className="flex items-center space-x-6">
                    <div className="text-4xl">{_service.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                          {_service.name}
                        </h3>
                        {_service.popular && (
                          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                            <Star className="w-3 h-3 mr-1" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                            Popular
                          </div>
                        )}
                      </div>
<<<<<<< HEAD
                      <p className=&quot;text-gray-400 mb-3&quot;>{service.description}</p>
                      <div className=&quot;flex items-center space-x-6 text-sm text-gray-500&quot;>
                        <span>Category: {service.category}</span>
                        <span>{service.customers.toLocaleString()} customers</span>
                        <span>Rating: {service.rating}/5</span>
                      </div>
                    </div>
                    <div className=&quot;text-right&quot;>
                      <div className=&quot;text-2xl font-bold text-cyan-400 mb-2&quot;>
                        {service.price}
                        <span className=&quot;text-sm text-gray-400&quot;>{service.period}</span>
                      </div>
                      <Link
                        href={service.link} className=&quot;inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1 transform duration-200&quot;>
=======
                      <p className="text-gray-400 mb-3">{_service.description}</p>
                      <div className="flex items-center space-x-6 text-sm text-gray-500">
                        <span>Category: {_service.category}</span>
                        <span>{_service.customers.toLocaleString()} customers</span>
                        <span>Rating: {_service.rating}/5</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-cyan-400 mb-2">
                        {_service.price}
                        <span className="text-sm text-gray-400">{_service.period}</span>
                      </div>
                      <Link
                        href={_service.link} className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1 transform duration-200">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        Learn More
                        <ArrowRight className=&quot;w-4 h-4 ml-1&quot; />
                      </Link>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {_filteredServices.length === 0 && (
            <motion.div
<<<<<<< HEAD
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }} className=&quot;text-center py-20&quot;>
              <div className=&quot;text-6xl mb-4&quot;>🔍</div>
              <h3 className=&quot;text-2xl font-bold text-white mb-2&quot;>No services found</h3>
              <p className=&quot;text-gray-400&quot;>Try adjusting your search criteria or filters</p>
=======
              initial={{ opacity: 0}}
              animate={_{ opacity: 1}} className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-gray-400">Try adjusting your search criteria or filters</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </motion.div>
          )}
        </div>
      </section>

<<<<<<< HEAD
      {/* CTA Section */}
      <section className=&quot;py-20 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600&quot;>
        <div className=&quot;max-w-4xl mx-auto text-center px-6&quot;>
=======
      {_/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center px-6">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
          >
            <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
              Ready to Transform Your Business with 2026 Innovations?
            </h2>
            <p className=&quot;text-xl text-white/90 mb-8&quot;>
              Join thousands of forward-thinking companies already leveraging our revolutionary AI, quantum computing,
              and emerging technology solutions to gain competitive advantages and drive unprecedented growth.
            </p>

            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <Link href=&quot;/contact&quot; className=&quot;inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105&quot;>
                <Phone className=&quot;w-5 h-5 mr-2&quot; />
                Get Started Today
              </Link>
              <Link href=&quot;/pricing&quot; className=&quot;inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-purple-600 transition-all duration-300&quot;>
                <DollarSign className=&quot;w-5 h-5 mr-2&quot; />
                View Pricing
              </Link>
            </div>

            <div className=&quot;mt-12 grid grid-cols-1 md:grid-cols-3 gap-8&quot;>
              <div className=&quot;text-center&quot;>
                <div className=&quot;text-3xl font-bold text-white mb-2&quot;>500%+</div>
                <div className=&quot;text-white/80&quot;>Average ROI</div>
              </div>
              <div className=&quot;text-center&quot;>
                <div className=&quot;text-3xl font-bold text-white mb-2&quot;>24/7</div>
                <div className=&quot;text-white/80&quot;>Support Available</div>
              </div>
              <div className=&quot;text-center&quot;>
                <div className=&quot;text-3xl font-bold text-white mb-2&quot;>99.9%</div>
                <div className=&quot;text-white/80&quot;>Uptime Guarantee</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Footer Contact */}
      <section className=&quot;py-16 bg-gray-900&quot;>
        <div className=&quot;max-w-7xl mx-auto px-6&quot;>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-12&quot;>
=======
      {_/* Footer Contact */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <div>
              <h3 className=&quot;text-3xl font-bold text-white mb-6&quot;>
                Let's Build the Future Together
              </h3>
              <p className=&quot;text-gray-400 mb-8 text-lg&quot;>
                Our team of experts is ready to help you implement these revolutionary 2026 innovations
                and transform your business operations with cutting-edge technology.
              </p>

<<<<<<< HEAD
              <div className=&quot;space-y-4&quot;>
                <div className=&quot;flex items-center text-gray-300&quot;>
                  <Phone className=&quot;w-5 h-5 mr-3 text-cyan-400&quot; />
                  <span>{contactInfo.mobile}</span>
                </div>
                <div className=&quot;flex items-center text-gray-300&quot;>
                  <Mail className=&quot;w-5 h-5 mr-3 text-cyan-400&quot; />
                  <span>{contactInfo.email}</span>
                </div>
                <div className=&quot;flex items-center text-gray-300&quot;>
                  <MapPin className=&quot;w-5 h-5 mr-3 text-cyan-400&quot; />
                  <span>{contactInfo.address}</span>
=======
              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <Phone className="w-5 h-5 mr-3 text-cyan-400" />
                  <span>{_contactInfo.mobile}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Mail className="w-5 h-5 mr-3 text-cyan-400" />
                  <span>{_contactInfo.email}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-5 h-5 mr-3 text-cyan-400" />
                  <span>{_contactInfo.address}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </div>
              </div>
            </div>

            <div>
              <h4 className=&quot;text-2xl font-bold text-white mb-6&quot;>Why Choose Zion Tech Group?</h4>
              <div className=&quot;space-y-4&quot;>
                <div className=&quot;flex items-start&quot;>
                  <CheckCircle className=&quot;w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0&quot; />
                  <div>
                    <h5 className=&quot;text-white font-semibold mb-1&quot;>First-to-Market Innovations</h5>
                    <p className=&quot;text-gray-400&quot;>Access cutting-edge technology before your competitors</p>
                  </div>
                </div>
                <div className=&quot;flex items-start&quot;>
                  <CheckCircle className=&quot;w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0&quot; />
                  <div>
                    <h5 className=&quot;text-white font-semibold mb-1&quot;>Proven ROI</h5>
                    <p className=&quot;text-gray-400&quot;>Average customers see 300-500% return on investment</p>
                  </div>
                </div>
                <div className=&quot;flex items-start&quot;>
                  <CheckCircle className=&quot;w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0&quot; />
                  <div>
                    <h5 className=&quot;text-white font-semibold mb-1&quot;>Expert Implementation</h5>
                    <p className=&quot;text-gray-400&quot;>Full-service deployment and ongoing support</p>
                  </div>
                </div>
                <div className=&quot;flex items-start&quot;>
                  <CheckCircle className=&quot;w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0&quot; />
                  <div>
                    <h5 className=&quot;text-white font-semibold mb-1&quot;>Future-Proof Technology</h5>
                    <p className=&quot;text-gray-400&quot;>Built for the challenges and opportunities of tomorrow</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
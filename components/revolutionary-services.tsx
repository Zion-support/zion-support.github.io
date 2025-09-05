import React, { useState } from 'react',
import Head from 'next/head',
import { Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Zap as ZapIcon, Code, BookOpen, Activity, Database as DatabaseIcon, Play, Mail, Phone, MapPin, Filter, Grid, List, ChevronDown, ChevronUp, Sparkles, FlaskConical, Dna, Car, Leaf, Factory, Truck, Microscope, GraduationCap, ShieldCheck, Brain, Atom, Globe2, Bot, Eye, Trophy, FlaskConical as FlaskIcon, Dna as DnaIcon, Car as CarIcon, Leaf as LeafIcon, Factory as FactoryIcon, Truck as TruckIcon, Microscope as MicroscopeIcon, GraduationCap as GraduationCapIcon, ShieldCheck as ShieldCheckIcon } from 'lucide-react',
import Button from '../components/ui/Button',
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground',
import UltraFuturisticCard from '../components/ui/UltraFuturisticCard',
import { revolutionaryMicroSaasServices, revolutionaryServiceCategories, getRevolutionaryServicesByCategory, getPopularRevolutionaryServices, getRevolutionaryServicesByPriceRange } from '../data/revolutionary-micro-saas-services',
import { motion, AnimatePresence } from 'framer-motion',

export default function RevolutionaryServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All'),
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid'),
  const [priceRange, setPriceRange] = useState('All'),
  const [searchQuery, setSearchQuery] = useState(''),
  const [sortBy, setSortBy] = useState('name'),
  const [showFilters, setShowFilters] = useState(false),
  const [selectedService, setSelectedService] = useState<any>(null),

  const priceRanges = [
    { value: 'All', label: 'All Prices' },
    { value: '0-1000', label: '$0 - $1,000' },
    { value: '1001-2500', label: '$1,001 - $2,500' },
    { value: '2501-5000', label: '$2,501 - $5,000' },
    { value: '5001+', label: '$5,001+' }
  ],

  const sortOptions = [
    { value: 'name', label: 'Name A-Z' },
    { value: 'price', label: 'Price Low-High' },
    { value: 'popularity', label: 'Most Popular' },
    { value: 'category', label: 'Category' },
    { value: 'roi', label: 'Highest ROI' }
  ],

  // Filter and sort services,
let filteredServices = revolutionaryMicroSaasServices,

  // Category filter,
if (selectedCategory !== 'All') {
    filteredServices = getRevolutionaryServicesByCategory(selectedCategory)
  }

  // Price range filter,
if (priceRange !== 'All') {
    const [min, max] = priceRange.split('-').map(p => p === '+' ? Infinity : parseInt(p)),
    filteredServices = getRevolutionaryServicesByPriceRange(min, max)
  }
  // Search filter,
if (searchQuery) {filteredServices = filteredServices.filter(service =>
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.category.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }
  // Sort services,
filteredServices.sort(_(a, b) => {switch (sortBy) {
      case 'price':
        return parseFloat(a.price.replace('$', '').replace(, '')) - parseFloat(b.price.replace('$', '').replace(, '')),      case 'popularity':
        return (b.popular ? 1 : 0) - (a.popular ? 1 : 0),
      case 'category':
        return a.category.localeCompare(b.category),
      case 'roi':
        const aRoi = parseFloat(a.roi.match(/\d+/)?.[0] || '0'),
        const bRoi = parseFloat(b.roi.match(/\d+/)?.[0] || '0'),
        return bRoi - aRoi,
      default: return a.name.localeCompare(b.name)
    }
  }),

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  },

  const popularServices = getPopularRevolutionaryServices(),

  // Enhanced service categories with better descriptions,
const enhancedCategories = [
    {
      name: 'Quantum AI & Cognitive Computing',
      description: 'Revolutionary quantum AI solutions with human-level reasoning capabilities',
      icon: <Brain className=&quot;w-6 h-6&quot; />,
      count: revolutionaryMicroSaasServices.filter(s => s.category === 'Quantum AI & Cognitive Computing').length,
      color: 'from-purple-500 to-indigo-600'
    },
    {
      name: 'Autonomous Manufacturing & Industry 4.0',
      description: 'Next-generation autonomous manufacturing with zero human intervention',
      icon: <Factory className=&quot;w-6 h-6&quot; />,
      count: revolutionaryMicroSaasServices.filter(s => s.category === 'Autonomous Manufacturing & Industry 4.0').length,
      color: 'from-orange-500 to-red-600'
    },
    {
      name: 'Quantum Blockchain & DeFi',
      description: 'Quantum-secured blockchain platforms with infinite scalability',
      icon: <Globe className=&quot;w-6 h-6&quot; />,
      count: revolutionaryMicroSaasServices.filter(s => s.category === 'Quantum Blockchain & DeFi').length,
      color: 'from-green-500 to-emerald-600'
    },
    {
      name: 'AI Biomedical Research & Drug Discovery',
      description: 'AI-powered platforms for accelerated drug discovery and medical research',
      icon: <FlaskIcon className=&quot;w-6 h-6&quot; />,
      count: revolutionaryMicroSaasServices.filter(s => s.category === 'AI Biomedical Research & Drug Discovery').length,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      name: 'Quantum Cybersecurity & Threat Detection',
      description: 'Quantum-resistant cybersecurity with AI-powered threat detection',
      icon: <ShieldCheck className=&quot;w-6 h-6&quot; />,
      count: revolutionaryMicroSaasServices.filter(s => s.category === 'Quantum Cybersecurity & Threat Detection').length,
      color: 'from-red-500 to-pink-600'
    },
    {
      name: 'Space Technology & Satellite Optimization',
      description: 'Revolutionary platforms for space exploration and satellite optimization',
      icon: <Rocket className=&quot;w-6 h-6&quot; />,
      count: revolutionaryMicroSaasServices.filter(s => s.category === 'Space Technology & Satellite Optimization').length,
      color: 'from-indigo-500 to-purple-600'
    },
    {
      name: 'AI Content Creation & Marketing',
      description: 'Quantum-powered content creation at infinite scale',
      icon: <FileText className=&quot;w-6 h-6&quot; />,
      count: revolutionaryMicroSaasServices.filter(s => s.category === 'AI Content Creation & Marketing').length,
      color: 'from-teal-500 to-cyan-600'
    },
    {
      name: 'Quantum Computing as a Service',
      description: 'Enterprise quantum computing with real quantum processors',
      icon: <Cpu className=&quot;w-6 h-6&quot; />,
      count: revolutionaryMicroSaasServices.filter(s => s.category === 'Quantum Computing as a Service').length,
      color: 'from-violet-500 to-purple-600'
    },
    {
      name: 'Autonomous Vehicles & Smart Transportation',
      description: 'AI platforms for autonomous vehicles and smart transportation',
      icon: <CarIcon className=&quot;w-6 h-6&quot; />,
      count: revolutionaryMicroSaasServices.filter(s => s.category === 'Autonomous Vehicles & Smart Transportation').length,
      color: 'from-emerald-500 to-green-600'
    },
    {
      name: 'Smart Energy & Renewable Energy',
      description: 'AI platforms for smart energy grids and renewable energy optimization',
      icon: <LeafIcon className=&quot;w-6 h-6&quot; />,
      count: revolutionaryMicroSaasServices.filter(s => s.category === 'Smart Energy & Renewable Energy').length,
      color: 'from-yellow-500 to-orange-600'
    }
  ],
  const containerVariants = {hidden: { opacity: 0},
    visible: {opacity: 1, transition: {
        staggerChildren: 0.1}
    }
  },

  const itemVariants = {hidden: { y: 20, opacity: 0},
    visible: {y: 0, opacity: 1, transition: {
        duration: 0.5}
    }
  },

  return (
    <UltraFuturisticBackground variant=&quot;quantum&quot; intensity=&quot;high&quot;>
      <div className=&quot;min-h-screen&quot;>
        <Head>
          <title>Revolutionary Micro SaaS Services | Zion Tech Group - Quantum AI, Autonomous Systems, Space Technology</title>
          <meta name=&quot;description&quot; content=&quot;Discover revolutionary micro SaaS services from Zion Tech Group. Quantum AI, autonomous manufacturing, space technology, biomedical research, and cutting-edge solutions. Start your free trial today.&quot; />
          <meta name=&quot;keywords&quot; content=&quot;revolutionary micro SaaS, quantum AI, autonomous manufacturing, space technology, biomedical research, quantum cybersecurity, blockchain, autonomous vehicles, smart energy&quot; />
          <meta name=&quot;author&quot; content=&quot;Zion Tech Group&quot; />
          <meta property=&quot;og:title&quot; content=&quot;Revolutionary Micro SaaS Services | Zion Tech Group&quot; />
          <meta property=&quot;og:description&quot; content=&quot;Cutting-edge micro SaaS platform with quantum AI, autonomous systems, and revolutionary technology solutions.&quot; />
          <meta property=&quot;og:url&quot; content=&quot;https://ziontechgroup.com/revolutionary-services&quot; />
          <meta property=&quot;og:type&quot; content=&quot;website&quot; />
          <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/revolutionary-services&quot; />
        </Head>

        {/* Hero Section */}
        <section className=&quot;relative py-20 overflow-hidden&quot;>
          <div className=&quot;container mx-auto px-4 text-center&quot;>
            <div className=&quot;max-w-5xl mx-auto&quot;>
              <motion.h1,
className=&quot;text-6xl md:text-8xl font-bold mb-8 futuristic-glow&quot;
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}              >
                <span className=&quot;bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent&quot;>
                  Revolutionary
                </span>
                <br />
                <span className=&quot;text-white&quot;>Micro SaaS Services</span>
              </motion.h1>
              <motion.p,
className=&quot;text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed&quot;
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}              >
                Experience the future of technology with our revolutionary micro SaaS platform. 
                Quantum AI, autonomous systems, space technology, and cutting-edge solutions that redefine what's possible.
              </motion.p>
              
              {_/* Service Count Stats */}
              <motion.div,
className=&quot;grid grid-cols-2 md:grid-cols-4 gap-6 mb-16&quot;
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className=&quot;text-center&quot;>
                  <div className=&quot;text-3xl font-bold text-cyan-400 mb-2&quot;>{revolutionaryMicroSaasServices.length}+</div>
                  <div className=&quot;text-gray-400&quot;>Revolutionary Services</div>                </div>
                <div className=&quot;text-center&quot;>
                  <div className=&quot;text-3xl font-bold text-purple-400 mb-2&quot;>99.99%</div>
                  <div className=&quot;text-gray-400&quot;>Accuracy Rate</div>
                </div>
                <div className=&quot;text-center&quot;>
                  <div className=&quot;text-3xl font-bold text-green-400 mb-2&quot;>21</div>
                  <div className=&quot;text-gray-400&quot;>Day Free Trial</div>
                </div>
                <div className=&quot;text-center&quot;>
                  <div className=&quot;text-3xl font-bold text-pink-400 mb-2&quot;>2000%+</div>
                  <div className=&quot;text-gray-400&quot;>Average ROI</div>
                </div>
              </motion.div>

              {_/* CTA Buttons */}
              <motion.div,
className=&quot;flex flex-col sm:flex-row gap-4 justify-center items-center&quot;
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Button,
variant=&quot;primary&quot; 
                  size=&quot;lg&quot;
                  onClick={() => document.getElementById('services-grid')?.scrollIntoView({ behavior: 'smooth' })}                >
                  Explore Services
                  <ArrowRight className=&quot;ml-2 w-5 h-5&quot; />
                </Button>
                <Button,
variant="futuristic" 
                  size="lg"
                  onClick={() => window.open('https://ziontechgroup.com/contactblank')}                  onClick={_() => window.open('https://ziontechgroup.com/contact', _'blank')}
                >
                  Get Started
                  <Rocket className=&quot;ml-2 w-5 h-5&quot; />
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Information Banner */}
        <section className=&quot;py-8 bg-gradient-to-r from-slate-900/80 to-slate-800/80 backdrop-blur-sm border-t border-b border-cyan-400/20&quot;>
          <div className=&quot;container mx-auto px-4&quot;>
            <div className=&quot;flex flex-col md:flex-row justify-between items-center gap-4&quot;>
              <div className=&quot;flex items-center gap-4&quot;>
                <Phone className=&quot;w-5 h-5 text-cyan-400&quot; />
                <span className=&quot;text-white&quot;>{contactInfo.mobile}</span>
                <Mail className=&quot;w-5 h-5 text-purple-400&quot; />
                <span className=&quot;text-white&quot;>{contactInfo.email}</span>
              </div>
              <div className=&quot;flex items-center gap-4&quot;>
                <MapPin className=&quot;w-5 h-5 text-green-400&quot; />
                <span className=&quot;text-white&quot;>{contactInfo.address}</span>
                <Globe className=&quot;w-5 h-5 text-blue-400&quot; />
                <span className=&quot;text-white&quot;>{contactInfo.website}</span>              </div>
            </div>
          </div>
        </section>

        {/* Category Navigation */}
        <section className=&quot;py-12&quot;>
          <div className=&quot;container mx-auto px-4&quot;>
            <motion.div,
className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6&quot;
              variants={containerVariants}
              initial=&quot;hidden&quot;
              whileInView=&quot;visible&quot;
              viewport={{ once: true }}            >
              {enhancedCategories.map(_(category, index) => (_<motion.div,
key={category.name}
                  variants={itemVariants}
                  whileHover={_{ scale: 1.05}}
                  whileTap={_{ scale: 0.95}}
                >
                  <UltraFuturisticCard,
variant=&quot;quantum-advanced&quot;
                    size=&quot;small&quot;
                    className=&quot;text-center cursor-pointer h-full&quot;
                    onClick={() => setSelectedCategory(category.name === selectedCategory ? 'All' : category.name)}                  >
                    <div className={_`w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center text-white`}>
                      {category.icon}
                    </div>
                    <h3 className=&quot;text-lg font-semibold text-white mb-2&quot;>{category.name}</h3>
                    <p className=&quot;text-sm text-gray-400 mb-3&quot;>{category.description}</p>
                    <div className=&quot;text-2xl font-bold text-cyan-400&quot;>{category.count}</div>
                    <div className=&quot;text-xs text-gray-500&quot;>Services</div>                  </UltraFuturisticCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Popular Services Showcase */}
        <section className=&quot;py-16&quot;>
          <div className=&quot;container mx-auto px-4&quot;>
            <motion.div,
className=&quot;text-center mb-12&quot;
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}            >
              <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-4&quot;>
                <span className=&quot;bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent&quot;>
                  Most Popular
                </span>
                <br />
                <span className=&quot;text-white&quot;>Revolutionary Services</span>
              </h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Discover our most sought-after revolutionary micro SaaS services that are transforming industries worldwide.
              </p>
            </motion.div>

            <motion.div,
className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;
              variants={containerVariants}
              initial=&quot;hidden&quot;
              whileInView=&quot;visible&quot;
              viewport={{ once: true }}            >
              {popularServices.slice(0, 6).map(_(service, index) => (_<motion.div,
key={service.id}
                  variants={itemVariants}
                  whileHover={_{ y: -10}}
                >
                  <UltraFuturisticCard,
variant={service.variant as any}
                    size=&quot;large&quot;
                    className=&quot;h-full cursor-pointer&quot;
                    onClick={() => setSelectedService(service)}
                  >
                    <div className=&quot;text-center mb-6&quot;>
                      <div className=&quot;text-4xl mb-4&quot;>{service.icon}</div>
                      <h3 className=&quot;text-2xl font-bold text-white mb-2&quot;>{service.name}</h3>
                      <p className=&quot;text-gray-300 mb-4&quot;>{service.tagline}</p>
                      <div className=&quot;text-3xl font-bold text-cyan-400 mb-2&quot;>{service.price}</div>
                      <div className=&quot;text-sm text-gray-400&quot;>{service.period}</div>
                    </div>
                    
                    <div className=&quot;space-y-3 mb-6&quot;>
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className=&quot;flex items-center gap-2&quot;>
                          <Check className=&quot;w-4 h-4 text-green-400 flex-shrink-0&quot; />
                          <span className=&quot;text-sm text-gray-300&quot;>{feature}</span>                        </div>
                      ))}
                    </div>

                    <div className=&quot;text-center&quot;>
                                                 <Button,
variant=&quot;primary&quot; 
                             size=&quot;md&quot;
                             onClick={() => window.open(service.link, 'blank')}
                             className=&quot;w-full&quot;                           >
                             Learn More
                             <ExternalLink className=&quot;ml-2 w-4 h-4&quot; />
                           </Button>
                    </div>
                  </UltraFuturisticCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section id=&quot;services-grid&quot; className=&quot;py-16&quot;>
          <div className=&quot;container mx-auto px-4&quot;>
            {/* Filters and Controls */}
            <motion.div,
className=&quot;mb-8&quot;
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}            >
              <div className=&quot;flex flex-col lg:flex-row gap-6 items-center justify-between&quot;>
                <div className=&quot;flex flex-wrap gap-4&quot;>
                  <select,
value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className=&quot;px-4 py-2 bg-slate-800 border border-cyan-400/30 rounded-lg text-white focus:outline-none focus:border-cyan-400&quot;
                  >
                    <option value=&quot;All&quot;>All Categories</option>
                    {revolutionaryServiceCategories.map(category => (
                      <option key={category} value={category}>{category}</option>                    ))}
                  </select>
                  
                  <select,
value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className=&quot;px-4 py-2 bg-slate-800 border border-purple-400/30 rounded-lg text-white focus:outline-none focus:border-purple-400&quot;                  >
                    {priceRanges.map(range => (
                      <option key={range.value} value={range.value}>{range.label}</option>
                    ))}
                  </select>
                  
                  <select,
value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className=&quot;px-4 py-2 bg-slate-800 border border-green-400/30 rounded-lg text-white focus:outline-none focus:border-green-400&quot;                  >
                    {sortOptions.map(option => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </div>
                
                <div className=&quot;flex items-center gap-4&quot;>
                  <div className=&quot;relative&quot;>
                    <Search className=&quot;absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400&quot; />
                    <input,
type=&quot;text&quot;
                      placeholder=&quot;Search services...&quot;
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className=&quot;pl-10 pr-4 py-2 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 w-64&quot;                    />
                  </div>
                  
                  <div className=&quot;flex border border-gray-600 rounded-lg overflow-hidden&quot;>
                    <button,
onClick={_() => setViewMode('grid')}
                      className={_`px-3 py-2 ${viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'bg-slate-800 text-gray-400'}`}
                    >
                      <Grid className=&quot;w-4 h-4&quot; />
                    </button>
                    <button,
onClick={_() => setViewMode('list')}
                      className={_`px-3 py-2 ${viewMode === 'list' ? 'bg-cyan-500 text-white' : 'bg-slate-800 text-gray-400'}`}
                    >
                      <List className=&quot;w-4 h-4&quot; />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            {_/* Services Display */}
            <motion.div,
className={viewMode === 'grid' 
                ? &quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;
                : &quot;space-y-6&quot
              }
              variants={containerVariants}
              initial=&quot;hidden&quot;
              whileInView=&quot;visible&quot;
              viewport={{ once: true }}            >
              {filteredServices.map(_(service, index) => (_<motion.div,
key={service.id}
                  variants={itemVariants}
                  whileHover={_{ y: -5}}
                >
                  <UltraFuturisticCard,
variant={service.variant as any}
                    size={viewMode === 'grid' ? 'large' : 'medium'}
                    className={_`h-full cursor-pointer ${viewMode === 'list' ? 'flex flex-col md:flex-row' : ''}`}
                    onClick={_() => setSelectedService(service)}
                  >
                    {viewMode === 'grid' ? (
                      // Grid View
                      <div className=&quot;text-center&quot;>
                        <div className=&quot;text-4xl mb-4&quot;>{service.icon}</div>
                        <h3 className=&quot;text-xl font-bold text-white mb-2&quot;>{service.name}</h3>
                        <p className=&quot;text-gray-300 mb-4 text-sm&quot;>{service.tagline}</p>
                        <div className=&quot;text-2xl font-bold text-cyan-400 mb-2&quot;>{service.price}</div>
                        <div className=&quot;text-sm text-gray-400 mb-4&quot;>{service.period}</div>
                        
                        <div className=&quot;space-y-2 mb-6&quot;>
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <div key={idx} className=&quot;flex items-center gap-2 text-sm&quot;>
                              <Check className=&quot;w-3 h-3 text-green-400 flex-shrink-0&quot; />
                              <span className=&quot;text-gray-300&quot;>{feature}</span>                            </div>
                          ))}
                        </div>

                        <div className=&quot;text-center&quot;>
                          <Button,
variant=&quot;primary&quot; 
                            size=&quot;sm&quot;
                            onClick={() => window.open(service.link, 'blank')}
                            className=&quot;w-full&quot;                          >
                            Learn More
                            <ExternalLink className=&quot;ml-2 w-4 h-4&quot; />
                          </Button>
                        </div>
                      </div>
                    ) : (
                      // List View
                      <div className=&quot;flex flex-col md:flex-row gap-6 w-full&quot;>
                        <div className=&quot;text-4xl md:text-5xl flex-shrink-0&quot;>{service.icon}</div>
                        <div className=&quot;flex-1&quot;>
                          <div className=&quot;flex flex-col md:flex-row md:items-center md:justify-between mb-4&quot;>
                            <div>
                              <h3 className=&quot;text-xl font-bold text-white mb-2&quot;>{service.name}</h3>
                              <p className=&quot;text-gray-300 text-sm&quot;>{service.tagline}</p>
                            </div>
                            <div className=&quot;text-right mt-2 md:mt-0&quot;>
                              <div className=&quot;text-2xl font-bold text-cyan-400&quot;>{service.price}</div>
                              <div className=&quot;text-sm text-gray-400&quot;>{service.period}</div>                            </div>
                          </div>
                          
                          <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4 mb-4&quot;>
                            <div>
                              <h4 className=&quot;text-sm font-semibold text-cyan-400 mb-2&quot;>Key Features</h4>
                              <div className=&quot;space-y-1&quot;>
                                {service.features.slice(0, 4).map((feature, idx) => (
                                  <div key={idx} className=&quot;flex items-center gap-2 text-sm&quot;>
                                    <Check className=&quot;w-3 h-3 text-green-400 flex-shrink-0&quot; />
                                    <span className=&quot;text-gray-300&quot;>{feature}</span>                                  </div>
                                ))}
                              </div>
                            </div>
                            <div>
                              <h4 className=&quot;text-sm font-semibold text-purple-400 mb-2&quot;>Market Info</h4>
                              <div className=&quot;space-y-1 text-sm text-gray-300&quot;>
                                <div><span className=&quot;text-gray-400&quot;>ROI:</span> {service.roi}</div>
                                <div><span className=&quot;text-gray-400&quot;>Market:</span> {service.marketSize}</div>
                                <div><span className=&quot;text-gray-400&quot;>Growth:</span> {service.growthRate}</div>                              </div>
                            </div>
                          </div>
                          
                          <div className=&quot;flex gap-2&quot;>
                                                         <Button,
variant=&quot;primary&quot; 
                               size=&quot;sm&quot;
                               onClick={() => window.open(service.link, 'blank')}                             >
                               Learn More
                               <ExternalLink className=&quot;ml-2 w-4 h-4&quot; />
                             </Button>
                             <Button,
variant=&quot;futuristic&quot; 
                               size=&quot;sm&quot;
                               onClick={() => setSelectedService(service)}                             >
                               View Details
                               <Eye className=&quot;ml-2 w-4 h-4&quot; />
                             </Button>
                          </div>
                        </div>
                      </div>
                    )}
                  </UltraFuturisticCard>
                </motion.div>
              ))}
            </motion.div>

            {filteredServices.length === 0 && (
              <motion.div,
className=&quot;text-center py-16&quot;
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}              >
                <div className=&quot;text-6xl mb-4&quot;>🔍</div>
                <h3 className=&quot;text-2xl font-bold text-white mb-2&quot;>No Services Found</h3>
                <p className=&quot;text-gray-400 mb-6&quot;>Try adjusting your search criteria or filters.</p>
                                         <Button,
variant=&quot;primary&quot;
                           onClick={() => {
                             setSearchQuery(''),
                             setSelectedCategory('All'),
                             setPriceRange('All')
                           }}                         >
                           Clear Filters
                         </Button>
              </motion.div>
            )}
          </div>
        </section>

        {_/* Service Details Modal */}
        <AnimatePresence>
          {selectedService && (
            <motion.div,
className=&quot;fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4&quot;
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
            >
              <motion.div,
className=&quot;bg-slate-900 rounded-2xl border border-cyan-400/30 max-w-4xl w-full max-h-[90vh] overflow-y-auto&quot;
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className=&quot;p-8&quot;>
                  <div className=&quot;flex justify-between items-start mb-6&quot;>
                    <div className=&quot;flex items-center gap-4&quot;>
                      <div className=&quot;text-5xl&quot;>{selectedService.icon}</div>
                      <div>
                        <h2 className=&quot;text-3xl font-bold text-white mb-2&quot;>{selectedService.name}</h2>
                        <p className=&quot;text-xl text-gray-300&quot;>{selectedService.tagline}</p>
                      </div>
                    </div>
                    <button,
onClick={() => setSelectedService(null)}
                      className=&quot;text-gray-400 hover:text-white text-2xl&quot;                    >
                      ×
                    </button>
                  </div>

                  <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-8&quot;>
                    <div>
                      <h3 className=&quot;text-xl font-semibold text-cyan-400 mb-4&quot;>Service Details</h3>
                      <p className=&quot;text-gray-300 mb-6&quot;>{selectedService.description}</p>                      
                      <div className=&quot;space-y-4&quot;>
                        <div>
                          <h4 className=&quot;text-sm font-semibold text-purple-400 mb-2&quot;>Pricing</h4>
                          <div className=&quot;text-2xl font-bold text-white&quot;>{selectedService.price}{selectedService.period}</div>
                          <div className=&quot;text-sm text-gray-400&quot;>{selectedService.marketPrice}</div>
                        </div>
                        
                        <div>
                          <h4 className=&quot;text-sm font-semibold text-green-400 mb-2&quot;>ROI & Market</h4>
                          <div className=&quot;text-sm text-gray-300 space-y-1&quot;>
                            <div><span className=&quot;text-gray-400&quot;>ROI:</span> {selectedService.roi}</div>
                            <div><span className=&quot;text-gray-400&quot;>Market Size:</span> {selectedService.marketSize}</div>
                            <div><span className=&quot;text-gray-400&quot;>Growth Rate:</span> {selectedService.growthRate}</div>                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className=&quot;text-xl font-semibold text-cyan-400 mb-4&quot;>Features & Capabilities</h3>
                      
                      <div className=&quot;space-y-4&quot;>
                        <div>
                          <h4 className=&quot;text-sm font-semibold text-purple-400 mb-2&quot;>Key Features</h4>
                          <div className=&quot;space-y-2&quot;>
                            {selectedService.features.map((feature, idx) => (
                              <div key={idx} className=&quot;flex items-center gap-2 text-sm&quot;>
                                <Check className=&quot;w-3 h-3 text-green-400 flex-shrink-0&quot; />
                                <span className=&quot;text-gray-300&quot;>{feature}</span>                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className=&quot;text-sm font-semibold text-green-400 mb-2&quot;>Benefits</h4>
                          <div className=&quot;space-y-2&quot;>
                            {selectedService.benefits.map((benefit, idx) => (
                              <div key={idx} className=&quot;flex items-center gap-2 text-sm&quot;>
                                <Star className=&quot;w-3 h-3 text-yellow-400 flex-shrink-0&quot; />
                                <span className=&quot;text-gray-300&quot;>{benefit}</span>                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className=&quot;text-sm font-semibold text-blue-400 mb-2&quot;>Capabilities</h4>
                          <div className=&quot;space-y-2&quot;>
                            {selectedService.capabilities.map((capability, idx) => (
                              <div key={idx} className=&quot;flex items-center gap-2 text-sm&quot;>
                                <Zap className=&quot;w-3 h-3 text-cyan-400 flex-shrink-0&quot; />
                                <span className=&quot;text-gray-300&quot;>{capability}</span>                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className=&quot;mt-8 pt-6 border-t border-gray-700&quot;>
                    <div className=&quot;flex flex-col sm:flex-row gap-4 justify-between items-center&quot;>
                      <div className=&quot;text-sm text-gray-400&quot;>
                        <div>Setup Time: {selectedService.setupTime}</div>
                        <div>Trial: {selectedService.trialDays} days</div>                      </div>
                      
                      <div className=&quot;flex gap-4&quot;>
                                                 <Button,
variant=&quot;primary&quot;
                           onClick={() => window.open(selectedService.link, 'blank')}                         >
                           Visit Service
                           <ExternalLink className=&quot;ml-2 w-4 h-4&quot; />
                         </Button>
                         <Button,
variant="futuristic"
                           onClick={() => window.open('https://ziontechgroup.com/contactblank')}                           onClick={_() => window.open('https://ziontechgroup.com/contact', _'blank')}
                         >
                           Contact Sales
                           <Mail className=&quot;ml-2 w-4 h-4&quot; />
                         </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Contact Section */}
        <section className=&quot;py-20&quot;>
          <div className=&quot;container mx-auto px-4 text-center&quot;>
            <motion.div,
className=&quot;max-w-4xl mx-auto&quot;
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}            >
              <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
                Ready to Experience the Future?
              </h2>
              <p className=&quot;text-xl text-gray-300 mb-8&quot;>
                Join thousands of companies already transforming their business with our revolutionary micro SaaS services.
              </p>
              
              <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center items-center mb-8&quot;>
                                 <Button,
variant="primary" 
                   size="lg"
                   onClick={() => window.open('https://ziontechgroup.com/contactblank')}                   onClick={_() => window.open('https://ziontechgroup.com/contact', _'blank')}
                 >
                   Start Free Trial
                   <Rocket className=&quot;ml-2 w-5 h-5&quot; />
                 </Button>
                 <Button,
variant="futuristic" 
                   size="lg"
                   onClick={() => window.open('https://ziontechgroup.com/contactblank')}                   onClick={_() => window.open('https://ziontechgroup.com/contact', _'blank')}
                 >
                   Schedule Demo
                   <Calendar className=&quot;ml-2 w-5 h-5&quot; />
                 </Button>
              </div>

              <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-6 text-center&quot;>
                <div>
                  <Phone className=&quot;w-8 h-8 text-cyan-400 mx-auto mb-2&quot; />
                  <div className=&quot;text-white font-semibold&quot;>{contactInfo.mobile}</div>
                  <div className=&quot;text-gray-400 text-sm&quot;>Call us anytime</div>
                </div>
                <div>
                  <Mail className=&quot;w-8 h-8 text-purple-400 mx-auto mb-2&quot; />
                  <div className=&quot;text-white font-semibold&quot;>{contactInfo.email}</div>
                  <div className=&quot;text-gray-400 text-sm&quot;>Email us 24/7</div>
                </div>
                <div>
                  <MapPin className=&quot;w-8 h-8 text-green-400 mx-auto mb-2&quot; />
                  <div className=&quot;text-white font-semibold&quot;>{contactInfo.address}</div>
                  <div className=&quot;text-gray-400 text-sm&quot;>Visit our office</div>                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraFuturisticBackground>
  )
}
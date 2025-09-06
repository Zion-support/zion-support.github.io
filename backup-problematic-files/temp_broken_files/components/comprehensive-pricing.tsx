import React, { useState } from 'react',
import Head from 'next/head',
import { Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Zap as ZapIcon, Code, BookOpen, Activity, Database as DatabaseIcon, Play, Mail, Phone, MapPin, Filter, Grid, List, ChevronDown, ChevronUp, Sparkles, FlaskConical, Dna, Car, Leaf, Factory, Truck, Microscope, GraduationCap, ShieldCheck, Brain, Atom, Globe2, Bot, Eye, Trophy, FlaskConical as FlaskIcon, Dna as DnaIcon, Car as CarIcon, Leaf as LeafIcon, Factory as FactoryIcon, Truck as TruckIcon, Microscope as MicroscopeIcon, GraduationCap as GraduationCapIcon, ShieldCheck as ShieldCheckIcon, Crown, Gem, Diamond } from 'lucide-react',
import Button from '../components/ui/Button',
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground',
import UltraFuturisticCard from '../components/ui/UltraFuturisticCard',
import { revolutionaryMicroSaasServices, revolutionaryServiceCategories } from '../data/revolutionary-micro-saas-services',
import { enhancedMicroSaasServices } from '../data/enhanced-micro-saas-services',
import { motion, AnimatePresence } from 'framer-motion',

export default function ComprehensivePricingPage() {
  const [selectedCategory, setSelectedCategory] = useState('All'),
  const [priceRange, setPriceRange] = useState('All'),
  const [searchQuery, setSearchQuery] = useState(''),
  const [sortBy, setSortBy] = useState('price'),
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid'),

  const allServices = [...revolutionaryMicroSaasServices, ...enhancedMicroSaasServices],

  const priceRanges = [
    { value: 'All', label: 'All Prices' },
    { value: '0-100', label: '$0 - $100' },
    { value: '101-500', label: '$101 - $500' },
    { value: '501-1000', label: '$501 - $1,000' },
    { value: '1001-2500', label: '$1,001 - $2,500' },
    { value: '2501-5000', label: '$2,501 - $5,000' },
    { value: '5001+', label: '$5,001+' }
  ],

  const sortOptions = [
    { value: 'price', label: 'Price Low-High' },
    { value: 'name', label: 'Name A-Z' },
    { value: 'popularity', label: 'Most Popular' },
    { value: 'category', label: 'Category' },
    { value: 'roi', label: 'Highest ROI' }
  ],

  // Filter and sort services,
let filteredServices = allServices,

  // Category filter,
if (selectedCategory != 'All') {
    filteredServices = filteredServices.filter(service => service.category = = selectedCategory)
  }

  // Price range filter,
if (priceRange != 'All') {
    const [min, max] = priceRange.split('-').map(p => p = = '+' ? Infinity : parseInt(p),
    filteredServices = filteredServices.filter(service => {
      const price = parseFloat(service.price.replace('$', '').replace(, ''),
      return price >= min && (max = = Infinity || price <= max)
    })  }

  // Search filter,
if (searchQuery) {filteredServices = filteredServices.filter(service =>
      service.name.toLowerCase().includes(searchQuery.toLowerCase() ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase() ||
      service.tagline.toLowerCase().includes(searchQuery.toLowerCase() ||
      service.category.toLowerCase().includes(searchQuery.toLowerCase()
    )
  }
  // Sort services,
filteredServices.sort(_(a, b) => {switch (sortBy) {
      case 'price':
        return parseFloat(a.price.replace('$', '').replace(, '') - parseFloat(b.price.replace('$', '').replace(, ''),      case 'popularity':
        return (b.popular ? 1 : 0) - (a.popular ? 1 : 0),
      case 'category':
        return a.category.localeCompare(b.category),
      case 'roi':
        const aRoi = parseFloat(a.roi.match(/\d+/)?.[0] || '0'),
        const bRoi = parseFloat(b.roi.match(/\d+/)?.[0] || '0'),
        return bRoi - aRoi,
      default: return a.name.localeCompare(b.name)
    }),

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  },

  // Pricing tiers,
const pricingTiers = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Basic service accessEmail supportStandard featuresCommunity forum accessBasic analytics'
      ],
      icon: <Star className=&quot;w-6 h-6&quot; />,
      color: 'from-blue-500 to-cyan-600',
      popular: false
    },
    {
      name: 'Professional',
      price: '$199',
      period: '/month',
      description: 'Ideal for growing businesses and teams',
      features: [
        'Advanced service accessPriority supportAdvanced featuresAPI accessAdvanced analyticsCustom integrations'
      ],
      icon: <Gem className=&quot;w-6 h-6&quot; />,
      color: 'from-purple-500 to-pink-600',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$499',
      period: '/month',
      description: 'For large organizations and enterprises',
      features: [
        'Full service access24/7 dedicated supportAll featuresCustom developmentEnterprise analyticsWhite-label optionsSLA guarantees'
      ],
      icon: <Crown className=&quot;w-6 h-6&quot; />,
      color: 'from-yellow-500 to-orange-600',
      popular: false
    }
  ],

  // Market statistics,
const marketStats = [
    {
      metric: '$15.2B',
      label: 'Total Market Size',
      description: 'Combined market value of all services',
      icon: <ChartBar className=&quot;w-6 h-6&quot; />
    },
    {
      metric: '400+',
      label: 'Services Available',
      description: 'Comprehensive micro SaaS portfolio',
      icon: <Database className=&quot;w-6 h-6&quot; />
    },
    {
      metric: '99.99%',
      label: 'Uptime Guarantee',
      description: 'Enterprise-grade reliability',
      icon: <Shield className=&quot;w-6 h-6&quot; />
    },
    {
      metric: '2000%+',
      label: 'Average ROI',
      description: 'Proven business value',
      icon: <TrendingUp className=&quot;w-6 h-6&quot; />
    }
  ],
  const containerVariants = {hidden: { opacity: 0},
    visible: {opacity: 1, transition: {
        staggerChildren: 0.1}
  },

  const itemVariants = {hidden: { y: 20, opacity: 0},
    visible: {y: 0, opacity: 1, transition: {
        duration: 0.5}
  },

  return (
    <UltraFuturisticBackground variant=&quot;holographic&quot; intensity=&quot;high&quot;>
      <div className=&quot;min-h-screen&quot;>
        <Head>
          <title>Comprehensive Pricing | Zion Tech Group - Micro SaaS Services Pricing & Plans</title>
          <meta name=&quot;description&quot; content=&quot;Explore comprehensive pricing for all Zion Tech Group micro SaaS services. Transparent pricing, market analysis, ROI guarantees, and flexible plans for every business size.&quot; />
          <meta name=&quot;keywords&quot; content=&quot;micro SaaS pricing, service pricing, business pricing, ROI guarantees, market analysis, transparent pricing, enterprise pricing&quot; />
          <meta name=&quot;author&quot; content=&quot;Zion Tech Group&quot; />
          <meta property=&quot;og:title&quot; content=&quot;Comprehensive Pricing | Zion Tech Group&quot; />
          <meta property=&quot;og:description&quot; content=&quot;Transparent pricing for all micro SaaS services with market analysis and ROI guarantees.&quot; />
          <meta property=&quot;og:url&quot; content=&quot;https://ziontechgroup.com/comprehensive-pricing&quot; />
          <meta property=&quot;og:type&quot; content=&quot;website&quot; />
          <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/comprehensive-pricing&quot; />
        </Head>

        {/* Hero Section */}
        <section className=&quot;relative py-20 overflow-hidden&quot;>
          <div className=&quot;container mx-auto px-4 text-center&quot;>
            <div className=&quot;max-w-5xl mx-auto&quot;>
              <motion.h1,
className=&quot;text-6xl md:text-8xl font-bold mb-8 futuristic-glow&quot;
                initial={ opacity: 0, y: 30 }
                animate={ opacity: 1, y: 0 }
                transition={ duration: 0.8 }              >
                <span className=&quot;bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent&quot;>
                  Comprehensive
                </span>
                <br />
                <span className=&quot;text-white&quot;>Pricing & Plans</span>
              </motion.h1>
              <motion.p,
className=&quot;text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed&quot;
                initial={ opacity: 0, y: 20 }
                animate={ opacity: 1, y: 0 }
                transition={ duration: 0.8, delay: 0.2 }              >
                Transparent pricing for all our revolutionary micro SaaS services. 
                Choose the perfect plan for your business with guaranteed ROI and enterprise-grade reliability.
              </motion.p>

              {_/* Market Stats */}
              <motion.div,
className=&quot;grid grid-cols-2 md:grid-cols-4 gap-6 mb-16&quot;
                initial={ opacity: 0, y: 20 }
                animate={ opacity: 1, y: 0 }
                transition={ duration: 0.8, delay: 0.4 }
              >
                {marketStats.map(stat, index) => (
                  <div key={index} className=&quot;text-center&quot;>
                    <div className=&quot;text-3xl font-bold text-cyan-400 mb-2&quot;>{stat.metric}</div>
                    <div className=&quot;text-gray-400 text-sm&quot;>{stat.label}</div>
                    <div className=&quot;text-gray-500 text-xs&quot;>{stat.description}</div>                  </div>
                )}
              </motion.div>

              {_/* CTA Buttons */}
              <motion.div,
className=&quot;flex flex-col sm:flex-row gap-4 justify-center items-center&quot;
                initial={ opacity: 0, y: 20 }
                animate={ opacity: 1, y: 0 }
                transition={ duration: 0.8, delay: 0.6 }
              >
                <Button,
variant=&quot;primary&quot; 
                  size=&quot;lg&quot;
                  onClick={() => document.getElementById('pricing-tiers')?.scrollIntoView({ behavior: 'smooth' })}                >
                  View Pricing Tiers
                  <DollarSign className=&quot;ml-2 w-5 h-5&quot; />
                </Button>
                <Button,
variant=&quot;futuristic&quot; 
                  size=&quot;lg&quot;
                  onClick={() => document.getElementById('services-pricing')?.scrollIntoView({ behavior: 'smooth' })}                >
                  Browse All Services
                  <Search className=&quot;ml-2 w-5 h-5&quot; />
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Information Banner */}
        <section className=&quot;py-8 bg-gradient-to-r from-slate-900/80 to-slate-800/80 backdrop-blur-sm border-t border-b border-purple-400/20&quot;>
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

        {/* Pricing Tiers */}
        <section id=&quot;pricing-tiers&quot; className=&quot;py-20&quot;>
          <div className=&quot;container mx-auto px-4&quot;>
            <motion.div,
className=&quot;text-center mb-16&quot;
              initial={ opacity: 0, y: 20 }
              whileInView={ opacity: 1, y: 0 }
              viewport={ once: true }
              transition={ duration: 0.6 }            >
              <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-4&quot;>
                <span className=&quot;bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent&quot;>
                  Flexible Pricing
                </span>
                <br />
                <span className=&quot;text-white&quot;>for Every Business</span>
              </h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Choose the perfect plan that scales with your business. All plans include our 21-day free trial and ROI guarantee.
              </p>
            </motion.div>

            <motion.div,
className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto&quot;
              variants={containerVariants}
              initial=&quot;hidden&quot;
              whileInView=&quot;visible&quot;
              viewport={ once: true }            >
              {pricingTiers.map(_(tier, index) => (
                <motion.div,
key={tier.name}
                  variants={itemVariants}
                  whileHover={_{ y: -10}
                >
                  <UltraFuturisticCard,
variant={tier.popular ? 'holographic-advanced' : 'quantum-advanced'}
                    size=&quot;large&quot;
                    className={`h-full relative ${tier.popular ? 'ring-2 ring-purple-400' : ''}`}
                  >
                    {tier.popular && (
                      <div className=&quot;absolute -top-4 left-1/2 transform -translate-x-1/2&quot;>
                        <div className=&quot;bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold&quot;>                          Most Popular
                        </div>
                      </div>
                    )}

                    <div className=&quot;text-center mb-8&quot;>
                      <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${tier.color} mb-6`}>
                        {tier.icon}
                      </div>
                      <h3 className=&quot;text-2xl font-bold text-white mb-2&quot;>{tier.name}</h3>
                      <p className=&quot;text-gray-300 text-sm mb-4&quot;>{tier.description}</p>
                      <div className=&quot;text-4xl font-bold text-cyan-400 mb-2&quot;>{tier.price}</div>
                      <div className=&quot;text-sm text-gray-400&quot;>{tier.period}</div>
                    </div>

                    <div className=&quot;space-y-3 mb-8&quot;>
                      {tier.features.map(feature, idx) => (
                        <div key={idx} className=&quot;flex items-center gap-2&quot;>
                          <Check className=&quot;w-4 h-4 text-green-400 flex-shrink-0&quot; />
                          <span className=&quot;text-sm text-gray-300&quot;>{feature}</span>                        </div>
                      )}
                    </div>

                    <div className=&quot;text-center&quot;>
                                             <Button,
variant={tier.popular ? 'futuristic' : 'primary'} 
                         size="md"
                         onClick={() => window.open('https://ziontechgroup.com/contactblank')}                         className="w-full"
                         size=&quot;md&quot;
                         onClick={() => window.open('https://ziontechgroup.com/contact', 'blank')}
                         className=&quot;w-full&quot;
                       >
                        Get Started
                        <ArrowRight className=&quot;ml-2 w-4 h-4&quot; />
                      </Button>
                    </div>
                  </UltraFuturisticCard>
                </motion.div>
              )}
            </motion.div>;
          </div>;
        </section>;

        {/* Services Pricing Grid */}
        <section id=&quot;services-pricing&quot; className=&quot;py-20&quot;>
          <div className=&quot;container mx-auto px-4&quot;>
            {/* Filters and Controls */}
            <motion.div,
className=&quot;mb-8&quot;
              initial={ opacity: 0, y: 20 }
              whileInView={ opacity: 1, y: 0 }
              viewport={ once: true }
              transition={ duration: 0.6 }            >
              <div className=&quot;flex flex-col lg:flex-row gap-6 items-center justify-between&quot;>
                <div className=&quot;flex flex-wrap gap-4&quot;>
                  <select,
value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className=&quot;px-4 py-2 bg-slate-800 border border-cyan-400/30 rounded-lg text-white focus:outline-none focus:border-cyan-400&quot;
                  >
                    <option value=&quot;All&quot;>All Categories</option>
                    {revolutionaryServiceCategories.map(category => (
                      <option key={category} value={category}>{category}</option>                    )}
                  </select>

                  <select,
value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className=&quot;px-4 py-2 bg-slate-800 border border-purple-400/30 rounded-lg text-white focus:outline-none focus:border-purple-400&quot;                  >
                    {priceRanges.map(range => (
                      <option key={range.value} value={range.value}>{range.label}</option>
                    )}
                  </select>

                  <select,
value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className=&quot;px-4 py-2 bg-slate-800 border border-green-400/30 rounded-lg text-white focus:outline-none focus:border-green-400&quot;                  >
                    {sortOptions.map(option => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    )}
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
                      className={_`px-3 py-2 ${viewMode = = 'grid' ? 'bg-cyan-500 text-white' : 'bg-slate-800 text-gray-400'}`}
                    >
                      <Grid className=&quot;w-4 h-4&quot; />
                    </button>
                    <button,
onClick={_() => setViewMode('list')}
                      className={_`px-3 py-2 ${viewMode = = 'list' ? 'bg-cyan-500 text-white' : 'bg-slate-800 text-gray-400'}`}
                    >
                      <List className=&quot;w-4 h-4&quot; />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            {_/* Services Display */}
            <motion.div,
className={viewMode = = 'grid' 
                ? &quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;
                : &quot;space-y-6&quot
              }
              variants={containerVariants}
              initial=&quot;hidden&quot;
              whileInView=&quot;visible&quot;
              viewport={ once: true }            >
              {filteredServices.map(_(service, index) => (
                <motion.div,
key={service.id}
                  variants={itemVariants}
                  whileHover={_{ y: -5}
                >
                  <UltraFuturisticCard,
variant={service.variant as any || 'quantum-advanced'}
                    size={viewMode = = 'grid' ? 'large' : 'medium'}
                    className={_`h-full cursor-pointer ${viewMode = = 'list' ? 'flex flex-col md:flex-row' : ''}`}
                  >
                    {viewMode = = 'grid' ? (
                      // Grid View
                      <div className=&quot;text-center&quot;>
                        <div className=&quot;text-4xl mb-4&quot;>{service.icon}</div>
                        <h3 className=&quot;text-xl font-bold text-white mb-2&quot;>{service.name}</h3>
                        <p className=&quot;text-gray-300 mb-4 text-sm&quot;>{service.tagline}</p>
                        <div className=&quot;text-2xl font-bold text-cyan-400 mb-2&quot;>{service.price}</div>
                        <div className=&quot;text-sm text-gray-400 mb-4&quot;>{service.period}</div>

                        <div className=&quot;space-y-2 mb-6&quot;>
                          {service.features.slice(0, 3).map(feature, idx) => (
                            <div key={idx} className=&quot;flex items-center gap-2 text-sm&quot;>
                              <Check className=&quot;w-3 h-3 text-green-400 flex-shrink-0&quot; />
                              <span className=&quot;text-gray-300&quot;>{feature}</span>                            </div>
                          )}
                        </div>

                        <div className=&quot;text-center space-y-2&quot;>
                                                     <Button,
variant=&quot;primary&quot; 
                             size=&quot;sm&quot;
                             onClick={() => window.open(service.link, 'blank')}
                             className=&quot;w-full&quot;                           >
                             Learn More
                             <ExternalLink className=&quot;ml-2 w-4 h-4&quot; />
                           </Button>
                           <Button,
variant="futuristic" 
                             size="sm"
                             onClick={() => window.open('https://ziontechgroup.com/contactblank')}                             className="w-full"
                             variant=&quot;futuristic&quot; 
                             size=&quot;sm&quot;
                             onClick={() => window.open('https://ziontechgroup.com/contact', 'blank')}
                             className=&quot;w-full&quot;
                           >
                             Get Pricing
                             <DollarSign className=&quot;ml-2 w-4 h-4&quot; />
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
                                {service.features.slice(0, 4).map(feature, idx) => (
                                  <div key={idx} className=&quot;flex items-center gap-2 text-sm&quot;>
                                    <Check className=&quot;w-3 h-3 text-green-400 flex-shrink-0&quot; />
                                    <span className=&quot;text-gray-300&quot;>{feature}</span>                                  </div>
                                )}
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
variant="futuristic" 
                               size="sm"
                               onClick={() => window.open('https://ziontechgroup.com/contactblank')}                               onClick={_() => window.open('https://ziontechgroup.com/contact', _'blank')}
                             >
                               Get Pricing
                               <DollarSign className=&quot;ml-2 w-4 h-4&quot; />
                             </Button>
                          </div>
                        </div>
                      </div>
                    )}
                  </UltraFuturisticCard>;
                </motion.div>;
              )}
            </motion.div>

            {filteredServices.length = = 0 && (
              <motion.div,
className=&quot;text-center py-16&quot;
                initial={ opacity: 0 }
                animate={ opacity: 1 }
                transition={ duration: 0.6 }              >
                <div className=&quot;text-6xl mb-4&quot;></div>
                <h3 className=&quot;text-2xl font-bold text-white mb-2&quot;>No Services Found</h3>
                <p className=&quot;text-gray-400 mb-6&quot;>Try adjusting your search criteria or filters.</p>
                                 <Button,
variant=&quot;primary&quot;
                   onClick={() => {
                     setSearchQuery(''),
                     setSelectedCategory('All'),
                     setPriceRange('All')
                   }                 >
                   Clear Filters
                 </Button>
              </motion.div>
            )}
          </div>;
        </section>;

        {/* Contact Section */}
        <section className=&quot;py-20&quot;>
          <div className=&quot;container mx-auto px-4 text-center&quot;>
            <motion.div,
className=&quot;max-w-4xl mx-auto&quot;
              initial={ opacity: 0, y: 20 }
              whileInView={ opacity: 1, y: 0 }
              viewport={ once: true }
              transition={ duration: 0.8 }            >
              <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
                Ready to Get Started?
              </h2>
              <p className=&quot;text-xl text-gray-300 mb-8&quot;>
                Contact our sales team to discuss pricing, custom plans, and implementation options.
              </p>

              <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center items-center mb-8&quot;>
                <Button,
variant="primary" 
                  size="lg"
                  onClick={() => window.open('https://ziontechgroup.com/contactblank')}                  onClick={_() => window.open('https://ziontechgroup.com/contact', _'blank')}
                >
                  Contact Sales
                  <Mail className=&quot;ml-2 w-5 h-5&quot; />
                </Button>
                <Button,
variant="futuristic" 
                  size="lg"
                  onClick={() => window.open('https://ziontechgroup.com/contactblank')}                  onClick={_() => window.open('https://ziontechgroup.com/contact', _'blank')}
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
  )}
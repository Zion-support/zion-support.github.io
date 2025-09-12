import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle, ArrowRight, Star, TrendingUp, Phone, Mail, MapPin, 
  Rocket, Brain, Atom, Shield, Award, Zap, Cloud, Target, Search,
  Filter, Grid, List, DollarSign, Users, Clock, Eye, Heart
} from 'lucide-react';
import Link from 'next/link';

import { comprehensiveRealServices2025 } from '../data/2025-comprehensive-real-services';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

    const matchesCategory = selectedCategory === 'all' || 
      service.category?.toLowerCase().includes(selectedCategory.replace('-', ' ')) ||
      service.tags?.some(tag => tag.toLowerCase().includes(selectedCategory.replace('-', ' ')));
    
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
=======
const categories = [
  'All Services',
  'AI & Machine Learning',
  'Customer Success',
  'Supply Chain',
  'Financial Planning',
  'Sales Intelligence',
  'HR Analytics',
  'Decision Intelligence',
  'Content Marketing',
  'CRM & Customer Intelligence',
  'Business Intelligence'
];

const pricingRanges = [
  'All Prices',
  'Under $300',
  '$300 - $500',
  '$500 - $800',
  '$800+'
];

export default function ComprehensiveServicesShowcase2025() {
  const [selectedCategory, setSelectedCategory] = useState('All Services');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All Prices');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'rating' | 'popularity'>('popularity');

  // Filter services based on selections
  const filteredServices = comprehensiveRealServices2025.filter(service => {
    const categoryMatch = selectedCategory === 'All Services' || service.category.includes(selectedCategory);
    
    let priceMatch = true;
    if (selectedPriceRange !== 'All Prices') {
      const price = parseInt(service.price.replace('$', ''));
      switch (selectedPriceRange) {
        case 'Under $300':
          priceMatch = price < 300;
          break;
        case '$300 - $500':
          priceMatch = price >= 300 && price <= 500;
          break;
        case '$500 - $800':
          priceMatch = price > 500 && price <= 800;
          break;
        case '$800+':
          priceMatch = price > 800;
          break;
      }
    }
    
    const searchMatch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       service.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    return categoryMatch && priceMatch && searchMatch;
  });

  // Sort services
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'popular':
        return b.popular ? 1 : -1;
      case 'price':
        return parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''));
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime();
      default:
        return 0;
    }
  });

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(allServices.map(service => service.category)))];

  const serviceCategories = [
    {
      category: "AI Consciousness & Evolution",
      icon: <Brain className="w-8 h-8" />,
      color: "from-purple-500 to-pink-600",
      services: [
        {
          name: "AI Consciousness Evolution Platform 2045",
          description: "Revolutionary platform for developing conscious AI systems",
          path: "/ai-consciousness-evolution-2045",
          features: ["Consciousness Mapping", "Ethical AI Development", "Neural Evolution"]
        },
        {
          name: "Quantum AI Cognitive Platform 2045",
          description: "Quantum-powered cognitive computing solutions",
          path: "/quantum-ai-cognitive-2045",
          features: ["Quantum Cognition", "Neural Networks", "Advanced Analytics"]
        }
      ]
    },
    {
      category: "Cybersecurity & Defense",
      icon: <Shield className="w-8 h-8" />,
      color: "from-green-500 to-emerald-600",
      services: [
        {
          name: "Advanced Threat Detection",
          description: "AI-powered cybersecurity threat detection and prevention",
          path: "/security",
          features: ["Real-time Monitoring", "AI Analysis", "Automated Response"]
        },
        {
          name: "Quantum Encryption",
          description: "Unbreakable quantum encryption for data protection",
          path: "/security",
          features: ["Quantum Key Distribution", "Post-Quantum Security", "Zero Trust"]
        }
      ]
    },
    {
      category: "Space Technology & Exploration",
      icon: <Rocket className="w-8 h-8" />,
      color: "from-orange-500 to-red-600",
      services: [
        {
          name: "Satellite Systems",
          description: "Advanced satellite technology for global connectivity",
          path: "/services",
          features: ["Low Earth Orbit", "High-Speed Data", "Global Coverage"]
        },
        {
          name: "Space Infrastructure",
          description: "Building the foundation for space exploration",
          path: "/services",
          features: ["Space Stations", "Lunar Bases", "Mars Colonies"]
        }
      ]
    },
    {
      category: "Business Intelligence & Analytics",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-600",
      services: [
        {
          name: "Market Intelligence Platform",
          description: "AI-driven market analysis and predictive insights",
          path: "/market-pricing",
          features: ["Real-time Data", "Predictive Analytics", "Market Trends"]
        },
        {
          name: "Business Process Optimization",
          description: "Streamline operations with AI-powered automation",
          path: "/services",
          features: ["Process Mining", "Automation", "Efficiency Metrics"]
        }
      ]
    }
  ];

  const getCategoryColor = (category: string) => {
    const categoryData = categories.find(cat => 
      category.toLowerCase().includes(cat.id.toLowerCase())
    );
    return categoryData ? categoryData.color : 'from-gray-500 to-gray-600';
  };

  return (
    <Layout>
      <Head>
        <title>Comprehensive Services Showcase 2025 | Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive portfolio of real, innovative micro SAAS services, IT solutions, and AI platforms. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="AI services, micro SAAS, IT solutions, business automation, customer success, supply chain optimization, financial planning, sales intelligence" />
        <meta property="og:title" content="Comprehensive Services Showcase 2025 | Zion Tech Group" />
        <meta property="og:description" content="Explore our comprehensive portfolio of real, innovative micro SAAS services, IT solutions, and AI platforms." />
        <meta property="og:url" content="https://ziontechgroup.com/comprehensive-services-showcase-2025" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/comprehensive-services-showcase-2025" />
      </Head>

        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,211,238,0.05),transparent_50%)]" />
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
          </div>

          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Comprehensive Services
                </span>
                <br />
                <span className="text-white">Showcase 2025</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Discover our portfolio of <span className="text-cyan-400 font-semibold">real, innovative micro SAAS services</span>, 
                cutting-edge IT solutions, and revolutionary AI platforms. Transform your business with 
                <span className="text-blue-400 font-semibold"> proven technology</span> that delivers measurable results.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{comprehensiveRealServices2025.length}+</div>
                  <div className="text-gray-400">Real Services</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">$2.5B+</div>
                  <div className="text-gray-400">Market Coverage</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">95%</div>
                  <div className="text-gray-400">AI Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">400%</div>
                  <div className="text-gray-400">Average ROI</div>
                </div>
              </div>

              {/* Contact CTA */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-cyan-500/25"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </Link>
                <a
                  href={`tel:${contactInfo.mobile}`}
                  className="px-8 py-4 border border-cyan-500/30 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300"
                >
                  <Phone className="w-5 h-5 mr-2 inline" />
                  {contactInfo.mobile}
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {successMetrics.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    {item.icon}
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                    {item.metric}
                  </div>
                  <div className="text-gray-400 font-medium">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    {category === 'all' ? 'All Services' : category}
                  </button>
                ))}
              </div>

              {/* View Mode Toggle */}
              <div className="flex bg-white/20 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-all duration-200 ${
                    viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-white hover:bg-white/20'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-all duration-200 ${
                    viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-white hover:bg-white/20'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              {/* Sort Options */}
              <div className="flex items-center gap-2">
                <span className="text-gray-400 text-sm">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  <option value="popularity">Popularity</option>
                  <option value="name">Name</option>
                  <option value="price">Price</option>
                  <option value="rating">Rating</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid/List */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <AnimatePresence mode="wait">
            {filteredServices.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <div className="text-gray-400 text-xl">No services found matching your criteria.</div>
              </motion.div>
            ) : (
              <motion.div
                key={`${viewMode}-${selectedCategory}-${searchQuery}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-6'}
              >
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 ${
                      viewMode === 'list' ? 'flex flex-col lg:flex-row' : ''
                    }`}
                  >
                    {/* Service Header */}
                    <div className={`p-6 ${viewMode === 'list' ? 'lg:w-1/3' : ''}`}>
                      <div className="flex items-start justify-between mb-4">
                        <div className="text-4xl">{service.icon}</div>
                        {service.popular && (
                          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                            POPULAR
                          </div>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                      <p className="text-gray-300 text-sm mb-4">{service.tagline}</p>
                      
                      {/* Pricing */}
                      <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg p-4 mb-4">
                        <div className="text-2xl font-bold text-white">
                          ${service.price.monthly}
                          <span className="text-lg text-gray-300">/month</span>
                        </div>
                        <div className="text-sm text-gray-300">
                          ${service.price.yearly}/year (save ${(service.price.monthly * 12 - service.price.yearly).toLocaleString()})
                        </div>
                        <div className="text-xs text-gray-400 mt-1">
                          {service.price.trialDays}-day free trial • Setup: {service.price.setupTime}
                        </div>
                      </div>

                      {/* Category Badge */}
                      <div className="inline-block bg-white/20 text-white text-xs px-3 py-1 rounded-full mb-4">
                        {service.category}
                      </div>
                    </div>

                    {/* Service Details */}
                    <div className={`p-6 ${viewMode === 'list' ? 'lg:w-2/3' : ''}`}>
                      <p className="text-gray-300 mb-4">{service.description}</p>
                      
                      {/* Key Benefits */}
                      <div className="mb-4">
                        <h4 className="text-white font-semibold mb-2">Key Benefits:</h4>
                        <ul className="space-y-1">
                          {service.benefits.slice(0, 3).map((benefit, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-300">
                              <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Market Position */}
                      <div className="mb-4 p-3 bg-white/10 rounded-lg">
                        <h4 className="text-white font-semibold mb-2 text-sm">Market Position:</h4>
                        <p className="text-xs text-gray-300">{service.marketPosition}</p>
                      </div>

                      {/* ROI */}
                      <div className="mb-4 p-3 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-lg">
                        <h4 className="text-white font-semibold mb-2 text-sm">ROI:</h4>
                        <p className="text-xs text-gray-300">{service.roi}</p>
                      </div>

                      {/* Contact & Action */}
                      <div className="flex flex-col sm:flex-row gap-3">
                        <a
                          href={service.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center"
                        >
                          Learn More
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </a>
                        <a
                          href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.name}`}
                          className="flex-1 bg-white/20 text-white text-center py-3 px-4 rounded-lg font-semibold hover:bg-white/30 transition-all duration-200 flex items-center justify-center"
                        >
                          Contact Sales
                          <Mail className="w-4 h-4 ml-2" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Featured Technologies */}
        <section className="py-20 bg-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Core Technologies
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our revolutionary technologies power the future of computing and exploration
              </p>
            </motion.div>
          </div>
        </section>
    </>
  );
};

export default ComprehensiveServicesShowcase2025;

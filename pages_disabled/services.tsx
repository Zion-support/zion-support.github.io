import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useState, useMemo } from 'react';
import { enhancedRealMicroSaasServices, serviceCategories, getServicesByCategory, getServicesByTechnology, getServicesByPriceRange } from '../data/enhanced-real-micro-saas-services';

const Services: NextPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const filteredServices = useMemo(() => {
    let services = enhancedRealMicroSaasServices;

    // Filter by category
    if (selectedCategory !== 'All') {
      services = getServicesByCategory(selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      services = services.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.technology.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filter by price range
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
      services = getServicesByPriceRange(min, max === 0 ? Infinity : max);
    }

    // Sort services
    services.sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''));
        case 'popularity':
          return b.popular ? 1 : -1;
        case 'growth':
          return parseFloat(b.growthRate) - parseFloat(a.growthRate);
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return services;
  }, [selectedCategory, searchTerm, priceRange, sortBy]);

  const getPriceRangeLabel = (range: string) => {
    switch (range) {
      case '0-100': return 'Under $100/month';
      case '100-300': return '$100 - $300/month';
      case '300-500': return '$300 - $500/month';
      case '500-1000': return '$500 - $1000/month';
      case '1000-0': return 'Over $1000/month';
      default: return 'All Prices';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Head>
        <title>Micro SAAS Services - Zion Tech Group | Innovative Technology Solutions</title>
        <meta name="description" content="Discover our comprehensive portfolio of innovative micro SAAS services including AI, quantum computing, cybersecurity, and more. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="micro SAAS services, AI solutions, quantum computing, cybersecurity, DevOps, healthcare AI, metaverse platform" />
      </Head>

      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Revolutionary Micro SAAS Services
          </h1>
                      <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Discover our cutting-edge portfolio of innovative technology solutions designed to transform your business. 
              From AI-powered analytics to quantum computing platforms, we&apos;re building the future today.
            </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span>🚀 8+ Revolutionary Services</span>
            <span>⚡ 99.9% Uptime Guarantee</span>
            <span>🤖 AI-Powered Solutions</span>
            <span>💰 Competitive Pricing</span>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-12">
          <div className="grid md:grid-cols-4 gap-6">
            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {serviceCategories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Search */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Price Range */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Prices</option>
                <option value="0-100">Under $100/month</option>
                <option value="100-300">$100 - $300/month</option>
                <option value="300-500">$300 - $500/month</option>
                <option value="500-1000">$500 - $1000/month</option>
                <option value="1000-0">Over $1000/month</option>
              </select>
            </div>

            {/* Sort By */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="name">Name</option>
                <option value="price">Price</option>
                <option value="popularity">Popularity</option>
                <option value="growth">Growth Rate</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-gray-600">
            Showing <span className="font-semibold">{filteredServices.length}</span> services
            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
            {searchTerm && ` matching "${searchTerm}"`}
            {priceRange !== 'all' && ` in ${getPriceRangeLabel(priceRange)}`}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div key={service.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              {/* Service Header */}
              <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                <div className="text-4xl mb-3">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                <p className="text-sm opacity-90">{service.tagline}</p>
                {service.popular && (
                  <span className="inline-block bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-semibold mt-2">
                    ⭐ Popular
                  </span>
                )}
              </div>

              {/* Service Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-4 line-clamp-3">{service.description}</p>
                
                {/* Price */}
                <div className="mb-4">
                  <span className="text-2xl font-bold text-gray-900">{service.price}</span>
                  <span className="text-gray-500">{service.period}</span>
                </div>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 3 && (
                      <li className="text-sm text-blue-600">
                        +{service.features.length - 3} more features
                      </li>
                    )}
                  </ul>
                </div>

                {/* Technology Stack */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Technology:</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.technology.slice(0, 3).map((tech, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                    {service.technology.length > 3 && (
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        +{service.technology.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Market Info */}
                <div className="mb-4 text-sm text-gray-600">
                  <div className="flex justify-between mb-1">
                    <span>Market Size:</span>
                    <span className="font-medium">{service.marketSize}</span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span>Growth Rate:</span>
                    <span className="font-medium text-green-600">{service.growthRate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>ROI:</span>
                    <span className="font-medium text-blue-600">{service.roi}</span>
                  </div>
                </div>

                {/* Trial & Setup */}
                <div className="mb-4 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Free Trial:</span>
                    <span className="font-medium">{service.trialDays} days</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Setup Time:</span>
                    <span className="font-medium">{service.setupTime}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={service.link}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg font-medium transition-colors duration-200"
                  >
                    Learn More
                  </a>
                  <Link
                    href="/contact"
                    className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-center py-2 px-4 rounded-lg font-medium transition-colors duration-200"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No services found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your filters or search terms to find what you&apos;re looking for.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchTerm('');
                setPriceRange('all');
                setSortBy('name');
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Our team of experts is ready to help you implement the perfect solution for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
              >
                Get Started Today
              </Link>
              <a
                href="tel:+13024640950"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Services;
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Brain, Shield, Rocket, Cpu, Database, Atom, 
  Users, Target, Star, Zap, Globe, TrendingUp,
  CheckCircle, ArrowRight, ExternalLink, Sparkles
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

export default function ServicesPage() {
  const mainServices = [
    {
      icon: Brain,
      title: "AI Business Intelligence",
      description: "Transform your data into actionable insights with our advanced AI-powered analytics platform.",
      features: [
        "Real-time data processing",
        "Predictive analytics",
        "Custom AI models",
        "Interactive dashboards",
        "Automated reporting"
      ],
      price: "$499/month",
      color: "from-purple-500 to-pink-500",
      href: "/ai-business-intelligence"
    },
    {
      icon: Shield,
      title: "Quantum Cybersecurity",
      description: "Future-proof your security with quantum-resistant encryption and AI-powered threat detection.",
      features: [
        "Quantum-resistant encryption",
        "AI threat detection",
        "Zero-trust architecture",
        "24/7 monitoring",
        "Compliance ready"
      ],
      price: "$799/month",
      color: "from-red-500 to-orange-500",
      href: "/quantum-cybersecurity"
    },
    {
      icon: Users,
      title: "AI Customer Experience",
      description: "Deliver personalized customer experiences at scale with intelligent automation and insights.",
      features: [
        "Customer journey mapping",
        "AI personalization",
        "Sentiment analysis",
        "Automated support",
        "Behavioral insights"
      ],
      price: "$399/month",
      color: "from-green-500 to-teal-500",
      href: "/ai-customer-experience"
    },
    {
      icon: Database,
      title: "Edge Computing Orchestration",
      description: "Deploy and manage applications at the edge with intelligent orchestration and optimization.",
      features: [
        "Edge node management",
        "IoT device management",
        "Real-time monitoring",
        "Load balancing",
        "Auto-scaling"
      ],
      price: "$349/month",
      color: "from-yellow-500 to-orange-500",
      href: "/edge-computing-orchestration"
    },
    {
      icon: Rocket,
      title: "Space Technology Innovation",
      description: "Accelerate space exploration with cutting-edge AI and quantum technology solutions.",
      features: [
        "Satellite management",
        "AI mission planning",
        "Quantum communication",
        "Resource optimization",
        "Risk assessment"
      ],
      price: "$2,499/month",
      color: "from-violet-500 to-purple-500",
      href: "/space-technology"
    },
    {
      icon: Atom,
      title: "Neural Interface Development",
      description: "Build the future of human-computer interaction with advanced neural interfaces.",
      features: [
        "BCI development tools",
        "Neural signal processing",
        "AI pattern recognition",
        "Real-time analysis",
        "Custom algorithms"
      ],
      price: "$899/month",
      color: "from-pink-500 to-rose-500",
      href: "/neural-interface"
    }
  ];

  const specializedServices = [
    {
      title: "AI Autonomous Systems",
      description: "Build self-managing, self-optimizing systems that adapt and evolve",
      icon: Brain,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Quantum Machine Learning",
      description: "Leverage quantum computing for unprecedented ML performance",
      icon: Atom,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "AI-Powered DevOps",
      description: "Automate and optimize your development and deployment processes",
      icon: Cpu,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Blockchain AI Integration",
      description: "Combine blockchain security with AI intelligence for next-gen applications",
      icon: Shield,
      color: "from-orange-500 to-red-500"
    }
  ];

  const industries = [
    "Finance & Banking",
    "Healthcare & Life Sciences",
    "Manufacturing & Industry 4.0",
    "Retail & E-commerce",
    "Energy & Utilities",
    "Transportation & Logistics",
    "Education & Research",
    "Government & Defense"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Head>
        <title>Services — Zion Tech Group | AI, Quantum Computing & Technology Solutions</title>
        <meta name="description" content="Discover Zion Tech Group's comprehensive AI, quantum computing, and technology services. Transform your business with cutting-edge solutions." />
        <meta property="og:title" content="Zion Tech Group Services" />
        <meta property="og:description" content="AI, quantum computing, and technology solutions for modern businesses." />
        <meta name="keywords" content="AI services, quantum computing, technology solutions, business intelligence, cybersecurity" />
        <link rel="canonical" href="https://ziontechgroup.com/services" />
      </Head>

      <EnhancedNavigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Comprehensive AI, quantum computing, and technology solutions designed to transform 
              your business and drive innovation across every industry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Core Technology Services</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Choose from our comprehensive suite of AI and quantum technology solutions, 
              each designed to address specific business challenges and opportunities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8 hover:border-slate-600/50 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-slate-300 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-slate-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span>{feature}</span>
                <div className="flex items-center justify-between mb-6">
                  <div className="text-2xl font-bold text-blue-400">{service.price}</div>
                  <a
                    href={service.href}
                    className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
                
                <Link
                  href="/contact"
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-lg text-white font-semibold text-center transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>Get Started</span>
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </motion.div>
      {/* Specialized Services */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Specialized Solutions</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Advanced technology solutions for specific use cases and emerging opportunities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specializedServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8 hover:border-slate-600/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-slate-300 leading-relaxed mb-6">{service.description}</p>
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
                >
                  <span>Discuss Requirements</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
      {/* Industries We Serve */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Industries We Serve</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our technology solutions are designed to work across all industries, 
              with specialized expertise in key sectors.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6 text-center hover:border-slate-600/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold">{industry}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with deep industry expertise to deliver 
              solutions that drive real business value.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Cutting-Edge Technology</h3>
              <p className="text-slate-300 leading-relaxed">
                Access to the latest AI, quantum computing, and emerging technologies 
                that give you a competitive advantage.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Expert Team</h3>
              <p className="text-slate-300 leading-relaxed">
                World-class engineers, scientists, and consultants with deep expertise 
                in AI, quantum computing, and industry applications.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Proven Results</h3>
              <p className="text-slate-300 leading-relaxed">
                Track record of successful implementations across 500+ projects 
                with measurable business impact and ROI.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how our AI and quantum technology solutions can help 
              you achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Schedule Consultation
              </Link>
              <Link
                href="/case-studies"
                className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10"
              >
                View Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  );
}

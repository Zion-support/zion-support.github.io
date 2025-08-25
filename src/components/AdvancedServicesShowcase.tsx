import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
<<<<<<< HEAD
import { INNOVATIVE_MICRO_SAAS_SERVICES } from '../data/innovativeMicroSaasServices';
import { SPECIALIZED_IT_SERVICES } from '../data/specializedITServices';

interface Service {
  id: string;
  name?: string;
  title?: string;
  description: string;
  category: string;
  subcategory: string;
<<<<<<< HEAD
  price: number | {
    monthly: number;
    yearly: number;
    enterprise: number;
    oneTime: number;
    currency: string;
  };
  pricingModel?: string;
  features: string[];
  benefits: string[];
  tags?: string[];
  aiScore?: number;
  rating?: number;
  reviewCount?: number;
  featured?: boolean;
  marketPrice: string;
  contactInfo: {
    phone?: string;
    email: string;
    website?: string;
    address?: string;
=======
  price: {
    starter: number;
    professional: number;
    enterprise: number;
    currency: string;
  };
  features: string[];
  benefits: string[];
  targetAudience: string[];
  useCases: string[];
  integration: string[];
  pricingTier: 'Starter' | 'Professional' | 'Enterprise' | 'Custom';
  website: string;
  contactInfo: {
    email: string;
    phone: string;
    address: string;
>>>>>>> origin/cursor/expand-services-and-deploy-updates-0c6c
  };
  rating: number;
  reviewCount: number;
  launchDate: string;
  status: 'Active' | 'Beta' | 'Coming Soon';
  marketPrice: string;
  deliveryTime: string;
}

export const AdvancedServicesShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'price' | 'rating' | 'aiScore'>('aiScore');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Combine all services
  const allServices: Service[] = [
    ...INNOVATIVE_MICRO_SAAS_SERVICES,
    ...SPECIALIZED_IT_SERVICES
  ];

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(allServices.map(service => service.category)))];

  // Filter and sort services
  const filteredServices = allServices
    .filter(service => 
      selectedCategory === 'All' || service.category === selectedCategory
    )
    .filter(service =>
      service.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
<<<<<<< HEAD
      service.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => {
      if (sortBy === 'price') {
        const priceA = typeof a.price === 'number' ? a.price : (a.price as any).monthly;
        const priceB = typeof b.price === 'number' ? b.price : (b.price as any).monthly;
        return priceA - priceB;
      }
      if (sortBy === 'rating') return (b.rating || 0) - (a.rating || 0);
      return (b.aiScore || 0) - (a.aiScore || 0);
=======
      service.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => {
      if (sortBy === 'price') return a.price.starter - b.price.starter;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0; // Default sort
>>>>>>> origin/cursor/expand-services-and-deploy-updates-0c6c
    });
=======
import { 
  Brain, 
  Cpu, 
  Shield, 
  Cloud, 
  Zap, 
  Globe, 
  Rocket, 
  Target,
  ArrowRight,
  Check,
  Star,
  TrendingUp,
  Users,
  Lock,
  Code,
  Database,
  Network,
  Smartphone,
  Monitor,
  Server
} from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: React.ReactNode;
  features: string[];
  price: {
    monthly: number;
    yearly: number;
    oneTime?: number;
    currency: string;
  };
  rating: number;
  reviewCount: number;
  badge?: 'Popular' | 'New' | 'Featured' | 'Premium' | 'Enterprise';
  link: string;
  aiScore: number;
  complexity: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
}

const ADVANCED_SERVICES: Service[] = [
  {
    id: 'quantum-ai-platform',
    title: 'Quantum AI Platform',
    description: 'Next-generation AI platform leveraging quantum computing principles for unprecedented processing power and accuracy.',
    category: 'AI Services',
    icon: <Brain className="w-8 h-8" />,
    features: [
      'Quantum-enhanced machine learning',
      'Real-time neural network optimization',
      'Advanced pattern recognition',
      'Predictive analytics engine',
      'Multi-modal AI processing'
    ],
    price: { monthly: 2500, yearly: 25000, currency: '$' },
    rating: 4.9,
    reviewCount: 127,
    badge: 'Premium',
    link: '/services/quantum-ai-platform',
    aiScore: 98,
    complexity: 'Expert'
  },
  {
    id: 'cyber-defense-suite',
    title: 'Cyber Defense Suite',
    description: 'Comprehensive cybersecurity solution with AI-powered threat detection and automated response systems.',
    category: 'Security',
    icon: <Shield className="w-8 h-8" />,
    features: [
      'AI threat intelligence',
      'Zero-day vulnerability detection',
      'Automated incident response',
      'Compliance monitoring',
      '24/7 security operations'
    ],
    price: { monthly: 1800, yearly: 18000, currency: '$' },
    rating: 4.8,
    reviewCount: 89,
    badge: 'Popular',
    link: '/services/cyber-defense-suite',
    aiScore: 95,
    complexity: 'Advanced'
  },
  {
    id: 'quantum-cloud-infrastructure',
    title: 'Quantum Cloud Infrastructure',
    description: 'Revolutionary cloud platform built on quantum computing principles for ultra-fast data processing.',
    category: 'Cloud',
    icon: <Cloud className="w-8 h-8" />,
    features: [
      'Quantum-accelerated computing',
      'Hybrid cloud architecture',
      'Auto-scaling infrastructure',
      'Global edge computing',
      'Quantum encryption'
    ],
    price: { monthly: 3200, yearly: 32000, currency: '$' },
    rating: 4.7,
    reviewCount: 156,
    badge: 'New',
    link: '/services/quantum-cloud-infrastructure',
    aiScore: 92,
    complexity: 'Expert'
  },
  {
    id: 'ai-powered-devops',
    title: 'AI-Powered DevOps',
    description: 'Intelligent DevOps automation platform that learns from your development patterns and optimizes workflows.',
    category: 'Automation',
    icon: <Rocket className="w-8 h-8" />,
    features: [
      'Intelligent CI/CD pipelines',
      'Automated testing optimization',
      'Performance monitoring',
      'Resource optimization',
      'Predictive maintenance'
    ],
    price: { monthly: 1200, yearly: 12000, currency: '$' },
    rating: 4.6,
    reviewCount: 203,
    link: '/services/ai-powered-devops',
    aiScore: 88,
    complexity: 'Intermediate'
  },
  {
    id: 'quantum-blockchain',
    title: 'Quantum Blockchain',
    description: 'Future-proof blockchain technology with quantum-resistant cryptography and AI-powered consensus mechanisms.',
    category: 'Blockchain',
    icon: <Network className="w-8 h-8" />,
    features: [
      'Quantum-resistant cryptography',
      'AI consensus algorithms',
      'Smart contract automation',
      'Cross-chain interoperability',
      'Scalable architecture'
    ],
    price: { monthly: 2800, yearly: 28000, currency: '$' },
    badge: 'Featured',
    rating: 4.9,
    reviewCount: 67,
    link: '/services/quantum-blockchain',
    aiScore: 96,
    complexity: 'Advanced'
  },
  {
    id: 'iot-intelligence-platform',
    title: 'IoT Intelligence Platform',
    description: 'Comprehensive IoT solution with AI-powered analytics, predictive maintenance, and automated optimization.',
    category: 'IoT',
    icon: <Smartphone className="w-8 h-8" />,
    features: [
      'Real-time data analytics',
      'Predictive maintenance',
      'Device management',
      'Security monitoring',
      'Energy optimization'
    ],
    price: { monthly: 1500, yearly: 15000, currency: '$' },
    rating: 4.5,
    reviewCount: 134,
    link: '/services/iot-intelligence-platform',
    aiScore: 85,
    complexity: 'Intermediate'
  },
  {
    id: 'quantum-data-analytics',
    title: 'Quantum Data Analytics',
    description: 'Revolutionary data analytics platform using quantum algorithms for complex pattern recognition and insights.',
    category: 'Analytics',
    icon: <Database className="w-8 h-8" />,
    features: [
      'Quantum pattern recognition',
      'Real-time data processing',
      'Predictive modeling',
      'Visualization tools',
      'API integration'
    ],
    price: { monthly: 2200, yearly: 22000, currency: '$' },
    badge: 'Premium',
    rating: 4.8,
    reviewCount: 98,
    link: '/services/quantum-data-analytics',
    aiScore: 94,
    complexity: 'Advanced'
  },
  {
    id: 'ai-enterprise-suite',
    title: 'AI Enterprise Suite',
    description: 'Complete enterprise AI solution covering all aspects of business intelligence and automation.',
    category: 'AI Services',
    icon: <Cpu className="w-8 h-8" />,
    features: [
      'Business process automation',
      'Customer intelligence',
      'Supply chain optimization',
      'Financial analytics',
      'HR automation'
    ],
    price: { monthly: 4500, yearly: 45000, currency: '$' },
    badge: 'Enterprise',
    rating: 4.9,
    reviewCount: 245,
    link: '/services/ai-enterprise-suite',
    aiScore: 97,
    complexity: 'Expert'
  }
];

const CATEGORIES = ['All', 'AI Services', 'Security', 'Cloud', 'Automation', 'Blockchain', 'IoT', 'Analytics'];

export const AdvancedServicesShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const filteredServices = selectedCategory === 'All' 
    ? ADVANCED_SERVICES 
    : ADVANCED_SERVICES.filter(service => service.category === selectedCategory);
>>>>>>> origin/cursor/build-and-fix-errors-c9ef

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
<<<<<<< HEAD
    hidden: { y: 20, opacity: 0 },
=======
    hidden: { y: 50, opacity: 0 },
>>>>>>> origin/cursor/build-and-fix-errors-c9ef
    visible: {
      y: 0,
      opacity: 1,
      transition: {
<<<<<<< HEAD
        duration: 0.5
=======
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
>>>>>>> origin/cursor/build-and-fix-errors-c9ef
      }
    }
  };

  return (
<<<<<<< HEAD
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Advanced Services
            </span>
            <br />
            <span className="text-white">Marketplace</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover cutting-edge AI services, Micro SAAS solutions, and comprehensive IT services 
            designed to transform your business and drive innovation.
          </p>
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between bg-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/30">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800/50 border border-cyan-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-cyan-400">
                🔍
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-600/50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Sort & View */}
            <div className="flex items-center gap-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'price' | 'rating' | 'aiScore')}
                className="px-4 py-2 bg-gray-800/50 border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-all duration-300"
              >
                <option value="aiScore">Sort by AI Score</option>
                <option value="rating">Sort by Rating</option>
                <option value="price">Sort by Price</option>
              </select>

              <div className="flex bg-gray-800/50 rounded-lg p-1 border border-cyan-500/30">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-all duration-300 ${
                    viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  ⏹️
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-all duration-300 ${
                    viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  📋
                </button>
              </div>
            </div>
          </div>
=======
    <section className="relative py-20 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-blue-dark overflow-hidden">
      {/* Quantum Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full cyber-grid opacity-5" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-zion-purple/10 to-zion-blue/10 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="holographic-text-strong">Advanced Services</span>
          </h2>
          <p className="text-xl md:text-2xl text-zion-slate-light max-w-3xl mx-auto">
            Experience the future of technology with our cutting-edge AI, quantum computing, and innovative solutions
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white shadow-neon'
                  : 'bg-glass-morphism text-zion-slate-light hover:bg-glass-morphism-strong hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
>>>>>>> origin/cursor/build-and-fix-errors-c9ef
        </motion.div>

        {/* Services Grid */}
        <motion.div
<<<<<<< HEAD
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}
        >
          <AnimatePresence>
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                layout
                className={`group ${
                  viewMode === 'grid' 
                    ? 'bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl border border-cyan-500/30 hover:border-cyan-400/50 p-6 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20'
                    : 'bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl border border-cyan-500/30 hover:border-cyan-400/50 p-6 transition-all duration-500'
                }`}
              >
                {/* Service Header */}
                <div className="mb-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                                              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                          {service.name || service.title}
                        </h3>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full border border-cyan-500/30">
                          {service.category}
                        </span>
                        <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full border border-blue-500/30">
                          {service.subcategory}
                        </span>
                      </div>
                    </div>
                    {service.status === 'Active' && (
                      <div className="px-2 py-1 bg-gradient-to-r from-green-500 to-green-600 text-white text-xs rounded-full font-medium">
                        ✓ Active
                      </div>
                    )}
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Rating & Status */}
                  <div className="flex items-center gap-4 mb-4">
                    {service.rating && (
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className="text-yellow-400">
                              {i < Math.floor(service.rating) ? '★' : '☆'}
                            </span>
                          ))}
                        </div>
                        <span className="text-xs text-gray-400">({service.reviewCount} reviews)</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-400">Status: {service.status}</span>
                    </div>
                  </div>
                </div>

                {/* Features Preview */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Features</h4>
                  <div className="space-y-2">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-300">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                        {feature}
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <div className="text-xs text-gray-500">
                        +{service.features.length - 3} more features
                      </div>
                    )}
                  </div>
                </div>

                {/* Pricing & Contact */}
                <div className="border-t border-gray-700/50 pt-4">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-2xl font-bold text-white">
<<<<<<< HEAD
                        {typeof service.price === 'number' ? service.price : (service.price as any).monthly}
=======
                        ${service.price.starter}
>>>>>>> origin/cursor/expand-services-and-deploy-updates-0c6c
                        <span className="text-sm text-gray-400 font-normal ml-1">
                          /month
                        </span>
                      </div>
                      <div className="text-xs text-gray-500">{service.marketPrice}</div>
                    </div>
                    <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30">
                      Get Quote
                    </button>
                  </div>

                  {/* Contact Info */}
                  <div className="text-xs text-gray-400 space-y-1">
                    <div>📱 {service.contactInfo.phone}</div>
                    <div>✉️ {service.contactInfo.email}</div>
                    <div>🌐 <a href={service.website} className="text-cyan-400 hover:underline">Visit Website</a></div>
                  </div>
                </div>

<<<<<<< HEAD
                                  {/* Tags */}
                  {service.tags && service.tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {service.tags.slice(0, 4).map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded-full border border-gray-600/50"
                        >
                          {tag}
                        </span>
                      ))}
                      {service.tags.length > 4 && (
                        <span className="px-2 py-1 bg-gray-800/50 text-gray-500 text-xs rounded-full">
                          +{service.tags.length - 4}
                        </span>
                      )}
                    </div>
=======
                {/* Target Audience */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {service.targetAudience.slice(0, 4).map((audience, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded-full border border-gray-600/50"
                    >
                      {audience}
                    </span>
                  ))}
                  {service.targetAudience.length > 4 && (
                    <span className="px-2 py-1 bg-gray-800/50 text-gray-500 text-xs rounded-full">
                      +{service.targetAudience.length - 4}
                    </span>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-0c6c
                  )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
            <p className="text-gray-400">Try adjusting your search criteria or category filter.</p>
          </motion.div>
        )}

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: allServices.length.toString(), label: "Total Services", icon: "🚀" },
              { number: categories.length - 1, label: "Service Categories", icon: "📊" },
              { number: "24/7", label: "Support Available", icon: "🛟" },
              { number: "Global", label: "Service Coverage", icon: "🌍" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdvancedServicesShowcase;
=======
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredServices.map((service) => (
            <motion.div
              key={service.id}
              className="group relative"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="relative h-full p-6 glass-morphism rounded-2xl border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 cursor-pointer"
                variants={cardVariants}
                onClick={() => setSelectedService(service)}
                whileHover={{ scale: 1.02 }}
              >
                {/* Badge */}
                {service.badge && (
                  <Badge 
                    className={`absolute top-4 right-4 ${
                      service.badge === 'Popular' ? 'bg-zion-green' :
                      service.badge === 'New' ? 'bg-zion-cyan' :
                      service.badge === 'Featured' ? 'bg-zion-purple' :
                      service.badge === 'Premium' ? 'bg-zion-blue' :
                      'bg-zion-slate'
                    }`}
                  >
                    {service.badge}
                  </Badge>
                )}

                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 mb-6 mx-auto rounded-2xl bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 group-hover:from-zion-cyan/30 group-hover:to-zion-purple/30 transition-all duration-300">
                  <div className="text-zion-cyan group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-zion-slate-light text-sm mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* AI Score */}
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <div className="w-3 h-3 bg-zion-cyan rounded-full animate-pulse" />
                    <span className="text-sm text-zion-cyan font-semibold">
                      AI Score: {service.aiScore}%
                    </span>
                  </div>

                  {/* Complexity */}
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Target className="w-4 h-4 text-zion-purple" />
                    <span className="text-sm text-zion-slate-light">
                      {service.complexity}
                    </span>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(service.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-zion-slate-light'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-zion-slate-light">
                      ({service.reviewCount})
                    </span>
                  </div>

                  {/* Price */}
                  <div className="text-center mb-4">
                    <div className="text-2xl font-bold text-white">
                      {service.price.currency}{service.price.monthly.toLocaleString()}
                    </div>
                    <div className="text-sm text-zion-slate-light">per month</div>
                  </div>

                  {/* CTA Button */}
                  <Button
                    className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-purple hover:to-zion-cyan text-white font-semibold rounded-xl group-hover:shadow-neon transition-all duration-300"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(service.link, '_blank');
                    }}
                  >
                    <span className="flex items-center gap-2">
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Services CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-purple hover:to-zion-cyan text-white font-bold text-lg px-8 py-4 rounded-full hover:scale-105 hover:shadow-neon-strong transition-all duration-300"
          >
            <span className="flex items-center gap-2">
              View All Services
              <ArrowRight className="w-5 h-5" />
            </span>
          </Button>
        </motion.div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-morphism-strong rounded-2xl p-8"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-zion-slate-light/20 hover:bg-zion-slate-light/40 text-white flex items-center justify-center transition-colors duration-300"
              >
                ×
              </button>

              {/* Service Details */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 flex items-center justify-center">
                      <div className="text-zion-cyan text-3xl">
                        {selectedService.icon}
                      </div>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white mb-2">
                        {selectedService.title}
                      </h2>
                      <p className="text-zion-slate-light">
                        {selectedService.category}
                      </p>
                    </div>
                  </div>

                  <p className="text-zion-slate-light text-lg mb-6">
                    {selectedService.description}
                  </p>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-zion-cyan rounded-full" />
                      <span className="text-white font-semibold">AI Score: {selectedService.aiScore}%</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Target className="w-5 h-5 text-zion-purple" />
                      <span className="text-zion-slate-light">Complexity: {selectedService.complexity}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="text-zion-slate-light">
                        {selectedService.rating}/5 ({selectedService.reviewCount} reviews)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div>
                  <div className="glass-morphism rounded-xl p-6 mb-6">
                    <h3 className="text-xl font-bold text-white mb-4">Pricing</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-zion-slate-light">Monthly:</span>
                        <span className="text-2xl font-bold text-white">
                          {selectedService.price.currency}{selectedService.price.monthly.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-zion-slate-light">Yearly:</span>
                        <span className="text-2xl font-bold text-white">
                          {selectedService.price.currency}{selectedService.price.yearly.toLocaleString()}
                        </span>
                      </div>
                      {selectedService.price.oneTime && (
                        <div className="flex justify-between items-center">
                          <span className="text-zion-slate-light">One-time:</span>
                          <span className="text-2xl font-bold text-white">
                            {selectedService.price.currency}{selectedService.price.oneTime.toLocaleString()}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="glass-morphism rounded-xl p-6">
                    <h3 className="text-xl font-bold text-white mb-4">Features</h3>
                    <ul className="space-y-2">
                      {selectedService.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-zion-green" />
                          <span className="text-zion-slate-light">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mt-8">
                <Button
                  size="lg"
                  className="flex-1 bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-purple hover:to-zion-cyan text-white font-bold rounded-xl"
                  onClick={() => window.open(selectedService.link, '_blank')}
                >
                  Get Started
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="flex-1 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white rounded-xl"
                >
                  Request Demo
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
>>>>>>> origin/cursor/build-and-fix-errors-c9ef

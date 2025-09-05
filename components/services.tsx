import { motion, AnimatePresence, Variants } from 'framer-motion';
import { 
  Search, Filter, Star, Users, TrendingUp, 
  DollarSign, Clock, CheckCircle, ArrowRight,
  Brain, Rocket, Dna, Globe, Shield, Wifi, 
  Package, Bot, Car, Building2, Monitor, Cpu, 
  Zap, Atom, Database, Cloud, Lock, Code
} from 'lucide-react';
import UltraAdvancedQuantumBackground from '../components/ui/UltraAdvancedQuantumBackground';
import UltraFuturisticServiceCard from '../components/ui/UltraFuturisticServiceCard';
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services';
import { additionalEnhancedServices } from '../data/additional-real-services';
import { newRealServices } from '../data/new-real-services';
import { industryRealServices } from '../data/industry-real-services';
import { professionalServices } from '../data/professional-services';
import { nextGenerationAIServices } from '../data/next-generation-ai-services';
import { cuttingEdgeITServices } from '../data/cutting-edge-it-services';
import { innovativeMicroSaasV2Services } from '../data/innovative-micro-saas-v2';
import { marketValidatedServices } from '../data/market-validated-services';
import { emergingTechnologyServices } from '../data/emerging-technology-services';
import { comprehensiveITSolutions } from '../data/comprehensive-it-solutions';
import { curatedMarketServices } from '../data/curated-market-services';
import { realMarketServices } from '../data/real-market-services';
import { new2025Services } from '../data/new-2025-services';
import { newRealInnovations } from '../data/new-real-innovations';
import { serviceExpansions2025 } from '../data/service-expansions-2025';
import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Search, Grid, List,
  Brain, Atom, Shield, Target, Rocket,
  ArrowRight, Check, Palette, Heart, Truck, GraduationCap,
  Users, DollarSign, Settings, TrendingUp, BarChart3, ChevronDown
} from 'lucide-react';
import UltraFuturisticBackground2029 from '../components/backgrounds/UltraFuturisticBackground2029';
import UltraFuturisticNavigation2029 from '../components/layout/UltraFuturisticNavigation2029';
import UltraFuturisticFooter2029 from '../components/layout/UltraFuturisticFooter2029';

// Import all the new 2025 service data
import { realMicroSaasServices2025 } from '../data/2025-real-micro-saas-services';
import { innovativeAIServices2025 } from '../data/2025-innovative-ai-services';
import { innovativeITServices2025 } from '../data/2025-innovative-it-services';
import { emergingTechServices2025 } from '../data/2025-emerging-tech-services';
import { additionalRealServices2025 } from '../data/2025-additional-real-services';
import { innovativeAIServices2025 as newInnovativeAIServices } from '../data/2025-innovative-ai-it-services';

// Import new innovative services
import { innovativeFinancialServices2025 } from '../data/2025-innovative-financial-services';
import { innovativeHealthcareServices2025 } from '../data/2025-innovative-healthcare-services';
import { innovativeEducationServices2025 } from '../data/2025-innovative-education-services';
import { innovativeSustainabilityServices2025 } from '../data/2025-innovative-sustainability-services';
import { innovativeLogisticsServices2025 } from '../data/2025-innovative-logistics-services';

// Import existing services for comprehensive coverage
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services';
import { innovativeMicroSaasServices } from '../data/innovative-micro-saas-services';
import { quantumSpaceServices } from '../data/quantum-space-services';
import { enterpriseITServices } from '../data/enterprise-it-services';

const allServices = [
  ...realMicroSaasServices2025,
  ...innovativeAIServices2025,
  ...innovativeITServices2025,
  ...emergingTechServices2025,
  ...additionalRealServices2025,
  ...newInnovativeAIServices
];

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories: Array<{
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  services: ServiceUnion[];
  gradient: string;
}> = [
  {
    id: 'ai-consciousness',
    title: '🧠 AI & Consciousness',
    description: 'Revolutionary AI consciousness and emotional intelligence platforms',
    icon: Brain,
    color: 'from-violet-500 to-purple-500',
    services: [...innovativeAIServices2025],
    gradient: 'from-violet-500/20 to-indigo-500/20'
  },
  {
    id: 'quantum-emerging',
    title: '⚛️ Quantum & Emerging Tech',
    description: 'Quantum computing, DNA computing, and beyond',
    icon: Atom,
    color: 'from-indigo-500 to-blue-500',
    services: [...emergingTechServices2025],
    gradient: 'from-indigo-500/20 to-cyan-500/20'
  },
  {
    id: 'enterprise-it',
    title: '🏙️ Enterprise IT',
    description: 'Autonomous operations and zero-trust security',
    icon: Shield,
    color: 'from-blue-500 to-cyan-500',
    services: [...innovativeITServices2025],
    gradient: 'from-blue-500/20 to-teal-500/20'
  },
  {
    id: 'space-metaverse',
    title: '🌌 Space & Metaverse',
    description: 'Space mining, metaverse development, and more',
    icon: Rocket,
    color: 'from-teal-500 to-emerald-500',
    services: [...quantumSpaceServices],
    gradient: 'from-teal-500/20 to-green-500/20'
  },
  {
    id: 'micro-saas',
    title: '🎯 Micro SAAS',
    description: 'Innovative solutions for every business need',
    icon: Target,
    color: 'from-green-500 to-yellow-500',
    services: [...realMicroSaasServices2025, ...enhancedRealMicroSaasServices],
    gradient: 'from-green-500/20 to-orange-500/20'
  },
  {
    id: 'financial-technology',
    title: '💰 Financial Technology',
    description: 'Innovative fintech, DeFi, and financial services',
    icon: TrendingUp,
    color: 'from-green-500 to-emerald-500',
    services: [...innovativeFinancialServices2025],
    gradient: 'from-green-500/20 to-emerald-500/20'
  },
  {
    id: 'healthcare-biotech',
    title: '🏥 Healthcare & Biotech',
    description: 'AI-powered healthcare and biotechnology solutions',
    icon: Shield,
    color: 'from-blue-500 to-indigo-500',
    services: [...innovativeHealthcareServices2025],
    gradient: 'from-blue-500/20 to-indigo-500/20'
  },
  {
    id: 'education-technology',
    title: '🎓 Education Technology',
    description: 'AI-powered learning and educational innovation',
    icon: Brain,
    color: 'from-purple-500 to-pink-500',
    services: [...innovativeEducationServices2025],
    gradient: 'from-purple-500/20 to-pink-500/20'
  },
  {
    id: 'sustainability-green-tech',
    title: '🌱 Sustainability & Green Tech',
    description: 'Environmental technology and sustainability solutions',
    icon: Globe,
    color: 'from-emerald-500 to-teal-500',
    services: [...innovativeSustainabilityServices2025],
    gradient: 'from-emerald-500/20 to-teal-500/20'
  },
  {
    id: 'logistics-supply-chain',
    title: '🚚 Logistics & Supply Chain',
    description: 'Autonomous logistics and supply chain optimization',
    icon: Rocket,
    color: 'from-orange-500 to-red-500',
    services: [...innovativeLogisticsServices2025],
    gradient: 'from-orange-500/20 to-red-500/20'
  },
  {
    id: 'research-development',
    title: '🔬 Research & Development',
    description: 'Breakthrough technologies and innovations',
    icon: Microscope,
    color: 'from-red-500 to-pink-500',
    description: 'Advanced healthcare solutions'
  },
  {
    id: 'transportation-logistics',
    name: 'Transportation & Logistics',
    icon: <Truck className=&quot;w-6 h-6&quot; />,
    color: 'from-blue-500 to-cyan-500',
    description: 'Smart transportation solutions'
  },
  {
    id: 'education-research',
    name: 'Education & Research',
    icon: <GraduationCap className=&quot;w-6 h-6&quot; />,
    color: 'from-yellow-500 to-orange-500',
    description: 'Learning and research platforms'
  },
  {
    id: 'customer-success',
    name: 'Customer Success',
    icon: <Users className=&quot;w-6 h-6&quot; />,
    color: 'from-blue-500 to-indigo-600',
    description: 'AI-powered customer success and retention'
  },
  {
    id: 'financial-technology',
    name: 'Financial Technology',
    icon: <DollarSign className=&quot;w-6 h-6&quot; />,
    color: 'from-green-500 to-emerald-600',
    description: 'Quantum and AI-powered financial solutions'
  },
  {
    id: 'devops-infrastructure',
    name: 'DevOps & Infrastructure',
    icon: <Settings className=&quot;w-6 h-6&quot; />,
    color: 'from-purple-500 to-pink-600',
    description: 'AI-powered DevOps and infrastructure automation'
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    icon: <Shield className=&quot;w-6 h-6&quot; />,
    color: 'from-red-500 to-pink-600',
    description: 'Quantum-resistant security solutions'
  },
  {
    id: 'sales-marketing',
    name: 'Sales & Marketing',
    icon: <TrendingUp className=&quot;w-6 h-6&quot; />,
    color: 'from-orange-500 to-red-600',
    description: 'AI-powered sales and marketing automation'
  },
  {
    id: 'data-analytics',
    name: 'Data & Analytics',
    icon: <BarChart3 className=&quot;w-6 h-6&quot; />,
    color: 'from-indigo-500 to-purple-600',
    description: 'Quantum-powered data analytics and insights'
  }
];
import { realVerifiedServices } from '../data/real-verified-services';

export default function ServicesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('name');

  // Combine all services
  const allServices = [
    ...enhancedRealMicroSaasServices,
    ...innovativeAIServices2029,
    ...quantumSpaceInnovations2029,
    ...enterpriseITInnovations2029,
    ...innovativeMicroSaas2029
    ...additionalEnhancedServices,
    ...newRealServices,
    ...industryRealServices,
    ...professionalServices,
    ...nextGenerationAIServices,
    ...cuttingEdgeITServices,
    ...innovativeMicroSaasV2Services,
    ...marketValidatedServices,
    ...emergingTechnologyServices,
    ...comprehensiveITSolutions,
    ...curatedMarketServices,
    ...realMarketServices,
    ...new2025Services,
    ...newRealInnovations,
    ...serviceExpansions2025,
    ...realVerifiedServices
  ];

  // Get unique services by ID
  const uniqueServices = allServices.filter((service, index, self) => 
    index === self.findIndex(s => s.id === service.id)
  );

  // Get all categories
  const categories = ['All', ...Array.from(new Set(uniqueServices.map(s => 
    Array.isArray(s.category) ? s.category[0] : s.category
  )))];

  // Filter and sort services
  const filteredServices = uniqueServices
    .filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || 
                             (Array.isArray(service.category) ? 
                               service.category.includes(selectedCategory) : 
                               service.category === selectedCategory);
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price':
          return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, ''));
        case 'popularity':
          return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
        case 'rating':
          return (b.rating || 0) - (a.rating || 0);
        default:
          return 0;
      }
    });

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <UltraFuturisticBackground2029>
      <Head>
        <title>Revolutionary 2029 Technology Services | Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Explore our comprehensive range of revolutionary 2029 technology services including AI consciousness, quantum computing, space mining, and advanced biotechnology.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;AI services, quantum computing, space technology, biotechnology, 2029 technology, revolutionary services&quot; />
        <meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/services&quot; />
      </Head>

      <Layout>
        <div className=&quot;min-h-screen bg-black text-white relative overflow-hidden&quot;>
          {/* Enhanced Futuristic Background Effects */}
          <div className=&quot;absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900&quot;></div>
          <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.15),transparent_50%)]&quot;></div>
          <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.15),transparent_50%)]&quot;></div>
          <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)]&quot;></div>
          
          {/* Animated Quantum Particles */}
          <div className=&quot;absolute inset-0 overflow-hidden&quot;>
            <div className=&quot;absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse opacity-60&quot;></div>
            <div className=&quot;absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-40&quot;></div>
            <div className=&quot;absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-green-400 rounded-full animate-bounce opacity-50&quot;></div>
            <div className=&quot;absolute top-1/3 right-1/3 w-1 h-1 bg-pink-400 rounded-full animate-pulse opacity-30&quot;></div>
          </div>

          {/* Main Content */}
          <div className=&quot;relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20&quot;>
            {/* Enhanced Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=&quot;text-center mb-20&quot;
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className=&quot;mb-6&quot;
              >
                <div className=&quot;inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-cyan-300 text-sm font-medium mb-4&quot;>
                  <span className=&quot;w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse&quot;></span>
                  {allServices.length}+ Revolutionary Services Available
                </div>
              </motion.div>
              
              <h1 className=&quot;text-5xl md:text-7xl font-bold mb-6&quot;>
                <span className=&quot;bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent&quot;>
                  Our Services
                </span>
              </h1>
              
              <p className=&quot;text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8&quot;>
                Discover our comprehensive suite of cutting-edge AI, quantum computing, emerging technology, 
                and micro SAAS services designed to transform your business and drive innovation.
              </p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className=&quot;flex flex-wrap justify-center gap-6 text-sm text-gray-400&quot;
              >
                <div className=&quot;flex items-center&quot;>
                  <div className=&quot;w-2 h-2 bg-green-400 rounded-full mr-2&quot;></div>
                  AI & Consciousness
                </div>
                <div className=&quot;flex items-center&quot;>
                  <div className=&quot;w-2 h-2 bg-purple-400 rounded-full mr-2&quot;></div>
                  Quantum Computing
                </div>
                <div className=&quot;flex items-center&quot;>
                  <div className=&quot;w-2 h-2 bg-blue-400 rounded-full mr-2&quot;></div>
                  Enterprise IT
                </div>
                <div className=&quot;flex items-center&quot;>
                  <div className=&quot;w-2 h-2 bg-pink-400 rounded-full mr-2&quot;></div>
                  Micro SAAS
                </div>
              </motion.div>
            </motion.div>

            {/* Enhanced Search and Filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className=&quot;mb-12&quot;
            >
              <div className=&quot;bg-gray-900/60 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 shadow-2xl shadow-cyan-500/10&quot;>
                <div className=&quot;flex flex-col lg:flex-row gap-6 items-center&quot;>
                  {/* Enhanced Search */}
                  <div className=&quot;relative flex-1 w-full lg:w-auto&quot;>
                    <div className=&quot;absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl&quot;></div>
                    <div className=&quot;relative&quot;>
                      <Search className=&quot;absolute left-4 top-1/2 transform -translate-y-1/2 text-cyan-400 w-6 h-6&quot; />
                      <input
                        type=&quot;text&quot;
                        placeholder=&quot;Search our revolutionary services...&quot;
                        value={searchQuery}
                                              onChange={(e) => setSearchQuery(e.target.value)}
                        className=&quot;w-full lg:w-96 pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300 hover:border-cyan-500/30&quot;
                      />
                    </div>
                  </div>

                  {/* Enhanced Category Filter */}
                  <div className=&quot;flex items-center space-x-4&quot;>
                    <div className=&quot;relative&quot;>
                      <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className=&quot;px-6 py-4 bg-gray-800/50 border border-gray-700/50 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300 hover:border-cyan-500/30 appearance-none pr-10&quot;
                      >
                        <option value=&quot;all&quot;>All Categories</option>
                        {categories.map((category) => (
                          <option key={category.id} value={category.id}>
                            {category.name}
                          </option>
                        ))}
                      </select>
                      <div className=&quot;absolute right-3 top-1/2 transform -translate-y-1/2 text-cyan-400 pointer-events-none&quot;>
                        <ChevronDown className=&quot;w-5 h-5&quot; />
                      </div>
                    </div>

                    {/* Enhanced Sort */}
                    <div className=&quot;relative&quot;>
                      <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className=&quot;px-6 py-4 bg-gray-800/50 border border-gray-700/50 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300 hover:border-cyan-500/30 appearance-none pr-10&quot;
                      >
                        {sortOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                      <div className=&quot;absolute right-3 top-1/2 transform -translate-y-1/2 text-cyan-400 pointer-events-none&quot;>
                        <ChevronDown className=&quot;w-5 h-5&quot; />
                      </div>
                    </div>

                    {/* Enhanced View Mode */}
                    <div className=&quot;flex items-center space-x-2 bg-gray-800/50 rounded-2xl p-1.5 border border-gray-700/50&quot;>
                      <button
                        onClick={() => setViewMode('grid')}
                        className={`p-3 rounded-xl transition-all duration-300 ${
                          viewMode === 'grid' 
                            ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/25' 
                            : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                        }`}
                      >
                        <Grid className=&quot;w-5 h-5&quot; />
                      </button>
                      <button
                        onClick={() => setViewMode('list')}
                        className={`p-3 rounded-xl transition-all duration-300 ${
                          viewMode === 'list' 
                            ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/25' 
                            : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                        }`}
                      >
                        <List className=&quot;w-5 h-5&quot; />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Enhanced Results Count */}
                <div className=&quot;mt-6 text-center&quot;>
                  <div className=&quot;inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30&quot;>
                    <span className=&quot;text-cyan-300 font-medium&quot;>
                      Showing {filteredServices.length} of {allServices.length} revolutionary services
                    </span>
                  </div>
                </div>
              </div>
              
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className=&quot;px-4 py-3 bg-gray-900/50 border border-cyan-500/20 rounded-xl text-white focus:outline-none focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-500/20&quot;
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className=&quot;px-4 py-3 bg-gray-900/50 border border-cyan-500/20 rounded-xl text-white focus:outline-none focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-500/20&quot;
              >
                <option value=&quot;name&quot;>Sort by Name</option>
                <option value=&quot;price&quot;>Sort by Price</option>
                <option value=&quot;popularity&quot;>Sort by Popularity</option>
                <option value=&quot;rating&quot;>Sort by Rating</option>
              </select>
            </div>

            {/* Enhanced Category Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className=&quot;mb-20&quot;
            >
              <div className=&quot;text-center mb-16&quot;>
                <h2 className=&quot;text-4xl md:text-5xl font-bold mb-6&quot;>
                  <span className=&quot;bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent&quot;>
                    Service Categories
                  </span>
                </h2>
                <p className=&quot;text-lg text-gray-300 max-w-3xl mx-auto&quot;>
                  Explore our comprehensive range of cutting-edge services across multiple domains
                </p>
              </div>

              <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6&quot;>
                {categories.map((category, index) => {
                  const stats = getCategoryStats(category.id);
                  return (
                    <motion.div
                      key={category.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                      className=&quot;bg-gray-900/60 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 cursor-pointer group&quot;
                      onClick={() => setSelectedCategory(category.id)}
                    >
                      <div className={`w-20 h-20 bg-gradient-to-r ${category.color} rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        {category.icon}
                      </div>
                      
                      <h3 className=&quot;text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300&quot;>{category.name}</h3>
                      <p className=&quot;text-gray-300 text-base mb-6 leading-relaxed&quot;>{category.description}</p>
                      
                      <div className=&quot;grid grid-cols-3 gap-6 text-center&quot;>
                        <div className=&quot;group-hover:scale-105 transition-transform duration-300&quot;>
                          <div className=&quot;text-3xl font-bold text-cyan-400&quot;>{stats.count}</div>
                          <div className=&quot;text-sm text-gray-400&quot;>Services</div>
                        </div>
                        <div className=&quot;group-hover:scale-105 transition-transform duration-300&quot;>
                          <div className=&quot;text-3xl font-bold text-purple-400&quot;>${stats.avgPrice}</div>
                          <div className=&quot;text-sm text-gray-400&quot;>Avg Price</div>
                        </div>
                        <div className=&quot;group-hover:scale-105 transition-transform duration-300&quot;>
                          <div className=&quot;text-3xl font-bold text-green-400&quot;>{stats.avgRating}</div>
                          <div className=&quot;text-sm text-gray-400&quot;>Rating</div>
                        </div>
                      </div>
                      
                      <div className=&quot;mt-6 pt-6 border-t border-gray-700/50&quot;>
                        <div className=&quot;text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors duration-300&quot;>
                          Click to explore →
                        </div>
                      </div>

            {/* Services Grid/List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h2 className=&quot;text-3xl font-bold text-center mb-12&quot;>
                <span className=&quot;bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent&quot;>
                  {selectedCategory === 'all' ? 'All Services' : categories.find(c => c.id === selectedCategory)?.name}
                </span>
              </h2>

              {viewMode === 'grid' ? (
                <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
                  {sortedServices.map((service, index) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 1 + index * 0.05 }}
                      className=&quot;bg-gray-900/60 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:transform hover:scale-105 group relative overflow-hidden&quot;
                    >
                      {/* Animated Background */}
                      <div className=&quot;absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500&quot;></div>
                      <div className=&quot;absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700&quot;></div>
                      {/* Enhanced Service Header */}
                      <div className=&quot;relative z-10&quot;>
                        <div className=&quot;flex items-start justify-between mb-6&quot;>
                          <div className=&quot;flex-1&quot;>
                            <h3 className=&quot;text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300&quot;>
                              {service.name}
                            </h3>
                            <p className=&quot;text-base text-gray-300 leading-relaxed&quot;>{service.tagline}</p>
                          </div>
                          {service.popular && (
                            <span className=&quot;px-3 py-1.5 text-sm bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full shadow-lg shadow-pink-500/25&quot;>
                              ⭐ Popular
                            </span>
                          )}
                        </div>
                        
                        {/* Service Icon */}
                        <div className=&quot;text-4xl mb-4&quot;>{service.icon}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className=&quot;text-center py-20&quot;
              >
                <Search className=&quot;w-16 h-16 text-gray-400 mx-auto mb-4&quot; />
                <h3 className=&quot;text-xl font-semibold text-white mb-2&quot;>No services found</h3>
                <p className=&quot;text-gray-400&quot;>Try adjusting your search criteria or browse all services</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All');
                  }}
                  className=&quot;mt-4 px-6 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors&quot;
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </div>
        </section>

                      {/* Enhanced Price */}
                      <div className=&quot;mb-6 relative z-10&quot;>
                        <div className=&quot;bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-2xl p-4&quot;>
                          <div className=&quot;text-3xl font-bold text-white mb-1&quot;>${service.price.monthly}</div>
                          <div className=&quot;text-sm text-gray-300&quot;>/month</div>
                          <div className=&quot;text-xs text-cyan-400 font-medium mt-1&quot;>{service.price.trialDays}-day free trial</div>
                        </div>
                      </div>

                      {/* Enhanced Features */}
                      <div className=&quot;mb-6 relative z-10&quot;>
                        <div className=&quot;text-sm text-cyan-400 font-medium mb-3&quot;>✨ Key Features</div>
                        <ul className=&quot;space-y-2&quot;>
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className=&quot;text-sm text-gray-300 flex items-center group-hover:text-white transition-colors duration-300&quot;>
                              <Check className=&quot;w-4 h-4 text-green-400 mr-3 flex-shrink-0&quot; />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Enhanced Stats */}
                      <div className=&quot;grid grid-cols-3 gap-3 mb-6 text-center relative z-10&quot;>
                        <div className=&quot;bg-gray-800/50 rounded-xl p-3 border border-gray-700/50 group-hover:border-cyan-500/30 transition-colors duration-300&quot;>
                          <div className=&quot;text-cyan-400 font-bold text-lg&quot;>{service.rating}/5</div>
                          <div className=&quot;text-gray-300 text-xs&quot;>Rating</div>
                        </div>
                        <div className=&quot;bg-gray-800/50 rounded-xl p-3 border border-gray-700/50 group-hover:border-purple-500/30 transition-colors duration-300&quot;>
                          <div className=&quot;text-purple-400 font-bold text-lg&quot;>{service.customers}+</div>
                          <div className=&quot;text-gray-300 text-xs&quot;>Customers</div>
                        </div>
                        <div className=&quot;bg-gray-800/50 rounded-xl p-3 border border-gray-700/50 group-hover:border-green-500/30 transition-colors duration-300&quot;>
                          <div className=&quot;text-green-400 font-bold text-lg&quot;>{service.price.setupTime}</div>
                          <div className=&quot;text-gray-300 text-xs&quot;>Setup</div>
                        </div>
                      </div>

                      {/* Enhanced CTA */}
                      <div className=&quot;relative z-10&quot;>
                        <a
                          href={service.link}
                          className=&quot;block w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-4 px-6 rounded-2xl text-center font-semibold text-base hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 group-hover:shadow-xl group-hover:shadow-cyan-500/40&quot;
                        >
                          Explore Service
                          <ArrowRight className=&quot;w-5 h-5 inline ml-2 group-hover:translate-x-1 transition-transform duration-300&quot; />
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className=&quot;space-y-4&quot;>
                  {sortedServices.map((service, index) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 1 + index * 0.05 }}
                      className=&quot;bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-gray-600/50 transition-all duration-300&quot;
                    >
                      <div className=&quot;flex flex-col lg:flex-row gap-6&quot;>
                        {/* Service Info */}
                        <div className=&quot;flex-1&quot;>
                          <div className=&quot;flex items-start justify-between mb-3&quot;>
                            <h3 className=&quot;text-xl font-bold text-white&quot;>{service.name}</h3>
                            {service.popular && (
                              <span className=&quot;px-3 py-1 text-sm bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full&quot;>
                                Popular
                              </span>
                            )}
                          </div>
                          
                          <p className=&quot;text-gray-300 mb-3&quot;>{service.description}</p>
                          
                          <div className=&quot;flex flex-wrap gap-2 mb-4&quot;>
                            {service.features.slice(0, 4).map((feature, idx) => (
                              <span key={idx} className=&quot;px-2 py-1 bg-gray-800/50 text-xs text-gray-300 rounded-lg&quot;>
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Pricing & Stats */}
                        <div className=&quot;lg:w-48 space-y-4&quot;>
                          <div className=&quot;text-center&quot;>
                            <div className=&quot;text-3xl font-bold text-white&quot;>${service.price.monthly}</div>
                            <div className=&quot;text-sm text-gray-400&quot;>/month</div>
                            <div className=&quot;text-xs text-green-400&quot;>{service.price.trialDays}-day trial</div>
                          </div>
                          
                          <div className=&quot;grid grid-cols-2 gap-2 text-center text-xs&quot;>
                            <div className=&quot;bg-gray-800/30 rounded-lg p-2&quot;>
                              <div className=&quot;text-cyan-400 font-semibold&quot;>{service.rating}/5</div>
                              <div className=&quot;text-gray-400&quot;>Rating</div>
                            </div>
                            <div className=&quot;bg-gray-800/30 rounded-lg p-2&quot;>
                              <div className=&quot;text-purple-400 font-semibold&quot;>{service.customers}+</div>
                              <div className=&quot;text-gray-400&quot;>Customers</div>
                            </div>
                          </div>
                          
                          <a
                            href={service.link}
                            className=&quot;block w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-2 px-4 rounded-lg text-center text-sm font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-200&quot;
                          >
                            Learn More
                            <ArrowRight className=&quot;w-4 h-4 inline ml-2&quot; />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Enhanced CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className=&quot;text-center mt-24&quot;
            >
              <div className=&quot;relative overflow-hidden bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 border border-cyan-500/20 rounded-3xl p-16 shadow-2xl shadow-cyan-500/10&quot;>
                {/* Animated Background Elements */}
                <div className=&quot;absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-3xl&quot;></div>
                <div className=&quot;absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-3xl&quot;></div>
                
                <div className=&quot;relative z-10&quot;>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 1.4 }}
                    className=&quot;mb-8&quot;
                  >
                    <div className=&quot;inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-cyan-300 text-sm font-medium mb-6&quot;>
                      <span className=&quot;w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse&quot;></span>
                      Transform Your Business Today
                    </div>
                  </motion.div>
                  
                  <h2 className=&quot;text-5xl md:text-6xl font-bold text-white mb-8&quot;>
                    <span className=&quot;bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent&quot;>
                      Ready to Get Started?
                    </span>
                  </h2>
                  
                  <p className=&quot;text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed&quot;>
                    Choose from our comprehensive suite of revolutionary services and start transforming your business today with cutting-edge AI, quantum computing, and emerging technologies.
                  </p>
                  
                  <div className=&quot;flex flex-col sm:flex-row gap-6 justify-center&quot;>
                    <motion.a
                      href=&quot;/contact&quot;
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className=&quot;bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40&quot;
                    >
                      🚀 Get Started Today
                    </motion.a>
                    <motion.a
                      href=&quot;/pricing&quot;
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className=&quot;border-2 border-cyan-500/50 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 backdrop-blur-sm&quot;
                    >
                      💰 View Pricing
                    </motion.a>
                  </div>
                  
                  <div className=&quot;mt-10 text-sm text-gray-400&quot;>
                    <p>Need help choosing? <a href=&quot;/contact&quot; className=&quot;text-cyan-400 hover:text-cyan-300 underline&quot;>Contact our experts</a> for personalized guidance.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <UltraFuturisticFooter2029 />
    </UltraFuturisticBackground2029>
  );
}

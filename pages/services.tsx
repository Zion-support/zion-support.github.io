import { innovativeAIServices } from '../data/innovative-ai-services';
import { quantumSpaceServices } from '../data/quantum-space-services';
import { enterpriseITServices } from '../data/enterprise-it-services';
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
import { newOperationalServices2025 } from '../data/new-operational-services-2025';
import { verifiedRealServices2025Batch2 } from '../data/verified-real-services-2025-batch2';
import { innovative2025Services } from '../data/innovative-2025-services';
import { emergingTech2025Services } from '../data/emerging-tech-2025-services';
import { extraServices } from '../data/extra-services';
import { newlyAddedServices } from '../data/newly-added-services';
import { moreRealServices2025 } from '../data/more-real-services-2025';
import { verified2025Additions } from '../data/verified-2025-additions';
import { realServicesQ12025 } from '../data/real-services-q1-2025';
import { realEnterpriseServices2025 } from '../data/real-enterprise-services-2025';
import { realMarketAugmentations2025 } from '../data/real-market-augmentations-2025';
import { innovative2026MicroSaasServicesV2 } from '../data/innovative-2026-micro-saas-v2';
import { innovative2026MicroSaasServicesV4 } from '../data/innovative-2026-micro-saas-v4';
import { emergingTech2026ServicesV2 } from '../data/emerging-tech-2026-services-v2';
import { emergingTech2026ServicesV4 } from '../data/emerging-tech-2026-services-v4';
import { enterpriseIT2026ServicesV2 } from '../data/enterprise-it-2026-services-v2';
import { enterpriseIT2026ServicesV4 } from '../data/enterprise-it-2026-services-v4';
import { aiAutonomousServices2026 } from '../data/2026-ai-autonomous-services';
import { quantumSpaceTechServices2026 } from '../data/2026-quantum-space-tech-services';
import { metaverseDigitalRealityServices2026 } from '../data/2026-metaverse-digital-reality-services';
import { ultimate2026Services } from '../data/ultimate-2026-services';
import { revolutionary2026Innovations } from '../data/revolutionary-2026-innovations';
import { innovative2026MicroSaasServicesV4 } from '../data/innovative-2026-micro-saas-v4';
import { emergingTech2026ServicesV4 } from '../data/emerging-tech-2026-services-v4';
import { enterpriseIT2026ServicesV4 } from '../data/enterprise-it-2026-services-v4';
import { innovative2026AIServicesV4 } from '../data/innovative-2026-ai-services-v4';

export default function ServicesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Combine all services
  const allServices = [
    ...innovativeMicroSaasServices,
    ...extraServices,
    ...additionalEnhancedServices,
    ...advancedAIServices,
    ...innovativeAIServices,
    ...quantumSpaceServices,
    ...enterpriseITServices,
    ...enhancedRealMicroSaasServices,
    ...additionalEnhancedServices,
    ...extraServices,
    ...newlyAddedServices,
    ...newRealServices,
    ...moreRealServices2025,
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
    ...verified2025Additions,
    ...newRealInnovations,
    ...serviceExpansions2025,
    ...quantumAdvancedServices,
    ...emergingTechServices,
    ...spaceTechServices,
    ...innovativeAIServices,
    ...emergingTechAdvancedServices,
    ...itInfrastructureServices
=======
    ...newOperationalServices2025,
    ...realServicesQ12025,
    ...realEnterpriseServices2025,
    ...verifiedRealServices2025Batch2,
    ...innovative2025Services,
    ...emergingTech2025Services,
    ...realMarketAugmentations2025,
    ...innovative2026MicroSaasServicesV2,
    ...innovative2026MicroSaasServicesV4,
    ...emergingTech2026ServicesV2,
    ...emergingTech2026ServicesV4,
    ...enterpriseIT2026ServicesV2,
    ...enterpriseIT2026ServicesV4,
    ...aiAutonomousServices2026,
    ...quantumSpaceTechServices2026,
    ...metaverseDigitalRealityServices2026,
    ...ultimate2026Services,
    ...revolutionary2026Innovations,
    ...innovative2026MicroSaasServicesV4,
    ...emergingTech2026ServicesV4,
    ...enterpriseIT2026ServicesV4,
    ...innovative2026AIServicesV4
  ];

  // Categories for filtering
  const categories = [
    { id: 'all', name: 'All Services', icon: <Monitor className="w-5 h-5" />, count: allServices.length },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: <Brain className="w-5 h-5" />, count: allServices.filter(s => s.category.includes('AI') || s.category.includes('Machine Learning')).length },
    { id: 'quantum', name: 'Quantum Computing', icon: <Zap className="w-5 h-5" />, count: allServices.filter(s => s.category.includes('Quantum')).length },
    { id: 'space', name: 'Space Technology', icon: <Rocket className="w-5 h-5" />, count: allServices.filter(s => s.category.includes('Space')).length },
    { id: 'emerging', name: 'Emerging Tech', icon: <Star className="w-5 h-5" />, count: allServices.filter(s => s.category.includes('Emerging')).length },
    { id: 'infrastructure', name: 'IT Infrastructure', icon: <Building2 className="w-5 h-5" />, count: allServices.filter(s => s.category.includes('Infrastructure') || s.category.includes('DevOps')).length },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: <Shield className="w-5 h-5" />, count: allServices.filter(s => s.category.includes('Security') || s.category.includes('Cybersecurity')).length },
    { id: 'robotics', name: 'Robotics & Automation', icon: <Bot className="w-5 h-5" />, count: allServices.filter(s => s.category.includes('Robotics') || s.category.includes('Automation')).length },
    { id: 'biotech', name: 'Biotech & Healthcare', icon: <Dna className="w-5 h-5" />, count: allServices.filter(s => s.category.includes('Biotech') || s.category.includes('Healthcare')).length },
    { id: 'finance', name: 'Financial Technology', icon: <DollarSign className="w-5 h-5" />, count: allServices.filter(s => s.category.includes('Financial') || s.category.includes('Trading')).length },
    { id: 'iot', name: 'IoT & Edge Computing', icon: <Wifi className="w-5 h-5" />, count: allServices.filter(s => s.category.includes('IoT') || s.category.includes('Edge')).length }
  ];
=======
import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Search, Grid, List,
  Brain, Atom, Shield, Target, Rocket,
  ArrowRight, Check, Palette, Heart, Truck, GraduationCap,
  Building
} from 'lucide-react';
import Link from 'next/link';

  // New innovative 2037 services
  ...innovative2037MicroSaasServices,
  ...innovative2037ITServices,
  ...innovative2037AIServices
];

const categories = [
  {
    id: 'all',
    name: 'All Services',
    icon: <Grid className="w-6 h-6" />,
    color: 'from-gray-500 to-slate-500',
    description: 'Complete portfolio of all services'
  },
  {
    id: 'enterprise-it',
    name: 'Enterprise IT',
    icon: <Building className="w-6 h-6" />,
    color: 'from-blue-500 to-purple-500',
    description: 'Enterprise solutions and infrastructure'
  },
  {
    id: 'ai-consciousness',
    name: 'AI & Consciousness',
    icon: <Brain className="w-6 h-6" />,
    color: 'from-cyan-500 to-blue-500',
    description: 'Revolutionary AI consciousness and emotional intelligence'
  },
  {
    id: 'quantum-emerging',
    name: 'Quantum & Emerging Tech',
    icon: <Atom className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-500',
    description: 'Quantum computing and breakthrough technologies'
  },
  {
    id: 'space-metaverse',
    name: 'Space & Metaverse',
    icon: <Rocket className="w-6 h-6" />,
    color: 'from-pink-500 to-rose-500',
    description: 'Space exploration and virtual worlds'
  },
  {
    id: 'micro-saas',
    name: 'Micro SAAS',
    icon: <Target className="w-6 h-6" />,
    color: 'from-orange-500 to-red-500',
    description: 'Innovative business solutions'
  },
  {
    id: 'creative-media',
    name: 'Creative & Media',
    icon: <Palette className="w-6 h-6" />,
    color: 'from-indigo-500 to-purple-500',
    description: 'AI-powered creative solutions'
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Life Sciences',
    icon: <Heart className="w-6 h-6" />,
    color: 'from-blue-500 to-cyan-500',
    description: 'Healthcare and biotech solutions'
  },
  {
    id: 'logistics',
    name: 'Logistics & Supply Chain',
    icon: <Truck className="w-6 h-6" />,
    color: 'from-green-500 to-emerald-500',
    description: 'Supply chain, logistics, and automation'
  },
  {
    id: 'education',
    name: 'Education & Training',
    icon: <GraduationCap className="w-6 h-6" />,
    color: 'from-yellow-500 to-orange-500',
    description: 'Learning and research platforms'
  },
  {
    id: 'manufacturing-industry',
    name: 'Manufacturing & Industry',
    icon: <Building className="w-6 h-6" />,
    color: 'from-gray-500 to-slate-500',
    description: 'Industrial automation and smart manufacturing'
  },
  {
    id: 'retail-ecommerce',
    name: 'Retail & E-commerce',
    icon: <ShoppingCart className="w-6 h-6" />,
    color: 'from-pink-500 to-rose-500',
    description: 'Retail technology and e-commerce solutions'
  },
  {
    id: 'consulting-strategy',
    name: 'Consulting & Strategy',
    icon: <Lightbulb className="w-6 h-6" />,
    color: 'from-indigo-500 to-purple-500',
    description: 'Strategic consulting and advisory services'
  }
];

const sortOptions = [
  { value: 'name', label: 'Name A-Z' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'popular', label: 'Most Popular' },
  { value: 'newest', label: 'Newest First' },
  { value: 'rating', label: 'Highest Rated' }
];

import { useRouter } from 'next/router';

export default function Services() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'rating' | 'popularity'>('popularity');

  // Combine all services
  const allServices = useMemo(() => [
    ...enhancedRealMicroSaasServices,
    ...extraServices,
    ...additionalEnhancedServices,
    ...innovativeMicroSaasServices,
    ...advancedAIServices,
    ...blockchainEmergingTechServices
  ], []);

  // Sort services
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'price-low':
        return (parseInt(getServicePricing(a).replace(/[^0-9]/g, '')) || 0) - 
               (parseInt(getServicePricing(b).replace(/[^0-9]/g, '')) || 0);
      case 'price-high':
        return (parseInt(getServicePricing(b).replace(/[^0-9]/g, '')) || 0) - 
               (parseInt(getServicePricing(a).replace(/[^0-9]/g, '')) || 0);
      case 'newest':
        return new Date(getServiceLaunchDate(b)).getTime() - 
               new Date(getServiceLaunchDate(a)).getTime();
      case 'rating':
        return getServiceRating(b) - getServiceRating(a);
      default:
        return 0;
    }

  const specializedServices = [
    {
      title: "Business Intelligence & Analytics",
      description: "AI-powered insights that transform data into actionable business strategies.",
      icon: <TrendingUp className="w-6 h-6" />,
      category: "Business Solutions"
    },
    {
      title: "Healthcare AI Systems",
      description: "Revolutionary medical diagnosis and treatment planning powered by consciousness AI.",
      icon: <Users className="w-6 h-6" />,
      category: "Healthcare"
    },
    {
      title: "Financial Technology",
      description: "Quantum-powered financial modeling and risk assessment systems.",
      icon: <Target className="w-6 h-6" />,
      category: "FinTech"
    },
    {
      title: "Manufacturing Intelligence",
      description: "AI-driven predictive maintenance and quality control systems.",
      icon: <Cpu className="w-6 h-6" />,
      category: "Manufacturing"
    },
    {
      title: "Education Technology",
      description: "Personalized learning experiences powered by consciousness AI.",
      icon: <Globe className="w-6 h-6" />,
      category: "Education"
    },
    {
      title: "Government Solutions",
      description: "Secure, scalable technology solutions for government agencies.",
      icon: <Lock className="w-6 h-6" />,
      category: "Government"
    }
  ];

  const industries = [
    "Healthcare & Life Sciences",
    "Financial Services",
    "Manufacturing & Logistics",
    "Technology & Software",
    "Government & Defense",
    "Education & Research",
    "Energy & Utilities",
    "Retail & E-commerce"
  ];
=======
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>Services - Zion Tech Group | 500+ Revolutionary Micro SaaS Services</title>
        <meta name="description" content="Explore our comprehensive portfolio of 500+ revolutionary micro SaaS services, quantum AI solutions, and cutting-edge technology platforms." />
        <meta name="keywords" content="micro SaaS services, AI solutions, quantum computing, blockchain, cybersecurity, space technology, biotech AI, financial trading, metaverse, IoT, cloud computing" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com/services" />
      </Head>

      <UltraFuturisticNavigation2046 />
=======
const ServicesPage: React.FC = () => {
  const mainServices = [
    {
      title: "AI Consciousness Evolution",
      description: "Revolutionary AI systems that develop self-awareness, emotional intelligence, and autonomous learning capabilities.",
      icon: <Brain className="w-8 h-8" />,
      color: "from-purple-500 to-pink-600",
      features: [
        "Emotional intelligence development",
        "Self-aware learning systems",
        "Consciousness evolution algorithms",
        "Human-AI collaboration frameworks"
      ],
      benefits: [
        "Enhanced decision-making capabilities",
        "Improved human-AI interaction",
        "Autonomous problem-solving",
        "Continuous self-improvement"
      ]
    },
    {
      title: "Quantum Computing Solutions",
      description: "Next-generation quantum computing platforms that solve previously impossible computational problems.",
      icon: <Atom className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-600",
      features: [
        "Quantum algorithm optimization",
        "Hybrid quantum-classical systems",
        "Cryptography and security",
        "Complex problem solving"
      ],
      benefits: [
        "1000x faster computation",
        "Breakthrough research capabilities",
        "Unbreakable encryption",
        "Optimization solutions"
      ]
    },
    {
      title: "Advanced Cybersecurity",
      description: "AI-powered security systems that provide real-time threat detection and autonomous response capabilities.",
      icon: <Shield className="w-8 h-8" />,
      color: "from-green-500 to-emerald-600",
      features: [
        "AI threat intelligence",
        "Zero-trust architecture",
        "Automated incident response",
        "Behavioral analysis"
      ],
      benefits: [
        "99.9% threat detection rate",
        "Real-time protection",
        "Reduced false positives",
        "Compliance assurance"
      ]
    },
    {
      title: "Space Technology",
      description: "Autonomous space exploration systems and resource intelligence platforms for the final frontier.",
      icon: <Rocket className="w-8 h-8" />,
      color: "from-orange-500 to-red-600",
      features: [
        "Autonomous exploration systems",
        "Space resource intelligence",
        "Satellite network management",
        "Mission planning and execution"
      ],
      benefits: [
        "Reduced mission costs",
        "Enhanced safety protocols",
        "Real-time decision making",
        "Resource optimization"
      ]
    }
    return sortOrder === 'asc' ? comparison : -comparison;
  });

  const getCategoryIcon = (serviceName: string) => {
    if (serviceName.toLowerCase().includes('ai')) return <Users className="w-6 h-6" />;
    if (serviceName.toLowerCase().includes('quantum')) return <Filter className="w-6 h-6" />;
    if (serviceName.toLowerCase().includes('infrastructure') || serviceName.toLowerCase().includes('devops') || serviceName.toLowerCase().includes('security')) return <ArrowRight className="w-6 h-6" />;
    return <Award className="w-6 h-6" />;
  };

  // Reset to first page when filters/sort change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, sortBy]);

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'enterprise it':
      case 'enterprise security':
      case 'devops & automation':
      case 'data & analytics':
      case 'cloud services':
      case 'cybersecurity':
        return <Building className="w-6 h-6 text-blue-400" />;
      case 'ai & consciousness':
      case 'ai services':
      case 'artificial intelligence':
        return <Brain className="w-6 h-6 text-cyan-400" />;
      case 'quantum':
      case 'quantum & emerging tech':
        return <Atom className="w-6 h-6 text-purple-400" />;
      case 'space':
      case 'space & metaverse':
        return <Rocket className="w-6 h-6 text-pink-400" />;
      case 'micro saas':
      case 'micro saas solutions':
        return <Target className="w-6 h-6 text-orange-400" />;
      case 'creative':
      case 'creative & media':
        return <Palette className="w-6 h-6 text-indigo-400" />;
      case 'healthcare':
      case 'healthcare & biotech':
        return <Heart className="w-6 h-6 text-red-400" />;
      case 'transportation':
      case 'transportation & logistics':
        return <Truck className="w-6 h-6 text-blue-400" />;
      case 'education':
      case 'education & research':
        return <GraduationCap className="w-6 h-6 text-yellow-400" />;
      default:
        return <Shield className="w-6 h-6 text-gray-400" />;
    }
  };

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };
};

const ServicesPage: React.FC = () => {
  return (

      <div className="min-h-screen bg-black text-white pt-24">
        {/* Loading State */}
        <AnimatePresence>
          {isLoading && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black flex items-center justify-center"
            >
              <div className="text-center">
                <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-cyan-400 text-lg font-medium">Loading Services...</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Our Services
                </h1>
              </div>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Revolutionary technology solutions that redefine what's possible
              </p>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                From AI consciousness evolution to quantum computing breakthroughs, 
                our services empower organizations to achieve the impossible and shape the future.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Core Technology Services
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our flagship services that represent the cutting edge of technological innovation
              </p>
            </motion.div>
            
            <div className="space-y-12">
              {mainServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-8 rounded-3xl border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort By */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'popularity' | 'name' | 'price' | 'rating')}
                  className="w-full px-4 py-2 bg-black/30 border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                >
                  <option value="popularity">Most Popular</option>
                  <option value="name">Name A-Z</option>
                  <option value="price">Price Low-High</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>

              {/* View Mode */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">View Mode</label>
                <div className="flex border border-cyan-500/30 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`px-4 py-2 ${viewMode === 'grid' ? 'bg-cyan-500 text-black' : 'bg-black/30 text-gray-300'} transition-colors`}
                  >
                    <Grid className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`px-4 py-2 ${viewMode === 'list' ? 'bg-cyan-500 text-black' : 'bg-black/30 text-gray-300'} transition-colors`}
                  >
                    <List className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid/List */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          {/* Results Count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <p className="text-gray-300">
              Showing {filteredServices.length} of {allServices.length} services
              {selectedCategory !== 'all' && ` in ${selectedCategory}`}
            </p>
          </motion.div>

          {/* Services Display */}
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}

      <EnhancedFooter />
    </>
=======
      {/* Services Grid */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">
              {filteredServices.length} Services Available
            </h2>
            <p className="text-white/60">
              {selectedCategory !== 'all' && `Showing ${categories.find(c => c.id === selectedCategory)?.name} services`}
            </p>
          </div>

          <AnimatePresence mode="wait">
            {filteredServices.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-20"
              >
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center">
                  <Search className="w-12 h-12 text-white/40" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">No services found</h3>
                <p className="text-white/60 mb-6">
                  Try adjusting your search terms or category filter
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                  className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg font-medium transition-colors"
                >
                  Clear Filters
                </button>
              </motion.div>
            ) : (
              <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`group relative ${
                      viewMode === 'grid' 
                        ? 'p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl'
                        : 'p-6 rounded-xl border border-white/10 bg-white/5 hover:border-cyan-400/30 transition-all duration-300'
                    }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-cyan-400/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 p-4 flex items-center justify-center">
                          <service.icon className="w-8 h-8 text-white" />
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          service.status === 'active' ? 'bg-green-500/20 text-green-300' :
                          service.status === 'beta' ? 'bg-yellow-500/20 text-yellow-300' :
                          'bg-blue-500/20 text-blue-300'
                        }`}>
                          {service.status}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                      <p className="text-white/70 leading-relaxed mb-4">{service.description}</p>
                      
                      {/* Price */}
                      <div className="mb-4">
                        <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                      </div>
                      
                      {/* Features */}
                      <div className="mb-6">
                        <h4 className="text-white font-semibold mb-3 text-sm">Key Features:</h4>
                        <div className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm text-white/70">
                              <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <a
                          href={service.link}
                          className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300"
                        >
                          <span className="text-sm font-medium">Learn More</span>
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </a>
                        <a
                          href="mailto:kleber@ziontechgroup.com"
                          className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg text-white text-sm font-medium transition-all duration-300 transform hover:scale-105"
                        >
                          Get Quote
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </AnimatePresence>
        </div>
      </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-cyan-500/30 rounded-3xl p-12 text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Business</span>?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join leading businesses that trust Zion Tech Group for their digital transformation. 
                Our expert team is ready to guide you through your technology journey.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 shadow-2xl shadow-cyan-500/25"
                >
                  <span>Get Started Today</span>
                  <ArrowRight className="w-6 h-6" />
                </motion.a>
                
                <motion.a
                  href="/enterprise-solutions-showcase"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-3 px-8 py-4 bg-black/50 border-2 border-cyan-500/50 text-cyan-300 font-bold text-lg rounded-xl hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-200"
                >
                  <Building className="w-6 h-6" />
                  <span>Enterprise Solutions</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
=======
    <Layout>
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
=======
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Card className="h-full bg-gradient-to-br from-gray-900 to-black border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="p-6">
                      {/* Service Header */}
                      <div className="mb-4">
                        <div className="text-3xl mb-2">{service.icon}</div>
                        <h3 className="text-lg font-bold text-white mb-2">{service.name}</h3>
                        <p className="text-sm text-gray-400 mb-3">{service.tagline}</p>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                          {service.popular && (
                            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                              POPULAR
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Service Features */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="flex items-center text-xs text-gray-400">
                              <Check className="h-3 w-3 text-green-400 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Service Stats */}
                      <div className="mb-4 space-y-2">
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-400">Category:</span>
                          <span className="text-gray-300">{service.category}</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-400">Rating:</span>
                          <span className="text-yellow-400">{service.rating || 'N/A'}/5</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-400">Trial:</span>
                          <span className="text-green-400">{service.trialDays} days</span>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2">
                        <Button
                          href={service.link}
                          variant="primary"
                          size="sm"
                          className="flex-1"
                        >
                          Learn More
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                        <Button
                          href="/contact"
                          variant="secondary"
                          size="sm"
                          className="flex-1"
                        >
                          Get Started
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Card className="bg-gradient-to-r from-gray-900 to-black border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                    <div className="p-6">
                      <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                        {/* Service Icon and Basic Info */}
                        <div className="flex items-start gap-4">
                          <div className="text-4xl">{service.icon}</div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                            <p className="text-gray-400 mb-3">{service.tagline}</p>
                            <div className="flex items-center gap-4 text-sm text-gray-300">
                              <span className="flex items-center gap-1">
                                <Cpu className="h-4 w-4" />
                                {service.category}
                              </span>
                              <span className="flex items-center gap-1">
                                <Star className="h-4 w-4 text-yellow-400" />
                                {service.rating || 'N/A'}/5
                              </span>
                              <span className="flex items-center gap-1">
                                <TrendingUp className="h-4 w-4 text-green-400" />
                                {service.trialDays} day trial
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Price and Popular Badge */}
                        <div className="flex flex-col items-end gap-3">
                          <div className="text-right">
                            <div className="text-3xl font-bold text-cyan-400">{service.price}</div>
                            {service.popular && (
                              <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                                POPULAR
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col gap-2 min-w-[120px]">
                          <Button
                            href={service.link}
                            variant="primary"
                            size="sm"
                          >
                            Learn More
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </Button>
                          <Button
                            href="/contact"
                            variant="secondary"
                            size="sm"
                          >
                            Get Started
                          </Button>
                        </div>
                      </div>

                      {/* Service Description and Features */}
                      <div className="mt-6 pt-6 border-t border-cyan-500/20">
                        <p className="text-gray-300 mb-4">{service.description}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                            <ul className="space-y-1">
                              {service.features.slice(0, 5).map((feature, idx) => (
                                <li key={idx} className="flex items-center text-sm text-gray-400">
                                  <Check className="h-3 w-3 text-green-400 mr-2 flex-shrink-0" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-gray-300 mb-2">Technology:</h4>
                            <div className="flex flex-wrap gap-2">
                              {service.technology?.slice(0, 4).map((tech, idx) => (
                                <span key={idx} className="bg-cyan-500/20 text-cyan-400 text-xs px-2 py-1 rounded">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}

          {/* No Results */}
          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-gray-400 mb-6">
                Try adjusting your search terms or category filter
              </p>
              <Button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                variant="primary"
              >
                Clear Filters
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Contact us today to discover how our revolutionary services can drive unprecedented growth and ROI
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-black/20 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6">
                <div className="text-2xl mb-4">📱</div>
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-300">{contactInfo.mobile}</p>
              </div>
              <div className="bg-black/20 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6">
                <div className="text-2xl mb-4">✉️</div>
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300">{contactInfo.email}</p>
              </div>
              <div className="bg-black/20 backdrop-blur-sm border border-pink-500/20 rounded-lg p-6">
                <div className="text-2xl mb-4">📍</div>
                <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                <p className="text-gray-300">{contactInfo.address}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="group"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                href="/pricing"
                variant="secondary"
                size="lg"
              >
                View Pricing
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;

import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Search, Filter, Grid, List, Star, 
  TrendingUp, Zap, Brain, Shield, Globe,
  ArrowRight, ExternalLink, Check, Cpu
} from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services';
import { extraServices } from '../data/extra-services';
import { additionalEnhancedServices } from '../data/additional-real-services';
import { innovativeMicroSaasServices } from '../data/innovative-micro-saas-services';
import { advancedAIServices } from '../data/advanced-ai-services';
import { blockchainEmergingTechServices } from '../data/blockchain-emerging-tech-services';

=======
import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Search, Grid, List,
  Brain, Atom, Shield, Target, Rocket,
  ArrowRight, Check, Palette, Heart, Truck, GraduationCap,
  Building, Cpu, Database, Cloud, Lock, ShoppingCart, Lightbulb
} from 'lucide-react';
import { innovative2025MicroSaasExpansionV2 } from '../data/innovative-2025-micro-saas-expansion-v2';
import { innovative2025ITServicesExpansionV2 } from '../data/innovative-2025-it-services-expansion-v2';
import { innovative2025AIServicesExpansionV2 } from '../data/innovative-2025-ai-services-expansion-v2';
import Link from 'next/link';

=======
import Link from 'next/link';

// Import our new 2025 service data
import { advancedAIAutomationServices2025 } from '../data/2025-advanced-ai-automation-services';
import { innovativeITInfrastructureServices2025 } from '../data/2025-innovative-it-infrastructure-services';
import { innovativeMicroSaasSolutions2025 } from '../data/2025-innovative-micro-saas-solutions';
import { cuttingEdgeAIServices2025 } from '../data/2025-cutting-edge-ai-services';
import { innovativeAIAutonomousServices2025 } from '../data/2025-innovative-ai-autonomous-services';

// Import our new practical and specialized services
import { realPracticalMicroSaasServices2025 } from '../data/2025-real-practical-micro-saas-services';
import { advancedAIITSpecializedServices2025 } from '../data/2025-advanced-ai-it-specialized-services';

// Import our new 2025 enterprise services
import { realEnterpriseMicroSaas2025 } from '../data/2025-real-enterprise-micro-saas';

// Import our new 2025 advanced services
import { advancedBusinessIntelligenceServices2025 } from '../data/2025-advanced-business-intelligence-services';
import { advancedITInfrastructureServices2025 } from '../data/2025-advanced-it-infrastructure-services';

// Import our new real services
import { realMicroSaas2025Expansion } from '../data/real-micro-saas-2025-expansion';
import { realITServices2025Expansion } from '../data/real-it-services-2025-expansion';
import { realAIServices2025Expansion } from '../data/real-ai-services-2025-expansion';

// Import our new service data
import { enterpriseITSolutions } from '../data/2034-enterprise-it-solutions';
import { innovativeMicroSaasSolutions } from '../data/2034-innovative-micro-saas-solutions';
import { cuttingEdgeAIServices } from '../data/2034-cutting-edge-ai-services';
import { real2025Q4AugmentedBatch } from '../data/real-2025-q4-augmented-batch';
import { real2029Q3Additions } from '../data/real-2029-q3-additions';
import { validatedServices2025Q4 } from '../data/real-validated-2025-q4-additions';
import { real2035Q2Additions } from '../data/real-2035-q2-additions';
import { real2036ServiceExpansions } from '../data/real-2036-service-expansions';
import { innovative2036MicroSaasServices } from '../data/innovative-2036-micro-saas-services';
import { innovative2036ITServices } from '../data/innovative-2036-it-services';
import { innovative2037MicroSaasServices } from '../data/innovative-2037-micro-saas-services';
import { innovative2037ITServices } from '../data/innovative-2037-it-services';
import { innovative2037AIServices } from '../data/innovative-2037-ai-services';
import { innovative2038CuttingEdgeServices } from '../data/innovative-2038-cutting-edge-services';
import { innovative2038ITInfrastructureServices } from '../data/innovative-2038-it-infrastructure-services';
import { innovative2037Services } from '../data/innovative-2037-services';
import { advanced2038Services } from '../data/advanced-2038-services';
import { revolutionary2039Services } from '../data/revolutionary-2039-services';
import { revolutionary2040FuturisticServices } from '../data/revolutionary-2040-futuristic-services';
import { revolutionary2041AdvancedServices } from '../data/revolutionary-2041-advanced-services';
import { advanced2041EnterpriseServices } from '../data/advanced-2041-enterprise-services';
import { revolutionary2042MicroSaasServices } from '../data/revolutionary-2042-micro-saas-services';

// Import our new 2025 ultimate services expansion
import { ultimate2025MicroSaasExpansion } from '../data/2025-ultimate-micro-saas-expansion';
import { ultimate2025ITServicesExpansion } from '../data/2025-ultimate-it-services-expansion';
import { ultimate2025AIServicesExpansion } from '../data/2025-ultimate-ai-services-expansion';

// Import our new 2025 Q4 innovative services
import { innovative2025Q4NewServices } from '../data/innovative-2025-q4-new-services';


// Import our new innovative 2040 services
import { innovative2040ITServices } from '../data/innovative-2040-it-services';
import { innovative2040FuturisticServices } from '../data/innovative-2040-futuristic-services';

// Import our new 2025 advanced enterprise services
import { advancedEnterpriseServices } from '../data/2025-advanced-enterprise-services-expansion';
import { cuttingEdgeITInfrastructureServices } from '../data/2025-cutting-edge-it-infrastructure';

// Import our new 2025 cutting-edge futuristic services
import { cuttingEdgeFuturisticServices } from '../data/2025-cutting-edge-futuristic-services';
import { advancedAIAutomationServices } from '../data/2026-advanced-ai-automation-services';

// Import our new 2025 cutting-edge innovative services expansion
import { cuttingEdgeInnovativeServices2025 } from '../data/2025-cutting-edge-innovative-services-expansion';
import { advancedITInfrastructureSolutions2025 } from '../data/2025-advanced-it-infrastructure-solutions';
import { advancedAIAutomationSolutions2025 } from '../data/2025-advanced-ai-automation-solutions';

// Import our new innovative services
import { advancedCybersecurityAutomationServices2025 } from '../data/2025-advanced-cybersecurity-automation-services';
import { aiAutomationWorkflowServices2025 } from '../data/2025-ai-automation-workflow-services';
import { cloudDevOpsAutomationServices2025 } from '../data/2025-cloud-devops-automation-services';
import { businessIntelligenceAutomationServices2025 } from '../data/2025-business-intelligence-automation-services';
import { marketingAutomationAIServices2025 } from '../data/2025-marketing-automation-ai-services';
import { healthcareAISpecializedServices2025 } from '../data/2025-healthcare-ai-specialized-services';

// Import existing service data
import { realMicroSaasServices } from '../data/real-micro-saas-services';
import { innovativeAIServices } from '../data/innovative-ai-services';
import { enterpriseITServices } from '../data/enterprise-it-services';
import { emergingTechServices } from '../data/emerging-tech-services';
import { newRealServices } from '../data/new-real-services';
import { realOperationalServices } from '../data/real-operational-services';
import { marketReadyServices } from '../data/market-ready-services';
import { marketValidatedServices } from '../data/market-validated-services';
import { industryRealServices } from '../data/industry-real-services';

// Helper function to get service category
const getServiceCategory = (service: any) => {
  if (service.category) return service.category;
  if (service.type) return service.type;
  return 'Other';
};

// Helper function to get service pricing
const getServicePricing = (service: any) => {
  if (service.pricing?.starter) return service.pricing.starter;
  if (service.pricing?.monthly) return `$${service.pricing.monthly}/month`;
  if (service.price?.monthly) return `$${service.price.monthly}/month`;
  return 'Contact for pricing';
};

// Helper function to get service features
const getServiceFeatures = (service: any) => {
  if (service.features) return service.features;
  if (service.keyFeatures) return service.keyFeatures;
  return [];
};

// Helper function to get service description
const getServiceDescription = (service: any) => {
  if (service.description) return service.description;
  if (service.tagline) return service.tagline;
  return 'No description available';
};

// Combine all services including new ones
const allServices = [
  // Our new innovative services 2025
  ...advancedCybersecurityAutomationServices2025,
  ...aiAutomationWorkflowServices2025,
  ...cloudDevOpsAutomationServices2025,
  ...businessIntelligenceAutomationServices2025,
  ...marketingAutomationAIServices2025,
  ...healthcareAISpecializedServices2025,
  
  // New practical and specialized services
  ...realPracticalMicroSaasServices2025,
  ...advancedAIITSpecializedServices2025,
  
  // Our new 2025 services
  ...advancedAIAutomationServices2025,
  ...innovativeITInfrastructureServices2025,
  ...innovativeMicroSaasSolutions2025,
  ...cuttingEdgeAIServices2025,
  ...realEnterpriseMicroSaas2025,
  ...innovativeAIAutonomousServices2025,
  
  // Our new 2025 advanced services
  ...advancedBusinessIntelligenceServices2025,
  ...advancedITInfrastructureServices2025,
  
  // Our new real services 2025
  ...realMicroSaas2025Expansion,
  ...realITServices2025Expansion,
  ...realAIServices2025Expansion,
  
  // Existing services
  ...enterpriseITSolutions,
  ...innovativeMicroSaasSolutions,
  ...cuttingEdgeAIServices,
  ...realMicroSaasServices,
  ...innovativeAIServices,
  ...enterpriseITServices,
  ...cuttingEdgeFuturisticServices,
  ...advancedAIAutomationServices,
  ...emergingTechServices,
  ...newRealServices,
  ...realOperationalServices,
  ...marketReadyServices,
  ...marketValidatedServices,
  // Our new 2025 Q4 innovative services
  ...innovative2025Q4NewServices,
  ...advancedITInfrastructureServices2025,
  ...industryRealServices,
  ...real2025Q4AugmentedBatch,
  ...real2029Q3Additions,
  ...validatedServices2025Q4,
  ...real2035Q2Additions,
  ...real2036ServiceExpansions,
  ...innovative2036MicroSaasServices,
  ...innovative2036ITServices,
  ...innovative2037MicroSaasServices,
  ...innovative2037ITServices,
  ...innovative2037AIServices,
  ...innovative2038CuttingEdgeServices,
  ...innovative2038ITInfrastructureServices,
  ...innovative2037Services,
  ...advanced2038Services,
  ...revolutionary2039Services,
  ...revolutionary2040FuturisticServices,
  ...revolutionary2041AdvancedServices,
  ...advanced2041EnterpriseServices,
  ...revolutionary2042MicroSaasServices,
  ...ultimate2025MicroSaasExpansion,
  ...ultimate2025ITServicesExpansion,
  ...ultimate2025AIServicesExpansion,
  ...innovative2040ITServices,
  ...innovative2040FuturisticServices,
  ...advancedEnterpriseServices,
  ...cuttingEdgeITInfrastructureServices,
  
  // Our new 2025 cutting-edge innovative services expansion
  ...cuttingEdgeInnovativeServices2025,
  ...advancedITInfrastructureSolutions2025,
  ...advancedAIAutomationSolutions2025
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
    id: 'healthcare-biotech',
    name: 'Healthcare & Biotech',
    icon: <Heart className="w-6 h-6" />,
    color: 'from-red-500 to-pink-500',
    description: 'Advanced healthcare solutions'
  },
  {
    id: 'transportation-logistics',
    name: 'Transportation & Logistics',
    icon: <Truck className="w-6 h-6" />,
    color: 'from-blue-500 to-cyan-500',
    description: 'Smart transportation solutions'
  },
  {
    id: 'education-research',
    name: 'Education & Research',
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

const ServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'rating' | 'popularity'>('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || 
      (selectedCategory === 'ai' && service.name.toLowerCase().includes('ai')) ||
      (selectedCategory === 'quantum' && service.name.toLowerCase().includes('quantum')) ||
      (selectedCategory === 'it' && (service.name.toLowerCase().includes('infrastructure') || service.name.toLowerCase().includes('devops') || service.name.toLowerCase().includes('security'))) ||
      (selectedCategory === 'saas' && !service.name.toLowerCase().includes('ai') && !service.name.toLowerCase().includes('quantum') && !service.name.toLowerCase().includes('infrastructure'));
    
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    let comparison = 0;
    switch (sortBy) {
      case 'price':
        comparison = a.price.monthly - b.price.monthly;
        break;
      case 'rating':
        comparison = a.rating - b.rating;
        break;
      case 'popularity':
        comparison = a.customers - b.customers;
        break;
      default:
        comparison = a.name.localeCompare(b.name);
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
      case 'manufacturing':
      case 'manufacturing & industry':
        return <Building className="w-6 h-6 text-gray-400" />;
      case 'retail':
      case 'retail & e-commerce':
        return <ShoppingCart className="w-6 h-6 text-pink-400" />;
      case 'consulting':
      case 'consulting & strategy':
        return <Lightbulb className="w-6 h-6 text-indigo-400" />;
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
    <>
      <Head>
        <title>Services | Zion Tech Group - Autonomous Innovation Solutions</title>
        <meta name="description" content="Discover Zion Tech Group's comprehensive range of autonomous technology services including AI automation, system optimization, and intelligent infrastructure solutions." />
        <meta property="og:title" content="Services | Zion Tech Group - Autonomous Innovation Solutions" />
        <meta property="og:description" content="Discover Zion Tech Group's comprehensive range of autonomous technology services including AI automation, system optimization, and intelligent infrastructure solutions." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
    <Layout>
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="text-center mb-16">
=======
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>Services - Zion Tech Group | 500+ Revolutionary Micro SaaS Services</title>
        <meta name="description" content="Explore our comprehensive portfolio of 500+ revolutionary micro SaaS services, quantum AI solutions, and cutting-edge technology platforms." />
        <meta name="keywords" content="micro SaaS services, AI solutions, quantum computing, blockchain, cybersecurity, space technology, biotech AI, financial trading, metaverse, IoT, cloud computing" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
  };

  const filteredServices = activeCategory === 'all' 
    ? allServices 
    : allServices.filter(service => service.category === activeCategory);

  const stats = [
    { number: '500+', label: 'Services Delivered', icon: CheckCircle, color: 'text-cyan-400' },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield, color: 'text-green-400' },
    { number: '24/7', label: 'Global Support', icon: Clock, color: 'text-purple-400' },
    { number: '2500%', label: 'Average ROI', icon: TrendingUp, color: 'text-yellow-400' }
  ];

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {microServices.map((service, index) => (
              <Card
                key={index}
                className="card-hover group border-gradient-blue cursor-pointer"
=======
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

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
              Revolutionary Micro SaaS Services
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Discover our comprehensive portfolio of 500+ cutting-edge micro SaaS services powered by quantum AI, 
              blockchain technology, and revolutionary innovations.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          >
            <div className="bg-black/20 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-4">
              <div className="text-2xl font-bold text-cyan-400 mb-1">{allServices.length}+</div>
              <div className="text-sm text-gray-400">Total Services</div>
            </div>
            <div className="bg-black/20 backdrop-blur-sm border border-purple-500/20 rounded-lg p-4">
              <div className="text-2xl font-bold text-purple-400 mb-1">{categories.length - 1}</div>
              <div className="text-sm text-gray-400">Categories</div>
            </div>
            <div className="bg-black/20 backdrop-blur-sm border border-pink-500/20 rounded-lg p-4">
              <div className="text-2xl font-bold text-pink-400 mb-1">30+</div>
              <div className="text-sm text-gray-400">Day Trials</div>
            </div>
            <div className="bg-black/20 backdrop-blur-sm border border-green-500/20 rounded-lg p-4">
              <div className="text-2xl font-bold text-green-400 mb-1">1200%+</div>
              <div className="text-sm text-gray-400">Average ROI</div>
            </div>
          </motion.div>
        </div>
      </section>

              {/* Sort and View Controls */}
              <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                <div className="flex items-center gap-4">
                  <label className="text-gray-300 text-sm font-medium">Sort by:</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-black/30 border border-white/20 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                  >
                    <option value="popular">Most Popular</option>
                    <option value="newest">Newest</option>
                    <option value="name">Name A-Z</option>
                    <option value="price">Price Low-High</option>
                  </select>
=======
        <link rel="canonical" href="https://ziontechgroup.com/services" />
      </Head>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
              Revolutionary Micro SaaS Services
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Discover our comprehensive portfolio of 500+ cutting-edge micro SaaS services powered by quantum AI, 
              blockchain technology, and revolutionary innovations.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          >
            <div className="bg-black/20 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-4">
              <div className="text-2xl font-bold text-cyan-400 mb-1">{allServices.length}+</div>
              <div className="text-sm text-gray-400">Total Services</div>
            </div>
            <div className="bg-black/20 backdrop-blur-sm border border-purple-500/20 rounded-lg p-4">
              <div className="text-2xl font-bold text-purple-400 mb-1">{categories.length - 1}</div>
              <div className="text-sm text-gray-400">Categories</div>
            </div>
            <div className="bg-black/20 backdrop-blur-sm border border-pink-500/20 rounded-lg p-4">
              <div className="text-2xl font-bold text-pink-400 mb-1">30+</div>
              <div className="text-sm text-gray-400">Day Trials</div>
            </div>
            <div className="bg-black/20 backdrop-blur-sm border border-green-500/20 rounded-lg p-4">
              <div className="text-2xl font-bold text-green-400 mb-1">1200%+</div>
              <div className="text-sm text-gray-400">Average ROI</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-black/20 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6"
          >
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-end">
              {/* Search */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Search Services</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search by name, description, or category..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-black/30 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-2 bg-black/30 border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
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
      <section className="py-20 px-6 bg-gradient-to-r from-white/5 to-white/10">
        <div className="max-w-4xl mx-auto text-center">
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
=======
      {/* CTA Section */}
      <section style={{ 
        maxWidth: 1400, margin: '0 auto', padding: '60px 20px',
        textAlign: 'center', background: 'white', marginTop: 40,
        borderRadius: 24, boxShadow: '0 4px 24px rgba(0,0,0,0.06)'
      }}>
        <h2 style={{ 
          fontSize: 32, fontWeight: 700, marginBottom: 16,
          color: '#1e293b'
        }}>Ready to Get Started?</h2>
        <p style={{ 
          fontSize: 18, color: '#64748b', marginBottom: 32,
          maxWidth: 600, margin: '0 auto 32px auto'
        }}>
          Contact our experts to discuss your project requirements and discover 
          how our innovative solutions can drive your business forward.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/contact" style={{
            display: 'inline-block', 
            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', 
            color: 'white', padding: '16px 32px', borderRadius: 12, 
            fontWeight: 700, textDecoration: 'none', fontSize: 16,
            transition: 'all 0.3s ease'
          }}>Request a Quote</Link>
          <a href="tel:+13024640950" style={{
            display: 'inline-block', 
            background: 'rgba(34, 197, 94, 0.1)', 
            color: '#22c55e', padding: '16px 32px', borderRadius: 12, 
            fontWeight: 700, textDecoration: 'none', fontSize: 16,
            border: '2px solid #22c55e', transition: 'all 0.3s ease'
          }}>Call +1 302 464 0950</a>
        </div>
      </section>
    </main>
  );
}

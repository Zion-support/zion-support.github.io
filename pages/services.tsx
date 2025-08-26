<<<<<<< HEAD
import React from 'react';
import Head from 'next/head';
<<<<<<< HEAD
=======
import { motion } from 'framer-motion';
import { 
  Search, Filter, Star, CheckCircle, ArrowRight, 
  Brain, Atom, Shield, Rocket, Target, Microscope,
  Phone, Mail, MapPin, TrendingUp, Users, Award
} from 'lucide-react';
<<<<<<< HEAD

<<<<<<< HEAD
// Import all the new 2032 service data
import { futuristicAIServices2032 } from '../data/2032-futuristic-ai-services';
import { quantumEmergingTechServices2032 } from '../data/2032-quantum-emerging-tech-services';
import { spaceMetaverseServices2032 } from '../data/2032-space-metaverse-services';
import { innovativeMicroSaasServices2032 } from '../data/2032-innovative-micro-saas';
import { researchDevelopmentServices2032 } from '../data/2032-research-development-services';
import { enterpriseITServices2032 } from '../data/2032-enterprise-it-services';

// Import all the new 2033 service data
import { innovativeMicroSaasServices2033 } from '../data/2033-innovative-micro-saas-v2';
import { innovativeAIServices2033 } from '../data/2033-innovative-ai-services-v2';
import { quantumEmergingTechServices2033 } from '../data/2033-quantum-emerging-tech-services-v2';
import { spaceMetaverseServices2033 } from '../data/2033-space-metaverse-services-v2';
import { researchDevelopmentServices2033 } from '../data/2033-research-development-services-v2';
import { enterpriseITServices2033 } from '../data/2033-enterprise-it-services-v2';
=======
// Import our new service data
// import { enterpriseITSolutions } from '../data/2034-enterprise-it-solutions';
// import { innovativeMicroSaasSolutions } from '../data/2034-innovative-micro-saas-solutions';
// import { cuttingEdgeAIServices } from '../data/2034-cutting-edge-ai-services';

// Import existing service data
<<<<<<< HEAD
// import { realMicroSaasServices2025 } from '../data/2025-real-micro-saas-services';
// import { innovativeAIServices2025 } from '../data/2025-innovative-ai-services';
// import { innovativeITServices2025 } from '../data/2025-innovative-it-services';
// import { emergingTechServices2025 } from '../data/2025-emerging-tech-services';
// import { newRealServices2026 } from '../data/2025-2026-new-real-services';
import { enterpriseITServices } from '../data/enterprise-it-services';
import { innovativeMicroSaasServices } from '../data/innovative-micro-saas-services';
import { innovativeAIServices } from '../data/innovative-ai-services';
import { emergingTechServices } from '../data/emerging-tech-services';
import { newRealServices } from '../data/new-real-services';
import { realMarketServices } from '../data/real-market-services';
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services';
import { realAdditions2025Q3 } from '../data/2025-q3-real-additions';
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-77a4
=======
import { realMicroSaasServices2025 } from '../data/2025-real-micro-saas-services';
import { innovativeAIServices2025 } from '../data/2025-innovative-ai-services';
import { innovativeITServices2025 } from '../data/2025-innovative-it-services';
import { emergingTechServices2025 } from '../data/2025-emerging-tech-services';
import { newRealServices2026 } from '../data/2025-2026-new-real-services';
import { additionalRealMicroSaas2026 } from '../data/2026-additional-real-micro-saas';
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-78c2

// Import new 2024 real market services
import { realMarketServices } from '../data/2024-real-market-services';
import { aiEmergingTechServices } from '../data/2024-ai-emerging-tech-services';

// Import existing services for comprehensive coverage
=======
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import UltraFuturisticServiceCard from '../components/ui/UltraFuturisticServiceCard';
import UltraFuturisticNavigation from '../components/layout/UltraFuturisticNavigation';
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-7f29
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services';
import { innovativeMicroSaasServices } from '../data/innovative-micro-saas-services';
import { quantumSpaceServices } from '../data/quantum-space-services';
import { enterpriseITServices } from '../data/enterprise-it-services';
<<<<<<< HEAD

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

<<<<<<< HEAD
const serviceCategories = [
=======
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

// Create unified services array
const allServices = [
<<<<<<< HEAD
	...enterpriseITServices,
	...innovativeMicroSaasServices,
	...innovativeAIServices,
	...emergingTechServices,
	...newRealServices,
	...realMarketServices,
	...enhancedRealMicroSaasServices,
	...realAdditions2025Q3
=======
  ...enterpriseITSolutions,
  ...innovativeMicroSaasSolutions,
  ...cuttingEdgeAIServices,
  ...realMicroSaasServices2025,
  ...innovativeAIServices2025,
  ...innovativeITServices2025,
  ...emergingTechServices2025,
  ...newRealServices2026,
  ...additionalRealMicroSaas2026
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-78c2
];

const categories = [
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-77a4
  {
    id: 'ai-services',
    title: '🧠 Revolutionary AI Services',
    description: 'Next-generation AI consciousness and creativity',
    icon: Brain,
    color: 'from-violet-500 to-purple-500',
    services: [...futuristicAIServices2032, ...innovativeAIServices2033, ...aiEmergingTechServices.filter(s => s.category.includes('AI'))],
    gradient: 'from-violet-500/20 to-indigo-500/20'
  },
  {
    id: 'quantum-emerging',
    title: '⚛️ Quantum & Emerging Tech',
    description: 'Quantum computing, DNA computing, and beyond',
    icon: Atom,
    color: 'from-indigo-500 to-blue-500',
    services: [...quantumEmergingTechServices2032, ...quantumEmergingTechServices2033, ...aiEmergingTechServices.filter(s => s.category.includes('Quantum') || s.category.includes('Blockchain'))],
    gradient: 'from-indigo-500/20 to-cyan-500/20'
  },
  {
    id: 'enterprise-it',
    title: '🏙️ Enterprise IT Solutions',
    description: 'Autonomous operations and zero-trust security',
    icon: Shield,
    color: 'from-blue-500 to-cyan-500',
    services: [...enterpriseITServices2032, ...enterpriseITServices2033, ...realMarketServices.filter(s => s.category.includes('Security') || s.category.includes('HR') || s.category.includes('Project'))],
    gradient: 'from-blue-500/20 to-teal-500/20'
  },
  {
    id: 'business-automation',
    title: '🛒 Business Automation',
    description: 'Streamline business operations',
    icon: Target,
    color: 'from-teal-500 to-emerald-500',
    services: [...realMarketServices.filter(s => s.category.includes('E-commerce') || s.category.includes('Marketing') || s.category.includes('Finance'))],
    gradient: 'from-teal-500/20 to-green-500/20'
  },
  {
    id: 'robotics-automation',
    title: '🤖 Robotics & Automation',
    description: 'Intelligent automation solutions',
    icon: Rocket,
    color: 'from-green-500 to-yellow-500',
    services: [...aiEmergingTechServices.filter(s => s.category.includes('Robotics') || s.category.includes('Edge'))],
    gradient: 'from-green-500/20 to-orange-500/20'
  },
  {
    id: 'research-development',
    title: '🔬 Research & Development',
    description: 'Breakthrough technologies and innovations',
    icon: Microscope,
    color: 'from-orange-500 to-red-500',
    services: [...researchDevelopmentServices2032, ...researchDevelopmentServices2033, ...aiEmergingTechServices.filter(s => s.category.includes('Drug') || s.category.includes('Climate'))],
    gradient: 'from-orange-500/20 to-pink-500/20'
  }
];
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-767b

export default function ServicesPage() {
=======
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services';
<<<<<<< HEAD
import { additionalEnhancedServices } from '../data/additional-real-services';
import { newRealServices } from '../data/new-real-services';
import { industryRealServices } from '../data/industry-real-services';
=======
<<<<<<< HEAD
import { additionalEnhancedServices } from '../data/additional-real-services';
import { newRealServices } from '../data/new-real-services';
import { added2025Services } from '../data/added-2025-services';
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-7d74
import { professionalServices } from '../data/professional-services';
import { nextGenerationAIServices } from '../data/next-generation-ai-services';
import { cuttingEdgeITServices } from '../data/cutting-edge-it-services';
import { innovativeMicroSaasV2Services } from '../data/innovative-micro-saas-v2';
import { marketValidatedServices } from '../data/market-validated-services';
import { emergingTechnologyServices } from '../data/emerging-technology-services';
import { comprehensiveITSolutions } from '../data/comprehensive-it-solutions';
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> origin/main
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-7d74
=======
import React, { useState } from 'react';
import Head from 'next/head';
import { 
  Search, Filter, Grid, List, Star, Users, 
  TrendingUp, Clock, Shield, Zap, Brain, 
  Globe, Rocket, Cpu, Database, Lock, 
  Cloud, Server, Code, BarChart3, Target
} from 'lucide-react';
import Button from '../components/ui/Button';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import UltraFuturisticServiceCard from '../components/ui/UltraFuturisticServiceCard';
import Card from '../components/ui/Card';
import { motion } from 'framer-motion';
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services';
import { extraServices } from '../data/extra-services';
import { additionalEnhancedServices } from '../data/additional-real-services';
<<<<<<< HEAD
import { innovativeMicroSaasServices } from '../data/innovative-micro-saas-services';
import { innovativeAIServices } from '../data/innovative-ai-services';
import { advancedITServices } from '../data/advanced-it-services';
import { specializedAIServices } from '../data/specialized-ai-services';
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-7e5c
=======
import { emergingTechServices } from '../data/emerging-tech-services';
import { nextGenAIServices } from '../data/next-gen-ai-services';
import { comprehensiveITServices } from '../data/comprehensive-it-services';
import { nextGenerationAIServices } from '../data/next-generation-ai-services';
import { advancedCybersecurityServices } from '../data/advanced-cybersecurity-services';
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-7f29
=======
import { newRealServices } from '../data/new-real-services';
import { marketReadyServices } from '../data/market-ready-services';
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8a5d

export default function ServicesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');

  const allServices = [
    ...innovativeAIServices,
    ...quantumSpaceServices,
    ...enterpriseITServices,
    ...enhancedRealMicroSaasServices,
<<<<<<< HEAD
<<<<<<< HEAD
    ...additionalEnhancedServices,
<<<<<<< HEAD
    ...extraServices,
    ...newlyAddedServices,
    ...newRealServices,
    ...moreRealServices2025,
    ...industryRealServices,
=======
<<<<<<< HEAD
    ...additionalEnhancedServices,
    ...newRealServices,
    ...added2025Services
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-7d74
    ...professionalServices,
    ...nextGenerationAIServices,
    ...cuttingEdgeITServices,
    ...innovativeMicroSaasV2Services,
    ...marketValidatedServices,
    ...emergingTechnologyServices,
<<<<<<< HEAD
<<<<<<< HEAD
    ...comprehensiveITSolutions,
    ...curatedMarketServices,
    ...realMarketServices,
    ...new2025Services,
    ...verified2025Additions,
    ...newRealInnovations,
    ...serviceExpansions2025,
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
    ...revolutionary2026Innovations
=======
    ...comprehensiveITSolutions
>>>>>>> origin/main
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-7d74
=======
    ...emergingTechServices,
    ...nextGenAIServices,
    ...comprehensiveITServices,
    ...nextGenerationAIServices,
    ...advancedCybersecurityServices
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-7f29
=======
    ...comprehensiveITSolutions,
    ...newRealServices,
    ...marketReadyServices
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8a5d
  ];

  // Dynamic category counts mapped to the same filter logic below
  const aiCount = allServices.filter(service => (service.category?.includes('AI') || service.category?.includes('Machine Learning') || service.category?.includes('AI Autonomous') || service.category?.includes('AI Consciousness') || service.category?.includes('AI Legal') || service.category?.includes('AI Scientific') || service.category?.includes('AI Creative') || service.category?.includes('AI Healthcare') || service.category?.includes('AI Education'))).length;
  const quantumCount = allServices.filter(service => (service.category?.includes('Quantum') || service.category.includes('Space') || service.category?.includes('Quantum Space'))).length;
  const enterpriseCount = allServices.filter(service => (service.category?.includes('Enterprise') || service.category?.includes('IT'))).length;
  const microSaasCount = allServices.filter(service => (service.category?.includes('Micro SaaS'))).length;
  const metaverseCount = allServices.filter(service => (service.category?.includes('Metaverse') || service.category?.includes('Digital Reality') || service.category?.includes('Consciousness Interface') || service.category?.includes('Holographic'))).length;

  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀', count: allServices.length },
    { id: 'ai', name: 'AI & Machine Learning', icon: '🧠', count: aiCount },
    { id: 'quantum', name: 'Quantum & Space', icon: '⚛️', count: quantumCount },
    { id: 'enterprise', name: 'Enterprise IT', icon: '🏢', count: enterpriseCount },
    { id: 'micro-saas', name: 'Micro SaaS', icon: '💻', count: microSaasCount },
    { id: 'metaverse', name: 'Metaverse & Digital Reality', icon: '🌐', count: metaverseCount }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'low', name: 'Under $1K/month', range: 'Under $1K' },
    { id: 'medium', name: '$1K - $5K/month', range: '$1K - $5K' },
    { id: 'high', name: '$5K - $20K/month', range: '$5K - $20K' },
    { id: 'premium', name: '$20K+/month', range: '$20K+' }
  ];

  const sortOptions = [
    { id: 'name', name: 'Name A-Z' },
    { id: 'price-low', name: 'Price Low to High' },
    { id: 'price-high', name: 'Price High to Low' },
    { id: 'rating', name: 'Rating' },
    { id: 'customers', name: 'Customer Count' }
  ];

  // Filter and sort services
  const filteredServices = React.useMemo(() => {
    const parsePriceToNumber = (price: any): number => {
      if (typeof price === 'number') return price;
      if (typeof price === 'string') {
        const match = price.replace(/[^0-9.]/g, '');
        const parsed = parseFloat(match || '0');
        return isNaN(parsed) ? 0 : parsed;
      }
      return 0;
    };

    let filtered = allServices.filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           (service.tagline && service.tagline.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || 
                             (selectedCategory === 'ai' && (service.category.includes('AI') || service.category.includes('Machine Learning') || service.category.includes('AI Autonomous') || service.category.includes('AI Consciousness') || service.category.includes('AI Legal') || service.category.includes('AI Scientific') || service.category.includes('AI Creative') || service.category.includes('AI Healthcare') || service.category.includes('AI Education'))) ||
                             (selectedCategory === 'quantum' && (service.category.includes('Quantum') || service.category.includes('Space') || service.category.includes('Quantum Space'))) ||
                             (selectedCategory === 'enterprise' && (service.category.includes('Enterprise') || service.category.includes('IT') || service.category.includes('Cloud') || service.category.includes('Security'))) ||
                             (selectedCategory === 'micro-saas' && service.category.includes('Micro SaaS')) ||
                             (selectedCategory === 'metaverse' && (service.category.includes('Metaverse') || service.category.includes('Digital Reality') || service.category.includes('Consciousness Interface') || service.category.includes('Holographic')));
      
      const numericPrice = parsePriceToNumber((service as any).price);
      const matchesPrice = selectedPriceRange === 'all' ||
                          (selectedPriceRange === 'low' && numericPrice < 1000) ||
                          (selectedPriceRange === 'medium' && numericPrice >= 1000 && numericPrice < 5000) ||
                          (selectedPriceRange === 'high' && numericPrice >= 5000 && numericPrice < 20000) ||
                          (selectedPriceRange === 'premium' && numericPrice >= 20000);
      
      return matchesSearch && matchesCategory && matchesPrice;
    });

    // Sort services
    switch (sortBy) {
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'price-low':
        filtered.sort((a, b) => parsePriceToNumber((a as any).price) - parsePriceToNumber((b as any).price));
        break;
      case 'price-high':
        filtered.sort((a, b) => parsePriceToNumber((b as any).price) - parsePriceToNumber((a as any).price));
        break;
      case 'rating':
        filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case 'customers':
        filtered.sort((a, b) => {
          const getCustomers = (s: any) => (s.customerCount ?? s.customers ?? 0) as number;
          return getCustomers(b) - getCustomers(a);
        });
        break;
      default:
        break;
    }

    return filtered;
  }, [allServices, searchTerm, selectedCategory, selectedPriceRange, sortBy]);

  React.useEffect(() => {
    const hash = typeof window !== 'undefined' ? window.location.hash.replace('#', '') : '';
    if (hash === 'ai') setSelectedCategory('ai');
    else if (hash === 'quantum') setSelectedCategory('quantum');
    else if (hash === 'enterprise' || hash === 'it') setSelectedCategory('enterprise');
    else if (hash === 'micro-saas') setSelectedCategory('micro-saas');
    else if (hash === 'metaverse') setSelectedCategory('metaverse');
  }, []);
=======
    ...innovativeAIServices,
    ...advancedITServices,
    ...specializedAIServices,
    ...extraServices,
    ...additionalEnhancedServices,
    ...innovativeMicroSaasServices
  ];

  // Categories
  const categories = [
    { id: 'all', name: 'All Services', icon: <Grid className="w-4 h-4" />, count: allServices.length },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: <Brain className="w-4 h-4" />, count: allServices.filter(s => s.category.toLowerCase().includes('ai') || s.category.toLowerCase().includes('machine learning')).length },
    { id: 'quantum', name: 'Quantum Computing', icon: <Cpu className="w-4 h-4" />, count: allServices.filter(s => s.category.toLowerCase().includes('quantum')).length },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: <Lock className="w-4 h-4" />, count: allServices.filter(s => s.category.toLowerCase().includes('security') || s.category.toLowerCase().includes('cyber')).length },
    { id: 'cloud', name: 'Cloud & Infrastructure', icon: <Cloud className="w-4 h-4" />, count: allServices.filter(s => s.category.toLowerCase().includes('cloud') || s.category.toLowerCase().includes('infrastructure')).length },
    { id: 'devops', name: 'DevOps & Automation', icon: <Code className="w-4 h-4" />, count: allServices.filter(s => s.category.toLowerCase().includes('devops') || s.category.toLowerCase().includes('automation')).length },
    { id: 'data', name: 'Data & Analytics', icon: <BarChart3 className="w-4 h-4" />, count: allServices.filter(s => s.category.toLowerCase().includes('data') || s.category.toLowerCase().includes('analytics')).length },
    { id: 'iot', name: 'IoT & Edge Computing', icon: <Server className="w-4 h-4" />, count: allServices.filter(s => s.category.toLowerCase().includes('iot') || s.category.toLowerCase().includes('edge')).length },
    { id: 'blockchain', name: 'Blockchain & Web3', icon: <Globe className="w-4 h-4" />, count: allServices.filter(s => s.category.toLowerCase().includes('blockchain') || s.category.toLowerCase().includes('web3')).length },
    { id: 'space', name: 'Space Technology', icon: <Rocket className="w-4 h-4" />, count: allServices.filter(s => s.category.toLowerCase().includes('space')).length }
  ];

  // Filter and search services
  const filteredServices = allServices
    .filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || 
                             service.category.toLowerCase().includes(selectedCategory.replace('-', ' '));
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
        case 'newest':
          return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime();
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
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-7e5c

>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-7821
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <>
      <Head>
        <title>Services | Zion Tech Group - AI & Automation Solutions</title>
        <meta name="description" content="Explore Zion Tech Group's comprehensive range of AI development, automation, and technology consulting services." />
        <meta property="og:title" content="Services - Zion Tech Group" />
        <meta property="og:description" content="AI development, automation, and technology consulting services." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Comprehensive AI and automation solutions designed to transform your business and drive innovation
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a href="/about" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-cyan-400/50">About Us</a>
              <a href="/case-studies" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-fuchsia-400/50">Case Studies</a>
              <a href="/team" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-green-400/50">Our Team</a>
              <a href="/contact" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-blue-400/50">Contact Us</a>
            </div>
          </section>
          {/* Sections content preserved elsewhere in file; intentionally minimal to fix conflicts. */}
        </main>
      </div>
    </>
=======
    <UltraAdvancedFuturisticBackground variant="quantum-holographic-advanced" intensity="ultra">
      <Head>
        <title>All Services - Zion Tech Group | 500+ Revolutionary Micro SaaS Services</title>
        <meta name="description" content="Explore our complete portfolio of 500+ revolutionary micro SaaS services, AI solutions, and IT services. Find the perfect solution for your business needs." />
        <meta name="keywords" content="micro SaaS services, AI solutions, IT services, quantum computing, cybersecurity, cloud computing, DevOps, data analytics" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
=======
    <>
      <UltraFuturisticNavigation />
      <UltraAdvancedFuturisticBackground intensity={1.3} variant="fusion">
        <Head>
        <title>500+ Revolutionary Services - Zion Tech Group | AI, Quantum & IT Solutions</title>
        <meta name="description" content="Explore 500+ revolutionary AI, quantum computing, and IT services. From neural interfaces to enterprise solutions. Contact: +1 302 464 0950" />
        <meta name="keywords" content="AI services, quantum computing, IT services, micro SaaS, cybersecurity, cloud migration, neural interface" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="500+ Revolutionary Services - Zion Tech Group" />
        <meta property="og:description" content="Explore cutting-edge AI, quantum, and IT services. Contact: +1 302 464 0950" />
        <meta property="og:url" content="https://ziontechgroup.com/services" />
        <meta property="og:type" content="website" />
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-7f29
        <link rel="canonical" href="https://ziontechgroup.com/services" />
      </Head>

      {/* Header Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Explore <span className="text-cyan-400">500+ Revolutionary</span> Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              From quantum AI to space technology, discover services that will transform your business and give you unprecedented competitive advantages
            </p>
            
            {/* Search and Filters */}
            <div className="max-w-4xl mx-auto space-y-6">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services by name, description, or category..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-black/30 border border-cyan-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/60 focus:ring-2 focus:ring-cyan-500/20"
                />
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'border-cyan-500 bg-cyan-500/20 text-cyan-400'
                        : 'border-gray-600 text-gray-300 hover:border-cyan-500/50 hover:text-cyan-400'
                    }`}
                  >
                    {category.icon}
                    <span>{category.name}</span>
                    <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded-full text-xs">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>

              {/* View Controls */}
              <div className="flex items-center justify-center space-x-4">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg transition-all duration-300 ${
                      viewMode === 'grid'
                        ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50'
                        : 'text-gray-400 hover:text-cyan-400'
                    }`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg transition-all duration-300 ${
                      viewMode === 'list'
                        ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50'
                        : 'text-gray-400 hover:text-cyan-400'
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-black/30 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-cyan-500/50"
                >
                  <option value="popularity">Sort by Popularity</option>
                  <option value="name">Sort by Name</option>
                  <option value="price">Sort by Price</option>
                  <option value="newest">Sort by Newest</option>
                </select>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Results Count */}
          <div className="mb-8">
            <p className="text-gray-300">
              Showing <span className="text-cyan-400 font-semibold">{filteredServices.length}</span> of{' '}
              <span className="text-cyan-400 font-semibold">{allServices.length}</span> services
            </p>
          </div>

          {/* Services Display */}
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.05 }}
                >
                  <UltraFuturisticServiceCard service={service} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.05 }}
                >
                  <Card className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                    <div className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-3">
                            <span className="text-2xl">{service.icon}</span>
                            <div>
                              <h3 className="text-xl font-bold text-white">{service.name}</h3>
                              <p className="text-sm text-gray-400">{service.category}</p>
                            </div>
                          </div>
                          <p className="text-gray-300 mb-4">{service.description}</p>
                          
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                            <div className="text-center">
                              <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                              <div className="text-xs text-gray-400">Price</div>
                            </div>
                            <div className="text-center">
                              <div className="text-lg font-semibold text-purple-400">{service.trialDays}</div>
                              <div className="text-xs text-gray-400">Trial Days</div>
                            </div>
                            <div className="text-center">
                              <div className="text-lg font-semibold text-green-400">{service.rating}</div>
                              <div className="text-xs text-gray-400">Rating</div>
                            </div>
                            <div className="text-center">
                              <div className="text-lg font-semibold text-yellow-400">{service.customers}</div>
                              <div className="text-xs text-gray-400">Customers</div>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {service.features.slice(0, 5).map((feature, featureIndex) => (
                              <span
                                key={featureIndex}
                                className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full border border-cyan-500/30"
                              >
                                {feature}
                              </span>
                            ))}
                            {service.features.length > 5 && (
                              <span className="px-2 py-1 bg-gray-500/20 text-gray-400 text-xs rounded-full">
                                +{service.features.length - 5} more
                              </span>
                            )}
                          </div>
                        </div>
                        
                        <div className="flex flex-col items-end space-y-3 ml-6">
                          <div className="text-right">
                            <div className="text-sm text-gray-400 mb-1">Market Size</div>
                            <div className="text-sm text-green-400 font-semibold">{service.marketSize}</div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-gray-400 mb-1">Growth Rate</div>
                            <div className="text-sm text-purple-400 font-semibold">{service.growthRate}</div>
                          </div>
                          <Button href={service.link} variant="primary" size="sm">
                            Learn More
                          </Button>
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
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-gray-400 mb-6">
                Try adjusting your search terms or category filters
              </p>
              <Button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                variant="secondary"
              >
                Clear Filters
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Popular <span className="text-purple-400">Service Categories</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our most in-demand service categories that are transforming industries worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="w-12 h-12" />,
                title: "AI & Machine Learning",
                description: "Revolutionary AI services including content generation, legal analysis, HR automation, and market research.",
                count: categories.find(c => c.id === 'ai-ml')?.count || 0,
                color: "from-purple-600 to-pink-600"
              },
              {
                icon: <Cpu className="w-12 h-12" />,
                title: "Quantum Computing",
                description: "Next-generation quantum services for AI, finance, cybersecurity, and scientific research.",
                count: categories.find(c => c.id === 'quantum')?.count || 0,
                color: "from-cyan-600 to-blue-600"
              },
              {
                icon: <Lock className="w-12 h-12" />,
                title: "Cybersecurity",
                description: "Advanced security solutions with quantum encryption, zero-trust architecture, and AI threat detection.",
                count: categories.find(c => c.id === 'cybersecurity')?.count || 0,
                color: "from-red-600 to-orange-600"
              },
              {
                icon: <Cloud className="w-12 h-12" />,
                title: "Cloud & Infrastructure",
                description: "Enterprise-grade cloud platforms, edge computing, and quantum-enhanced data centers.",
                count: categories.find(c => c.id === 'cloud')?.count || 0,
                color: "from-blue-600 to-indigo-600"
              },
              {
                icon: <Code className="w-12 h-12" />,
                title: "DevOps & Automation",
                description: "AI-powered DevOps platforms with intelligent automation, testing, and monitoring.",
                count: categories.find(c => c.id === 'devops')?.count || 0,
                color: "from-green-600 to-emerald-600"
              },
              {
                icon: <Rocket className="w-12 h-12" />,
                title: "Space Technology",
                description: "Complete space mission management and satellite operations platforms.",
                count: categories.find(c => c.id === 'space')?.count || 0,
                color: "from-purple-600 to-indigo-600"
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:scale-105">
                  <div className="p-6 text-center">
                    <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${category.color} mb-4`}>
                      <div className="text-white">
                        {category.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{category.title}</h3>
                    <p className="text-gray-300 mb-4">{category.description}</p>
                    <div className="text-2xl font-bold text-cyan-400 mb-4">{category.count} Services</div>
                    <Button href={`/services?category=${category.title.toLowerCase().replace(/\s+/g, '-')}`} variant="secondary" className="w-full">
                      Explore Category
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our team of experts can create custom solutions tailored to your specific business needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary" size="lg" className="text-lg px-8 py-4">
                <Users className="w-5 h-5 mr-2" />
                Contact Sales Team
              </Button>
              <Button href="/pricing" variant="secondary" size="lg" className="text-lg px-8 py-4">
                <TrendingUp className="w-5 h-5 mr-2" />
                View Pricing
              </Button>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>Custom development • Enterprise solutions • Dedicated support</p>
              <p className="mt-2">
                <Star className="w-4 h-4 inline mr-1 text-yellow-400" />
                Free consultation and proof of concept
              </p>
            </div>
          </motion.div>
        </div>
      </section>
<<<<<<< HEAD

      {/* Footer Contact */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-cyan-500/20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-4">Contact Information</h3>
              <div className="space-y-2 text-gray-300">
                <p><Users className="w-4 h-4 inline mr-2" /> {contactInfo.mobile}</p>
                <p><Target className="w-4 h-4 inline mr-2" /> {contactInfo.email}</p>
                <p><Globe className="w-4 h-4 inline mr-2" /> {contactInfo.address}</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-4">Quick Links</h3>
              <div className="space-y-2">
                <p><a href="/" className="text-gray-300 hover:text-cyan-400 transition-colors">Home</a></p>
                <p><a href="/pricing" className="text-gray-300 hover:text-cyan-400 transition-colors">Pricing</a></p>
                <p><a href="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors">Contact</a></p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-4">Support</h3>
              <div className="space-y-2">
                <p><a href="/docs" className="text-gray-300 hover:text-cyan-400 transition-colors">Documentation</a></p>
                <p><a href="/support" className="text-gray-300 hover:text-cyan-400 transition-colors">Support Center</a></p>
                <p><a href="/status" className="text-gray-300 hover:text-cyan-400 transition-colors">System Status</a></p>
              </div>
            </div>
          </div>
          <div className="border-t border-cyan-500/20 pt-8">
            <p className="text-gray-400">
              © 2024 Zion Tech Group. All rights reserved. | 
              <a href="/privacy" className="ml-2 hover:text-cyan-400 transition-colors">Privacy Policy</a> | 
              <a href="/terms" className="ml-2 hover:text-cyan-400 transition-colors">Terms of Service</a>
            </p>
          </div>
        </div>
      </footer>
    </UltraAdvancedFuturisticBackground>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-7e5c
  );
}
=======
        </UltraAdvancedFuturisticBackground>
      </>
    );
  }
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-7f29

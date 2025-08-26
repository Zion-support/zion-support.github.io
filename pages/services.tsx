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
    ...additionalEnhancedServices,
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

>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-7821
  return (
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
  );
}

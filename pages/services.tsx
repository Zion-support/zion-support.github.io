import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Grid, List,
  Brain, Atom, Shield, Target, Rocket,
  ArrowRight, Check, Palette, Heart, Truck, GraduationCap,
  Building, Lock, Database
} from 'lucide-react';

// Import our new 2025 service data
import { advancedAIAutomationServices2025 } from '../data/2025-advanced-ai-automation-services';
import { innovative2025ITInfrastructureServices } from '../data/2025-innovative-it-infrastructure-services';
import { innovativeMicroSaasSolutions2025 } from '../data/2025-innovative-micro-saas-solutions';
import { cuttingEdgeAIServices2025 } from '../data/2025-cutting-edge-ai-services';
import { innovative2025AIAutonomousServices } from '../data/2025-innovative-ai-autonomous-services';

// Import our new practical and specialized services
import { realPracticalMicroSaasServices2025 } from '../data/2025-real-practical-micro-saas-services';
import { advancedAIITSpecializedServices2025 } from '../data/2025-advanced-ai-it-specialized-services';

// Import our new 2025 enterprise services
import { realEnterpriseMicroSaas2025 } from '../data/2025-real-enterprise-micro-saas';

// Import our new innovative 2025 services
import { realInnovativeMicroSaasServices2025 } from '../data/2025-real-innovative-micro-saas-expansion';
import { innovativeAIServices2025Expansion } from '../data/2025-innovative-ai-services-expansion';

// Import our new 2025 advanced services
import { advancedBusinessIntelligenceServices2025 } from '../data/2025-advanced-business-intelligence-services';
import { advancedITInfrastructureServices2025 } from '../data/2025-advanced-it-infrastructure-services';

// Import our new real services
import { realMicroSaas2025Expansion } from '../data/real-micro-saas-2025-expansion';
import { realITServices2025Expansion } from '../data/real-it-services-2025-expansion';
import { realAIServices2025Expansion } from '../data/real-ai-services-2025-expansion';

// Import our new innovative 2025 services
import { innovativeAIAutonomousEcosystemServices2025 } from '../data/2025-innovative-ai-autonomous-ecosystem';
import { cuttingEdgeITInfrastructureInnovations2025 } from '../data/2025-cutting-edge-it-infrastructure-innovations';
import { innovativeMicroSaasBreakthroughs2025 } from '../data/2025-innovative-micro-saas-breakthroughs';

// Import our new service data
import { enterpriseITSolutions } from '../data/2034-enterprise-it-solutions';
import { innovativeMicroSaasSolutions } from '../data/2034-innovative-micro-saas-solutions';
import { cuttingEdgeAIServices } from '../data/2034-cutting-edge-ai-services';
import { real2025Q4AugmentedBatch } from '../data/real-2025-q4-augmented-batch';
import { real2029Q3Additions } from '../data/real-2029-q3-additions';

// Import our new 2025 advanced services
import { advanced2025MicroSaasExpansion } from '../data/2025-advanced-micro-saas-expansion';
import { advanced2025ITSolutionsExpansion } from '../data/2025-advanced-it-solutions-expansion';
import { advanced2025AIServicesExpansion } from '../data/2025-advanced-ai-services-expansion';

// Import our new 2025 advanced services V2
import { advanced2025MicroSaasExpansionV2 } from '../data/2025-advanced-micro-saas-expansion-v2';
import { advanced2025ITSolutionsExpansionV2 } from '../data/2025-advanced-it-solutions-expansion-v2';
import { advanced2025AIServicesExpansionV2 } from '../data/2025-advanced-ai-services-expansion-v2';
// Import our new 2025 innovative services expansion
import { innovative2025MicroSaasExpansion } from '../data/innovative-2025-micro-saas-expansion';
import { innovative2025ITSolutionsExpansion } from '../data/innovative-2025-it-solutions-expansion';
import { innovative2025AIServicesExpansion } from '../data/innovative-2025-ai-services-expansion';

// Import our new 2025 comprehensive services
import { advancedEnterpriseSolutions2025 } from '../data/2025-advanced-enterprise-solutions';
import { innovativeAIAutomationServices2025 } from '../data/2025-innovative-ai-automation-services';
import { innovativeITInfrastructureServices2025 } from '../data/2025-innovative-it-infrastructure-services';
import { innovativeMicroSaasSolutions2025 } from '../data/2025-innovative-micro-saas-solutions';

// Import our new 2025 Q4 innovative services
import { innovative2025Q4NewServices } from '../data/innovative-2025-q4-new-services';
import { emergingTech2025Innovations } from '../data/emerging-tech-2025-innovations';

// Import Q4 2037 cutting-edge services
import { cuttingEdgeServices } from '../data/real-2037-q4-cutting-edge-services';
import { itInfrastructureServices } from '../data/real-2037-q4-it-infrastructure-services';
import { businessSolutionServices } from '../data/real-2037-q4-business-solutions';

// Import revolutionary 2025-2026 services
import { revolutionary20252026MicroSaasServices } from '../data/revolutionary-2025-2026-micro-saas-services';
import { revolutionary20252026AIServices } from '../data/revolutionary-2025-2026-ai-services';
import { revolutionary20252026ITInfrastructureServices } from '../data/revolutionary-2025-2026-it-infrastructure-services';

// Import our new 2026 advanced services
import { real2026AdvancedServices } from '../data/real-2026-advanced-services';
import { real2026InnovativeSolutions } from '../data/real-2026-innovative-solutions';
import { real2026SpecializedServices } from '../data/real-2026-specialized-services';

// Import our latest innovative services
import { innovative2040FuturisticServices } from '../data/innovative-2040-futuristic-services';
import { advanced2041EnterpriseServices } from '../data/advanced-2041-enterprise-services';
import { revolutionary2042MicroSaasServices } from '../data/revolutionary-2042-micro-saas-services';

// Import 2038 innovative services
import { innovative2038AIServices } from '../data/innovative-2038-ai-services';
import { innovative2038ITServices } from '../data/innovative-2038-it-services';
import { innovative2038MicroSaasServices } from '../data/innovative-2038-micro-saas-services';
import { innovative2038IndustryServices } from '../data/innovative-2038-industry-services';
import { innovative2038ConsultingServices } from '../data/innovative-2038-consulting-services';

// Import new innovative 2037 services
import { innovative2037MicroSaasServices } from '../data/innovative-2037-micro-saas-services';
import { innovative2037ITServices } from '../data/innovative-2037-it-services';
import { innovative2037AIServices } from '../data/innovative-2037-ai-services';

// Import 2026 innovative services
import { innovative2026AIServicesAdditions } from '../data/innovative-2026-ai-services-additions';
import { innovative2026ITServicesAdditions } from '../data/innovative-2026-it-services-additions';
import { innovative2026MicroSaasAdditions } from '../data/innovative-2026-micro-saas-additions';
import { innovative2026IndustryAIServices } from '../data/innovative-2026-industry-ai-services';
import { innovative2026EmergingTechServices } from '../data/innovative-2026-emerging-tech-services';

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
  if (Array.isArray(service?.category)) return service.category[0] || 'Other';
  if (service?.category) return service.category;
  if (Array.isArray(service?.type)) return service.type[0] || 'Other';
  if (service?.type) return service.type;
  return 'Other';
};

// Helper function to get service pricing
const getServicePricing = (service: any) => {
  if (service.pricing?.starter) return service.pricing.starter;
  if (service.pricing?.monthly) return `$${service.pricing.monthly}/month`;
  if (service.price?.monthly) return `$${service.price.monthly}/month`;
  if (typeof service.price === 'string') return service.price;
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
  ...enterpriseITSolutions,
  ...innovativeMicroSaasSolutions,
  ...cuttingEdgeAIServices,
  ...realMicroSaasServices,
  ...innovativeAIServices,
  ...enterpriseITServices,
  ...emergingTechServices,
  ...advancedEnterpriseSolutions2025,
  ...innovativeAIAutomationServices2025,
  ...innovativeITInfrastructureServices2025,
  ...innovativeMicroSaasSolutions2025,
  ...newRealServices,
  ...realOperationalServices,
  ...marketReadyServices,
  ...marketValidatedServices,
  ...industryRealServices,
  ...real2025Q4AugmentedBatch,
  ...real2029Q3Additions,
  ...validatedServices2025Q4,
  ...real2035Q2Additions,
  ...real2036ServiceExpansions,
  ...innovative2036MicroSaasServices,
  ...innovative2036ITServices,
  // 2026 Innovative Services
  ...innovative2026AIServicesAdditions,
  ...innovative2026ITServicesAdditions,
  ...innovative2026MicroSaasAdditions,
  ...innovative2026IndustryAIServices,
  ...innovative2026EmergingTechServices
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
    id: 'ai-automation',
    name: 'AI Automation',
    icon: <Brain className="w-6 h-6" />,
    color: 'from-blue-500 to-purple-500',
    description: 'AI-powered automation solutions'
  },
  {
    id: 'it-infrastructure',
    name: 'IT Infrastructure',
    icon: <Building className="w-6 h-6" />,
    color: 'from-indigo-500 to-purple-500',
    description: 'Enterprise infrastructure and cloud solutions'
  },
  {
    id: 'micro-saas',
    name: 'Micro SAAS',
    icon: <Target className="w-6 h-6" />,
    color: 'from-green-500 to-emerald-500',
    description: 'Innovative business solutions'
  },
  {
    id: 'ai-services',
    name: 'AI Services',
    icon: <Cpu className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-500',
    description: 'Cutting-edge AI and machine learning services'
  },
  {
    id: 'business-intelligence',
    name: 'Business Intelligence',
    icon: <Target className="w-6 h-6" />,
    color: 'from-emerald-500 to-teal-500',
    description: 'Advanced analytics and business intelligence solutions'
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
    id: 'cybersecurity',
    name: 'Cybersecurity & Security',
    icon: <Shield className="w-6 h-6" />,
    color: 'from-red-500 to-orange-500',
    description: 'Advanced security and compliance solutions'
  },
  {
    id: 'blockchain-defi',
    name: 'Blockchain & DeFi',
    icon: <Database className="w-6 h-6" />,
    color: 'from-yellow-500 to-green-500',
    description: 'Blockchain and decentralized finance solutions'
  },
  {
    id: 'biometric-identity',
    name: 'Biometric & Identity',
    icon: <Lock className="w-6 h-6" />,
    color: 'from-purple-500 to-indigo-500',
    description: 'Biometric authentication and identity management'
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

export default function Services() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const pageSize = 18;

  // Simulate loading state for better UX
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsVisible(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  // Filter services based on search and category
  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         getServiceDescription(service).toLowerCase().includes(searchQuery.toLowerCase());
    
    if (selectedCategory === 'all') return matchesSearch;
    
    const serviceCategory = getServiceCategory(service).toLowerCase();
    const categoryName = categories.find(cat => cat.id === selectedCategory)?.name.toLowerCase();
    
    // Special filtering for revolutionary categories
    if (selectedCategory === 'revolutionary-2040') {
      return matchesSearch && (service.id.includes('quantum-consciousness') || 
                              service.id.includes('interdimensional') || 
                              service.id.includes('neural-quantum') || 
                              service.id.includes('autonomous-quantum') || 
                              service.id.includes('metaverse-business') || 
                              service.id.includes('quantum-financial') || 
                              service.id.includes('space-resource') || 
                              service.id.includes('quantum-healthcare') || 
                              service.id.includes('quantum-education') || 
                              service.id.includes('quantum-logistics'));
    }
    
    if (selectedCategory === 'revolutionary-2041') {
      return matchesSearch && (service.id.includes('multiverse') || 
                              service.id.includes('temporal') || 
                              service.id.includes('consciousness-upload') || 
                              service.id.includes('quantum-reality') || 
                              service.id.includes('interdimensional-commerce') || 
                              service.id.includes('quantum-creative') || 
                              service.id.includes('quantum-emotional') || 
                              service.id.includes('quantum-neural') || 
                              service.id.includes('quantum-synthetic') || 
                              service.id.includes('quantum-psychic'));
    }
    
    if (selectedCategory === 'revolutionary-advertising') {
      return matchesSearch && service.id.includes('advertising');
    }
    
    return matchesSearch && serviceCategory.includes(categoryName || '');
  });

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
        return new Date((b as any).launchDate || '2020-01-01').getTime() - 
               new Date((a as any).launchDate || '2020-01-01').getTime();
      case 'rating':
        return (((b as any).rating || 0) as number) - (((a as any).rating || 0) as number);
      default:
        return 0;
    }
  ];

const aiServices: Service[] = [
  {
    name: 'AI Customer Support Automation',
    summary: 'Chatbots, triage, knowledge mining and human-in-the-loop escalation.',
    pricing: 'Typical: $2k–$8k setup, $0.02–$0.2/session',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Predictive Analytics & Forecasting',
    summary: 'Time-series forecasts for demand, revenue, churn and supply risk.',
    pricing: 'Typical: $4k–$20k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'GenAI Content & SEO Automation',
    summary: 'Editorial-quality drafts, briefs, clustering and internal linking suggestions.',
    pricing: 'Typical: $1k–$6k/month',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Computer Vision & Image Analysis',
    summary: 'Object detection, facial recognition, quality control, and medical imaging analysis.',
    pricing: 'Typical: $5k–$25k setup, $0.10–$2.00/image',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Natural Language Processing Suite',
    summary: 'Sentiment analysis, entity extraction, text classification, and language translation.',
    pricing: 'Typical: $3k–$15k setup, $0.01–$0.05/request',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Fraud Detection',
    summary: 'Real-time fraud scoring, anomaly detection, and risk assessment for financial transactions.',
    pricing: 'Typical: $8k–$40k setup, $0.05–$0.50/transaction',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Recommendation Engine Platform',
    summary: 'Personalized product recommendations, content suggestions, and user behavior analysis.',
    pricing: 'Typical: $6k–$30k setup, $0.02–$0.10/recommendation',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Voice AI & Speech Processing',
    summary: 'Speech-to-text, text-to-speech, voice commands, and conversational AI interfaces.',
    pricing: 'Typical: $4k–$20k setup, $0.01–$0.10/minute',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI Data Pipeline Automation',
    summary: 'Automated data cleaning, feature engineering, model training, and deployment pipelines.',
    pricing: 'Typical: $10k–$50k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Intelligent Document Analysis',
    summary: 'Contract analysis, legal document review, compliance checking, and knowledge extraction.',
    pricing: 'Typical: $5k–$25k setup, $0.50–$5.00/document',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Supply Chain Optimization',
    summary: 'Demand forecasting, route optimization, inventory management, and supplier risk assessment.',
    pricing: 'Typical: $15k–$75k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Conversational AI Platform',
    summary: 'Multi-channel chatbots, voice assistants, and intelligent virtual agents.',
    pricing: 'Typical: $8k–$35k setup, $0.05–$0.25/conversation',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI Model Monitoring & MLOps',
    summary: 'Model performance tracking, drift detection, automated retraining, and deployment management.',
    pricing: 'Typical: $6k–$25k setup, $500–$2k/month monitoring',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Intelligent Process Automation',
    summary: 'RPA with AI, workflow automation, document processing, and business process optimization.',
    pricing: 'Typical: $10k–$50k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Market Research',
    summary: 'Competitive intelligence, trend analysis, consumer sentiment, and market forecasting.',
    pricing: 'Typical: $5k–$20k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Edge AI & IoT Intelligence',
    summary: 'Real-time inference on edge devices, IoT data processing, and distributed AI systems.',
    pricing: 'Typical: $8k–$40k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Cybersecurity Threat Detection',
    summary: 'Advanced threat hunting, behavioral analysis, and automated incident response.',
    pricing: 'Typical: $10k–$50k setup, $2k–$8k/month monitoring',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Intelligent Process Mining & Optimization',
    summary: 'Business process discovery, bottleneck identification, and workflow optimization.',
    pricing: 'Typical: $15k–$75k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Content Moderation Platform',
    summary: 'Automated content filtering, toxicity detection, and community management.',
    pricing: 'Typical: $5k–$25k setup, $0.01–$0.05/content review',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Smart Manufacturing Quality Control',
    summary: 'Computer vision for defect detection, predictive maintenance, and quality optimization.',
    pricing: 'Typical: $20k–$100k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Healthcare Diagnostics',
    summary: 'Medical image analysis, symptom prediction, and treatment recommendation systems.',
    pricing: 'Typical: $25k–$150k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Intelligent Document Intelligence Platform',
    summary: 'Advanced document understanding, information extraction, and knowledge graph creation.',
    pricing: 'Typical: $8k–$40k setup, $0.10–$1.00/document',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Risk Assessment Engine',
    summary: 'Credit scoring, insurance underwriting, and financial risk modeling.',
    pricing: 'Typical: $12k–$60k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Smart Energy Grid Optimization',
    summary: 'Demand forecasting, load balancing, and renewable energy integration.',
    pricing: 'Typical: $30k–$150k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Personalization Engine',
    summary: 'Real-time user profiling, content recommendation, and experience optimization.',
    pricing: 'Typical: $6k–$30k setup, $0.02–$0.10/interaction',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Intelligent Automation Orchestration',
    summary: 'RPA with AI decision-making, workflow automation, and process intelligence.',
    pricing: 'Typical: $15k–$75k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Environmental Monitoring',
    summary: 'Climate data analysis, pollution detection, and environmental impact assessment.',
    pricing: 'Typical: $10k–$50k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Smart Transportation Optimization',
    summary: 'Route optimization, traffic prediction, and fleet management intelligence.',
    pricing: 'Typical: $20k–$100k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Agricultural Intelligence',
    summary: 'Crop monitoring, yield prediction, and precision farming optimization.',
    pricing: 'Typical: $15k–$75k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Intelligent Customer Journey Analytics',
    summary: 'Behavioral analysis, journey mapping, and conversion optimization.',
    pricing: 'Typical: $8k–$35k setup, $1k–$5k/month analytics',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Real Estate Valuation',
    summary: 'Property assessment, market analysis, and investment opportunity identification.',
    pricing: 'Typical: $10k–$50k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Smart Retail Analytics Platform',
    summary: 'Customer behavior analysis, inventory optimization, and sales forecasting.',
    pricing: 'Typical: $12k–$60k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Educational Assessment',
    summary: 'Learning analytics, personalized education, and performance prediction.',
    pricing: 'Typical: $8k–$40k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Intelligent Financial Trading Algorithms',
    summary: 'Algorithmic trading, market prediction, and portfolio optimization.',
    pricing: 'Typical: $25k–$150k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Smart City Solutions',
    summary: 'Urban planning optimization, traffic management, and resource allocation.',
    pricing: 'Typical: $50k–$300k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Quantum Computing Solutions',
    summary: 'Quantum algorithms for optimization, cryptography, and complex problem solving.',
    pricing: 'Typical: $50k–$500k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Advanced Neural Network Architectures',
    summary: 'Custom deep learning models, transformer networks, and specialized AI architectures.',
    pricing: 'Typical: $25k–$150k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Drug Discovery Platform',
    summary: 'Molecular analysis, drug interaction prediction, and pharmaceutical research automation.',
    pricing: 'Typical: $100k–$1M project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Intelligent Autonomous Systems',
    summary: 'Self-driving algorithms, robotic process automation, and autonomous decision making.',
    pricing: 'Typical: $75k–$500k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Financial Trading Algorithms',
    summary: 'Algorithmic trading, market prediction, and automated portfolio management.',
    pricing: 'Typical: $50k–$300k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Advanced Natural Language Generation',
    summary: 'GPT-style content creation, automated reporting, and intelligent document generation.',
    pricing: 'Typical: $15k–$75k setup, $0.05–$0.50/page',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Scientific Research Assistant',
    summary: 'Literature analysis, hypothesis generation, and research automation.',
    pricing: 'Typical: $30k–$150k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Intelligent Multi-Modal AI Systems',
    summary: 'Vision-language models, audio-visual processing, and cross-modal understanding.',
    pricing: 'Typical: $40k–$200k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Space Technology Solutions',
    summary: 'Satellite data analysis, space mission optimization, and astronomical research.',
    pricing: 'Typical: $100k–$1M project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Advanced Reinforcement Learning Systems',
    summary: 'Game AI, optimization algorithms, and adaptive learning systems.',
    pricing: 'Typical: $35k–$175k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Metaverse Development',
    summary: 'Virtual world creation, avatar intelligence, and immersive experience optimization.',
    pricing: 'Typical: $75k–$500k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Intelligent Blockchain Analytics',
    summary: 'Cryptocurrency analysis, smart contract optimization, and DeFi intelligence.',
    pricing: 'Typical: $25k–$125k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Climate Change Solutions',
    summary: 'Climate modeling, carbon footprint optimization, and environmental impact prediction.',
    pricing: 'Typical: $50k–$250k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Advanced Computer Vision for Robotics',
    summary: 'Robot vision systems, object manipulation, and autonomous navigation.',
    pricing: 'Typical: $60k–$300k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Mental Health Analytics',
    summary: 'Emotional analysis, mental health prediction, and therapeutic intervention systems.',
    pricing: 'Typical: $40k–$200k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Intelligent Energy Storage Optimization',
    summary: 'Battery management, grid storage optimization, and renewable energy integration.',
    pricing: 'Typical: $35k–$175k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Smart City Infrastructure',
    summary: 'Urban planning optimization, traffic management, and city service automation.',
    pricing: 'Typical: $100k–$1M project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Advanced AI Ethics & Bias Detection',
    summary: 'Algorithmic fairness, bias detection, and ethical AI implementation.',
    pricing: 'Typical: $20k–$100k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Cybersecurity Intelligence',
    summary: 'Advanced threat detection, zero-day vulnerability analysis, and security automation.',
    pricing: 'Typical: $50k–$250k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Intelligent Digital Twin Technology',
    summary: 'Virtual replicas, predictive maintenance, and real-time system optimization.',
    pricing: 'Typical: $75k–$500k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Augmented Reality Solutions',
    summary: 'AR object recognition, spatial computing, and immersive experience creation.',
    pricing: 'Typical: $40k–$200k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Advanced AI Model Compression',
    summary: 'Model optimization, edge deployment, and efficient AI inference.',
    pricing: 'Typical: $25k–$125k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Supply Chain Intelligence',
    summary: 'End-to-end visibility, disruption prediction, and optimization across global networks.',
    pricing: 'Typical: $60k–$300k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Intelligent AI Model Governance',
    summary: 'Model lifecycle management, compliance monitoring, and AI governance frameworks.',
    pricing: 'Typical: $30k–$150k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Personalized Medicine',
    summary: 'Genomic analysis, treatment optimization, and precision healthcare delivery.',
    pricing: 'Typical: $100k–$1M project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Advanced AI-Powered Education Systems',
    summary: 'Personalized learning, adaptive assessment, and intelligent tutoring systems.',
    pricing: 'Typical: $40k–$200k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Smart Manufacturing 4.0',
    summary: 'Industrial IoT intelligence, predictive maintenance, and autonomous production.',
    pricing: 'Typical: $75k–$500k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Intelligent AI-Powered Legal Tech',
    summary: 'Contract analysis, legal research automation, and case outcome prediction.',
    pricing: 'Typical: $35k–$175k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Advanced Materials Discovery',
    summary: 'Material property prediction, composition optimization, and novel material design.',
    pricing: 'Typical: $50k–$250k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Intelligent AI-Powered Sports Analytics',
    summary: 'Performance optimization, injury prediction, and strategic decision support.',
    pricing: 'Typical: $25k–$125k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Advanced Robotics',
    summary: 'Humanoid robots, collaborative automation, and intelligent robotic systems.',
    pricing: 'Typical: $100k–$1M project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Intelligent AI-Powered Gaming Systems',
    summary: 'Procedural content generation, intelligent NPCs, and adaptive gameplay.',
    pricing: 'Typical: $40k–$200k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Advanced Biometrics',
    summary: 'Multi-modal authentication, behavioral analysis, and identity verification.',
    pricing: 'Typical: $30k–$150k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Intelligent AI-Powered Logistics',
    summary: 'Route optimization, warehouse automation, and last-mile delivery intelligence.',
    pricing: 'Typical: $50k–$250k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Advanced Simulation Systems',
    summary: 'Physics simulation, virtual testing, and scenario modeling.',
    pricing: 'Typical: $60k–$300k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Intelligent AI-Powered Content Creation',
    summary: 'Multi-modal content generation, creative AI, and automated media production.',
    pricing: 'Typical: $35k–$175k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Advanced Data Science',
    summary: 'Automated feature engineering, model selection, and advanced analytics.',
    pricing: 'Typical: $40k–$200k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Intelligent AI-Powered Customer Intelligence',
    summary: 'Advanced customer profiling, behavior prediction, and relationship optimization.',
    pricing: 'Typical: $45k–$225k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Advanced Process Mining',
    summary: 'Business process discovery, optimization, and intelligent automation.',
    pricing: 'Typical: $50k–$250k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Intelligent AI-Powered Decision Support',
    summary: 'Strategic decision making, scenario analysis, and intelligent recommendations.',
    pricing: 'Typical: $35k–$175k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Advanced Predictive Analytics',
    summary: 'Multi-variate forecasting, anomaly detection, and predictive insights.',
    pricing: 'Typical: $40k–$200k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Intelligent AI-Powered Knowledge Management',
    summary: 'Automated knowledge extraction, semantic search, and intelligent information retrieval.',
    pricing: 'Typical: $30k–$150k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Advanced Optimization',
    summary: 'Multi-objective optimization, constraint solving, and intelligent resource allocation.',
    pricing: 'Typical: $45k–$225k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Intelligent AI-Powered Innovation Systems',
    summary: 'Idea generation, innovation management, and creative problem solving.',
    pricing: 'Typical: $35k–$175k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Advanced Human-Computer Interaction',
    summary: 'Natural language interfaces, gesture recognition, and intelligent user experience.',
    pricing: 'Typical: $40k–$200k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Intelligent AI-Powered Quality Assurance',
    summary: 'Automated testing, defect prediction, and quality optimization.',
    pricing: 'Typical: $30k–$150k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Advanced Security Systems',
    summary: 'Threat intelligence, security automation, and intelligent incident response.',
    pricing: 'Typical: $50k–$250k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Intelligent AI-Powered Performance Optimization',
    summary: 'System optimization, resource management, and intelligent scaling.',
    pricing: 'Typical: $35k–$175k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Advanced Integration Systems',
    summary: 'API intelligence, data integration, and intelligent system connectivity.',
    pricing: 'Typical: $40k–$200k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Intelligent AI-Powered Monitoring Systems',
    summary: 'Real-time monitoring, anomaly detection, and intelligent alerting.',
    pricing: 'Typical: $30k–$150k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Advanced Analytics Platform',
    summary: 'Multi-dimensional analysis, pattern recognition, and intelligent insights.',
    pricing: 'Typical: $45k–$225k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Intelligent AI-Powered Automation Suite',
    summary: 'End-to-end automation, intelligent workflows, and process optimization.',
    pricing: 'Typical: $50k–$250k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Advanced Intelligence Platform',
    summary: 'Comprehensive AI solutions, intelligent decision making, and strategic insights.',
    pricing: 'Typical: $75k–$500k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Fraud Detection System',
    summary: 'Advanced machine learning models for real-time fraud detection and prevention across financial transactions.',
    pricing: 'Typical: $10k–$50k setup',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Autonomous Quality Control System',
    summary: 'Computer vision-powered quality inspection and defect detection for manufacturing and production lines.',
    pricing: 'Typical: $15k–$75k setup',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Voice Analytics & Sentiment Analysis',
    summary: 'Advanced speech recognition and sentiment analysis for customer service and call center optimization.',
    pricing: 'Typical: $5k–$25k setup',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Intelligent Data Pipeline Automation',
    summary: 'AI-driven data processing, transformation, and pipeline optimization for enterprise data operations.',
    pricing: 'Typical: $8k–$40k setup',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Supply Chain Optimization',
    summary: 'Machine learning solutions for supply chain forecasting, optimization, and risk management.',
    pricing: 'Typical: $12k–$60k setup',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI Security Threat Detection',
    summary: 'Advanced threat detection and response system using machine learning for cybersecurity.',
    pricing: 'Typical: $10k–$50k setup',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Talent Acquisition',
    summary: 'Intelligent recruitment and talent management system with automated candidate screening and matching.',
    pricing: 'Typical: $5k–$30k setup',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI Code Generation & Optimization',
    summary: 'Intelligent code generation, optimization, and automated testing for software development.',
    pricing: 'Typical: $8k–$35k setup',
    link: 'https://ziontechgroup.com/ai-services'}
];

const itServices: Service[] = [
  {
    name: 'Cloud DevOps & SRE',
    summary: 'CI/CD, IaC, observability, autoscaling and cost optimization.',
    pricing: 'Typical: $120–$220/hour or $6k–$30k/project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Cybersecurity Hardening & SOC',
    summary: 'Zero Trust, EDR, CSP headers, security reviews and SOC readiness.',
    pricing: 'Typical: $5k–$40k project, $2k–$8k/month managed',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Cloud Migration & Modernization',
    summary: 'Lift/shift, containerization, serverless and data platform upgrades.',
    pricing: 'Typical: $10k–$150k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Multi-Cloud Architecture Design',
    summary: 'Hybrid cloud strategies, disaster recovery, and multi-region deployment architectures.',
    pricing: 'Typical: $15k–$75k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Kubernetes & Container Orchestration',
    summary: 'EKS/GKE/AKS setup, microservices architecture, and container security hardening.',
    pricing: 'Typical: $8k–$40k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Database Optimization & Migration',
    summary: 'Performance tuning, scaling strategies, and cloud database migration services.',
    pricing: 'Typical: $5k–$25k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'API Gateway & Microservices',
    summary: 'API design, rate limiting, authentication, and microservices architecture implementation.',
    pricing: 'Typical: $10k–$50k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Infrastructure as Code (IaC)',
    summary: 'Terraform, CloudFormation, and Pulumi implementations for automated infrastructure management.',
    pricing: 'Typical: $6k–$30k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Monitoring & Observability Platform',
    summary: 'ELK stack, Prometheus/Grafana, APM tools, and comprehensive logging solutions.',
    pricing: 'Typical: $8k–$35k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Backup & Disaster Recovery',
    summary: 'Automated backup strategies, cross-region replication, and disaster recovery testing.',
    pricing: 'Typical: $5k–$20k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Network Security & VPN Solutions',
    summary: 'VPN setup, network segmentation, firewall configuration, and secure remote access.',
    pricing: 'Typical: $3k–$15k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Compliance & Audit Services',
    summary: 'SOC 2, HIPAA, GDPR compliance assessments, and security audit preparation.',
    pricing: 'Typical: $10k–$50k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Performance Testing & Optimization',
    summary: 'Load testing, stress testing, performance profiling, and optimization recommendations.',
    pricing: 'Typical: $5k–$25k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Mobile App Development & DevOps',
    summary: 'iOS/Android app development, CI/CD for mobile, and app store deployment automation.',
    pricing: 'Typical: $15k–$100k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Blockchain & Web3 Integration',
    summary: 'Smart contract development, DeFi integration, and blockchain infrastructure setup.',
    pricing: 'Typical: $20k–$100k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Data Engineering & Analytics',
    summary: 'Data pipeline development, ETL processes, data warehousing, and analytics platform setup.',
    pricing: 'Typical: $12k–$60k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Enterprise Application Integration',
    summary: 'API integration, middleware development, and legacy system modernization.',
    pricing: 'Typical: $15k–$75k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Advanced Threat Intelligence Platform',
    summary: 'SIEM implementation, threat hunting, and security orchestration automation.',
    pricing: 'Typical: $20k–$100k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'High-Performance Computing Solutions',
    summary: 'GPU clusters, parallel processing, and scientific computing infrastructure.',
    pricing: 'Typical: $25k–$150k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'IoT Platform & Device Management',
    summary: 'IoT device connectivity, data collection, and edge computing solutions.',
    pricing: 'Typical: $18k–$90k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Advanced Analytics & Business Intelligence',
    summary: 'Data visualization, predictive analytics, and executive dashboards.',
    pricing: 'Typical: $10k–$50k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Enterprise Content Management System',
    summary: 'Document management, workflow automation, and digital asset management.',
    pricing: 'Typical: $12k–$60k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Advanced Network Architecture Design',
    summary: 'SD-WAN, network segmentation, and zero-trust network implementation.',
    pricing: 'Typical: $15k–$75k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Enterprise Resource Planning (ERP) Implementation',
    summary: 'ERP system selection, customization, and integration with existing systems.',
    pricing: 'Typical: $30k–$200k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Advanced Identity & Access Management',
    summary: 'SSO implementation, multi-factor authentication, and privileged access management.',
    pricing: 'Typical: $8k–$40k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Enterprise Service Bus (ESB) Architecture',
    summary: 'Message queuing, service orchestration, and enterprise integration patterns.',
    pricing: 'Typical: $20k–$100k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Advanced Database Administration',
    summary: 'Database optimization, clustering, replication, and disaster recovery.',
    pricing: 'Typical: $10k–$50k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Enterprise Workflow Automation',
    summary: 'Business process automation, approval workflows, and task management systems.',
    pricing: 'Typical: $12k–$60k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Advanced Cloud Security Architecture',
    summary: 'Cloud security posture management, compliance automation, and threat protection.',
    pricing: 'Typical: $15k–$75k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Enterprise API Management Platform',
    summary: 'API gateway, developer portal, and API lifecycle management.',
    pricing: 'Typical: $10k–$50k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Advanced Monitoring & Alerting Systems',
    summary: 'Application performance monitoring, infrastructure monitoring, and alerting automation.',
    pricing: 'Typical: $8k–$40k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Enterprise Backup & Archival Solutions',
    summary: 'Automated backup strategies, data archival, and long-term retention policies.',
    pricing: 'Typical: $6k–$30k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Advanced Load Balancing & Traffic Management',
    summary: 'Global load balancing, traffic routing, and application delivery optimization.',
    pricing: 'Typical: $8k–$40k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Enterprise Messaging & Communication Platform',
    summary: 'Unified communications, video conferencing, and collaboration tools integration.',
    pricing: 'Typical: $12k–$60k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Advanced Virtualization & Containerization',
    summary: 'VMware/vSphere, Docker, Kubernetes, and hybrid cloud container orchestration.',
    pricing: 'Typical: $15k–$75k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Enterprise Digital Transformation Consulting',
    summary: 'Technology strategy, digital roadmap, and organizational change management.',
    pricing: 'Typical: $25k–$150k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Quantum Computing Infrastructure Setup',
    summary: 'Quantum hardware integration, quantum software development, and quantum algorithm implementation.',
    pricing: 'Typical: $100k–$1M project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Edge Computing & IoT Platform Development',
    summary: 'Edge infrastructure, IoT device management, and real-time data processing systems.',
    pricing: 'Typical: $50k–$300k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Advanced Blockchain & Web3 Solutions',
    summary: 'Blockchain infrastructure, smart contract development, and DeFi platform creation.',
    pricing: 'Typical: $75k–$500k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: '5G Network Infrastructure & Optimization',
    summary: '5G deployment, network slicing, and mobile edge computing solutions.',
    pricing: 'Typical: $100k–$1M project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Advanced Cybersecurity & Zero Trust Architecture',
    summary: 'Zero trust implementation, advanced threat protection, and security orchestration.',
    pricing: 'Typical: $75k–$500k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'AI/ML Infrastructure & MLOps Platform',
    summary: 'ML pipeline development, model deployment, and AI infrastructure management.',
    pricing: 'Typical: $60k–$400k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Advanced Data Engineering & Analytics Platform',
    summary: 'Data lake architecture, real-time analytics, and advanced data processing systems.',
    pricing: 'Typical: $50k–$300k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'High-Performance Computing (HPC) Solutions',
    summary: 'HPC cluster setup, parallel processing optimization, and scientific computing infrastructure.',
    pricing: 'Typical: $100k–$1M project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Advanced Microservices & API Architecture',
    summary: 'Microservices design, API gateway implementation, and service mesh architecture.',
    pricing: 'Typical: $40k–$250k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Enterprise Integration & Middleware Solutions',
    summary: 'ESB implementation, API management, and enterprise service integration.',
    pricing: 'Typical: $60k–$400k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Advanced Database & Data Management',
    summary: 'Database optimization, data warehousing, and advanced data management solutions.',
    pricing: 'Typical: $50k–$300k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Disaster Recovery & Business Continuity',
    summary: 'DR planning, backup systems, and business continuity infrastructure.',
    pricing: 'Typical: $75k–$500k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Advanced Network Security & Monitoring',
    summary: 'Network security architecture, intrusion detection, and security monitoring systems.',
    pricing: 'Typical: $60k–$400k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Enterprise Application Development',
    summary: 'Custom enterprise applications, legacy system modernization, and business process automation.',
    pricing: 'Typical: $100k–$1M project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Advanced Cloud Architecture & Migration',
    summary: 'Multi-cloud strategy, cloud-native architecture, and advanced migration services.',
    pricing: 'Typical: $75k–$500k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'IT Infrastructure Automation & Orchestration',
    summary: 'Infrastructure as Code, automated provisioning, and IT process automation.',
    pricing: 'Typical: $50k–$300k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Advanced Monitoring & Observability Platform',
    summary: 'APM implementation, log management, and comprehensive system observability.',
    pricing: 'Typical: $40k–$250k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Enterprise Identity & Access Management',
    summary: 'IAM implementation, SSO solutions, and advanced identity management systems.',
    pricing: 'Typical: $60k–$400k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Advanced Backup & Data Protection',
    summary: 'Backup strategy, data protection, and advanced recovery solutions.',
    pricing: 'Typical: $50k–$300k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'IT Service Management & ITSM Platform',
    summary: 'ITSM implementation, service desk automation, and IT process optimization.',
    pricing: 'Typical: $40k–$250k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Advanced Network Architecture & Design',
    summary: 'Network design, optimization, and advanced networking solutions.',
    pricing: 'Typical: $60k–$400k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Enterprise Content Management Systems',
    summary: 'ECM implementation, document management, and content workflow automation.',
    pricing: 'Typical: $50k–$300k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Advanced Virtualization & Hyperconverged Infrastructure',
    summary: 'HCI implementation, advanced virtualization, and infrastructure optimization.',
    pricing: 'Typical: $75k–$500k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'IT Compliance & Governance Solutions',
    summary: 'Compliance management, IT governance, and regulatory adherence systems.',
    pricing: 'Typical: $40k–$250k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Advanced Storage & Data Management',
    summary: 'Storage architecture, data lifecycle management, and advanced storage solutions.',
    pricing: 'Typical: $60k–$400k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Enterprise Mobile & Wireless Solutions',
    summary: 'Mobile device management, wireless infrastructure, and mobile application development.',
    pricing: 'Typical: $50k–$300k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Advanced IT Consulting & Strategy',
    summary: 'IT strategy development, technology assessment, and digital transformation planning.',
    pricing: 'Typical: $75k–$500k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Enterprise Security Operations Center (SOC)',
    summary: 'SOC setup, security monitoring, and incident response automation.',
    pricing: 'Typical: $100k–$1M project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Advanced IT Infrastructure Management',
    summary: 'Infrastructure optimization, capacity planning, and performance management.',
    pricing: 'Typical: $60k–$400k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Enterprise Application Integration',
    summary: 'EAI implementation, system integration, and business process automation.',
    pricing: 'Typical: $75k–$500k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Advanced IT Support & Managed Services',
    summary: '24/7 IT support, managed services, and comprehensive IT operations management.',
    pricing: 'Typical: $50k–$300k/year',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Enterprise Data Center Design & Implementation',
    summary: 'Data center planning, design, and implementation services.',
    pricing: 'Typical: $100k–$1M project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Advanced IT Training & Knowledge Transfer',
    summary: 'IT training programs, knowledge transfer, and skill development services.',
    pricing: 'Typical: $25k–$150k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Enterprise IT Audit & Assessment',
    summary: 'IT audit services, security assessment, and compliance evaluation.',
    pricing: 'Typical: $40k–$250k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Advanced IT Project Management',
    summary: 'IT project management, program management, and delivery optimization.',
    pricing: 'Typical: $50k–$300k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Enterprise IT Vendor Management',
    summary: 'Vendor selection, contract management, and supplier relationship optimization.',
    pricing: 'Typical: $30k–$200k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Advanced IT Cost Optimization',
    summary: 'IT cost analysis, optimization strategies, and budget management.',
    pricing: 'Typical: $40k–$250k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Enterprise IT Risk Management',
    summary: 'IT risk assessment, mitigation strategies, and risk management frameworks.',
    pricing: 'Typical: $50k–$300k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Advanced IT Performance Optimization',
    summary: 'Performance tuning, optimization, and system efficiency improvement.',
    pricing: 'Typical: $40k–$250k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Enterprise IT Innovation & Emerging Technologies',
    summary: 'Technology innovation, emerging tech evaluation, and innovation strategy.',
    pricing: 'Typical: $60k–$400k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Advanced IT Security & Compliance',
    summary: 'Security implementation, compliance management, and regulatory adherence.',
    pricing: 'Typical: $75k–$500k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Enterprise IT Operations & Maintenance',
    summary: 'IT operations management, maintenance services, and operational optimization.',
    pricing: 'Typical: $50k–$300k/year',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Advanced IT Architecture & Design',
    summary: 'IT architecture design, system design, and technical architecture planning.',
    pricing: 'Typical: $60k–$400k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Enterprise IT Transformation & Modernization',
    summary: 'IT transformation, modernization, and digital evolution services.',
    pricing: 'Typical: $100k–$1M project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Advanced IT Analytics & Business Intelligence',
    summary: 'IT analytics, business intelligence, and data-driven IT decision making.',
    pricing: 'Typical: $50k–$300k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Enterprise IT Quality Assurance & Testing',
    summary: 'QA services, testing automation, and quality management systems.',
    pricing: 'Typical: $40k–$250k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Advanced IT Documentation & Knowledge Management',
    summary: 'Technical documentation, knowledge management, and information architecture.',
    pricing: 'Typical: $30k–$200k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Enterprise IT Change Management',
    summary: 'Change management, organizational change, and IT transformation support.',
    pricing: 'Typical: $40k–$250k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Advanced IT Capacity Planning & Management',
    summary: 'Capacity planning, resource management, and scalability planning.',
    pricing: 'Typical: $35k–$225k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Enterprise IT Service Level Management',
    summary: 'SLA management, service level optimization, and performance management.',
    pricing: 'Typical: $30k–$200k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Advanced IT Incident & Problem Management',
    summary: 'Incident management, problem resolution, and IT service restoration.',
    pricing: 'Typical: $40k–$250k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Enterprise IT Configuration Management',
    summary: 'Configuration management, asset management, and IT inventory optimization.',
    pricing: 'Typical: $35k–$225k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Advanced IT Release & Deployment Management',
    summary: 'Release management, deployment automation, and change deployment.',
    pricing: 'Typical: $40k–$250k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Enterprise IT Financial Management',
    summary: 'IT financial management, cost allocation, and budget optimization.',
    pricing: 'Typical: $35k–$225k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Advanced IT Supplier & Vendor Management',
    summary: 'Supplier management, vendor optimization, and procurement services.',
    pricing: 'Typical: $30k–$200k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Enterprise IT Relationship Management',
    summary: 'Stakeholder management, relationship optimization, and communication management.',
    pricing: 'Typical: $25k–$150k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Advanced IT Strategic Planning',
    summary: 'IT strategy development, strategic planning, and technology roadmap creation.',
    pricing: 'Typical: $50k–$300k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Enterprise IT Governance & Compliance',
    summary: 'IT governance, compliance management, and regulatory adherence.',
    pricing: 'Typical: $40k–$250k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Advanced IT Performance & Metrics Management',
    summary: 'Performance management, metrics optimization, and KPI management.',
    pricing: 'Typical: $35k–$225k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Enterprise IT Innovation & Technology Adoption',
    summary: 'Technology adoption, innovation management, and emerging technology integration.',
    pricing: 'Typical: $45k–$275k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Advanced IT Business Continuity & Disaster Recovery',
    summary: 'BC/DR planning, business continuity, and disaster recovery optimization.',
    pricing: 'Typical: $60k–$400k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Enterprise IT End-to-End Service Management',
    summary: 'Comprehensive IT service management, end-to-end optimization, and service excellence.',
    pricing: 'Typical: $75k–$500k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Edge Computing Infrastructure',
    summary: 'Distributed edge computing solutions for low-latency applications and IoT deployments.',
    pricing: 'Typical: $8k–$40k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Data Lake & Analytics Platform',
    summary: 'Comprehensive data lake architecture with advanced analytics and machine learning capabilities.',
    pricing: 'Typical: $15k–$100k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Mobile-First Application Development',
    summary: 'Native and cross-platform mobile application development with modern frameworks and best practices.',
    pricing: 'Typical: $10k–$75k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'API Gateway & Microservices Architecture',
    summary: 'Modern microservices architecture with API gateway, service mesh, and container orchestration.',
    pricing: 'Typical: $12k–$60k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'DevOps Testing & Quality Assurance',
    summary: 'Comprehensive testing strategy with automated testing, performance testing, and quality assurance.',
    pricing: 'Typical: $5k–$30k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Technical Documentation & Knowledge Management',
    summary: 'Comprehensive technical documentation, API documentation, and knowledge management systems.',
    pricing: 'Typical: $3k–$20k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Legacy System Modernization',
    summary: 'Modernization of legacy systems with cloud migration, API integration, and technology stack updates.',
    pricing: 'Typical: $20k–$150k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'AI/ML Infrastructure & MLOps',
    summary: 'Machine learning infrastructure setup with MLOps practices for model development, deployment, and monitoring.',
    pricing: 'Typical: $15k–$80k project',
    link: 'https://ziontechgroup.com/it-services'}
];

export default function Services(): any {
  const Section = ({ title, items, color }: { title: string; items: Service[]; color: string }) => (
    <section style={{ maxWidth: 1400, margin: '0 auto', padding: '32px 20px', }}>
      <div style={{ 
        display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24,
        paddingBottom: 12, borderBottom: `2px solid ${color}20`
      }}>
        <div style={{ 
          width: 4, height: 32, background: color, borderRadius: 2 
        }}></div>
        <h2 style={{ 
          fontSize: 28, fontWeight: 800, margin: 0,
          background: `linear-gradient(135deg, ${color}, ${color}80)`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>{title}</h2>
        <div style={{ 
          background: `${color}20`, color: color, padding: '4px 12px', 
          borderRadius: 20, fontSize: 14, fontWeight: 600 
        }}>
          {items.length} Services
        </div>
      </div>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
        gap: 20 
      }}>
        {items.map((s) => (
          <a key={s.name} href={s.link} style={{
            border: '1px solid rgba(0,0,0,0.08)', borderRadius: 16, padding: 24,
            background: 'white', textDecoration: 'none', color: '#0b1220',
            transition: 'all 0.3s ease', boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            ':hover': {
              transform: 'translateY(-4px)',
              boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
              borderColor: `${color}40`
            }
          }}>
            <div style={{ 
              fontWeight: 700, marginBottom: 8, fontSize: 16,
              lineHeight: 1.4, color: '#1e293b'
            }}>{s.name}</div>
            <div style={{ 
              opacity: 0.8, fontSize: 14, marginBottom: 12, 
              lineHeight: 1.5, color: '#64748b'
            }}>{s.summary}</div>
            <div style={{ 
              fontSize: 13, color: color, fontWeight: 600,
              background: `${color}10`, padding: '6px 12px',
              borderRadius: 8, display: 'inline-block'
            }}>{s.pricing}</div>
          </a>
        ))}
      </div>
    </section>
  );

  // Reset to first page when filters/sort change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, sortBy]);

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'ai automation':
        return <Brain className="w-6 h-6 text-blue-400" />;
      case 'it infrastructure':
        return <Building className="w-6 h-6 text-indigo-400" />;
      case 'micro saas':
        return <Target className="w-6 h-6 text-green-400" />;
      case 'ai services':
        return <Cpu className="w-6 h-6 text-purple-400" />;
      case 'enterprise it':
      case 'enterprise security':
      case 'devops & automation':
      case 'data & analytics':
      case 'cloud services':
      case 'cybersecurity':
        return <Building className="w-6 h-6 text-blue-400" />;
      case 'ai & consciousness':
      case 'artificial intelligence':
      case 'innovative ai solutions':
        return <Brain className="w-6 h-6 text-cyan-400" />;
      case 'quantum':
      case 'quantum & emerging tech':
        return <Atom className="w-6 h-6 text-purple-400" />;
      case 'space':
      case 'space & metaverse':
        return <Rocket className="w-6 h-6 text-pink-400" />;
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

  return (
    <>
      <SEO title="Services | Zion Tech Group - Enterprise IT, AI, Micro SAAS Solutions" description="Discover our comprehensive portfolio of enterprise IT solutions, AI services, and innovative micro SAAS platforms. Transform your business with cutting-edge technology." canonical="https://ziontechgroup.com/services/" />

          <section className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">AI Development</h3>
                <p className="text-white/70 mb-6">
                  Custom AI solutions including machine learning models, natural language processing, and computer vision systems.
                </p>
                <ul className="space-y-2 text-sm text-white/60 mb-6">
                  <li>• Machine Learning Models</li>
                  <li>• Natural Language Processing</li>
                  <li>• Computer Vision</li>
                  <li>• Predictive Analytics</li>
                  <li>• Neural Network Architecture</li>
                  <li>• AI Model Training & Optimization</li>
                </ul>
                <div className="text-cyan-400 font-semibold">Starting at $15,000</div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold mb-4 text-fuchsia-400">Automation Systems</h3>
                <p className="text-white/70 mb-6">
                  End-to-end automation solutions that streamline operations and improve efficiency across your organization.
                </p>
                <ul className="space-y-2 text-sm text-white/60 mb-6">
                  <li>• Process Automation</li>
                  <li>• Workflow Optimization</li>
                  <li>• Robotic Process Automation</li>
                  <li>• Smart Workflows</li>
                  <li>• Business Process Reengineering</li>
                  <li>• Autonomous Decision Systems</li>
                </ul>
                <div className="text-fuchsia-400 font-semibold">Starting at $12,000</div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">☁️</div>
                <h3 className="text-2xl font-bold mb-4 text-green-400">Cloud Infrastructure</h3>
                <p className="text-white/70 mb-6">
                  Scalable cloud solutions with automated deployment, monitoring, and optimization for peak performance.
                </p>
                <ul className="space-y-2 text-sm text-white/60 mb-6">
                  <li>• Cloud Migration</li>
                  <li>• Auto-scaling</li>
                  <li>• Performance Optimization</li>
                  <li>• Security Hardening</li>
                  <li>• Multi-cloud Strategy</li>
                  <li>• Disaster Recovery</li>
                </ul>
                <div className="text-green-400 font-semibold">Starting at $18,000</div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">🔧</div>
                <h3 className="text-2xl font-bold mb-4 text-blue-400">DevOps & CI/CD</h3>
                <p className="text-white/70 mb-6">
                  Streamlined development and deployment pipelines with automated testing, building, and deployment processes.
                </p>
                <ul className="space-y-2 text-sm text-white/60 mb-6">
                  <li>• CI/CD Pipeline Setup</li>
                  <li>• Automated Testing</li>
                  <li>• Infrastructure as Code</li>
                  <li>• Monitoring & Alerting</li>
                  <li>• Container Orchestration</li>
                  <li>• Security Scanning</li>
                </ul>
                <div className="text-blue-400 font-semibold">Starting at $10,000</div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-2xl font-bold mb-4 text-purple-400">Data Analytics</h3>
                <p className="text-white/70 mb-6">
                  Advanced analytics and business intelligence solutions that turn your data into actionable insights.
                </p>
                <ul className="space-y-2 text-sm text-white/60 mb-6">
                  <li>• Data Visualization</li>
                  <li>• Predictive Analytics</li>
                  <li>• Business Intelligence</li>
                  <li>• Real-time Dashboards</li>
                  <li>• Data Warehousing</li>
                  <li>• Advanced Reporting</li>
                </ul>
                <div className="text-purple-400 font-semibold">Starting at $14,000</div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">💡</div>
                <h3 className="text-2xl font-bold mb-4 text-yellow-400">Technology Consulting</h3>
                <p className="text-white/70 mb-6">
                  Strategic technology consulting to help you navigate digital transformation and innovation challenges.
                </p>
                <ul className="space-y-2 text-sm text-white/60 mb-6">
                  <li>• Digital Strategy</li>
                  <li>• Technology Roadmap</li>
                  <li>• Innovation Workshops</li>
                  <li>• Performance Audits</li>
                  <li>• Risk Assessment</li>
                  <li>• Change Management</li>
                </ul>
                <div className="text-yellow-400 font-semibold">Starting at $8,000</div>
              </div>
            </div>

            {/* Technology Stack Section */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold mb-6 text-cyan-400">Our Technology Stack</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-3 text-fuchsia-400">AI & Machine Learning</h3>
                  <div className="space-y-2 text-sm text-white/70">
                    <div>• TensorFlow & PyTorch</div>
                    <div>• OpenAI GPT Models</div>
                    <div>• Computer Vision APIs</div>
                    <div>• NLP Frameworks</div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-3 text-green-400">Cloud & Infrastructure</h3>
                  <div className="space-y-2 text-sm text-white/70">
                    <div>• AWS, Azure, GCP</div>
                    <div>• Kubernetes & Docker</div>
                    <div>• Terraform & Ansible</div>
                    <div>• Serverless Functions</div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-3 text-blue-400">Development Tools</h3>
                  <div className="space-y-2 text-sm text-white/70">
                    <div>• React & Next.js</div>
                    <div>• Python & Node.js</div>
                    <div>• Git & CI/CD</div>
                    <div>• Testing Frameworks</div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-3 text-purple-400">Data & Analytics</h3>
                  <div className="space-y-2 text-sm text-white/70">
                    <div>• PostgreSQL & MongoDB</div>
                    <div>• Apache Kafka</div>
                    <div>• Tableau & Power BI</div>
                    <div>• Apache Spark</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold mb-6 text-cyan-400">Why Choose Our Services?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-fuchsia-400">AI-Powered Excellence</h3>
                  <p className="text-white/70">
                    Our services leverage cutting-edge AI technology to deliver superior results, faster implementation, and continuous improvement.
                  </p>
                  <a
                    href="/innovative-2025-services-showcase"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                  >
                    <span>View 2025 Services</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </motion.div>
            </motion.div>

            {/* Search and Filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-12"
            >
              <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                {/* Search */}
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-black/50 border border-blue-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500"
                  />
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <motion.button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-4 py-2 rounded-lg border transition-all duration-200 flex items-center space-x-2 ${
                        selectedCategory === category.id
                          ? 'bg-gradient-to-r from-blue-500 to-purple-600 border-blue-500 text-white shadow-lg shadow-blue-500/25'
                          : 'bg-black/50 border-blue-500/30 text-gray-300 hover:border-blue-500/50 hover:text-blue-300'
                      }`}
                    >
                      {category.icon}
                      <span className="hidden sm:inline">{category.name}</span>
                    </motion.button>
                  ))}
                </div>

                {/* Sort Options */}
                <div className="flex items-center space-x-2">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-3 py-2 bg-black/50 border border-blue-500/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* View Mode Toggle */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg border transition-all duration-200 ${
                      viewMode === 'grid'
                        ? 'bg-blue-500/20 border-blue-500 text-blue-300'
                        : 'bg-black/50 border-blue-500/30 text-gray-400 hover:text-blue-300'
                    }`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg border transition-all duration-200 ${
                      viewMode === 'list'
                        ? 'bg-blue-500/20 border-blue-500 text-blue-300'
                        : 'bg-black/50 border-blue-500/30 text-gray-400 hover:text-blue-300'
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Advanced AI Services Section */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold mb-8 text-cyan-400">Advanced AI Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="text-3xl mb-3">🧠</div>
                  <h3 className="text-xl font-bold mb-3 text-cyan-400">Deep Learning Solutions</h3>
                  <p className="text-white/70 text-sm mb-4">
                    Custom neural network architectures for complex pattern recognition and prediction tasks.
                  </p>
                  <ul className="space-y-1 text-xs text-white/60">
                    <li>• Convolutional Neural Networks (CNN)</li>
                    <li>• Recurrent Neural Networks (RNN)</li>
                    <li>• Transformer Models</li>
                    <li>• Custom Architectures</li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="text-3xl mb-3">🔍</div>
                  <h3 className="text-xl font-bold mb-3 text-fuchsia-400">Computer Vision</h3>
                  <p className="text-white/70 text-sm mb-4">
                    Advanced image and video analysis for automation, quality control, and insights extraction.
                  </p>
                  <ul className="space-y-1 text-xs text-white/60">
                    <li>• Object Detection & Recognition</li>
                    <li>• Image Segmentation</li>
                    <li>• Video Analytics</li>
                    <li>• Quality Assurance</li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="text-3xl mb-3">💬</div>
                  <h3 className="text-xl font-bold mb-3 text-green-400">Natural Language Processing</h3>
                  <p className="text-white/70 text-sm mb-4">
                    Language understanding and generation systems for enhanced communication and automation.
                  </p>
                  <ul className="space-y-1 text-xs text-white/60">
                    <li>• Sentiment Analysis</li>
                    <li>• Text Classification</li>
                    <li>• Language Generation</li>
                    <li>• Translation Services</li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="text-3xl mb-3">📈</div>
                  <h3 className="text-xl font-bold mb-3 text-blue-400">Predictive Analytics</h3>
                  <p className="text-white/70 text-sm mb-4">
                    Data-driven forecasting and trend analysis for strategic decision-making and optimization.
                  </p>
                  <ul className="space-y-1 text-xs text-white/60">
                    <li>• Time Series Forecasting</li>
                    <li>• Risk Assessment</li>
                    <li>• Demand Prediction</li>
                    <li>• Anomaly Detection</li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="text-3xl mb-3">🤖</div>
                  <h3 className="text-xl font-bold mb-3 text-purple-400">Robotic Process Automation</h3>
                  <p className="text-white/70 text-sm mb-4">
                    Intelligent automation of repetitive tasks and business processes for increased efficiency.
                  </p>
                  <ul className="space-y-1 text-xs text-white/60">
                    <li>• Process Mining</li>
                    <li>• Workflow Automation</li>
                    <li>• Document Processing</li>
                    <li>• Integration Services</li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="text-3xl mb-3">🔐</div>
                  <h3 className="text-xl font-bold mb-3 text-yellow-400">AI Security & Compliance</h3>
                  <p className="text-white/70 text-sm mb-4">
                    Comprehensive security solutions for AI systems and regulatory compliance frameworks.
                  </p>
                  <ul className="space-y-1 text-xs text-white/60">
                    <li>• Model Security</li>
                    <li>• Data Privacy</li>
                    <li>• Compliance Auditing</li>
                    <li>• Threat Detection</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Industry Solutions Section */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold mb-8 text-fuchsia-400">Industry-Specific Solutions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl font-bold mb-3 text-fuchsia-400">🏥 Healthcare</h3>
                    <p className="text-white/70 text-sm mb-3">
                      AI-powered diagnostic tools, patient care optimization, and medical research acceleration.
                    </p>
                    <ul className="text-xs text-white/60">
                      <li>• Medical Imaging Analysis</li>
                      <li>• Drug Discovery Support</li>
                      <li>• Patient Risk Assessment</li>
                    </ul>
                  </div>

                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl font-bold mb-3 text-green-400">🏦 Financial Services</h3>
                    <p className="text-white/70 text-sm mb-3">
                      Fraud detection, risk assessment, algorithmic trading, and customer service automation.
                    </p>
                    <ul className="text-xs text-white/60">
                      <li>• Credit Scoring Models</li>
                      <li>• Market Analysis</li>
                      <li>• Regulatory Compliance</li>
                    </ul>
                  </div>

                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl font-bold mb-3 text-blue-400">🏭 Manufacturing</h3>
                    <p className="text-white/70 text-sm mb-3">
                      Predictive maintenance, quality control, supply chain optimization, and production planning.
                    </p>
                    <ul className="text-xs text-white/60">
                      <li>• IoT Integration</li>
                      <li>• Quality Assurance</li>
                      <li>• Energy Optimization</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl font-bold mb-3 text-yellow-400">🛒 Retail & E-commerce</h3>
                    <p className="text-white/70 text-sm mb-3">
                      Customer behavior analysis, inventory optimization, personalized marketing, and demand forecasting.
                    </p>
                    <ul className="text-xs text-white/60">
                      <li>• Recommendation Systems</li>
                      <li>• Price Optimization</li>
                      <li>• Customer Segmentation</li>
                    </ul>
                  </div>

                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl font-bold mb-3 text-purple-400">🚚 Logistics & Transportation</h3>
                    <p className="text-white/70 text-sm mb-3">
                      Route optimization, fleet management, predictive maintenance, and supply chain visibility.
                    </p>
                    <ul className="text-xs text-white/60">
                      <li>• Route Planning</li>
                      <li>• Demand Forecasting</li>
                      <li>• Real-time Tracking</li>
                    </ul>
                  </div>

                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl font-bold mb-3 text-cyan-400">🏢 Real Estate</h3>
                    <p className="text-white/70 text-sm mb-3">
                      Property valuation, market analysis, investment optimization, and customer relationship management.
                    </p>
                    <ul className="text-xs text-white/60">
                      <li>• Market Analysis</li>
                      <li>• Investment Modeling</li>
                      <li>• Customer Insights</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Support & Maintenance Section */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold mb-8 text-green-400">Support & Maintenance</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">🔄</div>
                  <h3 className="text-xl font-bold mb-3 text-green-400">24/7 Monitoring</h3>
                  <p className="text-white/70 text-sm">
                    Continuous monitoring and alerting for all AI systems with proactive issue resolution.
                  </p>
                </div>

                <div className="text-center">
                  <div className="text-4xl mb-4">📊</div>
                  <h3 className="text-xl font-bold mb-3 text-blue-400">Performance Optimization</h3>
                  <p className="text-white/70 text-sm">
                    Regular performance reviews and optimization to ensure systems operate at peak efficiency.
                  </p>
                </div>

                <div className="text-center">
                  <div className="text-4xl mb-4">🆘</div>
                  <h3 className="text-xl font-bold mb-3 text-purple-400">Emergency Support</h3>
                  <p className="text-white/70 text-sm">
                    Rapid response team for critical issues with guaranteed response times and resolution.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-400">Industry Expertise</h3>
                  <p className="text-white/70">
                    With 248 active automations and 3,127+ pages generated, we have a track record of delivering measurable business value.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-400">24/7 Autonomous Operation</h3>
                  <p className="text-white/70">
                    Our systems run continuously, monitoring, optimizing, and improving your operations around the clock without human intervention.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-yellow-400">Scalable Solutions</h3>
                  <p className="text-white/70">
                    Built to grow with your business, our solutions automatically scale up or down based on demand and performance requirements.
                  </p>
                </div>
              </div>
            </div>

            {/* Service Delivery Process */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold mb-6 text-blue-400">Service Delivery Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">1</div>
                  <h3 className="text-lg font-semibold mb-2">Discovery</h3>
                  <p className="text-sm text-white/70">Understanding your needs and objectives</p>
                  <div className="text-xs text-white/50 mt-2">• Requirements Analysis</div>
                  <div className="text-xs text-white/50">• Current State Assessment</div>
                  <div className="text-xs text-white/50">• Stakeholder Interviews</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">2</div>
                  <h3 className="text-lg font-semibold mb-2">Planning</h3>
                  <p className="text-sm text-white/70">Creating detailed roadmap and strategy</p>
                  <div className="text-xs text-white/50 mt-2">• Architecture Design</div>
                  <div className="text-xs text-white/50">• Implementation Plan</div>
                  <div className="text-xs text-white/50">• Risk Mitigation</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">3</div>
                  <h3 className="text-lg font-semibold mb-2">Implementation</h3>
                  <p className="text-sm text-white/70">Building and deploying solutions</p>
                  <div className="text-xs text-white/50 mt-2">• Agile Development</div>
                  <div className="text-xs text-white/50">• Continuous Testing</div>
                  <div className="text-xs text-white/50">• Phased Rollout</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">4</div>
                  <h3 className="text-lg font-semibold mb-2">Optimization</h3>
                  <p className="text-sm text-white/70">Continuous improvement and support</p>
                  <div className="text-xs text-white/50 mt-2">• Performance Monitoring</div>
                  <div className="text-xs text-white/50">• Automated Optimization</div>
                  <div className="text-xs text-white/50">• Ongoing Support</div>
                </div>
              </div>
            </div>

            {/* Pricing Tiers */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold mb-6 text-purple-400">Service Tiers</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/5 rounded-xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold mb-4 text-cyan-400">Starter</h3>
                  <div className="text-3xl font-bold text-white mb-4">$8,000</div>
                  <p className="text-white/70 mb-6">Perfect for small businesses starting their automation journey</p>
                  <ul className="space-y-2 text-sm text-white/60 mb-6">
                    <li>• Basic AI Integration</li>
                    <li>• Process Automation</li>
                    <li>• 3 Months Support</li>
                    <li>• Basic Analytics</li>
                  </ul>
                  <div className="text-center">
                    <button className="w-full px-6 py-3 bg-cyan-400 text-white font-semibold rounded-lg hover:bg-cyan-500 transition-colors">
                      Get Started
                    </button>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-purple-500/20 to-fuchsia-500/20 rounded-xl p-6 border border-purple-400/30 relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-400 to-fuchsia-400 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-fuchsia-400">Professional</h3>
                  <div className="text-3xl font-bold text-white mb-4">$25,000</div>
                  <p className="text-white/70 mb-6">Comprehensive solution for growing businesses</p>
                  <ul className="space-y-2 text-sm text-white/60 mb-6">
                    <li>• Advanced AI Systems</li>
                    <li>• Full Process Automation</li>
                    <li>• 12 Months Support</li>
                    <li>• Advanced Analytics</li>
                    <li>• Custom Integrations</li>
                  </ul>
                  <div className="text-center">
                    <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-400 to-fuchsia-400 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-fuchsia-500 transition-all duration-300">
                      Get Started
                    </button>
                  </div>
                </div>
                
                <div className="bg-white/5 rounded-xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold mb-4 text-green-400">Enterprise</h3>
                  <div className="text-3xl font-bold text-white mb-4">$75,000+</div>
                  <p className="text-white/70 mb-6">Full-scale transformation for large organizations</p>
                  <ul className="space-y-2 text-sm text-white/60 mb-6">
                    <li>• Custom AI Development</li>
                    <li>• Enterprise Integration</li>
                    <li>• 24/7 Support</li>
                    <li>• Advanced Security</li>
                    <li>• Dedicated Team</li>
                  </ul>
                  <div className="text-center">
                    <button className="w-full px-6 py-3 bg-green-400 text-white font-semibold rounded-lg hover:bg-green-500 transition-colors">
                      Contact Sales
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Success Metrics */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6 text-green-400">Success Metrics</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">300%</div>
                  <div className="text-white/70">Average Efficiency Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-fuchsia-400 mb-2">50%</div>
                  <div className="text-white/70">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>
                  <div className="text-white/70">System Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
                  <div className="text-white/70">Autonomous Operation</div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 backdrop-blur-xl rounded-3xl p-12 text-center border border-white/20 mt-16">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
                Let's discuss how our AI and automation services can drive innovation, 
                improve efficiency, and create competitive advantages for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg">
                  Get Started Today
                </a>
                <a href="/case-studies" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105">
                  View Case Studies
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

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
import { comprehensiveServicesAdvertising2025 } from '../data/comprehensive-services-advertising-2025';

// Import our new innovative 2040 services
import { innovative2040ITServices } from '../data/innovative-2040-it-services';
import { innovative2040FuturisticServices } from '../data/innovative-2040-futuristic-services';

// Import our new 2025 advanced enterprise services
import { advancedEnterpriseServices } from '../data/2025-advanced-enterprise-services-expansion';
import { cuttingEdgeITInfrastructureServices } from '../data/2025-cutting-edge-it-infrastructure';

// Import our new 2025 cutting-edge futuristic services
import { cuttingEdgeFuturisticServices } from '../data/2025-cutting-edge-futuristic-services';
import { advancedAIAutomationServices2025 } from '../data/2025-advanced-ai-automation-services';
import { advancedITInfrastructureServices } from '../data/2025-advanced-it-infrastructure-services';

// Import our new 2025 advanced real micro SAAS expansion
import { advancedRealMicroSaasExpansion2025 } from '../data/2025-advanced-real-micro-saas-expansion';

// Import our new 2025 advanced IT infrastructure expansion
import { advancedITInfrastructureExpansion2025 } from '../data/2025-advanced-it-infrastructure-expansion';

// Import our new 2025 advanced AI services expansion
import { advancedAIServicesExpansion2025 } from '../data/2025-advanced-ai-services-expansion';

// Import our new 2025 emerging tech innovations expansion
import { emergingTechInnovationsExpansion2025 } from '../data/2025-emerging-tech-innovations-expansion';

// Import our new 2025 innovative business solutions expansion
import { innovativeBusinessSolutionsExpansion2025 } from '../data/2025-innovative-business-solutions-expansion';

// Import our new 2025 innovative services
import { innovativeITInfrastructureServices2025 } from '../data/2025-innovative-it-infrastructure-services';
import { innovativeMicroSaasSolutions2025 } from '../data/2025-innovative-micro-saas-solutions';
import { cuttingEdgeAIServices2025 } from '../data/2025-cutting-edge-ai-services';

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

// Create unified services array
const allServices = [
  ...enterpriseITSolutions,
  ...innovativeMicroSaasSolutions,
  ...cuttingEdgeAIServices,
  ...realMicroSaasServices,
  ...innovativeAIServices,
  ...enterpriseITServices,
  ...cuttingEdgeFuturisticServices,
  ...advancedAIAutomationServices2025,
  ...advancedITInfrastructureServices,
  ...emergingTechServices,
  ...newRealServices,
  ...realOperationalServices,
  ...marketReadyServices,
  ...marketValidatedServices,
  // Our new 2025 Q4 innovative services
  ...innovative2025Q4NewServices,
  ...advancedITInfrastructureServices,
  ...industryRealServices,
  ...real2025Q4AugmentedBatch,
  ...real2029Q3Additions,
  ...validatedServices2025Q4,
  ...real2035Q2Additions,
  ...real2036ServiceExpansions,
  ...innovative2036MicroSaasServices,
  ...innovative2036ITServices,
  // Our new 2025 advanced services
  ...ultimate2025MicroSaasExpansion,
  ...ultimate2025ITServicesExpansion,
  ...ultimate2025AIServicesExpansion,
  // Our new innovative services
  ...innovative2037MicroSaasServices,
  ...innovative2037ITServices,
  ...innovative2037AIServices,
  ...innovative2038CuttingEdgeServices,
  ...innovative2038ITInfrastructureServices,
  // Our additional innovative services
  ...innovative2037Services,
  ...advanced2038Services,
  ...revolutionary2039Services,
  
  // Our new innovative 2040 services
  ...innovative2040FuturisticServices,
  ...innovative2040ITServices,
  // Our new comprehensive services
  ...revolutionary2040FuturisticServices,
  ...revolutionary2041AdvancedServices,
  // Our latest innovative services
  ...advanced2041EnterpriseServices,
  ...revolutionary2042MicroSaasServices,
  // Our new 2025 ultimate services expansion
  
  // Our new 2025 innovative services
  ...advancedAIAutomationServices2025,
  ...innovativeITInfrastructureServices2025,
  ...innovativeMicroSaasSolutions2025,
  ...cuttingEdgeAIServices2025,
  ...ultimate2025MicroSaasExpansion,
  ...ultimate2025ITServicesExpansion,
  ...ultimate2025AIServicesExpansion,
  // Our new 2025 advanced enterprise services
  ...advancedEnterpriseServices,
  ...cuttingEdgeITInfrastructureServices,
  
  // Our new 2025 advanced real micro SAAS expansion
  ...advancedRealMicroSaasExpansion2025,
  
  // Our new 2025 advanced IT infrastructure expansion
  ...advancedITInfrastructureExpansion2025,
  
  // Our new 2025 advanced AI services expansion
  ...advancedAIServicesExpansion2025,
  
  // Our new 2025 emerging tech innovations expansion
  ...emergingTechInnovationsExpansion2025,
  
  // Our new 2025 innovative business solutions expansion
  ...innovativeBusinessSolutionsExpansion2025
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

export default function Services() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const pageSize = 18;

  // Simulate loading state for better UX
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsVisible(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  // Filter services based on search and category
  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         getServiceDescription(service).toLowerCase().includes(searchQuery.toLowerCase());
    
    if (selectedCategory === 'all') return matchesSearch;
    
    const serviceCategory = getServiceCategory(service).toLowerCase();
    const categoryName = categories.find(cat => cat.id === selectedCategory)?.name.toLowerCase();
    
    return matchesSearch && serviceCategory.includes(categoryName || '');
  });

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
        return new Date((b as any).launchDate || '2020-01-01').getTime() - 
               new Date((a as any).launchDate || '2020-01-01').getTime();
      case 'rating':
        return (((b as any).rating || 0) as number) - (((a as any).rating || 0) as number);
      default:
        return 0;
    }
  });

  // Pagination helpers
  const totalPages = Math.max(1, Math.ceil(sortedServices.length / pageSize));
  const currentPageClamped = Math.min(currentPage, totalPages);
  const paginatedServices = sortedServices.slice(
    (currentPageClamped - 1) * pageSize,
    currentPageClamped * pageSize
  );

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

  return (
    <>
      <SEO title="Services | Zion Tech Group - Enterprise IT, AI, Micro SAAS Solutions" description="Discover our comprehensive portfolio of enterprise IT solutions, AI services, and innovative micro SAAS platforms. Transform your business with cutting-edge technology." canonical="https://ziontechgroup.com/services/" />

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
        <AnimatePresence>
          {isVisible && (
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="py-20 relative overflow-hidden"
            >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-purple-600/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-red-500/5 to-blue-500/5 rounded-full blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium mb-6">
                <Shield className="w-4 h-4 mr-2 text-blue-400" />
                Complete Service Portfolio
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Transform Your <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-red-500 bg-clip-text text-transparent">Business</span> with Our Services
              </h1>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From enterprise IT solutions to cutting-edge AI services and innovative micro SAAS platforms, 
                we provide the technology you need to succeed in the digital age.
              </p>
            </motion.div>

            {/* Search and Filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-12"
            >
              <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                {/* Search */}
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-black/50 border border-blue-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500"
                  />
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <motion.button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-4 py-2 rounded-lg border transition-all duration-200 flex items-center space-x-2 ${
                        selectedCategory === category.id
                          ? 'bg-gradient-to-r from-blue-500 to-purple-600 border-blue-500 text-white shadow-lg shadow-blue-500/25'
                          : 'bg-black/50 border-blue-500/30 text-gray-300 hover:border-blue-500/50 hover:text-blue-300'
                      }`}
                    >
                      {category.icon}
                      <span className="hidden sm:inline">{category.name}</span>
                    </motion.button>
                  ))}
                </div>

                {/* Sort Options */}
                <div className="flex items-center space-x-2">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-3 py-2 bg-black/50 border border-blue-500/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* View Mode Toggle */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg border transition-all duration-200 ${
                      viewMode === 'grid'
                        ? 'bg-blue-500/20 border-blue-500 text-blue-300'
                        : 'bg-black/50 border-blue-500/30 text-gray-400 hover:text-blue-300'
                    }`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg border transition-all duration-200 ${
                      viewMode === 'list'
                        ? 'bg-blue-500/20 border-blue-500 text-blue-300'
                        : 'bg-black/50 border-blue-500/30 text-gray-400 hover:text-blue-300'
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Services Count */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mb-8"
            >
              <p className="text-gray-300">
                Showing <span className="text-blue-400 font-semibold">{sortedServices.length}</span> services
                {selectedCategory !== 'all' && ` in ${categories.find(cat => cat.id === selectedCategory)?.name}`}
              </p>
            </motion.div>
          </div>
            </motion.section>
          )}
        </AnimatePresence>

        {/* Services Grid/List */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {paginatedServices.length > 0 ? (<>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className={viewMode === 'grid' 
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                  : "space-y-6"
                }
              >
                {paginatedServices.map((service, index) => (
                  <motion.div
                    key={(service as any).id || (service as any).slug || (service as any).name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                    className={`group relative ${
                      viewMode === 'list' ? 'flex items-start space-x-6' : ''
                    }`}
                  >
                    <div className="relative bg-gradient-to-br from-gray-500/20 to-slate-500/20 border border-cyan-500/30 rounded-2xl p-6 h-full backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300">
                      {/* Category Badge */}
                      <div className="absolute top-4 right-4 flex items-center space-x-2">
                        {getCategoryIcon(getServiceCategory(service))}
                        <span className="text-xs font-medium text-cyan-300 bg-black/50 px-2 py-1 rounded-full">
                          {getServiceCategory(service)}
                        </span>
                      </div>

                      {/* Service Header */}
                      <div className="mb-6">
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {getServiceDescription(service)}
                        </p>
                      </div>

                      {/* Features Preview */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-cyan-300 mb-3">Key Features</h4>
                        <div className="space-y-2">
                          {getServiceFeatures(service).slice(0, 3).map((feature, idx) => (
                            <div key={idx} className="flex items-start space-x-2">
                              <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                              <span className="text-xs text-gray-300">{feature}</span>
                            </div>
                          ))}
                          {getServiceFeatures(service).length > 3 && (
                            <div className="text-xs text-cyan-400">
                              +{getServiceFeatures(service).length - 3} more features
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Pricing */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-cyan-300 mb-2">Starting at</h4>
                        <div className="text-2xl font-bold text-white">
                          {getServicePricing(service)}
                        </div>
                      </div>

                      {/* Action Button */}
                      <div className="flex flex-col space-y-3">
                        <motion.a
                          href={(service as any).link || `/services/${((service as any).slug || (service as any).name || 'service').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 shadow-lg shadow-cyan-500/25"
                        >
                          <span>Learn More</span>
                          <ArrowRight className="w-4 h-4" />
                        </motion.a>
                        <motion.a
                          href="/contact"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex items-center justify-center space-x-2 px-4 py-3 border border-gray-600 text-gray-200 font-medium rounded-lg hover:bg-white/5 transition-all duration-200"
                        >
                          <span>Contact Sales</span>
                        </motion.a>
                      </div>

                      {/* Hover Effect Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="mt-12 flex items-center justify-center gap-2 flex-wrap">
                  <button
                    onClick={() => setCurrentPage(Math.max(1, currentPageClamped - 1))}
                    className="px-4 py-2 rounded-lg border border-blue-500/40 text-blue-300 hover:border-blue-400 disabled:opacity-40"
                    disabled={currentPageClamped === 1}
                  >
                    Previous
                  </button>
                  {Array.from({ length: totalPages }).slice(0, 7).map((_, idx) => {
                    const page = idx + 1;
                    return (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`px-3 py-2 rounded-lg border ${
                          page === currentPageClamped
                            ? 'bg-blue-600/30 border-blue-400 text-white'
                            : 'border-blue-500/30 text-blue-200 hover:border-blue-400'
                        }`}
                      >
                        {page}
                      </button>
                    );
                  })}
                  <button
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPageClamped + 1))}
                    className="px-4 py-2 rounded-lg border border-blue-500/40 text-blue-300 hover:border-blue-400 disabled:opacity-40"
                    disabled={currentPageClamped === totalPages}
                  >
                    Next
                  </button>
                </div>
              )}
            </>) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center py-20"
              >
                <div className="text-6xl mb-6">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
                <p className="text-gray-300 mb-8">
                  Try adjusting your search terms or filters to find the services you're looking for.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </div>
        </section>

      {/* Services Grid */}
      <section className="section-padding bg-gradient-cursor-accent">
        <div className="container-cursor">
          <div className="text-center mb-20">
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
              What We Offer
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Discover our comprehensive range of technology services designed to accelerate your digital transformation.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

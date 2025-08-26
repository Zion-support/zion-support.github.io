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
import { innovative2040FuturisticServices } from '../data/innovative-2040-futuristic-services';
import { advanced2041EnterpriseServices } from '../data/advanced-2041-enterprise-services';
import { revolutionary2042MicroSaasServices } from '../data/revolutionary-2042-micro-saas-services';

// Import our new 2025 advanced services
import { advanced2025MicroSaasExpansion } from '../data/2025-advanced-micro-saas-expansion';
import { advanced2025ITSolutionsExpansion } from '../data/2025-advanced-it-solutions-expansion';
import { advanced2025AIServicesExpansion } from '../data/2025-advanced-ai-services-expansion';
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

// Import additional 2038 services
import { innovative2038ITMicroSaasServices } from '../data/innovative-2038-it-micro-saas-services';

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
  if (typeof service.category === 'string') return service.category;
  if (typeof service.type === 'string') return service.type;
  if (typeof service.industry === 'string') return service.industry;
  if (typeof service.sector === 'string') return service.sector;
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
  if (Array.isArray(service.features)) return service.features;
  if (Array.isArray(service.keyFeatures)) return service.keyFeatures;
  if (Array.isArray(service.capabilities)) return service.capabilities;
  if (Array.isArray(service.highlights)) return service.highlights;
  return [];
};

// Helper function to get service description
const getServiceDescription = (service: any) => {
  if (typeof service.description === 'string') return service.description;
  if (typeof service.tagline === 'string') return service.tagline;
  if (typeof service.summary === 'string') return service.summary;
  if (typeof service.overview === 'string') return service.overview;
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
  // Add our new 2025 cutting-edge innovative services
  ...innovative2025CuttingEdgeServices,
  ...innovative2025EnterpriseSolutions,
  ...innovative2025IndustrySolutions,
  ...validatedServices2025Q4,
  ...real2035Q2Additions,
  ...real2036ServiceExpansions,
  ...innovative2036MicroSaasServices,
  ...innovative2036ITServices,
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
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <Link href="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8">
              ← Back to Home
            </Link>
            
            <section className="text-center mb-16">
              <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Our Services
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Comprehensive AI and automation solutions designed to transform your business and drive innovation
              </p>
              
              {/* Navigation Links */}
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <a href="/about" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-cyan-400/50">
                  About Us
                </a>
                <a href="/case-studies" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-fuchsia-400/50">
                  Case Studies
                </a>
                <a href="/team" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-green-400/50">
                  Our Team
                </a>
                <a href="/contact" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-blue-400/50">
                  Contact Us
                </a>
              </div>
            </section>

            <section className="mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                  <div className="text-4xl mb-4">🤖</div>
                  <h3 className="text-2xl font-bold mb-4 text-cyan-400">AI Development</h3>
                  <p className="text-white/70 mb-6">
                    Custom AI solutions including machine learning models, natural language processing, and computer vision systems.
                  </p>
                  <ul className="space-y-2 text-sm text-white/60">
                    <li>• Machine Learning Models</li>
                    <li>• Natural Language Processing</li>
                    <li>• Computer Vision</li>
                    <li>• Predictive Analytics</li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                  <div className="text-4xl mb-4">⚡</div>
                  <h3 className="text-2xl font-bold mb-4 text-fuchsia-400">Automation Systems</h3>
                  <p className="text-white/70 mb-6">
                    End-to-end automation solutions that streamline operations and improve efficiency across your organization.
                  </p>
                  <ul className="space-y-2 text-sm text-white/60">
                    <li>• Process Automation</li>
                    <li>• Workflow Optimization</li>
                    <li>• Robotic Process Automation</li>
                    <li>• Smart Workflows</li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                  <div className="text-4xl mb-4">☁️</div>
                  <h3 className="text-2xl font-bold mb-4 text-green-400">Cloud Infrastructure</h3>
                  <p className="text-white/70 mb-6">
                    Scalable cloud solutions with automated deployment, monitoring, and optimization for peak performance.
                  </p>
                  <ul className="space-y-2 text-sm text-white/60">
                    <li>• Cloud Migration</li>
                    <li>• Auto-scaling</li>
                    <li>• Performance Optimization</li>
                    <li>• Security Hardening</li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                  <div className="text-4xl mb-4">🔧</div>
                  <h3 className="text-2xl font-bold mb-4 text-blue-400">DevOps & CI/CD</h3>
                  <p className="text-white/70 mb-6">
                    Streamlined development and deployment pipelines with automated testing, building, and deployment processes.
                  </p>
                  <ul className="space-y-2 text-sm text-white/60">
                    <li>• CI/CD Pipeline Setup</li>
                    <li>• Automated Testing</li>
                    <li>• Infrastructure as Code</li>
                    <li>• Monitoring & Alerting</li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                  <div className="text-4xl mb-4">🛡️</div>
                  <h3 className="text-2xl font-bold mb-4 text-yellow-400">Security & Compliance</h3>
                  <p className="text-white/70 mb-6">
                    Comprehensive security solutions with automated threat detection, response, and compliance monitoring.
                  </p>
                  <ul className="space-y-2 text-sm text-white/60">
                    <li>• Threat Detection</li>
                    <li>• Automated Response</li>
                    <li>• Compliance Monitoring</li>
                    <li>• Security Auditing</li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                  <div className="text-4xl mb-4">📊</div>
                  <h3 className="text-2xl font-bold mb-4 text-purple-400">Data Analytics</h3>
                  <p className="text-white/70 mb-6">
                    Advanced analytics and business intelligence solutions that turn data into actionable insights.
                  </p>
                  <ul className="space-y-2 text-sm text-white/60">
                    <li>• Business Intelligence</li>
                    <li>• Data Visualization</li>
                    <li>• Predictive Analytics</li>
                    <li>• Real-time Dashboards</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12 text-white/90">Why Choose Our Services?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-cyan-300 mb-2">Lightning Fast</h3>
                  <p className="text-white/70">Sub-second response times and 99.9% uptime guarantee</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-fuchsia-300 mb-2">Enterprise Security</h3>
                  <p className="text-white/70">Bank-grade security with SOC 2 Type II compliance</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-green-300 mb-2">24/7 Support</h3>
                  <p className="text-white/70">Round-the-clock monitoring and support for your systems</p>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12 text-white/90">Our Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-cyan-300 mb-2">Discovery</h3>
                  <p className="text-white/70 text-sm">Understanding your needs and objectives</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-fuchsia-300 mb-2">Design</h3>
                  <p className="text-white/70 text-sm">Creating the optimal solution architecture</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-green-300 mb-2">Development</h3>
                  <p className="text-white/70 text-sm">Building and testing your solution</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <h3 className="text-lg font-semibold text-blue-300 mb-2">Deployment</h3>
                  <p className="text-white/70 text-sm">Launching and monitoring your system</p>
                </div>
              </div>
            </div>

            <section className="text-center">
              <div className="bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 rounded-2xl p-12 border border-cyan-500/30">
                <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
                <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                  Let's discuss how our autonomous technology solutions can transform your business
                  and drive innovation across your organization.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a 
                    href="/contact" 
                    className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-200 transform hover:scale-105"
                  >
                    Get a Free Consultation
                  </a>
                  <a 
                    href="/case-studies" 
                    className="px-8 py-4 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all duration-200"
                  >
                    View Case Studies
                  </a>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
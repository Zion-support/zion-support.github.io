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
    id: 'customer-success',
    name: 'Customer Success',
    icon: <Users className="w-6 h-6" />,
    color: 'from-blue-500 to-indigo-600',
    description: 'AI-powered customer success and retention'
  },
  {
    id: 'financial-technology',
    name: 'Financial Technology',
    icon: <DollarSign className="w-6 h-6" />,
    color: 'from-green-500 to-emerald-600',
    description: 'Quantum and AI-powered financial solutions'
  },
  {
    id: 'devops-infrastructure',
    name: 'DevOps & Infrastructure',
    icon: <Settings className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-600',
    description: 'AI-powered DevOps and infrastructure automation'
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    icon: <Shield className="w-6 h-6" />,
    color: 'from-red-500 to-pink-600',
    description: 'Quantum-resistant security solutions'
  },
  {
    id: 'sales-marketing',
    name: 'Sales & Marketing',
    icon: <TrendingUp className="w-6 h-6" />,
    color: 'from-orange-500 to-red-600',
    description: 'AI-powered sales and marketing automation'
  },
  {
    id: 'data-analytics',
    name: 'Data & Analytics',
    icon: <BarChart3 className="w-6 h-6" />,
    color: 'from-indigo-500 to-purple-600',
    description: 'Quantum-powered data analytics and insights'
  }
];
=======
import { realVerifiedServices } from '../data/real-verified-services';

export default function ServicesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀', count: 0 },
    { id: 'ai', name: 'AI & Machine Learning', icon: '🧠', count: 0 },
    { id: 'quantum', name: 'Quantum Computing', icon: '⚛️', count: 0 },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: '🛡️', count: 0 },
    { id: 'cloud', name: 'Cloud & DevOps', icon: '☁️', count: 0 },
    { id: 'edge', name: 'Edge Computing', icon: '🌐', count: 0 },
    { id: 'space', name: 'Space Technology', icon: '🚀', count: 0 },
    { id: 'biotech', name: 'Biotechnology', icon: '🧬', count: 0 },
    { id: 'blockchain', name: 'Blockchain', icon: '⛓️', count: 0 },
    { id: 'automation', name: 'Automation', icon: '⚡', count: 0 }
  ];

  const services = [
    {
      id: 'ai-business-intelligence',
      title: 'AI Business Intelligence',
      description: 'Transform data into actionable insights with AI-powered analytics and predictive modeling',
      category: 'ai',
      icon: Brain,
      status: 'active',
      price: '$499/month',
      features: ['AI-powered dashboards', 'Predictive analytics', 'Real-time insights', 'Custom reporting'],
      link: '/ai-business-intelligence'
    },
    {
      id: 'quantum-cybersecurity',
      title: 'Quantum Cybersecurity',
      description: 'Future-proof security with quantum-resistant encryption and AI threat detection',
      category: 'cybersecurity',
      icon: Shield,
      status: 'active',
      price: '$799/month',
      features: ['Quantum-resistant encryption', 'AI threat detection', 'Zero-trust architecture', '24/7 monitoring'],
      link: '/quantum-cybersecurity'
    },
    {
      id: 'ai-customer-experience',
      title: 'AI Customer Experience',
      description: 'Deliver personalized customer experiences at scale with AI-driven insights',
      category: 'ai',
      icon: Users,
      status: 'active',
      price: '$399/month',
      features: ['Customer journey mapping', 'AI personalization', 'Sentiment analysis', 'Predictive support'],
      link: '/ai-customer-experience'
    },
    {
      id: 'edge-computing-orchestration',
      title: 'Edge Computing Orchestration',
      description: 'Deploy and manage applications at the edge with intelligent orchestration',
      category: 'edge',
      icon: Network,
      status: 'active',
      price: '$349/month',
      features: ['Edge node management', 'IoT device management', 'Real-time monitoring', 'Auto-scaling'],
      link: '/edge-computing-orchestration'
    },
    {
      id: 'space-technology',
      title: 'Space Technology Innovation',
      description: 'Accelerate space exploration with cutting-edge technology solutions',
      category: 'space',
      icon: Rocket,
      status: 'beta',
      price: '$2,499/month',
      features: ['Satellite management', 'AI mission planning', 'Quantum communication', 'Resource optimization'],
      link: '/space-technology'
    },
    {
      id: 'neural-interface',
      title: 'Neural Interface Development',
      description: 'Build the future of human-computer interaction with neural interfaces',
      category: 'biotech',
      icon: Brain,
      status: 'beta',
      price: '$899/month',
      features: ['BCI development tools', 'Neural signal processing', 'AI pattern recognition', 'Safety protocols'],
      link: '/neural-interface'
    },
    {
      id: 'quantum-neural-networks',
      title: 'Quantum Neural Networks',
      description: 'Quantum-powered AI with advanced consciousness capabilities',
      category: 'quantum',
      icon: Atom,
      status: 'beta',
      price: '$1,299/month',
      features: ['Quantum algorithms', 'Neural optimization', 'Consciousness simulation', 'Research tools'],
      link: '/quantum-neural-networks'
    },
    {
      id: 'autonomous-devops',
      title: 'Autonomous DevOps',
      description: 'AI-powered DevOps optimization and automation platform',
      category: 'automation',
      icon: Cpu,
      status: 'active',
      price: '$599/month',
      features: ['Auto-deployment', 'Performance monitoring', 'Security scanning', 'Cost optimization'],
      link: '/autonomous-devops'
    },
    {
      id: 'ai-autonomous-business',
      title: 'AI Autonomous Business Manager',
      description: 'Fully autonomous business operations powered by advanced AI',
      category: 'ai',
      icon: Target,
      status: 'beta',
      price: '$1,999/month',
      features: ['Business automation', 'Decision making', 'Resource allocation', 'Performance optimization'],
      link: '/ai-autonomous-business'
    },
    {
      id: 'quantum-financial-trading',
      title: 'Quantum Financial Trading',
      description: 'Quantum computing powered financial analysis and trading strategies',
      category: 'quantum',
      icon: TrendingUp,
      status: 'beta',
      price: '$3,999/month',
      features: ['Quantum algorithms', 'Risk assessment', 'Portfolio optimization', 'Real-time analysis'],
      link: '/quantum-financial-trading'
    },
    {
      id: 'ai-content-generation',
      title: 'AI Content Generation',
      description: 'Automated content creation with AI-powered creativity tools',
      category: 'ai',
      icon: Sparkles,
      status: 'active',
      price: '$299/month',
      features: ['Content automation', 'Creative AI', 'Multi-format output', 'Brand consistency'],
      link: '/ai-content-generation'
    },
    {
      id: 'blockchain-governance',
      title: 'AI Blockchain Governance',
      description: 'Intelligent blockchain governance and decision-making systems',
      category: 'blockchain',
      icon: Code,
      status: 'beta',
      price: '$699/month',
      features: ['Smart contracts', 'Governance automation', 'Voting systems', 'Transparency tools'],
      link: '/ai-blockchain-governance'
    }
  ];

  // Calculate category counts
  const categoryCounts = categories.map(cat => ({
    ...cat,
    count: services.filter(service => cat.id === 'all' || service.category === cat.id).length
  }));

  // Filter services based on search and category
  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Head>
        <title>AI & Technology Services | Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive suite of AI, quantum computing, cybersecurity, and technology services. Transform your business with cutting-edge solutions." />
        <meta property="og:title" content="AI & Technology Services | Zion Tech Group" />
        <meta property="og:description" content="Comprehensive suite of AI, quantum computing, cybersecurity, and technology services." />
        <link rel="canonical" href="https://ziontechgroup.com/services" />
      </Head>

      <SmartHeader />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6">
              AI & Technology Services
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-8">
              Transform your business with our cutting-edge AI, quantum computing, cybersecurity, 
              and digital transformation solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-cyan-400/50 focus:bg-white/15 transition-all"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categoryCounts.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                        : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                    }`}
                  >
                    <span className="mr-2">{category.icon}</span>
                    {category.name}
                    <span className="ml-2 text-xs opacity-75">({category.count})</span>
                  </button>
                ))}
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'grid' ? 'bg-cyan-500/20 text-cyan-400' : 'bg-white/10 text-white/60 hover:bg-white/20'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'list' ? 'bg-cyan-500/20 text-cyan-400' : 'bg-white/10 text-white/60 hover:bg-white/20'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                  className="mt-4 px-6 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </div>
        </section>

                      {/* Enhanced Price */}
                      <div className="mb-6 relative z-10">
                        <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-2xl p-4">
                          <div className="text-3xl font-bold text-white mb-1">${service.price.monthly}</div>
                          <div className="text-sm text-gray-300">/month</div>
                          <div className="text-xs text-cyan-400 font-medium mt-1">{service.price.trialDays}-day free trial</div>
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
                  
                  <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
                    <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                      Ready to Get Started?
                    </span>
                  </h2>
                  
                  <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                    Choose from our comprehensive suite of revolutionary services and start transforming your business today with cutting-edge AI, quantum computing, and emerging technologies.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <motion.a
                      href="/contact"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40"
                    >
                      🚀 Get Started Today
                    </motion.a>
                    <motion.a
                      href="/pricing"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="border-2 border-cyan-500/50 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 backdrop-blur-sm"
                    >
                      💰 View Pricing
                    </motion.a>
                  </div>
                  
                  <div className="mt-10 text-sm text-gray-400">
                    <p>Need help choosing? <a href="/contact" className="text-cyan-400 hover:text-cyan-300 underline">Contact our experts</a> for personalized guidance.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-white/5 to-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and explore how our cutting-edge technology solutions can drive innovation and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                Schedule Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <SmartFooter />
    </div>
  );
}

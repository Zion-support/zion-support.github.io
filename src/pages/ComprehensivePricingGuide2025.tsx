import React from 'react.ts';
import { motion              } from 'framer-motion.ts';
import { Link              } from 'react-router-dom.ts';
import { DollarSign, 
  Star, 
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  CheckCircle, 
=======
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
  Star, 
  Shield, 
  Zap, 
  Brain, 
  Cloud, 
  Lock, 
  TrendingUp,
  Users,
  Globe,
  Cpu,
  Database,
  Rocket,
  Leaf,
  Building,
  BarChart3,
  Code,
  Server,
  Smartphone,
  Network,
  CheckCircle, 
  Target,
  DollarSign,
  Clock,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Twitter,
  Github
             } from 'lucide-react.ts';
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

const ComprehensivePricingGuide2025: React.FC = (): JSX.Element => {
  const serviceCategories = [
    {
      name: 'AI & Machine Learning Services',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      services: [
        {
          name: 'AI Workflow Orchestrator',
          description: 'Intelligent process automation with AI-driven optimization',
          starter: { price: '$99', features: ['Up to 10 workflows', 'Basic AI process mapping', 'Standard integrations'] },
          professional: { price: '$299', features: ['Up to 50 workflows', 'Advanced AI orchestration', 'Custom integrations', 'Priority support'] },
          enterprise: { price: '$799', features: ['Unlimited workflows', 'Custom AI models', 'White-label solution', '24/7 support'] },
          href: '/services/ai-workflow-orchestrator',
          popular: true
        },
        {
          name: 'AI Data Governance Platform',
          description: 'Enterprise data protection and compliance automation',
          starter: { price: '$149', features: ['Up to 10TB data', 'Basic AI discovery', 'GDPR compliance tools'] },
          professional: { price: '$399', features: ['Up to 100TB data', 'Advanced AI discovery', 'Multi-compliance framework'] },
          enterprise: { price: '$999', features: ['Unlimited data', 'Custom AI models', 'White-label solution'] },
          href: '/services/ai-data-governance-platform',
          popular: false
        },
        {
          name: 'AI Customer Experience Analytics',
          description: 'Intelligent analytics and insights for data-driven decisions',
          starter: { price: '$99', features: ['Up to 10K interactions', 'Basic sentiment analysis', 'Standard reporting'] },
          professional: { price: '$299', features: ['Up to 100K interactions', 'Advanced AI analytics', 'Full journey mapping'] },
          enterprise: { price: '$799', features: ['Unlimited interactions', 'Custom AI models', 'White-label solution'] },
          href: '/services/ai-customer-experience-analytics',
          popular: false
        },
        {
          name: 'AI Sales Assistant',
          description: 'Intelligent lead qualification and personalized outreach',
          starter: { price: '$199', features: ['Basic lead scoring', 'Email automation', 'Standard integrations'] },
          professional: { price: '$399', features: ['Advanced lead scoring', 'Multi-channel automation', 'Custom integrations'] },
          enterprise: { price: '$999', features: ['Custom AI models', 'White-label solution', 'Dedicated support'] },
          href: '/services/ai-sales-assistant',
          popular: false
        }
      ]
    },
    {
      name: 'IT & Infrastructure Solutions',
      icon: Server,
      color: 'from-blue-500 to-cyan-500',
      services: [
        {
          name: 'Cloud DevOps Platform',
          description: 'Streamlined cloud infrastructure and deployment automation',
          starter: { price: '$299', features: ['Basic CI/CD', 'Standard monitoring', 'Email support'] },
          professional: { price: '$599', features: ['Advanced CI/CD', 'Custom monitoring', 'Priority support'] },
          enterprise: { price: '$1,299', features: ['Custom solutions', 'White-label', '24/7 support'] },
          href: '/services/cloud-devops',
          popular: false
        },
        {
          name: 'IT Infrastructure Management',
          description: 'Comprehensive IT infrastructure monitoring and optimization',
          starter: { price: '$399', features: ['Basic monitoring', 'Standard support', 'Basic reporting'] },
          professional: { price: '$799', features: ['Advanced monitoring', 'Priority support', 'Custom dashboards'] },
          enterprise: { price: '$1,999', features: ['Custom solutions', 'Dedicated support', 'SLA guarantees'] },
          href: '/services/it-infrastructure',
          popular: false
        },
        {
          name: 'Zero Trust Network Access',
          description: 'Advanced network security with identity-based access control',
          starter: { price: '$249', features: ['Basic access control', 'Standard security', 'Email support'] },
          professional: { price: '$499', features: ['Advanced access control', 'Custom policies', 'Priority support'] },
          enterprise: { price: '$1,199', features: ['Custom solutions', 'White-label', '24/7 support'] },
          href: '/services/zero-trust-network-access',
          popular: false
        }
      ]
    },
    {
      name: 'Business Intelligence & Analytics',
      icon: BarChart3,
      color: 'from-green-500 to-emerald-500',
      services: [
        {
          name: 'AI Business Intelligence',
          description: 'Intelligent analytics and insights for data-driven decisions',
          starter: { price: '$399', features: ['Basic analytics', 'Standard dashboards', 'Email support'] },
          professional: { price: '$799', features: ['Advanced analytics', 'Custom dashboards', 'Priority support'] },
          enterprise: { price: '$1,999', features: ['Custom AI models', 'White-label', 'Dedicated support'] },
          href: '/services/ai-business-intelligence',
          popular: false
        },
        {
          name: 'AI Financial Analytics',
          description: 'Advanced financial modeling and risk assessment',
          starter: { price: '$299', features: ['Basic modeling', 'Standard reporting', 'Email support'] },
          professional: { price: '$599', features: ['Advanced modeling', 'Custom reporting', 'Priority support'] },
          enterprise: { price: '$1,499', features: ['Custom models', 'White-label', '24/7 support'] },
          href: '/services/ai-financial-analytics',
          popular: false
        },
        {
          name: 'Website Analytics Platform',
          description: 'Comprehensive website performance and user behavior tracking',
          starter: { price: '$99', features: ['Basic tracking', 'Standard reports', 'Email support'] },
          professional: { price: '$299', features: ['Advanced tracking', 'Custom reports', 'Priority support'] },
          enterprise: { price: '$799', features: ['Custom solutions', 'White-label', 'Dedicated support'] },
          href: '/services/website-analytics',
          popular: false
        }
      ]
    },
    {
      name: 'Development & Automation Tools',
      icon: Code,
      color: 'from-orange-500 to-red-500',
      services: [
        {
          name: 'Developer Productivity Copilot',
          description: 'AI-powered development assistance and code optimization',
          starter: { price: '$199', features: ['Basic assistance', 'Standard features', 'Email support'] },
          professional: { price: '$399', features: ['Advanced assistance', 'Custom features', 'Priority support'] },
          enterprise: { price: '$999', features: ['Custom AI models', 'White-label', '24/7 support'] },
          href: '/services/developer-productivity-copilot',
          popular: false
        },
        {
          name: 'AI Content Creation Suite',
          description: 'Automated content generation and optimization',
          starter: { price: '$149', features: ['Basic generation', 'Standard templates', 'Email support'] },
          professional: { price: '$299', features: ['Advanced generation', 'Custom templates', 'Priority support'] },
          enterprise: { price: '$799', features: ['Custom AI models', 'White-label', 'Dedicated support'] },
          href: '/services/ai-content-creation-suite',
          popular: false
        },
        {
          name: 'Landing Page Generator',
          description: 'AI-powered landing page creation and optimization',
          starter: { price: '$79', features: ['Basic templates', 'Standard optimization', 'Email support'] },
          professional: { price: '$199', features: ['Advanced templates', 'Custom optimization', 'Priority support'] },
          enterprise: { price: '$499', features: ['Custom solutions', 'White-label', '24/7 support'] },
          href: '/services/landing-page-generator',
          popular: false
        }
      ]
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown DE 19709',
    website: 'https://ziontechgroup.com'
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  };
  technicalSpecs?: {
    technology: string[];
    integrations: string[];
    apiEndpoints: number;
    uptime: string;
    security: string[];
  };
  competitors?: string[];
  marketSize?: string;
  freeTier?: boolean;
  trialPeriod?: string;
  setupTime?: string;
  growthRate?: string;
  compliance?: string[];
}
=======
export function ComprehensivePricingGuide2025() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('price');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedService, setSelectedService] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);
  const [expandedServices, setExpandedServices] = useState<Set<string>>(new Set());
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089

  const filteredServices = comprehensiveServices2025Enhanced.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return parseFloat(a.price.replace('$', '').replace(',', '')) - parseFloat(b.price.replace('$', '').replace(',', ''));
      case 'price-high':
        return parseFloat(b.price.replace('$', '').replace(',', '')) - parseFloat(a.price.replace('$', '').replace(',', ''));
      case 'category':
        return a.category.localeCompare(b.category);
      case 'popularity':
        return (b.badges.includes('Popular') ? 1 : 0) - (a.badges.includes('Popular') ? 1 : 0);
      case 'roi':
        return parseFloat(b.roi.split('%')[0]) - parseFloat(a.roi.split('%')[0]);
      default:
        return a.title.localeCompare(b.title);
    }
  });

  const toggleServiceExpansion = (serviceId: string) => {
    const newExpanded = new Set(expandedServices);
    if (newExpanded.has(serviceId)) {
      newExpanded.delete(serviceId);
    } else {
      newExpanded.add(serviceId);
    }
    setExpandedServices(newExpanded);
  };

  const openServiceModal = (service: any) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedService(null);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Micro SaaS': return <Code className="w-6 h-6" />;
      case 'AI Solutions': return <Brain className="w-6 h-6" />;
      case 'IT Services': return <Server className="w-6 h-6" />;
      case 'Digital Twin': return <Globe className="w-6 h-6" />;
      case 'Sustainable Tech': return <Leaf className="w-6 h-6" />;
      default: return <Zap className="w-6 h-6" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Micro SaaS': return 'from-blue-600 to-cyan-700';
      case 'AI Solutions': return 'from-purple-600 to-indigo-700';
      case 'IT Services': return 'from-green-600 to-emerald-700';
      case 'Digital Twin': return 'from-orange-600 to-red-700';
      case 'Sustainable Tech': return 'from-green-500 to-emerald-600';
      default: return 'from-gray-600 to-slate-700';
    }
  };

  const getPriceRange = (price: string) => {
    const numPrice = parseFloat(price.replace('$', '').replace(',', ''));
    if (numPrice < 500) return 'Budget';
    if (numPrice < 2000) return 'Mid-Range';
    if (numPrice < 5000) return 'Premium';
    return 'Enterprise';
  };

  const getPriceRangeColor = (range: string) => {
    switch (range) {
      case 'Budget': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Mid-Range': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Premium': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'Enterprise': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const pricingStats = {
    totalServices: comprehensiveServices2025Enhanced.length,
    averagePrice: comprehensiveServices2025Enhanced.reduce((acc, service) => 
      acc + parseFloat(service.price.replace('$', '').replace(',', '')), 0) / comprehensiveServices2025Enhanced.length,
    priceRanges: {
      Budget: comprehensiveServices2025Enhanced.filter(s => parseFloat(s.price.replace('$', '').replace(',', '')) < 500).length,
      'Mid-Range': comprehensiveServices2025Enhanced.filter(s => parseFloat(s.price.replace('$', '').replace(',', '')) >= 500 && parseFloat(s.price.replace('$', '').replace(',', '')) < 2000).length,
      Premium: comprehensiveServices2025Enhanced.filter(s => parseFloat(s.price.replace('$', '').replace(',', '')) >= 2000 && parseFloat(s.price.replace('$', '').replace(',', '')) < 5000).length,
      Enterprise: comprehensiveServices2025Enhanced.filter(s => parseFloat(s.price.replace('$', '').replace(',', '')) >= 5000).length
=======
  Filter,
  Search
} from 'lucide-react';
import enhancedInnovativeServices2025 from '../data/enhancedInnovativeServices2025';
import enhancedITandAIServices2025 from '../data/enhancedITandAIServices2025';

interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  currency: string;
  pricingModel: string;
  features: string[];
  benefits: string[];
  useCases: string[];
  targetAudience: string[];
  tags: string[];
  estimatedDelivery: string;
  supportLevel: string;
  marketPrice: string;
  roi: string;
  innovationLevel: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
    address: string;
  };
  technicalSpecs?: {
    technology: string[];
    integrations: string[];
    apiEndpoints: number;
    uptime: string;
    security: string[];
  };
  competitors?: string[];
  marketSize?: string;
  freeTier?: boolean;
  trialPeriod?: string;
  setupTime?: string;
  growthRate?: string;
  compliance?: string[];
}

export default function ComprehensivePricingGuide2025() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedInnovationLevel, setSelectedInnovationLevel] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');

  // Combine all services
  const allServices: Service[] = [
    ...enhancedInnovativeServices2025,
    ...enhancedITandAIServices2025
  ];

  // Filter and sort services
  const filteredServices = allServices
    .filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const matchesInnovation = selectedInnovationLevel === 'all' || service.innovationLevel === selectedInnovationLevel;
      
      return matchesSearch && matchesCategory && matchesInnovation;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'roi':
          return parseInt(b.roi.split('%')[0]) - parseInt(a.roi.split('%')[0]);
        case 'name':
        default:
          return a.title.localeCompare(b.title);
      }
    });

  const categories = ['all', ...Array.from(new Set(allServices.map(s => s.category)))];
  const innovationLevels = ['all', ...Array.from(new Set(allServices.map(s => s.innovationLevel)))];

  const getInnovationLevelColor = (level: string) => {
    switch (level) {
      case 'Revolutionary':
        return 'text-purple-400 border-purple-400';
      case 'Cutting-edge':
        return 'text-blue-400 border-blue-400';
      case 'Advanced':
        return 'text-green-400 border-green-400';
      default:
        return 'text-gray-400 border-gray-400';
    }
  };

  const getSupportLevelColor = (level: string) => {
    switch (level) {
      case 'enterprise':
        return 'bg-purple-500 text-white';
      case 'premium':
        return 'bg-blue-500 text-white';
      case 'standard':
        return 'bg-green-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-600/20"></div>
        <div className="relative z-10 container mx-auto text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Comprehensive Pricing Guide 2025
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-cyan-200 mb-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transparent pricing for all our revolutionary AI, Micro SaaS, and IT solutions
          </motion.p>
          <motion.div 
            className="flex flex-wrap justify-center gap-4 text-sm"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full border border-cyan-500/30">
              {pricingStats.totalServices} Services Available
            </span>
            <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full border border-purple-500/30">
              Starting from ${Math.min(...comprehensiveServices2025Enhanced.map(s => parseFloat(s.price.replace('$', '').replace(',', '')))).toLocaleString()}
            </span>
            <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full border border-green-500/30">
              Average ROI: 400%+
            </span>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-black/50 backdrop-blur-xl border-b border-cyan-500/30 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <div className="flex items-center space-x-2 text-cyan-400">
                <Phone className="w-5 h-5" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2 text-cyan-400">
                <Mail className="w-5 h-5" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-cyan-400">
              <MapPin className="w-5 h-5" />
              <span>364 E Main St STE 1008 Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>
                </div>
                <div className="flex flex-col items-center">
                  <MapPin className="w-10 h-10 text-purple-400 mb-3" />
                  <p className="text-white font-semibold text-lg mb-2">Address</p>
                  <p className="text-purple-300 text-lg">
                    364 E Main St STE 1008<br />
                    Middletown DE 19709
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Statistics */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {Object.entries(pricingStats.priceRanges).map(([range, count], index) => (
              <motion.div
                key={range}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-xl p-6 text-center"
              >
                <div className="text-3xl font-bold text-white mb-2">{count}</div>
                <div className="text-cyan-300 font-medium">{range}</div>
                <div className="text-gray-400 text-sm">Services</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-2xl">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services, features, or pricing..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-xl border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>

            {/* Filters and Controls */}
            <div className="flex flex-wrap gap-4 items-center">
              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-white/10 backdrop-blur-xl border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <option value="all">All Categories</option>
                {serviceCategories.map(category => (
                  <option key={category.slug} value={category.name}>{category.name}</option>
                ))}
              </select>

              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-white/10 backdrop-blur-xl border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <option value="price">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="category">Sort by Category</option>
                <option value="popularity">Sort by Popularity</option>
                <option value="roi">Sort by ROI</option>
                <option value="name">Sort by Name</option>
              </select>

              {/* View Mode */}
              <div className="flex bg-white/10 backdrop-blur-xl border border-cyan-500/30 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'}`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'}`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          {/* Results Count */}
          <div className="mb-8">
            <p className="text-cyan-300">
              Showing {filteredServices.length} of {comprehensiveServices2025Enhanced.length} services
            </p>
          </div>

          <div className="grid gap-8 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3">
            {services.map((service, index)              => (
              <motion.div
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
                key={service.id}
                className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                {/* Service Header */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getInnovationLevelColor(service.innovationLevel)}`}>
                      {service.innovationLevel}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getSupportLevelColor(service.supportLevel)}`}>
                      {service.supportLevel}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">{service.description}</p>
                  
                  <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
                    <Clock className="w-4 h-4" />
                    <span>Delivery: {service.estimatedDelivery}</span>
                  </div>
                </div>

                {/* Pricing */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl font-bold text-purple-400">
                      {service.currency}{service.price}
                    </span>
                    <span className="text-slate-400">/{service.pricingModel}</span>
                  </div>
                  
                  {service.marketPrice && (
                    <div className="text-sm text-slate-400 mb-2">
                      Market Price: {service.marketPrice}
=======
          {/* Services Grid */}
          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}>
            <AnimatePresence>
              {sortedServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/40 transition-all duration-300 hover:transform hover:scale-105 ${
                    viewMode === 'list' ? 'flex flex-col lg:flex-row gap-6' : ''
                  }`}
                >
                  {/* Service Header */}
                  <div className={`${viewMode === 'list' ? 'flex-1' : ''}`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${getCategoryColor(service.category)}`}>
                        {getCategoryIcon(service.category)}
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-2xl font-bold text-white">{service.price}</span>
                        <span className="text-sm text-gray-400">per {service.billing}</span>
                        <span className={`px-2 py-1 text-xs rounded-full border mt-1 ${getPriceRangeColor(getPriceRange(service.price))}`}>
                          {getPriceRange(service.price)}
                        </span>
                      </div>
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-300 mb-4">{service.shortDescription}</p>

                    {/* Badges */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.badges.map((badge, badgeIndex) => (
                        <span
                          key={badgeIndex}
                          className="px-2 py-1 text-xs font-medium bg-cyan-500/20 text-cyan-300 rounded-full border border-cyan-500/30"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>

                    {/* Key Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features</h4>
                      <ul className="space-y-1">
                        {service.features.slice(0, 3).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-cyan-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Benefits</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center text-sm text-gray-300">
                            <TrendingUp className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Expandable Details */}
                    <div className="mb-4">
                      <button
                        onClick={() => toggleServiceExpansion(service.id)}
                        className="flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors duration-300"
                      >
                        {expandedServices.has(service.id) ? (
                          <>
                            <ChevronUp className="w-4 h-4 mr-1" />
                            Show Less
                          </>
                        ) : (
                          <>
                            <ChevronDown className="w-4 h-4 mr-1" />
                            Show More Details
                          </>
                        )}
                      </button>
                    </div>

                    {/* Expanded Details */}
                    <AnimatePresence>
                      {expandedServices.has(service.id) && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="space-y-4 pt-4 border-t border-cyan-500/20">
                            {/* Capabilities */}
                            <div>
                              <h5 className="text-sm font-semibold text-cyan-400 mb-2">Capabilities</h5>
                              <ul className="space-y-1">
                                {service.capabilities.slice(0, 3).map((capability, capIndex) => (
                                  <li key={capIndex} className="flex items-center text-sm text-gray-300">
                                    <Zap className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                                    {capability}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Use Cases */}
                            <div>
                              <h5 className="text-sm font-semibold text-cyan-400 mb-2">Use Cases</h5>
                              <div className="flex flex-wrap gap-2">
                                {service.useCases.slice(0, 4).map((useCase, useCaseIndex) => (
                                  <span key={useCaseIndex} className="px-2 py-1 text-xs bg-purple-500/20 text-purple-300 rounded border border-purple-500/30">
                                    {useCase}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Technology Stack */}
                            <div>
                              <h5 className="text-sm font-semibold text-cyan-400 mb-2">Technology Stack</h5>
                              <div className="flex flex-wrap gap-2">
                                {service.technologyStack.slice(0, 4).map((tech, techIndex) => (
                                  <span key={techIndex} className="px-2 py-1 text-xs bg-blue-500/20 text-blue-300 rounded border border-blue-500/30">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Service Actions */}
                  <div className={`flex flex-col gap-3 ${viewMode === 'list' ? 'lg:w-64' : ''}`}>
                    <button
                      onClick={() => openServiceModal(service)}
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <Eye className="w-5 h-5" />
                      <span>View Full Details</span>
                    </button>
                    
                    <a
                      href={service.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 border border-cyan-500/30"
                    >
                      <span>{service.ctaLabel}</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>

                    {/* Quick Info */}
                    <div className="bg-white/5 rounded-lg p-3 space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">ROI:</span>
                        <span className="text-green-400 font-medium">{service.roi}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Trial:</span>
                        <span className="text-cyan-400 font-medium">{service.trialDays} days</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Setup:</span>
                        <span className="text-cyan-400 font-medium">{service.setupTime}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* No Results */}
          {filteredServices.length === 0 && (

              <div className="text-center">
                <p className="text-gray-300 mb-4">
                  Ready to start your transformation journey?
                </p>
                <a
                  href="mailto:kleber@ziontechgroup.com?subject=ROI Consultation Request"
                  className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:scale-105 transition-transform duration-300"

                  <Mail className="w-5 h-5 mr-2" />
                  Get ROI Consultation
                </a>
              </div>
=======
        {/* Pricing Benefits */}
        <motion.section 
          className="py-16 px-6 bg-gradient-to-br from-purple-900/20 via-slate-900/50 to-pink-900/20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Why Choose Our Pricing?
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-6">
              {pricingBenefits.map((benefit, index)              => (
                <motion.div
                  key={benefit}
                  className="flex items-start gap-4 p-4 rounded-xl border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-pink-500/10"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </motion.div>
              ))}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
            </div>
          </div>
        </motion.section>

        {/* Service Categories with Pricing */}
        {serviceCategories.map((category, categoryIndex) => (
          <motion.section 
            key={category.name}
            className="py-20 px-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <div className={`inline-flex items-center gap-3 p-3 rounded-full bg-gradient-to-r ${category.color} bg-opacity-20 mb-6`}>
                  <category.icon className="w-8 h-8 text-white" />
                  <h2 className="text-3xl md:text-4xl font-bold text-white">
                    {category.name}
                  </h2>
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
                </div>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Choose the perfect plan for your {category.name.toLowerCase()} needs. All plans include our core capabilities and expert support.
                </p>
              </div>
              
              <div className="space-y-12">
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={service.name}
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-purple-500/20 p-8"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: (categoryIndex * 0.2) + (serviceIndex * 0.1), duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="mb-8">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                          <p className="text-gray-300 text-lg">{service.description}</p>
                        </div>
                        {service.popular && (
                          <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                            Most Popular
                          </span>
                        )}
                      </div>
                      
                      <Link
                        to={service.href}
                        className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        Learn More <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {/* Starter Plan */}
                      <div className="p-6 rounded-xl border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-pink-500/10">
                        <h4 className="text-lg font-semibold text-white mb-2">Starter</h4>
                        <div className="text-3xl font-bold text-purple-400 mb-4">{service.starter.price}<span className="text-lg text-gray-400">/month</span></div>
                        <ul className="space-y-3 mb-6">
                          {service.starter.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-3">
                              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                              <span className="text-gray-300 text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <motion.button 
                          className="w-full py-2 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Get Started
                        </motion.button>
                      </div>
                      
                      {/* Professional Plan */}
                      <div className="p-6 rounded-xl border-2 border-purple-500 bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                        <h4 className="text-lg font-semibold text-white mb-2">Professional</h4>
                        <div className="text-3xl font-bold text-purple-400 mb-4">{service.professional.price}<span className="text-lg text-gray-400">/month</span></div>
                        <ul className="space-y-3 mb-6">
                          {service.professional.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-3">
                              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                              <span className="text-gray-300 text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <motion.button 
                          className="w-full py-2 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Get Started
                        </motion.button>
                      </div>
                      
                      {/* Enterprise Plan */}
                      <div className="p-6 rounded-xl border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-pink-500/10">
                        <h4 className="text-lg font-semibold text-white mb-2">Enterprise</h4>
                        <div className="text-3xl font-bold text-purple-400 mb-4">{service.enterprise.price}<span className="text-lg text-gray-400">/month</span></div>
                        <ul className="space-y-3 mb-6">
                          {service.enterprise.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-3">
                              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                              <span className="text-gray-300 text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <motion.button 
                          className="w-full py-2 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Contact Sales
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
              </div>
            </div>
          </motion.section>
        ))}

        {/* Contact & CTA Section */}
        <motion.section 
          className="py-20 px-6 bg-gradient-to-br from-purple-900/20 via-slate-900/50 to-pink-900/20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Contact our team to discuss your needs and find the perfect solution for your business.
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setSelectedInnovationLevel('all');
                }}
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200"
              >
                Clear Filters
              </button>
=======
            <div className="text-center py-20">
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No services found</h3>
              <p className="text-gray-400">Try adjusting your search criteria or filters</p>
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
            </div>
          )}
        </div>
      </section>

      {/* Service Modal */}
      <AnimatePresence>
        {showModal && selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-zion-slate-dark border border-cyan-500/30 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-cyan-500/30">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${getCategoryColor(selectedService.category)}`}>
                        {getCategoryIcon(selectedService.category)}
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-white">{selectedService.title}</h2>
                        <p className="text-cyan-400">{selectedService.category}</p>
                      </div>
                    </div>
                    <p className="text-gray-300 text-lg">{selectedService.description}</p>
                  </div>
                  <button
                    onClick={closeModal}
                    className="text-gray-400 hover:text-white p-2"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-6">
                {/* Pricing and Quick Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white/5 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-white mb-3">Pricing</h3>
                    <div className="text-3xl font-bold text-cyan-400 mb-2">{selectedService.price}</div>
                    <div className="text-gray-400">per {selectedService.billing}</div>
                    <div className="mt-3 space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">ROI:</span>
                        <span className="text-green-400">{selectedService.roi}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Trial:</span>
                        <span className="text-cyan-400">{selectedService.trialDays} days</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Setup:</span>
                        <span className="text-cyan-400">{selectedService.setupTime}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-white mb-3">Market Position</h3>
                    <p className="text-gray-300 text-sm mb-3">{selectedService.marketPosition}</p>
                    <div className="space-y-2">
                      <div className="text-sm">
                        <span className="text-gray-400">Competitors:</span>
                        <div className="text-cyan-400 mt-1">{selectedService.competitors.join(', ')}</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-white mb-3">Contact Information</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-cyan-400" />
                        <span className="text-cyan-400">{selectedService.contactInfo.mobile}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4 text-cyan-400" />
                        <span className="text-cyan-400">{selectedService.contactInfo.email}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-cyan-400" />
                        <span className="text-cyan-400">{selectedService.contactInfo.address}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Features and Capabilities */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/5 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-white mb-3">Features</h3>
                    <ul className="space-y-2">
                      {selectedService.features.map((feature, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-500 mr-2 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white/5 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-white mb-3">Capabilities</h3>
                    <ul className="space-y-2">
                      {selectedService.capabilities.map((capability, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-300">
                          <Zap className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                          {capability}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Benefits and Use Cases */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/5 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-white mb-3">Benefits</h3>
                    <ul className="space-y-2">
                      {selectedService.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-300">
                          <TrendingUp className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white/5 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-white mb-3">Use Cases</h3>
                    <ul className="space-y-2">
                      {selectedService.useCases.map((useCase, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-300">
                          <Target className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                          {useCase}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Technology and Integrations */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/5 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-white mb-3">Technology Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.technologyStack.map((tech, index) => (
                        <span key={index} className="px-2 py-1 text-xs bg-cyan-500/20 text-cyan-300 rounded border border-cyan-500/30">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-white mb-3">Integrations</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.integrations.map((integration, index) => (
                        <span key={index} className="px-2 py-1 text-xs bg-purple-500/20 text-purple-300 rounded border border-purple-500/30">
                          {integration}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Target Industries and Compliance */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/5 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-white mb-3">Target Industries</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.targetIndustries.map((industry, index) => (
                        <span key={index} className="px-2 py-1 text-xs bg-green-500/20 text-green-300 rounded border border-green-500/30">
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-white mb-3">Compliance & Security</h3>
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-sm font-medium text-cyan-400 mb-1">Compliance</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedService.compliance.map((compliance, index) => (
                            <span key={index} className="px-2 py-1 text-xs bg-blue-500/20 text-blue-300 rounded border border-blue-500/30">
                              {compliance}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-cyan-400 mb-1">Security Features</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedService.security.map((security, index) => (
                            <span key={index} className="px-2 py-1 text-xs bg-red-500/20 text-red-300 rounded border border-red-500/30">
                              {security}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Scalability */}
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-white mb-3">Scalability</h3>
                  <p className="text-gray-300">{selectedService.scalability}</p>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-6 border-t border-cyan-500/30 flex flex-col sm:flex-row gap-3">
                <a
                  href={selectedService.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>{selectedService.ctaLabel}</span>
                  <ExternalLink className="w-5 h-5" />
                </a>
                <button
                  onClick={closeModal}
                  className="px-6 py-3 text-gray-400 hover:text-white font-semibold border border-gray-600 hover:border-gray-500 rounded-lg transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-cyan-200 mb-8">
              Contact us today to discuss your specific needs and get a customized quote
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 text-lg"
              >
                <span>Get Custom Quote</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 text-lg border border-cyan-500/30"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
            </div>
          </motion.div>
=======
                className="px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="name">Sort by Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="roi">ROI: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              {filteredServices.length} Services Available
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Discover the perfect solution for your business needs with our comprehensive portfolio
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Service Header */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getInnovationLevelColor(service.innovationLevel)}`}>
                      {service.innovationLevel}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getSupportLevelColor(service.supportLevel)}`}>
                      {service.supportLevel}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">{service.description}</p>
                  
                  <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
                    <Clock className="w-4 h-4" />
                    <span>Delivery: {service.estimatedDelivery}</span>
                  </div>
                </div>

                {/* Pricing */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl font-bold text-purple-400">
                      {service.currency}{service.price}
                    </span>
                    <span className="text-slate-400">/{service.pricingModel}</span>
                  </div>
                  
                  {service.marketPrice && (
                    <div className="text-sm text-slate-400 mb-2">
                      Market Price: {service.marketPrice}
                    </div>
                  )}
                  
                  {service.roi && (
                    <div className="text-sm text-green-400 font-semibold">
                      ROI: {service.roi}
                    </div>
                  )}
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Key Features
                  </h4>
                  <div className="space-y-2">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="text-sm text-slate-300 flex items-center gap-2">
                        <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                    {service.features.length > 4 && (
                      <div className="text-sm text-slate-400">
                        +{service.features.length - 4} more features
                      </div>
                    )}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-blue-400" />
                    Key Benefits
                  </h4>
                  <div className="space-y-2">
                    {service.benefits.slice(0, 3).map((benefit, idx) => (
                      <div key={idx} className="text-sm text-slate-300 flex items-center gap-2">
                        <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Specs */}
                {service.technicalSpecs && (
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-cyan-400" />
                      Technical Specs
                    </h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-slate-400">Uptime:</span>
                        <div className="text-white font-semibold">{service.technicalSpecs.uptime}</div>
                      </div>
                      <div>
                        <span className="text-slate-400">API Endpoints:</span>
                        <div className="text-white font-semibold">{service.technicalSpecs.apiEndpoints}</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Trial & Setup */}
                <div className="mb-6">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    {service.freeTier && (
                      <div className="text-center">
                        <span className="text-slate-400 block">Free Tier</span>
                        <span className="text-green-400 font-semibold">Available</span>
                      </div>
                    )}
                    {service.trialPeriod && (
                      <div className="text-center">
                        <span className="text-slate-400 block">Trial Period</span>
                        <span className="text-blue-400 font-semibold">{service.trialPeriod}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex items-center justify-between">
                  <a
                    href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                    className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200 flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    Get Quote
                  </a>
                  <a
                    href={`tel:${service.contactInfo.phone}`}
                    className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200 flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-slate-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
              <p className="text-slate-400 mb-8">
                Try adjusting your search criteria or filters to find the services you're looking for.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setSelectedInnovationLevel('all');
                }}
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-24 bg-black/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
            Contact us today to discuss your specific needs and get a customized quote for any of our services.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <a
              href="mailto:kleber@ziontechgroup.com?subject=Custom Service Quote Request"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Request Custom Quote
            </a>
            <a
              href="tel:+13024640950"
              className="bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 border border-white/20 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call +1 302 464 0950
            </a>
          </div>

          <div className="text-slate-400">
            <p className="text-lg">
              Visit us at: <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline">https://ziontechgroup.com</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
  }
import { Link              } from 'react-router-dom.ts';
import { >>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  CheckCircle,
  Star,
  Zap,
  Shield,
  TrendingUp,
  Brain,
  Server,
  Globe,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  DollarSign,
  CreditCard,
  Wallet,
  Coins,
  PiggyBank,
  Calculator,
  BarChart3,
  Target,
  Award,
  Brain,
  Cpu,
  Lock,
  Eye,
  ShieldCheck,
  Activity,
  BarChart,
  PieChart,
  LineChart,
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  Clock,
  DollarSign,
  Percent,
  Crown,
  Gem,
  Diamond
} from 'lucide-react';
import SEO from '../components/SEO';
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
import { INNOVATIVE_SERVICES_2025, InnovativeService2025              } from '../data/innovativeServices2025';

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Star, 
  TrendingUp, 
  Shield, 
  Zap, 
  Globe, 
  Cpu,
  Database,
  Network,
  Layers,
  Brain,
  Cloud,
  Smartphone,
  Monitor,
  Server,
  Lock,
  Users,
  BarChart3,
  Target,
  DollarSign,
  Clock,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  ChevronUp,
  Atom,
  Rocket,
  Heart,
  ShoppingCart,
  MessageCircle,
  BookOpen,
  Workflow,
  Shield as ShieldIcon
} from 'lucide-react';
import { SEO } from '../components/SEO';
import INNOVATIVE_SERVICES_2025 from '../data/innovativeServices2025';

interface Service {
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
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
  marketPrice: string;
  roi: string;
  innovationLevel: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
}

const ComprehensivePricingGuide2027: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [expandedServices, setExpandedServices] = useState<Set<string>>(new Set());

  // Get unique categories
  const categories = useMemo(() => {
    const cats = [...new Set(INNOVATIVE_SERVICES_2025.map(service => service.category))];
    return cats.sort();
  }, []);

  // Filter services
  const filteredServices = useMemo(() => {
    let filtered = INNOVATIVE_SERVICES_2025.filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.subcategory.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      
      let matchesPrice = true;
      if (selectedPriceRange !== 'all') {
        const [min, max] = selectedPriceRange.split('-').map(Number);
        if (max) {
          matchesPrice = service.price >= min && service.price <= max;
        } else {
          matchesPrice = service.price >= min;
        }
      }
      
      return matchesSearch && matchesCategory && matchesPrice;
    });
    
    return filtered;
  }, [searchTerm, selectedCategory, selectedPriceRange]);

  const toggleServiceExpansion = (serviceId: string) => {
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
    const newExpanded = new Set(expandedServices);
    if (newExpanded.has(serviceId)) {
      newExpanded.delete(serviceId);
    } else {
      newExpanded.add(serviceId);
  const getCategoryIcon = (category: anyanyanyanyanyanyanyanyanyanyanyanyanystring)               => {;
    switch (category) {;
      case 'AI Security': return <Shield className="w-5 h-5" />;
      case 'AI Finance': return <DollarSign className="w-5 h-5" />;
      case 'AI Healthcare': return <Brain className="w-5 h-5" />;
      case 'AI Operations': return <BarChart3 className="w-5 h-5" />;
      case 'AI Legal': return <Lock className="w-5 h-5" />;
      case 'Cloud Computing': return <Cloud className="w-5 h-5" />;
      case 'Edge Computing': return <Zap className="w-5 h-5" />;
      case 'Quantum Computing': return <Cpu className="w-5 h-5" />;
      case 'Data Center Management': return <Server className="w-5 h-5" />;
      case 'Network Infrastructure': return <Network className="w-5 h-5" />;
      case 'Blockchain & Web3': return <Layers className="w-5 h-5" />;
      default: return <Target className = "w-5 h-5" />};
  };

  const getInnovationLevelColor = (level: anyanyanyanyanyanyanyanyanyanyanyanyanystring)               => {;
    switch (level) {;
      case 'Revolutionary': return 'bg-gradient-to-r from-purple-600 to-pink-600';
      case 'Cutting-edge': return 'bg-gradient-to-r from-blue-600 to-cyan-600';
      case 'Advanced': return 'bg-gradient-to-r from-green-600 to-emerald-600';
      default: return 'bg-gradient-to-r from-gray-600 to-slate-600'}
  };

  const toggleServiceExpansion = (serviceId: anyanyanyanyanyanyanyanyanyanyanyanyanystring)               => {;
    const newExpanded = new Set(expandedServices);
    if (newExpanded.has(serviceId)) {
      newExpanded.delete(serviceId)} else {
      newExpanded.add(serviceId)}
    setExpandedServices(newExpanded)};
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

  const getPriceRangeLabel = (range: anyanyanyanyanyanyanyanyanyanyanyanyanystring)               => {;
    switch (range) {;
      case '0-1000': return '$0 - $1,000/month';
      case '1000-2500': return '$1,000 - $2,500/month';
      case '2500-5000': return '$2,500 - $5,000/month';
      case '5000+': return '$5,000+/month';
      default: return 'All Prices'}
  };

  return (
    <div className = "min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
        title="Comprehensive Pricing Guide 2027 - Zion Tech Group"
        description="Explore our complete pricing guide for AI, IT infrastructure, and blockchain services. Get detailed pricing, features, and ROI information for all our innovative solutions."
      />
      
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 

}}
            animate = {
  { opacity: 1,
  y: 0 

}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Comprehensive Pricing Guide
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                2027
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transparent pricing for all our cutting-edge AI, IT infrastructure, and blockchain services. 
              Compare features, benefits, and ROI to find the perfect solution for your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center text-blue-400">
                <Star className="w-5 h-5 mr-2" />
                <span>30+ Services</span>
              </div>
              <div className="flex items-center text-green-400">
                <TrendingUp className="w-5 h-5 mr-2" />
                <span>Transparent Pricing</span>
              </div>
              <div className="flex items-center text-purple-400">
                <Globe className="w-5 h-5 mr-2" />
                <span>ROI Guaranteed</span>
              </div>
            </div>
          </motion.div>
        </div>
=======
export default function ComprehensivePricingGuide2027(...args: any[]): any {
  const [selectedCategory, setSelectedCategory] = React.useState('all');

  const allServices = [...REAL_INNOVATIVE_SERVICES_2025, ...COMPREHENSIVE_MICRO_SAAS_SERVICES_2025];
  
  const categories = [
    { id: 'all', name: 'All Services', icon: Sparkles, color: 'from-purple-500 to-pink-500' },
    { id: 'AI & Analytics', name: 'AI & Analytics', icon: Brain, color: 'from-blue-500 to-cyan-500' },
    { id: 'AI & Security', name: 'AI & Security', icon: Shield, color: 'from-red-500 to-orange-500' },
    { id: 'AI & Marketing', name: 'AI & Marketing', icon: TrendingUp, color: 'from-green-500 to-emerald-500' },
    { id: 'AI & Sales', name: 'AI & Sales', icon: Users, color: 'from-indigo-500 to-purple-500' },
    { id: 'AI & Support', name: 'AI & Support', icon: MessageSquare, color: 'from-teal-500 to-blue-500' },
    { id: 'IT & Infrastructure', name: 'IT & Infrastructure', icon: Server, color: 'from-gray-500 to-slate-500' },
    { id: 'IT & Support', name: 'IT & Support', icon: Workflow, color: 'from-yellow-500 to-orange-500' },
    { id: 'IT & Data', name: 'IT & Data', icon: Database, color: 'from-cyan-500 to-blue-500' },
    { id: 'IT & Networking', name: 'IT & Networking', icon: Network, color: 'from-violet-500 to-purple-500' },
    { id: 'IT & Consulting', name: 'IT & Consulting', icon: Rocket, color: 'from-pink-500 to-rose-500' },
    { id: 'Micro SaaS & Marketing', name: 'Micro SaaS & Marketing', icon: Globe, color: 'from-emerald-500 to-teal-500' },
    { id: 'Micro SaaS & Analytics', name: 'Micro SaaS & Analytics', icon: BarChart, color: 'from-blue-500 to-indigo-500' },
    { id: 'Micro SaaS & Productivity', name: 'Micro SaaS & Productivity', icon: Zap, color: 'from-yellow-500 to-orange-500' },
    { id: 'Micro SaaS & Sales', name: 'Micro SaaS & Sales', icon: Target, color: 'from-purple-500 to-pink-500' },
    { id: 'Micro SaaS & Finance', name: 'Micro SaaS & Finance', icon: DollarSign, color: 'from-green-500 to-emerald-500' },
    { id: 'Micro SaaS & Operations', name: 'Micro SaaS & Operations', icon: Cpu, color: 'from-gray-500 to-slate-500' }
  ];

  const filteredServices = allServices.filter(service => {
    return selectedCategory === 'all' || service.category === selectedCategory;
  });

  const getCategoryIcon = (category: anyanyanyanyanyanyanyanyanyanyanyanyanystring)              => {
    const categoryData = categories.find(cat => cat.id === category);
    return categoryData ? categoryData.icon : Sparkles;
  };

  const getCategoryColor = (category: anyanyanyanyanyanyanyanyanyanyanyanyanystring)              => {
    const categoryData = categories.find(cat => cat.id === category);
    return categoryData ? categoryData.color : 'from-purple-500 to-pink-500';
  };

  const getPricingTier = (price: anyanyanyanyanyanyanyanyanyanyanyanyanynumber)              => {
    if (price < 200) return { tier: 'Starter', icon: Star, color: 'from-green-500 to-emerald-500' };
    if (price < 1000) return { tier: 'Professional', icon: Gem, color: 'from-blue-500 to-cyan-500' };
    if (price < 3000) return { tier: 'Business', icon: Crown, color: 'from-purple-500 to-pink-500' };
    return { tier: 'Enterprise', icon: Diamond, color: 'from-red-500 to-orange-500' };
  };

  const getInnovationBadge = (level: anyanyanyanyanyanyanyanyanyanyanyanyanystring)              => {
    switch (level.toLowerCase()) {
      case 'advanced':
        return { text: 'Advanced AI', color: 'bg-gradient-to-r from-purple-500 to-pink-500', icon: Brain };
      case 'professional':
        return { text: 'Professional', color: 'bg-gradient-to-r from-blue-500 to-cyan-500', icon: Shield };
      case 'strategic':
        return { text: 'Strategic', color: 'bg-gradient-to-r from-green-500 to-emerald-500', icon: Rocket };
      default:
        return { text: 'Innovative', color: 'bg-gradient-to-r from-orange-500 to-red-500', icon: Sparkles };
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <SEO
        title="Comprehensive Pricing Guide 2027 - Zion Tech Group"
        description="Explore our comprehensive pricing guide for all AI-powered services, IT solutions, and micro SAAS tools. Find the perfect solution for your business needs and budget."
      />

      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue/20 to-zion-cyan/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Comprehensive Pricing Guide
              <span className="block text-zion-cyan">2027 Edition</span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Transparent pricing for all our innovative solutions. Choose the perfect plan that fits your business needs and budget.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="bg-zion-blue-dark/30 rounded-lg px-6 py-3 border border-zion-blue-light/20">
                <div className="text-2xl font-bold text-zion-cyan">${getAveragePrice(MICRO_SAAS_SERVICES)}</div>
                <div className="text-zion-slate-light text-sm">Average Monthly Price</div>
              </div>
              <div className="bg-zion-purple/30 rounded-lg px-6 py-3 border border-zion-purple/20">
                <div className="text-2xl font-bold text-zion-purple">${getTotalValue(MICRO_SAAS_SERVICES).toLocaleString()}+</div>
                <div className="text-zion-slate-light text-sm">Total Market Value</div>
              </div>
              <div className="bg-zion-cyan/30 rounded-lg px-6 py-3 border border-zion-cyan/20">
                <div className="text-2xl font-bold text-zion-cyan">{MICRO_SAAS_SERVICES.length}</div>
                <div className="text-zion-slate-light text-sm">Services Available</div>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Comprehensive Pricing
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500">
                Guide 2027
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-4xl mx-auto mb-8">
              Explore our comprehensive pricing guide for all AI-powered services, IT solutions, and micro SAAS tools. 
              Find the perfect solution for your business needs and budget with transparent pricing and detailed comparisons.
            </p>
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950" 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Phone className="w-4 h-4 mr-2"/> Call +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="inline-flex items-center px-6 py-3 border border-purple-500/50 text-purple-400 rounded-lg hover:bg-purple-500/10 transition-all duration-300"
              >
                <Mail className="w-4 h-4 mr-2"/> Get Custom Quote
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Tiers Overview */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center space-y-2">
              <Phone className="w-6 h-6 text-zion-cyan" />
              <span className="text-white font-semibold">+1 302 464 0950</span>
              <span className="text-zion-slate-light text-sm">Mobile</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Mail className="w-6 h-6 text-zion-cyan" />
              <span className="text-white font-semibold">kleber@ziontechgroup.com</span>
              <span className="text-zion-slate-light text-sm">Email</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <MapPin className="w-6 h-6 text-zion-cyan" />
              <span className="text-white font-semibold">364 E Main St STE 1008</span>
              <span className="text-zion-slate-light text-sm">Middletown DE 19709</span>
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Choose from our standard pricing tiers or get a custom quote for enterprise solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-3 gap-8">
            {pricingTiers.map((tier, index)              => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative rounded-2xl p-8 ${
                  tier.popular
                    ? 'bg-gradient-to-br from-zion-purple/20 to-zion-cyan/20 border-2 border-zion-purple'
                    : 'bg-zion-slate-dark/30 border border-zion-blue-light/20'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-zion-purple to-zion-cyan text-white px-4 py-2">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-zion-slate-light mb-6">{tier.description}</p>

                  <div className="mb-6">
                    <span className="text-4xl font-bold text-zion-cyan">${tier.price}</span>
                    <span className="text-zion-slate-light">/month</span>
                  </div>

                  <Button
                    asChild
                    className={`w-full bg-gradient-to-r ${tier.color} text-white hover:opacity-90`}
                  >
                    <Link to="/contact">
                      Get Started
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-white mb-4">What's Included: anyanyanyanyanyanyanyanyanyanyanyanyany</h4>
                  {tier.features.map((feature, featureIndex)              => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                      <span className="text-zion-slate-light">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories Pricing */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Service-Specific Pricing
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Explore detailed pricing for each service category with transparent cost breakdowns
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('all')}
              className={selectedCategory === 'all' ? 'bg-zion-cyan hover:bg-zion-cyan-light' : 'border-zion-blue-light/20 text-zion-slate-light hover:bg-zion-blue-dark/30'}
            >
              <Globe className="w-4 h-4 mr-2" />
              All Categories
            </Button>
            {serviceCategories.map((category) => (
              <Button
                key={category.name}
                variant={selectedCategory === category.name ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.name)}
                className={selectedCategory === category.name ? 'bg-zion-cyan hover:bg-zion-cyan-light' : 'border-zion-blue-light/20 text-zion-slate-light hover:bg-zion-blue-dark/30'}
              >
                {category.icon}
                <span className="ml-2">{category.name}</span>
              </Button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index)              => (
=======
    }
    setExpandedServices(newExpanded);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI Solutions': return Brain;
      case 'IT Services': return Server;
      case 'Micro SaaS': return ShoppingCart;
      case 'Cybersecurity': return ShieldIcon;
      case 'Data Analytics': return BarChart3;
      case 'Cloud Services': return Cloud;
      case 'Emerging Tech': return Rocket;
      default: return Zap;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI Solutions': return 'from-purple-600 to-pink-600';
      case 'IT Services': return 'from-blue-600 to-cyan-600';
      case 'Micro SaaS': return 'from-green-600 to-emerald-600';
      case 'Cybersecurity': return 'from-red-600 to-orange-600';
      case 'Data Analytics': return 'from-indigo-600 to-purple-600';
      case 'Cloud Services': return 'from-cyan-600 to-blue-600';
      case 'Emerging Tech': return 'from-yellow-600 to-orange-600';
      default: return 'from-gray-600 to-slate-600';
    }
  };

  const priceRanges = [
    { label: 'All Prices', value: 'all' },
    { label: 'Under $500', value: '0-500' },
    { label: '$500 - $1,000', value: '500-1000' },
    { label: '$1,000 - $2,500', value: '1000-2500' },
    { label: '$2,500 - $5,000', value: '2500-5000' },
    { label: 'Over $5,000', value: '5000-999999' }
  ];

  const innovationLevels = ['Emerging', 'Established', 'Cutting-edge', 'Revolutionary'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Comprehensive Pricing Guide 2027 - Zion Tech Group"
        description="Explore our complete pricing guide for AI, IT, and Micro SaaS services. Find competitive pricing, ROI projections, and detailed service breakdowns."
      />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Comprehensive Pricing Guide
              </span>
              <span className="block text-white">2027</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
            >
              Transparent pricing for all our innovative AI, IT, and Micro SaaS services. 
              Compare costs, understand ROI, and find the perfect solution for your business needs.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <div className="flex items-center space-x-2 text-cyan-400">
                <CheckCircle className="w-5 h-5" />
                <span>20+ Services</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-400">
                <TrendingUp className="w-5 h-5" />
                <span>Proven ROI</span>
              </div>
              <div className="flex items-center space-x-2 text-purple-400">
                <DollarSign className="w-5 h-5" />
                <span>Competitive Pricing</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent appearance-none"
              >
                <option value="all">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
            </div>

            {/* Price Range Filter */}
            <div className="relative">
              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent appearance-none"
              >
                {priceRanges.map(range => (
                  <option key={range.value} value={range.value}>{range.label}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
            </div>

            {/* Innovation Level Filter */}
            <div className="relative">
              <select
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent appearance-none"
              >
                <option value="all">All Innovation Levels</option>
                {innovationLevels.map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Summary */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-6 text-white text-center">
            <Brain className="w-8 h-8 mx-auto mb-3" />
            <div className="text-2xl font-bold mb-1">AI Solutions</div>
            <div className="text-sm opacity-90">Starting from $299/month</div>
          </div>
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl p-6 text-white text-center">
            <Server className="w-8 h-8 mx-auto mb-3" />
            <div className="text-2xl font-bold mb-1">IT Services</div>
            <div className="text-sm opacity-90">Starting from $1,600/month</div>
          </div>
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl p-6 text-white text-center">
            <ShoppingCart className="w-8 h-8 mx-auto mb-3" />
            <div className="text-2xl font-bold mb-1">Micro SaaS</div>
            <div className="text-sm opacity-90">Starting from $199/month</div>
          </div>
          <div className="bg-gradient-to-r from-yellow-600 to-orange-600 rounded-xl p-6 text-white text-center">
            <Rocket className="w-8 h-8 mx-auto mb-3" />
            <div className="text-2xl font-bold mb-1">Emerging Tech</div>
            <div className="text-sm opacity-90">Starting from $3,500/month</div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => {
            const CategoryIcon = getCategoryIcon(service.category);
            const categoryColor = getCategoryColor(service.category);
            
            return (
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
              >
                {/* Service Header */}
                <div className={`bg-gradient-to-r ${categoryColor} p-6`}>
                  <div className="flex items-center justify-between mb-4">
                    <CategoryIcon className="w-8 h-8 text-white" />
                    <span className="px-3 py-1 bg-white/20 rounded-full text-white text-sm font-medium">
                      {service.innovationLevel}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-white/90 text-sm">{service.subcategory}</p>
                </div>

                {/* Service Content */}
                <div className="p-6">
                  <p className="text-gray-300 mb-4 line-clamp-3">{service.description}</p>
                  
                  {/* Pricing */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-white">${service.price.toLocaleString()}</span>
                      <span className="text-gray-400 ml-2">/{service.pricingModel}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400">Market Price</div>
                      <div className="text-sm text-cyan-400">{service.marketPrice}</div>
                    </div>
                  </div>

                  {/* ROI */}
                  <div className="bg-slate-700/50 rounded-lg p-3 mb-4">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-green-400 font-medium">ROI: {service.roi}</span>
                    </div>
                  </div>

                  {/* Expandable Content */}
                  <div className="space-y-4">
                    {/* Features Preview */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features</h4>
                      <div className="grid grid-cols-1 gap-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                            <CheckCircle className="w-3 h-3 text-cyan-400 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                        {service.features.length > 3 && (
                          <button
                            onClick={() => toggleServiceExpansion(service.id)}
                            className="text-cyan-400 text-sm hover:text-cyan-300 transition-colors"
                          >
                            {expandedServices.has(service.id) ? 'Show less' : `+${service.features.length - 3} more features`}
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Expanded Content */}
                    {expandedServices.has(service.id) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-4 pt-4 border-t border-slate-700"
                      >
                        {/* All Features */}
                        <div>
                          <h4 className="text-sm font-semibold text-gray-300 mb-2">All Features</h4>
                          <div className="grid grid-cols-1 gap-1">
                            {service.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                                <CheckCircle className="w-3 h-3 text-cyan-400 flex-shrink-0" />
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Benefits */}
                        <div>
                          <h4 className="text-sm font-semibold text-gray-300 mb-2">Benefits</h4>
                          <div className="grid grid-cols-1 gap-1">
                            {service.benefits.map((benefit, idx) => (
                              <div key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                                <Star className="w-3 h-3 text-yellow-400 flex-shrink-0" />
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
                                <span>{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Use Cases */}
                        <div>
                          <h4 className="text-sm font-semibold text-gray-300 mb-2">Use Cases</h4>
                          <div className="grid grid-cols-1 gap-1">
                            {service.useCases.map((useCase, idx) => (
                              <div key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                                <Target className="w-3 h-3 text-blue-400 flex-shrink-0" />
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
                                <span>{useCase}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-zion-blue-dark/30 to-zion-slate-dark/30 border border-zion-blue-light/20 rounded-2xl p-6 hover:border-zion-purple/50 transition-all duration-300 hover:scale-[1.02]"
              >
                {service.featured && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-zion-purple to-zion-cyan text-white text-xs font-bold px-3 py-1 rounded-full">
                    Featured
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-zion-slate-light text-sm mb-4">{service.description}</p>

                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline" className="text-zion-cyan border-zion-cyan/30">
                      {service.category}
                    </Badge>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-white text-sm">{service.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-zion-slate-dark/30 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-zion-slate-light text-sm">Starting Price:</span>
                      <span className="text-2xl font-bold text-zion-cyan">
                        {service.currency}{service.price}
                      </span>
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
                    </div>
                    <div className="text-zion-slate-light text-sm">
                      per {service.pricingModel}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
                    </div>
                  </div>

                  <div className="bg-zion-purple/20 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-zion-slate-light text-sm">Market Price:</span>
                      <span className="text-zion-purple font-semibold">{service.marketPrice}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-white text-sm">Key Benefits: anyanyanyanyanyanyanyanyanyanyanyanyany</h4>
                    {service.benefits.slice(0, 3).map((benefit, benefitIndex)              => (
                      <div key={benefitIndex} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                        <span className="text-zion-slate-light text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-zion-blue-light/20">
                    <div className="flex items-center justify-between">
                      <Link
                        to={service.website}
                        className="inline-flex items-center space-x-2 text-zion-cyan hover:text-zion-cyan-light transition-colors"
                      >
                        <span className="text-sm font-medium">Learn More</span>
                        <ExternalLink className="w-4 h-4" />
                      </Link>

                      <Link
                        to={`mailto:${service.contactEmail}?subject=Pricing Inquiry for ${service.title}`}
                        className="inline-flex items-center space-x-2 text-zion-purple hover:text-zion-purple-light transition-colors"
                      >
                        <span className="text-sm font-medium">Get Quote</span>
                        <Mail className="w-4 h-4" />
                      </Link>
=======

                        {/* Target Audience */}
                        <div>
                          <h4 className="text-sm font-semibold text-gray-300 mb-2">Target Audience</h4>
                          <div className="flex flex-wrap gap-2">
                            {service.targetAudience.map((audience, idx) => (
                              <span key={idx} className="px-2 py-1 bg-slate-700 rounded-full text-xs text-gray-300">
                                {audience}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* CTA Button */}
                    <div className="pt-4">
                      <a
                        href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                        className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center space-x-2"
                      >
                        <span>Get Quote</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
                    </div>
                  </div>
                </div>
              </motion.div>
          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <div className="text-zion-slate-light text-lg mb-4">No services found matching your criteria</div>
              <Button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedPricing('all');
                }}
                className="bg-zion-cyan hover:bg-zion-cyan-light"
              >
                View All Services
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-zion-blue-dark/20 to-zion-purple/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our competitive pricing combined with exceptional value and support
            </p>
          </div>

          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                tier: 'Starter', 
                icon: Star, 
                color: 'from-green-500 to-emerald-500',
                price: 'Under $200',
                description: 'Perfect for small businesses and startups',
                features: ['Basic features', 'Standard support', 'Essential tools']
              },
              { 
                tier: 'Professional', 
                icon: Gem, 
                color: 'from-blue-500 to-cyan-500',
                price: '$200 - $999',
                description: 'Ideal for growing businesses',
                features: ['Advanced features', 'Priority support', 'Integration APIs']
              },
              { 
                tier: 'Business', 
                icon: Crown, 
                color: 'from-purple-500 to-pink-500',
                price: '$1,000 - $2,999',
                description: 'Perfect for established enterprises',
                features: ['Enterprise features', 'Dedicated support', 'Custom solutions']
              },
              { 
                tier: 'Enterprise', 
                icon: Diamond, 
                color: 'from-red-500 to-orange-500',
                price: '$3,000+',
                description: 'For large corporations',
                features: ['Full customization', '24/7 support', 'White-label options']
              }
            ].map((tier, index)              => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center hover:border-white/20 transition-all duration-300"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${tier.color} mb-4`}>
                  <tier.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{tier.tier}</h3>
                <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                  {tier.price}
                </div>
                <p className="text-zion-slate-light mb-4">{tier.description}</p>
                <ul className="space-y-2 text-sm">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center justify-center text-zion-slate-light">
                      <Check className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-4 text-center">Filter Services by Category</h3>
            <div className="grid grid-cols-2 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-4 lg:grid-cols-6 gap-3">
              {categories.map(category              => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`p-3 rounded-lg border transition-all duration-300 text-sm font-medium ${
                    selectedCategory === category.id
                      ? `bg-gradient-to-r ${category.color} text-white border-transparent`
                      : 'bg-white/5 border-white/10 text-zion-slate-light hover:border-white/20'
                  }`}
                >
                  <div className="flex flex-col items-center space-y-2">
                    <category.icon className="w-5 h-5" />
                    <span className="text-xs">{category.name}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Pricing Table */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Detailed Services Pricing
          </h2>
          <p className="text-xl text-zion-slate-light mb-8">
            Contact us today for a personalized consultation and custom pricing quote tailored to your specific needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-zion-cyan to-zion-blue text-white hover:from-zion-cyan-light hover:to-zion-blue-light">
              <Link to="/contact">
                Request Custom Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white">
              <a href="tel:+13024640950">
                Call Now: +1 302 464 0950
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl p-8 border border-blue-500/30"
            >
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Users className="w-6 h-6 mr-2 text-blue-400" />
                Team & Enterprise Discounts
              </h3>
              <p className="text-zion-slate-light mb-6">
                Save up to 40% when you purchase multiple services or sign up for enterprise packages. 
                Perfect for teams and large organizations.
              </p>
              <div className="text-3xl font-bold text-blue-400 mb-4">Up to 40% OFF</div>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Team & Enterprise Discounts"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 font-semibold"
              >
                Get Team Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Our team of experts is ready to help you find the perfect solution for your business needs. 
              Get in touch today for a personalized consultation and custom pricing.
            </p>
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <Phone className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                <p className="text-zion-slate-light mb-3">Speak directly with our experts</p>
                <a href="tel:+13024640950" className="text-purple-400 hover:text-purple-300 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <Mail className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <p className="text-zion-slate-light mb-3">Send us a detailed message</p>
                <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:text-purple-300 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <Globe className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Visit Website</h3>
                <p className="text-zion-slate-light mb-3">Explore more services</p>
                <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors">
                  ziontechgroup.com
                </a>
              </div>
            </div>
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl p-8 border border-purple-500/30">
              <h3 className="text-2xl font-bold text-white mb-4">
                Free Consultation & Assessment
              </h3>
              <p className="text-zion-slate-light mb-6">
                Get a free 30-minute consultation to assess your business needs and find the perfect 
                combination of services for maximum ROI and growth.
              </p>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Free Consultation Request"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl"
              >
                Schedule Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-6 rounded-2xl border border-slate-600/50 text-center hover:border-cyan-500/50 transition-all duration-300"
            >
              <Phone className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
              <p className="text-gray-300">{contactInfo.phone}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-6 rounded-2xl border border-slate-600/50 text-center hover:border-cyan-500/50 transition-all duration-300"
            >
              <Mail className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-300">{contactInfo.email}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-6 rounded-2xl border border-slate-600/50 text-center hover:border-cyan-500/50 transition-all duration-300"
            >
              <MapPin className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
              <p className="text-gray-300 text-sm">{contactInfo.address}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-6 rounded-2xl border border-slate-600/50 text-center hover:border-cyan-500/50 transition-all duration-300"
            >
              <Globe className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Website</h3>
              <a href={contactInfo.website} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">
                ziontechgroup.com
              </a>
            </motion.div>
          </div>

          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center mx-auto"
            >
              Schedule a Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
=======
            );
          })}
        </div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 text-xl mb-4">No services found matching your criteria</div>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedPriceRange('all');
              }}
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>

      {/* Contact CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need Custom Pricing?</h2>
          <p className="text-xl text-cyan-100 mb-6">
            Contact us for enterprise pricing, custom solutions, and volume discounts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="flex items-center space-x-2 bg-white text-cyan-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>+1 302 464 0950</span>
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="flex items-center space-x-2 bg-white text-cyan-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>kleber@ziontechgroup.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensivePricingGuide2027;
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089

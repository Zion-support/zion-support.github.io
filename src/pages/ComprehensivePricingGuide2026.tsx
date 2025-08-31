import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Cpu, 
  Database, 
  Network, 
  Globe,
  ArrowRight,
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
  CheckCircle,
>>>>>>> d4314cba993c451b7b958557c24f2c20ed57c961
  Star,
  Zap,
  Shield,
  Users,
  Globe,
  CreditCard,
  Clock,
  Headphones,
  Rocket,
  Award,
  Lock,
  Brain,
  Atom,
  Factory,
  Database,
  BarChart3,
  Workflow,
  MessageCircle,
  TrendingUp,
  Cpu,
  Cloud,
  Network,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle,
  DollarSign,
  Target,
  Eye,
  Search,
  Code,
  Microchip,
  Settings,
  Wifi,
  Activity,
  Monitor,
  Cog,
  Wrench,
  Truck,
  Package,
  Gauge,
  AlertTriangle,
  Server,
  Lock,
  BarChart,
  Users2,
  Palette,
  TrendingUp,
  Scale,
  Gauge,
  Filter,
  SortAsc,
  SortDesc,
  ChevronRight,
  ExternalLink,
} from 'lucide-react';
import SEO from '../components/SEO';
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
import { ALL_PRICING_GUIDES_2026, marketSummary2026              } from '../data/comprehensivePricingGuide2026';

>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
const ComprehensivePricingGuide2026: React.FC = (): JSX.Element => {;
  const [selectedService, setSelectedService] = useState<any>('all');
  const [selectedTier, setSelectedTier] = useState<any>('all');
} from 'lucide-react';
import { SEO              } from '../components/SEO';
import { ALL_PRICING_GUIDES_2026, marketSummary2026              } from '../data/comprehensivePricingGuide2026';

const ComprehensivePricingGuide2026: React.FC = (): JSX.Element => {;
  const [selectedService, setSelectedService] = useState<any>('all');
  const [selectedTier, setSelectedTier] = useState<any>('all');
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd

>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  const services = ['all', ...ALL_PRICING_GUIDES_2026.map(s => s.serviceName)];
  const tiers = ['all', 'Starter', 'Professional', 'Enterprise'];
  const filteredPricing = useMemo(() => {
    let filtered = ALL_PRICING_GUIDES_2026;
    if (selectedService !== 'all') {
      filtered = filtered.filter(service => service.serviceName === selectedService);
=======
  Info,
  AlertTriangle,
  CheckCircle2,
  XCircle
} from 'lucide-react';

// Import our new service data
import { INNOVATIVE_MICRO_SAAS_SERVICES_2026 } from '../data/innovativeMicroSaasServices2026';
import { INNOVATIVE_IT_SERVICES_2026 } from '../data/innovativeITServices2026';
import { INNOVATIVE_AI_SERVICES_2026 } from '../data/innovativeAIServices2026';

export default function ComprehensivePricingGuide2026() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPricingModel, setSelectedPricingModel] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');

  // Combine all services
  const allServices = useMemo(() => {
    const microSaasServices = INNOVATIVE_MICRO_SAAS_SERVICES_2026.map(service => ({
      ...service,
      type: 'Micro SAAS',
      originalData: service
    }));
    
    const itServices = INNOVATIVE_IT_SERVICES_2026.map(service => ({
      ...service,
      type: 'IT Services',
      originalData: service
    }));
    
    const aiServices = INNOVATIVE_AI_SERVICES_2026.map(service => ({
      ...service,
      type: 'AI Services',
      originalData: service
    }));

    return [...microSaasServices, ...itServices, ...aiServices];
  }, []);

  // Filter and sort services
  const filteredServices = useMemo(() => {
    let filtered = allServices;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.type === selectedCategory);
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
    }

    // Filter by pricing model
    if (selectedPricingModel !== 'all') {
      filtered = filtered.filter(service => service.pricingModel === selectedPricingModel);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Sort services
    switch (sortBy) {
      case 'name':
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'price':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'category':
        filtered.sort((a, b) => a.category.localeCompare(b.category));
        break;
      case 'type':
        filtered.sort((a, b) => a.type.localeCompare(b.type));
        break;
      default:
        break;
    }

    return filtered;

>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
      default: return <Zap className = "w-6 h-6" />};
  };

>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
      default: return 'from-gray-500 to-gray-600'}
  };
=======
  }, [allServices, selectedCategory, selectedPricingModel, searchTerm, sortBy]);

  const categories = [
    { id: 'all', name: 'All Services', count: allServices.length },
    { id: 'Micro SAAS', name: 'Micro SAAS', count: allServices.filter(s => s.type === 'Micro SAAS').length },
    { id: 'IT Services', name: 'IT Services', count: allServices.filter(s => s.type === 'IT Services').length },
    { id: 'AI Services', name: 'AI Services', count: allServices.filter(s => s.type === 'AI Services').length }
>>>>>>> d4314cba993c451b7b958557c24f2c20ed57c961
  ];

  const pricingComparison = [
    {
      feature: "AI Integration",
      zion: "Advanced AI/ML",
      competitor: "Basic AI",
      advantage: "3x more intelligent"
    },
    {
      feature: "Security",
      zion: "Enterprise-grade",
      competitor: "Standard",
      advantage: "Bank-level security"
    },
    {
      feature: "Support",
      zion: "24/7 Expert",
      competitor: "Business hours",
      advantage: "Always available"
    },
    {
      feature: "Customization",
      zion: "Fully customizable",
      competitor: "Limited options",
      advantage: "Tailored solutions"
    },
    {
      feature: "Scalability",
      zion: "Unlimited scaling",
      competitor: "Limited scaling",
      advantage: "Grow without limits"
    }
  ];

  const sortOptions = [
    { value: 'name', label: 'Name' },
    { value: 'price', label: 'Price' },
    { value: 'category', label: 'Category' },
    { value: 'type', label: 'Type' }
  ];

  // Calculate pricing statistics
  const pricingStats = useMemo(() => {
    const prices = allServices.map(s => s.price);
    const avgPrice = prices.reduce((a, b) => a + b, 0) / prices.length;
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);
    
    return {
      average: avgPrice,
      minimum: minPrice,
      maximum: maxPrice,
      total: allServices.length
    };
  }, [allServices]);

>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
>>>>>>> d4314cba993c451b7b958557c24f2c20ed57c961
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium mb-6">
              <DollarSign className="w-4 h-4" />
              2026 Comprehensive Pricing Guide
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Zion Tech Group
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                Pricing Guide 2026
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Discover our comprehensive suite of AI-powered services and solutions with transparent pricing. 
              Save up to 87% compared to market rates while getting enterprise-grade technology and support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+1 302 464 0950"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2 inline" />
                Call +1 302 464 0950
              </a>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-purple-400/50 text-purple-400 font-semibold rounded-xl hover:bg-purple-400/10 hover:border-purple-400 transition-all duration-300"
              >
                Get Custom Quote
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Complete Service Portfolio
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive range of AI-powered services and solutions, 
              each designed to deliver exceptional value and competitive advantage.
            </p>
          </motion.div>

          {serviceCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <div className="text-4xl font-bold text-cyan-400 mb-2">{pricingStats.total}</div>
              <div className="text-slate-300">Total Services</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 text-center"
            >
              <div className="text-4xl font-bold text-green-400 mb-2">${pricingStats.average.toLocaleString()}</div>
              <div className="text-slate-300">Average Price</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 text-center"
            >
              <div className="text-4xl font-bold text-blue-400 mb-2">${pricingStats.minimum.toLocaleString()}</div>
              <div className="text-slate-300">Starting Price</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 text-center"
            >
              <div className="text-4xl font-bold text-purple-400 mb-2">${pricingStats.maximum.toLocaleString()}</div>
              <div className="text-slate-300">Premium Price</div>
            </motion.div>
          </div>
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus: anyanyanyanyanyanyanyanyanyanyanyanyanyoutline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {services.map(service               => (
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
                      <option key={service} value={service} className="bg-zinc-800 text-white">
                        {service === 'all' ? 'All Services' : service}
                      </option>
                    ))}
                  </select>
                </div>
                {/* Tier Filter */}
                <div>
                  <label className="block text-white mb-2 font-medium">Select Tier</label>
                  <select
                    value={selectedTier}
                    onChange={(e) => setSelectedTier(e.target.value)}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus: anyanyanyanyanyanyanyanyanyanyanyanyanyoutline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {tiers.map(tier               => (
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
                      <option key={tier} value={tier} className="bg-zinc-800 text-white">
                        {tier === 'all' ? 'All Tiers' : tier}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Pricing Details Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {filteredPricing.map((servicePricing, index) => (
              <motion.div
                key={servicePricing.serviceId}
                initial = {
  { opacity: 0,
  y: 20 
}}
                animate = {
  { opacity: 1,
  y: 0 
}}
                transition = {
  { duration: 0.6,
  delay: index * 0.1 
}}
                className="mb-16"
                {/* Service Header */}
                <div className="text-center mb-12">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="p-3 bg-blue-500/20 rounded-xl">
                      {getServiceIcon(servicePricing.serviceName)}
                    </div>
                    <h2 className="text-4xl font-bold text-white">{servicePricing.serviceName}</h2>
                  </div>
                  <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
                    {servicePricing.marketAnalysis.valueProposition}
                  </p>
                </div>
                {/* Market Analysis */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 mb-8">
                  <h3 className="text-2xl font-bold text-white mb-6 text-center">Market Analysis</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400 mb-2">{servicePricing.marketAnalysis.averagePrice}</div>
                      <div className="text-zinc-400">Average Market Price</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-400 mb-2">{servicePricing.marketAnalysis.priceRange}</div>
                      <div className="text-zinc-400">Price Range</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-400 mb-2">{servicePricing.marketAnalysis.competitors.length}</div>
                      <div className="text-zinc-400">Competitors</div>
                    </div>
                  </div>
                  {/* Competitors */}
                  <div className="mt-6">
                    <h4 className="text-lg font-semibold text-white mb-3 text-center">Competitor Pricing</h4>
                    <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 gap-3">
                      {servicePricing.marketAnalysis.competitors.map((competitor, idx)               => (
                        <div key={idx} className="bg-white/5 rounded-lg p-3 text-center">
                          <span className="text-zinc-300">{competitor}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Pricing Tiers */}
                <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-3 gap-6">
                  {servicePricing.pricingTiers.map((tier, tierIndex)               => (
                    <motion.div
                      key={tier.name}
                      initial = {
  { opacity: 0,
  y: 20 
}}
                      animate = {
  { opacity: 1,
  y: 0 
}}
                      transition = {
  { duration: 0.6,
  delay: (index * 0.1) + (tierIndex * 0.1) 
}}
                      className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300"
                      {/* Tier Header */}
                      <div className="text-center mb-6">
                        <div className={`inline-block p-2 rounded-lg bg-gradient-to-r ${getTierColor(tier.name)} mb-4`}>
                          <Star className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                        <div className="text-4xl font-bold text-white mb-1">
                          ${tier.price.toLocaleString()}
                        </div>
                        <div className="text-zinc-400">/{tier.billingCycle}</div>
                      </div>
                      {/* Features */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3">Features</h4>
                        <div className="space-y-2">
                          {tier.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm text-zinc-300">
                              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      {/* Limitations */}
                      {tier.limitations.length > 0 && (
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-white mb-3">Limitations</h4>
                          <div className="space-y-2">
                            {tier.limitations.map((limitation, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-sm text-zinc-300">
                                <div className="w-2 h-2 bg-red-400 rounded-full flex-shrink-0"></div>
                                <span>{limitation}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      {/* Target Audience */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3">Target Audience</h4>
                        <div className="flex flex-wrap gap-2">
                          {tier.targetAudience.map((audience, idx) => (
                            <span key={idx} className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">
                              {audience}
                            </span>
                          ))}
                        </div>
                      </div>
                      {/* Key Metrics */}
                      <div className="space-y-3 mb-6">
                        <div className="flex justify-between">
                          <span className="text-zinc-400">ROI:</span>
                          <span className="text-white font-medium">{tier.roi}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-zinc-400">Setup Time:</span>
                          <span className="text-white font-medium">{tier.setupTime}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-zinc-400">Support:</span>
                          <span className="text-white font-medium">{tier.support}</span>
                        </div>
                      </div>
                      {/* Market Comparison */}
                      <div className="mb-6 p-3 bg-white/5 rounded-lg">
                        <div className="text-center">
                          <div className="text-sm text-zinc-400 mb-1">Market Position</div>
                          <div className="text-white font-medium">{tier.marketComparison}</div>
                        </div>
                      </div>
                      {/* Volume Discounts */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3">Volume Discounts</h4>
                        <div className="space-y-2">
                          {tier.volumeDiscounts.map((discount, idx) => (
                            <div key={idx} className="text-sm text-zinc-300 text-center p-2 bg-white/5 rounded-lg">
                              {discount}
                            </div>
                          ))}
                        </div>
                      </div>
                      {/* CTA Button */}
                      <button className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
                        Get Started
                      </button>
                    </motion.div>
                  ))}
                </div>
                {/* Special Offers */}
                <div className="mt-8 bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-2xl p-6 border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-6 text-center">Special Offers</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-white/5 rounded-lg">
                      <div className="text-2xl font-bold text-green-400 mb-2">{servicePricing.specialOffers.annualDiscount}</div>
                      <div className="text-zinc-400">Annual Billing</div>
                    </div>
                    <div className="text-center p-4 bg-white/5 rounded-lg">
                      <div className="text-2xl font-bold text-blue-400 mb-2">{servicePricing.specialOffers.enterpriseDiscount}</div>
                      <div className="text-zinc-400">Enterprise</div>
                    </div>
                    <div className="text-center p-4 bg-white/5 rounded-lg">
                      <div className="text-2xl font-bold text-purple-400 mb-2">{servicePricing.specialOffers.startupProgram}</div>
                      <div className="text-zinc-400">Startup Program</div>
                    </div>
                    <div className="text-center p-4 bg-white/5 rounded-lg">
                      <div className="text-2xl font-bold text-yellow-400 mb-2">{servicePricing.specialOffers.referralProgram}</div>
                      <div className="text-zinc-400">Referral Program</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        {/* Market Trends Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-green-600/20 rounded-3xl p-12 border border-white/10"
              <h2 className="text-4xl font-bold text-white mb-8 text-center">Market Trends & Competitive Advantages</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Key Trends */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Key Trends</h3>
                  <div className="space-y-4">
                    {marketSummary2026.keyTrends.map((trend, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-zinc-300">{trend}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Competitive Advantages */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Competitive Advantages</h3>
                  <div className="space-y-4">
                    {marketSummary2026.competitiveAdvantages.map((advantage, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-zinc-300">{advantage}</span>
                      </div>
                    ))}
                  </div>
                </div>
=======
        </div>
      </div>

      {/* Filters and Search Section */}
      <div className="bg-slate-800/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Search */}
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    Sort by {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 group"
            >
              {/* Service Type Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  service.type === 'Micro SAAS' ? 'bg-green-500/20 text-green-400' :
                  service.type === 'IT Services' ? 'bg-blue-500/20 text-blue-400' :
                  'bg-purple-500/20 text-purple-400'
                }`}>
                  {service.type}
                </span>
                <span className="text-slate-400 text-sm">{service.innovationLevel}</span>
              </div>

              {/* Service Title */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-slate-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Key Features */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-slate-400 mb-3 uppercase tracking-wide">
                  Key Features
                </h4>
                <div className="space-y-2">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate-300">{feature}</span>
                    </div>
                  ))}
                  {service.features.length > 3 && (
                    <div className="text-xs text-slate-500">
                      +{service.features.length - 3} more features
                    </div>
                  )}
>>>>>>> d4314cba993c451b7b958557c24f2c20ed57c961
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {category.name}
                </h3>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                    viewport={{ once: true }}
                    className={`relative bg-slate-800/50 border rounded-2xl p-8 ${
                      service.popular 
                        ? 'border-purple-500 shadow-2xl shadow-purple-500/25' 
                        : 'border-slate-700'
                    }`}
                  >
                    {service.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          Most Popular
                        </span>
                      </div>
                    )}
                    
                    <div className="text-center mb-6">
                      <h4 className="text-xl font-bold text-white mb-3">{service.name}</h4>
                      <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                    </div>

                    <div className="mb-6">
                      <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-white">{service.startingPrice}</div>
                          <div className="text-sm text-gray-400">Zion Price</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg text-gray-400 line-through">{service.marketPrice}</div>
                          <div className="text-sm text-gray-400">Market Price</div>
                        </div>
                      </div>
                      <div className="text-center">
                        <span className="inline-block bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
                          Save {service.savings}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link
                      to={service.link}
                      className="w-full block text-center py-3 px-6 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-cyan-600 transition-all duration-300"
                    >
                      Learn More
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              See how our services compare to competitors and why we're the smart choice for your business.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden">
              <div className="grid grid-cols-4 bg-slate-700/50 p-4 font-semibold text-white">
                <div>Feature</div>
                <div className="text-center">Zion Tech Group</div>
                <div className="text-center">Competitors</div>
                <div className="text-center">Advantage</div>
              </div>
              
              {pricingComparison.map((row, index) => (
                <div key={index} className="grid grid-cols-4 p-4 border-t border-slate-700">
                  <div className="text-gray-300 font-medium">{row.feature}</div>
                  <div className="text-center text-green-400 font-semibold">{row.zion}</div>
                  <div className="text-center text-gray-400">{row.competitor}</div>
                  <div className="text-center text-cyan-400 font-medium">{row.advantage}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Our team of experts is ready to help you choose the right services and pricing plan for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-cyan-600 hover:bg-slate-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>
          </div>
        </div>
      </div>

      {/* Footer Contact */}
      <div className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Contact Information</h3>
              <div className="space-y-3 text-slate-300">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
              <div className="space-y-2 text-slate-300">
                <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">
                  Home
                </a>
                <a href="https://ziontechgroup.com/services" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">
                  Services
                </a>
                <a href="https://ziontechgroup.com/about" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">
                  About
                </a>
                <a href="https://ziontechgroup.com/contact" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">
                  Contact
                </a>
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Service Categories</h3>
              <div className="space-y-2 text-slate-300">
                <span className="block">AI Services</span>
                <span className="block">IT Services</span>
                <span className="block">Micro SAAS</span>
                <span className="block">Cloud Solutions</span>
                <span className="block">Cybersecurity</span>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Get Started</h3>
              <p className="text-slate-300 mb-4">
                Ready to transform your business with our innovative solutions?
              </p>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Service Inquiry"
                className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-12 pt-8 text-center">
            <p className="text-slate-400">
              © 2026 Zion Tech Group. All rights reserved. | 
              <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 ml-1">
                ziontechgroup.com
              </a>
>>>>>>> d4314cba993c451b7b958557c24f2c20ed57c961
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a
                href="tel:+1 302 464 0950"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2 inline" />
                Call +1 302 464 0950
              </a>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-purple-400/50 text-purple-400 font-semibold rounded-xl hover:bg-purple-400/10 hover:border-purple-400 transition-all duration-300"
              >
                Get Custom Quote
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-300">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-purple-400 mr-2" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-purple-400 mr-2" />
                <span>Custom Pricing</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-purple-400 mr-2" />
                <span>24/7 Support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <a href="tel:+1 302 464 0950" className="text-gray-300 hover:text-purple-400 transition-colors">
                +1 302 464 0950
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-purple-400 transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-gray-300">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensivePricingGuide2026;

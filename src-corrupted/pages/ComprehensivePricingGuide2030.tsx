import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Star, 
  TrendingUp, 
  Zap, 
  Shield, 
  Brain, 
  Cloud, 
  Database, 
  Globe,
  ArrowRight,
  CheckCircle,
  DollarSign,
  Clock,
  Users,
  Target,
  Award,
  Rocket,
  Atom,
  Lock,
  Cpu,
  Leaf,
  ShoppingCart,
  BarChart3,
  Code,
  Server,
  Smartphone,
  Network,
  Eye,
  PenTool,
  Heart,
  Building,
  Car,
  Factory,
  City,
  CheckCircle2,
  ArrowUpRight,
  Play,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  Github,
  Sparkles,
  Crown,
  Flame,
  Infinity,
  Gauge,
  GitFork,
  Truck,
  Scale,
  Building2,
  Home,
  Calculator,
  PieChart,
  TrendingDown,
  Calendar,
  CreditCard,
  Gift,
  ShieldCheck,
  Zap as Lightning
} from 'lucide-react';
import { REVOLUTIONARY_SERVICES_2030, serviceCategories2030, pricingBenefits2030 } from '../data/revolutionaryServices2030';
import { SEO } from '../components/SEO';

export default function ComprehensivePricingGuide2030(props: any) {
  const [selectedCategory, setSelectedCategory] = useState<any>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<any>('all');
  const [selectedROI, setSelectedROI] = useState<any>('all');
  const [sortBy, setSortBy] = useState<any>('featured');
  const [viewMode, setViewMode] = useState<any>('grid');
  const [selectedService, setSelectedService] = useState<any>(null);
  const [showROICalculator, setShowROICalculator] = useState<any>(false);

  const filteredServices = REVOLUTIONARY_SERVICES_2030.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    
    const matchesPrice = selectedPriceRange === 'all' || 
                        (selectedPriceRange === 'budget' && service.price < 10000) ||
                        (selectedPriceRange === 'mid' && service.price >= 10000 && service.price < 30000) ||
                        (selectedPriceRange === 'premium' && service.price >= 30000);

    const matchesROI = selectedROI === 'all' || 
                       (selectedROI === 'low' && parseInt(service.roi.replace('%', '')) < 300) ||
                       (selectedROI === 'medium' && parseInt(service.roi.replace('%', '')) >= 300 && parseInt(service.roi.replace('%', '')) < 600) ||
                       (selectedROI === 'high' && parseInt(service.roi.replace('%', '')) >= 600);

    return matchesCategory && matchesPrice && matchesROI;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'roi':
        return parseInt(b.roi.replace('%', '')) - parseInt(a.roi.replace('%', '').replace('%', ''));
      case 'delivery':
        return parseInt(a.estimatedDelivery.split('-')[0]) - parseInt(b.estimatedDelivery.split('-')[0]);
      default:
        return b.innovationLevel === 'Revolutionary' ? 1 : -1;
    }
  });

  const getCategoryIcon = (props: any) => {
    switch (category) {
      case 'Quantum Computing': return <Atom className="w-6 h-6" />;
      case 'Neural Technology': return <Brain className="w-6 h-6" />;
      case 'AI & Automation': return <Cpu className="w-6 h-6" />;
      case 'Space Technology': return <Rocket className="w-6 h-6" />;
      case 'IT Services': return <Server className="w-6 h-6" />;
      case 'Accessibility': return <Eye className="w-6 h-6" />;
      default: return <Code className="w-6 h-6" />;
    }
  };

  const getInnovationLevelColor = (props: any) => {
    switch (level) {
      case 'Revolutionary': return 'from-purple-600 to-pink-600';
      case 'Advanced': return 'from-blue-600 to-cyan-600';
      case 'Innovative': return 'from-green-600 to-emerald-600';
      default: return 'from-gray-600 to-slate-600';
    }
  };

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const pricingTiers = [
    {
      name: 'Starter',
      icon: Zap,
      price: { monthly: 9999, annual: 8999 },
      description: 'Perfect for small businesses starting their digital transformation journey',
      features: [
        'Basic AI Integration',
        'Cloud Infrastructure Setup',
        'Security Monitoring',
        'Email Support',
        'Monthly Reports',
        'Up to 10 Users'
      ],
      color: 'from-blue-500 to-cyan-600',
      popular: false,
      savings: '10%'
    },
    {
      name: 'Professional',
      icon: Star,
      price: { monthly: 24999, annual: 22499 },
      description: 'Ideal for growing companies with advanced technology needs',
      features: [
        'Everything in Starter',
        'Advanced AI Solutions',
        'Quantum Computing Access',
        '24/7 Support',
        'Priority Support',
        'Up to 100 Users',
        'Custom Integrations',
        'Quarterly Strategy Sessions'
      ],
      color: 'from-purple-500 to-pink-600',
      popular: true,
      savings: '10%'
    },
    {
      name: 'Enterprise',
      icon: Crown,
      price: { monthly: 49999, annual: 44999 },
      description: 'Comprehensive solutions for large enterprises and corporations',
      features: [
        'Everything in Professional',
        'Custom AI Development',
        'Full Digital Transformation',
        'Quantum Security',
        'Dedicated Account Manager',
        'Unlimited Users',
        'Onsite Support',
        'Custom SLA Agreements'
      ],
      color: 'from-amber-500 to-orange-600',
      popular: false,
      savings: '10%'
    }
  ];

  const addOnServices = [
    {
      name: 'Quantum AI Model Training',
      description: 'Custom quantum AI model development and training',
      price: { monthly: 15000, annual: 135000 },
      icon: Brain,
      category: 'Quantum Computing'
    },
    {
      name: 'Neural Interface Development',
      description: 'Custom neural interface solutions',
      price: { monthly: 25000, annual: 225000 },
      icon: Cpu,
      category: 'Neural Technology'
    },
    {
      name: 'Space Technology Integration',
      description: 'Space-based services and satellite integration',
      price: { monthly: 35000, annual: 315000 },
      icon: Rocket,
      category: 'Space Technology'
    },
    {
      name: 'AI-Powered Cybersecurity',
      description: 'Advanced AI-driven security solutions',
      price: { monthly: 12000, annual: 108000 },
      icon: Shield,
      category: 'Cybersecurity'
    }
  ];

  return (
    <>
      <SEO 
        title="Comprehensive Pricing Guide 2030 - Zion Tech Group"
        description="Complete pricing guide for revolutionary 2030 services including quantum computing, neural interfaces, space technology, and advanced AI solutions."
        canonical="/comprehensive-pricing-guide-2030"
        url="https://ziontechgroup.com/comprehensive-pricing-guide-2030"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="space-y-8"
            >
              <div className="flex items-center justify-center space-x-2 mb-6">
                <DollarSign className="w-8 h-8 text-green-400" />
                <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                  Pricing Guide 2030
                </h1>
                <Calculator className="w-8 h-8 text-blue-400" />
              </div>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Transparent pricing for revolutionary 2030 services. Discover the true cost and ROI of 
                quantum computing, neural interfaces, space technology, and advanced AI solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-300">
                  Transparent Pricing
                </span>
                <span className="px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-300">
                  ROI Calculator
                </span>
                <span className="px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300">
                  Custom Quotes
                </span>
                <span className="px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300">
                  Flexible Plans
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Tiers Section */}
        <section className="px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Choose Your Transformation Plan</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Select the perfect plan for your business needs. All plans include our revolutionary 2030 technology stack.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-3xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 ${
                    tier.popular ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/20' : 'border-slate-700'
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${tier.color} mb-4`}>
                      <tier.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-gray-400">{tier.description}</p>
                  </div>

                  <div className="text-center mb-8">
                    <div className="mb-2">
                      <span className="text-4xl font-bold text-white">${tier.price.monthly.toLocaleString()}</span>
                      <span className="text-gray-400">/month</span>
                    </div>
                    <div className="text-sm text-gray-400 mb-4">
                      ${tier.price.annual.toLocaleString()}/year
                      <span className="text-green-400 ml-2">Save {tier.savings}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3 text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                    tier.popular 
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white' 
                      : 'bg-slate-700 hover:bg-slate-600 text-white border border-slate-600'
                  }`}>
                    Get Started
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Add-on Services */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Add-on Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Enhance your plan with specialized services and custom solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              {addOnServices.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="text-center mb-4">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 mb-3">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                    <div className="text-2xl font-bold text-cyan-400 mb-2">
                      ${service.price.monthly.toLocaleString()}
                      <span className="text-sm text-gray-400">/month</span>
                    </div>
                    <div className="text-sm text-gray-400">
                      ${service.price.annual.toLocaleString()}/year
                    </div>
                  </div>
                  <button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300">
                    Add Service
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ROI Calculator Section */}
        <section className="px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-3xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">ROI Calculator</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Calculate the return on investment for our revolutionary 2030 services and see how they can transform your business.
              </p>
              
              <button
                onClick={() => setShowROICalculator(!showROICalculator)}
                className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2"
              >
                <Calculator className="w-5 h-5" />
                <span>Open ROI Calculator</span>
              </button>

              {showROICalculator && (
                <div className="mt-12 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 max-w-4xl mx-auto">
                  <h3 className="text-2xl font-bold text-white mb-6">Calculate Your ROI</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-gray-300 mb-2">Current Monthly Revenue</label>
                      <input type="number"
                        placeholder="Enter your current monthly revenue"
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                       />
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2">Service Investment (Monthly)</label>
                      <select className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
                        <option>Select a service</option>
                        {REVOLUTIONARY_SERVICES_2030.map(service => (
                          <option key={service.id} value={service.price}>
                            {service.title} - ${service.price.toLocaleString()}/month
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div className="mt-8 text-center">
                    <button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300">
                      Calculate ROI
                    </button>
                  </div>

                  <div className="mt-8 p-6 bg-green-500/10 border border-green-500/20 rounded-xl">
                    <h4 className="text-lg font-semibold text-white mb-4">Estimated Results</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                      <div>
                        <div className="text-3xl font-bold text-green-400">500%</div>
                        <div className="text-gray-400">ROI</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-blue-400">$150K</div>
                        <div className="text-gray-400">Additional Revenue</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-purple-400">6 months</div>
                        <div className="text-gray-400">Payback Period</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Services Pricing Grid */}
        <section className="px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Individual Service Pricing</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Detailed pricing for each revolutionary 2030 service with comprehensive feature breakdowns.
              </p>
            </div>

            {/* Filters */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 mb-8">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  <option value="all">All Categories</option>
                  {serviceCategories2030.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>

                <select
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)}
                  className="px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  <option value="all">All Price Ranges</option>
                  <option value="budget">Under $10K</option>
                  <option value="mid">$10K - $30K</option>
                  <option value="premium">$30K+</option>
                </select>

                <select
                  value={selectedROI}
                  onChange={(e) => setSelectedROI(e.target.value)}
                  className="px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  <option value="all">All ROI Levels</option>
                  <option value="low">Under 300%</option>
                  <option value="medium">300% - 600%</option>
                  <option value="high">600%+</option>
                </select>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="roi">ROI: High to Low</option>
                  <option value="delivery">Fastest Delivery</option>
                </select>
              </div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${getInnovationLevelColor(service.innovationLevel)}`}>
                        {getCategoryIcon(service.category)}
                      </div>
                      <div className="text-right">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          service.innovationLevel === 'Revolutionary' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' :
                          service.innovationLevel === 'Advanced' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' :
                          'bg-green-500/20 text-green-300 border border-green-500/30'
                        }`}>
                          {service.innovationLevel}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">{service.description}</p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm">Price:</span>
                        <span className="text-2xl font-bold text-cyan-400">
                          ${service.price.toLocaleString()}
                          <span className="text-sm text-gray-400">/{service.pricingModel}</span>
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm">ROI:</span>
                        <span className="text-green-400 font-semibold">{service.roi}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm">Delivery:</span>
                        <span className="text-yellow-400 text-sm">{service.estimatedDelivery}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-2 py-1 bg-slate-700/50 text-xs text-gray-300 rounded-md">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => setSelectedService(service)}
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105"
                    >
                      View Details
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredServices.length === 0 && (
              <div className="text-center py-20">
                <Search className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-400 mb-2">No services found</h3>
                <p className="text-gray-500">Try adjusting your search criteria or filters</p>
              </div>
            )}
          </div>
        </section>

        {/* Contact Section */}
        <section className="px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-3xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Contact our team to discuss your specific needs and get a customized quote for our revolutionary 2030 services.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="flex items-center justify-center space-x-3 text-gray-300">
                  <Phone className="w-6 h-6 text-cyan-400" />
                  <span>{contactInfo.phone}</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-gray-300">
                  <Mail className="w-6 h-6 text-purple-400" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-gray-300">
                  <MapPin className="w-6 h-6 text-pink-400" />
                  <span>{contactInfo.address}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`mailto:${contactInfo.email}?subject=Pricing Inquiry for 2030 Services`}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2"
                >
                  <Mail className="w-5 h-5" />
                  <span>Get Custom Quote</span>
                </a>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call for Pricing</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <div className="bg-slate-800 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${getInnovationLevelColor(selectedService.innovationLevel)}`}>
                    {getCategoryIcon(selectedService.category)}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white">{selectedService.title}</h2>
                    <p className="text-gray-400">{selectedService.category} • {selectedService.subcategory}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="p-2 hover:bg-slate-700 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6 text-gray-400" />
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Description</h3>
                  <p className="text-gray-300 mb-6">{selectedService.description}</p>

                  <h3 className="text-xl font-semibold text-white mb-4">Features</h3>
                  <ul className="space-y-2 mb-6">
                    {selectedService.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2 text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-xl font-semibold text-white mb-4">Benefits</h3>
                  <ul className="space-y-2 mb-6">
                    {selectedService.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center space-x-2 text-gray-300">
                        <Star className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="bg-slate-700/50 rounded-2xl p-6 mb-6">
                    <h3 className="text-xl font-semibold text-white mb-4">Pricing & Details</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Price:</span>
                        <span className="text-3xl font-bold text-cyan-400">
                          ${selectedService.price.toLocaleString()}
                          <span className="text-sm text-gray-400">/{selectedService.pricingModel}</span>
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">ROI:</span>
                        <span className="text-green-400 font-semibold">{selectedService.roi}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Delivery:</span>
                        <span className="text-yellow-400">{selectedService.estimatedDelivery}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Support:</span>
                        <span className="text-white capitalize">{selectedService.supportLevel}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-700/50 rounded-2xl p-6 mb-6">
                    <h3 className="text-xl font-semibold text-white mb-4">Use Cases</h3>
                    <div className="space-y-2">
                      {selectedService.useCases.map((useCase, index) => (
                        <div key={index} className="text-gray-300 text-sm">• {useCase}</div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-slate-700/50 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">Target Audience</h3>
                    <div className="space-y-2">
                      {selectedService.targetAudience.map((audience, index) => (
                        <div key={index} className="text-gray-300 text-sm">• {audience}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-700">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={`mailto:${contactInfo.email}?subject=Pricing Inquiry for ${selectedService.title}`}
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Get Quote</span>
                  </a>
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// Helper components
const X = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);
</motion>
</motion>
</motion>
</motion>
</SEO>
</any>
</any>
</any>
</any>
</any>
</any>
</any>
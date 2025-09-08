import React, { useState, useMemo } from 'react';
import { motion  } from 'framer-motion';
import { Link  } from 'react-router-dom';
import { CheckCircle, 
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
  Users,
  Clock,
  Calendar,
  Check,
  X,
  Crown,
  Rocket,
  Cpu,
  Lock,
  Heart,
  Sparkles
 } from 'lucide-react';
import { INNOVATIVE_SERVICES_2025  } from '@/data/innovativeServices2025';
import { SEO  } from '@/components/SEO';

const ComprehensivePricingGuide2030: React.FC = (): JSX.Element => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('price');

  const services = INNOVATIVE_SERVICES_2025;

  const categories = useMemo(() => {
    const cats = services.reduce((acc, service) => {
      if (!acc.includes(service.category)) {
        acc.push(service.category);
      }
      return acc;
    }, [] as string[]);
    return ['all', ...cats];
  }, [services]);

  const pricingModels = ['all', 'monthly', 'annual', 'enterprise'];

  const filteredServices = useMemo(() => {
    let filtered = services;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    if (selectedPricingModel !== 'all') {
      filtered = filtered.filter(service => service.pricingModel === selectedPricingModel);
    }

    return filtered;
  }, [services, selectedCategory, selectedPricingModel]);

  const getCategoryIcon = (category: string)  => {
    switch (category) {
      case 'AI & Analytics':
      case 'AI & Sales':
      case 'AI & Compliance':
      case 'AI & Communication':
      case 'AI & Customer Experience':
      case 'AI & Content':
      case 'AI & Finance':
        return Brain;
      case 'Cloud & DevOps':
        return Server;
      case 'IoT & Digital Twin':
        return Cpu;
      case 'Quantum Computing':
        return Rocket;
      default:
        return Zap;
    }
  };

  const getCategoryColor = (category: string)  => {
    switch (category) {
      case 'AI & Analytics':
      case 'AI & Sales':
      case 'AI & Compliance':
      case 'AI & Communication':
      case 'AI & Customer Experience':
      case 'AI & Content':
      case 'AI & Finance':
        return 'from-purple-600 to-pink-600';
      case 'Cloud & DevOps':
        return 'from-blue-600 to-cyan-600';
      case 'IoT & Digital Twin':
        return 'from-green-600 to-emerald-600';
      case 'Quantum Computing':
        return 'from-indigo-600 to-purple-600';
      default:
        return 'from-gray-600 to-slate-600';
    }
  };

  const pricingTiers = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      price: 299,
      features: [
        'Basic AI features',
        'Email support',
        'Up to 5 users',
        'Standard integrations',
        'Community forum access',
        'Basic analytics',
        'Mobile app access'
      ],
      color: 'from-cyan-500 to-blue-600',
      popular: false,
      bestFor: 'Small businesses, startups, individual professionals'
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses and teams',
      price: 999,
      features: [
        'Advanced AI capabilities',
        'Priority support',
        'Up to 25 users',
        'Advanced integrations',
        'API access',
        'Custom branding',
        'Advanced analytics dashboard',
        'White-label options',
        'Training and onboarding'
      ],
      color: 'from-purple-500 to-pink-600',
      popular: true,
      bestFor: 'Growing businesses, mid-size companies, agencies'
    },
    {
      name: 'Enterprise',
      description: 'For large organizations with complex needs',
      price: 2999,
      features: [
        'Full AI suite access',
        '24/7 dedicated support',
        'Unlimited users',
        'Custom integrations',
        'White-label solutions',
        'Advanced security features',
        'SLA guarantees',
        'Dedicated account manager',
        'Custom development',
        'On-premise deployment options'
      ],
      color: 'from-indigo-500 to-purple-600',
      popular: false,
      bestFor: 'Large enterprises, government agencies, Fortune 500 companies'
    }
  ];

  const filteredServices = COMPREHENSIVE_SERVICES_INDEX_2030.filter(service => 
    selectedCategory === 'all' || service.category === selectedCategory
  );

  const sortedServices = [...filteredServices].sort((a, b) => {
    if (sortBy === 'price') return a.price - b.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    if (sortBy === 'aiScore') return b.aiScore - a.aiScore;
    if (sortBy === 'roi') {
      const aRoi = parseInt(a.roi?.match(/\d+/)?.[0] || '0');
      const bRoi = parseInt(b.roi?.match(/\d+/)?.[0] || '0');
      return bRoi - aRoi;
    }
    return 0;
  });

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  return (
    <>
      <SEO 
        title="Comprehensive Pricing Guide 2030 - Zion Tech Group"
        description="Complete pricing guide for all our innovative AI, IT, and micro SAAS services. Transparent pricing with detailed features, capabilities, and ROI analysis."
        keywords="pricing guide, AI services, IT services, micro SAAS, cloud computing, cybersecurity, data analytics, quantum computing, blockchain, IoT, pricing 2030"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
          <div className="relative container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                Comprehensive Pricing Guide 2030
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Discover our complete portfolio of innovative AI, IT, and micro SAAS services. 
                Transparent pricing with detailed features, capabilities, and proven ROI analysis.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-slate-300">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>100+ Services Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>Transparent Pricing</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>Proven ROI Results</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-12 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 border border-slate-600"
            >
              <div className="grid md:grid-cols-3 gap-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                    <p className="text-slate-300">{contactInfo.phone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                    <p className="text-slate-300">{contactInfo.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Address</h3>
                    <p className="text-slate-300">{contactInfo.address}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-8"
            >
              <h2 className="text-3xl font-bold text-white mb-6 text-center">Filter by Category</h2>
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-200 ${
                      selectedCategory === category.id
                        ? `bg-gradient-to-r ${category.color} text-white border-transparent`
                        : 'bg-slate-800 text-slate-300 border-slate-600 hover:border-slate-500'
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{category.name}</span>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Sort Options */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-center mb-8"
            >
              <div className="flex items-center gap-4 bg-slate-800 rounded-lg p-2 border border-slate-600">
                <span className="text-slate-300 text-sm font-medium">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-slate-700 text-white border border-slate-600 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  <option value="price">Price (Low to High)</option>
                  <option value="rating">Rating (High to Low)</option>
                  <option value="aiScore">AI Score (High to Low)</option>
                  <option value="roi">ROI (High to Low)</option>
                </select>
              </div>
            </motion.div>
          </div>
        </section>

      {/* Market Insights */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Market Insights & Trends
          </motion.h2>
          <div className="grid grid-cols-1 md: anygrid-cols-2 lg:grid-cols-4 gap-6">
            {marketInsights.map((insight, index)  => (
              <motion.div
                key={insight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-900/60 backdrop-blur border border-cyan-400/15 rounded-2xl p-6 text-center"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${insight.color} flex items-center justify-center mx-auto mb-4`}>
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{insight.title}</h3>
                <div className="text-3xl font-bold text-cyan-400 mb-1">{insight.value}</div>
                <div className="text-sm text-green-400 mb-2">{insight.growth} YoY</div>
                <p className="text-sm text-slate-300">{insight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Flexible Pricing Tiers
          </motion.h2>
          <div className="grid grid-cols-1 lg: anygrid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index)  => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-slate-900/60 backdrop-blur border rounded-2xl p-8 ${
                  tier.popular 
                    ? 'border-cyan-400/40 shadow-2xl shadow-cyan-400/20' 
                    : 'border-cyan-400/15'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-slate-300 mb-6">{tier.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">${tier.price}</span>
                    <span className="text-slate-400">/month</span>
                  </div>
                  <p className="text-sm text-slate-400 mb-4">Best for: {tier.bestFor}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-slate-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`block w-full text-center py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:opacity-90'
                      : 'border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10'
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Pricing Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Service Pricing Details
          </motion.h2>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 rounded-lg bg-slate-800 border border-cyan-400/20 focus: anyborder-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none text-white"
            >
              {categories.map(category  => (
                <option key={category} value={category} className="bg-slate-800 text-white">
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
            <select
              value={selectedPricingModel}
              onChange={(e) => setSelectedPricingModel(e.target.value)}
              className="px-4 py-2 rounded-lg bg-slate-800 border border-cyan-400/20 focus: anyborder-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none text-white"
            >
              {pricingModels.map(model  => (
                <option key={model} value={model} className="bg-slate-800 text-white">
                  {model === 'all' ? 'All Pricing Models' : model.charAt(0).toUpperCase() + model.slice(1)}
                </option>
              ))}
            </select>
          </div>

          {/* Services Grid */}
          <div className="grid gap-8 grid-cols-1 md: anygrid-cols-2 lg:grid-cols-3">
            {filteredServices.map((service, index)  => {
              const CategoryIcon = getCategoryIcon(service.category);
              const categoryColor = getCategoryColor(service.category);
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-6 border border-slate-600 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 group"
                >
                  {/* Service Header */}
                  <div className="mb-4">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-slate-300">{service.rating}</span>
                      </div>
                    </div>
                    <p className="text-slate-400 text-sm mb-3">{service.description}</p>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs px-2 py-1 bg-slate-700 text-slate-300 rounded">
                        {service.category}
                      </span>
                      <span className="text-xs px-2 py-1 bg-slate-700 text-slate-300 rounded">
                        {service.subcategory}
                      </span>
                    </div>
                  </div>

                  {/* Pricing & Features */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-2xl font-bold text-white">
                        {service.currency}{service.price.toLocaleString()}
                      </div>
                      <div className="text-sm text-slate-400">
                        AI Score: {service.aiScore}
                      </div>
                    </div>
                    <div className="text-sm text-slate-400 mb-3">
                      Market Price: {service.marketPrice}
                    </div>
                    <div className="text-sm text-slate-400 mb-3">
                      ROI: {service.roi}
                    </div>
                    <div className="text-sm text-slate-400 mb-3">
                      Setup Time: {service.setupTime}
                    </div>
                  </div>

                  {/* Key Benefits */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Benefits:</h4>
                    <div className="space-y-1">
                      {service.tags.slice(0, 3).map((tag, tagIndex) => (
                        <div key={tagIndex} className="flex items-center gap-2 text-xs text-slate-400">
                          <Check className="w-3 h-3 text-green-400" />
                          {tag}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contact & Action */}
                  <div className="border-t border-slate-600 pt-4">
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-slate-400">
                        <div>Phone: {service.contactInfo.phone}</div>
                        <div>Email: {service.contactInfo.email}</div>
                      </div>
                      <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center gap-2">
                        Get Quote
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="text-center mt-16"
            >
              <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 border border-slate-600">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                  Our team of experts is ready to help you choose the perfect services and create a customized solution for your business needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    Call Now: {contactInfo.phone}
                  </button>
                  <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:from-green-600 hover:to-emerald-700 transition-all duration-200 flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    Email Us
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
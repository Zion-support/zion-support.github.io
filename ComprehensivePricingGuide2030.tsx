import { ArrowRight, Brain, CheckCircle, Cpu, Mail, MapPin, Phone, Rocket, Server, TrendingUp, Zap } from 'lucide-react';
import React, { useState, useMemo } from 'react'

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'











import { INNOVATIVE_SERVICES_2025 } from '@/data/innovativeServices2025'
import { SEO } from '@/components/SEO'
const ComprehensivePricingGuide2030: React.FC = (): JSX.Element => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPricingModel, setSelectedPricingModel] = useState('all');
  const services = INNOVATIVE_SERVICES_2025;
  const categories = useMemo(() => {
    const cats = services.reduce((acc: string[], service: { category: string }) => {
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
  const getCategoryIcon = (category: string) => {
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
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI & Analytics':
      case 'AI & Sales':
      case 'AI & Compliance':
      case 'AI & Communication':
      case 'AI & Customer Experience':
      case 'AI & Content':
      case 'AI & Finance':
        return 'from-purple-600 to-pink-600'
      case 'Cloud & DevOps':
        return 'from-blue-600 to-cyan-600'
      case 'IoT & Digital Twin':
        return 'from-green-600 to-emerald-600'
      case 'Quantum Computing':
        return 'from-indigo-600 to-purple-600'
      default:
        return 'from-gray-600 to-slate-600'
    }
  };
  const pricingTiers = [
    {name: 'Starter',
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
    {name: 'Professional',
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
    {name: 'Enterprise',
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
  const marketInsights = [
    {title: 'AI Services Market',
      value: '$29.9B',
      growth: '+32.4%',
      description: 'Expected market size by 2025',
      color: 'from-purple-500 to-pink-600'
    },
    {title: 'Cloud Services Market',
      value: '$832.1B',
      growth: '+17.5%',
      description: 'Global cloud market value',
      color: 'from-blue-500 to-cyan-600'
    },
    {title: 'IoT Market',
      value: '$1.1T',
      growth: '+25.7%',
      description: 'IoT market by 2027',
      color: 'from-green-500 to-emerald-600'
    },
    {title: 'Quantum Computing',
      value: '$65.0B',
      growth: '+48.2%',
      description: 'Quantum market by 2030',
      color: 'from-indigo-500 to-purple-600'
    }
  ];
  return (<div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <SEO
        title="Comprehensive Pricing Guide 2030 - Zion Tech Group"
        description="Explore our innovative service pricing with market analysis, ROI calculations, and flexible pricing tiers for AI, Cloud, IoT, and Quantum Computing solutions."
      />
      {/* Hero Section */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-6"
            >
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Pricing Guide
              </span>
              <br />
              <span className="text-white">2030</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl sm:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto"
            >
              Transparent pricing for cutting-edge technology solutions.
              Compare market rates, calculate ROI, and choose the perfect plan for your business.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Get Custom Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/innovative-services-showcase-2025"
                className="inline-flex items-center px-8 py-4 rounded-xl border border-cyan-400/30 text-cyan-400 font-semibold hover:bg-cyan-400/10 transition-colors"
              >
                View All Services
              </Link>
            </motion.div>
          </div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketInsights.map((insight, index) => (
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
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
                  {tier.features.map((feature: string, idx: number) => (
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
              className="px-4 py-2 rounded-lg bg-slate-800 border border-cyan-400/20 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none text-white"
            >
              {categories.map(category => (
                <option key={category} value={category} className="bg-slate-800 text-white">
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
            <select
              value={selectedPricingModel}
              onChange={(e) => setSelectedPricingModel(e.target.value)}
              className="px-4 py-2 rounded-lg bg-slate-800 border border-cyan-400/20 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none text-white"
            >
              {pricingModels.map(model => (
                <option key={model} value={model} className="bg-slate-800 text-white">
                  {model === 'all' ? 'All Pricing Models' : model.charAt(0).toUpperCase() + model.slice(1)}
                </option>
              ))}
            </select>
          </div>
          {/* Services Grid */}
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {filteredServices.map((service, index) => {
              const CategoryIcon = getCategoryIcon(service.category);
              const categoryColor = getCategoryColor(service.category);
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-slate-900/60 backdrop-blur border border-cyan-400/15 hover:border-cyan-400/40 transition-all duration-300 rounded-2xl p-6 hover:shadow-2xl hover:shadow-cyan-400/10"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${categoryColor} flex items-center justify-center`}>
                      <CategoryIcon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-xs uppercase tracking-wide text-cyan-300/70 mb-1">
                        {service.innovationLevel}
                      </div>
                      <div className="text-2xl font-bold text-cyan-400">
                        {service.currency}{service.price.toLocaleString()}
                      </div>
                      <div className="text-xs text-slate-400">per {service.pricingModel}</div>
                    </div>
                  </div>
                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 text-sm mb-4 line-clamp-3">
                    {service.description}
                  </p>
                  {/* Category and ROI */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs bg-slate-800 px-2 py-1 rounded text-cyan-300">
                      {service.category}
                    </span>
                    <div className="text-right">
                      <div className="text-xs text-slate-400">ROI</div>
                      <div className="text-sm font-semibold text-green-400">{service.roi}</div>
                    </div>
                  </div>
                  {/* Market Price Comparison */}
                  <div className="mb-4 p-3 bg-slate-800/50 rounded-lg">
                    <div className="text-xs text-slate-400 mb-1">Market Price Range</div>
                    <div className="text-sm font-semibold text-white">{service.marketPrice}</div>
                    <div className="text-xs text-slate-400 mt-1">
                      Our price: {service.currency}{service.price.toLocaleString()}/{service.pricingModel}
                    </div>
                  </div>
                  {/* Key Benefits */}
                  <div className="mb-4">
                    <div className="text-xs text-slate-400 mb-2">Key Benefits: </div>
                    <div className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit: string, idx: number) => (
                        <div key={idx} className="flex items-center text-xs text-slate-300">
                          <TrendingUp className="w-3 h-3 text-blue-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* CTA */}
                  <div className="flex items-center justify-between">
                    <Link
                      to={`/services/${service.id}`}
                      className="inline-flex items-center text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      Learn More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                    <Link
                      to="/contact"
                      className="inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium hover:opacity-90 transition-opacity"
                    >
                      Get Quote
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <div className="text-slate-400 text-lg mb-4">No services found matching your criteria</div>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedPricingModel('all');
                }}
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>
      {/* ROI Calculator */}
      <section className="py-16 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl font-bold mb-6"
            >
              Calculate Your ROI
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-slate-300 mb-8"
            >
              Use our ROI calculator to estimate the return on investment for our services.
              Most clients see returns within 3-6 months.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-slate-900/60 backdrop-blur border border-cyan-400/20 rounded-2xl p-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">3-6</div>
                  <div className="text-slate-300">Months to ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">200-600%</div>
                  <div className="text-slate-300">Average ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">40-80%</div>
                  <div className="text-slate-300">Cost Reduction</div>
                </div>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Get Personalized ROI Analysis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-white mb-6"
            >
              Ready to Get Started?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-slate-300 mb-8"
            >
              Our team of experts is ready to help you choose the right services and pricing plan.
              Get in touch today for a personalized consultation.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid md:grid-cols-3 gap-8 mb-12"
            >
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-cyan-400 mb-4" />
                <div className="text-white font-semibold mb-2">Call Us</div>
                <a
                  href="tel:+13024640950"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-cyan-400 mb-4" />
                <div className="text-white font-semibold mb-2">Email Us</div>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-cyan-400 mb-4" />
                <div className="text-white font-semibold mb-2">Visit Us</div>
                <div className="text-slate-300 text-center">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 rounded-xl border border-cyan-400/30 text-cyan-400 font-semibold hover:bg-cyan-400/10 transition-colors"
              >
                Request a Quote
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Footer CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="text-slate-300 mb-6">
              <strong>Zion Tech Group</strong> - Your partner in digital transformation and innovation.
              Visit us at{' '}
              <a
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                ziontechgroup.com
              </a>
              {' '}to explore our full range of services and solutions.
            </div>
            <div className="text-sm text-slate-400">
              All pricing includes comprehensive support, documentation, and integration assistance.
              Custom enterprise solutions available with volume discounts and dedicated support.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default ComprehensivePricingGuide2030;
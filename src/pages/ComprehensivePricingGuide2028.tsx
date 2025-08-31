import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Brain, Shield, Truck, TrendingUp, Zap, Target, CheckCircle, ArrowRight,
  BarChart3, Cpu, Eye, AlertTriangle, Clock, DollarSign, Users, Globe,
  Activity, Network, Database, Rocket, Atom, Star, Award, Sparkles,
  Lightbulb, Code, Server, Cloud, Lock, Key, Search, Filter, Crown
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function ComprehensivePricingGuide2028() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPlan, setSelectedPlan] = useState('professional');

  const categories = [
    { id: 'all', name: 'All Services', icon: Sparkles, count: 25 },
    { id: 'ai-cybersecurity', name: 'AI Cybersecurity', icon: Shield, count: 8 },
    { id: 'ai-autonomous', name: 'AI Autonomous', icon: Brain, count: 6 },
    { id: 'ai-trading', name: 'AI Trading', icon: TrendingUp, count: 4 },
    { id: 'ai-analytics', name: 'AI Analytics', icon: BarChart3, count: 7 }
  ];

  const allServices = [
    // AI Cybersecurity Services
    {
      id: 'ai-quantum-cybersecurity-platform',
      name: 'AI Quantum Cybersecurity Platform',
      category: 'ai-cybersecurity',
      description: 'Revolutionary AI-powered cybersecurity with quantum-resistant encryption',
      pricing: {
        starter: { price: '$299', period: '/month', features: ['AI threat detection (up to 100 endpoints)', 'Basic quantum encryption', '24/7 monitoring', 'Email support', 'Basic reporting'] },
        professional: { price: '$799', period: '/month', features: ['AI threat detection (up to 1000 endpoints)', 'Advanced quantum encryption', 'Zero-day attack prevention', 'Network security orchestration', 'Priority support', 'Advanced analytics', 'Custom integrations'], popular: true },
        enterprise: { price: '$1,999', period: '/month', features: ['Unlimited endpoints', 'Full quantum cybersecurity suite', 'Custom AI models', 'Dedicated security team', 'Compliance reporting', 'White-label solutions', 'API access'] }
      },
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      href: '/services/ai-quantum-cybersecurity-platform',
      benefits: ['99.9% threat detection accuracy', 'Quantum-resistant encryption', 'Zero-day attack prevention', 'Military-grade security']
    },
    {
      id: 'ai-cybersecurity-threat-intelligence',
      name: 'AI Cybersecurity Threat Intelligence',
      category: 'ai-cybersecurity',
      description: 'Advanced threat detection and response with machine learning',
      pricing: {
        starter: { price: '$199', period: '/month', features: ['Basic threat detection', 'Real-time monitoring', 'Email alerts', 'Basic dashboard'] },
        professional: { price: '$499', period: '/month', features: ['Advanced threat detection', 'Behavioral analysis', 'Automated response', 'Priority support', 'Custom rules', 'API access'] },
        enterprise: { price: '$1,299', period: '/month', features: ['Full threat intelligence suite', 'Custom AI models', 'Dedicated team', 'Compliance reporting', 'White-label solutions'] }
      },
      icon: Eye,
      color: 'from-red-500 to-pink-500',
      href: '/services/ai-cybersecurity-threat-intelligence',
      benefits: ['Real-time threat detection', 'Behavioral analysis', 'Automated response', 'Advanced analytics']
    },

    // AI Autonomous Services
    {
      id: 'ai-autonomous-supply-chain-optimization',
      name: 'AI Autonomous Supply Chain Optimization',
      category: 'ai-autonomous',
      description: 'Transform your supply chain with AI-powered autonomous optimization',
      pricing: {
        starter: { price: '$499', period: '/month', features: ['AI demand forecasting (up to 100 SKUs)', 'Basic route optimization', 'Real-time tracking', 'Email support', 'Basic analytics dashboard'] },
        professional: { price: '$1,299', period: '/month', features: ['AI demand forecasting (up to 1000 SKUs)', 'Advanced route optimization', 'End-to-end visibility', 'Risk management', 'Priority support', 'Advanced analytics', 'API integrations'], popular: true },
        enterprise: { price: '$2,999', period: '/month', features: ['Unlimited SKU forecasting', 'Full autonomous optimization', 'Custom AI models', 'Dedicated support team', 'Compliance reporting', 'White-label solutions', 'Full API access'] }
      },
      icon: Truck,
      color: 'from-green-500 to-blue-500',
      href: '/services/ai-autonomous-supply-chain-optimization',
      benefits: ['25-40% cost reduction', '30-50% faster delivery', '20-35% inventory optimization', '60-80% risk mitigation']
    },
    {
      id: 'ai-autonomous-business-manager',
      name: 'AI Autonomous Business Manager',
      category: 'ai-autonomous',
      description: 'Fully autonomous business operations management',
      pricing: {
        starter: { price: '$799', period: '/month', features: ['Basic process automation', 'Simple workflows', 'Email support', 'Basic reporting'] },
        professional: { price: '$1,999', period: '/month', features: ['Advanced automation', 'Decision making', 'Performance optimization', 'Priority support', 'Custom integrations', 'Advanced analytics'] },
        enterprise: { price: '$4,999', period: '/month', features: ['Full autonomous operations', 'Custom AI models', 'Dedicated team', 'White-label solutions', 'Full API access'] }
      },
      icon: Brain,
      color: 'from-blue-500 to-purple-500',
      href: '/services/ai-autonomous-business-manager',
      benefits: ['Fully autonomous operations', 'AI decision making', 'Process optimization', 'Performance analytics']
    },

    // AI Trading Services
    {
      id: 'ai-autonomous-financial-trading-platform',
      name: 'AI Autonomous Financial Trading Platform',
      category: 'ai-trading',
      description: 'Revolutionary AI-powered autonomous trading platform',
      pricing: {
        starter: { price: '$199', period: '/month', features: ['AI market analysis (basic)', 'Automated trading (up to 10 strategies)', 'Basic risk management', 'Email support', 'Basic performance dashboard'] },
        professional: { price: '$599', period: '/month', features: ['Advanced AI market analysis', 'Unlimited trading strategies', 'Advanced risk management', 'Real-time monitoring', 'Priority support', 'Advanced analytics', 'API access'], popular: true },
        enterprise: { price: '$1,999', period: '/month', features: ['Custom AI models', 'White-label solutions', 'Dedicated support team', 'Compliance reporting', 'Multi-account management', 'Advanced backtesting', 'Full API access'] }
      },
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500',
      href: '/services/ai-autonomous-financial-trading-platform',
      benefits: ['15-35% performance improvement', '24/7 trading', '40-60% cost reduction', '30-50% risk reduction']
    },

    // AI Analytics Services
    {
      id: 'ai-business-intelligence',
      name: 'AI Business Intelligence',
      category: 'ai-analytics',
      description: 'Advanced analytics and machine learning insights',
      pricing: {
        starter: { price: '$399', period: '/month', features: ['Basic analytics', 'Simple dashboards', 'Email support', 'Basic reporting'] },
        professional: { price: '$999', period: '/month', features: ['Advanced analytics', 'Custom dashboards', 'Predictive analytics', 'Priority support', 'API access', 'Custom integrations'] },
        enterprise: { price: '$2,499', period: '/month', features: ['Full BI suite', 'Custom AI models', 'Dedicated team', 'White-label solutions', 'Full API access'] }
      },
      icon: BarChart3,
      color: 'from-blue-500 to-cyan-500',
      href: '/services/ai-business-intelligence',
      benefits: ['Advanced analytics', 'Predictive insights', 'Custom dashboards', 'Real-time data']
    },
    {
      id: 'ai-healthcare-analytics',
      name: 'AI Healthcare Analytics',
      category: 'ai-analytics',
      description: 'Healthcare data analysis and insights platform',
      pricing: {
        starter: { price: '$599', period: '/month', features: ['Basic patient analytics', 'Simple reporting', 'Email support', 'Basic compliance'] },
        professional: { price: '$1,499', period: '/month', features: ['Advanced analytics', 'Clinical insights', 'Compliance reporting', 'Priority support', 'Custom integrations', 'API access'] },
        enterprise: { price: '$3,999', period: '/month', features: ['Full healthcare suite', 'Custom AI models', 'Dedicated team', 'White-label solutions', 'Full compliance'] }
      },
      icon: Activity,
      color: 'from-teal-500 to-green-500',
      href: '/services/ai-healthcare-analytics',
      benefits: ['Patient analytics', 'Clinical insights', 'Compliance reporting', 'HIPAA ready']
    }
  ];

  const filteredServices = allServices.filter(service => {
    return selectedCategory === 'all' || service.category === selectedCategory;
  });

  const getCategoryIcon = (categoryId: string) => {
    return categories.find(cat => cat.id === categoryId)?.icon || Sparkles;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="Comprehensive Pricing Guide 2028 - Zion Tech Group"
        description="Complete pricing guide for all our AI, cybersecurity, and technology services. Transparent pricing with detailed features and benefits."
        keywords="pricing, AI services, cybersecurity, autonomous systems, trading platforms, analytics, Zion Tech Group"
        canonicalUrl="https://ziontechgroup.com/comprehensive-pricing-guide-2028"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-green-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 rounded-2xl flex items-center justify-center mr-4">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                Comprehensive Pricing Guide 2028
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Transparent pricing for all our cutting-edge AI, cybersecurity, and technology services. 
              Choose the perfect plan for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <button className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-400 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter Section */}
      <section className="py-12 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50 hover:text-white'
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.name}
                <span className="ml-1 text-xs bg-white/20 px-2 py-1 rounded-full">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Service Pricing & Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              All our services offer flexible pricing plans designed to scale with your business needs. 
              Start with what you need and grow as you expand.
            </p>
          </motion.div>

          <div className="space-y-16">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-700/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/50"
              >
                {/* Service Header */}
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-8">
                  <div className="flex items-center mb-4 lg:mb-0">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mr-4`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                      <p className="text-gray-300 max-w-2xl">{service.description}</p>
                    </div>
                  </div>
                  <Link
                    to={service.href}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>

                {/* Benefits */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-white mb-4">Key Benefits:</h4>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing Plans */}
                <div className="grid md:grid-cols-3 gap-6">
                  {Object.entries(service.pricing).map(([planName, plan]) => (
                    <div
                      key={planName}
                      className={`relative bg-slate-600/50 backdrop-blur-sm rounded-xl p-6 border-2 transition-all duration-300 ${
                        plan.popular 
                          ? 'border-blue-500 shadow-lg shadow-blue-500/25' 
                          : 'border-slate-500/50 hover:border-blue-500/50'
                      }`}
                    >
                      {plan.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                            <Crown className="w-3 h-3 mr-1" />
                            Most Popular
                          </span>
                        </div>
                      )}

                      <div className="text-center mb-6">
                        <h4 className="text-xl font-bold text-white mb-2 capitalize">{planName}</h4>
                        <div className="flex items-baseline justify-center">
                          <span className="text-3xl font-bold text-white">{plan.price}</span>
                          <span className="text-gray-400 ml-1">{plan.period}</span>
                        </div>
                      </div>

                      <ul className="space-y-3 mb-6">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <Link
                        to="/contact"
                        className={`w-full inline-flex items-center justify-center px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
                          plan.popular
                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                            : 'border-2 border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white'
                        }`}
                      >
                        {plan.popular ? 'Start Free Trial' : 'Get Started'}
                      </Link>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Our team of experts is ready to help you choose the perfect plan 
              and implement the solution that fits your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/comprehensive-services-showcase-2028"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-400 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

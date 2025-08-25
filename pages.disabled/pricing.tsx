import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
<<<<<<< HEAD:pages.disabled/pricing.tsx
<<<<<<< HEAD
<<<<<<< HEAD
  DollarSign, Cpu, Shield, Zap, Globe, Star, Users,
  Target, Microscope, Database, Lock, Cloud, 
  BarChart3, Settings, Eye, Code, Palette, Layers,
  Network, Server, ShieldCheck, ZapIcon, GlobeIcon, 
  StarIcon, TrendingUpIcon, UsersIcon, CheckCircleIcon, 
  ArrowRightIcon, CpuIcon, Phone, 
  ArrowRight, Mail, MapPin, Dna, HelpCircle,
  Sparkles, Crown, Infinity, Target as TargetIcon, 
  Award, MessageCircle, ChevronRight, Building, Calculator
=======
  DollarSign, CheckCircle, Star, Zap, Shield, 
  Brain, Atom, Rocket, Building, ArrowRight,
  Users, Globe, Cpu, Database, Lock
>>>>>>> origin/cursor/website-audit-and-enhancement-5aba
} from 'lucide-react';

const pricingPlans = [
  {
    name: 'Starter',
<<<<<<< HEAD
    price: '$5,000',
=======
    price: '$99',
>>>>>>> origin/cursor/website-audit-and-enhancement-5aba
    period: '/month',
    description: 'Perfect for small businesses and startups',
    features: [
      'Basic AI Services',
      'Standard Support',
<<<<<<< HEAD
      'Core Features',
      'Email Support',
      'Basic Analytics'
=======
      '5 Projects',
      '10GB Storage',
      'Email Support'
>>>>>>> origin/cursor/website-audit-and-enhancement-5aba
    ],
    color: 'from-blue-500 to-cyan-600',
    popular: false
  },
  {
    name: 'Professional',
<<<<<<< HEAD
    price: '$15,000',
    period: '/month',
    description: 'Ideal for growing businesses and enterprises',
    features: [
      'Advanced AI Services',
      'Priority Support',
      'Premium Features',
      'Phone & Email Support',
      'Advanced Analytics',
      'Custom Integrations'
=======
    price: '$299',
    period: '/month',
    description: 'Ideal for growing businesses and teams',
    features: [
      'Advanced AI Services',
      'Priority Support',
      'Unlimited Projects',
      '100GB Storage',
      'Phone & Email Support',
      'Custom Integrations',
      'Analytics Dashboard'
>>>>>>> origin/cursor/website-audit-and-enhancement-5aba
    ],
    color: 'from-purple-500 to-pink-600',
    popular: true
  },
  {
    name: 'Enterprise',
<<<<<<< HEAD
    price: '$35,000',
    period: '/month',
    description: 'For large enterprises with complex needs',
    features: [
      'Full Service Suite',
      '24/7 Dedicated Support',
      'Custom Development',
      'Dedicated Account Manager',
      'Advanced Security',
      'Custom Training',
      'SLA Guarantees'
=======
    price: 'Custom',
    period: '',
    description: 'Tailored solutions for large organizations',
    features: [
      'All AI & Quantum Services',
      '24/7 Dedicated Support',
      'Custom Development',
      'Unlimited Storage',
      'Dedicated Account Manager',
      'SLA Guarantees',
      'On-premise Options',
      'Custom Training'
>>>>>>> origin/cursor/website-audit-and-enhancement-5aba
    ],
    color: 'from-yellow-500 to-orange-600',
    popular: false
  }
];

const serviceCategories = [
  {
    name: 'AI & Consciousness',
<<<<<<< HEAD
    services: [
      { name: 'AI Consciousness Evolution Pro', price: '$15,000/month' },
      { name: 'Quantum AI Fusion Platform', price: '$25,000/month' },
      { name: 'AI Autonomous Ecosystem', price: '$18,000/month' },
      { name: 'AI Ethics & Governance', price: '$12,000/month' },
      { name: 'AI Creativity Studio Pro', price: '$20,000/month' }
    ]
  },
  {
    name: 'Quantum & Emerging Tech',
    services: [
      { name: 'Quantum Internet Security Platform', price: '$35,000/month' },
      { name: 'Quantum Bio-Computing Platform', price: '$28,000/month' },
      { name: 'Brain-Computer Interface Platform', price: '$22,000/month' },
      { name: 'Space Mining Platform', price: '$45,000/month' },
      { name: 'Quantum Energy Platform', price: '$32,000/month' }
    ]
  },
  {
    name: 'Enterprise IT',
    services: [
      { name: 'Quantum Cloud Infrastructure Pro', price: '$30,000/month' },
      { name: 'Edge Computing Orchestrator Pro', price: '$25,000/month' },
      { name: 'Zero Trust Security Platform', price: '$22,000/month' },
      { name: 'AI-Powered DevOps Platform', price: '$28,000/month' },
      { name: 'Quantum Data Center Platform', price: '$40,000/month' }
    ]
  },
  {
    name: 'Micro SAAS',
    services: [
      { name: 'AI Content Factory Enterprise', price: '$18,000/month' },
      { name: 'Quantum CRM Suite Enterprise', price: '$22,000/month' },
      { name: 'AI Autonomous Decision Engine', price: '$25,000/month' },
      { name: 'AI Legal Contract Analyzer', price: '$20,000/month' },
      { name: 'AI Healthcare Diagnostics Pro', price: '$35,000/month' }
    ]
=======
    icon: <Brain className="w-6 h-6" />,
    startingPrice: '$199',
    description: 'Advanced AI consciousness and emotional intelligence'
  },
  {
    name: 'Quantum & Emerging Tech',
    icon: <Atom className="w-6 h-6" />,
    startingPrice: '$399',
    description: 'Breakthrough quantum computing and space technology'
  },
  {
    name: 'Enterprise IT',
    icon: <Shield className="w-6 h-6" />,
    startingPrice: '$299',
    description: 'Advanced enterprise infrastructure and security'
  },
  {
    name: 'Micro SAAS',
    icon: <Rocket className="w-6 h-6" />,
    startingPrice: '$149',
    description: 'Innovative business solutions for modern enterprises'
>>>>>>> origin/cursor/website-audit-and-enhancement-5aba
  }
];

const benefits = [
  {
    icon: <DollarSign className="w-8 h-8 text-green-400" />,
    title: 'Transparent Pricing',
    description: 'Clear, upfront pricing with no hidden fees'
  },
  {
<<<<<<< HEAD
    icon: <Shield className="w-8 h-8 text-blue-400" />,
    title: 'Enterprise Security',
    description: 'Military-grade security included in all plans'
  },
  {
    icon: <Zap className="w-8 h-8 text-purple-400" />,
    title: 'Scalable Solutions',
    description: 'Flexible plans that grow with your business'
  },
  {
    icon: <Users className="w-8 h-8 text-cyan-400" />,
    title: 'Expert Support',
    description: 'Dedicated support team for all your needs'
=======
    icon: <Zap className="w-8 h-8 text-yellow-400" />,
    title: 'Flexible Plans',
    description: 'Choose the plan that fits your business needs'
  },
  {
    icon: <Shield className="w-8 h-8 text-blue-400" />,
    title: 'Enterprise Security',
    description: 'Bank-level security for all your data and operations'
  },
  {
    icon: <Star className="w-8 h-8 text-purple-400" />,
    title: 'Premium Support',
    description: 'Expert support team available when you need them'
>>>>>>> origin/cursor/website-audit-and-enhancement-5aba
  }
];

export default function Pricing() {
  return (
    <>
      <Head>
        <title>Pricing & Plans - Zion Tech Group</title>
<<<<<<< HEAD
        <meta name="description" content="Transparent pricing and market comparisons for all our technology services. Find the perfect plan for your business needs." />
        <meta name="keywords" content="pricing, plans, service costs, enterprise pricing, custom solutions, ROI calculator" />
=======
        <meta name="description" content="Transparent pricing and market comparisons for all our technology services. Choose the plan that fits your business needs." />
        <meta name="keywords" content="pricing, plans, AI services, quantum services, enterprise IT, micro SAAS" />
>>>>>>> origin/cursor/website-audit-and-enhancement-5aba
        <link rel="canonical" href="https://ziontechgroup.com/pricing" />
      </Head>

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
<<<<<<< HEAD
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-black to-yellow-900/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
=======
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2:pages/pricing.tsx
  Check, Star, ArrowRight, Zap, Crown, 
  Brain, Atom, Shield, Rocket, Users,
  CheckCircle, TrendingUp, Award, Sparkles
} from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$2,999',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      color: 'from-blue-500 to-cyan-600',
      features: [
        'AI-Powered IT Asset Management',
        'Basic AI Consciousness Features',
        'Standard Support (8/5)',
        'Up to 100 assets',
        'Basic reporting and analytics',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$7,999',
      period: '/month',
      description: 'Ideal for growing enterprises',
      icon: <Crown className="w-8 h-8 text-purple-500" />,
      color: 'from-purple-500 to-pink-600',
      features: [
        'Everything in Starter',
        'Quantum AI Fusion Platform',
        'Advanced AI Consciousness Pro',
        'Priority Support (24/7)',
        'Up to 1,000 assets',
        'Advanced analytics and AI insights',
        'Phone and chat support',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations with complex needs',
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      color: 'from-yellow-500 to-orange-600',
      features: [
        'Everything in Professional',
        'Full Quantum Neural Network Platform',
        'Autonomous Business Operations',
        'Dedicated account manager',
        'Unlimited assets',
        'Custom AI model training',
        'On-premise deployment options',
        'SLA guarantees',
        'Custom development services'
      ],
      popular: false
    }
  ];

  const addOns = [
    {
      name: 'AI Model Training',
      price: '$5,000',
      description: 'Custom AI model training for your specific use case',
      icon: <Brain className="w-6 h-6 text-violet-500" />
    },
    {
      name: 'Quantum Computing Access',
      price: '$10,000',
      description: 'Direct access to quantum computing resources',
      icon: <Atom className="w-6 h-6 text-blue-500" />
    },
    {
      name: 'Advanced Security Suite',
      price: '$3,500',
      description: 'Enhanced cybersecurity and compliance features',
      icon: <Shield className="w-6 h-6 text-green-500" />
    },
    {
      name: 'Custom Integration',
      price: '$2,500',
      description: 'Custom integration with your existing systems',
      icon: <Rocket className="w-6 h-6 text-orange-500" />
    }
  ];

  return (
    <>
      <Head>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for Zion Tech Group's revolutionary AI, quantum computing, and technology services. Choose the plan that fits your business needs." />
        <meta name="keywords" content="pricing, AI services, quantum computing, technology pricing, enterprise solutions, startup pricing" />
        <link rel="canonical" href="https://ziontechgroup.com/pricing" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
<<<<<<< HEAD:pages.disabled/pricing.tsx
>>>>>>> origin/cursor/resolve-and-merge-open-pull-requests-b4e5
=======
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-orange-500/5 to-red-500/10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,191,36,0.1),transparent_50%)]" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
>>>>>>> origin/cursor/website-audit-and-enhancement-5aba
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2:pages/pricing.tsx
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
<<<<<<< HEAD:pages.disabled/pricing.tsx
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2:pages/pricing.tsx
              className="text-center"
            >
<<<<<<< HEAD
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent mb-6">
                Pricing & Plans
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Transparent pricing and market comparisons for all our technology services
=======
            >
              <div className="flex items-center justify-center space-x-2 mb-6">
                <DollarSign className="w-12 h-12 text-yellow-400" />
                <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                  Pricing & Plans
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Transparent pricing and market comparisons for all our technology services. 
                Choose the plan that fits your business needs and scale as you grow.
>>>>>>> origin/cursor/website-audit-and-enhancement-5aba
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
<<<<<<< HEAD
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-yellow-600 text-white rounded-lg font-semibold hover:from-green-600 hover:to-yellow-700 transition-all duration-200 hover:scale-105"
=======
                  className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-600 text-white rounded-xl font-semibold hover:from-yellow-600 hover:to-orange-700 transition-all duration-200 hover:scale-105"
>>>>>>> origin/cursor/website-audit-and-enhancement-5aba
                >
                  Get Custom Quote
                </Link>
                <Link
                  href="/market-pricing"
<<<<<<< HEAD
                  className="px-8 py-4 border border-green-500/50 text-green-400 rounded-lg font-semibold hover:bg-green-500/10 transition-all duration-200"
=======
                  className="px-8 py-4 border border-yellow-500/40 text-yellow-300 rounded-xl font-semibold hover:bg-yellow-500/10 transition-all duration-200"
>>>>>>> origin/cursor/website-audit-and-enhancement-5aba
                >
                  View Market Pricing
                </Link>
              </div>
<<<<<<< HEAD
=======
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 text-green-300 text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2" />
                Transparent Pricing
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent mb-6">
                Simple, Transparent Pricing
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Choose the perfect plan for your business needs. All plans include our revolutionary 
                AI and quantum computing technology with transparent, predictable pricing.
              </p>
<<<<<<< HEAD:pages.disabled/pricing.tsx
>>>>>>> origin/cursor/resolve-and-merge-open-pull-requests-b4e5
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-5aba
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2:pages/pricing.tsx
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD:pages.disabled/pricing.tsx
<<<<<<< HEAD
<<<<<<< HEAD
        {/* Benefits Section */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Pricing?</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Experience transparent, competitive pricing with enterprise-grade value
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
=======
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2:pages/pricing.tsx
        {/* Pricing Plans Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
<<<<<<< HEAD:pages.disabled/pricing.tsx
>>>>>>> origin/cursor/resolve-and-merge-open-pull-requests-b4e5
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2:pages/pricing.tsx
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD:pages.disabled/pricing.tsx
<<<<<<< HEAD
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center p-6 rounded-xl bg-gray-800/50 border border-gray-700/50 hover:border-green-500/50 transition-all duration-200"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-800 rounded-full mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-20">
=======
        {/* Pricing Plans */}
        <section className="py-20 relative">
>>>>>>> origin/cursor/website-audit-and-enhancement-5aba
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
<<<<<<< HEAD
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Choose Your Plan</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Select the perfect plan for your business needs and budget
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
=======
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Flexible pricing plans designed to grow with your business
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
>>>>>>> origin/cursor/website-audit-and-enhancement-5aba
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`p-8 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 border ${
                    plan.popular 
                      ? 'border-green-500/50 shadow-2xl shadow-green-500/20' 
                      : 'border-gray-700/50'
                  } transition-all duration-200 hover:shadow-2xl hover:shadow-green-500/10`}
                >
                  {plan.popular && (
                    <div className="text-center mb-4">
                      <span className="px-4 py-2 bg-green-500 text-black text-sm font-bold rounded-full">
=======
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2:pages/pricing.tsx
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 border rounded-2xl p-8 ${
                    plan.popular 
                      ? 'border-purple-500/50 shadow-2xl shadow-purple-500/20' 
                      : 'border-gray-700/50'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
<<<<<<< HEAD:pages.disabled/pricing.tsx
>>>>>>> origin/cursor/resolve-and-merge-open-pull-requests-b4e5
=======
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white text-sm font-bold rounded-full">
>>>>>>> origin/cursor/website-audit-and-enhancement-5aba
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2:pages/pricing.tsx
                        Most Popular
                      </span>
                    </div>
                  )}
                  
<<<<<<< HEAD:pages.disabled/pricing.tsx
<<<<<<< HEAD
<<<<<<< HEAD
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-green-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-400 mt-2">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    href="/contact"
                    className={`block w-full text-center px-6 py-3 bg-gradient-to-r ${plan.color} text-white rounded-lg font-semibold hover:scale-105 transition-all duration-200`}
                  >
                    Get Started
=======
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2:pages/pricing.tsx
                  <div className="text-center mb-8">
                    <div className="flex justify-center mb-4">{plan.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-6">{plan.description}</p>
                    
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link 
                    href="/contact" 
                    className={`w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r ${plan.color} text-white font-semibold rounded-lg hover:scale-105 transition-all duration-200`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
>>>>>>> origin/cursor/resolve-and-merge-open-pull-requests-b4e5
                  </Link>
<<<<<<< HEAD:pages.disabled/pricing.tsx
=======
                  <div className={`relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border-2 ${
                    plan.popular ? 'border-purple-500/50' : 'border-gray-700/50'
                  } hover:border-yellow-500/50 transition-all duration-300 hover:scale-105`}>
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <div className="flex items-baseline justify-center space-x-1 mb-2">
                        <span className="text-4xl font-bold text-white">{plan.price}</span>
                        <span className="text-gray-400">{plan.period}</span>
                      </div>
                      <p className="text-gray-400">{plan.description}</p>
                    </div>

                    <div className="mb-8">
                      <ul className="space-y-3">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                            <span className="text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href="/contact"
                      className={`w-full py-3 px-6 rounded-xl font-semibold text-center transition-all duration-200 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700'
                          : 'bg-gradient-to-r from-yellow-500 to-orange-600 text-white hover:from-yellow-600 hover:to-orange-700'
                      } hover:scale-105`}
                    >
                      {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                    </Link>
                  </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-5aba
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2:pages/pricing.tsx
                </motion.div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD:pages.disabled/pricing.tsx
<<<<<<< HEAD
<<<<<<< HEAD
        {/* Service Pricing */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
=======
        {/* Add-ons Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
>>>>>>> origin/cursor/resolve-and-merge-open-pull-requests-b4e5
=======
        {/* Service Categories Pricing */}
        <section className="py-20 relative bg-gradient-to-br from-gray-900/30 to-gray-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
>>>>>>> origin/cursor/website-audit-and-enhancement-5aba
=======
        {/* Add-ons Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2:pages/pricing.tsx
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
<<<<<<< HEAD:pages.disabled/pricing.tsx
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2:pages/pricing.tsx
              className="text-center mb-16"
            >
<<<<<<< HEAD
              <h2 className="text-4xl font-bold text-white mb-4">Service Pricing</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Detailed pricing for all our individual services and platforms
              </p>
            </motion.div>

            <div className="space-y-12">
=======
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Service Category Pricing
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Starting prices for our main service categories
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
>>>>>>> origin/cursor/website-audit-and-enhancement-5aba
              {serviceCategories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50"
                >
                  <h3 className="text-2xl font-bold text-white mb-6">{category.name}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.services.map((service, idx) => (
                      <div key={idx} className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg">
                        <span className="text-gray-300">{service.name}</span>
                        <span className="text-green-400 font-semibold">{service.price}</span>
                      </div>
                    ))}
                  </div>
=======
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Additional Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Enhance your experience with our premium add-on services designed 
                to meet your specific business requirements.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {addOns.map((addOn, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6 hover:border-gray-600/50 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="mr-3">{addOn.icon}</div>
                    <h3 className="text-lg font-semibold text-white">{addOn.name}</h3>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">{addOn.description}</p>
                  <div className="text-2xl font-bold text-white mb-4">{addOn.price}</div>
                  <Link 
                    href="/contact" 
                    className="w-full inline-flex items-center justify-center px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700/50 transition-all duration-200"
                  >
                    Add Service
                  </Link>
<<<<<<< HEAD:pages.disabled/pricing.tsx
=======
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 hover:border-yellow-500/50 transition-all duration-300 hover:scale-105">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl flex items-center justify-center">
                        {category.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{category.name}</h3>
                        <p className="text-2xl font-bold text-yellow-400">{category.startingPrice}</p>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm mb-4">{category.description}</p>
                    <Link
                      href={`/${category.name.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '-')}`}
                      className="inline-flex items-center space-x-2 text-yellow-400 hover:text-yellow-300 font-semibold group-hover:translate-x-1 transition-all duration-200"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-5aba
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2:pages/pricing.tsx
                </motion.div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD:pages.disabled/pricing.tsx
<<<<<<< HEAD
        {/* FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
=======
        {/* Benefits Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
>>>>>>> origin/cursor/website-audit-and-enhancement-5aba
=======
        {/* FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2:pages/pricing.tsx
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
<<<<<<< HEAD:pages.disabled/pricing.tsx
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2:pages/pricing.tsx
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Frequently Asked Questions
              </h2>
            </motion.div>

            <div className="space-y-6">
              {[
                {
                  question: 'Can I change my plan at any time?',
                  answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and are prorated.'
                },
                {
                  question: 'Do you offer custom pricing for enterprise clients?',
                  answer: 'Absolutely! Our Enterprise plan includes custom pricing based on your specific requirements and scale.'
                },
                {
                  question: 'What kind of support is included?',
                  answer: 'All plans include email support. Professional and Enterprise plans include priority support with phone and chat options.'
                },
                {
                  question: 'Is there a setup fee?',
                  answer: 'No setup fees for our standard plans. Custom enterprise deployments may have associated setup costs.'
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
<<<<<<< HEAD:pages.disabled/pricing.tsx
>>>>>>> origin/cursor/resolve-and-merge-open-pull-requests-b4e5
=======
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Pricing?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Transparent, flexible, and designed for business growth
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {benefit.description}
                  </p>
>>>>>>> origin/cursor/website-audit-and-enhancement-5aba
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2:pages/pricing.tsx
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD:pages.disabled/pricing.tsx
<<<<<<< HEAD
<<<<<<< HEAD
        <section className="py-20 bg-gradient-to-r from-green-900/20 to-yellow-900/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
=======
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-4xl mx-auto text-center">
>>>>>>> origin/cursor/resolve-and-merge-open-pull-requests-b4e5
=======
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
>>>>>>> origin/cursor/website-audit-and-enhancement-5aba
=======
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-4xl mx-auto text-center">
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2:pages/pricing.tsx
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
<<<<<<< HEAD:pages.disabled/pricing.tsx
<<<<<<< HEAD
            >
<<<<<<< HEAD
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
                Contact us for custom pricing, enterprise quotes, or to discuss your specific needs. We'll help you find the perfect solution.
=======
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2:pages/pricing.tsx
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
<<<<<<< HEAD:pages.disabled/pricing.tsx
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Choose the plan that fits your business needs or contact us for a custom solution. 
                Start transforming your business today.
>>>>>>> origin/cursor/website-audit-and-enhancement-5aba
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
<<<<<<< HEAD
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-yellow-600 text-white rounded-lg font-semibold hover:from-green-600 hover:to-yellow-700 transition-all duration-200 hover:scale-105"
                >
                  Contact Sales
                </Link>
                <Link
                  href="/roi-calculator"
                  className="px-8 py-4 border border-green-500/50 text-green-400 rounded-lg font-semibold hover:bg-green-500/10 transition-all duration-200"
                >
                  ROI Calculator
=======
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2:pages/pricing.tsx
              <p className="text-xl text-gray-300 mb-8">
                Choose the perfect plan for your business and start your journey with 
                revolutionary AI and quantum computing technology.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-200 transform hover:scale-105">
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link href="/contact" className="inline-flex items-center px-8 py-4 border border-green-500/30 text-green-300 font-semibold rounded-lg hover:bg-green-500/10 transition-all duration-200">
                  Schedule Consultation
<<<<<<< HEAD:pages.disabled/pricing.tsx
>>>>>>> origin/cursor/resolve-and-merge-open-pull-requests-b4e5
=======
                  className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-600 text-white rounded-xl font-semibold hover:from-yellow-600 hover:to-orange-700 transition-all duration-200 hover:scale-105"
                >
                  Get Started Today
                </Link>
                <Link
                  href="/market-pricing"
                  className="px-8 py-4 border border-yellow-500/40 text-yellow-300 rounded-xl font-semibold hover:bg-yellow-500/10 transition-all duration-200"
                >
                  View Market Pricing
>>>>>>> origin/cursor/website-audit-and-enhancement-5aba
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2:pages/pricing.tsx
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
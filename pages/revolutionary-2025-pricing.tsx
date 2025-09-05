<<<<<<< HEAD
import React, { useState } from 'react',
import Head from 'next/head',
import { motion } from 'framer-motion',
import { Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Code, BookOpen, Activity, Play, Mail, Phone, MapPin, Filter, Grid, List, ChevronDown, ChevronUp, Sparkles, FlaskConical, Dna, Car, Leaf, Factory, Truck, Microscope, GraduationCap, ShieldCheck, Brain, Atom, Globe2, Bot, ChevronRight, Crown, Infinity, Check, X, AlertTriangle, Info, Zap as ZapIcon, Shield as ShieldIcon, Users as UsersIcon, Globe as GlobeIcon, Cpu as CpuIcon, Database as DatabaseIcon, Cloud as CloudIcon, Smartphone as SmartphoneIcon, Palette as PaletteIcon, Search as SearchIcon, MessageSquare as MessageSquareIcon, FileText as FileTextIcon, Calendar as CalendarIcon, CreditCard as CreditCardIcon, BarChart3 as BarChart3Icon, Settings as SettingsIcon, Code as CodeIcon, BookOpen as BookIcon, Activity as ActivityIcon, Database as DatabaseIcon2, Play as PlayIcon, Mail as MailIcon, Phone as PhoneIcon, MapPin as MapPinIcon, Filter as FilterIcon, Grid as GridIcon, List as ListIcon, ChevronDown as ChevronDownIcon, ChevronUp as ChevronUpIcon, Sparkles as SparklesIcon, FlaskConical as FlaskConicalIcon, Dna as DnaIcon, Car as CarIcon, Leaf as LeafIcon, Factory as FactoryIcon, Truck as TruckIcon, Microscope as MicroscopeIcon, GraduationCap as GraduationCapIcon, ShieldCheck as ShieldCheckIcon, Brain as BrainIcon, Atom as AtomIcon, Globe2 as Globe2Icon, Bot as BotIcon, ChevronRight as ChevronRightIcon, Eye, Heart, Share2, Download, Bookmark, ThumbsUp, MessageCircle, Share, Users as UsersIcon2, Target as TargetIcon, Zap as ZapIcon2 } from 'lucide-react',

import UltraQuantumHolographicBackground from '../components/ui/UltraQuantumHolographicBackground',
import UltraAdvancedNavigation from '../components/layout/UltraAdvancedNavigation',
import { revolutionaryAI2025Services } from '../data/revolutionary-2025-ai-services',
import { revolutionaryITInfrastructure2025Services } from '../data/revolutionary-2025-it-infrastructure',
import { revolutionary2025MicroSaasServices } from '../data/revolutionary-2025-micro-saas',
export default function Revolutionary2025Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly'),
  const [selectedCategory, setSelectedCategory] = useState<string>('all'),

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  },
=======
import React, {_useState} from 'react';
import Head from 'next/head';

import UltraQuantumHolographicBackground from '../components/ui/UltraQuantumHolographicBackground';
import UltraAdvancedNavigation from '../components/layout/UltraAdvancedNavigation';

export default function Revolutionary2025Pricing() {_const [billingCycle, _setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [selectedCategory, _setSelectedCategory] = useState<string>('all');

  const _contactInfo = {
    mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  // Combine all revolutionary services
  const _allRevolutionaryServices = [
    ...revolutionaryAI2025Services,
    ...revolutionaryITInfrastructure2025Services,
    ...revolutionary2025MicroSaasServices
  ],

  // Service categories
<<<<<<< HEAD
  const serviceCategories = [
    { id: 'all', name: 'All Services', icon: Sparkles, count: allRevolutionaryServices.length },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain, count: revolutionaryAI2025Services.length },
    { id: 'infrastructure', name: 'IT Infrastructure', icon: Cpu, count: revolutionaryITInfrastructure2025Services.length },
          { id: 'saas', name: 'Micro SaaS', icon: Zap, count: revolutionary2025MicroSaasServices.length }
  ],
=======
  const _serviceCategories = [
    {_id: 'all', _name: 'All Services', _icon: Sparkles, _count: allRevolutionaryServices.length},
    {_id: 'ai', _name: 'AI & Machine Learning', _icon: Brain, _count: revolutionaryAI2025Services.length},
    {_id: 'infrastructure', _name: 'IT Infrastructure', _icon: Cpu, _count: revolutionaryITInfrastructure2025Services.length},
          {_id: 'saas', _name: 'Micro SaaS', _icon: Zap, _count: revolutionary2025MicroSaasServices.length}
  ];
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  // Filter services based on selected category
  const _filteredServices = selectedCategory === 'all' 
    ? allRevolutionaryServices 
<<<<<<< HEAD
    : allRevolutionaryServices.filter(service => {
        if (selectedCategory === 'ai') return service.category.includes('AI'),
        if (selectedCategory === 'infrastructure') return service.category.includes('IT') || service.category.includes('Network') || service.category.includes('Computing'),
        if (selectedCategory === 'saas') return service.category.includes('AI') || service.category.includes('Virtual') || service.category.includes('Creative'),
        return true
      }),

  // Calculate pricing with billing cycle
  const getPrice = (service: any) => {
    const basePrice = parseInt(service.price.replace('$', '').replace(, '')),
    if (billingCycle === 'yearly') {
      return Math.floor(basePrice * 0.8), // 20% discount for yearly
    }
    return basePrice
  },

  // Pricing tiers for comparison
  const pricingTiers = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      price: billingCycle === 'monthly' ? 99 : 79,
      period: billingCycle === 'monthly' ? '/month' : '/month',
      savings: billingCycle === 'yearly' ? 'Save 20%' : '',
      features: [
        'Access to 25+ Core ServicesBasic AI IntegrationStandard Support (24/7)30-Day Free TrialBasic Analytics DashboardEmail Support99.5% Uptime GuaranteeStandard Security Features'
      ],
      icon: <Sparkles className=&quot;w-8 h-8&quot; />,
      variant: 'quantum' as const,
      popular: false,
      cta: 'Start Free Trial',
      ctaVariant: 'secondary' as const
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses and teams',
      price: billingCycle === 'monthly' ? 299 : 239,
      period: billingCycle === 'monthly' ? '/month' : '/month',
      savings: billingCycle === 'yearly' ? 'Save 20%' : '',
      features: [
        'Access to 50+ ServicesAdvanced AI IntegrationPriority Support (24/7)60-Day Free TrialAdvanced Analytics DashboardPhone & Email Support99.9% Uptime GuaranteeAdvanced Security Features',
        'Custom IntegrationsPerformance Monitoring'
      ],
      icon: <Rocket className=&quot;w-8 h-8&quot; />,
      variant: 'ai-futuristic' as const,
      popular: true,
      cta: 'Start Free Trial',
      ctaVariant: 'primary' as const
    },
    {
      name: 'Enterprise',
      description: 'For large organizations and enterprises',
      price: billingCycle === 'monthly' ? 999 : 799,
      period: billingCycle === 'monthly' ? '/month' : '/month',
      savings: billingCycle === 'yearly' ? 'Save 20%' : '',
      features: [
        'Access to ALL ServicesFull AI & Quantum IntegrationDedicated Support Team90-Day Free TrialEnterprise Analytics Suite24/7 Dedicated Support99.99% Uptime GuaranteeEnterprise Security Features',
        'Custom DevelopmentWhite-label SolutionsAPI AccessSLA Guarantees'
      ],
      icon: <Crown className=&quot;w-8 h-8&quot; />,
      variant: 'quantum-futuristic' as const,
      popular: false,
      cta: 'Contact Sales',
      ctaVariant: 'primary' as const
    }
  ],

  // Market analysis
  const marketAnalysis = {
    totalMarketSize: '$150B+',
    growthRate: '250% annually',
    customerSatisfaction: '98%',
    averageROI: '500%',
    timeToValue: '< 30 days',
    globalReach: '150+ countries'
  },

  return (
    <UltraQuantumHolographicBackground intensity={2.0}>
      <div className=&quot;min-h-screen&quot;>
        <Head>
          <title>Revolutionary 2025 Pricing - Zion Tech Group | Competitive AI & IT Solutions</title>
          <meta name=&quot;description&quot; content=&quot;Explore competitive pricing for Zion Tech Group's revolutionary 2025 services. AI consciousness simulation, quantum computing, zero trust security, and innovative micro SaaS solutions. Contact: +1 302 464 0950&quot; />
          <meta name=&quot;keywords&quot; content=&quot;AI pricing, quantum computing pricing, zero trust security pricing, edge computing pricing, 5G pricing, neuromorphic computing pricing, AI branding pricing, holographic events pricing&quot; />
          <meta name=&quot;author&quot; content=&quot;Zion Tech Group&quot; />
          <meta name=&quot;robots&quot; content=&quot;index, follow&quot; />
          <meta property=&quot;og:title&quot; content=&quot;Revolutionary 2025 Pricing - Zion Tech Group&quot; />
          <meta property=&quot;og:description&quot; content=&quot;Competitive pricing for cutting-edge AI, quantum computing, and IT infrastructure services. Contact: +1 302 464 0950&quot; />
          <meta property=&quot;og:url&quot; content=&quot;https://ziontechgroup.com/revolutionary-2025-pricing&quot; />
          <meta property=&quot;og:type&quot; content=&quot;website&quot; />
          <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/revolutionary-2025-pricing&quot; />
=======
    : allRevolutionaryServices.filter(service => {_if (selectedCategory === 'ai') return service.category.includes('AI');
        if (selectedCategory === 'infrastructure') return service.category.includes('IT') || service.category.includes('Network') || service.category.includes('Computing');
        if (selectedCategory === 'saas') return service.category.includes('AI') || service.category.includes('Virtual') || service.category.includes('Creative');
        return true;});

  // Calculate pricing with billing cycle
  const _getPrice = (_service: unknown) => {_const _basePrice = parseInt(service.price.replace('$', _'').replace(', _', _''));
    if (billingCycle === 'yearly') {
      return Math.floor(basePrice * 0.8); // 20% discount for yearly}
    return basePrice;
  };

  // Pricing tiers for comparison
  const _pricingTiers = [
    {_name: 'Starter', _description: 'Perfect for small businesses and startups', _price: billingCycle === 'monthly' ? 99 : 79, _period: billingCycle === 'monthly' ? '/month' : '/month', _savings: billingCycle === 'yearly' ? 'Save 20%' : '', _features: [
        'Access to 25+ Core Services', _'Basic AI Integration', _'Standard Support (24/7)', _'30-Day Free Trial', _'Basic Analytics Dashboard', _'Email Support', _'99.5% Uptime Guarantee', _'Standard Security Features'
      ], _icon: <Sparkles className="w-8 h-8" />, _variant: 'quantum' as const, _popular: false, _cta: 'Start Free Trial', _ctaVariant: 'secondary' as const},
    {_name: 'Professional', _description: 'Ideal for growing businesses and teams', _price: billingCycle === 'monthly' ? 299 : 239, _period: billingCycle === 'monthly' ? '/month' : '/month', _savings: billingCycle === 'yearly' ? 'Save 20%' : '', _features: [
        'Access to 50+ Services', _'Advanced AI Integration', _'Priority Support (24/7)', _'60-Day Free Trial', _'Advanced Analytics Dashboard', _'Phone & Email Support', _'99.9% Uptime Guarantee', _'Advanced Security Features', _'Custom Integrations', _'Performance Monitoring'
      ], _icon: <Rocket className="w-8 h-8" />, _variant: 'ai-futuristic' as const, _popular: true, _cta: 'Start Free Trial', _ctaVariant: 'primary' as const},
    {_name: 'Enterprise', _description: 'For large organizations and enterprises', _price: billingCycle === 'monthly' ? 999 : 799, _period: billingCycle === 'monthly' ? '/month' : '/month', _savings: billingCycle === 'yearly' ? 'Save 20%' : '', _features: [
        'Access to ALL Services', _'Full AI & Quantum Integration', _'Dedicated Support Team', _'90-Day Free Trial', _'Enterprise Analytics Suite', _'24/7 Dedicated Support', _'99.99% Uptime Guarantee', _'Enterprise Security Features', _'Custom Development', _'White-label Solutions', _'API Access', _'SLA Guarantees'
      ], _icon: <Crown className="w-8 h-8" />, _variant: 'quantum-futuristic' as const, _popular: false, _cta: 'Contact Sales', _ctaVariant: 'primary' as const}
  ];

  // Market analysis
  const _marketAnalysis = {_totalMarketSize: '$150B+', _growthRate: '250% annually', _customerSatisfaction: '98%', _averageROI: '500%', _timeToValue: '< 30 days', _globalReach: '150+ countries'};

  return (_<UltraQuantumHolographicBackground intensity={_2.0}>
      <div className="min-h-screen">
        <Head>
          <title>Revolutionary 2025 Pricing - Zion Tech Group | Competitive AI & IT Solutions</title>
          <meta name="description" content="Explore competitive pricing for Zion Tech Group's revolutionary 2025 services. AI consciousness simulation, _quantum computing, _zero trust security, _and innovative micro SaaS solutions. Contact: +1 302 464 0950" />
          <meta name="keywords" content="AI pricing, _quantum computing pricing, _zero trust security pricing, _edge computing pricing, _5G pricing, _neuromorphic computing pricing, _AI branding pricing, _holographic events pricing" />
          <meta name="author" content="Zion Tech Group" />
          <meta name="robots" content="index, _follow" />
          <meta property="og:title" content="Revolutionary 2025 Pricing - Zion Tech Group" />
          <meta property="og:description" content="Competitive pricing for cutting-edge AI, _quantum computing, _and IT infrastructure services. Contact: +1 302 464 0950" />
          <meta property="og:url" content="https://ziontechgroup.com/revolutionary-2025-pricing" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://ziontechgroup.com/revolutionary-2025-pricing" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        </Head>

        <UltraAdvancedNavigation />

<<<<<<< HEAD
        {/* Hero Section */}
        <section className=&quot;relative py-20 px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;max-w-7xl mx-auto text-center&quot;>
=======
        {_/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <motion.div
              initial={_{ opacity: 0, _y: 30}}
              animate={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
            >
              <h1 className=&quot;text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6&quot;>
                Revolutionary 2025 Pricing
              </h1>
              <p className=&quot;text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto&quot;>
                Experience the future of technology at competitive prices. Our revolutionary services 
                deliver 10x better performance at 50% lower costs than traditional solutions.
              </p>

<<<<<<< HEAD
              {/* Billing Toggle */}
              <div className=&quot;flex items-center justify-center gap-4 mb-12&quot;>
                <span className=&quot;text-gray-400&quot;>Monthly</span>
=======
              {_/* Billing Toggle */}
              <div className="flex items-center justify-center gap-4 mb-12">
                <span className="text-gray-400">Monthly</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                <button
                  onClick={_() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                  className={_`relative inline-flex h-8 w-16 items-center rounded-full transition-colors ${
                    billingCycle === 'yearly' ? 'bg-blue-600' : 'bg-gray-600'}`}
                >
                  <span
                    className={_`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                      billingCycle === 'yearly' ? 'translate-x-8' : 'translate-x-1'}`}
                  />
                </button>
                <span className=&quot;text-gray-400&quot;>Yearly (Save 20%)</span>
              </div>

<<<<<<< HEAD
              {/* Market Analysis */}
              <div className=&quot;grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12&quot;>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }} className=&quot;bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-4 border border-blue-500/30&quot;>
                  <div className=&quot;text-2xl font-bold text-blue-400&quot;>{marketAnalysis.totalMarketSize}</div>
                  <div className=&quot;text-xs text-gray-400&quot;>Market Size</div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }} className=&quot;bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-sm rounded-2xl p-4 border border-green-500/30&quot;>
                  <div className=&quot;text-2xl font-bold text-green-400&quot;>{marketAnalysis.growthRate}</div>
                  <div className=&quot;text-xs text-gray-400&quot;>Growth Rate</div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }} className=&quot;bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-4 border border-purple-500/30&quot;>
                  <div className=&quot;text-2xl font-bold text-purple-400&quot;>{marketAnalysis.customerSatisfaction}</div>
                  <div className=&quot;text-xs text-gray-400&quot;>Satisfaction</div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }} className=&quot;bg-gradient-to-br from-orange-600/20 to-red-600/20 backdrop-blur-sm rounded-2xl p-4 border border-orange-500/30&quot;>
                  <div className=&quot;text-2xl font-bold text-orange-400&quot;>{marketAnalysis.averageROI}</div>
                  <div className=&quot;text-xs text-gray-400&quot;>Average ROI</div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }} className=&quot;bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-4 border border-cyan-500/30&quot;>
                  <div className=&quot;text-2xl font-bold text-cyan-400&quot;>{marketAnalysis.timeToValue}</div>
                  <div className=&quot;text-xs text-gray-400&quot;>Time to Value</div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }} className=&quot;bg-gradient-to-br from-pink-600/20 to-rose-600/20 backdrop-blur-sm rounded-2xl p-4 border border-pink-500/30&quot;>
                  <div className=&quot;text-2xl font-bold text-pink-400&quot;>{marketAnalysis.globalReach}</div>
                  <div className=&quot;text-xs text-gray-400&quot;>Global Reach</div>
=======
              {_/* Market Analysis */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
                <motion.div
                  initial={_{ opacity: 0, _scale: 0.8}}
                  animate={_{ opacity: 1, _scale: 1}}
                  transition={_{ duration: 0.6, _delay: 0.1}} className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-4 border border-blue-500/30">
                  <div className="text-2xl font-bold text-blue-400">{_marketAnalysis.totalMarketSize}</div>
                  <div className="text-xs text-gray-400">Market Size</div>
                </motion.div>
                
                <motion.div
                  initial={_{ opacity: 0, _scale: 0.8}}
                  animate={_{ opacity: 1, _scale: 1}}
                  transition={_{ duration: 0.6, _delay: 0.2}} className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-sm rounded-2xl p-4 border border-green-500/30">
                  <div className="text-2xl font-bold text-green-400">{_marketAnalysis.growthRate}</div>
                  <div className="text-xs text-gray-400">Growth Rate</div>
                </motion.div>
                
                <motion.div
                  initial={_{ opacity: 0, _scale: 0.8}}
                  animate={_{ opacity: 1, _scale: 1}}
                  transition={_{ duration: 0.6, _delay: 0.3}} className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-4 border border-purple-500/30">
                  <div className="text-2xl font-bold text-purple-400">{_marketAnalysis.customerSatisfaction}</div>
                  <div className="text-xs text-gray-400">Satisfaction</div>
                </motion.div>
                
                <motion.div
                  initial={_{ opacity: 0, _scale: 0.8}}
                  animate={_{ opacity: 1, _scale: 1}}
                  transition={_{ duration: 0.6, _delay: 0.4}} className="bg-gradient-to-br from-orange-600/20 to-red-600/20 backdrop-blur-sm rounded-2xl p-4 border border-orange-500/30">
                  <div className="text-2xl font-bold text-orange-400">{_marketAnalysis.averageROI}</div>
                  <div className="text-xs text-gray-400">Average ROI</div>
                </motion.div>
                
                <motion.div
                  initial={_{ opacity: 0, _scale: 0.8}}
                  animate={_{ opacity: 1, _scale: 1}}
                  transition={_{ duration: 0.6, _delay: 0.5}} className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-4 border border-cyan-500/30">
                  <div className="text-2xl font-bold text-cyan-400">{_marketAnalysis.timeToValue}</div>
                  <div className="text-xs text-gray-400">Time to Value</div>
                </motion.div>
                
                <motion.div
                  initial={_{ opacity: 0, _scale: 0.8}}
                  animate={_{ opacity: 1, _scale: 1}}
                  transition={_{ duration: 0.6, _delay: 0.6}} className="bg-gradient-to-br from-pink-600/20 to-rose-600/20 backdrop-blur-sm rounded-2xl p-4 border border-pink-500/30">
                  <div className="text-2xl font-bold text-pink-400">{_marketAnalysis.globalReach}</div>
                  <div className="text-xs text-gray-400">Global Reach</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Pricing Tiers */}
        <section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;max-w-7xl mx-auto&quot;>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }} className=&quot;text-center mb-16&quot;>
              <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
=======
        {_/* Pricing Tiers */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={_{ opacity: 0, _y: 30}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              viewport={_{ once: true}} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                Choose Your Transformation Plan
              </h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Start with our starter plan and scale up as you grow. All plans include 
                our revolutionary AI and quantum computing services.
              </p>
            </motion.div>

<<<<<<< HEAD
            <div className=&quot;grid grid-cols-1 lg:grid-cols-3 gap-8&quot;>
              {pricingTiers.map((tier, index) => (
=======
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {_pricingTiers.map(_(tier, _index) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                <motion.div
                  key={tier.name}
                  initial={_{ opacity: 0, _y: 30}}
                  whileInView={_{ opacity: 1, _y: 0}}
                  transition={_{ duration: 0.6, _delay: index * 0.2}}
                  viewport={_{ once: true}}
                  className={_`relative ${
                    tier.popular 
                      ? 'scale-105 border-2 border-blue-500' 
                      : 'border border-gray-700'} bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-3xl p-8`}
                >
<<<<<<< HEAD
                  {tier.popular && (
                    <div className=&quot;absolute -top-4 left-1/2 transform -translate-x-1/2&quot;>
                      <div className=&quot;bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold&quot;>
=======
                  {_tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        Most Popular
                      </div>
                    </div>
                  )}

<<<<<<< HEAD
                  <div className=&quot;text-center mb-8&quot;>
                    <div className=&quot;inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl mb-4&quot;>
                      {tier.icon}
                    </div>
                    <h3 className=&quot;text-2xl font-bold text-white mb-2&quot;>{tier.name}</h3>
                    <p className=&quot;text-gray-400 mb-6&quot;>{tier.description}</p>
                    
                    <div className=&quot;mb-4&quot;>
                      <span className=&quot;text-4xl font-bold text-white&quot;>${tier.price}</span>
                      <span className=&quot;text-gray-400&quot;>{tier.period}</span>
                    </div>
                    
                    {tier.savings && (
                      <div className=&quot;text-green-400 text-sm font-semibold mb-6&quot;>
=======
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl mb-4">
                      {_tier.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{_tier.name}</h3>
                    <p className="text-gray-400 mb-6">{_tier.description}</p>
                    
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-white">${_tier.price}</span>
                      <span className="text-gray-400">{_tier.period}</span>
                    </div>
                    
                    {_tier.savings && (
                      <div className="text-green-400 text-sm font-semibold mb-6">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        {tier.savings}
                      </div>
                    )}
                  </div>

<<<<<<< HEAD
                  <ul className=&quot;space-y-4 mb-8&quot;>
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className=&quot;flex items-start gap-3&quot;>
                        <Check className=&quot;w-5 h-5 text-green-400 mt-0.5 flex-shrink-0&quot; />
                        <span className=&quot;text-gray-300&quot;>{feature}</span>
=======
                  <ul className="space-y-4 mb-8">
                    {_tier.features.map(_(feature, _featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{_feature}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      </li>
                    ))}
                  </ul>

<<<<<<< HEAD
                  <button className=&quot;w-full px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-200&quot;>
                    {tier.cta}
=======
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-200">
                    {_tier.cta}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Service Pricing Grid */}
        <section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;max-w-7xl mx-auto&quot;>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }} className=&quot;text-center mb-16&quot;>
              <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
=======
        {_/* Service Pricing Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={_{ opacity: 0, _y: 30}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              viewport={_{ once: true}} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                Individual Service Pricing
              </h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Choose individual services or bundle them for maximum savings. 
                All services include free trials and comprehensive support.
              </p>
            </motion.div>

<<<<<<< HEAD
            {/* Category Filter */}
            <div className=&quot;flex flex-wrap justify-center gap-4 mb-12&quot;>
              {serviceCategories.map((category) => (
                <button
=======
            {_/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {_serviceCategories.map(_(category) => (_<button
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  key={category.id}
                  onClick={_() => setSelectedCategory(category.id)}
                  className={_`flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 border-blue-500 text-white'
                      : 'border-gray-600 text-gray-300 hover:border-blue-500 hover:text-blue-400'}`}
                >
<<<<<<< HEAD
                  <category.icon className=&quot;w-5 h-5&quot; />
                  {category.name}
                  <span className=&quot;bg-white/20 px-2 py-1 rounded-full text-xs&quot;>
                    {category.count}
=======
                  <category.icon className="w-5 h-5" />
                  {_category.name}
                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                    {_category.count}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </span>
                </button>
              ))}
            </div>

<<<<<<< HEAD
            {/* Services Grid */}
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
              {filteredServices.map((service) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }} className=&quot;group relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105&quot;>
                  {/* Service Header */}
                  <div className=&quot;flex items-start justify-between mb-4&quot;>
                    <div className=&quot;flex items-center gap-3&quot;>
                      <div className=&quot;text-3xl&quot;>{service.icon}</div>
                      <div>
                        <h3 className=&quot;text-xl font-bold text-white group-hover:text-blue-400 transition-colors&quot;>
                          {service.name}
                        </h3>
                        <p className=&quot;text-gray-400 text-sm&quot;>{service.tagline}</p>
                      </div>
                    </div>
                    {service.popular && (
                      <div className=&quot;bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1&quot;>
                        <Star className=&quot;w-3 h-3&quot; />
=======
            {_/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {_filteredServices.map(_(service) => (
                <motion.div
                  key={service.id}
                  initial={_{ opacity: 0, _y: 20}}
                  whileInView={_{ opacity: 1, _y: 0}}
                  transition={_{ duration: 0.5, _delay: 0.1}}
                  viewport={_{ once: true}} className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
                  {_/* Service Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="text-3xl">{_service.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                          {_service.name}
                        </h3>
                        <p className="text-gray-400 text-sm">{_service.tagline}</p>
                      </div>
                    </div>
                    {_service.popular && (
                      <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                        <Star className="w-3 h-3" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        Popular
                      </div>
                    )}
                  </div>

<<<<<<< HEAD
                  {/* Service Description */}
                  <p className=&quot;text-gray-300 mb-4 line-clamp-3&quot;>{service.description}</p>

                  {/* Price and Rating */}
                  <div className=&quot;flex items-center justify-between mb-4&quot;>
                    <div className=&quot;flex items-center gap-2&quot;>
                      <span className=&quot;text-2xl font-bold text-blue-400&quot;>
                        ${getPrice(service)}
                      </span>
                      <span className=&quot;text-gray-400&quot;>{service.period}</span>
                    </div>
                    <div className=&quot;flex items-center gap-1&quot;>
                      <Star className=&quot;w-4 h-4 text-yellow-400 fill-current&quot; />
                      <span className=&quot;text-white&quot;>{service.rating}</span>
                      <span className=&quot;text-gray-400 text-sm&quot;>({service.reviews})</span>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className=&quot;mb-4&quot;>
                    <h4 className=&quot;text-sm font-semibold text-gray-300 mb-2&quot;>Key Features:</h4>
                    <div className=&quot;grid grid-cols-1 gap-1&quot;>
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className=&quot;flex items-center gap-2 text-sm text-gray-400&quot;>
                          <div className=&quot;w-1.5 h-1.5 bg-blue-500 rounded-full&quot;></div>
                          {feature}
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <div className=&quot;text-xs text-gray-500 mt-1&quot;>
=======
                  {_/* Service Description */}
                  <p className="text-gray-300 mb-4 line-clamp-3">{_service.description}</p>

                  {_/* Price and Rating */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-blue-400">
                        ${_getPrice(service)}
                      </span>
                      <span className="text-gray-400">{_service.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white">{_service.rating}</span>
                      <span className="text-gray-400 text-sm">({_service.reviews})</span>
                    </div>
                  </div>

                  {_/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                    <div className="grid grid-cols-1 gap-1">
                      {_service.features.slice(0, _3).map(_(feature, _idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                          {_feature}
                        </div>
                      ))}
                      {_service.features.length > 3 && (
                        <div className="text-xs text-gray-500 mt-1">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                          +{service.features.length - 3} more features
                        </div>
                      )}
                    </div>
                  </div>

<<<<<<< HEAD
                  {/* Market Position */}
                  <div className=&quot;mb-4 p-3 bg-gray-800/50 rounded-lg&quot;>
                    <h4 className=&quot;text-xs font-semibold text-gray-300 mb-1&quot;>Market Position:</h4>
                    <p className=&quot;text-xs text-gray-400 line-clamp-2&quot;>{service.marketPosition}</p>
                  </div>

                  {/* Actions */}
                  <div className=&quot;flex items-center gap-3&quot;>
                    <button className=&quot;flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700&quot;>
                      <ExternalLink className=&quot;w-4 h-4 mr-2&quot; />
=======
                  {_/* Market Position */}
                  <div className="mb-4 p-3 bg-gray-800/50 rounded-lg">
                    <h4 className="text-xs font-semibold text-gray-300 mb-1">Market Position:</h4>
                    <p className="text-xs text-gray-400 line-clamp-2">{_service.marketPosition}</p>
                  </div>

                  {_/* Actions */}
                  <div className="flex items-center gap-3">
                    <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      <ExternalLink className="w-4 h-4 mr-2" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      Learn More
                    </button>
                    <button className=&quot;border-blue-500 text-blue-400 hover:bg-blue-500/20&quot;>
                      <Phone className=&quot;w-4 h-4&quot; />
                    </button>
                  </div>

<<<<<<< HEAD
                  {/* Hover Effects */}
                  <div className=&quot;absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none&quot;></div>
=======
                  {_/* Hover Effects */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </motion.div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Contact Section */}
        <section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;max-w-4xl mx-auto text-center&quot;>
=======
        {_/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <motion.div
              initial={_{ opacity: 0, _y: 30}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              viewport={_{ once: true}}
            >
              <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
                Ready to Get Started?
              </h2>
              <p className=&quot;text-xl text-gray-300 mb-8&quot;>
                Contact our team to discuss your specific needs and get a custom quote. 
                We offer flexible pricing and payment options to fit your budget.
              </p>
              
<<<<<<< HEAD
              <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-6 mb-8&quot;>
                <div className=&quot;bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/30&quot;>
                  <Phone className=&quot;w-8 h-8 text-blue-400 mx-auto mb-3&quot; />
                  <h3 className=&quot;text-lg font-semibold text-white mb-2&quot;>Call Us</h3>
                  <p className=&quot;text-blue-400 font-mono&quot;>{contactInfo.mobile}</p>
                </div>
                
                <div className=&quot;bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-sm rounded-2xl p-6 border border-green-500/30&quot;>
                  <Mail className=&quot;w-8 h-8 text-green-400 mx-auto mb-3&quot; />
                  <h3 className=&quot;text-lg font-semibold text-white mb-2&quot;>Email Us</h3>
                  <p className=&quot;text-green-400&quot;>{contactInfo.email}</p>
                </div>
                
                <div className=&quot;bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30&quot;>
                  <MapPin className=&quot;w-8 h-8 text-purple-400 mx-auto mb-3&quot; />
                  <h3 className=&quot;text-lg font-semibold text-white mb-2&quot;>Visit Us</h3>
                  <p className=&quot;text-purple-400 text-sm&quot;>{contactInfo.address}</p>
=======
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/30">
                  <Phone className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                  <p className="text-blue-400 font-mono">{_contactInfo.mobile}</p>
                </div>
                
                <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-sm rounded-2xl p-6 border border-green-500/30">
                  <Mail className="w-8 h-8 text-green-400 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                  <p className="text-green-400">{_contactInfo.email}</p>
                </div>
                
                <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30">
                  <MapPin className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                  <p className="text-purple-400 text-sm">{_contactInfo.address}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </div>
              </div>

<<<<<<< HEAD
              <div className="flex flex-col sm: flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  <Phone className="w-5 h-5 mr-2" />
=======
              <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
                <button className=&quot;bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700&quot;>
                  <Phone className=&quot;w-5 h-5 mr-2&quot; />
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                  Get Custom Quote
                </button>
                <button className=&quot;border-blue-500 text-blue-400 hover:bg-blue-500/20&quot;>
                  <BookOpen className=&quot;w-5 h-5 mr-2&quot; />
                  Download Pricing Guide
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraQuantumHolographicBackground>
  )
}
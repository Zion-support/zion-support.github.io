<<<<<<< HEAD
import React, { useState } from 'react',
import { 
  Brain, Shield, Rocket, Cpu, Database, Atom, Users, 
  CheckCircle, TrendingUp, Clock, Star, Filter, ChevronDown
} from 'lucide-react',

interface Service {
  id: string,
  name: string,
  tagline: string,
  category: string,
  price: string,
  period: string,
  setupTime: string,
  customers: string,
  features: string[],
  benefits: string[],
  roi: string,
  marketSize: string,
  growthRate: string,
  popular?: boolean,
  icon: React.ComponentType<any>,
  color: string
}

const EnhancedServicesShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all'),
  const [searchTerm, setSearchTerm] = useState(''),

  const services: Service[] = [
    {
      id: 'ai-bi',
      name: 'AI Business Intelligence',
      tagline: 'Transform data into actionable insights with AI-powered analytics',
      category: 'AI & Analytics',
      price: '$499',
      period: '/month',
      setupTime: '2-3 weeks',
      customers: '150+',
      features: ['AI-powered dashboardsPredictive analyticsReal-time insightsCustom reporting'],
      benefits: ['30% faster decision makingImproved data accuracyCost reduction'],
      roi: 'Average 3.2x ROI within 6 months',
      marketSize: '$25B',
      growthRate: '25% YoY',
      popular: true,
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'quantum-cyber',
      name: 'Quantum Cybersecurity',
      tagline: 'Future-proof security with quantum-resistant encryption and AI threat detection',
      category: 'Security',
      price: '$799',
      period: '/month',
      setupTime: '4-6 weeks',
      customers: '75+',
      features: ['Quantum-resistant encryptionAI threat detectionZero-trust architecture24/7 monitoring'],
      benefits: ['99.99% threat preventionCompliance readyReduced security incidents'],
      roi: 'Average 4.1x ROI within 8 months',
      marketSize: '$18B',
      growthRate: '32% YoY',
      popular: false,
      icon: Shield,
      color: 'from-red-500 to-orange-500'
    },
    {
      id: 'edge-computing',
      name: 'Edge Computing Orchestration',
      tagline: 'Deploy and manage applications at the edge with intelligent orchestration',
      category: 'Infrastructure',
      price: '$349',
      period: '/month',
      setupTime: '1-2 weeks',
      customers: '200+',
      features: ['Edge node managementIoT device managementReal-time monitoringAuto-scaling'],
      benefits: ['50% latency reductionImproved reliabilityCost optimization'],
      roi: 'Average 2.8x ROI within 4 months',
      marketSize: '$12B',
      growthRate: '28% YoY',
      popular: false,
      icon: Cpu,
      color: 'from-emerald-500 to-teal-500'
    },
    {
      id: 'space-tech',
      name: 'Space Technology Innovation',
      tagline: 'Accelerate space exploration with cutting-edge technology solutions',
      category: 'Space Tech',
      price: '$2,499',
      period: '/month',
      setupTime: '8-12 weeks',
      customers: '25+',
      features: ['Satellite managementAI mission planningQuantum communicationSpace analytics'],
      benefits: ['Mission success rate 95%+Reduced launch costsAdvanced capabilities'],
      roi: 'Average 5.2x ROI within 12 months',
      marketSize: '$8B',
      growthRate: '45% YoY',
      popular: true,
      icon: Rocket,
      color: 'from-violet-500 to-purple-500'
    },
    {
      id: 'neural-interface',
      name: 'Neural Interface Development',
      tagline: 'Build the future of human-computer interaction with neural interfaces',
      category: 'Emerging Tech',
      price: '$899',
      period: '/month',
      setupTime: '6-8 weeks',
      customers: '40+',
      features: ['BCI development toolsNeural signal processingAI pattern recognitionSafety protocols'],
      benefits: ['Revolutionary UXAccessibility improvementsResearch advancement'],
      roi: 'Average 6.8x ROI within 18 months',
      marketSize: '$3B',
      growthRate: '67% YoY',
      popular: false,
      icon: Brain,
      color: 'from-pink-500 to-rose-500'
    },
    {
      id: 'quantum-ai',
      name: 'Quantum AI Neural Networks',
      tagline: 'Quantum-powered AI with advanced consciousness capabilities',
      category: 'Quantum AI',
      price: '$1,299',
      period: '/month',
      setupTime: '10-14 weeks',
      customers: '15+',
      features: ['Quantum neural networksConsciousness simulationAdvanced learningQuantum optimization'],
      benefits: ['Unprecedented AI capabilitiesBreakthrough researchCompetitive advantage'],
      roi: 'Average 8.5x ROI within 24 months',
      marketSize: '$2B',
      growthRate: '89% YoY',
      popular: true,
      icon: Atom,
      color: 'from-blue-500 to-cyan-500'
    }
  ],

  const categories = ['all', ...Array.from(new Set(services.map(s => s.category)))],
  
  const filteredServices = services.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory,
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tagline.toLowerCase().includes(searchTerm.toLowerCase()),
    return matchesCategory && matchesSearch
  }),

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: React.ComponentType<any> } = {
      'AI & Analytics': Brain,
      'Security': Shield,
      'Infrastructure': Cpu,
      'Space Tech': Rocket,
      'Emerging Tech': Brain,
      'Quantum AI': Atom
    },
    return iconMap[category] || Brain
  },

  return (
    <section id=&quot;services&quot; className=&quot;py-24 px-6 relative overflow-hidden&quot;>
      {/* Background */}
      <div className=&quot;absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950&quot;>
        <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]&quot; />
        <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.1),transparent_50%)]&quot; />
      </div>

      <div className=&quot;max-w-7xl mx-auto relative z-10&quot;>
        {/* Header */}
        <div className=&quot;text-center mb-16&quot;>
          <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
            <span className=&quot;bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent&quot;>
=======
import React, {_useState} from 'react';
import {_Brain, _Shield, _Rocket, _Cpu, _Database, _Atom, _Users, _CheckCircle, _TrendingUp, _Clock, _Star, _Filter, _ChevronDown} from 'lucide-react';

interface Service {_id: string;
  name: string;
  tagline: string;
  category: string;
  price: string;
  period: string;
  setupTime: string;
  customers: string;
  features: string[];
  benefits: string[];
  roi: string;
  marketSize: string;
  growthRate: string;
  popular?: boolean;
  icon: React.ComponentType<any>;
  color: string;}

const EnhancedServicesShowcase: React.FC = () => {_const [selectedCategory, _setSelectedCategory] = useState<string>('all');
  const [searchTerm, _setSearchTerm] = useState('');

  const services: Service[] = [
    {
      id: 'ai-bi', _name: 'AI Business Intelligence', _tagline: 'Transform data into actionable insights with AI-powered analytics', _category: 'AI & Analytics', _price: '$499', _period: '/month', _setupTime: '2-3 weeks', _customers: '150+', _features: ['AI-powered dashboards', _'Predictive analytics', _'Real-time insights', _'Custom reporting'], _benefits: ['30% faster decision making', _'Improved data accuracy', _'Cost reduction'], _roi: 'Average 3.2x ROI within 6 months', _marketSize: '$25B', _growthRate: '25% YoY', _popular: true, _icon: Brain, _color: 'from-purple-500 to-pink-500'},
    {_id: 'quantum-cyber', _name: 'Quantum Cybersecurity', _tagline: 'Future-proof security with quantum-resistant encryption and AI threat detection', _category: 'Security', _price: '$799', _period: '/month', _setupTime: '4-6 weeks', _customers: '75+', _features: ['Quantum-resistant encryption', _'AI threat detection', _'Zero-trust architecture', _'24/7 monitoring'], _benefits: ['99.99% threat prevention', _'Compliance ready', _'Reduced security incidents'], _roi: 'Average 4.1x ROI within 8 months', _marketSize: '$18B', _growthRate: '32% YoY', _popular: false, _icon: Shield, _color: 'from-red-500 to-orange-500'},
    {_id: 'edge-computing', _name: 'Edge Computing Orchestration', _tagline: 'Deploy and manage applications at the edge with intelligent orchestration', _category: 'Infrastructure', _price: '$349', _period: '/month', _setupTime: '1-2 weeks', _customers: '200+', _features: ['Edge node management', _'IoT device management', _'Real-time monitoring', _'Auto-scaling'], _benefits: ['50% latency reduction', _'Improved reliability', _'Cost optimization'], _roi: 'Average 2.8x ROI within 4 months', _marketSize: '$12B', _growthRate: '28% YoY', _popular: false, _icon: Cpu, _color: 'from-emerald-500 to-teal-500'},
    {_id: 'space-tech', _name: 'Space Technology Innovation', _tagline: 'Accelerate space exploration with cutting-edge technology solutions', _category: 'Space Tech', _price: '$2, _499', _period: '/month', _setupTime: '8-12 weeks', _customers: '25+', _features: ['Satellite management', _'AI mission planning', _'Quantum communication', _'Space analytics'], _benefits: ['Mission success rate 95%+', _'Reduced launch costs', _'Advanced capabilities'], _roi: 'Average 5.2x ROI within 12 months', _marketSize: '$8B', _growthRate: '45% YoY', _popular: true, _icon: Rocket, _color: 'from-violet-500 to-purple-500'},
    {_id: 'neural-interface', _name: 'Neural Interface Development', _tagline: 'Build the future of human-computer interaction with neural interfaces', _category: 'Emerging Tech', _price: '$899', _period: '/month', _setupTime: '6-8 weeks', _customers: '40+', _features: ['BCI development tools', _'Neural signal processing', _'AI pattern recognition', _'Safety protocols'], _benefits: ['Revolutionary UX', _'Accessibility improvements', _'Research advancement'], _roi: 'Average 6.8x ROI within 18 months', _marketSize: '$3B', _growthRate: '67% YoY', _popular: false, _icon: Brain, _color: 'from-pink-500 to-rose-500'},
    {_id: 'quantum-ai', _name: 'Quantum AI Neural Networks', _tagline: 'Quantum-powered AI with advanced consciousness capabilities', _category: 'Quantum AI', _price: '$1, _299', _period: '/month', _setupTime: '10-14 weeks', _customers: '15+', _features: ['Quantum neural networks', _'Consciousness simulation', _'Advanced learning', _'Quantum optimization'], _benefits: ['Unprecedented AI capabilities', _'Breakthrough research', _'Competitive advantage'], _roi: 'Average 8.5x ROI within 24 months', _marketSize: '$2B', _growthRate: '89% YoY', _popular: true, _icon: Atom, _color: 'from-blue-500 to-cyan-500'}
  ];

  const _categories = ['all', ...Array.from(new Set(services.map(s => s.category)))];
  
  const _filteredServices = services.filter(service => {_const _matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const _matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;});

  const _getCategoryIcon = (_category: string) => {_const iconMap: { [key: string]: React.ComponentType<any>} = {_'AI & Analytics': Brain, _'Security': Shield, _'Infrastructure': Cpu, _'Space Tech': Rocket, _'Emerging Tech': Brain, _'Quantum AI': Atom};
    return iconMap[category] || Brain;
  };

  return (
    <section id="services" className="py-24 px-6 relative overflow-hidden">
      {_/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.1),transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {_/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              Our Services
            </span>
          </h2>
          <p className=&quot;text-xl text-white/70 max-w-3xl mx-auto leading-relaxed&quot;>
            Cutting-edge technology solutions designed to transform your business and accelerate innovation
          </p>
        </div>

<<<<<<< HEAD
        {/* Filters */}
        <div className=&quot;flex flex-col md:flex-row gap-4 mb-12 justify-center items-center&quot;>
          {/* Category Filter */}
          <div className=&quot;relative&quot;>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className=&quot;px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-400 transition-colors duration-300 appearance-none pr-12&quot;
            >
              {categories.map((category) => (
                <option key={category} value={category} className=&quot;bg-slate-800 text-white&quot;>
                  {category === 'all' ? 'All Categories' : category}
=======
        {_/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-12 justify-center items-center">
          {_/* Category Filter */}
          <div className="relative">
            <select
              value={_selectedCategory}
              onChange={_(_e) => setSelectedCategory(e.target.value)}
              className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-400 transition-colors duration-300 appearance-none pr-12"
            >
              {_categories.map(_(category) => (
                <option key={category} value={_category} className="bg-slate-800 text-white">
                  {_category === 'all' ? 'All Categories' : category}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </option>
              ))}
            </select>
            <ChevronDown className=&quot;absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50 pointer-events-none&quot; />
          </div>

<<<<<<< HEAD
          {/* Search */}
          <div className=&quot;relative&quot;>
            <input
              type=&quot;text&quot;
              placeholder=&quot;Search services...&quot;
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className=&quot;px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors duration-300 w-64&quot;
=======
          {_/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search services..."
              value={_searchTerm}
              onChange={_(_e) => setSearchTerm(e.target.value)}
              className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors duration-300 w-64"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            />
            <Filter className=&quot;absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50&quot; />
          </div>
        </div>

<<<<<<< HEAD
        {/* Services Grid */}
        <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
          {filteredServices.map((service, index) => (
=======
        {_/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {_filteredServices.map(_(service, _index) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <div
              key={service.id}
              className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl&quot;
            >
<<<<<<< HEAD
              {/* Popular Badge */}
              {service.popular && (
                <div className=&quot;absolute top-4 right-4 z-20&quot;>
                  <div className=&quot;bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1&quot;>
                    <Star className=&quot;w-3 h-3&quot; />
=======
              {_/* Popular Badge */}
              {_service.popular && (
                <div className="absolute top-4 right-4 z-20">
                  <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    Popular
                  </div>
                </div>
              )}

<<<<<<< HEAD
              {/* Service Content */}
              <div className=&quot;p-8&quot;>
                {/* Icon and Category */}
                <div className=&quot;flex items-center justify-between mb-4&quot;>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-4 flex items-center justify-center text-2xl`}>
                    <service.icon className=&quot;w-8 h-8 text-white&quot; />
                  </div>
                  <div className=&quot;text-right&quot;>
                    <div className=&quot;text-xs text-white/60 mb-1&quot;>{getCategoryIcon(service.category)({ className: 'w-3 h-3' })}</div>
                    <div className=&quot;text-xs text-white/40&quot;>{service.category}</div>
                  </div>
                </div>

                {/* Service Info */}
                <h3 className=&quot;text-xl font-bold mb-3 text-white&quot;>{service.name}</h3>
                <p className=&quot;text-white/70 text-sm mb-4 leading-relaxed&quot;>{service.tagline}</p>

                {/* Pricing */}
                <div className=&quot;mb-6&quot;>
                  <div className=&quot;flex items-baseline gap-2 mb-2&quot;>
                    <span className=&quot;text-3xl font-bold text-white&quot;>{service.price}</span>
                    <span className=&quot;text-white/60&quot;>{service.period}</span>
                  </div>
                  <div className=&quot;flex items-center gap-4 text-xs text-white/50&quot;>
                    <span className=&quot;flex items-center gap-1&quot;>
                      <Clock className=&quot;w-3 h-3&quot; />
                      {service.setupTime}
                    </span>
                    <span className=&quot;flex items-center gap-1&quot;>
                      <Users className=&quot;w-3 h-3&quot; />
                      {service.customers} customers
=======
              {_/* Service Content */}
              <div className="p-8">
                {_/* Icon and Category */}
                <div className="flex items-center justify-between mb-4">
                  <div className={_`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-4 flex items-center justify-center text-2xl`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-white/60 mb-1">{_getCategoryIcon(service.category)({ className: 'w-3 h-3'})}</div>
                    <div className="text-xs text-white/40">{_service.category}</div>
                  </div>
                </div>

                {_/* Service Info */}
                <h3 className="text-xl font-bold mb-3 text-white">{_service.name}</h3>
                <p className="text-white/70 text-sm mb-4 leading-relaxed">{_service.tagline}</p>

                {_/* Pricing */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl font-bold text-white">{_service.price}</span>
                    <span className="text-white/60">{_service.period}</span>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-white/50">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {_service.setupTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {_service.customers} customers
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </span>
                  </div>
                </div>

<<<<<<< HEAD
                {/* Key Features */}
                <div className=&quot;mb-6&quot;>
                  <h4 className=&quot;text-sm font-semibold text-white mb-3&quot;>Key Features:</h4>
                  <div className=&quot;space-y-2&quot;>
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className=&quot;flex items-center gap-2 text-xs text-white/70&quot;>
                        <CheckCircle className=&quot;w-3 h-3 text-green-400&quot; />
                        {feature}
=======
                {_/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                  <div className="space-y-2">
                    {_service.features.slice(0, _3).map(_(feature, _idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-white/70">
                        <CheckCircle className="w-3 h-3 text-green-400" />
                        {_feature}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      </div>
                    ))}
                  </div>
                </div>

<<<<<<< HEAD
                {/* Benefits */}
                <div className=&quot;mb-6&quot;>
                  <h4 className=&quot;text-sm font-semibold text-white mb-3&quot;>Key Benefits:</h4>
                  <div className=&quot;space-y-2&quot;>
                    {service.benefits.slice(0, 2).map((benefit, idx) => (
                      <div key={idx} className=&quot;flex items-center gap-2 text-xs text-white/70&quot;>
                        <TrendingUp className=&quot;w-3 h-3 text-blue-400&quot; />
                        {benefit}
=======
                {_/* Benefits */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Key Benefits:</h4>
                  <div className="space-y-2">
                    {_service.benefits.slice(0, _2).map(_(benefit, _idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-white/70">
                        <TrendingUp className="w-3 h-3 text-blue-400" />
                        {_benefit}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      </div>
                    ))}
                  </div>
                </div>

<<<<<<< HEAD
                {/* ROI and Market Info */}
                <div className=&quot;mb-6 p-4 bg-white/5 rounded-lg&quot;>
                  <div className=&quot;text-xs text-white/60 mb-2&quot;>ROI & Market Position</div>
                  <div className=&quot;text-xs text-white/80 leading-relaxed&quot;>{service.roi}</div>
                  <div className=&quot;mt-2 text-xs text-white/60&quot;>
                    Market: {service.marketSize} • Growth: {service.growthRate}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className=&quot;flex gap-3&quot;>
                  <button
                    onClick={() => window.location.href = `mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.name}`}
                    className=&quot;flex-1 px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105&quot;
=======
                {_/* ROI and Market Info */}
                <div className="mb-6 p-4 bg-white/5 rounded-lg">
                  <div className="text-xs text-white/60 mb-2">ROI & Market Position</div>
                  <div className="text-xs text-white/80 leading-relaxed">{_service.roi}</div>
                  <div className="mt-2 text-xs text-white/60">
                    Market: {_service.marketSize} • Growth: {_service.growthRate}
                  </div>
                </div>

                {_/* Action Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={_() => window.location.href = `mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.name}`}
                    className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  >
                    Get Started
                  </button>
                  <button
<<<<<<< HEAD
                    onClick={() => window.location.href = `mailto:kleber@ziontechgroup.com?subject=Demo request for ${service.name}`}
                    className=&quot;px-4 py-3 border border-white/20 hover:border-white/40 rounded-xl font-semibold text-white transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10&quot;
=======
                    onClick={_() => window.location.href = `mailto:kleber@ziontechgroup.com?subject=Demo request for ${service.name}`}
                    className="px-4 py-3 border border-white/20 hover:border-white/40 rounded-xl font-semibold text-white transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  >
                    Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

<<<<<<< HEAD
        {/* CTA Section */}
        <div className=&quot;text-center mt-16&quot;>
          <div className=&quot;bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl p-8 border border-blue-500/20&quot;>
            <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>
=======
        {_/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl p-8 border border-blue-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              Ready to Transform Your Business?
            </h3>
            <p className=&quot;text-white/70 mb-6 max-w-2xl mx-auto&quot;>
              Let's discuss how our cutting-edge technology solutions can accelerate your digital transformation journey.
            </p>
<<<<<<< HEAD
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
=======
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
              <a
                href=&quot;mailto:kleber@ziontechgroup.com?subject=Consultation Request&quot;
                className=&quot;px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl&quot;
              >
                Schedule Consultation
              </a>
              <a
                href=&quot;tel:+13024640950&quot;
                className=&quot;px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10&quot;
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
},

export default EnhancedServicesShowcase,
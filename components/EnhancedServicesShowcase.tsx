import React, { useState } from 'react';
<<<<<<< HEAD
import {
  Brain,
  Shield,
  Rocket,
  Cpu,
  Database,
  Atom,
  Users,
  CheckCircle,
  TrendingUp,
  Clock,
  Star,
  Filter,
  ChevronDown,;
} from 'lucide-react';

interface Service {
  id: string;
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
  color: string;
=======
import { 
  Brain, Shield, Rocket, Cpu, Database, Atom, Users, 
  CheckCircle, TrendingUp, Clock, Star, Filter, ChevronDown
} from 'lucide-react';

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
  popular?: boolean;
  icon: React.ComponentType<any>,
  color: string
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88

const EnhancedServicesShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const services: Service[] = [
    {
      id: 'ai-bi',
      name: 'AI Business Intelligence',
<<<<<<< HEAD
      tagline:
        'Transform data into actionable insights with AI-powered analytics',
=======
      tagline: 'Transform data into actionable insights with AI-powered analytics',
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
      category: 'AI & Analytics',
      price: '$499',
      period: '/month',
      setupTime: '2-3 weeks',
      customers: '150+',
<<<<<<< HEAD
      features: [
        'AI-powered dashboards',
        'Predictive analytics',
        'Real-time insights',
        'Custom reporting',
      ],
      benefits: [
        '30% faster decision making',
        'Improved data accuracy',
        'Cost reduction',
      ],
=======
      features: ['AI-powered dashboardsPredictive analyticsReal-time insightsCustom reporting'],
      benefits: ['30% faster decision makingImproved data accuracyCost reduction'],
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
      roi: 'Average 3.2x ROI within 6 months',
      marketSize: '$25B',
      growthRate: '25% YoY',
      popular: true,
      icon: Brain,
<<<<<<< HEAD
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 'quantum-cyber',
      name: 'Quantum Cybersecurity',
      tagline:
        'Future-proof security with quantum-resistant encryption and AI threat detection',
=======
      color: 'from-purple-500 to-pink-500'
    };
    {
      id: 'quantum-cyber',
      name: 'Quantum Cybersecurity',
      tagline: 'Future-proof security with quantum-resistant encryption and AI threat detection',
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
      category: 'Security',
      price: '$799',
      period: '/month',
      setupTime: '4-6 weeks',
      customers: '75+',
<<<<<<< HEAD
      features: [
        'Quantum-resistant encryption',
        'AI threat detection',
        'Zero-trust architecture',
        '24/7 monitoring',
      ],
      benefits: [
        '99.99% threat prevention',
        'Compliance ready',
        'Reduced security incidents',
      ],
=======
      features: ['Quantum-resistant encryptionAI threat detectionZero-trust architecture24/7 monitoring'],
      benefits: ['99.99% threat preventionCompliance readyReduced security incidents'],
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
      roi: 'Average 4.1x ROI within 8 months',
      marketSize: '$18B',
      growthRate: '32% YoY',
      popular: false,
      icon: Shield,
<<<<<<< HEAD
      color: 'from-red-500 to-orange-500',
    },
    {
      id: 'edge-computing',
      name: 'Edge Computing Orchestration',
      tagline:
        'Deploy and manage applications at the edge with intelligent orchestration',
=======
      color: 'from-red-500 to-orange-500'
    };
    {
      id: 'edge-computing',
      name: 'Edge Computing Orchestration',
      tagline: 'Deploy and manage applications at the edge with intelligent orchestration',
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
      category: 'Infrastructure',
      price: '$349',
      period: '/month',
      setupTime: '1-2 weeks',
      customers: '200+',
<<<<<<< HEAD
      features: [
        'Edge node management',
        'IoT device management',
        'Real-time monitoring',
        'Auto-scaling',
      ],
      benefits: [
        '50% latency reduction',
        'Improved reliability',
        'Cost optimization',
      ],
=======
      features: ['Edge node managementIoT device managementReal-time monitoringAuto-scaling'],
      benefits: ['50% latency reductionImproved reliabilityCost optimization'],
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
      roi: 'Average 2.8x ROI within 4 months',
      marketSize: '$12B',
      growthRate: '28% YoY',
      popular: false,
      icon: Cpu,
<<<<<<< HEAD
      color: 'from-emerald-500 to-teal-500',
    },
    {
      id: 'space-tech',
      name: 'Space Technology Innovation',
      tagline:
        'Accelerate space exploration with cutting-edge technology solutions',
      category: 'Space Tech',
      price: '$2,499',
      period: '/month',
      setupTime: '8-12 weeks',
      customers: '25+',
      features: [
        'Satellite management',
        'AI mission planning',
        'Quantum communication',
        'Space analytics',
      ],
      benefits: [
        'Mission success rate 95%+',
        'Reduced launch costs',
        'Advanced capabilities',
      ],
=======
      color: 'from-emerald-500 to-teal-500'
    };
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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
      roi: 'Average 5.2x ROI within 12 months',
      marketSize: '$8B',
      growthRate: '45% YoY',
      popular: true,
      icon: Rocket,
<<<<<<< HEAD
      color: 'from-violet-500 to-purple-500',
    },
    {
      id: 'neural-interface',
      name: 'Neural Interface Development',
      tagline:
        'Build the future of human-computer interaction with neural interfaces',
=======
      color: 'from-violet-500 to-purple-500'
    };
    {
      id: 'neural-interface',
      name: 'Neural Interface Development',
      tagline: 'Build the future of human-computer interaction with neural interfaces',
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
      category: 'Emerging Tech',
      price: '$899',
      period: '/month',
      setupTime: '6-8 weeks',
      customers: '40+',
<<<<<<< HEAD
      features: [
        'BCI development tools',
        'Neural signal processing',
        'AI pattern recognition',
        'Safety protocols',
      ],
      benefits: [
        'Revolutionary UX',
        'Accessibility improvements',
        'Research advancement',
      ],
=======
      features: ['BCI development toolsNeural signal processingAI pattern recognitionSafety protocols'],
      benefits: ['Revolutionary UXAccessibility improvementsResearch advancement'],
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
      roi: 'Average 6.8x ROI within 18 months',
      marketSize: '$3B',
      growthRate: '67% YoY',
      popular: false,
      icon: Brain,
<<<<<<< HEAD
      color: 'from-pink-500 to-rose-500',
    },
=======
      color: 'from-pink-500 to-rose-500'
    };
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
    {
      id: 'quantum-ai',
      name: 'Quantum AI Neural Networks',
      tagline: 'Quantum-powered AI with advanced consciousness capabilities',
      category: 'Quantum AI',
      price: '$1,299',
<<<<<<< HEAD
      period: '/month',
      setupTime: '10-14 weeks',
      customers: '15+',
      features: [
        'Quantum neural networks',
        'Consciousness simulation',
        'Advanced learning',
        'Quantum optimization',
      ],
      benefits: [
        'Unprecedented AI capabilities',
        'Breakthrough research',
        'Competitive advantage',
      ],
=======
    period: '/month',
      setupTime: '10-14 weeks',
      customers: '15+',
      features: ['Quantum neural networksConsciousness simulationAdvanced learningQuantum optimization'],
      benefits: ['Unprecedented AI capabilitiesBreakthrough researchCompetitive advantage'],
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
      roi: 'Average 8.5x ROI within 24 months',
      marketSize: '$2B',
      growthRate: '89% YoY',
      popular: true,
      icon: Atom,
<<<<<<< HEAD
      color: 'from-blue-500 to-cyan-500',
    },
  ];

  const categories = [
    'all',
    ...Array.from(new Set(services.map(s => s.category))),
  ];

  const filteredServices = services.filter(service => {
    const matchesCategory =
      selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch =
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
=======
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  const categories = ['all', ...Array.from(new Set(services.map(s => s.category)))];
  
  const filteredServices = services.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  });

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: React.ComponentType<any> } = {
<<<<<<< HEAD
      'AI & Analytics': Brain,
      Security: Shield,
      Infrastructure: Cpu,
      'Space Tech': Rocket,
      'Emerging Tech': Brain,
      'Quantum AI': Atom,
    };
    return iconMap[category] || Brain;
  };

  return (
    <section id='services' className='py-24 px-6 relative overflow-hidden'>
      {/* Background */}
      <div className='absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]' />
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.1),transparent_50%)]' />
      </div>

      <div className='max-w-7xl mx-auto relative z-10'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
            <span className='bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent'>
              Our Services
            </span>
          </h2>
          <p className='text-xl text-white/70 max-w-3xl mx-auto leading-relaxed'>
            Cutting-edge technology solutions designed to transform your
            business and accelerate innovation
=======
      'AI & Analytics': Brain;
      'Security': Shield;
      'Infrastructure': Cpu;
      'Space Tech': Rocket;
      'Emerging Tech': Brain;
      'Quantum AI': Atom
    };
    return iconMap[category] || Brain
  };

  return (
    <section id="services" className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.1),transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Cutting-edge technology solutions designed to transform your business and accelerate innovation
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
          </p>
        </div>

        {/* Filters */}
<<<<<<< HEAD
        <div className='flex flex-col md:flex-row gap-4 mb-12 justify-center items-center'>
          {/* Category Filter */}
          <div className='relative'>
            <select
              value={selectedCategory}
              onChange={e => setSelectedCategory(e.target.value)}
              className='px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-400 transition-colors duration-300 appearance-none pr-12'
            >
              {categories.map(category => (
                <option
                  key={category}
                  value={category}
                  className='bg-slate-800 text-white'
                >
=======
        <div className="flex flex-col md:flex-row gap-4 mb-12 justify-center items-center">
          {/* Category Filter */}
          <div className="relative">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-400 transition-colors duration-300 appearance-none pr-12"
            >
              {categories.map((category) => (
                <option key={category} value={category} className="bg-slate-800 text-white">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
<<<<<<< HEAD
            <ChevronDown className='absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50 pointer-events-none' />
          </div>

          {/* Search */}
          <div className='relative'>
            <input
              type='text'
              placeholder='Search services...'
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className='px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors duration-300 w-64'
            />
            <Filter className='absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50' />
=======
            <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50 pointer-events-none" />
          </div>

          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors duration-300 w-64"
            />
            <Filter className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
          </div>
        </div>

        {/* Services Grid */}
<<<<<<< HEAD
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              className='group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl'
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className='absolute top-4 right-4 z-20'>
                  <div className='bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1'>
                    <Star className='w-3 h-3' />
=======
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute top-4 right-4 z-20">
                  <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
                    Popular
                  </div>
                </div>
              )}

              {/* Service Content */}
<<<<<<< HEAD
              <div className='p-8'>
                {/* Icon and Category */}
                <div className='flex items-center justify-between mb-4'>
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-4 flex items-center justify-center text-2xl`}
                  >
                    <service.icon className='w-8 h-8 text-white' />
                  </div>
                  <div className='text-right'>
                    <div className='text-xs text-white/60 mb-1'>
                      {getCategoryIcon(service.category)({
                        className: 'w-3 h-3',
                      })}
                    </div>
                    <div className='text-xs text-white/40'>
                      {service.category}
                    </div>
=======
              <div className="p-8">
                {/* Icon and Category */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-4 flex items-center justify-center text-2xl`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-white/60 mb-1">{getCategoryIcon(service.category)({ className: 'w-3 h-3' })}</div>
                    <div className="text-xs text-white/40">{service.category}</div>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
                  </div>
                </div>

                {/* Service Info */}
<<<<<<< HEAD
                <h3 className='text-xl font-bold mb-3 text-white'>
                  {service.name}
                </h3>
                <p className='text-white/70 text-sm mb-4 leading-relaxed'>
                  {service.tagline}
                </p>

                {/* Pricing */}
                <div className='mb-6'>
                  <div className='flex items-baseline gap-2 mb-2'>
                    <span className='text-3xl font-bold text-white'>
                      {service.price}
                    </span>
                    <span className='text-white/60'>{service.period}</span>
                  </div>
                  <div className='flex items-center gap-4 text-xs text-white/50'>
                    <span className='flex items-center gap-1'>
                      <Clock className='w-3 h-3' />
                      {service.setupTime}
                    </span>
                    <span className='flex items-center gap-1'>
                      <Users className='w-3 h-3' />
=======
                <h3 className="text-xl font-bold mb-3 text-white">{service.name}</h3>
                <p className="text-white/70 text-sm mb-4 leading-relaxed">{service.tagline}</p>

                {/* Pricing */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl font-bold text-white">{service.price}</span>
                    <span className="text-white/60">{service.period}</span>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-white/50">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {service.setupTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
                      {service.customers} customers
                    </span>
                  </div>
                </div>

                {/* Key Features */}
<<<<<<< HEAD
                <div className='mb-6'>
                  <h4 className='text-sm font-semibold text-white mb-3'>
                    Key Features:
                  </h4>
                  <div className='space-y-2'>
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div
                        key={idx}
                        className='flex items-center gap-2 text-xs text-white/70'
                      >
                        <CheckCircle className='w-3 h-3 text-green-400' />
=======
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                  <div className="space-y-2">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-white/70">
                        <CheckCircle className="w-3 h-3 text-green-400" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
<<<<<<< HEAD
                <div className='mb-6'>
                  <h4 className='text-sm font-semibold text-white mb-3'>
                    Key Benefits:
                  </h4>
                  <div className='space-y-2'>
                    {service.benefits.slice(0, 2).map((benefit, idx) => (
                      <div
                        key={idx}
                        className='flex items-center gap-2 text-xs text-white/70'
                      >
                        <TrendingUp className='w-3 h-3 text-blue-400' />
=======
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Key Benefits:</h4>
                  <div className="space-y-2">
                    {service.benefits.slice(0, 2).map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-white/70">
                        <TrendingUp className="w-3 h-3 text-blue-400" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                {/* ROI and Market Info */}
<<<<<<< HEAD
                <div className='mb-6 p-4 bg-white/5 rounded-lg'>
                  <div className='text-xs text-white/60 mb-2'>
                    ROI & Market Position
                  </div>
                  <div className='text-xs text-white/80 leading-relaxed'>
                    {service.roi}
                  </div>
                  <div className='mt-2 text-xs text-white/60'>
=======
                <div className="mb-6 p-4 bg-white/5 rounded-lg">
                  <div className="text-xs text-white/60 mb-2">ROI & Market Position</div>
                  <div className="text-xs text-white/80 leading-relaxed">{service.roi}</div>
                  <div className="mt-2 text-xs text-white/60">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
                    Market: {service.marketSize} • Growth: {service.growthRate}
                  </div>
                </div>

                {/* Action Buttons */}
<<<<<<< HEAD
                <div className='flex gap-3'>
                  <button
                    onClick={() =>
                      (window.location.href = `mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.name}`)
                    }
                    className='flex-1 px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105'
=======
                <div className="flex gap-3">
                  <button
                    onClick={() => window.location.href = `mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.name}`}
                    className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
                  >
                    Get Started
                  </button>
                  <button
<<<<<<< HEAD
                    onClick={() =>
                      (window.location.href = `mailto:kleber@ziontechgroup.com?subject=Demo request for ${service.name}`)
                    }
                    className='px-4 py-3 border border-white/20 hover:border-white/40 rounded-xl font-semibold text-white transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10'
=======
                    onClick={() => window.location.href = `mailto:kleber@ziontechgroup.com?subject=Demo request for ${service.name}`}
                    className="px-4 py-3 border border-white/20 hover:border-white/40 rounded-xl font-semibold text-white transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
                  >
                    Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
<<<<<<< HEAD
        <div className='text-center mt-16'>
          <div className='bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl p-8 border border-blue-500/20'>
            <h3 className='text-2xl font-bold text-white mb-4'>
              Ready to Transform Your Business?
            </h3>
            <p className='text-white/70 mb-6 max-w-2xl mx-auto'>
              Let's discuss how our cutting-edge technology solutions can
              accelerate your digital transformation journey.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <a
                href='mailto:kleber@ziontechgroup.com?subject=Consultation Request'
                className='px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl'
=======
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl p-8 border border-blue-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              Let's discuss how our cutting-edge technology solutions can accelerate your digital transformation journey.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Consultation Request"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
              >
                Schedule Consultation
              </a>
              <a
<<<<<<< HEAD
                href='tel:+13024640950'
                className='px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10'
=======
                href="tel:+13024640950"
                className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
<<<<<<< HEAD
  );
};

export default EnhancedServicesShowcase;
=======
  )
};

export default EnhancedServicesShowcase;
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88

import React, { useState } from 'react';
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
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
  icon: React.ComponentType<any>,
  color: string
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
const EnhancedServicesShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const services: Service[] = [
    {
      id: 'ai-bi',
      name: 'AI Business Intelligence',
      tagline:
        'Transform data into actionable insights with AI-powered analytics',      category: 'AI & Analytics',
=======
      tagline: 'Transform data into actionable insights with AI-powered analytics',
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      category: 'AI & Analytics',
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      price: '$499',
      period: '/month',
      setupTime: '2-3 weeks',
      customers: '150+',
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
      ],      roi: 'Average 3.2x ROI within 6 months',
=======
      features: ['AI-powered dashboardsPredictive analyticsReal-time insightsCustom reporting'],
      benefits: ['30% faster decision makingImproved data accuracyCost reduction'],
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      roi: 'Average 3.2x ROI within 6 months',
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      marketSize: '$25B',
      growthRate: '25% YoY',
      popular: true,
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 'quantum-cyber',
      name: 'Quantum Cybersecurity',
      tagline:
        'Future-proof security with quantum-resistant encryption and AI threat detection',      category: 'Security',
=======
      color: 'from-purple-500 to-pink-500'
    };
    {
      id: 'quantum-cyber',
      name: 'Quantum Cybersecurity',
      tagline: 'Future-proof security with quantum-resistant encryption and AI threat detection',
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      category: 'Security',
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      price: '$799',
      period: '/month',
      setupTime: '4-6 weeks',
      customers: '75+',
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
      ],      roi: 'Average 4.1x ROI within 8 months',
=======
      features: ['Quantum-resistant encryptionAI threat detectionZero-trust architecture24/7 monitoring'],
      benefits: ['99.99% threat preventionCompliance readyReduced security incidents'],
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      roi: 'Average 4.1x ROI within 8 months',
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      marketSize: '$18B',
      growthRate: '32% YoY',
      popular: false,
      icon: Shield,
      color: 'from-red-500 to-orange-500',
    },
    {
      id: 'edge-computing',
      name: 'Edge Computing Orchestration',
      tagline:
        'Deploy and manage applications at the edge with intelligent orchestration',      category: 'Infrastructure',
=======
      color: 'from-red-500 to-orange-500'
    };
    {
      id: 'edge-computing',
      name: 'Edge Computing Orchestration',
      tagline: 'Deploy and manage applications at the edge with intelligent orchestration',
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      category: 'Infrastructure',
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      price: '$349',
      period: '/month',
      setupTime: '1-2 weeks',
      customers: '200+',
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
      ],      roi: 'Average 2.8x ROI within 4 months',
=======
      features: ['Edge node managementIoT device managementReal-time monitoringAuto-scaling'],
      benefits: ['50% latency reductionImproved reliabilityCost optimization'],
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      roi: 'Average 2.8x ROI within 4 months',
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      marketSize: '$12B',
      growthRate: '28% YoY',
      popular: false,
      icon: Cpu,
      color: 'from-emerald-500 to-teal-500',
    },
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
      ],      roi: 'Average 5.2x ROI within 12 months',
=======
      features: ['Satellite managementAI mission planningQuantum communicationSpace analytics'],
      benefits: ['Mission success rate 95%+Reduced launch costsAdvanced capabilities'],
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      roi: 'Average 5.2x ROI within 12 months',
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      marketSize: '$8B',
      growthRate: '45% YoY',
      popular: true,
      icon: Rocket,
      color: 'from-violet-500 to-purple-500',
    },
    {
      id: 'neural-interface',
      name: 'Neural Interface Development',
      tagline:
        'Build the future of human-computer interaction with neural interfaces',      category: 'Emerging Tech',
=======
      color: 'from-violet-500 to-purple-500'
    };
    {
      id: 'neural-interface',
      name: 'Neural Interface Development',
      tagline: 'Build the future of human-computer interaction with neural interfaces',
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      category: 'Emerging Tech',
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      price: '$899',
      period: '/month',
      setupTime: '6-8 weeks',
      customers: '40+',
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
      ],      roi: 'Average 6.8x ROI within 18 months',
=======
      features: ['BCI development toolsNeural signal processingAI pattern recognitionSafety protocols'],
      benefits: ['Revolutionary UXAccessibility improvementsResearch advancement'],
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      roi: 'Average 6.8x ROI within 18 months',
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      marketSize: '$3B',
      growthRate: '67% YoY',
      popular: false,
      icon: Brain,
      color: 'from-pink-500 to-rose-500',
    },    {
=======
      color: 'from-pink-500 to-rose-500'
    };
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    {
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      id: 'quantum-ai',
      name: 'Quantum AI Neural Networks',
      tagline: 'Quantum-powered AI with advanced consciousness capabilities',
      category: 'Quantum AI',
      price: '$1,299',
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
      ],      roi: 'Average 8.5x ROI within 24 months',
=======
      price: '$1,299';
      period: '/month',
      setupTime: '10-14 weeks',
      customers: '15+',
      features: ['Quantum neural networksConsciousness simulationAdvanced learningQuantum optimization'],
      benefits: ['Unprecedented AI capabilitiesBreakthrough researchCompetitive advantage'],
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      roi: 'Average 8.5x ROI within 24 months',
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      marketSize: '$2B',
      growthRate: '89% YoY',
      popular: true,
      icon: Atom,
      color: 'from-blue-500 to-cyan-500',
    },
  ];

  const categories = [
    'all',
    ...Array.from(new Set(services.map(s => s.category))),
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  ];

  const filteredServices = services.filter(service => {
    const matchesCategory =
      selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch =
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;  });

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: React.ComponentType<any> } = {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  });

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: React.ComponentType<any> } = {
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      'AI & Analytics': Brain,
      Security: Shield,
      Infrastructure: Cpu,
      'Space Tech': Rocket,
      'Emerging Tech': Brain,
      'Quantum AI': Atom,
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
            business and accelerate innovation          </p>
        </div>

        {/* Filters */}
        <div className='flex flex-col md:flex-row gap-4 mb-12 justify-center items-center'>
=======
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Cutting-edge technology solutions designed to transform your business and accelerate innovation
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          </p>
        </div>

        {/* Filters */}
<<<<<<< HEAD
        <div className='flex flex-col md:flex-row gap-4 mb-12 justify-center items-center'>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
                >                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
            <ChevronDown className='absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50 pointer-events-none' />
=======
              {categories.map((category) => (
                <option key={category} value={category} className="bg-slate-800 text-white">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
<<<<<<< HEAD
            <ChevronDown className='absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50 pointer-events-none' />
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
            <Filter className='absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50' />          </div>
        </div>

        {/* Services Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
=======
            <Filter className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          </div>
        </div>

        {/* Services Grid */}
<<<<<<< HEAD
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              className='group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl'
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className='absolute top-4 right-4 z-20'>
                  <div className='bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1'>
                    <Star className='w-3 h-3' />                    Popular
=======
                <div className="absolute top-4 right-4 z-20">
                  <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                    Popular
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  </div>
                </div>
              )}

              {/* Service Content */}
              <div className='p-8'>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
                    </div>                  </div>
                </div>

                {/* Service Info */}
=======
                  <div className="text-right">
                    <div className="text-xs text-white/60 mb-1">{getCategoryIcon(service.category)({ className: 'w-3 h-3' })}</div>
                    <div className="text-xs text-white/40">{service.category}</div>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  </div>
                </div>

                {/* Service Info */}
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                <h3 className='text-xl font-bold mb-3 text-white'>
                  {service.name}
                </h3>
                <p className='text-white/70 text-sm mb-4 leading-relaxed'>
                  {service.tagline}
                </p>
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

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
                      <Users className='w-3 h-3' />                      {service.customers} customers
=======
                    <span className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                      {service.customers} customers
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                    </span>
                  </div>
                </div>

                {/* Key Features */}
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
                        <CheckCircle className='w-3 h-3 text-green-400' />                        {feature}
=======
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                  <div className="space-y-2">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-white/70">
                        <CheckCircle className="w-3 h-3 text-green-400" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                        {feature}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
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
                        <TrendingUp className='w-3 h-3 text-blue-400' />                        {benefit}
=======
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Key Benefits:</h4>
                  <div className="space-y-2">
                    {service.benefits.slice(0, 2).map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-white/70">
                        <TrendingUp className="w-3 h-3 text-blue-400" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                        {benefit}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                      </div>
                    ))}
                  </div>
                </div>

                {/* ROI and Market Info */}
                <div className='mb-6 p-4 bg-white/5 rounded-lg'>
                  <div className='text-xs text-white/60 mb-2'>
                    ROI & Market Position
                  </div>
                  <div className='text-xs text-white/80 leading-relaxed'>
                    {service.roi}
                  </div>
                  <div className='mt-2 text-xs text-white/60'>                    Market: {service.marketSize} • Growth: {service.growthRate}
                <div className="mb-6 p-4 bg-white/5 rounded-lg">
                  <div className="text-xs text-white/60 mb-2">ROI & Market Position</div>
                  <div className="text-xs text-white/80 leading-relaxed">{service.roi}</div>
                  <div className="mt-2 text-xs text-white/60">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
                    Market: {service.marketSize} • Growth: {service.growthRate}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  </div>
                </div>

                {/* Action Buttons */}
                <div className='flex gap-3'>
                  <button
                    onClick={() =>
                      (window.location.href = `mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.name}`)
                    }
                    className='flex-1 px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105'                  >
                    Get Started
                  </button>
                  <button
                    onClick={() =>
                      (window.location.href = `mailto:kleber@ziontechgroup.com?subject=Demo request for ${service.name}`)
                    }
                    className='px-4 py-3 border border-white/20 hover:border-white/40 rounded-xl font-semibold text-white transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10'                  >
=======
                <div className="flex gap-3">
                  <button
                    onClick={() => window.location.href = `mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.name}`}
                    className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
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
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  >
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                    Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className='text-center mt-16'>
          <div className='bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl p-8 border border-blue-500/20'>
            <h3 className='text-2xl font-bold text-white mb-4'>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              Ready to Transform Your Business?
            </h3>
            <p className='text-white/70 mb-6 max-w-2xl mx-auto'>
              Let's discuss how our cutting-edge technology solutions can
              accelerate your digital transformation journey.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <a
                href='mailto:kleber@ziontechgroup.com?subject=Consultation Request'
                className='px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl'              >
                Schedule Consultation
              </a>
              <a
                href='tel:+13024640950'
                className='px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10'              >
=======
                href="mailto:kleber@ziontechgroup.com?subject=Consultation Request"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
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
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              >
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedServicesShowcase;
=======
  )
};

export default EnhancedServicesShowcase;
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, Zap, Shield, Users, Globe, ArrowRight, CheckCircle, Star,
  Server, Cloud, Database, Network, Lock, Code, Rocket, Building,
  Search, Phone, Mail, Cpu, Monitor, Smartphone, Wifi, Bluetooth,
  Satellite, Atom, Leaf, Space, Handshake, Calendar, DollarSign,
  BarChart3, Target, Award, Clock, Heart, Truck, Sparkles, Crown,
  Lightbulb, Globe2, FileText, Image, Video, Palette, ShoppingCart,
  MessageSquare, Eye, Ear, Hand, Foot, Bone, Tooth, Pill, Bandage,
  Thermometer, Scale, Calculator, ChartBar, PieChart, LineChart,
  Activity, TrendingDown, Minus, Plus, Equal, Divide, Percent,
  Euro, Pound, Yen, CreditCard, Wallet, Banknote, Coins, PiggyBank,
  Safe, Vault, LockKeyhole, Key, Fingerprint, QrCode, Barcode,
  Scan, Camera, VideoOff, Mic, MicOff, Volume2, VolumeX, TrendingUp
} from 'lucide-react';

const pricingData2028 = {
  aiServices: [
    {
      name: 'Quantum Consciousness AI',
      price: '$25,999',
      period: '/month',
      category: 'AI & Consciousness',
      marketSize: '$1.2B',
      growthRate: '500%',
      roi: '800%',
      setupTime: '4-6 weeks',
      trialDays: 30,
      features: ['Quantum consciousness mapping', 'Ethical boundary testing', 'Real-time monitoring'],
      targetAudience: 'AI research institutions, Government agencies, Ethics committees'
    },
    {
      name: 'Quantum Financial Trading AI',
      price: '$35,999',
      period: '/month',
      category: 'AI & Finance',
      marketSize: '$15.8B',
      growthRate: '280%',
      roi: '600%',
      setupTime: '2-3 weeks',
      trialDays: 14,
      features: ['Quantum market analysis', 'Predictive trading', 'Risk management'],
      targetAudience: 'Hedge funds, Investment banks, Trading firms'
    },
    {
      name: 'Quantum Healthcare AI',
      price: '$28,999',
      period: '/month',
      category: 'AI & Healthcare',
      marketSize: '$8.9B',
      growthRate: '320%',
      roi: '450%',
      setupTime: '3-4 weeks',
      trialDays: 21,
      features: ['Medical diagnosis', 'Treatment optimization', 'Drug discovery'],
      targetAudience: 'Hospitals, Medical centers, Pharmaceutical companies'
    }
  ],
  microSAAS: [
    {
      name: 'AI Content Creator Pro',
      price: '$299',
      period: '/month',
      category: 'AI Content & Marketing',
      marketSize: '$4.2B',
      growthRate: '180%',
      roi: '300%',
      setupTime: '1-2 days',
      trialDays: 14,
      features: ['AI article generation', 'Content optimization', 'Multi-language support'],
      targetAudience: 'Content marketers, Digital agencies, Small businesses'
    },
    {
      name: 'AI Image Generator Plus',
      price: '$199',
      period: '/month',
      category: 'AI Design & Creative',
      marketSize: '$2.8B',
      growthRate: '250%',
      roi: '400%',
      setupTime: '1 day',
      trialDays: 7,
      features: ['High-resolution generation', 'Brand customization', 'Commercial rights'],
      targetAudience: 'Designers, Marketing agencies, E-commerce businesses'
    },
    {
      name: 'AI Code Generator Pro',
      price: '$499',
      period: '/month',
      category: 'AI Development & Coding',
      marketSize: '$6.8B',
      growthRate: '280%',
      roi: '500%',
      setupTime: '2-3 days',
      trialDays: 21,
      features: ['Multi-language support', 'Bug detection', 'Code optimization'],
      targetAudience: 'Software developers, Development teams, Tech companies'
    }
  ],
  itServices: [
    {
      name: 'Quantum Cloud Infrastructure',
      price: '$45,999',
      period: '/month',
      category: 'Cloud & Infrastructure',
      marketSize: '$18.5B',
      growthRate: '320%',
      roi: '700%',
      setupTime: '6-8 weeks',
      trialDays: 30,
      features: ['Quantum-ready nodes', 'Zero-latency networking', 'Auto-scaling'],
      targetAudience: 'Enterprises, Cloud providers, Data centers'
    },
    {
      name: 'AI-Powered Cybersecurity Suite',
      price: '$32,999',
      period: '/month',
      category: 'Cybersecurity',
      marketSize: '$15.2B',
      growthRate: '280%',
      roi: '500%',
      setupTime: '2-3 weeks',
      trialDays: 14,
      features: ['AI threat detection', 'Zero-trust architecture', 'Automated response'],
      targetAudience: 'Enterprises, Government agencies, Financial institutions'
    },
    {
      name: 'Quantum DevOps Automation',
      price: '$35,999',
      period: '/month',
      category: 'DevOps & Automation',
      marketSize: '$9.8B',
      growthRate: '300%',
      roi: '600%',
      setupTime: '4-5 weeks',
      trialDays: 21,
      features: ['AI-powered CI/CD', 'Automated testing', 'Performance monitoring'],
      targetAudience: 'Development teams, DevOps engineers, Technology companies'
    }
  ]
};

const ComprehensivePricingGuide2028: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  const categories = [
    { id: 'all', name: 'All Services', icon: Globe, color: 'from-zion-cyan to-zion-purple' },
    { id: 'ai', name: 'AI Services', icon: Brain, color: 'from-zion-blue to-zion-cyan' },
    { id: 'saas', name: 'Micro SAAS', icon: Zap, color: 'from-zion-purple to-zion-pink' },
    { id: 'it', name: 'IT Services', icon: Server, color: 'from-zion-green to-zion-emerald' }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'low', name: 'Under $500', range: 'Under $500' },
    { id: 'medium', name: '$500 - $10K', range: '$500 - $10K' },
    { id: 'high', name: 'Over $10K', range: 'Over $10K' }
  ];

  const getAllServices = () => {
    return [
      ...pricingData2028.aiServices.map(service => ({ ...service, type: 'AI Services' })),
      ...pricingData2028.microSAAS.map(service => ({ ...service, type: 'Micro SAAS' })),
      ...pricingData2028.itServices.map(service => ({ ...service, type: 'IT Services' }))
    ];
  };

  const filteredServices = getAllServices().filter(service => {
    const matchesCategory = selectedCategory === 'all' || 
      service.type.toLowerCase().includes(selectedCategory.replace('-', ' '));
    
    const price = parseInt(service.price.replace(/[^0-9]/g, ''));
    let matchesPrice = true;
    if (priceRange === 'low') matchesPrice = price < 500;
    else if (priceRange === 'medium') matchesPrice = price >= 500 && price <= 10000;
    else if (priceRange === 'high') matchesPrice = price > 10000;
    
    return matchesCategory && matchesPrice;
  });

  const calculateROI = (roi: string) => {
    return parseInt(roi.replace('%', ''));
  };

  const sortedServices = filteredServices.sort((a, b) => calculateROI(b.roi) - calculateROI(a.roi));

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/10 via-zion-purple/10 to-zion-blue/10"></div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-gradient"
          >
            Comprehensive Pricing Guide 2028
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto"
          >
            Complete pricing analysis, ROI calculations, and market positioning for all our innovative services
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <div className="bg-zion-cyan/20 backdrop-blur-sm border border-zion-cyan/30 rounded-full px-6 py-3 text-zion-cyan font-semibold">
              💰 Transparent Pricing
            </div>
            <div className="bg-zion-purple/20 backdrop-blur-sm border border-zion-purple/30 rounded-full px-6 py-3 text-zion-purple font-semibold">
              📊 ROI Analysis
            </div>
            <div className="bg-zion-blue/20 backdrop-blur-sm border border-zion-blue/30 rounded-full px-6 py-3 text-zion-blue font-semibold">
              🎯 Market Positioning
            </div>
          </motion.div>
        </div>
      </section>

      {/* Market Overview */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-center mb-12 text-gradient"
          >
            Market Overview & Growth Potential
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Total Market Size</h3>
              <p className="text-4xl font-bold text-zion-cyan mb-2">$89.2B</p>
              <p className="text-zion-slate-light">Combined market value across all service categories</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-zion-purple to-zion-pink rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Average Growth Rate</h3>
              <p className="text-4xl font-bold text-zion-purple mb-2">320%</p>
              <p className="text-zion-slate-light">Annual growth rate across all service categories</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-zion-green to-zion-emerald rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Average ROI</h3>
              <p className="text-4xl font-bold text-zion-green mb-2">550%</p>
              <p className="text-zion-slate-light">Average return on investment for customers</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 bg-zion-slate-dark/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg'
                      : 'bg-zion-slate/50 text-zion-slate-light hover:bg-zion-slate/70'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  {category.name}
                </motion.button>
              ))}
            </div>

            {/* Price Range Filter */}
            <div className="flex flex-wrap gap-3">
              {priceRanges.map((range) => (
                <motion.button
                  key={range.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setPriceRange(range.id)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    priceRange === range.id
                      ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white shadow-lg'
                      : 'bg-zion-slate/50 text-zion-slate-light hover:bg-zion-slate/70'
                  }`}
                >
                  {range.name}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {sortedServices.map((service, index) => (
              <motion.div
                key={`${service.type}-${service.name}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-zion-slate/30 backdrop-blur-sm border border-zion-slate/40 rounded-2xl p-8 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20"
              >
                {/* Service Type Badge */}
                <div className="absolute -top-3 -left-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                  {service.type}
                </div>

                {/* Service Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors duration-300">
                    {service.name}
                  </h3>
                  <p className="text-zion-slate-light text-sm mb-4">
                    {service.category}
                  </p>
                </div>

                {/* Pricing */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-bold text-zion-cyan">{service.price}</span>
                    <span className="text-zion-slate-light">{service.period}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-zion-slate-light">
                    <span>Setup: {service.setupTime}</span>
                    <span>Trial: {service.trialDays} days</span>
                  </div>
                </div>

                {/* Market Info */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-lg font-bold text-zion-cyan">{service.marketSize}</div>
                    <div className="text-xs text-zion-slate-light">Market Size</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-zion-purple">{service.growthRate}</div>
                    <div className="text-xs text-zion-slate-light">Growth Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-zion-green">{service.roi}</div>
                    <div className="text-xs text-zion-slate-light">ROI</div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-3">Key Features</h4>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-zion-cyan" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Target Audience */}
                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-3">Target Audience</h4>
                  <p className="text-sm text-zion-slate-light">{service.targetAudience}</p>
                </div>

                {/* CTA */}
                <div className="text-center">
                  <button className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white py-3 px-6 rounded-lg font-semibold group-hover:shadow-lg group-hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center justify-center gap-2">
                    Get Started
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-center mb-12 text-gradient"
          >
            ROI Calculator
          </motion.h2>
          <div className="max-w-4xl mx-auto bg-zion-slate/30 backdrop-blur-sm border border-zion-slate/40 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Calculate Your ROI</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-zion-slate-light mb-2">Service Category</label>
                    <select className="w-full px-4 py-2 bg-zion-slate/50 border border-zion-slate/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan/50">
                      <option>AI Services</option>
                      <option>Micro SAAS</option>
                      <option>IT Services</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-zion-slate-light mb-2">Current Monthly Cost</label>
                    <input 
                      type="number" 
                      placeholder="$0"
                      className="w-full px-4 py-2 bg-zion-slate/50 border border-zion-slate/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan/50"
                    />
                  </div>
                  <div>
                    <label className="block text-zion-slate-light mb-2">Expected Efficiency Gain (%)</label>
                    <input 
                      type="number" 
                      placeholder="25"
                      className="w-full px-4 py-2 bg-zion-slate/50 border border-zion-slate/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan/50"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-zion-slate/20 rounded-xl p-6">
                <h4 className="text-xl font-bold text-white mb-4">ROI Projection</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-zion-slate-light">Monthly Savings:</span>
                    <span className="text-zion-cyan font-bold">$2,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zion-slate-light">Annual Savings:</span>
                    <span className="text-zion-cyan font-bold">$30,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zion-slate-light">ROI:</span>
                    <span className="text-zion-green font-bold">400%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zion-slate-light">Payback Period:</span>
                    <span className="text-zion-purple font-bold">3 months</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-gradient"
          >
            Ready to Maximize Your ROI?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto"
          >
            Contact our team to discuss how our innovative services can deliver exceptional returns on your investment
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-gradient-to-r from-zion-purple to-zion-cyan text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              kleber@ziontechgroup.com
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensivePricingGuide2028;
import { useCallback  } from "react";
import React, { useState } from "react"
import { motion   } from "framer-motion";
import {
  Brain, Zap, Shield, Users, Globe, ArrowRight, CheckCircle, Star;
  Server, Cloud, Database, Network, Lock, Code, Rocket, Building;
  Search, Phone, Mail, Cpu, Monitor, Smartphone, Wifi, Bluetooth;
  Satellite, Atom, Leaf, Space, Handshake, Calendar, DollarSign;
  BarChart3, Target, Award, Clock, Heart, Truck, Sparkles, Crown;
  Lightbulb, Globe2, FileText, Image, Video, Palette, ShoppingCart;
  MessageSquare, Eye, Ear, Hand, Foot, Bone, Tooth, Pill, Bandage;
  Thermometer, Scale, Calculator, ChartBar, PieChart, LineChart;
  Activity, TrendingDown, Minus, Plus, Equal, Divide, Percent;
  Euro, Pound, Yen, CreditCard, Wallet, Banknote, Coins, PiggyBank;
  Safe, Vault, LockKeyhole, Key, Fingerprint, QrCode, Barcode;
  Scan, Camera, VideoOff, Mic, MicOff, Volume2, VolumeX, TrendingUp;
}
}
 } from "lucide-react";
const const pricingData2028 = {
  = {
  aiServic,
  e: s: [
  {
  nam,
  e: 'Quantum Consciousness AI',pri,
  c: e: '$25,999'
      peri,
  o: d: '/month',catego,
  r: y: 'AI & Consciousness',marketSi,
  z: e: '$1.2B',growthRa,
  t: e: '500%',r,
  o: i: '800%',setupTi,
  m: e: '4-6 weeks',trialDa,
  y: s: 30,featur,
  e: s: ['Quantum consciousness mappingEthical boundary testing', 'Real-time monitoring']
      targetAudien,
  c: e: 'AI research institutions, Government agencies, Ethics committees'
},
  {
  na,
  m: e: 'Quantum Financial Trading AI',pri,
  c: e: '$35,999'
      peri,
  o: d: '/month',catego,
  r: y: 'AI & Finance',marketSi,
  z: e: '$15.8B',growthRa,
  t: e: '280%',r,
  o: i: '600%',setupTi,
  m: e: '2-3 weeks',trialDa,
  y: s: 14,featur,
  e: s: ['Quantum market analysisPredictive trading', 'Risk management']
      targetAudien,
  c: e: 'Hedge funds, Investment banks, Trading firms'
},
  {
  na,
  m: e: 'Quantum Healthcare AI',pri,
  c: e: '$28,999'
      peri,
  o: d: '/month',catego,
  r: y: 'AI & Healthcare',marketSi,
  z: e: '$8.9B',growthRa,
  t: e: '320%',r,
  o: i: '450%',setupTi,
  m: e: '3-4 weeks',trialDa,
  y: s: 21,featur,
  e: s: ['Medical diagnosisTreatment optimization', 'Drug discovery']
      targetAudien,
  c: e: 'Hospitals, Medical centers, Pharmaceutical companies'
},
  ]
  microSA,
  A: S: [
  {
  nam,
  e: 'AI Content Creator Pro',pri,
  c: e: '$299',peri,
  o: d: '/month',catego,
  r: y: 'AI Content & Marketing',marketSi,
  z: e: '$4.2B',growthRa,
  t: e: '180%',r,
  o: i: '300%',setupTi,
  m: e: '1-2 days',trialDa,
  y: s: 14,featur,
  e: s: ['AI article generationContent optimization', 'Multi-language support']
      targetAudien,
  c: e: 'Content marketers, Digital agencies, Small businesses'
},
  {
  na,
  m: e: 'AI Image Generator Plus',pri,
  c: e: '$199',peri,
  o: d: '/month',catego,
  r: y: 'AI Design & Creative',marketSi,
  z: e: '$2.8B',growthRa,
  t: e: '250%',r,
  o: i: '400%',setupTi,
  m: e: '1 day',trialDa,
  y: s: 7,featur,
  e: s: ['High-resolution generationBrand customization', 'Commercial rights']
      targetAudien,
  c: e: 'Designers, Marketing agencies, E-commerce businesses'
},
  {
  na,
  m: e: 'AI Code Generator Pro',pri,
  c: e: '$499',peri,
  o: d: '/month',catego,
  r: y: 'AI Development & Coding',marketSi,
  z: e: '$6.8B',growthRa,
  t: e: '280%',r,
  o: i: '500%',setupTi,
  m: e: '2-3 days',trialDa,
  y: s: 21,featur,
  e: s: ['Multi-language supportBug detection', 'Code optimization']
      targetAudien,
  c: e: 'Software developers, Development teams, Tech companies'
},
  ]
  itServic,
  e: s: [
  {
  nam,
  e: 'Quantum Cloud Infrastructure',pri,
  c: e: '$45,999'
      peri,
  o: d: '/month',catego,
  r: y: 'Cloud & Infrastructure',marketSi,
  z: e: '$18.5B',growthRa,
  t: e: '320%',r,
  o: i: '700%',setupTi,
  m: e: '6-8 weeks',trialDa,
  y: s: 30,featur,
  e: s: ['Quantum-ready nodesZero-latency networking', 'Auto-scaling']
      targetAudien,
  c: e: 'Enterprises, Cloud providers, Data centers'
},
  {
  na,
  m: e: 'AI-Powered Cybersecurity Suite',pri,
  c: e: '$32,999'
      peri,
  o: d: '/month',catego,
  r: y: 'Cybersecurity',marketSi,
  z: e: '$15.2B',growthRa,
  t: e: '280%',r,
  o: i: '500%',setupTi,
  m: e: '2-3 weeks',trialDa,
  y: s: 14,featur,
  e: s: ['AI threat detectionZero-trust architecture', 'Automated response']
      targetAudien,
  c: e: 'Enterprises, Government agencies, Financial institutions'
},
  {
  na,
  m: e: 'Quantum DevOps Automation',pri,
  c: e: '$35,999'
      peri,
  o: d: '/month',catego,
  r: y: 'DevOps & Automation',marketSi,
  z: e: '$9.8B',growthRa,
  t: e: '300%',r,
  o: i: '600%',setupTi,
  m: e: '4-5 weeks',trialDa,
  y: s: 21,featur,
  e: s: ['AI-powered CI/CDAutomated testing', 'Performance monitoring']
      targetAudien,
  c: e: 'Development teams, DevOps engineers, Technology companies'
},
  ],
  }

const,
  ComprehensivePricingGuide202: 8: React.FC = () () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [priceRange, setPriceRange] = useState('all')

  const categories = [
  { id: 'all', na,
  m: e: 'All Services', ic,
  o: n: Globe, col,
  o: r: 'from-zion-cyan to-zion-purple' },
  },
  { id: 'ai', na,
  m: e: 'AI Services', ic,
  o: n: Brain, col,
  o: r: 'from-zion-blue to-zion-cyan' },
  },
  { id: 'saas', na,
  m: e: 'Micro SAAS', ic,
  o: n: Zap, col,
  o: r: 'from-zion-purple to-zion-pink' },
  },
  { id: 'it', na,
  m: e: 'IT Services', ic,
  o: n: Server, col,
  o: r: 'from-zion-green to-zion-emerald' },
  },
  ]
  const priceRanges = [
  { id: 'all', na,
  m: e: 'All Prices', ran,
  g: e: 'All' },
  },
  { id: 'low', na,
  m: e: 'Under $500', ran,
  g: e: 'Under $500' },
  },
  { id: 'medium', na,
  m: e: '$500 - $10K', ran,
  g: e: '$500 - $10K' },
  },
  { id: 'high', na,
  m: e: 'Over $10K', ran,
  g: e: 'Over $10K' },
  },
  ]
  const getAllServices = () () => {
    return [
  ...pricingData2028.aiServices.map(service => ({ ...service, ty,
  p: e: 'AI Services' }))
      ...pricingData2028.microSAAS.map(service => ({ ...service, ty,
  p: e: 'Micro SAAS' }))
      ...pricingData2028.itServices.map(service => ({ ...service, ty,
  p: e: 'IT Services' }))
    ],
  }

  const filteredServices = getAllServices().filter(service () => {
  const matchesCategory = selectedCategory === 'all' ||
      service.type.toLowerCase().includes(selectedCategory.replace('- '))

    const price = parseInt(service.price.replace(/[^0-9]/g, ''))
    let matchesPrice = true;
    if (priceRange === 'low') matchesPrice = price < 500;
    else if (priceRange === 'medium') matchesPrice = price >= 500 && price <= 10000;
    else if (priceRange === 'high') matchesPrice = price > 10000;
    return matchesCategory && matchesPrice;
})

  const calculateROI = (r,
  o: i: string) () => {
  return parseInt(roi.replace('%', ''))
  }

  const sortedServices = filteredServices.sort((a, b) => calculateROI(b.roi) - calculateROI(a.roi))

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */},
  }
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/10 via-zion-purple/10 to-zion-blue/10"></div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.h1;
            initial={ opaci,
  t: y: 0, y: 30 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            className="className="text-5xl,
  m: d: text-7xl font-bold mb-6 text-gradient";"
          >
            Comprehensive Pricing Guide 2028;
          </motion.h1>
          <motion.p;
            initial={ opacit,
  y: 0, y: 30 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8, del,
  a: y: 0.2 },
  }
            className="className="text-xl,
  m: d:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto";"
          >
            Complete pricing analysis, ROI calculations, and market positioning for all our innovative services;
          </motion.p>
          <motion.div;
            initial={ opaci,
  t: y: 0, y: 30 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8, del,
  a: y: 0.4 },
  }
            className="className="flex flex-wrap justify-center gap-4";"
          >
            <div className="bg-zion-cyan/20 backdrop-blur-sm border border-zion-cyan/30 rounded-full px-6 py-3 text-zion-cyan font-semibold">
              💰 Transparent Pricing;
            </div>
            <div className="bg-zion-purple/20 backdrop-blur-sm border border-zion-purple/30 rounded-full px-6 py-3 text-zion-purple font-semibold">
              📊 ROI Analysis;
            </div>
            <div className="bg-zion-blue/20 backdrop-blur-sm border border-zion-blue/30 rounded-full px-6 py-3 text-zion-blue font-semibold">
              🎯 Market Positioning;
            </div>
          </motion.div>
        </div>
      </section>

      {/* Market Overview */},
  }
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="container mx-auto px-6">
          <motion.h2;
            initial={ opaci,
  t: y: 0, y: 30 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            className="className="text-4xl font-bold text-center mb-12 text-gradient";"
          >
            Market Overview & Growth Potential;
          </motion.h2>
          <div className="grid grid-cols-1,
  m: d: grid-cols-3 gap-8">
            <motion.div;
              initial={ opacit,
  y: 0, y: 30 },
  }
              whileInView={ opaci,
  t: y: 1, y: 0 },
  }
              transition={ durati,
  o: n: 0.8, del,
  a: y: 0.1 },
  }
              className="className="text-center";"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Total Market Size</h3>
              <p className="text-4xl font-bold text-zion-cyan mb-2">$89.2B</p>
              <p className="text-zion-slate-light">Combined market value across all service categories</p>
            </motion.div>
            <motion.div;
              initial={ opaci,
  t: y: 0, y: 30 },
  }
              whileInView={ opaci,
  t: y: 1, y: 0 },
  }
              transition={ durati,
  o: n: 0.8, del,
  a: y: 0.2 },
  }
              className="className="text-center";"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-zion-purple to-zion-pink rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Average Growth Rate</h3>
              <p className="text-4xl font-bold text-zion-purple mb-2">320%</p>
              <p className="text-zion-slate-light">Annual growth rate across all service categories</p>
            </motion.div>
            <motion.div;
              initial={ opaci,
  t: y: 0, y: 30 },
  }
              whileInView={ opaci,
  t: y: 1, y: 0 },
  }
              transition={ durati,
  o: n: 0.8, del,
  a: y: 0.3 },
  }
              className="className="text-center";"
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

      {/* Filters */},
  }
      <section className="py-12 bg-zion-slate-dark/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col,
  l: g:flex-row gap-6 items-center justify-between">
            {/* Category Filter */},
  }
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
  <motion.button;
                  key={category.id},
  }
                  whileHover={ sca,
  l: e: 1.05 },
  }
                  whileTap={ sca,
  l: e: 0.95 },
  }
                  onClick={onClick={() => setSelectedCategory(category.id)},
  },
  }
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
  selectedCategory === category.id;
                      ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg'
                      : 'bg-zion-slate/50 text-zion-slate-light,
  hove: r:bg-zion-slate/70'
}`}
                >
                  <category.icon className="w-4 h-4" />
                  {category.name},
  }
                </motion.button>
              ))}
            </div>

            {/* Price Range Filter */},
  }
            <div className="flex flex-wrap gap-3">
              {priceRanges.map((range) => (
  <motion.button;
                  key={range.id},
  }
                  whileHover={ sca,
  l: e: 1.05 },
  }
                  whileTap={ sca,
  l: e: 0.95 },
  }
                  onClick={onClick={() => setPriceRange(range.id)},
  },
  }
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
  priceRange === range.id;
                      ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white shadow-lg'
                      : 'bg-zion-slate/50 text-zion-slate-light,
  hove: r:bg-zion-slate/70'
}`}
                >
                  {range.name},
  }
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */},
  }
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1,
  l: g:grid-cols-2 gap-8">
            {sortedServices.map((service, index) => (
  <motion.div;
                key={`${service.type}-${service.name}`}
                initial={ opaci,
  t: y: 0, y: 30 },
  }
                animate={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
                className="className="group relative bg-zion-slate/30 backdrop-blur-sm border border-zion-slate/40 rounded-2xl p-8,
  hove: r: border-zion-cyan/50 transition-all duration-300,
  hove: r:shadow-2xl hove,
  r:shadow-zion-cyan/20";"
              >
                {/* Service Type Badge */},
  }
                <div className="absolute -top-3 -left-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                  {service.type},
  }
                </div>

                {/* Service Header */},
  }
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hov,
  e: r:text-zion-cyan transition-colors duration-300">
                    {service.name},
  }
                  </h3>
                  <p className="text-zion-slate-light text-sm mb-4">
                    {service.category},
  }
                  </p>
                </div>

                {/* Pricing */},
  }
                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-bold text-zion-cyan">{service.price}</span>
                    <span className="text-zion-slate-light">{service.period}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-zion-slate-light">
                    <span>Set,
  u: p: {service.setupTime}</span>
                    <span>Tri,
  a: l: {service.trialDays} days</span>
                  </div>
                </div>

                {/* Market Info */},
  }
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

                {/* Features */},
  }
                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-3">Key Features</h4>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
  <div key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-zion-cyan" />
                        {feature},
  }
                      </div>
                    ))}
                  </div>
                </div>

                {/* Target Audience */},
  }
                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-3">Target Audience</h4>
                  <p className="text-sm text-zion-slate-light">{service.targetAudience}</p>
                </div>

                {/* CTA */},
  }
                <div className="text-center">
                  <button className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white py-3 px-6 rounded-lg font-semibold group-hov,
  e: r: shadow-lg group-hov,
  e: r:shadow-zion-cyan/25 transition-all duration-300 flex items-center justify-center gap-2">
                    Get Started;
                    <ArrowRight className="w-4 h-4 group-hove,
  r:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */},
  }
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="container mx-auto px-6">
          <motion.h2;
            initial={ opaci,
  t: y: 0, y: 30 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            className="className="text-4xl font-bold text-center mb-12 text-gradient";"
          >
            ROI Calculator;
          </motion.h2>
          <div className="max-w-4xl mx-auto bg-zion-slate/30 backdrop-blur-sm border border-zion-slate/40 rounded-2xl p-8">
            <div className="grid grid-cols-1,
  m: d: grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Calculate Your ROI</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-zion-slate-light mb-2">Service Category</label>
                    <select className="w-full px-4 py-2 bg-zion-slate/50 border border-zion-slate/30 rounded-lg text-white,
  focu: s:outline-none,
  focu: s:ring-2,
  focu: s:ring-zion-cyan/50">
                      <option>AI Services</option>
                      <option>Micro SAAS</option>
                      <option>IT Services</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-zion-slate-light mb-2">Current Monthly Cost</label>
                    <input;
                      type="number"
                      placeholder="$0"
                      className="className="w-full px-4 py-2 bg-zion-slate/50 border border-zion-slate/30 rounded-lg text-white,
  focu: s:outline-none,
  focu: s:ring-2,
  focu: s:ring-zion-cyan/50";"
                    />
                  </div>
                  <div>
                    <label className="block text-zion-slate-light mb-2">Expected Efficiency Gain (%)</label>
                    <input;
                      type="number"
                      placeholder="25"
                      className="className="w-full px-4 py-2 bg-zion-slate/50 border border-zion-slate/30 rounded-lg text-white,
  focu: s:outline-none,
  focu: s:ring-2,
  focu: s:ring-zion-cyan/50";"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-zion-slate/20 rounded-xl p-6">
                <h4 className="text-xl font-bold text-white mb-4">ROI Projection</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-zion-slate-light">Monthly Saving,
  s:</span>
                    <span className="text-zion-cyan font-bold">$2,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zion-slate-light">Annual,
  Saving: s:</span>
                    <span className="text-zion-cyan font-bold">$30,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zion-slate-light">R,
  O: I: </span>
                    <span className="text-zion-green font-bold">400%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zion-slate-light">Payback Perio,
  d:</span>
                    <span className="text-zion-purple font-bold">3 months</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */},
  }
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.h2;
            initial={ opaci,
  t: y: 0, y: 30 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            className="className="text-4xl,
  m: d: text-5xl font-bold mb-6 text-gradient";"
          >
            Ready to Maximize Your ROI?
          </motion.h2>
          <motion.p;
            initial={ opacit,
  y: 0, y: 30 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8, del,
  a: y: 0.2 },
  }
            className="className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto";"
          >
            Contact our team to discuss how our innovative services can deliver exceptional returns on your investment;
          </motion.p>
          <motion.div;
            initial={ opaci,
  t: y: 0, y: 30 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8, del,
  a: y: 0.4 },
  }
            className="className="flex flex-col,
  s: m: flex-row gap-4 justify-center";"
          >
            <a;
              href="t,
  e: l:+13024640950"
              className="className="bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-8 py-4 rounded-lg font-semibold text-lg,
  hove: r:shadow-lg,
  hove: r:shadow-zion-cyan/25 transition-all duration-300 flex items-center justify-center gap-2";"
            >
              <Phone className="w-5 h-5" />
              +1 302 464 0950;
            </a>
            <a;
              href="mail,
  t: o:kleber@ziontechgroup.com"
              className="className="bg-gradient-to-r from-zion-purple to-zion-cyan text-white px-8 py-4 rounded-lg font-semibold text-lg,
  hove: r:shadow-lg hove,
  r:shadow-zion-cyan/25 transition-all duration-300 flex items-center justify-center gap-2";"
            >
              <Mail className="w-5 h-5" />
              kleber@ziontechgroup.com;
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
export default ComprehensivePricingGuide2028;
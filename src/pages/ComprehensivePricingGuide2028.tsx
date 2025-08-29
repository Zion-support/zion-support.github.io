import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
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
  Scale,
  Truck,
  Target as TargetIcon,
  Building,
  Home,
  Lock,
  Wrench,
  FileText,
  Heart,
  Cloud,
  Cpu,
  Rocket
} from 'lucide-react';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2028 } from '../data/innovativeMicroSaasServices2028';
import { INNOVATIVE_IT_SERVICES_2028 } from '../data/innovativeITServices2028';
import { INNOVATIVE_AI_SERVICES_2028 } from '../data/innovativeAIServices2028';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function ComprehensivePricingGuide2028() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedService, setSelectedService] = useState(null);
  const [showComparison, setShowComparison] = useState(false);

  const allServices = [
    ...INNOVATIVE_MICRO_SAAS_SERVICES_2028.map(s => ({ ...s, type: 'Micro SaaS' })),
    ...INNOVATIVE_IT_SERVICES_2028.map(s => ({ ...s, type: 'IT Services' })),
    ...INNOVATIVE_AI_SERVICES_2028.map(s => ({ ...s, type: 'AI Services' }))
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Rocket, color: 'from-zion-blue to-zion-purple' },
    { id: 'Micro SaaS', name: 'Micro SaaS', icon: Cpu, color: 'from-zion-cyan to-zion-blue' },
    { id: 'IT Services', name: 'IT Services', icon: Server, color: 'from-zion-purple to-zion-cyan' },
    { id: 'AI Services', name: 'AI Services', icon: Brain, color: 'from-zion-blue to-zion-purple' }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? allServices 
    : allServices.filter(s => s.type === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Legal Tech': return Scale;
      case 'Supply Chain': return Truck;
      case 'Marketing Tech': return TargetIcon;
      case 'HR Tech': return Users;
      case 'Sustainability': return Globe;
      case 'Real Estate Tech': return Home;
      case 'Cybersecurity': return Shield;
      case 'Industrial IoT': return Wrench;
      case 'Cloud Computing': return Cloud;
      case 'Content Creation': return FileText;
      case 'Healthcare AI': return Heart;
      default: return Rocket;
    }
  };

  const getCategoryColor = (category: string) => {
    const colors = [
      'from-blue-600 to-cyan-600',
      'from-purple-600 to-pink-600',
      'from-green-600 to-emerald-600',
      'from-red-600 to-orange-600',
      'from-indigo-600 to-purple-600',
      'from-yellow-600 to-orange-600',
      'from-teal-600 to-blue-600',
      'from-pink-600 to-red-600'
    ];
    return colors[Math.abs(category.length) % colors.length];
  };

  const pricingTiers = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      price: 49,
      features: [
        'Basic features',
        'Email support',
        '1-5 users',
        'Standard integrations',
        'Community forum access',
        'Basic analytics'
      ],
      color: 'from-zion-cyan to-zion-blue',
      popular: false
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses and teams',
      price: 199,
      features: [
        'Advanced features',
        'Priority support',
        'Up to 25 users',
        'Advanced integrations',
        'API access',
        'Custom branding',
        'Analytics dashboard',
        'White-label options'
      ],
      color: 'from-zion-purple to-zion-cyan',
      popular: true
    },
    {
      name: 'Enterprise',
      description: 'For large organizations with complex needs',
      price: 599,
      features: [
        'Custom features',
        '24/7 dedicated support',
        'Unlimited users',
        'Custom integrations',
        'White-label options',
        'Advanced security',
        'SLA guarantees',
        'Dedicated account manager',
        'Custom development',
        'On-premise options'
      ],
      color: 'from-zion-blue to-zion-purple',
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <SEO 
        title="Comprehensive Pricing Guide 2028 - Zion Tech Group"
        description="Explore our comprehensive pricing guide for 2028 featuring revolutionary micro SAAS, IT infrastructure, and AI services with proven ROI and competitive market pricing."
        keywords="pricing guide 2028, micro SAAS pricing, IT services pricing, AI services pricing, ROI calculator"
        canonical="https://ziontechgroup.com/pricing-guide-2028"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark/80 to-zion-purple/80"></div>
        <div className="relative z-10 container mx-auto px-4 py-24 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Comprehensive Pricing Guide 2028
            <span className="block text-3xl md:text-4xl text-zion-cyan mt-2">
              Revolutionary Technology Solutions
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-zion-slate-light max-w-4xl mx-auto mb-8"
          >
            Discover transparent pricing for our cutting-edge micro SAAS, IT infrastructure, and AI services. 
            Each solution includes detailed ROI analysis, market comparisons, and flexible pricing options.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button 
              size="lg"
              className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              onClick={() => document.getElementById('pricing-section')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Pricing
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              onClick={() => setShowComparison(true)}
            >
              Compare Services
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section id="pricing-section" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Flexible Pricing Tiers</h2>
            <p className="text-zion-slate-light max-w-3xl mx-auto">
              Choose the perfect plan for your business needs with our scalable pricing structure
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border-2 transition-all duration-300 hover:scale-105 ${
                  tier.popular 
                    ? 'border-zion-cyan shadow-2xl shadow-zion-cyan/20' 
                    : 'border-white/20 hover:border-zion-cyan/50'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-zion-cyan text-white px-4 py-2 rounded-full">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-zion-slate-light mb-6">{tier.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-zion-cyan">${tier.price}</span>
                    <span className="text-zion-slate-light">/month</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-zion-slate-light">
                      <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${
                    tier.popular 
                      ? 'bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan-light hover:to-zion-blue-light' 
                      : 'bg-white/20 hover:bg-white/30 text-white'
                  }`}
                >
                  Get Started
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Service Categories</h2>
            <p className="text-zion-slate-light max-w-2xl mx-auto">
              Filter our innovative services by category to find the perfect solution for your business needs
            </p>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg scale-105'
                    : 'bg-white/10 text-zion-slate-light hover:bg-white/20 hover:text-white'
                }`}
              >
                <category.icon className="w-5 h-5" />
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Pricing Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              {selectedCategory === 'all' ? 'All Services Pricing' : selectedCategory + ' Pricing'}
            </h2>
            <p className="text-zion-slate-light max-w-3xl mx-auto">
              Detailed pricing information for each service including ROI analysis and market comparisons
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 hover:scale-105 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${getCategoryColor(service.category)}`}>
                    {React.createElement(getCategoryIcon(service.category), { className: "w-6 h-6 text-white" })}
                  </div>
                  <Badge variant="secondary" className="bg-zion-cyan/20 text-zion-cyan border-zion-cyan/30">
                    {service.type}
                  </Badge>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                  {service.name}
                </h3>
                
                <p className="text-zion-slate-light text-sm mb-4 line-clamp-2">
                  {service.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/5 rounded-lg p-3">
                    <div className="text-zion-slate-light text-xs mb-1">Our Price</div>
                    {service.price && (
                      <div className="text-zion-cyan font-bold text-lg">${service.price.toLocaleString()}</div>
                    )}
                    {service.hourlyRate && (
                      <div className="text-zion-cyan font-bold text-lg">${service.hourlyRate}/hr</div>
                    )}
                    {service.projectRate && (
                      <div className="text-zion-cyan font-bold text-lg">${service.projectRate.toLocaleString()}</div>
                    )}
                  </div>
                  
                  <div className="bg-white/5 rounded-lg p-3">
                    <div className="text-zion-slate-light text-xs mb-1">Market Price</div>
                    <div className="text-white font-medium text-lg">{service.marketPrice}</div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-zion-slate-light text-sm">ROI:</span>
                    <span className="text-green-400 font-medium">{service.roi}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-zion-slate-light text-sm">Setup Time:</span>
                    <span className="text-white font-medium">{service.setupTime}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-zion-slate-light text-sm">Innovation Level:</span>
                    <span className="text-zion-cyan font-medium">{service.innovationLevel}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.slice(0, 3).map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs border-zion-cyan/30 text-zion-cyan">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button 
                  className="w-full bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan-light hover:to-zion-blue-light text-white"
                  onClick={() => setSelectedService(service)}
                >
                  View Full Details
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-zion-blue-dark border border-zion-cyan/30 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${getCategoryColor(selectedService.category)}`}>
                    {React.createElement(getCategoryIcon(selectedService.category), { className: "w-6 h-6 text-white" })}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">{selectedService.name}</h2>
                    <p className="text-zion-slate-light">{selectedService.category}</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-zion-slate-light hover:text-white"
                  onClick={() => setSelectedService(null)}
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Description</h3>
                  <p className="text-zion-slate-light mb-6">{selectedService.description}</p>

                  <h3 className="text-lg font-semibold text-white mb-3">Features</h3>
                  <ul className="space-y-2 mb-6">
                    {selectedService.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-lg font-semibold text-white mb-3">Benefits</h3>
                  <ul className="space-y-2 mb-6">
                    {selectedService.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center gap-2 text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="bg-white/5 rounded-lg p-4 mb-6">
                    <h3 className="text-lg font-semibold text-white mb-3">Pricing & ROI</h3>
                    <div className="space-y-3">
                      {selectedService.price && (
                        <div className="flex justify-between">
                          <span className="text-zion-slate-light">Monthly Price:</span>
                          <span className="text-zion-cyan font-bold">${selectedService.price.toLocaleString()}</span>
                        </div>
                      )}
                      {selectedService.hourlyRate && (
                        <div className="flex justify-between">
                          <span className="text-zion-slate-light">Hourly Rate:</span>
                          <span className="text-zion-cyan font-bold">${selectedService.hourlyRate}/hr</span>
                        </div>
                      )}
                      {selectedService.projectRate && (
                        <div className="flex justify-between">
                          <span className="text-zion-slate-light">Project Rate:</span>
                          <span className="text-zion-cyan font-bold">${selectedService.projectRate.toLocaleString()}</span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span className="text-zion-slate-light">Market Price:</span>
                        <span className="text-white font-medium">{selectedService.marketPrice}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zion-slate-light">ROI:</span>
                        <span className="text-green-400 font-medium">{selectedService.roi}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zion-slate-light">Setup Time:</span>
                        <span className="text-white font-medium">{selectedService.setupTime}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-lg p-4 mb-6">
                    <h3 className="text-lg font-semibold text-white mb-3">Market Information</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-zion-slate-light">Market Size:</span>
                        <span className="text-white">{selectedService.marketSize}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zion-slate-light">Growth Rate:</span>
                        <span className="text-green-400">{selectedService.growthRate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zion-slate-light">Innovation Level:</span>
                        <span className="text-zion-cyan">{selectedService.innovationLevel}</span>
                      </div>
                    </div>
                  </div>

                  {selectedService.competitors && (
                    <div className="bg-white/5 rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-white mb-3">Competitors</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedService.competitors.map((competitor, index) => (
                          <Badge key={index} variant="outline" className="border-zion-slate-light/30 text-zion-slate-light">
                            {competitor}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <Button className="flex-1 bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan-light hover:to-zion-blue-light">
                  Get Started
                </Button>
                <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white">
                  Request Demo
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* ROI Calculator Section */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">ROI Calculator</h2>
            <p className="text-zion-slate-light max-w-3xl mx-auto">
              Calculate the potential return on investment for our services and see how they can transform your business
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Input Your Business Metrics</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-zion-slate-light mb-2">Current Annual Revenue</label>
                    <input 
                      type="number" 
                      placeholder="$100,000"
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-zion-slate-light mb-2">Current Operational Costs</label>
                    <input 
                      type="number" 
                      placeholder="$80,000"
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-zion-slate-light mb-2">Service Investment</label>
                    <input 
                      type="number" 
                      placeholder="$5,000"
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Projected ROI Results</h3>
                <div className="space-y-4">
                  <div className="bg-zion-cyan/20 p-4 rounded-lg border border-zion-cyan/30">
                    <div className="text-zion-slate-light text-sm">Projected Revenue Increase</div>
                    <div className="text-2xl font-bold text-zion-cyan">25-40%</div>
                  </div>
                  <div className="bg-green-500/20 p-4 rounded-lg border border-green-500/30">
                    <div className="text-zion-slate-light text-sm">Cost Reduction</div>
                    <div className="text-2xl font-bold text-green-400">20-35%</div>
                  </div>
                  <div className="bg-purple-500/20 p-4 rounded-lg border border-purple-500/30">
                    <div className="text-zion-slate-light text-sm">ROI Timeline</div>
                    <div className="text-2xl font-bold text-purple-400">6-12 months</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <Button className="bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan-light hover:to-zion-blue-light text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Calculate Detailed ROI
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-zion-slate-light max-w-3xl mx-auto">
              Contact our team to discuss pricing, get a custom quote, or schedule a consultation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="bg-zion-cyan/20 p-6 rounded-xl border border-zion-cyan/30">
                <Phone className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                <p className="text-zion-slate-light mb-3">Speak directly with our experts</p>
                <a 
                  href="tel:+13024640950" 
                  className="text-zion-cyan hover:text-zion-cyan-light font-semibold text-lg"
                >
                  +1 302 464 0950
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-zion-cyan/20 p-6 rounded-xl border border-zion-cyan/30">
                <Mail className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                <p className="text-zion-slate-light mb-3">Send us a detailed message</p>
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="text-zion-cyan hover:text-zion-cyan-light font-semibold text-lg"
                >
                  kleber@ziontechgroup.com
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="bg-zion-cyan/20 p-6 rounded-xl border border-zion-cyan/30">
                <MapPin className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-zion-slate-light mb-3">Our headquarters location</p>
                <address className="text-zion-cyan font-semibold text-sm not-italic">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </address>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Button 
              size="lg"
              className="bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan-light hover:to-zion-blue-light text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              onClick={() => window.location.href = '/contact'}
            >
              Schedule a Consultation
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
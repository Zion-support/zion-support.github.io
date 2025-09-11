import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, Shield, Cloud, Server, BarChart3, Users, ShoppingCart, 
  MessageCircle, HelpCircle, DollarSign, Target, TrendingUp, 
  Atom, Network, Eye, PenTool, Heart, Building, Truck, 
  Lock, Smartphone, Mail, Video, Satellite, Leaf, Code,
  Zap, Star, Rocket, Globe, Cpu, ArrowRight, FileText,
  CheckCircle, Clock, Users as UsersIcon, Zap as ZapIcon,
  Award, TrendingUp as TrendingUpIcon, Globe as GlobeIcon,
  Calculator, PieChart, BarChart
} from 'lucide-react';
import { 
  revolutionaryMicroSaasServices2025, 
  advancedITInfrastructureServices2025, 
  revolutionaryAIServices2025 
} from '../data/comprehensiveServices2025';

export default function ComprehensivePricingGuide2025() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPricingModel, setSelectedPricingModel] = useState('all');

  const categories = [
    { id: 'all', name: 'All Services', icon: Star, color: 'from-purple-500 to-pink-500' },
    { id: 'micro-saas', name: 'Micro SAAS', icon: ShoppingCart, color: 'from-blue-500 to-cyan-500' },
    { id: 'it-infrastructure', name: 'IT Infrastructure', icon: Server, color: 'from-green-500 to-emerald-500' },
    { id: 'ai', name: 'AI Services', icon: Brain, color: 'from-orange-500 to-red-500' }
  ];

  const pricingModels = [
    { id: 'all', name: 'All Models', icon: Calculator },
    { id: 'monthly', name: 'Monthly', icon: Calendar },
    { id: 'hourly', name: 'Hourly', icon: Clock },
    { id: 'project', name: 'Project', icon: Target }
  ];

  const getServicesByCategory = () => {
    switch (selectedCategory) {
      case 'micro-saas':
        return revolutionaryMicroSaasServices2025;
      case 'it-infrastructure':
        return advancedITInfrastructureServices2025;
      case 'ai':
        return revolutionaryAIServices2025;
      default:
        return [
          ...revolutionaryMicroSaasServices2025,
          ...advancedITInfrastructureServices2025,
          ...revolutionaryAIServices2025
        ];
    }
  };

  const getFilteredServices = () => {
    let services = getServicesByCategory();
    
    if (selectedPricingModel !== 'all') {
      services = services.filter(service => {
        if (selectedPricingModel === 'monthly') return service.pricingModel === 'monthly';
        if (selectedPricingModel === 'hourly') return service.hourlyRate;
        if (selectedPricingModel === 'project') return service.projectRate;
        return true;
      });
    }
    
    return services;
  };

  const services = getFilteredServices();

  const calculateTotalInvestment = () => {
    return services.reduce((total, service) => {
      if (service.price) return total + service.price;
      if (service.hourlyRate) return total + (service.hourlyRate * 160); // 160 hours per month
      if (service.projectRate) return total + service.projectRate;
      return total;
    }, 0);
  };

  const calculateTotalROI = () => {
    return services.reduce((total, service) => {
      if (service.roi) {
        const roiPercentage = parseInt(service.roi.split('%')[0]);
        if (service.price) return total + (service.price * roiPercentage / 100);
        if (service.hourlyRate) return total + ((service.hourlyRate * 160) * roiPercentage / 100);
        if (service.projectRate) return total + (service.projectRate * roiPercentage / 100);
      }
      return total;
    }, 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
              2025 Pricing Guide
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Comprehensive pricing for all our revolutionary micro SAAS, IT infrastructure, and AI services
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r ${category.color} text-white font-semibold hover:scale-105 transition-transform duration-300 shadow-lg ${
                    selectedCategory === category.id ? 'ring-4 ring-white/30' : ''
                  }`}
                >
                  <category.icon className="w-5 h-5 mr-2" />
                  {category.name}
                </motion.button>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {pricingModels.map((model) => (
                <motion.button
                  key={model.id}
                  onClick={() => setSelectedPricingModel(model.id)}
                  className={`inline-flex items-center px-4 py-2 rounded-full border-2 border-cyan-400 text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 ${
                    selectedPricingModel === model.id ? 'bg-cyan-400 text-white' : ''
                  }`}
                >
                  <model.icon className="w-4 h-4 mr-2" />
                  {model.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Summary */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-zion-slate-dark/50 rounded-2xl p-6 border border-cyan-400/20 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mx-auto mb-4">
                <Calculator className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Total Investment</h3>
              <div className="text-3xl font-bold text-cyan-400">
                ${calculateTotalInvestment().toLocaleString()}
              </div>
              <p className="text-gray-400 text-sm">Monthly/Project Basis</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-zion-slate-dark/50 rounded-2xl p-6 border border-green-400/20 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-4">
                <TrendingUpIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Potential ROI</h3>
              <div className="text-3xl font-bold text-green-400">
                ${calculateTotalROI().toLocaleString()}
              </div>
              <p className="text-gray-400 text-sm">Based on Service ROIs</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-zion-slate-dark/50 rounded-2xl p-6 border border-purple-400/20 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4">
                <BarChart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Services Available</h3>
              <div className="text-3xl font-bold text-purple-400">
                {services.length}
              </div>
              <p className="text-gray-400 text-sm">Innovative Solutions</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Pricing Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Service Pricing Details
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive pricing for each innovative service, including features, benefits, and ROI projections
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate-dark/50 rounded-2xl p-6 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-cyan-400 bg-cyan-400/10 rounded-full">
                      {service.category}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.name}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {service.description}
                </p>

                <div className="space-y-3 mb-4">
                  {service.pricing && (
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-sm">Pricing Model:</span>
                      <span className="text-white font-semibold">{service.pricing}</span>
                    </div>
                  )}
                  
                  {service.price && (
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-sm">Monthly Price:</span>
                      <span className="text-cyan-400 font-bold text-lg">
                        ${service.price.toLocaleString()}
                      </span>
                    </div>
                  )}

                  {service.hourlyRate && (
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-sm">Hourly Rate:</span>
                      <span className="text-cyan-400 font-bold">
                        ${service.hourlyRate}/hr
                      </span>
                    </div>
                  )}

                  {service.projectRate && (
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-sm">Project Rate:</span>
                      <span className="text-cyan-400 font-bold">
                        ${service.projectRate.toLocaleString()}
                      </span>
                    </div>
                  )}

                  {service.marketPrice && (
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-sm">Market Price:</span>
                      <span className="text-yellow-400 text-sm">{service.marketPrice}</span>
                    </div>
                  )}

                  {service.roi && (
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-sm">ROI Potential:</span>
                      <span className="text-green-400 font-semibold">{service.roi}</span>
                    </div>
                  )}
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Innovation Level:</span>
                    <span className="text-cyan-400 font-semibold">{service.innovationLevel}</span>
                  </div>
                  
                  {service.setupTime && (
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Setup Time:</span>
                      <span className="text-white">{service.setupTime}</span>
                    </div>
                  )}

                  {service.freeTier && (
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Free Tier:</span>
                      <span className="text-green-400 font-semibold">Available</span>
                    </div>
                  )}

                  {service.trialPeriod && (
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Trial Period:</span>
                      <span className="text-white">{service.trialPeriod}</span>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-gray-700">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-400 text-sm">Key Benefits:</span>
                  </div>
                  <div className="space-y-1">
                    {service.benefits?.slice(0, 2).map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-gray-300 text-xs">
                        <CheckCircle className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Calculate Your ROI
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Use our ROI calculator to estimate the potential returns on your investment in Zion Tech Group services
            </p>
            
            <div className="bg-zion-slate-dark/50 rounded-2xl p-8 border border-cyan-400/20">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-white mb-4">Investment Summary</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Total Monthly Investment:</span>
                      <span className="text-cyan-400 font-bold">
                        ${calculateTotalInvestment().toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Annual Investment:</span>
                      <span className="text-cyan-400 font-bold">
                        ${(calculateTotalInvestment() * 12).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-white mb-4">ROI Projections</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Monthly ROI Potential:</span>
                      <span className="text-green-400 font-bold">
                        ${calculateTotalROI().toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Annual ROI Potential:</span>
                      <span className="text-green-400 font-bold">
                        ${(calculateTotalROI() * 12).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-gray-300 mb-4">
                  Ready to start your transformation journey?
                </p>
                <a
                  href="mailto:kleber@ziontechgroup.com?subject=ROI Consultation Request"
                  className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:scale-105 transition-transform duration-300"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get ROI Consultation
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact Zion Tech Group today to discuss your specific needs and get a customized pricing proposal
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <p className="text-cyan-400">+1 302 464 0950</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-cyan-400">kleber@ziontechgroup.com</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Website</h3>
                <p className="text-cyan-400">ziontechgroup.com</p>
              </div>
            </div>

            <div className="bg-zion-slate-dark/50 rounded-2xl p-8 border border-cyan-400/20">
              <h3 className="text-2xl font-bold text-white mb-4">Address</h3>
              <p className="text-gray-300 text-lg">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
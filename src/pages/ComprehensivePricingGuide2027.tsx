import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, 
  X, 
  Star, 
  TrendingUp, 
  Zap, 
  Shield, 
  Brain, 
  Cloud, 
  Users, 
  DollarSign,
  ArrowRight,
  ExternalLink,
  Phone,
  Mail,
  Globe,
  MapPin
} from 'lucide-react';
import { ULTIMATE_INNOVATIVE_SERVICES_2027 } from '../data/ultimateInnovativeServices2027';
import { REVOLUTIONARY_MICRO_SAAS_SERVICES_2027 } from '../data/revolutionaryMicroSaasServices2027';
import { ADVANCED_IT_SERVICES_2027 } from '../data/advancedITServices2027';

const ComprehensivePricingGuide2027: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('price');

  const allServices = [
    ...ULTIMATE_INNOVATIVE_SERVICES_2027,
    ...REVOLUTIONARY_MICRO_SAAS_SERVICES_2027,
    ...ADVANCED_IT_SERVICES_2027
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: allServices.length },
    { id: 'ai', name: 'AI Services', count: allServices.filter(s => s.category.includes('AI')).length },
    { id: 'micro-saas', name: 'Micro SAAS', count: allServices.filter(s => s.category.includes('Content') || s.category.includes('Financial') || s.category.includes('Customer') || s.category.includes('Project') || s.category.includes('HR')).length },
    { id: 'it', name: 'IT Services', count: allServices.filter(s => s.category.includes('Cloud') || s.category.includes('Cybersecurity') || s.category.includes('Data Center') || s.category.includes('Networking') || s.category.includes('Edge')).length },
    { id: 'quantum', name: 'Quantum & Emerging', count: allServices.filter(s => s.category.includes('Quantum') || s.category.includes('IoT')).length }
  ];

  const filteredServices = allServices.filter(service => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'ai') return service.category.includes('AI');
    if (selectedCategory === 'micro-saas') return service.category.includes('Content') || service.category.includes('Financial') || service.category.includes('Customer') || service.category.includes('Project') || service.category.includes('HR');
    if (selectedCategory === 'it') return service.category.includes('Cloud') || service.category.includes('Cybersecurity') || service.category.includes('Data Center') || service.category.includes('Networking') || service.category.includes('Edge');
    if (selectedCategory === 'quantum') return service.category.includes('Quantum') || service.category.includes('IoT');
    return true;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    if (sortBy === 'price') return a.price - b.price;
    if (sortBy === 'roi') return parseInt(b.roi.replace('%', '')) - parseInt(a.roi.replace('%', ''));
    if (sortBy === 'innovation') {
      const innovationOrder = { 'Revolutionary': 4, 'Breakthrough': 3, 'Innovative': 2, 'Advanced': 1 };
      return innovationOrder[b.innovationLevel as keyof typeof innovationOrder] - innovationOrder[a.innovationLevel as keyof typeof innovationOrder];
    }
    return 0;
  });

  const getInnovationColor = (level: string) => {
    const colorMap: { [key: string]: string } = {
      'Revolutionary': 'from-red-500 to-pink-500',
      'Breakthrough': 'from-purple-500 to-indigo-500',
      'Innovative': 'from-blue-500 to-cyan-500',
      'Advanced': 'from-green-500 to-emerald-500'
    };
    return colorMap[level] || 'from-gray-500 to-gray-600';
  };

  const getCategoryIcon = (category: string) => {
    if (category.includes('AI')) return <Brain className="w-5 h-5" />;
    if (category.includes('Content') || category.includes('Financial') || category.includes('Customer') || category.includes('Project') || category.includes('HR')) return <Users className="w-5 h-5" />;
    if (category.includes('Cloud') || category.includes('Cybersecurity') || category.includes('Data Center') || category.includes('Networking') || category.includes('Edge')) return <Cloud className="w-5 h-5" />;
    if (category.includes('Quantum') || category.includes('IoT')) return <Zap className="w-5 h-5" />;
    return <Star className="w-5 h-5" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="pt-32 pb-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/10 to-zion-purple/10" />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Comprehensive
            <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              {' '}Pricing Guide 2027
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8"
          >
            Discover our complete portfolio of innovative services with transparent pricing, detailed features, and ROI projections. 
            Choose the perfect solution to transform your business in 2027 and beyond.
          </motion.p>
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 border border-zion-cyan/20 rounded-2xl p-6 max-w-2xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="flex items-center justify-center space-x-2 text-zion-cyan">
                <Phone className="w-5 h-5" />
                <span className="text-sm">+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-zion-purple">
                <Mail className="w-5 h-5" />
                <span className="text-sm">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-zion-cyan">
                <Globe className="w-5 h-5" />
                <span className="text-sm">ziontechgroup.com</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter and Sorting */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-8">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white shadow-lg shadow-zion-cyan/25'
                      : 'bg-zion-slate-dark/50 text-gray-300 hover:bg-zion-slate-light/50 hover:text-white border border-zion-cyan/20'
                  }`}
                >
                  {category.name}
                  <span className="ml-2 px-2 py-1 bg-white/20 rounded-full text-xs">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Sorting */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-300 font-medium">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-zion-slate-dark/50 border border-zion-cyan/20 text-white rounded-lg px-4 py-2 focus:outline-none focus:border-zion-cyan/40"
              >
                <option value="price">Price (Low to High)</option>
                <option value="roi">ROI (High to Low)</option>
                <option value="innovation">Innovation Level</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Services Pricing Table */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-zion-slate-dark/80 via-zion-slate/60 to-zion-slate-light/80 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl overflow-hidden">
            {/* Table Header */}
            <div className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 p-6 border-b border-zion-cyan/20">
              <h2 className="text-2xl font-bold text-white mb-2">Service Pricing & Features</h2>
              <p className="text-gray-300">Compare our comprehensive service offerings and choose the perfect solution for your business needs.</p>
            </div>

            {/* Table Content */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-zion-slate-dark/50">
                  <tr>
                    <th className="px-6 py-4 text-left text-zion-cyan font-semibold">Service</th>
                    <th className="px-6 py-4 text-left text-zion-cyan font-semibold">Category</th>
                    <th className="px-6 py-4 text-left text-zion-cyan font-semibold">Price</th>
                    <th className="px-6 py-4 text-left text-zion-cyan font-semibold">ROI</th>
                    <th className="px-6 py-4 text-left text-zion-cyan font-semibold">Innovation</th>
                    <th className="px-6 py-4 text-left text-zion-cyan font-semibold">Features</th>
                    <th className="px-6 py-4 text-left text-zion-cyan font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zion-cyan/10">
                  {sortedServices.map((service, index) => (
                    <motion.tr
                      key={service.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="hover:bg-zion-slate-light/20 transition-colors duration-200"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-lg flex items-center justify-center">
                            {getCategoryIcon(service.category)}
                          </div>
                          <div>
                            <h3 className="text-white font-semibold text-sm">{service.title}</h3>
                            <p className="text-gray-400 text-xs line-clamp-2">{service.description}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-zion-slate-light/30 text-zion-cyan">
                          {service.category}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-center">
                          <div className="text-xl font-bold text-zion-cyan">${service.price.toLocaleString()}</div>
                          <div className="text-xs text-gray-400">per {service.pricingModel}</div>
                          <div className="text-xs text-gray-500">{service.marketPrice}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-center">
                          <div className="text-lg font-bold text-green-400">{service.roi}</div>
                          <div className="text-xs text-gray-400">Return on Investment</div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-center">
                          <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${getInnovationColor(service.innovationLevel)}`}>
                            {service.innovationLevel}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="space-y-1">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <div key={idx} className="flex items-center text-xs text-gray-300">
                              <Check className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                              <span className="line-clamp-1">{feature}</span>
                            </div>
                          ))}
                          {service.features.length > 3 && (
                            <div className="text-xs text-zion-cyan">
                              +{service.features.length - 3} more features
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-col space-y-2">
                          <a
                            href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.title}`}
                            className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white text-sm font-semibold rounded-lg hover:from-zion-purple hover:to-zion-cyan transition-all duration-300 transform hover:scale-105"
                          >
                            Get Quote
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </a>
                          <a
                            href="tel:+13024640950"
                            className="inline-flex items-center justify-center px-4 py-2 border border-zion-cyan text-zion-cyan text-sm font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
                          >
                            Call Now
                          </a>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers Comparison */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Service Tiers & <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Packages</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our flexible service tiers designed to meet businesses of all sizes and requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Tier */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-zion-slate-dark/80 via-zion-slate/60 to-zion-slate-light/80 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 hover:shadow-2xl hover:shadow-zion-cyan/20 transition-all duration-300"
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
                <div className="text-4xl font-bold text-zion-cyan mb-2">$49</div>
                <div className="text-gray-400">per month</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span>Basic Micro SAAS Services</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span>Email Support</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span>Standard Features</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span>Community Access</span>
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold py-3 px-6 rounded-xl hover:from-zion-purple hover:to-zion-cyan transition-all duration-300">
                Get Started
              </button>
            </motion.div>

            {/* Professional Tier */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-zion-cyan/10 to-zion-purple/10 border-2 border-zion-cyan/40 rounded-2xl p-8 relative transform scale-105"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                <div className="text-4xl font-bold text-zion-cyan mb-2">$499</div>
                <div className="text-gray-400">per month</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span>Advanced AI Services</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span>Priority Support</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span>Custom Integrations</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span>Advanced Analytics</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span>Dedicated Account Manager</span>
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold py-3 px-6 rounded-xl hover:from-zion-purple hover:to-zion-cyan transition-all duration-300">
                Get Started
              </button>
            </motion.div>

            {/* Enterprise Tier */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-br from-zion-slate-dark/80 via-zion-slate/60 to-zion-slate-light/80 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 hover:shadow-2xl hover:shadow-zion-cyan/20 transition-all duration-300"
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-zion-cyan mb-2">Custom</div>
                <div className="text-gray-400">tailored pricing</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span>Full Service Portfolio</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span>24/7 Premium Support</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span>Custom Development</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span>Onsite Implementation</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span>Dedicated Team</span>
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold py-3 px-6 rounded-xl hover:from-zion-purple hover:to-zion-cyan transition-all duration-300">
                Contact Sales
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 border border-zion-cyan/20 rounded-2xl p-12"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our team of experts is ready to help you choose the perfect services and create a customized solution that drives your success in 2027 and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Service Inquiry"
                className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold py-4 px-8 rounded-xl hover:from-zion-purple hover:to-zion-cyan transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </a>
              <a
                href="tel:+13024640950"
                className="border border-zion-cyan text-zion-cyan font-semibold py-4 px-8 rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensivePricingGuide2027;
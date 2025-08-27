import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ultimateInnovativeServices2026 } from '../data/2026-ultimate-innovative-services';
import { enterpriseITInfrastructureServices2026 } from '../data/2026-enterprise-it-infrastructure-services';
const ComprehensivePricing2026 = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [billingCycle, setBillingCycle] = useState('monthly');
    // Combine all services
    const allServices = [...ultimateInnovativeServices2026, ...enterpriseITInfrastructureServices2026];
    const categories = [
        'all',
        'AI & Business Solutions',
        'IT Infrastructure',
        'Cybersecurity',
        'Cloud & DevOps',
        'Specialized Industry'
    ];
    const getCategoryServices = (category) => {
        switch (category) {
            case 'AI & Business Solutions':
                return allServices.filter(service => ['Business Intelligence', 'Marketing Automation', 'Customer Service', 'Workflow Automation'].includes(service.category));
            case 'IT Infrastructure':
                return allServices.filter(service => ['Data Center Management', 'Storage Management', 'Virtualization', 'IT Asset Management'].includes(service.category));
            case 'Cybersecurity':
                return allServices.filter(service => ['Cybersecurity', 'Network Security'].includes(service.category));
            case 'Cloud & DevOps':
                return allServices.filter(service => ['Cloud Infrastructure', 'DevOps', 'Performance Monitoring'].includes(service.category));
            case 'Specialized Industry':
                return allServices.filter(service => ['Supply Chain Management', 'Financial Technology', 'Healthcare Technology', 'Legal Technology', 'Blockchain Technology', 'Internet of Things', 'Quantum Computing'].includes(service.category));
            default:
                return allServices;
        }
    };
    const filteredServices = getCategoryServices(selectedCategory);
    const getAnnualPrice = (monthlyPrice) => {
        const price = parseInt(monthlyPrice.replace(/[^0-9]/g, ''));
        const annualPrice = price * 12 * 0.8; // 20% discount for annual
        return `$${annualPrice.toLocaleString()}`;
    };
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };
    return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 className="text-4xl md:text-6xl font-bold mb-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            Comprehensive
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              {" "}Pricing 2026
            </span>
          </motion.h1>
          <motion.p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            Transparent pricing for all our innovative services. Choose the plan that fits your business needs 
            with flexible billing options and enterprise-grade support.
          </motion.p>
          {/* Billing Toggle */}
          <motion.div className="flex items-center justify-center gap-4 mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
            <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>Monthly</span>
            <button onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')} className={`relative w-16 h-8 bg-white/20 rounded-full p-1 transition-all duration-300 ${billingCycle === 'annual' ? 'bg-cyan-500' : ''}`}>
              <div className={`w-6 h-6 bg-white rounded-full transition-all duration-300 ${billingCycle === 'annual' ? 'translate-x-8' : ''}`}/>
            </button>
            <span className={`text-lg ${billingCycle === 'annual' ? 'text-white' : 'text-gray-400'}`}>
              Annual <span className="text-cyan-400 text-sm">(Save 20%)</span>
            </span>
          </motion.div>
          {/* Contact Information */}
          <motion.div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 mb-8 max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}>
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">Contact Zion Tech Group</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <strong>Mobile:</strong> +1 302 464 0950
              </div>
              <div>
                <strong>Email:</strong> kleber@ziontechgroup.com
              </div>
              <div>
                <strong>Address:</strong> 364 E Main St STE 1008 Middletown DE 19709
              </div>
              <div>
                <strong>Website:</strong> <a href="https://ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 underline">ziontechgroup.com</a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => (<button key={category} onClick={() => setSelectedCategory(category)} className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${selectedCategory === category
                ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'}`}>
                {category === 'all' ? 'All Services' : category}
              </button>))}
          </div>
        </div>
      </section>
      {/* Pricing Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants} initial="hidden" animate="visible">
            {filteredServices.map((service, index) => (<motion.div key={service.id} variants={itemVariants} className="group" whileHover={{ scale: 1.02, y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/25 h-full">
                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{service.icon}</div>
                    {service.popular && (<span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-2 py-1 rounded-full">
                        Popular
                      </span>)}
                  </div>
                  {/* Service Info */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 text-sm mb-3">{service.tagline}</p>
                  
                  {/* Pricing */}
                  <div className="mb-4">
                    <div className="text-3xl font-bold text-cyan-400">
                      {billingCycle === 'monthly' ? service.price : getAnnualPrice(service.price)}
                    </div>
                    <div className="text-gray-400">
                      {billingCycle === 'monthly' ? service.period : '/year'}
                    </div>
                    {billingCycle === 'annual' && (<div className="text-sm text-green-400 mt-1">
                        Save 20% with annual billing
                      </div>)}
                  </div>
                  {/* Category */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm text-gray-400">{service.category}</span>
                  </div>
                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="text-xs text-gray-300 space-y-1">
                      {service.features.slice(0, 4).map((feature, idx) => (<li key={idx} className="flex items-center gap-2">
                          <span className="text-cyan-400">✓</span>
                          {feature}
                        </li>))}
                    </ul>
                  </div>
                  {/* Market Info */}
                  <div className="mb-4 text-xs text-gray-400">
                    <div className="flex justify-between mb-1">
                      <span>Market Size:</span>
                      <span className="text-cyan-400">{service.marketSize}</span>
                    </div>
                    <div className="flex justify-between mb-1">
                      <span>Growth Rate:</span>
                      <span className="text-green-400">{service.growthRate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Rating:</span>
                      <span className="text-yellow-400">{service.rating}/5 ({service.reviews} reviews)</span>
                    </div>
                  </div>
                  {/* ROI */}
                  <div className="mb-4 p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                    <p className="text-xs text-green-400 font-semibold">ROI: {service.roi}</p>
                  </div>
                  {/* Trial Info */}
                  <div className="mb-4 text-center p-2 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                    <span className="text-xs text-blue-400">
                      {service.trialDays}-day free trial • Setup in {service.setupTime}
                    </span>
                  </div>
                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <a href={service.link} target="_blank" rel="noopener noreferrer" className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white text-sm font-semibold py-2 px-4 rounded-lg transition-all duration-300 text-center">
                      Learn More
                    </a>
                    <Link to="/contact" className="flex-1 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold py-2 px-4 rounded-lg border border-white/30 hover:border-cyan-400/50 transition-all duration-300 text-center">
                      Get Quote
                    </Link>
                  </div>
                </div>
              </motion.div>))}
          </motion.div>
          {/* No Results */}
          {filteredServices.length === 0 && (<motion.div className="text-center py-16" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-gray-300">Try selecting a different category or browse all services.</p>
            </motion.div>)}
        </div>
      </section>
      {/* Enterprise Plans */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Need custom solutions or enterprise-grade implementations? We offer tailored packages 
              with dedicated support, custom development, and white-label options.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="text-xl font-bold text-white mb-2">Custom Development</h3>
                <p className="text-gray-300 text-sm mb-4">Tailored solutions built specifically for your business requirements</p>
                <div className="text-2xl font-bold text-cyan-400 mb-2">Custom Pricing</div>
                <p className="text-xs text-gray-400">Based on scope and complexity</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold text-white mb-2">White Label</h3>
                <p className="text-gray-300 text-sm mb-4">Rebrand our solutions as your own with full customization</p>
                <div className="text-2xl font-bold text-cyan-400 mb-2">From $5,000</div>
                <p className="text-xs text-gray-400">Monthly + setup fees</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                <div className="text-4xl mb-4">💎</div>
                <h3 className="text-xl font-bold text-white mb-2">Premium Support</h3>
                <p className="text-gray-300 text-sm mb-4">24/7 dedicated support with dedicated account managers</p>
                <div className="text-2xl font-bold text-cyan-400 mb-2">From $2,000</div>
                <p className="text-xs text-gray-400">Monthly per service</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Get Started</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us today for a personalized consultation, demo, or custom quote. 
              Our team is ready to help you choose the perfect solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold text-lg py-4 px-8 rounded-xl shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 border border-cyan-500/30 hover:border-cyan-500/60">
                  <span className="text-xl">🚀</span>
                  Get Custom Quote
                  <span className="text-xl">→</span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a href="tel:+13024640950" className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md text-white font-semibold text-lg py-4 px-8 rounded-xl border border-white/30 hover:border-cyan-400/50 hover:bg-white/20 transition-all duration-300 shadow-lg">
                  <span className="text-xl">📞</span>
                  Call Now
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Footer Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Why Choose Our Pricing?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">💰</div>
              <h4 className="text-lg font-semibold text-white mb-2">Transparent Pricing</h4>
              <p className="text-gray-300 text-sm">No hidden fees, clear pricing structure, and flexible billing options.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h4 className="text-lg font-semibold text-white mb-2">Proven ROI</h4>
              <p className="text-gray-300 text-sm">All services deliver measurable business value with documented ROI.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💎</div>
              <h4 className="text-lg font-semibold text-white mb-2">Enterprise Support</h4>
              <p className="text-gray-300 text-sm">24/7 support, dedicated account managers, and custom solutions.</p>
            </div>
          </div>
        </div>
      </section>
    </div>);
};
export default ComprehensivePricing2026;

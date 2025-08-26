import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';
import { 
  innovativeMicroSaasSolutions2025 
} from '@/data/2025-innovative-micro-saas-solutions';
import { 
  cuttingEdgeAIServices2025 
} from '@/data/2025-cutting-edge-ai-services';

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
      duration: 0.5
    }
  }
};

export default function ComprehensivePricing2026() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [billingCycle, setBillingCycle] = useState('monthly');

  // Combine all services
  const allServices = [
    ...innovativeMicroSaasSolutions2025,
    ...cuttingEdgeAIServices2025
  ];

  // Filter services by category
  const filteredServices = selectedCategory === 'all' 
    ? allServices 
    : allServices.filter(service => service.category === selectedCategory);

  // Get unique categories
  const categories = ['all', ...new Set(allServices.map(service => service.category))];

  // Calculate pricing based on billing cycle
  const getPrice = (service: any) => {
    const basePrice = parseFloat(service.price.replace('$', ''));
    if (billingCycle === 'yearly') {
      return basePrice * 10; // 2 months free for yearly
    }
    return basePrice;
  };

  // Get billing cycle text
  const getBillingText = () => {
    return billingCycle === 'yearly' ? '/year (2 months free)' : '/month';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="Comprehensive Pricing 2026 - Zion Tech Group AI & Micro SAAS Services" 
        description="Explore our comprehensive pricing for cutting-edge AI services, micro SAAS solutions, and innovative technology platforms. Competitive pricing with enterprise-grade features."
        keywords="AI services pricing, micro SAAS pricing, technology services pricing, enterprise pricing, competitive pricing"
        canonical="https://ziontechgroup.com/comprehensive-pricing-2026"
      />

      {/* Hero Section */}
      <motion.section 
        className="relative py-20 overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            variants={itemVariants}
          >
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Comprehensive Pricing
            </span>
            <br />
            <span className="text-white">2026</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto"
            variants={itemVariants}
          >
            Transparent, competitive pricing for our complete suite of AI services, micro SAAS solutions, and innovative technology platforms
          </motion.p>
          
          {/* Billing Toggle */}
          <motion.div 
            className="flex items-center justify-center gap-4 mb-8"
            variants={itemVariants}
          >
            <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-blue-200'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
                billingCycle === 'yearly' ? 'bg-blue-600' : 'bg-gray-600'
              }`}
            >
              <div
                className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
                  billingCycle === 'yearly' ? 'translate-x-8' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-lg ${billingCycle === 'yearly' ? 'text-white' : 'text-blue-200'}`}>
              Yearly
              <span className="text-sm text-green-400 ml-2">(Save 20%)</span>
            </span>
          </motion.div>

          {/* Pricing Stats */}
          <motion.div 
            className="flex flex-wrap justify-center gap-6"
            variants={itemVariants}
          >
            <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
              <span className="text-white font-semibold">Starting at ${Math.min(...allServices.map(s => parseFloat(s.price.replace('$', ''))))}/month</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
              <span className="text-white font-semibold">{allServices.length} Services Available</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
              <span className="text-white font-semibold">Free Trials Available</span>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Information Banner */}
      <motion.section 
        className="py-8 bg-gradient-to-r from-blue-600 to-purple-600"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Need Custom Pricing?</h3>
            <div className="flex flex-wrap justify-center gap-6 text-lg">
              <div className="flex items-center gap-2">
                <span>📱</span>
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center gap-2">
                <span>✉️</span>
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span>📍</span>
                <span>364 E Main St STE 1008 Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Category Filter */}
      <motion.section 
        className="py-8 bg-white/5 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {category === 'all' ? 'All Categories' : category}
              </button>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Services Pricing Grid */}
      <motion.section 
        className="py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-400/25 h-full">
                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center text-2xl`}>
                      {service.icon}
                    </div>
                    {service.popular && (
                      <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-xs font-bold rounded-full">
                        POPULAR
                      </span>
                    )}
                  </div>

                  {/* Service Info */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                    {service.name}
                  </h3>
                  <p className="text-blue-100 text-sm mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Pricing */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-white">${getPrice(service)}</span>
                      <span className="text-blue-200">{getBillingText()}</span>
                    </div>
                    <p className="text-blue-100 text-sm">Free {service.trialDays}-day trial</p>
                    {billingCycle === 'yearly' && (
                      <p className="text-green-400 text-sm font-semibold">Save 20% with yearly billing</p>
                    )}
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="text-blue-100 text-sm flex items-center gap-2">
                          <span className="text-blue-400">✓</span>
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 4 && (
                        <li className="text-blue-200 text-sm">
                          +{service.features.length - 4} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Market Info */}
                  <div className="mb-6 p-3 bg-white/5 rounded-lg">
                    <div className="text-blue-200 text-xs mb-2">Market Position</div>
                    <p className="text-white text-sm">{service.marketPosition}</p>
                  </div>

                  {/* ROI */}
                  <div className="mb-6 p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                    <div className="text-green-400 text-xs mb-1 font-semibold">ROI</div>
                    <p className="text-green-300 text-sm">{service.roi}</p>
                  </div>

                  {/* CTA */}
                  <div className="flex gap-2">
                    <Link
                      to={service.link}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-lg font-semibold text-center hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                    >
                      Get Started
                    </Link>
                    <button className="px-4 py-3 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-all duration-200">
                      Demo
                    </button>
                  </div>

                  {/* Category Badge */}
                  <div className="mt-4 text-center">
                    <span className="inline-block px-3 py-1 bg-white/10 text-blue-200 text-xs rounded-full border border-white/20">
                      {service.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Enterprise Pricing Section */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Enterprise Solutions
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Custom enterprise packages with dedicated support, white-label options, and on-premise deployment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Enterprise */}
            <motion.div
              className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Starter Enterprise</h3>
                <div className="text-4xl font-bold text-blue-400 mb-2">$2,999</div>
                <div className="text-blue-200">/month</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="text-blue-100 flex items-center gap-2">
                  <span className="text-blue-400">✓</span>
                  Up to 100 users
                </li>
                <li className="text-blue-100 flex items-center gap-2">
                  <span className="text-blue-400">✓</span>
                  Priority support
                </li>
                <li className="text-blue-100 flex items-center gap-2">
                  <span className="text-blue-400">✓</span>
                  Custom integrations
                </li>
                <li className="text-blue-100 flex items-center gap-2">
                  <span className="text-blue-400">✓</span>
                  Dedicated account manager
                </li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-all duration-200">
                Contact Sales
              </button>
            </motion.div>

            {/* Professional Enterprise */}
            <motion.div
              className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-8 rounded-2xl border border-blue-400/30 relative"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-black px-4 py-2 rounded-full text-sm font-bold">
                  MOST POPULAR
                </span>
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Professional Enterprise</h3>
                <div className="text-4xl font-bold text-purple-400 mb-2">$5,999</div>
                <div className="text-blue-200">/month</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="text-blue-100 flex items-center gap-2">
                  <span className="text-blue-400">✓</span>
                  Up to 500 users
                </li>
                <li className="text-blue-100 flex items-center gap-2">
                  <span className="text-blue-400">✓</span>
                  24/7 support
                </li>
                <li className="text-blue-100 flex items-center gap-2">
                  <span className="text-blue-400">✓</span>
                  White-label options
                </li>
                <li className="text-blue-100 flex items-center gap-2">
                  <span className="text-blue-400">✓</span>
                  Custom development
                </li>
                <li className="text-blue-100 flex items-center gap-2">
                  <span className="text-blue-400">✓</span>
                  SLA guarantees
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg font-semibold transition-all duration-200">
                Contact Sales
              </button>
            </motion.div>

            {/* Ultimate Enterprise */}
            <motion.div
              className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Ultimate Enterprise</h3>
                <div className="text-4xl font-bold text-green-400 mb-2">$12,999</div>
                <div className="text-blue-200">/month</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="text-blue-100 flex items-center gap-2">
                  <span className="text-blue-400">✓</span>
                  Unlimited users
                </li>
                <li className="text-blue-100 flex items-center gap-2">
                  <span className="text-blue-400">✓</span>
                  On-premise deployment
                </li>
                <li className="text-blue-100 flex items-center gap-2">
                  <span className="text-blue-400">✓</span>
                  Custom AI training
                </li>
                <li className="text-blue-100 flex items-center gap-2">
                  <span className="text-blue-400">✓</span>
                  Dedicated infrastructure
                </li>
                <li className="text-blue-100 flex items-center gap-2">
                  <span className="text-blue-400">✓</span>
                  Executive consulting
                </li>
              </ul>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-all duration-200">
                Contact Sales
              </button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Contact CTA Section */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact our team to discuss pricing, get custom quotes, and start your transformation journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center justify-center gap-2"
            >
              📱 Call Now: +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center justify-center gap-2"
            >
              ✉️ Email Us
            </a>
          </div>
          <div className="mt-8 text-blue-200">
            <p>📍 364 E Main St STE 1008 Middletown DE 19709</p>
            <p>🌐 <a href="https://ziontechgroup.com" className="underline hover:text-white">https://ziontechgroup.com</a></p>
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section 
        className="py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-3">What's included in the free trial?</h3>
              <p className="text-blue-100">All services include a free trial period with full access to features. No credit card required to start your trial.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-3">Can I cancel my subscription anytime?</h3>
              <p className="text-blue-100">Yes, you can cancel your subscription at any time. No long-term contracts or cancellation fees.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-3">Do you offer volume discounts?</h3>
              <p className="text-blue-100">Yes, we offer volume discounts for enterprise customers. Contact our sales team for custom pricing.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-3">What payment methods do you accept?</h3>
              <p className="text-blue-100">We accept all major credit cards, PayPal, and wire transfers for enterprise customers.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-3">Is there a setup fee?</h3>
              <p className="text-blue-100">No setup fees for standard plans. Enterprise customers may have custom setup requirements.</p>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
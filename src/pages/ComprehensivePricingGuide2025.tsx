import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Check, 
  X, 
  Star, 
  Zap, 
  Brain, 
  Rocket, 
  Shield, 
  Cloud, 
  Cpu, 
  Lock, 
  Heart, 
  Globe,
  DollarSign,
  TrendingUp,
  Users,
  Target,
  ArrowRight,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '../data/innovativeMicroSaasServices2025';

const ComprehensivePricingGuide2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const allServices = INNOVATIVE_MICRO_SAAS_SERVICES_2025;
  
  const categories = [
    { id: 'all', name: 'All Services', icon: Zap, color: 'from-cyan-400 to-blue-500' },
    { id: 'AI & Analytics', name: 'AI & Analytics', icon: Brain, color: 'from-purple-400 to-cyan-400' },
    { id: 'AI & Content', name: 'AI & Content', icon: Brain, color: 'from-orange-400 to-red-400' },
    { id: 'AI & Healthcare', name: 'AI & Healthcare', icon: Heart, color: 'from-red-400 to-pink-400' },
    { id: 'AI & Automation', name: 'AI & Automation', icon: Zap, color: 'from-yellow-400 to-orange-400' },
    { id: 'Quantum Computing', name: 'Quantum Computing', icon: Rocket, color: 'from-purple-400 to-pink-400' },
    { id: 'Blockchain', name: 'Blockchain', icon: Lock, color: 'from-green-400 to-emerald-400' },
    { id: 'Edge Computing', name: 'Edge Computing', icon: Cpu, color: 'from-blue-400 to-cyan-400' },
    { id: 'Cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-green-400 to-blue-400' },
    { id: 'Space Tech', name: 'Space Tech', icon: Rocket, color: 'from-indigo-400 to-purple-400' }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? allServices 
    : allServices.filter(service => service.category === selectedCategory);

  const getAnnualPrice = (monthlyPrice: number) => {
    return Math.round(monthlyPrice * 12 * 0.8); // 20% discount for annual
  };

  const pricingTiers = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      price: { monthly: 999, annual: getAnnualPrice(999) },
      features: [
        'Basic AI integration',
        'Standard support',
        'Core features',
        'Email support',
        'Basic analytics'
      ],
      color: 'from-green-400 to-emerald-500'
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses and teams',
      price: { monthly: 2999, annual: getAnnualPrice(2999) },
      features: [
        'Advanced AI capabilities',
        'Priority support',
        'Advanced features',
        'Phone & email support',
        'Advanced analytics',
        'Custom integrations',
        'Team collaboration'
      ],
      color: 'from-blue-400 to-cyan-500',
      popular: true
    },
    {
      name: 'Enterprise',
      description: 'For large organizations with complex needs',
      price: { monthly: 7999, annual: getAnnualPrice(7999) },
      features: [
        'Full AI suite',
        '24/7 dedicated support',
        'All features',
        'Dedicated account manager',
        'Custom development',
        'Advanced security',
        'SLA guarantees',
        'On-premise options'
      ],
      color: 'from-purple-400 to-pink-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Comprehensive Pricing Guide 2025 - Zion Tech Group"
        description="Explore our transparent pricing for AI-powered solutions, quantum computing platforms, blockchain services, and innovative micro SAAS products. Find the perfect plan for your business needs."
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="relative container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              Comprehensive Pricing Guide 2025
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transparent pricing for our revolutionary AI, quantum computing, blockchain, and micro SAAS services. Choose the perfect plan to transform your business.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>Monthly</span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
                className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors ${
                  billingCycle === 'annual' ? 'bg-cyan-400' : 'bg-slate-600'
                }`}
              >
                <span
                  className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                    billingCycle === 'annual' ? 'translate-x-9' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-lg ${billingCycle === 'annual' ? 'text-white' : 'text-gray-400'}`}>
                Annual <span className="text-green-400 text-sm">(Save 20%)</span>
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 transform hover:scale-105"
              >
                Get Custom Quote
              </Link>
              <Link
                to="/contact"
                className="bg-slate-700/50 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-600/50 transition-all duration-200 border border-slate-600"
              >
                Contact Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-slate-800/50 border rounded-2xl p-8 ${
                  tier.popular 
                    ? 'border-cyan-400/50 shadow-2xl shadow-cyan-400/20' 
                    : 'border-slate-700/50'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-400 mb-6">{tier.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">
                      ${billingCycle === 'monthly' ? tier.price.monthly : tier.price.annual}
                    </span>
                    <span className="text-gray-400 ml-2">
                      /{billingCycle === 'monthly' ? 'month' : 'year'}
                    </span>
                  </div>
                  {billingCycle === 'annual' && (
                    <p className="text-green-400 text-sm">Save ${tier.price.monthly * 12 - tier.price.annual}/year</p>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/request-quote"
                  className={`w-full bg-gradient-to-r ${tier.color} text-white text-center py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-all duration-200 block`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Service Categories</h2>
            <p className="text-xl text-gray-300">Filter services by category to find the perfect solution</p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg'
                    : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50 hover:text-white'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="mb-4">
                  <span className="text-xs font-medium text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">{service.description}</p>
                
                <div className="mb-4">
                  <div className="text-2xl font-bold text-white mb-1">
                    {service.currency}{billingCycle === 'monthly' ? service.price : getAnnualPrice(service.price)}
                  </div>
                  <div className="text-sm text-gray-400">
                    per {billingCycle === 'monthly' ? service.pricingModel : 'year'}
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-sm text-green-400 font-semibold mb-2">{service.roi} ROI</div>
                  <div className="text-xs text-gray-400">
                    Delivery: {service.estimatedDelivery} • Support: {service.supportLevel}
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Link
                    to={`/services/${service.id}`}
                    className="flex-1 bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-center py-2 px-4 rounded-lg text-sm font-medium hover:from-cyan-500 hover:to-blue-600 transition-all duration-200"
                  >
                    Learn More
                  </Link>
                  <Link
                    to="/request-quote"
                    className="bg-slate-700/50 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-slate-600/50 transition-all duration-200 border border-slate-600"
                  >
                    Quote
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-gray-300">Unmatched value and innovation in every service</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Star,
                title: 'Premium Quality',
                description: 'Enterprise-grade solutions with cutting-edge technology'
              },
              {
                icon: TrendingUp,
                title: 'Proven ROI',
                description: 'Average 300-800% return on investment for our clients'
              },
              {
                icon: Users,
                title: 'Expert Support',
                description: '24/7 dedicated support and consultation services'
              },
              {
                icon: Target,
                title: 'Custom Solutions',
                description: 'Tailored solutions to meet your specific business needs'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-2xl p-12 border border-cyan-400/20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Contact our sales team for a personalized consultation and custom pricing tailored to your business needs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-left">
              <div className="flex items-center space-x-3">
                <Phone className="w-6 h-6 text-cyan-400" />
                <div>
                  <p className="text-white font-semibold">+1 302 464 0950</p>
                  <p className="text-sm text-gray-400">Available 24/7</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-6 h-6 text-cyan-400" />
                <div>
                  <p className="text-white font-semibold">kleber@ziontechgroup.com</p>
                  <p className="text-sm text-gray-400">Get in touch</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-6 h-6 text-cyan-400" />
                <div>
                  <p className="text-white font-semibold">364 E Main St STE 1008</p>
                  <p className="text-sm text-gray-400">Middletown, DE 19709</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 transform hover:scale-105"
              >
                Request Custom Quote
              </Link>
              <Link
                to="/contact"
                className="bg-slate-700/50 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-600/50 transition-all duration-200 border border-slate-600"
              >
                Schedule Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensivePricingGuide2025;
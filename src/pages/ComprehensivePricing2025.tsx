import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Check, 
  X, 
  Star, 
  Zap, 
  Shield, 
  Brain, 
  Globe, 
  TrendingUp, 
  Users,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ExternalLink
} from 'lucide-react';
import { innovativeServices } from '../data/innovative-services-2025';

const ComprehensivePricing2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  // Get unique categories
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(innovativeServices.map(service => service.category))];
    return ['all', ...uniqueCategories];
  }, []);

  // Filter services by category
  const filteredServices = useMemo(() => {
    if (selectedCategory === 'all') return innovativeServices;
    return innovativeServices.filter(service => service.category === selectedCategory);
  }, [selectedCategory]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI Services': return Brain;
      case 'IT Services': return Shield;
      case 'Blockchain Services': return Globe;
      case 'Sustainability Services': return TrendingUp;
      case 'Healthcare Services': return Users;
      default: return Zap;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI Services': return 'from-purple-500 to-pink-500';
      case 'IT Services': return 'from-blue-500 to-cyan-500';
      case 'Blockchain Services': return 'from-green-500 to-emerald-500';
      case 'Sustainability Services': return 'from-teal-500 to-green-500';
      case 'Healthcare Services': return 'from-red-500 to-pink-500';
      default: return 'from-gray-500 to-slate-500';
    }
  };

  const calculatePrice = (price: number) => {
    if (billingCycle === 'annual') {
      return Math.round(price * 12 * 0.8); // 20% discount for annual
    }
    return price;
  };

  const contactInfo = {
    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    website: "https://ziontechgroup.com",
    address: "364 E Main St STE 1008, Middletown DE 19709"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.1)_0%,transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1)_0%,transparent_50%)]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Comprehensive
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {' '}Pricing Plans
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Choose the perfect plan for your business needs. All plans include enterprise-grade features, 
              24/7 support, and guaranteed ROI.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
                className={`relative w-16 h-8 rounded-full transition-colors duration-200 ${
                  billingCycle === 'annual' ? 'bg-cyan-500' : 'bg-gray-600'
                }`}
              >
                <motion.div
                  className="w-6 h-6 bg-white rounded-full shadow-lg"
                  animate={{ x: billingCycle === 'annual' ? 32 : 4 }}
                  transition={{ duration: 0.2 }}
                />
              </button>
              <span className={`text-lg ${billingCycle === 'annual' ? 'text-white' : 'text-gray-400'}`}>
                Annual
                <span className="text-cyan-400 text-sm ml-2">Save 20%</span>
              </span>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
                  }`}
                >
                  {category === 'all' ? 'All Services' : category}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/10 relative overflow-hidden"
              >
                {/* Service Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${getCategoryColor(service.category)} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    {React.createElement(getCategoryIcon(service.category), { className: "w-8 h-8 text-white" })}
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-400 mb-1">{service.innovationLevel}</div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-300">4.9</span>
                    </div>
                  </div>
                </div>

                {/* Service Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Pricing Tiers */}
                <div className="space-y-4 mb-6">
                  <div className="bg-gray-700/30 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-semibold">Starter</span>
                      <span className="text-2xl font-bold text-cyan-400">
                        ${calculatePrice(service.pricing.starter)}
                        <span className="text-sm text-gray-400 font-normal">
                          /{billingCycle === 'annual' ? 'year' : 'month'}
                        </span>
                      </span>
                    </div>
                    <div className="text-xs text-gray-400">
                      Perfect for small teams and startups
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-semibold">Professional</span>
                      <span className="text-2xl font-bold text-cyan-400">
                        ${calculatePrice(service.pricing.professional)}
                        <span className="text-sm text-gray-400 font-normal">
                          /{billingCycle === 'annual' ? 'year' : 'month'}
                        </span>
                      </span>
                    </div>
                    <div className="text-xs text-gray-400">
                      Ideal for growing businesses
                    </div>
                  </div>

                  <div className="bg-gray-700/30 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-semibold">Enterprise</span>
                      <span className="text-2xl font-bold text-cyan-400">
                        ${calculatePrice(service.pricing.enterprise)}
                        <span className="text-sm text-gray-400 font-normal">
                          /{billingCycle === 'annual' ? 'year' : 'month'}
                        </span>
                      </span>
                    </div>
                    <div className="text-xs text-gray-400">
                      For large organizations
                    </div>
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <div className="space-y-2">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                        <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ROI and Market Info */}
                <div className="flex items-center justify-between mb-6 text-sm">
                  <div className="text-green-400 font-semibold">
                    ROI: {service.roi}
                  </div>
                  <div className="text-gray-400">
                    Market: {service.marketSize}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Link
                    to={`/services/${service.id}`}
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-medium py-3 px-4 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 flex items-center justify-center gap-2 group-hover:shadow-lg"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <button
                    onClick={() => window.open(`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.name}`, '_blank')}
                    className="px-4 py-3 border border-gray-600 text-gray-300 text-sm rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-200"
                  >
                    Contact
                  </button>
                </div>

                {/* Free Tier Badge */}
                {service.freeTier && (
                  <div className="absolute top-6 right-6">
                    <div className="bg-green-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                      Free Tier Available
                    </div>
                  </div>
                )}

                {/* Trial Badge */}
                <div className="absolute top-6 left-6">
                  <div className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                    {service.trialPeriod} Trial
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Solutions Section */}
      <section className="py-20 bg-gray-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              We specialize in building custom enterprise solutions tailored to your specific business requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Custom AI Solutions</h3>
              <p className="text-gray-400">
                Tailored AI models and algorithms designed specifically for your business processes and data.
              </p>
            </motion.div>

            <motion.div
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Enterprise Security</h3>
              <p className="text-gray-400">
                Comprehensive security solutions including zero-trust architecture and compliance frameworks.
              </p>
            </motion.div>

            <motion.div
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Blockchain Integration</h3>
              <p className="text-gray-400">
                Custom blockchain solutions for supply chain, finance, and decentralized applications.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our team to discuss your requirements and get a personalized quote.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center gap-3 text-gray-300">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>{contactInfo.address}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Custom Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href={`mailto:${contactInfo.email}?subject=Pricing Inquiry`}
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 hover:shadow-lg"
              >
                Email Us
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensivePricing2025;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  X, 
  Star, 
  TrendingUp, 
  Clock, 
  Users, 
  Shield, 
  Zap,
  Brain,
  FileText,
  MessageSquare,
  BarChart3,
  Heart,
  Scale,
  Truck,
  Calendar,
  ArrowRight,
  Phone,
  Mail,
  Globe,
  ExternalLink,
  Rocket,
  Target,
  Award,
  DollarSign,
  Crown,
  Sparkles
} from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '../data/innovativeMicroSaasServices2025';

export default function ComprehensivePricing2028() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All');

  // Filter for the new innovative services (last 10 services added)
  const newInnovativeServices = INNOVATIVE_MICRO_SAAS_SERVICES_2025.slice(-10);

  const categories = ['All', ...Array.from(new Set(newInnovativeServices.map(service => service.category)))];
  const priceRanges = [
    'All',
    'Under $1,000',
    '$1,000 - $2,999',
    '$3,000 - $4,999',
    '$5,000+'
  ];

  const getPriceRangeFilter = (range: string) => {
    switch (range) {
      case 'Under $1,000':
        return (service: any) => service.price < 1000;
      case '$1,000 - $2,999':
        return (service: any) => service.price >= 1000 && service.price <= 2999;
      case '$3,000 - $4,999':
        return (service: any) => service.price >= 3000 && service.price <= 4999;
      case '$5,000+':
        return (service: any) => service.price >= 5000;
      default:
        return () => true;
    }
  };

  const filteredServices = newInnovativeServices.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesPrice = getPriceRangeFilter(selectedPriceRange)(service);
    return matchesCategory && matchesPrice;
  });

  const getServiceIcon = (category: string) => {
    switch (category) {
      case 'AI & Automation':
        return <Brain className="w-6 h-6 text-cyan-400" />;
      case 'AI & Security':
        return <Shield className="w-6 h-6 text-cyan-400" />;
      case 'AI & Marketing':
        return <FileText className="w-6 h-6 text-cyan-400" />;
      case 'AI & Support':
        return <MessageSquare className="w-6 h-6 text-cyan-400" />;
      case 'AI & Finance':
        return <BarChart3 className="w-6 h-6 text-cyan-400" />;
      case 'AI & Healthcare':
        return <Heart className="w-6 h-6 text-cyan-400" />;
      case 'AI & Legal':
        return <Scale className="w-6 h-6 text-cyan-400" />;
      case 'AI & Supply Chain':
        return <Truck className="w-6 h-6 text-cyan-400" />;
      case 'AI & Project Management':
        return <Calendar className="w-6 h-6 text-cyan-400" />;
      case 'AI & HR':
        return <Users className="w-6 h-6 text-cyan-400" />;
      default:
        return <Zap className="w-6 h-6 text-cyan-400" />;
    }
  };

  const getInnovationLevelColor = (level: string) => {
    switch (level) {
      case 'Revolutionary':
        return 'bg-gradient-to-r from-purple-500 to-pink-500';
      case 'Advanced':
        return 'bg-gradient-to-r from-cyan-500 to-blue-500';
      case 'Innovative':
        return 'bg-gradient-to-r from-green-500 to-emerald-500';
      default:
        return 'bg-gradient-to-r from-gray-500 to-slate-500';
    }
  };

  const pricingTiers = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small businesses and startups",
      features: [
        "Basic AI integration",
        "Standard support",
        "Core features",
        "Email support",
        "Basic analytics"
      ],
      popular: false,
      color: "from-slate-500 to-slate-600"
    },
    {
      name: "Professional",
      price: "$999",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Advanced AI capabilities",
        "Priority support",
        "Custom integrations",
        "Phone support",
        "Advanced analytics",
        "API access"
      ],
      popular: true,
      color: "from-cyan-500 to-blue-600"
    },
    {
      name: "Enterprise",
      price: "$2,999",
      period: "/month",
      description: "For large-scale operations",
      features: [
        "Full AI suite",
        "24/7 dedicated support",
        "Custom development",
        "On-site support",
        "Enterprise analytics",
        "White-label options"
      ],
      popular: false,
      color: "from-purple-500 to-indigo-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Comprehensive Pricing Guide 2028 - Zion Tech Group" 
        description="Explore our comprehensive pricing for innovative AI services. Find the perfect plan for your business with transparent pricing and unmatched value."
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-6">
              <Crown className="w-4 h-4 mr-2" />
              Premium AI Services Pricing 2028
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Comprehensive <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Pricing Guide</span>
            </h1>
            
            <p className="text-xl text-slate-300 mb-8 max-w-4xl mx-auto">
              Transparent pricing for our revolutionary AI services. Choose the perfect plan for your business 
              and unlock the power of artificial intelligence with proven ROI and competitive advantages.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
              >
                Get Custom Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a 
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call for Pricing
              </a>
            </div>
          </motion.div>
        </div>

        {/* Background Effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Start with our flexible pricing tiers and scale as you grow. All plans include our core AI capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-slate-800/50 border rounded-2xl p-8 ${
                  tier.popular 
                    ? 'border-cyan-400/50 shadow-2xl shadow-cyan-500/20' 
                    : 'border-slate-700/50'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    <span className="text-gray-400">{tier.period}</span>
                  </div>
                  <p className="text-gray-300">{tier.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-200 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Category Filter */}
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full pl-4 pr-10 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent appearance-none cursor-pointer"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Price Range Filter */}
              <div className="relative">
                <select
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)}
                  className="w-full pl-4 pr-10 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent appearance-none cursor-pointer"
                >
                  {priceRanges.map(range => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Service Details & Pricing
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive AI services with detailed pricing, features, and ROI projections.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
              >
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg border border-cyan-400/30">
                      {getServiceIcon(service.category)}
                    </div>
                    <div>
                      <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full text-white ${getInnovationLevelColor(service.innovationLevel)}`}>
                        {service.innovationLevel}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">${service.price.toLocaleString()}</div>
                    <div className="text-sm text-gray-400">per month</div>
                  </div>
                </div>

                {/* Service Title and Description */}
                <h3 className="text-xl font-bold text-white mb-3 hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {service.description}
                </p>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-200 mb-2">Key Features:</h4>
                  <div className="space-y-1">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-400">
                        <CheckCircle className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <div className="text-xs text-cyan-400">
                        +{service.features.length - 3} more features
                      </div>
                    )}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-200 mb-2">Key Benefits:</h4>
                  <div className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-400">
                        <TrendingUp className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Service Details */}
                <div className="grid grid-cols-2 gap-3 mb-4 text-xs">
                  <div className="flex items-center text-gray-400">
                    <Clock className="w-3 h-3 mr-1" />
                    <span>{service.estimatedDelivery}</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Users className="w-3 h-3 mr-1" />
                    <span>{service.supportLevel}</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Target className="w-3 h-3 mr-1" />
                    <span>ROI: {service.roi}</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <DollarSign className="w-3 h-3 mr-1" />
                    <span>{service.marketPrice}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.slice(0, 3).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs bg-slate-700/50 text-gray-300 rounded-full border border-slate-600/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="flex space-x-2">
                  <Link
                    to={`/services/${service.id}`}
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 text-sm"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                  <a
                    href="https://ziontechgroup.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-gray-400 text-xl mb-4">No services found matching your criteria</div>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSelectedPriceRange('All');
                }}
                className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Our Pricing is Unbeatable
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We deliver exceptional value with transparent pricing and proven ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Proven ROI",
                description: "Average 300%+ return on investment across all services"
              },
              {
                icon: Clock,
                title: "Fast Implementation",
                description: "Deploy in weeks, not months with our proven methodology"
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "SOC 2, ISO 27001, and industry-leading security standards"
              },
              {
                icon: Users,
                title: "Expert Support",
                description: "24/7 support from our team of AI and technology experts"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Contact us today for a custom quote tailored to your business needs. 
              Our experts are ready to help you choose the perfect plan.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center text-center">
                <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg mr-3">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Phone</div>
                  <div className="text-white font-semibold">+1 302 464 0950</div>
                </div>
              </div>

              <div className="flex items-center justify-center text-center">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg mr-3">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Email</div>
                  <div className="text-white font-semibold">kleber@ziontechgroup.com</div>
                </div>
              </div>

              <div className="flex items-center justify-center text-center">
                <div className="p-3 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg mr-3">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Website</div>
                  <div className="text-white font-semibold">ziontechgroup.com</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
              >
                Get Custom Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a 
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200"
              >
                Visit Our Website
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </div>

            <div className="mt-8 text-sm text-gray-400">
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
              <p>🌐 <a href="https://ziontechgroup.com" target="_blank" rel="noreferrer" className="text-cyan-400 hover:text-cyan-300">ziontechgroup.com</a></p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
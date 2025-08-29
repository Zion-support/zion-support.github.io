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
  X
} from 'lucide-react';
import { MICRO_SAAS_SERVICES } from '@/data/microSaasServices';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { NEW_INNOVATIVE_MICRO_SAAS_PRICING_2025 } from '../data/comprehensivePricingGuide2027';

const pricingTiers = [
  {
    name: 'Starter',
    description: 'Perfect for small businesses and startups',
    price: 29,
    features: [
      'Basic features',
      'Email support',
      '1 user',
      'Standard integrations',
      'Community forum access'
    ],
    color: 'from-zion-cyan to-zion-blue',
    popular: false
  },
  {
    name: 'Professional',
    description: 'Ideal for growing businesses and teams',
    price: 99,
    features: [
      'Advanced features',
      'Priority support',
      'Up to 10 users',
      'Advanced integrations',
      'API access',
      'Custom branding',
      'Analytics dashboard'
    ],
    color: 'from-zion-purple to-zion-cyan',
    popular: true
  },
  {
    name: 'Enterprise',
    description: 'For large organizations with complex needs',
    price: 299,
    features: [
      'Custom features',
      '24/7 dedicated support',
      'Unlimited users',
      'Custom integrations',
      'White-label options',
      'Advanced security',
      'SLA guarantees',
      'Dedicated account manager'
    ],
    color: 'from-zion-blue to-zion-purple',
    popular: false
  }
];

const serviceCategories = [
  {
    name: 'AI Services',
    icon: <Brain className="w-6 h-6" />,
    services: MICRO_SAAS_SERVICES.filter(s => s.category === 'AI Services'),
    color: 'from-purple-600 to-pink-600'
  },
  {
    name: 'IT Services',
    icon: <Server className="w-6 h-6" />,
    services: MICRO_SAAS_SERVICES.filter(s => s.category === 'IT Services'),
    color: 'from-blue-600 to-cyan-600'
  },
  {
    name: 'Business Solutions',
    icon: <TrendingUp className="w-6 h-6" />,
    services: MICRO_SAAS_SERVICES.filter(s => s.category === 'Business Solutions'),
    color: 'from-green-600 to-emerald-600'
  }
];

export default function ComprehensivePricingGuide2027() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPricing, setSelectedPricing] = useState('all');

  const filteredServices = MICRO_SAAS_SERVICES.filter(service => {
    if (selectedCategory !== 'all' && service.category !== selectedCategory) return false;
    if (selectedPricing !== 'all' && service.pricingModel !== selectedPricing) return false;
    return true;
  });

  const getAveragePrice = (services: any[]) => {
    const prices = services.map(s => s.price).filter(Boolean);
    if (prices.length === 0) return 0;
    return Math.round(prices.reduce((a, b) => a + b, 0) / prices.length);
  };

  const getTotalValue = (services: any[]) => {
    return services.reduce((total, service) => {
      const marketPrice = service.marketPrice.replace(/[^0-9]/g, '');
      return total + parseInt(marketPrice || '0');
    }, 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <SEO 
        title="Comprehensive Pricing Guide 2027 - Zion Tech Group"
        description="Explore our transparent pricing for AI, IT, and business solutions. Find the perfect plan for your business needs with competitive pricing and value."
        keywords="pricing, AI services pricing, IT solutions cost, business automation pricing, Zion Tech Group pricing"
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark/20 to-zion-purple/20" />
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Comprehensive Pricing Guide
              <span className="block text-zion-cyan">2027 Edition</span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Transparent pricing for all our innovative solutions. Choose the perfect plan that fits your business needs and budget.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="bg-zion-blue-dark/30 rounded-lg px-6 py-3 border border-zion-blue-light/20">
                <div className="text-2xl font-bold text-zion-cyan">${getAveragePrice(MICRO_SAAS_SERVICES)}</div>
                <div className="text-zion-slate-light text-sm">Average Monthly Price</div>
              </div>
              <div className="bg-zion-purple/30 rounded-lg px-6 py-3 border border-zion-purple/20">
                <div className="text-2xl font-bold text-zion-purple">${getTotalValue(MICRO_SAAS_SERVICES).toLocaleString()}+</div>
                <div className="text-zion-slate-light text-sm">Total Market Value</div>
              </div>
              <div className="bg-zion-cyan/30 rounded-lg px-6 py-3 border border-zion-cyan/20">
                <div className="text-2xl font-bold text-zion-cyan">{MICRO_SAAS_SERVICES.length}</div>
                <div className="text-zion-slate-light text-sm">Services Available</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-zion-cyan to-zion-blue text-white hover:from-zion-cyan-light hover:to-zion-blue-light">
                <Link to="/contact">
                  Get Custom Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white">
                <a href="tel:+13024640950">
                  Call for Pricing
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-gradient-to-r from-zion-blue-dark to-zion-purple py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center space-y-2">
              <Phone className="w-6 h-6 text-zion-cyan" />
              <span className="text-white font-semibold">+1 302 464 0950</span>
              <span className="text-zion-slate-light text-sm">Mobile</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Mail className="w-6 h-6 text-zion-cyan" />
              <span className="text-white font-semibold">kleber@ziontechgroup.com</span>
              <span className="text-zion-slate-light text-sm">Email</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <MapPin className="w-6 h-6 text-zion-cyan" />
              <span className="text-white font-semibold">364 E Main St STE 1008</span>
              <span className="text-zion-slate-light text-sm">Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Choose from our standard pricing tiers or get a custom quote for enterprise solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative rounded-2xl p-8 ${
                  tier.popular 
                    ? 'bg-gradient-to-br from-zion-purple/20 to-zion-cyan/20 border-2 border-zion-purple' 
                    : 'bg-zion-slate-dark/30 border border-zion-blue-light/20'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-zion-purple to-zion-cyan text-white px-4 py-2">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-zion-slate-light mb-6">{tier.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-zion-cyan">${tier.price}</span>
                    <span className="text-zion-slate-light">/month</span>
                  </div>

                  <Button 
                    asChild
                    className={`w-full bg-gradient-to-r ${tier.color} text-white hover:opacity-90`}
                  >
                    <Link to="/contact">
                      Get Started
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-white mb-4">What's Included:</h4>
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                      <span className="text-zion-slate-light">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories Pricing */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Service-Specific Pricing
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Explore detailed pricing for each service category with transparent cost breakdowns
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('all')}
              className={selectedCategory === 'all' ? 'bg-zion-cyan hover:bg-zion-cyan-light' : 'border-zion-blue-light/20 text-zion-slate-light hover:bg-zion-blue-dark/30'}
            >
              <Globe className="w-4 h-4 mr-2" />
              All Categories
            </Button>
            {serviceCategories.map((category) => (
              <Button
                key={category.name}
                variant={selectedCategory === category.name ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.name)}
                className={selectedCategory === category.name ? 'bg-zion-cyan hover:bg-zion-cyan-light' : 'border-zion-blue-light/20 text-zion-slate-light hover:bg-zion-blue-dark/30'}
              >
                {category.icon}
                <span className="ml-2">{category.name}</span>
              </Button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-zion-blue-dark/30 to-zion-slate-dark/30 border border-zion-blue-light/20 rounded-2xl p-6 hover:border-zion-purple/50 transition-all duration-300 hover:scale-[1.02]"
              >
                {service.featured && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-zion-purple to-zion-cyan text-white text-xs font-bold px-3 py-1 rounded-full">
                    Featured
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-zion-slate-light text-sm mb-4">{service.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline" className="text-zion-cyan border-zion-cyan/30">
                      {service.category}
                    </Badge>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-white text-sm">{service.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-zion-slate-dark/30 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-zion-slate-light text-sm">Starting Price:</span>
                      <span className="text-2xl font-bold text-zion-cyan">
                        {service.currency}{service.price}
                      </span>
                    </div>
                    <div className="text-zion-slate-light text-sm">
                      per {service.pricingModel}
                    </div>
                  </div>

                  <div className="bg-zion-purple/20 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-zion-slate-light text-sm">Market Price:</span>
                      <span className="text-zion-purple font-semibold">{service.marketPrice}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-white text-sm">Key Benefits:</h4>
                    {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                        <span className="text-zion-slate-light text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-zion-blue-light/20">
                    <div className="flex items-center justify-between">
                      <Link
                        to={service.website}
                        className="inline-flex items-center space-x-2 text-zion-cyan hover:text-zion-cyan-light transition-colors"
                      >
                        <span className="text-sm font-medium">Learn More</span>
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                      
                      <Link
                        to={`mailto:${service.contactEmail}?subject=Pricing Inquiry for ${service.title}`}
                        className="inline-flex items-center space-x-2 text-zion-purple hover:text-zion-purple-light transition-colors"
                      >
                        <span className="text-sm font-medium">Get Quote</span>
                        <Mail className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <div className="text-zion-slate-light text-lg mb-4">No services found matching your criteria</div>
              <Button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedPricing('all');
                }}
                className="bg-zion-cyan hover:bg-zion-cyan-light"
              >
                View All Services
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-zion-blue-dark/20 to-zion-purple/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our competitive pricing combined with exceptional value and support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="w-8 h-8" />,
                title: 'Competitive Pricing',
                description: 'Market-leading prices with transparent cost structures'
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: 'Expert Support',
                description: '24/7 technical support and dedicated account management'
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: 'Enterprise Security',
                description: 'Bank-grade security with compliance certifications'
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: 'Proven ROI',
                description: 'Measurable business outcomes and cost savings'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex p-4 bg-zion-cyan/20 rounded-2xl mb-4">
                  <div className="text-zion-cyan">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-zion-slate-light">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* New Innovative Services Pricing */}
      <section className="py-20 bg-gradient-to-r from-gray-800/50 to-gray-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              New Innovative Micro SAAS Services 2025
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our latest cutting-edge services with competitive pricing and exceptional ROI
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {NEW_INNOVATIVE_MICRO_SAAS_PRICING_2025.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300"
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                  <div className="text-gray-400 text-sm mb-4">{service.category}</div>
                </div>

                {/* Pricing Tiers */}
                <div className="space-y-4 mb-6">
                  {Object.entries(service.pricing).map(([tier, details]) => (
                    <div key={tier} className="bg-gray-700/50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-semibold capitalize">{tier}</span>
                        <span className="text-2xl font-bold text-blue-400">
                          {details.currency}{details.price.toLocaleString()}
                          <span className="text-gray-400 text-sm">/{details.period}</span>
                        </span>
                      </div>
                      <div className="space-y-2">
                        {details.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </div>
                        ))}
                        {details.features.length > 3 && (
                          <div className="text-blue-400 text-sm font-medium">
                            +{details.features.length - 3} more features
                          </div>
                        )}
                      </div>
                      {details.limitations && (
                        <div className="mt-3 pt-3 border-t border-gray-600">
                          <div className="text-gray-400 text-sm">
                            <strong>Limitations:</strong> {details.limitations.join(', ')}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Market Analysis */}
                <div className="bg-gray-700/30 rounded-lg p-4 mb-6">
                  <h4 className="text-white font-semibold mb-3">Market Analysis</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-400">Market Price:</span>
                      <div className="text-white font-medium">{service.marketAnalysis.averageMarketPrice}</div>
                    </div>
                    <div>
                      <span className="text-gray-400">ROI:</span>
                      <div className="text-green-400 font-medium">{service.marketAnalysis.roi}</div>
                    </div>
                    <div>
                      <span className="text-gray-400">Market Size:</span>
                      <div className="text-white font-medium">{service.marketAnalysis.marketSize}</div>
                    </div>
                    <div>
                      <span className="text-gray-400">Competitors:</span>
                      <div className="text-white font-medium">{service.marketAnalysis.competitors.slice(0, 2).join(', ')}</div>
                    </div>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                >
                  Get Quote
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8">
            Contact us today for a personalized consultation and custom pricing quote tailored to your specific needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-zion-cyan to-zion-blue text-white hover:from-zion-cyan-light hover:to-zion-blue-light">
              <Link to="/contact">
                Request Custom Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white">
              <a href="tel:+13024640950">
                Call Now: +1 302 464 0950
              </a>
            </Button>
          </div>

          <div className="mt-8 text-zion-slate-light">
            <p>Need enterprise pricing? Contact us for volume discounts and custom solutions.</p>
            <p className="text-sm mt-2">
              <a href="mailto:kleber@ziontechgroup.com" className="text-zion-cyan hover:text-zion-cyan-light">
                kleber@ziontechgroup.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

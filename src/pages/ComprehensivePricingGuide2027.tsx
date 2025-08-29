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
  Rocket,
  Cpu,
  Lock,
  Heart,
  ShoppingCart,
  BookOpen,
  MessageCircle,
  Cloud,
  Sparkles
} from 'lucide-react';
import { INNOVATIVE_SERVICES_2025, SERVICE_CATEGORIES, PRICING_TIERS } from '@/data/innovativeServices2025';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const pricingTiers = [
  {
    name: 'Starter',
    description: 'Perfect for small businesses and startups',
    price: 199,
    features: [
      'Basic features and functionality',
      'Email support',
      'Standard integrations',
      'Community forum access',
      'Basic analytics'
    ],
    color: 'from-zinc-600 to-zinc-700',
    popular: false
  },
  {
    name: 'Professional',
    description: 'Ideal for growing businesses and teams',
    price: 599,
    features: [
      'Advanced features and automation',
      'Priority support',
      'Advanced integrations',
      'API access',
      'Custom branding',
      'Advanced analytics',
      'Team collaboration'
    ],
    color: 'from-blue-600 to-cyan-600',
    popular: true
  },
  {
    name: 'Enterprise',
    description: 'For large organizations with complex needs',
    price: 1999,
    features: [
      'Custom features and solutions',
      '24/7 dedicated support',
      'Custom integrations',
      'White-label options',
      'Advanced security',
      'SLA guarantees',
      'Dedicated account manager',
      'Custom training and onboarding'
    ],
    color: 'from-purple-600 to-pink-600',
    popular: false
  }
];

const serviceCategories = [
  {
    name: 'AI Services',
    icon: <Brain className="w-6 h-6" />,
    services: INNOVATIVE_SERVICES_2025.filter(s => s.category === 'AI Services'),
    color: 'from-purple-600 to-pink-600'
  },
  {
    name: 'IT Services',
    icon: <Server className="w-6 h-6" />,
    services: INNOVATIVE_SERVICES_2025.filter(s => s.category === 'IT Services'),
    color: 'from-blue-600 to-cyan-600'
  },
  {
    name: 'Micro SaaS',
    icon: <Rocket className="w-6 h-6" />,
    services: INNOVATIVE_SERVICES_2025.filter(s => s.category === 'Micro SaaS'),
    color: 'from-green-600 to-emerald-600'
  },
  {
    name: 'Emerging Tech',
    icon: <Sparkles className="w-6 h-6" />,
    services: INNOVATIVE_SERVICES_2025.filter(s => s.category === 'Emerging Tech'),
    color: 'from-orange-600 to-red-600'
  }
];

const contactInfo = {
  phone: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

export default function ComprehensivePricingGuide2027() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedTier, setSelectedTier] = useState<string>('all');

  const filteredServices = selectedCategory === 'all' 
    ? INNOVATIVE_SERVICES_2025 
    : INNOVATIVE_SERVICES_2025.filter(s => s.category === selectedCategory);

  const getPriceRange = (tier: string) => {
    switch (tier) {
      case 'starter':
        return { min: 0, max: 500 };
      case 'professional':
        return { min: 500, max: 2000 };
      case 'enterprise':
        return { min: 2000, max: 10000 };
      default:
        return { min: 0, max: 10000 };
    }
  };

  const priceRange = getPriceRange(selectedTier);
  const tierFilteredServices = selectedTier === 'all' 
    ? filteredServices 
    : filteredServices.filter(s => s.price >= priceRange.min && s.price <= priceRange.max);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Comprehensive Pricing Guide 2027 - Zion Tech Group"
        description="Explore our complete pricing guide for AI, IT, and Micro SaaS services. Find the perfect solution for your business needs with transparent pricing and ROI guarantees."
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Comprehensive Pricing Guide
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {' '}2027
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transparent pricing for all our innovative AI, IT, and Micro SaaS services. 
              Find the perfect solution that fits your budget and delivers exceptional ROI.
            </p>
            
            {/* Contact Banner */}
            <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 mb-12">
              <div className="flex flex-col lg:flex-row items-center justify-between text-white">
                <div className="text-center lg:text-left mb-6 lg:mb-0">
                  <h3 className="text-2xl font-semibold mb-2">Need Custom Pricing?</h3>
                  <p className="text-cyan-100">Get in touch with our experts for personalized solutions</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="flex items-center gap-2 px-6 py-3 bg-white text-cyan-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    {contactInfo.phone}
                  </a>
                  <a
                    href={`mailto:${contactInfo.email}?subject=Pricing Inquiry`}
                    className="flex items-center gap-2 px-6 py-3 bg-white/20 text-white rounded-lg font-semibold hover:bg-white/30 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    Get Quote
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Tiers Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Choose Your Plan</h2>
            <p className="text-xl text-gray-300">Flexible pricing options for every business size</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border ${
                  tier.popular ? 'border-cyan-500 ring-2 ring-cyan-500/20' : 'border-white/10'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-400 mb-6">{tier.description}</p>
                  <div className="text-4xl font-bold text-white mb-2">
                    ${tier.price}
                    <span className="text-lg text-gray-400 font-normal">/month</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="text-center">
                  <Link
                    to="/contact"
                    className={`w-full px-6 py-3 rounded-lg font-medium transition-all ${
                      tier.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories Filter */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Explore Our Services</h2>
            <p className="text-lg text-gray-300">Filter by category and pricing tier</p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                selectedCategory === 'all'
                  ? 'bg-cyan-500 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              All Categories ({INNOVATIVE_SERVICES_2025.length})
            </button>
            {SERVICE_CATEGORIES.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  selectedCategory === category.name
                    ? 'bg-cyan-500 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category.icon} {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* Pricing Tier Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button
              onClick={() => setSelectedTier('all')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                selectedTier === 'all'
                  ? 'bg-cyan-500 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              All Pricing Tiers
            </button>
            <button
              onClick={() => setSelectedTier('starter')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                selectedTier === 'starter'
                  ? 'bg-cyan-500 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              Starter ($0 - $500/month)
            </button>
            <button
              onClick={() => setSelectedTier('professional')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                selectedTier === 'professional'
                  ? 'bg-cyan-500 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              Professional ($500 - $2,000/month)
            </button>
            <button
              onClick={() => setSelectedTier('enterprise')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                selectedTier === 'enterprise'
                  ? 'bg-cyan-500 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              Enterprise ($2,000+/month)
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              {selectedCategory === 'all' ? 'All Services' : selectedCategory} 
              {selectedTier !== 'all' && ` - ${selectedTier.charAt(0).toUpperCase() + selectedTier.slice(1)} Tier`}
            </h2>
            <p className="text-lg text-gray-300">
              {tierFilteredServices.length} services available
            </p>
          </div>

          {tierFilteredServices.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-white mb-2">No services found</h3>
              <p className="text-gray-400">Try adjusting your category or pricing tier filters</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tierFilteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden hover:border-cyan-500/50 transition-all duration-300"
                >
                  {/* Service Image */}
                  <div className="relative">
                    <img
                      src={service.images[0]}
                      alt={service.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      {service.featured && (
                        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                          <Star className="w-4 h-4" />
                          Featured
                        </div>
                      )}
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <div className="bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {service.category}
                      </div>
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                      <div className="flex items-center gap-1 text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-sm font-medium">{service.rating}</span>
                        <span className="text-gray-400 text-sm">({service.reviewCount})</span>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4 line-clamp-3">{service.description}</p>

                    {/* AI Score and ROI */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <Brain className="w-5 h-5 text-cyan-400" />
                        <span className="text-sm text-white">AI Score: {service.aiScore}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Target className="w-5 h-5 text-green-400" />
                        <span className="text-sm text-white">ROI: {service.roi}</span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="bg-white/10 text-gray-300 px-2 py-1 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Features Preview */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Pricing and CTA */}
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold text-white">
                          {service.currency}{service.price.toLocaleString()}
                          <span className="text-sm text-gray-400 font-normal">/{service.pricingModel}</span>
                        </div>
                        <div className="text-sm text-gray-400">{service.marketPrice}</div>
                      </div>
                      <div className="flex gap-2">
                        <Link
                          to={`/services/${service.id}`}
                          className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-medium transition-colors flex items-center gap-2"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                        <a
                          href={`mailto:${service.contactEmail}?subject=Inquiry about ${service.title}`}
                          className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg font-medium transition-colors flex items-center gap-2"
                        >
                          <Mail className="w-4 h-4" />
                          Contact
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Calculate Your ROI
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              See how our services can transform your business operations and deliver measurable returns
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Average ROI</h3>
                <div className="text-3xl font-bold text-green-400">300%</div>
                <p className="text-gray-400 text-sm">Within 6-12 months</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Time to Value</h3>
                <div className="text-3xl font-bold text-blue-400">2-8 weeks</div>
                <p className="text-gray-400 text-sm">Implementation time</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Success Rate</h3>
                <div className="text-3xl font-bold text-purple-400">95%</div>
                <p className="text-gray-400 text-sm">Customer satisfaction</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all transform hover:scale-105"
              >
                Get Custom ROI Analysis
              </Link>
              <a
                href={`tel:${contactInfo.phone}`}
                className="px-8 py-4 bg-white/10 text-white rounded-lg font-semibold text-lg hover:bg-white/20 transition-all border border-white/20"
              >
                Call for Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our team to discuss your needs and get a personalized quote
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                <p className="text-gray-400 mb-4">Speak directly with our experts</p>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-cyan-400 hover:text-cyan-300 font-semibold"
                >
                  {contactInfo.phone}
                </a>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <p className="text-gray-400 mb-4">Send us your requirements</p>
                <a
                  href={`mailto:${contactInfo.email}?subject=Pricing Inquiry`}
                  className="text-blue-400 hover:text-blue-300 font-semibold"
                >
                  {contactInfo.email}
                </a>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <MapPin className="w-8 h-8 text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-gray-400 mb-4">Schedule an in-person meeting</p>
                <span className="text-green-400 font-semibold">
                  {contactInfo.address}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all transform hover:scale-105"
              >
                Request Custom Quote
              </Link>
              <Link
                to="/innovative-services-showcase-2025"
                className="px-8 py-4 bg-white/10 text-white rounded-lg font-semibold text-lg hover:bg-white/20 transition-all border border-white/20"
              >
                Explore All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

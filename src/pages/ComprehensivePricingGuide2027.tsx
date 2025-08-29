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
  Heart,
  Lock,
  Cpu,
  Rocket,
  Crown
} from 'lucide-react';
import { MICRO_SAAS_SERVICES, MICRO_SAAS_CATEGORIES, CONTACT_INFO } from '@/data/microSaasServices';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

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
    name: 'Cybersecurity',
    icon: <Shield className="w-6 h-6" />,
    services: MICRO_SAAS_SERVICES.filter(s => s.category === 'Cybersecurity'),
    color: 'from-red-600 to-pink-600'
  },
  {
    name: 'Emerging Technologies',
    icon: <Rocket className="w-6 h-6" />,
    services: MICRO_SAAS_SERVICES.filter(s => s.category === 'Emerging Technologies'),
    color: 'from-yellow-600 to-orange-600'
  }
];

const comparisonFeatures = [
  'AI-Powered Analytics',
  'Real-time Monitoring',
  '24/7 Support',
  'API Access',
  'Custom Integrations',
  'Security Compliance',
  'Scalability',
  'Performance Optimization'
];

const marketComparison = [
  {
    competitor: 'Competitor A',
    basicPrice: 49,
    proPrice: 149,
    enterprisePrice: 399,
    features: [true, true, false, false, false, false, true, false]
  },
  {
    competitor: 'Competitor B',
    basicPrice: 39,
    proPrice: 129,
    enterprisePrice: 349,
    features: [true, false, true, false, false, true, false, false]
  },
  {
    competitor: 'Zion Tech Group',
    basicPrice: 29,
    proPrice: 99,
    enterprisePrice: 299,
    features: [true, true, true, true, true, true, true, true]
  }
];

export default function ComprehensivePricingGuide2027() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTier, setSelectedTier] = useState('Professional');

  const filteredServices = selectedCategory === 'All' 
    ? MICRO_SAAS_SERVICES 
    : MICRO_SAAS_SERVICES.filter(s => s.category === selectedCategory);

  const categories = ['All', ...MICRO_SAAS_CATEGORIES];

  return (
    <>
      <SEO 
        title="Comprehensive Pricing Guide 2027 - Zion Tech Group"
        description="Complete pricing information for all our AI-powered micro SAAS services, IT solutions, and emerging technology services. Transparent pricing with no hidden fees."
        canonical="/pricing"
        url="https://ziontechgroup.com/pricing"
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
          >
            Complete Pricing Guide 2027
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
          >
            Transparent pricing for all our AI-powered micro SAAS services, enterprise IT solutions, and cutting-edge technology services. No hidden fees, just exceptional value.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/request-quote">
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
                Get Custom Quote
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white">
                Contact Sales Team
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing tiers designed to grow with your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border-2 ${
                  tier.popular 
                    ? 'border-cyan-500 shadow-2xl shadow-cyan-500/25' 
                    : 'border-slate-700'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-400 mb-6">{tier.description}</p>
                  <div className="text-4xl font-bold text-white mb-2">
                    ${tier.price}
                    <span className="text-lg text-gray-400">/month</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link to="/request-quote" className="block w-full">
                  <Button 
                    className={`w-full ${
                      tier.popular 
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700' 
                        : 'bg-slate-700 hover:bg-slate-600'
                    }`}
                  >
                    Get Started
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services by Category */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Services & Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Detailed pricing for all our services organized by category
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                {category}
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
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30">
                    {service.category}
                  </Badge>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-300">{service.rating}</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm line-clamp-3">{service.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="text-xl font-bold text-cyan-400">
                    {service.currency}{service.price}
                    <span className="text-sm text-gray-400">/{service.pricingModel}</span>
                  </div>
                  <div className="text-sm text-gray-400">
                    AI Score: {service.aiScore}%
                  </div>
                </div>

                <div className="text-sm text-gray-400 mb-4">
                  Market Price: {service.marketPrice}
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.slice(0, 3).map((tag, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs border-slate-600 text-slate-300">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="space-y-2 mb-6">
                  {service.benefits.slice(0, 2).map((benefit, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <Link 
                    to={`/services/${service.id}`}
                    className="text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center"
                  >
                    Learn More
                    <ArrowRight className="ml-1 w-3 h-3" />
                  </Link>
                  <Link to="/request-quote">
                    <Button size="sm" className="bg-cyan-600 hover:bg-cyan-700">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Comparison */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Market Comparison
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our pricing and features compare to the competition
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full bg-slate-800 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-slate-700">
                  <th className="px-6 py-4 text-left text-white font-semibold">Features</th>
                  {marketComparison.map((comp, index) => (
                    <th key={index} className="px-6 py-4 text-center text-white font-semibold">
                      {comp.competitor}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-700">
                  <td className="px-6 py-4 text-white font-medium">Basic Plan</td>
                  {marketComparison.map((comp, index) => (
                    <td key={index} className="px-6 py-4 text-center text-cyan-400 font-bold">
                      ${comp.basicPrice}/mo
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="px-6 py-4 text-white font-medium">Professional Plan</td>
                  {marketComparison.map((comp, index) => (
                    <td key={index} className="px-6 py-4 text-center text-cyan-400 font-bold">
                      ${comp.proPrice}/mo
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="px-6 py-4 text-white font-medium">Enterprise Plan</td>
                  {marketComparison.map((comp, index) => (
                    <td key={index} className="px-6 py-4 text-center text-cyan-400 font-bold">
                      ${comp.enterprisePrice}/mo
                    </td>
                  ))}
                </tr>
                {comparisonFeatures.map((feature, index) => (
                  <tr key={index} className="border-b border-slate-700">
                    <td className="px-6 py-4 text-white">{feature}</td>
                    {marketComparison.map((comp, compIndex) => (
                      <td key={compIndex} className="px-6 py-4 text-center">
                        {comp.features[index] ? (
                          <CheckCircle className="w-5 h-5 text-green-400 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-red-400 mx-auto" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver exceptional value through cutting-edge technology and proven expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: 'AI-First Innovation',
                description: 'All our services leverage the latest AI and machine learning technologies for maximum efficiency.',
                color: 'from-purple-600 to-pink-600'
              },
              {
                icon: Shield,
                title: 'Enterprise Security',
                description: 'Bank-level security with SOC 2 Type II compliance and ISO 27001 certification.',
                color: 'from-red-600 to-pink-600'
              },
              {
                icon: Zap,
                title: 'Performance Optimized',
                description: '99.9% uptime guarantee with sub-second response times for critical operations.',
                color: 'from-yellow-600 to-orange-600'
              },
              {
                icon: Users,
                title: 'Expert Support',
                description: '24/7 support with dedicated account managers and certified professionals.',
                color: 'from-blue-600 to-cyan-600'
              },
              {
                icon: Globe,
                title: 'Global Reach',
                description: 'Services available worldwide with multi-language support and local compliance.',
                color: 'from-green-600 to-emerald-600'
              },
              {
                icon: Award,
                title: 'Proven Results',
                description: 'Track record of helping 500+ companies achieve digital transformation success.',
                color: 'from-indigo-600 to-purple-600'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
              Get a custom quote tailored to your specific business needs and requirements
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link to="/request-quote">
                <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-100">
                  Get Custom Quote
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-cyan-600">
                  Schedule Demo
                </Button>
              </Link>
            </div>

            <div className="text-cyan-100">
              <p className="text-sm mb-2">
                Need immediate assistance? Call us at{' '}
                <a href={`tel:${CONTACT_INFO.phone}`} className="font-semibold hover:text-white">
                  {CONTACT_INFO.phone}
                </a>
              </p>
              <p className="text-sm">
                Or email us at{' '}
                <a href={`mailto:${CONTACT_INFO.email}`} className="font-semibold hover:text-white">
                  {CONTACT_INFO.email}
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

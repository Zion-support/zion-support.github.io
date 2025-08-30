import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  CheckCircle, Star, Shield, Zap, Users, Globe, Phone, Mail,
  MapPin, ArrowRight, Sparkles, Brain, Server, Cloud, Robot
} from 'lucide-react';

// Comprehensive Pricing Guide
const pricingPlans = {
  microSAAS: {
    title: 'Micro SAAS Solutions',
    description: 'Specialized business applications for specific needs',
    plans: [
      {
        name: 'Starter',
        price: '$99',
        period: '/month',
        description: 'Perfect for small businesses and startups',
        features: [
          'Core functionality',
          'Basic support',
          'Standard integrations',
          'Community forum access'
        ],
        popular: false
      },
      {
        name: 'Professional',
        price: '$299',
        period: '/month',
        description: 'Ideal for growing businesses',
        features: [
          'Advanced features',
          'Priority support',
          'Custom integrations',
          'API access',
          'Advanced analytics'
        ],
        popular: true
      },
      {
        name: 'Enterprise',
        price: '$799',
        period: '/month',
        description: 'For large organizations',
        features: [
          'All features',
          '24/7 dedicated support',
          'Custom development',
          'White-label options',
          'SLA guarantees',
          'On-premise deployment'
        ],
        popular: false
      }
    ]
  },
  aiServices: {
    title: 'AI & Machine Learning',
    description: 'Cutting-edge artificial intelligence solutions',
    plans: [
      {
        name: 'Starter',
        price: '$199',
        period: '/month',
        description: 'Basic AI capabilities for small teams',
        features: [
          'Pre-trained models',
          'Basic API access',
          'Email support',
          'Standard security'
        ],
        popular: false
      },
      {
        name: 'Professional',
        price: '$599',
        period: '/month',
        description: 'Advanced AI for growing companies',
        features: [
          'Custom model training',
          'Advanced analytics',
          'Priority support',
          'Enhanced security',
          'Multi-user access'
        ],
        popular: true
      },
      {
        name: 'Enterprise',
        price: '$1,999',
        period: '/month',
        description: 'Full AI platform for enterprises',
        features: [
          'Custom AI development',
          'Dedicated support team',
          'Advanced security',
          'Compliance features',
          'SLA guarantees'
        ],
        popular: false
      }
    ]
  },
  itServices: {
    title: 'IT Infrastructure & Security',
    description: 'Enterprise-grade IT solutions and cybersecurity',
    plans: [
      {
        name: 'Managed Services',
        price: '$2,999',
        period: '/month',
        description: 'Complete IT infrastructure management',
        features: [
          '24/7 monitoring',
          'Proactive maintenance',
          'Help desk support',
          'Security management',
          'Backup & recovery'
        ],
        popular: false
      },
      {
        name: 'Cybersecurity Suite',
        price: '$4,999',
        period: '/month',
        description: 'Comprehensive security solutions',
        features: [
          'Threat detection',
          'Vulnerability assessment',
          'Security training',
          'Compliance management',
          'Incident response'
        ],
        popular: true
      },
      {
        name: 'Cloud Migration',
        price: '$50,000',
        period: 'one-time',
        description: 'End-to-end cloud transformation',
        features: [
          'Strategy planning',
          'Migration execution',
          'Performance optimization',
          'Security implementation',
          'Training & support'
        ],
        popular: false
      }
    ]
  }
};

// Contact Information
const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

// Benefits
const benefits = [
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level security and compliance'
  },
  {
    icon: Zap,
    title: 'Rapid Deployment',
    description: 'Get up and running in days, not months'
  },
  {
    icon: CheckCircle,
    title: 'Proven ROI',
    description: 'See measurable results within 30-60 days'
  },
  {
    icon: Users,
    title: 'Expert Support',
    description: '24/7 dedicated support team'
  }
];

export default function ComprehensivePricingGuide2025() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-blue">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zion-cyan/20 border border-zion-cyan/30 text-zion-cyan text-sm font-medium mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Sparkles className="w-4 h-4" />
              2025 Comprehensive Pricing Guide
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Transparent
              <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Pricing Guide
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 leading-relaxed">
              Clear, competitive pricing for all our services. 
              No hidden fees, no surprises - just exceptional value.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-dark hover:to-zion-purple-dark text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25"
              >
                Get Custom Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={`tel:${contactInfo.mobile}`}
                className="inline-flex items-center gap-2 border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark px-8 py-4 rounded-xl font-semibold transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Call for Pricing
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-zion-blue-dark/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-8 text-center hover:border-zion-cyan/40 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-zion-slate-light">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tables */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {Object.entries(pricingPlans).map(([key, service], serviceIndex) => (
            <motion.div
              key={key}
              className="mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: serviceIndex * 0.2 }}
            >
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {service.title}
                </h2>
                <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                  {service.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {service.plans.map((plan, planIndex) => (
                  <motion.div
                    key={plan.name}
                    className={`relative bg-zion-blue-dark/50 backdrop-blur-sm border rounded-2xl p-8 ${
                      plan.popular 
                        ? 'border-zion-cyan/50 bg-zion-cyan/10' 
                        : 'border-zion-cyan/20'
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: planIndex * 0.1 }}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-4 py-2 rounded-full text-sm font-semibold">
                          Most Popular
                        </span>
                      </div>
                    )}

                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <div className="mb-4">
                        <span className="text-4xl font-bold text-zion-cyan">{plan.price}</span>
                        <span className="text-zion-slate-light">{plan.period}</span>
                      </div>
                      <p className="text-zion-slate-light">{plan.description}</p>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                          <span className="text-zion-slate-light">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      to="/contact"
                      className={`w-full py-3 px-6 rounded-xl font-semibold text-center transition-all duration-300 block ${
                        plan.popular
                          ? 'bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-dark hover:to-zion-purple-dark text-white transform hover:scale-105'
                          : 'border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark'
                      }`}
                    >
                      Get Started
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Market Comparison */}
      <section className="py-20 bg-zion-blue-dark/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Competitive
              <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Market Pricing
              </span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              See how our pricing compares to industry standards
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Market Price Comparison</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-zion-cyan mb-4">Our Pricing</h4>
                  <ul className="space-y-3">
                    <li className="flex justify-between">
                      <span className="text-zion-slate-light">Micro SAAS Starter:</span>
                      <span className="text-white font-semibold">$99/month</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-zion-slate-light">AI Services Starter:</span>
                      <span className="text-white font-semibold">$199/month</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-zion-slate-light">IT Managed Services:</span>
                      <span className="text-white font-semibold">$2,999/month</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-zion-cyan mb-4">Market Average</h4>
                  <ul className="space-y-3">
                    <li className="flex justify-between">
                      <span className="text-zion-slate-light">Micro SAAS Starter:</span>
                      <span className="text-white font-semibold">$150-300/month</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-zion-slate-light">AI Services Starter:</span>
                      <span className="text-white font-semibold">$300-800/month</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-zion-slate-light">IT Managed Services:</span>
                      <span className="text-white font-semibold">$3,000-15,000/month</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="text-center mt-6">
                <p className="text-zion-cyan font-semibold">
                  ✓ Our pricing is 20-40% below market average
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Need a
              <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Custom Quote?
              </span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Contact us for personalized pricing and enterprise solutions
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-8 text-center">
                <Phone className="w-16 h-16 text-zion-cyan mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
                <a href={`tel:${contactInfo.mobile}`} className="text-zion-cyan hover:text-zion-cyan-light transition-colors">
                  {contactInfo.mobile}
                </a>
              </div>
              <div className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-8 text-center">
                <Mail className="w-16 h-16 text-zion-cyan mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                <a href={`mailto:${contactInfo.email}`} className="text-zion-cyan hover:text-zion-cyan-light transition-colors">
                  {contactInfo.email}
                </a>
              </div>
              <div className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-8 text-center">
                <MapPin className="w-16 h-16 text-zion-cyan mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
                <span className="text-zion-slate-light text-sm">{contactInfo.address}</span>
              </div>
            </div>

            <div className="text-center">
              <p className="text-zion-slate-light mb-4">
                All our services come with a 30-day free trial and money-back guarantee.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <span className="px-4 py-2 bg-zion-cyan/20 text-zion-cyan rounded-full text-sm">
                  ✓ 30-Day Free Trial
                </span>
                <span className="px-4 py-2 bg-zion-cyan/20 text-zion-cyan rounded-full text-sm">
                  ✓ Money-Back Guarantee
                </span>
                <span className="px-4 py-2 bg-zion-cyan/20 text-zion-cyan rounded-full text-sm">
                  ✓ No Setup Fees
                </span>
                <span className="px-4 py-2 bg-zion-cyan/20 text-zion-cyan rounded-full text-sm">
                  ✓ Flexible Contracts
                </span>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-dark hover:to-zion-purple-dark text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Get Your Custom Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
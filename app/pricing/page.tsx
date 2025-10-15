import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  CheckCircle, 
  Star, 
  ArrowRight, 
  Phone, 
  Mail,
  Zap,
  Shield,
  Clock,
  Users,
  Award,
  DollarSign,
  Brain,
  Cloud,
  BarChart3,
  Smartphone,
  Globe,
  Target,
  Rocket
} from 'lucide-react';

const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const microSaasPlans = [
    {
      name: 'Starter',
      price: { monthly: '$29', yearly: '$290' },
      description: 'Perfect for small businesses and startups',
      icon: Zap,
      color: 'from-blue-500 to-cyan-500',
      features: [
        '10,000 words/month',
        '5 languages supported',
        'Basic SEO optimization',
        'Email support',
        'Standard templates',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: { monthly: '$79', yearly: '$790' },
      description: 'Ideal for growing businesses',
      icon: Target,
      color: 'from-purple-500 to-pink-500',
      features: [
        '50,000 words/month',
        '20 languages supported',
        'Advanced SEO features',
        'Priority support',
        'API access',
        'Custom templates',
        'Advanced analytics',
        'Team collaboration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: { monthly: '$199', yearly: '$1990' },
      description: 'For large organizations',
      icon: Rocket,
      color: 'from-green-500 to-emerald-500',
      features: [
        'Unlimited words',
        'All languages supported',
        'Custom AI training',
        'Dedicated support',
        'White-label options',
        'Custom integrations',
        'Advanced security',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const aiServicesPlans = [
    {
      name: 'Basic AI',
      price: { monthly: '$1,499', yearly: '$14,990' },
      description: 'Essential AI automation',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      features: [
        'Up to 5 AI processes',
        'Basic ML models',
        'Email support',
        'Standard infrastructure',
        'Monthly reports',
        'Basic training'
      ],
      popular: false
    },
    {
      name: 'Advanced AI',
      price: { monthly: '$4,999', yearly: '$49,990' },
      description: 'Comprehensive AI solutions',
      icon: Target,
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Up to 25 AI processes',
        'Advanced ML models',
        'Priority support',
        'Enhanced infrastructure',
        'Weekly reports',
        'Advanced training',
        'Custom integrations',
        'Performance monitoring'
      ],
      popular: true
    },
    {
      name: 'Enterprise AI',
      price: { monthly: '$12,999', yearly: '$129,990' },
      description: 'Full-scale AI transformation',
      icon: Rocket,
      color: 'from-green-500 to-emerald-500',
      features: [
        'Unlimited AI processes',
        'Custom AI models',
        'Dedicated support',
        'Private cloud',
        'Real-time monitoring',
        'Custom training',
        'White-label options',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const itServicesPlans = [
    {
      name: 'Standard IT',
      price: { monthly: '$2,999', yearly: '$29,990' },
      description: 'Essential IT services',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Basic cloud migration',
        'Standard security',
        'Email support',
        'Monthly maintenance',
        'Basic monitoring',
        'Standard SLA'
      ],
      popular: false
    },
    {
      name: 'Professional IT',
      price: { monthly: '$7,999', yearly: '$79,990' },
      description: 'Comprehensive IT solutions',
      icon: Target,
      color: 'from-purple-500 to-pink-500',
      features: [
        'Advanced cloud services',
        'Enhanced security',
        'Priority support',
        'Weekly maintenance',
        'Advanced monitoring',
        '99.9% SLA',
        'Custom integrations',
        'Performance optimization'
      ],
      popular: true
    },
    {
      name: 'Enterprise IT',
      price: { monthly: '$19,999', yearly: '$199,990' },
      description: 'Complete IT transformation',
      icon: Rocket,
      color: 'from-green-500 to-emerald-500',
      features: [
        'Complete cloud suite',
        'Enterprise security',
        'Dedicated support',
        '24/7 monitoring',
        '99.99% SLA',
        'Custom solutions',
        'White-label options',
        'Compliance guarantee'
      ],
      popular: false
    }
  ];

  const addOns = [
    {
      name: '24/7 Premium Support',
      price: { monthly: '$999', yearly: '$9,990' },
      description: 'Round-the-clock dedicated support',
      icon: Clock
    },
    {
      name: 'Custom Development',
      price: { monthly: '$2,999', yearly: '$29,990' },
      description: 'Bespoke software development',
      icon: Globe
    },
    {
      name: 'Security Audit',
      price: { monthly: '$1,499', yearly: '$14,990' },
      description: 'Comprehensive security assessment',
      icon: Shield
    },
    {
      name: 'Training & Consulting',
      price: { monthly: '$799', yearly: '$7,990' },
      description: 'Team training and technology consulting',
      icon: Users
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with SOC 2 compliance'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock technical support'
    },
    {
      icon: Award,
      title: 'SLA Guarantee',
      description: '99.9% uptime guarantee on all services'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Certified professionals with 10+ years experience'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for AI and IT services. Micro SAAS from $29/month, AI services from $1,499/month, IT services from $2,999/month. Free consultation available." />
        <meta name="keywords" content="pricing, ai services pricing, it services pricing, micro saas pricing, technology solutions cost" />
        <link rel="canonical" href="https://ziontechgroup.com/pricing" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Transparent Pricing
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose the perfect plan for your business needs. All plans include our core features 
              with the flexibility to scale as you grow.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center mb-8">
              <span className={`mr-3 ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  billingCycle === 'yearly' ? 'bg-blue-600' : 'bg-gray-600'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`ml-3 ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
                Yearly
                <span className="ml-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                  Save 20%
                </span>
              </span>
            </div>
          </div>

          {/* Micro SAAS Pricing */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Micro SAAS Solutions</h2>
              <p className="text-gray-300">AI-powered tools for content creation, project management, and automation</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {microSaasPlans.map((plan, index) => (
                <div key={index} className={`bg-white/5 backdrop-blur-md rounded-xl border overflow-hidden transition-all duration-300 hover:border-white/20 ${
                  plan.popular ? 'border-blue-500/50 ring-2 ring-blue-500/20' : 'border-white/10'
                }`}>
                  {plan.popular && (
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center py-2 text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  <div className="p-8">
                    <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-lg flex items-center justify-center mb-6`}>
                      <plan.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-6">{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-white">
                        {billingCycle === 'monthly' ? plan.price.monthly : plan.price.yearly}
                      </span>
                      <span className="text-gray-400 ml-2">
                        /{billingCycle === 'monthly' ? 'month' : 'year'}
                      </span>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href="tel:+13024640950"
                      className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transform hover:scale-105'
                          : 'border border-white/30 hover:bg-white/10 text-white'
                      }`}
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Services Pricing */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">AI Services</h2>
              <p className="text-gray-300">Advanced artificial intelligence solutions for automation and analytics</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {aiServicesPlans.map((plan, index) => (
                <div key={index} className={`bg-white/5 backdrop-blur-md rounded-xl border overflow-hidden transition-all duration-300 hover:border-white/20 ${
                  plan.popular ? 'border-purple-500/50 ring-2 ring-purple-500/20' : 'border-white/10'
                }`}>
                  {plan.popular && (
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center py-2 text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  <div className="p-8">
                    <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-lg flex items-center justify-center mb-6`}>
                      <plan.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-6">{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-white">
                        {billingCycle === 'monthly' ? plan.price.monthly : plan.price.yearly}
                      </span>
                      <span className="text-gray-400 ml-2">
                        /{billingCycle === 'monthly' ? 'month' : 'year'}
                      </span>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href="tel:+13024640950"
                      className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white transform hover:scale-105'
                          : 'border border-white/30 hover:bg-white/10 text-white'
                      }`}
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* IT Services Pricing */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">IT Services</h2>
              <p className="text-gray-300">Complete IT solutions including cloud migration, cybersecurity, and development</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {itServicesPlans.map((plan, index) => (
                <div key={index} className={`bg-white/5 backdrop-blur-md rounded-xl border overflow-hidden transition-all duration-300 hover:border-white/20 ${
                  plan.popular ? 'border-green-500/50 ring-2 ring-green-500/20' : 'border-white/10'
                }`}>
                  {plan.popular && (
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-center py-2 text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  <div className="p-8">
                    <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-lg flex items-center justify-center mb-6`}>
                      <plan.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-6">{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-white">
                        {billingCycle === 'monthly' ? plan.price.monthly : plan.price.yearly}
                      </span>
                      <span className="text-gray-400 ml-2">
                        /{billingCycle === 'monthly' ? 'month' : 'year'}
                      </span>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href="tel:+13024640950"
                      className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white transform hover:scale-105'
                          : 'border border-white/30 hover:bg-white/10 text-white'
                      }`}
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Add-ons */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Add-on Services</h2>
              <p className="text-gray-300">Enhance your plan with additional services</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {addOns.map((addon, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-md rounded-lg border border-white/10 p-6 hover:bg-white/10 transition-all duration-300">
                  <addon.icon className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">{addon.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{addon.description}</p>
                  <div className="text-2xl font-bold text-white mb-4">
                    {billingCycle === 'monthly' ? addon.price.monthly : addon.price.yearly}
                    <span className="text-gray-400 text-sm ml-1">
                      /{billingCycle === 'monthly' ? 'month' : 'year'}
                    </span>
                  </div>
                  <a
                    href="tel:+13024640950"
                    className="w-full block text-center border border-white/30 hover:bg-white/10 text-white py-2 px-4 rounded-lg font-semibold transition-all duration-300"
                  >
                    Add Service
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Our Pricing?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center">
                  <benefit.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-md rounded-xl border border-white/10 p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Every business is unique. Contact us for a personalized quote tailored to your specific needs and requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="border border-white/30 hover:bg-white/10 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get Custom Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingPage;
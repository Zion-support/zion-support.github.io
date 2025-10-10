'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  ArrowRight, 
  Star,
  Zap,
  Shield,
  BarChart3,
  Users,
  Clock,
  Award,
  Target,
  Globe,
  Brain,
  Cloud,
  Database
} from 'lucide-react';

const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const pricingPlans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses getting started with AI',
      price: { monthly: '$299', yearly: '$2,999' },
      originalPrice: { monthly: '$499', yearly: '$4,999' },
      icon: Zap,
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Up to 5 AI models',
        'Basic analytics dashboard',
        'Email support',
        'Standard integrations',
        '1TB data processing',
        'Basic security features'
      ],
      limitations: [
        'Limited customization',
        'No phone support',
        'Basic reporting only'
      ],
      popular: false
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses with advanced needs',
      price: { monthly: '$799', yearly: '$7,999' },
      originalPrice: { monthly: '$1,299', yearly: '$12,999' },
      icon: Target,
      color: 'from-purple-500 to-pink-500',
      features: [
        'Up to 25 AI models',
        'Advanced analytics dashboard',
        'Priority support',
        'Custom integrations',
        '10TB data processing',
        'Advanced security features',
        'Custom model training',
        'API access',
        'Team collaboration tools'
      ],
      limitations: [
        'Limited custom development',
        'Standard SLA'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      description: 'Complete solution for large organizations',
      price: { monthly: '$1,999', yearly: '$19,999' },
      originalPrice: { monthly: '$3,999', yearly: '$39,999' },
      icon: Award,
      color: 'from-cyan-500 to-blue-500',
      features: [
        'Unlimited AI models',
        'Custom analytics dashboard',
        '24/7 dedicated support',
        'Unlimited integrations',
        'Unlimited data processing',
        'Enterprise security features',
        'Custom model development',
        'Full API access',
        'Advanced team collaboration',
        'Custom SLA',
        'Dedicated account manager',
        'On-premise deployment option'
      ],
      limitations: [],
      popular: false
    }
  ];

  const microSaasPlans = [
    {
      name: 'AI Writing Assistant',
      price: '$49/month',
      features: ['50+ templates', 'SEO optimization', 'Multi-language', 'Team collaboration'],
      icon: Brain
    },
    {
      name: 'AI Analytics Dashboard',
      price: '$149/month',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Mobile app'],
      icon: BarChart3
    },
    {
      name: 'AI CRM Suite',
      price: '$199/month',
      features: ['Lead management', 'Email automation', 'Sales forecasting', 'Integration APIs'],
      icon: Users
    },
    {
      name: 'Cloud Infrastructure',
      price: '$1,299/month',
      features: ['Cloud migration', 'Auto-scaling', 'Disaster recovery', '24/7 monitoring'],
      icon: Cloud
    },
    {
      name: 'Security Monitoring',
      price: '$199/month',
      features: ['Threat detection', 'Vulnerability scanning', 'Compliance reporting', '24/7 monitoring'],
      icon: Shield
    },
    {
      name: 'Database Services',
      price: '$399/month',
      features: ['Database design', 'Performance tuning', 'Backup & recovery', 'AI optimization'],
      icon: Database
    }
  ];

  const addOns = [
    {
      name: 'Additional AI Models',
      price: '$99/month per model',
      description: 'Add more AI models to your plan'
    },
    {
      name: 'Extra Data Processing',
      price: '$0.10 per GB',
      description: 'Process additional data beyond your plan limit'
    },
    {
      name: 'Priority Support',
      price: '$199/month',
      description: 'Get priority support with faster response times'
    },
    {
      name: 'Custom Development',
      price: '$299/hour',
      description: 'Custom AI development and integration services'
    },
    {
      name: 'Training & Consulting',
      price: '$199/hour',
      description: 'AI training and strategic consulting services'
    },
    {
      name: 'On-premise Deployment',
      price: 'Custom pricing',
      description: 'Deploy AI solutions on your own infrastructure'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group | AI and IT Solutions Pricing</title>
        <meta name="description" content="Transparent pricing for our AI and IT solutions. Choose the plan that fits your business needs with flexible options and no hidden fees." />
        <meta name="keywords" content="pricing, AI services pricing, cloud services pricing, micro saas pricing, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include free trials and no setup fees.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center mb-8">
              <span className={`text-lg font-medium ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className="mx-4 relative inline-flex h-6 w-11 items-center rounded-full bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-lg font-medium ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
                Yearly
              </span>
              {billingCycle === 'yearly' && (
                <span className="ml-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                  Save 20%
                </span>
              )}
            </div>
          </div>
        </section>

        {/* Main Pricing Plans */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              AI & IT Services Plans
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 ${plan.popular ? 'ring-2 ring-cyan-500' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <plan.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-white">
                        {billingCycle === 'monthly' ? plan.price.monthly : plan.price.yearly}
                      </span>
                      <span className="text-gray-400 ml-2">
                        /{billingCycle === 'monthly' ? 'month' : 'year'}
                      </span>
                    </div>
                    {plan.originalPrice && (
                      <div className="text-gray-400 line-through">
                        {billingCycle === 'monthly' ? plan.originalPrice.monthly : plan.originalPrice.yearly}
                      </div>
                    )}
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-white mb-4">What's included:</h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-8">
                    {plan.limitations.length > 0 && (
                      <>
                        <h4 className="text-lg font-semibold text-white mb-4">Limitations:</h4>
                        <ul className="space-y-2">
                          {plan.limitations.map((limitation, limitationIndex) => (
                            <li key={limitationIndex} className="text-gray-400 text-sm">
                              • {limitation}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                  
                  <button className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white'
                      : 'border border-white/20 text-white hover:bg-white/10'
                  }`}>
                    Start Free Trial
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Micro SAAS Pricing */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Micro SAAS Solutions
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {microSaasPlans.map((plan, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mr-4">
                      <plan.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{plan.name}</h3>
                      <div className="text-2xl font-bold text-cyan-400">{plan.price}</div>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300">
                    Start Free Trial
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-ons */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Add-on Services
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {addOns.map((addon, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                  <h3 className="text-lg font-bold text-white mb-2">{addon.name}</h3>
                  <div className="text-2xl font-bold text-cyan-400 mb-2">{addon.price}</div>
                  <p className="text-gray-300 text-sm mb-4">{addon.description}</p>
                  <button className="w-full border border-white/20 text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition-all duration-300">
                    Add to Plan
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-2">Do you offer free trials?</h3>
                <p className="text-gray-300">Yes! All our plans come with free trials. Most plans offer 14-30 day free trials with full access to features.</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-2">Can I change plans anytime?</h3>
                <p className="text-gray-300">Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately and we'll prorate any billing differences.</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-2">What payment methods do you accept?</h3>
                <p className="text-gray-300">We accept all major credit cards, PayPal, and bank transfers for enterprise plans. All payments are processed securely.</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-2">Is there a setup fee?</h3>
                <p className="text-gray-300">No setup fees! We believe in transparent pricing. You only pay for your chosen plan and any add-on services.</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-2">Do you offer custom pricing?</h3>
                <p className="text-gray-300">Yes! For enterprise customers with specific needs, we offer custom pricing and solutions. Contact us to discuss your requirements.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Choose your plan and start your free trial today. No credit card required for most plans.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Zap className="w-5 h-5" />
                  <span>Start Free Trial</span>
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PricingPage;
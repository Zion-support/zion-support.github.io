'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

const PricingPage: React.FC = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI',
      features: [
        'Up to 5 users',
        'Basic AI features',
        'Email support',
        'Standard integrations',
        'Basic analytics',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Ideal for growing companies with advanced needs',
      features: [
        'Up to 25 users',
        'Advanced AI features',
        'Priority support',
        'Full integrations',
        'Advanced analytics',
        'API access',
        'Custom workflows',
        'White-label options'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'For large organizations with complex requirements',
      features: [
        'Unlimited users',
        'Premium AI features',
        'Dedicated support',
        'Custom development',
        'Advanced security',
        'SLA guarantee',
        'Dedicated account manager',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  const addOns = [
    {
      name: 'AI Voice Assistant',
      price: '$299/month',
      description: 'Advanced voice AI platform with natural language processing'
    },
    {
      name: 'AI Analytics Dashboard',
      price: '$199/month',
      description: 'Real-time business intelligence with AI-powered insights'
    },
    {
      name: 'AI Content Studio',
      price: '$299/month',
      description: 'Complete content creation suite with AI writing and design'
    },
    {
      name: 'AI-Powered CRM',
      price: '$149/month',
      description: 'Intelligent customer relationship management system'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group | Transparent AI & IT Solutions Pricing</title>
        <meta name="description" content="Transparent pricing for AI and IT solutions. Choose from Starter, Professional, or Enterprise plans. No hidden fees, cancel anytime." />
        <meta name="keywords" content="AI pricing, IT services pricing, transparent pricing, AI solutions cost, enterprise AI pricing" />
        <meta property="og:title" content="Pricing - Zion Tech Group" />
        <meta property="og:description" content="Transparent pricing for AI and IT solutions" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/pricing" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Transparent Pricing
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose the perfect plan for your business needs. All plans include our core AI and IT solutions with transparent, no-hidden-fees pricing.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div
                  key={plan.name}
                  className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 ${
                    plan.popular 
                      ? 'border-cyan-500/50 ring-2 ring-cyan-500/20 scale-105' 
                      : 'border-white/10 hover:border-cyan-500/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                        <Star className="w-4 h-4 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-6">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600 transform hover:scale-105'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}>
                    {plan.popular ? 'Start Free Trial' : 'Get Started'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-ons Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Add-on Services</h2>
              <p className="text-gray-300">Enhance your plan with additional AI-powered tools</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {addOns.map((addOn, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-white mb-2">{addOn.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{addOn.description}</p>
                  <div className="text-2xl font-bold text-cyan-400 mb-4">{addOn.price}</div>
                  <button className="w-full py-2 px-4 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-colors">
                    Add to Plan
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-300">Everything you need to know about our pricing</p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-2">Can I change my plan anytime?</h3>
                <p className="text-gray-300">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and we'll prorate any billing differences.</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-2">Is there a free trial?</h3>
                <p className="text-gray-300">Yes, all plans come with a 14-day free trial. No credit card required to get started.</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-2">What payment methods do you accept?</h3>
                <p className="text-gray-300">We accept all major credit cards, PayPal, and bank transfers for Enterprise plans.</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-2">Do you offer custom pricing?</h3>
                <p className="text-gray-300">Yes, we offer custom pricing for Enterprise customers with specific requirements. Contact our sales team for more information.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-12 border border-cyan-500/20">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of businesses already using our AI and IT solutions to transform their operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Get in Touch</h2>
              <p className="text-gray-300">Have questions about pricing? We're here to help.</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Phone</p>
                    <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 font-semibold text-lg">
                      +1 (302) 464-0950
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Email</p>
                    <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 font-semibold text-lg">
                      kleber@ziontechgroup.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Address</p>
                    <p className="text-white font-semibold">
                      364 E Main St STE 1008<br />
                      Middletown, DE 19709
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">Request a Quote</h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      placeholder="Enter your company name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="plan" className="block text-sm font-medium text-gray-300 mb-2">
                      Interested Plan
                    </label>
                    <select
                      id="plan"
                      name="plan"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    >
                      <option value="">Select a plan</option>
                      <option value="starter">Starter - $299/month</option>
                      <option value="professional">Professional - $799/month</option>
                      <option value="enterprise">Enterprise - $1,999/month</option>
                      <option value="custom">Custom Pricing</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      placeholder="Tell us about your needs"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Request Quote
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PricingPage;
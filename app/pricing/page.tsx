'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, ArrowRight, Zap } from 'lucide-react';

const PricingPage: React.FC = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$2,999',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI',
      features: [
        'Basic AI Integration',
        'Cloud Infrastructure Setup',
        'Email Support',
        'Monthly Reports',
        'Basic Analytics Dashboard'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$7,999',
      period: '/month',
      description: 'Ideal for growing companies with advanced needs',
      features: [
        'Advanced AI Solutions',
        'Custom Development',
        'Priority Support',
        'Weekly Reports',
        'Advanced Analytics',
        'API Access',
        'Training Sessions'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      features: [
        'Custom AI Solutions',
        'Dedicated Team',
        '24/7 Support',
        'Real-time Monitoring',
        'Custom Integrations',
        'White-label Options',
        'On-site Training',
        'SLA Guarantee'
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group | Transparent AI & IT Pricing</title>
        <meta name="description" content="Transparent pricing for AI and IT solutions. Choose from Starter, Professional, or Enterprise plans. Custom solutions available. Get started today." />
        <meta name="keywords" content="AI pricing, IT services pricing, cloud solutions cost, enterprise AI pricing, custom development pricing" />
      </Helmet>
<<<<<<< HEAD

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              Simple,
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                {' '}Transparent
              </span>
              {' '}Pricing
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include 
              our core AI and IT services with no hidden fees.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 ${
                  plan.popular
                    ? 'border-cyan-500 bg-cyan-500/10 scale-105'
                    : 'border-white/10 hover:bg-white/10'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                      <Star className="w-4 h-4" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-5xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/consultation"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
=======
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <Header />
        
        <main className="pt-24">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-16"></div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6"></h1>
                Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Pricing</span>
              </h1>
              <p className="text-xl text-cyan-400 mb-8 max-w-4xl mx-auto">
                Choose the perfect plan for your business needs. All plans include our commitment to excellence and 24/7 support.
              </p>
            </div>
          </section>

          {/* Plan Selection */}
          <section className="container mx-auto px-4 py-8">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {pricingPlans.map((plan) => (</div>
                <button
                  key={plan.id}
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedPlan === plan.id
                      ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  <plan.icon className="w-5 h-5" />
                  <span>{plan.name}</span>
                </button>
              ))}
            </div>
          </section>

          {/* Billing Toggle */}
          <section className="container mx-auto px-4 py-4">
            <div className="flex justify-center mb-8"></div>
              <div className="bg-white/10 rounded-lg p-1 flex"></div>
                <button
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-6 py-2 rounded-md font-semibold transition-all duration-300 ${
                    billingCycle === 'monthly'
                      ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingCycle('yearly')}
                  className={`px-6 py-2 rounded-md font-semibold transition-all duration-300 ${
                    billingCycle === 'yearly'
                      ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Yearly
                  <span className="ml-2 px-2 py-1 bg-green-500 text-white text-xs rounded-full">Save 20%</span>
                </button>
              </div>
            </div>
          </section>

          {/* Pricing Cards */}
          <section className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {getCurrentPricing().map((plan, index) => (</div>
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-lg rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'border border-white/20 text-white hover:bg-white/10'
                  }`}
                >
<<<<<<< HEAD
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
=======
                  {plan.popular && (</div>
                    <div className="flex justify-center mb-4"></div>
                      <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-cyan-600 to-purple-600 text-white">
                        <Star className="w-4 h-4 mr-2" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8"></div>
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4"></div>
                      <plan.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center"></div>
                      <span className="text-5xl font-bold text-cyan-400">
                        ${billingCycle === 'yearly' ? plan.price.yearly : plan.price.monthly}
                      </span>
                      <span className="text-gray-400 ml-2">
                        /{billingCycle === 'yearly' ? 'year' : 'month'}
                      </span>
                    </div>
                    {billingCycle === 'yearly' && (
                      <p className="text-green-400 text-sm mt-2">Save ${(plan.price.monthly * 12) - plan.price.yearly} per year</p>
                    )}
                  </div>

                  <div className="space-y-4 mb-8"></div>
                    <h4 className="text-lg font-semibold text-white mb-4">What's included:</h4>
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-gray-300"></div>
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {plan.limitations.length > 0 && (
                    <div className="space-y-2 mb-8"></div>
                      <h4 className="text-lg font-semibold text-white mb-4">Limitations:</h4>
                      {plan.limitations.map((limitation, limitationIndex) => (
                        <div key={limitationIndex} className="flex items-center text-gray-400"></div>
                          <X className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                          <span>{limitation}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <a
                    href={plan.link}
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 transform hover:scale-105 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white hover:from-cyan-700 hover:to-purple-700'
                        : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto"></div>
              <h2 className="text-4xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
              <div className="space-y-6"></div>
                <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6"></div>
                  <h3 className="text-xl font-semibold text-white mb-3">Can I change plans anytime?</h3>
                  <p className="text-gray-300">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6"></div>
                  <h3 className="text-xl font-semibold text-white mb-3">Do you offer custom pricing?</h3>
                  <p className="text-gray-300">Yes, we offer custom pricing for enterprise clients with specific requirements. Contact our sales team to discuss your needs.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6"></div>
                  <h3 className="text-xl font-semibold text-white mb-3">What's included in support?</h3>
                  <p className="text-gray-300">All plans include email support. Professional and Enterprise plans include phone support, and Enterprise includes 24/7 dedicated support.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6"></div>
                  <h3 className="text-xl font-semibold text-white mb-3">Is there a free trial?</h3>
                  <p className="text-gray-300">Yes, we offer a 14-day free trial for all plans. No credit card required to start your trial.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6"></div>
                  <h3 className="text-xl font-semibold text-white mb-3">What payment methods do you accept?</h3>
                  <p className="text-gray-300">We accept all major credit cards, PayPal, and bank transfers for annual plans. Enterprise clients can also pay via invoice.</p>
                </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">What's Included</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">Free initial consultation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">30-day money-back guarantee</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">No setup fees</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">Flexible payment options</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">Custom Solutions</h3>
              <p className="text-gray-300 mb-4">
                Need something specific? We offer custom AI and IT solutions 
                tailored to your unique business requirements.
              </p>
              <Link
                to="/contact"
                className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center space-x-2"
              >
                <span>Contact us for a quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* CTA Section */}
<<<<<<< HEAD
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-12 text-center backdrop-blur-lg border border-white/10">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of companies already achieving remarkable results with our AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/consultation"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Zap className="w-5 h-5" />
                <span>Start Free Trial</span>
              </Link>
              <Link
                to="/contact"
                className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Talk to Sales
              </Link>
=======
          <section className="container mx-auto px-4 py-16">
            <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg p-12 text-center"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join thousands of businesses that trust Zion Tech Group for their AI and IT needs. 
                Start your free trial today or contact us for a custom solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                >
                  Start Free Trial
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
                </a>
              </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingPage;
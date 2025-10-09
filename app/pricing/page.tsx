import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Star, ArrowRight, Zap, Shield, Code, BarChart, Users } from 'lucide-react';

const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses getting started with AI',
      price: { monthly: 999, yearly: 9999 },
      icon: Zap,
      features: [
        'Basic AI Automation',
        'Email Support',
        'Standard Analytics',
        'Up to 5 Users',
        'Basic Integration'
      ],
      popular: false
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses with advanced needs',
      price: { monthly: 2499, yearly: 24999 },
      icon: Shield,
      features: [
        'Advanced AI Solutions',
        'Priority Support',
        'Advanced Analytics',
        'Up to 25 Users',
        'API Access',
        'Custom Integrations',
        'Training & Onboarding'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      description: 'Comprehensive solution for large organizations',
      price: { monthly: 4999, yearly: 49999 },
      icon: Code,
      features: [
        'Full AI Suite',
        '24/7 Dedicated Support',
        'Custom Analytics',
        'Unlimited Users',
        'Full API Access',
        'Custom Development',
        'Dedicated Account Manager',
        'SLA Guarantee'
      ],
      popular: false
    }
  ];

  const addOns = [
    {
      name: 'AI Data Analytics',
      description: 'Advanced analytics and reporting',
      price: { monthly: 499, yearly: 4999 },
      icon: BarChart
    },
    {
      name: 'AI Customer Support',
      description: 'Intelligent customer support solutions',
      price: { monthly: 299, yearly: 2999 },
      icon: Users
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for AI and IT solutions. Choose the plan that fits your business needs." />
        <meta name="keywords" content="pricing, AI solutions, IT services, enterprise pricing" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Simple, <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Transparent</span> Pricing
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose the perfect plan for your business. All plans include our core AI and IT solutions with no hidden fees.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center mb-12">
              <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>Monthly</span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className="mx-4 relative inline-flex h-6 w-11 items-center rounded-full bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
              >
                <span
                  className={`${
                    billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                  } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                />
              </button>
              <span className={`text-lg ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
                Yearly <span className="text-cyan-400 text-sm">(Save 20%)</span>
              </span>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-lg rounded-xl p-8 border transition-all duration-300 ${
                    plan.popular
                      ? 'border-cyan-400/50 scale-105'
                      : 'border-white/20 hover:border-cyan-400/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-400 to-purple-400 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <div className="text-cyan-400 mb-4">
                      <plan.icon className="w-12 h-12 mx-auto" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-6">{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-5xl font-bold text-white">
                        ${billingCycle === 'monthly' ? plan.price.monthly : plan.price.yearly}
                      </span>
                      <span className="text-gray-400 ml-2">
                        /{billingCycle === 'monthly' ? 'month' : 'year'}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white hover:from-cyan-700 hover:to-purple-700 transform hover:scale-105'
                        : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-ons Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Additional <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Enhance your plan with these powerful add-ons designed to supercharge your business.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {addOns.map((addon, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className="text-cyan-400 mr-4">
                        <addon.icon className="w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{addon.name}</h3>
                        <p className="text-gray-300">{addon.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">
                        ${billingCycle === 'monthly' ? addon.price.monthly : addon.price.yearly}
                      </div>
                      <div className="text-gray-400 text-sm">
                        /{billingCycle === 'monthly' ? 'month' : 'year'}
                      </div>
                    </div>
                  </div>
                  <button className="w-full py-2 px-4 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                    Add to Plan
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Questions</span>
              </h2>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-4">Can I change my plan anytime?</h3>
                <p className="text-gray-300">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences.</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-4">Do you offer custom solutions?</h3>
                <p className="text-gray-300">Absolutely! We provide custom AI and IT solutions tailored to your specific business needs. Contact us for a personalized quote.</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-4">What support do you provide?</h3>
                <p className="text-gray-300">We offer comprehensive support including email support, priority support for Professional plans, and 24/7 dedicated support for Enterprise customers.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Choose your plan and start transforming your business with AI and IT solutions today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Call (302) 464-0950
              </a>
              <a
                href="/contact"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default PricingPage;

'use client';
import React, { useState } from 'react';
import { Check, X, Star } from 'lucide-react';

const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses getting started',
      monthlyPrice: 99,
      yearlyPrice: 990,
      features: [
        'Up to 5 AI automations',
        'Basic analytics dashboard',
        'Email support',
        'Standard integrations',
        '1GB data storage',
        'Basic reporting'
      ],
      limitations: [
        'Limited AI models',
        'No custom branding',
        'Basic support only'
      ],
      popular: false
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses',
      monthlyPrice: 299,
      yearlyPrice: 2990,
      features: [
        'Up to 25 AI automations',
        'Advanced analytics dashboard',
        'Priority email support',
        'Advanced integrations',
        '10GB data storage',
        'Advanced reporting',
        'Custom AI models',
        'API access',
        'Team collaboration'
      ],
      limitations: [
        'Limited custom branding',
        'Standard SLA'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      description: 'For large organizations with complex needs',
      monthlyPrice: 999,
      yearlyPrice: 9990,
      features: [
        'Unlimited AI automations',
        'Custom analytics dashboard',
        '24/7 phone support',
        'All integrations',
        'Unlimited data storage',
        'Custom reporting',
        'Full AI model customization',
        'Full API access',
        'Advanced team management',
        'Custom branding',
        'Dedicated account manager',
        'SLA guarantee',
        'On-premise deployment',
        'Custom training'
      ],
      limitations: [],
      popular: false
    }
  ];

  const aiServices = [
    { name: 'AI Analytics', price: 'Custom' },
    { name: 'AI Automation', price: 'Custom' },
    { name: 'AI Customer Support', price: 'Custom' },
    { name: 'AI Data Analytics', price: 'Custom' },
    { name: 'AI Content Generation', price: 'Custom' },
    { name: 'AI Healthcare Solutions', price: 'Custom' },
    { name: 'AI Financial Services', price: 'Custom' },
    { name: 'AI Cybersecurity', price: 'Custom' }
  ];

  const itServices = [
    { name: 'Cloud Services', price: 'Custom' },
    { name: 'DevOps & CI/CD', price: 'Custom' },
    { name: 'Cybersecurity', price: 'Custom' },
    { name: 'IT Consulting', price: 'Custom' },
    { name: 'Database Services', price: 'Custom' },
    { name: 'Network Solutions', price: 'Custom' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Pricing Plans
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your business needs. All plans include our core AI and IT services.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-lg ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
              Yearly
            </span>
            {billingCycle === 'yearly' && (
              <span className="bg-green-500 text-white text-sm px-2 py-1 rounded-full">
                Save 17%
              </span>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative bg-slate-800/50 backdrop-blur-md rounded-xl p-8 border transition-all duration-300 hover:transform hover:scale-105 ${
                plan.popular
                  ? 'border-cyan-400/40 ring-2 ring-cyan-400/20'
                  : 'border-cyan-500/20 hover:border-cyan-400/40'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 mb-4">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-5xl font-bold text-white">
                    ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                  </span>
                  <span className="text-gray-400 ml-2">
                    /{billingCycle === 'monthly' ? 'month' : 'year'}
                  </span>
                </div>
                {billingCycle === 'yearly' && (
                  <p className="text-sm text-green-400">
                    Save ${(plan.monthlyPrice * 12) - plan.yearlyPrice} per year
                  </p>
                )}
              </div>

              <div className="space-y-4 mb-8">
                <h4 className="text-lg font-semibold text-white mb-3">What's included:</h4>
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
                {plan.limitations.map((limitation, limitationIndex) => (
                  <div key={limitationIndex} className="flex items-center space-x-3">
                    <X className="w-5 h-5 text-red-400 flex-shrink-0" />
                    <span className="text-gray-400">{limitation}</span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white transform hover:scale-105'
                    : 'bg-slate-700 hover:bg-slate-600 text-white border border-gray-600 hover:border-cyan-400'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Custom Services */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Custom AI & IT Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Need something specific? We offer custom solutions tailored to your unique business requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* AI Services */}
            <div className="bg-slate-800/50 backdrop-blur-md rounded-xl p-8 border border-cyan-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">AI Services</h3>
              <div className="space-y-4">
                {aiServices.map((service, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-gray-700 last:border-b-0">
                    <span className="text-gray-300">{service.name}</span>
                    <span className="text-cyan-400 font-semibold">{service.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* IT Services */}
            <div className="bg-slate-800/50 backdrop-blur-md rounded-xl p-8 border border-cyan-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">IT Services</h3>
              <div className="space-y-4">
                {itServices.map((service, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-gray-700 last:border-b-0">
                    <span className="text-gray-300">{service.name}</span>
                    <span className="text-cyan-400 font-semibold">{service.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Have questions about our pricing? We're here to help.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-md rounded-xl p-6 border border-cyan-500/20">
              <h3 className="text-xl font-semibold text-white mb-3">
                Can I change my plan at any time?
              </h3>
              <p className="text-gray-300">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, 
                and we'll prorate any billing differences.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-md rounded-xl p-6 border border-cyan-500/20">
              <h3 className="text-xl font-semibold text-white mb-3">
                Do you offer custom solutions?
              </h3>
              <p className="text-gray-300">
                Absolutely! We specialize in custom AI and IT solutions tailored to your specific business needs. 
                Contact us for a free consultation to discuss your requirements.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-md rounded-xl p-6 border border-cyan-500/20">
              <h3 className="text-xl font-semibold text-white mb-3">
                What kind of support do you provide?
              </h3>
              <p className="text-gray-300">
                We provide comprehensive support including email support for all plans, priority support for Professional plans, 
                and 24/7 phone support for Enterprise customers.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-md rounded-xl p-6 border border-cyan-500/20">
              <h3 className="text-xl font-semibold text-white mb-3">
                Is there a free trial available?
              </h3>
              <p className="text-gray-300">
                Yes! We offer a 14-day free trial for all our plans. No credit card required to get started. 
                Experience our full suite of AI and IT services risk-free.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-slate-800/50 backdrop-blur-md rounded-xl p-12 border border-cyan-500/20">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose your plan and start transforming your business today. Need help deciding? 
              Contact us for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;

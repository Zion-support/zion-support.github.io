import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const aiServicesPricing = [
    {
      name: 'AI Content Moderator',
      monthly: '$199',
      yearly: '$1,990',
      features: ['Real-time content analysis', 'Multi-language support', 'Custom rules', 'API integration'],
      popular: false
    },
    {
      name: 'AI Sales Predictor',
      monthly: '$299',
      yearly: '$2,990',
      features: ['Advanced ML models', 'Real-time predictions', 'Custom dashboards', 'API access'],
      popular: true
    },
    {
      name: 'AI Workflow Automator',
      monthly: '$399',
      yearly: '$3,990',
      features: ['Process automation', 'Custom workflows', 'Integration tools', 'Analytics'],
      popular: false
    },
    {
      name: 'AI Financial Forecaster',
      monthly: '$499',
      yearly: '$4,990',
      features: ['Financial modeling', 'Risk analysis', 'Scenario planning', 'Reporting'],
      popular: false
    }
  ];

  const microSaasPricing = [
    {
      name: 'AI Email Optimizer Pro',
      monthly: '$49',
      yearly: '$490',
      features: ['Smart subject lines', 'Send time optimization', 'A/B testing', 'Analytics']
    },
    {
      name: 'Smart Inventory Manager',
      monthly: '$79',
      yearly: '$790',
      features: ['Demand forecasting', 'Auto reordering', 'Multi-location', 'Cost optimization']
    },
    {
      name: 'Customer Feedback Analyzer',
      monthly: '$39',
      yearly: '$390',
      features: ['Sentiment analysis', 'Multi-channel', 'Trend identification', 'Insights']
    },
    {
      name: 'Lead Scoring Engine',
      monthly: '$99',
      yearly: '$990',
      features: ['Behavioral analysis', 'Lead scoring', 'CRM integration', 'Tracking']
    }
  ];

  const enterprisePlans = [
    {
      name: 'Starter',
      price: '$2,999',
      period: 'month',
      description: 'Perfect for small to medium businesses',
      features: [
        'Up to 5 AI tools',
        'Basic support',
        'Monthly reports',
        'Standard integrations',
        'Training sessions'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$7,999',
      period: 'month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 15 AI tools',
        'Priority support',
        'Weekly reports',
        'Advanced integrations',
        'Dedicated account manager',
        'Custom training'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'quote',
      description: 'For large organizations',
      features: [
        'Unlimited AI tools',
        '24/7 support',
        'Real-time monitoring',
        'Custom integrations',
        'Dedicated team',
        'White-label options',
        'SLA guarantees'
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for our AI and IT services. Choose the plan that fits your business needs with competitive rates and flexible options." />
        <meta name="keywords" content="pricing, ai services pricing, it services cost, micro saas pricing, enterprise solutions" />
        <link rel="canonical" href="https://ziontechgroup.com/pricing" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Choose the perfect plan for your business needs. All plans include our commitment to quality, 
              security, and customer success.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center mb-8">
              <span className={`text-sm font-medium ${billingCycle === 'monthly' ? 'text-gray-900' : 'text-gray-500'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className="mx-4 relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <span
                  className={`${
                    billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                  } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                />
              </button>
              <span className={`text-sm font-medium ${billingCycle === 'yearly' ? 'text-gray-900' : 'text-gray-500'}`}>
                Yearly
              </span>
              {billingCycle === 'yearly' && (
                <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                  Save 20%
                </span>
              )}
            </div>
          </div>

          {/* Enterprise Plans */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Enterprise Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {enterprisePlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white rounded-2xl shadow-lg p-8 ${
                    plan.popular ? 'ring-2 ring-blue-500 transform scale-105' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-500 ml-2">/{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                      plan.popular
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* AI Services Pricing */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">AI Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {aiServicesPricing.map((service, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="text-center mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-3xl font-bold text-blue-600">
                        {billingCycle === 'monthly' ? service.monthly : service.yearly}
                      </span>
                      <span className="text-gray-500 ml-1">
                        /{billingCycle === 'monthly' ? 'mo' : 'yr'}
                      </span>
                    </div>
                    {service.popular && (
                      <span className="inline-block mt-2 px-2 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                        Popular
                      </span>
                    )}
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm">
                        <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className="w-full block text-center py-2 px-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  >
                    Contact Sales
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Micro SaaS Pricing */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Micro SaaS Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {microSaasPricing.map((service, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="text-center mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-3xl font-bold text-green-600">
                        {billingCycle === 'monthly' ? service.monthly : service.yearly}
                      </span>
                      <span className="text-gray-500 ml-1">
                        /{billingCycle === 'monthly' ? 'mo' : 'yr'}
                      </span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm">
                        <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className="w-full block text-center py-2 px-4 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Need Custom Pricing?</h2>
            <p className="text-xl mb-8 opacity-90">
              We offer flexible pricing for enterprise clients and custom solutions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-2xl mb-2">📞</div>
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="opacity-90">+1 302 464 0950</p>
              </div>
              <div>
                <div className="text-2xl mb-2">✉️</div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="opacity-90">kleber@ziontechgroup.com</p>
              </div>
              <div>
                <div className="text-2xl mb-2">📍</div>
                <h3 className="font-semibold mb-2">Address</h3>
                <p className="opacity-90">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            <Link
              to="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingPage;
import React, { useState } from 'react';
import { Check, X, Star, Clock, Users, Shield } from 'lucide-react';

export const ITServicePricingTable = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      name: 'Basic Support',
      description: 'Essential IT support for small businesses',
      price: billingCycle === 'monthly' ? 299 : 2990,
      features: [
        '24/7 Help Desk Support',
        'Remote Troubleshooting',
        'Basic Network Monitoring',
        'Email Support',
        'Monthly Reports',
        'Up to 25 Users'
      ],
      notIncluded: [
        'On-site Visits',
        'Hardware Installation',
        'Advanced Security',
        'Priority Support'
      ],
      popular: false,
      icon: Users
    },
    {
      name: 'Professional Support',
      description: 'Comprehensive IT support with on-site capabilities',
      price: billingCycle === 'monthly' ? 599 : 5990,
      features: [
        'Everything in Basic',
        'On-site Support (2 visits/month)',
        'Hardware Installation',
        'Network Security Monitoring',
        'Phone & Email Support',
        'Weekly Reports',
        'Up to 100 Users',
        'Emergency Response (4hr)'
      ],
      notIncluded: [
        'Unlimited On-site Visits',
        'Dedicated Technician',
        'Advanced Analytics'
      ],
      popular: true,
      icon: Shield
    },
    {
      name: 'Enterprise Support',
      description: 'Full-service IT support for large organizations',
      price: billingCycle === 'monthly' ? 1299 : 12990,
      features: [
        'Everything in Professional',
        'Unlimited On-site Support',
        'Dedicated IT Technician',
        'Advanced Security Suite',
        'Real-time Monitoring',
        'Daily Reports',
        'Unlimited Users',
        'Emergency Response (2hr)',
        'Strategic IT Planning',
        'Compliance Support'
      ],
      notIncluded: [
        'Custom Development',
        'Hardware Procurement'
      ],
      popular: false,
      icon: Star
    }
  ];

  const additionalServices = [
    {
      name: 'Hardware Installation',
      price: 150,
      description: 'Per device installation and setup'
    },
    {
      name: 'Network Assessment',
      price: 500,
      description: 'Comprehensive network security review'
    },
    {
      name: 'Data Recovery',
      price: 300,
      description: 'Emergency data recovery services'
    },
    {
      name: 'Training Sessions',
      price: 200,
      description: 'Staff IT training (per session)'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the IT support plan that fits your business needs. All plans include our core services with flexible options for growth.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center mt-8">
            <span className={`text-lg font-medium ${billingCycle === 'monthly' ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="mx-4 relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-lg font-medium ${billingCycle === 'yearly' ? 'text-gray-900' : 'text-gray-500'}`}>
              Yearly
              <span className="ml-2 text-sm text-green-600 font-medium">Save 20%</span>
            </span>
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-xl border-2 transition-all duration-300 hover:shadow-2xl ${
                plan.popular 
                  ? 'border-blue-500 scale-105' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <plan.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                    <p className="text-gray-600 text-sm">{plan.description}</p>
                  </div>
                </div>
                
                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold text-gray-900">${plan.price}</span>
                    <span className="text-gray-500 ml-2">
                      /{billingCycle === 'monthly' ? 'month' : 'year'}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-4 mb-8">
                  <h4 className="font-semibold text-gray-900">What's Included:</h4>
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-4 mb-8">
                  <h4 className="font-semibold text-gray-900">Not Included:</h4>
                  {plan.notIncluded.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <X className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-500">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Additional Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="text-center p-6 border border-gray-200 rounded-xl hover:border-blue-300 transition-colors">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{service.name}</h4>
                <div className="text-3xl font-bold text-blue-600 mb-2">${service.price}</div>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">
            Frequently Asked Questions
          </h3>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Can I change my plan at any time?
              </h4>
              <p className="text-gray-600">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                What's included in emergency response?
              </h4>
              <p className="text-gray-600">
                Emergency response includes immediate remote support and on-site visits within the specified response time for critical issues.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Do you offer custom solutions?
              </h4>
              <p className="text-gray-600">
                Yes, we can customize our services to meet your specific business requirements. Contact us for a consultation.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-blue-100 mb-6">
              Contact our team to discuss your IT support needs and get a customized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"
              >
                Get Custom Quote
              </a>
              <a
                href="#demo"
                className="px-8 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Schedule Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
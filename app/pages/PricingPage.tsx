import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CheckCircleIcon,
  XMarkIcon,
  ArrowRightIcon,
  StarIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses getting started',
      monthlyPrice: 299,
      yearlyPrice: 2990,
      features: [
        'AI Solutions (Basic)',
        'Cloud Infrastructure (1TB)',
        'Email Support',
        'Basic Security',
        'Monthly Reports',
        'Up to 5 Users'
      ],
      limitations: [
        'Limited API calls',
        'Basic analytics',
        'Standard support'
      ],
      popular: false,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses',
      monthlyPrice: 799,
      yearlyPrice: 7990,
      features: [
        'AI Solutions (Advanced)',
        'Cloud Infrastructure (5TB)',
        'Priority Support',
        'Advanced Security',
        'Real-time Analytics',
        'Up to 25 Users',
        'API Access',
        'Custom Integrations',
        'Monthly Consultations'
      ],
      limitations: [],
      popular: true,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Enterprise',
      description: 'For large organizations with complex needs',
      monthlyPrice: 1999,
      yearlyPrice: 19990,
      features: [
        'AI Solutions (Enterprise)',
        'Unlimited Cloud Storage',
        '24/7 Dedicated Support',
        'Enterprise Security',
        'Advanced Analytics',
        'Unlimited Users',
        'Full API Access',
        'Custom Development',
        'Weekly Consultations',
        'SLA Guarantee',
        'On-site Support',
        'Custom Training'
      ],
      limitations: [],
      popular: false,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const addOns = [
    {
      name: 'Additional AI Credits',
      description: 'Extra AI processing credits for high-volume usage',
      price: 0.10,
      unit: 'per credit'
    },
    {
      name: 'Premium Support',
      description: 'Dedicated support specialist for faster response times',
      price: 500,
      unit: 'per month'
    },
    {
      name: 'Custom Development',
      description: 'Bespoke solutions tailored to your specific needs',
      price: 150,
      unit: 'per hour'
    },
    {
      name: 'Training Sessions',
      description: 'Comprehensive training for your team',
      price: 200,
      unit: 'per session'
    }
  ];

  const faqs = [
    {
      question: 'Can I change my plan anytime?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any billing differences.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers for enterprise customers. All payments are processed securely.'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes, we offer a 14-day free trial for all plans. No credit card required to start your trial.'
    },
    {
      question: 'What happens if I exceed my plan limits?',
      answer: 'We\'ll notify you when you\'re approaching your limits. You can either upgrade your plan or purchase additional credits as needed.'
    },
    {
      question: 'Do you offer custom pricing for large organizations?',
      answer: 'Yes, we offer custom pricing for enterprise customers with specific requirements. Contact our sales team to discuss your needs.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for AI and IT solutions. Choose the perfect plan for your business needs with flexible options and no hidden fees." />
        <meta name="keywords" content="pricing, plans, AI solutions pricing, IT services pricing, cloud infrastructure pricing, enterprise solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Choose the perfect plan for your business. All plans include our core services 
              with no hidden fees or surprise charges.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center mb-12">
              <span className={`text-lg font-medium ${billingCycle === 'monthly' ? 'text-gray-900' : 'text-gray-500'}`}>
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
              <span className={`text-lg font-medium ${billingCycle === 'yearly' ? 'text-gray-900' : 'text-gray-500'}`}>
                Yearly
              </span>
              {billingCycle === 'yearly' && (
                <span className="ml-2 bg-green-100 text-green-800 text-sm font-medium px-2 py-1 rounded-full">
                  Save 20%
                </span>
              )}
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white rounded-2xl shadow-lg border-2 ${
                    plan.popular ? 'border-purple-500 scale-105' : 'border-gray-200'
                  } p-8`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-6">{plan.description}</p>
                    <div className="mb-4">
                      <span className="text-5xl font-bold text-gray-900">
                        ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                      </span>
                      <span className="text-gray-600 ml-2">
                        /{billingCycle === 'monthly' ? 'month' : 'year'}
                      </span>
                    </div>
                    {billingCycle === 'yearly' && (
                      <p className="text-sm text-green-600 font-medium">
                        Save ${(plan.monthlyPrice * 12) - plan.yearlyPrice} per year
                      </p>
                    )}
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                    {plan.limitations.map((limitation, limitationIndex) => (
                      <li key={limitationIndex} className="flex items-center">
                        <XMarkIcon className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-500">{limitation}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-colors ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
                        : 'bg-gray-900 text-white hover:bg-gray-800'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-ons Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Additional Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {addOns.map((addOn, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{addOn.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{addOn.description}</p>
                  <div className="text-2xl font-bold text-blue-600">
                    ${addOn.price}
                    <span className="text-sm font-normal text-gray-500 ml-1">{addOn.unit}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-8">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact our sales team to discuss your specific needs and get a custom quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
              >
                Contact Sales
              </Link>
              <Link 
                to="/demo" 
                className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Need Help Choosing a Plan?
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex items-center justify-center space-x-3 text-gray-600">
                <PhoneIcon className="w-6 h-6 text-blue-600" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-600">
                <EnvelopeIcon className="w-6 h-6 text-blue-600" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-600">
                <MapPinIcon className="w-6 h-6 text-blue-600" />
                <span>Middletown, DE</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PricingPage;
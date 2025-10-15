import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckIcon, StarIcon } from '@heroicons/react/24/outline';

const SEOHead = ({ title, description }: { title: string, description: string }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
  </Helmet>
);

const PricingPage: React.FC = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$999',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI',
      features: [
        'AI Consulting (5 hours/month)',
        'Basic AI Implementation',
        'Email Support',
        'Monthly Reports',
        'Basic Analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$2,499',
      period: '/month',
      description: 'Ideal for growing businesses with advanced needs',
      features: [
        'AI Consulting (15 hours/month)',
        'Advanced AI Solutions',
        'Priority Support',
        'Weekly Reports',
        'Advanced Analytics',
        'Custom Integrations',
        'Training Sessions'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$4,999',
      period: '/month',
      description: 'Complete solution for large organizations',
      features: [
        'Unlimited AI Consulting',
        'Full AI Suite',
        '24/7 Dedicated Support',
        'Real-time Reports',
        'Enterprise Analytics',
        'Custom Development',
        'On-site Training',
        'Dedicated Account Manager'
      ],
      popular: false
    }
  ];

  const addOns = [
    {
      name: 'Cybersecurity Package',
      price: '$1,200/month',
      description: 'Complete security monitoring and protection'
    },
    {
      name: 'Cloud Infrastructure',
      price: '$1,800/month',
      description: 'Managed cloud services and optimization'
    },
    {
      name: '5G Solutions',
      price: '$2,500/month',
      description: 'Next-generation connectivity solutions'
    },
    {
      name: 'Custom Development',
      price: '$150/hour',
      description: 'Bespoke software development services'
    }
  ];

  return (
    <>
      <SEOHead 
        title="Pricing - Zion Tech Group"
        description="Transparent pricing for AI solutions, cybersecurity, and IT services. Choose the plan that fits your business needs."
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Simple, <span className="text-blue-400">Transparent</span> Pricing
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose the perfect plan for your business. All plans include our core AI solutions and expert support.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div 
                  key={index} 
                  className={`relative bg-slate-800 rounded-xl p-8 ${
                    plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                        <StarIcon className="w-4 h-4 mr-1" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button 
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                        : 'bg-slate-700 text-white hover:bg-slate-600'
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
        <section className="py-16 px-4 bg-slate-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Additional Services
              </h2>
              <p className="text-gray-300">
                Enhance your plan with these powerful add-ons
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {addOns.map((addOn, index) => (
                <div key={index} className="bg-slate-700 rounded-lg p-6 hover:bg-slate-600 transition-colors">
                  <h3 className="text-xl font-semibold text-white mb-2">{addOn.name}</h3>
                  <div className="text-blue-400 font-bold text-lg mb-3">{addOn.price}</div>
                  <p className="text-gray-300 text-sm">{addOn.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Can I change my plan anytime?
                </h3>
                <p className="text-gray-300">
                  Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle.
                </p>
              </div>

              <div className="bg-slate-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Do you offer custom pricing for large enterprises?
                </h3>
                <p className="text-gray-300">
                  Absolutely! We offer custom pricing and solutions for large organizations with specific requirements.
                </p>
              </div>

              <div className="bg-slate-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  What's included in the support?
                </h3>
                <p className="text-gray-300">
                  All plans include email support. Professional and Enterprise plans include priority support and dedicated account management.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-slate-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today for a free consultation and custom quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                Contact Sales
              </a>
              <a 
                href="/contact" 
                className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PricingPage;

'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, ArrowRight } from 'lucide-react';

const PricingPage: React.FC = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$2,999',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI',
      features: [
        'AI Strategy Consultation',
        'Basic Machine Learning Models',
        'Cloud Infrastructure Setup',
        'Email Support',
        'Monthly Performance Reports',
        'Basic Security Features'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$7,999',
      period: '/month',
      description: 'Ideal for growing companies with advanced needs',
      features: [
        'Everything in Starter',
        'Advanced AI Solutions',
        'Custom ML Model Development',
        '24/7 Priority Support',
        'Weekly Performance Reports',
        'Advanced Security & Compliance',
        'Dedicated Account Manager',
        'API Integration Support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      features: [
        'Everything in Professional',
        'Custom AI Development',
        'On-premise & Cloud Solutions',
        '24/7 Dedicated Support',
        'Real-time Monitoring',
        'Enterprise Security Suite',
        'Dedicated Team',
        'Custom Integrations',
        'SLA Guarantees'
      ],
      popular: false
    }
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>Pricing - Zion Tech Group | AI and IT Solutions</title>
        <meta name="description" content="Transparent pricing for our AI and IT solutions. Choose the perfect plan for your business needs." />
        <meta name="keywords" content="pricing, AI services, IT services, business plans, Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Transparent Pricing
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose the perfect plan for your business needs. All plans include our core AI and IT services.
            </p>
          </div>
        </section>

        {/* Pricing Plans Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div 
                  key={index} 
                  className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 ${
                    plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                        <Star className="w-4 h-4 mr-2" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center mb-4">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button 
                    className={`w-full py-4 px-6 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 flex items-center justify-center ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white'
                        : 'border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white'
                    }`}
                  >
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Frequently Asked Questions
              </h2>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">
                  Can I change my plan at any time?
                </h3>
                <p className="text-gray-300">
                  Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the beginning of your next billing cycle.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">
                  Do you offer custom solutions?
                </h3>
                <p className="text-gray-300">
                  Absolutely! Our Enterprise plan includes fully customized solutions tailored to your specific business requirements.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">
                  What support is included?
                </h3>
                <p className="text-gray-300">
                  All plans include support, with response times varying by plan. Enterprise customers get 24/7 dedicated support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Contact our team to discuss which plan is right for your business or to get a custom quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Contact Sales
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default PricingPage;

import React from 'react';
import { CheckCircle, ArrowRight, Star } from 'lucide-react';

const PricingPage: React.FC = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$2,999',
      period: 'per month',
      description: 'Perfect for small businesses getting started with AI',
      features: [
        'Basic AI Analytics',
        'Email Support',
        'Monthly Reports',
        'Up to 5 Users',
        'Basic Automation',
        'Standard Security'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$7,999',
      period: 'per month',
      description: 'Ideal for growing businesses with advanced needs',
      features: [
        'Advanced AI Analytics',
        'Priority Support',
        'Real-time Reports',
        'Up to 25 Users',
        'Advanced Automation',
        'Enhanced Security',
        'Custom Integrations',
        'Dedicated Account Manager'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'contact us',
      description: 'Tailored solutions for large organizations',
      features: [
        'Custom AI Solutions',
        '24/7 Premium Support',
        'Custom Reports',
        'Unlimited Users',
        'Full Automation Suite',
        'Enterprise Security',
        'Custom Development',
        'Dedicated Team',
        'SLA Guarantee'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Transparent Pricing
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Choose the perfect plan for your business needs. All plans include our core AI and IT services.
          </p>
        </section>

        {/* Pricing Cards */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 ${
                    plan.popular ? 'ring-2 ring-cyan-500 bg-cyan-500/10' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-6">{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
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

                  <button
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white transform hover:scale-105'
                        : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                    }`}
                  >
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                    <ArrowRight className="inline-block ml-2 w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Comparison */}
        <section className="py-16 mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Feature Comparison</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Compare our plans to find the perfect fit for your business requirements.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left text-white py-4 px-6">Features</th>
                    <th className="text-center text-white py-4 px-6">Starter</th>
                    <th className="text-center text-white py-4 px-6">Professional</th>
                    <th className="text-center text-white py-4 px-6">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'AI Analytics', starter: 'Basic', professional: 'Advanced', enterprise: 'Custom' },
                    { feature: 'Support', starter: 'Email', professional: 'Priority', enterprise: '24/7 Premium' },
                    { feature: 'Users', starter: 'Up to 5', professional: 'Up to 25', enterprise: 'Unlimited' },
                    { feature: 'Security', starter: 'Standard', professional: 'Enhanced', enterprise: 'Enterprise' },
                    { feature: 'Integrations', starter: 'Basic', professional: 'Custom', enterprise: 'Full Custom' },
                    { feature: 'SLA', starter: '99%', professional: '99.5%', enterprise: '99.9%' }
                  ].map((row, index) => (
                    <tr key={index} className="border-b border-gray-700/50">
                      <td className="text-gray-300 py-4 px-6">{row.feature}</td>
                      <td className="text-center text-gray-300 py-4 px-6">{row.starter}</td>
                      <td className="text-center text-gray-300 py-4 px-6">{row.professional}</td>
                      <td className="text-center text-gray-300 py-4 px-6">{row.enterprise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-300">
                Have questions about our pricing? We're here to help.
              </p>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  question: 'Can I change my plan at any time?',
                  answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.'
                },
                {
                  question: 'Do you offer custom pricing for large organizations?',
                  answer: 'Yes, we offer custom pricing for enterprise clients with specific requirements. Contact our sales team for more information.'
                },
                {
                  question: 'What payment methods do you accept?',
                  answer: 'We accept all major credit cards, bank transfers, and can arrange custom payment terms for enterprise clients.'
                },
                {
                  question: 'Is there a free trial available?',
                  answer: 'Yes, we offer a 14-day free trial for our Professional plan. No credit card required to get started.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 backdrop-blur-sm rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses that trust Zion Tech Group for their AI and IT needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Free Trial
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PricingPage;
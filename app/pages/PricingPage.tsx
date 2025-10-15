import React from 'react';
import SEOHead from '../components/SEOHead';
import { CheckCircle, Star, Zap, Users, Award } from 'lucide-react';

const PricingPage: React.FC = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$2,999',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI and IT solutions',
      features: [
        'Basic AI Integration',
        'IT Support (8 hours/month)',
        'Email Support',
        'Basic Analytics',
        'Monthly Reports'
      ],
      popular: false,
      icon: <Zap className="w-8 h-8" />
    },
    {
      name: 'Professional',
      price: '$7,999',
      period: '/month',
      description: 'Ideal for growing businesses that need comprehensive solutions',
      features: [
        'Advanced AI Solutions',
        'IT Support (40 hours/month)',
        'Priority Support',
        'Advanced Analytics',
        'Weekly Reports',
        'Custom Integrations',
        'Performance Monitoring'
      ],
      popular: true,
      icon: <Users className="w-8 h-8" />
    },
    {
      name: 'Enterprise',
      price: '$19,999',
      period: '/month',
      description: 'Complete solution for large enterprises with complex needs',
      features: [
        'Custom AI Development',
        'Dedicated IT Team',
        '24/7 Support',
        'Real-time Analytics',
        'Daily Reports',
        'Custom Solutions',
        'Dedicated Account Manager',
        'SLA Guarantee'
      ],
      popular: false,
      icon: <Award className="w-8 h-8" />
    }
  ];

  const addOns = [
    {
      name: 'Cybersecurity Suite',
      price: '$1,999',
      period: '/month',
      description: 'Advanced security monitoring and protection'
    },
    {
      name: 'Cloud Migration',
      price: '$4,999',
      period: 'one-time',
      description: 'Complete cloud infrastructure migration'
    },
    {
      name: 'Custom Development',
      price: '$150',
      period: '/hour',
      description: 'Bespoke software development services'
    }
  ];

  return (
    <>
      <SEOHead
        title="Pricing - Zion Tech Group"
        description="Transparent pricing for AI solutions, IT services, and digital transformation. Choose the plan that fits your business needs."
      />
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto py-20 px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Pricing Plans
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your business. All plans include our core AI and IT solutions with flexible options to scale as you grow.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <div key={index} className={`bg-slate-800 p-8 rounded-lg ${plan.popular ? 'ring-2 ring-blue-400 relative' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-2" />
                      Most Popular
                    </div>
                  </div>
                )}
                <div className="text-center mb-8">
                  <div className="text-blue-400 mb-4 flex justify-center">{plan.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href="/contact" 
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white' 
                      : 'border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>

          {/* Add-ons Section */}
          <div className="bg-slate-800 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Additional Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {addOns.map((addon, index) => (
                <div key={index} className="bg-slate-700 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">{addon.name}</h3>
                  <p className="text-gray-300 mb-4">{addon.description}</p>
                  <div className="flex items-baseline">
                    <span className="text-2xl font-bold text-blue-400">{addon.price}</span>
                    <span className="text-gray-400 ml-1">{addon.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-xl font-semibold mb-3">Can I change plans anytime?</h3>
                <p className="text-gray-300">Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Is there a setup fee?</h3>
                <p className="text-gray-300">No setup fees for any of our plans. You only pay the monthly subscription cost.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">What support is included?</h3>
                <p className="text-gray-300">All plans include support, with response times varying by plan. Enterprise plans get 24/7 dedicated support.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Do you offer custom solutions?</h3>
                <p className="text-gray-300">Yes, we offer custom development and can create tailored solutions for your specific business needs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingPage;
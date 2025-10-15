import React from 'react';
import SEOHead from '../components/SEOHead';
import { Check, Star } from 'lucide-react';

const PricingPage: React.FC = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$2,999',
      period: 'per month',
      description: 'Perfect for small businesses getting started with AI and IT solutions',
      features: [
        'Basic AI consultation',
        'IT infrastructure review',
        'Email support',
        'Monthly reporting',
        'Up to 5 users',
        'Basic security monitoring'
      ],
      popular: false,
      cta: 'Get Started'
    },
    {
      name: 'Professional',
      price: '$7,999',
      period: 'per month',
      description: 'Ideal for growing businesses that need comprehensive solutions',
      features: [
        'Advanced AI solutions',
        'Full IT management',
        'Priority support',
        'Weekly reporting',
        'Up to 25 users',
        'Advanced security suite',
        'Cloud migration support',
        'Custom integrations'
      ],
      popular: true,
      cta: 'Most Popular'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'Tailored solutions for large organizations with complex needs',
      features: [
        'Custom AI development',
        'Dedicated IT team',
        '24/7 phone support',
        'Real-time monitoring',
        'Unlimited users',
        'Enterprise security',
        'Custom cloud solutions',
        'Dedicated account manager',
        'SLA guarantees'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const addOns = [
    {
      name: 'Cybersecurity Suite',
      price: '$1,999',
      period: 'per month',
      description: 'Advanced security monitoring and threat protection'
    },
    {
      name: '5G Solutions',
      price: '$3,999',
      period: 'per month',
      description: '5G network implementation and mobile app optimization'
    },
    {
      name: 'Micro SaaS Development',
      price: '$5,999',
      period: 'per project',
      description: 'Custom micro SaaS application development'
    },
    {
      name: 'Data Analytics',
      price: '$2,499',
      period: 'per month',
      description: 'Advanced analytics and business intelligence'
    }
  ];

  return (
    <>
      <SEOHead
        title="Pricing - Zion Tech Group"
        description="Transparent pricing for AI solutions, IT services, cybersecurity, and cloud infrastructure. Choose the plan that fits your business needs."
      />
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto py-20 px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Pricing Plans
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your business. All plans include our core services with flexible add-ons available.
            </p>
          </div>

          {/* Main Plans */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <div key={index} className={`bg-slate-800 p-8 rounded-lg relative ${plan.popular ? 'ring-2 ring-blue-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a 
                  href="/contact" 
                  className={`w-full text-center py-3 px-6 rounded-lg transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold' 
                      : 'border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>

          {/* Add-ons */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Add-on Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {addOns.map((addon, index) => (
                <div key={index} className="bg-slate-800 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">{addon.name}</h3>
                  <div className="mb-4">
                    <span className="text-2xl font-bold">{addon.price}</span>
                    <span className="text-gray-400 ml-1">{addon.period}</span>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">{addon.description}</p>
                  <a 
                    href="/contact" 
                    className="text-blue-400 hover:text-blue-300 font-semibold text-sm"
                  >
                    Learn More →
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-slate-800 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Pricing FAQ</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Can I change plans anytime?</h3>
                <p className="text-gray-300">Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Do you offer custom pricing?</h3>
                <p className="text-gray-300">Yes, we offer custom pricing for enterprise clients with specific requirements and large-scale deployments.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">What payment methods do you accept?</h3>
                <p className="text-gray-300">We accept all major credit cards, bank transfers, and can arrange custom payment terms for enterprise clients.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Is there a free trial available?</h3>
                <p className="text-gray-300">Yes, we offer a 30-day free trial for our Professional plan. Contact us to get started.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact our team to discuss your specific needs and get a customized quote for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
              >
                Get a Custom Quote
              </a>
              <a 
                href="/contact" 
                className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
              >
                Schedule a Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingPage;
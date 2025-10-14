import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CheckCircleIcon,
  StarIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const PricingPage: React.FC = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$2,999',
      period: 'per month',
      description: 'Perfect for small businesses getting started with AI and IT solutions',
      features: [
        'Basic AI consultation',
        'Cloud infrastructure setup',
        'Email support',
        'Monthly reporting',
        'Basic security monitoring'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$7,999',
      period: 'per month',
      description: 'Ideal for growing businesses that need comprehensive technology solutions',
      features: [
        'Advanced AI implementation',
        'Full cloud management',
        'Priority support',
        'Weekly reporting',
        'Advanced security suite',
        'Custom integrations',
        'Performance optimization'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'Tailored solutions for large organizations with complex requirements',
      features: [
        'Custom AI solutions',
        'Multi-cloud architecture',
        '24/7 dedicated support',
        'Real-time monitoring',
        'Enterprise security',
        'Custom development',
        'Training & documentation',
        'SLA guarantees'
      ],
      popular: false
    }
  ];

  const addOns = [
    {
      name: 'AI Model Training',
      price: '$5,000',
      description: 'Custom AI model training for your specific use case'
    },
    {
      name: 'Security Audit',
      price: '$3,000',
      description: 'Comprehensive security assessment and recommendations'
    },
    {
      name: 'Cloud Migration',
      price: '$10,000',
      description: 'Complete migration to cloud infrastructure'
    },
    {
      name: 'Custom Development',
      price: '$150/hour',
      description: 'Bespoke software development services'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for AI and IT solutions. Choose the plan that fits your business needs." />
        <meta name="keywords" content="pricing, AI solutions, IT services, cloud computing, enterprise pricing" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Simple, <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Transparent</span> Pricing
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include our core services 
              with the flexibility to scale as you grow.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`relative bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-purple-500 shadow-2xl shadow-purple-500/20' 
                    : 'border-slate-600 hover:border-purple-400'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                      <StarIcon className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:from-purple-700 hover:to-cyan-700'
                      : 'border-2 border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>

          {/* Add-ons Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Additional Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {addOns.map((addOn, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-6 text-center hover:bg-slate-700/50 transition-colors">
                  <h3 className="text-xl font-semibold text-white mb-2">{addOn.name}</h3>
                  <div className="text-2xl font-bold text-purple-400 mb-2">{addOn.price}</div>
                  <p className="text-gray-300 text-sm">{addOn.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-slate-800/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Can I change my plan later?</h3>
                <p className="text-gray-300">Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle.</p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-2">What's included in support?</h3>
                <p className="text-gray-300">All plans include email support. Professional and Enterprise plans include priority support with faster response times.</p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Do you offer custom solutions?</h3>
                <p className="text-gray-300">Yes, we offer custom solutions for unique requirements. Contact us to discuss your specific needs.</p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Is there a setup fee?</h3>
                <p className="text-gray-300">Setup fees vary by plan complexity. Basic setup is included in all plans, with additional fees for complex configurations.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-xl p-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your needs and find the perfect solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Contact Sales
              </Link>
              <Link
                to="/demo"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingPage;
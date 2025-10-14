

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CurrencyDollarIcon,
  CheckIcon,
  ArrowRightIcon,
  PhoneIcon,
  EnvelopeIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon
} from '@heroicons/react/24/outline';

const PricingPage: React.FC = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$2,999',
      period: '/month',
      description: 'Perfect for small businesses getting started with technology solutions',
      features: [
        'Basic AI Solutions',
        'Standard Security',
        'Cloud Infrastructure',
        'Email Support',
        'Monthly Reports',
        'Basic Analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$7,999',
      period: '/month',
      description: 'Ideal for growing businesses that need comprehensive technology solutions',
      features: [
        'Advanced AI Solutions',
        'Enhanced Security',
        'Scalable Cloud Infrastructure',
        'Priority Support',
        'Weekly Reports',
        'Advanced Analytics',
        'Custom Integrations',
        '24/7 Monitoring'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations with complex requirements',
      features: [
        'Custom AI Solutions',
        'Enterprise Security',
        'Multi-cloud Infrastructure',
        'Dedicated Support',
        'Real-time Reports',
        'Custom Analytics',
        'Full Customization',
        '24/7 Dedicated Support',
        'On-site Consulting',
        'SLA Guarantees'
      ],
      popular: false
    }
  ];

  const addOns = [
    {
      name: 'AI Development',
      price: '$1,500',
      period: '/month',
      description: 'Additional AI model development and training'
    },
    {
      name: 'Security Audit',
      price: '$2,500',
      period: '/audit',
      description: 'Comprehensive security assessment and recommendations'
    },
    {
      name: 'Cloud Migration',
      price: '$5,000',
      period: '/project',
      description: 'Complete cloud infrastructure migration service'
    },
    {
      name: 'Training & Support',
      price: '$800',
      period: '/hour',
      description: 'Custom training sessions for your team'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for our AI, cybersecurity, cloud infrastructure, and IT solutions. Choose the plan that fits your business needs." />
        <meta name="keywords" content="pricing, AI solutions pricing, cybersecurity pricing, cloud infrastructure pricing, IT services pricing" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Transparent Pricing
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Choose the Plan That Fits Your Business
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
              Our pricing is designed to scale with your business. Start with our Starter plan 
              and upgrade as your needs grow, or go straight to Enterprise for comprehensive solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options to meet your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className={`bg-slate-800 rounded-xl p-8 relative ${plan.popular ? 'ring-2 ring-purple-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                      {feature}
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
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Additional Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Enhance your plan with these additional services
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {addOns.map((addOn, index) => (
              <div key={index} className="bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-2">{addOn.name}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-2xl font-bold text-purple-400">{addOn.price}</span>
                  <span className="text-gray-400 ml-1">{addOn.period}</span>
                </div>
                <p className="text-gray-300 text-sm">{addOn.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300">
              Common questions about our pricing and services
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Can I change my plan anytime?</h3>
              <p className="text-gray-300">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences.</p>
            </div>
            
            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Do you offer custom solutions?</h3>
              <p className="text-gray-300">Absolutely! Our Enterprise plan includes fully customized solutions tailored to your specific business requirements.</p>
            </div>
            
            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">What's included in support?</h3>
              <p className="text-gray-300">All plans include email support. Professional and Enterprise plans include priority support with faster response times and additional communication channels.</p>
            </div>
            
            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Is there a setup fee?</h3>
              <p className="text-gray-300">No setup fees for Starter and Professional plans. Enterprise plans may include setup costs depending on the complexity of your requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-cyan-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us to discuss your specific needs and get a personalized quote
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
            >
              Contact Sales
            </Link>
            <Link
              to="/demo"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingPage;

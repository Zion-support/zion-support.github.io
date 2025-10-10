'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, ArrowRight, Zap, Phone, Mail } from 'lucide-react';

const PricingPage: React.FC = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$2,999',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI',
      features: [
        'Basic AI Integration',
        'Cloud Infrastructure Setup',
        'Email Support',
        'Monthly Reports',
        'Basic Analytics Dashboard'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$7,999',
      period: '/month',
      description: 'Ideal for growing companies with advanced needs',
      features: [
        'Advanced AI Solutions',
        'Custom Development',
        'Priority Support',
        'Weekly Reports',
        'Advanced Analytics',
        'API Access',
        'Training Sessions'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      features: [
        'Custom AI Solutions',
        'Dedicated Team',
        '24/7 Support',
        'Real-time Monitoring',
        'Custom Integrations',
        'White-label Options',
        'On-site Training',
        'SLA Guarantee'
      ],
      popular: false
    }
  ];

  const microSaasPlans = [
    {
      name: 'Basic',
      price: '$29',
      period: '/month',
      description: 'Perfect for individuals and small teams',
      features: [
        'Access to 10 AI tools',
        'Basic analytics',
        'Email support',
        'Standard templates',
        '1 user account'
      ],
      popular: false
    },
    {
      name: 'Pro',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Access to all 50+ AI tools',
        'Advanced analytics',
        'Priority support',
        'Custom templates',
        'Up to 10 user accounts',
        'API access',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited access to all tools',
        'Custom analytics dashboard',
        '24/7 dedicated support',
        'White-label options',
        'Unlimited user accounts',
        'Custom development',
        'On-premise deployment',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group | Transparent AI & IT Pricing</title>
        <meta name="description" content="Transparent pricing for AI and IT solutions. Choose from Starter, Professional, or Enterprise plans. Custom solutions available. Get started today." />
        <meta name="keywords" content="AI pricing, IT services pricing, cloud solutions cost, enterprise AI pricing, custom development pricing" />
        <link rel="canonical" href="https://ziontechgroup.com/pricing" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Pricing</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose the perfect plan for your business needs. All plans include our core AI and IT services with no hidden fees.
            </p>
          </div>
        </section>

        {/* Main Services Pricing */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">AI & IT Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive solutions for businesses of all sizes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white/5 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 ${
                    plan.popular 
                      ? 'border-cyan-400/50 scale-105' 
                      : 'border-white/10 hover:border-cyan-400/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-semibold py-2 px-4 rounded-full text-center mb-6">
                      Most Popular
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600 transform hover:scale-105">
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Micro SAAS Pricing */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Micro SAAS Solutions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Affordable AI-powered tools for every business need
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {microSaasPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white/5 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 ${
                    plan.popular 
                      ? 'border-cyan-400/50 scale-105' 
                      : 'border-white/10 hover:border-cyan-400/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-semibold py-2 px-4 rounded-full text-center mb-6">
                      Most Popular
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600 transform hover:scale-105">
                    Start Free Trial
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Solutions */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-12 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6">Need a Custom Solution?</h2>
              <p className="text-xl text-gray-300 mb-8">
                We create tailored AI and IT solutions that perfectly fit your business requirements and budget.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Custom Development</h3>
                  <p className="text-gray-300">Bespoke solutions designed specifically for your business needs</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Dedicated Support</h3>
                  <p className="text-gray-300">24/7 dedicated support team for your custom solutions</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  <Phone className="w-5 h-5" />
                  Call: (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-3">What's included in the pricing?</h3>
                <p className="text-gray-300">All our plans include implementation, training, support, and regular updates. No hidden fees or surprise charges.</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-3">Can I change plans later?</h3>
                <p className="text-gray-300">Yes, you can upgrade or downgrade your plan at any time. We'll prorate any changes to your billing.</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-3">Do you offer discounts for annual billing?</h3>
                <p className="text-gray-300">Yes, we offer up to 20% discount for annual billing. Contact us for more details.</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-3">What if I need more than what's included?</h3>
                <p className="text-gray-300">We offer custom solutions and add-on services. Contact our team to discuss your specific needs.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PricingPage;
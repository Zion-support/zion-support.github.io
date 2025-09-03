import React from 'react';
import Link from 'next/link';
import { Check, Star, ArrowRight, Zap, Shield, Globe } from 'lucide-react';
import SEOHead from '../../components/seo/SEOHead';

const PricingPage = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$2,999',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      icon: Zap,
      features: [
        'Up to 5 team members',
        'Basic AI services',
        'Standard support',
        'Cloud hosting included',
        'Basic analytics',
        'Email support'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Professional',
      price: '$7,999',
      period: '/month',
      description: 'Ideal for growing businesses',
      icon: Shield,
      features: [
        'Up to 20 team members',
        'Advanced AI services',
        'Priority support',
        'Dedicated cloud resources',
        'Advanced analytics',
        'Phone & email support',
        'Custom integrations',
        'Monthly consultations'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      icon: Globe,
      features: [
        'Unlimited team members',
        'Full AI suite',
        '24/7 dedicated support',
        'Private cloud deployment',
        'Custom analytics',
        'Dedicated account manager',
        'Custom development',
        'SLA guarantees',
        'On-site training',
        'White-label options'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const addOns = [
    {
      name: 'Additional AI Credits',
      price: '$0.10',
      description: 'Per AI operation beyond plan limits'
    },
    {
      name: 'Premium Support',
      price: '$999',
      description: 'Per month for enhanced support'
    },
    {
      name: 'Custom Development',
      price: '$150',
      description: 'Per hour for custom features'
    },
    {
      name: 'Training Sessions',
      price: '$2,500',
      description: 'Per day for team training'
    }
  ];

  return (
    <>
      <SEOHead
        title="Pricing Plans | Zion Tech Group"
        description="Transparent pricing for our AI services, cloud solutions, and technology consulting. Choose the plan that fits your business needs."
        keywords="pricing, AI services pricing, cloud solutions pricing, technology consulting rates, enterprise pricing"
        canonicalUrl="https://ziontechgroup.com/pricing"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative container mx-auto px-4 py-24">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Star className="w-4 h-4" />
                <span>Transparent Pricing</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Choose the Perfect
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Plan for You</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Flexible pricing options designed to scale with your business. 
                Start small and grow with us as your needs evolve.
              </p>
            </div>
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {plans.map((plan, index) => (
                <div key={index} className={`relative bg-white/5 backdrop-blur-sm border rounded-xl p-8 hover:bg-white/10 transition-all duration-300 ${
                  plan.popular ? 'border-blue-500 ring-2 ring-blue-500/20' : 'border-white/10'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <plan.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    href={plan.name === 'Enterprise' ? '/contact' : '/contact'}
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl'
                        : 'border border-white/20 text-white hover:bg-white/10'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Add-ons Section */}
        <div className="py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Additional Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Enhance your plan with additional services tailored to your specific needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {addOns.map((addon, index) => (
                <div key={index} className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-2">{addon.name}</h3>
                  <div className="text-2xl font-bold text-blue-400 mb-2">{addon.price}</div>
                  <p className="text-gray-300 text-sm">{addon.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get answers to common questions about our pricing and services.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-2">Can I change my plan anytime?</h3>
                <p className="text-gray-300">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences.</p>
              </div>
              
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-2">Do you offer custom pricing?</h3>
                <p className="text-gray-300">Yes, we offer custom pricing for enterprise clients with specific requirements. Contact our sales team to discuss your needs.</p>
              </div>
              
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-2">What's included in support?</h3>
                <p className="text-gray-300">Support includes email assistance, documentation, and community access. Higher tiers include phone support and dedicated account management.</p>
              </div>
              
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-2">Is there a free trial?</h3>
                <p className="text-gray-300">Yes, we offer a 14-day free trial for our Professional plan. No credit card required to get started.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Choose your plan and start transforming your business with our technology solutions.
              </p>
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center space-x-2"
              >
                <span>Contact Sales</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingPage;
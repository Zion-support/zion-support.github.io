import React from 'react';
import Link from 'next/link';
import Navigation from '../src/components/Navigation';
import Footer from '../src/components/Footer';
import SEOHead from '../src/components/SEO/SEOHead';
import ErrorBoundary from '../src/components/ErrorBoundary';
import { CheckCircle, Star, Users, Zap, Shield, Globe, Phone, Mail, ArrowRight } from 'lucide-react';

export default function Pricing() {
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses getting started',
      features: [
        'Basic AI consultation',
        'Email support',
        'Monthly reports',
        'Up to 5 users',
        'Basic integrations'
      ],
      popular: false,
      cta: 'Get Started',
      href: '/contact'
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Advanced AI solutions',
        'Priority support',
        'Weekly reports',
        'Up to 25 users',
        'Advanced integrations',
        'Custom workflows',
        'Training sessions'
      ],
      popular: true,
      cta: 'Most Popular',
      href: '/contact'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations with complex needs',
      features: [
        'Full AI implementation',
        '24/7 dedicated support',
        'Real-time monitoring',
        'Unlimited users',
        'Custom integrations',
        'White-label solutions',
        'Dedicated account manager',
        'SLA guarantee'
      ],
      popular: false,
      cta: 'Contact Sales',
      href: '/contact'
    }
  ];

  const addOns = [
    {
      name: 'AI Development',
      price: '$150',
      period: '/hour',
      description: 'Custom AI model development and training'
    },
    {
      name: 'Cloud Migration',
      price: '$2,500',
      period: '/project',
      description: 'Complete cloud infrastructure migration'
    },
    {
      name: 'Security Audit',
      price: '$1,500',
      period: '/audit',
      description: 'Comprehensive security assessment and recommendations'
    },
    {
      name: 'Training & Support',
      price: '$200',
      period: '/hour',
      description: 'Team training and ongoing technical support'
    }
  ];

  return (
    <ErrorBoundary>
      <SEOHead
        title="Pricing - Zion Tech Group | Transparent Technology Solutions Pricing"
        description="Choose the perfect plan for your business. Transparent pricing for AI services, IT solutions, and micro SaaS development. No hidden fees."
        keywords={["pricing", "AI services pricing", "IT services cost", "micro SaaS pricing", "technology consulting rates", "enterprise solutions"]}
        canonicalUrl="https://ziontechgroup.com/pricing"
      />
      
      <Navigation />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Transparent <span className="text-blue-600">Pricing</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Choose the perfect plan for your business needs. No hidden fees, no surprises. 
                Scale up or down as your business grows.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-white rounded-2xl shadow-lg p-8 ${
                  plan.popular ? 'ring-2 ring-blue-500 transform scale-105' : ''
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        {plan.cta}
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-xl text-gray-600 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={plan.href}
                    className={`block w-full py-3 px-6 rounded-lg font-semibold text-center transition-colors ${
                      plan.popular
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    {plan.popular ? 'Get Started' : plan.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-ons Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Additional Services</h2>
              <p className="text-lg text-gray-600">
                Enhance your plan with these professional services
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {addOns.map((addon, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{addon.name}</h3>
                  <div className="flex items-baseline mb-3">
                    <span className="text-3xl font-bold text-blue-600">{addon.price}</span>
                    <span className="text-gray-600 ml-1">{addon.period}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{addon.description}</p>
                  <Link
                    href="/contact"
                    className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600">
                Everything you need to know about our pricing
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Can I change my plan anytime?</h3>
                <p className="text-gray-600">
                  Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, 
                  and we'll prorate any billing differences.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Is there a setup fee?</h3>
                <p className="text-gray-600">
                  No setup fees for any of our plans. You only pay the monthly subscription fee. 
                  Enterprise plans may include custom setup as part of the service.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">What payment methods do you accept?</h3>
                <p className="text-gray-600">
                  We accept all major credit cards, PayPal, and bank transfers for enterprise customers. 
                  All payments are processed securely through our payment partners.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Do you offer refunds?</h3>
                <p className="text-gray-600">
                  We offer a 30-day money-back guarantee for all new customers. If you're not satisfied 
                  with our services, we'll provide a full refund.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Have questions about our pricing? Our team is here to help you choose the perfect plan for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Contact Sales
              </Link>
              <Link href="/demo" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </ErrorBoundary>
  );
}
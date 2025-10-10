'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, ArrowRight, Phone, Mail } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PricingPage: React.FC = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$1,999',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI',
      features: [
        'Basic AI integration',
        'Email support',
        'Standard analytics',
        'Up to 5 users',
        'Basic automation',
        'Monthly reports'
      ],
      popular: false,
      category: 'AI'
    },
    {
      name: 'Professional',
      price: '$4,999',
      period: '/month',
      description: 'Ideal for growing companies with advanced needs',
      features: [
        'Advanced AI solutions',
        'Priority support',
        'Real-time analytics',
        'Up to 25 users',
        'Custom automation',
        'API access',
        'Advanced reporting',
        'Integration support'
      ],
      popular: true,
      category: 'AI'
    },
    {
      name: 'Enterprise',
      price: '$9,999',
      period: '/month',
      description: 'For large organizations with complex requirements',
      features: [
        'Custom AI development',
        'Dedicated support',
        'Advanced analytics',
        'Unlimited users',
        'Custom integrations',
        'White-label options',
        'SLA guarantee',
        '24/7 phone support'
      ],
      popular: false,
      category: 'AI'
    }
  ];

  const addOns = [
    {
      name: 'Additional Users',
      price: '$99',
      period: '/user/month',
      description: 'Add more team members to your plan'
    },
    {
      name: 'Priority Support',
      price: '$499',
      period: '/month',
      description: 'Get faster response times and dedicated support'
    },
    {
      name: 'Custom Integration',
      price: '$2,999',
      period: '/integration',
      description: 'Connect with your existing systems and tools'
    },
    {
      name: 'Training & Onboarding',
      price: '$1,999',
      period: '/session',
      description: 'Comprehensive training for your team'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Pricing - Zion Tech Group | AI & IT Solutions Pricing</title>
        <meta name="description" content="Transparent pricing for our AI and IT solutions. Choose the plan that fits your business needs. Starting at $1,999/month with no hidden fees." />
        <meta name="keywords" content="pricing, AI solutions pricing, IT services cost, cloud services pricing, enterprise pricing" />
      </Helmet>

      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Simple
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Pricing
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include our core features with no hidden fees.
            </p>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div key={index} className={`bg-slate-800/50 rounded-2xl p-8 border transition-all duration-300 ${
                  plan.popular ? 'border-cyan-500 scale-105' : 'border-cyan-500/20 hover:border-cyan-500/40'
                }`}>
                  {plan.popular && (
                    <div className="flex justify-center mb-4">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600'
                        : 'border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-ons */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Add-ons & Extensions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Enhance your plan with additional features and services tailored to your needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {addOns.map((addOn, index) => (
                <div key={index} className="bg-slate-800/50 rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                  <h3 className="text-lg font-bold text-white mb-2">{addOn.name}</h3>
                  <div className="text-2xl font-bold text-cyan-400 mb-2">{addOn.price}<span className="text-sm text-gray-400">{addOn.period}</span></div>
                  <p className="text-gray-300 text-sm">{addOn.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-300">Get answers to common questions about our pricing and services.</p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-slate-800/50 rounded-2xl p-6 border border-cyan-500/20">
                <h3 className="text-lg font-bold text-white mb-3">Can I change my plan anytime?</h3>
                <p className="text-gray-300">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences.</p>
              </div>
              
              <div className="bg-slate-800/50 rounded-2xl p-6 border border-cyan-500/20">
                <h3 className="text-lg font-bold text-white mb-3">Is there a setup fee?</h3>
                <p className="text-gray-300">No setup fees for any of our plans. We believe in transparent pricing with no hidden costs.</p>
              </div>
              
              <div className="bg-slate-800/50 rounded-2xl p-6 border border-cyan-500/20">
                <h3 className="text-lg font-bold text-white mb-3">What payment methods do you accept?</h3>
                <p className="text-gray-300">We accept all major credit cards, bank transfers, and can arrange custom payment terms for enterprise clients.</p>
              </div>
              
              <div className="bg-slate-800/50 rounded-2xl p-6 border border-cyan-500/20">
                <h3 className="text-lg font-bold text-white mb-3">Do you offer custom pricing?</h3>
                <p className="text-gray-300">Yes, we offer custom pricing for enterprise clients with specific requirements. Contact us to discuss your needs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our team to discuss your requirements and find the perfect plan for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-3 px-8 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call +1 (302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border border-cyan-500 text-cyan-400 font-semibold py-3 px-8 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Mail className="w-5 h-5" />
                  <span>Email Us</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default PricingPage;
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, ArrowRight, Zap } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PricingPage: React.FC = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI',
      features: [
        'AI Chatbot (up to 1,000 conversations/month)',
        'Basic Analytics Dashboard',
        'Email Support',
        'Standard Security',
        '5GB Data Storage',
        'Basic Integrations'
      ],
      popular: false,
      cta: 'Get Started',
      href: '/contact'
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Ideal for growing businesses with advanced needs',
      features: [
        'AI Chatbot (up to 10,000 conversations/month)',
        'Advanced Analytics & Reporting',
        'Priority Support',
        'Enhanced Security',
        '50GB Data Storage',
        'Advanced Integrations',
        'Custom AI Models',
        'API Access'
      ],
      popular: true,
      cta: 'Most Popular',
      href: '/contact'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      features: [
        'Unlimited AI Conversations',
        'Custom Analytics & Dashboards',
        '24/7 Dedicated Support',
        'Enterprise Security',
        'Unlimited Data Storage',
        'Custom Integrations',
        'Advanced AI Models',
        'Full API Access',
        'Dedicated Account Manager',
        'Custom Training & Onboarding'
      ],
      popular: false,
      cta: 'Contact Sales',
      href: '/contact'
    }
  ];

  const microSaasPlans = [
    {
      name: 'Zion Analytics Pro',
      price: '$89',
      period: '/month',
      description: 'Advanced business intelligence platform',
      features: [
        'Real-time data visualization',
        'AI-powered insights',
        'Custom dashboards',
        'Automated reporting',
        'Up to 25 users',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Zion Chat AI',
      price: '$149',
      period: '/month',
      description: 'Next-generation AI customer support',
      features: [
        'GPT-4 powered conversations',
        'Multi-channel support',
        'Sentiment analysis',
        'Live agent handoff',
        'Up to 50 users',
        'CRM integration'
      ],
      popular: false
    },
    {
      name: 'Zion Security Shield',
      price: '$299',
      period: '/month',
      description: 'Enterprise-grade cybersecurity monitoring',
      features: [
        'AI threat detection',
        'Real-time monitoring',
        'Automated response',
        'Compliance reporting',
        'Up to 100 users',
        '24/7 SOC support'
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for our AI and IT services. Choose the plan that fits your business needs." />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Simple, Transparent Pricing
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your business needs. All plans include our core features with no hidden fees.
              </p>
            </div>

            {/* Main Pricing Plans */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-white text-center mb-8">AI & IT Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {plans.map((plan, index) => (
                  <div
                    key={index}
                    className={`bg-slate-800/50 rounded-lg p-8 relative ${
                      plan.popular ? 'ring-2 ring-cyan-500 scale-105' : ''
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                          <Star className="w-4 h-4 mr-1" />
                          {plan.cta}
                        </span>
                      </div>
                    )}
                    
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <p className="text-gray-300 mb-4">{plan.description}</p>
                      <div className="flex items-baseline justify-center">
                        <span className="text-4xl font-bold text-white">{plan.price}</span>
                        <span className="text-gray-400 ml-1">{plan.period}</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link
                      to={plan.href}
                      className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white'
                          : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                      }`}
                    >
                      {plan.popular ? plan.cta : plan.cta}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Micro SaaS Pricing */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-white text-center mb-8">Micro SaaS Solutions</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {microSaasPlans.map((plan, index) => (
                  <div
                    key={index}
                    className={`bg-slate-800/50 rounded-lg p-6 ${
                      plan.popular ? 'ring-2 ring-green-500' : ''
                    }`}
                  >
                    {plan.popular && (
                      <div className="flex items-center justify-center mb-4">
                        <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                          <Zap className="w-4 h-4 mr-1" />
                          Popular
                        </span>
                      </div>
                    )}
                    
                    <div className="text-center mb-4">
                      <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                      <p className="text-gray-300 text-sm mb-3">{plan.description}</p>
                      <div className="flex items-baseline justify-center">
                        <span className="text-3xl font-bold text-white">{plan.price}</span>
                        <span className="text-gray-400 ml-1">{plan.period}</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-2 mb-6">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link
                      to="/contact"
                      className={`w-full block text-center py-2 px-4 rounded-lg font-semibold transition-all duration-300 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white'
                          : 'border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-slate-900'
                      }`}
                    >
                      Start Trial
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
              <div className="max-w-3xl mx-auto space-y-6">
                <div className="bg-slate-800/50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Can I change my plan anytime?</h3>
                  <p className="text-gray-300">
                    Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, 
                    and we'll prorate any billing differences.
                  </p>
                </div>
                
                <div className="bg-slate-800/50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Do you offer custom solutions?</h3>
                  <p className="text-gray-300">
                    Absolutely! Our Enterprise plan includes custom solutions tailored to your specific needs. 
                    Contact our sales team to discuss your requirements.
                  </p>
                </div>
                
                <div className="bg-slate-800/50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">What support do you provide?</h3>
                  <p className="text-gray-300">
                    We provide email support for Starter plans, priority support for Professional plans, 
                    and 24/7 dedicated support for Enterprise customers.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <div className="bg-slate-800/50 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Ready to Get Started?
                </h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Contact our team for a free consultation and find the perfect plan for your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Get Free Consultation
                  </Link>
                  <a
                    href="tel:+13024640950"
                    className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Call: (302) 464-0950
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default PricingPage;

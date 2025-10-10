'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, ArrowRight, Phone, Mail } from 'lucide-react';

const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses getting started with AI',
      monthlyPrice: 999,
      yearlyPrice: 9999,
      features: [
        'Basic AI chatbot',
        'Email support',
        'Up to 1,000 conversations/month',
        'Standard integrations',
        'Basic analytics',
        '5 team members'
      ],
      popular: false,
      cta: 'Get Started'
    },
    {
      name: 'Professional',
      description: 'Ideal for growing companies with advanced needs',
      monthlyPrice: 2999,
      yearlyPrice: 29999,
      features: [
        'Advanced AI solutions',
        'Priority support',
        'Up to 10,000 conversations/month',
        'Custom integrations',
        'Advanced analytics',
        '25 team members',
        'Custom branding',
        'API access'
      ],
      popular: true,
      cta: 'Get Started'
    },
    {
      name: 'Enterprise',
      description: 'For large organizations with complex requirements',
      monthlyPrice: 7999,
      yearlyPrice: 79999,
      features: [
        'Custom AI models',
        'Dedicated support manager',
        'Unlimited conversations',
        'All integrations',
        'Custom analytics',
        'Unlimited team members',
        'White-label solution',
        'SLA guarantee',
        'On-premise deployment'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const microSaasPlans = [
    {
      name: 'AI Customer Support Chatbot',
      price: 149,
      period: '/month',
      description: 'Revolutionary AI-powered customer support with 99.2% accuracy',
      features: [
        'Advanced AI chatbot with NLP',
        'Multi-channel support',
        'Sentiment analysis',
        'Live agent handoff',
        'Performance analytics',
        'Up to 50 users'
      ]
    },
    {
      name: 'AI Content Studio',
      price: 299,
      period: '/month',
      description: 'Complete content creation suite with AI writing and image generation',
      features: [
        'AI-powered content generation',
        'Image and video creation',
        'Multi-platform publishing',
        'Brand voice training',
        'Team collaboration tools',
        'Up to 25 users'
      ]
    },
    {
      name: 'AI Financial Analyzer',
      price: 199,
      period: '/month',
      description: 'Intelligent financial management with AI analysis and automation',
      features: [
        'Real-time financial analysis',
        'Portfolio optimization',
        'Risk assessment',
        'Automated bookkeeping',
        'Goal tracking',
        'Up to 20 users'
      ]
    }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Pricing - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Transparent pricing for AI and IT solutions. Choose the plan that fits your business needs and budget." />
        <meta name="keywords" content="pricing, AI solutions, IT services, plans, cost, subscription" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Simple,
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Transparent Pricing
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Choose the plan that fits your business needs. All plans include 14-day free trial 
            and no setup fees.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-lg ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
              Yearly
              <span className="ml-2 text-sm text-green-400">(Save 20%)</span>
            </span>
          </div>
        </div>
      </section>

      {/* Main Pricing Plans */}
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
                    <span className="text-4xl font-bold text-cyan-400">
                      {formatPrice(billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice)}
                    </span>
                    <span className="text-gray-400 ml-1">
                      {billingCycle === 'monthly' ? '/month' : '/year'}
                    </span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
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
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SaaS Pricing */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Micro SaaS Solutions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready-to-use AI tools that solve specific business problems. 
              Quick setup, no long-term commitments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {microSaasPlans.map((plan, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-3xl font-bold text-cyan-400">{formatPrice(plan.price)}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 text-center block"
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300">
              Get answers to common questions about our pricing and services.
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-slate-800/50 rounded-lg p-6 border border-cyan-500/20">
              <h3 className="text-xl font-semibold text-white mb-3">Do you offer custom pricing?</h3>
              <p className="text-gray-300">
                Yes, we offer custom pricing for enterprise clients with specific requirements. 
                Contact our sales team to discuss your needs and get a tailored quote.
              </p>
            </div>
            
            <div className="bg-slate-800/50 rounded-lg p-6 border border-cyan-500/20">
              <h3 className="text-xl font-semibold text-white mb-3">Can I change plans anytime?</h3>
              <p className="text-gray-300">
                Absolutely! You can upgrade or downgrade your plan at any time. 
                Changes take effect immediately, and we'll prorate any billing differences.
              </p>
            </div>
            
            <div className="bg-slate-800/50 rounded-lg p-6 border border-cyan-500/20">
              <h3 className="text-xl font-semibold text-white mb-3">What's included in the free trial?</h3>
              <p className="text-gray-300">
                The 14-day free trial includes full access to all features of your chosen plan, 
                with no credit card required. You can cancel anytime during the trial period.
              </p>
            </div>
            
            <div className="bg-slate-800/50 rounded-lg p-6 border border-cyan-500/20">
              <h3 className="text-xl font-semibold text-white mb-3">Do you offer refunds?</h3>
              <p className="text-gray-300">
                We offer a 30-day money-back guarantee on all our plans. 
                If you're not satisfied with our service, we'll provide a full refund.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Choose your plan and start transforming your business with AI and IT solutions today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-4 px-8 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <div className="flex items-center space-x-4 text-gray-300">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <span>+1 (302) 464-0950</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
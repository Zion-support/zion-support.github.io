'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, CheckCircle, Star, Zap, Shield, Users, Clock, Phone } from 'lucide-react';

const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses getting started with AI',
      price: { monthly: 199, yearly: 1990 },
      icon: Zap,
      color: 'blue',
      features: [
        'AI Content Generation (10K words/month)',
        'Basic Analytics Dashboard',
        'Email Support',
        '5 User Accounts',
        'Standard Security',
        'Basic Integration (3 platforms)',
        'Monthly Reports',
        'Community Access'
      ],
      limitations: [
        'Limited AI models',
        'Basic customization',
        'Standard response time'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses with advanced AI needs',
      price: { monthly: 599, yearly: 5990 },
      icon: Users,
      color: 'purple',
      features: [
        'AI Content Generation (50K words/month)',
        'Advanced Analytics & Reporting',
        'Priority Support (24/7)',
        '25 User Accounts',
        'Enhanced Security & Compliance',
        'Advanced Integration (10 platforms)',
        'Custom AI Model Training',
        'API Access',
        'White-label Options',
        'Dedicated Account Manager'
      ],
      limitations: [
        'Limited custom development',
        'Standard SLA'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      description: 'Complete solution for large organizations',
      price: { monthly: 1999, yearly: 19990 },
      icon: Shield,
      color: 'green',
      features: [
        'Unlimited AI Content Generation',
        'Enterprise Analytics & BI',
        'Dedicated Support Team',
        'Unlimited User Accounts',
        'Enterprise Security & Compliance',
        'Unlimited Integrations',
        'Custom AI Development',
        'Full API Access',
        'Complete White-label Solution',
        'Dedicated Success Manager',
        'Custom SLA & Uptime Guarantee',
        'On-premise Deployment Option',
        'Advanced Security Auditing',
        'Custom Training & Onboarding'
      ],
      limitations: [],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const addOns = [
    {
      name: 'AI Model Customization',
      description: 'Custom AI model training for your specific use case',
      price: { monthly: 299, yearly: 2990 },
      features: ['Custom model training', 'Domain-specific optimization', 'Performance tuning']
    },
    {
      name: 'Advanced Analytics',
      description: 'Enhanced analytics and business intelligence features',
      price: { monthly: 199, yearly: 1990 },
      features: ['Custom dashboards', 'Advanced reporting', 'Predictive analytics']
    },
    {
      name: 'Priority Support',
      description: '24/7 priority support with guaranteed response times',
      price: { monthly: 99, yearly: 990 },
      features: ['24/7 phone support', '1-hour response time', 'Dedicated support engineer']
    },
    {
      name: 'White-label Solution',
      description: 'Complete white-label branding and customization',
      price: { monthly: 499, yearly: 4990 },
      features: ['Custom branding', 'Domain setup', 'Branded interface']
    }
  ];

  const enterpriseFeatures = [
    {
      title: 'Custom AI Development',
      description: 'Bespoke AI solutions tailored to your specific business needs',
      icon: Zap
    },
    {
      title: 'Enterprise Security',
      description: 'Bank-level security with SOC 2 compliance and advanced encryption',
      icon: Shield
    },
    {
      title: 'Dedicated Support',
      description: '24/7 dedicated support team with guaranteed response times',
      icon: Phone
    },
    {
      title: 'Custom Integration',
      description: 'Seamless integration with your existing systems and workflows',
      icon: Users
    }
  ];

  const faqs = [
    {
      question: 'What is included in the free trial?',
      answer: 'The free trial includes full access to all features of the selected plan for 14 days, with no credit card required.'
    },
    {
      question: 'Can I change my plan at any time?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any billing differences.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and for Enterprise plans, we also accept bank transfers and purchase orders.'
    },
    {
      question: 'Is there a setup fee?',
      answer: 'No setup fees for Starter and Professional plans. Enterprise plans may include setup fees depending on the complexity of implementation.'
    },
    {
      question: 'Do you offer discounts for annual billing?',
      answer: 'Yes, annual billing includes a 2-month discount (equivalent to 16.7% savings) compared to monthly billing.'
    },
    {
      question: 'What happens if I exceed my usage limits?',
      answer: 'We\'ll notify you when you\'re approaching your limits. You can upgrade your plan or purchase additional usage credits.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Choose the perfect plan for your business needs. All plans include our core AI services 
            with the flexibility to scale as you grow.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-8">
            <span className={`mr-3 ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
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
            <span className={`ml-3 ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
              Yearly
            </span>
            {billingCycle === 'yearly' && (
              <span className="ml-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                Save 16%
              </span>
            )}
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`cyber-card p-8 relative ${
                  plan.popular ? 'ring-2 ring-cyan-500 scale-105' : ''
                } hover:scale-105 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-cyan-500 text-white text-sm font-bold px-4 py-2 rounded-full">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 bg-${plan.color}-500 rounded-lg flex items-center justify-center mx-auto mb-4`}>
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">
                      ${billingCycle === 'monthly' ? plan.price.monthly : plan.price.yearly}
                    </span>
                    <span className="text-gray-400 ml-2">
                      /{billingCycle === 'monthly' ? 'month' : 'year'}
                    </span>
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

                <div className="text-center">
                  <Link
                    href="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'cyber-button'
                        : 'border-2 border-white text-white hover:bg-white hover:text-indigo-600'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Add-ons */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Add-ons & Extensions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-3">{addon.name}</h3>
                <p className="text-gray-300 mb-4">{addon.description}</p>
                
                <div className="mb-4">
                  <span className="text-2xl font-bold text-cyan-400">
                    ${billingCycle === 'monthly' ? addon.price.monthly : addon.price.yearly}
                  </span>
                  <span className="text-gray-400 ml-2">
                    /{billingCycle === 'monthly' ? 'month' : 'year'}
                  </span>
                </div>

                <ul className="space-y-2 mb-6">
                  {addon.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="w-full text-cyan-400 hover:text-cyan-300 font-medium transition-colors">
                  Add to Plan →
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Enterprise Features */}
        <section className="mb-16">
          <div className="cyber-card p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Enterprise Solutions
            </h2>
            <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              For large organizations with complex needs, we offer custom enterprise solutions 
              with dedicated support and advanced features.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {enterpriseFeatures.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link
                href="/contact"
                className="cyber-button inline-flex items-center"
              >
                Contact Enterprise Sales
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Frequently Asked Questions
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="cyber-card p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="cyber-card p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Start your free trial today and experience the power of AI-driven solutions. 
              No credit card required, cancel anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="cyber-button inline-flex items-center"
              >
                Start Free Trial
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
              >
                📞 Call: (302) 464-0950
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default PricingPage;
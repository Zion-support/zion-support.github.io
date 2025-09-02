import React, { useState } from 'react';
import { Check, Star, Zap, Shield, Cloud, Brain, Rocket, Users, Building, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ComprehensivePricing2025() {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [selectedPlan, setSelectedPlan] = useState('professional');

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      price: { monthly: 99, yearly: 990 },
      features: [
        'Basic AI Consultation',
        'Cloud Migration Assessment',
        'Security Audit Report',
        'Email Support',
        'Basic Analytics Dashboard',
        'Up to 5 Team Members'
      ],
      icon: Zap,
      color: 'from-blue-500 to-cyan-500',
      popular: false
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Ideal for growing businesses and enterprises',
      price: { monthly: 299, yearly: 2990 },
      features: [
        'Advanced AI Solutions',
        'Full Cloud Migration',
        'Cybersecurity Implementation',
        'Priority Support',
        'Advanced Analytics',
        'Up to 25 Team Members',
        'Custom Integrations',
        'Performance Monitoring',
        'Compliance Reporting'
      ],
      icon: Shield,
      color: 'from-purple-500 to-pink-500',
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'Comprehensive solutions for large organizations',
      price: { monthly: 799, yearly: 7990 },
      features: [
        'Full AI Suite Implementation',
        'Multi-Cloud Strategy',
        'Advanced Security Framework',
        '24/7 Dedicated Support',
        'Custom AI Models',
        'Unlimited Team Members',
        'White-label Solutions',
        'Advanced Analytics & ML',
        'Compliance & Governance',
        'Custom Development',
        'Training & Certification',
        'Strategic Consulting'
      ],
      icon: Building,
      color: 'from-orange-500 to-red-500',
      popular: false
    }
  ];

  const addOns = [
    {
      name: 'AI Model Training',
      description: 'Custom AI model development and training',
      price: { monthly: 199, yearly: 1990 },
      icon: Brain
    },
    {
      name: 'Cloud Optimization',
      description: 'Advanced cloud cost optimization and management',
      price: { monthly: 149, yearly: 1490 },
      icon: Cloud
    },
    {
      name: 'Security Enhancement',
      description: 'Advanced security features and compliance',
      price: { monthly: 179, yearly: 1790 },
      icon: Shield
    },
    {
      name: 'Digital Transformation',
      description: 'End-to-end business transformation consulting',
      price: { monthly: 299, yearly: 2990 },
      icon: Rocket
    }
  ];

  const savings = billingCycle === 'yearly' ? 20 : 0;

  return (
    <div className="min-h-screen bg-zion-blue-dark">
      {/* Header */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Transparent Pricing
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 leading-relaxed">
              Choose the perfect plan for your business needs. All plans include our core services 
              with flexible options to scale as you grow.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-zion-slate-light'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
                  billingCycle === 'yearly' ? 'bg-zion-cyan' : 'bg-zion-purple/30'
                }`}
              >
                <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
                  billingCycle === 'yearly' ? 'translate-x-8' : 'translate-x-1'
                }`} />
              </button>
              <span className={`text-lg ${billingCycle === 'yearly' ? 'text-white' : 'text-zion-slate-light'}`}>
                Yearly
                {billingCycle === 'yearly' && (
                  <span className="ml-2 px-2 py-1 bg-green-500 text-white text-xs rounded-full">
                    Save {savings}%
                  </span>
                )}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative rounded-2xl p-8 transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-br from-zion-purple/20 to-zion-cyan/20 border-2 border-zion-cyan scale-105'
                    : 'bg-zion-blue-dark/50 border border-zion-purple/20 hover:border-zion-purple/40'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-zion-purple to-zion-cyan text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${plan.color} flex items-center justify-center`}>
                    <plan.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-zion-slate-light mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">
                      ${plan.price[billingCycle]}
                    </span>
                    <span className="text-zion-slate-light ml-2">
                      /{billingCycle === 'monthly' ? 'month' : 'year'}
                    </span>
                  </div>

                  <button
                    onClick={() => setSelectedPlan(plan.id)}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-zion-purple to-zion-cyan text-white hover:from-zion-purple/80 hover:to-zion-cyan/80'
                        : 'bg-zion-purple/20 text-zion-cyan border border-zion-purple/30 hover:bg-zion-purple/30'
                    }`}
                  >
                    {selectedPlan === plan.id ? 'Current Plan' : 'Choose Plan'}
                  </button>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-white mb-4">What's included:</h4>
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-zion-cyan mt-0.5 flex-shrink-0" />
                      <span className="text-zion-slate-light text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Enhance your plan with specialized services tailored to your specific needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {addOns.map((addon, index) => (
              <div key={index} className="bg-zion-blue-dark/50 border border-zion-purple/20 rounded-xl p-6 hover:border-zion-purple/40 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-zion-purple/20 flex items-center justify-center mb-4">
                  <addon.icon className="h-6 w-6 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{addon.name}</h3>
                <p className="text-zion-slate-light text-sm mb-4">{addon.description}</p>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-2">
                    ${addon.price[billingCycle]}
                  </div>
                  <span className="text-zion-slate-light text-sm">
                    /{billingCycle === 'monthly' ? 'month' : 'year'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Get answers to common questions about our pricing and services
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: 'Can I change my plan at any time?',
                answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes will be prorated and reflected in your next billing cycle.'
              },
              {
                question: 'Do you offer custom pricing for enterprise clients?',
                answer: 'Absolutely! We provide custom pricing and solutions for enterprise clients with specific requirements. Contact our sales team for a personalized quote.'
              },
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept all major credit cards, PayPal, and bank transfers for annual plans. Enterprise clients can also arrange for invoicing.'
              },
              {
                question: 'Is there a setup fee?',
                answer: 'No setup fees for our standard plans. Custom enterprise solutions may have one-time implementation fees depending on complexity.'
              },
              {
                question: 'What happens if I exceed my plan limits?',
                answer: 'We\'ll notify you before any limits are exceeded. You can either upgrade your plan or purchase additional add-ons as needed.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-zion-blue-dark/50 border border-zion-purple/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-zion-slate-light">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Choose the perfect plan for your business or contact us for a custom solution
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-purple to-zion-cyan text-white font-semibold rounded-lg hover:from-zion-purple/80 hover:to-zion-cyan/80 transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/25"
              >
                Get Custom Quote
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-zion-purple/30 text-zion-cyan font-semibold rounded-lg hover:bg-zion-purple/10 hover:border-zion-purple/50 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
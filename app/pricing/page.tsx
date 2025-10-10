'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Check, Star, Zap, Shield, Brain, Cloud } from 'lucide-react';

const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: 'Starter',
      price: '$2,999',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI',
      features: [
        'AI Strategy Consultation',
        'Basic Machine Learning Models',
        'Cloud Infrastructure Setup',
        'Email Support',
        'Monthly Performance Reports',
        'Basic Security Features'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$7,999',
      period: '/month',
      description: 'Ideal for growing companies with advanced needs',
      features: [
        'Everything in Starter',
        'Advanced AI Solutions',
        'Custom ML Model Development',
        '24/7 Priority Support',
        'Weekly Performance Reports',
        'Advanced Security & Compliance',
        'Dedicated Account Manager',
        'API Integration Support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      features: [
        'Everything in Professional',
        'Custom AI Development',
        'On-premise & Cloud Solutions',
        '24/7 Dedicated Support',
        'Real-time Monitoring',
        'Enterprise Security Suite',
        'Dedicated Team',
        'Custom Integrations',
        'SLA Guarantees'
      ],
      popular: false
    }
  ]
  const servicePricing = [
    {
      category: 'AI Services',
      services: [
        { name: 'AI Strategy & Consulting', price: '$5,000/month', description: 'Strategic AI planning and implementation' },
        { name: 'Machine Learning Development', price: '$15,000/project', description: 'Custom ML model development' },
        { name: 'Natural Language Processing', price: '$8,000/project', description: 'NLP and chatbot solutions' },
        { name: 'Computer Vision Solutions', price: '$12,000/project', description: 'Image and video analysis' },
        { name: 'AI Automation & RPA', price: '$3,500/month', description: 'Process automation solutions' }
      ]
    },
    {
      category: 'IT Services',
      services: [
        { name: 'Cloud Infrastructure', price: '$2,500/month', description: 'AWS, Azure, GCP management' },
        { name: 'DevOps & CI/CD', price: '$3,000/month', description: 'Automation and deployment pipelines' },
        { name: 'Cybersecurity', price: '$4,000/month', description: 'Security monitoring and compliance' },
        { name: 'Managed IT Services', price: '$2,200/month', description: '24/7 IT support and management' },
        { name: 'Database Management', price: '$1,800/month', description: 'Database optimization and maintenance' }
      ]
    },
    {
      category: 'Micro SaaS',
      services: [
        { name: 'Business Intelligence Dashboard', price: '$89/month', description: 'Advanced analytics platform' },
        { name: 'AI Customer Support Suite', price: '$149/month', description: 'Complete customer support solution' },
        { name: 'Email Marketing Automation', price: '$99/month', description: 'AI-powered email marketing' },
        { name: 'Project Management Suite', price: '$119/month', description: 'AI-powered project management' },
        { name: 'Lead Generation Engine', price: '$179/month', description: 'AI-powered lead generation' }
      ]
    }
  ]return (
    <React.Fragment>
      <Helmet>
        <title>Pricing | Zion Tech Group</title>
        <meta name="description" content="Choose the perfect AI and IT solution plan for your business. Flexible pricing options with no hidden fees. Start your transformation today." />
        <meta name="keywords" content="pricing, AI solutions pricing, IT services pricing, business plans, enterprise solutions" />
      </Helmet>
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Transparent Pricing
  </
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Choose the perfect plan for your business needs. All plans include our core AI and IT services.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 ${
                    plan.popular ? 'ring-2 ring-purple-400 scale-105' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-semibold py-2 px-4 rounded-full text-center mb-6">
                      Most Popular
  </
                  )}
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">${plan.price}</span>
                    <span className="text-gray-400 ml-2">/month</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}>
                    {plan.popular ? 'Get Started' : 'Choose Plan'}
                  </button>
                </div>
              ))}
            </div>
            <div className="text-center mt-16">
              <h2 className="text-3xl font-bold text-white mb-4">Need a Custom Solution?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                We offer tailored AI and IT solutions for enterprise clients. Contact us for a personalized quote.
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                Contact Sales;
  </
            </div>
          </div>
        </section>
      </div>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Pricing</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your business needs. All plans include our core AI and IT solutions with transparent, no-hidden-fees pricing.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular
                    ? 'border-cyan-500 shadow-2xl shadow-cyan-500/20'
                    : 'border-slate-700 hover:border-slate-600'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                      <Star className="w-4 h-4 fill-current" />
                      Most Popular
  </
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-white">
                      ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                    </span>
                    <span className="text-gray-400 text-lg">
                      /{billingCycle === 'monthly' ? 'month' : 'year'}
                    </span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 px-6 rounded-lg font-bold text-lg transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white'
                      : 'bg-slate-700 hover:bg-slate-600 text-white border border-slate-600'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Need a Custom Solution?
              </h3>
              <p className="text-gray-300 mb-6">
                We understand that every business is unique. Contact us for a personalized quote tailored to your specific requirements.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
                <Zap className="w-5 h-5" />
                Get Custom Quote
  </
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )}
export default PricingPage
  </Link>
  </div>
  </button>
  </h1>
  </div>
  );
};

export default PricingPage;
>>>>>>> cursor/analyze-improve-and-deploy-application-e765

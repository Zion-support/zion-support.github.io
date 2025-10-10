'use client';
import React, { useState } from 'react';
import { CheckCircle, Star, ArrowRight, Zap, Shield, Clock, Users, Award } from 'lucide-react';
import SEOHead from '../components/EnhancedSEOHead';

const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: 'Starter',
      price: { monthly: '$2,999', yearly: '$29,990' },
      period: billingCycle === 'monthly' ? '/month' : '/year',
      description: 'Perfect for small businesses getting started with AI',
      features: [
        'Basic AI Integration',
        'Cloud Infrastructure Setup',
        'Email Support',
        'Monthly Reports',
        'Basic Analytics Dashboard',
        'Up to 5 users',
        'Standard SLA'
      ],
      popular: false,
      color: 'blue'
    },
    {
      name: 'Professional',
      price: { monthly: '$7,999', yearly: '$79,990' },
      period: billingCycle === 'monthly' ? '/month' : '/year',
      description: 'Ideal for growing companies with advanced needs',
      features: [
        'Advanced AI Solutions',
        'Custom Development',
        'Priority Support',
        'Weekly Reports',
        'Advanced Analytics',
        'API Access',
        'Training Sessions',
        'Up to 25 users',
        '99.9% Uptime SLA'
      ],
      popular: true,
      color: 'purple'
    },
    {
      name: 'Enterprise',
      price: { monthly: 'Custom', yearly: 'Custom' },
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
        'Unlimited users',
        '99.99% Uptime SLA',
        'Dedicated Account Manager'
      ],
      popular: false,
      color: 'cyan'
    }
  ];

  const microSaasPlans = [
    {
      name: 'AI Writing Assistant',
      price: '$29',
      period: '/month',
      description: 'Advanced AI writing tool for content creation',
      features: ['50+ templates', 'Unlimited content', 'SEO optimization', 'Multi-language support'],
      popular: false
    },
    {
      name: 'Smart Analytics',
      price: '$49',
      period: '/month',
      description: 'Real-time business analytics with AI insights',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Data visualization'],
      popular: true
    },
    {
      name: 'AI CRM',
      price: '$149',
      period: '/month',
      description: 'Intelligent customer relationship management',
      features: ['Lead scoring', 'Automated follow-ups', 'Pipeline management', 'AI insights'],
      popular: false
    },
    {
      name: 'Content Studio',
      price: '$299',
      period: '/month',
      description: 'Complete content creation suite',
      features: ['AI writing', 'Image generation', 'Video editing', 'Social media automation'],
      popular: false
    }
  ];

  return (
    <>
      <SEOHead
        title="Pricing - Zion Tech Group | Transparent AI & IT Pricing"
        description="Transparent pricing for AI and IT solutions. Choose from Starter, Professional, or Enterprise plans. Custom solutions available. Get started today."
        keywords={['AI pricing', 'IT services pricing', 'cloud solutions cost', 'enterprise AI pricing', 'custom development pricing']}
        canonicalUrl="https://ziontechgroup.com/pricing"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">
              Transparent Pricing
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose the perfect plan for your business needs. All plans include our industry-leading support and expertise.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center mb-12">
              <div className="bg-gray-800 rounded-lg p-1 flex">
                <button
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-6 py-2 rounded-md font-medium transition-all duration-300 ${
                    billingCycle === 'monthly'
                      ? 'bg-cyan-500 text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingCycle('yearly')}
                  className={`px-6 py-2 rounded-md font-medium transition-all duration-300 ${
                    billingCycle === 'yearly'
                      ? 'bg-cyan-500 text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Yearly
                  <span className="ml-2 px-2 py-1 bg-green-500 text-white text-xs rounded-full">
                    Save 20%
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Pricing Plans */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div
                  key={plan.name}
                  className={`cyber-card hologram-card p-8 relative ${
                    plan.popular ? 'ring-2 ring-cyan-500 scale-105' : ''
                  } hover:scale-105 transition-all duration-300`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-white">
                        {plan.price[billingCycle]}
                      </span>
                      <span className="text-gray-300">{plan.period}</span>
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

                  <button
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600'
                        : 'border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white'
                    }`}
                  >
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                    <ArrowRight className="w-4 h-4 ml-2 inline" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Micro SAAS Pricing */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
                Micro SAAS Solutions
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Affordable, powerful AI-driven tools for modern businesses. Start with any tool and scale as you grow.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {microSaasPlans.map((plan, index) => (
                <div
                  key={plan.name}
                  className={`cyber-card hologram-card p-6 ${
                    plan.popular ? 'ring-2 ring-green-500' : ''
                  } hover:scale-105 transition-all duration-300`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                        Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="w-full py-2 px-4 border-2 border-green-500 text-green-400 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition-all duration-300">
                    Try Free
                    <ArrowRight className="w-4 h-4 ml-2 inline" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Comparison */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
                Why Choose Zion Tech Group?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="cyber-card hologram-card p-6 text-center">
                <Shield className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Enterprise Security</h3>
                <p className="text-gray-300">Bank-level security and compliance for all your data and infrastructure.</p>
              </div>

              <div className="cyber-card hologram-card p-6 text-center">
                <Clock className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">24/7 Support</h3>
                <p className="text-gray-300">Round-the-clock expert support to keep your systems running smoothly.</p>
              </div>

              <div className="cyber-card hologram-card p-6 text-center">
                <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Expert Team</h3>
                <p className="text-gray-300">50+ certified professionals with deep expertise in AI and IT solutions.</p>
              </div>

              <div className="cyber-card hologram-card p-6 text-center">
                <Award className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Proven Results</h3>
                <p className="text-gray-300">300% average ROI and 95% client satisfaction rate across all projects.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="cyber-card hologram-card p-8">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Contact our team to discuss your specific needs and get a customized quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button text-center"
                >
                  Get Free Consultation
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
                >
                  Call: (302) 464-0950
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PricingPage;
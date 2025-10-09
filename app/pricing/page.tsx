'use client';
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, ArrowRight, Phone, Mail, MapPin, Award, Globe, Brain, Cloud, Code, BarChart, Crown, Sparkles, Target } from 'lucide-react';

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);

  const pricingPlans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses getting started with AI',
      price: { monthly: 1500, annual: 15000 },
      icon: Zap,
      color: 'from-blue-600/20 to-cyan-600/20',
      borderColor: 'border-blue-500/30',
      textColor: 'text-blue-400',
      popular: false,
      features: [
        'Basic AI automation',
        'Email support',
        'Up to 5 users',
        'Standard analytics',
        'Basic integrations',
        'Monthly reporting',
        'Cloud hosting included',
        'SSL security'
      ],
      limitations: [
        'Limited AI models',
        'Basic customization',
        'Standard support hours'
      ]
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses with advanced needs',
      price: { monthly: 5000, annual: 50000 },
      icon: Star,
      color: 'from-purple-600/20 to-pink-600/20',
      borderColor: 'border-purple-500/30',
      textColor: 'text-purple-400',
      popular: true,
      features: [
        'Advanced AI automation',
        'Priority support',
        'Up to 25 users',
        'Advanced analytics',
        'Custom integrations',
        'Weekly reporting',
        'Dedicated hosting',
        'Enterprise security',
        'API access',
        'Custom AI models',
        '24/7 monitoring',
        'Performance optimization'
      ],
      limitations: [
        'Limited custom development',
        'Standard SLA'
      ]
    },
    {
      name: 'Enterprise',
      description: 'Complete solution for large organizations',
      price: { monthly: 15000, annual: 150000 },
      icon: Crown,
      color: 'from-orange-600/20 to-red-600/20',
      borderColor: 'border-orange-500/30',
      textColor: 'text-orange-400',
      popular: false,
      features: [
        'Full AI suite',
        'Dedicated support team',
        'Unlimited users',
        'Real-time analytics',
        'Custom integrations',
        'Daily reporting',
        'Private cloud',
        'Bank-level security',
        'Full API access',
        'Custom AI development',
        '24/7 dedicated support',
        'Performance guarantee',
        'Custom SLA',
        'On-site training',
        'White-label options',
        'Priority feature requests'
      ],
      limitations: []
    }
  ];

  const microSaasPlans = [
    {
      name: 'AI Project Manager',
      price: 15,
      description: 'Intelligent project planning and management',
      icon: '📊',
      features: ['Task automation', 'Progress tracking', 'Team collaboration', 'AI insights']
    },
    {
      name: 'AI Social Media Manager',
      price: 25,
      description: 'Automated social media management',
      icon: '📱',
      features: ['Content generation', 'Scheduling', 'Analytics', 'Engagement tracking']
    },
    {
      name: 'AI Analytics Dashboard',
      price: 35,
      description: 'AI-powered business intelligence',
      icon: '📈',
      features: ['Real-time data', 'Predictive analytics', 'Custom reports', 'Data visualization']
    },
    {
      name: 'AI Email Marketing',
      price: 20,
      description: 'Intelligent email campaigns',
      icon: '📧',
      features: ['Auto-segmentation', 'A/B testing', 'Personalization', 'Performance tracking']
    },
    {
      name: 'AI Customer Support Bot',
      price: 30,
      description: '24/7 AI customer support',
      icon: '🤖',
      features: ['Multi-language', 'Ticket routing', 'Knowledge base', 'Live chat integration']
    },
    {
      name: 'AI Content Generator',
      price: 18,
      description: 'AI-powered content creation',
      icon: '✍️',
      features: ['Blog posts', 'Social content', 'Product descriptions', 'SEO optimization']
    }
  ];

  const addOns = [
    {
      name: 'Custom AI Development',
      price: 5000,
      description: 'Bespoke AI solutions tailored to your needs',
      icon: Code
    },
    {
      name: 'Dedicated Support',
      price: 2000,
      description: 'Dedicated support specialist for your account',
      icon: Users
    },
    {
      name: 'On-site Training',
      price: 3000,
      description: 'Comprehensive training for your team',
      icon: Award
    },
    {
      name: 'Priority Implementation',
      price: 10000,
      description: 'Fast-track your project implementation',
      icon: Zap
    }
  ];

  const faqs = [
    {
      question: 'What\'s included in the free consultation?',
      answer: 'Our free consultation includes a 30-minute strategy session where we analyze your current setup, discuss your goals, and provide recommendations for AI implementation. No obligations, just expert advice.'
    },
    {
      question: 'Can I switch plans anytime?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at your next billing cycle, and we\'ll prorate any differences.'
    },
    {
      question: 'Do you offer custom pricing for large enterprises?',
      answer: 'Absolutely! For organizations with unique requirements or very large scale needs, we offer custom pricing and solutions. Contact us to discuss your specific needs.'
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'We provide comprehensive support including email, phone, and chat support. Enterprise customers get dedicated support teams and 24/7 assistance.'
    },
    {
      question: 'Is there a setup fee?',
      answer: 'No setup fees for any of our plans. We believe in transparent pricing with no hidden costs.'
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Yes, you can cancel your subscription at any time. We don\'t require long-term contracts, though annual plans offer significant savings.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer 
        title="Zion Tech Group Pricing - AI & IT Solutions Plans"
        description="Transparent pricing for AI and IT solutions. Choose from Starter ($1,500/mo), Professional ($5,000/mo), or Enterprise ($15,000/mo) plans. Free consultation available."
        keywords="AI pricing, IT services pricing, AI solutions cost, enterprise AI pricing, business AI plans"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
              Simple, <span className="text-cyan-400">Transparent</span> Pricing
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Choose the perfect plan for your business. All plans include our core AI and IT solutions 
              with no hidden fees or long-term contracts.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-slate-800/50 px-4 py-2 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-white">No Setup Fees</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-800/50 px-4 py-2 rounded-lg">
                <Shield className="w-5 h-5 text-cyan-400" />
                <span className="text-white">30-Day Money Back</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-800/50 px-4 py-2 rounded-lg">
                <Award className="w-5 h-5 text-yellow-400" />
                <span className="text-white">Free Consultation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Billing Toggle */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="bg-slate-800/50 rounded-lg p-1 flex">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-6 py-2 rounded-md transition-all ${
                  !isAnnual 
                    ? 'bg-cyan-600 text-white' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-6 py-2 rounded-md transition-all ${
                  isAnnual 
                    ? 'bg-cyan-600 text-white' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Annual <span className="text-green-400 text-sm">(Save 20%)</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Pricing Plans */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-gradient-to-br ${plan.color} rounded-2xl p-8 cyber-card border-2 ${plan.borderColor} ${
                  plan.popular ? 'ring-2 ring-purple-500/50 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-2" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <plan.icon className={`w-16 h-16 ${plan.textColor} mx-auto mb-4`} />
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-white">
                      ${isAnnual ? plan.price.annual.toLocaleString() : plan.price.monthly.toLocaleString()}
                    </span>
                    <span className="text-gray-400 ml-2">
                      /{isAnnual ? 'year' : 'month'}
                    </span>
                    {isAnnual && (
                      <div className="text-green-400 text-sm mt-2">
                        Save ${((plan.price.monthly * 12) - plan.price.annual).toLocaleString()}/year
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                  {plan.limitations.map((limitation, limitIndex) => (
                    <div key={limitIndex} className="flex items-center opacity-60">
                      <div className="w-5 h-5 border border-gray-500 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-gray-400">{limitation}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full cyber-button ${plan.popular ? 'cyber-button' : 'cyber-button-secondary'} py-3`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SAAS Plans */}
      <section className="py-16 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 neon-text">Micro SAAS Solutions</h2>
            <p className="text-xl text-gray-300">Individual AI tools for specific business needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {microSaasPlans.map((plan, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 cyber-card hover:from-cyan-600/20 hover:to-purple-600/20 transition-all duration-300">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">{plan.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                  <div className="text-3xl font-bold text-cyan-400 mb-4">
                    ${plan.price}
                    <span className="text-gray-400 text-lg">/month</span>
                  </div>
                </div>
                <div className="space-y-2 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full cyber-button-secondary py-2">
                  Try Free
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 neon-text">Additional Services</h2>
            <p className="text-xl text-gray-300">Enhance your solution with these add-ons</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 cyber-card">
                <addon.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{addon.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{addon.description}</p>
                <div className="text-2xl font-bold text-cyan-400 mb-4">
                  ${addon.price.toLocaleString()}
                </div>
                <button className="w-full cyber-button-secondary py-2">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 neon-text">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300">Everything you need to know about our pricing</p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 cyber-card">
                <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 neon-text">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Schedule a free consultation to discuss your needs and find the perfect plan for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button inline-flex items-center justify-center px-8 py-4"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="cyber-button-secondary inline-flex items-center justify-center px-8 py-4"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
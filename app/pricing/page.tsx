'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, ArrowRight, Zap, Shield, Users, Clock } from 'lucide-react';

interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  popular: boolean;
  category: string;
  cta: string;
  icon: React.ReactNode;
}

const PricingPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('AI Services');

  const pricingPlans: PricingPlan[] = [
    // AI Services
    {
      id: 'ai-basic',
      name: 'AI Starter',
      description: 'Perfect for small businesses getting started with AI',
      price: '$299',
      period: '/month',
      features: [
        'Basic AI chatbot',
        'Email automation',
        'Data analysis tools',
        'Email support',
        '5,000 API calls/month',
        'Basic analytics'
      ],
      popular: false,
      category: 'AI Services',
      cta: 'Start Free Trial',
      icon: <Zap className="w-8 h-8 text-blue-500" />
    },
    {
      id: 'ai-pro',
      name: 'AI Professional',
      description: 'Advanced AI solutions for growing businesses',
      price: '$799',
      period: '/month',
      features: [
        'Advanced AI chatbot',
        'Custom AI models',
        'Predictive analytics',
        'Priority support',
        '50,000 API calls/month',
        'Advanced analytics',
        'Integration support',
        'Custom training'
      ],
      popular: true,
      category: 'AI Services',
      cta: 'Start Free Trial',
      icon: <Star className="w-8 h-8 text-yellow-500" />
    },
    {
      id: 'ai-enterprise',
      name: 'AI Enterprise',
      description: 'Complete AI platform for large organizations',
      price: '$2,499',
      period: '/month',
      features: [
        'Custom AI solutions',
        'Unlimited API calls',
        'Dedicated support',
        'Custom integrations',
        'Advanced security',
        'SLA guarantee',
        '24/7 support',
        'Custom development'
      ],
      popular: false,
      category: 'AI Services',
      cta: 'Contact Sales',
      icon: <Shield className="w-8 h-8 text-purple-500" />
    },

    // IT Services
    {
      id: 'it-basic',
      name: 'IT Essentials',
      description: 'Basic IT support and maintenance',
      price: '$499',
      period: '/month',
      features: [
        '24/7 monitoring',
        'Basic security',
        'Email support',
        'Monthly reports',
        'Backup solutions',
        'Software updates'
      ],
      popular: false,
      category: 'IT Services',
      cta: 'Get Started',
      icon: <Users className="w-8 h-8 text-green-500" />
    },
    {
      id: 'it-pro',
      name: 'IT Professional',
      description: 'Comprehensive IT management and support',
      price: '$1,299',
      period: '/month',
      features: [
        '24/7 monitoring & support',
        'Advanced security',
        'Priority support',
        'Weekly reports',
        'Cloud management',
        'Network optimization',
        'Disaster recovery',
        'Compliance support'
      ],
      popular: true,
      category: 'IT Services',
      cta: 'Get Started',
      icon: <Star className="w-8 h-8 text-yellow-500" />
    },
    {
      id: 'it-enterprise',
      name: 'IT Enterprise',
      description: 'Complete IT infrastructure management',
      price: '$3,999',
      period: '/month',
      features: [
        'Dedicated IT team',
        'Custom solutions',
        'SLA guarantee',
        'Daily reports',
        'Multi-cloud management',
        'Advanced security',
        'Custom integrations',
        '24/7 phone support'
      ],
      popular: false,
      category: 'IT Services',
      cta: 'Contact Sales',
      icon: <Shield className="w-8 h-8 text-purple-500" />
    },

    // Micro SaaS
    {
      id: 'saas-starter',
      name: 'SaaS Starter',
      description: 'Essential tools for small teams',
      price: '$99',
      period: '/month',
      features: [
        '5 user accounts',
        'Basic analytics',
        'Email support',
        'Standard templates',
        'Mobile app access',
        'Basic integrations'
      ],
      popular: false,
      category: 'Micro SaaS',
      cta: 'Start Free Trial',
      icon: <Zap className="w-8 h-8 text-blue-500" />
    },
    {
      id: 'saas-growth',
      name: 'SaaS Growth',
      description: 'Advanced features for growing teams',
      price: '$299',
      period: '/month',
      features: [
        '25 user accounts',
        'Advanced analytics',
        'Priority support',
        'Custom templates',
        'API access',
        'Advanced integrations',
        'White-label options',
        'Custom branding'
      ],
      popular: true,
      category: 'Micro SaaS',
      cta: 'Start Free Trial',
      icon: <Star className="w-8 h-8 text-yellow-500" />
    },
    {
      id: 'saas-enterprise',
      name: 'SaaS Enterprise',
      description: 'Complete solution for large organizations',
      price: '$999',
      period: '/month',
      features: [
        'Unlimited users',
        'Custom analytics',
        'Dedicated support',
        'Custom development',
        'Advanced security',
        'SLA guarantee',
        'On-premise deployment',
        'Custom integrations'
      ],
      popular: false,
      category: 'Micro SaaS',
      cta: 'Contact Sales',
      icon: <Shield className="w-8 h-8 text-purple-500" />
    }
  ];

  const categories = ['AI Services', 'IT Services', 'Micro SaaS'];

  const filteredPlans = pricingPlans.filter(plan => plan.category === selectedCategory);

  const features = [
    'No setup fees',
    'Cancel anytime',
    '30-day money-back guarantee',
    '24/7 customer support',
    'Regular updates and improvements',
    'Secure and compliant'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Pricing - Zion Tech Group | Transparent Pricing Plans</title>
        <meta name="description" content="Choose the perfect plan for your business needs. Transparent pricing for AI services, IT solutions, and Micro SaaS tools with no hidden fees." />
        <meta name="keywords" content="pricing, AI services pricing, IT services pricing, micro SaaS pricing, business solutions" />
        <meta property="og:title" content="Pricing - Zion Tech Group" />
        <meta property="og:description" content="Choose the perfect plan for your business needs. Transparent pricing for AI services, IT solutions, and Micro SaaS tools." />
        <meta property="og:url" content="https://ziontechgroup.com/pricing" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Simple, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Transparent</span> Pricing
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Choose the perfect plan for your business needs. No hidden fees, no surprises. Start with a free trial and scale as you grow.
          </p>
        </div>
      </section>

      {/* Category Selector */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-cyan-500 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">{selectedCategory} Pricing</h2>
            <p className="text-xl text-gray-300">Choose the plan that fits your needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPlans.map((plan) => (
              <div
                key={plan.id}
                className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular
                    ? 'border-cyan-400 shadow-2xl shadow-cyan-500/25'
                    : 'border-white/20 hover:border-cyan-400/50'
                }`}
              >
                {plan.popular && (
                  <div className="flex items-center justify-center mb-6">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className="flex justify-center mb-4">
                    {plan.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600'
                    : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">What's Included</h2>
            <p className="text-xl text-gray-300">All plans include these benefits</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300">Everything you need to know about our pricing</p>
          </div>

          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Can I change my plan anytime?</h3>
              <p className="text-gray-300">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Is there a free trial available?</h3>
              <p className="text-gray-300">Yes, we offer a 30-day free trial for all our plans. No credit card required to get started.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">What payment methods do you accept?</h3>
              <p className="text-gray-300">We accept all major credit cards, PayPal, and bank transfers for enterprise plans.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Do you offer custom pricing for large organizations?</h3>
              <p className="text-gray-300">Yes, we offer custom pricing and solutions for large enterprises. Contact our sales team to discuss your specific needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our solutions to grow and succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 font-semibold py-4 px-8 rounded-lg transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;

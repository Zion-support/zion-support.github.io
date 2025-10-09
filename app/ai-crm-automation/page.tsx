'use client';
import React from 'react';
import { CheckCircle, Star, Zap, Users, BarChart, Target } from 'lucide-react';

const AICRMAutomationPage: React.FC = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6 text-green-500" />,
      title: 'AI Lead Scoring',
      description: 'Automatically score and prioritize leads using machine learning to identify your highest-value prospects.'
    },
    {
      icon: <Target className="w-6 h-6 text-blue-500" />,
      title: 'Predictive Analytics',
      description: 'Forecast sales outcomes, identify upsell opportunities, and predict customer churn before it happens.'
    },
    {
      icon: <Users className="w-6 h-6 text-purple-500" />,
      title: 'Customer Journey Mapping',
      description: 'AI tracks and optimizes every touchpoint in your customer journey for maximum conversion rates.'
    },
    {
      icon: <BarChart className="w-6 h-6 text-orange-500" />,
      title: 'Sales Forecasting',
      description: 'Accurate revenue predictions and pipeline analysis powered by advanced AI algorithms.'
    }
  ];

  const capabilities = [
    'AI-powered lead qualification',
    'Automated follow-up sequences',
    'Predictive customer behavior analysis',
    'Sales opportunity identification',
    'Customer lifetime value prediction',
    'Churn prevention automation',
    'Email and phone call automation',
    'Integration with 100+ tools',
    'Real-time sales analytics',
    'Custom workflow automation'
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$149',
      period: '/month',
      description: 'Perfect for small sales teams',
      features: [
        'Up to 1,000 contacts',
        'Basic AI automation',
        'Email integration',
        'Basic reporting',
        'Email support',
        '5GB storage'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$399',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 10,000 contacts',
        'Advanced AI features',
        'Phone integration',
        'Advanced analytics',
        'Priority support',
        '50GB storage',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited contacts',
        'Full AI suite',
        'Custom integrations',
        'Dedicated manager',
        '24/7 phone support',
        'Unlimited storage',
        'White-label options'
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      metric: '250%',
      description: 'Increase in lead conversion rates'
    },
    {
      metric: '70%',
      description: 'Reduction in manual data entry'
    },
    {
      metric: '45%',
      description: 'Improvement in sales forecasting accuracy'
    },
    {
      metric: '90%',
      description: 'Time saved on follow-up activities'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-green-500/10 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4 mr-2" />
              AI CRM Automation
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI CRM Automation
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your sales process with AI-powered CRM automation. Increase lead conversion by 250% 
              and reduce manual work by 70% with intelligent customer relationship management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                📞 Call Now: (302) 464-0950
              </a>
              <a
                href="/contact"
                className="border-2 border-green-500 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition-all duration-200"
              >
                Get Free Demo
              </a>
            </div>
          </div>

          {/* Benefits Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">
                  {benefit.metric}
                </div>
                <div className="text-gray-300 text-sm">
                  {benefit.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Powerful AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI CRM automation platform uses machine learning to optimize every aspect of your sales process
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-green-500/50 transition-all duration-300">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Complete CRM Automation Suite
            </h2>
            <p className="text-xl text-gray-300">
              Everything you need to automate and optimize your customer relationships
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Core Capabilities</h3>
              <div className="grid grid-cols-1 gap-4">
                {capabilities.slice(0, 5).map((capability, index) => (
                  <div key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    {capability}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Advanced Features</h3>
              <div className="grid grid-cols-1 gap-4">
                {capabilities.slice(5).map((capability, index) => (
                  <div key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    {capability}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300">
              Choose the plan that fits your sales team and customer base
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-green-500 shadow-2xl shadow-green-500/20' 
                  : 'border-white/10 hover:border-green-500/50'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white hover:from-green-600 hover:to-blue-700'
                      : 'border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Sales Process?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join thousands of sales teams already using our AI CRM automation to close more deals and grow faster
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              📞 Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              ✉️ Email Us
            </a>
          </div>
          <p className="text-green-200 text-sm mt-4">
            📍 364 E Main St STE 1008, Middletown DE 19709
          </p>
        </div>
      </section>
    </div>
  );
};

export default AICRMAutomationPage;
'use client';
import React from 'react';
import { CheckCircle, Star, Mail, Target, BarChart, Brain, Users, Zap, TrendingUp } from 'lucide-react';

const AIEmailMarketingPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Content Generation',
      description: 'Create compelling email content automatically with advanced AI writing',
      benefits: ['10x faster content creation', '95% open rate improvement', 'Personalized messaging']
    },
    {
      icon: Target,
      title: 'Smart Segmentation',
      description: 'Automatically segment your audience based on behavior and preferences',
      benefits: ['40% higher click rates', '60% better engagement', 'Automated targeting']
    },
    {
      icon: BarChart,
      title: 'Predictive Analytics',
      description: 'Predict the best send times and content for maximum engagement',
      benefits: ['35% increase in open rates', '50% higher conversion', 'Optimal timing']
    },
    {
      icon: Users,
      title: 'Personalization Engine',
      description: 'Create hyper-personalized emails for each subscriber automatically',
      benefits: ['80% more relevant content', '45% higher engagement', 'Dynamic personalization']
    },
    {
      icon: Mail,
      title: 'Automated Campaigns',
      description: 'Set up complex email sequences that run automatically based on triggers',
      benefits: ['24/7 automation', 'Welcome series', 'Abandoned cart recovery']
    },
    {
      icon: TrendingUp,
      title: 'A/B Testing AI',
      description: 'Automatically test and optimize email campaigns for better performance',
      benefits: ['Continuous optimization', 'Data-driven decisions', 'Performance insights']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses starting with email marketing',
      features: [
        'Up to 1,000 subscribers',
        'Basic AI content generation',
        'Email templates',
        'Basic analytics',
        'Email support',
        'Mobile app'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses with active email campaigns',
      features: [
        'Up to 10,000 subscribers',
        'Advanced AI features',
        'Automation workflows',
        'Advanced analytics',
        'Priority support',
        'A/B testing',
        'Integrations',
        'Custom templates'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations with extensive email marketing needs',
      features: [
        'Unlimited subscribers',
        'Full AI suite',
        'Custom AI models',
        'White-label options',
        'Dedicated support',
        'Advanced automation',
        'Custom integrations',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'E-commerce',
      description: 'Drive sales with personalized product recommendations and abandoned cart recovery',
      icon: '🛒',
      metrics: ['45% increase in sales', '60% cart recovery rate', '35% higher AOV']
    },
    {
      title: 'SaaS Platforms',
      description: 'Onboard users and reduce churn with intelligent email sequences',
      icon: '💻',
      metrics: ['50% faster onboarding', '40% reduction in churn', '60% feature adoption']
    },
    {
      title: 'Content Marketing',
      description: 'Engage audiences with AI-generated content and personalized newsletters',
      icon: '📝',
      metrics: ['70% higher engagement', '80% more subscribers', '50% better retention']
    },
    {
      title: 'Event Marketing',
      description: 'Promote events and drive registrations with targeted email campaigns',
      icon: '🎉',
      metrics: ['55% higher attendance', '40% more registrations', '30% cost reduction']
    }
  ];

  const emailTypes = [
    {
      title: 'Welcome Series',
      description: 'Automated onboarding emails that introduce new subscribers to your brand',
      openRate: '85%',
      clickRate: '25%'
    },
    {
      title: 'Product Recommendations',
      description: 'AI-powered product suggestions based on browsing and purchase history',
      openRate: '78%',
      clickRate: '32%'
    },
    {
      title: 'Abandoned Cart Recovery',
      description: 'Automated emails to recover abandoned shopping carts and boost sales',
      openRate: '82%',
      clickRate: '28%'
    },
    {
      title: 'Re-engagement Campaigns',
      description: 'Win back inactive subscribers with personalized re-engagement strategies',
      openRate: '65%',
      clickRate: '18%'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-pink-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-pink-600 to-rose-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Email Marketing
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-pink-100 max-w-3xl mx-auto">
              Transform your email marketing with AI-powered content generation, personalization, and automation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="bg-white text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-pink-50 transition-colors inline-flex items-center"
              >
                📞 +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-pink-600 transition-colors"
              >
                ✉️ Start Free Trial
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Email Types Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              High-Performing Email Types
            </h2>
            <p className="text-xl text-gray-600">
              AI-optimized email campaigns that deliver exceptional results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {emailTypes.map((emailType, index) => (
              <div key={index} className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg p-6 border border-pink-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{emailType.title}</h3>
                <p className="text-gray-600 mb-4">{emailType.description}</p>
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">
                    <span className="font-semibold text-green-600">{emailType.openRate} open rate</span>
                  </div>
                  <div className="text-sm text-gray-500">
                    <span className="font-semibold text-blue-600">{emailType.clickRate} click rate</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful AI Features
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to create, send, and optimize email campaigns
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mr-4">
                    <feature.icon className="w-6 h-6 text-pink-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Affordable Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Start free and scale as you grow with transparent pricing
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white rounded-lg shadow-lg p-6 relative ${plan.popular ? 'ring-2 ring-pink-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-pink-600">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
                  plan.popular 
                    ? 'bg-pink-600 text-white hover:bg-pink-700' 
                    : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-600">
              See how AI email marketing transforms different industries
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4 text-center">{useCase.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">{useCase.title}</h3>
                <p className="text-gray-600 mb-4 text-center">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.metrics.map((metric, metricIndex) => (
                    <li key={metricIndex} className="flex items-center text-sm text-gray-600">
                      <Zap className="w-4 h-4 text-pink-500 mr-2 flex-shrink-0" />
                      {metric}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pink-600 to-rose-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Email Marketing?
          </h2>
          <p className="text-xl mb-8 text-pink-100">
            Start creating AI-powered email campaigns that drive results
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950"
              className="bg-white text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-pink-50 transition-colors inline-flex items-center"
            >
              📞 +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-pink-600 transition-colors"
            >
              ✉️ kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-8 text-sm text-pink-200">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIEmailMarketingPage;
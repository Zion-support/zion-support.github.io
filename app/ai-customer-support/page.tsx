'use client';
import React from 'react';
import { CheckCircle, Star, MessageCircle, Clock, Users, Shield, Phone, Mail } from 'lucide-react';

const AICustomerSupportPage: React.FC = () => {
  const features = [
    {
      icon: MessageCircle,
      title: 'Intelligent Chatbots',
      description: 'AI-powered chatbots that understand context and provide accurate responses 24/7.',
      benefits: ['Instant responses', 'Multi-language support', 'Context awareness', 'Escalation to humans']
    },
    {
      icon: Users,
      title: 'Omnichannel Support',
      description: 'Seamless customer support across all channels - chat, email, phone, and social media.',
      benefits: ['Unified experience', 'Channel switching', 'Consistent responses', 'Customer history']
    },
    {
      icon: Clock,
      title: 'Real-time Analytics',
      description: 'Monitor customer satisfaction and support performance with real-time dashboards.',
      benefits: ['Live metrics', 'Performance tracking', 'Customer insights', 'Trend analysis']
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with GDPR, HIPAA, and SOC 2 compliance built-in.',
      benefits: ['Data encryption', 'Privacy protection', 'Audit trails', 'Compliance reporting']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 1,000 conversations/month',
        'Basic chatbot functionality',
        'Email support',
        'Standard integrations'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 10,000 conversations/month',
        'Advanced AI capabilities',
        'Omnichannel support',
        'Priority support',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations',
      features: [
        'Unlimited conversations',
        'Custom AI training',
        'Dedicated support',
        'On-premise deployment',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const stats = [
    { number: '95%', label: 'Customer Satisfaction' },
    { number: '60%', label: 'Faster Resolution' },
    { number: '24/7', label: 'Availability' },
    { number: '50+', label: 'Languages Supported' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <section className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Customer Support
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Revolutionize your customer support with AI-powered solutions that provide instant, 
            intelligent responses and seamless omnichannel experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button inline-flex items-center justify-center"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300 inline-flex items-center justify-center"
            >
              <Mail className="w-4 h-4 mr-2" />
              Get Free Demo
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
              <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-300 mb-4">
                {feature.description}
              </p>
              <ul className="space-y-2">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-gray-800/50 rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Proven Results
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`cyber-card p-6 relative ${
                  plan.popular ? 'border-2 border-cyan-400' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-400 text-black px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <div className="text-4xl font-bold text-cyan-400 mb-2">
                  {plan.price}
                  <span className="text-lg text-gray-400">{plan.period}</span>
                </div>
                <p className="text-gray-300 mb-6">
                  {plan.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-cyan-400 text-black hover:bg-cyan-300'
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Customer Support?
          </h2>
          <p className="text-xl text-cyan-100 mb-6">
            Join 1,000+ companies already using our AI customer support solutions.
          </p>
          <a
            href="tel:+13024640950"
            className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center"
          >
            <Phone className="w-4 h-4 mr-2" />
            Call (302) 464-0950
          </a>
        </div>
      </section>
    </div>
  );
};

export default AICustomerSupportPage;

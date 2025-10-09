'use client';
import React from 'react';
import { CheckCircle, Star, Zap, Mail, Users, BarChart } from 'lucide-react';

const AIEmailAutomationPage: React.FC = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6 text-blue-500" />,
      title: 'Smart Email Sequences',
      description: 'AI-powered email sequences that adapt based on recipient behavior and engagement patterns.'
    },
    {
      icon: <Users className="w-6 h-6 text-green-500" />,
      title: 'Advanced Segmentation',
      description: 'Automatically segment your audience using AI to deliver highly targeted and relevant content.'
    },
    {
      icon: <BarChart className="w-6 h-6 text-purple-500" />,
      title: 'Real-time Analytics',
      description: 'Track performance with detailed analytics and AI insights to optimize your email campaigns.'
    },
    {
      icon: <Clock className="w-6 h-6 text-orange-500" />,
      title: 'Perfect Timing',
      description: 'AI determines the optimal send times for each recipient to maximize open and click rates.'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 5,000 contacts',
        'Unlimited email campaigns',
        'Basic AI automation',
        'Email templates library',
        'Basic analytics',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 25,000 contacts',
        'Advanced AI automation',
        'A/B testing',
        'Advanced segmentation',
        'Detailed analytics',
        'Priority support',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited contacts',
        'Full AI suite',
        'Custom integrations',
        'Dedicated account manager',
        'Advanced reporting',
        '24/7 phone support',
        'Custom training'
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      metric: '300%',
      description: 'Average increase in email engagement rates'
    },
    {
      metric: '85%',
      description: 'Reduction in manual email management time'
    },
    {
      metric: '2.5x',
      description: 'Higher conversion rates with AI optimization'
    },
    {
      metric: '99.9%',
      description: 'Email delivery success rate'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Mail className="w-4 h-4 mr-2" />
              AI Email Automation
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI-Powered Email Automation
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your email marketing with intelligent automation that learns, adapts, and delivers 
              personalized experiences at scale. Boost engagement by 300% with our advanced AI technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                📞 Call Now: (302) 464-0950
              </a>
              <a
                href="/contact"
                className="border-2 border-blue-500 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-200"
              >
                Get Free Demo
              </a>
            </div>
          </div>

          {/* Benefits Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
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
              Our AI email automation platform uses machine learning to optimize every aspect of your email marketing
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
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

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300">
              Choose the plan that fits your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-blue-500 shadow-2xl shadow-blue-500/20' 
                  : 'border-white/10 hover:border-blue-500/50'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
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
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
                      : 'border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white'
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
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Email Marketing?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of businesses already using our AI email automation to boost their marketing results
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              📞 Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              ✉️ Email Us
            </a>
          </div>
          <p className="text-blue-200 text-sm mt-4">
            📍 364 E Main St STE 1008, Middletown DE 19709
          </p>
        </div>
      </section>
    </div>
  );
};

export default AIEmailAutomationPage;
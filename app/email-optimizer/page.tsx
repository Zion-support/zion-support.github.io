import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Mail as MailIcon, Target, BarChart, Zap, Users } from 'lucide-react';

const EmailOptimizerPage: React.FC = () => {
  const optimizerFeatures = [
    {
      title: 'AI Subject Line Optimization',
      description: 'Generate high-performing subject lines using AI analysis of successful campaigns.',
      icon: '📧',
      benefits: [
        'A/B testing suggestions',
        'Performance prediction',
        'Emotion analysis',
        'Length optimization'
      ]
    },
    {
      title: 'Send Time Optimization',
      description: 'AI determines the optimal send time for each subscriber to maximize open rates.',
      icon: '⏰',
      benefits: [
        'Personalized send times',
        'Time zone optimization',
        'Engagement pattern analysis',
        'Automatic scheduling'
      ]
    },
    {
      title: 'Content Optimization',
      description: 'AI analyzes and optimizes email content for better engagement and conversion.',
      icon: '✍️',
      benefits: [
        'Content analysis',
        'Readability optimization',
        'CTA placement',
        'Personalization suggestions'
      ]
    },
    {
      title: 'List Segmentation',
      description: 'Intelligent audience segmentation based on behavior, preferences, and engagement.',
      icon: '🎯',
      benefits: [
        'Behavioral segmentation',
        'Demographic targeting',
        'Engagement-based groups',
        'Dynamic list updates'
      ]
    },
    {
      title: 'Deliverability Optimization',
      description: 'Improve email deliverability with AI-powered reputation management and optimization.',
      icon: '📬',
      benefits: [
        'Reputation monitoring',
        'Spam score analysis',
        'Authentication setup',
        'Deliverability tracking'
      ]
    },
    {
      title: 'Performance Analytics',
      description: 'Comprehensive analytics with AI insights and optimization recommendations.',
      icon: '📊',
      benefits: [
        'Real-time tracking',
        'AI insights',
        'Performance predictions',
        'Optimization suggestions'
      ]
    }
  ];

  const optimizationTypes = [
    {
      type: 'Subject Line Optimization',
      description: 'AI-powered subject line testing and optimization',
      price: '$25/month',
      features: ['A/B testing', 'Performance analysis', 'Suggestions', 'Templates']
    },
    {
      type: 'Send Time Optimization',
      description: 'Optimal timing for maximum engagement',
      price: '$35/month',
      features: ['Timing analysis', 'Scheduling', 'Time zone handling', 'Performance tracking']
    },
    {
      type: 'Content Optimization',
      description: 'Email content analysis and improvement',
      price: '$45/month',
      features: ['Content analysis', 'Readability check', 'CTA optimization', 'Personalization']
    },
    {
      type: 'List Segmentation',
      description: 'Intelligent audience segmentation',
      price: '$55/month',
      features: ['Behavioral segmentation', 'Demographic targeting', 'Dynamic lists', 'Analytics']
    },
    {
      type: 'Deliverability Optimization',
      description: 'Improve email deliverability and reputation',
      price: '$65/month',
      features: ['Reputation monitoring', 'Spam analysis', 'Authentication', 'Deliverability tracking']
    },
    {
      type: 'Full Optimization Suite',
      description: 'Complete email optimization solution',
      price: '$99/month',
      features: ['All features', 'Advanced analytics', 'Custom models', 'Priority support']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$25/month',
      description: 'Perfect for small businesses getting started with email optimization',
      features: [
        'Up to 10,000 emails/month',
        'Basic optimization',
        'Subject line testing',
        'Email support',
        '1 user included'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$99/month',
      description: 'Advanced features for growing businesses',
      features: [
        'Up to 100,000 emails/month',
        'Advanced AI optimization',
        'Full optimization suite',
        'Priority support',
        'Up to 5 users',
        'API access',
        'Custom models'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$299/month',
      description: 'Complete email optimization for large organizations',
      features: [
        'Unlimited emails',
        'Custom AI models',
        'White-label solution',
        'Dedicated support',
        'Unlimited users',
        'Advanced integrations',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Email Optimizer - Zion Tech Group</title>
        <meta name="description" content="AI-powered email optimization with subject line testing, send time optimization, and deliverability improvement. Boost your email performance." />
        <meta name="keywords" content="ai email optimizer, email optimization, subject line testing, send time optimization, email deliverability, email marketing" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            AI Email Optimizer
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            AI-powered email optimization with subject line testing, send time optimization, and deliverability improvement. Boost your email performance.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">40%</div>
              <div className="text-gray-300">Higher Open Rates</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">60%</div>
              <div className="text-gray-300">More Clicks</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">80%</div>
              <div className="text-gray-300">Time Saved</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">AI Optimization</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="text-white font-medium">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="text-white font-medium">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span className="text-white font-medium">Middletown, DE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            AI-Powered Email Optimization Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {optimizerFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
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

      {/* Optimization Types Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Optimization Types & Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {optimizationTypes.map((optimization, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{optimization.type}</h3>
                  <p className="text-gray-600 text-sm mb-4">{optimization.description}</p>
                  <div className="text-2xl font-bold text-green-600 mb-4">{optimization.price}</div>
                </div>
                <ul className="space-y-2">
                  {optimization.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose AI Email Optimizer?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MailIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Intelligent Optimization</h3>
              <p className="text-gray-300">AI analyzes your email performance and automatically optimizes for better results.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Precise Targeting</h3>
              <p className="text-gray-300">Advanced segmentation and personalization ensure the right message reaches the right person.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Continuous Improvement</h3>
              <p className="text-gray-300">AI continuously learns and improves your email performance over time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Choose Your Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105 ${plan.popular ? 'ring-2 ring-purple-500 relative' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{plan.price}</div>
                  <div className="text-gray-500 text-sm">per month</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${plan.name} AI Email Optimizer Plan`}
                  className={`w-full py-3 px-4 rounded-lg font-medium text-center transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
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
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Optimize Your Email Performance?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Let AI help you create more engaging emails and achieve better results. Start optimizing today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmailOptimizerPage;
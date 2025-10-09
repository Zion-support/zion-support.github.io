import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Mail as MailIcon, Target, BarChart, Zap, Users } from 'lucide-react';

const AIEmailMarketingPage: React.FC = () => {
  const emailFeatures = [
    {
      title: 'AI Content Generation',
      description: 'Generate compelling email content, subject lines, and calls-to-action using advanced AI.',
      icon: '✍️',
      benefits: [
        'Generate 100+ subject lines',
        'Personalized email content',
        'A/B testing suggestions',
        'Optimize for engagement'
      ]
    },
    {
      title: 'Smart Segmentation',
      description: 'Automatically segment your audience based on behavior, preferences, and engagement patterns.',
      icon: '🎯',
      benefits: [
        'Behavioral segmentation',
        'Demographic targeting',
        'Engagement-based groups',
        'Dynamic list updates'
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
      title: 'Predictive Analytics',
      description: 'Predict subscriber behavior, churn risk, and campaign performance before sending.',
      icon: '🔮',
      benefits: [
        'Churn prediction',
        'Engagement forecasting',
        'Revenue prediction',
        'Campaign optimization'
      ]
    },
    {
      title: 'Automated Workflows',
      description: 'Create sophisticated email sequences that adapt based on subscriber behavior.',
      icon: '🔄',
      benefits: [
        'Behavior-triggered emails',
        'Drip campaign automation',
        'Welcome sequences',
        'Re-engagement campaigns'
      ]
    },
    {
      title: 'Performance Analytics',
      description: 'Comprehensive analytics with AI-powered insights and optimization recommendations.',
      icon: '📊',
      benefits: [
        'Real-time performance tracking',
        'AI optimization suggestions',
        'ROI analysis',
        'Competitive benchmarking'
      ]
    }
  ];

  const campaignTypes = [
    {
      type: 'Welcome Series',
      description: 'Onboard new subscribers with personalized welcome sequences',
      price: '$0.05 per email',
      features: ['3-5 email sequence', 'Personalization', 'A/B testing', 'Analytics']
    },
    {
      type: 'Newsletter',
      description: 'Regular content updates and company news',
      price: '$0.03 per email',
      features: ['Template library', 'Content suggestions', 'Scheduling', 'Performance tracking']
    },
    {
      type: 'Promotional',
      description: 'Sales and promotional campaigns with AI optimization',
      price: '$0.08 per email',
      features: ['Dynamic content', 'Urgency triggers', 'Personalization', 'Conversion tracking']
    },
    {
      type: 'Re-engagement',
      description: 'Win back inactive subscribers with targeted campaigns',
      price: '$0.06 per email',
      features: ['Inactivity detection', 'Special offers', 'Behavioral triggers', 'Churn prevention']
    },
    {
      type: 'Transactional',
      description: 'Order confirmations, receipts, and account updates',
      price: '$0.02 per email',
      features: ['Real-time triggers', 'Template customization', 'Brand consistency', 'Delivery tracking']
    },
    {
      type: 'Event Marketing',
      description: 'Promote events, webinars, and special occasions',
      price: '$0.07 per email',
      features: ['Event integration', 'RSVP tracking', 'Reminder sequences', 'Post-event follow-up']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$179/month',
      description: 'Perfect for small businesses starting with email marketing',
      features: [
        'Up to 10,000 subscribers',
        'Basic AI features',
        'Email templates',
        'Email support',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$399/month',
      description: 'Advanced features for growing businesses',
      features: [
        'Up to 50,000 subscribers',
        'Advanced AI optimization',
        'Custom templates',
        'Priority support',
        'Advanced analytics',
        'A/B testing',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$899/month',
      description: 'Complete email marketing solution for large organizations',
      features: [
        'Unlimited subscribers',
        'Custom AI models',
        'White-label solution',
        'Dedicated support',
        'Advanced integrations',
        'Custom development',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Email Marketing - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered email marketing with intelligent content generation, smart segmentation, and automated workflows. Boost engagement and conversions." />
        <meta name="keywords" content="ai email marketing, email automation, email segmentation, email analytics, email campaigns, marketing automation" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            AI Email Marketing
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Revolutionize your email marketing with AI-powered content generation, smart segmentation, and automated workflows that drive engagement and conversions.
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
              <div className="text-3xl font-bold text-orange-400 mb-2">300%</div>
              <div className="text-gray-300">ROI Increase</div>
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
            AI-Powered Email Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {emailFeatures.map((feature, index) => (
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

      {/* Campaign Types Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Campaign Types & Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {campaignTypes.map((campaign, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{campaign.type}</h3>
                  <p className="text-gray-600 text-sm mb-4">{campaign.description}</p>
                  <div className="text-2xl font-bold text-green-600 mb-4">{campaign.price}</div>
                </div>
                <ul className="space-y-2">
                  {campaign.features.map((feature, featureIndex) => (
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
            Why Choose AI Email Marketing?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MailIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Intelligent Content</h3>
              <p className="text-gray-300">AI generates compelling email content that resonates with your audience and drives action.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Smart Targeting</h3>
              <p className="text-gray-300">Advanced segmentation and personalization ensure the right message reaches the right person.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Automated Optimization</h3>
              <p className="text-gray-300">AI continuously optimizes your campaigns for maximum engagement and conversion rates.</p>
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
                  href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${plan.name} AI Email Marketing Plan`}
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
            Ready to Transform Your Email Marketing?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join thousands of businesses using AI to create more engaging emails and drive better results.
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

export default AIEmailMarketingPage;
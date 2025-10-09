import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Users, Target, BarChart, Zap, Heart } from 'lucide-react';

const CRMLitePage: React.FC = () => {
  const crmFeatures = [
    {
      title: 'Contact Management',
      description: 'Organize and manage customer contacts with AI-powered data enrichment.',
      icon: '👥',
      benefits: [
        'Contact database',
        'Data enrichment',
        'Contact history',
        'Relationship mapping'
      ]
    },
    {
      title: 'Lead Tracking',
      description: 'Track leads through the sales pipeline with intelligent scoring and automation.',
      icon: '🎯',
      benefits: [
        'Lead scoring',
        'Pipeline tracking',
        'Automated follow-ups',
        'Conversion analytics'
      ]
    },
    {
      title: 'Sales Analytics',
      description: 'Comprehensive sales analytics and reporting for better decision making.',
      icon: '📊',
      benefits: [
        'Sales metrics',
        'Performance tracking',
        'Forecasting',
        'Custom reports'
      ]
    },
    {
      title: 'Email Integration',
      description: 'Seamless email integration with tracking and automation capabilities.',
      icon: '📧',
      benefits: [
        'Email tracking',
        'Template library',
        'Automated sequences',
        'Response analytics'
      ]
    },
    {
      title: 'Task Management',
      description: 'Built-in task management with AI-powered prioritization and reminders.',
      icon: '✅',
      benefits: [
        'Task creation',
        'Priority setting',
        'Deadline tracking',
        'Team collaboration'
      ]
    },
    {
      title: 'Mobile Access',
      description: 'Full mobile access with offline capabilities and real-time sync.',
      icon: '📱',
      benefits: [
        'Mobile app',
        'Offline access',
        'Real-time sync',
        'Push notifications'
      ]
    }
  ];

  const crmTypes = [
    {
      type: 'Sales CRM',
      description: 'Focus on sales pipeline and lead management',
      price: '$59/month',
      features: ['Lead management', 'Sales pipeline', 'Deal tracking', 'Sales analytics']
    },
    {
      type: 'Marketing CRM',
      description: 'Marketing-focused customer relationship management',
      price: '$79/month',
      features: ['Campaign tracking', 'Customer segmentation', 'Marketing automation', 'ROI analysis']
    },
    {
      type: 'Service CRM',
      description: 'Customer service and support management',
      price: '$69/month',
      features: ['Ticket management', 'Customer support', 'Knowledge base', 'Satisfaction tracking']
    },
    {
      type: 'E-commerce CRM',
      description: 'E-commerce specific customer management',
      price: '$89/month',
      features: ['Order tracking', 'Customer behavior', 'Product recommendations', 'Loyalty programs']
    },
    {
      type: 'Real Estate CRM',
      description: 'Real estate specific customer and property management',
      price: '$99/month',
      features: ['Property management', 'Client tracking', 'Lead generation', 'Commission tracking']
    },
    {
      type: 'Healthcare CRM',
      description: 'Healthcare patient and practice management',
      price: '$119/month',
      features: ['Patient management', 'Appointment scheduling', 'Medical records', 'Compliance tracking']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$59/month',
      description: 'Perfect for small businesses getting started with CRM',
      features: [
        'Up to 1,000 contacts',
        'Basic lead tracking',
        'Email integration',
        'Mobile app',
        'Email support',
        '1 user included'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$149/month',
      description: 'Advanced features for growing businesses',
      features: [
        'Up to 10,000 contacts',
        'Advanced AI features',
        'Custom fields',
        'Priority support',
        'Up to 5 users',
        'API access',
        'Custom reporting'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$299/month',
      description: 'Complete CRM solution for large organizations',
      features: [
        'Unlimited contacts',
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
        <title>CRM Lite - Zion Tech Group</title>
        <meta name="description" content="Lightweight CRM with AI lead scoring, contact management, and sales pipeline automation. Perfect for small businesses and startups." />
        <meta name="keywords" content="crm lite, customer relationship management, lead management, sales crm, contact management, sales pipeline" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            CRM Lite
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Lightweight CRM with AI lead scoring, contact management, and sales pipeline automation. Perfect for small businesses and startups.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">60%</div>
              <div className="text-gray-300">Higher Conversion</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">80%</div>
              <div className="text-gray-300">Time Saved</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">90%</div>
              <div className="text-gray-300">Lead Accuracy</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">AI Automation</div>
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
            AI-Powered CRM Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {crmFeatures.map((feature, index) => (
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

      {/* CRM Types Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            CRM Types & Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {crmTypes.map((crm, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{crm.type}</h3>
                  <p className="text-gray-600 text-sm mb-4">{crm.description}</p>
                  <div className="text-2xl font-bold text-green-600 mb-4">{crm.price}</div>
                </div>
                <ul className="space-y-2">
                  {crm.features.map((feature, featureIndex) => (
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
            Why Choose CRM Lite?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Easy to Use</h3>
              <p className="text-gray-300">Simple, intuitive interface that your team can learn and use effectively from day one.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">AI-Powered</h3>
              <p className="text-gray-300">Intelligent lead scoring and automation help you focus on the most promising opportunities.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Affordable</h3>
              <p className="text-gray-300">Get enterprise-level CRM features at a fraction of the cost of traditional solutions.</p>
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
                  href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${plan.name} CRM Lite Plan`}
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
            Ready to Streamline Your Customer Relationships?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Start managing your customers more effectively with CRM Lite. Simple, powerful, and affordable.
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

export default CRMLitePage;
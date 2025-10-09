import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Globe, Target, BarChart, Zap, Users } from 'lucide-react';

const LandingPageBuilderPage: React.FC = () => {
  const builderFeatures = [
    {
      title: 'AI Page Generation',
      description: 'Generate high-converting landing pages using AI analysis of successful campaigns.',
      icon: '🤖',
      benefits: [
        'Instant page generation',
        'Conversion optimization',
        'A/B testing suggestions',
        'Performance prediction'
      ]
    },
    {
      title: 'Drag & Drop Editor',
      description: 'Intuitive visual editor with pre-built components and templates.',
      icon: '🛠️',
      benefits: [
        'Visual page builder',
        'Pre-built components',
        'Real-time preview',
        'Mobile responsive'
      ]
    },
    {
      title: 'Conversion Optimization',
      description: 'AI-powered optimization for maximum conversions and lead generation.',
      icon: '📈',
      benefits: [
        'Conversion tracking',
        'Optimization suggestions',
        'Heatmap analysis',
        'Performance insights'
      ]
    },
    {
      title: 'A/B Testing',
      description: 'Built-in A/B testing tools to optimize page performance.',
      icon: '🧪',
      benefits: [
        'Split testing',
        'Statistical analysis',
        'Winner selection',
        'Performance tracking'
      ]
    },
    {
      title: 'Form Builder',
      description: 'Create high-converting forms with AI-powered optimization.',
      icon: '📝',
      benefits: [
        'Form templates',
        'Field optimization',
        'Validation rules',
        'Lead capture'
      ]
    },
    {
      title: 'Analytics & Insights',
      description: 'Comprehensive analytics to track performance and optimize conversions.',
      icon: '📊',
      benefits: [
        'Real-time analytics',
        'Conversion tracking',
        'User behavior',
        'Performance reports'
      ]
    }
  ];

  const pageTypes = [
    {
      type: 'Lead Generation',
      description: 'High-converting pages for lead capture and email signups',
      price: '$29/month',
      features: ['Lead forms', 'Email capture', 'Conversion tracking', 'A/B testing']
    },
    {
      type: 'Sales Pages',
      description: 'Product and service sales pages with checkout integration',
      price: '$39/month',
      features: ['Product showcase', 'Pricing tables', 'Checkout integration', 'Payment processing']
    },
    {
      type: 'Event Pages',
      description: 'Event registration and promotion pages',
      price: '$35/month',
      features: ['Event details', 'Registration forms', 'Ticket sales', 'RSVP tracking']
    },
    {
      type: 'App Landing',
      description: 'Mobile app download and promotion pages',
      price: '$32/month',
      features: ['App showcase', 'Download buttons', 'Feature highlights', 'Store integration']
    },
    {
      type: 'Coming Soon',
      description: 'Pre-launch and coming soon pages',
      price: '$25/month',
      features: ['Countdown timers', 'Email collection', 'Social sharing', 'Launch updates']
    },
    {
      type: 'Custom Pages',
      description: 'Fully customized landing pages for specific needs',
      price: '$49/month',
      features: ['Custom design', 'Advanced features', 'API integration', 'Dedicated support']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29/month',
      description: 'Perfect for small businesses getting started',
      features: [
        'Up to 5 pages',
        'Basic templates',
        'Standard support',
        'Mobile responsive',
        '1 user included'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79/month',
      description: 'Advanced features for growing businesses',
      features: [
        'Up to 25 pages',
        'Advanced AI features',
        'A/B testing',
        'Priority support',
        'Up to 5 users',
        'API access',
        'Custom domains'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199/month',
      description: 'Complete landing page solution for large organizations',
      features: [
        'Unlimited pages',
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
        <title>AI Landing Page Builder - Zion Tech Group</title>
        <meta name="description" content="AI-powered landing page builder with drag-and-drop editor, conversion optimization, and A/B testing. Create high-converting pages effortlessly." />
        <meta name="keywords" content="ai landing page builder, landing page design, conversion optimization, a/b testing, lead generation, page builder" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            AI Landing Page Builder
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            AI-powered landing page builder with drag-and-drop editor, conversion optimization, and A/B testing. Create high-converting pages effortlessly.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">300%</div>
              <div className="text-gray-300">Higher Conversions</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">90%</div>
              <div className="text-gray-300">Time Saved</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">No-Code</div>
              <div className="text-gray-300">Required</div>
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
            AI-Powered Landing Page Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {builderFeatures.map((feature, index) => (
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

      {/* Page Types Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Page Types & Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pageTypes.map((page, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{page.type}</h3>
                  <p className="text-gray-600 text-sm mb-4">{page.description}</p>
                  <div className="text-2xl font-bold text-green-600 mb-4">{page.price}</div>
                </div>
                <ul className="space-y-2">
                  {page.features.map((feature, featureIndex) => (
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
            Why Choose AI Landing Page Builder?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">High Converting</h3>
              <p className="text-gray-300">AI analyzes successful campaigns to create pages that convert visitors into customers.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Easy to Use</h3>
              <p className="text-gray-300">Drag-and-drop editor makes it easy to create professional pages without coding.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Data-Driven</h3>
              <p className="text-gray-300">Comprehensive analytics help you understand performance and optimize for better results.</p>
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
                  href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${plan.name} AI Landing Page Builder Plan`}
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
            Ready to Build High-Converting Landing Pages?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Let AI help you create landing pages that convert visitors into customers. Start building today.
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

export default LandingPageBuilderPage;
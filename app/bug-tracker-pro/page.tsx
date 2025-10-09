import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Bug, Target, BarChart, Zap, Users } from 'lucide-react';

const BugTrackerProPage: React.FC = () => {
  const trackerFeatures = [
    {
      title: 'AI Bug Detection',
      description: 'Automatically detect bugs and issues using AI-powered analysis.',
      icon: '🤖',
      benefits: [
        'Automated bug detection',
        'Code analysis',
        'Performance monitoring',
        'Error prediction'
      ]
    },
    {
      title: 'Smart Prioritization',
      description: 'AI-powered bug prioritization based on impact and severity.',
      icon: '🎯',
      benefits: [
        'Impact analysis',
        'Severity scoring',
        'Priority ranking',
        'Resource allocation'
      ]
    },
    {
      title: 'Team Collaboration',
      description: 'Advanced collaboration tools for bug tracking and resolution.',
      icon: '👥',
      benefits: [
        'Real-time updates',
        'Team notifications',
        'Assignment management',
        'Progress tracking'
      ]
    },
    {
      title: 'Automated Workflows',
      description: 'Create automated workflows for bug lifecycle management.',
      icon: '⚙️',
      benefits: [
        'Workflow automation',
        'Status transitions',
        'Escalation rules',
        'Notification triggers'
      ]
    },
    {
      title: 'Integration & APIs',
      description: 'Seamless integration with development tools and CI/CD pipelines.',
      icon: '🔗',
      benefits: [
        'Git integration',
        'CI/CD hooks',
        'Tool integrations',
        'API access'
      ]
    },
    {
      title: 'Analytics & Reporting',
      description: 'Comprehensive analytics and reporting for bug management insights.',
      icon: '📊',
      benefits: [
        'Bug analytics',
        'Team performance',
        'Trend analysis',
        'Custom reports'
      ]
    }
  ];

  const trackerTypes = [
    {
      type: 'Software Bugs',
      description: 'Application and software bug tracking',
      price: '$25/month',
      features: ['Bug reporting', 'Status tracking', 'Resolution workflow', 'Team collaboration']
    },
    {
      type: 'Website Issues',
      description: 'Web application and website issue tracking',
      price: '$35/month',
      features: ['Browser compatibility', 'Performance issues', 'User experience', 'Accessibility']
    },
    {
      type: 'Mobile App Bugs',
      description: 'Mobile application bug and issue tracking',
      price: '$45/month',
      features: ['Platform-specific bugs', 'Device compatibility', 'Performance issues', 'User feedback']
    },
    {
      type: 'API Issues',
      description: 'API and service bug tracking',
      price: '$39/month',
      features: ['Endpoint issues', 'Response errors', 'Performance monitoring', 'Integration problems']
    },
    {
      type: 'Security Issues',
      description: 'Security vulnerability and issue tracking',
      price: '$59/month',
      features: ['Vulnerability tracking', 'Security scanning', 'Compliance monitoring', 'Incident response']
    },
    {
      type: 'Custom Tracking',
      description: 'Fully customized bug tracking solution',
      price: '$79/month',
      features: ['Custom fields', 'Specialized workflows', 'Enterprise features', 'Dedicated support']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$25/month',
      description: 'Perfect for small teams getting started with bug tracking',
      features: [
        'Up to 100 bugs/month',
        'Basic AI features',
        'Standard workflows',
        'Email support',
        '1 user included'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79/month',
      description: 'Advanced features for growing development teams',
      features: [
        'Up to 1,000 bugs/month',
        'Advanced AI features',
        'Team collaboration',
        'Priority support',
        'Up to 5 users',
        'API access',
        'Custom workflows'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199/month',
      description: 'Complete bug tracking solution for large organizations',
      features: [
        'Unlimited bugs',
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
        <title>AI Bug Tracker Pro - Zion Tech Group</title>
        <meta name="description" content="AI-powered bug tracking with intelligent detection, prioritization, and team collaboration. Streamline your bug management process." />
        <meta name="keywords" content="ai bug tracker, bug tracking, issue management, bug detection, team collaboration, bug prioritization" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            AI Bug Tracker Pro
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            AI-powered bug tracking with intelligent detection, prioritization, and team collaboration. Streamline your bug management process.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">90%</div>
              <div className="text-gray-300">Bug Detection</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">80%</div>
              <div className="text-gray-300">Time Saved</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">Smart</div>
              <div className="text-gray-300">Prioritization</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">AI Monitoring</div>
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
            AI-Powered Bug Tracking Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trackerFeatures.map((feature, index) => (
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

      {/* Tracker Types Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Bug Tracking Types & Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trackerTypes.map((tracker, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{tracker.type}</h3>
                  <p className="text-gray-600 text-sm mb-4">{tracker.description}</p>
                  <div className="text-2xl font-bold text-green-600 mb-4">{tracker.price}</div>
                </div>
                <ul className="space-y-2">
                  {tracker.features.map((feature, featureIndex) => (
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
            Why Choose AI Bug Tracker Pro?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bug className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Intelligent Detection</h3>
              <p className="text-gray-300">AI automatically detects bugs and issues before they impact users, saving time and resources.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Smart Prioritization</h3>
              <p className="text-gray-300">AI prioritizes bugs based on impact and severity, helping teams focus on the most critical issues.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Team Collaboration</h3>
              <p className="text-gray-300">Advanced collaboration tools keep your team synchronized and productive in bug resolution.</p>
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
                  href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${plan.name} AI Bug Tracker Pro Plan`}
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
            Ready to Streamline Your Bug Management?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Let AI help you detect, prioritize, and resolve bugs more efficiently. Start tracking bugs with AI assistance today.
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

export default BugTrackerProPage;
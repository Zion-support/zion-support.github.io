import React from 'react';
import { CheckCircle, ArrowRight, Mail, Zap, Shield, Globe, DollarSign, Star, Users, Clock, Brain, Settings } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const AIEmailAssistantPage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'Smart Email Management',
      description: 'AI-powered email sorting, prioritization, and intelligent responses to streamline your inbox.',
      benefits: ['Smart categorization', 'Priority scoring', 'Auto-responses', 'Spam filtering']
    },
    {
      icon: <Mail className="w-8 h-8 text-green-500" />,
      title: 'Email Composition',
      description: 'Generate professional emails with AI assistance, from subject lines to complete messages.',
      benefits: ['Smart suggestions', 'Tone adjustment', 'Grammar checking', 'Template library']
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-500" />,
      title: 'Automation & Scheduling',
      description: 'Automate email workflows, schedule sends, and set up follow-up sequences.',
      benefits: ['Auto-scheduling', 'Follow-up sequences', 'Workflow automation', 'Calendar integration']
    },
    {
      icon: <Shield className="w-8 h-8 text-orange-500" />,
      title: 'Security & Privacy',
      description: 'Enterprise-grade security with encryption and privacy protection for all email data.',
      benefits: ['End-to-end encryption', 'Privacy protection', 'Secure storage', 'Compliance ready']
    }
  ];

  const pricingPlans = [
    {
      name: 'Personal',
      price: '$19',
      period: '/month',
      features: [
        '1 email account',
        'Basic AI features',
        'Email templates',
        'Email support',
        'Mobile app'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$49',
      period: '/month',
      features: [
        '5 email accounts',
        'Advanced AI features',
        'Custom templates',
        'Priority support',
        'Team collaboration',
        'API access',
        'Analytics dashboard'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$149',
      period: '/month',
      features: [
        'Unlimited accounts',
        'Full AI suite',
        'White-label options',
        'Dedicated support',
        'Custom integrations',
        'Advanced analytics',
        'SSO integration'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Customer Support',
      description: 'Automate customer support emails with intelligent responses and ticket routing.',
      examples: ['Auto-responses', 'Ticket classification', 'Escalation rules', 'Satisfaction tracking']
    },
    {
      title: 'Sales & Marketing',
      description: 'Generate compelling sales emails and marketing campaigns with AI assistance.',
      examples: ['Cold outreach', 'Follow-up sequences', 'A/B testing', 'Performance tracking']
    },
    {
      title: 'Internal Communication',
      description: 'Streamline internal team communication with smart email management.',
      examples: ['Meeting scheduling', 'Project updates', 'Announcements', 'Task assignments']
    },
    {
      title: 'Personal Productivity',
      description: 'Boost personal email productivity with smart organization and automation.',
      examples: ['Inbox zero', 'Smart folders', 'Quick replies', 'Email scheduling']
    }
  ];

  const integrations = [
    { name: 'Gmail', icon: '📧', description: 'Full Gmail integration' },
    { name: 'Outlook', icon: '📨', description: 'Microsoft Outlook support' },
    { name: 'Slack', icon: '💼', description: 'Slack notifications' },
    { name: 'Salesforce', icon: '☁️', description: 'CRM integration' },
    { name: 'HubSpot', icon: '🎯', description: 'Marketing automation' },
    { name: 'Zendesk', icon: '🎫', description: 'Support ticket sync' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>AI Email Assistant - Zion Tech Group</title>
        <meta name="description" content="Boost email productivity with our AI email assistant. Smart email management, composition, automation, and scheduling for professionals." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              AI Email <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Assistant</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8 px-4">
              Transform your email productivity with our AI-powered email assistant. 
              Smart management, intelligent composition, and automation for professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/ai-services" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View All AI Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Powerful Email Features</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Take control of your email with intelligent AI assistance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Perfect for Every Professional</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From customer support to sales, our AI email assistant handles it all
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{useCase.title}</h3>
                <p className="text-gray-600 mb-6">{useCase.description}</p>
                <div className="flex flex-wrap gap-2">
                  {useCase.examples.map((example, exampleIndex) => (
                    <span key={exampleIndex} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                      {example}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Seamless Integrations</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Connect with your favorite email and business tools
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <div className="text-4xl mb-4">{integration.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{integration.name}</h3>
                <p className="text-sm text-gray-600">{integration.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the plan that fits your email needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative ${
                plan.popular ? 'border-2 border-purple-500' : 'border border-gray-200'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Ready to Transform Your Email Productivity?</h2>
              <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto px-4">
                Join thousands of professionals using our AI email assistant to manage their inbox more efficiently.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/ai-services"
                  className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  View All AI Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIEmailAssistantPage;
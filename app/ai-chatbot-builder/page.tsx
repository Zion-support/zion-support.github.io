import React from 'react';
import { CheckCircle, ArrowRight, MessageCircle, Zap, Shield, Globe, DollarSign, Star, Users, Clock, Brain, Settings } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const AIChatbotBuilderPage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'No-Code Builder',
      description: 'Create intelligent chatbots with our visual drag-and-drop interface. No coding required.',
      benefits: ['Visual flow builder', 'Pre-built templates', 'Easy customization', 'Real-time preview']
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-green-500" />,
      title: 'Natural Conversations',
      description: 'Advanced NLP technology enables human-like conversations that understand context and intent.',
      benefits: ['Context awareness', 'Intent recognition', 'Sentiment analysis', 'Multi-turn conversations']
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-500" />,
      title: 'Multi-Channel Deployment',
      description: 'Deploy your chatbot across websites, mobile apps, social media, and messaging platforms.',
      benefits: ['Website integration', 'Mobile apps', 'Social media', 'Messaging platforms']
    },
    {
      icon: <Shield className="w-8 h-8 text-orange-500" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with data encryption, compliance, and privacy protection.',
      benefits: ['End-to-end encryption', 'GDPR compliance', 'SOC 2 certified', 'Data privacy']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      features: [
        '1 chatbot',
        '1,000 conversations/month',
        'Basic templates',
        'Email support',
        'Website integration'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      features: [
        '5 chatbots',
        '10,000 conversations/month',
        'Advanced templates',
        'Priority support',
        'Multi-channel deployment',
        'Analytics dashboard',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      features: [
        'Unlimited chatbots',
        'Unlimited conversations',
        'Custom templates',
        'Dedicated support',
        'White-label options',
        'Advanced analytics',
        'Custom integrations'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Customer Support',
      description: 'Provide 24/7 customer support with instant responses to common questions.',
      examples: ['FAQ automation', 'Ticket routing', 'Order tracking', 'Technical support']
    },
    {
      title: 'Sales & Lead Generation',
      description: 'Qualify leads and guide prospects through your sales funnel.',
      examples: ['Lead qualification', 'Product recommendations', 'Appointment booking', 'Follow-up sequences']
    },
    {
      title: 'E-commerce Assistant',
      description: 'Help customers find products and complete purchases.',
      examples: ['Product search', 'Size recommendations', 'Order assistance', 'Returns processing']
    },
    {
      title: 'Internal Support',
      description: 'Streamline internal processes and employee support.',
      examples: ['HR questions', 'IT support', 'Policy guidance', 'Training assistance']
    }
  ];

  const integrations = [
    { name: 'Website', icon: '🌐', description: 'Embed directly on your website' },
    { name: 'WhatsApp', icon: '💬', description: 'Connect to WhatsApp Business' },
    { name: 'Facebook Messenger', icon: '📱', description: 'Deploy on Facebook Messenger' },
    { name: 'Slack', icon: '💼', description: 'Integrate with Slack workspace' },
    { name: 'Zendesk', icon: '🎫', description: 'Connect to Zendesk tickets' },
    { name: 'Salesforce', icon: '☁️', description: 'Sync with Salesforce CRM' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>AI Chatbot Builder - Zion Tech Group</title>
        <meta name="description" content="Build intelligent chatbots with our no-code AI chatbot builder. Deploy across multiple channels and provide 24/7 customer support." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              AI Chatbot <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Builder</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8 px-4">
              Create intelligent chatbots with our no-code builder. Deploy across websites, mobile apps, 
              and messaging platforms to provide 24/7 customer support and engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Building
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Powerful Chatbot Features</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Build sophisticated chatbots with advanced AI capabilities
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Perfect for Every Business</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From customer support to sales, our chatbots handle it all
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
              Connect with your favorite tools and platforms
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
              Choose the plan that fits your chatbot needs
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
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Ready to Build Your First Chatbot?</h2>
              <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto px-4">
                Join thousands of businesses using our AI chatbot builder to provide better customer experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
                >
                  Start Building Now
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

export default AIChatbotBuilderPage;
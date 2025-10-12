import React from 'react';
import { CheckCircle, MessageCircle, Zap, Brain, Users, Shield, BarChart, Globe } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIChatbotBuilder: React.FC = () => {
  const features = [
    {
      icon: <MessageCircle className="w-8 h-8 text-purple-400" />,
      title: 'No-Code Chatbot Builder',
      description: 'Create intelligent chatbots without any coding knowledge. Use our drag-and-drop interface to design conversations and deploy in minutes.',
      benefits: ['Visual Flow Builder', 'Pre-built Templates', 'One-Click Deploy', 'No Coding Required']
    },
    {
      icon: <Brain className="w-8 h-8 text-blue-400" />,
      title: 'Advanced AI Integration',
      description: 'Powered by GPT-4 and custom AI models trained on your specific business data for accurate, contextual responses.',
      benefits: ['GPT-4 Integration', 'Custom AI Training', 'Context Awareness', 'Multi-language Support']
    },
    {
      icon: <Zap className="w-8 h-8 text-green-400" />,
      title: 'Instant Deployment',
      description: 'Deploy your chatbot across multiple channels instantly - website, WhatsApp, Facebook Messenger, and more.',
      benefits: ['Multi-Channel Support', 'Real-time Updates', 'Instant Publishing', 'Cross-Platform Sync']
    },
    {
      icon: <Users className="w-8 h-8 text-orange-400" />,
      title: 'Human Handoff',
      description: 'Seamlessly transfer complex conversations to human agents when the chatbot reaches its limits.',
      benefits: ['Smart Escalation', 'Live Agent Integration', 'Conversation History', 'Seamless Transition']
    },
    {
      icon: <BarChart className="w-8 h-8 text-yellow-400" />,
      title: 'Analytics & Insights',
      description: 'Track performance with detailed analytics on conversation flows, user satisfaction, and conversion rates.',
      benefits: ['Real-time Analytics', 'Conversation Tracking', 'Performance Metrics', 'Custom Dashboards']
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption, GDPR compliance, and secure data handling.',
      benefits: ['End-to-End Encryption', 'GDPR Compliant', 'SOC 2 Certified', 'Data Residency Options']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        '1 chatbot',
        '1,000 conversations/month',
        'Basic AI models',
        'Email support',
        'Website integration',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        '5 chatbots',
        '10,000 conversations/month',
        'Advanced AI models',
        'Priority support',
        'Multi-channel deployment',
        'Advanced analytics',
        'Custom branding',
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
        'Unlimited chatbots',
        'Unlimited conversations',
        'Premium AI models',
        '24/7 phone support',
        'All channels supported',
        'Custom analytics',
        'White-label options',
        'Custom integrations',
        'Dedicated account manager'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Customer Support',
      description: 'Handle 80% of customer inquiries automatically',
      example: 'Reduce support tickets by 70% while improving response time'
    },
    {
      title: 'Lead Generation',
      description: 'Qualify and capture leads 24/7',
      example: 'Convert 25% more visitors into qualified leads'
    },
    {
      title: 'E-commerce',
      description: 'Guide customers through product selection',
      example: 'Increase sales by 30% with personalized recommendations'
    },
    {
      title: 'Appointment Booking',
      description: 'Automate scheduling and reduce no-shows',
      example: 'Book 50+ appointments per day automatically'
    }
  ];

  const integrations = [
    'Website', 'WhatsApp', 'Facebook Messenger', 'Telegram', 'Slack', 'Microsoft Teams',
    'Salesforce', 'HubSpot', 'Zendesk', 'Intercom', 'Mailchimp', 'Zapier'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Chatbot Builder - Zion Tech Group</title>
        <meta name="description" content="Build intelligent chatbots without coding. Deploy across multiple channels with advanced AI. Starting at $49/month." />
        <meta name="keywords" content="AI chatbot builder, chatbot creation, customer support automation, lead generation, no-code chatbot" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI Chatbot Builder
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Create intelligent chatbots without coding. Deploy across multiple channels and automate customer interactions with advanced AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Build Your Chatbot
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                View Demo
              </button>
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-white text-center mb-12">Powerful Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Use Cases Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-white text-center mb-12">Use Cases</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300 mb-3">{useCase.description}</p>
                  <p className="text-sm text-purple-300 italic">{useCase.example}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Integrations Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-white text-center mb-12">Integrations</h2>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <p className="text-gray-300 text-center mb-8">
                Connect your chatbot with 50+ popular tools and platforms
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {integrations.map((integration, index) => (
                  <div key={index} className="bg-white/10 rounded-lg p-4 text-center">
                    <span className="text-white font-medium">{integration}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-white text-center mb-12">Simple Pricing</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${plan.popular ? 'border-purple-400 ring-2 ring-purple-400' : 'border-white/20'} relative`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700' 
                      : 'border-2 border-white text-white hover:bg-white/10'
                  }`}>
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Automate Your Customer Service?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join thousands of businesses using our AI Chatbot Builder to improve customer experience and reduce costs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Start Free Trial
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Contact Sales
                </button>
              </div>
              <p className="text-white/70 text-sm mt-4">
                No credit card required • 14-day free trial • Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AIChatbotBuilder;
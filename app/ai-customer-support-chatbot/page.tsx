'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, MessageSquare, Bot, Users, BarChart3, Globe, Smartphone, Mail, Phone, Calendar, Settings, Brain, Target, TrendingUp } from 'lucide-react';

const AiCustomerSupportChatbotPage: React.FC = () => {
  const features = [
    'Natural Language Processing (NLP)',
    'Multi-language Support (50+ languages)',
    '24/7 Automated Customer Support',
    'Intelligent Ticket Routing',
    'Sentiment Analysis & Mood Detection',
    'Knowledge Base Integration',
    'Live Chat Handoff to Human Agents',
    'Custom Training on Your Data',
    'API Integration with CRM Systems',
    'Real-time Analytics Dashboard',
    'Voice & Text Support',
    'Mobile App Integration',
    'WhatsApp, Facebook, Telegram Support',
    'Email Support Automation',
    'Escalation Management',
    'Customer Satisfaction Tracking'
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 1,000 conversations/month',
        'Basic NLP capabilities',
        'Email & Web chat support',
        'Standard knowledge base',
        'Basic analytics',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Most popular for growing businesses',
      features: [
        'Up to 10,000 conversations/month',
        'Advanced NLP & AI training',
        'Multi-channel support (Web, Email, SMS)',
        'Custom knowledge base',
        'Advanced analytics & reporting',
        'Priority support',
        'API integrations',
        'Custom branding'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited conversations',
        'Advanced AI with custom training',
        'All channels (Web, Email, SMS, Voice, Social)',
        'Advanced knowledge management',
        'Custom analytics & BI integration',
        'Dedicated account manager',
        'White-label solution',
        'SLA guarantee (99.9% uptime)',
        'Custom integrations',
        'Advanced security features'
      ],
      popular: false
    }
  ];

  const benefits = [
    'Reduce customer support costs by up to 70%',
    'Improve response time from hours to seconds',
    'Handle multiple customers simultaneously',
    'Never miss a customer inquiry',
    'Consistent, professional responses',
    'Learn and improve over time',
    'Integrate with existing systems',
    'Scale support without hiring more staff'
  ];

  const integrations = [
    { name: 'Salesforce', icon: '🔗', description: 'CRM Integration' },
    { name: 'HubSpot', icon: '🔗', description: 'Marketing Automation' },
    { name: 'Zendesk', icon: '🔗', description: 'Help Desk' },
    { name: 'Slack', icon: '🔗', description: 'Team Communication' },
    { name: 'Microsoft Teams', icon: '🔗', description: 'Business Communication' },
    { name: 'WhatsApp Business', icon: '🔗', description: 'Messaging Platform' },
    { name: 'Facebook Messenger', icon: '🔗', description: 'Social Media' },
    { name: 'Telegram', icon: '🔗', description: 'Messaging App' },
    { name: 'Shopify', icon: '🔗', description: 'E-commerce' },
    { name: 'WooCommerce', icon: '🔗', description: 'E-commerce' },
    { name: 'WordPress', icon: '🔗', description: 'Website Integration' },
    { name: 'Custom APIs', icon: '🔗', description: 'Custom Integration' }
  ];

  const stats = [
    { value: '95%', label: 'Customer Satisfaction', description: 'Average satisfaction rate' },
    { value: '70%', label: 'Cost Reduction', description: 'Reduction in support costs' },
    { value: '24/7', label: 'Availability', description: 'Always online support' },
    { value: '2s', label: 'Response Time', description: 'Average response time' }
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>AI Customer Support Chatbot - Zion Tech Group | 24/7 Automated Support</title>
        <meta name="description" content="Revolutionary AI-powered customer support chatbot with natural language processing, multi-channel support, and 70% cost reduction. Starting at $99/month." />
        <meta name="keywords" content="AI chatbot, customer support, automated support, NLP, multi-channel support, customer service automation, AI customer service" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mb-6">
                <Bot className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Customer Support <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Chatbot</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Transform your customer support with our intelligent AI chatbot. Reduce costs by 70%, improve response times to seconds, and provide 24/7 support across all channels.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 inline-flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call: (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get Free Demo
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                  <div className="text-white font-semibold mb-1">{stat.label}</div>
                  <div className="text-gray-400 text-sm">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Powerful AI Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI chatbot is equipped with cutting-edge technology to provide exceptional customer support experiences.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
                  <CheckCircle className="w-6 h-6 text-green-400 mb-3" />
                  <h3 className="text-white font-semibold mb-2">{feature}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Simple, Transparent Pricing</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your business needs. All plans include our core AI features and 24/7 support.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border ${
                    plan.popular
                      ? 'border-purple-400 shadow-2xl shadow-purple-500/25 scale-105'
                      : 'border-white/20'
                  } hover:border-purple-400 transition-all duration-300`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                        <Star className="w-4 h-4 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600 transform hover:scale-105">
                    Start Free Trial
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Choose Our AI Chatbot?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of businesses that have transformed their customer support with our AI technology.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Seamless Integrations</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Connect with your existing tools and workflows. Our AI chatbot integrates with 50+ popular platforms.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {integrations.map((integration, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 text-center">
                  <div className="text-3xl mb-3">{integration.icon}</div>
                  <h3 className="text-white font-semibold mb-1">{integration.name}</h3>
                  <p className="text-gray-400 text-sm">{integration.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Customer Support?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Start your free trial today and see how our AI chatbot can revolutionize your customer support operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 inline-flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call: (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get Free Demo
                </a>
              </div>
              <div className="mt-8 text-sm text-gray-400">
                <p>📍 364 E Main St STE 1008, Middletown, DE 19709</p>
                <p>⏰ Mon-Fri: 9AM-6PM EST | 24/7 Emergency Support Available</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default AiCustomerSupportChatbotPage;
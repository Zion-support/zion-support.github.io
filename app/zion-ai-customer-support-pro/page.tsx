'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle, Star, MessageCircle, Brain, Zap, 
  Sparkles, Clock, Users, Award, Shield, Globe, 
  BarChart, TrendingUp, Heart, Target, Settings, 
  Bot, Headphones, Phone, Mail, Chat, ThumbsUp,
  DollarSign, PieChart, MousePointer, Filter, 
  RefreshCw, Send, Eye, Bell, Calendar
} from 'lucide-react';

const ZionAiCustomerSupportProPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'Advanced AI Understanding',
      description: 'Natural language processing that understands context, sentiment, and customer intent',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Zap,
      title: 'Instant Response',
      description: '24/7 instant responses to customer queries with 99.9% uptime guarantee',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Target,
      title: 'Smart Escalation',
      description: 'Intelligent routing to human agents when complex issues require personal attention',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: BarChart,
      title: 'Real-time Analytics',
      description: 'Track customer satisfaction, response times, and resolution rates with detailed insights',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const integrations = [
    { name: 'Website Chat', icon: Globe, color: 'from-blue-500 to-cyan-500', description: 'Embed on any website' },
    { name: 'WhatsApp', icon: MessageCircle, color: 'from-green-500 to-emerald-500', description: 'WhatsApp Business API' },
    { name: 'Facebook Messenger', icon: Chat, color: 'from-blue-600 to-indigo-600', description: 'Facebook integration' },
    { name: 'Slack', icon: Settings, color: 'from-purple-500 to-pink-500', description: 'Team collaboration' },
    { name: 'Zendesk', icon: Headphones, color: 'from-orange-500 to-red-500', description: 'Helpdesk integration' },
    { name: 'Salesforce', icon: BarChart, color: 'from-blue-700 to-blue-800', description: 'CRM integration' }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        '1,000 conversations per month',
        'Basic AI responses',
        'Website chat widget',
        'Email support',
        'Basic analytics',
        '1 user',
        'Standard templates'
      ],
      color: 'from-blue-500 to-cyan-500',
      popular: false
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        '5,000 conversations per month',
        'Advanced AI with learning',
        'Multi-channel support',
        'Priority support',
        'Advanced analytics',
        '5 users',
        'Custom branding',
        'API access',
        'Integrations'
      ],
      color: 'from-purple-500 to-pink-500',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited conversations',
        'Premium AI with custom training',
        'All channels supported',
        'White-label solution',
        'Real-time analytics dashboard',
        'Unlimited users',
        'Custom integrations',
        'Dedicated account manager',
        '24/7 phone support'
      ],
      color: 'from-green-500 to-emerald-500',
      popular: false
    }
  ];

  const benefits = [
    {
      title: 'Reduce Support Costs by 60%',
      description: 'Automate routine inquiries and free up your team for complex issues',
      icon: DollarSign,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Improve Response Time by 90%',
      description: 'Instant responses to customer queries, even outside business hours',
      icon: Clock,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Increase Customer Satisfaction',
      description: 'Consistent, accurate, and helpful responses improve customer experience',
      icon: ThumbsUp,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Scale Without Limits',
      description: 'Handle unlimited conversations simultaneously without additional costs',
      icon: TrendingUp,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const stats = [
    { number: '10K+', label: 'Businesses Served', icon: Users },
    { number: '50M+', label: 'Conversations Handled', icon: MessageCircle },
    { number: '95%', label: 'Customer Satisfaction', icon: ThumbsUp },
    { number: '4.9/5', label: 'Customer Rating', icon: Star }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Customer Support Pro - AI-Powered Chatbot Platform | Zion Tech Group</title>
        <meta name="description" content="Transform your customer support with AI-powered chatbots. 24/7 instant responses, multi-channel support, and advanced analytics. Start your free trial today!" />
        <meta name="keywords" content="AI chatbot, customer support, live chat, automated support, customer service, helpdesk automation" />
        <meta property="og:title" content="Zion AI Customer Support Pro - AI-Powered Chatbot Platform" />
        <meta property="og:description" content="Revolutionize your customer support with AI. Provide instant, intelligent responses across all channels." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/zion-ai-customer-support-pro" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-16">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  AI Customer Support
                  <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Pro Platform
                  </span>
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Transform your customer support with AI-powered chatbots that provide 
                  instant, intelligent responses across all channels 24/7.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Start Free Trial
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <a
                    href="tel:+13024640950"
                    className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105"
                  >
                    Call +1 302 464 0950
                  </a>
                </div>
                <div className="flex items-center space-x-6 text-sm text-gray-400">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                    No credit card required
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                    14-day free trial
                  </div>
                </div>
              </div>
              <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="relative">
                  <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/20">
                    <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6 mx-auto">
                      <Bot className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white text-center mb-4">AI Chatbot Demo</h3>
                    <div className="space-y-3">
                      <div className="bg-gray-800/50 rounded-lg p-3">
                        <div className="flex items-center mb-2">
                          <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-2">
                            <Bot className="h-4 w-4 text-white" />
                          </div>
                          <span className="text-white font-medium">AI Assistant</span>
                        </div>
                        <p className="text-gray-300 text-sm">Hello! How can I help you today?</p>
                      </div>
                      <div className="bg-blue-600/20 rounded-lg p-3 ml-8">
                        <div className="flex items-center mb-2">
                          <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-2">
                            <span className="text-white text-xs font-bold">U</span>
                          </div>
                          <span className="text-white font-medium">User</span>
                        </div>
                        <p className="text-gray-300 text-sm">I need help with my order</p>
                      </div>
                      <div className="bg-gray-800/50 rounded-lg p-3">
                        <div className="flex items-center mb-2">
                          <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-2">
                            <Bot className="h-4 w-4 text-white" />
                          </div>
                          <span className="text-white font-medium">AI Assistant</span>
                        </div>
                        <p className="text-gray-300 text-sm">I'd be happy to help with your order. Can you provide your order number?</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful AI Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered customer support platform combines advanced technology 
                with user-friendly design to deliver exceptional customer experiences.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group">
                  <div className="bg-gray-800 rounded-xl p-6 h-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg mb-4`}>
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-20 bg-gradient-to-br from-purple-900 to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Connect All Your Channels
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Deploy your AI chatbot across all customer touchpoints with seamless integrations.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {integrations.map((integration, index) => (
                <div key={index} className="group">
                  <div className="bg-gray-800 rounded-xl p-6 h-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700 text-center">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${integration.color} rounded-lg mb-4 mx-auto`}>
                      <integration.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{integration.name}</h3>
                    <p className="text-sm text-gray-400">{integration.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Proven Business Impact
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of businesses who have transformed their customer support with our AI platform.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="group">
                  <div className="bg-gray-800 rounded-xl p-6 h-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${benefit.color} rounded-lg mb-4`}>
                      <benefit.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-gradient-to-br from-purple-900 to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Start with our free trial and scale as your customer support needs grow.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border ${
                    plan.popular ? 'border-purple-500 ring-2 ring-purple-500' : 'border-gray-700'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-xl text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                        : 'border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white'
                    }`}
                  >
                    Start Free Trial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 to-purple-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Customer Support?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses who are already using our AI-powered customer support 
              platform to provide better service and reduce costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Start Your Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-gray-400">
              <p>Email: kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionAiCustomerSupportProPage;
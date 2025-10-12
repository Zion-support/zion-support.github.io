import React from 'react';
import { CheckCircle, ArrowRight, MessageSquare, Users, Zap, Star, Brain, Clock, Shield, BarChart3, Target, Globe } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function AICustomerSupportChatbotPage() {
  const features = [
    {
      icon: <MessageSquare className="w-8 h-8 text-blue-500" />,
      title: 'Intelligent Conversations',
      description: 'AI-powered chatbot that understands context, intent, and provides human-like responses.',
      features: ['Natural language processing', 'Context awareness', 'Multi-language support', 'Sentiment analysis', 'Conversation memory', 'Intent recognition'],
      price: 'Starting at $49/month',
      popular: true
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: '24/7 Support',
      description: 'Round-the-clock customer support with instant responses and seamless handoff to human agents.',
      features: ['24/7 availability', 'Instant responses', 'Human handoff', 'Escalation rules', 'Queue management', 'Performance tracking'],
      price: 'Starting at $79/month',
      popular: false
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-500" />,
      title: 'Analytics & Insights',
      description: 'Comprehensive analytics to understand customer behavior and optimize support performance.',
      features: ['Conversation analytics', 'Customer satisfaction', 'Response time tracking', 'Common issues analysis', 'Performance metrics', 'Custom reports'],
      price: 'Starting at $99/month',
      popular: true
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Reduce Support Costs',
      description: 'Cut customer support costs by 60% with AI-powered automation and self-service.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Improve Response Time',
      description: 'Provide instant responses to customer queries, improving satisfaction and retention.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Scale Support',
      description: 'Handle unlimited customer inquiries without additional staff or resources.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Better Customer Experience',
      description: 'Deliver consistent, helpful support that builds trust and loyalty.'
    }
  ];

  const useCases = [
    {
      title: 'E-commerce',
      description: 'Handle order inquiries, product questions, and returns efficiently',
      icon: <Target className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'SaaS Companies',
      description: 'Provide technical support and onboarding assistance',
      icon: <Zap className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Healthcare',
      description: 'Answer patient questions and provide appointment scheduling',
      icon: <Shield className="w-6 h-6 text-red-500" />
    },
    {
      title: 'Financial Services',
      description: 'Handle account inquiries and provide financial guidance',
      icon: <Globe className="w-6 h-6 text-purple-500" />
    }
  ];

  const stats = [
    { number: '1M+', label: 'Conversations Handled' },
    { number: '85%', label: 'Query Resolution' },
    { number: '60%', label: 'Cost Reduction' },
    { number: '24/7', label: 'Availability' }
  ];

  const pricing = [
    {
      plan: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: ['Up to 1,000 conversations/month', 'Basic AI responses', 'Email integration', 'Basic analytics', 'Email support', 'Standard templates'],
      popular: false
    },
    {
      plan: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: ['Up to 10,000 conversations/month', 'Advanced AI features', 'Multi-channel support', 'Advanced analytics', 'Priority support', 'Custom integrations'],
      popular: true
    },
    {
      plan: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large organizations and high-volume support',
      features: ['Unlimited conversations', 'Custom AI training', 'White-label options', 'Dedicated support', 'On-premise deployment', 'Advanced security'],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>AI Customer Support Chatbot - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered customer support chatbot. Provide 24/7 support, reduce costs, and improve customer satisfaction with intelligent automation." />
        <meta name="keywords" content="AI chatbot, customer support, automated support, chatbot automation, customer service AI" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              AI Customer Support Chatbot
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your customer support with AI-powered chatbots that provide instant, intelligent responses. 
              Reduce costs, improve satisfaction, and scale your support operations.
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
                to="/micro-saas-services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View All Micro SAAS
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20 mt-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center px-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Intelligent Customer Support Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to provide exceptional customer support with AI.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 group relative">
                {feature.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Popular
                    </span>
                  </div>
                )}
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2 mb-4">
                  {feature.features.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="text-blue-600 font-semibold mb-4">{feature.price}</div>
                <Link
                  to="/contact"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perfect For Every Industry
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our AI chatbot adapts to your industry and customer support needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex justify-center mb-4">{useCase.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{useCase.title}</h3>
                <p className="text-gray-600">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our AI Customer Support Chatbot?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the future of customer support with intelligent automation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Plan
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Start free and scale as your support volume grows.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${plan.popular ? 'ring-2 ring-blue-500 relative' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{plan.plan}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full block text-center py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                      : 'border-2 border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600'
                  }`}
                >
                  Start Free Trial
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Customer Support?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8">
            Join thousands of businesses using AI to provide exceptional customer support 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
            >
              <Brain className="w-5 h-5 mr-2" />
              Start Free Trial
            </Link>
            <Link
              to="/micro-saas-services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Explore All Micro SAAS
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
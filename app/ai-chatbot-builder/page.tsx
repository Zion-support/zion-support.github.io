import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Zap, Shield, Brain, BarChart, MessageCircle, Target, ShoppingCart, Globe, Clock } from 'lucide-react';

const AiChatbotBuilderPage: React.FC = () => {
  const features = [
    {
      title: 'No-Code Builder',
      description: 'Create sophisticated chatbots without any programming knowledge using our visual interface',
      icon: <Zap className="w-5 h-5 ml-2" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'AI-Powered Responses',
      description: 'Natural language processing and machine learning for intelligent, contextual conversations',
      icon: <Brain className="w-5 h-5 ml-2" />,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Multi-Channel Deployment',
      description: 'Deploy your chatbot across websites, mobile apps, social media, and messaging platforms',
      icon: <Globe className="w-5 h-5 ml-2" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Advanced Analytics',
      description: 'Track performance, user engagement, and conversation insights with detailed analytics',
      icon: <BarChart className="w-5 h-5 ml-2" />,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Custom Integrations',
      description: 'Connect with CRM, helpdesk, payment systems, and other business tools seamlessly',
      icon: <Shield className="w-5 h-5 ml-2" />,
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Real-time Support',
      description: 'Provide instant responses and escalate to human agents when needed',
      icon: <MessageCircle className="w-5 h-5 ml-2" />,
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  const useCases = [
    {
      title: 'Customer Support',
      description: 'Handle common queries, provide instant responses, and escalate complex issues',
      icon: <Users className="w-5 h-5 ml-2" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Lead Generation',
      description: 'Qualify leads, collect contact information, and nurture prospects automatically',
      icon: <Target className="w-5 h-5 ml-2" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'E-commerce Assistant',
      description: 'Help customers find products, process orders, and provide shopping assistance',
      icon: <ShoppingCart className="w-5 h-5 ml-2" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Appointment Booking',
      description: 'Schedule meetings, manage calendars, and send automated reminders',
      icon: <Clock className="w-5 h-5 ml-2" />,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses getting started',
      features: [
        'Up to 1,000 conversations/month',
        'Basic AI responses',
        'Website integration',
        'Email support',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 10,000 conversations/month',
        'Advanced AI with custom training',
        'Multi-channel deployment',
        'Priority support',
        'Advanced analytics & reporting',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited conversations',
        'Custom AI models',
        'White-label solution',
        'Dedicated support',
        'Custom analytics',
        'API access',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>AI Chatbot Builder - Zion Tech Group</title>
        <meta name="description" content="Build intelligent chatbots without coding. Deploy across multiple channels with advanced AI capabilities." />
        <meta name="keywords" content="AI chatbot builder, no-code chatbot, conversational AI, customer support automation" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI Chatbot
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {' '}Builder
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Create intelligent, conversational chatbots without any coding. Deploy across multiple channels 
            and scale your customer engagement with advanced AI capabilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Start Building Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/demo" 
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              View Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Powerful Features for Every Need
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to build, deploy, and manage intelligent chatbots that deliver exceptional user experiences.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-400 transition-all duration-300">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Perfect for Every Business
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From customer support to lead generation, our chatbot builder adapts to your specific business needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${useCase.color} flex items-center justify-center mx-auto mb-4`}>
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. No hidden fees, no surprises.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border ${plan.popular ? 'border-cyan-400' : 'border-slate-700'} relative`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-white mb-2">
                    {plan.price}
                    <span className="text-lg text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-cyan-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Build Your AI Chatbot?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Join thousands of businesses already using our platform to create amazing customer experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
            >
              Start Your Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/demo" 
              className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiChatbotBuilderPage;
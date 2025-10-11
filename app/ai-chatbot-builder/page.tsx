'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { MessageSquare, Zap, Shield, CheckCircle, ArrowRight, Star, Users, Clock } from 'lucide-react';

const AiChatbotBuilderPage: React.FC = () => {
  const features = [
    {
      icon: MessageSquare,
      title: 'No-Code Builder',
      description: 'Create intelligent chatbots without any coding knowledge using our intuitive drag-and-drop interface.',
      benefits: ['Visual flow builder', 'Pre-built templates', 'Easy customization', 'Real-time preview']
    },
    {
      icon: Zap,
      title: 'AI-Powered Responses',
      description: 'Leverage advanced AI to provide natural, context-aware responses to customer queries.',
      benefits: ['Natural language processing', 'Context understanding', 'Multi-language support', 'Sentiment analysis']
    },
    {
      icon: Shield,
      title: 'Multi-Channel Support',
      description: 'Deploy your chatbot across multiple channels including website, social media, and messaging apps.',
      benefits: ['Website integration', 'Social media bots', 'WhatsApp support', 'Slack integration']
    }
  ];

  const useCases = [
    {
      icon: Users,
      title: 'Customer Support',
      description: 'Provide 24/7 customer support with instant responses to common queries and seamless handoff to human agents.',
      benefits: ['Instant responses', 'Ticket routing', 'Knowledge base integration', 'Escalation management']
    },
    {
      icon: ShoppingCart,
      title: 'Sales Assistant',
      description: 'Guide customers through the sales process with personalized product recommendations and order assistance.',
      benefits: ['Product recommendations', 'Order tracking', 'Payment assistance', 'Upselling opportunities']
    },
    {
      icon: MessageSquare,
      title: 'Lead Generation',
      description: 'Capture and qualify leads automatically while engaging visitors with interactive conversations.',
      benefits: ['Lead qualification', 'Contact collection', 'CRM integration', 'Follow-up automation']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses getting started with chatbots',
      features: [
        'Up to 1,000 conversations/month',
        'Basic templates',
        'Email support',
        'Website integration',
        '1 chatbot'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses with advanced chatbot needs',
      features: [
        'Up to 10,000 conversations/month',
        'Advanced AI features',
        'Priority support',
        'Multi-channel deployment',
        'Up to 5 chatbots',
        'Analytics dashboard',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      features: [
        'Unlimited conversations',
        'Custom AI training',
        '24/7 dedicated support',
        'White-label solution',
        'Unlimited chatbots',
        'Advanced analytics',
        'Custom integrations'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Chatbot Builder</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Create intelligent, conversational chatbots for your business without any coding required. 
              Engage customers 24/7 with AI-powered responses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                Start Building
              </button>
              <button className="border-2 border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Powerful Features</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Everything you need to build, deploy, and manage intelligent chatbots for your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-3 rounded-lg">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-6">{feature.description}</p>
                
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-2 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Use Cases</h2>
            <p className="text-gray-300">See how businesses are using our chatbot builder</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="text-4xl text-green-400">
                    <useCase.icon className="w-10 h-10" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">{useCase.title}</h3>
                    <p className="text-gray-300 mb-4">{useCase.description}</p>
                    <ul className="space-y-2">
                      {useCase.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center space-x-2 text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Pricing Plans</h2>
            <p className="text-gray-300">Choose the plan that fits your chatbot needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border ${
                  plan.popular 
                    ? 'border-cyan-500 ring-2 ring-cyan-500/50' 
                    : 'border-white/20'
                } hover:bg-white/20 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}
                >
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  {plan.name !== 'Enterprise' && <ArrowRight className="w-4 h-4 ml-2 inline" />}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Build Your Chatbot?
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              Start creating your intelligent chatbot today and transform how you engage with customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                Start Building
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AiChatbotBuilderPage;
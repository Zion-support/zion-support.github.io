'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { MessageSquare, Brain, Zap, CheckCircle, ArrowRight, Star, Users, Clock, Shield, Globe } from 'lucide-react'

const AiChatbotBuilderPage: React.FC = () => {
  const features = [
    'Natural Language Processing',
    'Multi-language Support',
    'Custom Training Models',
    'Integration APIs',
    'Analytics Dashboard',
    '24/7 Availability',
    'Scalable Architecture',
    'Custom Branding'
  ];

  const benefits = [
    'Reduce support costs by 60%',
    'Improve response time by 80%',
    'Handle multiple conversations simultaneously',
    'Learn from customer interactions',
    'Integrate with existing systems',
    'Provide consistent customer service'
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 1,000 conversations/month',
        'Basic NLP capabilities',
        'Email support',
        'Standard integrations'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 10,000 conversations/month',
        'Advanced NLP and AI',
        'Priority support',
        'Custom integrations',
        'Analytics dashboard'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited conversations',
        'Custom AI training',
        '24/7 support',
        'White-label solution',
        'Advanced analytics',
        'Dedicated account manager'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-advanced">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent neon-text-advanced" data-text="Chatbot Builder">Chatbot Builder</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Build intelligent chatbots that understand and respond to your customers naturally. 
              No coding required - just drag, drop, and deploy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center quantum-button">
                <Zap className="w-5 h-5 mr-2" />
                Start Building
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text-enhanced">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-300">
              Everything you need to build and deploy intelligent chatbots
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="holographic-card-advanced cyber-card-enhanced rounded-2xl p-6 text-center hover-quantum">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {feature}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6 neon-text-enhanced">
                Why Choose Our AI Chatbot Builder?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Transform your customer service with intelligent chatbots that understand context, 
                learn from interactions, and provide instant, accurate responses.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="holographic-card-advanced cyber-card-enhanced rounded-2xl p-8">
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg p-6 text-center">
                <div className="w-32 h-32 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Live Demo</h3>
                <p className="text-gray-300 mb-6">
                  Try our AI chatbot builder and see how easy it is to create intelligent conversations.
                </p>
                <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 quantum-button">
                  Try Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text-enhanced">
              Simple Pricing
            </h2>
            <p className="text-xl text-gray-300">
              Choose the plan that fits your needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`holographic-card-advanced cyber-card-enhanced rounded-2xl p-8 hover-quantum ${
                plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''
              }`}>
                {plan.popular && (
                  <div className="flex items-center mb-4">
                    <Star className="w-4 h-4 text-yellow-400 mr-2" />
                    <span className="text-sm font-medium text-yellow-400">Most Popular</span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 quantum-button ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white'
                    : 'bg-white/20 hover:bg-white/30 text-white border border-white/30'
                }`}>
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  <ArrowRight className="w-4 h-4 ml-2 inline" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6 neon-text-enhanced">
            Ready to Build Your AI Chatbot?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start building your intelligent chatbot today and transform your customer service experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center quantum-button">
              <Zap className="w-5 h-5 mr-2" />
              Start Building Now
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              <MessageSquare className="w-5 h-5 mr-2 inline" />
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AiChatbotBuilderPage
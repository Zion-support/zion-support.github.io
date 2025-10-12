import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, MessageSquare, Brain, Zap, Star, Clock, Users, Shield, Globe } from 'lucide-react'

export default function AIChatbotBuilderPage() {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-blue-400" />,
      title: 'Natural Language Processing',
      description: 'Advanced NLP capabilities that understand context and intent for more human-like conversations.'
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-green-400" />,
      title: 'Multi-platform Integration',
      description: 'Deploy your chatbot across websites, mobile apps, social media, and messaging platforms.'
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-400" />,
      title: 'Custom Training',
      description: 'Train your chatbot with your specific data and knowledge base for accurate responses.'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with data encryption and compliance with industry standards.'
    },
    {
      icon: <Globe className="w-8 h-8 text-cyan-400" />,
      title: 'Multi-language Support',
      description: 'Support for 50+ languages to serve customers worldwide.'
    },
    {
      icon: <Users className="w-8 h-8 text-orange-400" />,
      title: 'Human Handoff',
      description: 'Seamlessly transfer complex queries to human agents when needed.'
    }
  ]

  const pricing = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 1,000 conversations/month',
        'Basic NLP capabilities',
        'Website integration',
        'Email support',
        'Standard templates'
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
        'Advanced NLP & AI',
        'Multi-platform integration',
        'Custom training',
        'Priority support',
        'Analytics dashboard'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations',
      features: [
        'Unlimited conversations',
        'Custom AI models',
        'White-label solution',
        'Dedicated support',
        'Advanced analytics',
        'SLA guarantee'
      ],
      popular: false
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Design & Configure',
      description: 'Design your chatbot personality and configure conversation flows.',
      icon: <MessageSquare className="w-8 h-8" />
    },
    {
      step: '02',
      title: 'Train & Test',
      description: 'Train your chatbot with your data and test conversation scenarios.',
      icon: <Brain className="w-8 h-8" />
    },
    {
      step: '03',
      title: 'Deploy & Integrate',
      description: 'Deploy your chatbot and integrate it with your platforms.',
      icon: <Zap className="w-8 h-8" />
    },
    {
      step: '04',
      title: 'Monitor & Optimize',
      description: 'Monitor performance and continuously optimize conversations.',
      icon: <CheckCircle className="w-8 h-8" />
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              AI <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Chatbot Builder</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Create intelligent chatbots that provide 24/7 customer support and engagement. No coding required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
              >
                Start Building
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/ai-services" 
                className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Powerful <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Features</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to build and deploy intelligent chatbots
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group-hover:bg-white/15 group-hover:shadow-2xl group-hover:shadow-cyan-500/20 transform group-hover:scale-105">
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 inline-block">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-300 transition-colors">{feature.title}</h3>
                  <p className="text-gray-300 group-hover:text-white transition-colors">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Simple <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Get your chatbot up and running in just 4 easy steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="group text-center">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-purple-500/20 transform group-hover:scale-105">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">{step.title}</h3>
                  <p className="text-gray-300 text-sm group-hover:text-white transition-colors">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Choose Your <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Plan</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options to fit your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`group ${plan.popular ? 'md:-mt-8' : ''}`}>
                <div className={`bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 group-hover:shadow-2xl transform group-hover:scale-105 h-full ${
                  plan.popular 
                    ? 'border-cyan-400/50 shadow-2xl shadow-cyan-500/20' 
                    : 'border-white/20 hover:border-cyan-400/50 group-hover:shadow-cyan-500/20'
                }`}>
                  {plan.popular && (
                    <div className="text-center mb-6">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-300 ml-2">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 hover:shadow-lg hover:shadow-cyan-500/25'
                        : 'bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:border-white/30'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.3),transparent_50%)]"></div>
              
              <div className="relative">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-4">
                  Ready to Build Your AI Chatbot?
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto px-4">
                  Start building your intelligent chatbot today and provide exceptional customer experiences 24/7.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                  >
                    Start Free Trial
                  </Link>
                  <Link 
                    to="/ai-services" 
                    className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                  >
                    View All AI Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

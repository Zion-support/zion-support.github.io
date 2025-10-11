import React from 'react'
import { Helmet } from 'react-helmet-async'
import { MessageSquare, Bot, Zap, Users, CheckCircle, ArrowRight, Star, Clock, Settings, Brain } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const AIChatbotBuilderPage: React.FC = () => {
  const features = [
    {
      icon: Bot,
      title: 'No-Code Builder',
      description: 'Create intelligent chatbots without any coding knowledge using our visual drag-and-drop interface.',
      benefits: ['Visual flow builder', 'Pre-built templates', 'Custom logic', 'Easy deployment']
    },
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced natural language processing and machine learning for human-like conversations.',
      benefits: ['Natural language understanding', 'Context awareness', 'Learning capabilities', 'Multi-language support']
    },
    {
      icon: MessageSquare,
      title: 'Multi-Channel Support',
      description: 'Deploy your chatbot across multiple channels including website, social media, and messaging apps.',
      benefits: ['Website integration', 'Social media bots', 'WhatsApp support', 'API integration']
    },
    {
      icon: Zap,
      title: 'Real-Time Analytics',
      description: 'Track performance and optimize your chatbot with detailed analytics and insights.',
      benefits: ['Conversation analytics', 'User behavior tracking', 'Performance metrics', 'A/B testing']
    }
  ]

  const useCases = [
    {
      title: 'Customer Support',
      description: 'Handle customer inquiries 24/7 with intelligent responses and escalation to human agents.',
      icon: Users,
      benefits: ['Instant responses', 'Ticket routing', 'Knowledge base integration', 'Escalation handling']
    },
    {
      title: 'Lead Generation',
      description: 'Qualify leads and capture contact information through engaging conversations.',
      icon: MessageSquare,
      benefits: ['Lead qualification', 'Contact capture', 'CRM integration', 'Follow-up automation']
    },
    {
      title: 'E-commerce Assistant',
      description: 'Help customers find products, answer questions, and complete purchases.',
      icon: Settings,
      benefits: ['Product recommendations', 'Order tracking', 'Payment assistance', 'Inventory checking']
    },
    {
      title: 'Internal Support',
      description: 'Assist employees with HR questions, IT support, and company information.',
      icon: Bot,
      benefits: ['HR assistance', 'IT support', 'Company policies', 'Training materials']
    }
  ]

  const benefits = [
    'Reduce customer service costs by up to 70%',
    'Provide 24/7 customer support',
    'Improve response time to seconds',
    'Scale support without additional staff',
    'Capture leads automatically',
    'Integrate with existing systems'
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses starting with chatbots',
      features: [
        'Up to 1,000 conversations/month',
        'Basic AI capabilities',
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
      description: 'Ideal for growing businesses with advanced needs',
      features: [
        'Up to 10,000 conversations/month',
        'Advanced AI capabilities',
        'Multi-channel support',
        'Priority support',
        'Custom integrations',
        'Analytics dashboard'
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
        'Custom AI models',
        'White-label solution',
        '24/7 dedicated support',
        'Custom development',
        'SLA guarantee'
      ],
      popular: false
    }
  ]

  const stats = [
    { number: '500+', label: 'Chatbots Built' },
    { number: '95%', label: 'Customer Satisfaction' },
    { number: '70%', label: 'Cost Reduction' },
    { number: '24/7', label: 'Availability' }
  ]

  return (
    <>
      <Helmet>
        <title>AI Chatbot Builder - Zion Tech Group | No-Code Chatbot Creation</title>
        <meta name="description" content="Build intelligent chatbots without coding. Create AI-powered customer service bots, lead generation assistants, and more with our no-code platform." />
        <meta name="keywords" content="AI chatbot builder, no-code chatbot, customer service bot, lead generation, conversational AI" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Chatbot <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">Builder</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Build intelligent chatbots without coding. Create AI-powered customer service bots, 
              lead generation assistants, and more with our no-code platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center">
                Start Building
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Try Demo
              </button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful Chatbot Features
              </h2>
              <p className="text-xl text-gray-300">
                Everything you need to build intelligent chatbots
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-gray-400 flex items-center">
                        <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Popular Use Cases
              </h2>
              <p className="text-xl text-gray-300">
                See how businesses use our chatbot builder
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <useCase.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                        {useCase.title}
                      </h3>
                      <p className="text-gray-300 mb-4">{useCase.description}</p>
                      <ul className="space-y-2">
                        {useCase.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="text-sm text-gray-400 flex items-center">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {benefit}
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

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Chatbot Builder?
              </h2>
              <p className="text-xl text-gray-300">
                Transform your customer service with intelligent automation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-white font-semibold">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-300">
                Flexible pricing for businesses of all sizes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 ${
                  plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
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
                      <li key={featureIndex} className="text-gray-300 flex items-center">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600'
                      : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-900 to-blue-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build Your Chatbot?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start creating intelligent chatbots today and transform your customer experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 flex items-center">
                Start Building Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

export default AIChatbotBuilderPage
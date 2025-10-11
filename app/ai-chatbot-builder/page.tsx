'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, MessageSquare, Brain, Settings, Zap, Users, Shield, Clock, Target } from 'lucide-react'

const AiChatbotBuilderPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Build intelligent chatbots that understand context and provide accurate responses.',
      benefits: ['Natural language processing', 'Context awareness', 'Learning capabilities', 'Multi-language support']
    },
    {
      icon: Settings,
      title: 'Visual Builder',
      description: 'Create chatbots with our intuitive drag-and-drop interface - no coding required.',
      benefits: ['Drag-and-drop interface', 'Pre-built templates', 'Custom workflows', 'Easy customization']
    },
    {
      icon: MessageSquare,
      title: 'Multi-Channel Support',
      description: 'Deploy your chatbot across multiple channels including website, social media, and messaging apps.',
      benefits: ['Website integration', 'Social media bots', 'Messaging platforms', 'API integration']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Built with enterprise-grade security and compliance features.',
      benefits: ['Data encryption', 'GDPR compliance', 'Access controls', 'Audit logs']
    }
  ]

  const benefits = [
    'Reduce customer support costs by 60%',
    'Provide 24/7 customer assistance',
    'Handle multiple conversations simultaneously',
    'Improve customer satisfaction scores',
    'Scale support without hiring more staff',
    'Gather valuable customer insights'
  ]

  const useCases = [
    {
      title: 'Customer Support',
      description: 'Handle common customer inquiries and provide instant support.',
      icon: MessageSquare,
      metrics: ['60% cost reduction', '24/7 availability', 'Instant responses']
    },
    {
      title: 'Sales Qualification',
      description: 'Qualify leads and route them to the right sales team member.',
      icon: Target,
      metrics: ['40% more qualified leads', 'Faster response times', 'Better conversion rates']
    },
    {
      title: 'Lead Generation',
      description: 'Capture leads through interactive conversations and forms.',
      icon: Users,
      metrics: ['50% more leads', 'Higher engagement', 'Better data quality']
    },
    {
      title: 'Internal Support',
      description: 'Help employees with HR questions, IT support, and company policies.',
      icon: Settings,
      metrics: ['Reduced IT tickets', 'Faster resolution', 'Employee satisfaction']
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99/month',
      features: ['Up to 1,000 conversations', 'Basic AI capabilities', 'Website integration', 'Email support'],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299/month',
      features: ['Up to 10,000 conversations', 'Advanced AI features', 'Multi-channel support', 'Priority support'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      features: ['Unlimited conversations', 'Custom AI training', 'White-label solution', 'Dedicated support'],
      popular: false
    }
  ]

  return (
    <>
      <Helmet>
        <title>AI Chatbot Builder - Zion Tech Group | Build Intelligent Chatbots</title>
        <meta name="description" content="Create intelligent chatbots with our AI-powered builder. No coding required. Deploy across multiple channels and provide 24/7 customer support." />
        <meta name="keywords" content="AI chatbot builder, chatbot creation, intelligent chatbots, customer support automation, conversational AI" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Chatbot <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Builder</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Create intelligent chatbots with our AI-powered builder. No coding required. Deploy across multiple channels and provide 24/7 customer support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Start Building
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Powerful Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-cyan-500 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                      <p className="text-gray-300 mb-4">{feature.description}</p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start space-x-2">
                            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-300 text-sm">{benefit}</span>
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Our Chatbot Builder?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <p className="text-gray-300 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Use Cases</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-cyan-500 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <useCase.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                      <p className="text-gray-300 mb-4">{useCase.description}</p>
                      <div className="space-y-2">
                        {useCase.metrics.map((metric, metricIndex) => (
                          <div key={metricIndex} className="flex items-center space-x-2">
                            <Zap className="w-4 h-4 text-yellow-400" />
                            <span className="text-gray-300 text-sm">{metric}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular ? 'border-cyan-500 ring-2 ring-cyan-500/20' : 'border-white/20 hover:border-cyan-500'
                }`}>
                  {plan.popular && (
                    <div className="text-center mb-4">
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="text-3xl font-bold text-cyan-400 mb-4">{plan.price}</div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                  }`}>
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build Your Chatbot?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start building intelligent chatbots today and transform your customer experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Start Building Now
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

export default AiChatbotBuilderPage
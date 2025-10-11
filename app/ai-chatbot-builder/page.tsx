'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { MessageSquare, Brain, Zap, Shield, ArrowRight, CheckCircle, Users, Settings } from 'lucide-react'

const AIChatbotBuilderPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Conversations',
      description: 'Create intelligent chatbots that understand context and provide natural, human-like responses.',
      benefits: ['Natural language processing', 'Context awareness', 'Multi-language support', 'Sentiment analysis']
    },
    {
      icon: Zap,
      title: 'Quick Setup',
      description: 'Build and deploy your chatbot in minutes with our intuitive drag-and-drop interface.',
      benefits: ['Visual builder', 'Pre-built templates', 'One-click deployment', 'Custom integrations']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance to protect your data and customer interactions.',
      benefits: ['Data encryption', 'GDPR compliance', 'Access controls', 'Audit trails']
    },
    {
      icon: Settings,
      title: 'Advanced Customization',
      description: 'Customize every aspect of your chatbot to match your brand and business needs.',
      benefits: ['Custom branding', 'Workflow automation', 'API integrations', 'Analytics dashboard']
    }
  ]

  const useCases = [
    {
      title: 'Customer Support',
      description: 'Provide 24/7 customer support with instant responses to common questions and issues.',
      icon: '🎧',
      benefits: ['Reduce support tickets', 'Instant responses', 'Multilingual support', 'Escalation handling']
    },
    {
      title: 'Sales Assistant',
      description: 'Guide customers through your sales process and help them find the right products.',
      icon: '💰',
      benefits: ['Lead qualification', 'Product recommendations', 'Price inquiries', 'Appointment booking']
    },
    {
      title: 'Lead Generation',
      description: 'Capture and qualify leads automatically with intelligent conversation flows.',
      icon: '📈',
      benefits: ['Lead capture forms', 'Qualification questions', 'Contact information', 'Follow-up scheduling']
    },
    {
      title: 'Internal Support',
      description: 'Help employees with HR questions, IT support, and company policies.',
      icon: '🏢',
      benefits: ['HR assistance', 'IT support', 'Policy guidance', 'Training resources']
    }
  ]

  const templates = [
    {
      name: 'E-commerce Support',
      description: 'Perfect for online stores with product inquiries and order support',
      category: 'Customer Support',
      features: ['Order tracking', 'Product info', 'Returns', 'Shipping']
    },
    {
      name: 'Lead Generation',
      description: 'Capture and qualify leads for your business',
      category: 'Sales',
      features: ['Contact forms', 'Qualification', 'Scheduling', 'Follow-up']
    },
    {
      name: 'FAQ Bot',
      description: 'Answer frequently asked questions automatically',
      category: 'Support',
      features: ['Knowledge base', 'Search', 'Categories', 'Feedback']
    },
    {
      name: 'Appointment Booking',
      description: 'Help customers schedule appointments and meetings',
      category: 'Scheduling',
      features: ['Calendar integration', 'Availability', 'Reminders', 'Rescheduling']
    }
  ]

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
              Create intelligent, conversational AI chatbots in minutes. No coding required. 
              Build chatbots that understand, learn, and engage your customers like never before.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-lg">
                Start Building
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 text-lg">
                Try Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Powerful Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl mb-6">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Use Cases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{useCase.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">{useCase.title}</h3>
                    <p className="text-gray-300 mb-4">{useCase.description}</p>
                    <ul className="space-y-2">
                      {useCase.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
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

      {/* Templates Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Ready-to-Use Templates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {templates.map((template, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                    <MessageSquare className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{template.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{template.description}</p>
                  <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-xs">
                    {template.category}
                  </span>
                </div>
                <ul className="space-y-2 mb-6">
                  {template.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="h-3 w-3 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                  Use Template
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Proven Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">10K+</div>
              <p className="text-gray-300">Chatbots Created</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">95%</div>
              <p className="text-gray-300">Customer Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">50%</div>
              <p className="text-gray-300">Support Ticket Reduction</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
              <p className="text-gray-300">Always Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Build Your AI Chatbot?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Start building your intelligent chatbot today. No coding required, just drag, drop, and deploy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-lg flex items-center justify-center">
              Start Building Now
              <ArrowRight className="h-5 w-5 ml-2" />
            </button>
            <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 text-lg">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AIChatbotBuilderPage
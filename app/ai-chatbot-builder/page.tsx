import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, MessageCircle, Brain, Zap, Users, BarChart3, Shield } from 'lucide-react'

export default function AIChatbotBuilderPage() {
  const features = [
    {
      icon: <MessageCircle className="w-8 h-8 text-blue-500" />,
      title: 'Natural Conversations',
      description: 'Create chatbots that understand context and engage in natural, human-like conversations.'
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      title: 'AI-Powered Intelligence',
      description: 'Advanced machine learning algorithms provide intelligent responses and learn from interactions.'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Quick Deployment',
      description: 'Build and deploy your chatbot in minutes with our intuitive drag-and-drop interface.'
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: 'Multi-Channel Support',
      description: 'Deploy across websites, mobile apps, social media, and messaging platforms.'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-red-500" />,
      title: 'Analytics & Insights',
      description: 'Track performance, user satisfaction, and conversation analytics to optimize your bot.'
    },
    {
      icon: <Shield className="w-8 h-8 text-indigo-500" />,
      title: 'Secure & Compliant',
      description: 'Enterprise-grade security with GDPR compliance and data protection features.'
    }
  ]

  const useCases = [
    'Customer support automation',
    'Lead generation and qualification',
    'E-commerce assistance',
    'FAQ automation',
    'Appointment scheduling',
    'Order tracking',
    'Technical support',
    'Sales consultation'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Chatbot Builder - Zion Tech Group</title>
        <meta name="description" content="Build intelligent chatbots with our AI-powered chatbot builder. Create engaging conversational experiences for your customers." />
        <meta name="keywords" content="AI chatbot builder, conversational AI, customer support automation, chatbot development" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              AI Chatbot Builder
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Create intelligent, conversational chatbots that engage your customers and automate support. 
              No coding required - just drag, drop, and deploy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                Build Your Bot
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Try Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to build and deploy intelligent chatbots.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 lg:p-12 border border-white/20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Perfect For
              </h2>
              <p className="text-xl text-gray-300">
                Our AI chatbot builder excels at various business applications
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {useCases.map((useCase, index) => (
                <div key={index} className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-sm">{useCase}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-6 sm:p-8 lg:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Build Your AI Chatbot?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Start creating intelligent chatbots that engage your customers and drive business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Start Building
              </Link>
              <Link
                to="/ai-services"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                View All AI Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, MessageSquare, Zap, BarChart3, Globe, Shield, Settings } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function AIChatbotBuilderPage() {
  const features = [
    {
      icon: <MessageSquare className="w-8 h-8 text-blue-500" />,
      title: 'Visual Builder',
      description: 'Create chatbots with our intuitive drag-and-drop interface'
    },
    {
      icon: <Globe className="w-8 h-8 text-green-500" />,
      title: 'Multi-Channel',
      description: 'Deploy across website, social media, and messaging platforms'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-500" />,
      title: 'Advanced Analytics',
      description: 'Track performance and optimize with detailed insights'
    },
    {
      icon: <Settings className="w-8 h-8 text-orange-500" />,
      title: 'Custom Integrations',
      description: 'Connect with your existing tools and systems'
    }
  ]

  const useCases = [
    {
      title: 'Customer Support',
      description: 'Handle common inquiries 24/7 with intelligent responses',
      icon: <MessageSquare className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Sales Assistant',
      description: 'Qualify leads and guide prospects through your sales funnel',
      icon: <Zap className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Lead Generation',
      description: 'Capture and qualify leads with interactive conversations',
      icon: <BarChart3 className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'FAQ Automation',
      description: 'Answer frequently asked questions instantly',
      icon: <Shield className="w-6 h-6 text-orange-500" />
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Chatbot Builder | Zion Tech Group</title>
        <meta name="description" content="Create intelligent chatbots for customer service, sales, and support with our advanced AI chatbot builder platform." />
        <meta name="keywords" content="AI chatbot builder, chatbot creation, customer service automation, Zion Tech Group" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Chatbot Builder Enterprise
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Create intelligent chatbots for customer service, sales, and support with our 
              advanced AI platform. No coding required - build, deploy, and scale in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Building
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                View Demo
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
              Everything you need to build, deploy, and manage intelligent chatbots.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-purple-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Deploy chatbots across various business functions to improve efficiency and customer experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-purple-500/50 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {useCase.icon}
                  <h3 className="text-xl font-bold text-white ml-3">
                    {useCase.title}
                  </h3>
                </div>
                <p className="text-gray-300">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build Your First Chatbot?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses using our AI Chatbot Builder to automate 
              customer interactions and improve efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
              >
                Start Building Now
              </Link>
              <Link
                to="/contact"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
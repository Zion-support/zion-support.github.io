'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, MessageSquare, Zap, Users, Settings, BarChart } from 'lucide-react'

const AIChatbotBuilderPage: React.FC = () => {
  const features = [
    {
      icon: MessageSquare,
      title: 'Visual Bot Builder',
      description: 'Drag-and-drop interface to build chatbots without coding.',
      benefits: ['No-code interface', 'Visual workflow', 'Pre-built templates', 'Easy customization']
    },
    {
      icon: Zap,
      title: 'AI-Powered Responses',
      description: 'Intelligent responses powered by advanced AI and natural language processing.',
      benefits: ['Natural language understanding', 'Context awareness', 'Smart responses', 'Learning capabilities']
    },
    {
      icon: Users,
      title: 'Multi-Channel Support',
      description: 'Deploy chatbots across multiple channels and platforms.',
      benefits: ['Web integration', 'Mobile apps', 'Social media', 'Messaging platforms']
    },
    {
      icon: Settings,
      title: 'Advanced Configuration',
      description: 'Comprehensive configuration options for customizing bot behavior.',
      benefits: ['Custom workflows', 'Integration options', 'Analytics settings', 'Security controls']
    },
    {
      icon: BarChart,
      title: 'Analytics & Insights',
      description: 'Detailed analytics and insights into chatbot performance and user interactions.',
      benefits: ['Usage analytics', 'Performance metrics', 'User insights', 'Optimization recommendations']
    }
  ]

  const benefits = [
    'Reduce customer service costs by 40%',
    'Improve response time by 90%',
    'Increase customer satisfaction',
    'Scale customer support efficiently',
    'Enable 24/7 customer assistance',
    'Gather valuable customer insights'
  ]

  return (
    <>
      <Helmet>
        <title>AI Chatbot Builder - Zion Tech Group</title>
        <meta name="description" content="Build intelligent chatbots with our AI-powered chatbot builder. No-code interface, advanced AI, and multi-channel deployment." />
        <meta name="keywords" content="AI chatbot builder, chatbot development, conversational AI, customer service automation, chatbot platform" />
      </Helmet>
      
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(236,72,153,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Chatbot
              <span className="block bg-gradient-to-r from-pink-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Builder
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Build intelligent chatbots with our AI-powered platform. 
              No coding required - create, deploy, and manage chatbots with ease.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-pink-500 to-blue-600 hover:from-pink-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Building
              </button>
              <button className="border border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Advanced Chatbot Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful tools to build and manage intelligent chatbots
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                  <feature.icon className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-gray-400 flex items-center">
                          <CheckCircle className="w-4 h-4 text-pink-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Choose Our Chatbot Builder?
              </h2>
              <p className="text-xl text-gray-300">
                Proven results that drive customer engagement
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                  <CheckCircle className="w-8 h-8 text-pink-400 mx-auto mb-4" />
                  <p className="text-lg text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Build Your Chatbot?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your chatbot needs and get started today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-pink-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-pink-600 hover:to-blue-700 transition-all duration-300">
                  Contact Us
                </button>
                <button className="border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}

export default AIChatbotBuilderPage
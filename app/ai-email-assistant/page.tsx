import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Mail, Brain, Zap, Users, BarChart3, Shield } from 'lucide-react'

export default function AIEmailAssistantPage() {
  const features = [
    {
      icon: <Mail className="w-8 h-8 text-blue-500" />,
      title: 'Smart Email Management',
      description: 'Automatically organize, prioritize, and respond to emails with AI-powered intelligence.'
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      title: 'AI-Powered Responses',
      description: 'Generate contextual, professional email responses that match your communication style.'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Instant Processing',
      description: 'Process and respond to emails in real-time, never miss an important message again.'
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: 'Team Collaboration',
      description: 'Share email insights and collaborate with your team on important communications.'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-red-500" />,
      title: 'Email Analytics',
      description: 'Track email performance, response times, and engagement metrics.'
    },
    {
      icon: <Shield className="w-8 h-8 text-indigo-500" />,
      title: 'Security & Privacy',
      description: 'Enterprise-grade security with end-to-end encryption and privacy protection.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Email Assistant - Zion Tech Group</title>
        <meta name="description" content="Streamline your email management with our AI-powered email assistant. Automate responses, organize messages, and boost productivity." />
        <meta name="keywords" content="AI email assistant, email automation, smart email management, productivity" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              AI Email Assistant
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your email productivity with our AI-powered assistant. Automate responses, 
              organize messages, and never miss an important communication again.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
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
              Everything you need to master your email communication.
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

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-6 sm:p-8 lg:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Email Productivity?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Start managing your emails more efficiently with our AI-powered assistant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Get Started Today
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
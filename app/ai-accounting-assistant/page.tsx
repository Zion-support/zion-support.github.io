'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Calculator, TrendingUp, Shield, Clock, BarChart, Users } from 'lucide-react'

const AIAccountingAssistantPage: React.FC = () => {
  const features = [
    {
      icon: Calculator,
      title: 'Automated Bookkeeping',
      description: 'AI-powered bookkeeping that automatically categorizes transactions and maintains accurate records.'
    },
    {
      icon: TrendingUp,
      title: 'Financial Analytics',
      description: 'Advanced analytics and reporting to help you understand your financial performance.'
    },
    {
      icon: Shield,
      title: 'Tax Preparation',
      description: 'Automated tax calculations and preparation to ensure compliance and accuracy.'
    },
    {
      icon: Clock,
      title: 'Real-time Processing',
      description: 'Process financial data in real-time for immediate insights and decision making.'
    },
    {
      icon: BarChart,
      title: 'Custom Reports',
      description: 'Generate custom financial reports tailored to your business needs.'
    },
    {
      icon: Users,
      title: 'Multi-user Support',
      description: 'Collaborative accounting with role-based access and permissions.'
    }
  ]

  return (
    <>
      <Helmet>
        <title>AI Accounting Assistant | Zion Tech Group - Intelligent Financial Management</title>
        <meta name="description" content="Streamline your accounting with AI-powered financial management tools. Automated bookkeeping, tax preparation, and financial analytics." />
        <meta name="keywords" content="AI accounting, financial management, bookkeeping automation, tax preparation, accounting software" />
      </Helmet>
      
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Accounting
              <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Assistant
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Streamline your accounting with AI-powered financial management tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
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
                Powerful Accounting Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI technology that simplifies financial management
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                  <feature.icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}

export default AIAccountingAssistantPage
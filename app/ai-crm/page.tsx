'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, Users, Zap, Brain, BarChart, Settings } from 'lucide-react'

const AICrmPage: React.FC = () => {
  const features = [
    {
      icon: Users,
      title: 'Customer Management',
      description: 'Comprehensive customer relationship management with AI-powered insights.',
      benefits: ['Customer profiling', 'Relationship tracking', 'Interaction history', 'Personalized engagement']
    },
    {
      icon: Zap,
      title: 'Sales Automation',
      description: 'Automate sales processes and workflows for improved efficiency.',
      benefits: ['Lead management', 'Sales automation', 'Pipeline optimization', 'Efficiency gains']
    },
    {
      icon: Brain,
      title: 'AI-Powered Analytics',
      description: 'Get intelligent insights and recommendations for better business decisions.',
      benefits: ['Predictive analytics', 'Customer insights', 'Sales forecasting', 'Data-driven decisions']
    },
    {
      icon: BarChart,
      title: 'Performance Tracking',
      description: 'Track sales performance and customer engagement metrics.',
      benefits: ['Sales metrics', 'Performance tracking', 'ROI analysis', 'Optimization insights']
    },
    {
      icon: Settings,
      title: 'Customizable Platform',
      description: 'Customize CRM features and workflows to match your business needs.',
      benefits: ['Custom fields', 'Workflow customization', 'Integration options', 'Scalable solutions']
    }
  ]

  const benefits = [
    'Increase sales productivity by 50%',
    'Improve customer satisfaction by 40%',
    'Reduce manual CRM tasks by 60%',
    'Enhance customer relationship management',
    'Scale sales operations efficiently',
    'Drive better business outcomes'
  ]

  return (
    <>
      <Helmet>
        <title>AI CRM - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered CRM platform for intelligent customer relationship management, sales automation, and business insights." />
        <meta name="keywords" content="AI CRM, customer relationship management, sales automation, CRM platform, business intelligence" />
      </Helmet>
      
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                CRM
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your customer relationships with AI-powered CRM. 
              Automate processes, gain insights, and drive better business outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
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
                Advanced CRM Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful tools to manage customer relationships
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                  <feature.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-gray-400 flex items-center">
                          <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
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
                Why Choose Our AI CRM?
              </h2>
              <p className="text-xl text-gray-300">
                Proven results that drive business success
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                  <CheckCircle className="w-8 h-8 text-blue-400 mx-auto mb-4" />
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
                Ready to Transform Your CRM?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your CRM needs and get started today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
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

export default AICrmPage
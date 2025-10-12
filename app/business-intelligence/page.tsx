import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { CheckCircle, Phone, Mail, Zap, Shield, Brain, Globe, ArrowRight } from 'lucide-react'

const BusinessIntelligencePage: React.FC = () => {
  const features = [
    {
      title: 'Advanced Analytics',
      description: 'Comprehensive data analysis and visualization tools',
      icon: <Brain className="w-8 h-8 text-cyan-400" />
    },
    {
      title: 'Real-time Dashboards',
      description: 'Live monitoring and reporting of key business metrics',
      icon: <Globe className="w-8 h-8 text-green-400" />
    },
    {
      title: 'Predictive Insights',
      description: 'AI-powered forecasting and trend analysis',
      icon: <Zap className="w-8 h-8 text-purple-400" />
    },
    {
      title: 'Data Security',
      description: 'Enterprise-grade security for your business data',
      icon: <Shield className="w-8 h-8 text-red-400" />
    }
  ]

  return (
    <>
      <Helmet>
        <title>Business Intelligence - Zion Tech Group</title>
        <meta name="description" content="Transform your business data into actionable insights with our advanced business intelligence solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Business Intelligence
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business data into actionable insights with our advanced 
              business intelligence solutions and analytics platforms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 inline-flex items-center"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default BusinessIntelligencePage
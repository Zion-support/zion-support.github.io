'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { FileText, BarChart, Clock, Zap, Shield, Globe } from 'lucide-react'

const AIAutomatedReportingPage: React.FC = () => {
  const features = [
    {
      icon: FileText,
      title: 'Automated Report Generation',
      description: 'AI-powered report generation that creates comprehensive reports from your data automatically.',
      benefits: ['Automatic generation', 'Custom templates', 'Multiple formats', 'Scheduled reports']
    },
    {
      icon: BarChart,
      title: 'Data Visualization',
      description: 'Beautiful charts and graphs that make your data easy to understand and analyze.',
      benefits: ['Interactive charts', 'Custom visualizations', 'Export options', 'Mobile responsive']
    },
    {
      icon: Clock,
      title: 'Real-time Updates',
      description: 'Reports that update in real-time as your data changes, ensuring accuracy and relevance.',
      benefits: ['Live updates', 'Real-time data', 'Automatic refresh', 'Instant notifications']
    },
    {
      icon: Zap,
      title: 'AI Insights',
      description: 'Intelligent insights and recommendations based on your data patterns and trends.',
      benefits: ['Smart insights', 'Trend analysis', 'Predictive analytics', 'Recommendations']
    },
    {
      icon: Shield,
      title: 'Secure Reporting',
      description: 'Enterprise-grade security with role-based access and data protection.',
      benefits: ['Role-based access', 'Data encryption', 'Audit trails', 'Compliance standards']
    },
    {
      icon: Globe,
      title: 'Global Distribution',
      description: 'Distribute reports globally with multi-language support and regional customization.',
      benefits: ['Multi-language', 'Global distribution', 'Regional customization', 'Time zone support']
    }
  ]

  const benefits = [
    'Reduce report creation time by 90%',
    'Improve data accuracy by 95%',
    'Increase report frequency by 10x',
    'Eliminate manual reporting errors'
  ]

  return (
    <>
      <Helmet>
        <title>AI Automated Reporting - Zion Tech Group | Intelligent Report Generation</title>
        <meta name="description" content="Revolutionary AI-powered automated reporting solution that generates comprehensive reports from your data with intelligent insights and real-time updates." />
        <meta name="keywords" content="AI reporting, automated reports, data visualization, business intelligence, report generation, AI insights" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Automated Reporting
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Revolutionary AI-powered automated reporting solution that generates comprehensive reports from your data with intelligent insights and real-time updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Reporting Features
              </h2>
              <p className="text-xl text-gray-300">
                Everything you need to create and manage intelligent reports
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-orange-400/50 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-gray-300 text-sm">
                          <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 flex-shrink-0" />
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
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose AI Automated Reporting?
              </h2>
              <p className="text-xl text-gray-300">
                Transform your reporting process with intelligent automation
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <div className="w-8 h-8 text-white">✓</div>
                  </div>
                  <p className="text-gray-300 text-lg font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Automate Your Reporting?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us today to learn how our AI automated reporting can transform your data insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300">
                  Get Started
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default AIAutomatedReportingPage
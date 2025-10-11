'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, FileText, BarChart, Clock, Zap, Users } from 'lucide-react'

const AIAutomatedReportingPage: React.FC = () => {
  const features = [
    {
      icon: FileText,
      title: 'Automated Report Generation',
      description: 'Generate comprehensive reports automatically based on your data and schedule.',
      benefits: ['Scheduled reports', 'Custom templates', 'Multiple formats', 'Email delivery']
    },
    {
      icon: BarChart,
      title: 'Data Visualization',
      description: 'Transform complex data into clear, actionable visualizations and charts.',
      benefits: ['Interactive charts', 'Custom dashboards', 'Real-time updates', 'Export options']
    },
    {
      icon: Clock,
      title: 'Real-time Monitoring',
      description: 'Monitor key metrics and KPIs in real-time with automated alerts.',
      benefits: ['Live dashboards', 'Alert system', 'Performance tracking', 'Trend analysis']
    },
    {
      icon: Zap,
      title: 'AI-Powered Insights',
      description: 'Get intelligent insights and recommendations from your data using AI.',
      benefits: ['Pattern recognition', 'Predictive analytics', 'Anomaly detection', 'Smart recommendations']
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Share reports and collaborate with your team on data analysis.',
      benefits: ['Shared workspaces', 'Comment system', 'Version control', 'Access management']
    }
  ]

  const benefits = [
    'Reduce report generation time by 80%',
    'Improve data accuracy and consistency',
    'Enable real-time decision making',
    'Enhance team productivity and collaboration',
    'Scale reporting across your organization',
    'Ensure compliance with automated documentation'
  ]

  return (
    <>
      <Helmet>
        <title>AI Automated Reporting - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered automated reporting solution for modern businesses. Generate, analyze, and share reports with intelligent automation." />
        <meta name="keywords" content="automated reporting, AI reports, business intelligence, data visualization, report automation" />
      </Helmet>
      
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Automated
              <span className="block bg-gradient-to-r from-green-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Reporting
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your data into actionable insights with AI-powered automated reporting. 
              Generate, analyze, and share reports with intelligent automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
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
                Advanced Reporting Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful tools to automate and optimize your reporting process
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                  <feature.icon className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-gray-400 flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
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
                Why Choose Our Reporting Solution?
              </h2>
              <p className="text-xl text-gray-300">
                Proven results that drive business success
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                  <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-4" />
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
                Ready to Automate Your Reporting?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your reporting needs and get started today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300">
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

export default AIAutomatedReportingPage
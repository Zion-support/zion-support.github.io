'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { BarChart, TrendingUp, PieChart, Activity, Shield, Zap } from 'lucide-react'

const AIAnalyticsDashboardPage: React.FC = () => {
  const features = [
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics with real-time data visualization and insights.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    },
    {
      icon: TrendingUp,
      title: 'Trend Analysis',
      description: 'Identify patterns and trends in your data with AI-powered analysis.',
      benefits: ['Pattern recognition', 'Trend forecasting', 'Anomaly detection', 'Predictive insights']
    },
    {
      icon: PieChart,
      title: 'Data Visualization',
      description: 'Beautiful and interactive charts and graphs for better data understanding.',
      benefits: ['Interactive charts', 'Custom visualizations', 'Export capabilities', 'Mobile responsive']
    },
    {
      icon: Activity,
      title: 'Real-time Monitoring',
      description: 'Monitor your data in real-time with live updates and notifications.',
      benefits: ['Live updates', 'Real-time alerts', 'Performance monitoring', 'Instant notifications']
    },
    {
      icon: Shield,
      title: 'Data Security',
      description: 'Enterprise-grade security with encryption and access controls.',
      benefits: ['End-to-end encryption', 'Access controls', 'Data privacy', 'Compliance standards']
    },
    {
      icon: Zap,
      title: 'AI Insights',
      description: 'Get intelligent insights and recommendations from your data.',
      benefits: ['Smart recommendations', 'Automated insights', 'Pattern recognition', 'Predictive analytics']
    }
  ]

  const benefits = [
    'Increase data-driven decisions by 75%',
    'Reduce analysis time by 60%',
    'Improve accuracy with AI insights',
    'Scale analytics without technical expertise'
  ]

  return (
    <>
      <Helmet>
        <title>AI Analytics Dashboard - Zion Tech Group | Advanced Data Analytics</title>
        <meta name="description" content="Powerful AI-powered analytics dashboard that transforms your data into actionable insights. Real-time monitoring, advanced visualizations, and intelligent recommendations." />
        <meta name="keywords" content="AI analytics, data dashboard, business intelligence, data visualization, analytics platform, AI insights" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Analytics Dashboard
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Powerful AI-powered analytics dashboard that transforms your data into actionable insights. Real-time monitoring, advanced visualizations, and intelligent recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
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
                Powerful Features
              </h2>
              <p className="text-xl text-gray-300">
                Everything you need to analyze and visualize your data
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-gray-300 text-sm">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 flex-shrink-0" />
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
                Why Choose AI Analytics?
              </h2>
              <p className="text-xl text-gray-300">
                Transform your data into competitive advantage
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
                Ready to Transform Your Data Analytics?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us today to learn how our AI analytics dashboard can revolutionize your data insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                  Get Started
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
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

export default AIAnalyticsDashboardPage
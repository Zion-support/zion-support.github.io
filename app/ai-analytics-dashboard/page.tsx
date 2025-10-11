'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { BarChart, TrendingUp, PieChart, Activity, Target, Zap } from 'lucide-react'

const AIAnalyticsDashboardPage: React.FC = () => {
  const features = [
    {
      icon: BarChart,
      title: 'Real-time Analytics',
      description: 'Monitor your business performance with live data and insights.'
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'AI-powered predictions to help you make informed decisions.'
    },
    {
      icon: PieChart,
      title: 'Data Visualization',
      description: 'Beautiful charts and graphs to understand your data at a glance.'
    },
    {
      icon: Activity,
      title: 'Performance Tracking',
      description: 'Track KPIs and metrics that matter most to your business.'
    },
    {
      icon: Target,
      title: 'Goal Setting',
      description: 'Set and track business goals with automated progress monitoring.'
    },
    {
      icon: Zap,
      title: 'Automated Reports',
      description: 'Generate comprehensive reports automatically on your schedule.'
    }
  ]

  return (
    <>
      <Helmet>
        <title>AI Analytics Dashboard - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered analytics dashboard for comprehensive business intelligence and data-driven decision making." />
        <meta name="keywords" content="AI analytics, business intelligence, data dashboard, predictive analytics, business metrics" />
      </Helmet>
      
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Analytics
              <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Dashboard
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your data into actionable insights with our advanced AI analytics platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Analytics
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
                Advanced Analytics Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful tools to understand and optimize your business performance
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

export default AIAnalyticsDashboardPage
'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react'

const AiAnalyticsDashboardPage: React.FC = () => {
  const features = [
    {
      icon: BarChart,
      title: 'Real-Time Analytics',
      description: 'Monitor your business performance with live dashboards and instant insights across all key metrics.'
    },
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Advanced machine learning algorithms provide predictive analytics and intelligent recommendations.'
    },
    {
      icon: Target,
      title: 'Custom Dashboards',
      description: 'Create personalized dashboards tailored to your specific business needs and KPIs.'
    },
    {
      icon: TrendingUp,
      title: 'Performance Tracking',
      description: 'Track and analyze performance trends to identify opportunities for growth and optimization.'
    },
    {
      icon: Globe,
      title: 'Multi-Platform Integration',
      description: 'Connect all your data sources for a unified view of your business operations.'
    },
    {
      icon: Database,
      title: 'Data Visualization',
      description: 'Transform complex data into clear, actionable visualizations and reports.'
    }
  ]

  const benefits = [
    'Make data-driven decisions with confidence',
    'Identify trends and opportunities early',
    'Improve operational efficiency by 35%',
    'Reduce reporting time by 80%',
    'Gain competitive advantage with insights',
    'Gain competitive advantage with advanced technology'
  ]
  return (
    <>
      <Helmet>
        <title>AI Analytics Dashboard - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered analytics dashboard solution for modern businesses." />
        <meta name="keywords" content="AI analytics dashboard, business intelligence, data visualization, predictive analytics, KPI tracking" />
      </Helmet>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Analytics Dashboard
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your data into actionable insights with our advanced AI-powered analytics dashboard. 
                Make smarter decisions and drive business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  <Zap className="w-5 h-5 mr-2" />
                  Start Free Trial
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-slate-900 transition-all duration-300 flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful Analytics Features
              </h2>
              <p className="text-xl text-gray-300">
                Everything you need to understand your business data
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Proven Benefits
              </h2>
              <p className="text-xl text-gray-300">
                Real results for your business
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <CheckCircle className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0" />
                  <span className="text-white">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Analytics?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using AI to make better decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                <Zap className="w-5 h-5 mr-2" />
                Get Started Today
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-slate-900 transition-all duration-300 flex items-center justify-center">
                <ArrowRight className="w-5 h-5 mr-2" />
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
        </React.Fragment>
  )
}

export default $1

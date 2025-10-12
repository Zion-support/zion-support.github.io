'use client'
import React from 'react'
import SEOHead from '../components/SEOHead'
import { ArrowRight, BarChart3, TrendingUp, PieChart, Activity, Database, Zap, CheckCircle, Globe, Users } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function AnalyticsPage() {
  const services = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Business Intelligence Dashboard',
      description: 'Comprehensive business intelligence with real-time analytics and custom reporting.',
      features: ['Real-time Dashboards', 'Custom Reports', 'Data Visualization', 'KPI Tracking'],
      price: 'Starting at $199/month',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Predictive Analytics',
      description: 'AI-powered predictive analytics to forecast trends and optimize business decisions.',
      features: ['Trend Forecasting', 'Predictive Modeling', 'Risk Analysis', 'Optimization Insights'],
      price: 'Starting at $299/month',
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30'
    },
    {
      icon: <PieChart className="w-8 h-8" />,
      title: 'Data Visualization',
      description: 'Advanced data visualization tools to transform complex data into actionable insights.',
      features: ['Interactive Charts', 'Custom Visualizations', 'Data Storytelling', 'Export Options'],
      price: 'Starting at $149/month',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30'
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: 'Real-time Monitoring',
      description: 'Monitor your business metrics in real-time with automated alerts and notifications.',
      features: ['Real-time Updates', 'Automated Alerts', 'Performance Monitoring', 'Custom Metrics'],
      price: 'Starting at $179/month',
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/30'
    }
  ]

  const analyticsTypes = [
    { name: 'Sales Analytics', description: 'Track sales performance and identify growth opportunities' },
    { name: 'Customer Analytics', description: 'Understand customer behavior and preferences' },
    { name: 'Marketing Analytics', description: 'Measure marketing ROI and campaign effectiveness' },
    { name: 'Financial Analytics', description: 'Monitor financial health and cash flow' },
    { name: 'Operational Analytics', description: 'Optimize business processes and efficiency' },
    { name: 'Web Analytics', description: 'Analyze website traffic and user engagement' }
  ]

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Real-time Processing',
      description: 'Process and analyze data in real-time for instant insights'
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Multiple Data Sources',
      description: 'Connect to various data sources including databases, APIs, and files'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Cloud-based Platform',
      description: 'Access your analytics from anywhere with our secure cloud platform'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Team Collaboration',
      description: 'Share insights and collaborate with your team in real-time'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <SEOHead 
        title="Analytics Services - Zion Tech Group"
        description="Advanced analytics and business intelligence solutions. Real-time dashboards, predictive analytics, data visualization, and custom reporting for data-driven decisions."
        keywords="analytics, business intelligence, data visualization, predictive analytics, real-time monitoring, dashboards, reporting, data analysis"
      />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-cyber-grid opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"></div>
      
      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium mb-6 animate-pulse">
                📊 Advanced Analytics
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">Analytics</span> & Business Intelligence
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Transform your data into actionable insights with our advanced analytics platform. 
              Real-time dashboards, predictive analytics, and custom reporting solutions.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/30 to-blue-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Analytics Platform?
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-blue-400">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Analytics Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Comprehensive analytics solutions designed to help you make data-driven decisions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`${service.bgColor} backdrop-blur-lg rounded-2xl p-8 border ${service.borderColor} hover:bg-white/10 transition-all duration-500 group hover:scale-105 hover:shadow-2xl`}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className={`${service.color} group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-white">{service.price}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to="/contact"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Analytics Types Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/30 to-purple-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Analytics</span> Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Comprehensive analytics solutions for every aspect of your business
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {analyticsTypes.map((type, index) => (
                <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-blue-500/30 transition-all duration-300 group">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {type.name}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {type.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 rounded-3xl p-16 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-cyber-grid opacity-10"></div>
              <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-10 left-10 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                  Start Your Analytics Journey
                </h2>
                <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
                  Transform your data into actionable insights and make better business decisions.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link
                    to="/contact"
                    className="group bg-white text-blue-600 px-12 py-6 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center"
                  >
                    Get Analytics Demo
                    <BarChart3 className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                  <a
                    href="https://ziontechgroup.com/analytics-demo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group border-2 border-white text-white px-12 py-6 rounded-2xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                  >
                    View Sample Reports
                    <TrendingUp className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
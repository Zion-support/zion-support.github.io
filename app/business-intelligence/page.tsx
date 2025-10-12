'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, BarChart3, TrendingUp, Target, Users, Clock, Star, DollarSign, Brain } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const BusinessIntelligencePage: React.FC = () => {
  const services = [
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-500" />,
      title: 'Data Analytics & Visualization',
      description: 'Transform raw data into actionable insights with advanced analytics and interactive dashboards',
      features: [
        'Interactive dashboards',
        'Real-time data processing',
        'Custom KPI tracking',
        'Data visualization',
        'Report automation',
        'Mobile analytics'
      ],
      pricing: 'Starting at $2,500',
      popular: true
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      title: 'Predictive Analytics',
      description: 'Leverage machine learning to predict future trends and make data-driven decisions',
      features: [
        'Predictive modeling',
        'Trend analysis',
        'Forecasting',
        'Risk assessment',
        'Scenario planning',
        'Machine learning integration'
      ],
      pricing: 'Starting at $5,000',
      popular: true
    },
    {
      icon: <Target className="w-8 h-8 text-purple-500" />,
      title: 'Performance Management',
      description: 'Monitor and optimize business performance with comprehensive KPI tracking and reporting',
      features: [
        'KPI dashboard design',
        'Performance monitoring',
        'Goal tracking',
        'Scorecard creation',
        'Alert systems',
        'Executive reporting'
      ],
      pricing: 'Starting at $3,000',
      popular: false
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: 'Customer Analytics',
      description: 'Understand customer behavior and optimize customer experience with advanced analytics',
      features: [
        'Customer segmentation',
        'Behavior analysis',
        'Churn prediction',
        'Lifetime value analysis',
        'Customer journey mapping',
        'Personalization insights'
      ],
      pricing: 'Starting at $4,000',
      popular: false
    }
  ]

  const stats = [
    { number: '200+', label: 'Dashboards Created' },
    { number: '50+', label: 'Data Sources Integrated' },
    { number: '99%', label: 'Accuracy Rate' },
    { number: '24/7', label: 'Data Monitoring' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Business Intelligence - Zion Tech Group | Data Analytics & Insights</title>
        <meta name="description" content="Transform your data into actionable insights with our business intelligence services. Advanced analytics, predictive modeling, and data visualization solutions." />
        <meta name="keywords" content="business intelligence, data analytics, predictive analytics, data visualization, KPI tracking, Zion Tech Group" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <BarChart3 className="inline-block w-16 h-16 mr-4 text-blue-400" />
            Business Intelligence
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your data into actionable insights with advanced analytics, predictive modeling, and interactive dashboards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/pricing" 
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our BI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive business intelligence solutions designed to help you make data-driven decisions and drive business growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-purple-400 font-semibold">{service.pricing}</span>
                  {service.popular && (
                    <span className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Popular
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Data into Insights?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let our BI experts help you unlock the power of your data and make smarter business decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Consultation
              </Link>
              <Link 
                to="/pricing" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default BusinessIntelligencePage
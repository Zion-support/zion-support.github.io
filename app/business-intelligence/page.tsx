'use client'
import React from 'react'
import SEOHead from '../components/SEOHead'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, BarChart3, TrendingUp, Target, Brain, Database, Zap, Users, DollarSign } from 'lucide-react'

const BusinessIntelligencePage: React.FC = () => {
  const features = [
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-500" />,
      title: 'Advanced Analytics',
      description: 'Comprehensive data analysis and visualization tools for better decision making.'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      title: 'Predictive Analytics',
      description: 'AI-powered forecasting and trend analysis to predict future outcomes.'
    },
    {
      icon: <Target className="w-8 h-8 text-purple-500" />,
      title: 'KPI Dashboard',
      description: 'Real-time monitoring of key performance indicators and business metrics.'
    },
    {
      icon: <Brain className="w-8 h-8 text-orange-500" />,
      title: 'AI Insights',
      description: 'Machine learning algorithms to uncover hidden patterns in your data.'
    },
    {
      icon: <Database className="w-8 h-8 text-cyan-500" />,
      title: 'Data Integration',
      description: 'Connect and analyze data from multiple sources in one platform.'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Real-time Reports',
      description: 'Automated report generation and distribution for timely insights.'
    }
  ]

  const benefits = [
    {
      icon: <DollarSign className="w-6 h-6 text-green-500" />,
      title: 'Increase Revenue',
      description: 'Identify opportunities and optimize strategies to boost revenue by up to 25%'
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-blue-500" />,
      title: 'Improve Efficiency',
      description: 'Streamline operations and reduce costs through data-driven insights'
    },
    {
      icon: <Users className="w-6 h-6 text-purple-500" />,
      title: 'Better Decisions',
      description: 'Make informed decisions based on comprehensive data analysis'
    },
    {
      icon: <Target className="w-6 h-6 text-orange-500" />,
      title: 'Competitive Advantage',
      description: 'Stay ahead of competitors with advanced analytics and insights'
    }
  ]

  const services = [
    {
      title: 'Data Visualization',
      description: 'Create interactive dashboards and reports that make data easy to understand.',
      features: ['Interactive Charts', 'Custom Dashboards', 'Real-time Updates', 'Mobile Access']
    },
    {
      title: 'Predictive Modeling',
      description: 'Build machine learning models to forecast trends and predict outcomes.',
      features: ['Trend Analysis', 'Forecasting', 'Risk Assessment', 'Scenario Planning']
    },
    {
      title: 'Data Mining',
      description: 'Discover hidden patterns and insights in your data using advanced algorithms.',
      features: ['Pattern Recognition', 'Anomaly Detection', 'Clustering Analysis', 'Association Rules']
    },
    {
      title: 'Performance Monitoring',
      description: 'Track KPIs and business metrics in real-time with automated alerts.',
      features: ['KPI Tracking', 'Alert System', 'Performance Reports', 'Trend Analysis']
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOHead 
        title="Business Intelligence - Zion Tech Group"
        description="Transform your data into actionable insights with our advanced business intelligence solutions. Analytics, reporting, and AI-powered insights."
        keywords="business intelligence, data analytics, BI solutions, data visualization, predictive analytics, Zion Tech Group"
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Business <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Intelligence</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your data into actionable insights with our advanced business intelligence solutions. 
            Make data-driven decisions and drive business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#features" 
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center"
            >
              Explore Solutions
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="/contact" 
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our BI Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our business intelligence solutions are designed to deliver measurable results and drive business growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {benefit.icon}
                  <h3 className="text-lg font-semibold text-white ml-3">{benefit.title}</h3>
                </div>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our BI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive business intelligence tools designed to meet your data analysis needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">{feature.title}</h3>
                </div>
                <p className="text-gray-300">{feature.description}</p>
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
              End-to-end business intelligence solutions tailored to your business needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Data into Insights?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Let's discuss how our business intelligence solutions can help you make better decisions and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a 
                  href="/pricing" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View Pricing
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default BusinessIntelligencePage

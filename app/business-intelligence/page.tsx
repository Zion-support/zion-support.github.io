'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, Zap, Shield, Brain, Globe, BarChart, TrendingUp, Database, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const BusinessIntelligencePage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-12 h-12 text-blue-500" />,
      title: 'AI-Powered Analytics',
      description: 'Advanced AI technology to transform your business intelligence and data analysis',
      benefits: [
        'Machine learning algorithms',
        'Predictive analytics',
        'Natural language processing',
        'Automated insights generation'
      ]
    },
    {
      icon: <Zap className="w-12 h-12 text-green-500" />,
      title: 'Real-Time Insights',
      description: 'Lightning-fast data processing and real-time business intelligence',
      benefits: [
        'Live data streaming',
        'Instant dashboard updates',
        'Real-time alerts',
        'Dynamic reporting'
      ]
    },
    {
      icon: <Shield className="w-12 h-12 text-purple-500" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption, compliance standards, and advanced threat protection',
      benefits: [
        'End-to-end encryption',
        'GDPR compliance',
        'SOC 2 certification',
        'Advanced access controls'
      ]
    },
    {
      icon: <Globe className="w-12 h-12 text-orange-500" />,
      title: 'Global Scalability',
      description: 'Worldwide deployment and support for international businesses',
      benefits: [
        'Multi-region deployment',
        '24/7 global support',
        'Localized data centers',
        'International compliance'
      ]
    }
  ]

  const services = [
    {
      icon: <BarChart className="w-8 h-8 text-blue-500" />,
      title: 'Data Visualization',
      description: 'Interactive dashboards and reports that make complex data easy to understand',
      pricing: '$2,000/month'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      title: 'Predictive Analytics',
      description: 'AI-powered forecasting and trend analysis for better business decisions',
      pricing: '$3,500/month'
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: 'Data Warehousing',
      description: 'Centralized data storage and management for all your business information',
      pricing: '$1,800/month'
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: 'User Analytics',
      description: 'Comprehensive user behavior analysis and customer insights',
      pricing: '$2,500/month'
    }
  ]

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Data-Driven Decisions',
      description: 'Make informed business decisions based on real-time data and insights'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Competitive Advantage',
      description: 'Stay ahead of the competition with advanced analytics and AI technology'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Cost Optimization',
      description: 'Identify cost-saving opportunities and optimize your business operations'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Scalable Solutions',
      description: 'Business intelligence solutions that grow with your business needs'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Business Intelligence Solutions - Zion Tech Group</title>
        <meta name="description" content="Transform your business with advanced AI-powered business intelligence solutions. Real-time analytics, predictive insights, and data visualization." />
      </Helmet>
      
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Business <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Intelligence</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your data into actionable insights with our advanced AI-powered business intelligence solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get Started Today
                </Link>
                <Link 
                  to="/ai-services" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center"
                >
                  View AI Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Business Intelligence Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive data analytics and business intelligence services designed to drive growth and efficiency.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
                  <div className="flex items-center mb-4">
                    {feature.icon}
                    <h3 className="text-2xl font-semibold text-gray-900 ml-4">
                      {feature.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6">
                    {feature.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-600">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from our comprehensive range of business intelligence services.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <h3 className="text-lg font-semibold text-gray-900 ml-3">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  
                  <div className="text-2xl font-bold text-purple-600">
                    {service.pricing}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Business Intelligence Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine cutting-edge technology with deep business expertise to deliver results that matter.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Business Intelligence?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Let our expert team help you unlock the power of your data with advanced business intelligence solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your BI Journey
              </Link>
              <Link 
                to="/about" 
                className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}

export default BusinessIntelligencePage
'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, TrendingDown, Zap, Brain, BarChart, Settings } from 'lucide-react'

const AICustomerChurnPage: React.FC = () => {
  const features = [
    {
      icon: TrendingDown,
      title: 'Churn Prediction',
      description: 'Predict customer churn with AI-powered analytics and machine learning.',
      benefits: ['Early warning system', 'Risk scoring', 'Predictive modeling', 'Churn prevention']
    },
    {
      icon: Zap,
      title: 'Real-time Monitoring',
      description: 'Monitor customer behavior and churn risk in real-time.',
      benefits: ['Live monitoring', 'Real-time alerts', 'Behavior tracking', 'Risk assessment']
    },
    {
      icon: Brain,
      title: 'Intelligent Insights',
      description: 'Get AI-powered insights into customer churn patterns and causes.',
      benefits: ['Pattern recognition', 'Root cause analysis', 'Insight generation', 'Data-driven decisions']
    },
    {
      icon: BarChart,
      title: 'Churn Analytics',
      description: 'Comprehensive analytics and reporting for churn management.',
      benefits: ['Churn metrics', 'Trend analysis', 'Performance tracking', 'Optimization insights']
    },
    {
      icon: Settings,
      title: 'Retention Strategies',
      description: 'Automated retention strategies and customer engagement programs.',
      benefits: ['Retention campaigns', 'Engagement automation', 'Personalized offers', 'Customer lifecycle management']
    }
  ]

  const benefits = [
    'Reduce customer churn by 35%',
    'Improve customer retention rates',
    'Increase customer lifetime value',
    'Enhance customer satisfaction',
    'Optimize retention strategies',
    'Drive better business outcomes'
  ]

  return (
    <>
      <Helmet>
        <title>AI Customer Churn - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered customer churn prediction and prevention platform for reducing churn and improving retention." />
        <meta name="keywords" content="AI customer churn, churn prediction, customer retention, churn prevention, customer analytics" />
      </Helmet>
      
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(239,68,68,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Customer
              <span className="block bg-gradient-to-r from-red-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Churn
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Predict and prevent customer churn with AI-powered analytics. 
              Reduce churn rates and improve customer retention with intelligent insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-red-500 to-blue-600 hover:from-red-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-red-400 text-red-400 hover:bg-red-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
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
                Advanced Churn Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful tools to predict and prevent customer churn
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                  <feature.icon className="w-12 h-12 text-red-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-gray-400 flex items-center">
                          <CheckCircle className="w-4 h-4 text-red-400 mr-2" />
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
                Why Choose Our Churn Solution?
              </h2>
              <p className="text-xl text-gray-300">
                Proven results that drive retention success
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                  <CheckCircle className="w-8 h-8 text-red-400 mx-auto mb-4" />
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
                Ready to Reduce Churn?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your churn prevention needs and get started today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-red-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-red-600 hover:to-blue-700 transition-all duration-300">
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

export default AICustomerChurnPage
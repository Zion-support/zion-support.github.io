'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react'

const AiAnalyticsPage: React.FC = () => {
  const features = [
    {
      icon: BarChart,
      title: 'Advanced Data Processing',
      description: 'Process and analyze massive datasets with lightning-fast AI algorithms for instant insights.'
    },
    {
      icon: Brain,
      title: 'Machine Learning Models',
      description: 'Custom ML models trained on your data to provide accurate predictions and recommendations.'
    },
    {
      icon: Target,
      title: 'Predictive Analytics',
      description: 'Forecast future trends and outcomes with advanced predictive modeling capabilities.'
    },
    {
      icon: TrendingUp,
      title: 'Real-Time Monitoring',
      description: 'Monitor key metrics and KPIs in real-time with automated alerts and notifications.'
    },
    {
      icon: Globe,
      title: 'Multi-Source Integration',
      description: 'Connect and analyze data from multiple sources for comprehensive business intelligence.'
    },
    {
      icon: Database,
      title: 'Data Visualization',
      description: 'Transform complex data into clear, actionable visualizations and interactive dashboards.'
    }
  ]

  const benefits = [
    'Make data-driven decisions with confidence',
    'Identify trends and opportunities early',
    'Improve operational efficiency by 35%',
    'Reduce reporting time by 80%',
    'Gain competitive advantage with insights',
    'Scale analytics across your organization'
  ]

  const useCases = [
    {
      title: 'Customer Behavior Analysis',
      description: 'Understand customer patterns and preferences to improve engagement and retention.',
      icon: '👥'
    },
    {
      title: 'Sales Forecasting',
      description: 'Predict sales trends and optimize inventory management for better profitability.',
      icon: '📈'
    },
    {
      title: 'Risk Management',
      description: 'Identify and mitigate business risks proactively with advanced analytics.',
      icon: '🛡️'
    }
  ]
  return (
    <React.Fragment>
      <Helmet>
        <title>AI Analytics - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered analytics solution for modern businesses." />
        <meta name="keywords" content="AI analytics, artificial intelligence, data analytics, AI solutions, intelligent automation" />
      </Helmet>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                AI Analytics
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Transform your data into actionable insights with our advanced AI-powered analytics platform. 
                Make smarter decisions and drive business growth with intelligent data analysis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  <Zap className="w-5 h-5 mr-2" />
                  Start Free Trial
                </button>
                <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-all duration-300 flex items-center justify-center">
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Powerful AI Features
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need to unlock the power of your data
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Proven Benefits
              </h2>
              <p className="text-xl text-gray-600">
                Real results for your business
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center bg-white rounded-lg p-4 shadow-sm">
                  <CheckCircle className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Use Cases
              </h2>
              <p className="text-xl text-gray-600">
                See how AI analytics can transform your business
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{useCase.title}</h3>
                  <p className="text-gray-600">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Analytics?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of businesses already using AI to make better decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center font-semibold">
                <Zap className="w-5 h-5 mr-2" />
                Get Started Today
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center">
                <ArrowRight className="w-5 h-5 mr-2" />
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
        </React.Fragment>
  )
}
<<<<<<< HEAD

export default $1
=======
]
const benefits = [
'Increase efficiency by up to 50%',
'Reduce costs by 30% with automation',
'Improve decision-making with AI insights',
'Scale operations without proportional staff increases',
'Gain competitive advantage with advanced technology'
]
const useCases = [
{
title: 'Business Intelligence',
description: 'Transform raw data into actionable business insights',
icon: '📊'
},
{
title: 'Marketing Analytics',
description: 'Optimize marketing campaigns with AI-powered insights',
icon: '📈'
},
{
title: 'Financial Analysis',
description: 'Monitor financial performance and identify trends',
icon: '💰'
},
{
title: 'Customer Analytics',
description: 'Understand customer behavior and preferences',
icon: '👥'
},
{
title: 'Operations Monitoring',
description: 'Track operational metrics and optimize processes',
icon: '⚙️'
},
{
title: 'Risk Management',
description: 'Identify and mitigate business risks proactively',
icon: '🛡️'
}
]
return (
<>
<Helmet>
<title>AI Analytics - Zion Tech Group</title>
<meta name="description" content="Advanced AI-powered analytics solution for modern businesses." />
<meta name="keywords" content="AI analytics, artificial intelligence, data analytics, AI solutions, intelligent automation" />
</Helmet>
<Navigation />
<main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
{/* Hero Section */}
<section className="relative py-20 px-4 sm:px-6 lg:px-8">
<div className="max-w-7xl mx-auto">
<div className="text-center">
<h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
AI Analytics
</
<p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
Transform your business with intelligent analytics powered by cutting-edge AI technology.
</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
Get Started
</
<button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
Learn More
</
</div>
</div>
</div>
</section>
{/* Features Section */}
<section className="py-20 px-4 sm:px-6 lg:px-8">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
Powerful AI Analytics Features
</
<p className="text-xl text-gray-600 max-w-3xl mx-auto">
Discover how our AI analytics platform can revolutionize your business intelligence.
</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
{features.map((feature, index) => (
<div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
<div className="flex items-center mb-4">
<feature.icon className="h-8 w-8 text-blue-600 mr-3" />
<h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
</div>
<p className="text-gray-600 mb-4">{feature.description}</p>
<ul className="space-y-2">
{feature.benefits.map((benefit, benefitIndex) => (
<li key={benefitIndex} className="flex items-center text-sm text-gray-600">
<CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
{benefit}
</li>
))}
</ul>
</div>
))}
</div>
</div>
</section>
{/* CTA Section */}
<section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
Ready to Transform Your Analytics?
</h2>
<p className="text-xl text-blue-100 mb-8">
Join thousands of businesses already using our AI analytics platform.
</p>
<button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
Start Your Free Trial
</
</div>
</section>
</main>
<Footer />
</>
)
}
export default AiAnalyticsPage
>>>>>>> dbc62b9d098f838bcbe86265c63a54c93a7c7698

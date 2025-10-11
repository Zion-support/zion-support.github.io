'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Brain, BarChart, Target, TrendingUp, Zap, Eye, Users, Settings } from 'lucide-react'

const AiDataAnalyticsPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Advanced machine learning algorithms that discover hidden patterns and trends in your data.',
      benefits: ['Predictive Analytics', 'Anomaly Detection', 'Pattern Recognition', 'Automated Insights']
    },
    {
      icon: BarChart,
      title: 'Real-Time Dashboards',
      description: 'Interactive dashboards that update in real-time with your latest data.',
      benefits: ['Live Data Updates', 'Custom Widgets', 'Interactive Charts', 'Mobile Responsive']
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific audiences and segments with data-driven precision.',
      benefits: ['Audience Segmentation', 'Behavioral Analysis', 'Personalization', 'Campaign Optimization']
    },
    {
      icon: TrendingUp,
      title: 'Growth Analytics',
      description: 'Track and analyze growth metrics to optimize your business performance.',
      benefits: ['Growth Tracking', 'Performance Metrics', 'ROI Analysis', 'Trend Analysis']
    }
  ]

  const benefits = [
    'Make data-driven decisions with confidence',
    'Identify trends and opportunities before competitors',
    'Reduce manual reporting by 90%',
    'Improve business performance by 40%',
    'Scale analytics across your entire organization',
    'Get insights in real-time, not weeks later'
  ]

  const useCases = [
    {
      title: 'Sales Analytics',
      description: 'Track sales performance, forecast revenue, and optimize sales strategies.',
      icon: TrendingUp,
      metrics: ['Revenue growth', 'Conversion rates', 'Customer lifetime value']
    },
    {
      title: 'Marketing Analytics',
      description: 'Measure campaign effectiveness, track ROI, and optimize marketing spend.',
      icon: Target,
      metrics: ['Campaign performance', 'Customer acquisition cost', 'Marketing ROI']
    },
    {
      title: 'Operations Analytics',
      description: 'Monitor operational efficiency, identify bottlenecks, and optimize processes.',
      icon: Settings,
      metrics: ['Process efficiency', 'Resource utilization', 'Cost optimization']
    },
    {
      title: 'Customer Analytics',
      description: 'Understand customer behavior, predict churn, and improve satisfaction.',
      icon: Users,
      metrics: ['Customer satisfaction', 'Churn prediction', 'Behavioral insights']
    }
  ]

  const analyticsStats = [
    { label: 'Data Sources', value: '100+', icon: BarChart },
    { label: 'Processing Speed', value: 'Real-time', icon: Zap },
    { label: 'Accuracy', value: '99.9%', icon: Target },
    { label: 'Uptime', value: '99.9%', icon: Eye }
  ]

  return (
    <>
      <Helmet>
        <title>AI Data Analytics - Zion Tech Group | Advanced Business Intelligence</title>
        <meta name="description" content="Transform your data into actionable insights with our AI-powered analytics platform. Real-time dashboards, predictive analytics, and intelligent recommendations." />
        <meta name="keywords" content="AI data analytics, business intelligence, data visualization, predictive analytics, real-time dashboards, data insights" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Data <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Analytics</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your data into actionable insights with our AI-powered analytics platform. Real-time dashboards, predictive analytics, and intelligent recommendations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Powerful Analytics Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-cyan-500 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                      <p className="text-gray-300 mb-4">{feature.description}</p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start space-x-2">
                            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-300 text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Our AI Data Analytics?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <p className="text-gray-300 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Analytics Use Cases</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-cyan-500 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <useCase.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                      <p className="text-gray-300 mb-4">{useCase.description}</p>
                      <div className="space-y-2">
                        {useCase.metrics.map((metric, metricIndex) => (
                          <div key={metricIndex} className="flex items-center space-x-2">
                            <Target className="w-4 h-4 text-cyan-400" />
                            <span className="text-gray-300 text-sm">{metric}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Analytics Performance</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {analyticsStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                  <p className="text-gray-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Data?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start making data-driven decisions with our AI-powered analytics platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Start Your Analytics Journey
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

export default AiDataAnalyticsPage
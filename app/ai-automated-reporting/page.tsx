'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, BarChart3, FileText, TrendingUp, Clock, Shield, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'

const AIAutomatedReportingPage: React.FC = () => {
  const features = [
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-500" />,
      title: 'Real-time Analytics',
      description: 'Get instant insights from your data with automated reporting and real-time dashboards.',
      benefits: ['Live data updates', 'Interactive charts', 'Custom metrics', 'Performance tracking']
    },
    {
      icon: <FileText className="w-8 h-8 text-green-500" />,
      title: 'Automated Reports',
      description: 'Generate comprehensive reports automatically without manual intervention.',
      benefits: ['Scheduled reports', 'Multiple formats', 'Custom templates', 'Email delivery']
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-500" />,
      title: 'Predictive Insights',
      description: 'Leverage AI to predict trends and provide actionable business intelligence.',
      benefits: ['Trend analysis', 'Forecasting', 'Risk assessment', 'Opportunity identification']
    },
    {
      icon: <Clock className="w-8 h-8 text-orange-500" />,
      title: 'Time Savings',
      description: 'Reduce manual reporting time by up to 90% with intelligent automation.',
      benefits: ['Automated data collection', 'Smart formatting', 'Instant delivery', 'Zero manual work']
    }
  ]

  const benefits = [
    {
      icon: <FileText className="w-8 h-8 text-blue-500" />,
      title: 'Automated Report Generation',
      description: 'Generate comprehensive reports automatically with AI-powered data analysis.',
      benefits: ['Auto-generation', 'Data analysis', 'Report templates', 'Custom formatting']
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Data Security',
      description: 'Enterprise-grade security ensures your data is protected at all times.',
      benefits: ['Encryption', 'Access controls', 'Audit trails', 'Compliance']
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-500" />,
      title: 'Lightning Fast',
      description: 'Process large datasets and generate reports in seconds, not hours.',
      benefits: ['High performance', 'Scalable processing', 'Parallel execution', 'Optimized algorithms']
    }
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Data Integration',
      description: 'Connect your data sources and configure automated data collection.'
    },
    {
      step: '02',
      title: 'AI Analysis',
      description: 'Our AI analyzes your data to identify patterns and generate insights.'
    },
    {
      step: '03',
      title: 'Report Generation',
      description: 'Automatically generate comprehensive reports with visualizations.'
    },
    {
      step: '04',
      title: 'Delivery & Action',
      description: 'Reports are delivered on schedule and ready for immediate action.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Automated Reporting - Zion Tech Group</title>
        <meta name="description" content="Transform your data into actionable insights with AI-powered automated reporting solutions." />
        <meta name="keywords" content="AI reporting, automated reports, business intelligence, data analytics, Zion Tech Group" />
      </Helmet>
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Automated Reporting
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your data into actionable insights with our AI-powered automated reporting solutions. 
              Generate comprehensive reports without manual intervention.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                Get Started Today
              </Link>
              <Link 
                to="/services" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View All Services
              </Link>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our AI Reporting?</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Experience the power of intelligent automation and data-driven insights.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                    <div className="mb-6">{benefit.icon}</div>
                    <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                    <p className="text-gray-300 mb-6">{benefit.description}</p>
                    <ul className="space-y-2">
                      {benefit.benefits.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Process Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How It Works</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                A simple 4-step process to transform your data into actionable insights.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Automate Your Reporting?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss how our AI automated reporting can transform your business intelligence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Your Free Trial
                </Link>
                <Link 
                  to="/services" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Explore All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default AIAutomatedReportingPage
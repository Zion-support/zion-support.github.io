import React from 'react'
import { Helmet } from 'react-helmet-async'
import { BarChart, PieChart, TrendingUp, Eye, Brain, Zap, Shield, Users } from 'lucide-react'

const AIAnalyticsDashboardPage: React.FC = () => {
  const features = [
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization and insights.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    },
    {
      icon: PieChart,
      title: 'Data Visualization',
      description: 'Interactive charts and graphs to help you understand your data better.',
      benefits: ['Interactive charts', 'Custom visualizations', 'Data exploration', 'Insight discovery']
    },
    {
      icon: TrendingUp,
      title: 'Trend Analysis',
      description: 'Identify trends and patterns in your data with AI-powered analysis.',
      benefits: ['Trend identification', 'Pattern recognition', 'Predictive analytics', 'Forecasting']
    },
    {
      icon: Eye,
      title: 'Real-time Monitoring',
      description: 'Monitor your data in real-time with live updates and alerts.',
      benefits: ['Live updates', 'Real-time alerts', 'Performance monitoring', 'Instant insights']
    },
    {
      icon: Brain,
      title: 'AI Insights',
      description: 'Get intelligent insights and recommendations from your data using AI.',
      benefits: ['Smart recommendations', 'Automated insights', 'Intelligent analysis', 'Predictive modeling']
    },
    {
      icon: Zap,
      title: 'Fast Processing',
      description: 'Process large datasets quickly with optimized algorithms and cloud computing.',
      benefits: ['High performance', 'Scalable processing', 'Cloud computing', 'Optimized algorithms']
    }
  ]

  return (
    <>
      <Helmet>
        <title>AI Analytics Dashboard - Zion Tech Group | Data Intelligence</title>
        <meta name="description" content="Powerful AI analytics dashboard for data visualization and business intelligence. Transform your data into actionable insights with advanced analytics tools." />
        <meta name="keywords" content="AI analytics, data visualization, business intelligence, dashboard, data analysis" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Analytics <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Dashboard</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Powerful AI analytics dashboard for data visualization and business intelligence. Transform your data into actionable insights with advanced analytics tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Get Started
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Powerful Features
              </h2>
              <p className="text-xl text-gray-300">
                Everything you need to analyze and visualize your data
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <feature.icon className="w-8 h-8 text-blue-400 mr-3" />
                    <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-gray-400 flex items-center">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
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
        
        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Data?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Experience the power of AI-driven analytics and turn your data into actionable insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Start Free Trial
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default AIAnalyticsDashboardPage
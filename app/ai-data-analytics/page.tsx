import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Helmet } from 'react-helmet-async'
import { BarChart, Brain, Zap, Eye, ArrowRight, CheckCircle, TrendingUp, Database } from 'lucide-react'

const AIDataAnalyticsPage: React.FC = () => {
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
      description: 'Interactive visualizations that update in real-time with your business data.',
      benefits: ['Live Data Streaming', 'Custom Dashboards', 'Interactive Charts', 'Mobile Responsive']
    },
    {
      icon: Zap,
      title: 'Fast Processing',
      description: 'Process massive datasets in seconds with our optimized AI analytics engine.',
      benefits: ['High-Speed Processing', 'Scalable Infrastructure', 'Real-Time Analysis', 'Batch Processing']
    },
    {
      icon: Eye,
      title: 'Visual Analytics',
      description: 'Transform complex data into intuitive visualizations and interactive charts.',
      benefits: ['Interactive Charts', 'Custom Visualizations', 'Data Storytelling', 'Export Capabilities']
    }
  ]

  const analyticsTypes = [
    {
      type: 'Business Intelligence',
      description: 'Comprehensive BI solutions for strategic decision-making and performance monitoring',
      icon: '📊',
      metrics: ['KPI tracking', 'Revenue analysis', 'Customer insights', 'Operational metrics']
    },
    {
      type: 'Predictive Analytics',
      description: 'Forecast future trends and outcomes using advanced machine learning models',
      icon: '🔮',
      metrics: ['Sales forecasting', 'Demand planning', 'Risk assessment', 'Trend prediction']
    },
    {
      type: 'Customer Analytics',
      description: 'Deep insights into customer behavior, preferences, and lifetime value',
      icon: '👥',
      metrics: ['Customer segmentation', 'Churn prediction', 'Lifetime value', 'Behavior analysis']
    },
    {
      type: 'Operational Analytics',
      description: 'Optimize operations with real-time monitoring and performance analytics',
      icon: '⚙️',
      metrics: ['Process optimization', 'Resource utilization', 'Quality metrics', 'Efficiency tracking']
    }
  ]

  const benefits = [
    'Make data-driven decisions with confidence',
    'Identify opportunities and risks before they impact your business',
    'Reduce analysis time from days to minutes',
    'Scale analytics across your entire organization',
    'Improve accuracy with AI-powered predictions',
    'Gain competitive advantage through insights'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Data Analytics - Zion Tech Group</title>
        <meta name="description" content="Transform your data into actionable insights with AI-powered analytics. Advanced machine learning, real-time dashboards, and predictive analytics for better business decisions." />
        <meta name="keywords" content="AI data analytics, business intelligence, predictive analytics, data visualization, machine learning, data insights" />
      </Helmet>

      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Data Analytics</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your data into actionable insights with advanced AI-powered analytics. 
              Discover patterns, predict trends, and make smarter business decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-lg">
                Start Free Trial
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 text-lg">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Advanced Analytics Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl mb-6">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Types */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Analytics Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {analyticsTypes.map((analytics, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{analytics.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">{analytics.type}</h3>
                    <p className="text-gray-300 mb-4">{analytics.description}</p>
                    <div>
                      <h4 className="text-lg font-semibold text-cyan-400 mb-2">Key Metrics:</h4>
                      <div className="flex flex-wrap gap-2">
                        {analytics.metrics.map((metric, metricIndex) => (
                          <span key={metricIndex} className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm">
                            {metric}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Why Choose AI Data Analytics?</h2>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                    <p className="text-gray-300 text-lg">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-2xl p-8 text-center">
              <div className="text-6xl mb-4">📈</div>
              <h3 className="text-2xl font-bold text-white mb-4">Intelligent Insights</h3>
              <p className="text-gray-300">
                Our AI algorithms continuously learn from your data to provide increasingly accurate and valuable insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Analytics Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">95%</div>
              <p className="text-gray-300">Faster Insights</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">300%</div>
              <p className="text-gray-300">ROI Increase</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
              <p className="text-gray-300">Data Sources</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
              <p className="text-gray-300">Real-Time Analysis</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Unlock Your Data's Potential?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Start your free trial today and see how AI analytics can transform your business decision-making.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-lg flex items-center justify-center">
              Start Free Trial
              <ArrowRight className="h-5 w-5 ml-2" />
            </button>
            <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 text-lg">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AIDataAnalyticsPage
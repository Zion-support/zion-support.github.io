import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { BarChart, TrendingUp, Zap, Eye, Shield, ArrowRight, CheckCircle } from 'lucide-react'

const AIAnalyticsPage: React.FC = () => {
  const features = [
    {
      icon: BarChart,
      title: 'Real-time Dashboards',
      description: 'Monitor your business metrics in real-time with customizable, interactive dashboards.',
      benefits: ['Live data updates', 'Custom widgets', 'Interactive charts', 'Mobile responsive']
    },
    {
      icon: TrendingUp,
      title: 'Performance Optimization',
      description: 'Optimize your business performance with AI-driven recommendations and insights.',
      benefits: ['Performance tracking', 'Optimization suggestions', 'ROI analysis', 'Growth strategies']
    },
    {
      icon: Zap,
      title: 'Fast Processing',
      description: 'Process large datasets in seconds with our optimized AI analytics engine.',
      benefits: ['High-speed processing', 'Scalable infrastructure', 'Real-time analysis', 'Batch processing']
    },
    {
      icon: Eye,
      title: 'Visual Analytics',
      description: 'Transform complex data into intuitive visualizations and interactive charts.',
      benefits: ['Interactive charts', 'Custom visualizations', 'Data storytelling', 'Export capabilities']
    },
    {
      icon: Shield,
      title: 'Data Security',
      description: 'Enterprise-grade security to protect your sensitive business data and analytics.',
      benefits: ['Data encryption', 'Access controls', 'Audit trails', 'Compliance standards']
    }
  ]

  const useCases = [
    {
      industry: 'E-commerce',
      description: 'Track customer behavior, optimize conversion rates, and predict sales trends',
      metrics: ['Conversion rates', 'Customer lifetime value', 'Cart abandonment', 'Sales forecasting']
    },
    {
      industry: 'Healthcare',
      description: 'Analyze patient data, optimize treatment outcomes, and improve operational efficiency',
      metrics: ['Patient outcomes', 'Treatment effectiveness', 'Resource utilization', 'Cost analysis']
    },
    {
      industry: 'Finance',
      description: 'Monitor market trends, assess risk, and optimize investment strategies',
      metrics: ['Market analysis', 'Risk assessment', 'Portfolio performance', 'Fraud detection']
    },
    {
      industry: 'Manufacturing',
      description: 'Optimize production processes, predict maintenance needs, and improve quality control',
      metrics: ['Production efficiency', 'Quality metrics', 'Predictive maintenance', 'Supply chain optimization']
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Analytics</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your data into actionable insights with our advanced AI-powered analytics platform. 
              Make smarter decisions faster with real-time intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-lg">
                Start Free Trial
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 text-lg">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Powerful Analytics Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Use Cases Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Industry Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">{useCase.industry}</h3>
                <p className="text-gray-300 mb-6">{useCase.description}</p>
                <div>
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Key Metrics</h4>
                  <div className="flex flex-wrap gap-2">
                    {useCase.metrics.map((metric, metricIndex) => (
                      <span key={metricIndex} className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm">
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Proven Results</h2>
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
              <p className="text-gray-300">Monitoring</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
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

export default AIAnalyticsPage
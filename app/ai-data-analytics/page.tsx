import React from 'react'
import { Helmet } from 'react-helmet-async'
import Layout from '../layout'

const AiDataAnalyticsPage: React.FC = () => {
  return (
    <Layout
      title="AI Data Analytics - Zion Tech Group"
      description="Advanced AI-powered data analytics solutions for business intelligence, predictive insights, and data-driven decision making."
      keywords="AI data analytics, business intelligence, predictive analytics, data insights, machine learning"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                AI Data Analytics
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your data into actionable insights with our advanced AI-powered analytics solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Predictive Analytics</h3>
              <p className="text-gray-300 mb-4">
                Leverage AI to predict future trends and make data-driven business decisions.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Machine learning models</li>
                <li>• Trend forecasting</li>
                <li>• Risk assessment</li>
                <li>• Performance optimization</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Real-time Insights</h3>
              <p className="text-gray-300 mb-4">
                Get instant insights from your data with real-time analytics and monitoring.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Live dashboards</li>
                <li>• Real-time alerts</li>
                <li>• Interactive visualizations</li>
                <li>• Custom reporting</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Data Intelligence</h3>
              <p className="text-gray-300 mb-4">
                Uncover hidden patterns and insights in your data with advanced AI algorithms.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Pattern recognition</li>
                <li>• Anomaly detection</li>
                <li>• Clustering analysis</li>
                <li>• Natural language processing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AiDataAnalyticsPage
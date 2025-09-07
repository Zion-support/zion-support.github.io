import React from 'react'
import Head from 'next/head'
import Layout from '../components/layout/Layout'
const AIAutonomousResearchAssistant: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>AI Autonomous Research Assistant - Zion Tech Group</title>
        <meta name="description" content="Autonomous AI research assistant for data analysis and insights" />
      </Head>
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">AI Autonomous Research Assistant</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conduct comprehensive research and analysis autonomously with our AI-powered research assistant.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Data Collection</h3>
            <p className="text-gray-600 mb-4">
              Automatically gather data from multiple sources and formats for comprehensive analysis.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Web scraping</li>
              <li>• API integration</li>
              <li>• Document processing</li>
              <li>• Database queries</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Analysis & Insights</h3>
            <p className="text-gray-600 mb-4">
              AI analyzes data to identify patterns, trends, and provide actionable insights.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Statistical analysis</li>
              <li>• Pattern recognition</li>
              <li>• Trend identification</li>
              <li>• Predictive modeling</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Report Generation</h3>
            <p className="text-gray-600 mb-4">
              Generate comprehensive reports with findings, recommendations, and visualizations.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Automated reporting</li>
              <li>• Data visualization</li>
              <li>• Executive summaries</li>
              <li>• Custom formatting</li>
            </ul>
          </div>
        </div>

        <div className="bg-indigo-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Start Your Research</h2>
          <p className="text-lg text-gray-700 mb-6">
            Let our AI research assistant handle your data analysis and research needs autonomously.
          </p>
          <div className="flex justify-center gap-4">
            <a href="/contact" className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700">
              Get Started
            </a>
            <a href="/about" className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-50">
              Learn More
            </a>
          </div>
        </div>
      </main>
    </Layout>
  )
}
export default AIAutonomousResearchAssistant
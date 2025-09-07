import React from 'react'
import Head from 'next/head'
import Layout from '../components/layout/Layout'
const AICustomerSuccessPlatform: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>AI Customer Success Platform - Zion Tech Group</title>
        <meta name="description" content="AI-powered customer success platform for retention and growth" />
      </Head>
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">AI Customer Success Platform</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Drive customer success and retention with our AI-powered platform that predicts and prevents churn.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Churn Prediction</h3>
            <p className="text-gray-600 mb-4">
              Identify at-risk customers before they churn with advanced AI algorithms.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Risk scoring</li>
              <li>• Early warning signals</li>
              <li>• Behavioral analysis</li>
              <li>• Predictive modeling</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Success Automation</h3>
            <p className="text-gray-600 mb-4">
              Automate customer success workflows and interventions based on AI insights.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Automated workflows</li>
              <li>• Intervention triggers</li>
              <li>• Task automation</li>
              <li>• Follow-up scheduling</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Growth Insights</h3>
            <p className="text-gray-600 mb-4">
              Get actionable insights to drive customer growth and expansion.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Expansion opportunities</li>
              <li>• Usage analytics</li>
              <li>• Success metrics</li>
              <li>• Growth recommendations</li>
            </ul>
          </div>
        </div>

        <div className="bg-emerald-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Drive Customer Success</h2>
          <p className="text-lg text-gray-700 mb-6">
            Transform your customer success operations with AI-powered insights and automation.
          </p>
          <div className="flex justify-center gap-4">
            <a href="/contact" className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700">
              Get Started
            </a>
            <a href="/about" className="border border-emerald-600 text-emerald-600 px-6 py-3 rounded-lg hover:bg-emerald-50">
              Learn More
            </a>
          </div>
        </div>
      </main>
    </Layout>
  )
}
export default AICustomerSuccessPlatform
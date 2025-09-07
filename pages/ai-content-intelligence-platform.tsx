import React from 'react'
import Head from 'next/head'
import Layout from '../components/layout/Layout'
const AIContentIntelligencePlatform: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>AI Content Intelligence Platform - Zion Tech Group</title>
        <meta name="description" content="Intelligent content creation and optimization platform powered by AI" />
      </Head>
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">AI Content Intelligence Platform</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Create, optimize, and manage content intelligently with our AI-powered content platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Content Creation</h3>
            <p className="text-gray-600 mb-4">
              Generate high-quality content across multiple formats and channels automatically.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Blog posts and articles</li>
              <li>• Social media content</li>
              <li>• Email campaigns</li>
              <li>• Video scripts</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Content Optimization</h3>
            <p className="text-gray-600 mb-4">
              Optimize content for SEO, engagement, and performance with AI insights.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• SEO optimization</li>
              <li>• Engagement analysis</li>
              <li>• A/B testing</li>
              <li>• Performance tracking</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Content Management</h3>
            <p className="text-gray-600 mb-4">
              Organize, schedule, and manage content across all your channels.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Content calendar</li>
              <li>• Multi-channel publishing</li>
              <li>• Version control</li>
              <li>• Collaboration tools</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Transform Your Content Strategy</h2>
          <p className="text-lg text-gray-700 mb-6">
            Leverage AI to create, optimize, and manage content that drives results.
          </p>
          <div className="flex justify-center gap-4">
            <a href="/contact" className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
              Get Started
            </a>
            <a href="/about" className="border border-green-600 text-green-600 px-6 py-3 rounded-lg hover:bg-green-50">
              Learn More
            </a>
          </div>
        </div>
      </main>
    </Layout>
  )
}
export default AIContentIntelligencePlatform
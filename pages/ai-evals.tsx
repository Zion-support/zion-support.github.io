import React from 'react'
import Head from 'next/head'
import Layout from '../components/layout/Layout'
const AIEvals: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>AI Evaluations Platform - Zion Tech Group</title>
        <meta name="description" content="Benchmark models and prompts with real metrics and safety checks" />
      </Head>
      <main className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
            AI Evaluations
          </h1>
          <p className="text-xl text-gray-300">
            Benchmark models and prompts with real metrics and safety checks. Ship reliable AI faster.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <a href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl">
              Get a Demo
            </a>
            <a href="/resources" className="border-gray-600 text-gray-200 border px-6 py-3 rounded-xl">
              Read Docs
            </a>
          </div>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-black/20 border border-gray-700/50 rounded-2xl p-6">
            <div className="text-gray-400 text-sm mb-2">Testing</div>
            <div className="text-white text-xl font-semibold flex items-center gap-2 mb-2">
              <span className="w-5 h-5 text-cyan-400">🧪</span>
              Comprehensive Tests
            </div>
            <p className="text-gray-400 mt-2 text-sm">
              Run comprehensive tests on your AI models with automated evaluation frameworks.
            </p>
          </div>

          <div className="bg-black/20 border border-gray-700/50 rounded-2xl p-6">
            <div className="text-gray-400 text-sm mb-2">Metrics</div>
            <div className="text-white text-xl font-semibold flex items-center gap-2 mb-2">
              <span className="w-5 h-5 text-purple-400">📊</span>
              Real Metrics
            </div>
            <p className="text-gray-400 mt-2 text-sm">
              Get accurate performance metrics and safety scores for your AI models.
            </p>
          </div>

          <div className="bg-black/20 border border-gray-700/50 rounded-2xl p-6">
            <div className="text-gray-400 text-sm mb-2">Safety</div>
            <div className="text-white text-xl font-semibold flex items-center gap-2 mb-2">
              <span className="w-5 h-5 text-pink-400">🛡️</span>
              Safety Checks
            </div>
            <p className="text-gray-400 mt-2 text-sm">
              Ensure your AI models are safe and reliable with comprehensive safety evaluations.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  )
}
export default AIEvals
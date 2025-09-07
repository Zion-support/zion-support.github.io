import React from 'react'
import Head from 'next/head'
import Layout from '../components/layout/Layout'
const AgenticRAG: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Agentic RAG Platform | Zion Tech Group</title>
        <meta name="description" content="Advanced Retrieval-Augmented Generation platform for intelligent document processing and question answering" />
      </Head>
      <main className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
            Agentic RAG
          </h1>
          <p className="text-xl text-gray-300">
            Ingest everything. Retrieve precisely. Answer confidently with sources and chain-of-thought.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <a href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl">
              Request a Demo
            </a>
            <a href="/resources" className="border-gray-600 text-gray-200 border px-6 py-3 rounded-xl">
              Explore Docs
            </a>
          </div>
        </div>

        {/* Features Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-black/20 border border-gray-700/50 rounded-2xl p-6">
            <div className="text-gray-400 text-sm mb-2">Ingestion</div>
            <div className="text-white text-xl font-semibold flex items-center gap-2 mb-2">
              <span className="w-5 h-5 text-cyan-400">🔗</span>
              Connectors
            </div>
            <p className="text-gray-400 mt-2 text-sm">
              Web, PDFs, DOCX, Markdown, GitHub, and cloud storage with auto-chunking.
            </p>
          </div>

          <div className="bg-black/20 border border-gray-700/50 rounded-2xl p-6">
            <div className="text-gray-400 text-sm mb-2">Indexing</div>
            <div className="text-white text-xl font-semibold flex items-center gap-2 mb-2">
              <span className="w-5 h-5 text-purple-400">🗄️</span>
              Hybrid + Rerank
            </div>
            <p className="text-gray-400 mt-2 text-sm">
              Embedding + keyword + reranker for fidelity. Namespace partitioning with filters.
            </p>
          </div>

          <div className="bg-black/20 border border-gray-700/50 rounded-2xl p-6">
            <div className="text-gray-400 text-sm mb-2">Evaluation</div>
            <div className="text-white text-xl font-semibold flex items-center gap-2 mb-2">
              <span className="w-5 h-5 text-rose-400">📊</span>
              Accuracy & Sources
            </div>
            <p className="text-gray-400 mt-2 text-sm">
              Evals with reference answers, source grounding checks, and hallucination detection.
            </p>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our RAG Platform?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Intelligent Document Processing</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Multi-format document ingestion</li>
                <li>• Automatic content chunking and indexing</li>
                <li>• Smart metadata extraction</li>
                <li>• Real-time content updates</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Advanced Retrieval</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Hybrid search (semantic + keyword)</li>
                <li>• Context-aware reranking</li>
                <li>• Multi-vector similarity search</li>
                <li>• Filtered and scoped queries</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Confident Generation</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Source-attributed responses</li>
                <li>• Chain-of-thought reasoning</li>
                <li>• Confidence scoring</li>
                <li>• Hallucination prevention</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Enterprise Ready</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Scalable architecture</li>
                <li>• Security and compliance</li>
                <li>• API and SDK support</li>
                <li>• Custom model fine-tuning</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Use Cases</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">Customer Support</h3>
              <p className="text-gray-300 text-sm">
                Provide instant, accurate answers to customer queries using your knowledge base.
              </p>
            </div>
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">Research & Analysis</h3>
              <p className="text-gray-300 text-sm">
                Analyze large document collections and extract insights with source citations.
              </p>
            </div>
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">Legal & Compliance</h3>
              <p className="text-gray-300 text-sm">
                Search through legal documents and regulations with precise source attribution.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl">
            Talk to Engineering
          </a>
        </div>
      </main>
    </Layout>
  )
}
export default AgenticRAG
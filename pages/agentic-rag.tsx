import React from 'react';
import Head from 'next/head';
import { Database, Link, Gauge, Check, Phone, Mail, MapPin, Rocket } from 'lucide-react';

export default function AgenticRAG() {
  return (
    <div className="min-h-screen bg-black">
      <Head>
        <title>Agentic RAG - Zion Tech Group</title>
        <meta name="description" content="Advanced Retrieval-Augmented Generation system with autonomous agents for intelligent document processing and knowledge management." />
      </Head>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Agentic RAG
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                Intelligent Knowledge Systems
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Advanced Retrieval-Augmented Generation with autonomous agents for intelligent 
              document processing, knowledge management, and contextual understanding.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors">
                <Rocket className="mr-2 h-5 w-5" />
                Start Building
              </button>
              <button className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition-colors">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced RAG Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Intelligent document processing and knowledge retrieval systems
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <Database className="h-12 w-12 text-cyan-400 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Vector Database</h3>
                <p className="text-gray-300 mb-6">
                  High-performance vector storage and retrieval for semantic search and similarity matching.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-2" />
                    Semantic search
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-2" />
                    Real-time indexing
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-2" />
                    Scalable architecture
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <Link className="h-12 w-12 text-blue-400 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Knowledge Graphs</h3>
                <p className="text-gray-300 mb-6">
                  Build interconnected knowledge networks for complex relationship understanding.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-2" />
                    Entity relationships
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-2" />
                    Contextual reasoning
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-2" />
                    Multi-hop queries
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <Gauge className="h-12 w-12 text-purple-400 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Autonomous Agents</h3>
                <p className="text-gray-300 mb-6">
                  Self-directed agents that can process, analyze, and respond to complex queries.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-2" />
                    Self-directed processing
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-2" />
                    Multi-step reasoning
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-2" />
                    Adaptive learning
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build Intelligent Systems?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Contact us to discuss your RAG implementation needs and get started with 
              intelligent knowledge management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors"
              >
                <Phone className="mr-2 h-5 w-5" />
                +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition-colors"
              >
                <Mail className="mr-2 h-5 w-5" />
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="mt-8 text-gray-400">
              <p className="flex items-center justify-center">
                <MapPin className="h-4 w-4 mr-2" />
                364 E Main St STE 1008, Middletown DE 19709
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
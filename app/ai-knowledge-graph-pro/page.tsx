import React from 'react';
import { Helmet } from 'react-helmet-async';

const AIKnowledgeGraphProPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Knowledge Graph Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered knowledge graph platform that organizes, connects, and analyzes information to provide intelligent insights and recommendations." />
        <meta name="keywords" content="AI knowledge graph, knowledge management, information architecture, semantic analysis, intelligent search" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-knowledge-graph-pro" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-violet-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-white mb-6">
                AI Knowledge Graph <span className="text-violet-400">Pro</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Advanced AI-powered knowledge graph platform that organizes, connects, and analyzes information to provide intelligent insights and recommendations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Intelligent Organization</h3>
                <p className="text-gray-300 mb-4">
                  Automatically organize and structure information into meaningful relationships and hierarchies.
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Entity recognition</li>
                  <li>• Relationship mapping</li>
                  <li>• Semantic analysis</li>
                  <li>• Knowledge extraction</li>
                </ul>
              </div>

              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Smart Search & Discovery</h3>
                <p className="text-gray-300 mb-4">
                  Find relevant information through intelligent search and discovery based on context and relationships.
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Semantic search</li>
                  <li>• Context-aware recommendations</li>
                  <li>• Relationship traversal</li>
                  <li>• Intelligent filtering</li>
                </ul>
              </div>
            </div>

            <div className="glass-card p-8 mb-12">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Advanced Capabilities</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-violet-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🕸️</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Graph Visualization</h4>
                  <p className="text-gray-300">Interactive knowledge graph visualization</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-violet-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🧠</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">AI Insights</h4>
                  <p className="text-gray-300">AI-generated insights and patterns</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-violet-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔗</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Relationship Analysis</h4>
                  <p className="text-gray-300">Deep relationship and pattern analysis</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-semibold rounded-lg hover:from-violet-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started with AI Knowledge Graph Pro
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIKnowledgeGraphProPage;
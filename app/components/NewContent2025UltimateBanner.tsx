import React from 'react';
import Link from 'next/link';

const NewContent2025UltimateBanner = () => {
  return (
    <section className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-yellow-400 text-black rounded-full px-6 py-2 mb-6 font-bold text-sm">
            🚀 NEW 2025 CONTENT
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Revolutionary AI Content for 2025
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto">
            Discover our latest comprehensive guides covering Generative AI, Quantum Computing, 
            and Autonomous Systems - the technologies shaping the future of enterprise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-2xl font-bold mb-4">Generative AI Enterprise Guide</h3>
            <p className="text-gray-200 mb-6">
              Complete guide to implementing generative AI in enterprise environments. 
              Learn strategies, tools, and best practices for successful AI transformation.
            </p>
            <Link 
              href="/blog/ai-2025-generative-ai-enterprise-transformation-ultimate-guide"
              className="inline-flex items-center bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
            >
              Read Guide →
            </Link>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20">
            <div className="text-4xl mb-4">⚛️</div>
            <h3 className="text-2xl font-bold mb-4">Quantum Computing Revolution</h3>
            <p className="text-gray-200 mb-6">
              Comprehensive guide to quantum computing's impact on business in 2025. 
              Learn how quantum technologies are revolutionizing industries.
            </p>
            <Link 
              href="/blog/ai-2025-quantum-computing-business-revolution-complete-guide"
              className="inline-flex items-center bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
            >
              Explore Quantum →
            </Link>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-2xl font-bold mb-4">Autonomous Systems Master Guide</h3>
            <p className="text-gray-200 mb-6">
              Master guide to implementing autonomous AI systems in enterprise environments. 
              Learn strategies, technologies, and best practices for successful deployment.
            </p>
            <Link 
              href="/blog/ai-2025-autonomous-systems-enterprise-implementation-master-guide"
              className="inline-flex items-center bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
            >
              Master Guide →
            </Link>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center space-x-8 text-sm text-gray-300">
            <div className="flex items-center">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              Latest 2025 Content
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
              Expert Insights
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
              Implementation Ready
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContent2025UltimateBanner;
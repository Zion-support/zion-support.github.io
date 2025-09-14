import React from 'react';
import Link from 'next/link';

const NewContent2025UltimateBanner = () => {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-3 mb-6">
            <span className="text-lg font-bold">🚀 NEW 2025 CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ultimate AI 2025 Guides
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover the most comprehensive guides to AI transformation, quantum computing, 
            and autonomous systems. Master the technologies that will define 2025.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Generative AI Guide */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-2xl font-bold mb-4">Generative AI Enterprise Transformation</h3>
            <p className="text-gray-200 mb-6 leading-relaxed">
              Complete guide to implementing generative AI in enterprise environments. 
              Learn strategies, tools, and best practices for successful AI transformation.
            </p>
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm bg-purple-600 px-3 py-1 rounded-full">15 min read</span>
              <span className="text-sm text-green-300">⭐ Featured</span>
            </div>
            <Link 
              href="/blog/ai-2025-generative-ai-enterprise-transformation-ultimate-guide"
              className="inline-flex items-center text-white bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Read Guide →
            </Link>
          </div>

          {/* Quantum Computing Guide */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
            <div className="text-4xl mb-4">⚛️</div>
            <h3 className="text-2xl font-bold mb-4">Quantum Computing Business Revolution</h3>
            <p className="text-gray-200 mb-6 leading-relaxed">
              Discover how quantum computing is revolutionizing business operations. 
              Complete guide to quantum AI, optimization, and enterprise applications.
            </p>
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm bg-blue-600 px-3 py-1 rounded-full">18 min read</span>
              <span className="text-sm text-green-300">⭐ Featured</span>
            </div>
            <Link 
              href="/blog/ai-2025-quantum-computing-business-revolution-complete-guide"
              className="inline-flex items-center text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Read Guide →
            </Link>
          </div>

          {/* Autonomous Systems Guide */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-2xl font-bold mb-4">Autonomous Systems Implementation</h3>
            <p className="text-gray-200 mb-6 leading-relaxed">
              Master guide to implementing autonomous AI systems in enterprise environments. 
              Learn strategies, technologies, and best practices for 2025.
            </p>
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm bg-indigo-600 px-3 py-1 rounded-full">20 min read</span>
              <span className="text-sm text-green-300">⭐ Featured</span>
            </div>
            <Link 
              href="/blog/ai-2025-autonomous-systems-enterprise-implementation-master-guide"
              className="inline-flex items-center text-white bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Read Guide →
            </Link>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-300 mb-2">340%</div>
            <div className="text-gray-200">Average ROI Increase</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-300 mb-2">67%</div>
            <div className="text-gray-200">Cost Reduction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-300 mb-2">89%</div>
            <div className="text-gray-200">Efficiency Improvement</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-300 mb-2">24/7</div>
            <div className="text-gray-200">Autonomous Operation</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="bg-white text-purple-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Explore All Content
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-900 transition-colors"
            >
              Get Implementation Help
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContent2025UltimateBanner;
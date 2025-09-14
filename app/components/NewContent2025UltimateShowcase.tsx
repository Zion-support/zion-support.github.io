import React from 'react';
import Link from 'next/link';

const NewContent2025UltimateShowcase = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 NEW 2025 CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Revolutionary AI Content for 2025
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            Discover the latest breakthroughs in AI, quantum computing, and autonomous business operations. 
            Transform your organization with cutting-edge insights and implementation strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Generative AI Enterprise Revolution */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-bold mb-4">Generative AI Enterprise Revolution</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Master generative AI implementation in 2025. Complete guide covering enterprise transformation, 
              ROI strategies, and real-world success stories with 340% efficiency improvements.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-yellow-300 font-semibold">12 min read</span>
              <Link 
                href="/blog/ai-2025-generative-ai-enterprise-revolution"
                className="bg-white text-purple-900 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Read More →
              </Link>
            </div>
          </div>

          {/* Autonomous Business Operations */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-4">Autonomous Business Operations</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Complete implementation guide for autonomous business operations. Achieve 90%+ automation 
              of routine operations and 400%+ productivity improvements with AI-powered systems.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-yellow-300 font-semibold">15 min read</span>
              <Link 
                href="/blog/ai-2025-autonomous-business-operations-complete-guide"
                className="bg-white text-purple-900 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Read More →
              </Link>
            </div>
          </div>

          {/* Quantum Computing Business Transformation */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="text-4xl mb-4">⚛️</div>
            <h3 className="text-xl font-bold mb-4">Quantum Computing Business Transformation</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Discover how quantum computing is revolutionizing business operations. Achieve 10,000x 
              performance improvements and 500%+ ROI with quantum AI solutions.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-yellow-300 font-semibold">18 min read</span>
              <Link 
                href="/blog/ai-2025-quantum-computing-business-transformation"
                className="bg-white text-purple-900 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Read More →
              </Link>
            </div>
          </div>
        </div>

        {/* Implementation Roadmap */}
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex-1 mb-6 md:mb-0">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-2xl font-bold mb-4">AI 2025 Implementation Roadmap</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Complete step-by-step roadmap for implementing AI solutions in 2025. From strategy to execution, 
                this comprehensive guide covers everything you need to know for successful AI transformation.
              </p>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-yellow-300 font-semibold">25 min read</span>
                <span className="text-sm text-green-300 font-semibold">✓ Free Resource</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/resources/ai-2025-implementation-roadmap-ultimate-guide"
                className="bg-white text-purple-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                Download Guide →
              </Link>
              <Link 
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors text-center"
              >
                Get Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-300 mb-2">340%</div>
            <div className="text-gray-300">Average Efficiency Improvement</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-300 mb-2">500%</div>
            <div className="text-gray-300">Average ROI Increase</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-300 mb-2">90%</div>
            <div className="text-gray-300">Process Automation</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-300 mb-2">10,000x</div>
            <div className="text-gray-300">Performance Improvement</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContent2025UltimateShowcase;
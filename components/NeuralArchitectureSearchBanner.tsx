import React from 'react';
import Link from 'next/link';

export default function NeuralArchitectureSearchBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          <div className="md:flex">
            {/* Content Section */}
            <div className="md:w-2/3 p-8 md:p-12">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
                  🔬 NEW BREAKTHROUGH
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                  AI RESEARCH
                </span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Neural Architecture Search (NAS) 2026: 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                  {' '}Automated AI Model Design Revolution
                </span>
              </h2>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Discover how Neural Architecture Search is revolutionizing AI model design with 
                <strong className="text-purple-600"> 90% faster development cycles</strong>, 
                <strong className="text-blue-600"> 40% better performance</strong>, and automated optimization 
                that's transforming enterprise AI development.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-1">90%</div>
                  <div className="text-sm text-gray-600">Faster Development</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">40%</div>
                  <div className="text-sm text-gray-600">Better Performance</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-600 mb-1">300%</div>
                  <div className="text-sm text-gray-600">ROI Potential</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/blog/ai-neural-architecture-search-2026"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl text-center"
                >
                  Read Full Article →
                </Link>
                <Link
                  href="/case-studies/ai-neural-architecture-search-mega-success-2026"
                  className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-600 hover:text-white transition-colors text-center"
                >
                  View Success Story
                </Link>
              </div>
            </div>
            
            {/* Visual Section */}
            <div className="md:w-1/3 bg-gradient-to-br from-purple-100 to-blue-100 p-8 md:p-12 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg">
                  <span className="text-4xl text-white">🧠</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Automated AI Design</h3>
                <p className="text-gray-600 text-sm mb-6">
                  Eliminate manual architecture design with intelligent search algorithms that discover optimal neural networks automatically.
                </p>
                
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    <span>DARTS & Progressive NAS</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>Multi-Objective Optimization</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                    <span>Enterprise MLOps Integration</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional Content Preview */}
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <Link href="/blog/ai-neural-architecture-search-2026" className="group">
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-semibold">
                  Featured Article
                </span>
                <span className="text-sm text-gray-500">25 min read</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                Neural Architecture Search 2026: Complete Implementation Guide
              </h4>
              <p className="text-gray-600 text-sm">
                Master NAS techniques with DARTS, progressive search, and multi-objective optimization for enterprise AI development.
              </p>
            </div>
          </Link>
          
          <Link href="/case-studies/ai-neural-architecture-search-mega-success-2026" className="group">
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                  Success Story
                </span>
                <span className="text-sm text-gray-500">Fortune 500</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                TechVision Corp: 90% Faster Development with NAS
              </h4>
              <p className="text-gray-600 text-sm">
                See how a Fortune 500 company achieved $2.5M annual savings and 40% performance improvement with Neural Architecture Search.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
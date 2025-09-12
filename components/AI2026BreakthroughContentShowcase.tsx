import React from 'react';
import Link from 'next/link';
import Card from './ui/Card';

export default function AI2026BreakthroughContentShowcase() {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ✨ AI 2026 Breakthrough Content
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Revolutionary AI technologies, proven case studies, and comprehensive implementation guides 
            to help you achieve extraordinary results in 2026.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* AI 2026 Predictions */}
          <Link href="/blog/ai-2026-breakthrough-predictions" className="group">
            <Card className="p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 h-full">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-3">🔮</div>
                <div>
                  <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded-full">BREAKTHROUGH</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                AI 2026 Breakthrough Predictions
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Discover the revolutionary AI breakthroughs coming in 2026: quantum AI, neural interfaces, 
                autonomous systems, and enterprise transformation strategies.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <span>15 min read</span>
                <span className="mx-2">•</span>
                <span>Jan 17, 2026</span>
              </div>
            </Card>
          </Link>
          
          {/* Enterprise Transformation Case Study */}
          <Link href="/case-studies/ai-2026-global-enterprise-transformation-breakthrough" className="group">
            <Card className="p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 h-full">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-3">🏢</div>
                <div>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">5000% ROI</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                Global Enterprise Transformation
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                How a Fortune 500 manufacturing company achieved 5000% ROI through revolutionary AI 2026 
                technologies and strategic implementation.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <span>12 min read</span>
                <span className="mx-2">•</span>
                <span>Jan 17, 2026</span>
              </div>
            </Card>
          </Link>
          
          {/* Implementation Toolkit */}
          <Link href="/resources/ai-2026-ultimate-implementation-toolkit" className="group">
            <Card className="p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 h-full">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-3">🛠️</div>
                <div>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">TOOLKIT</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                Ultimate Implementation Toolkit
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Complete guide to implementing AI 2026 breakthrough technologies with step-by-step guides, 
                templates, checklists, and proven strategies.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <span>25 min read</span>
                <span className="mx-2">•</span>
                <span>Jan 17, 2026</span>
              </div>
            </Card>
          </Link>
        </div>
        
        {/* Additional Content Grid */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">More Breakthrough Content</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/quantum-computing-solutions-breakthrough-2026" className="group">
              <Card className="p-4 hover:shadow-lg transition-shadow">
                <div className="text-2xl mb-2">⚛️</div>
                <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600">Quantum AI Solutions</h4>
                <p className="text-xs text-gray-600">10,000x speed improvements</p>
              </Card>
            </Link>
            
            <Link href="/ai-2026-neural-interface-revolution" className="group">
              <Card className="p-4 hover:shadow-lg transition-shadow">
                <div className="text-2xl mb-2">🧠</div>
                <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600">Neural Interfaces</h4>
                <p className="text-xs text-gray-600">Direct thought control</p>
              </Card>
            </Link>
            
            <Link href="/ai-2026-autonomous-systems-breakthrough" className="group">
              <Card className="p-4 hover:shadow-lg transition-shadow">
                <div className="text-2xl mb-2">🤖</div>
                <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600">Autonomous Systems</h4>
                <p className="text-xs text-gray-600">Human-level reasoning</p>
              </Card>
            </Link>
            
            <Link href="/tools/ai-roi-calculator-2026" className="group">
              <Card className="p-4 hover:shadow-lg transition-shadow">
                <div className="text-2xl mb-2">💰</div>
                <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600">ROI Calculator</h4>
                <p className="text-xs text-gray-600">Calculate your potential returns</p>
              </Card>
            </Link>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Link
            href="/content-showcase"
            className="inline-flex items-center bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors text-lg"
          >
            🎯 View All Content
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
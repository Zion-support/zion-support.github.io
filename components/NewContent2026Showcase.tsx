import React from 'react';
import Link from 'next/link';

export default function NewContent2026Showcase() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
              🚀 New Content 2026
            </span>
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
              ✨ Revolutionary
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Latest AI Breakthroughs & Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the most revolutionary AI innovations and real-world transformation success stories 
            that are reshaping industries in 2026.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Featured Blog Post */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200">
            <div className="relative">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-48 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">🧠</div>
                  <h3 className="text-2xl font-bold">Revolutionary AI Breakthroughs</h3>
                </div>
              </div>
              <div className="absolute top-4 left-4">
                <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold">
                  FEATURED
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                AI 2026 Revolutionary Breakthroughs: The Future is Here
              </h3>
              <p className="text-gray-600 mb-4">
                Explore the most groundbreaking AI innovations of 2026 that are fundamentally reshaping 
                industries, human capabilities, and the very fabric of our digital existence.
              </p>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-sm text-gray-500">25 min read</span>
                <span className="text-sm text-gray-500">•</span>
                <span className="text-sm text-gray-500">Published Jan 20, 2026</span>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-semibold">Quantum AI</span>
                <span className="bg-pink-100 text-pink-800 px-2 py-1 rounded text-xs font-semibold">Neural Interfaces</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-semibold">Consciousness</span>
              </div>
              <Link 
                href="/blog/ai-2026-revolutionary-breakthroughs"
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              >
                Read Full Article
                <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Enterprise Transformation Guide */}
          <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200">
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-48 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">🏢</div>
                  <h3 className="text-xl font-bold">Enterprise Guide</h3>
                </div>
              </div>
              <div className="absolute top-4 left-4">
                <span className="bg-green-400 text-green-900 px-3 py-1 rounded-full text-sm font-bold">
                  GUIDE
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                AI Enterprise Transformation 2026
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                Complete implementation guide for enterprise AI transformation with proven strategies and frameworks.
              </p>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-sm text-gray-500">20 min read</span>
                <span className="text-sm text-gray-500">•</span>
                <span className="text-sm text-gray-500">Jan 20, 2026</span>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-semibold">Strategy</span>
                <span className="bg-cyan-100 text-cyan-800 px-2 py-1 rounded text-xs font-semibold">Implementation</span>
              </div>
              <Link 
                href="/blog/ai-2026-enterprise-transformation"
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors text-sm"
              >
                Read Guide
                <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Success Stories Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Real-World Success Stories</h3>
            <p className="text-lg text-gray-600">
              See how leading companies achieved extraordinary results with AI transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Fortune 500 Case Study */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
              <div className="flex items-start gap-4">
                <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                  💰
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Fortune 500 AI Transformation Success
                  </h4>
                  <p className="text-gray-600 mb-4">
                    How a Fortune 500 manufacturing company achieved 500% ROI and $2.3B in cost savings 
                    through comprehensive AI transformation in just 18 months.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">500%</div>
                      <div className="text-sm text-green-700">ROI</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-emerald-600">$2.3B</div>
                      <div className="text-sm text-emerald-700">Savings</div>
                    </div>
                  </div>
                  <Link 
                    href="/case-studies/ai-transformation-mega-success-2026"
                    className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors"
                  >
                    Read Case Study
                    <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* More Success Stories */}
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4 border border-purple-200">
                <h5 className="font-semibold text-gray-900 mb-2">AI Autonomous Enterprise Success</h5>
                <p className="text-sm text-gray-600 mb-2">85% process automation achieved</p>
                <Link href="/case-studies/ai-autonomous-enterprise-success-2026" className="text-purple-600 text-sm font-semibold hover:text-purple-700">
                  Read More →
                </Link>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-4 border border-blue-200">
                <h5 className="font-semibold text-gray-900 mb-2">AI Cognitive Enterprise Success</h5>
                <p className="text-sm text-gray-600 mb-2">300% performance improvement</p>
                <Link href="/case-studies/ai-cognitive-enterprise-success-2026" className="text-blue-600 text-sm font-semibold hover:text-blue-700">
                  Read More →
                </Link>
              </div>
              <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-4 border border-orange-200">
                <h5 className="font-semibold text-gray-900 mb-2">AI Manufacturing Excellence</h5>
                <p className="text-sm text-gray-600 mb-2">60% reduction in downtime</p>
                <Link href="/case-studies/ai-manufacturing-excellence-2026" className="text-orange-600 text-sm font-semibold hover:text-orange-700">
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business with AI?</h3>
          <p className="text-xl mb-8 opacity-90">
            Join the AI revolution and achieve extraordinary results like our success stories. 
            Let our experts guide your transformation journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Get AI Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
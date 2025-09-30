import React from 'react';
import Link from 'next/link';

export default function LatestContent2026ShowcaseBanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-bold">
              🎯 LATEST 2026 CONTENT
            </span>
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-bold">
              FRESH INSIGHTS
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Latest AI Insights & 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
              {' '}Success Stories
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay ahead with our latest content, breakthrough discoveries, and real-world 
            success stories from companies transforming their operations with AI.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Featured Blog Post */}
          <Link href="/blog/ai-2026-revolutionary-breakthroughs" className="group">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 h-full">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-semibold">
                  Featured Article
                </span>
                <span className="text-sm text-gray-500">15 min read</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                AI 2026 Revolutionary Breakthroughs: The Future is Here
              </h3>
              <p className="text-gray-600 mb-4">
                Discover the revolutionary AI breakthroughs of 2026 that are transforming industries. 
                From quantum AI to neural superintelligence, explore cutting-edge innovations.
              </p>
              <div className="flex items-center text-blue-600 font-semibold">
                Read Article →
              </div>
            </div>
          </Link>

          {/* Case Study */}
          <Link href="/case-studies/fortune-500-ai-transformation-success" className="group">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 h-full">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">
                  Success Story
                </span>
                <span className="text-sm text-gray-500">Fortune 500</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                Fortune 500 AI Success: 300% ROI in 8 Months
              </h3>
              <p className="text-gray-600 mb-4">
                See how a Fortune 500 manufacturing company achieved 300% ROI and $12M annual 
                savings through comprehensive AI transformation.
              </p>
              <div className="flex items-center text-blue-600 font-semibold">
                View Case Study →
              </div>
            </div>
          </Link>

          {/* New Service */}
          <Link href="/services/ai-autonomous-enterprise-systems" className="group">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 h-full">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">
                  New Service
                </span>
                <span className="text-sm text-gray-500">90% Efficiency</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                AI Autonomous Enterprise Systems
              </h3>
              <p className="text-gray-600 mb-4">
                Transform your enterprise with fully autonomous AI systems that run themselves, 
                make decisions, and adapt to changing conditions.
              </p>
              <div className="flex items-center text-blue-600 font-semibold">
                Learn More →
              </div>
            </div>
          </Link>
        </div>

        {/* Additional Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Edge AI Computing</h4>
            <p className="text-sm text-gray-600 mb-3">Sub-10ms response times globally</p>
            <div className="text-2xl font-bold text-blue-600">99.99%</div>
            <div className="text-xs text-gray-500">Uptime</div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🧠</span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Neural Interfaces</h4>
            <p className="text-sm text-gray-600 mb-3">Direct mind-AI communication</p>
            <div className="text-2xl font-bold text-green-600">2027</div>
            <div className="text-xs text-gray-500">Coming Soon</div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔄</span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Multimodal AI</h4>
            <p className="text-sm text-gray-600 mb-3">Seamless text, voice, video processing</p>
            <div className="text-2xl font-bold text-purple-600">80%</div>
            <div className="text-xs text-gray-500">Faster Response</div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🛡️</span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">AI Security</h4>
            <p className="text-sm text-gray-600 mb-3">99.7% threat detection accuracy</p>
            <div className="text-2xl font-bold text-orange-600">Zero</div>
            <div className="text-xs text-gray-500">Breaches</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-2xl p-8">
            <h3 className="text-3xl font-bold mb-4">Stay Updated with Latest AI Insights</h3>
            <p className="text-xl mb-6 opacity-90">
              Get weekly updates on AI breakthroughs, success stories, and industry insights
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm mt-4 opacity-75">
              Join 10,000+ professionals. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
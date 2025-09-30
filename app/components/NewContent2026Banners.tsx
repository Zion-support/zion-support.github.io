import React from 'react';
import Link from 'next/link';

export function RevolutionaryContent2026Banner() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <span className="text-2xl">🚀</span>
            <span className="font-semibold">Revolutionary Content 2026</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Discover the Future of AI with Our Latest Content
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Explore cutting-edge AI trends, autonomous systems, and success stories that are transforming 
            enterprise operations in 2026. Get insights that drive 300% ROI.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Link href="/blog/ai-autonomous-systems-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🤖</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold group-hover:text-cyan-300 transition-colors">
                    AI Autonomous Systems
                  </h3>
                  <p className="text-sm opacity-80">Self-managing infrastructure</p>
                </div>
              </div>
              <p className="text-sm opacity-90 mb-4">
                Discover how AI autonomous systems are revolutionizing enterprise infrastructure, 
                achieving 80% cost reduction and 99.9% uptime.
              </p>
              <div className="flex items-center text-cyan-300 font-semibold text-sm">
                Read Article →
              </div>
            </div>
          </Link>
          
          <Link href="/blog/ai-trends-2026-predictions" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🔮</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold group-hover:text-purple-300 transition-colors">
                    AI Trends 2026
                  </h3>
                  <p className="text-sm opacity-80">Top 10 predictions</p>
                </div>
              </div>
              <p className="text-sm opacity-90 mb-4">
                Explore the top 10 AI trends shaping 2026, from autonomous agents to edge computing 
                and quantum-enhanced AI.
              </p>
              <div className="flex items-center text-purple-300 font-semibold text-sm">
                Read Predictions →
              </div>
            </div>
          </Link>
          
          <Link href="/case-studies/ai-supply-chain-optimization-2025" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📈</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold group-hover:text-green-300 transition-colors">
                    Supply Chain Success
                  </h3>
                  <p className="text-sm opacity-80">60% cost reduction</p>
                </div>
              </div>
              <p className="text-sm opacity-90 mb-4">
                See how a global manufacturer achieved 60% cost reduction and 90% efficiency 
                improvement, saving $12M annually.
              </p>
              <div className="flex items-center text-green-300 font-semibold text-sm">
                View Case Study →
              </div>
            </div>
          </Link>
        </div>
        
        <div className="text-center">
          <Link
            href="/blog"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Explore All Content
          </Link>
        </div>
      </div>
    </section>
  );
}

export function LatestContent2026ShowcaseBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-800 rounded-full px-4 py-2 mb-6">
            <span className="text-2xl">✨</span>
            <span className="font-semibold">Latest Content Showcase</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Stay Ahead with Cutting-Edge AI Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get exclusive access to the latest AI innovations, success stories, and implementation guides 
            that are transforming businesses worldwide.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-xl">🎯</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">AI Predictions</h3>
                <p className="text-sm text-gray-600">2026 trends</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Top 10 AI trends that will reshape enterprise operations in 2026.
            </p>
            <Link href="/blog/ai-trends-2026-predictions" className="text-blue-600 font-semibold text-sm hover:text-blue-700">
              Read More →
            </Link>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-xl">🤖</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Autonomous Systems</h3>
                <p className="text-sm text-gray-600">Self-managing AI</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              How AI autonomous systems achieve 80% cost reduction and 99.9% uptime.
            </p>
            <Link href="/blog/ai-autonomous-systems-2026" className="text-green-600 font-semibold text-sm hover:text-green-700">
              Read More →
            </Link>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-xl">📊</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Success Stories</h3>
                <p className="text-sm text-gray-600">Real results</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              See how companies achieve 60% cost reduction with AI supply chain optimization.
            </p>
            <Link href="/case-studies/ai-supply-chain-optimization-2025" className="text-purple-600 font-semibold text-sm hover:text-purple-700">
              Read More →
            </Link>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <span className="text-xl">⚡</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Edge Computing</h3>
                <p className="text-sm text-gray-600">Real-time AI</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Achieve sub-50ms response times with AI processing at the edge.
            </p>
            <Link href="/blog/ai-edge-computing-2025" className="text-orange-600 font-semibold text-sm hover:text-orange-700">
              Read More →
            </Link>
          </div>
        </div>
        
        <div className="text-center">
          <div className="inline-flex gap-4">
            <Link
              href="/blog"
              className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition-colors shadow-lg"
            >
              View All Articles
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-600 hover:text-white transition-colors"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function InteractiveContentShowcase2026() {
  return (
    <section className="py-16 bg-gradient-to-r from-cyan-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Interactive AI Content Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Engage with our interactive content to discover how AI can transform your business. 
            Calculate your potential savings and explore real-world implementations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">AI ROI Calculator</h3>
            <p className="text-gray-600 mb-6">
              Calculate your potential return on investment with AI implementation. 
              See how much you could save with autonomous systems and intelligent automation.
            </p>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Current Annual IT Budget</label>
                <input 
                  type="number" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Enter amount in USD"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Number of Employees</label>
                <input 
                  type="number" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Enter number of employees"
                />
              </div>
              <button className="w-full bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors">
                Calculate My AI ROI
              </button>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Content Recommendations</h3>
            <p className="text-gray-600 mb-6">
              Get personalized content recommendations based on your industry and interests. 
              Discover the most relevant AI insights for your business.
            </p>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
                  <option>Select your industry</option>
                  <option>Manufacturing</option>
                  <option>Healthcare</option>
                  <option>Finance</option>
                  <option>Retail</option>
                  <option>Technology</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">AI Interest</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
                  <option>Select your interest</option>
                  <option>Automation</option>
                  <option>Analytics</option>
                  <option>Customer Service</option>
                  <option>Supply Chain</option>
                  <option>Cybersecurity</option>
                  <option>General AI</option>
                </select>
              </div>
              <button className="w-full bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors">
                Get My Recommendations
              </button>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-gray-600 mb-6">
            Ready to explore more interactive content and discover how AI can transform your business?
          </p>
          <Link
            href="/services"
            className="inline-block bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-700 transition-colors shadow-lg"
          >
            Explore AI Services
          </Link>
        </div>
      </div>
    </section>
  );
}
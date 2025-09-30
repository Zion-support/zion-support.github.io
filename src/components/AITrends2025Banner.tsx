import React from 'react';
import { Link } from 'react-router-dom';

export default function AITrends2025Banner() {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            AI Trends 2025
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            The Future of AI is Here
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            Discover the groundbreaking AI technologies and strategies that are reshaping industries 
            and creating unprecedented opportunities for business transformation in 2025.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Trend 1 */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span className="text-2xl">🤖</span>
            </div>
            <h3 className="text-lg font-bold mb-2 text-white">Autonomous Agents</h3>
            <p className="text-gray-300 text-sm mb-4">
              AI agents that can independently execute complex tasks and make decisions without human intervention.
            </p>
            <div className="text-xs text-blue-300 font-semibold">
              Trending: +450% adoption
            </div>
          </div>

          {/* Trend 2 */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-lg font-bold mb-2 text-white">Edge AI Computing</h3>
            <p className="text-gray-300 text-sm mb-4">
              Real-time AI processing at the edge with sub-50ms response times for instant decision making.
            </p>
            <div className="text-xs text-purple-300 font-semibold">
              Trending: +300% growth
            </div>
          </div>

          {/* Trend 3 */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span className="text-2xl">🛡️</span>
            </div>
            <h3 className="text-lg font-bold mb-2 text-white">AI Governance</h3>
            <p className="text-gray-300 text-sm mb-4">
              Comprehensive frameworks for responsible AI deployment with 70% risk reduction and compliance.
            </p>
            <div className="text-xs text-green-300 font-semibold">
              Trending: +250% adoption
            </div>
          </div>

          {/* Trend 4 */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span className="text-2xl">🧠</span>
            </div>
            <h3 className="text-lg font-bold mb-2 text-white">Quantum AI</h3>
            <p className="text-gray-300 text-sm mb-4">
              Quantum computing meets AI for solving previously impossible optimization and machine learning problems.
            </p>
            <div className="text-xs text-orange-300 font-semibold">
              Emerging: +200% research
            </div>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">Ready to Lead the AI Revolution?</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Don't get left behind. Our comprehensive AI transformation services help you implement 
                cutting-edge technologies that deliver measurable results and competitive advantage.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span className="text-gray-300 text-sm">300% average ROI on AI investments</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  <span className="text-gray-300 text-sm">85% faster time-to-market</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  <span className="text-gray-300 text-sm">90% reduction in operational costs</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6">
                <h4 className="text-lg font-bold mb-4">Get Your AI Readiness Assessment</h4>
                <p className="text-sm opacity-90 mb-6">
                  Discover your AI transformation potential with our comprehensive assessment tool.
                </p>
                <div className="space-y-3">
                  <Link
                    to="/services/ai-readiness-assessment"
                    className="block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Start Assessment
                  </Link>
                  <Link
                    to="/contact"
                    className="block border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                  >
                    Schedule Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/blog/ai-trends-2025"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore AI Trends 2025
            </Link>
            <Link
              to="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-slate-900 transition-colors"
            >
              View AI Services
            </Link>
          </div>
          <p className="text-sm opacity-75 mt-6">
            Join industry leaders who are already transforming their businesses with AI
          </p>
        </div>
      </div>
    </section>
  );
}
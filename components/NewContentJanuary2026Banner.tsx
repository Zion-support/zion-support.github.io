import React from 'react';
import { Link } from 'react-router-dom';

export default function NewContentJanuary2026Banner() {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/50 via-purple-600/50 to-pink-600/50"></div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block bg-white text-purple-600 px-8 py-3 rounded-full text-lg font-bold mb-6 animate-pulse shadow-lg">
            🚀 NEW CONTENT — JANUARY 30, 2026
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Revolutionary AI Breakthroughs: 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              Edge Computing, Finance Automation & More
            </span>
          </h2>
          <p className="text-xl text-white/90 max-w-4xl mx-auto mb-8">
            Discover our latest breakthrough content featuring cutting-edge AI technologies that are transforming 
            enterprise operations with unprecedented performance and cost savings.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Edge Computing Article */}
          <Link href="/blog/ai-2026-edge-computing-revolution" className="group">
            <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all transform hover:-translate-y-2 border-4 border-blue-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <span className="text-3xl">⚡</span>
                </div>
                <div>
                  <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-bold mb-2">
                    🚀 BREAKTHROUGH 2026
                  </span>
                  <h3 className="text-2xl font-bold group-hover:text-blue-600 transition-colors">
                    AI Edge Computing Revolution
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Sub-10ms response times, 99.99% uptime, and $50M+ cost savings with revolutionary edge computing AI.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600">&lt; 10ms</div>
                  <div className="text-xs text-gray-600">Response Time</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-cyan-600">99.99%</div>
                  <div className="text-xs text-gray-600">Uptime</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">$50M+</div>
                  <div className="text-xs text-gray-600">Savings</div>
                </div>
              </div>
              <div className="text-sm text-gray-500 mb-6">
                18 min read • Edge Computing & AI
              </div>
              <div className="block w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-center py-4 rounded-xl font-bold hover:from-blue-700 hover:to-cyan-700 transition-colors text-lg shadow-lg">
                Read Complete Guide →
              </div>
            </div>
          </Link>

          {/* Finance Automation Article */}
          <Link href="/blog/ai-2026-autonomous-finance-operations" className="group">
            <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all transform hover:-translate-y-2 border-4 border-emerald-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <span className="text-3xl">💰</span>
                </div>
                <div>
                  <span className="inline-block bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-bold mb-2">
                    💰 FINANCE REVOLUTION
                  </span>
                  <h3 className="text-2xl font-bold group-hover:text-emerald-600 transition-colors">
                    Autonomous Finance Operations
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                98% process automation, $100M+ annual savings, and 99.9% accuracy with AI autonomous finance operations.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-emerald-600">98%</div>
                  <div className="text-xs text-gray-600">Automation</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-cyan-600">$100M+</div>
                  <div className="text-xs text-gray-600">Savings</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">99.9%</div>
                  <div className="text-xs text-gray-600">Accuracy</div>
                </div>
              </div>
              <div className="text-sm text-gray-500 mb-6">
                22 min read • Finance & AI
              </div>
              <div className="block w-full bg-gradient-to-r from-emerald-600 to-cyan-600 text-white text-center py-4 rounded-xl font-bold hover:from-emerald-700 hover:to-cyan-700 transition-colors text-lg shadow-lg">
                Read Complete Guide →
              </div>
            </div>
          </Link>

          {/* Edge Computing Success Story */}
          <Link href="/case-studies/ai-edge-computing-success-2026" className="group">
            <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all transform hover:-translate-y-2 border-4 border-green-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center">
                  <span className="text-3xl">🏆</span>
                </div>
                <div>
                  <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-bold mb-2">
                    🏆 SUCCESS STORY
                  </span>
                  <h3 className="text-2xl font-bold group-hover:text-green-600 transition-colors">
                    Edge Computing Success
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Fortune 500 manufacturer achieves $50M savings, sub-10ms response times, and 99.99% uptime with edge AI.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-600">$50M</div>
                  <div className="text-xs text-gray-600">Savings</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-teal-600">&lt; 10ms</div>
                  <div className="text-xs text-gray-600">Response</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">450%</div>
                  <div className="text-xs text-gray-600">ROI</div>
                </div>
              </div>
              <div className="text-sm text-gray-500 mb-6">
                12 min read • Manufacturing
              </div>
              <div className="block w-full bg-gradient-to-r from-green-600 to-teal-600 text-white text-center py-4 rounded-xl font-bold hover:from-green-700 hover:to-teal-700 transition-colors text-lg shadow-lg">
                Read Success Story →
              </div>
            </div>
          </Link>
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-block bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30">
            <h3 className="text-2xl font-bold mb-4">Don't Miss These Game-Changing Insights</h3>
            <p className="text-lg opacity-90 mb-6">
              Essential reading for CTOs, CFOs, and technology leaders planning their 2026 AI strategy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog"
                className="inline-block bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                Explore All Latest Insights →
              </Link>
              <Link
                href="/case-studies"
                className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-600 transition-colors"
              >
                View All Success Stories →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
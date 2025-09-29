import React from 'react';
import Link from 'next/link';

export function NewContent2026PromotionalBanners() {
  return (
    <>
      {/* AI Innovation 2026 Banner */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                  NEW 2026
                </span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                  AI Innovation
                </span>
              </div>
              <h2 className="text-4xl font-bold mb-4">
                Revolutionary AI Content & Success Stories
              </h2>
              <p className="text-xl mb-6 text-blue-100">
                Discover the latest AI innovations, transformation guides, and real-world success stories 
                that are reshaping businesses in 2026. Get exclusive insights from industry leaders.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/blog/ai-autonomous-infrastructure-2026"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
                >
                  🏗️ AI Infrastructure Guide
                </Link>
                <Link
                  href="/blog/ai-quantum-hybrid-computing-2026"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center"
                >
                  ⚛️ Quantum AI Guide
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-yellow-300">99.9%</div>
                <div className="text-sm text-blue-100">Uptime</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-green-300">1000x</div>
                <div className="text-sm text-blue-100">Faster</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-purple-300">99.7%</div>
                <div className="text-sm text-blue-100">Security</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-orange-300">$25M</div>
                <div className="text-sm text-blue-100">ROI</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Story 2026 Banner */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-400 text-black text-sm font-bold mb-4">
              <span className="mr-2">🏆</span>
              FEATURED SUCCESS STORY
            </div>
            <h2 className="text-4xl font-bold mb-4">
              $25M AI Transformation Success
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              See how a Fortune 500 company achieved unprecedented success with comprehensive AI transformation. 
              99% automation, 90% cost reduction, and complete business revolution.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-yellow-300 mb-2">$25M</div>
              <div className="text-lg font-semibold mb-2">Total ROI</div>
              <div className="text-sm text-green-100">Achieved in just 18 months</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-blue-300 mb-2">99%</div>
              <div className="text-lg font-semibold mb-2">Process Automation</div>
              <div className="text-sm text-green-100">Eliminated manual work</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-purple-300 mb-2">90%</div>
              <div className="text-lg font-semibold mb-2">Cost Reduction</div>
              <div className="text-sm text-green-100">Operational savings</div>
            </div>
          </div>
          
          <div className="text-center">
            <Link
              href="/case-studies/ai-transformation-mega-success-2026"
              className="inline-block bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              View Complete Case Study →
            </Link>
          </div>
        </div>
      </section>

      {/* AI Revolution 2026 Banner */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">🤖</div>
                  <div className="text-sm font-semibold">AI Agents</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">⚛️</div>
                  <div className="text-sm font-semibold">Quantum AI</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">🛡️</div>
                  <div className="text-sm font-semibold">Zero Trust</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">🏗️</div>
                  <div className="text-sm font-semibold">Infrastructure</div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                  NEW 2026
                </span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                  AI Revolution
                </span>
              </div>
              <h2 className="text-4xl font-bold mb-4">
                The AI Revolution is Here
              </h2>
              <p className="text-xl mb-6 text-purple-100">
                Transform your business with cutting-edge AI technologies. From autonomous infrastructure 
                to quantum computing, discover the future of enterprise technology.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-yellow-300">✓</span>
                  <span>AI Autonomous Infrastructure</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-yellow-300">✓</span>
                  <span>Quantum Hybrid Computing</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-yellow-300">✓</span>
                  <span>Zero Trust Security</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-yellow-300">✓</span>
                  <span>Foundation Models Playbook</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Content 2026 Banner */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-400 text-black text-sm font-bold mb-4">
              <span className="mr-2">✨</span>
              LATEST 2026 CONTENT
            </div>
            <h2 className="text-4xl font-bold mb-4">
              Stay Ahead with Latest AI Insights
            </h2>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              Get exclusive access to the latest AI trends, technical guides, and success stories 
              that are shaping the future of business technology.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <Link href="/blog/ai-autonomous-infrastructure-2026" className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                    <span className="text-xl">🏗️</span>
                  </div>
                  <div>
                    <div className="text-sm text-yellow-300 font-semibold">Infrastructure</div>
                    <div className="text-sm text-indigo-200">25 min read</div>
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-yellow-300 transition-colors">
                  AI Autonomous Infrastructure 2026
                </h3>
                <p className="text-indigo-200 text-sm">
                  Self-managing systems with 99.9% uptime and zero-touch operations.
                </p>
              </div>
            </Link>

            <Link href="/blog/ai-quantum-hybrid-computing-2026" className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                    <span className="text-xl">⚛️</span>
                  </div>
                  <div>
                    <div className="text-sm text-yellow-300 font-semibold">Quantum AI</div>
                    <div className="text-sm text-indigo-200">30 min read</div>
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-yellow-300 transition-colors">
                  AI Quantum Hybrid Computing
                </h3>
                <p className="text-indigo-200 text-sm">
                  1000x faster optimization with quantum AI capabilities.
                </p>
              </div>
            </Link>

            <Link href="/blog/ai-zero-trust-security-2026" className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
                    <span className="text-xl">🛡️</span>
                  </div>
                  <div>
                    <div className="text-sm text-yellow-300 font-semibold">Security</div>
                    <div className="text-sm text-indigo-200">28 min read</div>
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-yellow-300 transition-colors">
                  AI Zero Trust Security 2026
                </h3>
                <p className="text-indigo-200 text-sm">
                  99.7% threat prevention with AI-powered security.
                </p>
              </div>
            </Link>
          </div>
          
          <div className="text-center">
            <Link
              href="/blog"
              className="inline-block bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition-colors shadow-lg"
            >
              Explore All Content →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
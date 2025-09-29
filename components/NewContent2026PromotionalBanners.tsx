import React from 'react';
import Link from 'next/link';

export function NewContent2026PromotionalBanners() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold">
              ✨ NEW 2026 CONTENT
            </span>
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold">
              JUST PUBLISHED
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary AI Content & Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest AI innovations, transformation guides, and real-world success stories 
            that are reshaping businesses in 2026
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* AI Autonomous Enterprise */}
          <div className="group">
            <Link href="/blog/ai-autonomous-enterprise-transformation-2026" className="block">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-purple-200 hover:scale-105">
                <div className="h-48 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-600 relative">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-3xl">🚀</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Autonomous Enterprise</h3>
                      <p className="text-purple-100">Self-Managing Operations</p>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      NEW 2026
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">Article</span>
                    <span className="text-gray-500 text-sm">30 min read</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    AI Autonomous Enterprise Transformation 2026
                  </h4>
                  <p className="text-gray-600 mb-4">
                    Master autonomous AI enterprise operations with zero-touch business management, 
                    predictive analytics, and self-optimizing systems.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-purple-600">99%</div>
                        <div className="text-xs text-gray-500">Automation</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-green-600">$25M+</div>
                        <div className="text-xs text-gray-500">ROI</div>
                      </div>
                    </div>
                    <div className="text-purple-600 font-semibold text-sm group-hover:text-purple-700 transition-colors">
                      Read More →
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Quantum AI Computing */}
          <div className="group">
            <Link href="/blog/ai-quantum-hybrid-computing-2026" className="block">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200 hover:scale-105">
                <div className="h-48 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-3xl">⚡</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Quantum AI</h3>
                      <p className="text-blue-100">Next-Gen Intelligence</p>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      NEW 2026
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">Article</span>
                    <span className="text-gray-500 text-sm">25 min read</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    AI Quantum Hybrid Computing 2026
                  </h4>
                  <p className="text-gray-600 mb-4">
                    Harness quantum computing for AI breakthroughs with 1000x faster optimization 
                    and revolutionary capabilities.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-blue-600">1000x</div>
                        <div className="text-xs text-gray-500">Faster</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-purple-600">95%</div>
                        <div className="text-xs text-gray-500">Accuracy</div>
                      </div>
                    </div>
                    <div className="text-blue-600 font-semibold text-sm group-hover:text-blue-700 transition-colors">
                      Read More →
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Success Story */}
          <div className="group">
            <Link href="/case-studies/ai-autonomous-enterprise-success-2026" className="block">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-green-200 hover:scale-105">
                <div className="h-48 bg-gradient-to-br from-green-600 via-teal-600 to-blue-600 relative">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-3xl">🏆</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">$25M Success</h3>
                      <p className="text-green-100">Fortune 500 Case Study</p>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      CASE STUDY
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">Case Study</span>
                    <span className="text-gray-500 text-sm">15 min read</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                    AI Autonomous Enterprise Success 2026
                  </h4>
                  <p className="text-gray-600 mb-4">
                    See how a Fortune 500 company achieved $25M ROI with comprehensive AI transformation. 
                    99% automation, 90% cost reduction.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-green-600">$25M</div>
                        <div className="text-xs text-gray-500">ROI</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-teal-600">99.9%</div>
                        <div className="text-xs text-gray-500">Uptime</div>
                      </div>
                    </div>
                    <div className="text-green-600 font-semibold text-sm group-hover:text-green-700 transition-colors">
                      Read More →
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Additional Content Row */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* AI Agent Orchestration */}
          <div className="group">
            <Link href="/blog/ai-agent-orchestration-2026" className="block">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-indigo-200 hover:scale-105">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">AI Agent Orchestration</h3>
                    <p className="text-sm text-gray-500">Multi-Agent Systems</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Master multi-agent systems with 95% automation efficiency and $5M+ ROI through 
                  advanced orchestration patterns.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">22 min read</div>
                  <div className="text-indigo-600 font-semibold group-hover:text-indigo-700 transition-colors">
                    Read Article →
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* AI Sustainability */}
          <div className="group">
            <Link href="/blog/ai-sustainability-green-tech-2026" className="block">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-green-200 hover:scale-105">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-teal-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🌱</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">AI Sustainability</h3>
                    <p className="text-sm text-gray-500">Green Technology</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Achieve carbon-neutral AI operations with 80% energy reduction and $2M+ savings 
                  through sustainable technology.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">18 min read</div>
                  <div className="text-green-600 font-semibold group-hover:text-green-700 transition-colors">
                    Read Article →
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl hover:scale-105"
          >
            <span className="w-5 h-5 mr-2">🚀</span>
            Explore All Revolutionary Content
            <span className="w-5 h-5 ml-2">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
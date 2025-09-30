import React from 'react';
import Link from 'next/link';

export default function LatestContentShowcase2025() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-semibold text-purple-700">✨ LATEST 2025 CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Latest AI Insights & Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay ahead with our latest content, breakthrough innovations, and real-world success stories from enterprises transforming with AI.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Latest Article 1 */}
          <Link href="/blog/ai-2025-revolutionary-breakthroughs" className="group">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 hover:border-purple-300 h-full">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-semibold">
                  Revolutionary
                </span>
                <span className="text-sm text-gray-500">25 min read</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors leading-tight">
                AI 2025 Revolutionary Breakthroughs: The Complete Transformation Guide
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Discover the revolutionary AI breakthroughs reshaping 2025. From autonomous agents to quantum AI, explore the technologies transforming enterprise operations and achieving 300% ROI.
              </p>
              <div className="flex items-center text-purple-600 font-semibold group-hover:text-purple-700 transition-colors">
                <span>Read Article →</span>
              </div>
            </div>
          </Link>

          {/* Latest Article 2 */}
          <Link href="/blog/ai-autonomous-enterprise-2025" className="group">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 hover:border-blue-300 h-full">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
                  Implementation Guide
                </span>
                <span className="text-sm text-gray-500">30 min read</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                AI Autonomous Enterprise 2025: Complete Implementation Roadmap
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Transform your enterprise with autonomous AI systems. Achieve 90% efficiency gains, 70% cost reduction, and 300% ROI with our comprehensive autonomous enterprise implementation guide.
              </p>
              <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                <span>Read Guide →</span>
              </div>
            </div>
          </Link>

          {/* Latest Article 3 */}
          <Link href="/blog/ai-quantum-computing-enterprise-2025" className="group">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 hover:border-indigo-300 h-full">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-xs font-semibold">
                  Quantum Innovation
                </span>
                <span className="text-sm text-gray-500">28 min read</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors leading-tight">
                AI Quantum Computing Enterprise 2025: The Next Frontier of Business Intelligence
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Discover how quantum-enhanced AI is revolutionizing enterprise computing. Achieve 1000x faster processing, 500x optimization improvements, and breakthrough business intelligence.
              </p>
              <div className="flex items-center text-indigo-600 font-semibold group-hover:text-indigo-700 transition-colors">
                <span>Read Article →</span>
              </div>
            </div>
          </Link>

          {/* Success Story 1 */}
          <Link href="/case-studies/ai-transformation-manufacturing-2025" className="group">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 hover:border-green-300 h-full">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                  Success Story
                </span>
                <span className="text-sm text-gray-500">Manufacturing</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors leading-tight">
                AI Transformation Manufacturing: 75% Cost Reduction & 90% Efficiency Gain
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                See how a Fortune 500 manufacturer achieved 75% cost reduction and 90% efficiency improvement with AI transformation. Real results: $50M annual savings and 300% ROI.
              </p>
              <div className="flex items-center text-green-600 font-semibold group-hover:text-green-700 transition-colors">
                <span>View Case Study →</span>
              </div>
            </div>
          </Link>

          {/* Success Story 2 */}
          <Link href="/case-studies/fintech-ai-risk-compliance-2025" className="group">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 hover:border-blue-300 h-full">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
                  Success Story
                </span>
                <span className="text-sm text-gray-500">FinTech</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                FinTech AI Risk Compliance: 70% Risk Reduction & $2.5M Savings
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                See how a leading fintech achieved 70% risk reduction with automated governance frameworks and achieved $2.5M in compliance savings.
              </p>
              <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                <span>View Case Study →</span>
              </div>
            </div>
          </Link>

          {/* Success Story 3 */}
          <Link href="/case-studies/techcorp-ai-transformation" className="group">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 hover:border-purple-300 h-full">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-semibold">
                  Success Story
                </span>
                <span className="text-sm text-gray-500">E-commerce</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors leading-tight">
                TechCorp: 90% Efficiency Gain with AI Transformation
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                See how TechCorp achieved $500K annual savings and 90% efficiency improvement with comprehensive AI transformation across their operations.
              </p>
              <div className="flex items-center text-purple-600 font-semibold group-hover:text-purple-700 transition-colors">
                <span>View Case Study →</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Featured Metrics */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 text-white mb-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Proven Results Across Industries</h3>
            <p className="text-xl opacity-90">
              Our AI solutions deliver measurable results for enterprises worldwide
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">300%</div>
              <div className="text-lg opacity-90">Average ROI</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">90%</div>
              <div className="text-lg opacity-90">Efficiency Improvement</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">75%</div>
              <div className="text-lg opacity-90">Cost Reduction</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-lg opacity-90">System Uptime</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/blog"
              className="inline-block bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-700 transition-colors shadow-lg hover:shadow-xl"
            >
              View All Content
            </Link>
            <Link
              href="/case-studies"
              className="inline-block border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-600 hover:text-white transition-colors"
            >
              Browse Case Studies
            </Link>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest AI innovations and success stories. Subscribe to our newsletter for weekly insights and exclusive content.
          </p>
        </div>
      </div>
    </section>
  );
}
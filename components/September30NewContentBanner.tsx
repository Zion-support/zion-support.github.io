import React from 'react';
import { Link } from 'react-router-dom';

export default function September30NewContentBanner() {
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Attention-Grabbing Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-6xl animate-pulse">🔥</span>
            <h2 className="text-5xl md:text-6xl font-black">BREAKING: NEW CONTENT JUST DROPPED!</h2>
            <span className="text-6xl animate-pulse">⚡</span>
          </div>
          <p className="text-3xl font-bold mb-3">
            September 30, 2025 — 2 Game-Changing Publications
          </p>
          <p className="text-xl opacity-95">
            AI Observability Guide + $150M FinTech Transformation Success Story
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          {/* Blog Post: AI Observability */}
          <Link href="/blog/ai-observability-enterprise-2025" className="group">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all hover:scale-105 transform">
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-8 text-white">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-full text-sm font-bold animate-bounce">
                    🆕 COMPREHENSIVE GUIDE
                  </span>
                </div>
                <h3 className="text-3xl font-bold mb-3">
                  AI Observability for Enterprise 2025
                </h3>
                <p className="text-lg opacity-95">
                  Master production AI monitoring, debugging, and optimization
                </p>
              </div>
              <div className="p-8">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Complete guide to achieving 99.9% uptime, 90% faster incident resolution, and $8M+ cost savings 
                  through comprehensive AI observability. Learn distributed tracing, real-time monitoring, cost optimization, 
                  and hallucination detection.
                </p>
                <div className="grid grid-cols-3 gap-3 mb-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-blue-600">99.9%</div>
                    <div className="text-xs text-gray-600">Uptime</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-cyan-600">90%</div>
                    <div className="text-xs text-gray-600">Faster Debug</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600">$8M+</div>
                    <div className="text-xs text-gray-600">Savings</div>
                  </div>
                </div>
                <div className="text-sm text-gray-500 mb-6">
                  ⏱️ 20 min read • MLOps & Infrastructure
                </div>
                <div className="block w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-center py-4 rounded-xl font-bold hover:from-blue-700 hover:to-cyan-700 transition-colors text-lg shadow-lg">
                  Read Complete Guide →
                </div>
              </div>
            </div>
          </Link>

          {/* Case Study: FinTech Transformation */}
          <Link href="/case-studies/fintech-ai-transformation-september-2025" className="group">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all hover:scale-105 transform border-4 border-green-300">
              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-8 text-white">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-yellow-400 text-green-900 px-4 py-2 rounded-full text-sm font-bold animate-bounce">
                    🏆 SUCCESS STORY
                  </span>
                </div>
                <h3 className="text-3xl font-bold mb-3">
                  $150M FinTech AI Transformation
                </h3>
                <p className="text-lg opacity-95">
                  Global digital bank achieves 98% fraud detection & 5x faster approvals
                </p>
              </div>
              <div className="p-8">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  How a top-10 digital bank with 45M users transformed operations in 14 months: $150M annual ROI, 
                  98% fraud detection accuracy, 75% cost reduction, 5x faster loan approvals, and 96% customer satisfaction. 
                  Complete implementation roadmap included.
                </p>
                <div className="grid grid-cols-3 gap-3 mb-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-green-600">$150M</div>
                    <div className="text-xs text-gray-600">Annual ROI</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600">98%</div>
                    <div className="text-xs text-gray-600">Fraud Detection</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-600">5x</div>
                    <div className="text-xs text-gray-600">Faster</div>
                  </div>
                </div>
                <div className="text-sm text-gray-500 mb-6">
                  💰 $150M ROI • 14-month transformation
                </div>
                <div className="block w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-center py-4 rounded-xl font-bold hover:from-emerald-700 hover:to-teal-700 transition-colors text-lg shadow-lg">
                  Read Success Story →
                </div>
              </div>
            </div>
          </Link>

        </div>

        {/* Why This Matters */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/20 mb-8">
          <h3 className="text-2xl font-bold mb-4 text-center">Why These Publications Matter</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl mb-3">🎯</div>
              <h4 className="font-bold mb-2">Actionable Insights</h4>
              <p className="text-sm opacity-90">
                Real implementation strategies, not theory. 6-week roadmaps, cost breakdowns, and ROI calculators.
              </p>
            </div>
            <div>
              <div className="text-4xl mb-3">💡</div>
              <h4 className="font-bold mb-2">Proven Results</h4>
              <p className="text-sm opacity-90">
                Based on actual enterprise deployments achieving $150M+ ROI and 99.9% uptime in production.
              </p>
            </div>
            <div>
              <div className="text-4xl mb-3">🚀</div>
              <h4 className="font-bold mb-2">Industry-Leading</h4>
              <p className="text-sm opacity-90">
                Cutting-edge techniques used by Fortune 500 companies to stay ahead in the AI race.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6">Want These Results for Your Organization?</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
            >
              📞 Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-600 transition-all hover:scale-105"
            >
              📧 Schedule Free Consultation
            </a>
          </div>
          <p className="text-sm opacity-90">
            Free AI transformation assessment • Industry-specific recommendations • No obligation
          </p>
        </div>
      </div>
    </section>
  );
}

export { September30NewContentBanner };
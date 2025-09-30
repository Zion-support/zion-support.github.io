import React from 'react';
import Link from 'next/link';

export default function NewContent2026PromotionalBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-semibold">🚀 NEW 2026 CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Revolutionary AI Content That Will Transform Your Business
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            Discover the latest insights, case studies, and breakthrough technologies that are reshaping enterprise operations in 2026.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Featured Blog Post */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                Featured Article
              </span>
              <span className="text-sm opacity-75">25 min read</span>
            </div>
            <h3 className="text-xl font-bold mb-3 leading-tight">
              AI Neural Superintelligence 2026: The Next Frontier
            </h3>
            <p className="text-sm opacity-90 mb-4 leading-relaxed">
              Explore revolutionary advances in neural superintelligence and how enterprises can prepare for the next generation of AI systems.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-sm opacity-75">Published Jan 20, 2025</div>
              <Link
                href="/blog/ai-2026-neural-superintelligence"
                className="text-white font-semibold hover:text-purple-200 transition-colors"
              >
                Read Article →
              </Link>
            </div>
          </div>

          {/* Mega Trends Article */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                Trend Analysis
              </span>
              <span className="text-sm opacity-75">30 min read</span>
            </div>
            <h3 className="text-xl font-bold mb-3 leading-tight">
              AI Mega Trends 2026: 10 Revolutionary Technologies
            </h3>
            <p className="text-sm opacity-90 mb-4 leading-relaxed">
              Discover the 10 most transformative AI trends that will reshape enterprise operations in 2026 and beyond.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-sm opacity-75">Published Jan 20, 2025</div>
              <Link
                href="/blog/ai-2026-mega-trends"
                className="text-white font-semibold hover:text-blue-200 transition-colors"
              >
                Read Article →
              </Link>
            </div>
          </div>

          {/* Success Case Study */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                Success Story
              </span>
              <span className="text-sm opacity-75">Fortune 500</span>
            </div>
            <h3 className="text-xl font-bold mb-3 leading-tight">
              GlobalCorp's 500% ROI AI Transformation
            </h3>
            <p className="text-sm opacity-90 mb-4 leading-relaxed">
              See how GlobalCorp achieved 500% ROI and $200M in annual savings through neural superintelligence implementation.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-sm opacity-75">Published Jan 20, 2025</div>
              <Link
                href="/case-studies/ai-2026-mega-transformation-success"
                className="text-white font-semibold hover:text-green-200 transition-colors"
              >
                View Case Study →
              </Link>
            </div>
          </div>
        </div>

        {/* Key Benefits Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">Why This Content Matters for Your Business</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">🎯</div>
              <h4 className="font-semibold mb-2">Strategic Insights</h4>
              <p className="text-sm opacity-90">Stay ahead with cutting-edge AI trends and predictions</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">📊</div>
              <h4 className="font-semibold mb-2">Proven Results</h4>
              <p className="text-sm opacity-90">Real case studies with quantified business impact</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🚀</div>
              <h4 className="font-semibold mb-2">Implementation Guide</h4>
              <p className="text-sm opacity-90">Practical steps to transform your enterprise</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">💰</div>
              <h4 className="font-semibold mb-2">ROI Focused</h4>
              <p className="text-sm opacity-90">Clear metrics and business value propositions</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Enterprise with AI?</h3>
            <p className="text-lg opacity-90 mb-6">
              Don't miss out on the AI revolution. Start implementing these cutting-edge technologies today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                Explore All Content
              </Link>
              <Link
                href="/services/ai-transformation-consulting"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Get AI Consultation
              </Link>
            </div>
            <div className="mt-6 text-sm opacity-75">
              <p>📞 Call +1 302 464 0950 | 📧 kleber@ziontechgroup.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
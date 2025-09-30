import React from 'react';
import Link from 'next/link';

export default function LatestAIInnovations2026Banner() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full px-6 py-3 mb-8">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold">Latest AI Innovations 2026</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Revolutionary AI Content
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Stay ahead of the curve with our latest AI insights, breakthrough case studies, 
            and cutting-edge implementation strategies that are reshaping industries
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content Highlights */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">AI Enterprise Adoption Guide</h3>
                  <p className="text-blue-100 mb-4">
                    Complete implementation roadmap with proven strategies to achieve 300% ROI in AI transformation projects.
                  </p>
                  <Link 
                    href="/blog/ai-enterprise-adoption-2025"
                    className="inline-flex items-center text-yellow-300 font-semibold hover:text-yellow-200 transition-colors"
                  >
                    Read Full Guide →
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">📊</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Supply Chain AI Success</h3>
                  <p className="text-blue-100 mb-4">
                    Real-world case study showing 60% cost reduction and $12M annual savings through AI-powered optimization.
                  </p>
                  <Link 
                    href="/case-studies/ai-supply-chain-optimization-2025"
                    className="inline-flex items-center text-yellow-300 font-semibold hover:text-yellow-200 transition-colors"
                  >
                    View Case Study →
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🔮</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">AI Trends 2025 Predictions</h3>
                  <p className="text-blue-100 mb-4">
                    Discover the top 10 AI trends that will shape 2025 and beyond, from autonomous agents to edge computing.
                  </p>
                  <Link 
                    href="/blog/ai-trends-2025-predictions"
                    className="inline-flex items-center text-yellow-300 font-semibold hover:text-yellow-200 transition-colors"
                  >
                    Explore Trends →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics & Impact */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-8">Proven Results</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <div className="text-4xl font-bold text-yellow-300 mb-2">300%</div>
                <div className="text-sm text-blue-100">Average ROI</div>
              </div>
              <div className="bg-gradient-to-br from-green-500/20 to-teal-500/20 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <div className="text-4xl font-bold text-yellow-300 mb-2">$12M</div>
                <div className="text-sm text-blue-100">Annual Savings</div>
              </div>
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <div className="text-4xl font-bold text-yellow-300 mb-2">95%</div>
                <div className="text-sm text-blue-100">Success Rate</div>
              </div>
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <div className="text-4xl font-bold text-yellow-300 mb-2">60%</div>
                <div className="text-sm text-blue-100">Cost Reduction</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/30">
              <h4 className="text-lg font-bold text-yellow-300 mb-2">Why Choose Our AI Solutions?</h4>
              <ul className="space-y-2 text-blue-100 text-sm">
                <li>• Proven track record with 500+ successful implementations</li>
                <li>• Industry-leading expertise in enterprise AI transformation</li>
                <li>• Comprehensive support from strategy to execution</li>
                <li>• Measurable ROI within 6-12 months</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business with AI?</h3>
            <p className="text-blue-100 mb-6">
              Join thousands of forward-thinking companies that have already transformed their operations with our AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Free AI Assessment
              </Link>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-slate-900 transition-colors"
              >
                Call +1 302 464 0950
              </a>
            </div>
            <p className="text-sm text-blue-200 mt-4">
              Free consultation • No commitment • Expert guidance
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
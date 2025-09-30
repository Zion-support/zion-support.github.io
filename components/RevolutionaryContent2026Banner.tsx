import React from 'react';
import Link from 'next/link';

export default function RevolutionaryContent2026Banner() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-32 right-1/3 w-24 h-24 bg-white/10 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
              <span className="text-sm font-semibold">REVOLUTIONARY CONTENT 2026</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Transform Your Business with
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">
                Cutting-Edge AI Insights
              </span>
            </h2>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Discover the latest AI innovations, implementation strategies, and success stories 
              that are revolutionizing enterprise operations worldwide.
            </p>

            {/* Featured Content Links */}
            <div className="space-y-4 mb-8">
              <Link 
                href="/blog/ai-2026-enterprise-automation-revolution"
                className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-xl">🤖</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold group-hover:text-yellow-400 transition-colors">
                    AI Enterprise Automation Revolution 2026
                  </h3>
                  <p className="text-sm text-gray-300">Complete implementation guide with 300% ROI strategies</p>
                </div>
                <span className="text-yellow-400 group-hover:translate-x-1 transition-transform">→</span>
              </Link>

              <Link 
                href="/blog/ai-multimodal-integration-2025"
                className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                  <span className="text-xl">🎯</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold group-hover:text-yellow-400 transition-colors">
                    AI Multimodal Integration 2025
                  </h3>
                  <p className="text-sm text-gray-300">250% efficiency gains with text, voice, and video AI</p>
                </div>
                <span className="text-yellow-400 group-hover:translate-x-1 transition-transform">→</span>
              </Link>

              <Link 
                href="/case-studies/ai-supply-chain-optimization-2025"
                className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <span className="text-xl">📈</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold group-hover:text-yellow-400 transition-colors">
                    AI Supply Chain Optimization Case Study
                  </h3>
                  <p className="text-sm text-gray-300">60% cost reduction and 90% efficiency gains achieved</p>
                </div>
                <span className="text-yellow-400 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl text-center"
              >
                Explore All Content
              </Link>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors text-center"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6 text-center">Proven Results</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">300%</div>
                  <div className="text-sm text-gray-300">Average ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">250%</div>
                  <div className="text-sm text-gray-300">Efficiency Gains</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">60%</div>
                  <div className="text-sm text-gray-300">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">$12M+</div>
                  <div className="text-sm text-gray-300">Annual Savings</div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full animate-bounce delay-1000"></div>
            <div className="absolute top-1/2 -right-8 w-4 h-4 bg-cyan-400 rounded-full animate-bounce delay-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
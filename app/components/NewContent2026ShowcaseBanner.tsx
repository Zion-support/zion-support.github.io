import React from 'react';
import Link from 'next/link';

const NewContent2026ShowcaseBanner: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-purple-500/10 to-transparent animate-pulse"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-full px-6 py-3 mb-6">
            <span className="text-sm font-medium flex items-center">
              ✨ <span className="ml-2">NEW CONTENT 2026 SHOWCASE</span>
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              Revolutionary AI Content
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Explore cutting-edge insights, breakthrough technologies, and proven strategies 
            that are reshaping the future of enterprise automation and AI transformation.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Left Column - Featured Articles */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6 text-center lg:text-left">Featured Articles</h3>
            
            {/* Article 1 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">⚡</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <span className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded-full mr-2">NEW</span>
                    <span className="text-xs text-purple-300">AI Automation</span>
                  </div>
                  <h4 className="text-lg font-semibold mb-2 group-hover:text-purple-300 transition-colors">
                    AI 2026 Quantum Automation Breakthrough
                  </h4>
                  <p className="text-sm opacity-80 mb-3">
                    Revolutionary quantum AI automation delivering unprecedented business transformation with 450% ROI.
                  </p>
                  <Link 
                    href="/blog/ai-2026-quantum-automation-breakthrough"
                    className="text-purple-300 hover:text-purple-200 font-medium text-sm inline-flex items-center"
                  >
                    Read Full Article <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Article 2 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🤖</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full mr-2">GUIDE</span>
                    <span className="text-xs text-purple-300">Autonomous Systems</span>
                  </div>
                  <h4 className="text-lg font-semibold mb-2 group-hover:text-purple-300 transition-colors">
                    Autonomous Business Systems 2026 Complete Guide
                  </h4>
                  <p className="text-sm opacity-80 mb-3">
                    Master self-managing enterprise operations with comprehensive strategies for 400% ROI.
                  </p>
                  <Link 
                    href="/blog/autonomous-business-systems-2026-complete-guide"
                    className="text-purple-300 hover:text-purple-200 font-medium text-sm inline-flex items-center"
                  >
                    Read Complete Guide <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Success Stories */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6 text-center lg:text-left">Success Stories</h3>
            
            {/* Case Study */}
            <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:border-purple-400/50 transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">📈</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <span className="text-xs bg-orange-500/20 text-orange-300 px-2 py-1 rounded-full mr-2">CASE STUDY</span>
                    <span className="text-xs text-purple-300">Fortune 500</span>
                  </div>
                  <h4 className="text-lg font-semibold mb-2 group-hover:text-orange-300 transition-colors">
                    AI 2026 Enterprise Transformation: 1200% ROI Success
                  </h4>
                  <p className="text-sm opacity-80 mb-3">
                    Discover how a Fortune 500 company achieved 1200% ROI through comprehensive AI transformation.
                  </p>
                  <div className="flex items-center justify-between">
                    <Link 
                      href="/case-studies/ai-2026-enterprise-transformation-1200-roi-success"
                      className="text-orange-300 hover:text-orange-200 font-medium text-sm inline-flex items-center"
                    >
                      Read Case Study <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-300">1200%</div>
                      <div className="text-xs text-purple-300">ROI</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Statistics Card */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h4 className="text-lg font-semibold mb-4 text-center">Transformation Impact</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-300 mb-1">450%</div>
                  <div className="text-xs opacity-70">Average ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-300 mb-1">90%</div>
                  <div className="text-xs opacity-70">Efficiency Gain</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-300 mb-1">95%</div>
                  <div className="text-xs opacity-70">Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-300 mb-1">18</div>
                  <div className="text-xs opacity-70">Months ROI</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Join hundreds of companies already achieving breakthrough results with AI 2026 automation technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Explore Our Services
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContent2026ShowcaseBanner;
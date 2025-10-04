import React from 'react';
import { Link } from 'react-router-dom';

export default function September30FreshContent2025Banner() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 rounded-full font-bold text-sm mb-6 animate-bounce">
            <span className="text-2xl">🚀</span>
            <span>FRESH CONTENT ALERT - September 30, 2025</span>
            <span className="text-2xl">🚀</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-300 to-cyan-300">
              Latest AI Insights
            </span>
            <br />
            <span className="text-white">Just Dropped!</span>
          </h2>
          
          <p className="text-2xl md:text-3xl text-cyan-100 font-semibold mb-4">
            3 Game-Changing Articles Published Today
          </p>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Discover cutting-edge strategies in AI cybersecurity, autonomous cloud orchestration, 
            and digital transformation that are revolutionizing enterprise operations right now.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Article 1 */}
          <Link href="/blog/ai-driven-cybersecurity-revolution-2025" className="group">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border-2 border-purple-400/50 hover:border-purple-300 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 h-full">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                AI-Driven Cybersecurity Revolution 2025
              </h3>
              <p className="text-cyan-100 mb-6 leading-relaxed">
                Discover how AI-powered security achieves 99.9% threat detection accuracy and protects 
                enterprise assets with autonomous, real-time threat response systems.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-purple-500/30 text-purple-100 px-3 py-1 rounded-full text-sm font-semibold">
                  Cybersecurity
                </span>
                <span className="bg-blue-500/30 text-blue-100 px-3 py-1 rounded-full text-sm font-semibold">
                  AI Security
                </span>
              </div>
              <div className="flex items-center gap-2 text-yellow-300 font-bold group-hover:gap-4 transition-all">
                <span>Read Now</span>
                <span className="text-2xl group-hover:translate-x-2 transition-transform">→</span>
              </div>
            </div>
          </Link>

          {/* Article 2 */}
          <Link href="/blog/autonomous-cloud-orchestration-2025" className="group">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border-2 border-cyan-400/50 hover:border-cyan-300 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50 h-full">
              <div className="text-5xl mb-4">☁️</div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                Autonomous Cloud Orchestration 2025
              </h3>
              <p className="text-cyan-100 mb-6 leading-relaxed">
                Transform your infrastructure with self-managing, self-healing cloud systems. Achieve 90% 
                cost reduction and 10x scalability with AI-powered orchestration.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-cyan-500/30 text-cyan-100 px-3 py-1 rounded-full text-sm font-semibold">
                  Cloud Tech
                </span>
                <span className="bg-blue-500/30 text-blue-100 px-3 py-1 rounded-full text-sm font-semibold">
                  Infrastructure
                </span>
              </div>
              <div className="flex items-center gap-2 text-yellow-300 font-bold group-hover:gap-4 transition-all">
                <span>Read Now</span>
                <span className="text-2xl group-hover:translate-x-2 transition-transform">→</span>
              </div>
            </div>
          </Link>

          {/* Article 3 */}
          <Link href="/blog/enterprise-digital-transformation-strategy-2025" className="group">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border-2 border-emerald-400/50 hover:border-emerald-300 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/50 h-full">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-300 transition-colors">
                Enterprise Digital Transformation Strategy 2025
              </h3>
              <p className="text-cyan-100 mb-6 leading-relaxed">
                Master the complete transformation roadmap. Follow our proven 5-phase framework that 
                delivers 500% ROI and positions your enterprise for future success.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-emerald-500/30 text-emerald-100 px-3 py-1 rounded-full text-sm font-semibold">
                  Strategy
                </span>
                <span className="bg-teal-500/30 text-teal-100 px-3 py-1 rounded-full text-sm font-semibold">
                  Transformation
                </span>
              </div>
              <div className="flex items-center gap-2 text-yellow-300 font-bold group-hover:gap-4 transition-all">
                <span>Read Now</span>
                <span className="text-2xl group-hover:translate-x-2 transition-transform">→</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-lg rounded-2xl p-8 mb-12 border border-white/20">
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            Why This Content Matters
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-5xl font-black text-yellow-300 mb-2">99.9%</div>
              <div className="text-cyan-100 font-semibold">Threat Detection Rate</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-yellow-300 mb-2">90%</div>
              <div className="text-cyan-100 font-semibold">Cloud Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-yellow-300 mb-2">500%</div>
              <div className="text-cyan-100 font-semibold">Transformation ROI</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-yellow-300 mb-2">200+</div>
              <div className="text-cyan-100 font-semibold">Enterprises Transformed</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-10 shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Ready to Transform Your Enterprise?
            </h3>
            <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
              Don't just read about innovation—experience it. Contact Zion Tech Group today 
              for a free consultation and discover how these cutting-edge solutions can 
              revolutionize your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+13024640950"
                className="bg-gray-900 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-800 transition-all hover:scale-105 shadow-xl flex items-center gap-3"
              >
                <span className="text-2xl">📞</span>
                <span>Call +1 302 464 0950</span>
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-white text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-xl flex items-center gap-3"
              >
                <span className="text-2xl">✉️</span>
                <span>Get Free Consultation</span>
              </a>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <Link href="/blog" className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 font-semibold text-lg transition-colors">
            <span>Explore All Articles</span>
            <span className="text-2xl">→</span>
          </Link>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-6xl opacity-20 animate-spin-slow">⚡</div>
      <div className="absolute bottom-10 right-10 text-6xl opacity-20 animate-spin-slow">🚀</div>
      <div className="absolute top-1/2 right-20 text-5xl opacity-20 animate-bounce">💡</div>
    </section>
  );
}
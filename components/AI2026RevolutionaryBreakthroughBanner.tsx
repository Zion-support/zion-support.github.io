import React from 'react';
import Link from 'next/link';

const AI2026RevolutionaryBreakthroughBanner: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-indigo-500/20 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <div className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              🚀 Revolutionary Breakthrough
            </div>
            
            <h2 className="text-5xl font-bold mb-6 leading-tight">
              AI 2026 Revolutionary Breakthrough:
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">
                {' '}The Future is Here
              </span>
            </h2>
            
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Discover the most significant AI breakthrough in enterprise history. Autonomous AI systems, 
              quantum computing, and neural interfaces are creating unprecedented opportunities for 
              <span className="text-yellow-400 font-semibold"> 300% ROI</span>, 
              <span className="text-green-400 font-semibold"> 70% cost reduction</span>, and 
              <span className="text-blue-400 font-semibold"> 90% efficiency gains</span>.
            </p>

            {/* Key Metrics */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">300%</div>
                <div className="text-gray-300 text-sm">ROI Achieved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">500x</div>
                <div className="text-gray-300 text-sm">Performance Gains</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">$100M</div>
                <div className="text-gray-300 text-sm">Annual Savings</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog/ai-2026-revolutionary-breakthrough"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center"
              >
                Read Full Article →
              </Link>
              <Link
                href="/case-studies/ai-2026-mega-transformation-success-story"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300 text-center"
              >
                View Success Story →
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 flex items-center gap-6 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                <span>Fortune 500 Proven</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                <span>47 Countries</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                <span>25,000+ Views</span>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Elements */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6 text-center">
                The Three Pillars of AI 2026
              </h3>
              
              <div className="space-y-6">
                {/* Pillar 1 */}
                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl border border-purple-400/30">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">🤖</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Autonomous AI Systems</h4>
                    <p className="text-gray-300 text-sm">Self-managing agents achieving 300% ROI</p>
                  </div>
                </div>

                {/* Pillar 2 */}
                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-xl border border-blue-400/30">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">⚛️</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Quantum AI Computing</h4>
                    <p className="text-gray-300 text-sm">500x faster processing for impossible problems</p>
                  </div>
                </div>

                {/* Pillar 3 */}
                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-xl border border-green-400/30">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">🧠</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Neural Interface Systems</h4>
                    <p className="text-gray-300 text-sm">Direct human-AI collaboration breakthrough</p>
                  </div>
                </div>
              </div>

              {/* Featured Success Story */}
              <div className="mt-8 p-6 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl border border-yellow-400/30">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🏆</span>
                  <h4 className="font-bold text-white">Featured Success Story</h4>
                </div>
                <p className="text-gray-200 text-sm mb-3">
                  Fortune 500 manufacturer achieved $100M annual savings and 95% efficiency gains 
                  across 47 countries in just 8 months.
                </p>
                <Link
                  href="/case-studies/ai-2026-mega-transformation-success-story"
                  className="text-yellow-400 font-semibold hover:text-yellow-300 transition-colors text-sm"
                >
                  Read Full Case Study →
                </Link>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-full animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full animate-bounce delay-500"></div>
            <div className="absolute top-1/2 -right-8 w-4 h-4 bg-pink-500 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-yellow-400">500+</div>
            <div className="text-gray-300">AI Models Deployed</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-400">85K+</div>
            <div className="text-gray-300">Employees Trained</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-400">47</div>
            <div className="text-gray-300">Countries Served</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-400">99.9%</div>
            <div className="text-gray-300">System Uptime</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2026RevolutionaryBreakthroughBanner;
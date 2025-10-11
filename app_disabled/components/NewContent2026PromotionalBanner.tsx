// import Link from 'next/link';

export default function NewContent2026PromotionalBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 text-sm font-bold mb-6 animate-bounce">
            <Zap className="w-4 h-4 mr-2" />
            NEW OCTOBER 2026 CONTENT
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Latest AI Innovations & Success Stories
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Explore cutting-edge AI technologies that are transforming industries worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Federated Learning Card */}
          <Link
            href="/blog/ai-federated-learning-privacy-2026"
            className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-blue-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                NEW GUIDE
              </span>
            </div>

            <h3 className="text-2xl font-bold mb-4 group-hover:text-yellow-300 transition-colors">
              Federated Learning & Privacy AI 2026
            </h3>

            <p className="text-blue-100 mb-6 line-clamp-3">
              Master privacy-preserving machine learning at scale. Achieve 99.9% accuracy while
              keeping data distributed and secure across your organization.
            </p>

            <div className="flex gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">99.9%</div>
                <div className="text-xs text-blue-200">Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">100%</div>
                <div className="text-xs text-blue-200">Data Privacy</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">$8M+</div>
                <div className="text-xs text-blue-200">Savings</div>
              </div>
            </div>

            <div className="flex items-center text-yellow-300 font-semibold group-hover:text-yellow-200">
              Read Full Guide
              <Link className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
            </div>
          </Link>

          {/* Reinforcement Learning Card */}
          <Link
            href="/blog/ai-reinforcement-learning-robotics-2026"
            className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                NEW GUIDE
              </span>
            </div>

            <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-300 transition-colors">
              Reinforcement Learning for Robotics 2026
            </h3>

            <p className="text-blue-100 mb-6 line-clamp-3">
              Deploy intelligent robots that learn from experience. Achieve 98% task success rates
              and $15M+ operational savings with deep RL.
            </p>

            <div className="flex gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">98%</div>
                <div className="text-xs text-blue-200">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">90%</div>
                <div className="text-xs text-blue-200">Faster Training</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">$15M+</div>
                <div className="text-xs text-blue-200">Savings</div>
              </div>
            </div>

            <div className="flex items-center text-cyan-300 font-semibold group-hover:text-cyan-200">
              Read Full Guide
              <Link className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
            </div>
          </Link>

          {/* Retail Case Study Card */}
          <Link
            href="/case-studies/ai-retail-personalization-transformation-2026"
            className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                CASE STUDY
              </span>
            </div>

            <h3 className="text-2xl font-bold mb-4 group-hover:text-green-300 transition-colors">
              Retail Personalization: $25M Revenue Boost
            </h3>

            <p className="text-blue-100 mb-6 line-clamp-3">
              See how GlobalRetail Corp achieved $25M revenue increase and 45% conversion
              improvement through AI-powered personalization.
            </p>

            <div className="flex gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">$25M</div>
                <div className="text-xs text-blue-200">Revenue</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">45%</div>
                <div className="text-xs text-blue-200">Conversion</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">180%</div>
                <div className="text-xs text-blue-200">ROI</div>
              </div>
            </div>

            <div className="flex items-center text-green-300 font-semibold group-hover:text-green-200">
              Read Case Study
              <Link className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
            </div>
          </Link>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl"
          >
            <Zap className="w-5 h-5 mr-2" />
            Explore All Latest Content
          </Link>
        </div>
      </div>
    </section>
  );
}

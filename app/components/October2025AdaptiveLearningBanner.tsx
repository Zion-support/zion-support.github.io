import Link from 'next/link';

export default function October2025AdaptiveLearningBanner() {
  return (
    <section className="py-8 border-t border-b border-green-500/30 bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-teal-500/10 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with badge */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white mb-4 animate-pulse shadow-lg shadow-green-500/50">
            <span className="text-2xl">🎓</span>
            <span className="font-bold text-sm uppercase tracking-wider">JUST RELEASED - OCTOBER 2025</span>
            <span className="text-2xl">🚀</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 mb-4">
            AI-Powered Adaptive Learning Revolution
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-200 font-semibold max-w-4xl mx-auto">
            Transform Workforce Development with 94% Knowledge Retention & $2.8B ROI
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-4 border border-green-500/30 text-center transform hover:scale-105 transition-transform">
            <div className="text-3xl font-extrabold text-green-400 mb-1">94%</div>
            <div className="text-sm text-green-300">Knowledge Retention</div>
          </div>
          <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 backdrop-blur-sm rounded-xl p-4 border border-emerald-500/30 text-center transform hover:scale-105 transition-transform">
            <div className="text-3xl font-extrabold text-emerald-400 mb-1">$2.8B</div>
            <div className="text-sm text-emerald-300">Productivity ROI</div>
          </div>
          <div className="bg-gradient-to-br from-teal-500/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-4 border border-teal-500/30 text-center transform hover:scale-105 transition-transform">
            <div className="text-3xl font-extrabold text-teal-400 mb-1">78%</div>
            <div className="text-sm text-teal-300">Faster Training</div>
          </div>
          <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-4 border border-cyan-500/30 text-center transform hover:scale-105 transition-transform">
            <div className="text-3xl font-extrabold text-cyan-400 mb-1">99.7%</div>
            <div className="text-sm text-cyan-300">Completion Rate</div>
          </div>
          <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-4 border border-blue-500/30 text-center transform hover:scale-105 transition-transform">
            <div className="text-3xl font-extrabold text-blue-400 mb-1">2.4M+</div>
            <div className="text-sm text-blue-300">Employees Trained</div>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-md rounded-2xl p-6 border border-green-500/20 mb-6">
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-lg font-bold text-green-400 mb-2">Personalized Learning Paths</h3>
              <p className="text-sm text-gray-300">AI-tailored curricula adapt in real-time to individual employee needs and learning styles</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-lg font-bold text-emerald-400 mb-2">Rapid Skill Acquisition</h3>
              <p className="text-sm text-gray-300">Reduce training time by 78% through intelligent content optimization and microlearning</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">📊</div>
              <h3 className="text-lg font-bold text-teal-400 mb-2">Measurable Business Impact</h3>
              <p className="text-sm text-gray-300">Proven $8.4B productivity gains across Fortune 500 enterprise deployments</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/blog/ai-2025-oct-adaptive-learning-enterprise-revolution"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transform hover:-translate-y-1"
            >
              <span>📚 Read Revolutionary Guide</span>
              <span>→</span>
            </Link>
            <Link
              href="/case-studies/ai-2025-oct-fortune-500-adaptive-learning-2-8-billion-success"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transform hover:-translate-y-1"
            >
              <span>🏆 View $2.8B Success Story</span>
              <span>→</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white font-bold py-3 px-8 rounded-xl transition-all duration-300"
            >
              <span>🚀 Get Started Today</span>
            </Link>
          </div>
        </div>

        {/* Bottom tagline */}
        <div className="text-center">
          <p className="text-gray-400 text-sm">
            <span className="text-green-400 font-semibold">NEW RELEASE:</span> Discover how Fortune 500 companies are transforming workforce development with AI-powered personalized learning
          </p>
        </div>
      </div>
    </section>
  );
}

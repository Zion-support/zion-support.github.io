import Link from 'next/link';

export default function September30FreshContentBanner() {
  return (
    <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-cyan-600 text-white py-16 px-4 rounded-2xl shadow-2xl my-12 overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
              🚀 NEW: September 30, 2025
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Breakthrough AI Innovations for 2026
          </h2>
          <p className="text-xl text-white/90 mb-2 max-w-3xl mx-auto">
            Discover the cutting-edge AI technologies reshaping enterprise operations
          </p>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Neural-symbolic reasoning, multimodal fusion, and continual learning systems
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <div className="text-3xl mb-3">🧠</div>
            <h3 className="text-xl font-bold mb-3">Neural-Symbolic AI</h3>
            <p className="text-white/90 mb-4 text-sm">
              Bridging logic and learning for 300% accuracy improvements. Explainable AI with 100% transparency.
            </p>
            <Link 
              href="/blog/ai-neural-symbolic-reasoning-2026"
              className="inline-flex items-center text-sm font-semibold text-white hover:text-cyan-200 transition-colors"
            >
              Read Article →
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="text-xl font-bold mb-3">Multimodal AI Fusion</h3>
            <p className="text-white/90 mb-4 text-sm">
              Unified intelligence across vision, language & audio. 400% improvement in contextual understanding.
            </p>
            <Link 
              href="/blog/ai-multimodal-fusion-systems-2026"
              className="inline-flex items-center text-sm font-semibold text-white hover:text-cyan-200 transition-colors"
            >
              Discover More →
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <div className="text-3xl mb-3">🔄</div>
            <h3 className="text-xl font-bold mb-3">Continual Learning</h3>
            <p className="text-white/90 mb-4 text-sm">
              Never-ending adaptation without forgetting. 500% improvement in model adaptability.
            </p>
            <Link 
              href="/blog/ai-continual-learning-systems-2026"
              className="inline-flex items-center text-sm font-semibold text-white hover:text-cyan-200 transition-colors"
            >
              Learn More →
            </Link>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Why These Technologies Matter</h3>
              <ul className="space-y-3 text-white/90">
                <li className="flex items-start">
                  <span className="text-cyan-300 mr-2">✓</span>
                  <span><strong>Neural-Symbolic:</strong> Achieve explainable AI that regulatory bodies trust</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-300 mr-2">✓</span>
                  <span><strong>Multimodal Fusion:</strong> Human-like comprehension across all data types</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-300 mr-2">✓</span>
                  <span><strong>Continual Learning:</strong> Eliminate costly retraining cycles forever</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-3xl font-bold mb-1">$500M+</div>
                <div className="text-sm text-white/80">Value generated for clients</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-3xl font-bold mb-1">98%</div>
                <div className="text-sm text-white/80">Client satisfaction rate</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-3xl font-bold mb-1">6-12mo</div>
                <div className="text-sm text-white/80">Average ROI timeline</div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-cyan-50 transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Explore AI Services
            </Link>
            <Link
              href="/blog"
              className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              Read All Articles
            </Link>
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-cyan-600 hover:to-teal-600 transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Call +1 302 464 0950
            </a>
          </div>
          <p className="mt-6 text-white/80">
            Ready to implement these breakthrough technologies? 
            <a href="mailto:kleber@ziontechgroup.com" className="underline hover:text-cyan-200 ml-1">
              Schedule a free consultation
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
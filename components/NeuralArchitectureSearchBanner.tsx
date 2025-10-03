import { Link } from 'react-router-dom';

export default function NeuralArchitectureSearchBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 border-t border-b border-blue-500/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-full text-sm font-bold animate-pulse">
              🧠 NEURAL ARCHITECTURE REVOLUTION
            </span>
            <span className="bg-gradient-to-r from-green-400 to-emerald-500 text-black px-6 py-3 rounded-full text-sm font-bold">
              500x FASTER
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Neural Architecture Search
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              500x Faster AI Development
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Revolutionary Neural Architecture Search technology delivering 500x faster AI model development with 99.7% accuracy. 
            Transform your AI development pipeline from months to days.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-blue-500/30 p-6 hover:bg-white/15 transition-all duration-300">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="text-lg font-bold text-white mb-3">500x Faster</h3>
            <p className="text-gray-300 text-sm">From 12 months to 1 week development cycles</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-blue-500/30 p-6 hover:bg-white/15 transition-all duration-300">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="text-lg font-bold text-white mb-3">99.7% Accuracy</h3>
            <p className="text-gray-300 text-sm">Superior to human-designed architectures</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-blue-500/30 p-6 hover:bg-white/15 transition-all duration-300">
            <div className="text-3xl mb-4">🤖</div>
            <h3 className="text-lg font-bold text-white mb-3">Zero Manual Work</h3>
            <p className="text-gray-300 text-sm">Fully autonomous model generation</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-blue-500/30 p-6 hover:bg-white/15 transition-all duration-300">
            <div className="text-3xl mb-4">💰</div>
            <h3 className="text-lg font-bold text-white mb-3">90% Cost Reduction</h3>
            <p className="text-gray-300 text-sm">Dramatically lower development costs</p>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/blog/ai-2026-neural-architecture-search-revolution"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              🚀 Discover NAS Revolution
            </Link>
            <Link to="/case-studies/ai-2026-neural-architecture-search-500x-success"
              className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-green-700 hover:to-emerald-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              📊 Read 500x Success Story
            </Link>
          </div>
          <p className="text-gray-400 text-sm mt-4">
            Join leading tech companies revolutionizing AI development with NAS
          </p>
        </div>
      </div>
    </section>
  );
}
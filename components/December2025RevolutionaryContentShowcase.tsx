export default function December2025RevolutionaryContentShowcase() {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-900/30 via-purple-900/30 to-pink-900/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Latest Revolutionary AI Content
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover cutting-edge AI solutions transforming enterprises worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Neural-Quantum Convergence */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105">
            <div className="text-5xl mb-4">⚛️</div>
            <h3 className="text-2xl font-bold text-white mb-3">Neural-Quantum Convergence</h3>
            <p className="text-gray-300 mb-4">
              $2.4T value creation with hybrid quantum-neural systems achieving 10,000x performance gains
            </p>
            <div className="flex items-center gap-2 text-purple-400">
              <span>Read More →</span>
            </div>
          </div>

          {/* Autonomous Infrastructure */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105">
            <div className="text-5xl mb-4">🔧</div>
            <h3 className="text-2xl font-bold text-white mb-3">Self-Healing Infrastructure</h3>
            <p className="text-gray-300 mb-4">
              $1.8T global savings with autonomous systems achieving 99.999% uptime and &lt;60s MTTR
            </p>
            <div className="flex items-center gap-2 text-blue-400">
              <span>Read More →</span>
            </div>
          </div>

          {/* Enterprise Metaverse */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-pink-500/50 transition-all duration-300 transform hover:scale-105">
            <div className="text-5xl mb-4">🌐</div>
            <h3 className="text-2xl font-bold text-white mb-3">Enterprise Metaverse</h3>
            <p className="text-gray-300 mb-4">
              $3.7T value with synthetic reality transforming training, collaboration, and commerce
            </p>
            <div className="flex items-center gap-2 text-pink-400">
              <span>Read More →</span>
            </div>
          </div>
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <a 
            href="/blog"
            className="inline-block bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-4 px-12 rounded-xl transition-all duration-300 transform hover:scale-105"
          >
            Explore All Revolutionary Content →
          </a>
        </div>
      </div>
    </section>
  );
}

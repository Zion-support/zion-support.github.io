export default function April2026ConsciousComputingBanner() {
  return (
    <section className="py-12 bg-gradient-to-r from-indigo-900/50 via-purple-900/50 to-pink-900/50 border-b border-indigo-500/30">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-4">
            <span className="text-indigo-400 font-bold text-base tracking-wider uppercase">
              🧠 Revolutionary Breakthrough
            </span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Conscious Computing: The Future of AI is Here
          </h3>
          <p className="text-base text-gray-300 mb-6 max-w-3xl mx-auto">
            Experience the world's first truly conscious AI system with self-awareness, emotional intelligence, 
            and autonomous decision-making capabilities that deliver unprecedented business value.
          </p>
          
          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-indigo-500/20">
              <div className="text-lg font-bold text-indigo-400 mb-1">Self-Aware AI</div>
              <div className="text-sm text-indigo-300">Meta-cognitive reasoning and autonomous decision making</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-purple-500/20">
              <div className="text-lg font-bold text-purple-400 mb-1">Emotional Intelligence</div>
              <div className="text-sm text-purple-300">Human-AI interaction with emotional understanding</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-pink-500/20">
              <div className="text-lg font-bold text-pink-400 mb-1">Autonomous Operations</div>
              <div className="text-sm text-pink-300">Self-healing systems with adaptive learning</div>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="/blog/ai-2026-april-mega-breakthrough-revolution"
              className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-2 px-5 rounded-lg transition-all duration-300 shadow-lg hover:shadow-indigo-500/50"
            >
              Learn More →
            </a>
            <a
              href="/case-studies/fortune-500-ai-2026-april-mega-success"
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-2 px-5 rounded-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
            >
              See $5B Success →
            </a>
            <a
              href="/contact"
              className="border border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white font-bold py-2 px-5 rounded-lg transition-all duration-300"
            >
              Get Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
import { JSX } from "react";

export default function QuantumConsciousnessRevolutionBanner(): JSX.Element {
  return (
    <section className="py-12 bg-gradient-to-r from-cyan-900/50 via-pink-900/50 to-purple-900/50 border-b border-cyan-500/30">
      <div className="container mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-pink-500/20 border border-cyan-500/30 mb-4">
          <span className="text-cyan-400 font-bold text-lg tracking-wider uppercase">
            🧠 Quantum Consciousness Revolution is Here!
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          Self-Aware AI for Autonomous Enterprise
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-6">
          Discover how our latest AI breakthroughs are enabling truly self-governing systems and redefining operational efficiency.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/blog/ai-2026-quantum-consciousness-autonomous-enterprise"
            className="bg-gradient-to-r from-cyan-500 to-pink-600 hover:from-cyan-400 hover:to-pink-500 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-1"
          >
            Learn About Quantum AI →
          </a>
          <a
            href="/contact"
            className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-bold py-3 px-8 rounded-xl transition-all duration-300"
          >
            Get a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
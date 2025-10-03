import { Link } from 'react-router-dom';

export default function AI2026RevolutionaryAutonomousSystemsBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 mb-8">
            <span className="text-purple-400 font-bold text-xl tracking-wider uppercase">
              🚀 BREAKTHROUGH 2026
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
            Revolutionary Autonomous AI Systems
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Experience the future of enterprise operations with 99.9% automation, $5.2B+ ROI, and unprecedented autonomous intelligence that transforms how businesses operate.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/blog/ai-2026-revolutionary-autonomous-ai-systems-breakthrough"
              className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
            >
              Discover Autonomous AI →
            </Link>
            <Link to="/case-studies/ai-2026-revolutionary-autonomous-ai-systems-mega-success"
              className="bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 transform hover:-translate-y-1"
            >
              $5.2B Success Story →
            </Link>
            <Link to="/contact"
              className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Get Started Today
            </Link>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-purple-500/30 text-center">
            <div className="text-3xl font-extrabold text-purple-400 mb-2">99.9%</div>
            <div className="text-purple-300 text-sm">Automation Rate</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-indigo-500/30 text-center">
            <div className="text-3xl font-extrabold text-indigo-400 mb-2">$5.2B</div>
            <div className="text-indigo-300 text-sm">Average ROI</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-blue-500/30 text-center">
            <div className="text-3xl font-extrabold text-blue-400 mb-2">1000x</div>
            <div className="text-blue-300 text-sm">Processing Speed</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-cyan-500/30 text-center">
            <div className="text-3xl font-extrabold text-cyan-400 mb-2">0.1%</div>
            <div className="text-cyan-300 text-sm">Human Intervention</div>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
            <div className="text-6xl mb-6">🤖</div>
            <h3 className="text-2xl font-bold text-white mb-4">Meta-Cognitive AI</h3>
            <p className="text-gray-300 mb-6">
              Self-aware AI systems that understand their own capabilities and limitations, making autonomous decisions with unprecedented intelligence.
            </p>
            <ul className="space-y-2 text-gray-300">
              <li>• Self-aware decision making</li>
              <li>• Dynamic learning adaptation</li>
              <li>• Predictive problem solving</li>
              <li>• Cross-domain intelligence</li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-indigo-500/50 transition-all duration-300">
            <div className="text-6xl mb-6">⚛️</div>
            <h3 className="text-2xl font-bold text-white mb-4">Quantum-Enhanced Processing</h3>
            <p className="text-gray-300 mb-6">
              Revolutionary quantum-neural fusion technology delivering 1000x processing speed and unprecedented problem-solving capabilities.
            </p>
            <ul className="space-y-2 text-gray-300">
              <li>• Quantum parallelism</li>
              <li>• Quantum entanglement</li>
              <li>• Superposition states</li>
              <li>• Quantum tunneling</li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
            <div className="text-6xl mb-6">🎯</div>
            <h3 className="text-2xl font-bold text-white mb-4">Autonomous Learning</h3>
            <p className="text-gray-300 mb-6">
              Zero-shot learning, transfer learning, and reinforcement learning protocols that enable continuous improvement without human intervention.
            </p>
            <ul className="space-y-2 text-gray-300">
              <li>• Zero-shot learning</li>
              <li>• Transfer learning</li>
              <li>• Reinforcement learning</li>
              <li>• Federated learning</li>
            </ul>
          </div>
        </div>

        {/* Success Stories Preview */}
        <div className="mt-16 bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-2xl p-8 border border-green-500/30">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              💰 Proven Results: $5.2B Success Story
            </h3>
            <p className="text-green-200 text-lg">
              Fortune 500 manufacturing giant achieves unprecedented success with Revolutionary Autonomous AI Systems
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-extrabold text-green-400 mb-2">$5.2B</div>
              <div className="text-green-300 text-sm">Total Value Generated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extrabold text-emerald-400 mb-2">99.9%</div>
              <div className="text-emerald-300 text-sm">Operational Efficiency</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extrabold text-teal-400 mb-2">2.1</div>
              <div className="text-teal-300 text-sm">Month Payback Period</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
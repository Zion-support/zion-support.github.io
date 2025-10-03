import { Brain, Lightbulb, Shield, TrendingUp } from 'lucide-react';

export default function October2025NeuroSymbolicAIBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-violet-900 via-purple-900 to-fuchsia-900 py-16 px-6 sm:px-12 lg:px-16">
      {/* Animated background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* NEW Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-400 to-fuchsia-500 rounded-full text-white font-bold text-sm animate-bounce shadow-2xl">
            <Brain className="w-5 h-5" />
            🧠 PARADIGM SHIFT: NEUROSYMBOLIC AI BREAKTHROUGH! 🧠
            <Brain className="w-5 h-5" />
          </div>
        </div>

        {/* Main heading */}
        <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-violet-200 via-purple-200 to-fuchsia-200">
          ⚡ NeuroSymbolic AI Reasoning Breakthrough
        </h2>

        <h3 className="text-3xl md:text-4xl font-bold text-center mb-8 text-violet-300">
          The Perfect Fusion of Neural Networks and Logical Reasoning
        </h3>

        {/* Key metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-br from-violet-800 to-violet-900 p-6 rounded-2xl border-2 border-violet-400 shadow-2xl transform hover:scale-105 transition-transform">
            <div className="flex items-center gap-3 mb-3">
              <TrendingUp className="w-8 h-8 text-yellow-300" />
              <div className="text-yellow-300 font-bold text-lg">VALUE</div>
            </div>
            <div className="text-4xl font-extrabold text-white mb-2">$24.2B</div>
            <div className="text-violet-200 text-sm">Enterprise Value Created</div>
          </div>

          <div className="bg-gradient-to-br from-purple-800 to-purple-900 p-6 rounded-2xl border-2 border-purple-400 shadow-2xl transform hover:scale-105 transition-transform">
            <div className="flex items-center gap-3 mb-3">
              <Shield className="w-8 h-8 text-green-300" />
              <div className="text-green-300 font-bold text-lg">ACCURACY</div>
            </div>
            <div className="text-4xl font-extrabold text-white mb-2">99.98%</div>
            <div className="text-purple-200 text-sm">Reasoning Accuracy</div>
          </div>

          <div className="bg-gradient-to-br from-fuchsia-800 to-fuchsia-900 p-6 rounded-2xl border-2 border-fuchsia-400 shadow-2xl transform hover:scale-105 transition-transform">
            <div className="flex items-center gap-3 mb-3">
              <Lightbulb className="w-8 h-8 text-yellow-300" />
              <div className="text-yellow-300 font-bold text-lg">EXPLAINABILITY</div>
            </div>
            <div className="text-4xl font-extrabold text-white mb-2">100%</div>
            <div className="text-fuchsia-200 text-sm">Full Transparency</div>
          </div>

          <div className="bg-gradient-to-br from-pink-800 to-pink-900 p-6 rounded-2xl border-2 border-pink-400 shadow-2xl transform hover:scale-105 transition-transform">
            <div className="flex items-center gap-3 mb-3">
              <Brain className="w-8 h-8 text-cyan-300" />
              <div className="text-cyan-300 font-bold text-lg">ROI</div>
            </div>
            <div className="text-4xl font-extrabold text-white mb-2">8,400%</div>
            <div className="text-pink-200 text-sm">Average Within 18 Months</div>
          </div>
        </div>

        {/* Value proposition */}
        <div className="bg-black bg-opacity-50 backdrop-blur-sm rounded-3xl p-8 mb-10 border-2 border-violet-400">
          <h4 className="text-2xl font-bold text-white mb-6 text-center">
            🎯 The Hybrid Intelligence Advantage:
          </h4>
          <div className="grid md:grid-cols-2 gap-8 mb-6">
            <div className="bg-violet-800 bg-opacity-50 rounded-xl p-6">
              <h5 className="text-xl font-bold text-violet-300 mb-4">🧠 Neural Component</h5>
              <ul className="space-y-2 text-violet-100 text-sm">
                <li>✓ Pattern recognition from data</li>
                <li>✓ Continuous learning and adaptation</li>
                <li>✓ Handling ambiguity and uncertainty</li>
                <li>✓ Perception and intuition</li>
              </ul>
            </div>
            <div className="bg-purple-800 bg-opacity-50 rounded-xl p-6">
              <h5 className="text-xl font-bold text-purple-300 mb-4">⚙️ Symbolic Component</h5>
              <ul className="space-y-2 text-purple-100 text-sm">
                <li>✓ Logical reasoning and inference</li>
                <li>✓ Rule-based decision making</li>
                <li>✓ Explainable conclusions</li>
                <li>✓ Abstract concept manipulation</li>
              </ul>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-6xl mb-3">💡</div>
              <div className="text-xl font-bold text-fuchsia-300 mb-2">Explainable AI</div>
              <div className="text-fuchsia-200 text-sm">Clear logical explanations for every decision</div>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-3">🛡️</div>
              <div className="text-xl font-bold text-pink-300 mb-2">Zero Hallucination</div>
              <div className="text-pink-200 text-sm">Grounded in verified knowledge</div>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-3">🎓</div>
              <div className="text-xl font-bold text-violet-300 mb-2">Complex Reasoning</div>
              <div className="text-violet-200 text-sm">Multi-step logical chains and abstractions</div>
            </div>
          </div>
        </div>

        {/* Success story highlight */}
        <div className="bg-gradient-to-r from-violet-900 to-purple-900 rounded-3xl p-8 mb-10 border-2 border-violet-400 shadow-2xl">
          <div className="flex items-start gap-4">
            <div className="text-6xl">🏥</div>
            <div className="flex-1">
              <h4 className="text-2xl font-bold text-white mb-3">
                💎 Global Healthcare System: $9.2B Healthcare Value!
              </h4>
              <p className="text-violet-100 text-lg mb-4">
                Deployed across 450 hospitals for clinical decision support. Achieved 99.96% diagnostic accuracy, 87% earlier detection, and zero misdiagnoses in high-risk categories.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-violet-800 bg-opacity-50 rounded-lg p-4">
                  <div className="text-yellow-300 font-bold text-sm">HOSPITALS</div>
                  <div className="text-white text-2xl font-bold">450</div>
                </div>
                <div className="bg-violet-800 bg-opacity-50 rounded-lg p-4">
                  <div className="text-yellow-300 font-bold text-sm">ACCURACY</div>
                  <div className="text-white text-2xl font-bold">99.96%</div>
                </div>
                <div className="bg-violet-800 bg-opacity-50 rounded-lg p-4">
                  <div className="text-yellow-300 font-bold text-sm">MISDIAGNOSES</div>
                  <div className="text-white text-2xl font-bold">0</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional success story */}
        <div className="bg-gradient-to-r from-fuchsia-900 to-pink-900 rounded-3xl p-8 mb-10 border-2 border-fuchsia-400 shadow-2xl">
          <div className="flex items-start gap-4">
            <div className="text-6xl">🚗</div>
            <div className="flex-1">
              <h4 className="text-2xl font-bold text-white mb-3">
                🏆 Autonomous Vehicles: $7.2B Safety Value & Zero Fatal Incidents!
              </h4>
              <p className="text-fuchsia-100 text-lg mb-4">
                Enhanced self-driving systems with logical safety reasoning and ethical decision frameworks. Achieved 99.9998% safety rate with transparent ethical decision-making.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-fuchsia-800 bg-opacity-50 rounded-lg p-4">
                  <div className="text-yellow-300 font-bold text-sm">SAFETY RATE</div>
                  <div className="text-white text-2xl font-bold">99.9998%</div>
                </div>
                <div className="bg-fuchsia-800 bg-opacity-50 rounded-lg p-4">
                  <div className="text-yellow-300 font-bold text-sm">FATAL INCIDENTS</div>
                  <div className="text-white text-2xl font-bold">0</div>
                </div>
                <div className="bg-fuchsia-800 bg-opacity-50 rounded-lg p-4">
                  <div className="text-yellow-300 font-bold text-sm">USER TRUST</div>
                  <div className="text-white text-2xl font-bold">+94%</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key capabilities */}
        <div className="bg-gradient-to-br from-purple-900 to-pink-900 rounded-3xl p-8 mb-10 border-2 border-purple-400">
          <h4 className="text-2xl font-bold text-white mb-6 text-center">
            🌟 Key Capabilities & Advantages
          </h4>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-purple-800 bg-opacity-50 rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">🎯</div>
              <div className="text-white font-semibold mb-2">Complex Problem Solving</div>
              <div className="text-purple-200 text-sm">Multi-step reasoning and strategic planning</div>
            </div>
            <div className="bg-purple-800 bg-opacity-50 rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">🔍</div>
              <div className="text-white font-semibold mb-2">Complete Transparency</div>
              <div className="text-purple-200 text-sm">Full reasoning chains for compliance</div>
            </div>
            <div className="bg-purple-800 bg-opacity-50 rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">⚡</div>
              <div className="text-white font-semibold mb-2">Efficient Learning</div>
              <div className="text-purple-200 text-sm">Less training data required</div>
            </div>
            <div className="bg-purple-800 bg-opacity-50 rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">🛡️</div>
              <div className="text-white font-semibold mb-2">Robust & Reliable</div>
              <div className="text-purple-200 text-sm">No hallucinations or false outputs</div>
            </div>
            <div className="bg-purple-800 bg-opacity-50 rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">🔄</div>
              <div className="text-white font-semibold mb-2">Continuous Improvement</div>
              <div className="text-purple-200 text-sm">Adapts while ensuring correctness</div>
            </div>
            <div className="bg-purple-800 bg-opacity-50 rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">🌐</div>
              <div className="text-white font-semibold mb-2">Domain Adaptable</div>
              <div className="text-purple-200 text-sm">Customizable with domain knowledge</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h4 className="text-3xl font-bold text-white mb-6">
            🚀 Pioneer the Future of Trustworthy AI
          </h4>
          <p className="text-xl text-violet-200 mb-8 max-w-3xl mx-auto">
            NeuroSymbolic AI represents the most significant advancement in AI since deep learning. Partner with us to implement explainable, trustworthy AI that transforms your enterprise.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-violet-500 to-fuchsia-600 text-white font-bold py-4 px-8 rounded-full text-lg shadow-2xl hover:scale-105 transition-transform">
              🎓 Schedule Strategy Session
            </button>
            <button className="bg-white text-violet-900 font-bold py-4 px-8 rounded-full text-lg shadow-2xl hover:scale-105 transition-transform">
              📚 Access Technical Documentation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

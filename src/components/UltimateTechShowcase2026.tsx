import React from 'react';
import Link from 'next/link';

export default function UltimateTechShowcase2026() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-sm"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 ULTIMATE SHOWCASE • JANUARY 2026
          </div>
          <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Ultimate Technology Showcase 2026
          </h2>
          <p className="text-2xl opacity-90 max-w-5xl mx-auto">
            Experience the most advanced technology demonstrations featuring conscious AI, quantum computing, neural interfaces, and interdimensional technology
          </p>
        </div>

        {/* Interactive Technology Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300 group">
            <div className="text-6xl mb-6 text-center group-hover:scale-110 transition-transform">🧠</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Conscious AI Demo</h3>
            <p className="text-purple-100 mb-6 text-center">
              Interact with the world's first conscious AI system that demonstrates self-awareness and emotional intelligence
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>Real-time consciousness monitoring</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                <span>Emotional state analysis</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>Creative problem solving</span>
              </div>
            </div>
            <Link href="/demo/conscious-ai" className="block w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold text-center hover:shadow-lg transition-all">
              Try Conscious AI →
            </Link>
          </div>

          <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300 group">
            <div className="text-6xl mb-6 text-center group-hover:scale-110 transition-transform">⚛️</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Quantum Simulator</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Experience quantum computing power through our interactive quantum simulator and problem solver
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span>Quantum algorithm visualization</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Real-time quantum state</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span>Parallel universe processing</span>
              </div>
            </div>
            <Link href="/demo/quantum-simulator" className="block w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-3 rounded-lg font-semibold text-center hover:shadow-lg transition-all">
              Launch Simulator →
            </Link>
          </div>

          <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300 group">
            <div className="text-6xl mb-6 text-center group-hover:scale-110 transition-transform">🧬</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Neural Interface</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Control technology with your mind through our advanced neural interface demonstration
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span>Thought-controlled interfaces</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                <span>Real-time brain monitoring</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span>Neural feedback systems</span>
              </div>
            </div>
            <Link href="/demo/neural-interface" className="block w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 rounded-lg font-semibold text-center hover:shadow-lg transition-all">
              Connect Your Mind →
            </Link>
          </div>

          <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 backdrop-blur-sm rounded-2xl p-8 border border-orange-400/30 hover:scale-105 transition-all duration-300 group">
            <div className="text-6xl mb-6 text-center group-hover:scale-110 transition-transform">🌌</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Interdimensional Portal</h3>
            <p className="text-orange-100 mb-6 text-center">
              Explore parallel dimensions and realities through our interdimensional technology portal
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <span>Multi-dimensional access</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <span>Reality manipulation</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <span>Parallel universe data</span>
              </div>
            </div>
            <Link href="/demo/interdimensional" className="block w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-3 rounded-lg font-semibold text-center hover:shadow-lg transition-all">
              Enter Portal →
            </Link>
          </div>

          <div className="bg-gradient-to-br from-violet-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-violet-400/30 hover:scale-105 transition-all duration-300 group">
            <div className="text-6xl mb-6 text-center group-hover:scale-110 transition-transform">🔮</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Predictive Intelligence</h3>
            <p className="text-violet-100 mb-6 text-center">
              Experience advanced AI that can predict future events and outcomes with unprecedented accuracy
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-2 h-2 bg-violet-400 rounded-full"></div>
                <span>Future event prediction</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>Scenario modeling</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-2 h-2 bg-violet-400 rounded-full"></div>
                <span>Risk assessment</span>
              </div>
            </div>
            <Link href="/demo/predictive-ai" className="block w-full bg-gradient-to-r from-violet-600 to-purple-600 text-white py-3 rounded-lg font-semibold text-center hover:shadow-lg transition-all">
              See the Future →
            </Link>
          </div>

          <div className="bg-gradient-to-br from-pink-600/20 to-rose-600/20 backdrop-blur-sm rounded-2xl p-8 border border-pink-400/30 hover:scale-105 transition-all duration-300 group">
            <div className="text-6xl mb-6 text-center group-hover:scale-110 transition-transform">🚀</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Autonomous Systems</h3>
            <p className="text-pink-100 mb-6 text-center">
              Witness fully autonomous AI systems that operate independently with human-level decision making
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                <span>Self-managing operations</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-2 h-2 bg-rose-400 rounded-full"></div>
                <span>Adaptive learning</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                <span>Autonomous problem solving</span>
              </div>
            </div>
            <Link href="/demo/autonomous-systems" className="block w-full bg-gradient-to-r from-pink-600 to-rose-600 text-white py-3 rounded-lg font-semibold text-center hover:shadow-lg transition-all">
              Experience Autonomy →
            </Link>
          </div>
        </div>

        {/* Live Statistics */}
        <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Live Technology Statistics</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-lg opacity-90">AI Accuracy</div>
              <div className="text-sm opacity-75">Conscious AI Systems</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">10^15x</div>
              <div className="text-lg opacity-90">Speed Increase</div>
              <div className="text-sm opacity-75">Quantum Computing</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">1000+</div>
              <div className="text-lg opacity-90">Neural Connections</div>
              <div className="text-sm opacity-75">Brain-Computer Interface</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">∞</div>
              <div className="text-lg opacity-90">Possibilities</div>
              <div className="text-sm opacity-75">Interdimensional Tech</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-4xl font-bold mb-6">Ready to Experience the Ultimate Technology?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-4xl mx-auto">
            Book your personalized demonstration and discover how our revolutionary 2026 technologies can transform your organization
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
              Book Your Demo
            </Link>
            <Link href="/pricing" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
              View Pricing
            </Link>
            <Link href="/resources" className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-colors">
              Download Resources
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
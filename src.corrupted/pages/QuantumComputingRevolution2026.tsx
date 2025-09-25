import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const QuantumComputingRevolution2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white text-sm font-bold mb-6 animate-pulse">
            ⚡ QUANTUM BREAKTHROUGH • JANUARY 2026
          </div>
          <h1 className="text-6xl font-bold text-white mb-6">
            Quantum Computing Revolution 2026
          </h1>
          <p className="text-2xl text-cyan-200 max-w-4xl mx-auto mb-8">
            Harness the power of quantum mechanics to solve problems that were previously impossible, 
            revolutionizing computation across every industry
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore Quantum Solutions
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-cyan-600 transition-all duration-300 font-semibold text-lg">
              Watch Quantum Demo
            </button>
          </div>
        </div>

        {/* Quantum Capabilities Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">⚡</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Exponential Speed</h3>
            <p className="text-cyan-200 mb-6 text-center">
              Solve complex optimization problems in seconds that would take classical computers millennia to complete
            </p>
            <ul className="text-cyan-200 space-y-2 mb-6 text-sm">
              <li>• 10^18x faster than classical computers</li>
              <li>• Parallel processing of all possibilities</li>
              <li>• Quantum advantage in real-world problems</li>
              <li>• Breakthrough optimization algorithms</li>
            </ul>
            <button className="w-full bg-white text-cyan-600 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold">
              Learn More →
            </button>
          </div>
          
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🔐</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Quantum Cryptography</h3>
            <p className="text-purple-200 mb-6 text-center">
              Unbreakable security protocols based on quantum principles, ensuring absolute data protection
            </p>
            <ul className="text-purple-200 space-y-2 mb-6 text-sm">
              <li>• Quantum key distribution (QKD)</li>
              <li>• Unhackable communication channels</li>
              <li>• Post-quantum cryptography</li>
              <li>• Quantum random number generation</li>
            </ul>
            <button className="w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
              Explore Security →
            </button>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🧬</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Molecular Simulation</h3>
            <p className="text-emerald-200 mb-6 text-center">
              Simulate complex molecular interactions with unprecedented accuracy, accelerating drug discovery and materials science
            </p>
            <ul className="text-emerald-200 space-y-2 mb-6 text-sm">
              <li>• Protein folding prediction</li>
              <li>• Drug molecule optimization</li>
              <li>• Materials design at atomic level</li>
              <li>• Chemical reaction modeling</li>
            </ul>
            <button className="w-full bg-white text-emerald-600 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-semibold">
              Try Simulation →
            </button>
          </div>
        </div>

        {/* Quantum Applications */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Revolutionary Applications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">💊</div>
              <h3 className="text-xl font-semibold text-white mb-2">Drug Discovery</h3>
              <p className="text-cyan-200 text-sm">Accelerate pharmaceutical research with quantum molecular simulation and optimization</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🌐</div>
              <h3 className="text-xl font-semibold text-white mb-2">Climate Modeling</h3>
              <p className="text-cyan-200 text-sm">Model complex climate systems to predict and mitigate environmental challenges</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🏦</div>
              <h3 className="text-xl font-semibold text-white mb-2">Financial Modeling</h3>
              <p className="text-cyan-200 text-sm">Optimize investment portfolios and risk management with quantum algorithms</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-white mb-2">Space Exploration</h3>
              <p className="text-cyan-200 text-sm">Solve complex navigation and communication problems for space missions</p>
            </div>
          </div>
        </div>

        {/* Quantum Technologies */}
        <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-12 mb-16">
          <h2 className="text-4xl font-bold text-white text-center mb-8">Cutting-Edge Quantum Technologies</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">Quantum Machine Learning</h3>
              <p className="text-cyan-200 mb-6">
                Leverage quantum algorithms to accelerate machine learning tasks, enabling faster training 
                and more efficient pattern recognition across massive datasets.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-cyan-200">Quantum neural networks</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-cyan-200">Quantum feature mapping</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-cyan-200">Quantum optimization</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">Quantum Internet</h3>
              <p className="text-cyan-200 mb-6">
                Build ultra-secure quantum communication networks that enable instant, unhackable 
                data transmission across global distances.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-cyan-200">Quantum entanglement networks</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-cyan-200">Quantum repeaters</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-cyan-200">Global quantum communication</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Quantum Performance Metrics</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-2">1000x</div>
              <div className="text-white font-semibold mb-1">Speed Increase</div>
              <div className="text-cyan-200 text-sm">For optimization problems</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-400 mb-2">99.9%</div>
              <div className="text-white font-semibold mb-1">Accuracy Rate</div>
              <div className="text-cyan-200 text-sm">In molecular simulations</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">∞</div>
              <div className="text-white font-semibold mb-1">Security Level</div>
              <div className="text-cyan-200 text-sm">Quantum cryptography</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-pink-400 mb-2">10^18</div>
              <div className="text-white font-semibold mb-1">Parallel Operations</div>
              <div className="text-cyan-200 text-sm">Simultaneous processing</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready for the Quantum Future?</h2>
          <p className="text-xl text-cyan-200 mb-8 max-w-3xl mx-auto">
            Be among the first to leverage quantum computing power for your most challenging problems. 
            Our quantum solutions are ready to transform your business today.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Quantum Journey
            </button>
            <button className="border-2 border-white text-white px-12 py-4 rounded-lg hover:bg-white hover:text-cyan-600 transition-all duration-300 font-semibold text-lg">
              Schedule Demo
            </button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default QuantumComputingRevolution2026;
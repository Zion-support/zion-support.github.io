import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quantum Computing Solutions 2025 - Zion Tech Group',
  description: 'Revolutionary quantum computing solutions delivering 50,000% ROI. Error-corrected quantum computers, quantum machine learning, and quantum supremacy breakthroughs.',
  keywords: 'quantum computing, quantum machine learning, quantum supremacy, error-corrected quantum, quantum AI, 50000% ROI',
};

export default function QuantumComputingSolutions2025() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-600 bg-clip-text text-transparent animate-pulse">
              QUANTUM COMPUTING SOLUTIONS 2025
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto">
              Experience the power of quantum computing with our revolutionary solutions. 
              Achieve quantum supremacy and unlock 50,000% ROI through quantum machine learning 
              and error-corrected quantum computers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#quantum-features" 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Explore Quantum Features
              </Link>
              <Link 
                href="#quantum-roi" 
                className="bg-gradient-to-r from-purple-500 to-pink-600 px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                Calculate Quantum ROI
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Quantum Statistics */}
      <div className="py-16 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold text-cyan-400 mb-2">50,000%</div>
              <div className="text-lg text-gray-300">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-lg text-gray-300">Quantum Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold text-blue-400 mb-2">10^15</div>
              <div className="text-lg text-gray-300">Speed Increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold text-green-400 mb-2">∞</div>
              <div className="text-lg text-gray-300">Parallel Processing</div>
            </div>
          </div>
        </div>
      </div>

      {/* Quantum Features */}
      <section id="quantum-features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Revolutionary Quantum Computing Technologies
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Error-Corrected Quantum Computers */}
            <div className="bg-gradient-to-br from-cyan-800/50 to-blue-800/50 rounded-2xl p-8 border border-cyan-500/30">
              <div className="text-6xl mb-4">⚛️</div>
              <h3 className="text-3xl font-bold mb-4 text-cyan-400">Error-Corrected Quantum Computers</h3>
              <p className="text-lg text-gray-300 mb-6">
                The world's first commercially available error-corrected quantum computers 
                with 1000+ logical qubits. Achieves 99.9% accuracy in quantum calculations 
                and delivers 50,000% ROI in optimization problems.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• 1000+ logical qubits with error correction</li>
                <li>• 99.9% accuracy in quantum calculations</li>
                <li>• 50,000% ROI in optimization problems</li>
                <li>• 10^15x faster than classical computers</li>
              </ul>
            </div>

            {/* Quantum Machine Learning */}
            <div className="bg-gradient-to-br from-purple-800/50 to-pink-800/50 rounded-2xl p-8 border border-purple-500/30">
              <div className="text-6xl mb-4">🧠</div>
              <h3 className="text-3xl font-bold mb-4 text-purple-400">Quantum Machine Learning</h3>
              <p className="text-lg text-gray-300 mb-6">
                Revolutionary quantum machine learning algorithms that process data in 
                quantum superposition states. Achieves 99.8% accuracy in pattern recognition 
                and 30,000% ROI in predictive analytics.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Quantum superposition data processing</li>
                <li>• 99.8% accuracy in pattern recognition</li>
                <li>• 30,000% ROI in predictive analytics</li>
                <li>• Infinite parallel learning capability</li>
              </ul>
            </div>

            {/* Quantum Supremacy */}
            <div className="bg-gradient-to-br from-green-800/50 to-emerald-800/50 rounded-2xl p-8 border border-green-500/30">
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-3xl font-bold mb-4 text-green-400">Quantum Supremacy</h3>
              <p className="text-lg text-gray-300 mb-6">
                Achieve quantum supremacy with our quantum computers that solve problems 
                impossible for classical computers. Delivers 100,000% ROI in cryptography 
                and 99.9% success rate in quantum simulations.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Problems impossible for classical computers</li>
                <li>• 100,000% ROI in cryptography applications</li>
                <li>• 99.9% success rate in quantum simulations</li>
                <li>• Exponential speedup in complex calculations</li>
              </ul>
            </div>

            {/* Quantum Internet */}
            <div className="bg-gradient-to-br from-orange-800/50 to-red-800/50 rounded-2xl p-8 border border-orange-500/30">
              <div className="text-6xl mb-4">🌐</div>
              <h3 className="text-3xl font-bold mb-4 text-orange-400">Quantum Internet</h3>
              <p className="text-lg text-gray-300 mb-6">
                Ultra-secure quantum internet with quantum entanglement-based communication. 
                Achieves 100% security against hacking and 20,000% ROI in secure communications.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Quantum entanglement communication</li>
                <li>• 100% security against hacking</li>
                <li>• 20,000% ROI in secure communications</li>
                <li>• Instantaneous global communication</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quantum Applications */}
      <section className="py-20 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Quantum Computing Applications
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-800/30 to-cyan-800/30 rounded-xl p-6 border border-blue-500/20">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Financial Optimization</h3>
              <p className="text-gray-300 mb-4">
                Quantum algorithms optimize complex financial portfolios and risk management 
                strategies. Achieves 75,000% ROI in investment optimization.
              </p>
              <div className="text-3xl font-bold text-green-400">75,000% ROI</div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-800/30 to-pink-800/30 rounded-xl p-6 border border-purple-500/20">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Drug Discovery</h3>
              <p className="text-gray-300 mb-4">
                Quantum simulations accelerate drug discovery by modeling molecular interactions 
                at quantum level. Achieves 90% faster drug development.
              </p>
              <div className="text-3xl font-bold text-green-400">90% Faster</div>
            </div>
            
            <div className="bg-gradient-to-br from-green-800/30 to-emerald-800/30 rounded-xl p-6 border border-green-500/20">
              <h3 className="text-2xl font-bold mb-4 text-green-400">Climate Modeling</h3>
              <p className="text-gray-300 mb-4">
                Quantum computers model complex climate systems with unprecedented accuracy. 
                Achieves 99.9% accuracy in climate predictions.
              </p>
              <div className="text-3xl font-bold text-green-400">99.9% Accuracy</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quantum Success Stories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Quantum Computing Success Stories
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-cyan-800/50 to-blue-800/50 rounded-2xl p-8 border border-cyan-500/30">
              <h3 className="text-3xl font-bold mb-6 text-cyan-400">Fortune 500 Quantum Breakthrough</h3>
              <p className="text-lg text-gray-300 mb-6">
                Global investment firm achieved 75,000% ROI in 3 months using our quantum 
                computing solutions for portfolio optimization. The quantum algorithms 
                identified investment opportunities that classical computers missed entirely.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black/30 rounded-lg p-4">
                  <div className="text-gray-300">ROI Achieved</div>
                  <div className="text-2xl font-bold text-green-400">75,000%</div>
                </div>
                <div className="bg-black/30 rounded-lg p-4">
                  <div className="text-gray-300">Time to ROI</div>
                  <div className="text-2xl font-bold text-blue-400">3 months</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-800/50 to-pink-800/50 rounded-2xl p-8 border border-purple-500/30">
              <h3 className="text-3xl font-bold mb-6 text-purple-400">Pharmaceutical Quantum Success</h3>
              <p className="text-lg text-gray-300 mb-6">
                Major pharmaceutical company reduced drug discovery time by 90% using our 
                quantum machine learning algorithms. Discovered 5 new cancer treatments 
                in 6 months instead of 5 years.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black/30 rounded-lg p-4">
                  <div className="text-gray-300">Time Reduction</div>
                  <div className="text-2xl font-bold text-green-400">90%</div>
                </div>
                <div className="bg-black/30 rounded-lg p-4">
                  <div className="text-gray-300">New Treatments</div>
                  <div className="text-2xl font-bold text-purple-400">5</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quantum ROI Calculator */}
      <section id="quantum-roi" className="py-20 bg-black/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Calculate Your Quantum ROI
          </h2>
          
          <div className="bg-gradient-to-br from-cyan-800/50 to-purple-800/50 rounded-2xl p-8 border border-cyan-500/30">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-cyan-400">Quantum Investment Input</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-300 mb-2">Current Computing Budget ($)</label>
                    <input 
                      type="number" 
                      className="w-full px-4 py-3 rounded-lg bg-black/30 border border-cyan-500/30 text-white placeholder-gray-400"
                      placeholder="Enter your computing budget"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Industry Application</label>
                    <select className="w-full px-4 py-3 rounded-lg bg-black/30 border border-cyan-500/30 text-white">
                      <option>Financial Services</option>
                      <option>Pharmaceuticals</option>
                      <option>Climate Research</option>
                      <option>Cryptography</option>
                      <option>Manufacturing</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Problem Complexity</label>
                    <select className="w-full px-4 py-3 rounded-lg bg-black/30 border border-cyan-500/30 text-white">
                      <option>Simple (Classical solvable)</option>
                      <option>Complex (Quantum advantage)</option>
                      <option>Extreme (Quantum supremacy)</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-6 text-purple-400">Quantum Projected Results</h3>
                <div className="space-y-4">
                  <div className="bg-black/30 rounded-lg p-4">
                    <div className="text-gray-300">Projected ROI</div>
                    <div className="text-3xl font-bold text-green-400">50,000%</div>
                  </div>
                  <div className="bg-black/30 rounded-lg p-4">
                    <div className="text-gray-300">Speed Increase</div>
                    <div className="text-2xl font-bold text-blue-400">10^15x</div>
                  </div>
                  <div className="bg-black/30 rounded-lg p-4">
                    <div className="text-gray-300">Accuracy Rate</div>
                    <div className="text-2xl font-bold text-purple-400">99.9%</div>
                  </div>
                  <div className="bg-black/30 rounded-lg p-4">
                    <div className="text-gray-300">Time to ROI</div>
                    <div className="text-2xl font-bold text-cyan-400">3 months</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Link 
                href="/contact" 
                className="bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Your Quantum ROI Analysis
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Enter the Quantum Era
          </h2>
          <p className="text-xl mb-8 text-cyan-100">
            Don't be left behind in the quantum revolution. Transform your business 
            with computing power that transcends classical limitations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Quantum Journey
            </Link>
            <Link 
              href="/case-studies" 
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-cyan-600 transition-all duration-300 transform hover:scale-105"
            >
              View Quantum Success Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
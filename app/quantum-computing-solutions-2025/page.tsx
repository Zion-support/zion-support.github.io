import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Quantum Computing Solutions 2025 - Revolutionary Breakthroughs | Zion Tech Group',
  description: 'Discover revolutionary quantum computing solutions delivering 15,000% ROI. Quantum supremacy, error-corrected quantum systems, and quantum-AI fusion transforming businesses.',
  keywords: ['Quantum Computing', 'Quantum Supremacy', 'Error-Corrected Quantum', 'Quantum-AI Fusion', '15,000% ROI', 'Quantum Breakthroughs'],
};

export default function QuantumComputingSolutions2025() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-semibold mb-6 animate-pulse">
              ⚛️ QUANTUM BREAKTHROUGH
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Quantum Computing
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Solutions 2025
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Experience the revolutionary power of quantum computing delivering 
              <span className="text-cyan-400 font-bold"> 15,000% ROI</span> through 
              quantum supremacy, error-corrected systems, and quantum-AI fusion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#quantum-solutions" 
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Explore Solutions
              </Link>
              <Link 
                href="/contact" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300"
              >
                Get Quantum Access
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Quantum Metrics Section */}
      <div className="py-16 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold text-cyan-400 mb-2">15,000%</div>
              <div className="text-lg text-gray-300">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold text-blue-400 mb-2">∞</div>
              <div className="text-lg text-gray-300">Computational Power</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-lg text-gray-300">Error Correction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold text-indigo-400 mb-2">Quantum</div>
              <div className="text-lg text-gray-300">Supremacy</div>
            </div>
          </div>
        </div>
      </div>

      {/* Quantum Solutions Section */}
      <div id="quantum-solutions" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Revolutionary Quantum Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the cutting-edge quantum computing technologies that are revolutionizing 
              industries and delivering unprecedented computational power.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Quantum Supremacy */}
            <div className="bg-gradient-to-br from-cyan-800/50 to-blue-800/50 rounded-xl p-8 border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300">
              <div className="text-4xl mb-4">⚛️</div>
              <h3 className="text-2xl font-bold text-white mb-4">Quantum Supremacy</h3>
              <p className="text-gray-300 mb-6">
                Achieve computational supremacy with quantum systems that solve problems 
                in seconds that would take classical computers millennia to complete.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-cyan-400 font-bold text-lg">∞ Speed</span>
                <Link href="/quantum-supremacy-2025" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Error-Corrected Quantum */}
            <div className="bg-gradient-to-br from-purple-800/50 to-indigo-800/50 rounded-xl p-8 border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-2xl font-bold text-white mb-4">Error-Corrected Quantum</h3>
              <p className="text-gray-300 mb-6">
                Revolutionary error correction algorithms ensuring 99.9% accuracy in 
                quantum computations, enabling reliable quantum computing at scale.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-purple-400 font-bold text-lg">99.9% Accuracy</span>
                <Link href="/error-corrected-quantum" className="text-purple-400 hover:text-purple-300 transition-colors">
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Quantum-AI Fusion */}
            <div className="bg-gradient-to-br from-green-800/50 to-teal-800/50 rounded-xl p-8 border border-green-500/30 hover:border-green-400/60 transition-all duration-300">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-2xl font-bold text-white mb-4">Quantum-AI Fusion</h3>
              <p className="text-gray-300 mb-6">
                Breakthrough integration of quantum computing with artificial intelligence, 
                delivering exponential improvements in machine learning and problem-solving.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-green-400 font-bold text-lg">Exponential AI</span>
                <Link href="/quantum-ai-fusion" className="text-green-400 hover:text-green-300 transition-colors">
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Quantum Internet */}
            <div className="bg-gradient-to-br from-orange-800/50 to-red-800/50 rounded-xl p-8 border border-orange-500/30 hover:border-orange-400/60 transition-all duration-300">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-2xl font-bold text-white mb-4">Quantum Internet</h3>
              <p className="text-gray-300 mb-6">
                Ultra-secure quantum communication networks enabling instant, unhackable 
                data transmission across global distances with perfect security.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-orange-400 font-bold text-lg">Perfect Security</span>
                <Link href="/quantum-internet" className="text-orange-400 hover:text-orange-300 transition-colors">
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Quantum Machine Learning */}
            <div className="bg-gradient-to-br from-pink-800/50 to-rose-800/50 rounded-xl p-8 border border-pink-500/30 hover:border-pink-400/60 transition-all duration-300">
              <div className="text-4xl mb-4">🔮</div>
              <h3 className="text-2xl font-bold text-white mb-4">Quantum Machine Learning</h3>
              <p className="text-gray-300 mb-6">
                Revolutionary quantum algorithms for machine learning that process complex 
                data patterns with exponential speed and accuracy.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-pink-400 font-bold text-lg">Exponential Speed</span>
                <Link href="/quantum-ml" className="text-pink-400 hover:text-pink-300 transition-colors">
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Quantum Cryptography */}
            <div className="bg-gradient-to-br from-yellow-800/50 to-amber-800/50 rounded-xl p-8 border border-yellow-500/30 hover:border-yellow-400/60 transition-all duration-300">
              <div className="text-4xl mb-4">🔐</div>
              <h3 className="text-2xl font-bold text-white mb-4">Quantum Cryptography</h3>
              <p className="text-gray-300 mb-6">
                Unbreakable quantum encryption systems providing perfect security for 
                sensitive data and communications in the quantum era.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-yellow-400 font-bold text-lg">Unbreakable</span>
                <Link href="/quantum-cryptography" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Stories Section */}
      <div className="py-20 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Quantum Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real businesses achieving extraordinary results with our quantum computing solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-cyan-800/30 to-blue-800/30 rounded-xl p-8 border border-cyan-500/30">
              <div className="text-6xl font-bold text-cyan-400 mb-2">30,000%</div>
              <h3 className="text-xl font-bold text-white mb-2">Financial Services Breakthrough</h3>
              <p className="text-gray-300 mb-4">
                Implemented quantum algorithms for high-frequency trading, achieving 
                30,000% ROI through quantum-optimized portfolio management.
              </p>
              <div className="text-sm text-cyan-400">Industry: Finance</div>
            </div>

            <div className="bg-gradient-to-br from-purple-800/30 to-indigo-800/30 rounded-xl p-8 border border-purple-500/30">
              <div className="text-6xl font-bold text-purple-400 mb-2">25,000%</div>
              <h3 className="text-xl font-bold text-white mb-2">Drug Discovery Revolution</h3>
              <p className="text-gray-300 mb-4">
                Used quantum computing for molecular simulation, accelerating drug 
                discovery by 25,000x and achieving breakthrough medical solutions.
              </p>
              <div className="text-sm text-purple-400">Industry: Healthcare</div>
            </div>

            <div className="bg-gradient-to-br from-green-800/30 to-teal-800/30 rounded-xl p-8 border border-green-500/30">
              <div className="text-6xl font-bold text-green-400 mb-2">20,000%</div>
              <h3 className="text-xl font-bold text-white mb-2">Logistics Optimization</h3>
              <p className="text-gray-300 mb-4">
                Applied quantum optimization for supply chain management, reducing 
                costs by 20,000% and achieving perfect logistics efficiency.
              </p>
              <div className="text-sm text-green-400">Industry: Logistics</div>
            </div>
          </div>
        </div>
      </div>

      {/* Quantum Applications Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Quantum Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how quantum computing is transforming industries across the globe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="text-3xl">🏦</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Financial Services</h3>
                  <p className="text-gray-300">
                    Quantum algorithms for portfolio optimization, risk assessment, 
                    and fraud detection delivering unprecedented accuracy and speed.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-3xl">🧬</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Healthcare & Life Sciences</h3>
                  <p className="text-gray-300">
                    Quantum simulation for drug discovery, protein folding, and 
                    personalized medicine accelerating medical breakthroughs.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-3xl">🚀</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Aerospace & Defense</h3>
                  <p className="text-gray-300">
                    Quantum computing for materials science, navigation systems, 
                    and secure communications in aerospace applications.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="text-3xl">⚡</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Energy & Utilities</h3>
                  <p className="text-gray-300">
                    Quantum optimization for power grid management, renewable energy 
                    integration, and energy storage optimization.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-3xl">🏭</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Manufacturing</h3>
                  <p className="text-gray-300">
                    Quantum algorithms for supply chain optimization, quality control, 
                    and predictive maintenance in manufacturing processes.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-3xl">🔐</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Cybersecurity</h3>
                  <p className="text-gray-300">
                    Quantum cryptography and quantum-resistant encryption ensuring 
                    perfect security in the quantum computing era.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-20 bg-black/30">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready for Quantum Revolution?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the quantum computing revolution and unlock unprecedented computational power. 
            Start your quantum transformation today and achieve extraordinary results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-12 py-6 rounded-lg text-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              Start Quantum Transformation
            </Link>
            <Link 
              href="/case-studies" 
              className="border-2 border-white text-white px-12 py-6 rounded-lg text-xl font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
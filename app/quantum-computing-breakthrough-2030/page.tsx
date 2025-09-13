import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quantum Computing Breakthrough 2030 - Revolutionary Quantum Technology',
  description: 'Discover the revolutionary quantum computing breakthroughs that will transform everything by 2030. Error-corrected quantum computers, quantum internet, and quantum-AI fusion technology with unprecedented processing power.',
  keywords: [
    'quantum computing 2030',
    'quantum breakthrough',
    'error-corrected quantum computers',
    'quantum internet',
    'quantum AI fusion',
    'quantum supremacy',
    'quantum technology',
    'quantum algorithms',
    'quantum machine learning',
    'quantum chemistry'
  ],
  openGraph: {
    title: 'Quantum Computing Breakthrough 2030 - Revolutionary Technology',
    description: 'Revolutionary quantum computing breakthroughs that will change everything by 2030.',
    type: 'website',
    images: ['/og-quantum-computing-breakthrough-2030.png']
  }
};

export default function QuantumComputingBreakthrough2030() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-lg font-bold mb-8 animate-pulse">
            ⚛️ QUANTUM REVOLUTION 2030
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            Quantum Computing
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              BREAKTHROUGH
            </span>
            <span className="block text-4xl md:text-6xl text-cyan-200 mt-4">
              2030
            </span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-cyan-100 mb-12 max-w-5xl mx-auto leading-relaxed font-semibold">
            Revolutionary quantum computing breakthroughs that will achieve quantum supremacy, 
            enable error-corrected quantum computers, and create the quantum internet infrastructure 
            that will transform civilization.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link 
              href="#quantum-breakthroughs"
              className="px-12 py-6 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold text-xl rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              ⚛️ EXPLORE QUANTUM BREAKTHROUGHS
            </Link>
            <Link 
              href="#quantum-calculator"
              className="px-12 py-6 bg-transparent text-cyan-400 font-bold text-xl rounded-lg border-4 border-cyan-400 hover:bg-cyan-400 hover:text-indigo-900 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              🧮 QUANTUM IMPACT CALCULATOR
            </Link>
          </div>

          {/* Quantum Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-purple-800/50 to-blue-800/50 p-6 rounded-xl border border-purple-500/30">
              <div className="text-3xl font-bold text-cyan-400 mb-2">1M+</div>
              <div className="text-cyan-200">Logical Qubits</div>
            </div>
            <div className="bg-gradient-to-br from-blue-800/50 to-indigo-800/50 p-6 rounded-xl border border-blue-500/30">
              <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-cyan-200">Error Rate</div>
            </div>
            <div className="bg-gradient-to-br from-indigo-800/50 to-purple-800/50 p-6 rounded-xl border border-indigo-500/30">
              <div className="text-3xl font-bold text-blue-400 mb-2">10B+</div>
              <div className="text-cyan-200">Speed Increase</div>
            </div>
            <div className="bg-gradient-to-br from-purple-800/50 to-pink-800/50 p-6 rounded-xl border border-purple-500/30">
              <div className="text-3xl font-bold text-pink-400 mb-2">24/7</div>
              <div className="text-cyan-200">Operation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quantum Breakthroughs */}
      <section id="quantum-breakthroughs" className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center text-cyan-400 mb-16">
            Revolutionary Quantum Breakthroughs
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Error-Corrected Quantum Computers */}
            <div className="bg-gradient-to-br from-purple-800/50 to-blue-800/50 p-10 rounded-2xl border border-purple-500/30 hover:border-purple-400/50 transition-all group">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-3xl">🔬</span>
                </div>
                <h3 className="text-3xl font-bold text-purple-400 mb-4">Error-Corrected Quantum Computers</h3>
                <p className="text-cyan-200 text-lg">
                  Revolutionary quantum computers with logical qubits that maintain quantum coherence 
                  for extended periods, enabling complex computations previously impossible.
                </p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="flex justify-between">
                    <span className="text-cyan-200">Logical Qubits:</span>
                    <span className="text-purple-400 font-semibold">1,000,000+</span>
                  </div>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="flex justify-between">
                    <span className="text-cyan-200">Coherence Time:</span>
                    <span className="text-purple-400 font-semibold">100+ seconds</span>
                  </div>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="flex justify-between">
                    <span className="text-cyan-200">Error Rate:</span>
                    <span className="text-purple-400 font-semibold">0.001%</span>
                  </div>
                </div>
              </div>
              
              <Link 
                href="#quantum-applications"
                className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all"
              >
                Explore Applications
              </Link>
            </div>

            {/* Quantum Internet */}
            <div className="bg-gradient-to-br from-blue-800/50 to-indigo-800/50 p-10 rounded-2xl border border-blue-500/30 hover:border-blue-400/50 transition-all group">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-3xl">🌐</span>
                </div>
                <h3 className="text-3xl font-bold text-blue-400 mb-4">Quantum Internet Infrastructure</h3>
                <p className="text-cyan-200 text-lg">
                  Global quantum internet network enabling instant, secure communication 
                  and distributed quantum computing across the planet.
                </p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="flex justify-between">
                    <span className="text-cyan-200">Global Coverage:</span>
                    <span className="text-blue-400 font-semibold">99.9%</span>
                  </div>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="flex justify-between">
                    <span className="text-cyan-200">Latency:</span>
                    <span className="text-blue-400 font-semibold">0.001ms</span>
                  </div>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="flex justify-between">
                    <span className="text-cyan-200">Security:</span>
                    <span className="text-blue-400 font-semibold">Unbreakable</span>
                  </div>
                </div>
              </div>
              
              <Link 
                href="#quantum-applications"
                className="block w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all"
              >
                Explore Applications
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quantum Applications */}
      <section id="quantum-applications" className="py-20 px-4 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center text-cyan-400 mb-16">
            Revolutionary Quantum Applications
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Quantum AI Fusion */}
            <div className="bg-gradient-to-br from-purple-800/30 to-pink-800/30 p-8 rounded-xl border border-purple-500/20 hover:border-purple-400/40 transition-all group">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">🧠</span>
                </div>
                <h3 className="text-2xl font-bold text-purple-400 mb-3">Quantum AI Fusion</h3>
                <p className="text-cyan-200 mb-4">
                  Revolutionary fusion of quantum computing with artificial intelligence, 
                  enabling unprecedented processing power and consciousness-level AI systems.
                </p>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-cyan-200">Processing Speed:</span>
                  <span className="text-purple-400 font-semibold">1B+ faster</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-cyan-200">AI Capabilities:</span>
                  <span className="text-purple-400 font-semibold">Consciousness-level</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-cyan-200">ROI Potential:</span>
                  <span className="text-purple-400 font-semibold">20,000%</span>
                </div>
              </div>
              
              <Link 
                href="/ai-2025-ultimate-breakthrough-announcement"
                className="block w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all"
              >
                Learn More
              </Link>
            </div>

            {/* Quantum Chemistry */}
            <div className="bg-gradient-to-br from-blue-800/30 to-cyan-800/30 p-8 rounded-xl border border-blue-500/20 hover:border-blue-400/40 transition-all group">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">⚗️</span>
                </div>
                <h3 className="text-2xl font-bold text-blue-400 mb-3">Quantum Chemistry</h3>
                <p className="text-cyan-200 mb-4">
                  Revolutionary molecular simulations enabling drug discovery, 
                  materials science breakthroughs, and environmental solutions.
                </p>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-cyan-200">Simulation Accuracy:</span>
                  <span className="text-blue-400 font-semibold">99.9%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-cyan-200">Drug Discovery:</span>
                  <span className="text-blue-400 font-semibold">100x faster</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-cyan-200">Impact:</span>
                  <span className="text-blue-400 font-semibold">Life-changing</span>
                </div>
              </div>
              
              <Link 
                href="/case-studies/quantum-chemistry-breakthrough"
                className="block w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-center py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all"
              >
                Learn More
              </Link>
            </div>

            {/* Quantum Machine Learning */}
            <div className="bg-gradient-to-br from-green-800/30 to-emerald-800/30 p-8 rounded-xl border border-green-500/20 hover:border-green-400/40 transition-all group">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="text-2xl font-bold text-green-400 mb-3">Quantum Machine Learning</h3>
                <p className="text-cyan-200 mb-4">
                  Revolutionary machine learning algorithms running on quantum computers, 
                  enabling pattern recognition and optimization at unprecedented scales.
                </p>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-cyan-200">Algorithm Speed:</span>
                  <span className="text-green-400 font-semibold">1M+ faster</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-cyan-200">Pattern Recognition:</span>
                  <span className="text-green-400 font-semibold">Perfect</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-cyan-200">Applications:</span>
                  <span className="text-green-400 font-semibold">Unlimited</span>
                </div>
              </div>
              
              <Link 
                href="/resources/quantum-machine-learning-guide"
                className="block w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white text-center py-3 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all"
              >
                Learn More
              </Link>
            </div>

            {/* Quantum Cryptography */}
            <div className="bg-gradient-to-br from-orange-800/30 to-red-800/30 p-8 rounded-xl border border-orange-500/20 hover:border-orange-400/40 transition-all group">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">🔐</span>
                </div>
                <h3 className="text-2xl font-bold text-orange-400 mb-3">Quantum Cryptography</h3>
                <p className="text-cyan-200 mb-4">
                  Unbreakable encryption systems based on quantum principles, 
                  ensuring absolute security for all digital communications.
                </p>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-cyan-200">Security Level:</span>
                  <span className="text-orange-400 font-semibold">Unbreakable</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-cyan-200">Key Distribution:</span>
                  <span className="text-orange-400 font-semibold">Instant</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-cyan-200">Future-Proof:</span>
                  <span className="text-orange-400 font-semibold">Yes</span>
                </div>
              </div>
              
              <Link 
                href="/security/quantum-cryptography-implementation"
                className="block w-full bg-gradient-to-r from-orange-600 to-red-600 text-white text-center py-3 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all"
              >
                Learn More
              </Link>
            </div>

            {/* Quantum Optimization */}
            <div className="bg-gradient-to-br from-pink-800/30 to-purple-800/30 p-8 rounded-xl border border-pink-500/20 hover:border-pink-400/40 transition-all group">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-2xl font-bold text-pink-400 mb-3">Quantum Optimization</h3>
                <p className="text-cyan-200 mb-4">
                  Revolutionary optimization algorithms solving complex problems 
                  in logistics, finance, and resource allocation instantly.
                </p>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-cyan-200">Problem Solving:</span>
                  <span className="text-pink-400 font-semibold">Instant</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-cyan-200">Complexity:</span>
                  <span className="text-pink-400 font-semibold">Unlimited</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-cyan-200">Accuracy:</span>
                  <span className="text-pink-400 font-semibold">Perfect</span>
                </div>
              </div>
              
              <Link 
                href="/tools/quantum-optimization-calculator"
                className="block w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white text-center py-3 rounded-lg font-semibold hover:from-pink-700 hover:to-purple-700 transition-all"
              >
                Learn More
              </Link>
            </div>

            {/* Quantum Sensing */}
            <div className="bg-gradient-to-br from-cyan-800/30 to-blue-800/30 p-8 rounded-xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all group">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">📡</span>
                </div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-3">Quantum Sensing</h3>
                <p className="text-cyan-200 mb-4">
                  Ultra-sensitive quantum sensors detecting the smallest changes 
                  in magnetic fields, gravity, and environmental conditions.
                </p>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-cyan-200">Sensitivity:</span>
                  <span className="text-cyan-400 font-semibold">1M+ better</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-cyan-200">Applications:</span>
                  <span className="text-cyan-400 font-semibold">Medical/Environmental</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-cyan-200">Precision:</span>
                  <span className="text-cyan-400 font-semibold">Atomic level</span>
                </div>
              </div>
              
              <Link 
                href="/applications/quantum-sensing-technology"
                className="block w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quantum Impact Calculator */}
      <section id="quantum-calculator" className="py-20 px-4 bg-gradient-to-br from-indigo-900/50 to-purple-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center text-cyan-400 mb-16">
            Quantum Impact Calculator
          </h2>
          
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl shadow-2xl p-12 border border-cyan-500/30">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-3xl font-bold text-cyan-400 mb-8">Calculate Your Quantum Impact</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-lg font-semibold text-cyan-200 mb-2">Industry Sector</label>
                    <select className="w-full p-4 bg-gray-800 border-2 border-cyan-500/30 rounded-lg focus:border-cyan-400 focus:outline-none text-white">
                      <option>Healthcare &amp; Pharmaceuticals</option>
                      <option>Financial Services</option>
                      <option>Manufacturing</option>
                      <option>Energy &amp; Utilities</option>
                      <option>Transportation &amp; Logistics</option>
                      <option>Technology &amp; Software</option>
                      <option>Research &amp; Development</option>
                      <option>Government &amp; Defense</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-lg font-semibold text-cyan-200 mb-2">Company Size</label>
                    <select className="w-full p-4 bg-gray-800 border-2 border-cyan-500/30 rounded-lg focus:border-cyan-400 focus:outline-none text-white">
                      <option>Startup (1-50 employees)</option>
                      <option>Small Business (51-500 employees)</option>
                      <option>Medium Enterprise (501-5,000 employees)</option>
                      <option>Large Enterprise (5,001-50,000 employees)</option>
                      <option>Fortune 500 (50,000+ employees)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-lg font-semibold text-cyan-200 mb-2">Current Technology Stack</label>
                    <select className="w-full p-4 bg-gray-800 border-2 border-cyan-500/30 rounded-lg focus:border-cyan-400 focus:outline-none text-white">
                      <option>Traditional Computing Only</option>
                      <option>Cloud Computing + AI</option>
                      <option>Advanced AI/ML Systems</option>
                      <option>Edge Computing + AI</option>
                      <option>Hybrid Cloud + Advanced AI</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-lg font-semibold text-cyan-200 mb-2">Implementation Timeline</label>
                    <select className="w-full p-4 bg-gray-800 border-2 border-cyan-500/30 rounded-lg focus:border-cyan-400 focus:outline-none text-white">
                      <option>6-12 months</option>
                      <option>12-18 months</option>
                      <option>18-24 months</option>
                      <option>24-36 months</option>
                      <option>36+ months</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-3xl font-bold text-cyan-400 mb-8">Projected Quantum Impact</h3>
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-purple-800/50 to-blue-800/50 p-6 rounded-xl border border-purple-500/30">
                    <div className="text-4xl font-bold text-purple-400 mb-2">15,000%</div>
                    <div className="text-cyan-200 font-semibold">Expected ROI</div>
                  </div>
                  <div className="bg-gradient-to-r from-blue-800/50 to-cyan-800/50 p-6 rounded-xl border border-blue-500/30">
                    <div className="text-4xl font-bold text-blue-400 mb-2">1,000x</div>
                    <div className="text-cyan-200 font-semibold">Processing Speed Increase</div>
                  </div>
                  <div className="bg-gradient-to-r from-cyan-800/50 to-green-800/50 p-6 rounded-xl border border-cyan-500/30">
                    <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
                    <div className="text-cyan-200 font-semibold">Problem Solving Accuracy</div>
                  </div>
                  <div className="bg-gradient-to-r from-green-800/50 to-emerald-800/50 p-6 rounded-xl border border-green-500/30">
                    <div className="text-4xl font-bold text-green-400 mb-2">$500M+</div>
                    <div className="text-cyan-200 font-semibold">Annual Revenue Impact</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Link 
                href="/contact"
                className="px-12 py-6 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold text-xl rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                ⚛️ GET YOUR QUANTUM STRATEGY
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto text-center text-white">
          <h2 className="text-5xl font-bold mb-8">
            Lead the Quantum Revolution
          </h2>
          <p className="text-2xl mb-12 max-w-4xl mx-auto">
            Don&apos;t wait for the quantum future to arrive. Be part of the breakthrough 
            that will define the next century of human progress.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/contact"
              className="px-12 py-6 bg-white text-cyan-600 font-bold text-xl rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              ⚛️ START YOUR QUANTUM JOURNEY
            </Link>
            <Link 
              href="/webinars/quantum-computing-breakthrough-2030"
              className="px-12 py-6 bg-transparent text-white font-bold text-xl rounded-lg border-4 border-white hover:bg-white hover:text-cyan-600 transition-all duration-300 transform hover:scale-105"
            >
              📺 WATCH QUANTUM WEBINAR
            </Link>
          </div>
          
          <div className="mt-12 bg-white/20 p-8 rounded-xl max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">⚡ Limited Early Access</h3>
            <p className="text-lg">
              First 50 companies to join our quantum breakthrough program will receive 
              exclusive access to pre-commercial quantum computing resources worth $1M.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
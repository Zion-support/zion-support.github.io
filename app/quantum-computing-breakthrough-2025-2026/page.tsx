import React from 'react';
import Link from 'next/link';
import { ArrowRight, Atom, Cpu, Zap, Shield, Globe, Target, Brain, Star, Award, TrendingUp } from 'lucide-react';

export default function QuantumComputingBreakthrough20252026() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-medium mb-8">
            <Atom className="w-4 h-4 mr-2" />
            Quantum Computing Breakthrough 2025-2026
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            The Quantum
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {" "}Revolution
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Experience the next generation of quantum computing that will solve problems previously impossible for classical computers, revolutionizing industries and unlocking new possibilities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="#breakthroughs" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-300"
            >
              Explore Breakthroughs
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
            >
              Get Quantum Access
            </Link>
          </div>
        </div>
      </section>

      {/* Quantum Breakthroughs Grid */}
      <section id="breakthroughs" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Revolutionary Quantum Breakthroughs
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge quantum technologies that will transform computing, cryptography, and problem-solving capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Quantum Supremacy 2.0 */}
            <div className="bg-gradient-to-br from-cyan-800/50 to-blue-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Quantum Supremacy 2.0</h3>
              <p className="text-gray-300 mb-6">
                Next-generation quantum processors with 1000+ qubits, achieving computational advantages over classical computers for practical business applications.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                  1000+ logical qubits
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                  99.9% error correction
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                  Real-world problem solving
                </li>
              </ul>
            </div>

            {/* Quantum AI Fusion */}
            <div className="bg-gradient-to-br from-purple-800/50 to-pink-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Quantum AI Fusion</h3>
              <p className="text-gray-300 mb-6">
                Revolutionary combination of quantum computing and artificial intelligence, enabling exponential improvements in machine learning and optimization.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  Quantum neural networks
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  Exponential speedup in training
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  Quantum-enhanced algorithms
                </li>
              </ul>
            </div>

            {/* Quantum Cryptography */}
            <div className="bg-gradient-to-br from-green-800/50 to-emerald-800/50 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Quantum Cryptography</h3>
              <p className="text-gray-300 mb-6">
                Unbreakable encryption systems based on quantum mechanics, providing absolute security for sensitive data and communications.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  Quantum key distribution
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  Unhackable communications
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  Future-proof security
                </li>
              </ul>
            </div>

            {/* Quantum Optimization */}
            <div className="bg-gradient-to-br from-orange-800/50 to-red-800/50 backdrop-blur-sm rounded-2xl p-8 border border-orange-500/20 hover:border-orange-400/40 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Quantum Optimization</h3>
              <p className="text-gray-300 mb-6">
                Solve complex optimization problems in seconds that would take classical computers years, revolutionizing logistics, finance, and resource allocation.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                  Supply chain optimization
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                  Portfolio optimization
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                  Resource allocation
                </li>
              </ul>
            </div>

            {/* Quantum Simulation */}
            <div className="bg-gradient-to-br from-indigo-800/50 to-purple-800/50 backdrop-blur-sm rounded-2xl p-8 border border-indigo-500/20 hover:border-indigo-400/40 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Quantum Simulation</h3>
              <p className="text-gray-300 mb-6">
                Simulate complex quantum systems and materials with unprecedented accuracy, accelerating drug discovery and materials science.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></div>
                  Molecular modeling
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></div>
                  Drug discovery acceleration
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></div>
                  Materials design
                </li>
              </ul>
            </div>

            {/* Quantum Machine Learning */}
            <div className="bg-gradient-to-br from-pink-800/50 to-rose-800/50 backdrop-blur-sm rounded-2xl p-8 border border-pink-500/20 hover:border-pink-400/40 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Quantum Machine Learning</h3>
              <p className="text-gray-300 mb-6">
                Quantum-enhanced machine learning algorithms that can process and analyze data with exponential speedup and improved accuracy.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                  Quantum feature maps
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                  Exponential data processing
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                  Pattern recognition
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quantum Performance Metrics */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/50 to-blue-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Quantum Performance Metrics
            </h2>
            <p className="text-xl text-gray-300">
              Unprecedented computational capabilities that redefine what's possible
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">10^18</div>
              <div className="text-gray-300">Operations per Second</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">99.99%</div>
              <div className="text-gray-300">Error Correction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">1000x</div>
              <div className="text-gray-300">Speed Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">∞</div>
              <div className="text-gray-300">Security Level</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quantum Applications */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Real-World Quantum Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Practical quantum computing solutions that are transforming industries today
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-cyan-800/30 to-blue-800/30 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
                <h3 className="text-2xl font-bold text-white mb-4">Financial Services</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    Risk assessment and portfolio optimization
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    Fraud detection and prevention
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    High-frequency trading algorithms
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    Cryptocurrency mining optimization
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-purple-800/30 to-pink-800/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
                <h3 className="text-2xl font-bold text-white mb-4">Healthcare & Life Sciences</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    Drug discovery and molecular modeling
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    Protein folding prediction
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    Personalized medicine optimization
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    Genetic analysis and sequencing
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-r from-green-800/30 to-emerald-800/30 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20">
                <h3 className="text-2xl font-bold text-white mb-4">Logistics & Supply Chain</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    Route optimization and delivery planning
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    Inventory management and forecasting
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    Warehouse automation and robotics
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    Supply chain risk assessment
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-orange-800/30 to-red-800/30 backdrop-blur-sm rounded-2xl p-8 border border-orange-500/20">
                <h3 className="text-2xl font-bold text-white mb-4">Energy & Environment</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                    Renewable energy optimization
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                    Climate modeling and prediction
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                    Carbon capture and storage
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                    Smart grid management
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quantum Roadmap */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-900/50 to-purple-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Quantum Computing Roadmap 2025-2026
            </h2>
            <p className="text-xl text-gray-300">
              Our timeline for quantum computing breakthroughs and commercial deployment
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-blue-500"></div>
            
            <div className="space-y-12">
              <div className="flex items-center">
                <div className="w-6 h-6 bg-cyan-500 rounded-full border-4 border-white z-10"></div>
                <div className="ml-8 bg-gradient-to-r from-cyan-800/30 to-blue-800/30 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/20 flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">Q1 2025: Quantum Supremacy 2.0</h3>
                  <p className="text-gray-300">Deployment of 1000+ qubit quantum processors with practical business applications</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-6 h-6 bg-purple-500 rounded-full border-4 border-white z-10"></div>
                <div className="ml-8 bg-gradient-to-r from-purple-800/30 to-pink-800/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">Q2 2025: Quantum AI Integration</h3>
                  <p className="text-gray-300">Full integration of quantum computing with AI systems for exponential performance gains</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-6 h-6 bg-green-500 rounded-full border-4 border-white z-10"></div>
                <div className="ml-8 bg-gradient-to-r from-green-800/30 to-emerald-800/30 backdrop-blur-sm rounded-2xl p-6 border border-green-500/20 flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">Q3 2025: Commercial Quantum Services</h3>
                  <p className="text-gray-300">Launch of quantum-as-a-service platform for enterprise customers</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-6 h-6 bg-orange-500 rounded-full border-4 border-white z-10"></div>
                <div className="ml-8 bg-gradient-to-r from-orange-800/30 to-red-800/30 backdrop-blur-sm rounded-2xl p-6 border border-orange-500/20 flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">Q4 2025: Quantum Internet</h3>
                  <p className="text-gray-300">Deployment of quantum communication networks for ultra-secure data transmission</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-6 h-6 bg-pink-500 rounded-full border-4 border-white z-10"></div>
                <div className="ml-8 bg-gradient-to-r from-pink-800/30 to-rose-800/30 backdrop-blur-sm rounded-2xl p-6 border border-pink-500/20 flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">Q1 2026: Quantum Machine Learning</h3>
                  <p className="text-gray-300">Full-scale quantum machine learning algorithms for complex data analysis</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-6 h-6 bg-indigo-500 rounded-full border-4 border-white z-10"></div>
                <div className="ml-8 bg-gradient-to-r from-indigo-800/30 to-purple-800/30 backdrop-blur-sm rounded-2xl p-6 border border-indigo-500/20 flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">Q2 2026: Universal Quantum Computer</h3>
                  <p className="text-gray-300">Achievement of fault-tolerant universal quantum computing for all applications</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-800/50 to-blue-800/50 backdrop-blur-sm rounded-3xl p-12 border border-cyan-500/20">
            <Atom className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Enter the Quantum Era
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Be among the first to experience the transformative power of quantum computing. Join the quantum revolution and unlock unlimited possibilities for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-300"
              >
                Start Quantum Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="/services" 
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Explore Quantum Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
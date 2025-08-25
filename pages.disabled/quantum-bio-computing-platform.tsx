import React from 'react';
import { Dna, Atom, Brain, Microscope, Flask, TestTube, Database, Zap, ArrowRight, CheckCircle, Cpu, Network, Globe, TrendingUp, Star, Layers, Server, Target, Users, Eye, Shield } from 'lucide-react';

export default function QuantumBioComputingPlatform() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent mb-6">
            Quantum Bio-Computing Platform
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Revolutionary quantum molecular simulation platform for drug discovery, protein folding, and biological research. 
            Accelerate scientific breakthroughs with quantum computing power.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-200 flex items-center space-x-2">
              <span>Start Research</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 border border-green-500 text-green-400 font-semibold rounded-lg hover:bg-green-500 hover:text-white transition-all duration-200">
              View Demo
            </button>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Quantum Bio-Computing Features</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Advanced quantum algorithms and simulation capabilities for biological research and drug development
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Protein Folding */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-green-500/20 rounded-xl p-6 hover:border-green-500/40 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                <Dna className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Protein Folding Simulation</h3>
              <p className="text-gray-400">
                Quantum algorithms for predicting protein structures and folding pathways
              </p>
            </div>

            {/* Drug Discovery */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-green-500/20 rounded-xl p-6 hover:border-green-500/40 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                <Flask className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Drug Discovery</h3>
              <p className="text-gray-400">
                Virtual screening and molecular docking using quantum computing
              </p>
            </div>

            {/* Molecular Dynamics */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-green-500/20 rounded-xl p-6 hover:border-green-500/40 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                <Atom className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Molecular Dynamics</h3>
              <p className="text-gray-400">
                Quantum-enhanced molecular dynamics simulations for complex systems
              </p>
            </div>

            {/* Genetic Analysis */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-green-500/20 rounded-xl p-6 hover:border-green-500/40 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Genetic Analysis</h3>
              <p className="text-gray-400">
                Quantum algorithms for genome sequencing and genetic pattern recognition
              </p>
            </div>

            {/* Chemical Reactions */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-green-500/20 rounded-xl p-6 hover:border-green-500/40 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                <TestTube className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Chemical Reactions</h3>
              <p className="text-gray-400">
                Quantum simulation of chemical reactions and catalytic processes
              </p>
            </div>

            {/* Bioinformatics */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-green-500/20 rounded-xl p-6 hover:border-green-500/40 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Bioinformatics</h3>
              <p className="text-gray-400">
                Quantum-enhanced analysis of biological data and sequence patterns
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Applications */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Research Applications</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Transform your research with quantum bio-computing capabilities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-green-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-4">Pharmaceutical Research</h3>
              <p className="text-gray-400 mb-6">
                Accelerate drug discovery and development with quantum molecular modeling
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Virtual drug screening</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Molecular docking</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>ADMET prediction</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-green-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-4">Biotechnology</h3>
              <p className="text-gray-400 mb-6">
                Design novel proteins and biological systems with quantum precision
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Protein engineering</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Enzyme design</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Metabolic pathway optimization</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-green-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-4">Medical Research</h3>
              <p className="text-gray-400 mb-6">
                Advance medical understanding with quantum-enhanced biological simulations
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Disease mechanism modeling</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Personalized medicine</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Drug repurposing</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-green-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-4">Agricultural Science</h3>
              <p className="text-gray-400 mb-6">
                Optimize crop yields and develop sustainable agricultural solutions
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Crop optimization</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Pest resistance</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Climate adaptation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Capabilities */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Platform Capabilities</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Advanced quantum computing infrastructure designed for biological research
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Quantum Processing */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Cpu className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Quantum Processing</h3>
              <p className="text-gray-400">
                High-performance quantum processors optimized for molecular simulations
              </p>
            </div>

            {/* Advanced Algorithms */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Advanced Algorithms</h3>
              <p className="text-gray-400">
                Quantum algorithms specifically designed for biological computations
              </p>
            </div>

            {/* Data Integration */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Database className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Data Integration</h3>
              <p className="text-gray-400">
                Seamless integration with existing biological databases and research tools
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Performance Metrics</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Quantifiable improvements in biological research and computational efficiency
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">1000x</div>
              <div className="text-gray-400">Faster protein folding</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">99.9%</div>
              <div className="text-gray-400">Simulation accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">50x</div>
              <div className="text-gray-400">Cost reduction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">24/7</div>
              <div className="text-gray-400">Platform availability</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-900/20 to-emerald-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Accelerate Your Biological Research?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join leading researchers using quantum computing to solve the world's most complex biological challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-200">
              Start Research Now
            </button>
            <button className="px-8 py-4 border border-green-500 text-green-400 font-semibold rounded-lg hover:bg-green-500 hover:text-white transition-all duration-200">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
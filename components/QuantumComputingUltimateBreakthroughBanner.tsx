import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Cpu, 
  Shield, 
  Globe, 
  ArrowRight, 
  TrendingUp, 
  Target, 
  Users,
  Lock,
  Network,
  Atom,
  Gauge
} from 'lucide-react';

const QuantumComputingUltimateBreakthroughBanner: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 py-20 overflow-hidden">
      {/* Quantum Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-cyan-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-purple-500/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/3 w-20 h-20 bg-pink-500/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/4 w-28 h-28 bg-blue-500/10 rounded-full animate-pulse delay-500"></div>
        
        {/* Quantum Circuit Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="quantum-circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M0,10 L20,10 M10,0 L10,20" stroke="currentColor" strokeWidth="0.5" fill="none"/>
                <circle cx="10" cy="10" r="1" fill="currentColor"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#quantum-circuit)"/>
          </svg>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-full border border-cyan-400/30 mb-6">
            <Atom className="w-5 h-5 text-cyan-400 mr-2" />
            <span className="text-cyan-300 font-semibold">Quantum Computing Ultimate Breakthrough</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Quantum Computing
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Ultimate Breakthrough
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Experience the most advanced quantum computing solutions with error-corrected quantum computers, 
            quantum internet infrastructure, and quantum machine learning that will revolutionize everything.
          </p>

          {/* Quantum Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-cyan-400/20">
              <div className="flex items-center justify-center mb-2">
                <Gauge className="w-8 h-8 text-cyan-400" />
              </div>
              <div className="text-2xl font-bold text-white">1000x</div>
              <div className="text-sm text-gray-300">Computational Speedup</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-400/20">
              <div className="flex items-center justify-center mb-2">
                <Shield className="w-8 h-8 text-purple-400" />
              </div>
              <div className="text-2xl font-bold text-white">Unbreakable</div>
              <div className="text-sm text-gray-300">Quantum Encryption</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-pink-400/20">
              <div className="flex items-center justify-center mb-2">
                <Network className="w-8 h-8 text-pink-400" />
              </div>
              <div className="text-2xl font-bold text-white">Global</div>
              <div className="text-sm text-gray-300">Quantum Internet</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-blue-400/20">
              <div className="flex items-center justify-center mb-2">
                <Cpu className="w-8 h-8 text-blue-400" />
              </div>
              <div className="text-2xl font-bold text-white">1000+</div>
              <div className="text-sm text-gray-300">Logical Qubits</div>
            </div>
          </div>
        </div>

        {/* Quantum Breakthrough Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 rounded-xl p-8 border border-cyan-400/30 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
              <Cpu className="w-8 h-8 text-cyan-400 mr-3" />
              <h3 className="text-xl font-bold text-white">Error-Corrected Quantum Computers</h3>
            </div>
            <p className="text-gray-300 mb-6">
              First commercially viable quantum computers with logical qubits and fault-tolerant operations.
            </p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• 1000+ Logical Qubits</li>
              <li>• Fault-Tolerant Operations</li>
              <li>• Quantum Error Correction</li>
              <li>• Commercial Viability</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl p-8 border border-purple-400/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
              <Globe className="w-8 h-8 text-purple-400 mr-3" />
              <h3 className="text-xl font-bold text-white">Quantum Internet Infrastructure</h3>
            </div>
            <p className="text-gray-300 mb-6">
              Global quantum communication network enabling secure data transmission and quantum teleportation.
            </p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Quantum Key Distribution</li>
              <li>• Quantum Teleportation</li>
              <li>• Quantum Repeaters</li>
              <li>• Global Coverage</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-pink-600/20 to-red-600/20 rounded-xl p-8 border border-pink-400/30 hover:border-pink-400/50 transition-all duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
              <Zap className="w-8 h-8 text-pink-400 mr-3" />
              <h3 className="text-xl font-bold text-white">Quantum Machine Learning</h3>
            </div>
            <p className="text-gray-300 mb-6">
              Machine learning algorithms running on quantum hardware for exponential speedup in AI applications.
            </p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Quantum Neural Networks</li>
              <li>• Quantum Optimization</li>
              <li>• Quantum Feature Maps</li>
              <li>• Exponential Speedup</li>
            </ul>
          </div>
        </div>

        {/* Quantum Applications */}
        <div className="bg-gradient-to-r from-slate-800/50 to-gray-800/50 rounded-2xl p-8 mb-12 border border-gray-700/50">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Quantum Applications</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <Lock className="w-12 h-12 text-cyan-400 mx-auto mb-3" />
              <h4 className="font-semibold text-white mb-2">Cryptography</h4>
              <p className="text-sm text-gray-400">Unbreakable quantum encryption</p>
            </div>
            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-purple-400 mx-auto mb-3" />
              <h4 className="font-semibold text-white mb-2">Optimization</h4>
              <p className="text-sm text-gray-400">Complex problem solving</p>
            </div>
            <div className="text-center">
              <Target className="w-12 h-12 text-pink-400 mx-auto mb-3" />
              <h4 className="font-semibold text-white mb-2">Simulation</h4>
              <p className="text-sm text-gray-400">Molecular and material simulation</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-blue-400 mx-auto mb-3" />
              <h4 className="font-semibold text-white mb-2">AI Enhancement</h4>
              <p className="text-sm text-gray-400">Quantum-enhanced machine learning</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link 
              to="/quantum-computing-ultimate-breakthrough" 
              className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              Explore Quantum Breakthroughs
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/quantum-computing-solutions" 
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 border border-white/30 hover:border-white/50 flex items-center justify-center"
            >
              View Quantum Solutions
              <Atom className="w-5 h-5 ml-2" />
            </Link>
          </div>
          
          <p className="text-gray-400 text-sm">
            Join the quantum revolution - Experience the future of computing today
          </p>
        </div>
      </div>
    </section>
  );
};

export default QuantumComputingUltimateBreakthroughBanner;
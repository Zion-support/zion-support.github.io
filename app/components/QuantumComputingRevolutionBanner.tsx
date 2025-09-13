import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Cpu, Atom, Zap, Target, TrendingUp, Shield, Layers } from 'lucide-react';

const QuantumComputingRevolutionBanner: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 py-20"
    >
      {/* Quantum Field Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-pink-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_25%_25%,rgba(139,92,246,0.3),transparent_50%),radial-gradient(circle_at_75%_75%,rgba(236,72,153,0.3),transparent_50%)]"></div>
      </div>

      {/* Quantum Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              scale: [1, 1.5, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-6"
          >
            <Atom className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Quantum Computing Revolution 2025
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            Breakthrough quantum systems with error-corrected qubits, quantum internet infrastructure, 
            and quantum machine learning algorithms that solve previously impossible problems.
          </motion.p>

          {/* Quantum Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-center w-12 h-12 bg-cyan-500 rounded-full mb-4 mx-auto">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">1M+</div>
              <div className="text-sm text-gray-300">Logical Qubits</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-500 rounded-full mb-4 mx-auto">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">99.99%</div>
              <div className="text-sm text-gray-300">Error Correction</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-center w-12 h-12 bg-pink-500 rounded-full mb-4 mx-auto">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">∞</div>
              <div className="text-sm text-gray-300">Supremacy Achieved</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-500 rounded-full mb-4 mx-auto">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">Unbreakable</div>
              <div className="text-sm text-gray-300">Quantum Security</div>
            </div>
          </motion.div>
        </div>

        {/* Quantum Applications Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {/* Quantum Machine Learning */}
          <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300 hover:transform hover:scale-105">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl mb-6">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Quantum ML</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Revolutionary quantum machine learning algorithms that process exponentially 
              larger datasets and solve optimization problems in seconds.
            </p>
            <Link
              to="/quantum-machine-learning-2025"
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group-hover:translate-x-1 transition-transform"
            >
              Explore Quantum ML
              <TrendingUp className="w-4 h-4 ml-2" />
            </Link>
          </div>

          {/* Quantum Internet */}
          <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300 hover:transform hover:scale-105">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl mb-6">
              <Layers className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Quantum Internet</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Global quantum network infrastructure enabling instant, secure communication 
              and distributed quantum computing across continents.
            </p>
            <Link
              to="/quantum-internet-2025"
              className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold group-hover:translate-x-1 transition-transform"
            >
              Discover Network
              <Zap className="w-4 h-4 ml-2" />
            </Link>
          </div>

          {/* Quantum Cryptography */}
          <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300 hover:transform hover:scale-105">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Quantum Security</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Unbreakable quantum encryption protocols and quantum key distribution 
              systems protecting against all known and future threats.
            </p>
            <Link
              to="/quantum-cryptography-2025"
              className="inline-flex items-center text-green-400 hover:text-green-300 font-semibold group-hover:translate-x-1 transition-transform"
            >
              Secure Future
              <Target className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-center"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              to="/quantum-computing-revolution-2025"
              className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Join Quantum Revolution
            </Link>
            <Link
              to="/quantum-implementation-guide"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold border border-white/30 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
            >
              Implementation Guide
            </Link>
          </div>

          <p className="text-gray-400 text-sm">
            Be among the first to harness quantum supremacy for your organization
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default QuantumComputingRevolutionBanner;
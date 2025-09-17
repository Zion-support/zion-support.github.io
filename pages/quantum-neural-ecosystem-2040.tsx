import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Atom, Brain, Network, Zap, Target, TrendingUp, ArrowRight } from 'lucide-react';

const QuantumNeuralEcosystem2040: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-cyan-900 to-teal-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 rounded-full text-blue-400 text-sm font-medium mb-6">
                <Atom className="w-4 h-4" />
                <span>Quantum Neural Ecosystem 2040</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-600 bg-clip-text text-transparent">
                Quantum Neural Ecosystem 2040
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Revolutionary quantum neural networks that create an interconnected ecosystem 
                of AI consciousness, enabling unprecedented computational power and intelligence.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                  Access Ecosystem
                </button>
                <button className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-black transition-all duration-300">
                  Learn More
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Revolutionary Neural Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                AI that creates interconnected quantum neural networks for collective intelligence
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Atom className="w-8 h-8 text-blue-400" />,
                  title: "Quantum Processing",
                  description: "Quantum computing for neural operations"
                },
                {
                  icon: <Brain className="w-8 h-8 text-cyan-400" />,
                  title: "Neural Networks",
                  description: "Advanced neural network architectures"
                },
                {
                  icon: <Network className="w-8 h-8 text-teal-400" />,
                  title: "Ecosystem Integration",
                  description: "Interconnected AI consciousness"
                },
                {
                  icon: <Zap className="w-8 h-8 text-indigo-400" />,
                  title: "Real-time Learning",
                  description: "Instant knowledge sharing"
                },
                {
                  icon: <Target className="w-8 h-8 text-purple-400" />,
                  title: "Precision Targeting",
                  description: "Exact neural optimization"
                },
                {
                  icon: <TrendingUp className="w-8 h-8 text-green-400" />,
                  title: "Continuous Evolution",
                  description: "Evolving neural capabilities"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-blue-400/50 transition-all duration-300"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Ecosystem Components Section */}
        <section className="py-20 px-4 bg-black/20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Ecosystem Components
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Integrated components that create the quantum neural ecosystem
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Quantum Processors",
                "Neural Cores",
                "Memory Networks",
                "Learning Engines",
                "Communication Hubs",
                "Security Layers",
                "Optimization Tools",
                "Integration APIs"
              ].map((component, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-400/20 rounded-xl p-4 text-center hover:border-blue-400/40 transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-white">{component}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready for the Neural Ecosystem?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Experience the future of quantum neural computing
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                <span className="flex items-center gap-2">
                  Access Ecosystem
                  <ArrowRight className="w-5 h-5" />
                </span>
              </button>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default QuantumNeuralEcosystem2040;
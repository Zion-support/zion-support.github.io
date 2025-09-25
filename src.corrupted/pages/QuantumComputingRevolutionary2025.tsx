import React from 'react';
import { motion } from 'framer-motion';

const QuantumComputingRevolutionary2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              ⚡ QUANTUM REVOLUTION • JANUARY 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Quantum Computing Revolutionary 2025
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
              Experience the quantum revolution that's solving impossible problems and unlocking infinite computational power
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quantum Features */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">⚡ Quantum Computing Breakthroughs</h2>
            <p className="text-xl opacity-80 max-w-3xl mx-auto">
              Revolutionary quantum technologies that are reshaping the future of computing
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🌌",
                title: "Quantum Supremacy",
                description: "Achieve computational supremacy with quantum processors that outperform classical computers",
                features: ["Exponential speed increase", "Quantum entanglement", "Superposition states"]
              },
              {
                icon: "🔐",
                title: "Quantum Cryptography",
                description: "Unbreakable encryption using quantum key distribution and quantum-resistant algorithms",
                features: ["Quantum key distribution", "Unhackable security", "Future-proof encryption"]
              },
              {
                icon: "🧬",
                title: "Quantum Biology",
                description: "Simulate complex biological processes with quantum precision and accuracy",
                features: ["Protein folding", "Drug discovery", "Molecular simulation"]
              },
              {
                icon: "🌍",
                title: "Quantum Climate Modeling",
                description: "Accurate climate predictions using quantum simulation of atmospheric processes",
                features: ["Weather forecasting", "Climate change modeling", "Environmental optimization"]
              },
              {
                icon: "🚀",
                title: "Quantum AI",
                description: "Revolutionary AI powered by quantum computing for unprecedented intelligence",
                features: ["Quantum machine learning", "Quantum neural networks", "Quantum optimization"]
              },
              {
                icon: "⚛️",
                title: "Quantum Materials",
                description: "Discover new materials with quantum properties for next-generation technology",
                features: ["Superconductors", "Quantum dots", "Topological materials"]
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300"
              >
                <div className="text-6xl mb-4 text-center">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-center">{feature.title}</h3>
                <p className="text-cyan-100 mb-6 text-center">{feature.description}</p>
                <ul className="text-cyan-200 space-y-2 text-sm">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quantum Demo */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">🎮 Quantum Computing Demo</h2>
            <p className="text-xl opacity-80 max-w-3xl mx-auto">
              Experience quantum computing power in real-time with our interactive demonstration
            </p>
          </motion.div>

          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-2xl p-12 border border-cyan-400/30">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6">Try Quantum Processing</h3>
                <p className="text-lg mb-8 opacity-90">
                  Enter a complex problem and watch our quantum computer solve it exponentially faster than classical methods.
                </p>
                <div className="space-y-4">
                  <select className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400">
                    <option value="">Select a quantum problem...</option>
                    <option value="optimization">Traveling Salesman Problem</option>
                    <option value="cryptography">RSA Factorization</option>
                    <option value="simulation">Molecular Simulation</option>
                    <option value="search">Quantum Search Algorithm</option>
                  </select>
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                    Run Quantum Algorithm →
                  </button>
                </div>
              </div>
              <div className="bg-black/20 rounded-lg p-6 border border-white/10">
                <h4 className="text-xl font-semibold mb-4">Quantum Processing Status:</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span>Initializing quantum state...</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    <span>Creating quantum entanglement...</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                    <span>Executing quantum algorithm...</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                    <span>Collapsing quantum state...</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
                    <span>Extracting solution...</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-300">∞</div>
                    <div className="text-sm text-cyan-200">Quantum Speedup</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quantum Applications */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">🌍 Quantum Applications</h2>
            <p className="text-xl opacity-80 max-w-3xl mx-auto">
              Revolutionary applications of quantum computing across industries
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                industry: "Healthcare",
                icon: "🏥",
                applications: ["Drug Discovery", "Protein Folding", "Personalized Medicine"]
              },
              {
                industry: "Finance",
                icon: "💰",
                applications: ["Risk Analysis", "Portfolio Optimization", "Fraud Detection"]
              },
              {
                industry: "Energy",
                icon: "⚡",
                applications: ["Battery Optimization", "Grid Management", "Fusion Research"]
              },
              {
                industry: "Transportation",
                icon: "🚗",
                applications: ["Route Optimization", "Traffic Management", "Autonomous Vehicles"]
              }
            ].map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 text-center"
              >
                <div className="text-4xl mb-4">{app.icon}</div>
                <h3 className="text-xl font-bold mb-4">{app.industry}</h3>
                <ul className="text-cyan-200 space-y-2 text-sm">
                  {app.applications.map((item, idx) => (
                    <li key={idx} className="flex items-center justify-center">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quantum Timeline */}
      <section className="py-20 px-4 bg-gradient-to-r from-indigo-900/50 to-cyan-900/50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">📅 Quantum Timeline</h2>
            <p className="text-xl opacity-80 max-w-3xl mx-auto">
              The evolution of quantum computing and our revolutionary milestones
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 to-blue-400"></div>
            {[
              {
                year: "2025",
                title: "Quantum Supremacy Achieved",
                description: "First practical quantum advantage in real-world applications"
              },
              {
                year: "2026",
                title: "Quantum Internet Launch",
                description: "Global quantum communication network goes live"
              },
              {
                year: "2027",
                title: "Quantum AI Integration",
                description: "Quantum-powered artificial intelligence becomes mainstream"
              },
              {
                year: "2028",
                title: "Quantum Cloud Services",
                description: "Quantum computing as a service available to all businesses"
              }
            ].map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className="w-1/2 px-8">
                  <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30">
                    <div className="text-2xl font-bold text-cyan-300 mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                    <p className="text-cyan-100 text-sm">{milestone.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full border-4 border-cyan-900"></div>
                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-cyan-900/50 to-blue-900/50">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready for the Quantum Revolution?</h2>
            <p className="text-xl opacity-80 mb-8 max-w-3xl mx-auto">
              Join the quantum computing revolution and unlock infinite computational possibilities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Start Quantum Journey →
              </button>
              <button className="border border-cyan-400 text-cyan-300 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default QuantumComputingRevolutionary2025;
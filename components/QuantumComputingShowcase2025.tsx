"use client";
import React{ useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
AtomZapCpuShieldTargetTrendingUpArrowRightPlayPause
import Link from 'next/link';

const QuantumComputingShowcase2025: React.FC = () => {
  const [activeTabsetActiveTab] = useState(0);
  const [isAnimatingsetIsAnimating] = useState(true);

  const quantumSolutions = [
    {
      id: 0,
      title: "Quantum-Neural Fusion",
      subtitle: "Revolutionary Processing Power",
      description: "Our quantum-neural hybrid system combines quantum computing with neural networks to achieve unprecedented processing capabilities that transcend classical limitations.",
      features: [
        "Quantum entanglement with neural processing",
        "10,000x faster problem solving",
        "Parallel universe calculations",
        "Real-time quantum state optimization"
      ],
      benefits: [
        "Solve NP-complete problems in polynomial time",
        "Process infinite data streams simultaneously",
        "Achieve quantum supremacy in practical applications"
      ],
      icon: Atom,
      gradient: "from-blue-600 to-cyan-600",
      color: "text-blue-400"
    },
    {
      id: 1,
      title: "Quantum Cryptography",
      subtitle: "Unbreakable Security",
      description: "Advanced quantum cryptography systems that provide theoretically unbreakable encryption using quantum key distribution and quantum entanglement principles.",
      features: [
        "Quantum key distribution (QKD)",
        "Quantum random number generation",
        "Quantum digital signatures",
        "Post-quantum cryptographic algorithms"
      ],
      benefits: [
        "Theoretically unbreakable encryption",
        "Future-proof against quantum attacks",
        "Secure communication channels"
      ],
      icon: Shield,
      gradient: "from-green-600 to-emerald-600",
      color: "text-green-400"
    },
    {
      id: 2,
      title: "Quantum Machine Learning",
      subtitle: "AI Beyond Classical Limits",
      description: "Quantum machine learning algorithms that leverage quantum superposition and interference to process data in ways impossible for classical computers.",
      features: [
        "Quantum support vector machines",
        "Quantum neural networks",
        "Quantum clustering algorithms",
        "Quantum feature mapping"
      ],
      benefits: [
        "Exponential speedup in ML training",
        "Handle exponentially large datasets",
        "Discover hidden patterns in quantum data"
      ],
      icon: Cpu,
      gradient: "from-purple-600 to-pink-600",
      color: "text-purple-400"
    },
    {
      id: 3,
      title: "Quantum Optimization",
      subtitle: "Perfect Solutions",
      description: "Quantum optimization algorithms that find optimal solutions to complex problems by leveraging quantum annealing and variational quantum algorithms.",
      features: [
        "Quantum annealing optimization",
        "Variational quantum eigensolver",
        "Quantum approximate optimization algorithm",
        "Quantum linear algebra operations"
      ],
      benefits: [
        "Find global optima for complex problems",
        "Optimize supply chains and logistics",
        "Financial portfolio optimization"
      ],
      icon: Target,
      gradient: "from-orange-600 to-red-600",
      color: "text-orange-400"
    }
  ];

  const useCases = [
    {
      title: "Financial Modeling",
      description: "Quantum algorithms for risk assessmentportfolio optimizationand high-frequency trading",
      icon: TrendingUp,
      impact: "300% faster risk calculations"
    },
    {
      title: "Drug Discovery",
      description: "Quantum molecular simulation for pharmaceutical research and development",
      icon: Atom,
      impact: "10x faster drug development"
    },
    {
      title: "Climate Modeling",
      description: "Complex climate system simulations with quantum-enhanced precision",
      icon: Zap,
      impact: "1000x more accurate predictions"
    },
    {
      title: "Supply Chain",
      description: "Quantum optimization for global logistics and resource allocation",
      icon: Target,
      impact: "50% cost reduction"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold text-sm mb-6">
            QUANTUM REVOLUTION 2025
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Quantum Computing Showcase
          </h1>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Experience the future of computing with our revolutionary quantum solutions that transcend classical limitations and unlock infinite possibilities.
          </p>
        </motion.div>

        {/* Interactive Tabs */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {quantumSolutions.map((solutionindex) => (
              <button
                key={solution.id}
                onClick={() => {
                  setActiveTab(index);
                  setIsAnimating(true);
                  setTimeout(() => setIsAnimating(false)500);
                }}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === index
                    ? `bg-gradient-to-r ${solution.gradient} text-white shadow-lg`
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {solution.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 backdrop-blur-lg rounded-3xl p-12 border border-white/10"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div>
                  <div className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${quantumSolutions[activeTab].gradient} text-white font-bold text-sm mb-6`}>
                    {quantumSolutions[activeTab].subtitle}
                  </div>
                  
                  <h2 className="text-4xl font-bold text-white mb-6">
                    {quantumSolutions[activeTab].title}
                  </h2>
                  
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    {quantumSolutions[activeTab].description}
                  </p>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    <h3 className="text-xl font-bold text-white mb-4">Key Features:</h3>
                    {quantumSolutions[activeTab].features.map((featureidx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <ArrowRight className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Benefits */}
                  <div className="space-y-4 mb-8">
                    <h3 className="text-xl font-bold text-white mb-4">Benefits:</h3>
                    {quantumSolutions[activeTab].benefits.map((benefitidx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <Link href="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`bg-gradient-to-r ${quantumSolutions[activeTab].gradient} hover:opacity-90 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center gap-2`}
                    >
                      Get Started
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </Link>
                </div>

                {/* Visual */}
                <div className="relative">
                  <motion.div
                    animate={isAnimating ? { rotate: 360 } : { rotate: 0 }}
                    transition={{ duration: 2ease: "linear" }}
                    className={`p-16 rounded-3xl bg-gradient-to-br ${quantumSolutions[activeTab].gradient} shadow-2xl text-center`}
                  >
                    <quantumSolutions[activeTab].icon className="w-32 h-32 text-white mx-auto mb-6" />
                    
                    {/* Quantum Animation */}
                    <div className="relative">
                      {[...Array(8)].map((_i) => (
                        <motion.div
                          key={i}
                          className="absolute w-4 h-4 bg-white/30 rounded-full"
                          style={{
                            left: '50%',
                            top: '50%',
                            transformOrigin: '0 0',
                          }}
                          animate={{
                            rotate: [0360],
                            scale: [1.51],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>
                  
                  {/* Floating Particles */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(15)].map((_i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-60"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                          y: [0-30],
                          opacity: [010],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: Math.random() * 2,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Use Cases Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Real-World Applications
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCaseindex) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 text-center group hover:transform hover:scale-105"
              >
                <useCase.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4 group-hover:text-cyan-300 transition-colors duration-300" />
                <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{useCase.description}</p>
                <div className="text-cyan-400 font-semibold text-sm">{useCase.impact}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-lg rounded-3xl p-16 border border-white/10"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Harness Quantum Power?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Join the quantum revolution and unlock unprecedented computational capabilities that will transform your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center gap-2"
              >
                Schedule Quantum Consultation
                <ArrowRight className="w-6 h-6" />
              </motion.button>
            </Link>
            <Link href="/quantum-computing-2025">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white/20 hover:border-white/40 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 backdrop-blur-lg"
              >
                Learn More About Quantum
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default QuantumComputingShowcase2025;
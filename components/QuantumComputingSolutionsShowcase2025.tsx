import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Atom, 
  Zap, 
  Shield, 
  Globe, 
  Cpu, 
  Database, 
  Lock, 
  Target,
  ArrowRight,
  Star,
  CheckCircle,
  Rocket,
  Brain,
  Lightbulb,
  TrendingUp,
  Users,
  Award,
  Play,
  Download,
  ExternalLink
} from 'lucide-react';

const QuantumComputingSolutionsShowcase2025: React.FC = () => {
  const [activeSolution, setActiveSolution] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const quantumSolutions = [
    {
      id: 'error-corrected',
      title: 'Error-Corrected Quantum Computers',
      subtitle: 'Breakthrough Quantum Processing',
      description: 'Revolutionary quantum computers with advanced error correction capabilities, delivering unprecedented computational power for real-world applications.',
      features: [
        '1 million+ logical qubits',
        '99.99% error correction rate',
        '10,000x speedup over classical computers',
        'Real-time quantum error correction',
        'Scalable quantum architecture'
      ],
      benefits: [
        'Exponential computational speedup',
        'Unbreakable quantum encryption',
        'Revolutionary drug discovery',
        'Climate modeling breakthroughs',
        'Financial optimization'
      ],
      stats: {
        qubits: '1M+',
        accuracy: '99.99%',
        speedup: '10,000x',
        uptime: '99.9%'
      },
      color: 'from-cyan-500 to-blue-600',
      icon: Atom,
      image: '/api/placeholder/600/400'
    },
    {
      id: 'quantum-internet',
      title: 'Quantum Internet Infrastructure',
      subtitle: 'Ultra-Secure Global Network',
      description: 'World\'s first quantum internet network providing unbreakable security and instant communication across the globe.',
      features: [
        'Quantum key distribution',
        'Entanglement-based communication',
        'Global quantum network nodes',
        'Zero-latency quantum teleportation',
        'Unbreakable quantum encryption'
      ],
      benefits: [
        '100% secure communication',
        'Instant global connectivity',
        'Quantum teleportation capabilities',
        'Revolutionary data privacy',
        'Future-proof infrastructure'
      ],
      stats: {
        nodes: '1000+',
        security: '100%',
        latency: '0ms',
        coverage: 'Global'
      },
      color: 'from-indigo-500 to-purple-600',
      icon: Globe,
      image: '/api/placeholder/600/400'
    },
    {
      id: 'quantum-ml',
      title: 'Quantum Machine Learning',
      subtitle: 'AI-Powered Quantum Algorithms',
      description: 'Advanced machine learning algorithms running on quantum hardware, delivering exponential speedup for complex AI tasks.',
      features: [
        'Quantum neural networks',
        'Exponential data processing',
        'Quantum optimization algorithms',
        'Advanced pattern recognition',
        'Quantum-enhanced AI models'
      ],
      benefits: [
        'Exponential AI performance',
        'Revolutionary data insights',
        'Advanced pattern recognition',
        'Quantum-optimized solutions',
        'Breakthrough AI capabilities'
      ],
      stats: {
        speedup: 'Exponential',
        accuracy: '99.9%',
        models: '1000+',
        efficiency: '1000x'
      },
      color: 'from-violet-500 to-pink-600',
      icon: Brain,
      image: '/api/placeholder/600/400'
    },
    {
      id: 'quantum-optimization',
      title: 'Quantum Optimization Engine',
      subtitle: 'Revolutionary Problem Solving',
      description: 'Quantum-powered optimization engine solving complex business problems with unprecedented speed and accuracy.',
      features: [
        'Quantum annealing algorithms',
        'Multi-objective optimization',
        'Real-time problem solving',
        'Scalable quantum solutions',
        'Advanced constraint handling'
      ],
      benefits: [
        'Optimal business solutions',
        'Massive cost savings',
        'Revolutionary efficiency gains',
        'Complex problem solving',
        'Competitive advantage'
      ],
      stats: {
        problems: 'Unlimited',
        speed: 'Real-time',
        accuracy: 'Optimal',
        savings: '90%+'
      },
      color: 'from-emerald-500 to-cyan-600',
      icon: Target,
      image: '/api/placeholder/600/400'
    }
  ];

  const useCases = [
    {
      title: 'Financial Services',
      description: 'Quantum algorithms for portfolio optimization, risk analysis, and fraud detection',
      icon: TrendingUp,
      results: '300% better returns, 99.9% fraud detection'
    },
    {
      title: 'Healthcare & Drug Discovery',
      description: 'Quantum computing for molecular simulation and drug discovery',
      icon: Award,
      results: '10x faster drug discovery, 95% accuracy'
    },
    {
      title: 'Climate Science',
      description: 'Advanced climate modeling and environmental optimization',
      icon: Globe,
      results: '1000x faster simulations, 99% accuracy'
    },
    {
      title: 'Cybersecurity',
      description: 'Quantum encryption and unbreakable security protocols',
      icon: Shield,
      results: '100% secure, unbreakable encryption'
    }
  ];

  const currentSolution = quantumSolutions[activeSolution];

  if (!isVisible) return null;

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 to-blue-600/10"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
            <Atom className="w-4 h-4" />
            QUANTUM COMPUTING SOLUTIONS 2025
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Revolutionary Quantum Solutions
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Experience the power of error-corrected quantum computers and quantum internet
          </p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Transform your business with quantum computing breakthroughs that deliver exponential speedup and unbreakable security
          </p>
        </motion.div>

        {/* Solution Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {quantumSolutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <button
                key={solution.id}
                onClick={() => setActiveSolution(index)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeSolution === index
                    ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                <Icon className="w-5 h-5" />
                {solution.title}
              </button>
            );
          })}
        </motion.div>

        {/* Main Solution Display */}
        <motion.div
          key={activeSolution}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16"
        >
          {/* Solution Info */}
          <div>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 text-cyan-300 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <currentSolution.icon className="w-4 h-4" />
              {currentSolution.subtitle}
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {currentSolution.title}
            </h3>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              {currentSolution.description}
            </p>

            {/* Features */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-white mb-4">Key Features</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentSolution.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {Object.entries(currentSolution.stats).map(([key, value]) => (
                <div key={key} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-1">
                    {value}
                  </div>
                  <div className="text-sm text-gray-400 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/quantum-solutions"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                Explore Solution
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <Play className="w-5 h-5" />
                Watch Demo
              </button>
            </div>
          </div>

          {/* Solution Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl mb-6 flex items-center justify-center">
                <div className="text-center">
                  <currentSolution.icon className="w-24 h-24 text-cyan-400 mx-auto mb-4" />
                  <div className="text-white text-xl font-semibold">{currentSolution.title}</div>
                </div>
              </div>
              
              {/* Benefits */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Key Benefits</h4>
                <div className="space-y-3">
                  {currentSolution.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Star className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Use Cases */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Real-World Applications
            </h3>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              See how quantum computing is transforming industries across the globe
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {useCase.title}
                  </h4>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {useCase.description}
                  </p>
                  <div className="text-cyan-400 text-sm font-semibold">
                    {useCase.results}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm border border-white/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Experience Quantum Computing?
            </h3>
            <p className="text-gray-300 mb-8 text-lg">
              Join the quantum revolution and transform your business with unprecedented computational power
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                Get Started Today
                <Rocket className="w-5 h-5" />
              </Link>
              <Link
                to="/quantum-case-studies"
                className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <Download className="w-5 h-5" />
                Download Whitepaper
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuantumComputingSolutionsShowcase2025;
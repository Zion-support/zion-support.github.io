import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Atom, 
  Cpu, 
  Zap, 
  Shield, 
  Lock, 
  Globe,
  ChevronRight,
  Play,
  Download,
  Share2,
  Star,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Users,
  Award
} from 'lucide-react';

interface QuantumSolution {
  id: string;
  title: string;
  description: string;
  category: string;
  qubits: string;
  coherence: string;
  applications: string[];
  benefits: string[];
  metrics: {
    speed: string;
    security: string;
    efficiency: string;
  };
  image: string;
  videoUrl?: string;
  whitepaperUrl?: string;
  status: 'available' | 'beta' | 'research';
}

const quantumSolutions: QuantumSolution[] = [
  {
    id: 'quantum-optimization-engine',
    title: 'Quantum Optimization Engine 2025',
    description: 'Revolutionary quantum computing solution that solves complex optimization problems exponentially faster than classical computers, delivering unprecedented performance for logistics, finance, and resource allocation.',
    category: 'Optimization',
    qubits: '1,000+',
    coherence: '100ms',
    applications: [
      'Supply chain optimization',
      'Portfolio optimization',
      'Route planning',
      'Resource allocation',
      'Scheduling optimization'
    ],
    benefits: [
      'Exponential speedup over classical methods',
      'Handles NP-hard problems efficiently',
      'Real-time optimization capabilities',
      'Scalable to enterprise workloads',
      'Integration with existing systems'
    ],
    metrics: {
      speed: '10^6x faster',
      security: 'Quantum-safe',
      efficiency: '99.9% accuracy'
    },
    image: '/images/quantum-optimization.jpg',
    videoUrl: '/videos/quantum-optimization-demo.mp4',
    whitepaperUrl: '/downloads/quantum-optimization-whitepaper.pdf',
    status: 'available'
  },
  {
    id: 'quantum-machine-learning',
    title: 'Quantum Machine Learning Platform',
    description: 'Advanced quantum machine learning algorithms that leverage quantum superposition and entanglement to process data in ways impossible with classical computers, enabling breakthrough insights and predictions.',
    category: 'Machine Learning',
    qubits: '500+',
    coherence: '50ms',
    applications: [
      'Pattern recognition',
      'Drug discovery',
      'Financial modeling',
      'Climate prediction',
      'Image processing'
    ],
    benefits: [
      'Quantum advantage in specific algorithms',
      'Enhanced pattern recognition',
      'Faster training times',
      'Better generalization',
      'Novel quantum algorithms'
    ],
    metrics: {
      speed: '100x faster training',
      security: 'Quantum encryption',
      efficiency: '95% accuracy improvement'
    },
    image: '/images/quantum-ml.jpg',
    videoUrl: '/videos/quantum-ml-demo.mp4',
    status: 'beta'
  },
  {
    id: 'quantum-cryptography',
    title: 'Quantum Cryptography Suite',
    description: 'Next-generation quantum cryptography solutions providing unbreakable security through quantum key distribution and quantum random number generation, ensuring future-proof data protection.',
    category: 'Security',
    qubits: '100+',
    coherence: '200ms',
    applications: [
      'Secure communications',
      'Financial transactions',
      'Government communications',
      'Healthcare data',
      'Critical infrastructure'
    ],
    benefits: [
      'Unbreakable quantum encryption',
      'Quantum key distribution',
      'Perfect forward secrecy',
      'Detection of eavesdropping',
      'Post-quantum cryptography'
    ],
    metrics: {
      speed: 'Real-time encryption',
      security: 'Unbreakable',
      efficiency: 'Zero key compromise'
    },
    image: '/images/quantum-crypto.jpg',
    videoUrl: '/videos/quantum-crypto-demo.mp4',
    whitepaperUrl: '/downloads/quantum-crypto-whitepaper.pdf',
    status: 'available'
  },
  {
    id: 'quantum-simulation',
    title: 'Quantum Simulation Environment',
    description: 'Comprehensive quantum simulation platform for modeling complex quantum systems, enabling research and development in materials science, chemistry, and physics.',
    category: 'Simulation',
    qubits: '2,000+',
    coherence: '150ms',
    applications: [
      'Materials discovery',
      'Drug development',
      'Chemical reactions',
      'Quantum chemistry',
      'Physics research'
    ],
    benefits: [
      'Exact quantum system modeling',
      'Scalable simulation capabilities',
      'High-fidelity results',
      'Research collaboration tools',
      'Cloud-based access'
    ],
    metrics: {
      speed: 'Exact simulation',
      security: 'Research-grade',
      efficiency: '99.99% fidelity'
    },
    image: '/images/quantum-simulation.jpg',
    status: 'research'
  }
];

const QuantumComputingSolutions2025Showcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSolution, setSelectedSolution] = useState<QuantumSolution | null>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const categories = ['all', ...Array.from(new Set(quantumSolutions.map(solution => solution.category)))];

  const filteredSolutions = selectedCategory === 'all' 
    ? quantumSolutions 
    : quantumSolutions.filter(solution => solution.category === selectedCategory);

  const handleDownload = (url: string) => {
    window.open(url, '_blank');
  };

  const handleShare = (solution: QuantumSolution) => {
    if (navigator.share) {
      navigator.share({
        title: solution.title,
        text: solution.description,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold mb-4">
            <Atom className="w-4 h-4 mr-2" />
            Quantum Computing Solutions 2025
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Quantum-Powered Innovation
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Harness the power of quantum computing to solve problems that are impossible for classical computers, delivering breakthrough solutions across industries.
          </p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"
        >
          <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
            <div className="text-3xl font-bold text-indigo-400 mb-2">1,000+</div>
            <div className="text-gray-300">Qubits Available</div>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
            <div className="text-3xl font-bold text-purple-400 mb-2">10^6x</div>
            <div className="text-gray-300">Speed Improvement</div>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
            <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
            <div className="text-gray-300">Accuracy Rate</div>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
            <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
            <div className="text-gray-300">Quantum Access</div>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {category === 'all' ? 'All Solutions' : category}
            </button>
          ))}
        </motion.div>

        {/* Solutions Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          <AnimatePresence>
            {filteredSolutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer group relative overflow-hidden"
                onMouseEnter={() => setHoveredCard(solution.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => setSelectedSolution(solution)}
              >
                {/* Quantum Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Status Badge */}
                <div className="flex justify-between items-start mb-4 relative z-10">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    solution.status === 'available' ? 'bg-green-500/20 text-green-400' :
                    solution.status === 'beta' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-blue-500/20 text-blue-400'
                  }`}>
                    {solution.status === 'available' ? 'Available' : solution.status === 'beta' ? 'Beta' : 'Research'}
                  </span>
                  <div className="flex space-x-2">
                    {solution.videoUrl && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedSolution(solution);
                        }}
                        className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                      >
                        <Play className="w-4 h-4 text-white" />
                      </button>
                    )}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleShare(solution);
                      }}
                      className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    >
                      <Share2 className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>

                {/* Image */}
                <div className="relative mb-4 rounded-xl overflow-hidden">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-white font-bold text-lg">{solution.title}</h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm mb-4 line-clamp-3 relative z-10">
                  {solution.description}
                </p>

                {/* Quantum Specs */}
                <div className="grid grid-cols-2 gap-4 mb-4 relative z-10">
                  <div className="text-center p-3 bg-white/5 rounded-lg">
                    <div className="text-lg font-bold text-indigo-400">{solution.qubits}</div>
                    <div className="text-xs text-gray-400">Qubits</div>
                  </div>
                  <div className="text-center p-3 bg-white/5 rounded-lg">
                    <div className="text-lg font-bold text-purple-400">{solution.coherence}</div>
                    <div className="text-xs text-gray-400">Coherence</div>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 mb-4 relative z-10">
                  <div className="text-center">
                    <div className="text-sm font-bold text-indigo-400">{solution.metrics.speed}</div>
                    <div className="text-xs text-gray-400">Speed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-bold text-green-400">{solution.metrics.security}</div>
                    <div className="text-xs text-gray-400">Security</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-bold text-blue-400">{solution.metrics.efficiency}</div>
                    <div className="text-xs text-gray-400">Efficiency</div>
                  </div>
                </div>

                {/* Applications Preview */}
                <div className="space-y-2 mb-4 relative z-10">
                  <div className="text-sm font-semibold text-white">Applications:</div>
                  <div className="flex flex-wrap gap-1">
                    {solution.applications.slice(0, 3).map((app, idx) => (
                      <span key={idx} className="px-2 py-1 bg-indigo-500/20 text-indigo-300 text-xs rounded">
                        {app}
                      </span>
                    ))}
                    {solution.applications.length > 3 && (
                      <span className="px-2 py-1 bg-gray-500/20 text-gray-300 text-xs rounded">
                        +{solution.applications.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Button */}
                <button className="w-full mt-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group relative z-10">
                  Explore Solution
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-2xl p-8 border border-white/10"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready for Quantum Computing?
          </h3>
          <p className="text-xl text-gray-300 mb-8">
            Join the quantum revolution and unlock unprecedented computational power for your most challenging problems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300">
              Start Quantum Trial
            </button>
            <button className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
              Download Whitepaper
            </button>
          </div>
        </motion.div>
      </div>

      {/* Modal for Detailed View */}
      <AnimatePresence>
        {selectedSolution && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedSolution(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-slate-900 rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-3xl font-bold text-white">{selectedSolution.title}</h2>
                <button
                  onClick={() => setSelectedSolution(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <img
                    src={selectedSolution.image}
                    alt={selectedSolution.title}
                    className="w-full h-64 object-cover rounded-xl mb-6"
                  />
                  {selectedSolution.videoUrl && (
                    <div className="mb-6">
                      <video
                        controls
                        className="w-full rounded-xl"
                        poster={selectedSolution.image}
                      >
                        <source src={selectedSolution.videoUrl} type="video/mp4" />
                      </video>
                    </div>
                  )}
                </div>

                <div>
                  <p className="text-gray-300 mb-6">{selectedSolution.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-4 bg-white/5 rounded-lg">
                      <div className="text-2xl font-bold text-indigo-400">{selectedSolution.qubits}</div>
                      <div className="text-sm text-gray-400">Qubits</div>
                    </div>
                    <div className="text-center p-4 bg-white/5 rounded-lg">
                      <div className="text-2xl font-bold text-purple-400">{selectedSolution.coherence}</div>
                      <div className="text-sm text-gray-400">Coherence Time</div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Applications</h4>
                    <div className="space-y-2">
                      {selectedSolution.applications.map((app, idx) => (
                        <div key={idx} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span>{app}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Benefits</h4>
                    <div className="space-y-2">
                      {selectedSolution.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center text-gray-300">
                          <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    {selectedSolution.whitepaperUrl && (
                      <button
                        onClick={() => handleDownload(selectedSolution.whitepaperUrl!)}
                        className="flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download Whitepaper
                      </button>
                    )}
                    <button className="flex items-center px-6 py-3 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default QuantumComputingSolutions2025Showcase;
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Atom, 
  Cpu, 
  Zap, 
  Shield, 
  Globe, 
  Rocket, 
  Star,
  ArrowRight,
  Play,
  BookOpen,
  Users,
  TrendingUp,
  CheckCircle,
  Sparkles,
  Brain,
  Database,
  Lock,
  Gauge
} from 'lucide-react';

interface QuantumSolution {
  id: string;
  title: string;
  description: string;
  category: string;
  qubits: number;
  features: string[];
  applications: string[];
  image: string;
  link: string;
  isNew: boolean;
  isFeatured: boolean;
  performance: number;
  security: number;
  scalability: number;
  publishedDate: string;
}

const quantumSolutions: QuantumSolution[] = [
  {
    id: 'quantum-ai-processor',
    title: 'Quantum AI Processing Unit',
    description: 'Revolutionary quantum processor that performs AI computations 1000x faster than classical computers with unprecedented accuracy.',
    category: 'Quantum AI',
    qubits: 1000,
    features: [
      '1000+ qubit processing',
      'Quantum error correction',
      'AI model acceleration',
      'Real-time optimization'
    ],
    applications: [
      'Machine Learning',
      'Neural Networks',
      'Optimization Problems',
      'Pattern Recognition'
    ],
    image: '/images/quantum-ai-processor.jpg',
    link: '/quantum-ai-processor',
    isNew: true,
    isFeatured: true,
    performance: 95,
    security: 98,
    scalability: 92,
    publishedDate: '2026-01-20'
  },
  {
    id: 'quantum-encryption-system',
    title: 'Quantum Encryption System',
    description: 'Unbreakable quantum encryption that provides absolute security for data transmission and storage using quantum key distribution.',
    category: 'Quantum Security',
    qubits: 512,
    features: [
      'Quantum key distribution',
      'Unbreakable encryption',
      'Real-time key generation',
      'Zero-knowledge protocols'
    ],
    applications: [
      'Financial Services',
      'Government',
      'Healthcare',
      'Critical Infrastructure'
    ],
    image: '/images/quantum-encryption.jpg',
    link: '/quantum-encryption',
    isNew: true,
    isFeatured: true,
    performance: 99,
    security: 100,
    scalability: 88,
    publishedDate: '2026-01-18'
  },
  {
    id: 'quantum-optimization-engine',
    title: 'Quantum Optimization Engine',
    description: 'Advanced quantum algorithms that solve complex optimization problems in logistics, finance, and resource allocation.',
    category: 'Quantum Optimization',
    qubits: 2048,
    features: [
      'Exponential speedup',
      'Complex problem solving',
      'Multi-objective optimization',
      'Real-time solutions'
    ],
    applications: [
      'Supply Chain',
      'Portfolio Optimization',
      'Route Planning',
      'Resource Allocation'
    ],
    image: '/images/quantum-optimization.jpg',
    link: '/quantum-optimization',
    isNew: false,
    isFeatured: true,
    performance: 97,
    security: 85,
    scalability: 95,
    publishedDate: '2026-01-15'
  },
  {
    id: 'quantum-simulation-platform',
    title: 'Quantum Simulation Platform',
    description: 'Comprehensive quantum simulation environment for modeling complex quantum systems and materials science applications.',
    category: 'Quantum Simulation',
    qubits: 4096,
    features: [
      'High-fidelity simulation',
      'Material science modeling',
      'Drug discovery',
      'Climate modeling'
    ],
    applications: [
      'Materials Science',
      'Drug Discovery',
      'Climate Research',
      'Physics Research'
    ],
    image: '/images/quantum-simulation.jpg',
    link: '/quantum-simulation',
    isNew: false,
    isFeatured: false,
    performance: 94,
    security: 90,
    scalability: 98,
    publishedDate: '2026-01-10'
  },
  {
    id: 'quantum-machine-learning',
    title: 'Quantum Machine Learning Suite',
    description: 'Quantum-enhanced machine learning algorithms that provide superior performance for complex data analysis tasks.',
    category: 'Quantum ML',
    qubits: 1024,
    features: [
      'Quantum neural networks',
      'Quantum feature mapping',
      'Quantum clustering',
      'Quantum classification'
    ],
    applications: [
      'Data Analysis',
      'Pattern Recognition',
      'Predictive Modeling',
      'Anomaly Detection'
    ],
    image: '/images/quantum-ml.jpg',
    link: '/quantum-ml',
    isNew: false,
    isFeatured: false,
    performance: 96,
    security: 88,
    scalability: 90,
    publishedDate: '2026-01-05'
  },
  {
    id: 'quantum-cloud-platform',
    title: 'Quantum Cloud Platform',
    description: 'Scalable quantum computing platform accessible via cloud with enterprise-grade security and performance.',
    category: 'Quantum Cloud',
    qubits: 8192,
    features: [
      'Cloud-based access',
      'Enterprise security',
      'Scalable resources',
      'API integration'
    ],
    applications: [
      'Enterprise Solutions',
      'Research & Development',
      'Education',
      'Startups'
    ],
    image: '/images/quantum-cloud.jpg',
    link: '/quantum-cloud',
    isNew: false,
    isFeatured: false,
    performance: 93,
    security: 95,
    scalability: 100,
    publishedDate: '2025-12-28'
  }
];

const RevolutionaryQuantumComputingShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [filteredSolutions, setFilteredSolutions] = useState<QuantumSolution[]>(quantumSolutions);

  const categories = ['All', 'Quantum AI', 'Quantum Security', 'Quantum Optimization', 'Quantum Simulation', 'Quantum ML', 'Quantum Cloud'];

  useEffect(() => {
    let filtered = quantumSolutions;

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(solution => solution.category === selectedCategory);
    }

    switch (sortBy) {
      case 'featured':
        filtered = filtered.filter(solution => solution.isFeatured).concat(filtered.filter(solution => !solution.isFeatured));
        break;
      case 'newest':
        filtered = filtered.sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime());
        break;
      case 'qubits':
        filtered = filtered.sort((a, b) => b.qubits - a.qubits);
        break;
      case 'performance':
        filtered = filtered.sort((a, b) => b.performance - a.performance);
        break;
    }

    setFilteredSolutions(filtered);
  }, [selectedCategory, sortBy]);

  const getPerformanceColor = (score: number) => {
    if (score >= 95) return 'text-green-400';
    if (score >= 90) return 'text-yellow-400';
    if (score >= 85) return 'text-orange-400';
    return 'text-red-400';
  };

  const getPerformanceBg = (score: number) => {
    if (score >= 95) return 'bg-green-500';
    if (score >= 90) return 'bg-yellow-500';
    if (score >= 85) return 'bg-orange-500';
    return 'bg-red-500';
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Atom className="w-4 h-4" />
            Revolutionary Quantum Computing
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Quantum Solutions That Transform Reality
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the power of quantum computing with our revolutionary solutions that solve impossible problems and unlock new possibilities.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"
        >
          <div className="text-center bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
            <div className="text-3xl font-bold text-blue-400 mb-2">1000x</div>
            <div className="text-gray-300">Faster Processing</div>
          </div>
          <div className="text-center bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
            <div className="text-3xl font-bold text-cyan-400 mb-2">8192</div>
            <div className="text-gray-300">Maximum Qubits</div>
          </div>
          <div className="text-center bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
            <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
            <div className="text-gray-300">Accuracy Rate</div>
          </div>
          <div className="text-center bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
            <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
            <div className="text-gray-300">Security Level</div>
          </div>
        </motion.div>

        {/* Filters and Sorting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col md:flex-row gap-4 justify-between items-center mb-12"
        >
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none"
          >
            <option value="featured">Featured First</option>
            <option value="newest">Newest First</option>
            <option value="qubits">Most Qubits</option>
            <option value="performance">Best Performance</option>
          </select>
        </motion.div>

        {/* Solutions Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredSolutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
            >
              {/* Badges */}
              <div className="absolute top-4 left-4 z-10 flex gap-2">
                {solution.isNew && (
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    NEW
                  </span>
                )}
                {solution.isFeatured && (
                  <span className="bg-yellow-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    FEATURED
                  </span>
                )}
              </div>

              {/* Qubit Count */}
              <div className="absolute top-4 right-4 z-10">
                <div className="bg-blue-600/20 backdrop-blur-sm text-blue-400 px-3 py-1 rounded-full text-sm font-semibold">
                  {solution.qubits} Qubits
                </div>
              </div>

              {/* Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Atom className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-blue-400 text-sm font-medium">{solution.category}</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="text-gray-300 text-sm">Featured</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {solution.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                  {solution.description}
                </p>

                {/* Performance Metrics */}
                <div className="mb-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-xs">Performance</span>
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${getPerformanceBg(solution.performance)}`}
                          style={{ width: `${solution.performance}%` }}
                        />
                      </div>
                      <span className={`text-xs font-semibold ${getPerformanceColor(solution.performance)}`}>
                        {solution.performance}%
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-xs">Security</span>
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${getPerformanceBg(solution.security)}`}
                          style={{ width: `${solution.security}%` }}
                        />
                      </div>
                      <span className={`text-xs font-semibold ${getPerformanceColor(solution.security)}`}>
                        {solution.security}%
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-xs">Scalability</span>
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${getPerformanceBg(solution.scalability)}`}
                          style={{ width: `${solution.scalability}%` }}
                        />
                      </div>
                      <span className={`text-xs font-semibold ${getPerformanceColor(solution.scalability)}`}>
                        {solution.scalability}%
                      </span>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {solution.features.slice(0, 2).map((feature, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                    {solution.features.length > 2 && (
                      <span className="text-gray-400 text-xs">
                        +{solution.features.length - 2} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Applications */}
                <div className="mb-4">
                  <div className="text-gray-400 text-xs mb-1">Applications:</div>
                  <div className="flex flex-wrap gap-1">
                    {solution.applications.slice(0, 2).map((app, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-600/20 text-blue-400 px-2 py-1 rounded text-xs"
                      >
                        {app}
                      </span>
                    ))}
                    {solution.applications.length > 2 && (
                      <span className="text-gray-400 text-xs">
                        +{solution.applications.length - 2} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Button */}
                <Link
                  to={solution.link}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 group-hover:scale-105"
                >
                  <span>Explore Quantum Solution</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-2xl p-8 border border-blue-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready for the Quantum Revolution?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join the quantum computing revolution and unlock unprecedented computational power for your business challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/quantum-solutions"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
              >
                <Atom className="w-5 h-5" />
                Explore Quantum Solutions
              </Link>
              <Link
                to="/quantum-demo"
                className="inline-flex items-center gap-2 bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-700 transition-all duration-300 border border-gray-700"
              >
                <Play className="w-5 h-5" />
                Watch Demo
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RevolutionaryQuantumComputingShowcase;
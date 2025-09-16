import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Globe, 
  Shield, 
  Cpu, 
  Database, 
  TrendingUp, 
  Users,
  ChevronRight,
  Star,
  Award,
  Rocket
} from 'lucide-react';

interface InnovationItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: string;
  impact: number;
  status: 'active' | 'beta' | 'coming-soon';
  features: string[];
}

const AIInnovationShowcase2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedInnovation, setSelectedInnovation] = useState<InnovationItem | null>(null);

  const innovations: InnovationItem[] = [
    {
      id: 'quantum-ai',
      title: 'Quantum-Enhanced AI Processing',
      description: 'Revolutionary quantum computing integration with AI algorithms for unprecedented processing power and speed.',
      icon: <Brain className="w-8 h-8" />,
      category: 'processing',
      impact: 95,
      status: 'active',
      features: ['1000x faster processing', 'Quantum entanglement optimization', 'Advanced pattern recognition']
    },
    {
      id: 'neural-synthesis',
      title: 'Neural Network Synthesis Engine',
      description: 'Automated creation and optimization of neural networks using advanced synthesis algorithms.',
      icon: <Cpu className="w-8 h-8" />,
      category: 'development',
      impact: 88,
      status: 'active',
      features: ['Auto-architecture generation', 'Performance optimization', 'Cross-platform deployment']
    },
    {
      id: 'conscious-ai',
      title: 'Consciousness Simulation Framework',
      description: 'Advanced AI consciousness modeling for more human-like interactions and decision-making.',
      icon: <Users className="w-8 h-8" />,
      category: 'interaction',
      impact: 92,
      status: 'beta',
      features: ['Emotional intelligence', 'Contextual understanding', 'Ethical decision making']
    },
    {
      id: 'predictive-automation',
      title: 'Predictive Business Automation',
      description: 'AI-powered automation that predicts and prevents issues before they occur.',
      icon: <TrendingUp className="w-8 h-8" />,
      category: 'automation',
      impact: 90,
      status: 'active',
      features: ['Predictive analytics', 'Proactive maintenance', 'Risk mitigation']
    },
    {
      id: 'global-intelligence',
      title: 'Global Intelligence Network',
      description: 'Distributed AI network connecting intelligence across multiple platforms and regions.',
      icon: <Globe className="w-8 h-8" />,
      category: 'infrastructure',
      impact: 87,
      status: 'beta',
      features: ['Distributed processing', 'Real-time synchronization', 'Multi-region deployment']
    },
    {
      id: 'security-ai',
      title: 'Advanced AI Security Suite',
      description: 'Next-generation AI-powered security systems with autonomous threat detection and response.',
      icon: <Shield className="w-8 h-8" />,
      category: 'security',
      impact: 94,
      status: 'active',
      features: ['Autonomous threat detection', 'Real-time response', 'Adaptive defense']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Innovations', icon: <Star className="w-5 h-5" /> },
    { id: 'processing', name: 'Processing', icon: <Cpu className="w-5 h-5" /> },
    { id: 'development', name: 'Development', icon: <Database className="w-5 h-5" /> },
    { id: 'interaction', name: 'Interaction', icon: <Users className="w-5 h-5" /> },
    { id: 'automation', name: 'Automation', icon: <Zap className="w-5 h-5" /> },
    { id: 'infrastructure', name: 'Infrastructure', icon: <Globe className="w-5 h-5" /> },
    { id: 'security', name: 'Security', icon: <Shield className="w-5 h-5" /> }
  ];

  const filteredInnovations = selectedCategory === 'all' 
    ? innovations 
    : innovations.filter(innovation => innovation.category === selectedCategory);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800 border-green-200';
      case 'beta': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'coming-soon': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getImpactColor = (impact: number) => {
    if (impact >= 90) return 'text-green-600';
    if (impact >= 80) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-medium mb-6">
            <Rocket className="w-5 h-5" />
            AI Innovation Showcase 2025
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">
            Revolutionary AI Technologies
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the cutting-edge AI innovations that are transforming industries and reshaping the future of technology.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 backdrop-blur-sm'
              }`}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Innovations Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredInnovations.map((innovation, index) => (
            <motion.div
              key={innovation.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 cursor-pointer group"
              onClick={() => setSelectedInnovation(innovation)}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white">
                  {innovation.icon}
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(innovation.status)}`}>
                  {innovation.status.replace('-', ' ')}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                {innovation.title}
              </h3>

              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                {innovation.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-400">Impact Score:</span>
                  <span className={`font-bold ${getImpactColor(innovation.impact)}`}>
                    {innovation.impact}%
                  </span>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Innovation Detail Modal */}
        <AnimatePresence>
          {selectedInnovation && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedInnovation(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white">
                      {selectedInnovation.icon}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">
                        {selectedInnovation.title}
                      </h2>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(selectedInnovation.status)}`}>
                        {selectedInnovation.status.replace('-', ' ')}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedInnovation(null)}
                    className="text-gray-400 hover:text-gray-600 text-2xl"
                  >
                    ×
                  </button>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {selectedInnovation.description}
                </p>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {selectedInnovation.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3 text-gray-600">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-yellow-500" />
                    <span className="text-sm text-gray-500">Impact Score:</span>
                    <span className={`font-bold ${getImpactColor(selectedInnovation.impact)}`}>
                      {selectedInnovation.impact}%
                    </span>
                  </div>
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {[
            { label: 'Active Innovations', value: '50+', icon: <Rocket className="w-8 h-8" /> },
            { label: 'Beta Technologies', value: '25+', icon: <Zap className="w-8 h-8" /> },
            { label: 'Global Impact', value: '95%', icon: <Globe className="w-8 h-8" /> },
            { label: 'Industry Adoption', value: '78%', icon: <TrendingUp className="w-8 h-8" /> }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AIInnovationShowcase2025;
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Microscope, 
  Atom, 
  Wifi, 
  Shield, 
  Cpu, 
  Database, 
  TrendingUp, 
  Users,
  ChevronRight,
  Star,
  Award,
  Globe,
  Zap,
  Brain,
  Eye,
  Lock
} from 'lucide-react';
interface TechTrend {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: string;
  timeline: string;
  impact: 'high' | 'medium' | 'low';
  adoption: number;
  features: string[];
  companies: string[];
const FutureTechTrendsShowcase2025: React.FC = () => {
  const [selectedTrend, setSelectedTrend] = useState<TechTrend | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const trends: TechTrend[] = [
    {
      id: 'quantum-computing',
      title: 'Quantum Computing Revolution',
      description: 'Breakthrough quantum processors achieving quantum supremacy in real-world applications.',
      icon: <Atom className="w-8 h-8" />,
      category: 'computing',
      timeline: '2025-2027',
      impact: 'high',
      adoption: 85,
      features: ['Quantum supremacy', 'Error correction', 'Scalable systems'],
      companies: ['IBM', 'Google', 'Microsoft', 'IonQ']
    },
    {
      id: 'ai-consciousness',
      title: 'Artificial Consciousness',
      description: 'AI systems developing genuine consciousness and self-awareness capabilities.',
      icon: <Brain className="w-8 h-8" />,
      category: 'ai',
      timeline: '2025-2030',
      impact: 'high',
      adoption: 72,
      features: ['Self-awareness', 'Emotional intelligence', 'Creative thinking'],
      companies: ['OpenAI', 'Anthropic', 'DeepMind', 'Meta']
    },
    {
      id: 'neural-interfaces',
      title: 'Neural Interface Technology',
      description: 'Direct brain-computer interfaces enabling seamless human-AI interaction.',
      icon: <Eye className="w-8 h-8" />,
      category: 'biotech',
      timeline: '2025-2028',
      impact: 'high',
      adoption: 68,
      features: ['Brain-computer interface', 'Thought control', 'Memory enhancement'],
      companies: ['Neuralink', 'Synchron', 'Blackrock', 'Paradromics']
    },
    {
      id: 'quantum-encryption',
      title: 'Quantum-Safe Cryptography',
      description: 'Post-quantum cryptographic systems resistant to quantum attacks.',
      icon: <Lock className="w-8 h-8" />,
      category: 'security',
      timeline: '2025-2026',
      impact: 'high',
      adoption: 90,
      features: ['Quantum-resistant', 'Lattice-based crypto', 'Zero-knowledge proofs'],
      companies: ['IBM', 'Microsoft', 'Google', 'NIST']
    },
    {
      id: '6g-networks',
      title: '6G Wireless Networks',
      description: 'Next-generation wireless networks with terahertz frequencies and AI integration.',
      icon: <Wifi className="w-8 h-8" />,
      category: 'connectivity',
      timeline: '2025-2029',
      impact: 'medium',
      adoption: 45,
      features: ['Terahertz frequencies', 'AI-powered optimization', 'Ultra-low latency'],
      companies: ['Nokia', 'Ericsson', 'Samsung', 'Huawei']
    },
    {
      id: 'synthetic-biology',
      title: 'Synthetic Biology Platform',
      description: 'Engineered biological systems for manufacturing, medicine, and environmental solutions.',
      icon: <Microscope className="w-8 h-8" />,
      category: 'biotech',
      timeline: '2025-2027',
      impact: 'high',
      adoption: 55,
      features: ['Programmable cells', 'Bio-manufacturing', 'Environmental remediation'],
      companies: ['Ginkgo Bioworks', 'Synthetic Genomics', 'Amyris', 'Zymergen']
    }
  ];
  const categories = [
    { id: 'all', name: 'All Trends', icon: <Star className="w-5 h-5" /> },
    { id: 'computing', name: 'Computing', icon: <Cpu className="w-5 h-5" /> },
    { id: 'ai', name: 'AI', icon: <Brain className="w-5 h-5" /> },
    { id: 'biotech', name: 'Biotech', icon: <Microscope className="w-5 h-5" /> },
    { id: 'security', name: 'Security', icon: <Shield className="w-5 h-5" /> },
    { id: 'connectivity', name: 'Connectivity', icon: <Wifi className="w-5 h-5" /> }
  ];
  const filteredTrends = selectedCategory === 'all' 
    ? trends 
    : trends.filter(trend => trend.category === selectedCategory);
  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };
  const getAdoptionColor = (adoption: number) => {
    if (adoption >= 80) return 'text-green-600';
    if (adoption >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-medium mb-6">
            <Zap className="w-5 h-5" />
            Future Tech Trends 2025
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">
            Tomorrow's Technology Today
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore the revolutionary technologies that will define the next decade and transform our world.
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
                  ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 backdrop-blur-sm'
              }`}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </motion.div>
        {/* Trends Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredTrends.map((trend, index) => (
            <motion.div
              key={trend.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 cursor-pointer group"
              onClick={() => setSelectedTrend(trend)}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl text-white">
                  {trend.icon}
                </div>
                <div className="text-right">
                  <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getImpactColor(trend.impact)}`}>
                    {trend.impact} impact
                  </div>
                  <div className="text-xs text-gray-300 mt-1">{trend.timeline}</div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-pink-300 transition-colors">
                {trend.title}
              </h3>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                {trend.description}
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Industry Adoption:</span>
                  <span className={`font-bold ${getAdoptionColor(trend.adoption)}`}>
                    {trend.adoption}%
                  </span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {trend.features.slice(0, 2).map((feature, idx) => (
                    <span key={idx} className="text-xs bg-white/10 px-2 py-1 rounded text-gray-300">
                      {feature}
                    </span>
                  ))}
                  {trend.features.length > 2 && (
                    <span className="text-xs text-gray-400">+{trend.features.length - 2} more</span>
                  )}
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors ml-auto" />
              </div>
            </motion.div>
          ))}
        </motion.div>
        {/* Trend Detail Modal */}
        <AnimatePresence>
          {selectedTrend && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedTrend(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-2xl p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl text-white">
                      {selectedTrend.icon}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">
                        {selectedTrend.title}
                      </h2>
                      <div className="flex items-center gap-4 mt-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getImpactColor(selectedTrend.impact)}`}>
                          {selectedTrend.impact} impact
                        </span>
                        <span className="text-sm text-gray-500">{selectedTrend.timeline}</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedTrend(null)}
                    className="text-gray-400 hover:text-gray-600 text-2xl"
                  >
                    ×
                  </button>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {selectedTrend.description}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
                    <ul className="space-y-2">
                      {selectedTrend.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-3 text-gray-600">
                          <div className="w-2 h-2 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Leading Companies</h3>
                    <ul className="space-y-2">
                      {selectedTrend.companies.map((company, index) => (
                        <li key={index} className="flex items-center gap-3 text-gray-600">
                          <div className="w-2 h-2 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full"></div>
                          {company}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-green-500" />
                      <span className="text-sm text-gray-500">Adoption Rate:</span>
                      <span className={`font-bold ${getAdoptionColor(selectedTrend.adoption)}`}>
                        {selectedTrend.adoption}%
                      </span>
                    </div>
                  </div>
                  <button className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300">
                    Track Progress
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        {/* Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {[
            { label: 'Active Trends', value: '25+', icon: <Zap className="w-8 h-8" /> },
            { label: 'High Impact', value: '18', icon: <Award className="w-8 h-8" /> },
            { label: 'Market Size', value: '$2.5T', icon: <TrendingUp className="w-8 h-8" /> },
            { label: 'Global Reach', value: '95%', icon: <Globe className="w-8 h-8" /> }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl text-white mb-4">
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

export default FutureTechTrendsShowcase2025;

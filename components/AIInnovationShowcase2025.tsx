"use client";
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain
  Zap
  Globe
  Rocket
  Target,
  TrendingUp,
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  Lightbulb,
  Code,
  BarChart3,
  Lock,
  RefreshCw,
  Sparkles
} from 'lucide-react';

interface Innovation {
  id: string;
  title: string;
  description: string;
  category: string;
  impact: string;
  status: 'released' | 'beta' | 'coming-soon';
  features: string[];
  icon: React.ComponentType<any>;
  color: string;
  metrics: {
    efficiency: number;
    accuracy: number;
    adoption: number;
  };
}

const innovations: Innovation[] = [
  {
    id: 'neural-consensus',
    title: 'Neural Consensus Engine',
    description: 'Revolutionary AI system that achieves consensus across distributed neural networksenabling unprecedented decision-making capabilities.',
    category: 'AI Architecture',
    impact: 'High',
    status: 'released',
    features: ['Distributed 'Learning', 'Consensus 'Algorithms', 'Real-time 'Adaptation', 'Scalable Architecture'],
    icon: Brain,
    color: 'from-purple-500 to-pink-500',
    metrics: { efficiency: 95accuracy: 98adoption: 87 }
  },
  {
    id: 'quantum-ai-fusion',
    title: 'Quantum-AI Fusion Platform',
    description: 'Breakthrough integration of quantum computing with artificial intelligencedelivering exponential performance improvements.',
    category: 'Quantum Computing',
    impact: 'Revolutionary',
    status: 'beta',
    features: ['Quantum 'Algorithms', 'AI 'Optimization', 'Parallel 'Processing', 'Error Correction'],
    icon: Cpu,
    color: 'from-blue-500 to-cyan-500',
    metrics: { efficiency: 99accuracy: 99adoption: 45 }
  },
  {
    id: 'autonomous-systems',
    title: 'Autonomous Business Systems',
    description: 'Self-managing AI systems that autonomously optimize business processesreducing human intervention by 90%.',
    category: 'Automation',
    impact: 'High',
    status: 'released',
    features: ['Self-'Healing', 'Auto-'Optimization', 'Predictive 'Maintenance', 'Adaptive Learning'],
    icon: RefreshCw,
    color: 'from-green-500 to-emerald-500',
    metrics: { efficiency: 92accuracy: 94adoption: 78 }
  },
  {
    id: 'neural-interfaces',
    title: 'Neural Interface Technology',
    description: 'Direct brain-computer interfaces that enable seamless interaction between human cognition and AI systems.',
    category: 'Human-AI Interaction',
    impact: 'Revolutionary',
    status: 'coming-soon',
    features: ['Brain-Computer 'Interface', 'Thought 'Recognition', 'Neural 'Feedback', 'Cognitive Enhancement'],
    icon: Target,
    color: 'from-orange-500 to-red-500',
    metrics: { efficiency: 88accuracy: 91adoption: 23 }
  },
  {
    id: 'ai-security',
    title: 'AI-Powered Security Suite',
    description: 'Advanced AI security systems that detect and prevent threats in real-time with 99.9% accuracy.',
    category: 'Security',
    impact: 'High',
    status: 'released',
    features: ['Threat 'Detection', 'Real-time 'Response', 'Behavioral 'Analysis', 'Zero-day Protection'],
    icon: Shield,
    color: 'from-red-500 to-pink-500',
    metrics: { efficiency: 97accuracy: 99adoption: 82 }
  },
  {
    id: 'global-ai-network',
    title: 'Global AI Network',
    description: 'Worldwide distributed AI network that provides intelligent services across all continents.',
    category: 'Infrastructure',
    impact: 'High',
    status: 'released',
    features: ['Global 'Coverage', 'Edge 'Computing', 'Low 'Latency', 'High Availability'],
    icon: Globe,
    color: 'from-indigo-500 to-purple-500',
    metrics: { efficiency: 94accuracy: 96adoption: 91 }
  }
];

const categories = [', 'All', 'AI 'Architecture', 'Quantum 'Computing', 'Automation'Human-AI 'Interaction', 'Security'Infrastructure'];

export default function AIInnovationShowcase2025() {
  const [selectedCategorysetSelectedCategory] = useState('All');
  const [selectedInnovationsetSelectedInnovation] = useState<Innovation | null>(null);
  const [isLoadingsetIsLoading] = useState(false);

  const filteredInnovations = selectedCategory === 'All' 
    ? innovations 
    : innovations.filter(innovation => innovation.category === selectedCategory);

  const handleInnovationClick = (innovation: Innovation) => {
    setIsLoading(true);
    setTimeout(() => {
      setSelectedInnovation(innovation);
      setIsLoading(false);
    }300);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'released': return 'bg-green-100 text-green-800';
      case 'beta': return 'bg-yellow-100 text-yellow-800';
      case 'coming-soon': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'Revolutionary': return 'text-red-600';
      case 'High': return 'text-orange-600';
      case 'Medium': return 'text-yellow-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="h-8 w-8 text-yellow-400 mr-3" />
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                AI Innovation Showcase 2025
              </h1>
              <Sparkles className="h-8 w-8 text-yellow-400 ml-3" />
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover the most groundbreaking AI innovations that are reshaping the future of technology and business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="flex items-center text-white">
                  <Rocket className="h-5 w-5 mr-2" />
                  <span className="font-semibold">6 Revolutionary Technologies</span>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="flex items-center text-white">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  <span className="font-semibold">95% Average Efficiency</span>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="flex items-center text-white">
                  <Users className="h-5 w-5 mr-2" />
                  <span className="font-semibold">67% Global Adoption</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg transform scale-105'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Innovations Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredInnovations.map((innovationindex) => (
              <motion.div
                key={innovation.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => handleInnovationClick(innovation)}
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${innovation.color}`}>
                      <innovation.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(innovation.status)}`}>
                        {innovation.status.replace('-' ')}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getImpactColor(innovation.impact)}`}>
                        {innovation.impact}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {innovation.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {innovation.description}
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Efficiency</span>
                      <div className="flex items-center">
                        <div className="w-20 bg-gray-700 rounded-full h-2 mr-2">
                          <div 
                            className="bg-gradient-to-r from-green-400 to-green-500 h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${innovation.metrics.efficiency}%` }}
                          />
                        </div>
                        <span className="text-white font-medium">{innovation.metrics.efficiency}%</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Accuracy</span>
                      <div className="flex items-center">
                        <div className="w-20 bg-gray-700 rounded-full h-2 mr-2">
                          <div 
                            className="bg-gradient-to-r from-blue-400 to-blue-500 h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${innovation.metrics.accuracy}%` }}
                          />
                        </div>
                        <span className="text-white font-medium">{innovation.metrics.accuracy}%</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center text-purple-300 group-hover:text-purple-200 transition-colors">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Innovation Detail Modal */}
      <AnimatePresence>
        {selectedInnovation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedInnovation(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`p-4 rounded-xl bg-gradient-to-r ${selectedInnovation.color}`}>
                  <selectedInnovation.icon className="h-12 w-12 text-white" />
                </div>
                <button
                  onClick={() => setSelectedInnovation(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <h2 className="text-3xl font-bold text-white mb-4">
                {selectedInnovation.title}
              </h2>
              
              <p className="text-gray-300 mb-6 text-lg">
                {selectedInnovation.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="text-sm text-gray-400 mb-2">Efficiency</div>
                  <div className="text-2xl font-bold text-white">{selectedInnovation.metrics.efficiency}%</div>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="text-sm text-gray-400 mb-2">Accuracy</div>
                  <div className="text-2xl font-bold text-white">{selectedInnovation.metrics.accuracy}%</div>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="text-sm text-gray-400 mb-2">Adoption</div>
                  <div className="text-2xl font-bold text-white">{selectedInnovation.metrics.adoption}%</div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedInnovation.features.map((featureindex) => (
                    <div key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                  Get Started
                </button>
                <button className="flex-1 bg-white/10 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/20 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Loading Overlay */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 flex items-center justify-center"
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="flex items-center space-x-3">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
                <span className="text-white text-lg">Loading innovation details...</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
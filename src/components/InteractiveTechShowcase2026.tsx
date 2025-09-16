import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Rocket, 
  Infinity, 
  Cpu, 
  Globe, 
  Clock, 
  Layers,
  ArrowRight,
  Play,
  Pause,
  RotateCcw
} from 'lucide-react';

interface TechItem {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
  category: string;
  features: string[];
  price: string;
  status: 'available' | 'coming-soon' | 'beta';
  demoUrl?: string;
}

const InteractiveTechShowcase2026: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentDemo, setCurrentDemo] = useState(0);

  const techItems: TechItem[] = [
    {
      id: 'transcendent-ai',
      title: 'Transcendent AI Systems',
      description: 'AI that has surpassed human intelligence across all cognitive domains',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      category: 'Transcendent AI',
      features: ['Superintelligence Framework', 'Transcendent Reasoning', 'Ultimate Creativity'],
      price: '$2,000,000',
      status: 'available',
      demoUrl: '/demos/transcendent-ai'
    },
    {
      id: 'reality-manipulation',
      title: 'Reality Manipulation Technology',
      description: 'Technology that can manipulate the fundamental fabric of reality',
      icon: Infinity,
      color: 'from-blue-600 to-cyan-600',
      category: 'Reality Technology',
      features: ['Reality Engine', 'Spacetime Control', 'Custom Physics'],
      price: '$5,000,000',
      status: 'beta',
      demoUrl: '/demos/reality-manipulation'
    },
    {
      id: 'infinite-networks',
      title: 'Infinite Intelligence Networks',
      description: 'AI networks that operate across infinite distances throughout the universe',
      icon: Globe,
      color: 'from-green-600 to-emerald-600',
      category: 'Cosmic AI',
      features: ['Universal Scale', 'Infinite Communication', 'Cosmic Problem Solving'],
      price: '$3,000,000',
      status: 'available',
      demoUrl: '/demos/infinite-networks'
    },
    {
      id: 'temporal-ai',
      title: 'Temporal AI Computing',
      description: 'AI systems that process information across multiple time periods',
      icon: Clock,
      color: 'from-orange-600 to-red-600',
      category: 'Temporal AI',
      features: ['Temporal Processing', 'Causality Analysis', 'Time Optimization'],
      price: '$1,500,000',
      status: 'coming-soon',
      demoUrl: '/demos/temporal-ai'
    },
    {
      id: 'dimensional-computing',
      title: 'Dimensional Computing',
      description: 'Computing systems that operate across multiple dimensions simultaneously',
      icon: Layers,
      color: 'from-indigo-600 to-purple-600',
      category: 'Dimensional Technology',
      features: ['Multi-Dimensional Processing', 'Dimensional Optimization', 'Cross-Dimensional Analysis'],
      price: '$800,000',
      status: 'available',
      demoUrl: '/demos/dimensional-computing'
    },
    {
      id: 'quantum-neural',
      title: 'Quantum-Neural Fusion',
      description: 'Combining quantum computing with direct neural interfaces',
      icon: Cpu,
      color: 'from-teal-600 to-blue-600',
      category: 'Quantum Technology',
      features: ['Neural Interface', 'Quantum Processing', 'Human-AI Fusion'],
      price: '$250,000',
      status: 'available',
      demoUrl: '/demos/quantum-neural'
    }
  ];

  const selectedItem = selectedTech ? techItems.find(item => item.id === selectedTech) : null;

  useEffect(() => {
    if (isPlaying && selectedItem?.demoUrl) {
      const interval = setInterval(() => {
        setCurrentDemo(prev => (prev + 1) % 3);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, selectedItem]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available': return 'bg-green-500';
      case 'beta': return 'bg-yellow-500';
      case 'coming-soon': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'available': return 'Available Now';
      case 'beta': return 'Beta Testing';
      case 'coming-soon': return 'Coming Soon';
      default: return 'Unknown';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Interactive Tech
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {' '}Showcase
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the future of technology with our revolutionary AI and computing solutions. 
            Interact with cutting-edge systems that push the boundaries of what's possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Tech Grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {techItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative group cursor-pointer ${
                    selectedTech === item.id ? 'ring-4 ring-purple-400' : ''
                  }`}
                  onClick={() => setSelectedTech(item.id)}
                >
                  <div className={`bg-gradient-to-br ${item.color} p-6 rounded-2xl h-full transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl`}>
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getStatusColor(item.status)}`}>
                        {getStatusText(item.status)}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="mb-4">
                      <item.icon className="w-12 h-12 text-white" />
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-white">{item.title}</h3>
                      <p className="text-white/80 text-sm">{item.description}</p>
                      <div className="text-2xl font-bold text-white">{item.price}</div>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-center justify-center">
                      <ArrowRight className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Interactive Demo Panel */}
          <div className="lg:col-span-1">
            <AnimatePresence mode="wait">
              {selectedItem ? (
                <motion.div
                  key={selectedItem.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700"
                >
                  {/* Demo Header */}
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-white">{selectedItem.title}</h3>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="p-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
                      >
                        {isPlaying ? <Pause className="w-5 h-5 text-white" /> : <Play className="w-5 h-5 text-white" />}
                      </button>
                      <button
                        onClick={() => setCurrentDemo(0)}
                        className="p-2 bg-gray-600 hover:bg-gray-700 rounded-lg transition-colors"
                      >
                        <RotateCcw className="w-5 h-5 text-white" />
                      </button>
                    </div>
                  </div>

                  {/* Demo Visual */}
                  <div className="relative mb-6">
                    <div className={`bg-gradient-to-br ${selectedItem.color} h-48 rounded-xl flex items-center justify-center relative overflow-hidden`}>
                      <motion.div
                        key={currentDemo}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center"
                      >
                        <selectedItem.icon className="w-16 h-16 text-white mx-auto mb-4" />
                        <p className="text-white/80 text-sm">
                          Demo Mode {currentDemo + 1}
                        </p>
                      </motion.div>
                      
                      {/* Animated background elements */}
                      {isPlaying && (
                        <>
                          <motion.div
                            className="absolute top-4 left-4 w-4 h-4 bg-white/30 rounded-full"
                            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                          <motion.div
                            className="absolute bottom-4 right-4 w-6 h-6 bg-white/20 rounded-full"
                            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.8, 0.3] }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                          />
                          <motion.div
                            className="absolute top-1/2 right-8 w-3 h-3 bg-white/40 rounded-full"
                            animate={{ scale: [1, 1.2, 1], opacity: [0.4, 1, 0.4] }}
                            transition={{ duration: 1, repeat: Infinity, delay: 1 }}
                          />
                        </>
                      )}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    <h4 className="text-lg font-semibold text-white">Key Features</h4>
                    {selectedItem.features.map((feature, index) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="space-y-3">
                    <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center">
                      Get Started
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </button>
                    
                    {selectedItem.demoUrl && (
                      <button className="w-full border border-gray-600 text-gray-300 font-semibold py-3 px-6 rounded-lg hover:bg-gray-700 transition-colors">
                        View Full Demo
                      </button>
                    )}
                  </div>

                  {/* Price */}
                  <div className="mt-6 text-center">
                    <div className="text-3xl font-bold text-white">{selectedItem.price}</div>
                    <div className="text-gray-400 text-sm">Starting price</div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 text-center"
                >
                  <div className="text-gray-400 mb-4">
                    <Zap className="w-16 h-16 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Select a Technology</h3>
                    <p>Choose a technology from the grid to explore its interactive demo and features.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Experience the Future?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of innovators who are already using our revolutionary technologies 
              to transform their businesses and push the boundaries of what's possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-4 px-8 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                Start Your Journey
              </button>
              <button className="border border-purple-500 text-purple-300 font-semibold py-4 px-8 rounded-lg hover:bg-purple-500/10 transition-colors">
                Schedule a Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2026;
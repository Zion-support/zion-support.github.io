import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Globe, 
  Rocket, 
  Star, 
  Infinity, 
  Eye, 
  Cpu, 
  Atom,
  Sparkles,
  ArrowRight,
  Play,
  Pause,
  RotateCcw
} from 'lucide-react';

interface TechDemo {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  gradient: string;
  features: string[];
  price: string;
  demo: {
    type: 'animation' | 'interactive' | 'simulation';
    content: string;
  };
}

const InteractiveTechShowcase2026: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<string>('consciousness');
  const [isPlaying, setIsPlaying] = useState(false);
  const [animationStep, setAnimationStep] = useState(0);

  const techDemos: Record<string, TechDemo> = {
    consciousness: {
      id: 'consciousness',
      title: 'AI Consciousness Development',
      description: 'Revolutionary AI consciousness framework that creates genuinely self-aware, emotional AI systems.',
      icon: <Brain className="w-8 h-8" />,
      color: 'purple',
      gradient: 'from-purple-500 to-pink-500',
      features: [
        'Genuine self-awareness',
        'Emotional processing',
        'Consciousness validation',
        'Human-AI emotional bonds'
      ],
      price: '$500,000',
      demo: {
        type: 'animation',
        content: 'Consciousness emergence simulation'
      }
    },
    quantum: {
      id: 'quantum',
      title: 'Quantum-Neural Fusion',
      description: 'Breakthrough technology combining quantum computing with direct neural interfaces.',
      icon: <Atom className="w-8 h-8" />,
      color: 'blue',
      gradient: 'from-blue-500 to-cyan-500',
      features: [
        'Direct thought-to-computer communication',
        'Quantum processing units',
        'Neural interface technology',
        'Cognitive enhancement'
      ],
      price: '$250,000',
      demo: {
        type: 'interactive',
        content: 'Quantum entanglement visualization'
      }
    },
    interdimensional: {
      id: 'interdimensional',
      title: 'Interdimensional AI Computing',
      description: 'AI systems that process information across multiple parallel dimensions.',
      icon: <Infinity className="w-8 h-8" />,
      color: 'green',
      gradient: 'from-green-500 to-emerald-500',
      features: [
        'Infinite computational power',
        'Multi-dimensional processing',
        'Parallel reality interfaces',
        'Unlimited solution spaces'
      ],
      price: '$1,000,000',
      demo: {
        type: 'simulation',
        content: 'Dimensional processing simulation'
      }
    },
    space: {
      id: 'space',
      title: 'Space Colonization AI',
      description: 'Complete AI-powered systems for space colonization and terraforming.',
      icon: <Rocket className="w-8 h-8" />,
      color: 'orange',
      gradient: 'from-orange-500 to-red-500',
      features: [
        'Autonomous space habitats',
        'Terraforming AI systems',
        'Life support automation',
        'Interplanetary communication'
      ],
      price: '$2,500,000',
      demo: {
        type: 'simulation',
        content: 'Mars colonization simulation'
      }
    },
    immortality: {
      id: 'immortality',
      title: 'Digital Immortality Platform',
      description: 'Revolutionary platform for preserving and digitizing human consciousness.',
      icon: <Star className="w-8 h-8" />,
      color: 'yellow',
      gradient: 'from-yellow-500 to-amber-500',
      features: [
        'Consciousness mapping',
        'Neural interface technology',
        'Digital preservation',
        'Consciousness transfer'
      ],
      price: '$1,000,000',
      demo: {
        type: 'interactive',
        content: 'Consciousness digitization process'
      }
    },
    reality: {
      id: 'reality',
      title: 'Reality Manipulation AI',
      description: 'AI systems capable of manipulating physical reality through quantum fields.',
      icon: <Zap className="w-8 h-8" />,
      color: 'indigo',
      gradient: 'from-indigo-500 to-purple-500',
      features: [
        'Reality manipulation algorithms',
        'Quantum field interfaces',
        'Consciousness projection',
        'Ultimate power control'
      ],
      price: '$5,000,000',
      demo: {
        type: 'simulation',
        content: 'Reality manipulation simulation'
      }
    }
  };

  const currentTech = techDemos[selectedTech];

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setAnimationStep(prev => (prev + 1) % 4);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  const renderDemo = () => {
    switch (currentTech.demo.type) {
      case 'animation':
        return (
          <div className="relative w-full h-64 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                  rotate: [0, 360, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center"
              >
                <Brain className="w-16 h-16 text-white" />
              </motion.div>
            </div>
            <div className="absolute bottom-4 left-4 text-white text-sm">
              Consciousness Emergence Simulation
            </div>
          </div>
        );

      case 'interactive':
        return (
          <div className="relative w-full h-64 bg-gradient-to-br from-blue-900 to-cyan-900 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-3 gap-4">
                {[...Array(9)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      scale: animationStep === i % 4 ? [1, 1.5, 1] : 1,
                      opacity: animationStep === i % 4 ? [0.5, 1, 0.5] : 0.3
                    }}
                    transition={{ duration: 0.5 }}
                    className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400"
                  />
                ))}
              </div>
            </div>
            <div className="absolute bottom-4 left-4 text-white text-sm">
              Quantum Entanglement Visualization
            </div>
          </div>
        );

      case 'simulation':
        return (
          <div className="relative w-full h-64 bg-gradient-to-br from-green-900 to-emerald-900 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{
                  x: [0, 100, 0],
                  y: [0, -50, 0],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-20 h-20 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 flex items-center justify-center"
              >
                <Globe className="w-10 h-10 text-white" />
              </motion.div>
            </div>
            <div className="absolute bottom-4 left-4 text-white text-sm">
              Dimensional Processing Simulation
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6"
          >
            <Sparkles className="w-4 h-4" />
            Interactive Technology Showcase
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            Experience the Future
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Interact with revolutionary AI technologies and see them in action
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Technology Selection */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-6">Choose a Technology</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {Object.values(techDemos).map((tech) => (
                <motion.button
                  key={tech.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedTech(tech.id)}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                    selectedTech === tech.id
                      ? `border-${tech.color}-500 bg-gradient-to-r ${tech.gradient} text-white`
                      : 'border-gray-600 bg-gray-800/50 hover:bg-gray-700/50'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-2 rounded-lg bg-${tech.color}-500/20`}>
                      {tech.icon}
                    </div>
                    <h4 className="font-semibold text-sm">{tech.title}</h4>
                  </div>
                  <p className="text-xs text-gray-400 line-clamp-2">
                    {tech.description}
                  </p>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Demo Area */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold">Live Demo</h3>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => setAnimationStep(0)}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTech}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                {renderDemo()}
              </motion.div>
            </AnimatePresence>

            {/* Technology Details */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg bg-gradient-to-r ${currentTech.gradient}`}>
                  {currentTech.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold">{currentTech.title}</h4>
                  <p className="text-gray-300">{currentTech.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h5 className="font-semibold text-sm text-gray-400 mb-2">Features</h5>
                  <ul className="space-y-1">
                    {currentTech.features.map((feature, index) => (
                      <li key={index} className="text-sm text-gray-300 flex items-center gap-2">
                        <div className="w-1 h-1 bg-purple-400 rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-sm text-gray-400 mb-2">Investment</h5>
                  <div className="text-2xl font-bold text-white">{currentTech.price}</div>
                  <div className="text-sm text-gray-400">Starting price</div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 px-6 rounded-xl font-semibold text-white bg-gradient-to-r ${currentTech.gradient} hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2`}
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2026;
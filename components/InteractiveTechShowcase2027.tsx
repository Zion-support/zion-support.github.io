import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Cpu, 
  Zap, 
  Globe, 
  Shield, 
  Database, 
  Network, 
  Bot,
  ChevronRight,
  Play,
  Pause,
  RotateCcw
} from 'lucide-react';

const InteractiveTechShowcase2027: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const technologies = [
    {
      id: 'neural-interfaces',
      name: 'Neural Interfaces',
      icon: Brain,
      description: 'Direct brain-computer communication revolutionizing human-AI interaction',
      features: [
        'Real-time thought-to-text conversion',
        'Enhanced cognitive augmentation',
        'Seamless human-AI collaboration',
        'Medical rehabilitation applications'
      ],
      color: 'from-purple-500 to-indigo-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30'
    },
    {
      id: 'quantum-ai',
      name: 'Quantum AI',
      icon: Cpu,
      description: 'Quantum-enhanced artificial intelligence for unprecedented computational power',
      features: [
        'Exponential processing speed increase',
        'Complex problem solving capabilities',
        'Advanced pattern recognition',
        'Breakthrough in optimization algorithms'
      ],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30'
    },
    {
      id: 'autonomous-systems',
      name: 'Autonomous AI Systems',
      icon: Bot,
      description: 'Self-evolving AI systems capable of independent decision-making and learning',
      features: [
        'Self-improving algorithms',
        'Autonomous problem solving',
        'Dynamic adaptation to new challenges',
        'Reduced human intervention requirements'
      ],
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30'
    },
    {
      id: 'edge-computing',
      name: 'Edge AI Computing',
      icon: Network,
      description: 'Distributed AI processing at the edge for ultra-low latency applications',
      features: [
        'Sub-millisecond response times',
        'Localized data processing',
        'Enhanced privacy and security',
        'Real-time decision making'
      ],
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/30'
    },
    {
      id: 'ai-security',
      name: 'AI-Powered Security',
      icon: Shield,
      description: 'Advanced AI systems protecting against evolving cyber threats',
      features: [
        'Predictive threat detection',
        'Automated incident response',
        'Behavioral anomaly detection',
        'Zero-trust security architecture'
      ],
      color: 'from-red-500 to-pink-500',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/30'
    },
    {
      id: 'global-ai',
      name: 'Global AI Network',
      icon: Globe,
      description: 'Interconnected AI systems creating a worldwide intelligence network',
      features: [
        'Cross-border AI collaboration',
        'Shared knowledge repositories',
        'Global problem-solving capabilities',
        'Universal AI accessibility'
      ],
      color: 'from-teal-500 to-blue-500',
      bgColor: 'bg-teal-500/10',
      borderColor: 'border-teal-500/30'
    }
  ];

  // Auto-advance functionality
  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setActiveTech((prev) => (prev + 1) % technologies.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying, technologies.length]);

  const handleTechSelect = (index: number) => {
    setActiveTech(index);
    setIsPlaying(false);
  };

  const resetAutoPlay = () => {
    setIsPlaying(true);
    setActiveTech(0);
  };

  return (
    <div className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Interactive Technology{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Showcase 2027
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Experience the cutting-edge AI technologies that are reshaping our world. 
            Click through each innovation to explore their revolutionary capabilities.
          </p>
          
          {/* Controls */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full hover:bg-white/20 transition-all duration-300"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              {isPlaying ? 'Pause' : 'Play'} Auto-Showcase
            </button>
            <button
              onClick={resetAutoPlay}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full hover:bg-white/20 transition-all duration-300"
            >
              <RotateCcw className="w-4 h-4" />
              Reset
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Technology List */}
          <div className="lg:col-span-1">
            <div className="space-y-4">
              {technologies.map((tech, index) => (
                <motion.button
                  key={tech.id}
                  onClick={() => handleTechSelect(index)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                    activeTech === index
                      ? `${tech.bgColor} ${tech.borderColor} border-2`
                      : 'bg-white/5 hover:bg-white/10 border border-transparent'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-3">
                    <tech.icon className={`w-6 h-6 ${
                      activeTech === index 
                        ? `text-${tech.color.split('-')[1]}-400`
                        : 'text-gray-400'
                    }`} />
                    <div>
                      <h3 className={`font-semibold ${
                        activeTech === index ? 'text-white' : 'text-gray-300'
                      }`}>
                        {tech.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {tech.description.split(' ').slice(0, 8).join(' ')}...
                      </p>
                    </div>
                    {activeTech === index && (
                      <ChevronRight className="w-4 h-4 text-white ml-auto" />
                    )}
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Technology Details */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTech}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${technologies[activeTech].color}`}>
                    <technologies[activeTech].icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {technologies[activeTech].name}
                    </h3>
                    <p className="text-gray-300">
                      {technologies[activeTech].description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {technologies[activeTech].features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3 p-4 bg-white/5 rounded-xl"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${technologies[activeTech].color} mt-2`}></div>
                      <span className="text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button className={`bg-gradient-to-r ${technologies[activeTech].color} text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105`}>
                    Learn More
                  </button>
                  <button className="border border-white/30 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
                    View Demo
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center mt-12">
          <div className="flex gap-2">
            {technologies.map((_, index) => (
              <button
                key={index}
                onClick={() => handleTechSelect(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeTech === index 
                    ? 'bg-gradient-to-r from-purple-400 to-blue-400' 
                    : 'bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2027;
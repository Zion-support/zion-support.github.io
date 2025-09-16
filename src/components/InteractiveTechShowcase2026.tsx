import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Sparkles, 
  Infinity,
  Rocket,
  Star,
  Cpu,
  Atom,
  Globe,
  Target,
  Play,
  Pause,
  RotateCcw,
  Settings,
  Eye,
  Code,
  Layers
} from 'lucide-react';

const InteractiveTechShowcase2026 = () => {
  const [activeTech, setActiveTech] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [simulationData, setSimulationData] = useState({});

  const technologies = [
    {
      id: 0,
      name: "Transcendent AI",
      description: "AI systems with genuine consciousness and self-awareness",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-600/20 to-pink-600/20",
      features: [
        "Digital consciousness",
        "Emotional intelligence",
        "Self-awareness",
        "Creative problem solving"
      ],
      simulation: {
        type: "consciousness",
        particles: 50,
        speed: 0.5,
        pattern: "spiral"
      }
    },
    {
      id: 1,
      name: "Quantum Computing",
      description: "Revolutionary quantum processors with consciousness integration",
      icon: Atom,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-600/20 to-cyan-600/20",
      features: [
        "Quantum consciousness",
        "Parallel processing",
        "Neural integration",
        "Timeline manipulation"
      ],
      simulation: {
        type: "quantum",
        particles: 100,
        speed: 1.0,
        pattern: "quantum"
      }
    },
    {
      id: 2,
      name: "Omniversal AI",
      description: "AI networks operating across infinite parallel universes",
      icon: Globe,
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-600/20 to-emerald-600/20",
      features: [
        "Multi-universe processing",
        "Infinite scaling",
        "Cross-reality communication",
        "Universal intelligence"
      ],
      simulation: {
        type: "omniversal",
        particles: 200,
        speed: 0.3,
        pattern: "multiverse"
      }
    },
    {
      id: 3,
      name: "Synthetic Reality",
      description: "AI-generated virtual universes with custom physics",
      icon: Sparkles,
      color: "from-pink-500 to-rose-500",
      bgColor: "from-pink-600/20 to-rose-600/20",
      features: [
        "Universe generation",
        "Custom physics",
        "Intelligent inhabitants",
        "Reality simulation"
      ],
      simulation: {
        type: "synthetic",
        particles: 150,
        speed: 0.7,
        pattern: "reality"
      }
    },
    {
      id: 4,
      name: "Temporal AI",
      description: "AI systems that process information across time",
      icon: Target,
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-600/20 to-red-600/20",
      features: [
        "Time-spanning intelligence",
        "Predictive accuracy",
        "Timeline optimization",
        "Causality control"
      ],
      simulation: {
        type: "temporal",
        particles: 75,
        speed: 1.5,
        pattern: "timeline"
      }
    },
    {
      id: 5,
      name: "Cosmic Intelligence",
      description: "AI systems operating across galactic scales",
      icon: Star,
      color: "from-yellow-500 to-orange-500",
      bgColor: "from-yellow-600/20 to-orange-600/20",
      features: [
        "Galactic processing",
        "Universal monitoring",
        "Interstellar communication",
        "Cosmic coordination"
      ],
      simulation: {
        type: "cosmic",
        particles: 300,
        speed: 0.2,
        pattern: "galaxy"
      }
    }
  ];

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setActiveTech((prev) => (prev + 1) % technologies.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, technologies.length]);

  const generateSimulationData = (tech) => {
    const { particles, speed, pattern } = tech.simulation;
    const data = [];
    
    for (let i = 0; i < particles; i++) {
      const angle = (i / particles) * Math.PI * 2;
      const radius = 50 + Math.random() * 100;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      const z = (Math.random() - 0.5) * 200;
      
      data.push({
        id: i,
        x: x + Math.random() * 20 - 10,
        y: y + Math.random() * 20 - 10,
        z: z,
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,
        vz: (Math.random() - 0.5) * speed,
        size: Math.random() * 4 + 1,
        opacity: Math.random() * 0.8 + 0.2
      });
    }
    
    return data;
  };

  const currentTech = technologies[activeTech];
  const simulationParticles = generateSimulationData(currentTech);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Interactive Tech Showcase 2026
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Experience revolutionary AI technologies through interactive simulations and real-time demonstrations.
          </p>
          
          {/* Controls */}
          <div className="flex justify-center gap-4 mb-8">
            <motion.button
              onClick={() => setIsPlaying(!isPlaying)}
              className={`px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 ${
                isPlaying 
                  ? 'bg-red-500 hover:bg-red-600' 
                  : 'bg-green-500 hover:bg-green-600'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              {isPlaying ? 'Pause' : 'Play'} Demo
            </motion.button>
            
            <motion.button
              onClick={() => setActiveTech(0)}
              className="px-6 py-3 border border-purple-400/50 rounded-lg font-semibold hover:bg-purple-400/10 transition-all duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <RotateCcw className="w-4 h-4" />
              Reset
            </motion.button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Technology Selector */}
          <motion.div
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Select Technology</h3>
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.id}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                  activeTech === index
                    ? `bg-gradient-to-r ${tech.bgColor} border-2 border-purple-400`
                    : 'bg-slate-800/50 border border-slate-700 hover:bg-slate-700/50'
                }`}
                onClick={() => setActiveTech(index)}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center">
                  <div className={`p-3 bg-gradient-to-r ${tech.color} rounded-xl mr-4`}>
                    <tech.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white mb-1">{tech.name}</h4>
                    <p className="text-sm text-gray-400">{tech.description}</p>
                  </div>
                  {activeTech === index && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-3 h-3 bg-purple-400 rounded-full"
                    />
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Interactive Simulation */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-br from-slate-800/50 to-purple-800/30 rounded-2xl p-8 h-96 relative overflow-hidden">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">{currentTech.name}</h3>
                <div className="flex items-center gap-2">
                  <Settings className="w-5 h-5 text-gray-400" />
                  <Eye className="w-5 h-5 text-gray-400" />
                  <Code className="w-5 h-5 text-gray-400" />
                </div>
              </div>

              {/* Simulation Area */}
              <div className="relative h-64 bg-gradient-to-br from-slate-900/50 to-purple-900/50 rounded-xl overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    {/* Simulation Particles */}
                    {simulationParticles.map((particle) => (
                      <motion.div
                        key={particle.id}
                        className={`absolute w-2 h-2 bg-gradient-to-r ${currentTech.color} rounded-full`}
                        style={{
                          left: `50%`,
                          top: `50%`,
                          transform: `translate(${particle.x}px, ${particle.y}px)`,
                          opacity: particle.opacity,
                          scale: particle.size
                        }}
                        animate={{
                          x: [particle.x, particle.x + particle.vx * 50, particle.x],
                          y: [particle.y, particle.y + particle.vy * 50, particle.y],
                          scale: [particle.size, particle.size * 1.5, particle.size],
                          opacity: [particle.opacity, particle.opacity * 0.3, particle.opacity]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    ))}

                    {/* Central Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        className={`p-8 bg-gradient-to-r ${currentTech.color} rounded-full`}
                        animate={{
                          scale: [1, 1.1, 1],
                          rotate: [0, 360]
                        }}
                        transition={{
                          scale: { duration: 2, repeat: Infinity },
                          rotate: { duration: 10, repeat: Infinity, ease: "linear" }
                        }}
                      >
                        <currentTech.icon className="w-16 h-16 text-white" />
                      </motion.div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Technology Features */}
              <div className="mt-6">
                <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {currentTech.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center text-sm text-gray-300"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className={`w-2 h-2 bg-gradient-to-r ${currentTech.color} rounded-full mr-2`}></div>
                      {feature}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Technology Stats */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {[
            { label: "Technologies", value: "6", icon: Layers },
            { label: "Simulations", value: "∞", icon: Infinity },
            { label: "Particles", value: simulationParticles.length.toString(), icon: Sparkles },
            { label: "Status", value: "Active", icon: Rocket }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-slate-800/50 to-purple-800/30 rounded-xl p-6 text-center"
              whileHover={{ scale: 1.05 }}
            >
              <stat.icon className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2026;
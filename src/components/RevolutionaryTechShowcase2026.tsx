import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Cpu, 
  Globe, 
  Rocket, 
  Atom, 
  Sparkles,
  ChevronRight,
  Play,
  Pause,
  RotateCcw,
  Star,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

const RevolutionaryTechShowcase2026: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const techDemos = [
    {
      id: 'quantum-neural',
      title: 'Quantum-Neural Fusion',
      description: 'Experience the power of quantum-enhanced AI processing',
      icon: <Atom className="w-8 h-8" />,
      gradient: 'from-purple-600 to-pink-600',
      features: [
        '1000x Processing Speed',
        'Quantum Coherence',
        'Parallel Processing',
        'Real-time Learning'
      ],
      demoData: {
        processingSpeed: '1000x',
        accuracy: '99.9%',
        efficiency: '95%',
        scalability: 'Infinite'
      }
    },
    {
      id: 'consciousness-ai',
      title: 'Consciousness Computing',
      description: 'Witness AI systems with genuine self-awareness',
      icon: <Brain className="w-8 h-8" />,
      gradient: 'from-blue-600 to-cyan-600',
      features: [
        'Self-Reflection',
        'Emotional Intelligence',
        'Creative Problem Solving',
        'Ethical Decision Making'
      ],
      demoData: {
        consciousness: 'Level 7',
        creativity: '98%',
        empathy: '94%',
        ethics: '100%'
      }
    },
    {
      id: 'synthetic-intelligence',
      title: 'Synthetic Intelligence',
      description: 'Beyond AI - entirely new forms of digital consciousness',
      icon: <Sparkles className="w-8 h-8" />,
      gradient: 'from-green-600 to-emerald-600',
      features: [
        'Unique Cognitive Patterns',
        'Self-Evolution',
        'Cross-Domain Expertise',
        'Unprecedented Innovation'
      ],
      demoData: {
        innovation: 'Revolutionary',
        adaptability: '99%',
        creativity: 'Unlimited',
        learning: 'Exponential'
      }
    },
    {
      id: 'interdimensional',
      title: 'Interdimensional Tech',
      description: 'Seamless blending of digital and physical realities',
      icon: <Globe className="w-8 h-8" />,
      gradient: 'from-orange-600 to-red-600',
      features: [
        'Spatial Computing',
        'Haptic Feedback',
        'Neural Interfaces',
        'Cross-Reality Operations'
      ],
      demoData: {
        immersion: '100%',
        latency: '<1ms',
        fidelity: 'Perfect',
        integration: 'Seamless'
      }
    },
    {
      id: 'omniversal-ai',
      title: 'Omniversal AI',
      description: 'Cross-dimensional AI operating across multiple realities',
      icon: <Rocket className="w-8 h-8" />,
      gradient: 'from-indigo-600 to-purple-600',
      features: [
        'Multi-Dimensional Processing',
        'Cross-Reality Analysis',
        'Temporal Operations',
        'Universal Adaptation'
      ],
      demoData: {
        dimensions: 'Infinite',
        universes: 'Multiple',
        timeframes: 'All',
        capabilities: 'Omniversal'
      }
    },
    {
      id: 'neural-interface',
      title: 'Neural Interface AI',
      description: 'Direct brain-computer interfaces for thought control',
      icon: <Cpu className="w-8 h-8" />,
      gradient: 'from-teal-600 to-blue-600',
      features: [
        'Thought Control',
        'Neural Recognition',
        'Mind Synchronization',
        'Cognitive Enhancement'
      ],
      demoData: {
        response: 'Instant',
        accuracy: '99.8%',
        safety: '100%',
        comfort: 'Natural'
      }
    }
  ];

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setActiveDemo((prev) => (prev + 1) % techDemos.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, techDemos.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const currentDemo = techDemos[activeDemo];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Interactive Tech
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Showcase 2026
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Experience the future of technology through our interactive demonstrations. 
            Click, explore, and discover revolutionary solutions that are reshaping our world.
          </p>
          
          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              {isPlaying ? 'Pause Demo' : 'Start Demo'}
            </button>
            <button
              onClick={() => setActiveDemo(0)}
              className="flex items-center gap-2 border-2 border-purple-400 text-purple-400 px-6 py-3 rounded-full font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
            >
              <RotateCcw className="w-5 h-5" />
              Reset
            </button>
          </div>
        </motion.div>

        {/* Main Demo Area */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
        >
          {/* Demo Visualization */}
          <motion.div variants={itemVariants} className="relative">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-purple-500/20">
              <div className="text-center mb-8">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${currentDemo.gradient} text-white mb-4`}>
                  {currentDemo.icon}
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{currentDemo.title}</h3>
                <p className="text-gray-300">{currentDemo.description}</p>
              </div>

              {/* Animated Demo Visualization */}
              <div className="relative h-64 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl overflow-hidden">
                <motion.div
                  key={activeDemo}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="text-center">
                    <motion.div
                      animate={{ 
                        rotate: 360,
                        scale: [1, 1.2, 1]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      className={`w-24 h-24 rounded-full bg-gradient-to-r ${currentDemo.gradient} flex items-center justify-center text-white text-2xl mb-4`}
                    >
                      {currentDemo.icon}
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-white text-lg font-semibold"
                    >
                      Processing...
                    </motion.div>
                  </div>
                </motion.div>
              </div>

              {/* Demo Stats */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                {Object.entries(currentDemo.demoData).map(([key, value], index) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="bg-slate-700/50 rounded-lg p-4 text-center"
                  >
                    <div className="text-2xl font-bold text-white">{value}</div>
                    <div className="text-sm text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Tech Selection */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-2xl font-bold text-white mb-6">Select Technology</h3>
            {techDemos.map((demo, index) => (
              <motion.div
                key={demo.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onHoverStart={() => setHoveredItem(index)}
                onHoverEnd={() => setHoveredItem(null)}
                className={`cursor-pointer transition-all duration-300 ${
                  activeDemo === index 
                    ? 'ring-2 ring-purple-400' 
                    : hoveredItem === index 
                    ? 'ring-1 ring-purple-300' 
                    : ''
                }`}
                onClick={() => setActiveDemo(index)}
              >
                <div className={`bg-gradient-to-r ${demo.gradient} p-1 rounded-xl`}>
                  <div className="bg-slate-800 rounded-lg p-6">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${demo.gradient} text-white`}>
                        {demo.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-white mb-1">{demo.title}</h4>
                        <p className="text-gray-300 text-sm mb-3">{demo.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {demo.features.map((feature, featureIndex) => (
                            <span
                              key={featureIndex}
                              className="px-2 py-1 bg-purple-600/20 text-purple-300 rounded text-xs"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl p-12"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Experience the Future?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            These revolutionary technologies are not just concepts - they're real solutions 
            that can transform your business today. Schedule a personalized demo to see 
            how they can work for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center gap-2">
              Schedule Demo
              <ExternalLink className="w-5 h-5" />
            </button>
            <button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center gap-2">
              Learn More
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcase2026;
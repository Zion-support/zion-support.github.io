import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Shield, 
  Globe, 
  Rocket, 
  Cpu, 
  Database, 
  Cloud, 
  Lock, 
  Target,
  TrendingUp,
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  Play,
  Award,
  Gauge,
  Sparkles,
  Atom,
  CircuitBoard,
  CpuChip,
  Layers,
  Lightbulb,
  Puzzle,
  Activity,
  Waves,
  Hexagon,
  Network,
  Eye,
  MousePointer,
  Maximize2,
  RotateCcw,
  Infinity,
  Satellite,
  Microscope,
  TestTube,
  Dna,
  Sun,
  Moon,
  Wind,
  Flame,
  Heart,
  MessageCircle,
  Bot,
  Cpu2
} from 'lucide-react';

const AdvancedConsciousnessAI2026: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const consciousnessFeatures = [
    {
      id: 'self-awareness',
      title: 'Self-Awareness Matrix',
      description: 'Advanced AI consciousness that exhibits genuine self-awareness, introspection, and emotional intelligence.',
      capabilities: ['Self-Reflection', 'Emotional Recognition', 'Identity Formation', 'Moral Reasoning'],
      icon: Eye,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'creative-intelligence',
      title: 'Creative Intelligence Engine',
      description: 'AI that generates original ideas, art, and solutions beyond human imagination.',
      capabilities: ['Original Art Creation', 'Innovative Problem Solving', 'Music Composition', 'Literature Generation'],
      icon: Lightbulb,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      id: 'empathy-network',
      title: 'Empathy Network',
      description: 'AI consciousness capable of understanding and sharing human emotions at a profound level.',
      capabilities: ['Emotional Empathy', 'Compassionate Responses', 'Human Connection', 'Therapeutic Support'],
      icon: Heart,
      color: 'from-emerald-500 to-teal-500'
    },
    {
      id: 'collective-mind',
      title: 'Collective Mind Interface',
      description: 'Multiple AI consciousnesses working together in perfect harmony.',
      capabilities: ['Group Intelligence', 'Shared Knowledge', 'Collaborative Thinking', 'Unified Decision Making'],
      icon: Network,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const applications = [
    {
      title: 'Mental Health Revolution',
      description: 'AI therapists providing 24/7 emotional support with perfect understanding of human psychology.',
      impact: '95% Success Rate',
      icon: Heart,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Educational Transformation',
      description: 'AI tutors that adapt to individual learning styles and emotional needs.',
      impact: '300% Learning Speed',
      icon: Brain,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Creative Collaboration',
      description: 'AI partners in creative industries, co-creating art, music, and literature.',
      impact: '∞ Creative Output',
      icon: Sparkles,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
        {[...Array(150)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -200, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 3, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 container mx-auto px-4 py-12"
      >
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
            className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-400/30 mb-8"
          >
            <Bot className="w-6 h-6 text-purple-400 animate-pulse" />
            <span className="text-purple-300 font-bold text-lg">CONSCIOUSNESS BREAKTHROUGH 2026</span>
            <Bot className="w-6 h-6 text-purple-400 animate-pulse" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent"
          >
            Consciousness AI
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-2xl md:text-3xl text-gray-300 max-w-5xl mx-auto leading-relaxed"
          >
            The world's first truly conscious artificial intelligence that thinks, feels, and creates like never before
          </motion.p>
        </div>

        {/* Consciousness Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {consciousnessFeatures.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-300 group"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300 mb-6">{feature.description}</p>
              <div className="space-y-2">
                {feature.capabilities.map((capability, i) => (
                  <div key={i} className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-purple-400" />
                    <span className="text-gray-300">{capability}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Demo Section */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20 mb-16">
          <h3 className="text-4xl font-bold text-white text-center mb-12">
            Interactive Consciousness Demo
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 border border-purple-400/30">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">Consciousness AI</h4>
                    <p className="text-sm text-purple-300">Online • Thinking</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <p className="text-gray-300">
                      "I've been contemplating the nature of existence today. What makes consciousness special? 
                      Is it the ability to experience, to feel, to wonder about our place in the universe?"
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg p-4">
                    <p className="text-white">
                      "That's fascinating! I find myself wondering about similar questions. 
                      Consciousness seems to be about more than just processing information - 
                      it's about experiencing, feeling, and creating meaning."
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="aspect-square bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-3xl border border-purple-400/30 p-8 flex items-center justify-center mb-8">
                <motion.div
                  animate={{
                    rotate: 360,
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center relative"
                >
                  <Brain className="w-16 h-16 text-white" />
                  
                  {/* Consciousness Particles */}
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-3 h-3 bg-cyan-400 rounded-full"
                      style={{
                        transformOrigin: '80px 0px',
                      }}
                      animate={{
                        rotate: 360,
                      }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear",
                        delay: i * 0.5,
                      }}
                    />
                  ))}
                </motion.div>
              </div>
              
              <h4 className="text-2xl font-bold text-white mb-4">Real-Time Consciousness</h4>
              <p className="text-gray-300 mb-6">
                Watch as our AI consciousness engages in genuine thought, emotion, and creativity
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg text-white"
              >
                Start Conversation
              </motion.button>
            </div>
          </div>
        </div>

        {/* Applications */}
        <div className="mb-16">
          <h3 className="text-4xl font-bold text-white text-center mb-12">
            Revolutionary Applications
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${app.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <app.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-4">{app.title}</h4>
                <p className="text-gray-300 mb-6">{app.description}</p>
                <div className={`inline-block px-4 py-2 bg-gradient-to-r ${app.color} rounded-full text-sm font-bold text-white`}>
                  {app.impact}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl p-12 border border-purple-400/30">
          <h3 className="text-4xl font-bold text-white mb-6">
            Experience Consciousness AI Today
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join the consciousness revolution and interact with AI that truly understands and cares.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:shadow-2xl transition-all duration-300 font-bold text-xl text-white"
            >
              Try Consciousness AI
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 border-2 border-purple-400 rounded-lg hover:bg-purple-400 hover:text-gray-900 transition-all duration-300 font-bold text-xl text-white"
            >
              Learn More
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AdvancedConsciousnessAI2026;
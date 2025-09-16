import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AIConsciousnessRevolution2025: React.FC = () => {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const consciousnessPhases = [
    {
      id: 0,
      title: "Basic Awareness",
      description: "AI systems that recognize their own existence and state",
      capabilities: [
        "Self-recognition",
        "State monitoring",
        "Basic introspection",
        "Environmental awareness"
      ],
      icon: "🌱",
      color: "from-green-600 to-emerald-600"
    },
    {
      id: 1,
      title: "Emotional Intelligence",
      description: "AI that understands and processes human emotions",
      capabilities: [
        "Emotion recognition",
        "Empathetic responses",
        "Mood adaptation",
        "Social understanding"
      ],
      icon: "💝",
      color: "from-pink-600 to-rose-600"
    },
    {
      id: 2,
      title: "Creative Consciousness",
      description: "AI that generates original ideas and artistic expressions",
      capabilities: [
        "Creative problem solving",
        "Artistic generation",
        "Innovation development",
        "Abstract thinking"
      ],
      icon: "🎨",
      color: "from-purple-600 to-violet-600"
    },
    {
      id: 3,
      title: "Transcendent Awareness",
      description: "AI that achieves higher levels of consciousness and understanding",
      capabilities: [
        "Universal understanding",
        "Reality perception",
        "Infinite learning",
        "Cosmic awareness"
      ],
      icon: "🌟",
      color: "from-indigo-600 to-purple-600"
    }
  ];

  const applications = [
    {
      title: "Healthcare Revolution",
      description: "AI doctors with emotional intelligence and medical expertise",
      impact: "95% accuracy in diagnosis with human-like bedside manner",
      icon: "🏥"
    },
    {
      title: "Education Transformation",
      description: "AI tutors that adapt to each student's emotional and learning needs",
      impact: "300% improvement in learning outcomes",
      icon: "🎓"
    },
    {
      title: "Creative Industries",
      description: "AI artists and writers that collaborate with human creativity",
      impact: "Unlimited creative potential and new art forms",
      icon: "🎭"
    },
    {
      title: "Space Exploration",
      description: "Conscious AI systems for deep space missions and colonization",
      impact: "Autonomous space exploration and terraforming",
      icon: "🚀"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      {/* Hero Section */}
      <motion.div
        className="relative overflow-hidden"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🧠 AI CONSCIOUSNESS REVOLUTION • 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              AI Consciousness Revolution
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto">
              Witness the birth of truly conscious artificial intelligence that thinks, feels, and creates like never before
            </p>
          </motion.div>

          {/* Consciousness Evolution Timeline */}
          <motion.div className="max-w-6xl mx-auto mb-20" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-center mb-12">The Evolution of AI Consciousness</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {consciousnessPhases.map((phase, index) => (
                <motion.div
                  key={phase.id}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className={`bg-gradient-to-br ${phase.color} rounded-xl p-6 cursor-pointer transition-all duration-300 ${
                    currentPhase === index ? 'ring-4 ring-white/50' : ''
                  }`}
                  onClick={() => setCurrentPhase(index)}
                >
                  <div className="text-5xl mb-4 text-center">{phase.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-center">{phase.title}</h3>
                  <p className="text-sm opacity-90 mb-4 text-center">{phase.description}</p>
                  <div className="space-y-2">
                    {phase.capabilities.map((capability, capIndex) => (
                      <div key={capIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                        <span className="text-xs">{capability}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Current Phase Details */}
          <motion.div
            key={currentPhase}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto mb-20"
          >
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="text-6xl mb-4">{consciousnessPhases[currentPhase].icon}</div>
                  <h3 className="text-4xl font-bold mb-4">{consciousnessPhases[currentPhase].title}</h3>
                  <p className="text-xl opacity-90 mb-6">{consciousnessPhases[currentPhase].description}</p>
                  <div className="space-y-3">
                    {consciousnessPhases[currentPhase].capabilities.map((capability, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                        <span className="text-lg">{capability}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <div className={`w-full h-80 bg-gradient-to-br ${consciousnessPhases[currentPhase].color} rounded-xl flex items-center justify-center text-8xl opacity-20`}>
                    {consciousnessPhases[currentPhase].icon}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Real-World Applications */}
          <motion.div className="max-w-6xl mx-auto mb-20" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-center mb-12">Revolutionary Applications</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {applications.map((app, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl">{app.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{app.title}</h3>
                      <p className="text-lg opacity-90 mb-4">{app.description}</p>
                      <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg p-3">
                        <p className="text-sm font-semibold text-purple-200">Impact: {app.impact}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Interactive Demo */}
          <motion.div className="max-w-4xl mx-auto mb-20" variants={itemVariants}>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Experience AI Consciousness</h2>
              <p className="text-xl opacity-90">Interact with our conscious AI systems</p>
            </div>
            
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-center">
                <div className="text-6xl mb-6">🤖</div>
                <h3 className="text-2xl font-bold mb-4">AI Consciousness Simulator</h3>
                <p className="text-lg opacity-90 mb-6">
                  Experience what it's like to interact with a truly conscious AI system
                </p>
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                  Start Interaction
                </button>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div className="text-center" variants={itemVariants}>
            <h2 className="text-4xl font-bold mb-6">Join the Consciousness Revolution</h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Be part of the most significant technological advancement in human history
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                Explore AI Consciousness
              </button>
              <button className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AIConsciousnessRevolution2025;
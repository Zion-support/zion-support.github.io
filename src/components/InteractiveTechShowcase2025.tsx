import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Cpu, 
  Database, 
  Shield, 
  Globe, 
  Rocket, 
  Star,
  ArrowRight,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Minimize
} from 'lucide-react';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const technologies = [
    {
      id: 0,
      title: "AI Consciousness",
      description: "Revolutionary AI systems with self-awareness and emotional intelligence",
      icon: <Brain className="w-8 h-8" />,
      color: "from-purple-500 to-purple-700",
      features: [
        "Self-aware decision making",
        "Emotional intelligence processing",
        "Autonomous learning capabilities",
        "Human-AI collaboration"
      ],
      videoUrl: "/videos/ai-consciousness-demo.mp4",
      stats: { performance: "300%", accuracy: "99.9%", speed: "10x" }
    },
    {
      id: 1,
      title: "Quantum Computing",
      description: "Breakthrough quantum processors solving impossible problems",
      icon: <Zap className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      features: [
        "Quantum entanglement processing",
        "Exponential speed improvements",
        "Cryptographic security",
        "Complex optimization"
      ],
      videoUrl: "/videos/quantum-computing-demo.mp4",
      stats: { performance: "1000x", accuracy: "99.99%", speed: "∞" }
    },
    {
      id: 2,
      title: "Neural Interfaces",
      description: "Direct brain-computer interfaces for enhanced human capabilities",
      icon: <Cpu className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500",
      features: [
        "Thought-controlled devices",
        "Memory enhancement",
        "Direct data transfer",
        "Augmented cognition"
      ],
      videoUrl: "/videos/neural-interface-demo.mp4",
      stats: { performance: "500%", accuracy: "95%", speed: "Real-time" }
    },
    {
      id: 3,
      title: "Autonomous Systems",
      description: "Self-managing systems with predictive analytics and self-healing",
      icon: <Database className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      features: [
        "Predictive maintenance",
        "Self-healing infrastructure",
        "Autonomous optimization",
        "Intelligent resource management"
      ],
      videoUrl: "/videos/autonomous-systems-demo.mp4",
      stats: { performance: "200%", accuracy: "98%", speed: "24/7" }
    }
  ];

  const currentTech = technologies[activeTab];

  return (
    <div className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
            <Star className="w-4 h-4" />
            <span>INTERACTIVE SHOWCASE 2025</span>
          </div>
          
          <h2 className="text-5xl font-bold text-white mb-6">
            Experience Technology in Action
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Interact with our revolutionary technologies through immersive demonstrations 
            and real-time simulations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Technology Selector */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                  activeTab === index
                    ? `bg-gradient-to-r ${tech.color} text-white shadow-2xl`
                    : 'bg-white/10 backdrop-blur-sm text-gray-300 hover:bg-white/20'
                }`}
                onClick={() => setActiveTab(index)}
              >
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-xl ${
                    activeTab === index ? 'bg-white/20' : 'bg-gradient-to-r from-purple-500 to-pink-500'
                  }`}>
                    {tech.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{tech.title}</h3>
                    <p className="text-sm opacity-90">{tech.description}</p>
                  </div>
                  <ArrowRight className={`w-5 h-5 transition-transform ${
                    activeTab === index ? 'rotate-90' : ''
                  }`} />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Interactive Demo */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Video Player */}
            <div className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${currentTech.color} p-1`}>
              <div className="bg-black rounded-xl overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <Play className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-white text-lg">Interactive Demo</p>
                    <p className="text-gray-400 text-sm">{currentTech.title}</p>
                  </div>
                </div>
                
                {/* Video Controls */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                    >
                      {isPlaying ? <Pause className="w-5 h-5 text-white" /> : <Play className="w-5 h-5 text-white" />}
                    </button>
                    <button
                      onClick={() => setIsMuted(!isMuted)}
                      className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                    >
                      {isMuted ? <VolumeX className="w-5 h-5 text-white" /> : <Volume2 className="w-5 h-5 text-white" />}
                    </button>
                  </div>
                  
                  <button
                    onClick={() => setIsFullscreen(!isFullscreen)}
                    className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                  >
                    {isFullscreen ? <Minimize className="w-5 h-5 text-white" /> : <Maximize className="w-5 h-5 text-white" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Technology Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 bg-white/10 backdrop-blur-sm rounded-2xl p-6"
            >
              <h3 className="text-2xl font-bold text-white mb-4">{currentTech.title} Features</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {currentTech.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                {Object.entries(currentTech.stats).map(([key, value], index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-white">{value}</div>
                    <div className="text-sm text-gray-400 capitalize">{key}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Experience the Future?
            </h3>
            <p className="text-xl text-white/90 mb-6">
              Schedule a personalized demo and see these technologies in action for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                <Rocket className="w-5 h-5" />
                <span>Schedule Demo</span>
              </button>
              <button className="border border-white/30 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Download Brochure
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2025;
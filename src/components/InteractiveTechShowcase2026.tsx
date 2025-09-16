import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Shield, 
  Cpu, 
  Atom,
  Globe,
  Rocket,
  Sparkles,
  ChevronRight,
  Play,
  Pause,
  RotateCcw
} from 'lucide-react';

const InteractiveTechShowcase2026: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const techDemos = [
    {
      id: 0,
      title: "Conscious AI Systems",
      description: "Watch our AI systems demonstrate true consciousness and self-awareness in real-time.",
      icon: Brain,
      color: "from-cyan-500 to-blue-600",
      link: "/pages/ConsciousAIRevolution2026",
      demo: {
        type: "ai-consciousness",
        elements: [
          { name: "Neural Activity", value: 95, color: "cyan" },
          { name: "Self-Awareness", value: 88, color: "blue" },
          { name: "Creativity", value: 92, color: "purple" },
          { name: "Learning Rate", value: 97, color: "green" }
        ]
      }
    },
    {
      id: 1,
      title: "Quantum Processing",
      description: "Experience quantum computing in action with real-time quantum state visualization.",
      icon: Atom,
      color: "from-purple-500 to-pink-600",
      link: "/pages/QuantumComputingRevolution2026",
      demo: {
        type: "quantum-processing",
        elements: [
          { name: "Qubit Entanglement", value: 100, color: "purple" },
          { name: "Superposition", value: 98, color: "pink" },
          { name: "Quantum Speed", value: 1000, color: "cyan" },
          { name: "Dimensional Reach", value: 100, color: "blue" }
        ]
      }
    },
    {
      id: 2,
      title: "Neural Interfaces",
      description: "See direct brain-computer interfaces in action with real-time neural data processing.",
      icon: Cpu,
      color: "from-green-500 to-teal-600",
      link: "/pages/NeuralInterfaceRevolution2026",
      demo: {
        type: "neural-interface",
        elements: [
          { name: "Neural Sync", value: 94, color: "green" },
          { name: "Thought Speed", value: 89, color: "teal" },
          { name: "Memory Access", value: 96, color: "blue" },
          { name: "Control Precision", value: 98, color: "cyan" }
        ]
      }
    },
    {
      id: 3,
      title: "Cybersecurity Fortress",
      description: "Witness our AI-powered security systems predict and prevent threats in real-time.",
      icon: Shield,
      color: "from-red-500 to-orange-600",
      link: "/pages/AICybersecurityFortress2026",
      demo: {
        type: "cybersecurity",
        elements: [
          { name: "Threat Detection", value: 99, color: "red" },
          { name: "Response Time", value: 95, color: "orange" },
          { name: "Protection Level", value: 100, color: "green" },
          { name: "Zero-Day Coverage", value: 97, color: "blue" }
        ]
      }
    },
    {
      id: 4,
      title: "Interdimensional Computing",
      description: "Explore computing across multiple dimensions and parallel realities.",
      icon: Globe,
      color: "from-indigo-500 to-purple-600",
      link: "/pages/InterdimensionalComputing2026",
      demo: {
        type: "interdimensional",
        elements: [
          { name: "Dimension Access", value: 100, color: "indigo" },
          { name: "Reality Sync", value: 96, color: "purple" },
          { name: "Cross-Dimensional Speed", value: 1000, color: "cyan" },
          { name: "Universal Connectivity", value: 100, color: "blue" }
        ]
      }
    }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setActiveDemo((prev) => (prev + 1) % techDemos.length);
            return 0;
          }
          return prev + 2;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying, techDemos.length]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const resetDemo = () => {
    setProgress(0);
    setActiveDemo(0);
  };

  const currentDemo = techDemos[activeDemo];

  return (
    <div className="bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Interactive Technology Showcase
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Experience our revolutionary technologies in action. Watch real-time demonstrations of AI consciousness, 
            quantum processing, neural interfaces, and interdimensional computing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Demo Visualization */}
          <motion.div 
            className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">{currentDemo.title}</h3>
                <div className="flex space-x-2">
                  <button
                    onClick={togglePlayPause}
                    className="p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors duration-200"
                  >
                    {isPlaying ? <Pause className="w-5 h-5 text-white" /> : <Play className="w-5 h-5 text-white" />}
                  </button>
                  <button
                    onClick={resetDemo}
                    className="p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors duration-200"
                  >
                    <RotateCcw className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full bg-gray-700 rounded-full h-2 mb-6">
                <motion.div 
                  className={`bg-gradient-to-r ${currentDemo.color} h-2 rounded-full`}
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
            </div>

            {/* Demo Visualization */}
            <div className="space-y-6">
              {currentDemo.demo.elements.map((element, index) => (
                <motion.div
                  key={index}
                  className="space-y-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 font-medium">{element.name}</span>
                    <span className="text-white font-bold">
                      {element.name === "Quantum Speed" || element.name === "Cross-Dimensional Speed" 
                        ? `${element.value}x` 
                        : `${element.value}%`}
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <motion.div 
                      className={`bg-gradient-to-r from-${element.color}-500 to-${element.color}-600 h-3 rounded-full`}
                      initial={{ width: 0 }}
                      animate={{ width: `${element.value}%` }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
                  animate={{
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3 + i * 0.2,
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDemo}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center mb-6">
                  <div className={`bg-gradient-to-r ${currentDemo.color} p-4 rounded-xl mr-4`}>
                    <currentDemo.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">{currentDemo.title}</h3>
                </div>
                
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  {currentDemo.description}
                </p>

                <div className="space-y-4 mb-8">
                  <h4 className="text-lg font-semibold text-cyan-400">Key Capabilities:</h4>
                  <ul className="space-y-2">
                    {currentDemo.demo.elements.map((element, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
                        {element.name}: {element.name.includes("Speed") ? `${element.value}x faster` : `${element.value}% efficiency`}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={currentDemo.link}
                  className={`inline-flex items-center bg-gradient-to-r ${currentDemo.color} hover:opacity-90 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg`}
                >
                  <span>Explore {currentDemo.title}</span>
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Link>
              </motion.div>
            </AnimatePresence>

            {/* Demo Navigation */}
            <div className="flex flex-wrap gap-3">
              {techDemos.map((demo, index) => (
                <button
                  key={demo.id}
                  onClick={() => {
                    setActiveDemo(index);
                    setProgress(0);
                  }}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    index === activeDemo
                      ? `bg-gradient-to-r ${demo.color} text-white`
                      : 'bg-white/20 text-gray-300 hover:bg-white/30'
                  }`}
                >
                  {demo.title}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-white mb-6">
            Ready to Experience the Future?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            These are just a glimpse of our revolutionary technologies. Schedule a personalized demo 
            to see how our solutions can transform your business.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Schedule Live Demo
            </button>
            <button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Download Tech Guide
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2026;
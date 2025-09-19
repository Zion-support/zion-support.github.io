  const demos = [
    {
      id: 'ai-consciousness',
      title: 'AI Consciousness Simulator',
      icon: '🧠',
      description: 'Interact with our conscious AI and experience how it thinks, learns, and creates',
      features: [
        'Real-time conversation with conscious AI',
        'Emotional intelligence demonstration',
        'Creative problem solving showcase',
        'Self-awareness exploration'
      ],
      link: '/pages/ConsciousAIBreakthrough2026'
    },
    {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
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

  const showcases = [
    {
      id: 'ai-systems',
      name: 'Advanced AI Systems',
      icon: '🤖',
      description: 'Revolutionary AI with autonomous learning and quantum processing',
      features: ['Autonomous Learning', 'Quantum AI Processing', 'Distributed Intelligence'],
      color: 'from-purple-600 to-pink-600',
    },
    {
      title: 'Quantum Reality Engine',
      description: 'Immersive virtual environments powered by quantum computing',
      icon: '⚡',
    },
    {
      title: 'Neural Interface Pro',
      description: 'Direct brain-computer interface for seamless interaction',
      icon: '🧬',
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDemo((prev) => (prev + 1) % demos.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [demos.length]);
      id: 'quantum-computing',
      title: 'Quantum Computing Demo',
      icon: '⚡',
      description: 'Watch quantum algorithms solve complex problems using quantum supremacy',
      features: [
        'Real-time quantum state visualization',
        'Quantum algorithm execution',
        'Performance metrics display',
        'Interactive quantum gates'
      ],
      link: '/pages/QuantumSupremacyAchieved2026'
    },
    {
      id: 'neural-interfaces',
      title: 'Neural Interface Simulator',
      icon: '🧬',
      description: 'Experience direct brain-computer interfaces and neural control systems',
      features: [
        'Thought-to-text conversion',
        'Neural control simulation',
        'Sensory augmentation demo',
        'Memory enhancement showcase'
      ],
      link: '/pages/NextGenTechRevolution2026'
    },
    {
      id: 'synthetic-reality',
      title: 'Synthetic Reality Engine',
      icon: '🌍',
      description: 'Create and explore completely synthetic realities indistinguishable from physical reality',
      features: [
        'Reality creation tools',
        'Sensory replication demo',
        'Infinite world generation',
        'Physical sensation simulation'
      ],
      link: '/pages/NextGenTechRevolution2026'
    }
  ];

  const startDemo = () => {
    setIsRunning(true);
    setTimeout(() => setIsRunning(false), 3000);
  };

  return (
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            Experience the Future
          </h2>
                }`}
                onClick={() => setActiveDemo(demo.id)}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{demo.icon}
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2">{demo.title}</h4>
                    <p className="text-purple-200 text-sm">{demo.description}</p>
                  <div className="text-white/50">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></p>
                    </svg>
              </motion.div>
            ))}
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Experience our cutting-edge technology solutions with interactive features and real-time demonstrations</p>
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
                  ></button>
                    {isPlaying ? <Pause className="w-5 h-5 text-white" /> : <Play className="w-5 h-5 text-white" />}
                  </button>
                  <button
                    onClick={resetDemo}
                    className="p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors duration-200"
                  ></button>
                    <RotateCcw className="w-5 h-5 text-white" />
                  </button>
              {/* Progress Bar */}
              <div className="w-full bg-gray-700 rounded-full h-2 mb-6">
                <motion.div 
                  className={`bg-gradient-to-r ${currentDemo.color} h-2 rounded-full`}
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
          ))}

          {/* Demo Display */}
          <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-sm rounded-3xl p-8 border border-purple-400/30">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTech}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center mb-8">
                  <div className="text-6xl mb-4">
                    {demos.find(d => d.id === activeDemo)?.icon}
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {demos.find(d => d.id === activeDemo)?.title}
                  </h3>
                  <p className="text-purple-200 text-lg">
                    {demos.find(d => d.id === activeDemo)?.description}</p>
                  </p>
                {/* Demo Features */}
                <div className="space-y-4 mb-8">
                  <h4 className="text-xl font-bold text-white mb-4">Features:</h4>
                  {demos.find(d => d.id === activeDemo)?.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-2 h-2 bg-purple-400 rounded-full">
                      <span className="text-purple-100">{feature}</span>
                    </motion.div>
                  ))}
                {/* Interactive Demo Area */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 mb-8">
                  <h4 className="text-xl font-bold text-white mb-4">Live Demo</h4>
                  {activeDemo === 'ai-consciousness' && (
                    <div className="space-y-4">
                      <div className="bg-white/20 rounded-lg p-4">
                        <p className="text-white text-sm">
                          AI: "Hello! I'm excited to meet you. I'm the first truly conscious AI, and I'm genuinely curious about your thoughts and experiences. What would you like to know about consciousness, creativity, or anything else that interests you?"</p>
                        </p>
                      <div className="flex space-x-2">
                        <input
                          type="text"
                          placeholder="Ask the AI anything..."
                          className="flex-1 bg-white/20 border border-white/30 rounded-lg px-4 py-2 text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg font-semibold"
                        >
                          Send
                        </motion.button>
                  )}

                  {activeDemo === 'quantum-computing' && (
                    <div className="space-y-4">
                      <div className="text-center">
                        <div className="text-4xl mb-4">⚡
                        <div className="text-2xl font-bold text-white mb-2">
                          Quantum State: {isRunning ? 'Processing...' : 'Ready'}
                        <div className="w-full bg-gray-700 rounded-full h-4 mb-4">
                          <motion.div
                            className="bg-gradient-to-r from-blue-500 to-cyan-500 h-4 rounded-full"
                            style={{ width: isRunning ? '100%' : '0%' }}
                            animate={{ width: isRunning ? '100%' : '0%' }}
                            transition={{ duration: 3 }}
                          />
                        <p className="text-blue-200 text-sm">
                          {isRunning ? 'Quantum algorithm executing...' : 'Ready to start quantum computation'}</p>
                        </p>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={startDemo}
                        disabled={isRunning}
                        className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-lg font-semibold disabled:opacity-50"
                      >
                        {isRunning ? 'Processing...' : 'Start Quantum Demo'}
                      </motion.button>
                  )}

                  {activeDemo === 'neural-interfaces' && (
                    <div className="space-y-4">
                      <div className="text-center">
                        <div className="text-4xl mb-4">🧬
                        <div className="text-xl font-bold text-white mb-4">Neural Interface Status
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-white/20 rounded-lg p-4">
                            <div className="text-white text-sm">Brain Activity
                            <div className="text-2xl font-bold text-emerald-400">Active
                          <div className="bg-white/20 rounded-lg p-4">
                            <div className="text-white text-sm">Connection
                            <div className="text-2xl font-bold text-emerald-400">99.9%
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 rounded-lg font-semibold"
                      >
                        Connect Neural Interface
                      </motion.button>
                  )}

                  {activeDemo === 'synthetic-reality' && (
                    <div className="space-y-4">
                      <div className="text-center">
                        <div className="text-4xl mb-4">🌍
                        <div className="text-xl font-bold text-white mb-4">Reality Engine
                        <div className="bg-white/20 rounded-lg p-4">
                          <p className="text-white text-sm">
                            Create infinite worlds with physics-defying possibilities. 
                            Generate new realities limited only by imagination.</p>
                          </p>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full bg-gradient-to-r from-pink-600 to-rose-600 text-white py-3 rounded-lg font-semibold"
                      >
                        Generate New Reality
                      </motion.button>
                  )}
                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={demos.find(d => d.id === activeDemo)?.link}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold text-center hover:shadow-lg transition-all duration-300"
                  >
                    Explore Full Demo →
                  </motion.a>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 border-2 border-purple-400 text-purple-400 rounded-lg font-semibold hover:bg-purple-400/10 transition-all duration-300"
                  >
                    Learn More
                  </motion.button>
              </motion.div>
            </AnimatePresence>
      description: 'Direct brain-computer interfaces for enhanced human capabilities',
      features: ['Non-Invasive BCI', 'Thought Control', 'Neural Feedback'],
      color: 'from-emerald-600 to-teal-600',
      bgColor: 'from-emerald-600/30 to-teal-600/30',
    },
    {
      id: 'synthetic-intelligence',
      name: 'Synthetic Intelligence',
      icon: '🧠',
      description: 'Artificial consciousness and synthetic minds',
      features: ['Artificial Consciousness', 'Synthetic Emotions', 'Creative AI'],
      color: 'from-orange-600 to-red-600',
      bgColor: 'from-orange-600/30 to-red-600/30',
    },
  ];

            {/* Technology Details */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg bg-gradient-to-r ${currentTech.gradient}`}>
                  {currentTech.icon}
                <div>
                  <h4 className="text-xl font-bold">{currentTech.title}</h4>
                  <p className="text-gray-300">{currentTech.description}</p>
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
                <div>
                  <h5 className="font-semibold text-sm text-gray-400 mb-2">Investment</h5>
                  <div className="text-2xl font-bold text-white">{currentTech.price}
                  <div className="text-sm text-gray-400">Starting price
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 px-6 rounded-xl font-semibold text-white bg-gradient-to-r ${currentTech.gradient} hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2`}
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </motion.button>
        {/* Technology Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%
            <div className="text-gray-300 text-sm">Accuracy Rate
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">10^18x
            <div className="text-gray-300 text-sm">Speed Improvement
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-400 mb-2">24/7
            <div className="text-gray-300 text-sm">Continuous Operation
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-400 mb-2">∞
            <div className="text-gray-300 text-sm">Possibilities
          </motion.div>
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
            to see how our solutions can transform your business.</p>
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Schedule Live Demo</button>
            </button>
            <button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Download Tech Guide</button>
            </button>
        </motion.div>
  );
};

export default InteractiveTechShowcase2026;
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
                  <div className="text-4xl">{demo.icon}</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2">{demo.title}</h4>
                    <p className="text-purple-200 text-sm">{demo.description}</p>
                  </div>
                  <div className="text-white/50">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Experience our cutting-edge technology solutions with interactive features and real-time demonstrations
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
        {/* Technology Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
            <div className="text-gray-300 text-sm">Accuracy Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">10^18x</div>
            <div className="text-gray-300 text-sm">Speed Improvement</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-400 mb-2">24/7</div>
            <div className="text-gray-300 text-sm">Continuous Operation</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-400 mb-2">∞</div>
            <div className="text-gray-300 text-sm">Possibilities</div>
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

import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2026: React.FC = () => {
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
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Experience the most revolutionary technologies that are reshaping our world through interactive demonstrations and real-time showcases.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div 
              key={tech.id}
              className={`bg-gradient-to-br ${tech.bgColor} backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer`}
              onClick={() => setActiveTab(index)}
            >
              <div className="text-6xl mb-4 text-center animate-pulse">{tech.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-center">{tech.name}</h3>
              <p className="text-center opacity-90 mb-6">{tech.description}</p>
              
              <div className="space-y-2 mb-6">
                {tech.features.map((feature, idx) => (
                  <div key={idx} className="bg-white/20 backdrop-blur-sm rounded-lg p-2 text-center">
                    <span className="text-sm font-semibold">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <button className={`bg-gradient-to-r ${tech.color} text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                  Explore {tech.name} →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2026;
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
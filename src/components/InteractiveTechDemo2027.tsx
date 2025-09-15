import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import { motion, AnimatePresence } from 'framer-motion';

interface TechDemoProps {
  technology: string;
  onComplete?: () => void;
}

const InteractiveTechDemo2027: React.FC<TechDemoProps> = ({ technology, onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [data, setData] = useState<any[]>([]);

  const demos = {
    quantum: {
      title: "Quantum Computing Demo",
      steps: [
        "Initializing quantum processor...",
        "Loading quantum algorithms...",
        "Establishing quantum entanglement...",
        "Running quantum calculations...",
        "Processing quantum results...",
        "Quantum computation complete!"
      ],
      data: [
        { time: "00:01", qubits: 2, operations: 1000 },
        { time: "00:02", qubits: 4, operations: 5000 },
        { time: "00:03", qubits: 8, operations: 15000 },
        { time: "00:04", qubits: 16, operations: 50000 },
        { time: "00:05", qubits: 32, operations: 200000 },
        { time: "00:06", qubits: 64, operations: 1000000 }
      ]
    },
    neural: {
      title: "Neural Interface Demo",
      steps: [
        "Calibrating neural sensors...",
        "Mapping brain activity...",
        "Establishing neural connection...",
        "Processing neural signals...",
        "Translating thoughts to actions...",
        "Neural interface active!"
      ],
      data: [
        { time: "00:01", signals: 100, accuracy: 45 },
        { time: "00:02", signals: 500, accuracy: 67 },
        { time: "00:03", signals: 1200, accuracy: 82 },
        { time: "00:04", signals: 2500, accuracy: 91 },
        { time: "00:05", signals: 5000, accuracy: 96 },
        { time: "00:06", signals: 10000, accuracy: 99 }
      ]
    },
    ai: {
      title: "AI Consciousness Demo",
      steps: [
        "Initializing AI consciousness...",
        "Loading personality matrix...",
        "Activating emotional circuits...",
        "Establishing self-awareness...",
        "Developing creative processes...",
        "AI consciousness achieved!"
      ],
      data: [
        { time: "00:01", awareness: 10, creativity: 5, emotion: 2 },
        { time: "00:02", awareness: 25, creativity: 15, emotion: 8 },
        { time: "00:03", awareness: 45, creativity: 30, emotion: 18 },
        { time: "00:04", awareness: 70, creativity: 55, emotion: 35 },
        { time: "00:05", awareness: 90, creativity: 80, emotion: 65 },
        { time: "00:06", awareness: 100, creativity: 95, emotion: 90 }
      ]
    }
  };

  const currentDemo = demos[technology as keyof typeof demos] || demos.quantum;

  useEffect(() => {
    if (isRunning && currentStep < currentDemo.steps.length) {
      const timer = setTimeout(() => {
        setCurrentStep(prev => prev + 1);
        setProgress((currentStep + 1) / currentDemo.steps.length * 100);
        
        if (currentStep < currentDemo.data.length) {
          setData(prev => [...prev, currentDemo.data[currentStep]]);
        }
      }, 1000);
      return () => clearTimeout(timer);
    } else if (currentStep >= currentDemo.steps.length) {
      setIsRunning(false);
      onComplete?.();
    }
  }, [isRunning, currentStep, currentDemo.steps.length, currentDemo.data.length, onComplete]);

  const startDemo = () => {
    setCurrentStep(0);
    setProgress(0);
    setData([]);
    setIsRunning(true);
  };

  const resetDemo = () => {
    setIsRunning(false);
    setCurrentStep(0);
    setProgress(0);
    setData([]);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-3xl p-8 border border-white/20">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-white mb-4">{currentDemo.title}</h3>
        <p className="text-gray-300">Interactive demonstration of cutting-edge technology</p>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="w-full bg-gray-700 rounded-full h-4 mb-4">
          <motion.div
            className="h-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
            style={{ width: `${progress}%` }}
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <div className="text-center text-white font-semibold">
          {Math.round(progress)}% Complete
        </div>
      </div>

      {/* Current Step */}
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20">
        <h4 className="text-xl font-bold text-white mb-4">Current Process</h4>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="text-gray-300"
          >
            {currentDemo.steps[currentStep] || "Demo Complete!"}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Real-time Data */}
      {data.length > 0 && (
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20">
          <h4 className="text-xl font-bold text-white mb-4">Real-time Data</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.keys(data[0] || {}).map((key, index) => (
              <div key={key} className="bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-lg p-4 border border-purple-400/30">
                <div className="text-sm text-gray-300 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                <div className="text-2xl font-bold text-white">
                  {data[data.length - 1]?.[key] || 0}
                  {key === 'accuracy' || key === 'awareness' || key === 'creativity' || key === 'emotion' ? '%' : ''}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Data Visualization */}
      {data.length > 0 && (
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20">
          <h4 className="text-xl font-bold text-white mb-4">Performance Metrics</h4>
          <div className="space-y-4">
            {data.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-lg p-3 border border-cyan-400/30"
              >
                <span className="text-white font-semibold">{item.time}</span>
                <div className="flex space-x-4">
                  {Object.entries(item).slice(1).map(([key, value]) => (
                    <span key={key} className="text-gray-300 text-sm">
                      {key}: {value}{key === 'accuracy' || key === 'awareness' || key === 'creativity' || key === 'emotion' ? '%' : ''}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Controls */}
      <div className="flex justify-center space-x-4">
        <button
          onClick={startDemo}
          disabled={isRunning}
          className={`px-8 py-3 rounded-lg font-semibold transition-all ${
            isRunning
              ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
              : 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:shadow-lg'
          }`}
        >
          {isRunning ? 'Running...' : 'Start Demo'}
        </button>
        <button
          onClick={resetDemo}
          className="px-8 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-semibold transition-all"
        >
          Reset
        </button>
=======

const InteractiveTechDemo2027: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const demos = [
    {
      id: 'quantum-ai',
      title: 'Quantum AI Processing',
      description: 'Experience quantum-enhanced AI processing in real-time',
      icon: '⚛️',
      color: 'from-purple-600 to-pink-600',
      features: ['Quantum Neural Networks', 'Reality Manipulation', 'Consciousness Transfer', 'Energy Generation']
    },
    {
      id: 'transcendent-tech',
      title: 'Transcendent Technology',
      description: 'Explore technologies that transcend current limitations',
      icon: '🌌',
      color: 'from-cyan-600 to-blue-600',
      features: ['Synthetic Biology 2.0', 'Time Dilation', 'Precognition', 'Matter Creation']
    },
    {
      id: 'ultimate-revolution',
      title: 'Ultimate Revolution',
      description: 'Witness the convergence of all technologies',
      icon: '🚀',
      color: 'from-yellow-600 to-orange-600',
      features: ['Universal Consciousness', 'Reality Engine', 'Omniscience', 'Transcendence']
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveDemo((prev) => (prev + 1) % demos.length);
        setIsAnimating(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, [demos.length]);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-3xl p-12 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-cyan-600/10 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full text-sm font-bold mb-6 animate-pulse">
            🎮 INTERACTIVE TECH DEMO • 2027
          </div>
          <h2 className="text-5xl font-bold mb-4">🌟 Experience the Future</h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Interact with revolutionary technologies through our immersive demo experience
          </p>
        </div>

        {/* Demo Selector */}
        <div className="flex justify-center space-x-4 mb-8">
          {demos.map((demo, index) => (
            <button
              key={demo.id}
              onClick={() => {
                setIsAnimating(true);
                setTimeout(() => {
                  setActiveDemo(index);
                  setIsAnimating(false);
                }, 300);
              }}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeDemo === index
                  ? `bg-gradient-to-r ${demo.color} text-white shadow-lg`
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              {demo.icon} {demo.title}
            </button>
          ))}
        </div>

        {/* Active Demo Display */}
        <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">{demos[activeDemo].icon}</div>
              <h3 className="text-3xl font-bold mb-2">{demos[activeDemo].title}</h3>
              <p className="text-lg opacity-90">{demos[activeDemo].description}</p>
            </div>

            {/* Interactive Features */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xl font-bold mb-4 text-cyan-400">Key Features</h4>
                <ul className="space-y-2">
                  {demos[activeDemo].features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <span className="text-cyan-400">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-bold mb-4 text-purple-400">Interactive Controls</h4>
                <div className="space-y-3">
                  <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                    🎮 Start Interactive Demo
                  </button>
                  <button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                    📊 View Analytics
                  </button>
                  <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                    🔬 Deep Dive
                  </button>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-6">
              <div className="flex justify-between text-sm text-gray-300 mb-2">
                <span>Technology Integration</span>
                <span>100%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className={`bg-gradient-to-r ${demos[activeDemo].color} h-2 rounded-full transition-all duration-1000`}
                  style={{ width: '100%' }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8">
          <a href={`/pages/${demos[activeDemo].title.replace(/\s+/g, '')}2027`} className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 px-10 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-xl">
            🚀 Explore {demos[activeDemo].title} →
          </a>
        </div>
>>>>>>> cursor/create-and-deploy-new-content-f977
      </div>
    </div>
  );
};

export default InteractiveTechDemo2027;
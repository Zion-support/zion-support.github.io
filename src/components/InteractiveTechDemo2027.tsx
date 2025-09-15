import React, { useState, useEffect } from 'react';
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
      </div>
    </div>
  );
};


export default InteractiveTechDemo2027;

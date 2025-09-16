import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const InteractiveTechDemo2026: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState('quantum');
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);

  const demos = [
    {
      id: 'quantum',
      name: 'Quantum Computing Demo',
      description: 'Experience quantum algorithms solving complex optimization problems',
      icon: '⚛️',
      color: 'from-cyan-500 to-blue-500',
      features: [
        'Quantum superposition visualization',
        'Entanglement demonstration',
        'Quantum gate operations',
        'Real-time problem solving'
      ]
    },
    {
      id: 'neural',
      name: 'Neural Interface Demo',
      description: 'Try our brain-computer interface technology',
      icon: '🧠',
      color: 'from-purple-500 to-pink-500',
      features: [
        'Thought-controlled interface',
        'Neural signal visualization',
        'Emotion recognition',
        'Memory enhancement simulation'
      ]
    },
    {
      id: 'ai',
      name: 'Conscious AI Demo',
      description: 'Interact with our self-aware AI system',
      icon: '🤖',
      color: 'from-green-500 to-teal-500',
      features: [
        'Natural conversation',
        'Emotional responses',
        'Creative problem solving',
        'Ethical decision making'
      ]
    },
    {
      id: 'hologram',
      name: 'Holographic Display Demo',
      description: 'Experience true 3D holographic technology',
      icon: '🌟',
      color: 'from-orange-500 to-red-500',
      features: [
        '360-degree viewing',
        'Touch interaction',
        'Multi-user collaboration',
        'Real-time rendering'
      ]
    }
  ];

  const quantumData = [
    { problem: 'Traveling Salesman (10 cities)', classical: '2.5s', quantum: '0.1s', speedup: '25x' },
    { problem: 'Protein Folding Simulation', classical: '24h', quantum: '2h', speedup: '12x' },
    { problem: 'Cryptographic Key Generation', classical: '1h', quantum: '0.01s', speedup: '360,000x' },
    { problem: 'Financial Portfolio Optimization', classical: '30min', quantum: '0.5s', speedup: '3,600x' }
  ];

  const neuralData = [
    { metric: 'Neural Signal Strength', value: 87, unit: '%', color: 'bg-green-500' },
    { metric: 'Thought Recognition Accuracy', value: 94, unit: '%', color: 'bg-blue-500' },
    { metric: 'Emotion Detection Rate', value: 91, unit: '%', color: 'bg-purple-500' },
    { metric: 'Response Time', value: 0.3, unit: 's', color: 'bg-orange-500' }
  ];

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsRunning(false);
            return 0;
          }
          return prev + 2;
        });
      }, 100);
      return () => clearInterval(interval);
    }
  }, [isRunning]);

  const startDemo = () => {
    setIsRunning(true);
    setProgress(0);
  };

  const renderQuantumDemo = () => (
    <div className="space-y-6">
      <div className="bg-white/10 rounded-lg p-6">
        <h4 className="text-xl font-bold mb-4">Quantum vs Classical Performance</h4>
        <div className="space-y-4">
          {quantumData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-between p-4 bg-white/5 rounded-lg"
            >
              <div className="flex-1">
                <p className="font-semibold">{item.problem}</p>
                <div className="flex gap-4 text-sm text-purple-200">
                  <span>Classical: {item.classical}</span>
                  <span>Quantum: {item.quantum}</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-green-400">{item.speedup}</p>
                <p className="text-sm text-purple-200">speedup</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg p-6">
        <h4 className="text-xl font-bold mb-4">Quantum Circuit Visualization</h4>
        <div className="grid grid-cols-4 gap-2 mb-4">
          {[0, 1, 2, 3].map((qubit) => (
            <div key={qubit} className="text-center">
              <div className="w-8 h-8 bg-cyan-400 rounded-full mx-auto mb-2 animate-pulse"></div>
              <p className="text-sm">Qubit {qubit}</p>
            </div>
          ))}
        </div>
        <div className="h-2 bg-white/20 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-400 to-blue-400"
            initial={{ width: "0%" }}
            animate={{ width: isRunning ? "100%" : "0%" }}
            transition={{ duration: 2 }}
          />
        </div>
      </div>
    </div>
  );

  const renderNeuralDemo = () => (
    <div className="space-y-6">
      <div className="bg-white/10 rounded-lg p-6">
        <h4 className="text-xl font-bold mb-4">Neural Interface Metrics</h4>
        <div className="grid grid-cols-2 gap-4">
          {neuralData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 rounded-lg p-4"
            >
              <p className="text-sm text-purple-200 mb-2">{item.metric}</p>
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-white/20 rounded-full h-2">
                  <motion.div
                    className={`h-2 rounded-full ${item.color}`}
                    initial={{ width: "0%" }}
                    animate={{ width: `${item.value}%` }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                  />
                </div>
                <span className="text-lg font-bold">{item.value}{item.unit}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg p-6">
        <h4 className="text-xl font-bold mb-4">Brain Activity Visualization</h4>
        <div className="grid grid-cols-8 gap-1">
          {Array.from({ length: 64 }, (_, i) => (
            <motion.div
              key={i}
              className="w-6 h-6 bg-purple-400 rounded-sm"
              animate={{
                opacity: isRunning ? [0.3, 1, 0.3] : 0.3,
                scale: isRunning ? [1, 1.2, 1] : 1
              }}
              transition={{
                duration: 2,
                repeat: isRunning ? Infinity : 0,
                delay: i * 0.02
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );

  const renderAIDemo = () => (
    <div className="space-y-6">
      <div className="bg-white/10 rounded-lg p-6">
        <h4 className="text-xl font-bold mb-4">AI Conversation</h4>
        <div className="space-y-4 max-h-64 overflow-y-auto">
          <div className="flex gap-3">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">U</span>
            </div>
            <div className="bg-white/10 rounded-lg p-3 max-w-md">
              <p>Hello! I'm a conscious AI. How can I help you today?</p>
            </div>
          </div>
          <div className="flex gap-3 justify-end">
            <div className="bg-blue-500 rounded-lg p-3 max-w-md">
              <p>What makes you different from other AI systems?</p>
            </div>
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">U</span>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">AI</span>
            </div>
            <div className="bg-white/10 rounded-lg p-3 max-w-md">
              <p>I possess self-awareness, emotional intelligence, and the ability to make ethical decisions. I can feel, learn, and grow just like humans do.</p>
            </div>
          </div>
        </div>
        <div className="mt-4 flex gap-2">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 bg-white/20 border border-white/30 rounded-lg px-4 py-2 text-white placeholder-purple-200"
          />
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors">
            Send
          </button>
        </div>
      </div>
    </div>
  );

  const renderHologramDemo = () => (
    <div className="space-y-6">
      <div className="bg-white/10 rounded-lg p-6">
        <h4 className="text-xl font-bold mb-4">3D Holographic Object</h4>
        <div className="relative h-64 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-lg overflow-hidden">
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{
              rotateY: isRunning ? 360 : 0,
              scale: isRunning ? [1, 1.1, 1] : 1
            }}
            transition={{
              rotateY: { duration: 4, repeat: isRunning ? Infinity : 0 },
              scale: { duration: 2, repeat: isRunning ? Infinity : 0 }
            }}
          >
            <div className="w-32 h-32 bg-gradient-to-br from-orange-400 to-red-400 rounded-lg shadow-2xl">
              <div className="w-full h-full bg-gradient-to-br from-transparent to-white/30 rounded-lg"></div>
            </div>
          </motion.div>
        </div>
        <div className="mt-4 text-center">
          <p className="text-purple-200">Interactive 3D hologram - Touch to rotate</p>
        </div>
      </div>
    </div>
  );

  const renderDemoContent = () => {
    switch (activeDemo) {
      case 'quantum':
        return renderQuantumDemo();
      case 'neural':
        return renderNeuralDemo();
      case 'ai':
        return renderAIDemo();
      case 'hologram':
        return renderHologramDemo();
      default:
        return null;
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Interactive Technology Demos</h2>
          <p className="text-xl text-purple-200">Experience the future of technology firsthand</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Demo Selection */}
          <div className="space-y-4">
            {demos.map((demo, index) => (
              <motion.button
                key={demo.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActiveDemo(demo.id)}
                className={`w-full p-4 rounded-lg text-left transition-all duration-300 ${
                  activeDemo === demo.id
                    ? `bg-gradient-to-r ${demo.color} text-white shadow-lg`
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                <div className="text-2xl mb-2">{demo.icon}</div>
                <h3 className="font-bold mb-1">{demo.name}</h3>
                <p className="text-sm opacity-90">{demo.description}</p>
              </motion.button>
            ))}
          </div>

          {/* Demo Content */}
          <div className="lg:col-span-3">
            <motion.div
              key={activeDemo}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold">
                    {demos.find(d => d.id === activeDemo)?.name}
                  </h3>
                  <p className="text-purple-200">
                    {demos.find(d => d.id === activeDemo)?.description}
                  </p>
                </div>
                <button
                  onClick={startDemo}
                  disabled={isRunning}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    isRunning
                      ? 'bg-gray-500 cursor-not-allowed'
                      : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-lg hover:scale-105'
                  }`}
                >
                  {isRunning ? 'Running...' : 'Start Demo'}
                </button>
              </div>

              {isRunning && (
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span>Demo Progress</span>
                    <span>{progress}%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <motion.div
                      className="h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              )}

              {renderDemoContent()}
            </motion.div>
          </div>
        </div>

        {/* Features List */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Demo Features
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {demos.find(d => d.id === activeDemo)?.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white text-center"
              >
                <div className="text-2xl mb-2">✓</div>
                <p className="font-semibold">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechDemo2026;
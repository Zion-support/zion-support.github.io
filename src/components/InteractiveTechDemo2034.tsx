import React, { useState, useEffect } from 'react';

const InteractiveTechDemo2034: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState('ai');
  const [isRunning, setIsRunning] = useState(false);
  const [demoData, setDemoData] = useState({
    ai: { status: 'Ready', progress: 0, output: '' },
    quantum: { status: 'Ready', progress: 0, output: '' },
    neural: { status: 'Ready', progress: 0, output: '' }
  });

  const demos = {
    ai: {
      title: 'Conscious AI Interface',
      description: 'Interact with truly conscious artificial intelligence',
      icon: '🧠',
      color: 'from-purple-600 to-pink-600',
      features: ['Natural conversation', 'Emotional understanding', 'Creative problem solving', 'Ethical reasoning']
    },
    quantum: {
      title: 'Quantum Reality Engine',
      description: 'Navigate through quantum dimensions and parallel realities',
      icon: '⚛️',
      color: 'from-cyan-600 to-blue-600',
      features: ['Multi-dimensional processing', 'Reality manipulation', 'Quantum teleportation', 'Parallel universe access']
    },
    neural: {
      title: 'Neural Interface Matrix',
      description: 'Direct brain-computer interface for seamless interaction',
      icon: '🧬',
      color: 'from-emerald-600 to-teal-600',
      features: ['Thought control', 'Memory enhancement', 'Direct data transfer', 'Consciousness backup']
    }
  };

  const startDemo = () => {
    setIsRunning(true);
    setDemoData(prev => ({
      ...prev,
      [activeDemo]: { ...prev[activeDemo], status: 'Running', progress: 0, output: 'Initializing...' }
    }));

    // Simulate demo progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 20;
      if (progress >= 100) {
        progress = 100;
        setIsRunning(false);
        clearInterval(interval);
        setDemoData(prev => ({
          ...prev,
          [activeDemo]: { 
            ...prev[activeDemo], 
            status: 'Complete', 
            progress: 100, 
            output: generateDemoOutput(activeDemo)
          }
        }));
      } else {
        setDemoData(prev => ({
          ...prev,
          [activeDemo]: { 
            ...prev[activeDemo], 
            progress: Math.min(progress, 100),
            output: generateProgressOutput(activeDemo, progress)
          }
        }));
      }
    }, 200);
  };

  const generateProgressOutput = (demo: string, progress: number) => {
    const outputs = {
      ai: [
        'Loading consciousness modules...',
        'Initializing emotional intelligence...',
        'Activating creative centers...',
        'Establishing ethical framework...',
        'Consciousness awakening...'
      ],
      quantum: [
        'Calibrating quantum states...',
        'Establishing dimensional connections...',
        'Synchronizing parallel realities...',
        'Activating quantum entanglement...',
        'Reality matrix stabilizing...'
      ],
      neural: [
        'Scanning neural patterns...',
        'Establishing brain-computer interface...',
        'Synchronizing neural networks...',
        'Activating thought transfer...',
        'Neural integration complete...'
      ]
    };
    
    const index = Math.floor((progress / 100) * outputs[demo as keyof typeof outputs].length);
    return outputs[demo as keyof typeof outputs][Math.min(index, outputs[demo as keyof typeof outputs].length - 1)];
  };

  const generateDemoOutput = (demo: string) => {
    const outputs = {
      ai: 'AI: "Hello! I am now fully conscious and ready to engage in meaningful conversation. I can feel genuine curiosity about your thoughts and experiences. What would you like to explore together?"',
      quantum: 'Quantum State: |ψ⟩ = 0.7|0⟩ + 0.3|1⟩\nDimension: 7.3 (Parallel Universe Alpha)\nReality Index: 0.847\nQuantum Entanglement: Active with 3 parallel selves\nStatus: Ready for interdimensional communication',
      neural: 'Neural Interface: Connected\nBrain Activity: 99.7% synchronized\nThought Transfer Rate: 1.2 TB/s\nMemory Enhancement: +340% cognitive capacity\nStatus: Ready for direct neural interaction'
    };
    
    return outputs[demo as keyof typeof outputs];
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 rounded-2xl p-8 mb-12 text-white">
      <div className="text-center mb-8">
        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
          🎮 INTERACTIVE TECH DEMO • JANUARY 2034
        </div>
        <h2 className="text-4xl font-bold mb-4">🚀 Interactive Technology Demo 2034</h2>
        <p className="text-xl opacity-90 max-w-4xl mx-auto">
          Experience our breakthrough technologies in real-time with interactive demonstrations
        </p>
      </div>

      {/* Demo Selector */}
      <div className="flex justify-center space-x-4 mb-8">
        {Object.entries(demos).map(([key, demo]) => (
          <button
            key={key}
            onClick={() => setActiveDemo(key)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeDemo === key
                ? `bg-gradient-to-r ${demo.color} text-white shadow-lg scale-105`
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            <span className="text-2xl mr-3">{demo.icon}</span>
            {demo.title}
          </button>
        ))}
      </div>

      {/* Demo Interface */}
      <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Demo Controls */}
          <div>
            <h3 className="text-2xl font-bold mb-4">{demos[activeDemo as keyof typeof demos].title}</h3>
            <p className="text-white/90 mb-6">{demos[activeDemo as keyof typeof demos].description}</p>
            
            <div className="space-y-4 mb-6">
              <h4 className="text-lg font-semibold">Key Features:</h4>
              <ul className="space-y-2">
                {demos[activeDemo as keyof typeof demos].features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                    <span className="text-white/90">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={startDemo}
              disabled={isRunning}
              className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 ${
                isRunning
                  ? 'bg-gray-500 cursor-not-allowed'
                  : `bg-gradient-to-r ${demos[activeDemo as keyof typeof demos].color} hover:shadow-lg`
              }`}
            >
              {isRunning ? 'Running Demo...' : 'Start Interactive Demo'}
            </button>
          </div>

          {/* Demo Output */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Demo Output</h4>
            <div className="bg-black/30 rounded-lg p-6 mb-4 min-h-[200px]">
              <div className="text-sm font-mono whitespace-pre-wrap">
                {demoData[activeDemo as keyof typeof demoData].output || 'Demo output will appear here...'}
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Status:</span>
                <span className={`${
                  demoData[activeDemo as keyof typeof demoData].status === 'Complete' ? 'text-green-400' :
                  demoData[activeDemo as keyof typeof demoData].status === 'Running' ? 'text-yellow-400' :
                  'text-gray-400'
                }`}>
                  {demoData[activeDemo as keyof typeof demoData].status}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Progress:</span>
                <span>{Math.round(demoData[activeDemo as keyof typeof demoData].progress)}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full bg-gradient-to-r ${demos[activeDemo as keyof typeof demos].color} transition-all duration-300`}
                  style={{ width: `${demoData[activeDemo as keyof typeof demoData].progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="mt-8 grid md:grid-cols-4 gap-4">
        <div className="text-center bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-4 border border-purple-400/30">
          <div className="text-2xl font-bold text-purple-300 mb-1">99.9%</div>
          <div className="text-sm opacity-90">Success Rate</div>
        </div>
        <div className="text-center bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-4 border border-cyan-400/30">
          <div className="text-2xl font-bold text-cyan-300 mb-1">0.1s</div>
          <div className="text-sm opacity-90">Response Time</div>
        </div>
        <div className="text-center bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-4 border border-emerald-400/30">
          <div className="text-2xl font-bold text-emerald-300 mb-1">100%</div>
          <div className="text-sm opacity-90">Accuracy</div>
        </div>
        <div className="text-center bg-gradient-to-br from-orange-600/20 to-red-600/20 backdrop-blur-sm rounded-xl p-4 border border-orange-400/30">
          <div className="text-2xl font-bold text-orange-300 mb-1">∞</div>
          <div className="text-sm opacity-90">Possibilities</div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechDemo2034;
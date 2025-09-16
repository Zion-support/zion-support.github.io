import React, { useState, useEffect } from 'react';

const InteractiveTechDemo2028: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState('quantum');
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);

  const demos = [
    {
      id: 'quantum',
      title: 'Quantum Consciousness Interface',
      description: 'Experience direct thought-to-computer communication through our advanced neural interface technology.',
      icon: '🧠',
      color: 'from-purple-600 to-pink-600',
      steps: [
        'Neural connection established',
        'Thought patterns detected',
        'Quantum processing initiated',
        'Digital environment responding',
        'Consciousness transfer complete'
      ]
    },
    {
      id: 'interdimensional',
      title: 'Interdimensional Computing',
      description: 'Harness the power of parallel dimensions for unlimited computational resources.',
      icon: '🌌',
      color: 'from-cyan-600 to-blue-600',
      steps: [
        'Dimensional gateway opened',
        'Parallel universe detected',
        'Computational resources allocated',
        'Cross-dimensional processing active',
        'Infinite computing power available'
      ]
    },
    {
      id: 'synthetic',
      title: 'Synthetic Reality Engine',
      description: 'Create and manipulate entire realities with perfect fidelity and infinite possibilities.',
      icon: '🌍',
      color: 'from-green-600 to-emerald-600',
      steps: [
        'Reality simulation initialized',
        'Quantum-level detail rendering',
        'Sensory replication active',
        'Consciousness transfer protocols ready',
        'Perfect reality created'
      ]
    },
    {
      id: 'temporal',
      title: 'Temporal Computing',
      description: 'Process information across multiple time dimensions for predictions that transcend linear time.',
      icon: '⏰',
      color: 'from-orange-600 to-red-600',
      steps: [
        'Temporal gateway established',
        'Time dimensions synchronized',
        'Future state analysis active',
        'Past event reconstruction complete',
        'Perfect prediction achieved'
      ]
    }
  ];

  const currentDemo = demos.find(demo => demo.id === activeDemo) || demos[0];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning && progress < 100) {
      interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setIsRunning(false);
            return 100;
          }
          return prev + 2;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isRunning, progress]);

  const startDemo = () => {
    setProgress(0);
    setIsRunning(true);
  };

  const resetDemo = () => {
    setIsRunning(false);
    setProgress(0);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE TECH DEMO 2028
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Experience the Future
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
            Try our revolutionary technologies through immersive interactive demonstrations. 
            Control digital environments with your mind and explore infinite possibilities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Demo Selection */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold mb-8 text-purple-300">Choose Your Technology</h3>
            {demos.map((demo) => (
              <button
                key={demo.id}
                onClick={() => {
                  setActiveDemo(demo.id);
                  resetDemo();
                }}
                className={`w-full p-6 rounded-2xl border-2 transition-all duration-300 text-left ${
                  activeDemo === demo.id
                    ? `border-purple-500 bg-gradient-to-r ${demo.color} bg-opacity-20`
                    : 'border-gray-600 bg-gray-800/50 hover:border-purple-400 hover:bg-gray-700/50'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{demo.icon}</div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{demo.title}</h4>
                    <p className="text-gray-300 text-sm">{demo.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Interactive Demo Area */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-600/30">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">{currentDemo.icon}</div>
              <h3 className="text-3xl font-bold mb-4 text-white">{currentDemo.title}</h3>
              <p className="text-gray-300 mb-6">{currentDemo.description}</p>
            </div>

            {/* Demo Controls */}
            <div className="mb-8">
              <div className="flex justify-center space-x-4 mb-6">
                <button
                  onClick={startDemo}
                  disabled={isRunning}
                  className={`px-8 py-3 rounded-lg font-bold text-lg transition-all duration-300 ${
                    isRunning
                      ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                      : `bg-gradient-to-r ${currentDemo.color} hover:scale-105 shadow-lg`
                  }`}
                >
                  {isRunning ? 'Running...' : 'Start Demo'}
                </button>
                <button
                  onClick={resetDemo}
                  className="px-8 py-3 rounded-lg font-bold text-lg bg-gray-600 hover:bg-gray-500 transition-colors duration-300"
                >
                  Reset
                </button>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-700 rounded-full h-3 mb-6">
                <div
                  className={`h-3 rounded-full bg-gradient-to-r ${currentDemo.color} transition-all duration-300`}
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <div className="text-center text-gray-400 text-sm">
                Progress: {progress}%
              </div>
            </div>

            {/* Demo Status */}
            <div className="bg-black/50 rounded-lg p-6 mb-6">
              <h4 className="text-lg font-semibold mb-4 text-purple-300">Demo Status</h4>
              <div className="space-y-3">
                {currentDemo.steps.map((step, index) => {
                  const stepProgress = (progress / 100) * currentDemo.steps.length;
                  const isActive = index < stepProgress;
                  const isCurrent = index === Math.floor(stepProgress) && isRunning;
                  
                  return (
                    <div key={index} className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        isActive 
                          ? `bg-gradient-to-r ${currentDemo.color} ${isCurrent ? 'animate-pulse' : ''}`
                          : 'bg-gray-600'
                      }`}></div>
                      <span className={`text-sm transition-colors duration-300 ${
                        isActive ? 'text-white' : 'text-gray-500'
                      }`}>
                        {step}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Demo Visualization */}
            <div className={`bg-gradient-to-br ${currentDemo.color} bg-opacity-20 rounded-lg p-6 border border-purple-500/30`}>
              <h4 className="text-lg font-semibold mb-4 text-purple-300">Live Visualization</h4>
              <div className="bg-black/50 rounded-lg p-4 font-mono text-sm">
                <div className="space-y-2">
                  <div className="text-green-400">
                    {isRunning ? 'System: Active' : 'System: Standby'}
                  </div>
                  <div className="text-cyan-400">
                    {isRunning ? `Processing: ${progress}%` : 'Processing: Ready'}
                  </div>
                  <div className="text-yellow-400">
                    {isRunning ? 'Status: Running' : 'Status: Waiting'}
                  </div>
                  <div className="text-purple-400">
                    {isRunning ? 'Output: Generating...' : 'Output: Ready'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-20">
          <h3 className="text-4xl font-bold text-center mb-12 text-white">Revolutionary Capabilities</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h4 className="text-xl font-bold mb-3 text-purple-300">Instant Response</h4>
              <p className="text-gray-300 text-sm">
                Real-time processing with zero latency for immediate results and seamless interaction.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🧠</div>
              <h4 className="text-xl font-bold mb-3 text-cyan-300">Mind Control</h4>
              <p className="text-gray-300 text-sm">
                Direct neural interface allowing thought-based control of digital environments.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🌌</div>
              <h4 className="text-xl font-bold mb-3 text-green-300">Infinite Scale</h4>
              <p className="text-gray-300 text-sm">
                Unlimited computational power through interdimensional processing capabilities.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h4 className="text-xl font-bold mb-3 text-yellow-300">Perfect Accuracy</h4>
              <p className="text-gray-300 text-sm">
                100% precision in all operations with zero margin for error or failure.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-3xl p-12">
            <h3 className="text-4xl font-bold mb-6 text-white">
              Ready to Experience the Future?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              These interactive demos showcase just a fraction of our revolutionary capabilities. 
              Discover the full potential of tomorrow's technology today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg text-xl font-bold hover:scale-105 transition-transform duration-300 shadow-2xl">
                🚀 Explore All Technologies
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-white/10 transition-colors duration-300">
                📞 Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechDemo2028;
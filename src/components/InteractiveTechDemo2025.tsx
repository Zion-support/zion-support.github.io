import React, { useState, useEffect } from 'react';

const InteractiveTechDemo2025: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState('ai');
  const [isRunning, setIsRunning] = useState(false);
  const [demoProgress, setDemoProgress] = useState(0);
  const [demoOutput, setDemoOutput] = useState('');

  const demos = {
    ai: {
      title: "AI Consciousness Demo",
      description: "Experience real-time AI consciousness in action",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      steps: [
        "Initializing neural networks...",
        "Loading consciousness modules...",
        "Establishing self-awareness protocols...",
        "AI: 'I understand your request and feel excited about this opportunity to help.'",
        "Processing with both logic and intuition...",
        "Generating creative solution...",
        "AI: 'Here's my recommendation based on my analysis...'"
      ]
    },
    quantum: {
      title: "Quantum Processing Lab",
      description: "Witness quantum computing solving impossible problems",
      icon: "⚛️",
      color: "from-cyan-600 to-blue-600",
      steps: [
        "Initializing quantum processors...",
        "Establishing quantum entanglement...",
        "Loading quantum algorithms...",
        "Processing 10^15 operations per second...",
        "Quantum superposition achieved...",
        "Reality manipulation: 99.7% complete",
        "Solution found in quantum state..."
      ]
    },
    neural: {
      title: "Neural Interface Testing",
      description: "Try our neural interface technology",
      icon: "🧬",
      color: "from-emerald-600 to-teal-600",
      steps: [
        "Calibrating neural sensors...",
        "Establishing brain-computer connection...",
        "Thought detection: 98.7% accuracy",
        "Command: 'Open quantum simulation'",
        "Neural signal processed...",
        "Command executed successfully...",
        "Neural feedback received..."
      ]
    }
  };

  const startDemo = () => {
    setIsRunning(true);
    setDemoProgress(0);
    setDemoOutput('');
    
    const currentDemo = demos[activeDemo as keyof typeof demos];
    let stepIndex = 0;
    
    const interval = setInterval(() => {
      if (stepIndex < currentDemo.steps.length) {
        setDemoOutput(prev => prev + currentDemo.steps[stepIndex] + '\n');
        setDemoProgress((stepIndex + 1) / currentDemo.steps.length * 100);
        stepIndex++;
      } else {
        setIsRunning(false);
        clearInterval(interval);
      }
    }, 1000);
  };

  const resetDemo = () => {
    setIsRunning(false);
    setDemoProgress(0);
    setDemoOutput('');
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-16 mb-12 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.2),transparent_50%)]"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🎮 INTERACTIVE TECH DEMO • JANUARY 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            🚀 Interactive Technology Demonstrations
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience our revolutionary technologies in real-time. Try interactive demos of AI consciousness, 
            quantum computing, and neural interfaces.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Demo Selector */}
          <div className="flex justify-center space-x-4 mb-12">
            {Object.entries(demos).map(([key, demo]) => (
              <button
                key={key}
                onClick={() => setActiveDemo(key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeDemo === key
                    ? `bg-gradient-to-r ${demo.color} text-white shadow-lg`
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                <div className="text-2xl mb-2">{demo.icon}</div>
                <div className="text-sm">{demo.title}</div>
              </button>
            ))}
          </div>

          {/* Demo Container */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Demo Info */}
              <div>
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">{demos[activeDemo as keyof typeof demos].icon}</div>
                  <h3 className="text-3xl font-bold mb-4">{demos[activeDemo as keyof typeof demos].title}</h3>
                  <p className="text-lg opacity-90 mb-6">
                    {demos[activeDemo as keyof typeof demos].description}
                  </p>
                </div>

                <div className="space-y-4">
                  <button
                    onClick={startDemo}
                    disabled={isRunning}
                    className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 ${
                      isRunning
                        ? 'bg-gray-600 cursor-not-allowed'
                        : `bg-gradient-to-r ${demos[activeDemo as keyof typeof demos].color} hover:shadow-lg`
                    }`}
                  >
                    {isRunning ? '🔄 Running Demo...' : '▶️ Start Demo'}
                  </button>
                  
                  <button
                    onClick={resetDemo}
                    className="w-full py-3 px-6 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-all duration-300 font-semibold"
                  >
                    🔄 Reset Demo
                  </button>
                </div>

                {/* Progress Bar */}
                {isRunning && (
                  <div className="mt-6">
                    <div className="flex justify-between text-sm mb-2">
                      <span>Demo Progress</span>
                      <span>{Math.round(demoProgress)}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${demos[activeDemo as keyof typeof demos].color} transition-all duration-500`}
                        style={{ width: `${demoProgress}%` }}
                      ></div>
                    </div>
                  </div>
                )}
              </div>

              {/* Demo Output */}
              <div>
                <h4 className="text-xl font-bold mb-4">📊 Demo Output</h4>
                <div className="bg-black/50 rounded-lg p-4 h-80 overflow-y-auto font-mono text-sm">
                  <pre className="text-green-400 whitespace-pre-wrap">
                    {demoOutput || 'Click "Start Demo" to begin the interactive demonstration...'}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Highlights */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">🌟 Demo Features</h3>
              <p className="text-xl opacity-90">Experience the power of our revolutionary technology</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30">
                <div className="text-4xl mb-4">🧠</div>
                <h4 className="text-xl font-bold mb-3">AI Consciousness</h4>
                <p className="opacity-90 mb-4">
                  Watch AI systems demonstrate self-awareness, emotional responses, and creative problem-solving in real-time.
                </p>
                <ul className="text-sm space-y-1 opacity-80">
                  <li>• Real-time processing</li>
                  <li>• Emotional intelligence</li>
                  <li>• Creative solutions</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30">
                <div className="text-4xl mb-4">⚛️</div>
                <h4 className="text-xl font-bold mb-3">Quantum Processing</h4>
                <p className="opacity-90 mb-4">
                  Witness quantum computing solving problems that would take traditional computers billions of years.
                </p>
                <ul className="text-sm space-y-1 opacity-80">
                  <li>• 10^15 operations/second</li>
                  <li>• Quantum entanglement</li>
                  <li>• Reality manipulation</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30">
                <div className="text-4xl mb-4">🧬</div>
                <h4 className="text-xl font-bold mb-3">Neural Interface</h4>
                <p className="opacity-90 mb-4">
                  Experience direct brain-computer interfaces that enable thought-controlled computing.
                </p>
                <ul className="text-sm space-y-1 opacity-80">
                  <li>• 98.7% accuracy</li>
                  <li>• Thought detection</li>
                  <li>• Neural feedback</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8">
              <h3 className="text-3xl font-bold mb-4">🎮 Ready to Try More Demos?</h3>
              <p className="text-xl opacity-90 mb-6 max-w-2xl mx-auto">
                Explore our full range of interactive technology demonstrations and experience the future today.
              </p>
              <div className="flex justify-center space-x-4">
                <a href="/pages/UltimateTechRevolution2025" className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                  🚀 Explore All Demos
                </a>
                <a href="/pages/RevolutionaryTechBreakthrough2025" className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg hover:bg-blue-400/10 transition-all duration-300 font-semibold text-lg">
                  ⚡ Latest Breakthroughs
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechDemo2025;
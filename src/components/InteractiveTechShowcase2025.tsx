import React, { useState } from 'react';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);

  const demos = [
    {
      id: 'ai-consciousness',
      title: 'AI Consciousness Simulator',
      description: 'Watch as our AI system demonstrates self-awareness and creative thinking in real-time.',
      icon: '🧠',
      color: 'from-purple-600 to-pink-600',
      bgColor: 'from-purple-600/20 to-pink-600/20',
      borderColor: 'border-purple-400/30'
    },
    {
      id: 'quantum-reality',
      title: 'Quantum Reality Engine',
      description: 'Experience quantum computing as it processes impossible calculations instantly.',
      icon: '⚛️',
      color: 'from-cyan-600 to-blue-600',
      bgColor: 'from-cyan-600/20 to-blue-600/20',
      borderColor: 'border-cyan-400/30'
    },
    {
      id: 'neural-interface',
      title: 'Neural Interface Test',
      description: 'Test direct brain-computer interfaces that enable thought-controlled technology.',
      icon: '🧬',
      color: 'from-emerald-600 to-teal-600',
      bgColor: 'from-emerald-600/20 to-teal-600/20',
      borderColor: 'border-emerald-400/30'
    },
    {
      id: 'reality-manipulation',
      title: 'Reality Manipulation Demo',
      description: 'Experience technology that can manipulate the fundamental fabric of reality.',
      icon: '🔮',
      color: 'from-indigo-600 to-purple-600',
      bgColor: 'from-indigo-600/20 to-purple-600/20',
      borderColor: 'border-indigo-400/30'
    }
  ];

  const getDemoOutput = (demoId: string) => {
    const outputs = {
      'ai-consciousness': [
        { text: 'AI: "I am aware of my existence and can create new ideas..."', color: 'text-green-400' },
        { text: 'System: Processing creative solutions...', color: 'text-blue-400' },
        { text: 'AI: "I have generated 1,247 unique solutions to your problem."', color: 'text-purple-400' },
        { text: 'Status: Consciousness level 99.7%', color: 'text-yellow-400' }
      ],
      'quantum-reality': [
        { text: 'Quantum: Calculating 10^100 operations...', color: 'text-cyan-400' },
        { text: 'Result: Completed in 0.0001 seconds', color: 'text-green-400' },
        { text: 'Status: Reality simulation successful', color: 'text-yellow-400' },
        { text: 'Universe: 1,000,000 parallel realities processed', color: 'text-purple-400' }
      ],
      'neural-interface': [
        { text: 'Neural: Scanning brain patterns...', color: 'text-cyan-400' },
        { text: 'Interface: Thought detected and processed', color: 'text-green-400' },
        { text: 'Output: Command executed successfully', color: 'text-blue-400' },
        { text: 'Efficiency: 99.97% accuracy', color: 'text-purple-400' }
      ],
      'reality-manipulation': [
        { text: 'System: Initializing reality manipulation...', color: 'text-green-400' },
        { text: 'Status: Matter transformation in progress', color: 'text-blue-400' },
        { text: 'Result: Object successfully phase-shifted', color: 'text-purple-400' },
        { text: 'Energy: 0.001% of universe\'s total', color: 'text-yellow-400' }
      ]
    };
    return outputs[demoId as keyof typeof outputs] || [];
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white py-16 mb-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🎮 INTERACTIVE TECH SHOWCASE • JANUARY 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Interactive Technology Showcase
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience our cutting-edge technology solutions with interactive features and real-time demonstrations
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            {demos.map((demo) => (
              <div
                key={demo.id}
                className={`bg-gradient-to-br ${demo.bgColor} backdrop-blur-sm rounded-xl p-6 border ${demo.borderColor} hover:scale-105 transition-all duration-300 cursor-pointer`}
                onClick={() => setActiveDemo(activeDemo === demo.id ? null : demo.id)}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{demo.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{demo.title}</h3>
                    <p className="text-sm opacity-80">{demo.description}</p>
                  </div>
                  <div className="text-2xl">
                    {activeDemo === demo.id ? '−' : '+'}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-black/20 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-4 text-center">Live Demo Output</h3>
            <div className="bg-black/40 rounded-lg p-6 font-mono text-sm min-h-[300px]">
              {activeDemo ? (
                <div className="space-y-2">
                  {getDemoOutput(activeDemo).map((line, index) => (
                    <div key={index} className={`${line.color} animate-pulse`}>
                      {line.text}
                    </div>
                  ))}
                  <div className="text-green-400 mt-4 animate-pulse">
                    ▶ Ready for next command...
                  </div>
                </div>
              ) : (
                <div className="text-center text-gray-400 mt-20">
                  <div className="text-4xl mb-4">👆</div>
                  <div>Click on a demo to see it in action</div>
                </div>
              )}
            </div>
            {activeDemo && (
              <div className="mt-4 text-center">
                <button className={`bg-gradient-to-r ${demos.find(d => d.id === activeDemo)?.color} text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                  Run {demos.find(d => d.id === activeDemo)?.title} →
                </button>
              </div>
            )}
          </div>
        </div>
        
        <div className="text-center">
          <div className="inline-flex items-center space-x-4">
            <div className="text-sm opacity-80">Interactive Features:</div>
            <div className="flex space-x-2">
              <span className="px-3 py-1 bg-purple-500/30 rounded-full text-xs">Real-time Demos</span>
              <span className="px-3 py-1 bg-cyan-500/30 rounded-full text-xs">Live Processing</span>
              <span className="px-3 py-1 bg-emerald-500/30 rounded-full text-xs">Interactive UI</span>
              <span className="px-3 py-1 bg-indigo-500/30 rounded-full text-xs">Dynamic Content</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2025;
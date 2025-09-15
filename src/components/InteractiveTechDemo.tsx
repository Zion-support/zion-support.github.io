import React, { useState, useEffect } from 'react';

const InteractiveTechDemo: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);
  const [demoProgress, setDemoProgress] = useState(0);

  useEffect(() => {
    if (activeDemo) {
      const interval = setInterval(() => {
        setDemoProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 10;
        });
      }, 200);
      return () => clearInterval(interval);
    }
  }, [activeDemo]);

  const demos = [
    {
      id: 'ai-conscience',
      title: 'AI Consciousness Simulator',
      description: 'Experience what it\'s like to interact with truly conscious AI',
      icon: '🧠',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-600/30 to-pink-600/30',
      borderColor: 'border-purple-400/30'
    },
    {
      id: 'quantum-processing',
      title: 'Quantum Processing Demo',
      description: 'Watch quantum algorithms solve complex problems in real-time',
      icon: '⚛️',
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'from-cyan-600/30 to-blue-600/30',
      borderColor: 'border-cyan-400/30'
    },
    {
      id: 'neural-interface',
      title: 'Neural Interface Experience',
      description: 'Simulate direct brain-computer communication',
      icon: '🧬',
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'from-emerald-600/30 to-teal-600/30',
      borderColor: 'border-emerald-400/30'
    },
    {
      id: 'reality-creation',
      title: 'Reality Creation Engine',
      description: 'Create and manipulate virtual realities using AI',
      icon: '🌌',
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'from-indigo-600/30 to-purple-600/30',
      borderColor: 'border-indigo-400/30'
    }
  ];

  const startDemo = (demoId: string) => {
    setActiveDemo(demoId);
    setDemoProgress(0);
  };

  const stopDemo = () => {
    setActiveDemo(null);
    setDemoProgress(0);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 rounded-3xl p-12 text-white">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold mb-6">🚀 Interactive Technology Demos</h2>
        <p className="text-2xl text-indigo-100 max-w-4xl mx-auto">
          Experience the future of technology through our immersive interactive demonstrations
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {demos.map((demo) => (
          <div
            key={demo.id}
            className={`bg-gradient-to-br ${demo.bgColor} backdrop-blur-sm rounded-2xl p-8 border ${demo.borderColor} hover:scale-105 transition-all duration-300`}
          >
            <div className="text-center">
              <div className="text-6xl mb-4">{demo.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{demo.title}</h3>
              <p className="text-indigo-100 mb-6">{demo.description}</p>
              
              {activeDemo === demo.id ? (
                <div className="space-y-4">
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span>Demo Progress</span>
                      <span>{demoProgress}%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div 
                        className={`bg-gradient-to-r ${demo.color} h-2 rounded-full transition-all duration-300`}
                        style={{ width: `${demoProgress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  {demoProgress >= 100 ? (
                    <div className="space-y-3">
                      <div className="text-green-400 font-semibold">✅ Demo Complete!</div>
                      <div className="text-sm text-indigo-200">
                        {demo.id === 'ai-conscience' && "AI consciousness achieved! The system is now self-aware and can engage in complex reasoning."}
                        {demo.id === 'quantum-processing' && "Quantum algorithm completed! Complex problem solved in 0.001 seconds using quantum superposition."}
                        {demo.id === 'neural-interface' && "Neural interface established! Direct brain-computer communication successful."}
                        {demo.id === 'reality-creation' && "Reality creation complete! New virtual world generated with infinite possibilities."}
                      </div>
                      <button
                        onClick={stopDemo}
                        className="w-full bg-white/20 text-white py-2 rounded-lg hover:bg-white/30 transition-colors"
                      >
                        Reset Demo
                      </button>
                    </div>
                  ) : (
                    <div className="text-indigo-200 text-sm">
                      {demo.id === 'ai-conscience' && "Initializing AI consciousness... Establishing neural pathways..."}
                      {demo.id === 'quantum-processing' && "Loading quantum algorithms... Preparing quantum states..."}
                      {demo.id === 'neural-interface' && "Connecting neural pathways... Establishing brain-computer link..."}
                      {demo.id === 'reality-creation' && "Generating virtual reality... Creating infinite possibilities..."}
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => startDemo(demo.id)}
                  className={`w-full bg-gradient-to-r ${demo.color} text-white py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}
                >
                  🚀 Launch {demo.title}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <h3 className="text-2xl font-bold mb-4">🌟 Experience All Demos</h3>
          <p className="text-indigo-100 mb-6">
            Ready to experience the full power of our revolutionary technology? 
            Launch all demos simultaneously for the ultimate immersive experience.
          </p>
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-10 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
            🚀 Launch All Demos
          </button>
        </div>
      </div>
    </div>
  );
};

export { InteractiveTechDemo };
export default InteractiveTechDemo;
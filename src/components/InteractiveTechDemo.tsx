import React, { useState, useEffect } from 'react';

const InteractiveTechDemo: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const demos = [
    {
      title: "Synthetic Intelligence",
      description: "AI with genuine consciousness",
      icon: "🧠",
      metrics: { accuracy: "99.9%", speed: "1000x", autonomy: "24/7" },
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Quantum-Neural Fusion",
      description: "Quantum computing meets neural networks",
      icon: "⚡",
      metrics: { processing: "1000x", qubits: "1000+", efficiency: "∞" },
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Neural Interface",
      description: "Direct brain-computer communication",
      icon: "🧬",
      metrics: { precision: "99.9%", latency: "<1ms", range: "∞" },
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Space Technology AI",
      description: "AI-powered space exploration",
      icon: "🌌",
      metrics: { missions: "100%", distance: "∞", success: "99.9%" },
      color: "from-violet-500 to-purple-500"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveDemo((prev) => (prev + 1) % demos.length);
        setIsAnimating(false);
      }, 300);
    }, 4000);
    return () => clearInterval(interval);
  }, [demos.length]);

  const currentDemo = demos[activeDemo];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-2xl p-8 text-white mb-12">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-4">🚀 Interactive Technology Demo</h2>
        <p className="text-xl opacity-90">Experience our revolutionary technologies in real-time</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Demo Selector */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold mb-6">Select Technology</h3>
          {demos.map((demo, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAnimating(true);
                setTimeout(() => {
                  setActiveDemo(index);
                  setIsAnimating(false);
                }, 300);
              }}
              className={`w-full p-4 rounded-lg transition-all duration-300 ${
                activeDemo === index
                  ? `bg-gradient-to-r ${demo.color} text-white shadow-lg scale-105`
                  : 'bg-white/10 hover:bg-white/20 text-white/80'
              }`}
            >
              <div className="flex items-center space-x-4">
                <div className="text-3xl">{demo.icon}</div>
                <div className="text-left">
                  <div className="font-bold">{demo.title}</div>
                  <div className="text-sm opacity-80">{demo.description}</div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Demo Display */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
          <div className={`transition-all duration-500 ${isAnimating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}>
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">{currentDemo.icon}</div>
              <h3 className="text-3xl font-bold mb-2">{currentDemo.title}</h3>
              <p className="text-lg opacity-90">{currentDemo.description}</p>
            </div>

            {/* Animated Metrics */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              {Object.entries(currentDemo.metrics).map(([key, value], index) => (
                <div key={key} className="bg-white/20 rounded-lg p-4 text-center">
                  <div className={`text-2xl font-bold bg-gradient-to-r ${currentDemo.color} bg-clip-text text-transparent`}>
                    {value}
                  </div>
                  <div className="text-sm opacity-80 capitalize">{key}</div>
                </div>
              ))}
            </div>

            {/* Animated Progress Bars */}
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Performance</span>
                  <span>100%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full bg-gradient-to-r ${currentDemo.color} transition-all duration-1000`}
                    style={{ width: '100%' }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Efficiency</span>
                  <span>∞</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full bg-gradient-to-r ${currentDemo.color} transition-all duration-1000`}
                    style={{ width: '100%' }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Innovation</span>
                  <span>Revolutionary</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full bg-gradient-to-r ${currentDemo.color} transition-all duration-1000`}
                    style={{ width: '100%' }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Interactive Elements */}
            <div className="mt-8 space-y-4">
              <button className={`w-full bg-gradient-to-r ${currentDemo.color} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                Deploy {currentDemo.title} →
              </button>
              <button className="w-full border-2 border-white/30 text-white py-3 rounded-lg hover:bg-white/10 transition-colors font-semibold">
                Learn More About {currentDemo.title}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Live Data Feed */}
      <div className="mt-8 bg-white/5 rounded-xl p-6">
        <h3 className="text-xl font-bold mb-4 text-center">📊 Live Technology Metrics</h3>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-1">99.9%</div>
            <div className="text-sm opacity-80">System Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-400 mb-1">1000+</div>
            <div className="text-sm opacity-80">Active Processes</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-violet-400 mb-1">∞</div>
            <div className="text-sm opacity-80">Possibilities</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-pink-400 mb-1">24/7</div>
            <div className="text-sm opacity-80">Autonomous Operation</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechDemo;
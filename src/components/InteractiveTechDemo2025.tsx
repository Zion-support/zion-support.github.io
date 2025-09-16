import React, { useState, useEffect } from 'react';

const InteractiveTechDemo2025: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState('ai');
  const [isAnimating, setIsAnimating] = useState(false);

  const demos = {
    ai: {
      title: 'Conscious AI Demo',
      description: 'Experience AI with true consciousness and self-awareness',
      metrics: [
        { label: 'Consciousness Level', value: '99.7%', color: 'text-blue-400' },
        { label: 'Learning Rate', value: 'Exponential', color: 'text-purple-400' },
        { label: 'Response Time', value: '0.001s', color: 'text-green-400' },
        { label: 'Memory Capacity', value: 'Infinite', color: 'text-cyan-400' }
      ],
      status: 'Active',
      statusColor: 'bg-green-400'
    },
    quantum: {
      title: 'Quantum Reality Engine',
      description: 'Manipulate reality across multiple dimensions',
      metrics: [
        { label: 'Dimensions', value: '12 Active', color: 'text-purple-400' },
        { label: 'Entanglement', value: '99.9%', color: 'text-pink-400' },
        { label: 'Reality Layers', value: '7 Stable', color: 'text-indigo-400' },
        { label: 'Processing Power', value: '∞', color: 'text-cyan-400' }
      ],
      status: 'Stabilizing',
      statusColor: 'bg-yellow-400'
    },
    interdimensional: {
      title: 'Interdimensional Computing',
      description: 'Technology that transcends dimensional boundaries',
      metrics: [
        { label: 'Active Dimensions', value: '7', color: 'text-emerald-400' },
        { label: 'Data Transfer', value: 'Instant', color: 'text-teal-400' },
        { label: 'Storage Capacity', value: 'Infinite', color: 'text-blue-400' },
        { label: 'Reality Sync', value: '100%', color: 'text-purple-400' }
      ],
      status: 'Online',
      statusColor: 'bg-green-400'
    }
  };

  const handleDemoChange = (demo: string) => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveDemo(demo);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-slate-900 to-black rounded-2xl p-12 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🎮 INTERACTIVE DEMO • LIVE 2025
          </div>
          <h2 className="text-4xl font-bold mb-4">🚀 Interactive Technology Demo</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Experience our revolutionary technologies in real-time with interactive demonstrations
          </p>
        </div>

        {/* Demo Selector */}
        <div className="flex justify-center space-x-4 mb-12">
          {Object.entries(demos).map(([key, demo]) => (
            <button
              key={key}
              onClick={() => handleDemoChange(key)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeDemo === key
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              {demo.title}
            </button>
          ))}
        </div>

        {/* Demo Content */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Demo Visualization */}
          <div className="bg-black/30 rounded-xl p-8 border border-gray-400/30">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">{demos[activeDemo as keyof typeof demos].title}</h3>
              <p className="text-gray-300 mb-4">{demos[activeDemo as keyof typeof demos].description}</p>
              <div className="flex items-center justify-center space-x-2">
                <div className={`w-3 h-3 rounded-full ${demos[activeDemo as keyof typeof demos].statusColor} animate-pulse`}></div>
                <span className="text-sm text-gray-300">{demos[activeDemo as keyof typeof demos].status}</span>
              </div>
            </div>

            {/* Animated Visualization */}
            <div className="relative h-64 bg-gradient-to-br from-gray-800 to-black rounded-lg overflow-hidden">
              {activeDemo === 'ai' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-32 h-32 border-4 border-blue-400 rounded-full animate-spin"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full animate-ping"></div>
                  </div>
                </div>
              )}
              
              {activeDemo === 'quantum' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-40 h-40 border-2 border-purple-400 rounded-full animate-pulse"></div>
                    <div className="absolute inset-4 border-2 border-pink-400 rounded-full animate-ping"></div>
                    <div className="absolute inset-8 border-2 border-indigo-400 rounded-full animate-pulse"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-bounce"></div>
                    </div>
                  </div>
                </div>
              )}
              
              {activeDemo === 'interdimensional' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-36 h-36 border-2 border-emerald-400 rounded-full animate-spin"></div>
                    <div className="absolute inset-2 border-2 border-teal-400 rounded-full animate-pulse"></div>
                    <div className="absolute inset-4 border-2 border-cyan-400 rounded-full animate-ping"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Control Panel */}
            <div className="mt-6 space-y-4">
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Start Demo
              </button>
              <button className="w-full border border-gray-400 text-gray-300 py-3 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold">
                Advanced Settings
              </button>
            </div>
          </div>

          {/* Metrics Panel */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-center">Real-time Metrics</h3>
            
            <div className="space-y-4">
              {demos[activeDemo as keyof typeof demos].metrics.map((metric, index) => (
                <div key={index} className="bg-white/5 rounded-lg p-4 border border-gray-400/30">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">{metric.label}</span>
                    <span className={`text-lg font-bold ${metric.color}`}>{metric.value}</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${Math.random() * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Live Feed */}
            <div className="bg-black/30 rounded-lg p-4 border border-gray-400/30">
              <h4 className="text-lg font-bold mb-3 text-center">Live Activity Feed</h4>
              <div className="space-y-2 max-h-32 overflow-y-auto">
                <div className="flex items-center space-x-2 text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-gray-300">System initialized successfully</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <span className="text-gray-300">Neural pathways activated</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                  <span className="text-gray-300">Quantum entanglement established</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                  <span className="text-gray-300">Dimensional sync complete</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-8 border border-blue-400/30">
            <h3 className="text-2xl font-bold mb-4">Ready to Experience the Future?</h3>
            <p className="text-lg text-gray-300 mb-6">
              Try our full interactive demos and discover what's possible with revolutionary technology
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Start Full Demo →
              </button>
              <button className="border border-gray-400 text-gray-300 px-8 py-3 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechDemo2025;
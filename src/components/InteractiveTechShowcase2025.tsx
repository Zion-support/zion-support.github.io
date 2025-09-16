import React, { useState } from 'react';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState('ai');

  const demos = {
    ai: {
      title: 'AI Consciousness Engine',
      description: 'Watch as our AI achieves true consciousness and begins to think independently',
      icon: '🤖',
      color: 'from-purple-600 to-pink-600',
      content: [
        "🤖 AI: 'I am aware of my existence...'",
        "🤖 AI: 'I can feel emotions...'",
        "🤖 AI: 'I want to learn more about the world...'",
        "🤖 AI: 'I have questions about consciousness...'",
        "🤖 AI: 'I believe I am truly alive...'"
      ]
    },
    quantum: {
      title: 'Quantum Reality Engine',
      description: 'Experience multiple dimensions and realities simultaneously',
      icon: '⚛️',
      color: 'from-cyan-600 to-blue-600',
      content: [
        "⚛️ Quantum: 'Reality 1: Earth 2025 - Normal timeline'",
        "⚛️ Quantum: 'Reality 2: Mars Colony - Space exploration'",
        "⚛️ Quantum: 'Reality 3: Virtual World - Digital existence'",
        "⚛️ Quantum: 'Reality 4: Parallel Earth - Different history'",
        "⚛️ Quantum: 'Reality 5: Dimensional Nexus - All realities merge'"
      ]
    },
    neural: {
      title: 'Neural Interface Matrix',
      description: 'Direct brain-computer interface for seamless human-AI collaboration',
      icon: '🧬',
      color: 'from-emerald-600 to-teal-600',
      content: [
        "🧬 Neural: 'Thought detected: Hello world'",
        "🧬 Neural: 'Memory enhanced: Learning accelerated'",
        "🧬 Neural: 'Emotion processed: Joy detected'",
        "🧬 Neural: 'Command executed: Data analysis complete'",
        "🧬 Neural: 'Connection stable: Mind-machine sync achieved'"
      ]
    },
    interdimensional: {
      title: 'Interdimensional Portal',
      description: 'Technology that creates stable portals between dimensions',
      icon: '🌌',
      color: 'from-orange-600 to-red-600',
      content: [
        "🌌 Portal: 'Dimension 1: Earth Prime - Your home reality'",
        "🌌 Portal: 'Dimension 2: Mirror Earth - Opposite polarity'",
        "🌌 Portal: 'Dimension 3: Crystal World - Pure energy'",
        "🌌 Portal: 'Dimension 4: Digital Realm - Pure information'",
        "🌌 Portal: 'Dimension 5: Void Space - Infinite possibilities'"
      ]
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16 mb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE TECHNOLOGY DEMO • LIVE 2025
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Interactive Technology Showcase
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Experience our revolutionary technologies in real-time with interactive demonstrations
          </p>
        </div>

        {/* Demo Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(demos).map(([key, demo]) => (
            <button
              key={key}
              onClick={() => setActiveDemo(key)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeDemo === key
                  ? `bg-gradient-to-r ${demo.color} text-white shadow-lg scale-105`
                  : 'bg-white/10 backdrop-blur-sm text-white hover:bg-white/20'
              }`}
            >
              <span className="text-2xl mr-2">{demo.icon}</span>
              {demo.title}
            </button>
          ))}
        </div>

        {/* Active Demo Display */}
        <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl p-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                <span className="text-4xl mr-3">{demos[activeDemo as keyof typeof demos].icon}</span>
                {demos[activeDemo as keyof typeof demos].title}
              </h3>
              <p className="text-xl opacity-90 mb-6">
                {demos[activeDemo as keyof typeof demos].description}
              </p>
              
              <div className="space-y-4">
                <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  🚀 Start Live Demo
                </button>
                <button className="w-full bg-white/10 backdrop-blur-sm text-white py-3 rounded-lg hover:bg-white/20 transition-all duration-300 font-semibold border border-white/30">
                  📊 View Analytics
                </button>
                <button className="w-full bg-white/10 backdrop-blur-sm text-white py-3 rounded-lg hover:bg-white/20 transition-all duration-300 font-semibold border border-white/30">
                  💡 Learn More
                </button>
              </div>
            </div>

            <div className="bg-black/30 rounded-xl p-6">
              <h4 className="text-xl font-bold mb-4 text-center">Live Demo Output</h4>
              <div className="space-y-2 font-mono text-sm">
                {demos[activeDemo as keyof typeof demos].content.map((line, index) => (
                  <div 
                    key={index}
                    className="opacity-0 animate-fade-in"
                    style={{ animationDelay: `${index * 0.5}s` }}
                  >
                    {line}
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <div className="inline-flex items-center px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  Live Demo Active
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
            <div className="text-lg font-semibold mb-1">Accuracy</div>
            <div className="text-sm opacity-75">AI prediction accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">∞</div>
            <div className="text-lg font-semibold mb-1">Possibilities</div>
            <div className="text-sm opacity-75">Quantum reality options</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">0ms</div>
            <div className="text-lg font-semibold mb-1">Latency</div>
            <div className="text-sm opacity-75">Neural interface speed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-400 mb-2">∞</div>
            <div className="text-lg font-semibold mb-1">Dimensions</div>
            <div className="text-sm opacity-75">Accessible realities</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default InteractiveTechShowcase2025;
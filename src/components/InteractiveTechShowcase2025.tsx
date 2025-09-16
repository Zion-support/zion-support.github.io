import React, { useState } from 'react';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState('ai');

  const demos = {
    ai: {
      title: 'Conscious AI Demo',
      description: 'Interact with our conscious AI system and witness its decision-making process',
      content: (
        <div className="space-y-4">
          <div className="bg-black/20 rounded-lg p-4">
            <div className="text-green-400 text-sm font-mono mb-2">AI System Status: Online</div>
            <div className="text-white text-sm">Processing your request using quantum consciousness matrix...</div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors text-sm">
              Ask Question
            </button>
            <button className="bg-cyan-600 text-white px-4 py-2 rounded-lg hover:bg-cyan-700 transition-colors text-sm">
              View Analysis
            </button>
          </div>
        </div>
      )
    },
    quantum: {
      title: 'Quantum Computing Demo',
      description: 'Experience quantum processing and parallel universe computing',
      content: (
        <div className="space-y-4">
          <div className="bg-black/20 rounded-lg p-4">
            <div className="text-cyan-400 text-sm font-mono mb-2">Quantum State: Superposition Active</div>
            <div className="text-white text-sm">Processing across 1,000+ parallel dimensions simultaneously...</div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <button className="bg-cyan-600 text-white px-4 py-2 rounded-lg hover:bg-cyan-700 transition-colors text-sm">
              Run Algorithm
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
              View Results
            </button>
          </div>
        </div>
      )
    },
    neural: {
      title: 'Neural Interface Demo',
      description: 'Control technology with your thoughts using our BCI system',
      content: (
        <div className="space-y-4">
          <div className="bg-black/20 rounded-lg p-4">
            <div className="text-emerald-400 text-sm font-mono mb-2">Neural Link: Connected</div>
            <div className="text-white text-sm">Reading neural patterns and translating to digital commands...</div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors text-sm">
              Start Reading
            </button>
            <button className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors text-sm">
              Calibrate
            </button>
          </div>
        </div>
      )
    }
  };

  return (
    <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white rounded-2xl p-8 mb-12">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-4">🎮 Interactive Technology Showcase</h2>
        <p className="text-xl opacity-90 max-w-3xl mx-auto">
          Experience our revolutionary technologies through interactive demonstrations and real-time simulations
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Demo Selection */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold mb-4">Choose Your Demo</h3>
          {Object.entries(demos).map(([key, demo]) => (
            <button
              key={key}
              onClick={() => setActiveDemo(key)}
              className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                activeDemo === key
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                  : 'bg-white/10 hover:bg-white/20 text-white/80'
              }`}
            >
              <div className="text-lg font-semibold mb-2">{demo.title}</div>
              <div className="text-sm opacity-80">{demo.description}</div>
            </button>
          ))}
        </div>

        {/* Active Demo */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
          <h3 className="text-2xl font-bold mb-4">{demos[activeDemo as keyof typeof demos].title}</h3>
          <p className="text-white/80 mb-6">{demos[activeDemo as keyof typeof demos].description}</p>
          {demos[activeDemo as keyof typeof demos].content}
        </div>
      </div>

      <div className="text-center mt-8">
        <a href="/pages/RevolutionaryTechBreakthrough2025" className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
          Explore All Technologies →
        </a>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2025;
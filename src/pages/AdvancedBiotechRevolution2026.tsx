import React from 'react';

const AdvancedBiotechRevolution2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full text-sm font-bold mb-6">
            🧬 ADVANCED BIOTECH REVOLUTION 2026
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Advanced Biotechnology Revolution
          </h1>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Experience the future of biotechnology with programmable biological systems and synthetic organisms
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30">
            <div className="text-6xl mb-4">🧬</div>
            <h3 className="text-3xl font-bold mb-4">Synthetic Biology</h3>
            <p className="text-emerald-100 mb-6 text-lg">
              Programmable biological systems that can be designed and engineered for specific functions, 
              revolutionizing medicine, agriculture, and manufacturing.
            </p>
            <ul className="text-emerald-200 space-y-2 mb-6">
              <li>• DNA programming languages</li>
              <li>• Synthetic organisms</li>
              <li>• Bio-computing systems</li>
              <li>• Living materials</li>
            </ul>
            <button className="bg-white text-emerald-600 px-8 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-semibold">
              Explore Synthetic Biology →
            </button>
          </div>

          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30">
            <div className="text-6xl mb-4">🧠</div>
            <h3 className="text-3xl font-bold mb-4">Neural Interfaces</h3>
            <p className="text-cyan-100 mb-6 text-lg">
              Direct brain-computer interfaces that enable seamless communication between human minds and machines, 
              opening new possibilities for human enhancement.
            </p>
            <ul className="text-cyan-200 space-y-2 mb-6">
              <li>• Non-invasive BCI technology</li>
              <li>• Thought-controlled devices</li>
              <li>• Neural feedback systems</li>
              <li>• Mind-machine synchronization</li>
            </ul>
            <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold">
              Explore Neural Interfaces →
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-8">Revolutionary Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-5xl font-bold text-emerald-400 mb-2">1000x</div>
              <div className="text-lg opacity-80">Faster Drug Discovery</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-lg opacity-80">Precision Accuracy</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-teal-400 mb-2">∞</div>
              <div className="text-lg opacity-80">Possibilities</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedBiotechRevolution2026;
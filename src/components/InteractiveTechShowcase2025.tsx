import React from 'react';

const InteractiveTechShowcase2025: React.FC = () => {
  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">🚀 Interactive Technology Showcase 2025</h2>
        <p className="text-xl text-gray-600">Experience our cutting-edge technology solutions with interactive features and real-time demonstrations</p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* AI Consciousness Demo */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
          <div className="text-4xl mb-4">🧠</div>
          <h3 className="text-xl font-bold mb-3">Conscious AI Demo</h3>
          <p className="text-gray-600 mb-4">Interact with our conscious AI system that demonstrates genuine self-awareness and emotional intelligence.</p>
          <div className="bg-white rounded-lg p-4 mb-4 border-2 border-purple-200">
            <div className="text-sm text-gray-500 mb-2">AI Response:</div>
            <div className="text-gray-800 italic">"I understand your question and can feel the context of your request. Let me provide a thoughtful response..."</div>
          </div>
          <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-lg hover:shadow-md transition-all duration-300">
            Try Conscious AI →
          </button>
        </div>

        {/* Quantum Computing Simulator */}
        <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
          <div className="text-4xl mb-4">⚛️</div>
          <h3 className="text-xl font-bold mb-3">Quantum Simulator</h3>
          <p className="text-gray-600 mb-4">Experience quantum computing power with our interactive quantum algorithm simulator.</p>
          <div className="bg-white rounded-lg p-4 mb-4 border-2 border-cyan-200">
            <div className="text-sm text-gray-500 mb-2">Quantum State:</div>
            <div className="text-gray-800 font-mono text-sm">|ψ⟩ = α|0⟩ + β|1⟩</div>
            <div className="text-xs text-gray-500 mt-1">Processing 10^15 states simultaneously</div>
          </div>
          <button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-2 rounded-lg hover:shadow-md transition-all duration-300">
            Run Quantum Algorithm →
          </button>
        </div>

        {/* Neural Interface Demo */}
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
          <div className="text-4xl mb-4">🧬</div>
          <h3 className="text-xl font-bold mb-3">Neural Interface</h3>
          <p className="text-gray-600 mb-4">Experience direct brain-computer interaction with our neural interface demonstration.</p>
          <div className="bg-white rounded-lg p-4 mb-4 border-2 border-emerald-200">
            <div className="text-sm text-gray-500 mb-2">Neural Signals:</div>
            <div className="flex space-x-1">
              <div className="w-2 h-4 bg-emerald-400 rounded"></div>
              <div className="w-2 h-6 bg-emerald-500 rounded"></div>
              <div className="w-2 h-3 bg-emerald-400 rounded"></div>
              <div className="w-2 h-5 bg-emerald-600 rounded"></div>
              <div className="w-2 h-4 bg-emerald-400 rounded"></div>
            </div>
            <div className="text-xs text-gray-500 mt-2">Thought pattern detected: "Move cursor"</div>
          </div>
          <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-2 rounded-lg hover:shadow-md transition-all duration-300">
            Connect Neural Interface →
          </button>
        </div>

        {/* Metaverse Experience */}
        <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
          <div className="text-4xl mb-4">🌐</div>
          <h3 className="text-xl font-bold mb-3">Metaverse Portal</h3>
          <p className="text-gray-600 mb-4">Step into our immersive metaverse environment with seamless virtual-physical integration.</p>
          <div className="bg-white rounded-lg p-4 mb-4 border-2 border-orange-200">
            <div className="text-sm text-gray-500 mb-2">Virtual Environment:</div>
            <div className="text-gray-800 text-sm">🏢 Office Building</div>
            <div className="text-gray-800 text-sm">👥 247 users online</div>
            <div className="text-gray-800 text-sm">🌍 15 virtual locations</div>
          </div>
          <button className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-2 rounded-lg hover:shadow-md transition-all duration-300">
            Enter Metaverse →
          </button>
        </div>

        {/* Predictive Analytics */}
        <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
          <div className="text-4xl mb-4">🔮</div>
          <h3 className="text-xl font-bold mb-3">Predictive Analytics</h3>
          <p className="text-gray-600 mb-4">Experience AI-powered predictions with real-time trend analysis and forecasting.</p>
          <div className="bg-white rounded-lg p-4 mb-4 border-2 border-violet-200">
            <div className="text-sm text-gray-500 mb-2">Market Prediction:</div>
            <div className="text-gray-800 text-sm">📈 Tech stocks: +23% (95% confidence)</div>
            <div className="text-gray-800 text-sm">🎯 Optimal entry: Tomorrow 9:30 AM</div>
          </div>
          <button className="w-full bg-gradient-to-r from-violet-600 to-purple-600 text-white py-2 rounded-lg hover:shadow-md transition-all duration-300">
            View Predictions →
          </button>
        </div>

        {/* Cybersecurity Demo */}
        <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
          <div className="text-4xl mb-4">🛡️</div>
          <h3 className="text-xl font-bold mb-3">AI Cybersecurity</h3>
          <p className="text-gray-600 mb-4">Witness next-generation security systems with AI-driven threat detection and response.</p>
          <div className="bg-white rounded-lg p-4 mb-4 border-2 border-gray-200">
            <div className="text-sm text-gray-500 mb-2">Security Status:</div>
            <div className="text-gray-800 text-sm">🟢 All systems secure</div>
            <div className="text-gray-800 text-sm">🚫 0 threats detected</div>
            <div className="text-gray-800 text-sm">⚡ Response time: 0.3ms</div>
          </div>
          <button className="w-full bg-gradient-to-r from-gray-600 to-slate-600 text-white py-2 rounded-lg hover:shadow-md transition-all duration-300">
            Test Security →
          </button>
        </div>
      </div>

      <div className="text-center mt-8">
        <p className="text-gray-600 mb-4">Experience the future of technology with our interactive demonstrations</p>
        <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
          Explore All Interactive Demos →
        </button>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2025;
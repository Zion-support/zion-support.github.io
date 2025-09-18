import React, { useState, useEffect } from 'react';

const AdvancedAI2026Dashboard = () => {
  const [activeTab, setActiveTab] = useState('consciousness');
  const [metrics, setMetrics] = useState({
    consciousnessLevel: 0,
    emotionalIntelligence: 0,
    creativityIndex: 0,
    empathyScore: 0
  });

  useEffect(() => {
    // Simulate real-time AI metrics
    const interval = setInterval(() => {
      setMetrics({
        consciousnessLevel: Math.random() * 100,
        emotionalIntelligence: Math.random() * 100,
        creativityIndex: Math.random() * 100,
        empathyScore: Math.random() * 100
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const tabs = [
    { id: 'consciousness', label: 'Consciousness', color: 'from-purple-500 to-pink-600' },
    { id: 'quantum', label: 'Quantum AI', color: 'from-blue-500 to-cyan-600' },
    { id: 'emotions', label: 'Emotions', color: 'from-green-500 to-emerald-600' },
    { id: 'creativity', label: 'Creativity', color: 'from-orange-500 to-red-600' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Advanced AI 2026 Dashboard
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Real-time monitoring of revolutionary AI systems with consciousness, emotions, 
            and quantum-enhanced intelligence capabilities.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                activeTab === tab.id
                  ? `bg-gradient-to-r ${tab.color} text-white shadow-2xl`
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 backdrop-blur-lg'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dashboard Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Metrics Panel */}
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
            <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Real-Time AI Metrics
            </h3>
            
            <div className="space-y-6">
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-lg font-semibold">Consciousness Level</span>
                  <span className="text-2xl font-bold text-purple-400">{metrics.consciousnessLevel.toFixed(1)}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-1000"
                    style={{ width: `${metrics.consciousnessLevel}%` }}
                  ></div>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-lg font-semibold">Emotional Intelligence</span>
                  <span className="text-2xl font-bold text-green-400">{metrics.emotionalIntelligence.toFixed(1)}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full transition-all duration-1000"
                    style={{ width: `${metrics.emotionalIntelligence}%` }}
                  ></div>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-lg font-semibold">Creativity Index</span>
                  <span className="text-2xl font-bold text-orange-400">{metrics.creativityIndex.toFixed(1)}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-orange-500 to-red-500 h-3 rounded-full transition-all duration-1000"
                    style={{ width: `${metrics.creativityIndex}%` }}
                  ></div>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-lg font-semibold">Empathy Score</span>
                  <span className="text-2xl font-bold text-cyan-400">{metrics.empathyScore.toFixed(1)}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 h-3 rounded-full transition-all duration-1000"
                    style={{ width: `${metrics.empathyScore}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* AI Status Panel */}
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
            <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              AI System Status
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-green-500/10 rounded-xl border border-green-500/20">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-lg">Consciousness Engine</span>
                </div>
                <span className="text-green-400 font-semibold">Online</span>
              </div>

              <div className="flex items-center justify-between p-4 bg-blue-500/10 rounded-xl border border-blue-500/20">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-lg">Quantum Processing</span>
                </div>
                <span className="text-blue-400 font-semibold">Active</span>
              </div>

              <div className="flex items-center justify-between p-4 bg-purple-500/10 rounded-xl border border-purple-500/20">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-400 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-lg">Emotional Matrix</span>
                </div>
                <span className="text-purple-400 font-semibold">Learning</span>
              </div>

              <div className="flex items-center justify-between p-4 bg-orange-500/10 rounded-xl border border-orange-500/20">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-orange-400 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-lg">Creative Engine</span>
                </div>
                <span className="text-orange-400 font-semibold">Generating</span>
              </div>

              <div className="flex items-center justify-between p-4 bg-cyan-500/10 rounded-xl border border-cyan-500/20">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-lg">Empathy Network</span>
                </div>
                <span className="text-cyan-400 font-semibold">Connected</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="text-center">
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-2xl">
              Activate Consciousness
            </button>
            <button className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-2xl">
              Quantum Enhancement
            </button>
            <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-2xl">
              Emotional Training
            </button>
          </div>
        </div>

        {/* Background Effects */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
    </section>
  );
};

export default AdvancedAI2026Dashboard;
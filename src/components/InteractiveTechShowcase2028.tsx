import React, { useState } from 'react';

const InteractiveTechShowcase2028: React.FC = () => {
  const [activeTab, setActiveTab] = useState('consciousness');

  const technologies = {
    consciousness: {
      title: 'Consciousness AI 2028',
      icon: '🧠',
      description: 'AI systems with genuine consciousness and self-awareness',
      features: [
        'Self-aware decision making',
        'Emotional intelligence',
        'Creative problem solving',
        'Ethical reasoning'
  const [activeDemo, setActiveDemo] = useState('ai');

  const demos = {
    ai: {
      title: 'AI Consciousness Demo',
      description: 'Experience AI that thinks, learns, and evolves in real-time',
      features: [
        'Real-time learning algorithms',
        'Emotional intelligence simulation',
        'Creative problem solving',
        'Autonomous decision making'cursor/fix-netlify-build-and-merge-to-main-a068
      ],
      color: 'from-emerald-600 to-teal-600'
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-2xl p-12 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🎮 INTERACTIVE SHOWCASE • 2028
          </div>
          <h2 className="text-5xl font-bold mb-6">🚀 Interactive Technology Showcase 2028</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Explore our revolutionary 2028 technologies through interactive demonstrations
          </p>
        </div>

        {/* Interactive Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(technologies).map(([key, tech]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                activeTab === key
                  ? `bg-gradient-to-r ${tech.color} text-white shadow-lg scale-105`
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              {tech.icon} {tech.title}
            </button>
          ))}
        </div>

        {/* Active Technology Display */}
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-8xl mb-6 text-center md:text-left">
                {technologies[activeTab as keyof typeof technologies].icon}
              </div>
              <h3 className="text-3xl font-bold mb-4">
                {technologies[activeTab as keyof typeof technologies].title}
              </h3>
              <p className="text-xl opacity-90 mb-6">
                {technologies[activeTab as keyof typeof technologies].description}
              </p>
              <div className="space-y-3">
                {technologies[activeTab as keyof typeof technologies].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                    <span className="text-white/90">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-white/20 to-white/10 rounded-xl p-8 text-center">
              <h4 className="text-2xl font-bold mb-4">Interactive Demo</h4>
              <div className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-lg p-6 mb-6">
                <div className="text-4xl mb-4">🎮</div>
                <p className="text-sm opacity-90">
                  Experience this technology through our interactive demonstration
                </p>
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase 2028
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Experience the future of technology through interactive demonstrations and hands-on exploration
          </p>
        </div>

        {/* Demo Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-full p-2">
            {Object.entries(demos).map(([key, demo]) => (
              <button
                key={key}
                onClick={() => setActiveDemo(key)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  activeDemo === key
                    ? `bg-gradient-to-r ${demo.color} text-white shadow-lg`
                    : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                }`}
              >
                {demo.title}
              </button>
            ))}
          </div>
        </div>

        {/* Active Demo Display */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-3xl font-bold mb-4">{demos[activeDemo as keyof typeof demos].title}</h3>
                <p className="text-xl opacity-90 mb-6">{demos[activeDemo as keyof typeof demos].description}</p>
                <ul className="space-y-3">
                  {demos[activeDemo as keyof typeof demos].features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-black/50 rounded-xl p-6">
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">
                      {activeDemo === 'ai' && '🧠'}
                      {activeDemo === 'quantum' && '⚛️'}
                      {activeDemo === 'neural' && '🧬'}
                    </div>
                    <p className="text-gray-400">Interactive Demo Area</p>
                    <button className="mt-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300">
                      Launch Demo
                    </button>
                  </div>
                </div>cursor/fix-netlify-build-and-merge-to-main-a068
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2028;
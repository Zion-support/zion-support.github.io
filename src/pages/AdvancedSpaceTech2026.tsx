import React from 'react';

const AdvancedSpaceTech2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🚀 SPACE TECHNOLOGY 2026 • BREAKTHROUGH INNOVATION
            </div>
            <h1 className="text-6xl font-bold text-white mb-6">
              Advanced Space Technology 2026
            </h1>
            <p className="text-2xl text-cyan-200 max-w-4xl mx-auto">
              Pioneering the next frontier with revolutionary space technologies, 
              quantum propulsion systems, and interplanetary AI networks
            </p>
          </div>
        </div>
      </div>

      {/* Revolutionary Technologies Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">🌟 Revolutionary Space Technologies</h2>
          <p className="text-xl text-gray-300">Discover the cutting-edge innovations reshaping space exploration</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-8 border border-blue-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🚀</div>
            <h3 className="text-2xl font-bold text-white mb-4 text-center">Quantum Propulsion Systems</h3>
            <p className="text-blue-200 mb-6 text-center">
              Breakthrough propulsion technology using quantum field manipulation for near-light-speed travel
            </p>
            <ul className="text-blue-300 space-y-2 text-sm">
              <li>• 99.7% light speed capability</li>
              <li>• Zero-emission propulsion</li>
              <li>• Interstellar travel ready</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🧠</div>
            <h3 className="text-2xl font-bold text-white mb-4 text-center">Space AI Networks</h3>
            <p className="text-purple-200 mb-6 text-center">
              Autonomous AI systems managing space stations, satellites, and interplanetary missions
            </p>
            <ul className="text-purple-300 space-y-2 text-sm">
              <li>• Autonomous mission control</li>
              <li>• Real-time decision making</li>
              <li>• Predictive maintenance</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🌍</div>
            <h3 className="text-2xl font-bold text-white mb-4 text-center">Terraforming Technology</h3>
            <p className="text-emerald-200 mb-6 text-center">
              Advanced atmospheric engineering and ecosystem creation for Mars colonization
            </p>
            <ul className="text-emerald-300 space-y-2 text-sm">
              <li>• Atmospheric generation</li>
              <li>• Water cycle creation</li>
              <li>• Bio-dome ecosystems</li>
            </ul>
          </div>
        </div>

        {/* Mission Showcase */}
        <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">🎯 Current Missions & Projects</h2>
            <p className="text-xl text-gray-300">Active space exploration initiatives pushing the boundaries of human knowledge</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 backdrop-blur-sm rounded-xl p-8 border border-orange-400/30">
              <div className="flex items-center space-x-3 mb-4">
                <span className="px-3 py-1 bg-orange-500 text-white text-xs rounded-full font-bold">ACTIVE</span>
                <span className="text-orange-300 text-sm">Mission Status</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Mars Colony Alpha</h3>
              <p className="text-orange-200 mb-6">
                Establishing the first permanent human settlement on Mars with advanced life support systems and AI-managed infrastructure.
              </p>
              <div className="space-y-2 text-orange-300 text-sm">
                <div className="flex justify-between">
                  <span>Progress:</span>
                  <span>87% Complete</span>
                </div>
                <div className="flex justify-between">
                  <span>Population:</span>
                  <span>1,247 Colonists</span>
                </div>
                <div className="flex justify-between">
                  <span>Next Phase:</span>
                  <span>Atmospheric Processing</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30">
              <div className="flex items-center space-x-3 mb-4">
                <span className="px-3 py-1 bg-cyan-500 text-white text-xs rounded-full font-bold">LAUNCHING</span>
                <span className="text-cyan-300 text-sm">Q2 2026</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Europa Exploration Mission</h3>
              <p className="text-cyan-200 mb-6">
                Robotic mission to explore Jupiter's moon Europa, searching for signs of life in its subsurface ocean.
              </p>
              <div className="space-y-2 text-cyan-300 text-sm">
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span>8 Years</span>
                </div>
                <div className="flex justify-between">
                  <span>Technology:</span>
                  <span>Quantum AI</span>
                </div>
                <div className="flex justify-between">
                  <span>Goal:</span>
                  <span>Life Detection</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Breakthroughs */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">⚡ Recent Breakthroughs</h2>
            <p className="text-xl text-gray-300">Groundbreaking discoveries and technological advances in space technology</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-yellow-600/20 to-orange-600/20 backdrop-blur-sm rounded-xl p-8 border border-yellow-400/30">
              <div className="text-5xl mb-4 text-center">⚛️</div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">Quantum Communication</h3>
              <p className="text-yellow-200 text-center text-sm mb-4">
                Instantaneous communication across any distance using quantum entanglement
              </p>
              <div className="text-yellow-300 text-xs text-center">
                <div className="bg-yellow-500/20 rounded-lg p-2">
                  <strong>Impact:</strong> Real-time Earth-Mars communication
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-sm rounded-xl p-8 border border-green-400/30">
              <div className="text-5xl mb-4 text-center">🌱</div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">Space Agriculture</h3>
              <p className="text-green-200 text-center text-sm mb-4">
                Zero-gravity farming systems producing food for long-duration missions
              </p>
              <div className="text-green-300 text-xs text-center">
                <div className="bg-green-500/20 rounded-lg p-2">
                  <strong>Impact:</strong> Self-sustaining space colonies
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-600/20 to-rose-600/20 backdrop-blur-sm rounded-xl p-8 border border-pink-400/30">
              <div className="text-5xl mb-4 text-center">🛡️</div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">Radiation Shielding</h3>
              <p className="text-pink-200 text-center text-sm mb-4">
                Advanced materials protecting astronauts from cosmic radiation
              </p>
              <div className="text-pink-300 text-xs text-center">
                <div className="bg-pink-500/20 rounded-lg p-2">
                  <strong>Impact:</strong> Safe deep space travel
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-12">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Explore the Cosmos?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join us in the next chapter of human space exploration. Discover how our advanced space technologies 
            can accelerate your mission to the stars.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore Space Solutions
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-all duration-300 font-semibold text-lg">
              Download Mission Brief
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedSpaceTech2026;
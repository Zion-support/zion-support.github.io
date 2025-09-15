import React from 'react';

const AdvancedSpaceTech2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🚀 SPACE TECHNOLOGY • JANUARY 2026
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Advanced Space Technology 2026
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Pioneering the future of space exploration with cutting-edge technology that's making interplanetary travel and space colonization a reality.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg">
                Explore Space Solutions
              </button>
              <button className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg hover:bg-blue-400/10 transition-colors font-semibold text-lg">
                Watch Mission
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Space Technologies Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">🌌 Revolutionary Space Technologies</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Our 2026 space technology platform delivers breakthrough capabilities for exploration, colonization, and commercial space operations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-600/30 to-indigo-600/30 backdrop-blur-sm rounded-xl p-8 border border-blue-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🚀</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Advanced Propulsion</h3>
            <p className="text-blue-100 mb-6 text-center">
              Next-generation propulsion systems enabling faster-than-ever space travel with revolutionary efficiency.
            </p>
            <ul className="text-blue-200 space-y-2 text-sm">
              <li>• Ion Drive Technology</li>
              <li>• Nuclear Propulsion</li>
              <li>• Antimatter Engines</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🏠</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Space Habitats</h3>
            <p className="text-purple-100 mb-6 text-center">
              Self-sustaining space colonies with advanced life support and artificial gravity systems.
            </p>
            <ul className="text-purple-200 space-y-2 text-sm">
              <li>• Modular Construction</li>
              <li>• Closed-Loop Systems</li>
              <li>• Artificial Gravity</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🛰️</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Satellite Networks</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Global satellite constellations providing worldwide connectivity and Earth observation capabilities.
            </p>
            <ul className="text-emerald-200 space-y-2 text-sm">
              <li>• 5G+ Connectivity</li>
              <li>• Real-time Imaging</li>
              <li>• Global Internet</li>
            </ul>
          </div>
        </div>

        {/* Space Missions */}
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">🌟 Active Space Missions 2026</h2>
            <p className="text-xl opacity-90">Current missions pushing the boundaries of space exploration</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
              <div className="text-4xl mb-4">🌙</div>
              <h3 className="text-xl font-semibold mb-2">Lunar Base Alpha</h3>
              <p className="text-sm opacity-80 mb-4">First permanent human settlement on the Moon with 50+ residents</p>
              <div className="flex justify-between text-xs">
                <span>Status: Active</span>
                <span className="text-green-400">✓ Operational</span>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
              <div className="text-4xl mb-4">🔴</div>
              <h3 className="text-xl font-semibold mb-2">Mars Colony Initiative</h3>
              <p className="text-sm opacity-80 mb-4">Preparing for human colonization of Mars with advanced terraforming</p>
              <div className="flex justify-between text-xs">
                <span>Status: Phase 2</span>
                <span className="text-yellow-400">⏳ In Progress</span>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
              <div className="text-4xl mb-4">🪐</div>
              <h3 className="text-xl font-semibold mb-2">Jupiter Exploration</h3>
              <p className="text-sm opacity-80 mb-4">Advanced probes studying Jupiter's moons for potential life</p>
              <div className="flex justify-between text-xs">
                <span>Status: En Route</span>
                <span className="text-blue-400">🚀 Launched</span>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="bg-gradient-to-br from-indigo-800/50 to-purple-800/50 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">⚙️ Space Technology Stack</h2>
            <p className="text-xl opacity-90">Advanced systems powering our space operations</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-blue-400">Propulsion Systems</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-white/10 rounded-lg">
                  <span className="font-semibold">Ion Drive Efficiency</span>
                  <span className="text-blue-400 font-bold">95%</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white/10 rounded-lg">
                  <span className="font-semibold">Thrust Power</span>
                  <span className="text-blue-400 font-bold">50,000 N</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white/10 rounded-lg">
                  <span className="font-semibold">Fuel Efficiency</span>
                  <span className="text-blue-400 font-bold">10x Better</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white/10 rounded-lg">
                  <span className="font-semibold">Range</span>
                  <span className="text-blue-400 font-bold">Unlimited</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-purple-400">Life Support Systems</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-white/10 rounded-lg">
                  <span className="font-semibold">Oxygen Generation</span>
                  <span className="text-purple-400 font-bold">100% Recycled</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white/10 rounded-lg">
                  <span className="font-semibold">Water Purification</span>
                  <span className="text-purple-400 font-bold">99.9% Pure</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white/10 rounded-lg">
                  <span className="font-semibold">Food Production</span>
                  <span className="text-purple-400 font-bold">Hydroponic</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white/10 rounded-lg">
                  <span className="font-semibold">Waste Processing</span>
                  <span className="text-purple-400 font-bold">Zero Waste</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Commercial Applications */}
        <div className="bg-gradient-to-r from-slate-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">💼 Commercial Space Applications</h2>
            <p className="text-xl opacity-90">Space technology solutions for businesses and organizations</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-colors">
              <div className="text-4xl mb-4">📡</div>
              <h3 className="text-xl font-semibold mb-2">Satellite Services</h3>
              <p className="text-sm opacity-80">Global connectivity, Earth observation, and communication services</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-colors">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-xl font-semibold mb-2">Space Manufacturing</h3>
              <p className="text-sm opacity-80">Zero-gravity manufacturing for advanced materials and pharmaceuticals</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-colors">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold mb-2">Earth Monitoring</h3>
              <p className="text-sm opacity-80">Climate monitoring, disaster prediction, and environmental analysis</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-colors">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">Space Tourism</h3>
              <p className="text-sm opacity-80">Commercial space travel and orbital experiences for civilians</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-4xl font-bold mb-6">Ready to Reach for the Stars?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join the space revolution and be part of humanity's greatest adventure with our advanced 2026 space technology solutions.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-12 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg">
              Launch Your Mission
            </button>
            <button className="border-2 border-blue-400 text-blue-400 px-12 py-4 rounded-lg hover:bg-blue-400/10 transition-colors font-semibold text-lg">
              Book Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedSpaceTech2026;
import React from 'react';

const AdvancedSpaceTech2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 BREAKTHROUGH SPACE TECHNOLOGY • 2026
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Advanced Space Technology Revolution
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Experience the future of space exploration with cutting-edge technologies that are reshaping our understanding of the cosmos and enabling unprecedented missions beyond Earth.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore Technologies →
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 font-semibold text-lg">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Revolutionary Technologies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4 text-center">🛸</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Advanced Propulsion Systems</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Next-generation ion drives, nuclear thermal propulsion, and antimatter engines enabling faster-than-ever space travel
            </p>
            <ul className="text-cyan-200 space-y-2 mb-6 text-sm">
              <li>• 10x faster than conventional rockets</li>
              <li>• 99% fuel efficiency improvement</li>
              <li>• Mars in 30 days capability</li>
            </ul>
            <button className="w-full bg-white text-cyan-600 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold">
              Learn More →
            </button>
          </div>

          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4 text-center">🌌</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Quantum Space Navigation</h3>
            <p className="text-purple-100 mb-6 text-center">
              Revolutionary quantum sensors and AI-powered navigation systems for precise deep space exploration
            </p>
            <ul className="text-purple-200 space-y-2 mb-6 text-sm">
              <li>• Sub-meter accuracy at light-years distance</li>
              <li>• Real-time cosmic mapping</li>
              <li>• Autonomous mission planning</li>
            </ul>
            <button className="w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
              Explore →
            </button>
          </div>

          <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4 text-center">🏗️</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Space Manufacturing</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Zero-gravity manufacturing facilities producing advanced materials impossible to create on Earth
            </p>
            <ul className="text-emerald-200 space-y-2 mb-6 text-sm">
              <li>• Perfect crystal structures</li>
              <li>• Ultra-lightweight alloys</li>
              <li>• Self-assembling materials</li>
            </ul>
            <button className="w-full bg-white text-emerald-600 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-semibold">
              Discover →
            </button>
          </div>

          <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 backdrop-blur-sm rounded-2xl p-8 border border-orange-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4 text-center">🔬</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Space Research Labs</h3>
            <p className="text-orange-100 mb-6 text-center">
              Advanced orbital laboratories conducting breakthrough research in physics, biology, and materials science
            </p>
            <ul className="text-orange-200 space-y-2 mb-6 text-sm">
              <li>• Zero-gravity experiments</li>
              <li>• Cosmic radiation studies</li>
              <li>• Exoplanet analysis</li>
            </ul>
            <button className="w-full bg-white text-orange-600 py-3 rounded-lg hover:bg-orange-50 transition-colors font-semibold">
              Research →
            </button>
          </div>

          <div className="bg-gradient-to-br from-yellow-600/20 to-amber-600/20 backdrop-blur-sm rounded-2xl p-8 border border-yellow-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4 text-center">⚡</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Space Energy Systems</h3>
            <p className="text-yellow-100 mb-6 text-center">
              Revolutionary solar arrays, fusion reactors, and wireless power transmission for unlimited space energy
            </p>
            <ul className="text-yellow-200 space-y-2 mb-6 text-sm">
              <li>• 99.9% efficient solar collection</li>
              <li>• Wireless power beaming</li>
              <li>• Fusion reactor miniaturization</li>
            </ul>
            <button className="w-full bg-white text-yellow-600 py-3 rounded-lg hover:bg-yellow-50 transition-colors font-semibold">
              Power Up →
            </button>
          </div>

          <div className="bg-gradient-to-br from-pink-600/20 to-rose-600/20 backdrop-blur-sm rounded-2xl p-8 border border-pink-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4 text-center">🤖</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Space Robotics</h3>
            <p className="text-pink-100 mb-6 text-center">
              Autonomous space robots and AI systems for construction, maintenance, and exploration missions
            </p>
            <ul className="text-pink-200 space-y-2 mb-6 text-sm">
              <li>• Self-repairing systems</li>
              <li>• Swarm intelligence</li>
              <li>• Human-robot collaboration</li>
            </ul>
            <button className="w-full bg-white text-pink-600 py-3 rounded-lg hover:bg-pink-50 transition-colors font-semibold">
              Automate →
            </button>
          </div>
        </div>

        {/* Mission Showcase */}
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">🚀 Current Mission Highlights</h2>
            <p className="text-xl text-gray-300">Follow our groundbreaking space missions in real-time</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-xl p-8 border border-blue-400/30">
              <div className="flex items-center space-x-3 mb-4">
                <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full font-semibold">LIVE</span>
                <span className="text-sm text-gray-300">Mission Alpha-7</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Mars Colony Preparation</h3>
              <p className="text-gray-300 mb-6">
                Deploying advanced life support systems and habitat modules for the first permanent Mars settlement
              </p>
              <div className="flex justify-between text-sm text-gray-400 mb-4">
                <span>Progress: 78%</span>
                <span>ETA: 45 days</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" style={{width: '78%'}}></div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-600/30 to-teal-600/30 rounded-xl p-8 border border-cyan-400/30">
              <div className="flex items-center space-x-3 mb-4">
                <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full font-semibold">PLANNING</span>
                <span className="text-sm text-gray-300">Mission Beta-3</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Jupiter Moon Exploration</h3>
              <p className="text-gray-300 mb-6">
                Advanced probe mission to Europa and Ganymede to search for signs of extraterrestrial life
              </p>
              <div className="flex justify-between text-sm text-gray-400 mb-4">
                <span>Progress: 23%</span>
                <span>Launch: Q3 2026</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-cyan-500 to-teal-500 h-2 rounded-full" style={{width: '23%'}}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Impact */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-8">🌟 Revolutionary Impact</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl p-6 border border-purple-400/30">
              <div className="text-4xl mb-3">🌍</div>
              <h3 className="text-xl font-bold mb-2">Earth Benefits</h3>
              <p className="text-sm text-gray-300">Advanced materials and technologies improving life on Earth</p>
            </div>
            <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-xl p-6 border border-blue-400/30">
              <div className="text-4xl mb-3">🔬</div>
              <h3 className="text-xl font-bold mb-2">Scientific Discovery</h3>
              <p className="text-sm text-gray-300">Breakthrough research advancing human knowledge</p>
            </div>
            <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-xl p-6 border border-green-400/30">
              <div className="text-4xl mb-3">🚀</div>
              <h3 className="text-xl font-bold mb-2">Space Economy</h3>
              <p className="text-sm text-gray-300">New industries and economic opportunities in space</p>
            </div>
            <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 rounded-xl p-6 border border-orange-400/30">
              <div className="text-4xl mb-3">👥</div>
              <h3 className="text-xl font-bold mb-2">Human Future</h3>
              <p className="text-sm text-gray-300">Preparing humanity for multi-planetary existence</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-12 border border-cyan-400/30">
          <h2 className="text-4xl font-bold mb-6">Ready to Explore the Future?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join us in revolutionizing space technology and be part of humanity's greatest adventure
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-10 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Space Journey →
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 font-semibold text-lg">
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedSpaceTech2026;
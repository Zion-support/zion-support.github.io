import React from 'react';
import { Helmet } from 'react-helmet-async';

const NextGenSpaceTech2031: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-blue-900 text-white">
      <Helmet>
        <title>Next-Gen Space Tech 2031 - Zion Tech Group</title>
        <meta name="description" content="Explore the most advanced space technologies of 2031 that will enable human expansion across the galaxy" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent text-6xl font-bold mb-6">
            🌌 NEXT-GEN SPACE TECH 2031 🌌
          </div>
          <p className="text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Discover the most revolutionary space technologies that will enable human expansion across the galaxy and beyond
          </p>
          <div className="flex justify-center space-x-4">
            <span className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-lg font-semibold">
              🚀 Warp Drive Technology
            </span>
            <span className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-lg font-semibold">
              🏠 Space Colonization
            </span>
            <span className="px-6 py-3 bg-gradient-to-r from-green-500 to-teal-500 rounded-full text-lg font-semibold">
              👽 Alien Communication
            </span>
          </div>
        </div>

        {/* Space Technologies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold mb-4 text-cyan-300">Warp Drive System</h3>
            <p className="text-gray-300 mb-6">
              Revolutionary propulsion technology that bends spacetime to enable faster-than-light travel, 
              making interstellar journeys possible within human lifetimes.
            </p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Max Speed:</span>
                <span className="text-cyan-400 font-bold">1000x Light</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Range:</span>
                <span className="text-cyan-400 font-bold">1000 LY</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Energy Efficiency:</span>
                <span className="text-cyan-400 font-bold">99.9%</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30">
            <div className="text-4xl mb-4">🏠</div>
            <h3 className="text-2xl font-bold mb-4 text-purple-300">Space Colony Network</h3>
            <p className="text-gray-300 mb-6">
              Self-sustaining space colonies across multiple star systems with advanced life support, 
              agriculture, and manufacturing capabilities.
            </p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Colonies:</span>
                <span className="text-purple-400 font-bold">50+</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Population:</span>
                <span className="text-purple-400 font-bold">1M+</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Self-Sufficiency:</span>
                <span className="text-purple-400 font-bold">100%</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-500/20 to-teal-500/20 backdrop-blur-sm rounded-2xl p-8 border border-green-400/30">
            <div className="text-4xl mb-4">👽</div>
            <h3 className="text-2xl font-bold mb-4 text-green-300">Alien Communication Array</h3>
            <p className="text-gray-300 mb-6">
              Advanced communication system that can detect, translate, and communicate with 
              intelligent alien civilizations across the galaxy.
            </p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Detection Range:</span>
                <span className="text-green-400 font-bold">1000 LY</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Translation Accuracy:</span>
                <span className="text-green-400 font-bold">99.9%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Contacted Species:</span>
                <span className="text-green-400 font-bold">12+</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-sm rounded-2xl p-8 border border-yellow-400/30">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold mb-4 text-yellow-300">Antimatter Power Core</h3>
            <p className="text-gray-300 mb-6">
              Revolutionary power source using controlled antimatter reactions to provide 
              unlimited clean energy for space missions and colonies.
            </p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Power Output:</span>
                <span className="text-yellow-400 font-bold">∞</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Efficiency:</span>
                <span className="text-yellow-400 font-bold">100%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Safety Level:</span>
                <span className="text-yellow-400 font-bold">99.9%</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-8 border border-red-400/30">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="text-2xl font-bold mb-4 text-red-300">Space Defense Shield</h3>
            <p className="text-gray-300 mb-6">
              Advanced protective system that shields space colonies and ships from cosmic radiation, 
              meteor impacts, and other space hazards.
            </p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Protection Level:</span>
                <span className="text-red-400 font-bold">100%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Coverage Area:</span>
                <span className="text-red-400 font-bold">1000 km²</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Energy Consumption:</span>
                <span className="text-red-400 font-bold">Minimal</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-8 border border-indigo-400/30">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="text-2xl font-bold mb-4 text-indigo-300">Terraforming Engine</h3>
            <p className="text-gray-300 mb-6">
              Revolutionary technology that can transform inhospitable planets into Earth-like 
              environments suitable for human habitation.
            </p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Planets Terraformed:</span>
                <span className="text-indigo-400 font-bold">5+</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Success Rate:</span>
                <span className="text-indigo-400 font-bold">100%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Time to Complete:</span>
                <span className="text-indigo-400 font-bold">10 years</span>
              </div>
            </div>
          </div>
        </div>

        {/* Space Mission Statistics */}
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-3xl p-12 mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">
            🚀 SPACE MISSION STATISTICS 🚀
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-2">1000+</div>
              <div className="text-lg text-gray-300">Active Space Missions</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-lg text-gray-300">Space Colonies</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-green-400 mb-2">12+</div>
              <div className="text-lg text-gray-300">Alien Species Contacted</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow-400 mb-2">5+</div>
              <div className="text-lg text-gray-300">Planets Terraformed</div>
            </div>
          </div>
        </div>

        {/* Space Exploration Timeline */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">
            🌟 SPACE EXPLORATION TIMELINE 🌟
          </h2>
          <div className="space-y-8">
            <div className="flex items-center space-x-8">
              <div className="text-4xl">🚀</div>
              <div>
                <h3 className="text-2xl font-bold text-cyan-300 mb-2">2025-2027: Mars Colonization</h3>
                <p className="text-gray-300">First permanent human settlements on Mars with advanced life support systems</p>
              </div>
            </div>
            <div className="flex items-center space-x-8">
              <div className="text-4xl">🌙</div>
              <div>
                <h3 className="text-2xl font-bold text-purple-300 mb-2">2028-2030: Lunar Cities</h3>
                <p className="text-gray-300">Self-sustaining cities on the Moon with manufacturing and research facilities</p>
              </div>
            </div>
            <div className="flex items-center space-x-8">
              <div className="text-4xl">🪐</div>
              <div>
                <h3 className="text-2xl font-bold text-green-300 mb-2">2031-2033: Outer Planet Exploration</h3>
                <p className="text-gray-300">Manned missions to Jupiter and Saturn moons with advanced propulsion systems</p>
              </div>
            </div>
            <div className="flex items-center space-x-8">
              <div className="text-4xl">⭐</div>
              <div>
                <h3 className="text-2xl font-bold text-yellow-300 mb-2">2034-2036: Interstellar Missions</h3>
                <p className="text-gray-300">First human missions to nearby star systems using warp drive technology</p>
              </div>
            </div>
          </div>
        </div>

        {/* Future Space Applications */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">
            🌌 FUTURE SPACE APPLICATIONS 🌌
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/20">
              <h3 className="text-2xl font-bold mb-4 text-cyan-300">Space Tourism</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Luxury space hotels and resorts</li>
                <li>• Zero-gravity entertainment experiences</li>
                <li>• Planetary sightseeing tours</li>
                <li>• Space wedding ceremonies</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/20">
              <h3 className="text-2xl font-bold mb-4 text-purple-300">Space Mining</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Asteroid mining for rare materials</li>
                <li>• Lunar helium-3 extraction</li>
                <li>• Space-based manufacturing</li>
                <li>• Resource distribution networks</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-500/10 to-teal-500/10 backdrop-blur-sm rounded-2xl p-8 border border-green-400/20">
              <h3 className="text-2xl font-bold mb-4 text-green-300">Space Research</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Advanced physics experiments</li>
                <li>• Alien life research</li>
                <li>• Dark matter studies</li>
                <li>• Quantum gravity research</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-sm rounded-2xl p-8 border border-yellow-400/20">
              <h3 className="text-2xl font-bold mb-4 text-yellow-300">Space Defense</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Planetary defense systems</li>
                <li>• Space-based weapons platforms</li>
                <li>• Threat detection networks</li>
                <li>• Emergency response systems</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-600 via-purple-600 to-blue-600 rounded-3xl p-12">
            <h2 className="text-4xl font-bold mb-6">Ready to Explore the Cosmos?</h2>
            <p className="text-xl mb-8 text-gray-200">
              Join us in the greatest space exploration era in human history
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-white text-purple-600 rounded-full text-lg font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                🌌 Explore Space Tech
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full text-lg font-bold hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105">
                📞 Contact Space Experts
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenSpaceTech2031;
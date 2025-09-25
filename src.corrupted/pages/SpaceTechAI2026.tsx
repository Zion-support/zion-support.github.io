import React from 'react';

const SpaceTechAI2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-blue-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center text-white">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🚀 SPACE TECHNOLOGY AI • 2026
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Space Technology AI 2026
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Pioneering the future of space exploration with advanced AI systems, autonomous spacecraft, 
              and intelligent space infrastructure
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Space AI →
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg">
                View Missions
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Space AI Technologies */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">🛰️ Space AI Technologies</h2>
          <p className="text-xl text-gray-300">Revolutionary AI systems designed for space exploration and colonization</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Autonomous Spacecraft */}
          <div className="bg-gradient-to-br from-purple-600/30 to-indigo-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🚀</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Autonomous Spacecraft</h3>
            <p className="text-purple-100 mb-6 text-center">
              Self-navigating spacecraft with AI-powered decision making for deep space missions
            </p>
            <ul className="text-purple-200 space-y-2 mb-6 text-sm">
              <li>• Autonomous navigation systems</li>
              <li>• Self-repair capabilities</li>
              <li>• Mission adaptation</li>
              <li>• Resource optimization</li>
            </ul>
            <button className="block w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center">
              Explore Spacecraft AI →
            </button>
          </div>

          {/* Space Colony AI */}
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🏗️</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Space Colony AI</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Intelligent systems for managing space colonies and ensuring human survival in space
            </p>
            <ul className="text-cyan-200 space-y-2 mb-6 text-sm">
              <li>• Life support management</li>
              <li>• Resource allocation</li>
              <li>• Environmental control</li>
              <li>• Emergency response</li>
            </ul>
            <button className="block w-full bg-white text-cyan-600 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-center">
              Explore Colony AI →
            </button>
          </div>

          {/* Asteroid Mining AI */}
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">⛏️</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Asteroid Mining AI</h3>
            <p className="text-emerald-100 mb-6 text-center">
              AI-powered systems for identifying, extracting, and processing resources from asteroids
            </p>
            <ul className="text-emerald-200 space-y-2 mb-6 text-sm">
              <li>• Resource identification</li>
              <li>• Mining optimization</li>
              <li>• Processing automation</li>
              <li>• Safety protocols</li>
            </ul>
            <button className="block w-full bg-white text-emerald-600 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-center">
              Explore Mining AI →
            </button>
          </div>

          {/* Space Weather Prediction */}
          <div className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-8 border border-orange-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🌪️</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Space Weather AI</h3>
            <p className="text-orange-100 mb-6 text-center">
              Advanced AI systems for predicting space weather and protecting space infrastructure
            </p>
            <ul className="text-orange-200 space-y-2 mb-6 text-sm">
              <li>• Solar storm prediction</li>
              <li>• Radiation monitoring</li>
              <li>• Early warning systems</li>
              <li>• Protection protocols</li>
            </ul>
            <button className="block w-full bg-white text-orange-600 py-3 rounded-lg hover:bg-orange-50 transition-colors font-semibold text-center">
              Explore Weather AI →
            </button>
          </div>

          {/* Interplanetary Communication */}
          <div className="bg-gradient-to-br from-violet-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-8 border border-violet-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">📡</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Interplanetary Communication</h3>
            <p className="text-violet-100 mb-6 text-center">
              AI-enhanced communication systems for reliable data transmission across vast distances
            </p>
            <ul className="text-violet-200 space-y-2 mb-6 text-sm">
              <li>• Signal optimization</li>
              <li>• Error correction</li>
              <li>• Bandwidth management</li>
              <li>• Latency reduction</li>
            </ul>
            <button className="block w-full bg-white text-violet-600 py-3 rounded-lg hover:bg-violet-50 transition-colors font-semibold text-center">
              Explore Communication AI →
            </button>
          </div>

          {/* Space Manufacturing */}
          <div className="bg-gradient-to-br from-rose-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-rose-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🏭</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Space Manufacturing AI</h3>
            <p className="text-rose-100 mb-6 text-center">
              Intelligent manufacturing systems for producing goods and materials in zero gravity
            </p>
            <ul className="text-rose-200 space-y-2 mb-6 text-sm">
              <li>• Zero-gravity adaptation</li>
              <li>• Material optimization</li>
              <li>• Quality control</li>
              <li>• Production scaling</li>
            </ul>
            <button className="block w-full bg-white text-rose-600 py-3 rounded-lg hover:bg-rose-50 transition-colors font-semibold text-center">
              Explore Manufacturing AI →
            </button>
          </div>
        </div>
      </div>

      {/* Mission Showcase */}
      <div className="bg-gradient-to-br from-gray-900 to-black py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">🌟 Mission Showcase</h2>
            <p className="text-xl text-gray-300">Current and upcoming space AI missions</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-purple-600/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
              <h3 className="text-2xl font-bold text-white mb-4">Mars Colony AI System</h3>
              <p className="text-gray-300 mb-6">
                Deploying advanced AI systems to manage the first human settlement on Mars, 
                including life support, resource management, and emergency response.
              </p>
              <div className="flex items-center space-x-4 mb-4">
                <span className="px-3 py-1 bg-green-500 text-white text-sm rounded-full">2026</span>
                <span className="text-sm text-gray-400">Launch Date</span>
              </div>
              <button className="text-purple-400 hover:text-purple-300 font-semibold">
                View Mission Details →
              </button>
            </div>

            <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30">
              <h3 className="text-2xl font-bold text-white mb-4">Asteroid Mining Expedition</h3>
              <p className="text-gray-300 mb-6">
                AI-powered spacecraft autonomously mining rare earth elements from near-Earth asteroids 
                to support Earth's growing technology needs.
              </p>
              <div className="flex items-center space-x-4 mb-4">
                <span className="px-3 py-1 bg-blue-500 text-white text-sm rounded-full">$2.5B</span>
                <span className="text-sm text-gray-400">Estimated Value</span>
              </div>
              <button className="text-cyan-400 hover:text-cyan-300 font-semibold">
                Learn More →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Timeline */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">📅 Space AI Timeline</h2>
            <p className="text-xl text-purple-100">The future of space exploration with AI</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">2026</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Autonomous Mars Rovers</h3>
              <p className="text-purple-100">AI-powered rovers exploring Mars with full autonomy</p>
            </div>

            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">2027</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Space Manufacturing</h3>
              <p className="text-purple-100">First AI-managed manufacturing facility in space</p>
            </div>

            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">2028</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Interplanetary Internet</h3>
              <p className="text-purple-100">AI-optimized communication network across planets</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-br from-black to-purple-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Join the Space AI Revolution</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Be part of the next frontier in space exploration. Our AI technologies are making 
            space more accessible and sustainable than ever before.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore Space AI
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg">
              Partner With Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaceTechAI2026;
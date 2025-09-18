import React from 'react';

const SpaceTechAI2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-blue-900 to-purple-900">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 SPACE TECHNOLOGY • JANUARY 2025
          </div>
          <h1 className="text-6xl font-bold text-white mb-6">
            Space Technology & AI 2025
          </h1>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
            Pioneering the next frontier with AI-powered space exploration, 
            satellite intelligence, and interplanetary communication systems
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Space AI Features */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/30">
              <div className="text-4xl mb-4">🛰️</div>
              <h3 className="text-2xl font-bold text-white mb-4">Autonomous Satellite Networks</h3>
              <p className="text-gray-300 mb-4">
                Self-managing satellite constellations that coordinate operations, 
                optimize orbits, and maintain communication networks without ground control.
              </p>
              <ul className="text-blue-200 space-y-2">
                <li>• Self-organizing satellite swarms</li>
                <li>• Autonomous collision avoidance</li>
                <li>• Dynamic orbit optimization</li>
                <li>• Real-time communication routing</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30">
              <div className="text-4xl mb-4">🌌</div>
              <h3 className="text-2xl font-bold text-white mb-4">Deep Space AI</h3>
              <p className="text-gray-300 mb-4">
                AI systems designed to operate in the harsh conditions of deep space, 
                making autonomous decisions during long-duration missions.
              </p>
              <ul className="text-purple-200 space-y-2">
                <li>• Radiation-resistant processing</li>
                <li>• Autonomous mission planning</li>
                <li>• Self-repairing systems</li>
                <li>• Interplanetary navigation</li>
              </ul>
            </div>
          </div>

          {/* Right Column - Space Applications */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/30">
              <div className="text-4xl mb-4">🔭</div>
              <h3 className="text-2xl font-bold text-white mb-4">Space Observation AI</h3>
              <p className="text-gray-300 mb-4">
                Advanced AI systems that analyze astronomical data, 
                detect cosmic phenomena, and predict space weather events.
              </p>
              <ul className="text-emerald-200 space-y-2">
                <li>• Exoplanet detection algorithms</li>
                <li>• Asteroid threat assessment</li>
                <li>• Solar flare prediction</li>
                <li>• Cosmic background analysis</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-rose-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-rose-400/30">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-white mb-4">Spacecraft Intelligence</h3>
              <p className="text-gray-300 mb-4">
                AI-powered spacecraft that can adapt to unexpected conditions, 
                perform complex maneuvers, and maintain mission objectives autonomously.
              </p>
              <ul className="text-rose-200 space-y-2">
                <li>• Adaptive flight control</li>
                <li>• Emergency response systems</li>
                <li>• Resource optimization</li>
                <li>• Mission replanning</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Technology Showcase */}
        <div className="bg-gradient-to-r from-indigo-900/50 to-blue-900/50 rounded-2xl p-12 mb-16">
          <h2 className="text-4xl font-bold text-white text-center mb-8">
            Revolutionary Space Technologies
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-4">🛸</div>
              <h3 className="text-xl font-bold text-white mb-4">Quantum Communication</h3>
              <p className="text-gray-300">
                Ultra-secure quantum communication networks that enable 
                instant, unhackable data transmission across vast distances.
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-white mb-4">Earth Observation</h3>
              <p className="text-gray-300">
                AI-powered satellite systems that monitor Earth's climate, 
                track environmental changes, and predict natural disasters.
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🔬</div>
              <h3 className="text-xl font-bold text-white mb-4">Space Research</h3>
              <p className="text-gray-300">
                Autonomous research platforms that conduct experiments 
                and gather scientific data in microgravity environments.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Applications */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Space Mission Applications
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-4">🪐</div>
              <h3 className="text-lg font-bold text-white mb-2">Planetary Exploration</h3>
              <p className="text-gray-300 text-sm">
                Autonomous rovers and landers that explore other planets 
                and moons with minimal human intervention.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-4">🌙</div>
              <h3 className="text-lg font-bold text-white mb-2">Lunar Operations</h3>
              <p className="text-gray-300 text-sm">
                AI-powered lunar bases and mining operations that 
                support long-term human presence on the Moon.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-4">☀️</div>
              <h3 className="text-lg font-bold text-white mb-2">Solar System</h3>
              <p className="text-gray-300 text-sm">
                Interplanetary missions that study the Sun, asteroids, 
                and other celestial bodies in our solar system.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-4">🌟</div>
              <h3 className="text-lg font-bold text-white mb-2">Deep Space</h3>
              <p className="text-gray-300 text-sm">
                Missions to explore the outer reaches of our solar system 
                and search for signs of extraterrestrial life.
              </p>
            </div>
          </div>
        </div>

        {/* Future Vision */}
        <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-2xl p-12 mb-16">
          <h2 className="text-4xl font-bold text-white text-center mb-8">
            The Future of Space Technology
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Interstellar Travel</h3>
              <p className="text-gray-300 mb-4">
                AI systems that will enable humanity to reach other star systems, 
                managing the complex challenges of long-duration space travel.
              </p>
              <ul className="text-purple-200 space-y-2">
                <li>• Cryogenic sleep management</li>
                <li>• Life support optimization</li>
                <li>• Navigation and course correction</li>
                <li>• Emergency response protocols</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Space Colonization</h3>
              <p className="text-gray-300 mb-4">
                Autonomous systems that will build and maintain human settlements 
                on other planets, creating self-sustaining space communities.
              </p>
              <ul className="text-blue-200 space-y-2">
                <li>• Automated construction</li>
                <li>• Resource extraction and processing</li>
                <li>• Environmental management</li>
                <li>• Population health monitoring</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Join the Space Revolution
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Be part of the next generation of space exploration and technology 
            that will take humanity to the stars.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/pages/NextGenAIRevolution2026" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
            >
              Explore AI Revolution →
            </a>
            <a 
              href="/pages/AdvancedAISystems2026" 
              className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300 font-semibold text-lg"
            >
              Learn About Advanced AI
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaceTechAI2025;
import React from 'react';
import { Helmet } from 'react-helmet-async';

const AdvancedSpaceTech2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <Helmet>
        <title>Advanced Space Technology 2026 - Zion Tech Group</title>
        <meta name="description" content="Revolutionary space technology solutions including satellite networks, space exploration, and interplanetary communication systems." />
        <meta name="keywords" content="space technology, satellite networks, space exploration, interplanetary communication, space tech 2026" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 ADVANCED SPACE TECH • 2026
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Next-Generation Space Technology
          </h1>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
            Pioneering the future of space exploration with cutting-edge technology and AI-powered systems
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore Space Solutions
            </button>
            <button className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-lg hover:bg-indigo-50 transition-colors font-semibold text-lg">
              Mission Planning
            </button>
          </div>
        </div>

        {/* Key Technologies Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-5xl mb-4 text-center">🛰️</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Satellite Constellation Networks</h3>
            <p className="text-gray-600 mb-6 text-center">
              Deploy and manage massive satellite constellations for global connectivity and Earth observation
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• 10,000+ satellite capacity</li>
              <li>• Global internet coverage</li>
              <li>• Real-time Earth monitoring</li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-5xl mb-4 text-center">🌌</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Interplanetary Communication</h3>
            <p className="text-gray-600 mb-6 text-center">
              Advanced communication systems enabling real-time data transmission across the solar system
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Quantum communication protocols</li>
              <li>• Mars-Earth data links</li>
              <li>• 99.9% transmission reliability</li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-5xl mb-4 text-center">🔬</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Space Manufacturing</h3>
            <p className="text-gray-600 mb-6 text-center">
              Zero-gravity manufacturing facilities producing advanced materials impossible to create on Earth
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Perfect crystal growth</li>
              <li>• Advanced alloy production</li>
              <li>• Pharmaceutical manufacturing</li>
            </ul>
          </div>
        </div>

        {/* Advanced Features Showcase */}
        <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-3xl p-12 mb-16 text-white">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Revolutionary Space Technologies</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Cutting-edge systems that are redefining space exploration and commercial space operations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-indigo-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-8 border border-indigo-400/30">
              <h3 className="text-2xl font-bold mb-4">🚀 Autonomous Space Vehicles</h3>
              <p className="text-indigo-100 mb-4">
                AI-powered spacecraft capable of independent navigation, maintenance, and mission execution
              </p>
              <div className="space-y-2 text-sm text-indigo-200">
                <div>• Self-healing spacecraft systems</div>
                <div>• Autonomous docking capabilities</div>
                <div>• Real-time mission adaptation</div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
              <h3 className="text-2xl font-bold mb-4">🌍 Earth Observation AI</h3>
              <p className="text-purple-100 mb-4">
                Advanced AI systems that analyze satellite data to predict weather, monitor climate, and track global changes
              </p>
              <div className="space-y-2 text-sm text-purple-200">
                <div>• Climate change monitoring</div>
                <div>• Disaster prediction systems</div>
                <div>• Agricultural optimization</div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Capabilities */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">Mission Capabilities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-3">🌙</div>
              <h3 className="text-lg font-bold mb-2">Lunar Operations</h3>
              <p className="text-sm text-gray-600">Moon base construction and resource extraction</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-3">🔴</div>
              <h3 className="text-lg font-bold mb-2">Mars Missions</h3>
              <p className="text-sm text-gray-600">Red planet exploration and colonization</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-3">☄️</div>
              <h3 className="text-lg font-bold mb-2">Asteroid Mining</h3>
              <p className="text-sm text-gray-600">Extract rare minerals from asteroids</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-3">🛸</div>
              <h3 className="text-lg font-bold mb-2">Deep Space</h3>
              <p className="text-sm text-gray-600">Interstellar exploration missions</p>
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 mb-16 text-white">
          <h2 className="text-4xl font-bold text-center mb-12">Space Technology Achievements</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-lg opacity-90">Satellites Deployed</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">99.9%</div>
              <div className="text-lg opacity-90">Mission Success Rate</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">24/7</div>
              <div className="text-lg opacity-90">Global Coverage</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">$2B+</div>
              <div className="text-lg opacity-90">Cost Savings</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 text-white">
          <h2 className="text-4xl font-bold mb-6">Launch Your Space Mission</h2>
          <p className="text-xl mb-8 opacity-90">
            Partner with us to explore the final frontier and unlock the potential of space
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg">
              Start Mission Planning
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-semibold text-lg">
              View Capabilities
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedSpaceTech2026;
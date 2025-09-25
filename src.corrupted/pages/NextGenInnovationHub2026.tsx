import React from 'react';

const NextGenInnovationHub2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-emerald-400 to-cyan-400 text-black rounded-full text-lg font-bold mb-6 animate-bounce">
            🌟 NEXT-GEN INNOVATION HUB 2026
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Innovation Without Limits
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Discover the most advanced innovation hub where cutting-edge technologies converge to create 
            solutions that push the boundaries of what's possible. Experience the future of innovation today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-emerald-600 to-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Explore Innovations →
            </button>
            <button className="border-2 border-emerald-400 text-emerald-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-emerald-400 hover:text-black transition-all duration-300">
              Join Community
            </button>
          </div>
        </div>

        {/* Innovation Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-gradient-to-br from-blue-800 to-indigo-800 p-6 rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="text-4xl mb-4">🧬</div>
            <h3 className="text-xl font-bold mb-3">Biotech Innovation</h3>
            <p className="text-gray-300 text-sm mb-4">
              Revolutionary biotechnology solutions that enhance human capabilities and extend life.
            </p>
            <div className="text-emerald-400 font-semibold text-sm">12 Projects</div>
          </div>

          <div className="bg-gradient-to-br from-purple-800 to-pink-800 p-6 rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="text-4xl mb-4">⚛️</div>
            <h3 className="text-xl font-bold mb-3">Quantum Computing</h3>
            <p className="text-gray-300 text-sm mb-4">
              Breakthrough quantum computing applications that solve impossible problems.
            </p>
            <div className="text-emerald-400 font-semibold text-sm">8 Projects</div>
          </div>

          <div className="bg-gradient-to-br from-green-800 to-emerald-800 p-6 rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="text-4xl mb-4">🌐</div>
            <h3 className="text-xl font-bold mb-3">IoT & Edge AI</h3>
            <p className="text-gray-300 text-sm mb-4">
              Smart connected devices and edge AI that make everything intelligent.
            </p>
            <div className="text-emerald-400 font-semibold text-sm">15 Projects</div>
          </div>

          <div className="bg-gradient-to-br from-orange-800 to-red-800 p-6 rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold mb-3">Space Technology</h3>
            <p className="text-gray-300 text-sm mb-4">
              Advanced space technologies for exploration and colonization.
            </p>
            <div className="text-emerald-400 font-semibold text-sm">6 Projects</div>
          </div>
        </div>

        {/* Featured Innovations */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Innovations</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <div className="text-5xl">🧠</div>
                <div>
                  <h3 className="text-2xl font-bold">Neural Interface Pro</h3>
                  <p className="text-gray-400">Direct brain-computer interface</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                Revolutionary neural interface technology that enables direct communication between 
                the human brain and computers, opening up new possibilities for human-computer interaction.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex space-x-4">
                  <span className="px-3 py-1 bg-emerald-600 text-white rounded-full text-sm">LIVE</span>
                  <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">BETA</span>
                </div>
                <button className="text-emerald-400 hover:text-emerald-300 font-semibold">Try Now →</button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <div className="text-5xl">🤖</div>
                <div>
                  <h3 className="text-2xl font-bold">Synthetic Intelligence</h3>
                  <p className="text-gray-400">Beyond human-level AI</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                Next-generation artificial intelligence that surpasses human cognitive abilities 
                in creativity, problem-solving, and emotional intelligence.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex space-x-4">
                  <span className="px-3 py-1 bg-purple-600 text-white rounded-full text-sm">COMING SOON</span>
                  <span className="px-3 py-1 bg-pink-600 text-white rounded-full text-sm">REVOLUTIONARY</span>
                </div>
                <button className="text-emerald-400 hover:text-emerald-300 font-semibold">Learn More →</button>
              </div>
            </div>
          </div>
        </div>

        {/* Innovation Stats */}
        <div className="bg-gradient-to-r from-emerald-800 to-cyan-800 rounded-2xl p-8 mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">Innovation Impact</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">500+</div>
              <div className="text-emerald-100">Active Projects</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">50+</div>
              <div className="text-emerald-100">Patents Filed</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">1000+</div>
              <div className="text-emerald-100">Innovators</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">$2B+</div>
              <div className="text-emerald-100">Value Created</div>
            </div>
          </div>
        </div>

        {/* Community Section */}
        <div className="text-center bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-12">
          <h2 className="text-4xl font-bold mb-6">Join the Innovation Community</h2>
          <p className="text-xl mb-8 text-gray-300">
            Connect with leading innovators, researchers, and entrepreneurs who are shaping the future. 
            Collaborate on groundbreaking projects and be part of the next technological revolution.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-emerald-600 to-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Join Community
            </button>
            <button className="border-2 border-emerald-400 text-emerald-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-emerald-400 hover:text-black transition-all duration-300">
              Submit Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenInnovationHub2026;
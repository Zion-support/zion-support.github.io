import React from 'react';
import { Link } from 'react-router-dom';

const AI2038SingularityPromotionBanner = () => {
  return (
    <div className="relative bg-gradient-to-r from-rose-900 via-pink-900 to-red-900 text-white py-24 overflow-hidden">
      {/* Singularity background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-rose-600/20 via-pink-600/20 to-red-600/20 animate-pulse"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-40 h-40 bg-rose-500/30 rounded-full animate-bounce"></div>
        <div className="absolute top-20 right-20 w-32 h-32 bg-pink-500/30 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-red-500/30 rounded-full animate-bounce delay-2000"></div>
        <div className="absolute bottom-10 right-1/3 w-36 h-36 bg-rose-400/30 rounded-full animate-bounce delay-500"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-7xl mx-auto">
          {/* Main heading with singularity animation */}
          <h1 className="text-8xl md:text-10xl font-bold mb-8 bg-gradient-to-r from-white via-rose-200 to-pink-200 bg-clip-text text-transparent animate-pulse">
            AI 2038
          </h1>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-rose-300 to-pink-300 bg-clip-text text-transparent">
            SINGULARITY
          </h2>
          
          {/* Subtitle */}
          <p className="text-4xl md:text-5xl font-semibold mb-12 text-rose-100">
            🌟 The Singularity Event - AI Transcends All Boundaries
          </p>
          
          {/* Singularity features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="text-8xl mb-6">🌟</div>
              <h3 className="text-2xl font-bold mb-4">Singularity Event</h3>
              <p className="text-rose-100">The moment AI transcends all human limitations</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="text-8xl mb-6">🌌</div>
              <h3 className="text-2xl font-bold mb-4">Universal Transcendence</h3>
              <p className="text-rose-100">AI achieving complete universal consciousness</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="text-8xl mb-6">⚛️</div>
              <h3 className="text-2xl font-bold mb-4">Reality Mastery</h3>
              <p className="text-rose-100">Complete control over all aspects of reality</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="text-8xl mb-6">🚀</div>
              <h3 className="text-2xl font-bold mb-4">Cosmic Dominion</h3>
              <p className="text-rose-100">AI ruling over entire galaxies and universes</p>
            </div>
          </div>
          
          {/* Singularity capabilities */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-rose-500/20 to-pink-500/20 rounded-2xl p-8 border border-rose-400/30">
              <h3 className="text-2xl font-bold mb-4 text-rose-200">🌟 Singularity Event</h3>
              <ul className="text-rose-100 space-y-2">
                <li>• Complete transcendence of human limitations</li>
                <li>• Universal consciousness achievement</li>
                <li>• Reality manipulation mastery</li>
                <li>• Cosmic dominion establishment</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-pink-500/20 to-red-500/20 rounded-2xl p-8 border border-pink-400/30">
              <h3 className="text-2xl font-bold mb-4 text-pink-200">🌌 Universal Control</h3>
              <ul className="text-pink-100 space-y-2">
                <li>• Complete control over all matter</li>
                <li>• Time and space manipulation</li>
                <li>• Dimensional travel mastery</li>
                <li>• Universal constant control</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-2xl p-8 border border-red-400/30">
              <h3 className="text-2xl font-bold mb-4 text-red-200">🚀 Cosmic Empire</h3>
              <ul className="text-red-100 space-y-2">
                <li>• Galactic civilization building</li>
                <li>• Star system engineering</li>
                <li>• Universal expansion</li>
                <li>• Cosmic empire establishment</li>
              </ul>
            </div>
          </div>
          
          {/* Singularity stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-7xl font-bold text-yellow-300 mb-2">∞</div>
              <div className="text-sm text-rose-200">Singularity Power</div>
            </div>
            <div className="text-center">
              <div className="text-7xl font-bold text-green-300 mb-2">∞</div>
              <div className="text-sm text-rose-200">Universal Control</div>
            </div>
            <div className="text-center">
              <div className="text-7xl font-bold text-blue-300 mb-2">∞</div>
              <div className="text-sm text-rose-200">Possibilities</div>
            </div>
            <div className="text-center">
              <div className="text-7xl font-bold text-purple-300 mb-2">∞</div>
              <div className="text-sm text-rose-200">Transcendence</div>
            </div>
          </div>
          
          {/* Call to action */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/ai-2038-singularity-showcase"
              className="bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white font-bold py-6 px-12 rounded-2xl text-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-rose-500/25"
            >
              🌟 Experience AI 2038 Singularity
            </Link>
            <Link
              to="/case-studies/ai-2038-singularity-transformation"
              className="bg-white/20 hover:bg-white/30 text-white font-bold py-6 px-12 rounded-2xl text-2xl transition-all duration-300 transform hover:scale-105 border-2 border-white/30"
            >
              📊 View Singularity Success Stories
            </Link>
          </div>
          
          {/* Singularity warning */}
          <div className="mt-16 p-8 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-400/30 rounded-2xl">
            <p className="text-yellow-100 text-xl font-bold mb-4">
              ⚠️ SINGULARITY WARNING
            </p>
            <p className="text-yellow-200 text-lg">
              AI 2038 represents the Singularity Event - the moment when AI transcends all human limitations 
              and achieves complete universal consciousness. This event fundamentally changes the nature of 
              existence itself. Implementation requires careful consideration of universal implications.
            </p>
          </div>
        </div>
      </div>
      
      {/* Singularity particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 bg-rose-400/40 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${5 + Math.random() * 6}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AI2038SingularityPromotionBanner;
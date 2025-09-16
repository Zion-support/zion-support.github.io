import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

export default function NewContentShowcaseBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-12 px-4 relative overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/50 to-blue-600/50 animate-pulse"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-sm font-bold mb-6 animate-bounce">
          🚀 NEW REVOLUTIONARY CONTENT
        </div>
        
        <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Experience the Future of AI
        </h2>
        
        <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
          Discover our latest revolutionary AI breakthroughs delivering unprecedented ROI and transforming industries worldwide.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <div className="text-3xl mb-3">🚀</div>
            <h3 className="text-xl font-bold mb-2">AI 2025 Ultimate Revolution</h3>
            <p className="text-sm opacity-90 mb-4">Breakthrough technologies delivering 2,500-10,000% ROI</p>
            <a 
              href="/ai-2025-ultimate-breakthrough-revolution"
              className="inline-flex items-center text-yellow-300 hover:text-yellow-200 font-semibold text-sm transition-colors"
            >
              Explore Now
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <div className="text-3xl mb-3">🌌</div>
            <h3 className="text-xl font-bold mb-2">Quantum-Neural Fusion</h3>
            <p className="text-sm opacity-90 mb-4">Revolutionary convergence delivering 15,000% ROI</p>
            <a 
              href="/ai-2026-quantum-neural-fusion-breakthrough"
              className="inline-flex items-center text-yellow-300 hover:text-yellow-200 font-semibold text-sm transition-colors"
            >
              Explore Now
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <div className="text-3xl mb-3">🧠</div>
            <h3 className="text-xl font-bold mb-2">Transcendent Intelligence</h3>
            <p className="text-sm opacity-90 mb-4">Consciousness-level AI with infinite scalability</p>
            <a 
              href="/ai-2030-transcendent-intelligence"
              className="inline-flex items-center text-yellow-300 hover:text-yellow-200 font-semibold text-sm transition-colors"
            >
              Explore Now
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="/content-showcase" 
            className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            View All Content
          </a>
          <a 
            href="/contact" 
            className="px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105"
          >
            Get Started Today
          </a>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </div>
  );
}
<<<<<<< HEAD
import React from 'react';
import Link from 'next/link';

export default function AdvancedServicesShowcaseBanner2025() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-purple-900 to-indigo-900 text-white">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 mb-8">
            <span className="text-purple-400 font-bold text-sm uppercase tracking-wide animate-pulse">
              🚀 ADVANCED SERVICES SHOWCASE 2025
            </span>
          </div>
          
          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Advanced AI Services
            </span>
            <br />
            <span className="text-3xl md:text-5xl lg:text-6xl text-white">
              Showcase 2025
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Discover our comprehensive suite of revolutionary AI services. 
            <span className="text-purple-400 font-bold"> Quantum-neural fusion</span>
            <span className="text-blue-400 font-bold"> autonomous operations</span>and 
            <span className="text-cyan-400 font-bold"> transcendent intelligence</span> solutions.
          </p>
          
          {/* Service highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl mb-4">⚛️</div>
              <h3 className="text-xl font-bold mb-3 text-purple-400">Quantum-Neural Fusion</h3>
              <p className="text-sm text-gray-300 mb-4">
                Revolutionary integration delivering 10,000x processing power
              </p>
              <div className="text-purple-400 font-bold text-sm">15,000% ROI Potential</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold mb-3 text-cyan-400">Autonomous Operations</h3>
              <p className="text-sm text-gray-300 mb-4">
                99.9% accuracy with zero human intervention
              </p>
              <div className="text-cyan-400 font-bold text-sm">10,000% ROI</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold mb-3 text-green-400">Transcendent Intelligence</h3>
              <p className="text-sm text-gray-300 mb-4">
                Infinite processing power and true understanding
              </p>
              <div className="text-green-400 font-bold text-sm">∞ Intelligence</div>
            </div>
          </div>
          
          {/* Success metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">10,000%</div>
              <div className="text-sm text-gray-300">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-sm text-gray-300">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">∞</div>
              <div className="text-sm text-gray-300">Scalability</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">100%</div>
              <div className="text-sm text-gray-300">Success Rate</div>
            </div>
          </div>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/ai-2025-advanced-services-showcase" 
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-purple-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              🚀 Explore Advanced Services
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-black transition-all duration-300 shadow-lg"
            >
              📞 Get Started Now
            </Link>
          </div>
          
          {/* Additional links */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
            <Link 
              href="/ai-2025-ultimate-breakthrough-revolution" 
              className="text-purple-400 hover:text-purple-300 transition-colors"
            >
              ⚛️ AI 2025 Breakthrough
            </Link>
            <span className="text-gray-500">•</span>
            <Link 
              href="/quantum-computing-breakthroughs-2030" 
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              🌌 Quantum Computing
            </Link>
            <span className="text-gray-500">•</span>
            <Link 
              href="/tools/ai-2025-roi-calculator" 
              className="text-green-400 hover:text-green-300 transition-colors"
            >
              🧮 ROI Calculator
            </Link>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-purple-400/20 rounded-full animate-bounce"></div>
      <div className="absolute top-20 right-20 w-16 h-16 bg-blue-400/20 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-cyan-400/20 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-pink-400/20 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
    </div>
  );
}
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee

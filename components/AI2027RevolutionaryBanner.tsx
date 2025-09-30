import React from 'react';
import Link from 'next/link';

export default function AI2027RevolutionaryBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 rounded-xl p-8 text-white mb-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-400 to-blue-400 transform rotate-12 scale-150"></div>
      </div>
      
      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold animate-pulse">
                🚀 NEW 2027
              </span>
              <span className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                REVOLUTIONARY AI
              </span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
              AI 2027 Revolutionary Solutions
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                — The Future is Here
              </span>
            </h2>
            
            <p className="text-lg text-gray-200 mb-6 max-w-2xl">
              Experience cutting-edge AI with neural interfaces, quantum computing, and autonomous operations. 
              Transform your business with next-generation AI solutions that deliver unprecedented results.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-yellow-400">$100M+</div>
                <div className="text-xs text-gray-300">Average ROI</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-green-400">95%</div>
                <div className="text-xs text-gray-300">Automation</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-blue-400">1000x</div>
                <div className="text-xs text-gray-300">Faster Processing</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-purple-400">99.9%</div>
                <div className="text-xs text-gray-300">Reliability</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/services/ai-2027-revolutionary-solutions"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-3 rounded-lg font-bold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 text-center"
              >
                Explore AI 2027 Solutions
              </Link>
              <Link 
                href="/blog/ai-2027-future-predictions"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-purple-900 transition-all duration-300 text-center"
              >
                Read Future Predictions
              </Link>
            </div>
          </div>
          
          <div className="flex-1 max-w-md">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-bold mb-4 text-center">Revolutionary Features</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    🧠
                  </div>
                  <span className="text-sm">Neural Interface Integration</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    ⚡
                  </div>
                  <span className="text-sm">Quantum AI Computing</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    🤖
                  </div>
                  <span className="text-sm">Autonomous Operations</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    🚀
                  </div>
                  <span className="text-sm">Space AI Operations</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-green-500/20 rounded-lg border border-green-400/30">
                <div className="text-center">
                  <div className="text-sm text-green-300 mb-1">Latest Success Story</div>
                  <div className="font-bold text-green-400">Fortune 500: $75M ROI</div>
                  <Link 
                    href="/case-studies/fortune-500-ai-transformation-2027"
                    className="text-xs text-green-300 hover:text-green-200 underline"
                  >
                    Read Case Study →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
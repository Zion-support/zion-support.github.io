import React from 'react';
import Link from 'next/link';

export default function UltraContentPromotionBanner2026() {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-purple-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-pink-500 rounded-full opacity-20 animate-pulse delay-2000"></div>
        <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-cyan-500 rounded-full opacity-20 animate-pulse delay-500"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
            🚀 ULTRA CONTENT DROP - JANUARY 2026
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Next-Generation AI Systems
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">
              Are Here
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-5xl mx-auto leading-relaxed">
            Discover the revolutionary AI technologies that will reshape industries in 2026. 
            From quantum-enhanced neural networks to autonomous AI agents, explore the future of artificial intelligence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Link
              href="/blog/ai-2026-next-generation-ai-systems"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl font-bold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 text-lg shadow-2xl transform hover:scale-105"
            >
              🧠 Explore Next-Gen AI
            </Link>
            <Link
              href="/case-studies/ai-transformation-global-retail-giant-2026"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-bold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 text-lg shadow-2xl transform hover:scale-105"
            >
              💰 $2.3B Success Story
            </Link>
            <Link
              href="/resources/ai-2026-implementation-master-guide"
              className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-xl font-bold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 text-lg shadow-2xl transform hover:scale-105"
            >
              📚 Master Guide 2026
            </Link>
          </div>
        </div>
        
        {/* Featured Content Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Link href="/blog/ai-2026-next-generation-ai-systems" className="group">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-2xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20 group-hover:border-opacity-40">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-300 transition-colors">
                Next-Generation AI Systems
              </h3>
              <p className="text-sm opacity-90 mb-4">
                Explore quantum-enhanced neural networks, autonomous AI agents, and neural interface technology that will define 2026.
              </p>
              <div className="flex items-center text-sm text-cyan-300 font-semibold">
                Read More →
              </div>
            </div>
          </Link>
          
          <Link href="/case-studies/ai-transformation-global-retail-giant-2026" className="group">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-2xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20 group-hover:border-opacity-40">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-purple-300 transition-colors">
                $2.3B Retail Transformation
              </h3>
              <p className="text-sm opacity-90 mb-4">
                How a Fortune 100 retail giant achieved 340% ROI through comprehensive AI transformation across 15,000+ stores.
              </p>
              <div className="flex items-center text-sm text-purple-300 font-semibold">
                View Case Study →
              </div>
            </div>
          </Link>
          
          <Link href="/resources/ai-2026-implementation-master-guide" className="group">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-2xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20 group-hover:border-opacity-40">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-green-300 transition-colors">
                Implementation Master Guide
              </h3>
              <p className="text-sm opacity-90 mb-4">
                The definitive 200+ page guide to implementing AI in 2026 with proven frameworks and real-world case studies.
              </p>
              <div className="flex items-center text-sm text-green-300 font-semibold">
                Download Guide →
              </div>
            </div>
          </Link>
        </div>
        
        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">200+</div>
            <div className="text-sm opacity-80">Pages of Content</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">340%</div>
            <div className="text-sm opacity-80">Average ROI</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">15,000+</div>
            <div className="text-sm opacity-80">Stores Transformed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">98%</div>
            <div className="text-sm opacity-80">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}
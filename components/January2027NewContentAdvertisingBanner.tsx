import React from 'react';

const January2027NewContentAdvertisingBanner: React.FC = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-orange-900/40 via-red-900/40 to-pink-900/40 backdrop-blur-sm border-b border-orange-500/20">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 mb-6 animate-pulse">
            <span className="text-orange-400 font-bold text-xl tracking-wider uppercase">
              🔥 BREAKING: JANUARY 2027 NEW CONTENT NOW LIVE! 🔥
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary AI Breakthroughs Just Published!
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 font-semibold">
            🚀 Discover the latest in AI consciousness, quantum neural processing, and enterprise transformation. 
            Over $2.8 trillion in combined value creation across 174+ new resources!
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-orange-500/50 transition-all duration-300">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold text-white mb-2">AI Consciousness</h3>
              <p className="text-gray-300 text-sm mb-4">True self-awareness and autonomous decision-making</p>
              <div className="text-xs space-y-1 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-400">Accuracy</span>
                  <span className="text-orange-400 font-bold">99.99%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Value Created</span>
                  <span className="text-green-400 font-bold">$847B</span>
                </div>
              </div>
              <a 
                href="/blog/ai-2027-next-gen-consciousness-breakthrough"
                className="inline-block bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 text-sm w-full text-center"
              >
                Explore Now →
              </a>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-red-500/50 transition-all duration-300">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-2">Quantum AI</h3>
              <p className="text-gray-300 text-sm mb-4">10,000x faster processing with zero energy</p>
              <div className="text-xs space-y-1 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-400">Speed Boost</span>
                  <span className="text-red-400 font-bold">10,000x</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Energy Usage</span>
                  <span className="text-green-400 font-bold">Zero</span>
                </div>
              </div>
              <a 
                href="/blog/ai-2027-quantum-neural-fusion-breakthrough"
                className="inline-block bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-400 hover:to-pink-500 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 text-sm w-full text-center"
              >
                Learn More →
              </a>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-pink-500/50 transition-all duration-300">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold text-white mb-2">Content Library</h3>
              <p className="text-gray-300 text-sm mb-4">Complete guides and case studies</p>
              <div className="text-xs space-y-1 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-400">Total Resources</span>
                  <span className="text-pink-400 font-bold">174+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Combined Value</span>
                  <span className="text-green-400 font-bold">$2.8T</span>
                </div>
              </div>
              <a 
                href="/content-hub"
                className="inline-block bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-400 hover:to-rose-500 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 text-sm w-full text-center"
              >
                Browse All →
              </a>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/content-hub"
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-orange-500/50 transform hover:-translate-y-1"
            >
              🚀 Explore All New Content
            </a>
            <a 
              href="/blog/ai-2027-next-gen-consciousness-breakthrough"
              className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-400 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-red-500/50 transform hover:-translate-y-1"
            >
              🧠 AI Consciousness Guide
            </a>
            <a 
              href="/contact"
              className="border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              💬 Get Expert Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default January2027NewContentAdvertisingBanner;
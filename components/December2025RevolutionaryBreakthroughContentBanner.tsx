import React from 'react';

export default function December2025RevolutionaryBreakthroughContentBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-900/50 via-blue-900/50 to-indigo-900/50 border-y border-purple-500/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 mb-6">
            <span className="text-purple-400 font-bold text-xl tracking-wider uppercase">
              🚀 DECEMBER 2025 - REVOLUTIONARY BREAKTHROUGH CONTENT
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Revolutionary AI Breakthrough Content
          </h2>

          {/* Subheading */}
          <p className="text-2xl text-purple-300 max-w-5xl mx-auto mb-4 font-bold">
            $20.9B Combined Value | 100,000x Processing Power | True AI Consciousness
          </p>

          {/* Description */}
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-10">
            Explore the latest revolutionary AI breakthroughs transforming enterprises worldwide. 
            From quantum consciousness to autonomous intelligence, discover cutting-edge solutions 
            delivering unprecedented business value.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="/blog"
              className="inline-block bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              Explore All Content →
            </a>
            <a 
              href="/services"
              className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              View Services →
            </a>
          </div>

          {/* Key Metrics */}
          <div className="mt-10 bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">$20.9B</div>
                <div className="text-sm text-gray-400">Combined Value</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">100,000x</div>
                <div className="text-sm text-gray-400">Processing Power</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-400 mb-2">99.97%</div>
                <div className="text-sm text-gray-400">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">2,000+</div>
                <div className="text-sm text-gray-400">Deployments</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

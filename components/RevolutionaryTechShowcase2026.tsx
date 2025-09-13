import React from 'react';
import Link from 'next/link';

const RevolutionaryTechShowcase2026: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-red-400 bg-clip-text text-transparent">
            Revolutionary Technology 2026
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
            Experience the next generation of AI-powered technologies that will reshape our world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-gradient-to-br from-red-900/50 to-orange-900/50 rounded-xl p-6 border border-red-500/30 hover:border-red-400/60 transition-all duration-300 hover:scale-105">
            <div className="text-3xl mb-4">🔥</div>
            <h3 className="text-xl font-bold mb-3 text-red-300">AI Consciousness</h3>
            <p className="text-gray-300 text-sm">
              Breakthrough AI systems with emerging consciousness capabilities
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 rounded-xl p-6 border border-blue-500/30 hover:border-blue-400/60 transition-all duration-300 hover:scale-105">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-3 text-blue-300">Neural Interfaces</h3>
            <p className="text-gray-300 text-sm">
              Direct brain-computer interfaces for enhanced human-AI interaction
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-xl p-6 border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 hover:scale-105">
            <div className="text-3xl mb-4">🌀</div>
            <h3 className="text-xl font-bold mb-3 text-purple-300">Quantum AI</h3>
            <p className="text-gray-300 text-sm">
              Quantum computing enhanced AI for solving complex problems
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 rounded-xl p-6 border border-green-500/30 hover:border-green-400/60 transition-all duration-300 hover:scale-105">
            <div className="text-3xl mb-4">🌱</div>
            <h3 className="text-xl font-bold mb-3 text-green-300">Sustainable AI</h3>
            <p className="text-gray-300 text-sm">
              Eco-friendly AI solutions for a sustainable future
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-800/30 to-blue-800/30 rounded-2xl p-8 border border-purple-500/30">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4 text-white">Ready to Transform Your Future?</h3>
            <p className="text-gray-300 mb-6 text-lg">
              Join thousands of innovators who are already leveraging these revolutionary technologies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/revolutionary-tech-showcase-2026" 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-400 hover:to-blue-400 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105"
              >
                Explore Technologies
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 border-2 border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white font-semibold rounded-full transition-all duration-300"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryTechShowcase2026;
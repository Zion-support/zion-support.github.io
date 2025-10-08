import React from 'react';
import Link from 'next/link';

const NewestContent2025Banner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-20">
      {/* Animated Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 mb-8">
            <span className="text-blue-300 text-sm font-medium">✨ New Content Available</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Revolutionary AI
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Breakthroughs 2025
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover the latest innovations in artificial intelligence, quantum computing, 
            and autonomous systems that are transforming enterprise operations worldwide.
          </p>

          {/* Featured Content Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Card 1: AI Edge Computing */}
            <div className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2">
              <div className="mb-4">
                <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/30 to-blue-500/30 text-cyan-200 text-sm font-bold border border-cyan-400/50">
                  Edge AI & Real-Time
                </span>
              </div>
              <h3 className='text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors'>
                AI Edge Computing Real-Time Intelligence 2025
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Deploy intelligence at the source with low latency. Achieve 95% bandwidth reduction, 
                87% cost savings, and enhanced privacy compliance at enterprise scale.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">&lt;10ms</div>
                  <div className="text-gray-400 text-sm">Latency</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">95%</div>
                  <div className="text-gray-400 text-sm">Bandwidth</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">87%</div>
                  <div className="text-gray-400 text-sm">Cost Save</div>
                </div>
              </div>
              <Link
                href="/blog/ai-edge-computing"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold"
              >
                Learn More →
              </Link>
            </div>

            {/* Card 2: Quantum Security */}
            <div className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2">
              <div className="mb-4">
                <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/30 to-pink-500/30 text-purple-200 text-sm font-bold border border-purple-400/50">
                  Quantum Security
                </span>
              </div>
              <h3 className='text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors'>
                Post-Quantum Cryptography Solutions
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Future-proof your infrastructure with quantum-resistant encryption. 
                Protect against quantum threats while maintaining performance.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">100%</div>
                  <div className="text-gray-400 text-sm">Protected</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-400">Zero</div>
                  <div className="text-gray-400 text-sm">Downtime</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">Fast</div>
                  <div className="text-gray-400 text-sm">Deploy</div>
                </div>
              </div>
              <Link
                href="/blog/quantum-security"
                className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold"
              >
                Learn More →
              </Link>
            </div>

            {/* Card 3: Autonomous Operations */}
            <div className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 hover:border-green-500/50 transition-all duration-300 hover:-translate-y-2">
              <div className="mb-4">
                <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-green-500/30 to-emerald-500/30 text-green-200 text-sm font-bold border border-green-400/50">
                  Autonomous AI
                </span>
              </div>
              <h3 className='text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors'>
                Self-Optimizing Enterprise Systems
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Enable continuous improvement with autonomous AI agents. 
                Reduce operational overhead by 70% while increasing efficiency.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">70%</div>
                  <div className="text-gray-400 text-sm">Less Ops</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-400">24/7</div>
                  <div className="text-gray-400 text-sm">Monitor</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">Auto</div>
                  <div className="text-gray-400 text-sm">Optimize</div>
                </div>
              </div>
              <Link
                href="/blog/autonomous-operations"
                className="inline-flex items-center text-green-400 hover:text-green-300 font-semibold"
              >
                Learn More →
              </Link>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12">
            <Link
              href="/blog"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
            >
              Explore All Content →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewestContent2025Banner;
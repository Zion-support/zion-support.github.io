import React from 'react';
import Link from 'next/link';

export default function Revolutionary2027ContentBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 text-white py-12 px-6 rounded-2xl mb-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-yellow-400/20 to-transparent rounded-full -translate-y-48 translate-x-48"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold mb-4">
            🚀 BREAKTHROUGH 2027
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Revolutionary AI Content
            <span className="block text-yellow-300">That Changes Everything</span>
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto">
            Discover the most advanced AI breakthroughs of 2027: Quantum Neural Networks, 
            Autonomous Enterprise Systems, and Cognitive Computing that deliver unprecedented results.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl md:text-3xl font-bold text-yellow-300">99.7%</div>
            <div className="text-sm opacity-90">AI Accuracy</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl md:text-3xl font-bold text-yellow-300">10,000x</div>
            <div className="text-sm opacity-90">Speed Boost</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl md:text-3xl font-bold text-yellow-300">$500M+</div>
            <div className="text-sm opacity-90">Proven ROI</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl md:text-3xl font-bold text-yellow-300">95%</div>
            <div className="text-sm opacity-90">Automation</div>
          </div>
        </div>

        {/* Featured Content Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Blog Post */}
          <Link 
            href="/blog/ai-2027-revolutionary-breakthroughs" 
            className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20"
          >
            <div className="flex items-start gap-4">
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 text-black p-3 rounded-lg text-2xl">
                🚀
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">NEW</span>
                  <span className="text-yellow-300 text-sm font-semibold">Blog Post</span>
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-yellow-300 transition-colors">
                  AI 2027 Revolutionary Breakthroughs
                </h3>
                <p className="text-sm opacity-90 mb-3">
                  Discover the groundbreaking AI innovations that will reshape enterprise operations and unlock unprecedented business value.
                </p>
                <div className="flex items-center gap-4 text-xs opacity-75">
                  <span>12 min read</span>
                  <span>2.3K views</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Case Study */}
          <Link 
            href="/case-studies/ai-quantum-neural-networks-mega-success-2027" 
            className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20"
          >
            <div className="flex items-start gap-4">
              <div className="bg-gradient-to-br from-green-400 to-blue-500 text-white p-3 rounded-lg text-2xl">
                🏆
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold">MEGA SUCCESS</span>
                  <span className="text-yellow-300 text-sm font-semibold">Case Study</span>
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-yellow-300 transition-colors">
                  Quantum Neural Networks: $500M ROI
                </h3>
                <p className="text-sm opacity-90 mb-3">
                  How a Fortune 500 company achieved unprecedented success with quantum neural networks implementation.
                </p>
                <div className="flex items-center gap-4 text-xs opacity-75">
                  <span>18 min read</span>
                  <span>4.2K views</span>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Additional Content Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Link 
            href="/blog/ai-quantum-neural-networks-2027" 
            className="group bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-all duration-300 border border-white/10"
          >
            <div className="flex items-center gap-3">
              <div className="text-2xl">⚛️</div>
              <div>
                <h4 className="font-semibold group-hover:text-yellow-300 transition-colors">Quantum Neural Networks</h4>
                <p className="text-sm opacity-75">The Ultimate AI Breakthrough</p>
              </div>
            </div>
          </Link>

          <Link 
            href="/blog/ai-autonomous-enterprise-operations-2027" 
            className="group bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-all duration-300 border border-white/10"
          >
            <div className="flex items-center gap-3">
              <div className="text-2xl">🏢</div>
              <div>
                <h4 className="font-semibold group-hover:text-yellow-300 transition-colors">Autonomous Enterprise</h4>
                <p className="text-sm opacity-75">Self-Managing Systems</p>
              </div>
            </div>
          </Link>

          <Link 
            href="/case-studies/ai-2027-transformation-mega-success" 
            className="group bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-all duration-300 border border-white/10"
          >
            <div className="flex items-center gap-3">
              <div className="text-2xl">📈</div>
              <div>
                <h4 className="font-semibold group-hover:text-yellow-300 transition-colors">$1B+ Transformation</h4>
                <p className="text-sm opacity-75">Mega Success Story</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/blog" 
              className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-lg font-bold transition-colors shadow-lg hover:shadow-xl"
            >
              Explore All 2027 Content
            </Link>
            <Link 
              href="/case-studies" 
              className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-lg font-semibold transition-colors border border-white/30"
            >
              View Success Stories
            </Link>
          </div>
          <p className="text-sm opacity-75 mt-4">
            Join 10,000+ enterprise leaders who are already transforming their businesses with 2027 AI breakthroughs
          </p>
        </div>
      </div>
    </div>
  );
}
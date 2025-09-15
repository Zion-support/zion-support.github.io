import React from 'react';
import Link from 'next/link';

const AdvancedAI2025BreakthroughBanner: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-violet-900 via-purple-900 to-fuchsia-900 text-white">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-violet-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-60 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Advanced AI Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-violet-400 to-purple-500 rounded-full px-6 py-3 mb-8 shadow-lg">
            <span className="text-lg font-bold text-white">🧠 ADVANCED AI 2025 BREAKTHROUGH</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            <span className="bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-600 bg-clip-text text-transparent">
              ADVANCED AI
            </span>
            <br />
            <span className="text-white">BREAKTHROUGH</span>
            <br />
            <span className="bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text text-transparent">
              TECHNOLOGY
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-90">
            Experience the future of artificial intelligence with our <span className="font-bold text-violet-400">Advanced AI 2025 Breakthrough Technology</span>. 
            Achieve unprecedented <span className="font-bold text-pink-400">25,000% ROI</span> through cutting-edge neural networks and quantum-enhanced processing.
          </p>

          {/* Key Breakthroughs */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 max-w-6xl mx-auto">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-4xl mb-4">🧬</div>
              <h3 className="text-lg font-bold mb-2">Neural Evolution</h3>
              <p className="text-sm opacity-90">Self-evolving AI systems that adapt and improve continuously</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-4xl mb-4">🌌</div>
              <h3 className="text-lg font-bold mb-2">Quantum Neural</h3>
              <p className="text-sm opacity-90">Quantum-enhanced neural networks with infinite processing power</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-4xl mb-4">🔮</div>
              <h3 className="text-lg font-bold mb-2">Predictive AI</h3>
              <p className="text-sm opacity-90">AI that predicts future events with 99.9% accuracy</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-lg font-bold mb-2">Lightning Speed</h3>
              <p className="text-sm opacity-90">Process complex data in nanoseconds with quantum acceleration</p>
            </div>
          </div>

          {/* ROI Highlight */}
          <div className="bg-gradient-to-r from-pink-500 to-rose-600 rounded-2xl p-8 mb-12 max-w-3xl mx-auto shadow-2xl">
            <div className="text-6xl font-black mb-4">25,000%</div>
            <div className="text-2xl font-bold mb-2">DOCUMENTED ROI</div>
            <div className="text-lg opacity-90">For Advanced AI 2025 Implementations</div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Link
              href="/services/advanced-ai-2025"
              className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              🚀 Get Advanced AI
            </Link>
            <Link
              href="/contact"
              className="bg-white bg-opacity-20 backdrop-blur-sm border-2 border-white border-opacity-30 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:bg-opacity-30"
            >
              💡 Schedule Demo
            </Link>
            <Link
              href="/case-studies/advanced-ai-2025"
              className="bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              📊 View Results
            </Link>
          </div>

          {/* Technology Showcase */}
          <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-2xl p-8 max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">Revolutionary AI Technologies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-3">🤖</div>
                <h4 className="text-lg font-bold mb-2">Autonomous AI Agents</h4>
                <p className="text-sm opacity-90">Self-managing AI systems that operate independently</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🧠</div>
                <h4 className="text-lg font-bold mb-2">Neural Interface</h4>
                <p className="text-sm opacity-90">Direct human-AI communication through neural links</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">⚛️</div>
                <h4 className="text-lg font-bold mb-2">Quantum Processing</h4>
                <p className="text-sm opacity-90">Quantum computing power for infinite scalability</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🔮</div>
                <h4 className="text-lg font-bold mb-2">Predictive Analytics</h4>
                <p className="text-sm opacity-90">Future prediction with unprecedented accuracy</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🌟</div>
                <h4 className="text-lg font-bold mb-2">Synthetic Intelligence</h4>
                <p className="text-sm opacity-90">AI that surpasses human cognitive capabilities</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">⚡</div>
                <h4 className="text-lg font-bold mb-2">Real-time Processing</h4>
                <p className="text-sm opacity-90">Instantaneous data processing and decision making</p>
              </div>
            </div>
          </div>

          {/* Urgency Message */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center bg-red-600 bg-opacity-20 border border-red-500 border-opacity-30 rounded-full px-6 py-3">
              <span className="text-red-400 font-bold text-sm">
                ⚠️ LIMITED TIME: Advanced AI 2025 Early Access Closing Soon
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating quantum particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-violet-400 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-ping delay-500"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-fuchsia-400 rounded-full animate-ping delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-pink-400 rounded-full animate-ping delay-1500"></div>
      </div>
    </section>
  );
};

export default AdvancedAI2025BreakthroughBanner;